'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _normalizeHref = require('../util/normalize-href');

var _normalizeHref2 = _interopRequireDefault(_normalizeHref);

var _install = require('../install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var routes = _ref.routes,
      basename = _ref.basename,
      _ref$history = _ref.history,
      history = _ref$history === undefined ? (0, _createBrowserHistory2.default)({ basename: basename }) : _ref$history;
  var _history$location = history.location,
      fullPathname = _history$location.pathname,
      search = _history$location.search,
      hash = _history$location.hash,
      _history$location$sta = _history$location.state;
  _history$location$sta = _history$location$sta === undefined ? {} : _history$location$sta;
  var key = _history$location$sta.key,
      state = _history$location$sta.state;

  // Strip the basename from the initial pathname

  var pathname = basename ? fullPathname.replace(basename, '') : fullPathname;

  var descriptor = basename ? { pathname: pathname, basename: basename, search: search, hash: hash, key: key, state: state } : { pathname: pathname, search: search, hash: hash, key: key, state: state };

  var location = (0, _normalizeHref2.default)(descriptor);

  return (0, _install2.default)({ routes: routes, history: history, location: location });
};