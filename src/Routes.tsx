import React from 'react';
import {Switch,Route} from 'react-router-dom';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={()=><p>Hello</p>}/>
        </Switch>
    )
}

export default Routes;