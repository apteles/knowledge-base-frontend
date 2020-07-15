import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import DashBoard from '../pages/DashBoard';
import Admin from '../pages/Admin';

export default function Routes() {
    return (
        <Switch>
            <Route path="/login" component={() => <h1>Login</h1>} />
            <Route path="/register" component={() => <h1>Register</h1>} />
            <Route path="/" exact component={DashBoard} guard />
            <Route path="/administration" component={Admin} guard />
        </Switch>
    );
}
