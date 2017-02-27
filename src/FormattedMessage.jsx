import React, {PropTypes} from 'react';

const propTypes = {
  id: PropTypes.string,
  values: PropTypes.object
}

const contextTypes = {
  intl: PropTypes.object,
}

const defaultProps = {
  values: {}
}

function FormattedMessage(props, context) {
  const message = context.intl.formatMessage({id: props.id}, props.values);
  return <span>{message}</span>;
};

FormattedMessage.propTypes = propTypes;
FormattedMessage.contextTypes = contextTypes;
FormattedMessage.defaultProps = defaultProps;
export default FormattedMessage;
