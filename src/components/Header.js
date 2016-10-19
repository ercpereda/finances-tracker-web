import React from 'react';
import Link from 'react-router/Link';

import { AppBar, Drawer, MenuItem } from 'material-ui';

const Header = () =>
  <header>
    <AppBar 
      title="Finances tracker"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    <Drawer
      docked={true}
      open={true}
    >
      <Link to="/accounts"><MenuItem>Accounts</MenuItem></Link>
      <MenuItem><Link to="/categories">Categories</Link></MenuItem>
    </Drawer>
  </header>
;

export default Header;
