import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import injectIntl from '../src/injectIntl';
import MockContext from './mocks/MockContext';
import ValidateProp from './mocks/ValidateProp';

const Component = injectIntl(ValidateProp);

describe('injectIntl', function () {

  it('should return expected value', function () {
    const App = () => (
      <MockContext>
        <Component />
      </MockContext>
    )
    const app = shallow(<App />)
    expect(app.html()).to.be.equal('<span>yes</span>')
  });

})
