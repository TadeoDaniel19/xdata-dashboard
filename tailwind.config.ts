import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F8FC',
        foreground: 'var(--foreground)',
        'input-bg': '#FCFDFE',
        'input-border': '#F0F1F7',
        'primary-blue': '#3751FF',
        'primary-gray': '#A4A6B3',
        'gray-label': '#9FA2B4'
      },
    },
  },
  plugins: [],
};

export default config;
