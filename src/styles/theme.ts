import { DefaultTheme } from "styled-components";

const windowSize = {
  mobile: `screen and (max-width: 480px)`,
  tablet: `screen and (max-width: 768px)`,
  laptop: `screen and (max-width: 1024px)`,
  desktop: `screen and (max-width: 1600px)`,
};

const fontSize = {
  xs: "0.5rem",
  sm: "0.75rem",
  base: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem"
};

const fontFamily = {
  aggro: "SBAggro",
  noto: "Noto Sans KR",
};

const color = {
  background: "#FAFAFA",
  backgroundSecond: "#F1F1F1",
  primary: "#497BFB",
  secondary: "#FF9292",
  fontPrimary: "#484848",
  lightGray: "#D1D1D1",
  gray: "#A5A5A5",
  darkGray: "#727272",
  transWhite: "#FFFFFFc0",
  white: "#FFF",
  shadow: "#8F8F8F44",
};

const borderRadius = "20px";

export const theme: DefaultTheme = {
  windowSize,
  fontSize,
  fontFamily,
  color,
  borderRadius,
};
