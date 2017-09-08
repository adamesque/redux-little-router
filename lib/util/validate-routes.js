'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var README_MESSAGE = '\n  See the README for more information:\n  https://github.com/FormidableLabs/redux-little-router#wiring-up-the-boilerplate\n';

exports.default = function (routes) {
  if (!routes) {
    throw Error('\n      Missing route configuration. You must define your routes as\n      an object where the keys are routes and the values are any\n      route-specific data.\n\n      ' + README_MESSAGE + '\n    ');
  }

  // eslint-disable-next-line no-magic-numbers
  if (!Object.keys(routes).every(function (route) {
    return route.indexOf('/') === 0;
  })) {
    throw Error('\n      The route configuration you provided is malformed. Make sure\n      that all of your routes start with a slash.\n\n      ' + README_MESSAGE + '\n    ');
  }
};