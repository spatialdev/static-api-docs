# static-api-docs

> Transfrom API documentation stored in [Swagger spec](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#schema) JSON into formatted markdown and static HTML files. See the example output below.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install static-api-docs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('static-api-docs');
```

## The "static_api_docs" task

### Overview
In your project's Gruntfile, add a section named `static_api_docs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  static_api_docs: {
   your_target: {
      src: "path/to/the/swagger/spec/JSON/for/API"
      dest: "path/to/the/destination/directory"
      options: {
		filename: "filename"
	  }
    },
  },
})
```

### Options

#### target.options.filename
Type: `String`
Default value: `'api-doc'`

A string value that will be the root of the generated files (api-doc.md, api-doc.html).

### Usage Examples


```js
grunt.initConfig({
  static_api_docs: {
    test: {
      src: 'swagger.json',
      dest: 'outputDir',
      options: {
        filename: 'my-static-doc',
      }
    }
  },
})
```

### Example Input and Output
Some example output created by this plugin and some [example JSON](test/fixtures/swagger.json) following [Swagger spec](https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#schema) .

## Uber API: v1.0.0
#### Table of Contents


[/products](#/products_get)&nbsp;&nbsp;![GET](images/get.png)&nbsp;&nbsp;&nbsp;&nbsp;Products

***
<br/>
#### <a id="/products_get">/products</a>&nbsp;&nbsp;![GET](images/get.png)

Get all products with all attributes.

##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|
|category|false|query|string|Filter by product category (e.g., &quot;gizmo&quot;)|


##### Success 200 (Object[])
|Name|Type|Description|
|---|---|---|
|product_id|string|Unique identifier representing a specific product for a given latitude &amp; longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles.|
|description|string|Description of product.|
|display_name|string|Display name of product.|
|category|string|Category of product. For example, &quot;gizmo&quot;.|

##### Error 500 (Object)
|Name|Type|Description|
|---|---|---|
|code|integer||
|message|string||
|fields|string||

----
### Notes on nested response JSON
In the event that your response JSON includes nested data, Static API Docs will render the nested properties with indentation. For example, a response property named "components" might be an object array, and can be represented ins Swagger spec JSON like:

	"components": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "component_id": {
            "type": "integer",
            "description": "Unique identifier."
          },
          "component_name": {
            "type": "string",
            "description": "Display name of component."
          }
        }
      }
    }

The plugin will render the object array like this:  
 

|Name|Type|Description|
|---|---|---|
|components|Object[]||
|-&nbsp;component_id|integer|Unique identifier representing a specific component of a product.|
|-&nbsp;component_name|string|Display name of component.|


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Spatial Development International, LLC. Licensed under the Apache license.
