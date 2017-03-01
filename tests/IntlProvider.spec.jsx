import React from 'react';
import {expect} from 'chai';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import intlReducer from 'redux-intl-connect/lib/intlReducer';
import updateIntl from 'redux-intl-connect/lib/updateIntl';
import {shallow} from 'enzyme';

import IntlProvider from '../src/IntlProvider';
import ValidateContext from './mocks/ValidateContext';
import ValidateMessage from './mocks/ValidateMessage';

describe('IntlProvider', function () {
  it('should provide intl context', function () {
    const store = getStore();
    const App = () => (
      <Provider store={store}>
        <IntlProvider>
          <ValidateContext />
        </IntlProvider>
      </Provider>
    )
    const app = shallow(<App />)
    expect(app.html()).to.be.equal('<span>yes</span>')
  });

  it('should render new message when context is updated', function () {
    const store = getStore();
    dispatchMockUpdate(store, 'en', 'first');

    const App = () => (
      <Provider store={store}>
        <IntlProvider>
          <ValidateMessage />
        </IntlProvider>
      </Provider>
    )
    const app = shallow(<App />);
    expect(app.html()).to.be.equal('<span>first</span>');

    dispatchMockUpdate(store, 'es', 'second');
    expect(app.html()).to.be.equal('<span>second</span>');
  });

  function getStore() {
    const reducer = combineReducers({
      intl: intlReducer,
    })

    return createStore(reducer);
  }

  function dispatchMockUpdate(store, lang, value) {
    store.dispatch(updateIntl({
      cacheDisable: false,
      locale: lang,
      messages: {
        test: value
      }
    }));
  }
})
