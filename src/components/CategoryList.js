import React, { PropTypes, Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

const styles = {
  progress: {
    margin: 'auto'
  },
  error: {
    width: '80%',
    margin: '10px auto auto auto',
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
    textAlign: 'center'
  },
  list: {
    width: '80%',
    margin: '30px auto auto auto',
  }
}

class CategoryList extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render () {
    const { categories, loading, error } = this.props.categoryList;
    if (loading) {
      return <div style={{ margin: '30px auto', width: '100%', height: '100%' }}><CircularProgress size={60} thickness={7} /></div>;
    } else if (error) {
      return (
        <Paper style={styles.error} zDepth={5}>
          <h3>Error: {error}</h3>
        </Paper>
      );
    }

    return (
      <Paper style={styles.list} zDepth={5}>
        <List>
          {categories.map(category => 
            <ListItem 
              key={category.id}
              primaryText={category.title}
            /> 
          )}
        </List>
      </Paper>
    );
  }
}

CategoryList.propTypes = {
  categoriesList: PropTypes.object
};

export default CategoryList;
