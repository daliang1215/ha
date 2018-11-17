(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{157:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(130);const PaperSliderClass=customElements.get("paper-slider");class HaPaperSlider extends PaperSliderClass{static get template(){const tpl=document.createElement("template");tpl.innerHTML=PaperSliderClass.template.innerHTML;const styleEl=document.createElement("style");styleEl.innerHTML=`
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }
    `;tpl.content.appendChild(styleEl);return tpl}}customElements.define("ha-paper-slider",HaPaperSlider)},201:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return PaperDialogBehaviorImpl});__webpack_require__.d(__webpack_exports__,"a",function(){return PaperDialogBehavior});var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(53),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1);/**
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
</dom-module>`;document.head.appendChild($_documentContainer.content)},210:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(201),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
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
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget();this.classList.add("no-padding")},attached:function(){this._ensureTarget();requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",0<this.scrollTarget.scrollTop);this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight);this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement;if(this.dialogElement&&this.dialogElement.behaviors&&0<=this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__.b)){this.dialogElement.sizingTarget=this.scrollTarget;this.scrollTarget.classList.remove("fit")}else if(this.dialogElement){this.scrollTarget.classList.add("fit")}}})},291:function(module,__webpack_exports__){"use strict";const hassAttributeUtil={DOMAIN_DEVICE_CLASS:{binary_sensor:["battery","cold","connectivity","door","garage_door","gas","heat","light","lock","moisture","motion","moving","occupancy","opening","plug","power","presence","problem","safety","smoke","sound","vibration","window"],cover:["garage"],sensor:["battery","humidity","illuminance","temperature","pressure"]},UNKNOWN_TYPE:"json",ADD_TYPE:"key-value",TYPE_TO_TAG:{string:"ha-customize-string",json:"ha-customize-string",icon:"ha-customize-icon",boolean:"ha-customize-boolean",array:"ha-customize-array","key-value":"ha-customize-key-value"}};hassAttributeUtil.LOGIC_STATE_ATTRIBUTES=hassAttributeUtil.LOGIC_STATE_ATTRIBUTES||{entity_picture:void 0,friendly_name:{type:"string",description:"Name"},icon:{type:"icon"},emulated_hue:{type:"boolean",domains:["emulated_hue"]},emulated_hue_name:{type:"string",domains:["emulated_hue"]},haaska_hidden:void 0,haaska_name:void 0,homebridge_hidden:{type:"boolean"},homebridge_name:{type:"string"},supported_features:void 0,attribution:void 0,custom_ui_more_info:{type:"string"},custom_ui_state_card:{type:"string"},device_class:{type:"array",options:hassAttributeUtil.DOMAIN_DEVICE_CLASS,description:"Device class",domains:["binary_sensor","cover","sensor"]},hidden:{type:"boolean",description:"Hide from UI"},assumed_state:{type:"boolean",domains:["switch","light","cover","climate","fan","group","water_heater"]},initial_state:{type:"string",domains:["automation"]},unit_of_measurement:{type:"string"}};__webpack_exports__.a=hassAttributeUtil},296:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(201),_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),_events_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);__webpack_exports__.a=Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__.a)(superClass=>class extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__.b)([_events_mixin__WEBPACK_IMPORTED_MODULE_3__.a,_polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__.a],superClass){static get properties(){return{withBackdrop:{type:Boolean,value:!0}}}})},714:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Mathmin=Math.min,_MathPI=Math.PI;__webpack_require__.r(__webpack_exports__);var paper_dialog_shared_styles=__webpack_require__(204),paper_dialog_scrollable=__webpack_require__(210),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),ha_style=__webpack_require__(120),app_toolbar=__webpack_require__(121),paper_icon_button=__webpack_require__(62),state_history_charts=__webpack_require__(163),ha_state_history_data=__webpack_require__(164),state_card_content=__webpack_require__(171),iron_flex_layout_classes=__webpack_require__(30),paper_button=__webpack_require__(54),paper_input=__webpack_require__(61),events_mixin=__webpack_require__(16),localize_mixin=__webpack_require__(10);class more_info_alarm_control_panel_MoreInfoAlarmControlPanel extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
      <style include="iron-flex"></style>
      <style>
        paper-input {
          margin: auto;
          max-width: 200px;
        }
        .pad {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .pad div {
          display: flex;
          flex-direction: column;
        }
        .pad paper-button {
          width: 80px;
        }
        .actions paper-button {
          min-width: 160px;
          margin-bottom: 16px;
          color: var(--primary-color);
        }
        paper-button.disarm {
          color: var(--google-red-500);
        }
      </style>

      <template is="dom-if" if="[[_codeFormat]]">
        <paper-input
          label="[[localize('ui.card.alarm_control_panel.code')]]"
          value="{{_enteredCode}}"
          type="password"
          disabled="[[!_inputEnabled]]"
        ></paper-input>

        <template is="dom-if" if="[[_isNumber(_codeFormat)]]">
          <div class="pad">
            <div>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="1" raised>1</paper-button>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="4" raised>4</paper-button>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="7" raised>7</paper-button>
            </div>
            <div>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="2" raised>2</paper-button>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="5" raised>5</paper-button>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="8" raised>8</paper-button>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="0" raised>0</paper-button>
            </div>
            <div>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="3" raised>3</paper-button>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="6" raised>6</paper-button>
              <paper-button on-click='_digitClicked' disabled='[[!_inputEnabled]]' data-digit="9" raised>9</paper-button>
              <paper-button on-click='_clearEnteredCode' disabled='[[!_inputEnabled]]' raised>
                [[localize('ui.card.alarm_control_panel.clear_code')]]
              </paper-button>
            </div>
          </div>
        </template>
      </template>

      <div class="layout horizontal center-justified actions">
        <template is="dom-if" if="[[_disarmVisible]]">
          <paper-button raised class="disarm" on-click="_callService" data-service="alarm_disarm" disabled="[[!_codeValid]]">
            [[localize('ui.card.alarm_control_panel.disarm')]]
          </paper-button>
        </template>
        <template is="dom-if" if="[[_armVisible]]">
          <paper-button raised on-click="_callService" data-service="alarm_arm_home" disabled="[[!_codeValid]]">
            [[localize('ui.card.alarm_control_panel.arm_home')]]
          </paper-button>
          <paper-button raised on-click="_callService" data-service="alarm_arm_away" disabled="[[!_codeValid]]">
            [[localize('ui.card.alarm_control_panel.arm_away')]]
          </paper-button>
        </template>
      </div>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},_enteredCode:{type:String,value:""},_codeFormat:{type:String,value:""},_codeValid:{type:Boolean,computed:"_validateCode(_enteredCode, _codeFormat)"},_disarmVisible:{type:Boolean,value:!1},_armVisible:{type:Boolean,value:!1},_inputEnabled:{type:Boolean,value:!1}}}constructor(){super();this._armedStates=["armed_home","armed_away","armed_night","armed_custom_bypass"]}_stateObjChanged(newVal,oldVal){if(newVal){const state=newVal.state,props={_codeFormat:newVal.attributes.code_format,_armVisible:"disarmed"===state,_disarmVisible:this._armedStates.includes(state)||"pending"===state||"triggered"===state||"arming"===state};props._inputEnabled=props._disarmVisible||props._armVisible;this.setProperties(props)}if(oldVal){setTimeout(()=>{this.fire("iron-resize")},500)}}_isNumber(format){return"Number"===format}_validateCode(code,format){return!format||0<code.length}_digitClicked(ev){this._enteredCode+=ev.target.getAttribute("data-digit")}_clearEnteredCode(){this._enteredCode=""}_callService(ev){const service=ev.target.getAttribute("data-service"),data={entity_id:this.stateObj.entity_id,code:this._enteredCode};this.hass.callService("alarm_control_panel",service,data).then(()=>{this._enteredCode=""})}}customElements.define("more-info-alarm_control_panel",more_info_alarm_control_panel_MoreInfoAlarmControlPanel);__webpack_require__(160);class more_info_automation_MoreInfoAutomation extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <style>
        paper-button {
          color: var(--primary-color);
          font-weight: 500;
        }
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .actions {
          margin: 36px 0 8px 0;
          text-align: right;
        }
      </style>

      <div class="flex">
        <div>
          [[localize('ui.card.automation.last_triggered')]]:
        </div>
        <ha-relative-time hass="[[hass]]" datetime="[[stateObj.attributes.last_triggered]]"></ha-relative-time>
      </div>

      <div class="actions">
        <paper-button on-click="handleTriggerTapped">
          [[localize('ui.card.automation.trigger')]]
        </paper-button>
      </div>
    `}static get properties(){return{hass:Object,stateObj:Object}}handleTriggerTapped(){this.hass.callService("automation","trigger",{entity_id:this.stateObj.entity_id})}}customElements.define("more-info-automation",more_info_automation_MoreInfoAutomation);var compute_state_name=__webpack_require__(27);class more_info_camera_MoreInfoCamera extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      :host {
        max-width:640px;
      }

      .camera-image {
        width: 100%;
      }
    </style>

    <img class="camera-image" src="[[computeCameraImageUrl(hass, stateObj, isVisible)]]" on-load="imageLoaded" alt="[[_computeStateName(stateObj)]]">
`}static get properties(){return{hass:{type:Object},stateObj:{type:Object},isVisible:{type:Boolean,value:!0}}}connectedCallback(){super.connectedCallback();this.isVisible=!0}disconnectedCallback(){this.isVisible=!1;super.disconnectedCallback()}imageLoaded(){this.fire("iron-resize")}_computeStateName(stateObj){return Object(compute_state_name.a)(stateObj)}computeCameraImageUrl(hass,stateObj,isVisible){if(hass.demo){return"/demo/webcam.jpg"}if(stateObj&&isVisible){return"/api/camera_proxy_stream/"+stateObj.entity_id+"?token="+stateObj.attributes.access_token}return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"}}customElements.define("more-info-camera",more_info_camera_MoreInfoCamera);var paper_dropdown_menu=__webpack_require__(123),paper_item=__webpack_require__(119),paper_listbox=__webpack_require__(122),paper_toggle_button=__webpack_require__(158),utils_async=__webpack_require__(8),debounce=__webpack_require__(14);class ha_climate_control_HaClimateControl extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="iron-flex iron-flex-alignment"></style>
    <style>
      /* local DOM styles go here */
      :host {
        @apply --layout-flex;
        @apply --layout-horizontal;
        @apply --layout-justified;
      }
      .in-flux#target_temperature {
        color: var(--google-red-500);
      }
      #target_temperature {
        @apply --layout-self-center;
        font-size: 200%;
      }
      .control-buttons {
        font-size: 200%;
        text-align: right;
      }
      paper-icon-button {
        height: 48px;
        width: 48px;
      }
    </style>

    <!-- local DOM goes here -->
    <div id="target_temperature">
      [[value]] [[units]]
    </div>
    <div class="control-buttons">
      <div>
        <paper-icon-button icon="hass:chevron-up" on-click="incrementValue"></paper-icon-button>
      </div>
      <div>
        <paper-icon-button icon="hass:chevron-down" on-click="decrementValue"></paper-icon-button>
      </div>
    </div>
`}static get properties(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}temperatureStateInFlux(inFlux){this.$.target_temperature.classList.toggle("in-flux",inFlux)}incrementValue(){const newval=this.value+this.step;if(this.value<this.max){this.last_changed=Date.now();this.temperatureStateInFlux(!0)}if(newval<=this.max){if(newval<=this.min){this.value=this.min}else{this.value=newval}}else{this.value=this.max}}decrementValue(){const newval=this.value-this.step;if(this.value>this.min){this.last_changed=Date.now();this.temperatureStateInFlux(!0)}if(newval>=this.min){this.value=newval}else{this.value=this.min}}valueChanged(){if(this.last_changed){window.setTimeout(()=>{const now=Date.now();if(2e3<=now-this.last_changed){this.fire("change");this.temperatureStateInFlux(!1);this.last_changed=null}},2010)}}}customElements.define("ha-climate-control",ha_climate_control_HaClimateControl);var ha_paper_slider=__webpack_require__(157),attribute_class_names=__webpack_require__(110);function featureClassNames(stateObj,classNames){if(!stateObj||!stateObj.attributes.supported_features)return"";const features=stateObj.attributes.supported_features;return Object.keys(classNames).map(feature=>0!==(features&feature)?classNames[feature]:"").filter(attr=>""!==attr).join(" ")}class more_info_climate_MoreInfoClimate extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="iron-flex"></style>
    <style>
      :host {
        color: var(--primary-text-color);
      }

      .container-on,
      .container-away_mode,
      .container-aux_heat,
      .container-temperature,
      .container-humidity,
      .container-operation_list,
      .container-fan_list,
      .container-swing_list {
        display: none;
      }

      .has-on .container-on,
      .has-away_mode .container-away_mode,
      .has-aux_heat .container-aux_heat,
      .has-target_temperature .container-temperature,
      .has-target_temperature_low .container-temperature,
      .has-target_temperature_high .container-temperature,
      .has-target_humidity .container-humidity,
      .has-operation_mode .container-operation_list,
      .has-fan_mode .container-fan_list,
      .has-swing_list .container-swing_list,
      .has-swing_mode .container-swing_list {
        display: block;
        margin-bottom: 5px;
      }

      .container-operation_list iron-icon,
      .container-fan_list iron-icon,
      .container-swing_list iron-icon {
        margin: 22px 16px 0 0;
      }

      paper-dropdown-menu {
        width: 100%;
      }

      paper-item {
        cursor: pointer;
      }

      ha-paper-slider {
        width: 100%;
      }

      .container-humidity .single-row {
          display: flex;
          height: 50px;
      }

      .target-humidity {
        width: 90px;
        font-size: 200%;
        margin: auto;
      }

      ha-climate-control.range-control-left,
      ha-climate-control.range-control-right {
        float: left;
        width: 46%;
      }
      ha-climate-control.range-control-left {
        margin-right: 4%;
      }
      ha-climate-control.range-control-right {
        margin-left: 4%;
      }

      .humidity {
        --paper-slider-active-color: var(--paper-blue-400);
        --paper-slider-secondary-color: var(--paper-blue-400);
      }

      .single-row {
        padding: 8px 0;
      }
      }
    </style>

    <div class$="[[computeClassNames(stateObj)]]">

      <template is="dom-if" if="[[supportsOn(stateObj)]]">
        <div class="container-on">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.climate.on_off')]]</div>
            <paper-toggle-button checked="[[onToggleChecked]]" on-change="onToggleChanged">
            </paper-toggle-button>
          </div>
        </div>
      </template>

      <div class="container-temperature">
        <div class$="[[stateObj.attributes.operation_mode]]">
          <div hidden$="[[!supportsTemperatureControls(stateObj)]]">[[localize('ui.card.climate.target_temperature')]]</div>
          <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
            <ha-climate-control value="[[stateObj.attributes.temperature]]" units="[[hass.config.unit_system.temperature]]" step="[[computeTemperatureStepSize(hass, stateObj)]]" min="[[stateObj.attributes.min_temp]]" max="[[stateObj.attributes.max_temp]]" on-change="targetTemperatureChanged">
            </ha-climate-control>
          </template>
          <template is="dom-if" if="[[supportsTemperatureRange(stateObj)]]">
            <ha-climate-control value="[[stateObj.attributes.target_temp_low]]" units="[[hass.config.unit_system.temperature]]" step="[[computeTemperatureStepSize(hass, stateObj)]]" min="[[stateObj.attributes.min_temp]]" max="[[stateObj.attributes.target_temp_high]]" class="range-control-left" on-change="targetTemperatureLowChanged">
            </ha-climate-control>
            <ha-climate-control value="[[stateObj.attributes.target_temp_high]]" units="[[hass.config.unit_system.temperature]]" step="[[computeTemperatureStepSize(hass, stateObj)]]" min="[[stateObj.attributes.target_temp_low]]" max="[[stateObj.attributes.max_temp]]" class="range-control-right" on-change="targetTemperatureHighChanged">
            </ha-climate-control>
          </template>
        </div>
      </div>

      <template is="dom-if" if="[[supportsHumidity(stateObj)]]">
        <div class="container-humidity">
          <div>[[localize('ui.card.climate.target_humidity')]]</div>
            <div class="single-row">
              <div class="target-humidity">[[stateObj.attributes.humidity]] %</div>
              <ha-paper-slider class="humidity" min="[[stateObj.attributes.min_humidity]]" max="[[stateObj.attributes.max_humidity]]" secondary-progress="[[stateObj.attributes.max_humidity]]" step="1" pin="" value="[[stateObj.attributes.humidity]]" on-change="targetHumiditySliderChanged" ignore-bar-touch="">
              </ha-paper-slider>
          </div>
        </div>
      </template>

      <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
        <div class="container-operation_list">
          <div class="controls">
            <paper-dropdown-menu label-float="" dynamic-align="" label="[[localize('ui.card.climate.operation')]]">
              <paper-listbox slot="dropdown-content" selected="{{operationIndex}}">
                <template is="dom-repeat" items="[[stateObj.attributes.operation_list]]" on-dom-change="handleOperationListUpdate">
                  <paper-item>[[_localizeOperationMode(localize, item)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        </div>
      </template>

      <template is="dom-if" if="[[supportsFanMode(stateObj)]]">
        <div class="container-fan_list">
          <paper-dropdown-menu label-float="" dynamic-align="" label="[[localize('ui.card.climate.fan_mode')]]">
            <paper-listbox slot="dropdown-content" selected="{{fanIndex}}">
              <template is="dom-repeat" items="[[stateObj.attributes.fan_list]]" on-dom-change="handleFanListUpdate">
                <paper-item>[[item]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </template>

      <template is="dom-if" if="[[supportsSwingMode(stateObj)]]">
        <div class="container-swing_list">
          <paper-dropdown-menu label-float="" dynamic-align="" label="[[localize('ui.card.climate.swing_mode')]]">
            <paper-listbox slot="dropdown-content" selected="{{swingIndex}}">
              <template is="dom-repeat" items="[[stateObj.attributes.swing_list]]" on-dom-change="handleSwingListUpdate">
                <paper-item>[[item]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
      </template>

      <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
        <div class="container-away_mode">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.climate.away_mode')]]</div>
            <paper-toggle-button checked="[[awayToggleChecked]]" on-change="awayToggleChanged">
            </paper-toggle-button>
          </div>
        </div>
      </template>

      <template is="dom-if" if="[[supportsAuxHeat(stateObj)]]">
        <div class="container-aux_heat">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.climate.aux_heat')]]</div>
            <paper-toggle-button checked="[[auxToggleChecked]]" on-change="auxToggleChanged">
            </paper-toggle-button>
          </div>
        </div>
      </template>
    </div>
`}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},operationIndex:{type:Number,value:-1,observer:"handleOperationmodeChanged"},fanIndex:{type:Number,value:-1,observer:"handleFanmodeChanged"},swingIndex:{type:Number,value:-1,observer:"handleSwingmodeChanged"},awayToggleChecked:Boolean,auxToggleChecked:Boolean,onToggleChecked:Boolean}}stateObjChanged(newVal,oldVal){if(newVal){this.setProperties({awayToggleChecked:"on"===newVal.attributes.away_mode,auxToggleChecked:"on"===newVal.attributes.aux_heat,onToggleChecked:"off"!==newVal.state})}if(oldVal){this._debouncer=debounce.a.debounce(this._debouncer,utils_async.d.after(500),()=>{this.fire("iron-resize")})}}handleOperationListUpdate(){this.operationIndex=-1;if(this.stateObj.attributes.operation_list){this.operationIndex=this.stateObj.attributes.operation_list.indexOf(this.stateObj.attributes.operation_mode)}}handleSwingListUpdate(){this.swingIndex=-1;if(this.stateObj.attributes.swing_list){this.swingIndex=this.stateObj.attributes.swing_list.indexOf(this.stateObj.attributes.swing_mode)}}handleFanListUpdate(){this.fanIndex=-1;if(this.stateObj.attributes.fan_list){this.fanIndex=this.stateObj.attributes.fan_list.indexOf(this.stateObj.attributes.fan_mode)}}computeTemperatureStepSize(hass,stateObj){if(stateObj.attributes.target_temp_step){return stateObj.attributes.target_temp_step}if(-1!==hass.config.unit_system.temperature.indexOf("F")){return 1}return .5}supportsTemperatureControls(stateObj){return this.supportsTemperature(stateObj)||this.supportsTemperatureRange(stateObj)}supportsTemperature(stateObj){return 0!==(1&stateObj.attributes.supported_features)&&"number"===typeof stateObj.attributes.temperature}supportsTemperatureRange(stateObj){return 0!==(6&stateObj.attributes.supported_features)&&("number"===typeof stateObj.attributes.target_temp_low||"number"===typeof stateObj.attributes.target_temp_high)}supportsHumidity(stateObj){return 0!==(8&stateObj.attributes.supported_features)}supportsFanMode(stateObj){return 0!==(64&stateObj.attributes.supported_features)}supportsOperationMode(stateObj){return 0!==(128&stateObj.attributes.supported_features)}supportsSwingMode(stateObj){return 0!==(512&stateObj.attributes.supported_features)}supportsAwayMode(stateObj){return 0!==(1024&stateObj.attributes.supported_features)}supportsAuxHeat(stateObj){return 0!==(2048&stateObj.attributes.supported_features)}supportsOn(stateObj){return 0!==(4096&stateObj.attributes.supported_features)}computeClassNames(stateObj){var classes=[Object(attribute_class_names.a)(stateObj,["current_temperature","current_humidity"]),featureClassNames(stateObj,{1:"has-target_temperature",2:"has-target_temperature_high",4:"has-target_temperature_low",8:"has-target_humidity",16:"has-target_humidity_high",32:"has-target_humidity_low",64:"has-fan_mode",128:"has-operation_mode",256:"has-hold_mode",512:"has-swing_mode",1024:"has-away_mode",2048:"has-aux_heat",4096:"has-on"}),"more-info-climate"];return classes.join(" ")}targetTemperatureChanged(ev){const temperature=ev.target.value;if(temperature===this.stateObj.attributes.temperature)return;this.callServiceHelper("set_temperature",{temperature:temperature})}targetTemperatureLowChanged(ev){const targetTempLow=ev.currentTarget.value;if(targetTempLow===this.stateObj.attributes.target_temp_low)return;this.callServiceHelper("set_temperature",{target_temp_low:targetTempLow,target_temp_high:this.stateObj.attributes.target_temp_high})}targetTemperatureHighChanged(ev){const targetTempHigh=ev.currentTarget.value;if(targetTempHigh===this.stateObj.attributes.target_temp_high)return;this.callServiceHelper("set_temperature",{target_temp_low:this.stateObj.attributes.target_temp_low,target_temp_high:targetTempHigh})}targetHumiditySliderChanged(ev){const humidity=ev.target.value;if(humidity===this.stateObj.attributes.humidity)return;this.callServiceHelper("set_humidity",{humidity:humidity})}awayToggleChanged(ev){const oldVal="on"===this.stateObj.attributes.away_mode,newVal=ev.target.checked;if(oldVal===newVal)return;this.callServiceHelper("set_away_mode",{away_mode:newVal})}auxToggleChanged(ev){const oldVal="on"===this.stateObj.attributes.aux_heat,newVal=ev.target.checked;if(oldVal===newVal)return;this.callServiceHelper("set_aux_heat",{aux_heat:newVal})}onToggleChanged(ev){const oldVal="off"!==this.stateObj.state,newVal=ev.target.checked;if(oldVal===newVal)return;this.callServiceHelper(newVal?"turn_on":"turn_off",{})}handleFanmodeChanged(fanIndex){if(""===fanIndex||-1===fanIndex)return;const fanInput=this.stateObj.attributes.fan_list[fanIndex];if(fanInput===this.stateObj.attributes.fan_mode)return;this.callServiceHelper("set_fan_mode",{fan_mode:fanInput})}handleOperationmodeChanged(operationIndex){if(""===operationIndex||-1===operationIndex)return;const operationInput=this.stateObj.attributes.operation_list[operationIndex];if(operationInput===this.stateObj.attributes.operation_mode)return;this.callServiceHelper("set_operation_mode",{operation_mode:operationInput})}handleSwingmodeChanged(swingIndex){if(""===swingIndex||-1===swingIndex)return;const swingInput=this.stateObj.attributes.swing_list[swingIndex];if(swingInput===this.stateObj.attributes.swing_mode)return;this.callServiceHelper("set_swing_mode",{swing_mode:swingInput})}callServiceHelper(service,data){data.entity_id=this.stateObj.entity_id;this.hass.callService("climate",service,data).then(()=>{this.stateObjChanged(this.stateObj)})}_localizeOperationMode(localize,mode){return localize(`state.climate.${mode}`)||mode}}customElements.define("more-info-climate",more_info_climate_MoreInfoClimate);var iron_input=__webpack_require__(99),paper_spinner=__webpack_require__(124),ha_markdown=__webpack_require__(126);class more_info_configurator_MoreInfoConfigurator extends polymer_element.a{static get template(){return html_tag.a`
    <style include="iron-flex"></style>
    <style>
      p {
        margin: 8px 0;
      }

      a {
        color: var(--primary-color);
      }

      p > img {
        max-width: 100%;
      }

      p.center {
        text-align: center;
      }

      p.error {
        color: #C62828;
      }

      p.submit {
        text-align: center;
        height: 41px;
      }

      paper-spinner {
        width: 14px;
        height: 14px;
        margin-right: 20px;
      }

      [hidden] {
        display: none;
      }
    </style>

    <div class="layout vertical">
      <template is="dom-if" if="[[isConfigurable]]">
        <ha-markdown content="[[stateObj.attributes.description]]"></ha-markdown>

        <p class="error" hidden$="[[!stateObj.attributes.errors]]">
          [[stateObj.attributes.errors]]
        </p>

        <template is="dom-repeat" items="[[stateObj.attributes.fields]]">
          <paper-input label="[[item.name]]" name="[[item.id]]" type="[[item.type]]" on-change="fieldChanged"></paper-input>
        </template>

        <p class="submit" hidden$="[[!stateObj.attributes.submit_caption]]">
          <paper-button raised="" disabled="[[isConfiguring]]" on-click="submitClicked">
            <paper-spinner active="[[isConfiguring]]" hidden="[[!isConfiguring]]" alt="Configuring"></paper-spinner>
            [[stateObj.attributes.submit_caption]]
          </paper-button>

        </p>

      </template>
    </div>
`}static get properties(){return{stateObj:{type:Object},action:{type:String,value:"display"},isConfigurable:{type:Boolean,computed:"computeIsConfigurable(stateObj)"},isConfiguring:{type:Boolean,value:!1},fieldInput:{type:Object,value:function(){return{}}}}}computeIsConfigurable(stateObj){return"configure"===stateObj.state}fieldChanged(ev){var el=ev.target;this.fieldInput[el.name]=el.value}submitClicked(){var data={configure_id:this.stateObj.attributes.configure_id,fields:this.fieldInput};this.isConfiguring=!0;this.hass.callService("configurator","configure",data).then(function(){this.isConfiguring=!1}.bind(this),function(){this.isConfiguring=!1}.bind(this))}}customElements.define("more-info-configurator",more_info_configurator_MoreInfoConfigurator);var ha_cover_tilt_controls=__webpack_require__(165),ha_icon=__webpack_require__(88);class ha_labeled_slider_HaLabeledSlider extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      :host {
        display: block;
      }

      .title {
        margin-bottom: 16px;
        opacity: var(--dark-primary-opacity);
      }

      ha-icon {
        float: left;
        margin-top: 4px;
        opacity: var(--dark-secondary-opacity);
      }

      ha-paper-slider {
        background-image: var(--ha-slider-background);
      }
    </style>

    <div class="title">[[caption]]</div>
    <div class="extra-container">
      <slot name="extra"></slot>
    </div>
    <div class="slider-container">
      <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
      <ha-paper-slider
        min="[[min]]" max="[[max]]" step="[[step]]"
        pin="[[pin]]" disabled="[[disabled]]" disabled="[[disabled]]"
        value="{{value}}"
      ></ha-paper-slider>
    </div>
`}static get properties(){return{caption:String,disabled:Boolean,min:Number,max:Number,pin:Boolean,step:Number,extra:{type:Boolean,value:!1},ignoreBarTouch:{type:Boolean,value:!0},icon:{type:String,value:""},value:{type:Number,notify:!0}}}}customElements.define("ha-labeled-slider",ha_labeled_slider_HaLabeledSlider);var cover_model=__webpack_require__(84);const FEATURE_CLASS_NAMES={128:"has-set_tilt_position"};class more_info_cover_MoreInfoCover extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
  <style include="iron-flex"></style>
  <style>
    .current_position, .tilt {
      max-height: 0px;
      overflow: hidden;
    }

    .has-current_position .current_position,
    .has-set_tilt_position .tilt,
    .has-current_tilt_position .tilt
    {
      max-height: 208px;
    }

    [invisible] {
      visibility: hidden !important;
    }
  </style>
  <div class$="[[computeClassNames(stateObj)]]">

    <div class="current_position">
      <ha-labeled-slider
        caption="[[localize('ui.card.cover.position')]]" pin=""
        value="{{coverPositionSliderValue}}"
        disabled="[[!entityObj.supportsSetPosition]]"
        on-change="coverPositionSliderChanged"
      ></ha-labeled-slider>
    </div>

    <div class="tilt">
      <ha-labeled-slider
        caption="[[localize('ui.card.cover.tilt_position')]]" pin="" extra=""
        value="{{coverTiltPositionSliderValue}}"
        disabled="[[!entityObj.supportsSetTiltPosition]]"
        on-change="coverTiltPositionSliderChanged">

        <ha-cover-tilt-controls
          slot="extra" hidden$="[[entityObj.isTiltOnly]]"
          hass="[[hass]]" state-obj="[[stateObj]]"
        ></ha-cover-tilt-controls>

      </ha-labeled-slider>
    </div>

  </div>
`}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},entityObj:{type:Object,computed:"computeEntityObj(hass, stateObj)"},coverPositionSliderValue:Number,coverTiltPositionSliderValue:Number}}computeEntityObj(hass,stateObj){return new cover_model.a(hass,stateObj)}stateObjChanged(newVal){if(newVal){this.setProperties({coverPositionSliderValue:newVal.attributes.current_position,coverTiltPositionSliderValue:newVal.attributes.current_tilt_position})}}computeClassNames(stateObj){var classes=[Object(attribute_class_names.a)(stateObj,["current_position","current_tilt_position"]),featureClassNames(stateObj,FEATURE_CLASS_NAMES)];return classes.join(" ")}coverPositionSliderChanged(ev){this.entityObj.setCoverPosition(ev.target.value)}coverTiltPositionSliderChanged(ev){this.entityObj.setCoverTiltPosition(ev.target.value)}}customElements.define("more-info-cover",more_info_cover_MoreInfoCover);var hass_attributes_util=__webpack_require__(291);class ha_attributes_HaAttributes extends polymer_element.a{static get template(){return html_tag.a`
    <style include="iron-flex iron-flex-alignment"></style>
    <style>
      .data-entry .value {
        max-width: 200px;
      }
      .attribution {
        color: var(--secondary-text-color);
        text-align: right;
      }
    </style>

    <div class="layout vertical">
      <template is="dom-repeat" items="[[computeDisplayAttributes(stateObj, filtersArray)]]" as="attribute">
        <div class="data-entry layout justified horizontal">
          <div class="key">[[formatAttribute(attribute)]]</div>
          <div class="value">[[formatAttributeValue(stateObj, attribute)]]</div>
        </div>
      </template>
      <div class="attribution" hidden$="[[!computeAttribution(stateObj)]]">[[computeAttribution(stateObj)]]</div>
    </div>
`}static get properties(){return{stateObj:{type:Object},extraFilters:{type:String,value:""},filtersArray:{type:Array,computed:"computeFiltersArray(extraFilters)"}}}computeFiltersArray(extraFilters){return Object.keys(hass_attributes_util.a.LOGIC_STATE_ATTRIBUTES).concat(extraFilters?extraFilters.split(","):[])}computeDisplayAttributes(stateObj,filtersArray){if(!stateObj){return[]}return Object.keys(stateObj.attributes).filter(function(key){return-1===filtersArray.indexOf(key)})}formatAttribute(attribute){return attribute.replace(/_/g," ")}formatAttributeValue(stateObj,attribute){var value=stateObj.attributes[attribute];if(null===value)return"-";if(Array.isArray(value)){return value.join(", ")}return value instanceof Object?JSON.stringify(value,null,2):value}computeAttribution(stateObj){return stateObj.attributes.attribution}}customElements.define("ha-attributes",ha_attributes_HaAttributes);class more_info_default_MoreInfoDefault extends polymer_element.a{static get template(){return html_tag.a`
    <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
`}static get properties(){return{stateObj:{type:Object}}}}customElements.define("more-info-default",more_info_default_MoreInfoDefault);class more_info_fan_MoreInfoFan extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="iron-flex"></style>
    <style>
      .container-speed_list,
      .container-direction,
      .container-oscillating {
        display: none;
      }

      .has-speed_list .container-speed_list,
      .has-direction .container-direction,
      .has-oscillating .container-oscillating {
        display: block;
      }

      paper-dropdown-menu {
        width: 100%;
      }

      paper-item {
        cursor: pointer;
      }
    </style>

    <div class$="[[computeClassNames(stateObj)]]">

      <div class="container-speed_list">
        <paper-dropdown-menu label-float="" dynamic-align="" label="[[localize('ui.card.fan.speed')]]">
          <paper-listbox slot="dropdown-content" selected="{{speedIndex}}">
            <template is="dom-repeat" items="[[stateObj.attributes.speed_list]]">
              <paper-item>[[item]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>

      <div class="container-oscillating">
        <div class="center horizontal layout single-row">
          <div class="flex">[[localize('ui.card.fan.oscillate')]]</div>
          <paper-toggle-button checked="[[oscillationToggleChecked]]" on-change="oscillationToggleChanged">
          </paper-toggle-button>
        </div>
      </div>

      <div class="container-direction">
        <div class="direction">
          <div>[[localize('ui.card.fan.direction')]]</div>
          <paper-icon-button icon="hass:rotate-left" on-click="onDirectionLeft" title="Left" disabled="[[computeIsRotatingLeft(stateObj)]]"></paper-icon-button>
          <paper-icon-button icon="hass:rotate-right" on-click="onDirectionRight" title="Right" disabled="[[computeIsRotatingRight(stateObj)]]"></paper-icon-button>
        </div>
      </div>
    </div>

    <ha-attributes state-obj="[[stateObj]]" extra-filters="speed,speed_list,oscillating,direction"></ha-attributes>
`}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},speedIndex:{type:Number,value:-1,observer:"speedChanged"},oscillationToggleChecked:{type:Boolean}}}stateObjChanged(newVal,oldVal){if(newVal){this.setProperties({oscillationToggleChecked:newVal.attributes.oscillating,speedIndex:newVal.attributes.speed_list?newVal.attributes.speed_list.indexOf(newVal.attributes.speed):-1})}if(oldVal){setTimeout(()=>{this.fire("iron-resize")},500)}}computeClassNames(stateObj){return"more-info-fan "+Object(attribute_class_names.a)(stateObj,["oscillating","speed_list","direction"])}speedChanged(speedIndex){var speedInput;if(""===speedIndex||-1===speedIndex)return;speedInput=this.stateObj.attributes.speed_list[speedIndex];if(speedInput===this.stateObj.attributes.speed)return;this.hass.callService("fan","turn_on",{entity_id:this.stateObj.entity_id,speed:speedInput})}oscillationToggleChanged(ev){var oldVal=this.stateObj.attributes.oscillating,newVal=ev.target.checked;if(oldVal===newVal)return;this.hass.callService("fan","oscillate",{entity_id:this.stateObj.entity_id,oscillating:newVal})}onDirectionLeft(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"reverse"})}onDirectionRight(){this.hass.callService("fan","set_direction",{entity_id:this.stateObj.entity_id,direction:"forward"})}computeIsRotatingLeft(stateObj){return"reverse"===stateObj.attributes.direction}computeIsRotatingRight(stateObj){return"forward"===stateObj.attributes.direction}}customElements.define("more-info-fan",more_info_fan_MoreInfoFan);var polymer_dom=__webpack_require__(1),compute_state_domain=__webpack_require__(23),dynamic_content_updater=__webpack_require__(85);class more_info_group_MoreInfoGroup extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      .child-card {
        margin-bottom: 8px;
      }

      .child-card:last-child {
        margin-bottom: 0;
      }
    </style>

    <div id="groupedControlDetails"></div>
    <template is="dom-repeat" items="[[states]]" as="state">
      <div class="child-card">
        <state-card-content state-obj="[[state]]" hass="[[hass]]"></state-card-content>
      </div>
    </template>
`}static get properties(){return{hass:{type:Object},stateObj:{type:Object},states:{type:Array,computed:"computeStates(stateObj, hass)"}}}static get observers(){return["statesChanged(stateObj, states)"]}computeStates(stateObj,hass){for(var states=[],entIds=stateObj.attributes.entity_id||[],i=0,state;i<entIds.length;i++){state=hass.states[entIds[i]];if(state){states.push(state)}}return states}statesChanged(stateObj,states){let groupDomainStateObj=!1,groupDomain=!1;if(states&&0<states.length){const baseStateObj=states.find(s=>"on"===s.state)||states[0];groupDomain=Object(compute_state_domain.a)(baseStateObj);if("group"!==groupDomain){groupDomainStateObj=Object.assign({},baseStateObj,{entity_id:stateObj.entity_id,attributes:Object.assign({},baseStateObj.attributes)});for(let i=0;i<states.length;i++){if(groupDomain!==Object(compute_state_domain.a)(states[i])){groupDomainStateObj=!1;break}}}}if(!groupDomainStateObj){const el=Object(polymer_dom.b)(this.$.groupedControlDetails);if(el.lastChild){el.removeChild(el.lastChild)}}else{Object(dynamic_content_updater.a)(this.$.groupedControlDetails,"MORE-INFO-"+groupDomain.toUpperCase(),{stateObj:groupDomainStateObj,hass:this.hass})}}}customElements.define("more-info-group",more_info_group_MoreInfoGroup);__webpack_require__(178);class more_info_history_graph_MoreInfoHistoryGraph extends polymer_element.a{static get template(){return html_tag.a`
    <style>
    :host {
      display: block;
      margin-bottom: 6px;
    }
    </style>
    <ha-history_graph-card hass="[[hass]]" state-obj="[[stateObj]]" in-dialog="">
    <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
  </ha-history_graph-card>
`}static get properties(){return{hass:Object,stateObj:Object}}}customElements.define("more-info-history_graph",more_info_history_graph_MoreInfoHistoryGraph);var polymer_legacy=__webpack_require__(2),vaadin_date_picker=__webpack_require__(347);class paper_time_input_PaperTimeInput extends polymer_element.a{static get template(){return html_tag.a`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          ;
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          ;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(--paper-time-input-dropdown-ripple-color, var(--primary-color));
          };
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          };
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          };
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">

        <!-- Hour Input -->
        <paper-input id="hour" type="number" value="{{hour}}" on-change="_shouldFormatHour" required="" auto-validate="[[autoValidate]]"
          prevent-invalid-input="" maxlength="2" max="[[_computeHourMax(format)]]" min="0" no-label-float="" disabled="[[disabled]]">
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input id="min" type="number" value="{{min}}" on-change="_formatMin" required="" auto-validate="[[autoValidate]]" prevent-invalid-input=""
          maxlength="2" max="59" min="0" no-label-float="" disabled="[[disabled]]">
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu id="dropdown" required="" hidden$="[[_equal(format, 24)]]" no-label-float="" disabled="[[disabled]]">

          <paper-listbox attr-for-selected="name" selected="{{amPm}}" slot="dropdown-content">
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>

      </div>
    `}static get properties(){return{label:{type:String,value:"Time"},autoValidate:{type:Boolean,value:!0},hideLabel:{type:Boolean,value:!1},format:{type:Number,value:12},disabled:{type:Boolean,value:!1},hour:{type:String,notify:!0},min:{type:String,notify:!0},amPm:{type:String,notify:!0,value:"AM"},value:{type:String,notify:!0,readOnly:!0,computed:"_computeTime(min, hour, amPm)"}}}validate(){var valid=!0;if(!this.$.hour.validate()|!this.$.min.validate()){valid=!1}if(12===this.format&&!this.$.dropdown.validate()){valid=!1}return valid}_computeTime(min,hour,amPm){if(hour&&min){if(24===this.format){amPm=""}return hour+":"+min+" "+amPm}}_formatMin(){if(1===this.min.toString().length){this.min=10>this.min?"0"+this.min:this.min}}_shouldFormatHour(){if(24===this.format&&1===this.hour.toString().length){this.hour=10>this.hour?"0"+this.hour:this.hour}}_computeHourMax(format){if(12===format){return format}return 23}_equal(n1,n2){return n1===n2}}customElements.define("paper-time-input",paper_time_input_PaperTimeInput);class more_info_input_datetime_DatetimeInput extends polymer_element.a{static get template(){return html_tag.a`
    <div class$="[[computeClassNames(stateObj)]]">
      <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">
        <div>
          <vaadin-date-picker id="dateInput" on-value-changed="dateTimeChanged" label="Date" value="{{selectedDate}}"></vaadin-date-picker>
        </div>
      </template>
      <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">
        <div>
          <paper-time-input hour="{{selectedHour}}" min="{{selectedMinute}}" format="24"></paper-time-input>
        </div>
      </template>
    </div>
`}constructor(){super();this.is_ready=!1}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},selectedDate:{type:String,observer:"dateTimeChanged"},selectedHour:{type:Number,observer:"dateTimeChanged"},selectedMinute:{type:Number,observer:"dateTimeChanged"}}}ready(){super.ready();this.is_ready=!0}getDateString(stateObj){if("unknown"===stateObj.state){return""}var monthFiller;if(10>stateObj.attributes.month){monthFiller="0"}else{monthFiller=""}var dayFiller;if(10>stateObj.attributes.day){dayFiller="0"}else{dayFiller=""}return stateObj.attributes.year+"-"+monthFiller+stateObj.attributes.month+"-"+dayFiller+stateObj.attributes.day}dateTimeChanged(){if(!this.is_ready){return}let changed=!1,minuteFiller;const serviceData={entity_id:this.stateObj.entity_id};if(this.stateObj.attributes.has_time){changed|=parseInt(this.selectedMinute)!==this.stateObj.attributes.minute;changed|=parseInt(this.selectedHour)!==this.stateObj.attributes.hour;if(10>this.selectedMinute){minuteFiller="0"}else{minuteFiller=""}var timeStr=this.selectedHour+":"+minuteFiller+this.selectedMinute;serviceData.time=timeStr}if(this.stateObj.attributes.has_date){if(0===this.selectedDate.length){return}const dateValInput=new Date(this.selectedDate),dateValState=new Date(this.stateObj.attributes.year,this.stateObj.attributes.month-1,this.stateObj.attributes.day);changed|=dateValState!==dateValInput;serviceData.date=this.selectedDate}if(changed){this.hass.callService("input_datetime","set_datetime",serviceData)}}stateObjChanged(newVal){this.is_ready=!1;if(newVal.attributes.has_time){this.selectedHour=newVal.attributes.hour;this.selectedMinute=newVal.attributes.minute}if(newVal.attributes.has_date){this.selectedDate=this.getDateString(newVal)}this.is_ready=!0}doesHaveDate(stateObj){return stateObj.attributes.has_date}doesHaveTime(stateObj){return stateObj.attributes.has_time}computeClassNames(stateObj){return"more-info-input_datetime "+Object(attribute_class_names.a)(stateObj,["has_time","has_date"])}}customElements.define("more-info-input_datetime",more_info_input_datetime_DatetimeInput);class ha_color_picker_HaColorPicker extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      :host {
        user-select: none;
        -webkit-user-select: none;
      }

      #canvas {
        position: relative;
        width: 100%;
        max-width: 330px;
      }
      #canvas > * {
        display: block;
      }
      #interactionLayer {
        color: white;
        position: absolute;
        cursor: crosshair;
        width: 100%;
        height: 100%;
        overflow: visible;
      }
      #backgroundLayer {
        width: 100%;
        overflow: visible;
        --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);
        --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);
        --wheel-shadow: var(--ha-color-picker-wheel-shadow, rgb(15, 15, 15) 10px 5px 5px 0px);
      }

      #marker {
        fill: currentColor;
        stroke: var(--ha-color-picker-marker-bordercolor, white);
        stroke-width: var(--ha-color-picker-marker-borderwidth, 3);
        filter: url(#marker-shadow)
      }
      .dragging #marker {
      }

      #colorTooltip {
        display: none;
        fill: currentColor;
        stroke: var(--ha-color-picker-tooltip-bordercolor, white);
        stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);
      }

      .touch.dragging #colorTooltip {
        display: inherit;
      }

    </style>
    <div id="canvas">
      <svg id="interactionLayer">
        <defs>
          <filter id="marker-shadow" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
             <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2"></feOffset>
             <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2"></feGaussianBlur>
             <feComponentTransfer in="blurOut" result="alphaOut">
               <feFuncA type="linear" slope="0.3"></feFuncA>
             </feComponentTransfer>
             <feBlend in="SourceGraphic" in2="alphaOut" mode="normal"></feBlend>
          </filter>
        </defs>
      </svg>
      <canvas id="backgroundLayer"></canvas>
    </div>
`}static get properties(){return{hsColor:{type:Object},desiredHsColor:{type:Object,observer:"applyHsColor"},width:{type:Number,value:500},height:{type:Number,value:500},radius:{type:Number,value:225},hueSegments:{type:Number,value:0},saturationSegments:{type:Number,value:0},ignoreSegments:{type:Boolean,value:!1},throttle:{type:Number,value:500}}}ready(){super.ready();this.setupLayers();this.drawColorWheel();this.drawMarker();this.interactionLayer.addEventListener("mousedown",ev=>this.onMouseDown(ev));this.interactionLayer.addEventListener("touchstart",ev=>this.onTouchStart(ev))}convertToCanvasCoordinates(clientX,clientY){var svgPoint=this.interactionLayer.createSVGPoint();svgPoint.x=clientX;svgPoint.y=clientY;var cc=svgPoint.matrixTransform(this.interactionLayer.getScreenCTM().inverse());return{x:cc.x,y:cc.y}}onMouseDown(ev){const cc=this.convertToCanvasCoordinates(ev.clientX,ev.clientY);if(!this.isInWheel(cc.x,cc.y)){return}this.onMouseSelect(ev);this.canvas.classList.add("mouse","dragging");this.addEventListener("mousemove",this.onMouseSelect);this.addEventListener("mouseup",this.onMouseUp)}onMouseUp(){this.canvas.classList.remove("mouse","dragging");this.removeEventListener("mousemove",this.onMouseSelect)}onMouseSelect(ev){requestAnimationFrame(()=>this.processUserSelect(ev))}onTouchStart(ev){var touch=ev.changedTouches[0];const cc=this.convertToCanvasCoordinates(touch.clientX,touch.clientY);if(!this.isInWheel(cc.x,cc.y)){return}if(ev.target===this.marker){ev.preventDefault();this.canvas.classList.add("touch","dragging");this.addEventListener("touchmove",this.onTouchSelect);this.addEventListener("touchend",this.onTouchEnd);return}this.tapBecameScroll=!1;this.addEventListener("touchend",this.onTap);this.addEventListener("touchmove",()=>{this.tapBecameScroll=!0},{passive:!0})}onTap(ev){if(this.tapBecameScroll){return}ev.preventDefault();this.onTouchSelect(ev)}onTouchEnd(){this.canvas.classList.remove("touch","dragging");this.removeEventListener("touchmove",this.onTouchSelect)}onTouchSelect(ev){requestAnimationFrame(()=>this.processUserSelect(ev.changedTouches[0]))}processUserSelect(ev){var canvasXY=this.convertToCanvasCoordinates(ev.clientX,ev.clientY),hs=this.getColor(canvasXY.x,canvasXY.y);this.onColorSelect(hs)}onColorSelect(hs){this.setMarkerOnColor(hs);if(!this.ignoreSegments){hs=this.applySegmentFilter(hs)}this.applyColorToCanvas(hs);if(this.colorSelectIsThrottled){clearTimeout(this.ensureFinalSelect);this.ensureFinalSelect=setTimeout(()=>{this.fireColorSelected(hs)},this.throttle);return}this.fireColorSelected(hs);this.colorSelectIsThrottled=!0;setTimeout(()=>{this.colorSelectIsThrottled=!1},this.throttle)}fireColorSelected(hs){this.hsColor=hs;this.fire("colorselected",{hs:{h:hs.h,s:hs.s}})}setMarkerOnColor(hs){var dist=hs.s*this.radius,theta=(hs.h-180)/180*_MathPI,markerdX=-dist*Math.cos(theta),markerdY=-dist*Math.sin(theta),translateString=`translate(${markerdX},${markerdY})`;this.marker.setAttribute("transform",translateString);this.tooltip.setAttribute("transform",translateString)}applyColorToCanvas(hs){this.interactionLayer.style.color=`hsl(${hs.h}, 100%, ${100-50*hs.s}%)`}applyHsColor(hs){if(this.hsColor&&this.hsColor.h===hs.h&&this.hsColor.s===hs.s){return}this.setMarkerOnColor(hs);if(!this.ignoreSegments){hs=this.applySegmentFilter(hs)}this.hsColor=hs;this.applyColorToCanvas(hs)}getAngle(dX,dY){var theta=Math.atan2(-dY,-dX);return 180*(theta/_MathPI)+180}isInWheel(x,y){return 1>=this.getDistance(x,y)}getDistance(dX,dY){return Math.sqrt(dX*dX+dY*dY)/this.radius}getColor(x,y){var hue=this.getAngle(x,y),relativeDistance=this.getDistance(x,y),sat=_Mathmin(relativeDistance,1);return{h:hue,s:sat}}applySegmentFilter(hs){if(this.hueSegments){const angleStep=360/this.hueSegments;hs.h-=angleStep/2;if(0>hs.h){hs.h+=360}const rest=hs.h%angleStep;hs.h-=rest-angleStep}if(this.saturationSegments){if(1===this.saturationSegments){hs.s=1}else{var segmentSize=1/this.saturationSegments,saturationStep=1/(this.saturationSegments-1),calculatedSat=Math.floor(hs.s/segmentSize)*saturationStep;hs.s=_Mathmin(calculatedSat,1)}}return hs}setupLayers(){this.canvas=this.$.canvas;this.backgroundLayer=this.$.backgroundLayer;this.interactionLayer=this.$.interactionLayer;this.originX=this.width/2;this.originY=this.originX;this.backgroundLayer.width=this.width;this.backgroundLayer.height=this.height;this.interactionLayer.setAttribute("viewBox",`${-this.originX} ${-this.originY} ${this.width} ${this.height}`)}drawColorWheel(){let shadowColor,shadowOffsetX,shadowOffsetY,shadowBlur;const context=this.backgroundLayer.getContext("2d"),cX=this.originX,cY=this.originY,radius=this.radius,wheelStyle=window.getComputedStyle(this.backgroundLayer,null),borderWidth=parseInt(wheelStyle.getPropertyValue("--wheel-borderwidth"),10),borderColor=wheelStyle.getPropertyValue("--wheel-bordercolor").trim(),wheelShadow=wheelStyle.getPropertyValue("--wheel-shadow").trim();if("none"!==wheelShadow){const values=wheelShadow.split("px ");shadowColor=values.pop();shadowOffsetX=parseInt(values[0],10);shadowOffsetY=parseInt(values[1],10);shadowBlur=parseInt(values[2],10)||0}const wheelRadius=radius;function drawShadow(){context.save();context.beginPath();context.arc(cX,cY,radius+borderWidth,0,2*_MathPI,!1);context.shadowColor=shadowColor;context.shadowOffsetX=shadowOffsetX;context.shadowOffsetY=shadowOffsetY;context.shadowBlur=shadowBlur;context.fillStyle="white";context.fill();context.restore()}function drawBorder(){context.beginPath();context.arc(cX,cY,radius+borderWidth/2,0,2*_MathPI,!1);context.lineWidth=borderWidth;context.strokeStyle=borderColor;context.stroke()}if("none"!==wheelStyle.shadow){drawShadow()}(function(hueSegments,saturationSegments){hueSegments=hueSegments||360;const angleStep=360/hueSegments,halfAngleStep=angleStep/2;for(var angle=0;360>=angle;angle+=angleStep){var startAngle=(angle-halfAngleStep)*(_MathPI/180),endAngle=(angle+halfAngleStep+1)*(_MathPI/180);context.beginPath();context.moveTo(cX,cY);context.arc(cX,cY,wheelRadius,startAngle,endAngle,!1);context.closePath();var gradient=context.createRadialGradient(cX,cY,0,cX,cY,wheelRadius);let lightness=100;gradient.addColorStop(0,`hsl(${angle}, 100%, ${lightness}%)`);if(0<saturationSegments){let ratio=0;for(var stop=1,prevLighness;stop<saturationSegments;stop+=1){prevLighness=lightness;ratio=stop*(1/saturationSegments);lightness=100-50*ratio;gradient.addColorStop(ratio,`hsl(${angle}, 100%, ${prevLighness}%)`);gradient.addColorStop(ratio,`hsl(${angle}, 100%, ${lightness}%)`)}gradient.addColorStop(ratio,`hsl(${angle}, 100%, 50%)`)}gradient.addColorStop(1,`hsl(${angle}, 100%, 50%)`);context.fillStyle=gradient;context.fill()}})(this.hueSegments,this.saturationSegments);if(0<borderWidth){drawBorder()}}drawMarker(){const svgElement=this.interactionLayer,markerradius=.08*this.radius,tooltipradius=.15*this.radius;svgElement.marker=document.createElementNS("http://www.w3.org/2000/svg","circle");svgElement.marker.setAttribute("id","marker");svgElement.marker.setAttribute("r",markerradius);this.marker=svgElement.marker;svgElement.appendChild(svgElement.marker);svgElement.tooltip=document.createElementNS("http://www.w3.org/2000/svg","circle");svgElement.tooltip.setAttribute("id","colorTooltip");svgElement.tooltip.setAttribute("r",tooltipradius);svgElement.tooltip.setAttribute("cx",0);svgElement.tooltip.setAttribute("cy",-(3*tooltipradius));this.tooltip=svgElement.tooltip;svgElement.appendChild(svgElement.tooltip)}}customElements.define("ha-color-picker",ha_color_picker_HaColorPicker);const more_info_light_FEATURE_CLASS_NAMES={1:"has-brightness",2:"has-color_temp",4:"has-effect_list",16:"has-color",128:"has-white_value"};class more_info_light_MoreInfoLight extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
  <style include="iron-flex"></style>
  <style>

    .effect_list, .brightness, .color_temp, .white_value {
      max-height: 0px;
      overflow: hidden;
      transition: max-height .5s ease-in;
    }

    .color_temp {
      --ha-slider-background: -webkit-linear-gradient(right, rgb(255, 160, 0) 0%, white 50%, rgb(166, 209, 255) 100%);
      /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
      --paper-slider-knob-start-border-color: var(--primary-color);
    }

    ha-color-picker {
      display: block;
      width: 100%;

      max-height: 0px;
      overflow: hidden;
      transition: max-height .5s ease-in;
    }

    .has-effect_list.is-on .effect_list,
    .has-brightness .brightness,
    .has-color_temp.is-on .color_temp,
    .has-white_value.is-on .white_value {
      max-height: 84px;
    }

    .has-brightness
    .has-color_temp.is-on,
    .has-white_value.is-on {
      margin-top: -16px;
    }

    .has-brightness .brightness,
    .has-color_temp.is-on .color_temp,
    .has-white_value.is-on .white_value {
      padding-top: 16px;
    }

    .has-color.is-on ha-color-picker {
      max-height: 500px;
      overflow: visible;
      --ha-color-picker-wheel-borderwidth: 5;
      --ha-color-picker-wheel-bordercolor: white;
      --ha-color-picker-wheel-shadow: none;
      --ha-color-picker-marker-borderwidth: 2;
      --ha-color-picker-marker-bordercolor: white;
    }

    .is-unavailable .control {
      max-height: 0px;
    }

    paper-item {
      cursor: pointer;
    }

  </style>

  <div class$="[[computeClassNames(stateObj)]]">

    <div class="control brightness">
      <ha-labeled-slider caption="[[localize('ui.card.light.brightness')]]" icon="hass:brightness-5" min="1" max="255" value="{{brightnessSliderValue}}" on-change="brightnessSliderChanged"></ha-labeled-slider>
    </div>

    <div class="control color_temp">
      <ha-labeled-slider caption="[[localize('ui.card.light.color_temperature')]]" icon="hass:thermometer" min="[[stateObj.attributes.min_mireds]]" max="[[stateObj.attributes.max_mireds]]" value="{{ctSliderValue}}" on-change="ctSliderChanged"></ha-labeled-slider>
    </div>

    <div class="control white_value">
      <ha-labeled-slider caption="[[localize('ui.card.light.white_value')]]" icon="hass:file-word-box" max="255" value="{{wvSliderValue}}" on-change="wvSliderChanged"></ha-labeled-slider>
    </div>

    <ha-color-picker class="control color" on-colorselected="colorPicked" desired-hs-color="{{colorPickerColor}}" throttle="500" hue-segments="24" saturation-segments="8">
    </ha-color-picker>

    <div class="control effect_list">
      <paper-dropdown-menu label-float="" dynamic-align="" label="[[localize('ui.card.light.effect')]]">
        <paper-listbox slot="dropdown-content" selected="{{effectIndex}}">
          <template is="dom-repeat" items="[[stateObj.attributes.effect_list]]">
            <paper-item>[[item]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    </div>

    <ha-attributes state-obj="[[stateObj]]" extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds"></ha-attributes>
  </div>
`}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},effectIndex:{type:Number,value:-1,observer:"effectChanged"},brightnessSliderValue:{type:Number,value:0},ctSliderValue:{type:Number,value:0},wvSliderValue:{type:Number,value:0},colorPickerColor:{type:Object}}}stateObjChanged(newVal,oldVal){const props={brightnessSliderValue:0};if(newVal&&"on"===newVal.state){props.brightnessSliderValue=newVal.attributes.brightness;props.ctSliderValue=newVal.attributes.color_temp;props.wvSliderValue=newVal.attributes.white_value;if(newVal.attributes.hs_color){props.colorPickerColor={h:newVal.attributes.hs_color[0],s:newVal.attributes.hs_color[1]/100}}if(newVal.attributes.effect_list){props.effectIndex=newVal.attributes.effect_list.indexOf(newVal.attributes.effect)}else{props.effectIndex=-1}}this.setProperties(props);if(oldVal){setTimeout(()=>{this.fire("iron-resize")},500)}}computeClassNames(stateObj){const classes=[featureClassNames(stateObj,more_info_light_FEATURE_CLASS_NAMES)];if(stateObj&&"on"===stateObj.state){classes.push("is-on")}if(stateObj&&"unavailable"===stateObj.state){classes.push("is-unavailable")}return classes.join(" ")}effectChanged(effectIndex){var effectInput;if(""===effectIndex||-1===effectIndex)return;effectInput=this.stateObj.attributes.effect_list[effectIndex];if(effectInput===this.stateObj.attributes.effect)return;this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,effect:effectInput})}brightnessSliderChanged(ev){var bri=parseInt(ev.target.value,10);if(isNaN(bri))return;this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,brightness:bri})}ctSliderChanged(ev){var ct=parseInt(ev.target.value,10);if(isNaN(ct))return;this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,color_temp:ct})}wvSliderChanged(ev){var wv=parseInt(ev.target.value,10);if(isNaN(wv))return;this.hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,white_value:wv})}serviceChangeColor(hass,entityId,color){hass.callService("light","turn_on",{entity_id:entityId,hs_color:[color.h,100*color.s]})}colorPicked(ev){this.serviceChangeColor(this.hass,this.stateObj.entity_id,ev.detail.hs)}}customElements.define("more-info-light",more_info_light_MoreInfoLight);class more_info_lock_MoreInfoLock extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <style>
        paper-input {
          display: inline-block;
        }
      </style>

      <template is="dom-if" if="[[stateObj.attributes.code_format]]">
        <paper-input label="[[localize('ui.card.lock.code')]]" value="{{enteredCode}}" pattern="[[stateObj.attributes.code_format]]" type="password"></paper-input>
        <paper-button on-click="callService" data-service="unlock" hidden$="[[!isLocked]]">[[localize('ui.card.lock.unlock')]]</paper-button>
        <paper-button on-click="callService" data-service="lock" hidden$="[[isLocked]]">[[localize('ui.card.lock.lock')]]</paper-button>
      </template>
      <ha-attributes state-obj="[[stateObj]]" extra-filters="code_format"></ha-attributes>
    `}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"stateObjChanged"},enteredCode:{type:String,value:""},isLocked:Boolean}}stateObjChanged(newVal){if(newVal){this.isLocked="locked"===newVal.state}}callService(ev){const service=ev.target.getAttribute("data-service"),data={entity_id:this.stateObj.entity_id,code:this.enteredCode};this.hass.callService("lock",service,data)}}customElements.define("more-info-lock",more_info_lock_MoreInfoLock);var iron_icon=__webpack_require__(76),hass_media_player_model=__webpack_require__(116),is_component_loaded=__webpack_require__(135);class more_info_media_player_MoreInfoMediaPlayer extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
  <style include="iron-flex iron-flex-alignment"></style>
  <style>
    .media-state {
      text-transform: capitalize;
    }

    paper-icon-button[highlight] {
      color: var(--accent-color);
    }

    .volume {
      margin-bottom: 8px;

      max-height: 0px;
      overflow: hidden;
      transition: max-height .5s ease-in;
    }

    .has-volume_level .volume {
      max-height: 40px;
    }

    iron-icon.source-input {
      padding: 7px;
      margin-top: 15px;
    }

    paper-dropdown-menu.source-input {
      margin-left: 10px;
    }

    [hidden] {
      display: none !important;
    }

    paper-item {
      cursor: pointer;
    }
  </style>

  <div class$="[[computeClassNames(stateObj)]]">
    <div class="layout horizontal">
      <div class="flex">
        <paper-icon-button icon="hass:power" highlight$="[[playerObj.isOff]]" on-click="handleTogglePower" hidden$="[[computeHidePowerButton(playerObj)]]"></paper-icon-button>
      </div>
      <div>
        <template is="dom-if" if="[[computeShowPlaybackControls(playerObj)]]">
          <paper-icon-button icon="hass:skip-previous" on-click="handlePrevious" hidden$="[[!playerObj.supportsPreviousTrack]]"></paper-icon-button>
          <paper-icon-button icon="[[computePlaybackControlIcon(playerObj)]]" on-click="handlePlaybackControl" hidden$="[[!computePlaybackControlIcon(playerObj)]]" highlight=""></paper-icon-button>
          <paper-icon-button icon="hass:skip-next" on-click="handleNext" hidden$="[[!playerObj.supportsNextTrack]]"></paper-icon-button>
        </template>
      </div>
    </div>
    <!-- VOLUME -->
    <div class="volume_buttons center horizontal layout" hidden$="[[computeHideVolumeButtons(playerObj)]]">
      <paper-icon-button on-click="handleVolumeTap" icon="hass:volume-off"></paper-icon-button>
      <paper-icon-button id="volumeDown" disabled$="[[playerObj.isMuted]]" on-mousedown="handleVolumeDown" on-touchstart="handleVolumeDown" icon="hass:volume-medium"></paper-icon-button>
      <paper-icon-button id="volumeUp" disabled$="[[playerObj.isMuted]]" on-mousedown="handleVolumeUp" on-touchstart="handleVolumeUp" icon="hass:volume-high"></paper-icon-button>
    </div>
    <div class="volume center horizontal layout" hidden$="[[!playerObj.supportsVolumeSet]]">
      <paper-icon-button on-click="handleVolumeTap" hidden$="[[playerObj.supportsVolumeButtons]]" icon="[[computeMuteVolumeIcon(playerObj)]]"></paper-icon-button>
      <ha-paper-slider disabled$="[[playerObj.isMuted]]" min="0" max="100" value="[[playerObj.volumeSliderValue]]" on-change="volumeSliderChanged" class="flex" ignore-bar-touch="">
      </ha-paper-slider>
    </div>
    <!-- SOURCE PICKER -->
    <div class="controls layout horizontal justified" hidden$="[[computeHideSelectSource(playerObj)]]">
      <iron-icon class="source-input" icon="hass:login-variant"></iron-icon>
      <paper-dropdown-menu class="flex source-input" dynamic-align="" label-float="" label="[[localize('ui.card.media_player.source')]]">
        <paper-listbox slot="dropdown-content" selected="{{sourceIndex}}">
          <template is="dom-repeat" items="[[playerObj.sourceList]]">
            <paper-item>[[item]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    </div>
    <!-- SOUND MODE PICKER -->
    <template is='dom-if' if='[[!computeHideSelectSoundMode(playerObj)]]'>
      <div class="controls layout horizontal justified">
        <iron-icon class="source-input" icon="hass:music-note"></iron-icon>
        <paper-dropdown-menu class="flex source-input" dynamic-align label-float label="[[localize('ui.card.media_player.sound_mode')]]">
          <paper-listbox slot="dropdown-content" attr-for-selected="item-name" selected="{{SoundModeInput}}">
            <template is='dom-repeat' items='[[playerObj.soundModeList]]'>
              <paper-item item-name$="[[item]]">[[item]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    </template>
    <!-- TTS -->
    <div hidden$="[[computeHideTTS(ttsLoaded, playerObj)]]" class="layout horizontal end">
      <paper-input id="ttsInput" label="[[localize('ui.card.media_player.text_to_speak')]]" class="flex" value="{{ttsMessage}}" on-keydown="ttsCheckForEnter"></paper-input>
      <paper-icon-button icon="hass:send" on-click="sendTTS"></paper-icon-button>
    </div>
  </div>
`}static get properties(){return{hass:Object,stateObj:Object,playerObj:{type:Object,computed:"computePlayerObj(hass, stateObj)",observer:"playerObjChanged"},sourceIndex:{type:Number,value:0,observer:"handleSourceChanged"},SoundModeInput:{type:String,value:"",observer:"handleSoundModeChanged"},ttsLoaded:{type:Boolean,computed:"computeTTSLoaded(hass)"},ttsMessage:{type:String,value:""}}}computePlayerObj(hass,stateObj){return new hass_media_player_model.a(hass,stateObj)}playerObjChanged(newVal,oldVal){if(newVal&&newVal.sourceList!==void 0){this.sourceIndex=newVal.sourceList.indexOf(newVal.source)}if(newVal&&newVal.soundModeList!==void 0){this.SoundModeInput=newVal.soundMode}if(oldVal){setTimeout(()=>{this.fire("iron-resize")},500)}}computeClassNames(stateObj){return Object(attribute_class_names.a)(stateObj,["volume_level"])}computeMuteVolumeIcon(playerObj){return playerObj.isMuted?"hass:volume-off":"hass:volume-high"}computeHideVolumeButtons(playerObj){return!playerObj.supportsVolumeButtons||playerObj.isOff}computeShowPlaybackControls(playerObj){return!playerObj.isOff&&playerObj.hasMediaControl}computePlaybackControlIcon(playerObj){if(playerObj.isPlaying){return playerObj.supportsPause?"hass:pause":"hass:stop"}if(playerObj.hasMediaControl||playerObj.isOff||playerObj.isIdle){if(playerObj.hasMediaControl&&playerObj.supportsPause&&!playerObj.isPaused){return"hass:play-pause"}return playerObj.supportsPlay?"hass:play":null}return""}computeHidePowerButton(playerObj){return playerObj.isOff?!playerObj.supportsTurnOn:!playerObj.supportsTurnOff}computeHideSelectSource(playerObj){return playerObj.isOff||!playerObj.supportsSelectSource||!playerObj.sourceList}computeHideSelectSoundMode(playerObj){return playerObj.isOff||!playerObj.supportsSelectSoundMode||!playerObj.soundModeList}computeHideTTS(ttsLoaded,playerObj){return!ttsLoaded||!playerObj.supportsPlayMedia}computeTTSLoaded(hass){return Object(is_component_loaded.a)(hass,"tts")}handleTogglePower(){this.playerObj.togglePower()}handlePrevious(){this.playerObj.previousTrack()}handlePlaybackControl(){this.playerObj.mediaPlayPause()}handleNext(){this.playerObj.nextTrack()}handleSourceChanged(sourceIndex,sourceIndexOld){if(!this.playerObj||!this.playerObj.supportsSelectSource||this.playerObj.sourceList===void 0||0>sourceIndex||sourceIndex>=this.playerObj.sourceList||sourceIndexOld===void 0){return}const sourceInput=this.playerObj.sourceList[sourceIndex];if(sourceInput===this.playerObj.source){return}this.playerObj.selectSource(sourceInput)}handleSoundModeChanged(newVal,oldVal){if(oldVal&&newVal!==this.playerObj.soundMode&&this.playerObj.supportsSelectSoundMode){this.playerObj.selectSoundMode(newVal)}}handleVolumeTap(){if(!this.playerObj.supportsVolumeMute){return}this.playerObj.volumeMute(!this.playerObj.isMuted)}handleVolumeUp(){const obj=this.$.volumeUp;this.handleVolumeWorker("volume_up",obj,!0)}handleVolumeDown(){const obj=this.$.volumeDown;this.handleVolumeWorker("volume_down",obj,!0)}handleVolumeWorker(service,obj,force){if(force||obj!==void 0&&obj.pointerDown){this.playerObj.callService(service);setTimeout(()=>this.handleVolumeWorker(service,obj,!1),500)}}volumeSliderChanged(ev){const volPercentage=parseFloat(ev.target.value),volume=0<volPercentage?volPercentage/100:0;this.playerObj.setVolume(volume)}ttsCheckForEnter(ev){if(13===ev.keyCode)this.sendTTS()}sendTTS(){const services=this.hass.services.tts,serviceKeys=Object.keys(services).sort();let service,i;for(i=0;i<serviceKeys.length;i++){if(-1!==serviceKeys[i].indexOf("_say")){service=serviceKeys[i];break}}if(!service){return}this.hass.callService("tts",service,{entity_id:this.stateObj.entity_id,message:this.ttsMessage});this.ttsMessage="";this.$.ttsInput.focus()}}customElements.define("more-info-media_player",more_info_media_player_MoreInfoMediaPlayer);class more_info_script_MoreInfoScript extends polymer_element.a{static get template(){return html_tag.a`
    <style include="iron-flex iron-flex-alignment"></style>

    <div class="layout vertical">
      <div class="data-entry layout justified horizontal">
        <div class="key">Last Action</div>
        <div class="value">[[stateObj.attributes.last_action]]</div>
      </div>
    </div>
`}static get properties(){return{stateObj:{type:Object}}}}customElements.define("more-info-script",more_info_script_MoreInfoScript);var format_time=__webpack_require__(112);class more_info_sun_MoreInfoSun extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="iron-flex iron-flex-alignment"></style>

    <template is="dom-repeat" items="[[computeOrder(risingDate, settingDate)]]">
      <div class="data-entry layout justified horizontal">
        <div class="key">
          <span>[[itemCaption(item)]]</span>
          <ha-relative-time hass="[[hass]]" datetime-obj="[[itemDate(item)]]"></ha-relative-time>
        </div>
        <div class="value">[[itemValue(item)]]</div>
      </div>
    </template>
      <div class="data-entry layout justified horizontal">
        <div class="key">Elevation</div>
        <div class="value">[[stateObj.attributes.elevation]]</div>
     </div>
`}static get properties(){return{hass:Object,stateObj:Object,risingDate:{type:Object,computed:"computeRising(stateObj)"},settingDate:{type:Object,computed:"computeSetting(stateObj)"}}}computeRising(stateObj){return new Date(stateObj.attributes.next_rising)}computeSetting(stateObj){return new Date(stateObj.attributes.next_setting)}computeOrder(risingDate,settingDate){return risingDate>settingDate?["set","ris"]:["ris","set"]}itemCaption(type){return"ris"===type?"Rising ":"Setting "}itemDate(type){return"ris"===type?this.risingDate:this.settingDate}itemValue(type){return Object(format_time.a)(this.itemDate(type),this.hass.language)}}customElements.define("more-info-sun",more_info_sun_MoreInfoSun);class more_info_updater_MoreInfoUpdater extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      .link {
        color: #03A9F4;
      }
    </style>

    <div>
      <a class="link" href="https://www.home-assistant.io/docs/installation/updating/" target="_blank">Update Instructions</a>
    </div>
`}static get properties(){return{stateObj:{type:Object}}}computeReleaseNotes(stateObj){return stateObj.attributes.release_notes||"https://www.home-assistant.io/docs/installation/updating/"}}customElements.define("more-info-updater",more_info_updater_MoreInfoUpdater);class more_info_vacuum_MoreInfoVacuum extends polymer_element.a{static get template(){return html_tag.a`
    <style include="iron-flex iron-flex-alignment"></style>
    <style>
      :host {
        @apply --paper-font-body1;
        line-height: 1.5;
      }

      .status-subtitle {
        color: var(--secondary-text-color);
      }

      paper-item {
        cursor: pointer;
      }

    </style>

    <div class="horizontal justified layout">
      <div hidden$="[[!supportsStatus(stateObj)]]">
        <span class="status-subtitle">Status: </span><span><strong>[[stateObj.attributes.status]]</strong></span>
      </div>
      <div hidden$="[[!supportsBattery(stateObj)]]">
        <span><iron-icon icon="[[stateObj.attributes.battery_icon]]"></iron-icon> [[stateObj.attributes.battery_level]] %</span>
      </div>
    </div>
    <div hidden$="[[!supportsCommandBar(stateObj)]]">
      <p></p>
      <div class="status-subtitle">Vacuum cleaner commands:</div>
      <div class="horizontal justified layout">
        <template is="dom-if" if="[[supportsStart(stateObj)]]">
          <div>
            <paper-icon-button icon="hass:play" on-click="onStart" title="Start"></paper-icon-button>
          </div>
          <div hidden$="[[!supportsPause(stateObj)]]">
            <paper-icon-button icon="hass:pause" on-click="onPause" title="Pause"></paper-icon-button>
          </div>
        </template>
        <template is="dom-if" if="[[!supportsStart(stateObj)]]">
          <div hidden$="[[!supportsPause(stateObj)]]">
            <paper-icon-button icon="hass:play-pause" on-click="onPlayPause" title="Pause"></paper-icon-button>
          </div>
        </template>

        <div hidden$="[[!supportsStop(stateObj)]]">
          <paper-icon-button icon="hass:stop" on-click="onStop" title="Stop"></paper-icon-button>
        </div>
        <div hidden$="[[!supportsCleanSpot(stateObj)]]">
        <paper-icon-button icon="hass:broom" on-click="onCleanSpot" title="Clean spot"></paper-icon-button>
        </div>
        <div hidden$="[[!supportsLocate(stateObj)]]">
        <paper-icon-button icon="hass:map-marker" on-click="onLocate" title="Locate"></paper-icon-button>
        </div>
        <div hidden$="[[!supportsReturnHome(stateObj)]]">
        <paper-icon-button icon="hass:home-map-marker" on-click="onReturnHome" title="Return home"></paper-icon-button>
        </div>
      </div>
    </div>

    <div hidden$="[[!supportsFanSpeed(stateObj)]]">
      <div class="horizontal justified layout">
        <paper-dropdown-menu label-float="" dynamic-align="" label="Fan speed">
          <paper-listbox slot="dropdown-content" selected="{{fanSpeedIndex}}">
            <template is="dom-repeat" items="[[stateObj.attributes.fan_speed_list]]">
              <paper-item>[[item]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
        <div style="justify-content: center; align-self: center; padding-top: 1.3em">
          <span><iron-icon icon="hass:fan"></iron-icon> [[stateObj.attributes.fan_speed]]</span>
        </div>
      </div>
      <p></p>
    </div>
    <ha-attributes state-obj="[[stateObj]]" extra-filters="fan_speed,fan_speed_list,status,battery_level,battery_icon"></ha-attributes>
`}static get properties(){return{hass:{type:Object},inDialog:{type:Boolean,value:!1},stateObj:{type:Object},fanSpeedIndex:{type:Number,value:-1,observer:"fanSpeedChanged"}}}supportsPause(stateObj){return 0!==(4&stateObj.attributes.supported_features)}supportsStop(stateObj){return 0!==(8&stateObj.attributes.supported_features)}supportsReturnHome(stateObj){return 0!==(16&stateObj.attributes.supported_features)}supportsFanSpeed(stateObj){return 0!==(32&stateObj.attributes.supported_features)}supportsBattery(stateObj){return 0!==(64&stateObj.attributes.supported_features)}supportsStatus(stateObj){return 0!==(128&stateObj.attributes.supported_features)}supportsLocate(stateObj){return 0!==(512&stateObj.attributes.supported_features)}supportsCleanSpot(stateObj){return 0!==(1024&stateObj.attributes.supported_features)}supportsStart(stateObj){return 0!==(8192&stateObj.attributes.supported_features)}supportsCommandBar(stateObj){return 0!==(4&stateObj.attributes.supported_features)|0!==(8&stateObj.attributes.supported_features)|0!==(16&stateObj.attributes.supported_features)|0!==(512&stateObj.attributes.supported_features)|0!==(1024&stateObj.attributes.supported_features)|0!==(8192&stateObj.attributes.supported_features)}fanSpeedChanged(fanSpeedIndex){var fanSpeedInput;if(""===fanSpeedIndex||-1===fanSpeedIndex)return;fanSpeedInput=this.stateObj.attributes.fan_speed_list[fanSpeedIndex];if(fanSpeedInput===this.stateObj.attributes.fan_speed)return;this.hass.callService("vacuum","set_fan_speed",{entity_id:this.stateObj.entity_id,fan_speed:fanSpeedInput})}onStop(){this.hass.callService("vacuum","stop",{entity_id:this.stateObj.entity_id})}onPlayPause(){this.hass.callService("vacuum","start_pause",{entity_id:this.stateObj.entity_id})}onPause(){this.hass.callService("vacuum","pause",{entity_id:this.stateObj.entity_id})}onStart(){this.hass.callService("vacuum","start",{entity_id:this.stateObj.entity_id})}onLocate(){this.hass.callService("vacuum","locate",{entity_id:this.stateObj.entity_id})}onCleanSpot(){this.hass.callService("vacuum","clean_spot",{entity_id:this.stateObj.entity_id})}onReturnHome(){this.hass.callService("vacuum","return_to_base",{entity_id:this.stateObj.entity_id})}}customElements.define("more-info-vacuum",more_info_vacuum_MoreInfoVacuum);class ha_water_heater_control_HaWaterHeaterControl extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="iron-flex iron-flex-alignment"></style>
    <style>
      /* local DOM styles go here */
      :host {
        @apply --layout-flex;
        @apply --layout-horizontal;
        @apply --layout-justified;
      }
      .in-flux#target_temperature {
        color: var(--google-red-500);
      }
      #target_temperature {
        @apply --layout-self-center;
        font-size: 200%;
      }
      .control-buttons {
        font-size: 200%;
        text-align: right;
      }
      paper-icon-button {
        height: 48px;
        width: 48px;
      }
    </style>

    <!-- local DOM goes here -->
    <div id="target_temperature">
      [[value]] [[units]]
    </div>
    <div class="control-buttons">
      <div>
        <paper-icon-button icon="hass:chevron-up" on-click="incrementValue"></paper-icon-button>
      </div>
      <div>
        <paper-icon-button icon="hass:chevron-down" on-click="decrementValue"></paper-icon-button>
      </div>
    </div>
`}static get properties(){return{value:{type:Number,observer:"valueChanged"},units:{type:String},min:{type:Number},max:{type:Number},step:{type:Number,value:1}}}temperatureStateInFlux(inFlux){this.$.target_temperature.classList.toggle("in-flux",inFlux)}incrementValue(){const newval=this.value+this.step;if(this.value<this.max){this.last_changed=Date.now();this.temperatureStateInFlux(!0)}if(newval<=this.max){if(newval<=this.min){this.value=this.min}else{this.value=newval}}else{this.value=this.max}}decrementValue(){const newval=this.value-this.step;if(this.value>this.min){this.last_changed=Date.now();this.temperatureStateInFlux(!0)}if(newval>=this.min){this.value=newval}else{this.value=this.min}}valueChanged(){if(this.last_changed){window.setTimeout(()=>{const now=Date.now();if(2e3<=now-this.last_changed){this.fire("change");this.temperatureStateInFlux(!1);this.last_changed=null}},2010)}}}customElements.define("ha-water_heater-control",ha_water_heater_control_HaWaterHeaterControl);class more_info_water_heater_MoreInfoWaterHeater extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="iron-flex"></style>
    <style>
      :host {
        color: var(--primary-text-color);
      }

      .container-away_mode,
      .container-temperature,
      .container-operation_list,

      .has-away_mode .container-away_mode,
      .has-target_temperature .container-temperature,
      .has-operation_mode .container-operation_list,

      .container-operation_list iron-icon,

      paper-dropdown-menu {
        width: 100%;
      }

      paper-item {
        cursor: pointer;
      }

      ha-paper-slider {
        width: 100%;
      }

      ha-water_heater-control.range-control-left,
      ha-water_heater-control.range-control-right {
        float: left;
        width: 46%;
      }
      ha-water_heater-control.range-control-left {
        margin-right: 4%;
      }
      ha-water_heater-control.range-control-right {
        margin-left: 4%;
      }

      .single-row {
        padding: 8px 0;
      }
      }
    </style>

    <div class$="[[computeClassNames(stateObj)]]">

      <div class="container-temperature">
        <div class$="[[stateObj.attributes.operation_mode]]">
          <div hidden$="[[!supportsTemperatureControls(stateObj)]]">[[localize('ui.card.water_heater.target_temperature')]]</div>
          <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
            <ha-water_heater-control value="[[stateObj.attributes.temperature]]" units="[[hass.config.unit_system.temperature]]" step="[[computeTemperatureStepSize(hass, stateObj)]]" min="[[stateObj.attributes.min_temp]]" max="[[stateObj.attributes.max_temp]]" on-change="targetTemperatureChanged">
            </ha-water_heater-control>
          </template>
        </div>
      </div>

      <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
        <div class="container-operation_list">
          <div class="controls">
            <paper-dropdown-menu label-float="" dynamic-align="" label="[[localize('ui.card.water_heater.operation')]]">
              <paper-listbox slot="dropdown-content" selected="{{operationIndex}}">
                <template is="dom-repeat" items="[[stateObj.attributes.operation_list]]" on-dom-change="handleOperationListUpdate">
                  <paper-item>[[_localizeOperationMode(localize, item)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        </div>
      </template>

      <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
        <div class="container-away_mode">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.water_heater.away_mode')]]</div>
            <paper-toggle-button checked="[[awayToggleChecked]]" on-change="awayToggleChanged">
            </paper-toggle-button>
          </div>
        </div>
      </template>
    </div>
`}static get properties(){return{hass:{type:Object},stateObj:{type:Object,observer:"stateObjChanged"},operationIndex:{type:Number,value:-1,observer:"handleOperationmodeChanged"},awayToggleChecked:Boolean}}stateObjChanged(newVal,oldVal){if(newVal){this.setProperties({awayToggleChecked:"on"===newVal.attributes.away_mode})}if(oldVal){this._debouncer=debounce.a.debounce(this._debouncer,utils_async.d.after(500),()=>{this.fire("iron-resize")})}}handleOperationListUpdate(){this.operationIndex=-1;if(this.stateObj.attributes.operation_list){this.operationIndex=this.stateObj.attributes.operation_list.indexOf(this.stateObj.attributes.operation_mode)}}computeTemperatureStepSize(hass,stateObj){if(stateObj.attributes.target_temp_step){return stateObj.attributes.target_temp_step}if(-1!==hass.config.unit_system.temperature.indexOf("F")){return 1}return .5}supportsTemperatureControls(stateObj){return this.supportsTemperature(stateObj)}supportsTemperature(stateObj){return 0!==(1&stateObj.attributes.supported_features)&&"number"===typeof stateObj.attributes.temperature}supportsOperationMode(stateObj){return 0!==(2&stateObj.attributes.supported_features)}supportsAwayMode(stateObj){return 0!==(4&stateObj.attributes.supported_features)}computeClassNames(stateObj){var classes=[featureClassNames(stateObj,{1:"has-target_temperature",2:"has-operation_mode",4:"has-away_mode"}),"more-info-water_heater"];return classes.join(" ")}targetTemperatureChanged(ev){const temperature=ev.target.value;if(temperature===this.stateObj.attributes.temperature)return;this.callServiceHelper("set_temperature",{temperature:temperature})}awayToggleChanged(ev){const oldVal="on"===this.stateObj.attributes.away_mode,newVal=ev.target.checked;if(oldVal===newVal)return;this.callServiceHelper("set_away_mode",{away_mode:newVal})}handleOperationmodeChanged(operationIndex){if(""===operationIndex||-1===operationIndex)return;const operationInput=this.stateObj.attributes.operation_list[operationIndex];if(operationInput===this.stateObj.attributes.operation_mode)return;this.callServiceHelper("set_operation_mode",{operation_mode:operationInput})}callServiceHelper(service,data){data.entity_id=this.stateObj.entity_id;this.hass.callService("water_heater",service,data).then(()=>{this.stateObjChanged(this.stateObj)})}_localizeOperationMode(localize,mode){return localize(`state.water_heater.${mode}`)||mode}}customElements.define("more-info-water_heater",more_info_water_heater_MoreInfoWaterHeater);class more_info_weather_MoreInfoWeather extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      iron-icon {
        color: var(--paper-item-icon-color);
      }
      .section {
        margin: 16px 0 8px 0;
        font-size: 1.2em;
      }

      .flex {
        display: flex;
        height: 32px;
        align-items: center;
      }

      .main {
        flex: 1;
        margin-left: 24px;
      }

      .temp,
      .templow {
        min-width: 48px;
        text-align: right;
      }

      .templow {
        margin: 0 16px;
        color: var(--secondary-text-color);
      }

      .attribution {
        color: var(--secondary-text-color);
        text-align: center;
      }
    </style>

    <div class="flex">
      <iron-icon icon="hass:thermometer"></iron-icon>
      <div class="main">[[localize('ui.card.weather.attributes.temperature')]]</div>
      <div>[[stateObj.attributes.temperature]] [[getUnit('temperature')]]</div>
    </div>
    <template is="dom-if" if="[[_showValue(stateObj.attributes.pressure)]]">
      <div class="flex">
        <iron-icon icon="hass:gauge"></iron-icon>
        <div class="main">[[localize('ui.card.weather.attributes.air_pressure')]]</div>
        <div>[[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]</div>
      </div>
    </template>
    <template is="dom-if" if="[[_showValue(stateObj.attributes.humidity)]]">
      <div class="flex">
        <iron-icon icon="hass:water-percent"></iron-icon>
        <div class="main">[[localize('ui.card.weather.attributes.humidity')]]</div>
        <div>[[stateObj.attributes.humidity]] %</div>
      </div>
    </template>
    <template is="dom-if" if="[[_showValue(stateObj.attributes.wind_speed)]]">
      <div class="flex">
        <iron-icon icon="hass:weather-windy"></iron-icon>
        <div class="main">[[localize('ui.card.weather.attributes.wind_speed')]]</div>
        <div>[[getWind(stateObj.attributes.wind_speed, stateObj.attributes.wind_bearing, localize)]]</div>
      </div>
    </template>
    <template is="dom-if" if="[[_showValue(stateObj.attributes.visibility)]]">
      <div class="flex">
        <iron-icon icon="hass:eye"></iron-icon>
        <div class="main">[[localize('ui.card.weather.attributes.visibility')]]</div>
        <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>
      </div>
    </template>

    <template is="dom-if" if="[[stateObj.attributes.forecast]]">
      <div class="section">[[localize('ui.card.weather.forecast')]]:</div>
      <template is="dom-repeat" items="[[stateObj.attributes.forecast]]">
        <div class="flex">
          <template is="dom-if" if="[[_showValue(item.condition)]]">
            <iron-icon icon="[[getWeatherIcon(item.condition)]]"></iron-icon>
          </template>
          <div class="main">[[computeDateTime(item.datetime)]]</div>
          <template is="dom-if" if="[[_showValue(item.templow)]]">
            <div class="templow">[[item.templow]] [[getUnit('temperature')]]</div>
          </template>
          <div class="temp">[[item.temperature]] [[getUnit('temperature')]]</div>
        </div>
      </template>
    </template>

    <template is="dom-if" if="stateObj.attributes.attribution">
      <div class="attribution">[[stateObj.attributes.attribution]]</div>
    </template>
`}static get properties(){return{hass:Object,stateObj:Object}}constructor(){super();this.cardinalDirections=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"];this.weatherIcons={"clear-night":"hass:weather-night",cloudy:"hass:weather-cloudy",fog:"hass:weather-fog",hail:"hass:weather-hail",lightning:"hass:weather-lightning","lightning-rainy":"hass:weather-lightning-rainy",partlycloudy:"hass:weather-partlycloudy",pouring:"hass:weather-pouring",rainy:"hass:weather-rainy",snowy:"hass:weather-snowy","snowy-rainy":"hass:weather-snowy-rainy",sunny:"hass:weather-sunny",windy:"hass:weather-windy","windy-variant":"hass:weather-windy-variant"}}computeDateTime(data){const date=new Date(data),provider=this.stateObj.attributes.attribution;if("Powered by Dark Sky"===provider||"Data provided by OpenWeatherMap"===provider){if(new Date().getDay()===date.getDay()){return date.toLocaleTimeString(this.hass.selectedLanguage||this.hass.language,{hour:"numeric"})}return date.toLocaleDateString(this.hass.selectedLanguage||this.hass.language,{weekday:"long",hour:"numeric"})}return date.toLocaleDateString(this.hass.selectedLanguage||this.hass.language,{weekday:"long",month:"short",day:"numeric"})}getUnit(measure){const lengthUnit=this.hass.config.unit_system.length||"";switch(measure){case"air_pressure":return"km"===lengthUnit?"hPa":"inHg";case"length":return lengthUnit;case"precipitation":return"km"===lengthUnit?"mm":"in";default:return this.hass.config.unit_system[measure]||"";}}windBearingToText(degree){const degreenum=parseInt(degree);if(isFinite(degreenum)){return this.cardinalDirections[(0|(degreenum+11.25)/22.5)%16]}return degree}getWind(speed,bearing,localize){if(null!=bearing){const cardinalDirection=this.windBearingToText(bearing);return`${speed} ${this.getUnit("length")}/h (${localize(`ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`)||cardinalDirection})`}return`${speed} ${this.getUnit("length")}/h`}getWeatherIcon(condition){return this.weatherIcons[condition]}_showValue(item){return"undefined"!==typeof item&&null!==item}}customElements.define("more-info-weather",more_info_weather_MoreInfoWeather);var state_more_info_type=__webpack_require__(151);class more_info_content_MoreInfoContent extends polymer_element.a{static get properties(){return{hass:Object,stateObj:Object}}static get observers(){return["stateObjChanged(stateObj, hass)"]}constructor(){super();this.style.display="block"}stateObjChanged(stateObj,hass){let moreInfoType;if(!stateObj||!hass){if(this.lastChild){this._detachedChild=this.lastChild;this.removeChild(this.lastChild)}return}if(this._detachedChild){this.appendChild(this._detachedChild);this._detachedChild=null}if(stateObj.attributes&&"custom_ui_more_info"in stateObj.attributes){moreInfoType=stateObj.attributes.custom_ui_more_info}else{moreInfoType="more-info-"+Object(state_more_info_type.a)(stateObj)}Object(dynamic_content_updater.a)(this,moreInfoType.toUpperCase(),{hass:hass,stateObj:stateObj})}}customElements.define("more-info-content",more_info_content_MoreInfoContent);var common_const=__webpack_require__(39);const DOMAINS_NO_INFO=["camera","configurator","history_graph"];class more_info_controls_MoreInfoControls extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
  <style include="ha-style-dialog">
    app-toolbar {
      color: var(--more-info-header-color);
      background-color: var(--more-info-header-background);
    }

    app-toolbar [main-title] {
      @apply --ha-more-info-app-toolbar-title;
    }

    state-card-content {
      display: block;
      padding: 16px;
    }

    state-history-charts {
      max-width: 100%;
      margin-bottom: 16px;
    }

    @media all and (min-width: 451px) and (min-height: 501px) {
      .main-title {
        pointer-events: auto;
        cursor: default;
      }
    }

    paper-dialog-scrollable {
      padding-bottom: 16px;
    }

    :host([domain=camera]) paper-dialog-scrollable {
      margin: 0 -24px -21px;
    }
  </style>

  <app-toolbar>
    <paper-icon-button icon="hass:close" dialog-dismiss=""></paper-icon-button>
    <div class="main-title" main-title="" on-click="enlarge">[[_computeStateName(stateObj)]]</div>
    <template is="dom-if" if="[[canConfigure]]">
      <paper-icon-button icon="hass:settings" on-click="_gotoSettings"></paper-icon-button>
    </template>
  </app-toolbar>

  <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">
    <state-card-content state-obj="[[stateObj]]" hass="[[hass]]" in-dialog=""></state-card-content>
  </template>
  <paper-dialog-scrollable dialog-element="[[dialogElement]]">
    <template is="dom-if" if="[[_computeShowHistoryComponent(hass, stateObj)]]" restamp="">
      <ha-state-history-data hass="[[hass]]" filter-type="recent-entity" entity-id="[[stateObj.entity_id]]" data="{{_stateHistory}}" is-loading="{{_stateHistoryLoading}}" cache-config="[[_cacheConfig]]"></ha-state-history-data>
      <state-history-charts hass="[[hass]]" history-data="[[_stateHistory]]" is-loading-data="[[_stateHistoryLoading]]" up-to-now></state-history-charts>
    </template>
    <more-info-content state-obj="[[stateObj]]" hass="[[hass]]"></more-info-content>
  </paper-dialog-scrollable>
`}static get properties(){return{hass:Object,stateObj:{type:Object,observer:"_stateObjChanged"},dialogElement:Object,canConfigure:Boolean,domain:{type:String,reflectToAttribute:!0,computed:"_computeDomain(stateObj)"},_stateHistory:Object,_stateHistoryLoading:Boolean,large:{type:Boolean,value:!1,notify:!0},_cacheConfig:{type:Object,value:{refresh:60,cacheKey:null,hoursToShow:24}}}}enlarge(){this.large=!this.large}_computeShowStateInfo(stateObj){return!stateObj||!DOMAINS_NO_INFO.includes(Object(compute_state_domain.a)(stateObj))}_computeShowHistoryComponent(hass,stateObj){return hass&&stateObj&&Object(is_component_loaded.a)(hass,"history")&&!common_const.d.includes(Object(compute_state_domain.a)(stateObj))}_computeDomain(stateObj){return stateObj?Object(compute_state_domain.a)(stateObj):""}_computeStateName(stateObj){return stateObj?Object(compute_state_name.a)(stateObj):""}_stateObjChanged(newVal){if(!newVal){return}if(`more_info.${newVal.entity_id}`!==this._cacheConfig.cacheKey){this._cacheConfig=Object.assign({},this._cacheConfig,{cacheKey:`more_info.${newVal.entity_id}`})}}_gotoSettings(){this.fire("more-info-page",{page:"settings"})}}customElements.define("more-info-controls",more_info_controls_MoreInfoControls);var compute_domain=__webpack_require__(67);class more_info_settings_MoreInfoSettings extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style>
      app-toolbar {
        color: var(--more-info-header-color);
        background-color: var(--more-info-header-background);

        /* to fit save button */
        padding-right: 0;
      }

      app-toolbar [main-title] {
        @apply --ha-more-info-app-toolbar-title;
      }

      app-toolbar paper-button {
        font-size: .8em;
        margin: 0;
      }

      .form {
        padding: 0 24px 24px;
      }
    </style>

    <app-toolbar>
      <paper-icon-button icon="hass:arrow-left" on-click="_backTapped"></paper-icon-button>
      <div main-title="">[[_computeStateName(stateObj)]]</div>
      <paper-button
        on-click="_save"
        disabled='[[_computeInvalid(_entityId)]]'
      >[[localize('ui.dialogs.more_info_settings.save')]]</paper-button>
    </app-toolbar>

    <div class="form">
      <paper-input
        value="{{_name}}"
        label="[[localize('ui.dialogs.more_info_settings.name')]]"
      ></paper-input>
      <paper-input
        value="{{_entityId}}"
        label="[[localize('ui.dialogs.more_info_settings.entity_id')]]"
        error-message="Domain needs to stay the same"
        invalid='[[_computeInvalid(_entityId)]]'
      ></paper-input>
    </div>
`}static get properties(){return{hass:Object,stateObj:Object,_componentLoaded:{type:Boolean,computed:"_computeComponentLoaded(hass)"},registryInfo:{type:Object,observer:"_registryInfoChanged",notify:!0},_name:String,_entityId:String}}_computeStateName(stateObj){if(!stateObj)return"";return Object(compute_state_name.a)(stateObj)}_computeComponentLoaded(hass){return Object(is_component_loaded.a)(hass,"config.entity_registry")}_computeInvalid(entityId){return Object(compute_domain.a)(this.stateObj.entity_id)!==Object(compute_domain.a)(entityId)}_registryInfoChanged(newVal){if(newVal){this.setProperties({_name:newVal.name,_entityId:newVal.entity_id})}else{this.setProperties({_name:"",_entityId:""})}}_backTapped(){this.fire("more-info-page",{page:null})}async _save(){try{const info=await this.hass.callWS({type:"config/entity_registry/update",entity_id:this.stateObj.entity_id,name:this._name,new_entity_id:this._entityId});this.registryInfo=info;if(this.stateObj.entity_id!==this._entityId){this.fire("hass-more-info",{entityId:this._entityId})}}catch(err){alert(`save failed: ${err.message}`)}}}customElements.define("more-info-settings",more_info_settings_MoreInfoSettings);var dialog_mixin=__webpack_require__(296);class ha_more_info_dialog_HaMoreInfoDialog extends Object(dialog_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="ha-style-dialog paper-dialog-shared-styles">
      :host {
        font-size: 14px;
        width: 365px;
        border-radius: 2px;
      }

      more-info-controls, more-info-settings {
        --more-info-header-background: var(--secondary-background-color);
        --more-info-header-color: var(--primary-text-color);
        --ha-more-info-app-toolbar-title: {
          /* Design guideline states 24px, changed to 16 to align with state info */
          margin-left: 16px;
          line-height: 1.3em;
          max-height: 2.6em;
          overflow: hidden;
          /* webkit and blink still support simple multiline text-overflow */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
        }
      }

      /* overrule the ha-style-dialog max-height on small screens */
      @media all and (max-width: 450px), all and (max-height: 500px) {
        more-info-controls, more-info-settings {
          --more-info-header-background: var(--primary-color);
          --more-info-header-color: var(--text-primary-color);
        }
        :host {
          @apply --ha-dialog-fullscreen;
        }
        :host::before {
          content: "";
          position: fixed;
          z-index: -1;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background-color: inherit;
        }
      }

      :host([data-domain=camera]) {
        width: auto;
      }

      :host([data-domain=history_graph]), :host([large]) {
        width: 90%;
      }
    </style>

    <template is="dom-if" if="[[!_page]]">
      <more-info-controls class="no-padding" hass="[[hass]]" state-obj="[[stateObj]]" dialog-element="[[_dialogElement]]" can-configure="[[_registryInfo]]" large="{{large}}"></more-info-controls>
    </template>
    <template is="dom-if" if="[[_equals(_page, &quot;settings&quot;)]]">
      <more-info-settings class="no-padding" hass="[[hass]]" state-obj="[[stateObj]]" registry-info="{{_registryInfo}}"></more-info-settings>
    </template>
`}static get properties(){return{hass:Object,stateObj:{type:Object,computed:"_computeStateObj(hass)",observer:"_stateObjChanged"},large:{type:Boolean,reflectToAttribute:!0,observer:"_largeChanged"},_dialogElement:Object,_registryInfo:Object,_page:{type:String,value:null},dataDomain:{computed:"_computeDomain(stateObj)",reflectToAttribute:!0}}}static get observers(){return["_dialogOpenChanged(opened)"]}ready(){super.ready();this._dialogElement=this;this.addEventListener("more-info-page",ev=>{this._page=ev.detail.page})}_computeDomain(stateObj){return stateObj?Object(compute_state_domain.a)(stateObj):""}_computeStateObj(hass){return hass.states[hass.moreInfoEntityId]||null}async _stateObjChanged(newVal,oldVal){if(!newVal){this.setProperties({opened:!1,_page:null,_registryInfo:null,large:!1});return}requestAnimationFrame(()=>requestAnimationFrame(()=>{this.opened=!0}));if(!Object(is_component_loaded.a)(this.hass,"config.entity_registry")||oldVal&&oldVal.entity_id===newVal.entity_id){return}try{const info=await this.hass.callWS({type:"config/entity_registry/get",entity_id:newVal.entity_id});this._registryInfo=info}catch(err){this._registryInfo=null}}_dialogOpenChanged(newVal){if(!newVal&&this.stateObj){this.fire("hass-more-info",{entityId:null})}}_equals(a,b){return a===b}_largeChanged(){this.notifyResize()}}customElements.define("ha-more-info-dialog",ha_more_info_dialog_HaMoreInfoDialog)}}]);
//# sourceMappingURL=fc5bceb20d4440d5146d.chunk.js.map