import type { Config } from 'tailwindcss';
import {
  colors,
  screens,
  grid,
} from './config';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens,
    extend: {
      colors,
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.grid-subcontainer': {
          [`@apply grid gap-x-[${grid.padding.sm}px] grid-cols-${grid.cols.sm} md:gap-x-[${grid.padding.md}px] md:grid-cols-${grid.cols.md} lg:gap-x-[${grid.padding.lg}px] lg:grid-cols-${grid.cols.lg}`]:
            {},
        },
        '.grid-container': {
          [`@apply grid-subcontainer px-[${grid.padding.sm}px] md:px-[${grid.padding.md}px] lg:px-[${grid.padding.lg}px]`]: {},
        },
      });
    }),
  ],
} satisfies Config;