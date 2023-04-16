import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      title: string;
      subTitle: string;
      small: string;
    };

    colors: {
      main: string;
      emphasis: string;
      cancel: string;
      button: string;
      sub: string;
      background: string;
      innerContainer: string;
      container: string;
      gray: string;
      lightGray: string;
    };

    font: {
      color: {
        black: string;
        darkGray: string;
        white: string;
        description: string;
        subTitle: string;
      };
      size: {
        normal: string;
        containerTitle: string;
      };
    };
  }
}
