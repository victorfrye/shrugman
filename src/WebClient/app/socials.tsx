import { JSX, useCallback } from 'react';

import { Button, Image, makeStyles, tokens } from '@fluentui/react-components';
import { PersonFilled } from '@fluentui/react-icons';

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
    gap: tokens.spacingVerticalM,
  },
  icon: {
    color: tokens.colorNeutralForeground1,
  },
});

export default function Socials() {
  const styles = useStyles();
  const { isDark } = useDarkMode();

  const getSocials = useCallback((): Social[] => {
    return [
      {
        href: 'https://victorfrye.com',
        image: <PersonFilled className={styles.icon} height={20} width={20} />,
      },
      {
        href: 'https://github.com/victorfrye/shrugman',
        image: (
          <Image
            src={isDark ? '/images/github.svg' : '/images/github_dark.svg'}
            alt="GitHub"
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
