import React, { ReactElement } from 'react';
import { Title, Text, List, Anchor } from '@mantine/core';
import NavbarLayout from '../layouts/NavbarLayout';

const AboutPage = () => (
  <>
    <Title order={1}>About</Title>
    <Text mt="sm">
      This website is currently just an ugly front-end for a hopefully more exciting back-end: a
      unified GraphQL API for EVE Online, consolidating information from many places, with more
      planned:
    </Text>
    <List mt="sm">
      <li>
        <Anchor href="https://esi.evetech.net">EVE Swagger Interface (ESI)</Anchor>, by{' '}
        <Anchor href="https://ccpgames.com">CCP Games</Anchor>
      </li>
      <li>
        <Anchor href="https://developers.eveonline.com/resource">
          EVE Static Data Export (SDE)
        </Anchor>
        , by <Anchor href="https://ccpgames.com">CCP Games</Anchor>
      </li>
      <li>
        <Anchor href="https://developers.eveonline.com/resource">
          EVE Image Export Collection (IEC)
        </Anchor>
        , by <Anchor href="https://ccpgames.com">CCP Games</Anchor>
      </li>
      <li>
        <Anchor href="https://docs.esi.evetech.net/docs/image_server.html">
          EVE Image Service
        </Anchor>
        , by <Anchor href="https://ccpgames.com">CCP Games</Anchor>
      </li>
      <li>
        <Anchor href="http://sde.zzeve.com">SDE2JSON conversion</Anchor>, by{' '}
        <Anchor href="https://github.com/cvweiss">cvweiss</Anchor>
      </li>
      <li>
        <Anchor href="https://sde.hoboleaks.space">Hoboleaks SDE Expansion</Anchor>, by{' '}
        <Anchor href="https://github.com/Inomares">Inomares</Anchor>
      </li>
    </List>
    <Text mt="sm">A big thanks to all of them for an amazing work!</Text>
    <Text mt="sm">
      Please note this website/API is currently under active development, with many breaking changes
      every week — use at your own risk!
    </Text>
    <Title order={2} mt="xl">
      Contact
    </Title>
    <Text mt="sm">
      <Anchor href="/character/401563624" color="gradient">
        Feel free to contact Joao Neto in-game!
      </Anchor>
    </Text>
    <Title order={2} mt="xl">
      Privacy Policy
    </Title>
    <List mt="sm">
      <li>
        We collect the usual (IP, Browser, URL, date) information provided by the webserver logs.
      </li>
      <li>
        We use Google Analytics to provide an in-depth analysis on current live and monthly usage
      </li>
      <li>
        We may use cookies to provide the best user experience possible. Not only for login, but
        also for storing your navigation settings more. Google Analytics also uses cookies to track
        and identify users.
      </li>
    </List>
    <Text mt="sm">
      <Anchor href="/privacy">The full privacy policy according to GDPR can be found here.</Anchor>
    </Text>
    <Title id="legal" order={2} mt="xl">
      Legal Notice
    </Title>
    <Text mt="sm">
      EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved
      worldwide. All other trademarks are the property of their respective owners. EVE Online, the
      EVE logo, EVE and all associated logos and designs are the intellectual property of CCP hf.
      All artwork, screenshots, characters, vehicles, storylines, world facts or other recognizable
      features of the intellectual property relating to these trademarks are likewise the
      intellectual property of CCP hf. CCP hf. has granted permission to JitaSpace to use EVE Online
      and all associated logos and designs for promotional and information purposes on its website
      but does not endorse, and is not in any way affiliated with, JitaSpace. CCP is in no way
      responsible for the content on or functioning of this website, nor can it be liable for any
      damage arising from the use of this website.
    </Text>
  </>
);

AboutPage.getLayout = (page: ReactElement) => <NavbarLayout>{page}</NavbarLayout>;

export default AboutPage;
