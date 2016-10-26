import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  error: {
    width: '80%',
    margin: '10px auto auto auto',
    backgroundColor: 'red',
    color: 'white',
    padding: '10px',
    textAlign: 'center'
  },
  form: {
    width: '80%',
    margin: '30px auto auto auto',
    padding: '10px'
  }
};

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };

    this.createCategory = this.createCategory.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  createCategory() {
    this.props.createCategory({title: 'hello'});
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    const { loading, error } = this.props.newCategory;

    if (loading) {
      return <CircularProgress size={60} thickness={7} />;
    } else if (error) {
      <Paper style={styles.error} zDept={5}>
        <h3>Error: {error}</h3>
      </Paper>
    }
    
    return (
      <Paper style={styles.form} zDepth={5}>
        <h1>Category Form</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="title"
            floatingLabelText="Title"
            fullWidth={true}
            onChange={this.handleTitleChange}
          />
          <TextField
            name="description"
            floatingLabelText="Description"
            multiLine={true}
            fullWidth={true}
            rows={4}
            rowsMax={8}
            onChange={this.handleDescriptionChange}
          />
          <RaisedButton
            label="Create"
            primary={true}
            onClick={this.createCategory}
          />
        </form>
      </Paper>
    );
  }
}

export default CategoryForm;
