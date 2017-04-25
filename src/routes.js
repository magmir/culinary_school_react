import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Main from '../src/components/main';

const Greeting = () => {
  return <div>Hey there</div>
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="courses" component={Greeting} />
    <Route path="teachers" component={Main} />
  </Route>
);
