(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{198:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},208:function(module,__webpack_exports__,__webpack_require__){"use strict";var polymer_legacy=__webpack_require__(2),iron_flex_layout=__webpack_require__(26),iron_control_state=__webpack_require__(12),iron_validatable_behavior=__webpack_require__(37),polymer_fn=__webpack_require__(3),polymer_dom=__webpack_require__(1),html_tag=__webpack_require__(0);/**
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
`,is:"paper-textarea",behaviors:[paper_input_behavior.a,iron_form_element_behavior.a],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(start){this.$.input.textarea.selectionStart=start},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(end){this.$.input.textarea.selectionEnd=end},_ariaLabelledByChanged:function(ariaLabelledBy){this._focusableElement.setAttribute("aria-labelledby",ariaLabelledBy)},_ariaDescribedByChanged:function(ariaDescribedBy){this._focusableElement.setAttribute("aria-describedby",ariaDescribedBy)},get _focusableElement(){return this.inputElement.textarea}})},703:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(155),_polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(154),_polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(121),_polymer_paper_button_paper_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54),_polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(153),_polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(208),_polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(198),_polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(119),_polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(140),_polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(172),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(4),_components_ha_menu_button__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(134),_resources_ha_style__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(120),_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(78),_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(10),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(16);let registeredDialog=!1;class HaPanelMailbox extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__.a)(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_11__.a)){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_10__.a`
    <style include='ha-style'>
      :host {
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }

      .content {
        padding: 16px;
        max-width: 600px;
        margin: 0 auto;
      }

      paper-card {
        display: block;
      }

      paper-item {
        cursor: pointer;
      }

      .empty {
        text-align: center;
        color: var(--secondary-text-color);
      }

      .header {
        @apply --paper-font-title;
      }

      .row {
        display: flex;
       justify-content: space-between;
      }

      @media all and (max-width: 450px) {
        .content {
          width: auto;
          padding: 0;
        }
      }

      .tip {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .date {
        color: var(--primary-text-color);
      }
    </style>

    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
          <div main-title>[[localize('panel.mailbox')]]</div>
        </app-toolbar>
        <div sticky hidden$='[[areTabsHidden(platforms)]]'>
          <paper-tabs
            scrollable
            selected='[[_currentPlatform]]'
            on-iron-activate='handlePlatformSelected'
          >
            <template is='dom-repeat' items='[[platforms]]'>
              <paper-tab data-entity='[[item]]' >
                [[getPlatformName(item)]]
              </paper-tab>
            </template>
          </paper-tabs>
        </div>
      </app-header>
      <div class='content'>
        <paper-card>
          <template is='dom-if' if='[[!_messages.length]]'>
            <div class='card-content empty'>
              [[localize('ui.panel.mailbox.empty')]]
            </div>
          </template>
          <template is='dom-repeat' items='[[_messages]]'>
            <paper-item on-click='openMP3Dialog'>
              <paper-item-body style="width:100%" two-line>
                <div class="row">
                  <div>[[item.caller]]</div>
                  <div class="tip">[[localize('ui.duration.second', 'count', item.duration)]]</div>
                </div>
                <div secondary>
                  <span class="date">[[item.timestamp]]</span> - [[item.message]]
                </div>
              </paper-item-body>
            </paper-item>
          </template>
        </paper-card>
      </div>
    </app-header-layout>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean,value:!1},showMenu:{type:Boolean,value:!1},platforms:{type:Array},_messages:{type:Array},_currentPlatform:{type:Number,value:0}}}connectedCallback(){super.connectedCallback();if(!registeredDialog){registeredDialog=!0;this.fire("register-dialog",{dialogShowEvent:"show-audio-message-dialog",dialogTag:"ha-dialog-show-audio-message",dialogImport:()=>__webpack_require__.e(60).then(__webpack_require__.bind(null,678))})}this.hassChanged=this.hassChanged.bind(this);this.hass.connection.subscribeEvents(this.hassChanged,"mailbox_updated").then(function(unsub){this._unsubEvents=unsub}.bind(this));this.computePlatforms().then(function(platforms){this.platforms=platforms;this.hassChanged()}.bind(this))}disconnectedCallback(){super.disconnectedCallback();if(this._unsubEvents)this._unsubEvents()}hassChanged(){if(!this._messages){this._messages=[]}this.getMessages().then(function(items){this._messages=items}.bind(this))}openMP3Dialog(event){this.fire("show-audio-message-dialog",{hass:this.hass,message:event.model.item})}getMessages(){const platform=this.platforms[this._currentPlatform];return this.hass.callApi("GET",`mailbox/messages/${platform.name}`).then(values=>{const platformItems=[],arrayLength=values.length;for(let i=0;i<arrayLength;i++){const datetime=Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__.a)(new Date(1e3*values[i].info.origtime),this.hass.language);platformItems.push({timestamp:datetime,caller:values[i].info.callerid,message:values[i].text,sha:values[i].sha,duration:values[i].info.duration,platform:platform})}return platformItems.sort(function(a,b){return new Date(b.timestamp)-new Date(a.timestamp)})})}computePlatforms(){return this.hass.callApi("GET","mailbox/platforms")}handlePlatformSelected(ev){const newPlatform=ev.detail.selected;if(newPlatform!==this._currentPlatform){this._currentPlatform=newPlatform;this.hassChanged()}}areTabsHidden(platforms){return!platforms||2>platforms.length}getPlatformName(item){const entity=`mailbox.${item.name}`,stateObj=this.hass.states[entity.toLowerCase()];return stateObj.attributes.friendly_name}}customElements.define("ha-panel-mailbox",HaPanelMailbox)}}]);
//# sourceMappingURL=eab76b9aa51da7fe9c85.chunk.js.map