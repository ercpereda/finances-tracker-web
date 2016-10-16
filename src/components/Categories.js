import React, { Component } from 'react';
import categories from '../fakes/categories';

class Categories extends Component {
  render() {
    return (
      <div>
        <ul>
          {categories.map(categorie => 
            <li key={categorie.id}>
              <h4>{categorie.id}</h4>
              <h4>{categorie.title}</h4>
              <h4>{categorie.description}</h4>
              <h4>{categorie.creationDate.toString()}</h4>
              <h4>{categorie.modificationDate.toString()}</h4>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Categories;
