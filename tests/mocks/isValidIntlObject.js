const isValidIntlObject = (intl) => (
  typeof intl === 'object'
  && typeof intl.formatMessage === 'function'
)

export default isValidIntlObject;
