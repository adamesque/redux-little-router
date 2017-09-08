'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (href, basename) {
  if (typeof href === 'string') {
    return '' + (basename || '') + href;
  }

  var pathname = href.pathname,
      search = href.search;

  return '' + (basename || '') + pathname + (search || '');
};