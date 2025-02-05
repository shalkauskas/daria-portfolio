export const theme = {
  colors: {
    black1: '#0C0C0D0D',
    blue1: '#9B95F0',
    grey1: '#C6C6C9',
    purple1: '#D9CBFD',
    purple4: '#7343B2',
    purple5: '#D2AAFF',
    purpleBg1: '#FDFBFF',
    purpleBg2: '#F5E8FF',
    purpleBgAboutMe: '#E2D7FF',
    white: '#FFFFFF',

    primary: '#703BB5',

    primaryText: '#343434',
    secondaryText: '#75757D'
  },
  utility: {
    pxToRem: (value: number) => `${value / 16}rem`
  }
} as const;
