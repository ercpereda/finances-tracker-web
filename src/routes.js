import React from 'react';
import { Match, Miss } from 'react-router';

import Categories from './containers/Categories';
import Accounts from './containers/Accounts';
import NotFound from './components/NotFound';

const Routes = () =>
  <div>
    <Match pattern="/categories" component={Categories} />
    <Match pattern="/accounts" component={Accounts} />
    <Miss component={NotFound} />
  </div>
;

export default Routes;
