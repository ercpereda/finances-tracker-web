import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AccountActions from '../actions/account-actions';
import AccountForm from '../components/AccountForm';

const Accounts = ({accounts, actions}) => (
  <div>
    <AccountForm onSubmit={() => actions.addAccount({
      title: 'hello world',
      issuer: 'issuer issuer',
      amount: 10,
      note: 'jaldsf asdjf asjd kjas fjs lasjdf ; fjask',
      currency: 'USD',
      type: 'ch',
      creationDate: new Date(),
      modificationDate: new Date()
    })}/>
    <hr />
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
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  accounts: state.accounts
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AccountActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accounts);
