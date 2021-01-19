import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './utils/theme';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Work from './components/Work';
import Education from './components/Education';


function App() {


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/work" component={Work}/>
          <Route exact path="/education" component={Education}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
