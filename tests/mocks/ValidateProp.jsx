import React, {PropTypes} from 'react';
import isValidIntlObject from './isValidIntlObject';

const propTypes = {
  intl: PropTypes.object,
}

function ValidateProp(props) {
  const value = isValidIntlObject(props.intl) ? 'yes' : 'no';
  return <span>{value}</span>
}

ValidateProp.propTypes = propTypes;
export default ValidateProp;
