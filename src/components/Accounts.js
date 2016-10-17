import React, { PropTypes } from 'react';

const Accounts = ({accounts}) => (
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

Accounts.propTypes = {
  accounts: PropTypes.array.isRequired
};

export default Accounts;
