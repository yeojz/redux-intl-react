import React from 'react';
import PropTypes from 'prop-types';
import isValidIntlObject from './isValidIntlObject';

const contextTypes = {
  intl: PropTypes.object,
}

function ValidateContext(props, context) {
  const value = isValidIntlObject(context.intl) ? 'yes' : 'no';
  return <span>{value}</span>
}

ValidateContext.contextTypes = contextTypes;
export default ValidateContext;
