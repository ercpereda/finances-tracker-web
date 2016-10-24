import React, { PropTypes, Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';

class CategoryList extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render () {
    const { categories, loading, error } = this.props.categoryList;
    if (loading) {
      return <CircularProgress size={60} thickness={7} />;
    } else if (error) {
      return (
        <div>
          <h1>Categories: </h1>
          <h3>Error {error}</h3>
        </div>
      );
    }

    return (
      <div>
        <List>
          {categories.map(category => 
            <ListItem 
              key={category.id}
              primaryText={category.title}
            /> 
          )}
        </List>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categoriesList: PropTypes.object
};

export default CategoryList;
