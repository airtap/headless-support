'use strict'

const names = require('browser-names')

module.exports = function (name, version, platform) {
  name = names.common(name) || name
  version = version || version === 0 ? parseInt(version, 10) : Infinity
  platform = platform || process.platform

  if (name === 'chromium' || name === 'chrome' || name === 'edge') {
    if (platform === 'win32') {
      return version >= 60
    } else {
      return version >= 59
    }
  }

  if (name === 'brave') {
    // Version could be the product version (1.x) or Chromium version.
    // Their Windows executables carry the Chromium version. Brave was on
    // Chromium 70 well before its first stable release (1.0) so headless
    // mode should work in theory. Return true until we hear otherwise.
    return true
  }

  if (name === 'firefox') {
    if (platform === 'darwin' || platform === 'win32') {
      return version >= 56
    } else {
      return version >= 55
    }
  }

  if (name === 'opera') {
    // TBD. Currently shows a white window with --headless
  }

  return false
}
