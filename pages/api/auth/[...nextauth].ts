import NextAuth from 'next-auth';
import EVEOnlineProvider from 'next-auth/providers/eveonline';

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    EVEOnlineProvider({
      clientId: process.env.EVE_CLIENT_ID!,
      clientSecret: process.env.EVE_CLIENT_SECRET!,
      authorization: {
        url: 'https://login.eveonline.com/v2/oauth/authorize',
        params: {
          scope: [
            //'publicData', // irrelevant
            'esi-calendar.respond_calendar_events.v1',
            'esi-calendar.read_calendar_events.v1',
            'esi-location.read_location.v1',
            'esi-location.read_ship_type.v1',
            'esi-mail.organize_mail.v1',
            'esi-mail.read_mail.v1',
            'esi-mail.send_mail.v1',
            'esi-skills.read_skills.v1',
            'esi-skills.read_skillqueue.v1',
            'esi-wallet.read_character_wallet.v1',
            //'esi-wallet.read_corporation_wallet.v1', // invalid
            'esi-search.search_structures.v1',
            'esi-clones.read_clones.v1',
            'esi-characters.read_contacts.v1',
            'esi-universe.read_structures.v1',
            //'esi-bookmarks.read_character_bookmarks.v1', // bookmarks api doesnt work
            'esi-killmails.read_killmails.v1',
            'esi-corporations.read_corporation_membership.v1',
            'esi-assets.read_assets.v1',
            'esi-planets.manage_planets.v1',
            'esi-fleets.read_fleet.v1',
            'esi-fleets.write_fleet.v1',
            'esi-ui.open_window.v1',
            'esi-ui.write_waypoint.v1',
            'esi-characters.write_contacts.v1',
            'esi-fittings.read_fittings.v1',
            'esi-fittings.write_fittings.v1',
            'esi-markets.structure_markets.v1',
            'esi-corporations.read_structures.v1',
            'esi-characters.read_loyalty.v1',
            'esi-characters.read_opportunities.v1',
            //'esi-characters.read_chat_channels.v1', // there is no chat api
            'esi-characters.read_medals.v1',
            'esi-characters.read_standings.v1',
            'esi-characters.read_agents_research.v1',
            'esi-industry.read_character_jobs.v1',
            'esi-markets.read_character_orders.v1',
            'esi-characters.read_blueprints.v1',
            'esi-characters.read_corporation_roles.v1',
            'esi-location.read_online.v1',
            'esi-contracts.read_character_contracts.v1',
            'esi-clones.read_implants.v1',
            'esi-characters.read_fatigue.v1',
            'esi-killmails.read_corporation_killmails.v1',
            'esi-corporations.track_members.v1',
            'esi-wallet.read_corporation_wallets.v1',
            'esi-characters.read_notifications.v1',
            'esi-corporations.read_divisions.v1',
            'esi-corporations.read_contacts.v1',
            'esi-assets.read_corporation_assets.v1',
            'esi-corporations.read_titles.v1',
            'esi-corporations.read_blueprints.v1',
            //'esi-bookmarks.read_corporation_bookmarks.v1', // bookmarks api doesnt work
            'esi-contracts.read_corporation_contracts.v1',
            'esi-corporations.read_standings.v1',
            'esi-corporations.read_starbases.v1',
            'esi-industry.read_corporation_jobs.v1',
            'esi-markets.read_corporation_orders.v1',
            'esi-corporations.read_container_logs.v1',
            'esi-industry.read_character_mining.v1',
            'esi-industry.read_corporation_mining.v1',
            'esi-planets.read_customs_offices.v1',
            'esi-corporations.read_facilities.v1',
            'esi-corporations.read_medals.v1',
            'esi-characters.read_titles.v1',
            'esi-alliances.read_contacts.v1',
            'esi-characters.read_fw_stats.v1',
            'esi-corporations.read_fw_stats.v1',
            'esi-characterstats.read.v1',
          ].join(' '),
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      (session as any).characterId = token.sub;
      (session as any).accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account }) {
      // Initial sign in
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: account.expires_at! * 1000,
          refreshToken: account.refresh_token,
          ...token,
        };
      }

      //console.log('token ttl', (<number>token.accessTokenExpires - Date.now()) / 1000);

      // return previous token if the access token has not expired yet
      if (Date.now() < <number>token.accessTokenExpires) {
        return token;
      }

      // access token has expired, try to refresh it
      try {
        const url = 'https://login.eveonline.com/v2/oauth/token';

        // Base64 encode the client ID and secret
        const headerString = `${process.env.EVE_CLIENT_ID}:${process.env.EVE_CLIENT_SECRET}`;
        const buff = Buffer.from(headerString, 'utf-8');
        const authHeader = buff.toString('base64');

        const refreshedTokensResponse = await fetch(url, {
          method: 'POST',
          body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: token.refreshToken as string,
          }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${authHeader}`,
            Host: 'login.eveonline.com',
          },
        });

        const refreshedTokens = await refreshedTokensResponse.json();

        if (!refreshedTokensResponse.ok) {
          throw refreshedTokens;
        }

        return {
          ...token,
          accessToken: refreshedTokens.access_token,
          accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
          refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // fall back to old refresh token
        };
      } catch (e) {
        console.error('error refreshing access token', e);
        return {
          ...token,
          error: 'RefreshAccessTokenError',
        };
      }
    },
  },
});
