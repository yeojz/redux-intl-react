import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import FormattedMessage from '../src/FormattedMessage';
import MockContext from './mocks/MockContext';

describe('FormattedMessage', function () {
  it('should return expected value', function () {
    const App = () => (
      <MockContext>
        <FormattedMessage id='test' />
      </MockContext>
    )
    const app = shallow(<App />)
    expect(app.html()).to.be.equal('<span>formatted message</span>')
  });
})
