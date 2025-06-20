import { ReactNode } from 'react';

import { Metadata } from 'next';

import Frame from '@shrugman/frame';
import '@shrugman/globals.css';
import { DarkModeProvider, ThemeProvider } from '@shrugman/theme';

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
  icons: ['images/man_shrugging.svg'],
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
      <body>
        <div id="root">
          <DarkModeProvider>
            <ThemeProvider>
              <Frame>{children}</Frame>
            </ThemeProvider>
          </DarkModeProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
