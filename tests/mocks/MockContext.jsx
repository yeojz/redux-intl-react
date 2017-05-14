import React, {Children} from 'react';
import PropTypes from 'prop-types';
import getIntlContext from './getIntlContext';

const propTypes = {
  children: PropTypes.any,
}

const childContextTypes = {
  intl: PropTypes.object
}

class MockContext extends React.Component {
  getChildContext = () => ({
    intl: getIntlContext()
  })

  render() {
    return Children.only(this.props.children);
  }
}

MockContext.propTypes = propTypes;
MockContext.childContextTypes = childContextTypes;
export default MockContext;
