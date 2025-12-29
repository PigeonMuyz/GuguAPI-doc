import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';

const config: DocsThemeConfig = {
    logo: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
                src={process.env.NODE_ENV === 'production' ? '/GuguAPI-doc/logo.svg' : '/logo.svg'}
                alt="GuguAPI Logo"
                width={32}
                height={32}
                style={{ borderRadius: '4px' }}
            />
            <span style={{ fontWeight: 700, fontSize: '1.2em' }}>GuguAPI</span>
        </div>
    ),
    project: {
        link: 'https://github.com/PigeonMuyz/GuguAPI-doc',
    },
    docsRepositoryBase: 'https://github.com/PigeonMuyz/GuguAPI-doc/tree/main',
    footer: {
        text: (
            <span>
                GuguAPI {new Date().getFullYear()} © Powered by{' '}
                <a href="https://github.com/PigeonMuyz/GuguAPI-doc" target="_blank">
                    Sub2API
                </a>
                .
            </span>
        ),
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="GuguAPI Documentation" />
            <meta property="og:description" content="GuguAPI Documentation - Powered by Sub2API" />
            <link
                rel="icon"
                href={process.env.NODE_ENV === 'production' ? '/GuguAPI-doc/logo.svg' : '/logo.svg'}
                type="image/svg+xml"
            />
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s – GuguAPI',
        };
    },
    sidebar: {
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    toc: {
        float: true,
    },
    primaryHue: 212,
    primarySaturation: 90,
};

export default config;
