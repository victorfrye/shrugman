import { JSX, useCallback } from 'react';

import { Button, Image, makeStyles, tokens } from '@fluentui/react-components';

import { useDarkMode } from '@shrugman/theme';

interface Social {
  href: string;
  styles?: string;
  image: JSX.Element;
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: tokens.spacingVerticalSNudge,
  },
  brand: {
    ':hover': {
      backgroundColor: tokens.colorBrandBackground2Hover,
    },
    ':hover:active': {
      backgroundColor: tokens.colorBrandBackground2Pressed,
    },
  },
  neutral: {
    ':hover': {
      backgroundColor: tokens.colorNeutralBackground4Hover,
    },
    ':hover:active': {
      backgroundColor: tokens.colorNeutralBackground4Pressed,
    },
  },
  blue: {
    ':hover': {
      backgroundColor: tokens.colorPaletteBlueBackground2,
    },
    ':hover:active': {
      backgroundColor: tokens.colorPaletteRoyalBlueBackground2,
    },
  },
});

export default function Socials() {
  const styles = useStyles();
  const { isDark } = useDarkMode();

  const getSocials = useCallback((): Social[] => {
    return [
      {
        href: 'https://github.com/victorfrye/shrugman',
        styles: styles.neutral,
        image: (
          <Image
            src={isDark ? '/images/github.svg' : '/images/github_dark.svg'}
            alt="GitHub"
            height={20}
            width={20}
          />
        ),
      },
      {
        href: 'https://bsky.app/profile/shrugman.com',
        styles: styles.blue,
        image: (
          <Image
            src={isDark ? '/images/bluesky.svg' : '/images/bluesky_dark.svg'}
            alt="Bluesky"
            height={20}
            width={20}
          />
        ),
      },
    ];
  }, [isDark, styles]);

  const renderButtons = (): JSX.Element[] => {
    return getSocials().map((social) => (
      <Button
        className={social.styles}
        icon={social.image}
        as="a"
        appearance="subtle"
        shape="circular"
        size="large"
        href={social.href}
        target="_blank"
        rel="me noreferrer noopener"
        key={social.href}
      />
    ));
  };

  return <div className={styles.container}>{renderButtons()}</div>;
}
