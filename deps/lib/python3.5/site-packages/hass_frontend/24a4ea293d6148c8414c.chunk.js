(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{215:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(61),_polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(218),_polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(198),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),_vaadin_vaadin_combo_box_vaadin_combo_box_light__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(249),_state_badge__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(125),_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(27),_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(10),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(16);class HaEntityPicker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__.a)(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__.a)){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__.a`
    <style>
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    </style>
    <vaadin-combo-box-light
      items="[[_states]]"
      item-value-path="entity_id"
      item-label-path="entity_id"
      value="{{value}}"
      opened="{{opened}}"
      allow-custom-value="[[allowCustomEntity]]"
      on-change='_fireChanged'
    >
      <paper-input
        autofocus="[[autofocus]]"
        label="[[_computeLabel(label, localize)]]"
        class="input"
        autocapitalize='none'
        autocomplete='off'
        autocorrect='off'
        spellcheck='false'
        value="[[value]]"
        disabled="[[disabled]]">
        <paper-icon-button slot="suffix" class="clear-button" icon="hass:close" no-ripple="" hidden$="[[!value]]">Clear</paper-icon-button>
        <paper-icon-button slot="suffix" class="toggle-button" icon="[[_computeToggleIcon(opened)]]" hidden="[[!_states.length]]">Toggle</paper-icon-button>
      </paper-input>
      <template>
        <style>
          paper-icon-item {
            margin: -10px;
            padding: 0;
          }
        </style>
        <paper-icon-item>
          <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>
          <paper-item-body two-line="">
            <div>[[_computeStateName(item)]]</div>
            <div secondary="">[[item.entity_id]]</div>
          </paper-item-body>
        </paper-icon-item>
      </template>
    </vaadin-combo-box-light>
`}static get properties(){return{allowCustomEntity:{type:Boolean,value:!1},hass:{type:Object,observer:"_hassChanged"},_hass:Object,_states:{type:Array,computed:"_computeStates(_hass, domainFilter, entityFilter)"},autofocus:Boolean,label:{type:String},value:{type:String,notify:!0},opened:{type:Boolean,value:!1,observer:"_openedChanged"},domainFilter:{type:String,value:null},entityFilter:{type:Function,value:null},disabled:Boolean}}_computeLabel(label,localize){return label===void 0?localize("ui.components.entity.entity-picker.entity"):label}_computeStates(hass,domainFilter,entityFilter){if(!hass)return[];let entityIds=Object.keys(hass.states);if(domainFilter){entityIds=entityIds.filter(eid=>eid.substr(0,eid.indexOf("."))===domainFilter)}let entities=entityIds.sort().map(key=>hass.states[key]);if(entityFilter){entities=entities.filter(entityFilter)}return entities}_computeStateName(state){return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__.a)(state)}_openedChanged(newVal){if(!newVal){this._hass=this.hass}}_hassChanged(newVal){if(!this.opened){this._hass=newVal}}_computeToggleIcon(opened){return opened?"hass:menu-up":"hass:menu-down"}_fireChanged(ev){ev.stopPropagation();this.fire("change")}}customElements.define("ha-entity-picker",HaEntityPicker)},348:function(module,__webpack_exports__,__webpack_require__){"use strict";var html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),paper_icon_button=__webpack_require__(62),paper_input=__webpack_require__(61),paper_item=__webpack_require__(119),vaadin_combo_box_light=__webpack_require__(249),events_mixin=__webpack_require__(16);class ha_combo_box_HaComboBox extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    </style>
    <vaadin-combo-box-light
      items="[[_items]]"
      item-value-path="[[itemValuePath]]"
      item-label-path="[[itemLabelPath]]"
      value="{{value}}"
      opened="{{opened}}"
      allow-custom-value="[[allowCustomValue]]"
      on-change='_fireChanged'
    >
      <paper-input autofocus="[[autofocus]]" label="[[label]]" class="input" value="[[value]]">
        <paper-icon-button slot="suffix" class="clear-button" icon="hass:close" hidden$="[[!value]]">Clear</paper-icon-button>
        <paper-icon-button slot="suffix" class="toggle-button" icon="[[_computeToggleIcon(opened)]]" hidden$="[[!items.length]]">Toggle</paper-icon-button>
      </paper-input>
      <template>
        <style>
            paper-item {
              margin: -5px -10px;
              padding: 0;
            }
        </style>
        <paper-item>[[_computeItemLabel(item, itemLabelPath)]]</paper-item>
      </template>
    </vaadin-combo-box-light>
`}static get properties(){return{allowCustomValue:Boolean,items:{type:Object,observer:"_itemsChanged"},_items:Object,itemLabelPath:String,itemValuePath:String,autofocus:Boolean,label:String,opened:{type:Boolean,value:!1,observer:"_openedChanged"},value:{type:String,notify:!0}}}_openedChanged(newVal){if(!newVal){this._items=this.items}}_itemsChanged(newVal){if(!this.opened){this._items=newVal}}_computeToggleIcon(opened){return opened?"hass:menu-up":"hass:menu-down"}_computeItemLabel(item,itemLabelPath){return itemLabelPath?item[itemLabelPath]:item}_fireChanged(ev){ev.stopPropagation();this.fire("change")}}customElements.define("ha-combo-box",ha_combo_box_HaComboBox);var localize_mixin=__webpack_require__(10);class ha_service_picker_HaServicePicker extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <ha-combo-box label="[[localize('ui.components.service-picker.service')]]" items="[[_services]]" value="{{value}}" allow-custom-value=""></ha-combo-box>
`}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},_services:Array,value:{type:String,notify:!0}}}_hassChanged(hass,oldHass){if(!hass){this._services=[];return}if(oldHass&&hass.services===oldHass.services){return}const result=[];Object.keys(hass.services).sort().forEach(domain=>{const services=Object.keys(hass.services[domain]).sort();for(let i=0;i<services.length;i++){result.push(`${domain}.${services[i]}`)}});this._services=result}}customElements.define("ha-service-picker",ha_service_picker_HaServicePicker)},697:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(155),_polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(154),_polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(121),_polymer_paper_button_paper_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(54),_polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(208),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(4),_components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(215),_components_ha_menu_button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(134),_components_ha_service_picker__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(348),_resources_ha_style__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(120),_util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(418);const ERROR_SENTINEL={};class HaPanelDevService extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__.a`
  <style include='ha-style'>
    :host {
      -ms-user-select: initial;
      -webkit-user-select: initial;
      -moz-user-select: initial;
    }

    .content {
      padding: 16px;
    }

    .ha-form {
      margin-right: 16px;
      max-width: 400px;
    }

    .description {
      margin-top: 24px;
      white-space: pre-wrap;
    }

    .header {
      @apply --paper-font-title;
    }

    .attributes th {
      text-align: left;
    }

    .attributes tr {
      vertical-align: top;
    }

    .attributes tr:nth-child(odd) {
      background-color: var(--table-row-background-color,#eee)
    }

    .attributes tr:nth-child(even) {
      background-color: var(--table-row-alternative-background-color,#eee)
    }

    .attributes td:nth-child(3) {
      white-space: pre-wrap;
      word-break: break-word;
    }

    pre {
      margin: 0;
    }

    h1 {
      white-space: normal;
    }

    td {
      padding: 4px;
    }

    .error {
      color: var(--google-red-500);
    }
  </style>

  <app-header-layout has-scrolling-region>
    <app-header slot="header" fixed>
      <app-toolbar>
        <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
        <div main-title>Services</div>
      </app-toolbar>
    </app-header>

    <app-localstorage-document
      key='panel-dev-service-state-domain-service'
      data='{{domainService}}'>
    </app-localstorage-document>
    <app-localstorage-document
      key='[[_computeServicedataKey(domainService)]]'
      data='{{serviceData}}'>
    </app-localstorage-document>

    <div class='content'>
      <p>
        The service dev tool allows you to call any available service in Home Assistant.
      </p>

      <div class='ha-form'>
        <ha-service-picker
          hass='[[hass]]'
          value='{{domainService}}'
        ></ha-service-picker>
        <template is='dom-if' if='[[_computeHasEntity(_attributes)]]'>
          <ha-entity-picker
            hass='[[hass]]'
            value='[[_computeEntityValue(parsedJSON)]]'
            on-change='_entityPicked'
            disabled='[[!validJSON]]'
            domain-filter='[[_computeEntityDomainFilter(_domain)]]'
            allow-custom-entity
          ></ha-entity-picker>
        </template>
        <paper-textarea
          always-float-label
          label='Service Data (JSON, optional)'
          value='{{serviceData}}'
          autocapitalize='none'
          autocomplete='off'
          spellcheck='false'
        ></paper-textarea>
        <paper-button
          on-click='_callService'
          raised
          disabled='[[!validJSON]]'
        >Call Service</paper-button>
        <template is='dom-if' if='[[!validJSON]]'>
            <span class='error'>Invalid JSON</span>
        </template>
      </div>

      <template is='dom-if' if='[[!domainService]]'>
        <h1>Select a service to see the description</h1>
      </template>

      <template is='dom-if' if='[[domainService]]'>
        <template is='dom-if' if='[[!_description]]'>
          <h1>No description is available</h1>
        </template>
        <template is='dom-if' if='[[_description]]'>
          <h3>[[_description]]</h3>

          <table class='attributes'>
            <tr>
              <th>Parameter</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
            <template is='dom-if' if='[[!_attributes.length]]'>
              <tr><td colspan='3'>This service takes no parameters.</td></tr>
            </template>
            <template is='dom-repeat' items='[[_attributes]]' as='attribute'>
              <tr>
                <td><pre>[[attribute.key]]</pre></td>
                <td>[[attribute.description]]</td>
                <td>[[attribute.example]]</td>
              </tr>
            </template>
          </table>
        </template>
      </template>
    </div>

  </app-header-layout>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean,value:!1},showMenu:{type:Boolean,value:!1},domainService:{type:String,observer:"_domainServiceChanged"},_domain:{type:String,computed:"_computeDomain(domainService)"},_service:{type:String,computed:"_computeService(domainService)"},serviceData:{type:String,value:""},parsedJSON:{type:Object,computed:"_computeParsedServiceData(serviceData)"},validJSON:{type:Boolean,computed:"_computeValidJSON(parsedJSON)"},_attributes:{type:Array,computed:"_computeAttributesArray(hass, _domain, _service)"},_description:{type:String,computed:"_computeDescription(hass, _domain, _service)"}}}_domainServiceChanged(){this.serviceData=""}_computeAttributesArray(hass,domain,service){const serviceDomains=hass.services;if(!(domain in serviceDomains))return[];if(!(service in serviceDomains[domain]))return[];const fields=serviceDomains[domain][service].fields;return Object.keys(fields).map(function(field){return Object.assign({key:field},fields[field])})}_computeDescription(hass,domain,service){const serviceDomains=hass.services;if(!(domain in serviceDomains))return;if(!(service in serviceDomains[domain]))return;return serviceDomains[domain][service].description}_computeServicedataKey(domainService){return`panel-dev-service-state-servicedata.${domainService}`}_computeDomain(domainService){return domainService.split(".",1)[0]}_computeService(domainService){return domainService.split(".",2)[1]||null}_computeParsedServiceData(serviceData){try{return serviceData?JSON.parse(serviceData):{}}catch(err){return ERROR_SENTINEL}}_computeValidJSON(parsedJSON){return parsedJSON!==ERROR_SENTINEL}_computeHasEntity(attributes){return attributes.some(attr=>"entity_id"===attr.key)}_computeEntityValue(parsedJSON){return parsedJSON===ERROR_SENTINEL?"":parsedJSON.entity_id}_computeEntityDomainFilter(domain){return"homeassistant"===domain?null:domain}_callService(){if(this.parsedJSON===ERROR_SENTINEL){alert(`Error parsing JSON: ${this.serviceData}`)}this.hass.callService(this._domain,this._service,this.parsedJSON)}_entityPicked(ev){this.serviceData=JSON.stringify(Object.assign({},this.parsedJSON,{entity_id:ev.target.value}),null,2)}}customElements.define("ha-panel-dev-service",HaPanelDevService)}}]);
//# sourceMappingURL=24a4ea293d6148c8414c.chunk.js.map