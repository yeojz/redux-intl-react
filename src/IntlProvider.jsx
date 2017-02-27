import React, {Children, PropTypes} from 'react';
import {injectIntl} from 'redux-intl-connect';
import {connect} from 'react-redux';

const withIntl = injectIntl(connect);

const propTypes = {
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
