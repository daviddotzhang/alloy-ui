AUI.add("aui-field",function(Q){var H=Q.Lang,K=Q.ClassNameManager.getClassName,I="field",S=Q.cached(function(Y,a){var Z=["field"];if(a){Z.push(a);}Z=Z.join("-");var A=[K(Z,Y)];if(Y=="password"){A.push(K(Z,"text"));}return A.join(" ");}),D=K(I),X=K(I,"content"),G=K(I,"input"),O=K(I,"hint"),F=K(I,"invalid"),E=K(I,"label"),C=K(I,"labels"),W=K(I,"labels","inline"),U={left:[C,"left"].join("-"),right:[C,"right"].join("-"),top:[C,"top"].join("-")},M=/left|right/,R='<span class="'+D+'"></span>',V='<span class="'+X+'"></span>',L='<span class="'+O+'"></span>',P='<input autocomplete="off" class="{cssClass}" id="{id}" name="{name}" type="{type}" />',N='<label class="'+E+'"></label>',T={};var J=function(){J.superclass.constructor.apply(this,arguments);};var B=J.prototype;J.NAME=I;J.ATTRS={readOnly:{value:false},name:{value:"",getter:function(Y){var A=this;return Y||A.get("id");}},id:{getter:function(Z){var A=this;var Y=this.get("node");if(Y){Z=Y.get("id");}if(!Z){Z=Q.guid();}return Z;}},type:{value:"text",writeOnce:true},labelAlign:{value:""},labelNode:{valueFn:function(){var A=this;return Q.Node.create(N);}},labelText:{valueFn:function(){var A=this;return A.get("labelNode").get("innerHTML");},setter:function(Y){var A=this;A.get("labelNode").set("innerHTML",Y);return Y;}},node:{value:null,setter:function(Y){var A=this;return Q.get(Y)||A._createFieldNode();}},fieldHint:{value:""},fieldHintNode:{value:null,setter:function(Y){var A=this;return Q.get(Y)||A._createFieldHint();}},prevVal:{value:""},valid:{value:true,getter:function(a){var A=this;var Y=A.get("validator");var Z=A.get("disabled")||Y(A.get("value"));return Z;}},dirty:{value:false,getter:function(Z){var A=this;if(A.get("disabled")){Z=false;}else{var Y=String(A.get("value"));var a=String(A.get("prevVal"));Z=(Y!==a);}return Z;}},size:{},validator:{valueFn:function(){var A=this;return A.fieldValidator;},validator:H.isFunction},value:{validator:J.prototype.fieldValidator}};J.HTML_PARSER={labelNode:"label",node:"input, textarea, select"};J.getTypeClassName=S;Q.extend(J,Q.Component,{BOUNDING_TEMPLATE:R,CONTENT_TEMPLATE:V,FIELD_TEMPLATE:P,FIELD_TYPE:"text",initializer:function(){var A=this;var Y=A.get("node").guid();T[Y]=A;},renderUI:function(){var A=this;A._renderField();A._renderLabel();A._renderFieldHint();},bindUI:function(){var A=this;A.after("labelAlignChange",A._afterLabelAlignChange);A.after("fieldHintChange",A._afterFieldHintChange);},syncUI:function(){var A=this;A.set("prevVal",A.get("value"));A._updateNodeAttrs();},fieldValidator:function(Y){var A=this;return true;},isValid:function(){var A=this;return A.get("valid");},isDirty:function(){var A=this;return A.get("dirty");},resetValue:function(){var A=this;A.set("value",A.get("prevVal"));A.clearInvalid();},markInvalid:function(Y){var A=this;A.set("fieldHint",Y);A.get("fieldHintNode").show();A.get("boundingBox").addClass(F);},clearInvalid:function(){var A=this;A.reset("fieldHint");if(!A.get("fieldHint")){A.get("fieldHintNode").hide();}A.get("boundingBox").removeClass(F);},validate:function(){var A=this;var Y=A.get("valid");if(Y){A.clearInvalid();}return Y;},_afterFieldHintChange:function(Y){var A=this;A._uiSetFieldHint(Y.newVal,Y.prevVal);},_afterLabelAlignChange:function(Y){var A=this;A._uiSetLabelAlign(Y.newVal,Y.prevVal);},_afterNodeAttrChange:function(Y){var A=this;A._attrNodeSetter(Y.attrName,Y.newVal,Y.prevVal);},_attrNodeGetter:function(Y,b){var A=this;var Z=A.get("node");var a;if(Y!="value"){a=Z.attr(Y);}else{a=Z.val();}if(String(b)!=String(a)){A._setStateVal(Y,a);}return a;},_attrNodeSetter:function(Z,Y,b){var A=this;var a=A.get("node");if(Z!="value"){a.attr(Z,Y);}else{a.val(Y);}return Y;},_createFieldHint:function(){var A=this;var Y=Q.Node.create(L);A.get("contentBox").append(Y);return Y;},_createFieldNode:function(){var A=this;var Y=A.FIELD_TEMPLATE;A.FIELD_TEMPLATE=Q.substitute(Y,{cssClass:G,id:A.get("id"),name:A.get("name"),type:A.get("type")});return Q.Node.create(A.FIELD_TEMPLATE);},_rawAttrGetter:function(Z,Y){var A=this;return A._attrNodeGetter(Y,Z);},_renderField:function(){var A=this;var b=A.get("node");b.val(A.get("value"));var Z=A.get("boundingBox");var Y=A.get("contentBox");var a=A.get("type");Z.addClass(S(a));b.addClass(S(a,"input"));if(!Y.contains(b)){if(b.inDoc()){b.placeBefore(Z);Y.appendChild(b);}else{Y.appendChild(b);}}Z.removeAttribute("tabIndex");},_renderFieldHint:function(){var A=this;var Y=A.get("fieldHint");if(Y){A._uiSetFieldHint(Y);}},_renderLabel:function(){var A=this;var b=A.get("labelText");if(b!==false){var a=A.get("node");var c=a.guid();var b=A.get("labelText");var Z=A.get("labelNode");Z.addClass(K(A.name,"label"));Z.setAttribute("for",c);Z.set("innerHTML",b);A._uiSetLabelAlign(A.get("labelAlign"));var Y=A.get("contentBox");Y.prepend(Z);}},_uiSetLabelAlign:function(Z,b){var A=this;var Y=A.get("boundingBox");Y.replaceClass(U[b],U[Z]);var a="removeClass";if(M.test(Z)){a="addClass";}Y[a](W);},_uiSetFieldHint:function(Y,Z){var A=this;A.get("fieldHintNode").set("innerHTML",Y);},_updateNodeAttrs:function(){var f=this;var A=f._syncedProperties;var Y=A.length;var c={};var Z="addAttr";var a={getter:f._rawAttrGetter};for(var b=Y-1;b>=0;b--){var e=A[b];f.after(e+"Change",f._afterNodeAttrChange);if(f.attrAdded(e)){Z="modifyAttr";}var d=f.get(e);f._attrNodeSetter(e,d);f[Z](e,a);}},_requireAddAttr:false,_syncedProperties:["disabled","id","readOnly","name","size","tabIndex","type","value"]});J.getField=function(a){var b=null;if(a instanceof Q.Field){b=a;}else{if(a&&(H.isString(a)||a instanceof Q.Node||a.nodeName)){var Y=Q.get(a).get("id");b=T[Y];if(!b){var Z=a.ancestor(".aui-field");var A=a.ancestor(".aui-field-content");b=new J({boundingBox:Z,contentBox:A,node:a});}}else{if(H.isObject(a)){b=new J(a);}}}return b;};Q.Field=J;},"@VERSION@",{skinnable:false,requires:["aui-base","aui-component","substitute"]});