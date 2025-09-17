const ShellText = {
  header: {
    title: 'Shrug Man',
    tagline: 'Shrugging through life, one copy-paste at a time.',
  },
  footer: {
    socials: {
      github: 'victorfrye/shrugman | GitHub',
    },
    toggleColor(mode: string) {
      return `Toggle ${mode} mode`;
    },
    byline: 'Made with ❤️ by Victor Frye',
    privacy: 'Privacy',
    copyright(year: number) {
      return `© Victor Frye ${year}`;
    },
  },
};

export default ShellText;
