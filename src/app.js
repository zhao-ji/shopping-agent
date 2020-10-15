import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import { LoginPage } from './login';

import { Sidebar } from './sidebar';
import { Header } from './header';

import { Records } from './records';
import { CreateRecord } from './createRecord';
import { Skus } from './skus';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/">
                    <div id="App">
                        <Sidebar />
                        <Header />
                        <div id="body">
                            <Switch>
                                <Route exact path="/">
                                    <Records />
                                </Route>
                                <Route path="/record/create">
                                    <CreateRecord />
                                </Route>
                                <Route exact path="/sku">
                                    <Skus />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}
