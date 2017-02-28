import {stub} from 'sinon'

function getIntlContext() {
  return {
    locale: 'es',
    formatMessage: stub().returns('formatted message')
  }
}

export default getIntlContext;
