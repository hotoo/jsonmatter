'use strict';

const through2 = require('through2');

module.exports = function(indent) {
  let indent_size = 0;
  let lastToken;
  if (indent === undefined) {
    indent = '  ';
  }

  return through2.obj(function(token, encode, callback) {
    switch (token.type) {
    case 'begin-object': // {
      if (lastToken && lastToken.type !== 'end-label' && lastToken.type !== 'comma') {
        this.push(indent.repeat(indent_size));
      }
      this.push(token.content + '\n');
      indent_size++;
      break;
    case 'end-object': // }
      indent_size--;
      if (lastToken && lastToken.type !== 'begin-object') {
        this.push('\n');
      }
      this.push(indent.repeat(indent_size) + token.content);
      if (indent_size === 0) {
        this.push('\n');
      }
      break;
    case 'begin-array': // [
      if (lastToken && lastToken.type !== 'end-label' && lastToken.type !== 'comma') {
        this.push(indent.repeat(indent_size));
      }
      this.push(token.content + '\n');
      indent_size++;
      break;
    case 'end-array': // ]
      indent_size--;
      if (lastToken && lastToken.type !== 'begin-array') {
        this.push('\n');
      }
      this.push(indent.repeat(indent_size) + token.content);
      if (indent_size === 0) {
        this.push('\n');
      }
      break;
    case 'end-label': // :
      this.push(token.content + ' ');
      break;
    case 'comma':
      this.push(token.content + '\n' + indent.repeat(indent_size));
      break;
    // case 'string':
    // case 'null':
    // case 'boolean':
    // case 'number':
    // ...
    default:
      if (lastToken &&
          (lastToken.type === 'begin-object' || lastToken.type === 'begin-array')
          ) {
        this.push(indent.repeat(indent_size));
      }
      this.push(token.content);
      break;
    }
    lastToken = token;
    callback();
  });
};
