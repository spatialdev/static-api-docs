## {{info.title}}: v{{info.version}}
####Table of Contents
{% for path, verbs in paths %}
{% for verb, verbProp in verbs %}
[{{path}}](#{{path}}_{{verb}})&nbsp;&nbsp;![{{verb | upper}}]({{imageDir}}{{verb}}.png)&nbsp;&nbsp;&nbsp;&nbsp;{{verbProp.summary}}
{% endfor %}
{% endfor %}

***
<br/>
{% for path, verbs in paths %}
{% for verb, verbProp in verbs %}
####<a id="{{path}}_{{verb}}">{{path}}</a>&nbsp;&nbsp;![{{verb | upper}}]({{imageDir}}{{verb}}.png)

{{verbProp.description}}

##### Parameters
|Name|Required|In|Type|Description|
|---|---|---|---|---|{% for parameter in verbProp.parameters %}
|{{parameter.name}}|{{parameter.required}}|{{parameter.in}}|{{parameter.type}}|{{parameter.description}}|{% endfor %}

{% for resKey, resVal in verbProp.responses %}
#####{% if resKey == '200' %}Success {% else %}Error {% endif %}{{resKey}} ({{resVal.schemaArr[0].type}})
|Name|Type|Description|
|---|---|---|{% for val in resVal.schemaArr %}{% if val.depth > -1 %}
|{% for i in range(0, val.depth) %}&nbsp;{% endfor %}{{val.name}}|{{val.type}}|{{val.description}}|{% endif %}{% endfor %}
{% endfor %}
{% endfor %}
{% endfor %}