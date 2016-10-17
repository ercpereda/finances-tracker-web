import React, { Component, PropTypes } from 'react';

class AccountForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      type: '',
      issuer: '', 
      title: '',
      currency: '',
      note: '',
      amount: '', 
      creationDate: '',
      modificationDate: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const {types} = this.props; 
    return (
      <div>
        <h1>Account Form</h1>
        <form onSubmit={this.handleSubmit}>
          {/*<label htmlFor="type"><b>Type: </b></label>
          <select name="type" value={this.state.type} onChange={e => this.setState({type: e.target.value})}>
            {types.map(t => <option value={t.code}>{t.name}</option>)}
          </select>*/}

          <label htmlFor="issuer">Issuer: </label>
          <input name="issuer" type="text" onChange={e => this.setState({issuer: e.target.value})}/>

          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={e => this.setState({title: e.target.value})} />

          <label htmlFor="currency">Currency: </label>
          <select name="currency" value={this.state.currency}  onChange={e => this.setState({currency: e.target.value})}>
            <option value="USD">USD</option>
          </select>

          <label htmlFor="amount">Amount: </label>
          <input type="number" name="amount" onChange={e => this.setState({amount: e.target.value})} />

          <label htmlFor="note">Note: </label>
          <textarea name="note" cols="30" rows="10" onChange={e => this.setState({note: e.target.value})}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AccountForm;
