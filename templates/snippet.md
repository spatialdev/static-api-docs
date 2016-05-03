# {{info.title}}
### v. {{info.version}}

**Description:**  
{{ info.description }}
**Base Path:** {{ basePath }}  

{% if host and basePath %}
**Base url:** {{ host }}{{ basePath }}/ 
{% endif %}

## Table of Contents
{% for path, verbs in paths %}
{% for verb, verbProp in verbs %}
[{{path}}](#{{path}}_{{verb}})&nbsp;&nbsp;![{{verb | upper}}](https://github.com/spatialdev/static-api-docs/blob/master/images/{{verb}}.png?raw=true)&nbsp;&nbsp;&nbsp;&nbsp;{{verbProp.summary}}
{% endfor %}
{% endfor %}

## API Endpoints

{% for path, verbs in paths %}
{% for verb, verbProp in verbs %}
#### <a id="{{path}}_{{verb}}">{{path}}</a>&nbsp;&nbsp;![{{verb | upper}}](https://github.com/spatialdev/static-api-docs/blob/master/images/{{verb}}.png?raw=true)

{{verbProp.description}}

{% if verbProp.parameters %}
##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|{% for parameter in verbProp.parameters %}
|{{parameter.name}}|{{parameter.required}}|{{parameter.in}}|{{parameter.type}}|{{parameter.description}}|{% endfor %}
{% endif %}

{% for resKey, resVal in verbProp.responses %}
##### {% if resKey == '200' %}Success {% else %}Error {% endif %}{{resKey}} ({{resVal.schemaArr[0].type}})
|Name|Type|Description|
|---|---|---|{% for val in resVal.schemaArr %}{% if val.depth > -1 %}
|{% for i in range(0, val.depth) %}-&nbsp;{% endfor %}{{val.name}}|{{val.type}}|{{val.description}}|{% endif %}{% endfor %}
{% endfor %}
{% endfor %}
{% endfor %}
