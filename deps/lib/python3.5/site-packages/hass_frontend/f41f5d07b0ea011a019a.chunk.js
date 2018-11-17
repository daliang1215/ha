(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{156:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(29),_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(94),_polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(38),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(36);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const template=_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;template.setAttribute("strip-whitespace","");Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:template,is:"paper-checkbox",behaviors:[_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__.a)(this,function(){var inkSize=this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim();if("-1px"===inkSize){var checkboxSizeText=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),units="px",unitsMatches=checkboxSizeText.match(/[A-Za-z]+$/);if(null!==unitsMatches){units=unitsMatches[0]}var checkboxSize=parseFloat(checkboxSizeText),defaultInkSize=8/3*checkboxSize;if("px"===units){defaultInkSize=Math.floor(defaultInkSize);if(defaultInkSize%2!==checkboxSize%2){defaultInkSize++}}this.updateStyles({"--paper-checkbox-ink-size":defaultInkSize+units})}})},_computeCheckboxClass:function(checked,invalid){var className="";if(checked){className+="checked "}if(invalid){className+="invalid"}return className},_computeCheckmarkClass:function(checked){return checked?"":"hidden"},_createRipple:function(){this._rippleContainer=this.$.checkboxContainer;return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__.b._createRipple.call(this)}})},202:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_resources_ha_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(120);class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
    <style include="iron-flex ha-style">
      .content {
        padding: 28px 20px 0;
        max-width: 1040px;
        margin: 0 auto;
      }

      .header {
        @apply --paper-font-display1;
        opacity: var(--dark-primary-opacity);
      }

      .together {
        margin-top: 32px;
      }

      .intro {
        @apply --paper-font-subhead;
        width: 100%;
        max-width: 400px;
        margin-right: 40px;
        opacity: var(--dark-primary-opacity);
      }

      .panel {
        margin-top: -24px;
      }

      .panel ::slotted(*) {
        margin-top: 24px;
        display: block;
      }

      .narrow.content {
        max-width: 640px;
      }
      .narrow .together {
        margin-top: 20px;
      }
      .narrow .header {
        @apply --paper-font-headline;
      }
      .narrow .intro {
        font-size: 14px;
        padding-bottom: 20px;
        margin-right: 0;
        max-width: 500px;
      }
    </style>
    <div class$="[[computeContentClasses(isWide)]]">
      <div class="header"><slot name="header"></slot></div>
      <div class$="[[computeClasses(isWide)]]">
        <div class="intro">
          <slot name="introduction"></slot>
        </div>
        <div class="panel flex-auto">
          <slot></slot>
        </div>
      </div>
    </div>
`}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},isWide:{type:Boolean,value:!1}}}computeContentClasses(isWide){var classes="content ";return isWide?classes:classes+"narrow"}computeClasses(isWide){return"together layout "+(isWide?"horizontal":"vertical narrow")}}customElements.define("ha-config-section",HaConfigSection)},291:function(module,__webpack_exports__){"use strict";const hassAttributeUtil={DOMAIN_DEVICE_CLASS:{binary_sensor:["battery","cold","connectivity","door","garage_door","gas","heat","light","lock","moisture","motion","moving","occupancy","opening","plug","power","presence","problem","safety","smoke","sound","vibration","window"],cover:["garage"],sensor:["battery","humidity","illuminance","temperature","pressure"]},UNKNOWN_TYPE:"json",ADD_TYPE:"key-value",TYPE_TO_TAG:{string:"ha-customize-string",json:"ha-customize-string",icon:"ha-customize-icon",boolean:"ha-customize-boolean",array:"ha-customize-array","key-value":"ha-customize-key-value"}};hassAttributeUtil.LOGIC_STATE_ATTRIBUTES=hassAttributeUtil.LOGIC_STATE_ATTRIBUTES||{entity_picture:void 0,friendly_name:{type:"string",description:"Name"},icon:{type:"icon"},emulated_hue:{type:"boolean",domains:["emulated_hue"]},emulated_hue_name:{type:"string",domains:["emulated_hue"]},haaska_hidden:void 0,haaska_name:void 0,homebridge_hidden:{type:"boolean"},homebridge_name:{type:"string"},supported_features:void 0,attribution:void 0,custom_ui_more_info:{type:"string"},custom_ui_state_card:{type:"string"},device_class:{type:"array",options:hassAttributeUtil.DOMAIN_DEVICE_CLASS,description:"Device class",domains:["binary_sensor","cover","sensor"]},hidden:{type:"boolean",description:"Hide from UI"},assumed_state:{type:"boolean",domains:["switch","light","cover","climate","fan","group","water_heater"]},initial_state:{type:"string",domains:["automation"]},unit_of_measurement:{type:"string"}};__webpack_exports__.a=hassAttributeUtil},344:function(){const documentContainer=document.createElement("template");documentContainer.setAttribute("style","display: none;");documentContainer.innerHTML=`<dom-module id="ha-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(documentContainer.content)},345:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return sortStatesByName});var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(27);function sortStatesByName(entityA,entityB){const nameA=Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__.a)(entityA),nameB=Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__.a)(entityB);if(nameA<nameB){return-1}if(nameA>nameB){return 1}return 0}},681:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_header_layout=__webpack_require__(155),app_header=__webpack_require__(154),app_toolbar=__webpack_require__(121),paper_icon_button=__webpack_require__(62),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),ha_style=__webpack_require__(120),ha_config_section=__webpack_require__(202),paper_button=__webpack_require__(54),paper_card=__webpack_require__(153),paper_dropdown_menu=__webpack_require__(123),paper_item=__webpack_require__(119),paper_listbox=__webpack_require__(122),paper_spinner=__webpack_require__(124),compute_state_name=__webpack_require__(27);class ha_entity_config_HaEntityConfig extends polymer_element.a{static get template(){return html_tag.a`
    <style include="iron-flex ha-style">
      paper-card {
        display: block;
      }

      .device-picker {
        @apply --layout-horizontal;
        padding-bottom: 24px;
      }

      .form-placeholder {
        @apply --layout-vertical;
        @apply --layout-center-center;
        height: 96px;
      }

      [hidden]: {
        display: none;
      }

      .card-actions {
        @apply --layout-horizontal;
        @apply --layout-justified;
      }
    </style>
    <paper-card>
      <div class="card-content">
        <div class="device-picker">
          <paper-dropdown-menu label="[[label]]" class="flex" disabled="[[!entities.length]]">
            <paper-listbox slot="dropdown-content" selected="{{selectedEntity}}">
              <template is="dom-repeat" items="[[entities]]" as="state">
                <paper-item>[[computeSelectCaption(state)]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>

        <div class="form-container">
          <template is="dom-if" if="[[computeShowPlaceholder(formState)]]">
            <div class="form-placeholder">
              <template is="dom-if" if="[[computeShowNoDevices(formState)]]">
                No entities found! :-(
              </template>

              <template is="dom-if" if="[[computeShowSpinner(formState)]]">
                <paper-spinner active="" alt="[[formState]]"></paper-spinner>
                [[formState]]
              </template>
            </div>
          </template>

          <div hidden$="[[!computeShowForm(formState)]]" id="form"></div>
        </div>
      </div>
      <div class="card-actions">
        <paper-button on-click="saveEntity" disabled="[[computeShowPlaceholder(formState)]]">SAVE</paper-button>
        <template is="dom-if" if="[[allowDelete]]">
          <paper-button class="warning" on-click="deleteEntity" disabled="[[computeShowPlaceholder(formState)]]">DELETE</paper-button>
        </template>
      </div>
    </paper-card>
`}static get properties(){return{hass:{type:Object,observer:"hassChanged"},label:{type:String,value:"Device"},entities:{type:Array,observer:"entitiesChanged"},allowDelete:{type:Boolean,value:!1},selectedEntity:{type:Number,value:-1,observer:"entityChanged"},formState:{type:String,value:"no-devices"},config:{type:Object}}}connectedCallback(){super.connectedCallback();this.formEl=document.createElement(this.config.component);this.formEl.hass=this.hass;this.$.form.appendChild(this.formEl);this.entityChanged(this.selectedEntity)}computeSelectCaption(stateObj){return this.config.computeSelectCaption?this.config.computeSelectCaption(stateObj):Object(compute_state_name.a)(stateObj)}computeShowNoDevices(formState){return"no-devices"===formState}computeShowSpinner(formState){return"loading"===formState||"saving"===formState}computeShowPlaceholder(formState){return"editing"!==formState}computeShowForm(formState){return"editing"===formState}hassChanged(hass){if(this.formEl){this.formEl.hass=hass}}entitiesChanged(entities,oldEntities){if(0===entities.length){this.formState="no-devices";return}if(!oldEntities){this.selectedEntity=0;return}var oldEntityId=oldEntities[this.selectedEntity].entity_id,newIndex=entities.findIndex(function(ent){return ent.entity_id===oldEntityId});if(-1===newIndex){this.selectedEntity=0}else if(newIndex!==this.selectedEntity){this.selectedEntity=newIndex}}entityChanged(index){if(!this.entities||!this.formEl)return;var entity=this.entities[index];if(!entity)return;this.formState="loading";var el=this;this.formEl.loadEntity(entity).then(function(){el.formState="editing"})}saveEntity(){this.formState="saving";var el=this;this.formEl.saveEntity().then(function(){el.formState="editing"})}}customElements.define("ha-entity-config",ha_entity_config_HaEntityConfig);var hass_attributes_util=__webpack_require__(291),mutable_data=__webpack_require__(24),ha_form_style=__webpack_require__(344),events_mixin=__webpack_require__(16);class ha_customize_array_HaCustomizeArray extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      paper-dropdown-menu {
        margin: -9px 0;
      }
    </style>
    <paper-dropdown-menu label="[[item.description]]" disabled="[[item.secondary]]" selected-item-label="{{item.value}}" dynamic-align="">
      <paper-listbox slot="dropdown-content" selected="[[computeSelected(item)]]">
        <template is="dom-repeat" items="[[getOptions(item)]]" as="option">
          <paper-item>[[option]]</paper-item>
        </template>
      </paper-listbox>
    </paper-dropdown-menu>
`}static get properties(){return{item:{type:Object,notifies:!0}}}getOptions(item){const domain=item.domain||"*",options=item.options[domain]||item.options["*"];if(!options){this.item.type="string";this.fire("item-changed");return[]}return options.sort()}computeSelected(item){const options=this.getOptions(item);return options.indexOf(item.value)}}customElements.define("ha-customize-array",ha_customize_array_HaCustomizeArray);__webpack_require__(156);class ha_customize_boolean_HaCustomizeBoolean extends polymer_element.a{static get template(){return html_tag.a`
    <paper-checkbox disabled="[[item.secondary]]" checked="{{item.value}}">
      [[item.description]]
    </paper-checkbox>
`}static get properties(){return{item:{type:Object,notifies:!0}}}}customElements.define("ha-customize-boolean",ha_customize_boolean_HaCustomizeBoolean);var iron_icon=__webpack_require__(76),paper_input=__webpack_require__(61);class ha_customize_icon_HaCustomizeIcon extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      :host {
        @apply --layout-horizontal;
      }
      .icon-image {
        border: 1px solid grey;
        padding: 8px;
        margin-right: 20px;
        margin-top: 10px;
      }
    </style>
    <iron-icon class="icon-image" icon="[[item.value]]"></iron-icon>
    <paper-input disabled="[[item.secondary]]" label="icon" value="{{item.value}}">
    </paper-input>
`}static get properties(){return{item:{type:Object,notifies:!0}}}}customElements.define("ha-customize-icon",ha_customize_icon_HaCustomizeIcon);class ha_customize_key_value_HaCustomizeKeyValue extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      :host {
        @apply --layout-horizontal;
      }
      paper-input {
        @apply --layout-flex;
      }
      .key {
        padding-right: 20px;
      }
    </style>
    <paper-input disabled="[[item.secondary]]" class="key" label="Attribute name" value="{{item.attribute}}">
    </paper-input>
    <paper-input disabled="[[item.secondary]]" label="Attribute value" value="{{item.value}}">
    </paper-input>
`}static get properties(){return{item:{type:Object,notifies:!0}}}}customElements.define("ha-customize-key-value",ha_customize_key_value_HaCustomizeKeyValue);class ha_customize_string_HaCustomizeString extends polymer_element.a{static get template(){return html_tag.a`
    <paper-input disabled="[[item.secondary]]" label="[[getLabel(item)]]" value="{{item.value}}">
    </paper-input>
`}static get properties(){return{item:{type:Object,notifies:!0}}}getLabel(item){return item.description+("json"===item.type?" (JSON formatted)":"")}}customElements.define("ha-customize-string",ha_customize_string_HaCustomizeString);class ha_customize_attribute_HaCustomizeAttribute extends polymer_element.a{static get template(){return html_tag.a`
    <style include="ha-form-style">
      :host {
        display: block;
        position: relative;
        padding-right: 40px;
      }

      .button {
        position: absolute;
        margin-top: -20px;
        top: 50%;
        right: 0;
      }
    </style>
    <div id="wrapper" class="form-group"></div>
    <paper-icon-button class="button" icon="[[getIcon(item.secondary)]]" on-click="tapButton"></paper-icon-button>
`}static get properties(){return{item:{type:Object,notify:!0,observer:"itemObserver"}}}tapButton(){if(this.item.secondary){this.item=Object.assign({},this.item,{secondary:!1})}else{this.item=Object.assign({},this.item,{closed:!0})}}getIcon(secondary){return secondary?"hass:pencil":"hass:close"}itemObserver(item){const wrapper=this.$.wrapper,tag=hass_attributes_util.a.TYPE_TO_TAG[item.type].toUpperCase();let child;if(wrapper.lastChild&&wrapper.lastChild.tagName===tag){child=wrapper.lastChild}else{if(wrapper.lastChild){wrapper.removeChild(wrapper.lastChild)}this.$.child=child=document.createElement(tag.toLowerCase());child.className="form-control";child.addEventListener("item-changed",()=>{this.item=Object.assign({},child.item)})}child.setProperties({item:this.item});if(null===child.parentNode){wrapper.appendChild(child)}}}customElements.define("ha-customize-attribute",ha_customize_attribute_HaCustomizeAttribute);class ha_form_customize_attributes_HaFormCustomizeAttributes extends Object(mutable_data.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      [hidden] {
        display: none;
      }
    </style>
    <template is="dom-repeat" items="{{attributes}}" mutable-data="">
      <ha-customize-attribute item="{{item}}" hidden$="[[item.closed]]">
      </ha-customize-attribute>
    </template>
`}static get properties(){return{attributes:{type:Array,notify:!0}}}}customElements.define("ha-form-customize-attributes",ha_form_customize_attributes_HaFormCustomizeAttributes);var compute_state_domain=__webpack_require__(23);class ha_form_customize_HaFormCustomize extends polymer_element.a{static get template(){return html_tag.a`
    <style include="iron-flex ha-style ha-form-style">
      .warning {
        color: red;
      }

      .attributes-text {
        padding-left: 20px;
      }
    </style>
    <template is="dom-if" if="[[computeShowWarning(localConfig, globalConfig)]]">
      <div class="warning">
        It seems that your configuration.yaml doesn't properly include customize.yaml<br>
        Changes made here won't affect your configuration.
      </div>
    </template>
    <template is="dom-if" if="[[hasLocalAttributes]]">
      <h4 class="attributes-text">
        The following attributes are already set in customize.yaml<br>
      </h4>
      <ha-form-customize-attributes attributes="{{localAttributes}}"></ha-form-customize-attributes>
    </template>
    <template is="dom-if" if="[[hasGlobalAttributes]]">
      <h4 class="attributes-text">
        The following attributes are customized from outside of customize.yaml<br>
        Possibly via a domain, a glob or a different include.
      </h4>
      <ha-form-customize-attributes attributes="{{globalAttributes}}"></ha-form-customize-attributes>
    </template>
    <template is="dom-if" if="[[hasExistingAttributes]]">
      <h4 class="attributes-text">
        The following attributes of the entity are set programatically.<br>
        You can override them if you like.
      </h4>
      <ha-form-customize-attributes attributes="{{existingAttributes}}"></ha-form-customize-attributes>
    </template>
    <template is="dom-if" if="[[hasNewAttributes]]">
      <h4 class="attributes-text">
        The following attributes weren't set. Set them if you like.
      </h4>
      <ha-form-customize-attributes attributes="{{newAttributes}}"></ha-form-customize-attributes>
    </template>
    <div class="form-group">
      <paper-dropdown-menu label="Pick an attribute to override" class="flex" dynamic-align="">
        <paper-listbox slot="dropdown-content" selected="{{selectedNewAttribute}}">
          <template is="dom-repeat" items="[[newAttributesOptions]]" as="option">
            <paper-item>[[option]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    </div>
`}static get properties(){return{hass:{type:Object},entity:Object,localAttributes:{type:Array,computed:"computeLocalAttributes(localConfig)"},hasLocalAttributes:Boolean,globalAttributes:{type:Array,computed:"computeGlobalAttributes(localConfig, globalConfig)"},hasGlobalAttributes:Boolean,existingAttributes:{type:Array,computed:"computeExistingAttributes(localConfig, globalConfig, entity)"},hasExistingAttributes:Boolean,newAttributes:{type:Array,value:[]},hasNewAttributes:Boolean,newAttributesOptions:Array,selectedNewAttribute:{type:Number,value:-1,observer:"selectedNewAttributeObserver"},localConfig:Object,globalConfig:Object}}static get observers(){return["attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)"]}_initOpenObject(key,value,secondary,config){return Object.assign({attribute:key,value:value,closed:!1,domain:Object(compute_state_domain.a)(this.entity),secondary:secondary,description:key},config)}loadEntity(entity){this.entity=entity;return this.hass.callApi("GET","config/customize/config/"+entity.entity_id).then(data=>{this.localConfig=data.local;this.globalConfig=data.global;this.newAttributes=[]})}saveEntity(){const data={},attrs=this.localAttributes.concat(this.globalAttributes,this.existingAttributes,this.newAttributes);attrs.forEach(attr=>{if(attr.closed||attr.secondary||!attr.attribute||!attr.value)return;const value="json"===attr.type?JSON.parse(attr.value):attr.value;if(!value)return;data[attr.attribute]=value});const objectId=this.entity.entity_id;return this.hass.callApi("POST","config/customize/config/"+objectId,data)}_computeSingleAttribute(key,value,secondary){const config=hass_attributes_util.a.LOGIC_STATE_ATTRIBUTES[key]||{type:hass_attributes_util.a.UNKNOWN_TYPE};return this._initOpenObject(key,"json"===config.type?JSON.stringify(value):value,secondary,config)}_computeAttributes(config,keys,secondary){return keys.map(key=>this._computeSingleAttribute(key,config[key],secondary))}computeLocalAttributes(localConfig){if(!localConfig)return[];const localKeys=Object.keys(localConfig),result=this._computeAttributes(localConfig,localKeys,!1);return result}computeGlobalAttributes(localConfig,globalConfig){if(!localConfig||!globalConfig)return[];const localKeys=Object.keys(localConfig),globalKeys=Object.keys(globalConfig).filter(key=>!localKeys.includes(key));return this._computeAttributes(globalConfig,globalKeys,!0)}computeExistingAttributes(localConfig,globalConfig,entity){if(!localConfig||!globalConfig||!entity)return[];const localKeys=Object.keys(localConfig),globalKeys=Object.keys(globalConfig),entityKeys=Object.keys(entity.attributes).filter(key=>!localKeys.includes(key)&&!globalKeys.includes(key));return this._computeAttributes(entity.attributes,entityKeys,!0)}computeShowWarning(localConfig,globalConfig){if(!localConfig||!globalConfig)return!1;return Object.keys(localConfig).some(key=>JSON.stringify(globalConfig[key])!==JSON.stringify(localConfig[key]))}filterFromAttributes(attributes){return key=>!attributes||attributes.every(attr=>attr.attribute!==key||attr.closed)}getNewAttributesOptions(localAttributes,globalAttributes,existingAttributes,newAttributes){const knownKeys=Object.keys(hass_attributes_util.a.LOGIC_STATE_ATTRIBUTES).filter(key=>{const conf=hass_attributes_util.a.LOGIC_STATE_ATTRIBUTES[key];return conf&&(!conf.domains||!this.entity||conf.domains.includes(Object(compute_state_domain.a)(this.entity)))}).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));return knownKeys.sort().concat("Other")}selectedNewAttributeObserver(selected){if(0>selected)return;const option=this.newAttributesOptions[selected];if(selected===this.newAttributesOptions.length-1){const attr=this._initOpenObject("","",!1,{type:hass_attributes_util.a.ADD_TYPE});this.push("newAttributes",attr);this.selectedNewAttribute=-1;return}let result=this.localAttributes.findIndex(attr=>attr.attribute===option);if(0<=result){this.set("localAttributes."+result+".closed",!1);this.selectedNewAttribute=-1;return}result=this.globalAttributes.findIndex(attr=>attr.attribute===option);if(0<=result){this.set("globalAttributes."+result+".closed",!1);this.selectedNewAttribute=-1;return}result=this.existingAttributes.findIndex(attr=>attr.attribute===option);if(0<=result){this.set("existingAttributes."+result+".closed",!1);this.selectedNewAttribute=-1;return}result=this.newAttributes.findIndex(attr=>attr.attribute===option);if(0<=result){this.set("newAttributes."+result+".closed",!1);this.selectedNewAttribute=-1;return}const attr=this._computeSingleAttribute(option,"",!1);this.push("newAttributes",attr);this.selectedNewAttribute=-1}attributesObserver(){this.hasLocalAttributes=this.localAttributes&&this.localAttributes.some(attr=>!attr.closed);this.hasGlobalAttributes=this.globalAttributes&&this.globalAttributes.some(attr=>!attr.closed);this.hasExistingAttributes=this.existingAttributes&&this.existingAttributes.some(attr=>!attr.closed);this.hasNewAttributes=this.newAttributes&&this.newAttributes.some(attr=>!attr.closed);this.newAttributesOptions=this.getNewAttributesOptions(this.localAttributes,this.globalAttributes,this.existingAttributes,this.newAttributes)}}customElements.define("ha-form-customize",ha_form_customize_HaFormCustomize);var states_sort_by_name=__webpack_require__(345),localize_mixin=__webpack_require__(10);class ha_config_customize_HaConfigCustomize extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="ha-style">
    </style>

    <app-header-layout has-scrolling-region="">
      <app-header slot="header" fixed="">
        <app-toolbar>
          <paper-icon-button icon="hass:arrow-left" on-click="_backTapped"></paper-icon-button>
          <div main-title="">[[localize('ui.panel.config.customize.caption')]]</div>
        </app-toolbar>
      </app-header>

      <div class$="[[computeClasses(isWide)]]">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">Customization</span>
          <span slot="introduction">
            Tweak per-entity attributes.<br>
            Added/edited customizations will take effect immediately. Removed customizations will take effect when the entity is updated.
          </span>
          <ha-entity-config hass="[[hass]]" label="Entity" entities="[[entities]]" config="[[entityConfig]]">
          </ha-entity-config>
        </ha-config-section>
      </div>
    </app-header-layout>
`}static get properties(){return{hass:Object,isWide:Boolean,entities:{type:Array,computed:"computeEntities(hass)"},entityConfig:{type:Object,value:{component:"ha-form-customize",computeSelectCaption:stateObj=>Object(compute_state_name.a)(stateObj)+" ("+Object(compute_state_domain.a)(stateObj)+")"}}}}computeClasses(isWide){return isWide?"content":"content narrow"}_backTapped(){history.back()}computeEntities(hass){return Object.keys(hass.states).map(key=>hass.states[key]).sort(states_sort_by_name.a)}}customElements.define("ha-config-customize",ha_config_customize_HaConfigCustomize)}}]);
//# sourceMappingURL=f41f5d07b0ea011a019a.chunk.js.map