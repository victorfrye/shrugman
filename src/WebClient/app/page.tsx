'use client';

import { useCallback } from 'react';

import {
  Button,
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
  text: {
    margin: `${tokens.spacingVerticalMNudge}`,
  },
});

const shrugMan = '¯\\_(ツ)_/¯';

const HomePage = () => {
  const styles = useStyles();

  const setClipboard = useCallback(
    () => navigator.clipboard.writeText(shrugMan),
    []
  );

  return (
    <main className={styles.main}>
      <Display as="p" block className={styles.text}>
        {shrugMan}
      </Display>
      <Button as="button" icon={<ClipboardRegular />} onClick={setClipboard}>
        Click to Copy
      </Button>
    </main>
  );
};

export default HomePage;
