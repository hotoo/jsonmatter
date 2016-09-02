'use strict';

const through2 = require('through2');

module.exports = function(indent) {
  let indent_size = 0;
  if (indent === undefined) {
    indent = '  ';
  }

  return through2.obj(function(token, encode, callback) {
    switch (token.type) {
    case 'begin-object':
      this.push(token.content + '\n' + indent.repeat(++indent_size));
      break;
    case 'end-object':
      indent_size--;
      this.push('\n' + indent.repeat(indent_size) + token.content);
      if (indent_size === 0) {
        this.push('\n');
      }
      break;
    case 'begin-array':
      this.push(token.content + '\n' + indent.repeat(++indent_size));
      break;
    case 'end-array':
      indent_size--;
      this.push('\n' + indent.repeat(indent_size) + token.content);
      if (indent_size === 0) {
        this.push('\n');
      }
      break;
    case 'end-label':
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
      this.push(token.content);
      break;
    }
    callback();
  });
};
