import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importando Pages 
import Navbar from './components/layout/navbar';
import ParticipantesComponet from './components/pages/participantes';
import IndexPage from './components/pages/index';
import NotfoundComponent from './components/pages/notfound';
import FooterComponent from './components/layout/footer';
import LoginComponent from './components/pages/login/Index';
import RegisterPage from './components/pages/registro';
import SchedulePage from './components/pages/programacao';
import BoardPage from './components/pages/banca';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route path="/participantes" component={ParticipantesComponet} />
          <Route path="/programacao" component={SchedulePage} />
          <Route path="/banca" component={BoardPage} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/cadastro" component={RegisterPage} />
          <Router path="*" component={NotfoundComponent} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
