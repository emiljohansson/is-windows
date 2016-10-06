import test from 'ava'
import isWindows from './'

test(t => {
  const expected = process.platform === 'win32'
  const actual = isWindows()
  t.is(actual, expected)
})
