/**
 * @module Head This module implements the functionality and the HTML of head
 */
import React from 'react';

export const Head = () => {
    return(
        <head>
            <title>CHUNKED POC</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet'></link>
            <link rel="stylesheet" href="/client.css" />
            <link rel="dns-prefetch" href="http://placeimg.com/" />
            <link rel="preconnect" href="http://placeimg.com/" />
            <link rel="preload" href="/images/sale.jpg" as="image"/>
        </head>
    );
}