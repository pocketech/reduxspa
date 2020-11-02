import React from 'react';
import { theme } from './assets/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import LayoutBox from '@material-ui/core/Container';
import { Home, SignIn, SignUp, Reset } from './components/pages';
import { Header, Footer } from './components/organisms';
import Auth from './Auth';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutBox height="100vh">
          <Header />
          <Switch>
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/login/reset' component={Reset} />
            <Route exact path='/signup' component={SignUp} />
            <Auth>
              <Route exact path='(/)?' component={Home} />
              {/* <Route exact path='/about' component={About} /> */}
              {/* <Route exact path='/user/mypage' component={Mypage} /> */}
              {/* <Route exact path='/user/favorite' component={Favorites} /> */}
              {/* <Route exact path='/user/coupon' component={Coupon} /> */}
            </Auth>
          </Switch>
          <Footer />
        </LayoutBox>
      </ThemeProvider>
    </Router>


  );
}

export default App;
