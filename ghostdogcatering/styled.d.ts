import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    siteWidth: string;
    colors: {
      primary: string;
      blackBackground: string;
      darkBackground: string;
      borderColor: string;
      themeColor: string;
      textMain: string;
      textInverted: string;
    };
  }
}
