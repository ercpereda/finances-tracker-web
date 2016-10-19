import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CategoryActions from '../actions/category-actions';
import CategoryForm from '../components/CategoryForm';

const Categories = ({categories, actions}) => (
  <div>
    <CategoryForm onSubmit={() => actions.createCategory({ 
        title: 'New Category', 
        description: 'New description'
      })} 
    />
    <hr />
    <ul>
      {categories.map(category => 
      <li key={category.id}>
        <h4>{category.title}</h4>
        <h4>{category.description}</h4>
      </li>
      )}
    </ul>
  </div>
);

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {categories: state.categories} 
};

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(CategoryActions, dispatch)}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
