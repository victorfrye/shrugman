'use client';

import { ReactNode } from 'react';

import { Card, makeStyles, tokens } from '@fluentui/react-components';

import { CookieBanner } from '@shrugman/privacy';
import Footer from '@shrugman/shell/footer';
import Header from '@shrugman/shell/header';

const useStyles = makeStyles({
  shell: {
    display: 'flex',
    minHeight: 'calc(100vh - (var(--spacingVerticalXXXL) * 2))',
    '@media screen and (max-width: 576px)': {
      minHeight: '100vh',
      padding: tokens.spacingVerticalNone,
    },
    padding: tokens.spacingVerticalXXXL,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxShadow: tokens.shadow64,
    padding: tokens.spacingVerticalL,
  },
});

interface ShellProps {
  children: ReactNode;
}

export default function Shell({ children }: ShellProps) {
  const styles = useStyles();

  return (
    <div className={styles.shell}>
      <Card className={styles.card}>
        <Header />
        {children}
        <Footer />
      </Card>

      <CookieBanner />
    </div>
  );
}
