'use client';

import {
  CardHeader,
  Image,
  Subtitle2,
  Title1,
  makeStyles,
  tokens,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  header: {
    alignItems: 'center',
    padding: `${tokens.spacingVerticalXL} ${tokens.spacingHorizontalXXL} ${tokens.spacingVerticalNone}`,
  },
  title: {
    margin: `${tokens.spacingVerticalNone} ${tokens.spacingHorizontalSNudge}`,
  },
  tagline: {
    color: tokens.colorNeutralForeground2,
    margin: `${tokens.spacingVerticalNone} ${tokens.spacingHorizontalSNudge}`,
  },
});

export default function Header() {
  const styles = useStyles();

  return (
    <CardHeader
      className={styles.header}
      image={
        <Image
          as="img"
          src="/images/man_shrugging.svg"
          alt="a man shrugging"
          height={72}
          width={72}
        />
      }
      header={
        <Title1 as="h1" wrap={false} className={styles.title}>
          Shrug Man
        </Title1>
      }
      description={
        <Subtitle2 as="em" className={styles.tagline}>
          Shrugging through life, one copy-paste at a time.
        </Subtitle2>
      }
    />
  );
}
