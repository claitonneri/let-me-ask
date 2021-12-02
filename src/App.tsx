import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from "./pages/Home";
import NewRoom from './pages/NewRoom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
