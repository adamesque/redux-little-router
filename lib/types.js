'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LOCATION_CHANGED = exports.LOCATION_CHANGED = 'ROUTER_LOCATION_CHANGED';
var PUSH = exports.PUSH = 'ROUTER_PUSH';
var REPLACE = exports.REPLACE = 'ROUTER_REPLACE';
var GO = exports.GO = 'ROUTER_GO';
var GO_BACK = exports.GO_BACK = 'ROUTER_GO_BACK';
var GO_FORWARD = exports.GO_FORWARD = 'ROUTER_GO_FORWARD';
var POP = exports.POP = 'ROUTER_POP';
var REPLACE_ROUTES = exports.REPLACE_ROUTES = 'ROUTER_REPLACE_ROUTES';
var DID_REPLACE_ROUTES = exports.DID_REPLACE_ROUTES = 'ROUTER_DID_REPLACE_ROUTES';

var isNavigationAction = exports.isNavigationAction = function isNavigationAction(action) {
  return [PUSH, REPLACE, GO, GO_BACK, GO_FORWARD, POP].indexOf(action.type) !== -1;
};