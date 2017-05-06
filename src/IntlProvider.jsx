import React, {Children} from 'react';
import PropTypes from 'prop-types';
import {injectIntl} from 'redux-intl-connect';
import {connect} from 'react-redux';

const withIntl = injectIntl(connect);

const propTypes = {
  children: PropTypes.any,
  intl: PropTypes.object
}

const childContextTypes = {
  intl: PropTypes.object
}

class IntlProvider extends React.Component {
  getChildContext = () => ({
    intl: this.props.intl
  })

  render() {
    return Children.only(this.props.children);
  }
}

IntlProvider.propTypes = propTypes;
IntlProvider.childContextTypes = childContextTypes;
export default withIntl(IntlProvider);
