import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {createStore, combineReducers} from 'redux';
import intlReducer from 'redux-intl-connect/lib/intlReducer';
import ValidateProp from './mocks/ValidateProp';
import Provider from '../src/Provider';
import connect from '../src/connect';

describe('connect', function () {
  it('should provide intl context', function () {
    const store = getStore();
    const mapStateToProps = () => ({
      others: ' too'
    });
    const Component = connect(mapStateToProps)(ValidateProp);

    const App = () => (
      <Provider store={store}>
        <Component />
      </Provider>
    )
    const app = shallow(<App />)
    expect(app.html()).to.be.equal('<span>yes too</span>')
  });

  function getStore() {
    const reducer = combineReducers({
      intl: intlReducer,
    })

    return createStore(reducer);
  }
});
