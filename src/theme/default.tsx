const COLORS = {
  whiteColor: "#fff",
  blackColor: "#333",
  redColor: "#ff3333",
  blueColor: "#0000ff",
  blueColor2: "#1976d2",
  blueColor3: "#007bff",

  primaryColor: "#6db3d2",
  secondaryColor: "#ff6b6b",

  grayColor: "#333333",
  grayColor2: "#666666",
  grayColor3: "#f5f5f5",
  grayColor4: "#00000020",
  grayColor5: "#e9ecef",
  grayColor6: "#ced4da",
  grayColor7: "#717175",

  platinumColor: "#e7e7e7",

  alertColors: {
    info: {
      primary: "#004785",
    },
    success: {
      primary: "#36c277",
      secondary: "#20c281",
    },
    error: {
      primary: "#d40707",
    },
    warn: {
      primary: "#ff8947",
    },
  },
  fonts: {
    color: "#373a4a",
  },
};

const FONT_FAMILY = {
  normal: "Noto Sans",
  secondary: "Raleway",
};

export const Theme = {
  colors: COLORS,
  fontFamily: FONT_FAMILY,
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof COLORS;
    fontFamily: typeof FONT_FAMILY;
  }
}
