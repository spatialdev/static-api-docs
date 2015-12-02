/*
 * static-api-docs
 *
 *
 * Copyright (c) 2015 Richard Gwozdz
 * Licensed under the Apache license.
 */

'use strict';

var fs = require('fs');
var nunjucks = require('nunjucks');
var lodash = require('lodash');
var jsonRefs = require('json-refs');
var copy = require('copy');

nunjucks.configure({ autoescape: true });

module.exports = function (grunt) {


  grunt.registerMultiTask('static_api_docs', '', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});



    if(!this.data.hasOwnProperty('src')){
      grunt.log.warn('No "src" property in target: "' + this.target + '".');
      return false;
    }
    if(!this.data.hasOwnProperty('dest')){
      grunt.log.warn('No "dest" property in target: "' + this.target + '".');
      return false;
    }
    if (!grunt.file.exists(this.data.src)) {
      grunt.log.warn('Source file "' + this.data.src + '" not found.');
      return false;
    }

    // Swagger JSON source
    var swaggerJSON = require(process.cwd() + '/' + this.data.src);
    var apiModel = jsonRefs.resolveLocalRefs(swaggerJSON).resolved;

    // directory to copy and source images - from Gruntfile
    var imgDir  = options.imageDir || this.data.dest;
    apiModel.imageDir = imgDir;

    copy.dirSync('images/', imgDir);

    var fileName = options.filename ||  "api-doc";
    var markdownOutputFile = this.data.dest + '/' + fileName + ".md";
    var htmlOutputFile = this.data.dest + '/' + fileName + ".html";

    // Parse the Swagger schema and reform to our liking
    lodash.forIn(apiModel.paths, function (path) {

      lodash.forIn(path, function (verb) {

        lodash.forIn(verb.responses, function (response) {

          response.schemaArr = [];

          recurvsiveFlatten(undefined, response.schema, response.schemaArr, -1);

        });
      });
    });

    grunt.file.write(markdownOutputFile, nunjucks.render(process.cwd() + '/templates/snippet.md', apiModel));
    grunt.file.write(htmlOutputFile, nunjucks.render(process.cwd() +  '/templates/shell.html', apiModel));
    grunt.log.writeln('Files created.');

  });
};


// Swagger spec may lead to a high degree of nesting in response objects (objects within objects with objects, etc). This
// function flattens that schmema and assigns each schema item a "depth" property.  The outer object wrapper has depth -1.
function recurvsiveFlatten(name, obj, arr, depth){

  var type;

  // "items" property flags a nested object or array, so it needs special treatment
  if (obj.hasOwnProperty('items')) {

    type = obj.items.type;

    // Keep track of what type of array this is (if it is an array type)
    if (obj.type === 'array') {
      type = lodash.capitalize(type) + '[]';
    }

    // Add the object or array to the flattened property array
    arr.push({name: name, type: type, depth: depth});

    // Loop thru the item's properties and execute the recursive function
    lodash.forIn(obj.items.properties, function (val, key) {
      recurvsiveFlatten(key, val, arr, depth + 1);
    });

  } else if (obj.hasOwnProperty('properties')) {

    // Add the object to the flattened property array
    arr.push({name: name, type: 'Object', depth: depth});

    // Execute the recursive function on all properties
    lodash.forIn(obj.properties, function(val, key){
      recurvsiveFlatten(key, val, arr, depth + 1);
    });
  } else {

    // Add the property to the flattened property array
    arr.push({name: name, type: obj.type, description: obj.description, depth: depth});
  }

}