import test from 'ava'
import createPages from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => createPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(createPages('w'), 'w@zce.me')
  t.is(createPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
