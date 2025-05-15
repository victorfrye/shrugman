import { useContext } from 'react';

import { DarkModeContext } from '@shrugman/theme/dark-mode-provider';

export default function useDarkMode() {
  return useContext(DarkModeContext);
}
