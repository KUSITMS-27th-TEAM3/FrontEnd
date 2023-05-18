import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      main: {
        orange: string;
        crimson: string;
        lightOrange: string;
      };
      grayScale: {
        black: string;
        lightBlack: string;
        darkGray: string;
        gray: string;
        lightGray: string;
        brightGray: string;
        white: string;
      };
    };

    font: {
      family: {
        gmarketSans_bold: string;
        gmarketSans_medium: string;
        pretendard_bold: string;
        pretendard_medium: string;
        pretendard_regular: string;
      };
    };
  }
}
