import React, {PropTypes} from 'react';

const propTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  values: PropTypes.object
}

const contextTypes = {
  intl: PropTypes.object.isRequired,
}

const defaultProps = {
  defaultMessage: '',
  values: {}
}

function FormattedMessage(props, context) {
  const messageDescriptor = {
    id: props.id,
    defaultMessage: props.defaultMessage
  }
  const message = context.intl.formatMessage(messageDescriptor, props.values);
  return <span>{message}</span>;
}

FormattedMessage.propTypes = propTypes;
FormattedMessage.contextTypes = contextTypes;
FormattedMessage.defaultProps = defaultProps;

export default FormattedMessage;
