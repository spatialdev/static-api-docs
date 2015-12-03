'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.static_api_docs = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  test: function(test) {

    // Markdown creation
    var actual = grunt.file.read('tmp/api-doc.md');
    var expected = grunt.file.read('test/expected/api-doc.md');
    test.equal(actual, expected, 'Generated file matches expectation');

    // HTML creation
    actual = grunt.file.read('tmp/api-doc.html');
    expected = grunt.file.read('test/expected/api-doc.html');
    test.equal(actual, expected, 'Generated file matches expectation');


    test.done();
  }
};
