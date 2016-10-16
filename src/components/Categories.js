import React, { Component } from 'react';
import categories from '../fakes/categories';
import Category from './Category';

class Categories extends Component {
  render() {
    return (
      <div>
        <ul>
          {categories.map(category => 
            <li key={category.id}>
              <Category {...category} /> 
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Categories;
