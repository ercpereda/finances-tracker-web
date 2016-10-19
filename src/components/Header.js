import React from 'react';
import Link from 'react-router/Link';

const Header = () =>
  <header>
    <Link to="/accounts">Accounts</Link>
    <Link to="/categories">Categories</Link>
  </header>
;

export default Header;
