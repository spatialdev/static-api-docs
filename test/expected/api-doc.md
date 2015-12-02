## Uber API: v1.0.0
#### Table of Contents


[/products](#/products_get)&nbsp;&nbsp;![GET](https://github.com/spatialdev/static-api-docs/blob/master/images/get.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Products - Get all or some

[/products](#/products_post)&nbsp;&nbsp;![POST](https://github.com/spatialdev/static-api-docs/blob/master/images/post.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Products - Create one



[/products/:product_id](#/products/:product_id_patch)&nbsp;&nbsp;![PATCH](https://github.com/spatialdev/static-api-docs/blob/master/images/patch.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Product patch

[/products/:product_id](#/products/:product_id_put)&nbsp;&nbsp;![PUT](https://github.com/spatialdev/static-api-docs/blob/master/images/put.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Product patch

[/products/:product_id](#/products/:product_id_delete)&nbsp;&nbsp;![DELETE](https://github.com/spatialdev/static-api-docs/blob/master/images/delete.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;Product - Delete one



***
<br/>


#### <a id="/products_get">/products</a>&nbsp;&nbsp;![GET](https://github.com/spatialdev/static-api-docs/blob/master/images/get.png?raw=true)

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


#### <a id="/products_post">/products</a>&nbsp;&nbsp;![POST](https://github.com/spatialdev/static-api-docs/blob/master/images/post.png?raw=true)

Create a product with the provided attributes.

##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|
|description||body|string|Description of product.|
|display_name||body|string|Display name of product.|
|category||body|string|Product category.|


##### Success 200 (Object)
|Name|Type|Description|
|---|---|---|
|product_id|integer|New product&#39;s id.|

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
|product_id||URL|integer|Product ID.|
|description||body|string|Description of product.|
|display_name||body|string|Display name of product.|
|category||body|string|Product category.|


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


#### <a id="/products/:product_id_put">/products/:product_id</a>&nbsp;&nbsp;![PUT](https://github.com/spatialdev/static-api-docs/blob/master/images/put.png?raw=true)

Update a all of a product&#39;s attributes.

##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|
|product_id||URL|integer|Product ID.|
|description||body|string|Description of product.|
|display_name||body|string|Display name of product.|
|category||body|string|Product category.|


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


#### <a id="/products/:product_id_delete">/products/:product_id</a>&nbsp;&nbsp;![DELETE](https://github.com/spatialdev/static-api-docs/blob/master/images/delete.png?raw=true)

Delete a product with a give ID.

##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|
|product_id||URL|integer|Product ID.|


##### Success 200 (Object)
|Name|Type|Description|
|---|---|---|
|success|boolean|&quot;true&quot; for successful delete.|

##### Error 500 (Object)
|Name|Type|Description|
|---|---|---|
|code|integer||
|message|string||
|fields|string||



