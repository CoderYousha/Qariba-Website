import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './styles/colors.css';
import './styles/constants.css';
import './index.css';
import NotAuthProvider from './providers/NotAuthProvider';
import { useTheme } from '@mui/material/styles';
import AuthProvider from './providers/AuthProvider';
import Translation from './translation/Translation';
import { IntlProvider } from 'react-intl';
import { useConstants } from './hooks/UseConstants';
import { WebsiteRoutes } from './routes/WebsiteRoutes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const { language } = useConstants();
  const theme = useTheme();
  const messages = Translation();

  return (
    <main>
      <div className="App" style={{ backgroundColor: theme.palette.background.default }}>
        <BrowserRouter>
          <IntlProvider locale={language} messages={messages[language]}>
            <Routes>
              {
                WebsiteRoutes().map((route, index) => 
                  <Route path={route.path} element={<><Header />{route.element}<Footer /></>} />
                )
              }
            </Routes>
          </IntlProvider>
        </BrowserRouter>
      </div>
    </main>
  );
}

export default App;
