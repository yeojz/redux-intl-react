import React, {PropTypes} from 'react';
import withIntl from './withIntl';

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
        return <div>{this.props.children}</div>
    }
}

IntlProvider.propTypes = propTypes;
IntlProvider.childContextTypes = childContextTypes;
export default withIntl(IntlProvider);
