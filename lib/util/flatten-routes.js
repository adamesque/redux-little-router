'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.assign');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filterObject = function filterObject(target, predicate) {
  return Object.keys(target).reduce(function (acc, key) {
    return predicate(key) ? _extends({}, acc, _defineProperty({}, key, target[key])) : acc;
  }, {});
};

var mapObject = function mapObject(target, transformKey, transformValue) {
  return Object.keys(target).reduce(function (acc, key) {
    var newKey = transformKey ? transformKey(key) : key;
    var newValue = transformValue ? transformValue(target[key]) : target[key];
    return _extends({}, acc, _defineProperty({}, newKey, newValue));
  }, {});
};

var onlyRoutes = function onlyRoutes(routes) {
  return filterObject(routes, function (key) {
    return key.indexOf('/') === 0;
  });
};

var withoutRoutes = function withoutRoutes(routes) {
  return filterObject(routes, function (key) {
    return key.indexOf('/') !== 0;
  });
};

var flattenRoutes = function flattenRoutes(routes) {
  var acc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  Object.keys(routes).forEach(function (key) {
    var baseRoute = key === '/' ? '' : key;
    flattenRoutes(mapObject(onlyRoutes(routes[key]), function (routeKey) {
      return '' + baseRoute + routeKey;
    }, function (routeValue) {
      return _extends({}, routeValue, {
        parent: _extends({}, withoutRoutes(routes[key]), {
          route: key
        })
      });
    }), acc);
  });

  (0, _lodash2.default)(acc, mapObject(routes, null, withoutRoutes));

  return acc;
};

exports.default = flattenRoutes;