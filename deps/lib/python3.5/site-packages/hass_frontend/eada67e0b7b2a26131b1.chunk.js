(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return PaperDialogBehaviorImpl});__webpack_require__.d(__webpack_exports__,"a",function(){return PaperDialogBehavior});var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1);/**
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
</dom-module>`;document.head.appendChild($_documentContainer.content)},207:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_paper_dialog_behavior_paper_dialog_shared_styles_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(204),_polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(95),_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(201),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__.a,_polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_2__.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation();this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation();this.playAnimation("exit")},_onNeonAnimationFinish:function(){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}})},712:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_paper_button_paper_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54),_polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(207),_polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(124),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),_resources_ha_style__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(120),_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10);class HaDialogAddUser extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__.a`
    <style include="ha-style-dialog">
      .error {
        color: red;
      }
      paper-dialog {
        max-width: 500px;
      }
      .username {
        margin-top: -8px;
      }
    </style>
    <paper-dialog id="dialog" with-backdrop opened="{{_opened}}" on-opened-changed="_openedChanged">
      <h2>Add user</h2>
      <div>
        <template is="dom-if" if="[[_errorMsg]]">
          <div class='error'>[[_errorMsg]]</div>
        </template>
        <paper-input
          class='name'
          label='Name'
          value='{{_name}}'
          required
          auto-validate
          autocapitalize='on'
          error-message='Required'
          on-blur='_maybePopulateUsername'
        ></paper-input>
        <paper-input
          class='username'
          label='Username'
          value='{{_username}}'
          required
          auto-validate
          autocapitalize='none'
          error-message='Required'
        ></paper-input>
        <paper-input
          label='Password'
          type='password'
          value='{{_password}}'
          required
          auto-validate
          error-message='Required'
        ></paper-input>
      </div>
      <div class="buttons">
        <template is="dom-if" if="[[_loading]]">
          <div class='submit-spinner'><paper-spinner active></paper-spinner></div>
        </template>
        <template is="dom-if" if="[[!_loading]]">
          <paper-button on-click="_createUser">Create</paper-button>
        </template>
      </div>
    </paper-dialog>
`}static get properties(){return{_hass:Object,_dialogClosedCallback:Function,_loading:{type:Boolean,value:!1},_errorMsg:String,_opened:{type:Boolean,value:!1},_name:String,_username:String,_password:String}}ready(){super.ready();this.addEventListener("keypress",ev=>{if(13===ev.keyCode){this._createUser()}})}showDialog({hass,dialogClosedCallback}){this.hass=hass;this._dialogClosedCallback=dialogClosedCallback;this._loading=!1;this._opened=!0;setTimeout(()=>this.shadowRoot.querySelector("paper-input").focus(),0)}_maybePopulateUsername(){if(this._username)return;const parts=this._name.split(" ");if(parts.length){this._username=parts[0].toLowerCase()}}async _createUser(){if(!this._name||!this._username||!this._password)return;this._loading=!0;this._errorMsg=null;let userId;try{const userResponse=await this.hass.callWS({type:"config/auth/create",name:this._name});userId=userResponse.user.id}catch(err){this._loading=!1;this._errorMsg=err.code;return}try{await this.hass.callWS({type:"config/auth_provider/homeassistant/create",user_id:userId,username:this._username,password:this._password})}catch(err){this._loading=!1;this._errorMsg=err.code;await this.hass.callWS({type:"config/auth/delete",user_id:userId});return}this._dialogDone(userId)}_dialogDone(userId){this._dialogClosedCallback({userId});this.setProperties({_errorMsg:null,_username:"",_password:"",_dialogClosedCallback:null,_opened:!1})}_equals(a,b){return a===b}_openedChanged(ev){if(this._dialogClosedCallback&&!ev.detail.value){this._dialogDone()}}}customElements.define("ha-dialog-add-user",HaDialogAddUser)}}]);
//# sourceMappingURL=eada67e0b7b2a26131b1.chunk.js.map