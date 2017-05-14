import React from 'react';
import PropTypes from 'prop-types';

const contextTypes = {
  intl: PropTypes.object,
}

function ValidateContext(props, context) {
  const value = context.intl.formatMessage({id: 'test'});
  return <span>{value}</span>
}

ValidateContext.contextTypes = contextTypes;
export default ValidateContext;
