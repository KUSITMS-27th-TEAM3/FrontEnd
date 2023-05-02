import { GlobalStyle } from './styles/GlobalStyle';
import Router from './Router';
import './styles/fonts/pretendard-subset.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
