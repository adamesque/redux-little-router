'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var oldQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var newQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var mergedQuery = _extends({}, oldQuery, newQuery);
  var search = '?' + _queryString2.default.stringify(mergedQuery);

  return {
    query: mergedQuery,
    search: search
  };
};