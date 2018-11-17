(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return PaperDialogBehaviorImpl});__webpack_require__.d(__webpack_exports__,"a",function(){return PaperDialogBehavior});var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperDialogBehaviorImpl={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.__readied=!0},_modalChanged:function(modal,readied){if(!readied){return}if(modal){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.noCancelOnOutsideClick=!0;this.noCancelOnEscKey=!0;this.withBackdrop=!0}else{this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick;this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey;this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop}},_updateClosingReasonConfirmed:function(confirmed){this.closingReason=this.closingReason||{};this.closingReason.confirmed=confirmed},_onDialogClick:function(event){for(var path=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(event).path,i=0,l=path.indexOf(this),target;i<l;i++){target=path[i];if(target.hasAttribute&&(target.hasAttribute("dialog-dismiss")||target.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(target.hasAttribute("dialog-confirm"));this.close();event.stopPropagation();break}}}},PaperDialogBehavior=[_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__.a,PaperDialogBehaviorImpl]},204:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(63);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML=`<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content)},296:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(201),_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),_events_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);__webpack_exports__.a=Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__.a)(superClass=>class extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__.b)([_events_mixin__WEBPACK_IMPORTED_MODULE_3__.a,_polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__.a],superClass){static get properties(){return{withBackdrop:{type:Boolean,value:!0}}}})},691:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(76),_polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(204),_polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(296);class HaVoiceCommandDialog extends Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_5__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__.a`
    <style include="paper-dialog-shared-styles">
      iron-icon {
        margin-right: 8px;
      }

      .content {
        width: 450px;
        min-height: 80px;
        font-size: 18px;
        padding: 16px;
      }

      .messages {
        max-height: 50vh;
        overflow: auto;
      }

      .messages::after {
        content: "";
        clear: both;
        display: block;
      }

      .message {
        clear: both;
        margin: 8px 0;
        padding: 8px;
        border-radius: 15px;
      }

      .message.user {
        margin-left: 24px;
        float: right;
        text-align: right;
        border-bottom-right-radius: 0px;
        background-color: var(--light-primary-color);
        color: var(--primary-text-color);
      }

      .message.hass {
        margin-right: 24px;
        float: left;
        border-bottom-left-radius: 0px;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .message.error {
        background-color: var(--google-red-500);
        color: var(--text-primary-color);
      }

      .icon {
        text-align: center;
      }

      .icon paper-icon-button {
        height: 52px;
        width: 52px;
      }

      .interimTranscript {
        color: darkgrey;
      }

      [hidden] {
        display: none;
      }

      :host {
        border-radius: 2px;
      }

      @media all and (max-width: 450px) {
        :host {
          margin: 0;
          width: 100%;
          max-height: calc(100% - 64px);

          position: fixed !important;
          bottom: 0px;
          left: 0px;
          right: 0px;
          overflow: scroll;
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }

        .content {
          width: auto;
        }

        .messages {
          max-height: 68vh;
        }
      }
    </style>

    <div class="content">
      <div class="messages" id="messages">
        <template is="dom-repeat" items="[[_conversation]]" as="message">
          <div class$="[[_computeMessageClasses(message)]]">[[message.text]]</div>
        </template>
      </div>
      <template is="dom-if" if="[[results]]">
        <div class="messages">
          <div class="message user">
            <span>{{results.final}}</span>
            <span class="interimTranscript">[[results.interim]]</span>
            …
          </div>
        </div>
      </template>
      <div class="icon" hidden$="[[results]]">
        <paper-icon-button icon="hass:text-to-speech" on-click="startListening"></paper-icon-button>
      </div>
    </div>
`}static get properties(){return{hass:Object,results:{type:Object,value:null,observer:"_scrollMessagesBottom"},_conversation:{type:Array,value:function(){return[{who:"hass",text:"How can I help?"}]},observer:"_scrollMessagesBottom"}}}static get observers(){return["dialogOpenChanged(opened)"]}initRecognition(){this.recognition=new webkitSpeechRecognition;this.recognition.onstart=function(){this.results={final:"",interim:""}}.bind(this);this.recognition.onerror=function(){this.recognition.abort();var text=this.results.final||this.results.interim;this.results=null;if(""===text){text="<Home Assistant did not hear anything>"}this.push("_conversation",{who:"user",text:text,error:!0})}.bind(this);this.recognition.onend=function(){if(null==this.results){return}var text=this.results.final||this.results.interim;this.results=null;this.push("_conversation",{who:"user",text:text});this.hass.callApi("post","conversation/process",{text:text}).then(function(response){this.push("_conversation",{who:"hass",text:response.speech.plain.speech})}.bind(this),function(){this.set(["_conversation",this._conversation.length-1,"error"],!0)}.bind(this))}.bind(this);this.recognition.onresult=function(event){for(var oldResults=this.results,finalTranscript="",interimTranscript="",ind=event.resultIndex;ind<event.results.length;ind++){if(event.results[ind].isFinal){finalTranscript+=event.results[ind][0].transcript}else{interimTranscript+=event.results[ind][0].transcript}}this.results={interim:interimTranscript,final:oldResults.final+finalTranscript}}.bind(this)}startListening(){if(!this.recognition){this.initRecognition()}this.results={interim:"",final:""};this.recognition.start()}_scrollMessagesBottom(){setTimeout(()=>{this.$.messages.scrollTop=this.$.messages.scrollHeight;if(0!==this.$.messages.scrollTop){this.$.dialog.fire("iron-resize")}},10)}dialogOpenChanged(newVal){if(newVal){this.startListening()}else if(!newVal&&this.results){this.recognition.abort()}}_computeMessageClasses(message){return"message "+message.who+(message.error?" error":"")}}customElements.define("ha-voice-command-dialog",HaVoiceCommandDialog)}}]);
//# sourceMappingURL=85645e2bfc9e8fe7c4ac.chunk.js.map