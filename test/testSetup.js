'use strict';

import jsdom from 'jsdom';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

global.document = jsdom.jsdom('<html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

function noop() {
  return {};
}

// prevent mocha tests from breaking when trying to require a css file
require.extensions['.css'] = noop;
require.extensions['.svg'] = noop;
