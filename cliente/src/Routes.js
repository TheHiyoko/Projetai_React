import React from "react";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginComponent from './components/pages/login/Index';
import RegisterPage from './components/pages/registro';
import SchedulePage from './components/pages/programacao';
import BoardPage from './components/pages/banca';
import ProjetosPage from './components/pages/projetosPage';
import ParticipantesComponet from './components/pages/participantes';
import IndexPage from './components/pages/index/index';
import NotfoundComponent from './components/pages/notfound';

const PrivateRoute = () => {
    return(
        <Route />
    )
};

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/projetos" component={ProjetosPage} />
                <Route path="/participantes" component={ParticipantesComponet} />
                <Route path="/programacao" component={SchedulePage} />
                <Route path="/banca" component={BoardPage} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/cadastro" component={RegisterPage} />
                <Route component={NotfoundComponent} />
                <PrivateRoute />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;