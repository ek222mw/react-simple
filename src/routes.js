import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Wrap from './components/wrap';
import C2 from './components/challenge2';
import Game from './components/game';


export const routes = (
    <Route path="/" component={Wrap}>
        <IndexRoute component={Game}/>
        <Route path="/C2" component={C2}/>
    </Route>
);
