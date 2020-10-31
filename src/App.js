import React from 'react';
import { theme } from './assets/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import LayoutBox from '@material-ui/core/Container';
import { Home, SignIn, SignUp, Reset } from './components/pages';
import { Header, Footer } from './components/organisms'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutBox height="100vh">
          <Header />
          <Switch>
            <Route exact path='(/)?' component={Home} />
            {/* <Route exact path='/wasemeshi' component={Counter} /> */}
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/reset' component={Reset} />
          </Switch>
          <Footer />
        </LayoutBox>
      </ThemeProvider>
    </Router>


  );
}

export default App;
