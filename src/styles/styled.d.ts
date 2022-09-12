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
      small: string; 
      base: string;
      large: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    fontFamily: {
      aggro: string;
      noto: string;
    };
    borderRadius: string
  }
}