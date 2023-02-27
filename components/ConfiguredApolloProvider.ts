/* START Apollo Client stuff - move to separate file later */
import { ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getSession } from 'next-auth/react';

const API_BASE_URL = '/api/graphql';

const httpLink = createHttpLink({
    uri: `${API_BASE_URL}`,
});

const authLink = setContext(async (_, { headers }) => {
    const session: any = await getSession();
    return {
        headers: {
            ...headers,
            authorization: session?.accessToken ? `Bearer ${session?.accessToken}` : undefined,
        },
    };
});
/* END Apollo Client stuff - move to separate file later */

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'ignore',
            pollInterval: 1000,
        },
    },
});

export default client;
