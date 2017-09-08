'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable consistent-return */


var _types = require('./types');

var _mergeQueries = require('./util/merge-queries');

var _mergeQueries2 = _interopRequireDefault(_mergeQueries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navigate = function navigate(history, action) {
  switch (action.type) {
    case _types.PUSH:
      history.push(action.payload);
      break;
    case _types.REPLACE:
      history.replace(action.payload);
      break;
    case _types.GO:
      history.go(action.payload);
      break;
    case _types.GO_BACK:
      history.goBack();
      break;
    case _types.GO_FORWARD:
      history.goForward();
      break;
    default:
      break;
  }
};

exports.default = function (_ref) {
  var history = _ref.history;
  return function (_ref2) {
    var getState = _ref2.getState;
    return function (next) {
      return function (action) {
        if ((0, _types.isNavigationAction)(action)) {
          // Synchronously dispatch the original action so that the
          // reducer can add it to its location queue
          var originalDispatch = next(action);

          if ((action.type === _types.PUSH || action.type === _types.REPLACE) && action.payload.options && action.payload.options.persistQuery) {
            var _getState = getState(),
                query = _getState.router.query;

            navigate(history, {
              type: action.type,
              payload: _extends({}, action.payload, (0, _mergeQueries2.default)(query, action.payload.query))
            });
          } else {
            navigate(history, action);
          }

          return originalDispatch;
        }

        return next(action);
      };
    };
  };
};