import React, {PropTypes} from 'react';

const contextTypes = {
  intl: PropTypes.object
}

function injectIntl(Component) {
  const InjectedIntl = (props, context) => (
    <Component
      {...props}
      intl={context.intl}
    />
  );
  InjectedIntl.contextTypes = contextTypes;
  return InjectedIntl;
}

export default injectIntl;
