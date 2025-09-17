import { ReactNode } from 'react';

import { Metadata } from 'next';

import { ClarityTag, Gtag } from '@shrugman/analytics';
import '@shrugman/globals.css';
import ProviderTree from '@shrugman/provider-tree';
import { Shell } from '@shrugman/shell';

export const metadata: Metadata = {
  metadataBase: new URL('https://shrugman.com'),
  title: 'Shrug Man | Copy the shrug man emoji',
  description:
    'Copy the shrug man! ¯\\_(ツ)_/¯ Click to copy the shrug emoji. Shrugging through life, one copy-paste at a time.',
  keywords: [
    'shrug man',
    'shrug emoji',
    'shruggie',
    'copy paste emoji',
    'text emoticon',
    'ascii art',
    'kaomoji',
    '¯\\_(ツ)_/¯',
  ],
  icons: ['assets/man_shrugging.svg'],
  authors: {
    name: 'Victor Frye',
    url: 'https://victorfrye.com/',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Shrug Man',
    description: '¯\\_(ツ)_/¯',
    siteName: 'Shrug Man',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
  return (
    <html lang="en">
      <Gtag tagId="G-4V2RXRC8ZE" />
      <ClarityTag projectId="tcanqydbis" />

      <body>
        <div id="root">
          <ProviderTree>
            <Shell>{children}</Shell>
          </ProviderTree>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
