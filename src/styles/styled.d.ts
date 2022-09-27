import "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      background: string;
      backgroundSecond: string;
      primary: string;
      secondary: string;
      fontPrimary: string;
      lightGray: string;
      gray: string;
      darkGray: string;
      white: string;
      transWhite: string;
      shadow: string;
    };
    windowSize: {
      mobile: string; 
      tablet: string;
      laptop: string;
      desktop: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontFamily: {
      aggro: string;
      noto: string;
    };
    borderRadius: string
  }
}