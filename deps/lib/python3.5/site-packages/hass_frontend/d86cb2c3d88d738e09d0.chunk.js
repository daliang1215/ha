(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{198:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
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
`,is:"paper-item-body"})},201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return PaperDialogBehaviorImpl});__webpack_require__.d(__webpack_exports__,"a",function(){return PaperDialogBehavior});var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1);/**
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
`,is:"paper-dialog",behaviors:[_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__.a,_polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_2__.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation();this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation();this.playAnimation("exit")},_onNeonAnimationFinish:function(){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}})},210:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(201),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
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
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget();this.classList.add("no-padding")},attached:function(){this._ensureTarget();requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",0<this.scrollTarget.scrollTop);this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight);this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement;if(this.dialogElement&&this.dialogElement.behaviors&&0<=this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__.b)){this.dialogElement.sizingTarget=this.scrollTarget;this.scrollTarget.classList.remove("fit")}else if(this.dialogElement){this.scrollTarget.classList.add("fit")}}})},212:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_button_paper_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54),_polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(124),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4);class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__.a`
    <style>
      .container {
        position: relative;
        display: inline-block;
      }

      paper-button {
        transition: all 1s;
      }

      .success paper-button {
        color: white;
        background-color: var(--google-green-500);
        transition: none;
      }

      .error paper-button {
        color: white;
        background-color: var(--google-red-500);
        transition: none;
      }

      paper-button[disabled] {
        color: #c8c8c8;
      }

      .progress {
        @apply --layout;
        @apply --layout-center-center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    </style>
    <div class="container" id="container">
      <paper-button id="button" disabled="[[computeDisabled(disabled, progress)]]" on-click="buttonTapped">
        <slot></slot>
      </paper-button>
      <template is="dom-if" if="[[progress]]">
        <div class="progress">
          <paper-spinner active=""></paper-spinner>
        </div>
      </template>
    </div>
`}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}}}tempClass(className){var classList=this.$.container.classList;classList.add(className);setTimeout(()=>{classList.remove(className)},1e3)}ready(){super.ready();this.addEventListener("click",ev=>this.buttonTapped(ev))}buttonTapped(ev){if(this.progress)ev.stopPropagation()}actionSuccess(){this.tempClass("success")}actionError(){this.tempClass("error")}computeDisabled(disabled,progress){return disabled||progress}}customElements.define("ha-progress-button",HaProgressButton)},214:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_ha_progress_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(212),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);class HaCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
    <ha-progress-button id="progress" progress="[[progress]]" on-click="buttonTapped"><slot></slot></ha-progress-button>
`}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}}}}buttonTapped(){this.progress=!0;var el=this,eventData={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then(function(){el.progress=!1;el.$.progress.actionSuccess();eventData.success=!0},function(){el.progress=!1;el.$.progress.actionError();eventData.success=!1}).then(function(){el.fire("hass-service-called",eventData)})}}customElements.define("ha-call-service-button",HaCallServiceButton)},695:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(155),_polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(154),_polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(121),_polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(153),_polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(210),_polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(207),_polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(62),_polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(198),_polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(119),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(4),_components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(214),_components_ha_menu_button__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(134),_resources_ha_style__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(120),_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(78),_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(112),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(16),_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(10);let registeredDialog=!1;class HaPanelDevInfo extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__.a)(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_10__.a)){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_9__.a`
    <style include="iron-positioning ha-style">
      :host {
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }

      .content {
        padding: 16px 0px 16px 0;
      }

      .about {
        text-align: center;
        line-height: 2em;
      }

      .version {
        @apply --paper-font-headline;
      }

      .develop {
        @apply --paper-font-subhead;
      }

      .about a {
        color: var(--dark-primary-color);
      }

      .error-log-intro {
        margin: 16px;
      }

      paper-icon-button {
        float: right;
      }

      .error-log {
        @apply --paper-font-code)
        clear: both;
        white-space: pre-wrap;
        margin: 16px;
      }

      .system-log-intro {
        margin: 16px;
        border-top: 1px solid var(--light-primary-color);
        padding-top: 16px;
      }

      paper-card {
        display: block;
        padding-top: 16px;
      }

      paper-item {
        cursor: pointer;
      }

      .header {
        @apply --paper-font-title;
      }

      paper-dialog {
        border-radius: 2px;
      }

      @media all and (max-width: 450px), all and (max-height: 500px) {
        paper-dialog {
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
      }

      .loading-container {
        @apply --layout-vertical;
        @apply --layout-center-center;
        height: 100px;
       }
    </style>

    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
          <div main-title>About</div>
        </app-toolbar>
      </app-header>

      <div class='content'>
        <div class='about'>
          <p class='version'>
            <a href='https://www.home-assistant.io'><img src="/static/icons/favicon-192x192.png" height="192" /></a><br />
            Home Assistant<br />
            [[hass.config.version]]
          </p>
          <p>
            Path to configuration.yaml: [[hass.config.config_dir]]
            <br><a href="#" on-click="_showComponents">[[loadedComponents.length]] Loaded Components</a>
          </p>
          <p class='develop'>
            <a href='https://www.home-assistant.io/developers/credits/' target='_blank'>
              Developed by a bunch of awesome people.
            </a>
          </p>
          <p>
            Published under the Apache 2.0 license<br />
            Source:
            <a href='https://github.com/home-assistant/home-assistant' target='_blank'>server</a> &mdash;
            <a href='https://github.com/home-assistant/home-assistant-polymer' target='_blank'>frontend-ui</a>
          </p>
          <p>
            Built using
            <a href='https://www.python.org'>Python 3</a>,
            <a href='https://www.polymer-project.org' target='_blank'>Polymer</a>,
            Icons by <a href='https://www.google.com/design/icons/' target='_blank'>Google</a> and <a href='https://MaterialDesignIcons.com' target='_blank'>MaterialDesignIcons.com</a>.
          </p>
          <p>
            Frontend JavaScript version: [[jsVersion]]
            <template is='dom-if' if='[[customUiList.length]]'>
              <div>
                Custom UIs:
                <template is='dom-repeat' items='[[customUiList]]'>
                  <div>
                    <a href='[[item.url]]' target='_blank'>[[item.name]]</a>: [[item.version]]
                  </div>
                </template>
              </div>
            </template>
          </p>
          <p>
            <a href='/lovelace'>Try out the new Lovelace UI (experimental)</a>
            <div id="love" style="cursor:pointer;" on-click="_toggleDefaultPage">[[_defaultPageText()]]</div
          </p>
        </div>

        <div class="system-log-intro">
          <paper-card>
            <template is='dom-if' if='[[updating]]'>
              <div class='loading-container'>
                <paper-spinner active></paper-spinner>
              </div>
            </template>
            <template is='dom-if' if='[[!updating]]'>
              <template is='dom-if' if='[[!items.length]]'>
                <div class='card-content'>There are no new issues!</div>
              </template>
              <template is='dom-repeat' items='[[items]]'>
                <paper-item on-click='openLog'>
                  <paper-item-body two-line>
                    <div class="row">
                      [[item.message]]
                    </div>
                    <div secondary>
                      [[formatTime(item.timestamp)]] [[item.source]] ([[item.level]])
                    </div>
                  </paper-item-body>
                </paper-item>
              </template>

              <div class='card-actions'>
                <ha-call-service-button
                 hass='[[hass]]'
                 domain='system_log'
                 service='clear'
                 >Clear</ha-call-service-button>
                <ha-progress-button
                 on-click='_fetchData'
                 >Refresh</ha-progress-button>
              </div>
            </template>
          </paper-card>
        </div>
        <p class='error-log-intro'>
          Press the button to load the full Home Assistant log.
          <paper-icon-button icon='hass:refresh' on-click='refreshErrorLog'></paper-icon-button>
        </p>
        <div class='error-log'>[[errorLog]]</div>
      </div>
    </app-header-layout>

    <paper-dialog with-backdrop id="showlog">
      <h2>Log Details ([[selectedItem.level]])</h2>
      <paper-dialog-scrollable id="scrollable">
        <p>[[fullTimeStamp(selectedItem.timestamp)]]</p>
        <template is='dom-if' if='[[selectedItem.message]]'>
          <pre>[[selectedItem.message]]</pre>
        </template>
        <template is='dom-if' if='[[selectedItem.exception]]'>
          <pre>[[selectedItem.exception]]</pre>
        </template>
      </paper-dialog-scrollable>
    </paper-dialog>
    `}static get properties(){return{hass:Object,narrow:{type:Boolean,value:!1},showMenu:{type:Boolean,value:!1},errorLog:{type:String,value:""},updating:{type:Boolean,value:!0},items:{type:Array,value:[]},selectedItem:Object,jsVersion:{type:String,value:"latest"},customUiList:{type:Array,value:window.CUSTOM_UI_LIST||[]},loadedComponents:{type:Array,value:[]}}}ready(){super.ready();this.addEventListener("hass-service-called",ev=>this.serviceCalled(ev));this.$.showlog.addEventListener("iron-overlay-opened",ev=>{if(ev.target.withBackdrop){ev.target.parentNode.insertBefore(ev.target.backdropElement,ev.target)}})}serviceCalled(ev){if(ev.detail.success&&"system_log"===ev.detail.domain){if("clear"===ev.detail.service){this.items=[]}}}connectedCallback(){super.connectedCallback();this.$.scrollable.dialogElement=this.$.showlog;this._fetchData();this.loadedComponents=this.hass.config.components;if(!registeredDialog){registeredDialog=!0;this.fire("register-dialog",{dialogShowEvent:"show-loaded-components",dialogTag:"ha-loaded-components",dialogImport:()=>__webpack_require__.e(58).then(__webpack_require__.bind(null,651))})}if(!window.CUSTOM_UI_LIST){setTimeout(()=>{this.customUiList=window.CUSTOM_UI_LIST||[]},1e3)}else{this.customUiList=window.CUSTOM_UI_LIST}}refreshErrorLog(ev){if(ev)ev.preventDefault();this.errorLog="Loading error log\u2026";this.hass.callApi("GET","error_log").then(log=>{this.errorLog=log||"No errors have been reported."})}fullTimeStamp(date){return new Date(1e3*date)}formatTime(date){const today=new Date().setHours(0,0,0,0),dateTime=new Date(1e3*date),dateTimeDay=new Date(1e3*date).setHours(0,0,0,0);return dateTimeDay<today?Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_14__.a)(dateTime,this.hass.language):Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_15__.a)(dateTime,this.hass.language)}openLog(event){this.selectedItem=event.model.item;this.$.showlog.open()}_fetchData(){this.updating=!0;this.hass.callApi("get","error/all").then(items=>{this.items=items;this.updating=!1})}_defaultPageText(){return`>> ${"lovelace"===localStorage.defaultPage?"Remove":"Set"} lovelace as default page on this device <<`}_toggleDefaultPage(){if("lovelace"===localStorage.defaultPage){delete localStorage.defaultPage}else{localStorage.defaultPage="lovelace"}this.$.love.innerText=this._defaultPageText()}_showComponents(){this.fire("show-loaded-components",{hass:this.hass})}}customElements.define("ha-panel-dev-info",HaPanelDevInfo)}}]);
//# sourceMappingURL=d86cb2c3d88d738e09d0.chunk.js.map