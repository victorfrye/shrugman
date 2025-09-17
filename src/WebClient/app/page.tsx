'use client';

import { KeyboardEvent, useCallback, useState } from 'react';

import {
  Button,
  Card,
  Display,
  SelectTabEventHandler,
  Tab,
  TabList,
  TabValue,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import { ClipboardRegular } from '@fluentui/react-icons';

import AppText from '@shrugman/text';

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${tokens.spacingVerticalNone} ${tokens.spacingHorizontalL}`,
    margin: 'auto',
  },
  tabs: {
    margin: `${tokens.spacingVerticalNone} ${tokens.spacingHorizontalNone} ${tokens.spacingVerticalL}`,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: `${tokens.spacingVerticalXXXL}`,
  },
  text: {
    margin: `${tokens.spacingVerticalMNudge}`,
    '@media screen and (max-width: 576px)': {
      fontSize: tokens.fontSizeHero900,
      lineHeight: tokens.lineHeightHero900,
    },
  },
});

const asciiShrugMan = '¯\\_(ツ)_/¯';
const escapedShrugMan = '¯\\\\_(ツ)_/¯';

export default function HomePage() {
  const styles = useStyles();

  const [selectedValue, setSelectedValue] = useState<TabValue>('common');

  const shrugMan = selectedValue === 'common' ? asciiShrugMan : escapedShrugMan;

  const handleTabSelected: SelectTabEventHandler = (_event, data) => {
    setSelectedValue(data.value);
  };

  const setClipboard = useCallback(
    () => navigator.clipboard.writeText(shrugMan),
    [shrugMan]
  );

  const handleCardActionClicked = useCallback(() => {
    setClipboard();
  }, [setClipboard]);

  const handleCardActionKeyDowned = useCallback(
    (event: KeyboardEvent<HTMLDivElement>): void => {
      if (event.key === 'Enter' || event.key === ' ') {
        handleCardActionClicked();
      }
    },
    [handleCardActionClicked]
  );

  return (
    <main className={styles.main}>
      <TabList
        selectedValue={selectedValue}
        onTabSelect={handleTabSelected}
        selectTabOnFocus
        appearance="subtle"
        size="large"
        className={styles.tabs}
      >
        <Tab id="Common" value="common">
          {AppText.options.common}
        </Tab>
        <Tab id="Escaped" value="escaped">
          {AppText.options.escaped}
        </Tab>
      </TabList>

      <Card
        onClick={handleCardActionClicked}
        onKeyDown={handleCardActionKeyDowned}
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
          {AppText.buttons.copy}
        </Button>
      </Card>
    </main>
  );
}
