import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';

import Home from './pages/Home';
import NewRoom from './pages/NewRoom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <GlobalStyle />
        </BrowserRouter>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
