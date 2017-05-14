import React from 'react';
import PropTypes from 'prop-types';
import isValidIntlObject from './isValidIntlObject';

const propTypes = {
  intl: PropTypes.object,
  others: PropTypes.string
}

const defaultProps = {
  others: ''
}

function ValidateProp(props) {
  const value = isValidIntlObject(props.intl) ? 'yes' : 'no';
  return <span>{value}{props.others}</span>
}

ValidateProp.propTypes = propTypes;
ValidateProp.defaultProps = defaultProps;
export default ValidateProp;
