import { ReactNode } from 'react';

import './globals.css';
import { Metadata } from 'next';

import { Profile } from '@shrugman/components/layout';
import { DarkModeProvider, ThemeProvider } from '@shrugman/components/theme';

export const metadata: Metadata = {
  metadataBase: new URL('https://shrugman.com'),
  title: 'Shrug Man | Copy the shrug man emoji',
  description:
    'Copy the shrug man! ¯\\_(ツ)_/¯ Click to copy the shrug emoji. Shrugging through life, one copy-paste at a time.',
  keywords: [
    'shrug man',
    'shrug person',
    'shrug emoji',
    'shruggie',
    'shrugging',
    'shrug',
    'copy shrug',
    'copy-paste',
    'copy emoji',
    'copy shrug emoji',
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

export const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <DarkModeProvider>
            <ThemeProvider>
              <Profile>{children}</Profile>
            </ThemeProvider>
          </DarkModeProvider>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
