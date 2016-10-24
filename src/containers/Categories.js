import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CategoryActions from '../actions/category-actions';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import CategoryList from '../components/CategoryList';
import CategoryForm from '../components/CategoryForm';

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed'
};

const Categories = ({categories, actions}) => (
  <div>
    <CategoryForm onSubmit={() => actions.createCategory({ 
        title: 'New Category', 
        description: 'New description'
      })} 
    />
    <hr />
    <CategoryList categories={categories} />
    <FloatingActionButton 
      style={fabStyle}
      onTouchTap={() => console.log('hello')}
    >
      <ContentAdd />
    </FloatingActionButton>
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
