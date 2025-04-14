import { useContext } from 'react';

import { DarkModeContext } from '@shrugman/components/theme/DarkMode';

const useDarkMode = () => useContext(DarkModeContext);

export default useDarkMode;
