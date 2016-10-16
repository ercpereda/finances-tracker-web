import React, { Component } from 'react';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Category submited');
  }

  render() {
    return (
      <div>
        <h1>Category Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title"><b>title</b></label>
          <input type="text" name="title" placeholder="Enter a title" onChange={e => this.setState({title: e.target.value})} />
          <label htmlFor="description"><b>description</b></label>
          <input type="textarea" placeholder="Enter a description" onChange={e => this.setState({description: e.target.value})} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
