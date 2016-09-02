'use strict';

const tokenizer = require('json-tokenizer');
const fs = require('fs');
const path = require('path');
require('should');
const jsonmatter = require('..');

describe('test/jsonmatter.test.js', function() {
  it('online.json', function(done) {
    let formattedJSON = '';
    fs.createReadStream(path.resolve(__dirname, './fixtures/oneline.json'))
      .pipe(tokenizer())
      .pipe(jsonmatter())
      .on('data', (chunk) => {
        formattedJSON += String(chunk);
      })
      .on('end', function() {
        const str = fs.readFileSync(path.resolve(__dirname, './result/oneline.json'), 'utf-8');
        formattedJSON.should.be.eql(str);
        done();
      });
  });

  it('array.json', function(done) {
    let formattedJSON = '';
    fs.createReadStream(path.resolve(__dirname, './fixtures/array.json'))
      .pipe(tokenizer())
      .pipe(jsonmatter())
      .on('data', (chunk) => {
        formattedJSON += String(chunk);
      })
      .on('end', function() {
        const str = fs.readFileSync(path.resolve(__dirname, './result/array.json'), 'utf-8');
        formattedJSON.should.be.eql(str);
        done();
      });
  });
});
