import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HeaderActions from '../actions/header-actions';
import Link from 'react-router/Link';

import { AppBar, Drawer, MenuItem, IconButton } from 'material-ui';
import NavigateClose from 'material-ui/svg-icons/navigation/close';

const Header = ({header, actions}) =>
  <header>
    <AppBar 
      title="Finances tracker"
      onLeftIconButtonTouchTap={() => actions.toggleDrawer()}
    />
    <Drawer
      docked={true}
      open={header.showDrawer}
    >
      <AppBar 
        iconElementLeft={<IconButton />}
        iconElementRight={<IconButton><NavigateClose /></IconButton>}
        onRightIconButtonTouchTap={() => actions.toggleDrawer()}
      />
      <Link to="/accounts"><MenuItem>Accounts</MenuItem></Link>
      <Link to="/categories"><MenuItem>Categories</MenuItem></Link>
    </Drawer>
  </header>
;

Header.propTypes = {};

const mapStateToProps = state => {
  return {header: state.header}
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(HeaderActions, dispatch) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
