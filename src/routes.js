import React from 'react';
import { Match, Miss } from 'react-router';

import CategoryListContainer from './containers/CategoryListContainer';
import CategoryFormContainer from './containers/CategoryFormContainer';
import Accounts from './containers/Accounts';
import NotFound from './components/NotFound';

const Routes = (
  <div>
    <Match exactly pattern="/categories" component={CategoryListContainer} />
    <Match exactly pattern="/categories/new" component={CategoryFormContainer} />

    <Match pattern="/accounts" component={Accounts} />

    <Miss component={NotFound} />
  </div>
);

export default Routes;
