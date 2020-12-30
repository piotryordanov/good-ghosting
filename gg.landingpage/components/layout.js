import React from 'react';
import Nav from './nav';
import Head from 'next/head';
import CookieConsent from 'react-cookie-consent';


export default (props) => (
  <div className="background bg-white font-paragraph text-2xl font-normal">
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>"></link>
      <title>GoodGhosting</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
      <link
        href="https://unpkg.com/@blueprintjs/core@^3.0.0/lib/css/blueprint.css"
        rel="stylesheet"
      />

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175599074-2"></script>
      <script dangerouslySetInnerHTML={{__html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-175599074-2');`}} />
      <link
        href="https://unpkg.com/@blueprintjs/icons@^3.0.0/lib/css/blueprint-icons.css"
        rel="stylesheet"
      />
    </Head>
    <Nav/>
    <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>

    {props.children}
  </div>
);
