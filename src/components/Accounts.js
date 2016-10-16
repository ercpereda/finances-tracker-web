import React, { Component } from 'react';
import accounts from '../fakes/accounts';

class Accounts extends Component {
  render() {
    return (
      <div>
        <ul>
          {accounts.map(account=> 
            <li key={account.id}>
              <h4>{account.id}</h4>
              <h4>{account.type}</h4>
              <h4>{account.issuer}</h4>
              <h4>{account.title}</h4>
              <h4>{account.currency}</h4>
              <h4>{account.note}</h4>
              <h4>{account.amount}</h4>
              <h4>{account.creationDate.toString()}</h4>
              <h4>{account.modificationDate.toString()}</h4>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Accounts;
