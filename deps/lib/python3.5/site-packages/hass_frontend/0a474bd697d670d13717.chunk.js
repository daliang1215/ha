(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(module,__webpack_exports__,__webpack_require__){"use strict";var polymer_legacy=__webpack_require__(2),iron_flex_layout=__webpack_require__(26),iron_control_state=__webpack_require__(12),iron_validatable_behavior=__webpack_require__(37),polymer_fn=__webpack_require__(3),polymer_dom=__webpack_require__(1),html_tag=__webpack_require__(0);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(polymer_fn.a)({_template:html_tag.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name\$="[[name]]" aria-label\$="[[label]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" disabled\$="[[disabled]]" rows\$="[[rows]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[iron_validatable_behavior.a,iron_control_state.a],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(value){this.$.textarea.selectionStart=value},set selectionEnd(value){this.$.textarea.selectionEnd=value},attached:function(){var IS_IOS=navigator.userAgent.match(/iP(?:[oa]d|hone)/);if(IS_IOS){this.$.textarea.style.marginLeft="-3px"}},validate:function(){var valid=this.$.textarea.validity.valid;if(valid){if(this.required&&""===this.value){valid=!1}else if(this.hasValidator()){valid=iron_validatable_behavior.a.validate.call(this,this.value)}}this.invalid=!valid;this.fire("iron-input-validate");return valid},_bindValueChanged:function(bindValue){this.value=bindValue},_valueChanged:function(value){var textarea=this.textarea;if(!textarea){return}if(textarea.value!==value){textarea.value=!(value||0===value)?"":value}this.bindValue=value;this.$.mirror.innerHTML=this._valueForMirror();this.fire("bind-value-changed",{value:this.bindValue})},_onInput:function(event){var eventPath=Object(polymer_dom.b)(event).path;this.value=eventPath?eventPath[0].value:event.target.value},_constrain:function(tokens){var _tokens;tokens=tokens||[""];if(0<this.maxRows&&tokens.length>this.maxRows){_tokens=tokens.slice(0,this.maxRows)}else{_tokens=tokens.slice(0)}while(0<this.rows&&_tokens.length<this.rows){_tokens.push("")}return _tokens.join("<br/>")+"&#160;"},_valueForMirror:function(){var input=this.textarea;if(!input){return}this.tokens=input&&input.value?input.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""];return this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}});var paper_input_char_counter=__webpack_require__(91),paper_input_container=__webpack_require__(92),paper_input_error=__webpack_require__(93),iron_form_element_behavior=__webpack_require__(34),paper_input_behavior=__webpack_require__(68);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(polymer_fn.a)({_template:html_tag.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float\$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate\$="[[autoValidate]]" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <label hidden\$="[[!label]]" aria-hidden="true" for\$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id\$="[[_inputId]]" aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator\$="[[validator]]" disabled\$="[[disabled]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" required\$="[[required]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" autocapitalize\$="[[autocapitalize]]" rows\$="[[rows]]" max-rows\$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[paper_input_behavior.a,iron_form_element_behavior.a],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(start){this.$.input.textarea.selectionStart=start},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(end){this.$.input.textarea.selectionEnd=end},_ariaLabelledByChanged:function(ariaLabelledBy){this._focusableElement.setAttribute("aria-labelledby",ariaLabelledBy)},_ariaDescribedByChanged:function(ariaDescribedBy){this._focusableElement.setAttribute("aria-describedby",ariaDescribedBy)},get _focusableElement(){return this.inputElement.textarea}})},418:function(module,__webpack_exports__,__webpack_require__){"use strict";var polymer_legacy=__webpack_require__(2),SPLICES_RX=/\.splices$/,LENGTH_RX=/\.length$/,NUMBER_RX=/\.?#?([0-9]+)$/;/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const AppStorageBehavior={properties:{data:{type:Object,notify:!0,value:function(){return this.zeroValue}},sequentialTransactions:{type:Boolean,value:!1},log:{type:Boolean,value:!1}},observers:["__dataChanged(data.*)"],created:function(){this.__initialized=!1;this.__syncingToMemory=!1;this.__initializingStoredValue=null;this.__transactionQueueAdvances=Promise.resolve()},ready:function(){this._initializeStoredValue()},get isNew(){return!0},get transactionsComplete(){return this.__transactionQueueAdvances},get zeroValue(){},saveValue:function(){return Promise.resolve()},reset:function(){},destroy:function(){this.data=this.zeroValue;return this.saveValue()},initializeStoredValue:function(){if(this.isNew){return Promise.resolve()}return this._getStoredValue("data").then(function(data){this._log("Got stored value!",data,this.data);if(null==data){return this._setStoredValue("data",this.data||this.zeroValue)}else{this.syncToMemory(function(){this.set("data",data)})}}.bind(this))},getStoredValue:function(){return Promise.resolve()},setStoredValue:function(storagePath,value){return Promise.resolve(value)},memoryPathToStoragePath:function(path){return path},storagePathToMemoryPath:function(path){return path},syncToMemory:function(operation){if(this.__syncingToMemory){return}this._group("Sync to memory.");this.__syncingToMemory=!0;operation.call(this);this.__syncingToMemory=!1;this._groupEnd("Sync to memory.")},valueIsEmpty:function(value){if(Array.isArray(value)){return 0===value.length}else if(Object.prototype.isPrototypeOf(value)){return 0===Object.keys(value).length}else{return null==value}},_getStoredValue:function(path){return this.getStoredValue(this.memoryPathToStoragePath(path))},_setStoredValue:function(path,value){return this.setStoredValue(this.memoryPathToStoragePath(path),value)},_enqueueTransaction:function(transaction){if(this.sequentialTransactions){transaction=transaction.bind(this)}else{var result=transaction.call(this);transaction=function(){return result}}return this.__transactionQueueAdvances=this.__transactionQueueAdvances.then(transaction).catch(function(error){this._error("Error performing queued transaction.",error)}.bind(this))},_log:function(...args){if(this.log){console.log.apply(console,args)}},_error:function(...args){if(this.log){console.error.apply(console,args)}},_group:function(...args){if(this.log){console.group.apply(console,args)}},_groupEnd:function(...args){if(this.log){console.groupEnd.apply(console,args)}},_initializeStoredValue:function(){if(this.__initializingStoredValue){return}this._group("Initializing stored value.");var initializingStoredValue=this.__initializingStoredValue=this.initializeStoredValue().then(function(){this.__initialized=!0;this.__initializingStoredValue=null;this._groupEnd("Initializing stored value.")}.bind(this)).catch(function(){this.__initializingStoredValue=null;this._groupEnd("Initializing stored value.")}.bind(this));return this._enqueueTransaction(function(){return initializingStoredValue})},__dataChanged:function(change){if(this.isNew||this.__syncingToMemory||!this.__initialized||this.__pathCanBeIgnored(change.path)){return}var path=this.__normalizeMemoryPath(change.path),value=change.value,indexSplices=value&&value.indexSplices;this._enqueueTransaction(function(){this._log("Setting",path+":",indexSplices||value);if(indexSplices&&this.__pathIsSplices(path)){path=this.__parentPath(path);value=this.get(path)}return this._setStoredValue(path,value)})},__normalizeMemoryPath:function(path){for(var parts=path.split("."),parentPath=[],currentPath=[],normalizedPath=[],i=0;i<parts.length;++i){currentPath.push(parts[i]);if(/^#/.test(parts[i])){normalizedPath.push(this.get(parentPath).indexOf(this.get(currentPath)))}else{normalizedPath.push(parts[i])}parentPath.push(parts[i])}return normalizedPath.join(".")},__parentPath:function(path){var parentPath=path.split(".");return parentPath.slice(0,parentPath.length-1).join(".")},__pathCanBeIgnored:function(path){return LENGTH_RX.test(path)&&Array.isArray(this.get(this.__parentPath(path)))},__pathIsSplices:function(path){return SPLICES_RX.test(path)&&Array.isArray(this.get(this.__parentPath(path)))},__pathRefersToArray:function(path){return(SPLICES_RX.test(path)||LENGTH_RX.test(path))&&Array.isArray(this.get(this.__parentPath(path)))},__pathTailToIndex:function(path){var tail=path.split(".").pop();return window.parseInt(tail.replace(NUMBER_RX,"$1"),10)}};var polymer_fn=__webpack_require__(3);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/Object(polymer_fn.a)({is:"app-localstorage-document",behaviors:[AppStorageBehavior],properties:{key:{type:String,notify:!0},sessionOnly:{type:Boolean,value:!1},storage:{type:Object,computed:"__computeStorage(sessionOnly)"}},observers:["__storageSourceChanged(storage, key)"],attached:function(){this.listen(window,"storage","__onStorage");this.listen(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")},detached:function(){this.unlisten(window,"storage","__onStorage");this.unlisten(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")},get isNew(){return!this.key},saveValue:function(key){try{this.__setStorageValue(key,this.data)}catch(e){return Promise.reject(e)}this.key=key;return Promise.resolve()},reset:function(){this.key=null;this.data=this.zeroValue},destroy:function(){try{this.storage.removeItem(this.key);this.reset()}catch(e){return Promise.reject(e)}return Promise.resolve()},getStoredValue:function(path){var value;if(null!=this.key){try{value=this.__parseValueFromStorage();if(null!=value){value=this.get(path,{data:value})}else{value=void 0}}catch(e){return Promise.reject(e)}}return Promise.resolve(value)},setStoredValue:function(path,value){if(null!=this.key){try{this.__setStorageValue(this.key,this.data)}catch(e){return Promise.reject(e)}this.fire("app-local-storage-changed",this,{node:window.top})}return Promise.resolve(value)},__computeStorage:function(sessionOnly){return sessionOnly?window.sessionStorage:window.localStorage},__storageSourceChanged:function(){this._initializeStoredValue()},__onStorage:function(event){if(event.key!==this.key||event.storageArea!==this.storage){return}this.syncToMemory(function(){this.set("data",this.__parseValueFromStorage())})},__onAppLocalStorageChanged:function(event){if(event.detail===this||event.detail.key!==this.key||event.detail.storage!==this.storage){return}this.syncToMemory(function(){this.set("data",event.detail.data)})},__parseValueFromStorage:function(){try{return JSON.parse(this.storage.getItem(this.key))}catch(e){console.error("Failed to parse value from storage for",this.key)}},__setStorageValue:function(key,value){if("undefined"===typeof value)value=null;this.storage.setItem(key,JSON.stringify(value))}})}}]);
//# sourceMappingURL=0a474bd697d670d13717.chunk.js.map