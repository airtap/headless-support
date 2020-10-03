'use strict'

const test = require('tape')
const headless = require('.')

test('accepts string versions', function (t) {
  t.is(headless('chromium', '60.1.2.3', 'linux'), true)
  t.is(headless('chromium', '60', 'linux'), true)
  t.is(headless('chromium', '1.60', 'linux'), false)
  t.is(headless('firefox', '81.0a1', 'linux'), true)
  t.end()
})

test('accepts aliases', function (t) {
  t.is(headless('google chrome', 60, 'linux'), true)
  t.is(headless('msedge', 60, 'win32'), true)
  t.is(headless('ff', 56, 'darwin'), true)
  t.is(headless('nope', 60, 'linux'), false)
  t.end()
})

test('defaults to latest version', function (t) {
  for (const falsy of [null, undefined, '', false]) {
    t.is(headless('chromium', falsy, 'linux'), true)
  }

  for (const truthy of [0, '0']) {
    t.is(headless('chromium', truthy, 'linux'), false)
  }

  t.end()
})

test('defaults to process.platform', function (t) {
  t.is(headless('chromium', 59), process.platform !== 'win32')
  t.end()
})

test('chromium-based versions', function (t) {
  for (const platform of ['linux', 'darwin']) {
    t.is(headless('chromium', 58, platform), false)
    t.is(headless('chromium', 59, platform), true)
    t.is(headless('chromium', 60, platform), true)
    t.is(headless('chrome', 58, platform), false)
    t.is(headless('chrome', 59, platform), true)
    t.is(headless('chrome', 60, platform), true)
    t.is(headless('edge', 58, platform), false)
    t.is(headless('edge', 59, platform), true)
    t.is(headless('edge', 60, platform), true)
  }

  t.is(headless('chromium', 59, 'win32'), false)
  t.is(headless('chromium', 60, 'win32'), true)
  t.is(headless('chromium', 61, 'win32'), true)
  t.is(headless('chrome', 59, 'win32'), false)
  t.is(headless('chrome', 60, 'win32'), true)
  t.is(headless('chrome', 61, 'win32'), true)
  t.is(headless('edge', 59, 'win32'), false)
  t.is(headless('edge', 60, 'win32'), true)
  t.is(headless('edge', 61, 'win32'), true)

  t.end()
})

test('opera', function (t) {
  t.is(headless('opera', null, 'linux'), false)
  t.is(headless('opera', null, 'darwin'), false)
  t.is(headless('opera', null, 'win32'), false)

  t.end()
})

test('brave', function (t) {
  t.is(headless('brave', 0, 'does not matter'), true)
  t.is(headless('brave', 1, 'does not matter'), true)

  t.end()
})

test('firefox', function (t) {
  t.is(headless('firefox', 54, 'linux'), false)
  t.is(headless('firefox', 55, 'linux'), true)
  t.is(headless('firefox', 56, 'linux'), true)

  t.is(headless('firefox', 55, 'darwin'), false)
  t.is(headless('firefox', 56, 'darwin'), true)
  t.is(headless('firefox', 57, 'darwin'), true)

  t.is(headless('firefox', 55, 'win32'), false)
  t.is(headless('firefox', 56, 'win32'), true)
  t.is(headless('firefox', 57, 'win32'), true)

  t.end()
})
