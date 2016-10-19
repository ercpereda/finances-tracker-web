import React, { Component } from 'react';
import Accounts from '../containers/Accounts';
import Categories from '../containers/Categories';

const MainSection = () => (
  <section>
    <Accounts />
    <hr />
    <hr />
    <Categories />
  </section>
);

export default MainSection;
