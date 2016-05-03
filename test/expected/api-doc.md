# Uber API
### v. 1.0.0

**Description:**  
Move your app forward with the Uber API
**Base Path:** /v1  


**Base url:** api.uber.com/v1/ 


## Table of Contents


[/products](#/products_get)&nbsp;&nbsp;![GET](https://github.com/spatialdev/static-api-docs/blob/master/images/get.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Products - Get all or some



[/products/:product_id](#/products/:product_id_patch)&nbsp;&nbsp;![PATCH](https://github.com/spatialdev/static-api-docs/blob/master/images/patch.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Product patch



## API Endpoints



#### <a id="/products_get">/products</a>&nbsp;&nbsp;![GET](https://github.com/spatialdev/static-api-docs/blob/master/images/get.png?raw=true)

Get all products with all attributes.


##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|
|category|false|query|string|Filter by product category (e.g., &quot;gizmo&quot;)|



##### Success 200 (Object[])
|Name|Type|Description|
|---|---|---|
|product_id|string|Unique identifier representing a specific product.|
|description|string|Description of product.|
|display_name|string|Display name of product.|
|category|string|Category of product. For example, &quot;gizmo&quot;.|
|components|Object[]||
|-&nbsp;component_id|integer|Unique identifier representing a specific component of a product.|
|-&nbsp;component_name|string|Display name of component.|
|alternative_names|String[]||

##### Error 500 (Object)
|Name|Type|Description|
|---|---|---|
|code|integer||
|message|string||
|fields|string||




#### <a id="/products/:product_id_patch">/products/:product_id</a>&nbsp;&nbsp;![PATCH](https://github.com/spatialdev/static-api-docs/blob/master/images/patch.png?raw=true)

Update a subset of a product&#39;s attributes.


##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|
|product_id|true|query|integer|Product ID.|



##### Success 200 (Object)
|Name|Type|Description|
|---|---|---|
|product_id|integer|Updated product&#39;s id.|

##### Error 500 (Object)
|Name|Type|Description|
|---|---|---|
|code|integer||
|message|string||
|fields|string||



