import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importando Componetes 
import Navbar from './components/layout/navbar';
import ParticipantesComponet from './components/pages/participantes';
import IndexComponent from './components/pages/index';
import NotfoundComponent from './components/pages/notfound';
import FooterComponent from './components/layout/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={IndexComponent} />
        <Route path="/participantes" component={ParticipantesComponet}/>
        <Router component={NotfoundComponent}/>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
