import {expect} from 'chai';
import * as exposed from '../src/index';

describe('index', function () {
  it('total number of exports', function () {
    expect(Object.keys(exposed)).to.be.length(7)
  });

  it('exports connect', function () {
    expect(exposed.connect).to.not.be.undefined;
    expect(exposed.FormattedMessage).to.be.a.function;
  });

  it('exports FormattedMessage', function () {
    expect(exposed.FormattedMessage).to.not.be.undefined;
    expect(exposed.FormattedMessage).to.be.a.function;
  });

  it('exports Provider', function () {
    expect(exposed.Provider).to.not.be.undefined;
    expect(exposed.FormattedMessage).to.be.a.function;
  });

  it('exports IntlProvider', function () {
    expect(exposed.IntlProvider).to.not.be.undefined;
    expect(exposed.FormattedMessage).to.be.a.function;
  });

  it('exports injectIntl', function () {
    expect(exposed.injectIntl).to.not.be.undefined;
    expect(exposed.FormattedMessage).to.be.a.function;
  });

  it('exports intlReducer', function () {
    expect(exposed.intlReducer).to.not.be.undefined;
    expect(exposed.FormattedMessage).to.be.a.function;
  });

  it('exports updateIntl', function () {
    expect(exposed.updateIntl).to.not.be.undefined;
    expect(exposed.FormattedMessage).to.be.a.function;
  });
});
