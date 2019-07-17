import React from 'react';
import {Switch,Router} from 'react-router-dom';
import Body from '../Body';

const Main=()=>(
<Switch>
<Router exact path="/" component={Body}/>
<Router exact path="/List" component={Body}/>
</Switch>
)
export default Main;
