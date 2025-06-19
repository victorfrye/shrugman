'use client';

import { KeyboardEvent, useCallback } from 'react';

import {
  Button,
  Card,
  Display,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ClipboardRegular } from '@fluentui/react-icons';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${tokens.spacingVerticalNone} ${tokens.spacingHorizontalL}`,
    margin: 'auto',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: `${tokens.spacingVerticalMNudge}`,
  },
});

const shrugMan = '¯\\_(ツ)_/¯';

export default function HomePage() {
  const styles = useStyles();

  const setClipboard = useCallback(
    () => navigator.clipboard.writeText(shrugMan),
    []
  );

  const onCardActionClick = useCallback(() => {
    setClipboard();
  }, [setClipboard]);

  const onCardActionKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        onCardActionClick();
      }
    },
    [onCardActionClick]
  );

  return (
    <main className={styles.main}>
      <Card
        onClick={onCardActionClick}
        onKeyDown={onCardActionKeyDown}
        appearance="filled-alternative"
        className={styles.card}
      >
        <Display as="p" block className={styles.text}>
          {shrugMan}
        </Display>
        <Button
          as="button"
          icon={<ClipboardRegular />}
          appearance="primary"
          onClick={setClipboard}
        >
          Click to Copy
        </Button>
      </Card>
    </main>
  );
}
