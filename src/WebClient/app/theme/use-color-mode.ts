'use client';

import { useContext } from 'react';

import { ColorModeContext } from '@shrugman/theme/color-mode-provider';

export default function useColorMode() {
  return useContext(ColorModeContext);
}
