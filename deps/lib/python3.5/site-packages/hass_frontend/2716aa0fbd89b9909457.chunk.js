(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{212:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_button_paper_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54),_polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(124),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4);class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__.a`
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
`}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},domain:{type:String},service:{type:String},serviceData:{type:Object,value:{}}}}buttonTapped(){this.progress=!0;var el=this,eventData={domain:this.domain,service:this.service,serviceData:this.serviceData};this.hass.callService(this.domain,this.service,this.serviceData).then(function(){el.progress=!1;el.$.progress.actionSuccess();eventData.success=!0},function(){el.progress=!1;el.$.progress.actionError();eventData.success=!1}).then(function(){el.fire("hass-service-called",eventData)})}}customElements.define("ha-call-service-button",HaCallServiceButton)},226:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return hassLocalizeLitMixin});var _localize_base_mixin__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(73);const empty=()=>"",hassLocalizeLitMixin=(superClass)=>class extends Object(_localize_base_mixin__WEBPACK_IMPORTED_MODULE_0__.a)(superClass){static get properties(){return{hass:{},localize:{}}}constructor(){super();this.localize=empty}connectedCallback(){super.connectedCallback();let language,resources;if(this.hass){language=this.hass.language;resources=this.hass.resources}this.localize=this.__computeLocalize(language,resources)}updated(changedProperties){super.updated(changedProperties);if(!changedProperties.has("hass")){return}let oldLanguage,oldResources;const hass=changedProperties.get("hass");if(hass){oldLanguage=hass.language;oldResources=hass.resources}let language,resources;if(this.hass){language=this.hass.language;resources=this.hass.resources}if(oldLanguage!==language||oldResources!==resources){this.localize=this.__computeLocalize(language,resources)}}}},241:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return processConfigEntities});var _common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(306);function processConfigEntities(entities){if(!entities||!Array.isArray(entities)){throw new Error("Entities need to be an array")}return entities.map((entityConf,index)=>{if("object"===typeof entityConf&&!Array.isArray(entityConf)&&entityConf.type){return entityConf}if("string"===typeof entityConf){entityConf={entity:entityConf}}else if("object"===typeof entityConf&&!Array.isArray(entityConf)){if(!entityConf.entity){throw new Error(`Entity object at position ${index} is missing entity field.`)}}else{throw new Error(`Invalid entity specified at position ${index}.`)}if(!Object(_common_entity_valid_entity_id__WEBPACK_IMPORTED_MODULE_0__.a)(entityConf.entity)){throw new Error(`Invalid entity ID at position ${index}: ${entityConf.entity}`)}return entityConf})}},254:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createErrorConfig});function createErrorConfig(error,origConfig){return{type:"error",error,origConfig}}},272:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return computeCardSize});function computeCardSize(element){return"function"===typeof element.getCardSize?element.getCardSize():1}},295:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Mathmax=Math.max,_Mathfloor=Math.floor,_Mathround=Math.round,_Mathmin=Math.min,_Mathceil=Math.ceil,fire_event=__webpack_require__(75),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),ha_card=__webpack_require__(108),events_mixin=__webpack_require__(16),localize_mixin=__webpack_require__(10),ha_label_badge=__webpack_require__(142);const Icons={armed_away:"hass:security-lock",armed_custom_bypass:"hass:security",armed_home:"hass:security-home",armed_night:"hass:security-home",disarmed:"hass:verified",pending:"hass:shield-outline",triggered:"hass:bell-ring"};class hui_alarm_panel_card_HuiAlarmPanelCard extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style>
      ha-card {
        padding-bottom: 16px;
        position: relative;
        --alarm-color-disarmed: var(--label-badge-green);
        --alarm-color-pending: var(--label-badge-yellow);
        --alarm-color-triggered: var(--label-badge-red);
        --alarm-color-armed: var(--label-badge-red);
        --alarm-color-autoarm: rgba(0, 153, 255, .1);
        --alarm-state-color: var(--alarm-color-armed);
        --base-unit: 15px;
        font-size: calc(var(--base-unit));
      }
      ha-label-badge {
        --ha-label-badge-color:  var(--alarm-state-color);
        --label-badge-text-color: var(--alarm-state-color);
        color: var(--alarm-state-color);
        position: absolute;
        right: 12px;
        top: 12px;
      }
      .disarmed {
        --alarm-state-color: var(--alarm-color-disarmed);
      }
      .triggered {
        --alarm-state-color: var(--alarm-color-triggered);
        animation: pulse 1s infinite;
      }
      .arming {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }
      .pending {
        --alarm-state-color: var(--alarm-color-pending);
        animation: pulse 1s infinite;
      }
      @keyframes pulse {
        0% {
          --ha-label-badge-color: var(--alarm-state-color);
        }
        100% {
          --ha-label-badge-color: rgba(255, 153, 0, 0.3);
        }
      }
      paper-input {
        margin: auto;
        max-width: 200px;
        font-size: calc(var(--base-unit));
      }
      .state {
        margin-left: 16px;
        font-size: calc(var(--base-unit) * 0.9);
        position: relative;
        bottom: 16px;
        color: var(--alarm-state-color);
        animation: none;
      }
      #keypad {
        display: flex;
        justify-content: center;
      }
      #keypad div {
        display: flex;
        flex-direction: column;
      }
      #keypad paper-button {
        margin-bottom: 10%;
        position: relative;
        padding: calc(var(--base-unit));
        font-size: calc(var(--base-unit) * 1.1);
      }
      .actions {
        margin: 0 8px;
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        font-size: calc(var(--base-unit) * 1);
      }
      .actions paper-button {
        min-width: calc(var(--base-unit) * 9);
        color: var(--primary-color);
      }
      paper-button#disarm {
        color: var(--google-red-500);
      }
      .not-found {
        flex: 1;
        background-color: yellow;
        padding: 8px;
      }
    </style>
    <ha-card
      header$="[[_computeHeader(localize, _stateObj)]]"
      class$="[[_computeClassName(_stateObj)]]"
    >
      <template is="dom-if" if="[[_stateObj]]">
        <ha-label-badge
          class$="[[_stateObj.state]]"
          icon="[[_computeIcon(_stateObj)]]"
          label="[[_stateIconLabel(_stateObj.state)]]"
        ></ha-label-badge>
        <template is="dom-if" if="[[_showActionToggle(_stateObj.state)]]">
          <div id="armActions" class="actions">
            <template is="dom-repeat" items="[[_config.states]]">
              <paper-button noink raised id="[[item]]" on-click="_handleActionClick">[[_label(localize, item)]]</paper-button>
            </template>
          </div>
        </template>
        <template is="dom-if" if="[[!_showActionToggle(_stateObj.state)]]">
          <div id="disarmActions" class="actions">
            <paper-button noink raised id="disarm" on-click="_handleActionClick">[[_label(localize, "disarm")]]</paper-button>
          </div>
        </template>
        <paper-input label="Alarm Code" type="password" value="[[_value]]"></paper-input>
        <div id="keypad">
          <div>
            <paper-button noink raised value="1" on-click="_handlePadClick">1</paper-button>
            <paper-button noink raised value="4" on-click="_handlePadClick">4</paper-button>
            <paper-button noink raised value="7" on-click="_handlePadClick">7</paper-button>
          </div>
          <div>
            <paper-button noink raised value="2" on-click="_handlePadClick">2</paper-button>
            <paper-button noink raised value="5" on-click="_handlePadClick">5</paper-button>
            <paper-button noink raised value="8" on-click="_handlePadClick">8</paper-button>
            <paper-button noink raised value="0" on-click="_handlePadClick">0</paper-button>
          </div>
          <div>
            <paper-button noink raised value="3" on-click="_handlePadClick">3</paper-button>
            <paper-button noink raised value="6" on-click="_handlePadClick">6</paper-button>
            <paper-button noink raised value="9" on-click="_handlePadClick">9</paper-button>
            <paper-button noink raised value="clear" on-click="_handlePadClick">[[_label(localize, "clear_code")]]</paper-button>
          </div>
      </template>
      <template is="dom-if" if="[[!_stateObj]]">
        <div>Entity not available: [[_config.entity]]</div>
      </template>
    </ha-card>
    `}static get properties(){return{hass:{type:Object},_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"},_value:{type:String,value:""}}}getCardSize(){return 4}setConfig(config){if(!config||!config.entity||"alarm_control_panel"!==config.entity.split(".")[0]){throw new Error("Invalid card configuration")}this._config=Object.assign({},{states:["arm_away","arm_home"]},config);this._icons=Icons}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}_computeHeader(localize,stateObj){if(!stateObj)return"";return this._config.title?this._config.title:this._label(localize,stateObj.state)}_computeIcon(stateObj){return this._icons[stateObj.state]||"hass:shield-outline"}_label(localize,state){return localize(`state.alarm_control_panel.${state}`)||localize(`ui.card.alarm_control_panel.${state}`)}_stateIconLabel(state){const stateLabel=state.split("_").pop();return"disarmed"===stateLabel||"triggered"===stateLabel?"":stateLabel}_showActionToggle(state){return"disarmed"===state}_computeClassName(stateObj){if(!stateObj)return"not-found";return""}_handlePadClick(e){const val=e.target.getAttribute("value");this._value="clear"===val?"":this._value+val}_handleActionClick(e){this.hass.callService("alarm_control_panel","alarm_"+e.target.id,{entity_id:this._stateObj.entity_id,code:this._value});this._value=""}}customElements.define("hui-alarm-panel-card",hui_alarm_panel_card_HuiAlarmPanelCard);var compute_card_size=__webpack_require__(272);class hui_conditional_card_HuiConditionalCard extends HTMLElement{setConfig(config){if(!config.card||!config.conditions||!Array.isArray(config.conditions)||!config.conditions.every(c=>c.entity&&(c.state||c.state_not))){throw new Error("Error in card configuration.")}if(this._card&&this._card.parentElement){this.removeChild(this._card)}this._config=config;this._card=createCardElement(config.card);if(this._hass){this.hass=this._hass}}set hass(hass){this._hass=hass;if(!this._card){return}const visible=this._config&&this._config.conditions.every(c=>{if(!(c.entity in hass.states)){return!1}if(c.state){return hass.states[c.entity].state===c.state}return hass.states[c.entity].state!==c.state_not});if(visible){this._card.hass=hass;if(!this._card.parentElement){this.appendChild(this._card)}}else if(this._card.parentElement){this.removeChild(this._card)}this.style.setProperty("display",visible?"":"none")}getCardSize(){return Object(compute_card_size.a)(this._card)}}customElements.define("hui-conditional-card",hui_conditional_card_HuiConditionalCard);var hui_entities_card=__webpack_require__(415),lit_element=__webpack_require__(196),styleMap=__webpack_require__(307),common_const=__webpack_require__(39),compute_domain=__webpack_require__(67);function turnOnOffEntity(hass,entityId,turnOn=!0){const stateDomain=Object(compute_domain.a)(entityId),serviceDomain="group"===stateDomain?"homeassistant":stateDomain;let service;switch(stateDomain){case"lock":service=turnOn?"unlock":"lock";break;case"cover":service=turnOn?"open_cover":"close_cover";break;default:service=turnOn?"turn_on":"turn_off";}hass.callService(serviceDomain,service,{entity_id:entityId})}function toggleEntity(hass,entityId){const turnOn=common_const.h.includes(hass.states[entityId].state);turnOnOffEntity(hass,entityId,turnOn)}var valid_entity_id=__webpack_require__(306),state_icon=__webpack_require__(111),compute_state_domain=__webpack_require__(23),compute_state_name=__webpack_require__(27),apply_themes_on_element=__webpack_require__(136),lit_localize_mixin=__webpack_require__(226),lit_html=__webpack_require__(217),mwc_ripple=__webpack_require__(682);const isTouch="ontouchstart"in window||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints;class LongPress extends HTMLElement{constructor(){super();this.holdTime=500;this.ripple=document.createElement("mwc-ripple");this.timer=void 0;this.held=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:isTouch?"100px":"50px",height:isTouch?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"});this.appendChild(this.ripple);this.ripple.primary=!0;[isTouch?"touchcancel":"mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(ev=>{document.addEventListener(ev,()=>{clearTimeout(this.timer);this.stopAnimation()},{passive:!0})})}bind(element){if(element.longPress){return}element.longPress=!0;element.addEventListener(isTouch?"touchstart":"mousedown",ev=>{this.held=!1;let x,y;if(ev.touches){x=ev.touches[0].pageX;y=ev.touches[0].pageY}else{x=ev.pageX;y=ev.pageY}this.timer=window.setTimeout(()=>{this.startAnimation(x,y);this.held=!0},this.holdTime)},{passive:!0});element.addEventListener("click",()=>{this.stopAnimation();if(this.held){element.dispatchEvent(new Event("ha-hold"))}else{element.dispatchEvent(new Event("ha-click"))}})}startAnimation(x,y){Object.assign(this.style,{left:`${x}px`,top:`${y}px`,display:null});this.ripple.disabled=!1;this.ripple.active=!0;this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1;this.ripple.disabled=!0;this.style.display="none"}}customElements.define("long-press",LongPress);const getLongPress=()=>{const body=document.body;if(body.querySelector("long-press")){return body.querySelector("long-press")}const longpress=document.createElement("long-press");body.appendChild(longpress);return longpress},longPressBind=element=>{const longpress=getLongPress();if(!longpress){return}longpress.bind(element)},longPress=()=>Object(lit_html.e)(part=>{longPressBind(part.committer.element)});class hui_entity_button_card_HuiEntityButtonCard extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}getCardSize(){return 2}setConfig(config){if(!Object(valid_entity_id.a)(config.entity)){throw new Error("Invalid Entity")}this._config=Object.assign({theme:"default"},config)}shouldUpdate(changedProps){if(changedProps.has("_config")){return!0}const oldHass=changedProps.get("hass");if(oldHass){return oldHass.states[this._config.entity]!==this.hass.states[this._config.entity]}return!0}render(){if(!this._config||!this.hass){return lit_element.c``}const stateObj=this.hass.states[this._config.entity];return lit_element.c`
      ${this.renderStyle()}
      <ha-card
        @ha-click="${()=>this.handleClick(!1)}"
        @ha-hold="${()=>this.handleClick(!0)}"
        .longPress="${longPress()}"
      >
        ${!stateObj?lit_element.c`<div class="not-found">Entity not available: ${this._config.entity}</div>`:lit_element.c`
              <paper-button>
                <div>
                  <ha-icon
                    data-domain="${Object(compute_state_domain.a)(stateObj)}"
                    data-state="${stateObj.state}"
                    .icon="${this._config.icon||Object(state_icon.a)(stateObj)}"
                    style="${Object(styleMap.a)({filter:this._computeBrightness(stateObj),color:this._computeColor(stateObj)})}"
                  ></ha-icon>
                  <span>
                    ${this._config.name||Object(compute_state_name.a)(stateObj)}
                  </span>
                </div>
              </paper-button>
            `}
      </ha-card>
    `}updated(changedProps){if(!this._config||!this.hass){return}const oldHass=changedProps.get("hass");if(!oldHass||oldHass.themes!==this.hass.themes){Object(apply_themes_on_element.a)(this,this.hass.themes,this._config.theme)}}renderStyle(){return lit_element.c`
    <style>
      ha-icon {
        display: flex;
        margin: auto;
        width: 40%;
        height: 40%;
        color: var(--paper-item-icon-color, #44739e);
      }
      ha-icon[data-domain=light][data-state=on],
      ha-icon[data-domain=switch][data-state=on],
      ha-icon[data-domain=binary_sensor][data-state=on],
      ha-icon[data-domain=fan][data-state=on],
      ha-icon[data-domain=sun][data-state=above_horizon] {
        color: var(--paper-item-icon-active-color, #FDD835);
      }
      ha-icon[data-state=unavailable] {
        color: var(--state-icon-unavailable-color);
      }
      state-badge {
        display: flex;
        margin: auto;
        width:40%;
        height:40%;
      }
      paper-button {
        display: flex;
        margin: auto;
        text-align: center;
      }
      .not-found {
        flex: 1;
        background-color: yellow;
        padding: 8px;
      }
    </style>
    `}_computeBrightness(stateObj){if(!stateObj.attributes.brightness){return""}const brightness=stateObj.attributes.brightness;return`brightness(${(brightness+245)/5}%)`}_computeColor(stateObj){if(!stateObj.attributes.hs_color){return""}const{hue,sat}=stateObj.attributes.hs_color;if(10>=sat){return""}return`hsl(${hue}, 100%, ${100-sat/2}%)`}handleClick(hold){const config=this._config;if(!config){return}const stateObj=this.hass.states[config.entity];if(!stateObj){return}const entityId=stateObj.entity_id,action=hold?config.hold_action:config.tap_action||"more-info";switch(action){case"toggle":toggleEntity(this.hass,entityId);break;case"call-service":if(!config.service){return}const[domain,service]=config.service.split(".",2),serviceData=Object.assign({entity_id:entityId},config.service_data);this.hass.callService(domain,service,serviceData);break;case"more-info":Object(fire_event.a)(this,"hass-more-info",{entityId});break;default:}}}customElements.define("hui-entity-button-card",hui_entity_button_card_HuiEntityButtonCard);var process_config_entities=__webpack_require__(241);function getEntities(hass,filterState,entities){return entities.filter(entityConf=>{const stateObj=hass.states[entityConf.entity];return stateObj&&filterState.includes(stateObj.state)})}class hui_entity_filter_card_HuiEntitiesCard extends polymer_element.a{static get properties(){return{hass:{type:Object,observer:"_hassChanged"}}}getCardSize(){return this.lastChild?this.lastChild.getCardSize():1}setConfig(config){if(!config.state_filter||!Array.isArray(config.state_filter)){throw new Error("Incorrect filter config.")}this._config=config;this._configEntities=Object(process_config_entities.a)(config.entities);if(this.lastChild){this.removeChild(this.lastChild);this._element=null}const card="card"in config?Object.assign({},config.card):{};if(!card.type)card.type="entities";card.entities=[];const element=createCardElement(card);element._filterRawConfig=card;this._updateCardConfig(element);this._element=element}_hassChanged(){this._updateCardConfig(this._element)}_updateCardConfig(element){if(!element||"HUI-ERROR-CARD"===element.tagName||!this.hass)return;const entitiesList=getEntities(this.hass,this._config.state_filter,this._configEntities);if(0===entitiesList.length&&!1===this._config.show_empty){this.style.display="none";return}this.style.display="block";element.setConfig(Object.assign({},element._filterRawConfig,{entities:entitiesList}));element.isPanel=this.isPanel;element.hass=this.hass;if(!this.lastChild)this.appendChild(element)}}customElements.define("hui-entity-filter-card",hui_entity_filter_card_HuiEntitiesCard);class hui_error_card_HuiErrorCard extends lit_element.a{static get properties(){return{_config:{}}}getCardSize(){return 4}setConfig(config){this._config=config}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      ${this._config.error}
      <pre>${this._toStr(this._config.origConfig)}</pre>
    `}renderStyle(){return lit_element.c`
      <style>
        :host {
          display: block;
          background-color: #ef5350;
          color: white;
          padding: 8px;
          font-weight: 500;
        }
      </style>
    `}_toStr(config){return JSON.stringify(config,null,2)}}customElements.define("hui-error-card",hui_error_card_HuiErrorCard);var classMap=__webpack_require__(275),compute_state_display=__webpack_require__(109),state_badge=__webpack_require__(125),ha_icon=__webpack_require__(88);class hui_glance_card_HuiGlanceCard extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}getCardSize(){return(this._config.title?1:0)+_Mathceil(this._configEntities.length/5)}setConfig(config){this._config=Object.assign({theme:"default"},config);const entities=Object(process_config_entities.a)(config.entities);for(const entity of entities){if(("call-service"===entity.tap_action||"call-service"===entity.hold_action)&&!entity.service){throw new Error("Missing required property \"service\" when tap_action or hold_action is call-service")}}const columns=config.columns||_Mathmin(config.entities.length,5);this.style.setProperty("--glance-column-width",`${100/columns}%`);this._configEntities=entities;if(this.hass){this.requestUpdate()}}shouldUpdate(changedProps){if(changedProps.has("_config")){return!0}const oldHass=changedProps.get("hass");if(oldHass&&this._configEntities){for(const entity of this._configEntities){if(oldHass.states[entity.entity]!==this.hass.states[entity.entity]){return!0}}return!1}return!0}render(){if(!this._config||!this.hass){return lit_element.c``}const{title}=this._config;return lit_element.c`
      ${this.renderStyle()}
      <ha-card .header="${title}">
        <div class="entities ${Object(classMap.a)({"no-header":!title})}">
          ${this._configEntities.map(entityConf=>this.renderEntity(entityConf))}
        </div>
      </ha-card>
    `}updated(changedProperties){if(!this._config||!this.hass){return}const oldHass=changedProperties.get("hass");if(!oldHass||oldHass.themes!==this.hass.themes){Object(apply_themes_on_element.a)(this,this.hass.themes,this._config.theme)}}renderStyle(){return lit_element.c`
      <style>
        .entities {
          display: flex;
          padding: 0 16px 4px;
          flex-wrap: wrap;
        }
        .entities.no-header {
          padding-top: 16px;
        }
        .entity {
          box-sizing: border-box;
          padding: 0 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          margin-bottom: 12px;
          width: var(--glance-column-width, 20%);
        }
        .entity div {
          width: 100%;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .name {
          min-height: var(--paper-font-body1_-_line-height, 20px);
        }
        state-badge {
          margin: 8px 0;
        }
        .not-found {
          background-color: yellow;
          text-align: center;
        }
      </style>
    `}renderEntity(entityConf){const stateObj=this.hass.states[entityConf.entity];if(!stateObj){return lit_element.c`<div class="entity not-found"><div class="name">${entityConf.entity}</div>Entity Not Available</div>`}return lit_element.c`
      <div
        class="entity"
        .entityConf="${entityConf}"
        @ha-click="${ev=>this.handleClick(ev,!1)}"
        @ha-hold="${ev=>this.handleClick(ev,!0)}"
        .longPress="${longPress()}"
      >
        ${!1!==this._config.show_name?lit_element.c`<div class="name">${"name"in entityConf?entityConf.name:Object(compute_state_name.a)(stateObj)}</div>`:""}
        <state-badge
          .stateObj="${stateObj}"
          .overrideIcon="${entityConf.icon}"
        ></state-badge>
        ${!1!==this._config.show_state?lit_element.c`<div>${Object(compute_state_display.a)(this.localize,stateObj)}</div>`:""}
      </div>
    `}handleClick(ev,hold){const config=ev.currentTarget.entityConf,entityId=config.entity,action=hold?config.hold_action:config.tap_action||"more-info";switch(action){case"toggle":toggleEntity(this.hass,entityId);break;case"call-service":const[domain,service]=config.service.split(".",2),serviceData=Object.assign({entity_id:entityId},config.service_data);this.hass.callService(domain,service,serviceData);break;case"more-info":Object(fire_event.a)(this,"hass-more-info",{entityId});break;default:}}}customElements.define("hui-glance-card",hui_glance_card_HuiGlanceCard);var state_history_charts=__webpack_require__(163),ha_state_history_data=__webpack_require__(164);class hui_history_graph_card_HuiHistoryGraphCard extends polymer_element.a{static get template(){return html_tag.a`
      <style>
        ha-card {
          padding: 16px;
        }
        ha-card[header] {
          padding-top: 0;
        }
      </style>

      <ha-card header$='[[_config.title]]'>
        <ha-state-history-data
          hass="[[hass]]"
          filter-type="recent-entity"
          entity-id="[[_entities]]"
          data="{{_stateHistory}}"
          is-loading="{{_stateHistoryLoading}}"
          cache-config="[[_cacheConfig]]"
        ></ha-state-history-data>
        <state-history-charts
          hass="[[hass]]"
          history-data="[[_stateHistory]]"
          is-loading-data="[[_stateHistoryLoading]]"
          names="[[_names]]"
          up-to-now
          no-single
        ></state-history-charts>
      </ha-card>
    `}static get properties(){return{hass:Object,_config:Object,_names:Object,_entities:Array,_stateHistory:Object,_stateHistoryLoading:Boolean,_cacheConfig:Object}}getCardSize(){return 4}setConfig(config){const entities=Object(process_config_entities.a)(config.entities);this._config=config;const _entities=[],_names={};for(const entity of entities){_entities.push(entity.entity);if(entity.name){_names[entity.entity]=entity.name}}this.setProperties({_cacheConfig:{cacheKey:_entities.sort().join(),hoursToShow:config.hours_to_show||24,refresh:config.refresh_interval||0},_entities,_names})}}customElements.define("hui-history-graph-card",hui_history_graph_card_HuiHistoryGraphCard);class hui_stack_card_HuiStackCard extends lit_element.a{static get properties(){return{_config:{}}}set hass(hass){this._hass=hass;if(!this._cards){return}for(const element of this._cards){element.hass=this._hass}}setConfig(config){if(!config||!config.cards||!Array.isArray(config.cards)){throw new Error("Card config incorrect")}this._config=config;this._cards=config.cards.map(card=>{const element=createCardElement(card);if(this._hass){element.hass=this._hass}return element})}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <div id="root">
        ${this._cards}
      </div>
    `}}customElements.define("hui-horizontal-stack-card",class extends hui_stack_card_HuiStackCard{getCardSize(){let totalSize=0;if(this._cards){for(const element of this._cards){const elementSize=Object(compute_card_size.a)(element);totalSize=elementSize>totalSize?elementSize:totalSize}}return totalSize}renderStyle(){return lit_element.c`
      <style>
        #root {
          display: flex;
        }
        #root > * {
          flex: 1 1 0;
          margin: 0 4px;
          min-width: 0;
        }
        #root > *:first-child {
          margin-left: 0;
        }
        #root > *:last-child {
          margin-right: 0;
        }
      </style>
    `}});class hui_iframe_card_HuiIframeCard extends lit_element.a{static get properties(){return{_config:{}}}getCardSize(){return 1+this.offsetHeight/50}setConfig(config){if(!config.url){throw new Error("URL required")}this._config=config}render(){if(!this._config){return lit_element.c``}const aspectRatio=this._config.aspect_ratio||"50%";return lit_element.c`
      ${this.renderStyle()}
      <ha-card .header="${this._config.title}">
        <div id="root"
          style="${Object(styleMap.a)({"padding-top":aspectRatio})}"
        >
          <iframe src="${this._config.url}"></iframe>
        </div>
      </ha-card>
    `}renderStyle(){return lit_element.c`
      <style>
        ha-card {
          overflow: hidden;
        }
        #root {
          width: 100%;
          position: relative;
          padding-top: ${this._config.aspect_ratio||"50%"};
        }
        iframe {
          position: absolute;
          border: none;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      </style>
    `}}customElements.define("hui-iframe-card",hui_iframe_card_HuiIframeCard);var jquery=__webpack_require__(472),jquery_default=__webpack_require__.n(jquery);window.jQuery=jquery_default.a;const jQuery=jquery_default.a;var roundslider_min=__webpack_require__(473),dist_roundslider_min=__webpack_require__(474),dist_roundslider_min_default=__webpack_require__.n(dist_roundslider_min);const roundSliderStyle=lit_element.c`<style>${dist_roundslider_min_default.a}</style>`;function hasConfigOrEntityChanged(element,changedProps){if(changedProps.has("_config")){return!0}const oldHass=changedProps.get("hass");if(oldHass){return oldHass.states[element._config.entity]!==element.hass.states[element._config.entity]}return!0}const lightConfig={radius:80,step:1,circleShape:"pie",startAngle:315,width:5,min:1,max:100,sliderType:"min-range",lineCap:"round",handleSize:"+12",showTooltip:!1};class hui_light_card_HuiLightCard extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}getCardSize(){return 2}setConfig(config){if(!config.entity||"light"!==config.entity.split(".")[0]){throw new Error("Specify an entity from within the light domain.")}this._config=Object.assign({theme:"default"},config)}render(){if(!this.hass||!this._config){return lit_element.c``}const stateObj=this.hass.states[this._config.entity];return lit_element.c`
      ${this.renderStyle()}
      <ha-card>
        ${!stateObj?lit_element.c`
              <div class="not-found">Entity not available: ${this._config.entity}</div>`:lit_element.c`
              <div id="light"></div>
              <div id="tooltip">
                <div class="icon-state">
                  <ha-icon
                    data-state="${stateObj.state}"
                    .icon="${Object(state_icon.a)(stateObj)}"
                    style="${Object(styleMap.a)({filter:this._computeBrightness(stateObj),color:this._computeColor(stateObj)})}"
                    @ha-click="${()=>this._handleClick(!1)}"
                    @ha-hold="${()=>this._handleClick(!0)}"
                    .longPress="${longPress()}"
                  ></ha-icon>
                  <div
                    class="brightness"
                    @ha-click="${()=>this._handleClick(!1)}"
                    @ha-hold="${()=>this._handleClick(!0)}"
                    .longPress="${longPress()}"
                  ></div>
                  <div class="name">${this._config.name||Object(compute_state_name.a)(stateObj)}</div>
                </div>
              </div>
            `}

      </ha-card>
    `}shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps)}firstUpdated(){const brightness=this.hass.states[this._config.entity].attributes.brightness;jQuery("#light",this.shadowRoot).roundSlider(Object.assign({},lightConfig,{change:value=>this._setBrightness(value),drag:value=>this._dragEvent(value),start:()=>this._showBrightness(),stop:()=>this._hideBrightness()}));this.shadowRoot.querySelector(".brightness").innerHTML=(_Mathround(100*(brightness/254))||0)+"%"}updated(changedProps){if(!this._config||!this.hass){return}const attrs=this.hass.states[this._config.entity].attributes;jQuery("#light",this.shadowRoot).roundSlider({value:_Mathround(100*(attrs.brightness/254))||0});const oldHass=changedProps.get("hass");if(!oldHass||oldHass.themes!==this.hass.themes){Object(apply_themes_on_element.a)(this,this.hass.themes,this._config.theme)}}renderStyle(){return lit_element.c`
    ${roundSliderStyle}
      <style>
        :host {
          display: block;
        }
        ha-card {
          position: relative;
          overflow: hidden;
          --brightness-font-color: white;
          --brightness-font-text-shadow:
            -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
          --name-font-size: 1.2rem;
          --brightness-font-size: 1.2rem;
          --rail-border-color: transparent;
        }
        #tooltip {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          text-align: center;
          z-index: 15;
        }
        .icon-state {
          display: block;
          margin: auto;
          width: 100%;
          height: 100%;
          transform: translate(0,25%);
        }
        #light {
          margin: 0 auto;
          padding-top: 16px;
          padding-bottom: 16px;
        }
        #light .rs-bar.rs-transition.rs-first, .rs-bar.rs-transition.rs-second{
          z-index: 20 !important;
        }
        #light .rs-range-color  {
          background-color: var(--primary-color);
        }
        #light .rs-path-color  {
            background-color: var(--disabled-text-color);
        }
        #light .rs-handle  {
            background-color: var(--paper-card-background-color, white);
            padding: 7px;
            border: 2px solid var(--disabled-text-color);
        }
        #light .rs-handle.rs-focus  {
            border-color:var(--primary-color);
        }
        #light .rs-handle:after  {
            border-color: var(--primary-color);
            background-color: var(--primary-color);
        }
        #light .rs-border  {
          border-color: var(--rail-border-color);
        }
        #light .rs-inner.rs-bg-color.rs-border,
        #light .rs-overlay.rs-transition.rs-bg-color {
          background-color: var(--paper-card-background-color, white);
        }
        ha-icon {
          margin: auto;
          width: 76px;
          height: 76px;
          color: var(--paper-item-icon-color, #44739e);
          cursor: pointer;
        }
        ha-icon[data-state=on] {
          color: var(--paper-item-icon-active-color, #FDD835);
        }
        ha-icon[data-state=unavailable] {
          color: var(--state-icon-unavailable-color);
        }
        .name {
          padding-top: 40px;
          font-size: var(--name-font-size);
        }
        .brightness {
          font-size: var(--brightness-font-size);
          position: absolute;
          margin: 0 auto;
          left: 50%;
          top: 10%;
          transform: translate(-50%);
          opacity: 0;
          transition: opacity .5s ease-in-out;
          -moz-transition: opacity .5s ease-in-out;
          -webkit-transition: opacity .5s ease-in-out;
          cursor: pointer;
          color: var(--brightness-font-color);
          text-shadow: var(--brightness-font-text-shadow)
        }
        .show_brightness {
          opacity: 1;
        }
        .not-found {
          flex: 1;
          background-color: yellow;
          padding: 8px;
        }
      </style>
    `}_dragEvent(e){this.shadowRoot.querySelector(".brightness").innerHTML=e.value+"%"}_showBrightness(){clearTimeout(this._brightnessTimout);this.shadowRoot.querySelector(".brightness").classList.add("show_brightness")}_hideBrightness(){this._brightnessTimout=window.setTimeout(()=>{this.shadowRoot.querySelector(".brightness").classList.remove("show_brightness")},500)}_setBrightness(e){this.hass.callService("light","turn_on",{entity_id:this._config.entity,brightness_pct:e.value})}_computeBrightness(stateObj){if(!stateObj.attributes.brightness){return""}const brightness=stateObj.attributes.brightness;return`brightness(${(brightness+245)/5}%)`}_computeColor(stateObj){if(!stateObj.attributes.hs_color){return""}const[hue,sat]=stateObj.attributes.hs_color;if(10>=sat){return""}return`hsl(${hue}, 100%, ${100-sat/2}%)`}_handleClick(hold){const entityId=this._config.entity;if(hold){Object(fire_event.a)(this,"hass-more-info",{entityId});return}this.hass.callService("light","toggle",{entity_id:entityId})}}customElements.define("hui-light-card",hui_light_card_HuiLightCard);var paper_icon_button=__webpack_require__(62),leaflet_src=__webpack_require__(276),leaflet_src_default=__webpack_require__.n(leaflet_src),ha_entity_marker=__webpack_require__(308),setup_leaflet_map=__webpack_require__(309),debounce=__webpack_require__(361);leaflet_src_default.a.Icon.Default.imagePath="/static/images/leaflet";class hui_map_card_HuiMapCard extends polymer_element.a{static get template(){return html_tag.a`
      <style>
        :host([is-panel]) ha-card {
          left: 0;
          top: 0;
          width: 100%;
          /**
           * In panel mode we want a full height map. Since parent #view
           * only sets min-height, we need absolute positioning here
           */
          height: 100%;
          position: absolute;
        }

        ha-card {
          overflow: hidden;
        }

        #map {
          z-index: 0;
          border: none;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        paper-icon-button {
          position: absolute;
          top: 75px;
          left: 7px;
        }

        #root {
          position: relative;
        }

        :host([is-panel]) #root {
          height: 100%;
        }
      </style>

      <ha-card id="card" header="[[_config.title]]">
        <div id="root">
          <div id="map"></div>
          <paper-icon-button
            on-click="_fitMap"
            icon="hass:image-filter-center-focus"
            title="Reset focus"
          ></paper-icon-button>
        </div>
      </ha-card>

    `}static get properties(){return{hass:{type:Object,observer:"_drawEntities"},_config:Object,isPanel:{type:Boolean,reflectToAttribute:!0}}}constructor(){super();this._debouncedResizeListener=Object(debounce.a)(this._resetMap.bind(this),100)}ready(){super.ready();if(!this._config||this.isPanel){return}this.$.root.style.paddingTop=this._config.aspect_ratio||"100%"}setConfig(config){if(!config){throw new Error("Error in card configuration.")}this._configEntities=Object(process_config_entities.a)(config.entities);this._config=config}getCardSize(){let ar=this._config.aspect_ratio||"100%";ar=ar.substr(0,ar.length-1);return 1+_Mathfloor(ar/25)||3}connectedCallback(){super.connectedCallback();if("function"===typeof ResizeObserver){this._resizeObserver=new ResizeObserver(()=>this._debouncedResizeListener());this._resizeObserver.observe(this.$.map)}else{window.addEventListener("resize",this._debouncedResizeListener)}this._map=Object(setup_leaflet_map.a)(this.$.map);this._drawEntities(this.hass);setTimeout(()=>{this._resetMap();this._fitMap()},1)}disconnectedCallback(){super.disconnectedCallback();if(this._map){this._map.remove()}if(this._resizeObserver){this._resizeObserver.unobserve(this.$.map)}else{window.removeEventListener("resize",this._debouncedResizeListener)}}_resetMap(){if(!this._map){return}this._map.invalidateSize()}_fitMap(){const zoom=this._config.default_zoom;if(0===this._mapItems.length){this._map.setView(new leaflet_src_default.a.LatLng(this.hass.config.latitude,this.hass.config.longitude),zoom||14);return}const bounds=new leaflet_src_default.a.latLngBounds(this._mapItems.map(item=>item.getLatLng()));this._map.fitBounds(bounds.pad(.5));if(zoom&&this._map.getZoom()>zoom){this._map.setZoom(zoom)}}_drawEntities(hass){const map=this._map;if(!map){return}if(this._mapItems){this._mapItems.forEach(marker=>marker.remove())}const mapItems=this._mapItems=[];this._configEntities.forEach(entity=>{const entityId=entity.entity;if(!(entityId in hass.states)){return}const stateObj=hass.states[entityId],title=Object(compute_state_name.a)(stateObj),{latitude,longitude,passive,icon,radius,entity_picture:entityPicture,gps_accuracy:gpsAccuracy}=stateObj.attributes;if(!(latitude&&longitude)){return}let markerIcon,iconHTML,el;if("zone"===Object(compute_state_domain.a)(stateObj)){if(passive)return;if(icon){el=document.createElement("ha-icon");el.setAttribute("icon",icon);iconHTML=el.outerHTML}else{iconHTML=title}markerIcon=leaflet_src_default.a.divIcon({html:iconHTML,iconSize:[24,24],className:""});mapItems.push(leaflet_src_default.a.marker([latitude,longitude],{icon:markerIcon,interactive:!1,title:title}).addTo(map));mapItems.push(leaflet_src_default.a.circle([latitude,longitude],{interactive:!1,color:"#FF9800",radius:radius}).addTo(map));return}const entityName=title.split(" ").map(part=>part[0]).join("").substr(0,3);el=document.createElement("ha-entity-marker");el.setAttribute("entity-id",entityId);el.setAttribute("entity-name",entityName);el.setAttribute("entity-picture",entityPicture||"");markerIcon=leaflet_src_default.a.divIcon({html:el.outerHTML,iconSize:[48,48],className:""});mapItems.push(leaflet_src_default.a.marker([latitude,longitude],{icon:markerIcon,title:Object(compute_state_name.a)(stateObj)}).addTo(map));if(gpsAccuracy){mapItems.push(leaflet_src_default.a.circle([latitude,longitude],{interactive:!1,color:"#0288D1",radius:gpsAccuracy}).addTo(map))}})}}customElements.define("hui-map-card",hui_map_card_HuiMapCard);__webpack_require__(126);class hui_markdown_card_HuiMarkdownCard extends lit_element.a{static get properties(){return{_config:{}}}getCardSize(){return this._config.content.split("\n").length}setConfig(config){if(!config.content){throw new Error("Invalid Configuration: Content Required")}this._config=config}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <ha-card .header="${this._config.title}">
        <ha-markdown
          class="markdown ${Object(classMap.a)({"no-header":!this._config.title})}"
          .content="${this._config.content}"
        ></ha-markdown>
      </ha-card>
    `}renderStyle(){return lit_element.c`
      <style>
        :host {
          @apply --paper-font-body1;
        }
        ha-markdown {
          display: block;
          padding: 0 16px 16px;
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }
        .markdown.no-header {
          padding-top: 16px;
        }
        ha-markdown > *:first-child {
          margin-top: 0;
        }
        ha-markdown > *:last-child {
          margin-bottom: 0;
        }
        ha-markdown a {
          color: var(--primary-color);
        }
        ha-markdown img {
          max-width: 100%;
        }
      </style>
    `}}customElements.define("hui-markdown-card",hui_markdown_card_HuiMarkdownCard);var ha_media_player_card=__webpack_require__(179),create_error_card_config=__webpack_require__(254);class hui_legacy_wrapper_card_LegacyWrapperCard extends HTMLElement{constructor(tag,domain){super();this._tag=tag.toUpperCase();this._domain=domain;this._element=null}getCardSize(){return 3}setConfig(config){if(!config.entity){throw new Error("No entity specified")}if(Object(compute_domain.a)(config.entity)!==this._domain){throw new Error(`Specified entity needs to be of domain ${this._domain}.`)}this._config=config}set hass(hass){const entityId=this._config.entity;if(entityId in hass.states){this._ensureElement(this._tag);this.lastChild.hass=hass;this.lastChild.stateObj=hass.states[entityId]}else{this._ensureElement("HUI-ERROR-CARD");this.lastChild.setConfig(Object(create_error_card_config.a)(`No state available for ${entityId}`,this._config))}}_ensureElement(tag){if(this.lastChild&&this.lastChild.tagName===tag)return;if(this.lastChild){this.removeChild(this.lastChild)}this.appendChild(document.createElement(tag))}}customElements.define("hui-media-control-card",class extends hui_legacy_wrapper_card_LegacyWrapperCard{constructor(){super("ha-media_player-card","media_player")}});var navigate_mixin=__webpack_require__(82);class hui_picture_card_HuiPictureCard extends Object(navigate_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <style>
        ha-card {
          overflow: hidden;
        }
        ha-card[clickable] {
          cursor: pointer;
        }
        img {
          display: block;
          width: 100%;
        }
      </style>

      <ha-card on-click="_cardClicked" clickable$='[[_computeClickable(_config)]]'>
        <img src='[[_config.image]]' />
      </ha-card>
    `}static get properties(){return{hass:Object,_config:Object}}getCardSize(){return 3}setConfig(config){if(!config||!config.image){throw new Error("Error in card configuration.")}this._config=config}_computeClickable(config){return config.navigation_path||config.service}_cardClicked(){if(this._config.navigation_path){this.navigate(this._config.navigation_path)}if(this._config.service){const[domain,service]=this._config.service.split(".",2);this.hass.callService(domain,service,this._config.service_data)}}}customElements.define("hui-picture-card",hui_picture_card_HuiPictureCard);const computeTooltip=(hass,config)=>{if(config.title){return config.title}let stateName="",tooltip;if(config.entity){stateName=config.entity in hass.states?Object(compute_state_name.a)(hass.states[config.entity]):config.entity}switch(config.tap_action){case"navigate":tooltip=`Navigate to ${config.navigation_path}`;break;case"toggle":tooltip=`Toggle ${stateName}`;break;case"call-service":tooltip=`Call service ${config.service}`;break;default:tooltip=`Show more-info: ${stateName}`;}return tooltip};var common_navigate=__webpack_require__(152);const handleClick=(node,hass,config,hold)=>{let action=config.tap_action||"more-info";if(hold&&config.hold_action){action=config.hold_action}if("none"===action){return}switch(action){case"more-info":Object(fire_event.a)(node,"hass-more-info",{entityId:config.entity});break;case"navigate":Object(common_navigate.a)(node,config.navigation_path?config.navigation_path:"");break;case"toggle":toggleEntity(hass,config.entity);break;case"call-service":{if(config.service){const[domain,service]=config.service.split(".",2),serviceData=Object.assign({entity_id:config.entity},config.service_data);hass.callService(domain,service,serviceData)}}}};class hui_icon_element_HuiIconElement extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}setConfig(config){if(!config.icon){throw Error("Invalid Configuration: 'icon' required")}this._config=config}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <ha-icon
        .icon="${this._config.icon}"
        .title="${computeTooltip(this.hass,this._config)}"
        @ha-click="${()=>handleClick(this,this.hass,this._config,!1)}"
        @ha-hold="${()=>handleClick(this,this.hass,this._config,!0)}"
        .longPress="${longPress()}"
      ></ha-icon>
    `}renderStyle(){return lit_element.c`
      <style>
        :host {
          cursor: pointer;
        }
      </style>
    `}}customElements.define("hui-icon-element",hui_icon_element_HuiIconElement);__webpack_require__(158);function parseAspectRatio(input){function parseOrThrow(number){const parsed=parseFloat(number);if(isNaN(parsed))throw new Error(`${number} is not a number`);return parsed}try{if(input){const arr=input.replace(":","x").split("x");if(0===arr.length){return null}return 1===arr.length?{w:parseOrThrow(arr[0]),h:1}:{w:parseOrThrow(arr[0]),h:parseOrThrow(arr[1])}}}catch(err){}return null}class hui_image_HuiImage extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <div id="wrapper">
        <img
          id="image"
          src="[[_imageSrc]]"
          on-error="_onImageError"
          on-load="_onImageLoad" />
        <div id="brokenImage"></div>
      </div>
    `}static get styleTemplate(){return html_tag.a`
      <style>

        img {
          display: block;
          height: auto;
          transition: filter .2s linear;
          width: 100%;
        }

        .error {
          text-align: center;
        }

        .hidden {
          display: none;
        }

        .ratio {
          position: relative;
          width: 100%;
          height: 0
        }

        .ratio img, .ratio div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        #brokenImage {
          background: grey url('/static/images/image-broken.svg') center/36px no-repeat;
        }

      </style>
    `}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},entity:String,image:String,stateImage:Object,cameraImage:String,aspectRatio:String,filter:String,stateFilter:Object,_imageSrc:String}}static get observers(){return["_configChanged(image, stateImage, cameraImage, aspectRatio)"]}connectedCallback(){super.connectedCallback();if(this.cameraImage){this.timer=setInterval(()=>this._updateCameraImageSrc(),1e4)}}disconnectedCallback(){super.disconnectedCallback();clearInterval(this.timer)}_configChanged(image,stateImage,cameraImage,aspectRatio){const ratio=parseAspectRatio(aspectRatio);if(ratio&&0<ratio.w&&0<ratio.h){this.$.wrapper.style.paddingBottom=`${(100*ratio.h/ratio.w).toFixed(2)}%`;this.$.wrapper.classList.add("ratio")}if(cameraImage){this._updateCameraImageSrc()}else if(image&&!stateImage){this._imageSrc=image}}_onImageError(){this._imageSrc=null;this.$.image.classList.add("hidden");if(!this.$.wrapper.classList.contains("ratio")){this.$.brokenImage.style.setProperty("height",`${this._lastImageHeight||"100"}px`)}this.$.brokenImage.classList.remove("hidden")}_onImageLoad(){this.$.image.classList.remove("hidden");this.$.brokenImage.classList.add("hidden");if(!this.$.wrapper.classList.contains("ratio")){this._lastImageHeight=this.$.image.offsetHeight}}_hassChanged(hass){if(this.cameraImage||!this.entity){return}const stateObj=hass.states[this.entity],newState=!stateObj?"unavailable":stateObj.state;if(newState===this._currentState)return;this._currentState=newState;this._updateStateImage();this._updateStateFilter(stateObj)}_updateStateImage(){if(!this.stateImage){this._imageFallback=!0;return}const stateImg=this.stateImage[this._currentState];this._imageSrc=stateImg||this.image;this._imageFallback=!stateImg}_updateStateFilter(stateObj){let filter;if(!this.stateFilter){filter=this.filter}else{filter=this.stateFilter[this._currentState]||this.filter}const isOff=!stateObj||common_const.h.includes(stateObj.state);this.$.image.style.filter=filter||isOff&&this._imageFallback&&"grayscale(100%)"||""}async _updateCameraImageSrc(){try{const{content_type:contentType,content}=await this.hass.callWS({type:"camera_thumbnail",entity_id:this.cameraImage});this._imageSrc=`data:${contentType};base64, ${content}`;this._onImageLoad()}catch(err){this._onImageError()}}}customElements.define("hui-image",hui_image_HuiImage);class hui_image_element_HuiImageElement extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}setConfig(config){if(!config){throw Error("Error in element configuration")}this.classList.toggle("clickable","none"!==config.tap_action);this._config=config}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <hui-image
        .hass=${this.hass}
        .entity="${this._config.entity}"
        .image="${this._config.image}"
        .stateImage=${this._config.state_image}
        .cameraImage=${this._config.camera_image}
        .filter=${this._config.filter}
        .stateFilter=${this._config.state_filter}
        .title="${computeTooltip(this.hass,this._config)}"
        .aspectRatio="${this._config.aspect_ratio}"
        @ha-click="${this._handleClick}"
        @ha-hold="${this._handleHold}"
        .longPress="${longPress()}"
      ></hui-image>
    `}renderStyle(){return lit_element.c`
      <style>
        :host(.clickable) {
          cursor: pointer;
          overflow: hidden;
          -webkit-touch-callout: none !important;
        }
        hui-image {
          -webkit-user-select: none !important;
        }
      </style>
    `}_handleClick(){handleClick(this,this.hass,this._config,!1)}_handleHold(){handleClick(this,this.hass,this._config,!0)}}customElements.define("hui-image-element",hui_image_element_HuiImageElement);__webpack_require__(214);class hui_service_button_element_HuiServiceButtonElement extends lit_element.a{static get properties(){return{_config:{}}}setConfig(config){if(!config||!config.service){throw Error("Invalid Configuration: 'service' required")}[this._domain,this._service]=config.service.split(".",2);if(!this._domain){throw Error("Invalid Configuration: 'service' does not have a domain")}if(!this._service){throw Error("Invalid Configuration: 'service' does not have a service name")}this._config=config}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <ha-call-service-button
        .hass="${this.hass}"
        .domain="${this._domain}"
        .service="${this._service}"
        .service-data="${this._config.service_data}"
      >${this._config.title}</ha-call-service-button>
    `}renderStyle(){return lit_element.c`
      <style>
        ha-call-service-button {
          color: var(--primary-color);
          white-space: nowrap;
        }
      </style>
    `}}customElements.define("hui-service-button-element",hui_service_button_element_HuiServiceButtonElement);__webpack_require__(162);class hui_state_badge_element_HuiStateBadgeElement extends lit_element.a{static get properties(){return{hass:{},_config:{}}}setConfig(config){if(!config.entity){throw Error("Invalid Configuration: 'entity' required")}this._config=config}render(){if(!this._config||!this.hass||!this.hass.states[this._config.entity]){return lit_element.c``}const state=this.hass.states[this._config.entity];return lit_element.c`
      <ha-state-label-badge
        .hass=${this.hass}
        .state=${state}
        .title="${Object(compute_state_name.a)(state)}"
      ></ha-state-label-badge>
    `}}customElements.define("hui-state-badge-element",hui_state_badge_element_HuiStateBadgeElement);class hui_state_icon_element_HuiStateIconElement extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}setConfig(config){if(!config.entity){throw Error("Invalid Configuration: 'entity' required")}this._config=config}render(){if(!this._config||!this.hass||!this.hass.states[this._config.entity]){return lit_element.c``}const state=this.hass.states[this._config.entity];return lit_element.c`
      ${this.renderStyle()}
      <state-badge
        .stateObj=${state}
        .title="${computeTooltip(this.hass,this._config)}"
        @ha-click="${this._handleClick}"
        @ha-hold="${this._handleHold}"
        .longPress="${longPress()}"
      ></state-badge>
    `}renderStyle(){return lit_element.c`
      <style>
        :host {
          cursor: pointer;
        }
      </style>
    `}_handleClick(){handleClick(this,this.hass,this._config,!1)}_handleHold(){handleClick(this,this.hass,this._config,!0)}}customElements.define("hui-state-icon-element",hui_state_icon_element_HuiStateIconElement);class hui_state_label_element_HuiStateLabelElement extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}setConfig(config){if(!config.entity){throw Error("Invalid Configuration: 'entity' required")}this._config=config}render(){if(!this._config){return lit_element.c``}const state=this.hass.states[this._config.entity];return lit_element.c`
      ${this.renderStyle()}
      <div
        .title="${computeTooltip(this.hass,this._config)}"
        @ha-click="${()=>handleClick(this,this.hass,this._config,!1)}"
        @ha-hold="${()=>handleClick(this,this.hass,this._config,!0)}"
        .longPress="${longPress()}"
      >
      ${this._config.prefix}${state?Object(compute_state_display.a)(this.localize,state):"-"}${this._config.suffix}
      </div>
    `}renderStyle(){return lit_element.c`
      <style>
        :host {
          cursor: pointer;
        }
        div {
          padding: 8px;
          white-space: nowrap;
        }
      </style>
    `}}customElements.define("hui-state-label-element",hui_state_label_element_HuiStateLabelElement);const CUSTOM_TYPE_PREFIX="custom:",ELEMENT_TYPES=new Set(["icon","image","service-button","state-badge","state-icon","state-label"]);function _createElement(tag,config){const element=document.createElement(tag);try{element.setConfig(config)}catch(err){console.error(tag,err);return _createErrorElement(err.message,config)}return element}function _createErrorElement(error,config){return _createElement("hui-error-card",Object(create_error_card_config.a)(error,config))}function _hideErrorElement(element){element.style.display="None";return window.setTimeout(()=>{element.style.display=""},2e3)}function createHuiElement(config){if(!config||"object"!==typeof config||!config.type){return _createErrorElement("No element type configured.",config)}if(config.type.startsWith(CUSTOM_TYPE_PREFIX)){const tag=config.type.substr(CUSTOM_TYPE_PREFIX.length);if(customElements.get(tag)){return _createElement(tag,config)}const element=_createErrorElement(`Custom element doesn't exist: ${tag}.`,config),timer=_hideErrorElement(element);customElements.whenDefined(tag).then(()=>{clearTimeout(timer);Object(fire_event.a)(element,"rebuild-view")});return element}if(!ELEMENT_TYPES.has(config.type)){return _createErrorElement(`Unknown element type encountered: ${config.type}.`,config)}return _createElement(`hui-${config.type}-element`,config)}class hui_picture_elements_card_HuiPictureElementsCard extends lit_element.a{static get properties(){return{_config:{}}}set hass(hass){this._hass=hass;for(const el of this.shadowRoot.querySelectorAll("#root > *")){el.hass=this._hass}}getCardSize(){return 4}setConfig(config){if(!config){throw new Error("Invalid Configuration")}else if(!config.image){throw new Error("Invalid Configuration: image required")}else if(!Array.isArray(config.elements)){throw new Error("Invalid Configuration: elements required")}this._config=config}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <ha-card .header="${this._config.title}">
        <div id="root">
          <img src="${this._config.image}">
          ${this._config.elements.map(elementConfig=>this._createHuiElement(elementConfig))}
        </div>
      </ha-card>
    `}renderStyle(){return lit_element.c`
      <style>
        ha-card {
          overflow: hidden;
        }
        #root {
          position: relative;
          overflow: hidden;
        }
        #root img {
          display: block;
          width: 100%;
        }
        .element {
          position: absolute;
          transform: translate(-50%, -50%);
        }
      </style>
    `}_createHuiElement(elementConfig){const element=createHuiElement(elementConfig);element.hass=this._hass;element.classList.add("element");Object.keys(elementConfig.style).forEach(prop=>{element.style.setProperty(prop,elementConfig.style[prop])});return element}}customElements.define("hui-picture-elements-card",hui_picture_elements_card_HuiPictureElementsCard);const UNAVAILABLE="Unavailable";class hui_picture_entity_card_HuiPictureEntityCard extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
      <style>
        ha-card {
          min-height: 75px;
          overflow: hidden;
          position: relative;
        }
        ha-card.canInteract {
          cursor: pointer;
        }
        .footer {
          @apply --paper-font-common-nowrap;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 16px;
          font-size: 16px;
          line-height: 16px;
          color: white;
        }
        .both {
          display: flex;
          justify-content: space-between;
        }
        .state {
          text-align: right;
        }
      </style>

      <ha-card id='card'>
        <hui-image
          hass="[[hass]]"
          image="[[_config.image]]"
          state-image="[[_config.state_image]]"
          camera-image="[[_getCameraImage(_config)]]"
          entity="[[_config.entity]]"
          aspect-ratio="[[_config.aspect_ratio]]"
        ></hui-image>
        <template is="dom-if" if="[[_showNameAndState(_config)]]">
          <div class="footer both">
            <div>[[_name]]</div>
            <div>[[_state]]</div>
        </div>
        </template>
        <template is="dom-if" if="[[_showName(_config)]]">
          <div class="footer">
            [[_name]]
          </div>
        </template>
        <template is="dom-if" if="[[_showState(_config)]]">
          <div class="footer state">
            [[_state]]
          </div>
        </template>
      </ha-card>
    `}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},_config:Object,_name:String,_state:String}}getCardSize(){return 3}setConfig(config){if(!config||!config.entity){throw new Error("Error in card configuration.")}this._entityDomain=Object(compute_domain.a)(config.entity);if("camera"!==this._entityDomain&&!config.image&&!config.state_image&&!config.camera_image){throw new Error("No image source configured.")}this._config=config}ready(){super.ready();const card=this.shadowRoot.querySelector("#card");longPressBind(card);card.addEventListener("ha-click",()=>this._cardClicked(!1));card.addEventListener("ha-hold",()=>this._cardClicked(!0))}_hassChanged(hass){const config=this._config,entityId=config.entity,stateObj=hass.states[entityId];if(!stateObj&&this._oldState===UNAVAILABLE||stateObj&&stateObj.state===this._oldState){return}let name,state,stateLabel,available;if(stateObj){name=config.name||Object(compute_state_name.a)(stateObj);state=stateObj.state;stateLabel=Object(compute_state_display.a)(this.localize,stateObj);available=!0}else{name=config.name||entityId;state=UNAVAILABLE;stateLabel=this.localize("state.default.unavailable");available=!1}this.setProperties({_name:name,_state:stateLabel,_oldState:state});this.$.card.classList.toggle("canInteract",available)}_showNameAndState(config){return!1!==config.show_name&&!1!==config.show_state}_showName(config){return!1!==config.show_name&&!1===config.show_state}_showState(config){return!1===config.show_name&&!1!==config.show_state}_cardClicked(hold){const config=this._config,entityId=config.entity;if(!(entityId in this.hass.states))return;const action=hold?config.hold_action:config.tap_action||"more-info";switch(action){case"toggle":toggleEntity(this.hass,entityId);break;case"more-info":this.fire("hass-more-info",{entityId});break;default:}}_getCameraImage(config){return"camera"===this._entityDomain?config.entity:config.camera_image}}customElements.define("hui-picture-entity-card",hui_picture_entity_card_HuiPictureEntityCard);const STATES_OFF=new Set(["closed","locked","not_home","off"]);class hui_picture_glance_card_HuiPictureGlanceCard extends Object(navigate_mixin.a)(Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a))){static get template(){return html_tag.a`
      <style>
        ha-card {
          position: relative;
          min-height: 48px;
          overflow: hidden;
        }
        hui-image.clickable {
          cursor: pointer;
        }
        .box {
          @apply --paper-font-common-nowrap;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 4px 8px;
          font-size: 16px;
          line-height: 40px;
          color: white;
          display: flex;
          justify-content: space-between;
        }
        .box .title {
          font-weight: 500;
          margin-left: 8px;
        }
        ha-icon {
          cursor: pointer;
          padding: 8px;
          color: #A9A9A9;
        }
        ha-icon.state-on {
          color: white;
        }
      </style>

      <ha-card>
        <hui-image
          class$='[[_computeImageClass(_config)]]'
          on-click='_handleImageClick'
          hass="[[hass]]"
          image="[[_config.image]]"
          state-image="[[_config.state_image]]"
          camera-image="[[_config.camera_image]]"
          entity="[[_config.entity]]"
          aspect-ratio="[[_config.aspect_ratio]]"
        ></hui-image>
        <div class="box">
          <template is="dom-if" if="[[_config.title]]">
            <div class="title">[[_config.title]]</div>
          </template>
          <div>
            <template is="dom-repeat" items="[[_computeVisible(_entitiesDialog, hass.states)]]">
              <ha-icon
                on-click="_openDialog"
                class$="[[_computeButtonClass(item.entity, hass.states)]]"
                icon="[[_computeIcon(item, hass.states)]]"
                title="[[_computeTooltip(item.entity, hass.states)]]"
              ></ha-icon>
            </template>
          </div>
          <div>
            <template is="dom-repeat" items="[[_computeVisible(_entitiesToggle, hass.states)]]">
              <ha-icon
                on-click="_callService"
                class$="[[_computeButtonClass(item.entity, hass.states)]]"
                icon="[[_computeIcon(item, hass.states)]]"
                title="[[_computeTooltip(item.entity, hass.states)]]"
              ></ha-icon>
            </template>
          </div>
        </div>
      </ha-card>
    `}static get properties(){return{hass:Object,_config:Object,_entitiesDialog:Array,_entitiesToggle:Array}}getCardSize(){return 3}setConfig(config){if(!config||!config.entities||!Array.isArray(config.entities)||!(config.image||config.camera_image||config.state_image)||config.state_image&&!config.entity){throw new Error("Invalid card configuration")}const entities=Object(process_config_entities.a)(config.entities),dialog=[],toggle=[];entities.forEach(item=>{if(config.force_dialog||!common_const.e.has(Object(compute_domain.a)(item.entity))){dialog.push(item)}else{toggle.push(item)}});this.setProperties({_config:config,_entitiesDialog:dialog,_entitiesToggle:toggle})}_computeVisible(collection,states){return collection.filter(el=>el.entity in states)}_computeIcon(item,states){return item.icon||Object(state_icon.a)(states[item.entity])}_computeButtonClass(entityId,states){return STATES_OFF.has(states[entityId].state)?"":"state-on"}_computeTooltip(entityId,states){return`${Object(compute_state_name.a)(states[entityId])}: ${Object(compute_state_display.a)(this.localize,states[entityId])}`}_computeImageClass(config){return config.navigation_path||config.camera_image?"clickable":""}_openDialog(ev){this.fire("hass-more-info",{entityId:ev.model.item.entity})}_callService(ev){toggleEntity(this.hass,ev.model.item.entity)}_handleImageClick(){if(this._config.navigation_path){this.navigate(this._config.navigation_path);return}if(this._config.camera_image){this.fire("hass-more-info",{entityId:this._config.camera_image})}}}customElements.define("hui-picture-glance-card",hui_picture_glance_card_HuiPictureGlanceCard);__webpack_require__(180);customElements.define("hui-plant-status-card",class extends hui_legacy_wrapper_card_LegacyWrapperCard{constructor(){super("ha-plant-card","plant")}});class hui_sensor_card_HuiSensorCard extends Object(events_mixin.a)(lit_element.a){set hass(hass){this._hass=hass;const entity=hass.states[this._config.entity];if(entity&&this._entity!==entity){this._entity=entity;if("none"!==this._config.graph&&entity.attributes.unit_of_measurement){this._getHistory()}}}static get properties(){return{_hass:{},_config:{},_entity:{},_line:String}}setConfig(config){if(!config.entity||"sensor"!==config.entity.split(".")[0]){throw new Error("Specify an entity from within the sensor domain.")}const cardConfig=Object.assign({icon:!1,hours_to_show:24,accuracy:10,height:100,line_width:5,line_color:"var(--accent-color)"},config);cardConfig.hours_to_show=+cardConfig.hours_to_show;cardConfig.accuracy=+cardConfig.accuracy;cardConfig.height=+cardConfig.height;cardConfig.line_width=+cardConfig.line_width;this._config=cardConfig}shouldUpdate(changedProps){const change=changedProps.has("_entity")||changedProps.has("_line");return change}render({_config,_entity,_line}=this){return lit_element.c`
      ${this._style()}
      <ha-card @click=${this._handleClick}>
        <div class='flex'>
          <div class='icon'>
            <ha-icon .icon=${this._computeIcon(_entity)}></ha-icon>
          </div>
          <div class='header'>
            <span class='name'>${this._computeName(_entity)}</span>
          </div>
        </div>
        <div class='flex info'>
          <span id='value'>${_entity.state}</span>
          <span id='measurement'>${this._computeUom(_entity)}</span>
        </div>
        <div class='graph'>
          <div>
            ${_line?lit_element.e`
            <svg width='100%' height='100%' viewBox='0 0 500 ${_config.height}'>
              <path d=${_line} fill='none' stroke=${_config.line_color}
                stroke-width=${_config.line_width}
                stroke-linecap='round' stroke-linejoin='round' />
            </svg>`:""}
          </div>
        </div>
      </ha-card>`}_handleClick(){this.fire("hass-more-info",{entityId:this._config.entity})}_computeIcon(item){return this._config.icon||Object(state_icon.a)(item)}_computeName(item){return this._config.name||Object(compute_state_name.a)(item)}_computeUom(item){return this._config.unit||item.attributes.unit_of_measurement}_getGraph(items,width,height){const values=this._getValueArr(items),coords=this._calcCoordinates(values,width,height);return this._getPath(coords)}_getValueArr(items){return items.map(item=>+item.state||0)}_calcCoordinates(values,width,height){const margin=this._config.line_width;width-=2*margin;height-=2*margin;const min=_Mathfloor(.95*_Mathmin.apply(null,values)),max=_Mathceil(1.05*_Mathmax.apply(null,values));if(1===values.length)values.push(values[0]);const yRatio=(max-min)/height,xRatio=width/(values.length-1);return values.map((value,i)=>{const y=height-(value-min)/yRatio||0;return[xRatio*i+margin,y]})}_getPath(points){const SPACE=" ";let next,Z;const X=0,Y=1;let path="",point=points[0];path+="M"+point[X]+","+point[Y];const first=point;for(let i=0;i<points.length;i++){next=points[i];Z=this._midPoint(point[X],point[Y],next[X],next[Y]);path+=SPACE+Z[X]+","+Z[Y];path+="Q"+_Mathfloor(next[X])+","+next[Y];point=next}const second=points[1];Z=this._midPoint(first[X],first[Y],second[X],second[Y]);path+=SPACE+_Mathfloor(next[X])+"."+points[points.length-1];return path}_midPoint(Ax,Ay,Bx,By){return[(Ax-Bx)/2+Bx,(Ay-By)/2+By]}async _getHistory(){const endTime=new Date,startTime=new Date;startTime.setHours(endTime.getHours()-this._config.hours_to_show);const stateHistory=await this._fetchRecent(this._config.entity,startTime,endTime),history=stateHistory[0],valArray=[history[history.length-1]];let pos=history.length-1;const accuracy=this._config.accuracy<=pos?this._config.accuracy:pos;let increment=_Mathceil(history.length/accuracy);increment=0>=increment?1:increment;for(let i=accuracy;2<=i;i--){pos-=increment;valArray.unshift(0<=pos?history[pos]:history[0])}this._line=this._getGraph(valArray,500,this._config.height)}async _fetchRecent(entityId,startTime,endTime){let url="history/period";if(startTime)url+="/"+startTime.toISOString();url+="?filter_entity_id="+entityId;if(endTime)url+="&end_time="+endTime.toISOString();return await this._hass.callApi("GET",url)}getCardSize(){return 3}_style(){return lit_element.c`
      <style>
        :host {
          display: flex;
          flex-direction: column;
        }
        ha-card {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 16px;
          position: relative;
          cursor: pointer;
        }
        .flex {
          display: flex;
        }
        .header {
          align-items: center;
          display: flex;
          min-width: 0;
          opacity: .8;
          position: relative;
        }
        .name {
          display: block;
          display: -webkit-box;
          font-size: 1.2rem;
          font-weight: 500;
          max-height: 1.4rem;
          margin-top: 2px;
          opacity: .8;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
          word-break: break-all;
        }
        .icon {
          color: var(--paper-item-icon-color, #44739e);
          display: inline-block;
          flex: 0 0 40px;
          line-height: 40px;
          position: relative;
          text-align: center;
          width: 40px;
        }
        .info {
          flex-wrap: wrap;
          margin: 16px 0 16px 8px;
        }
        #value {
          display: inline-block;
          font-size: 2rem;
          font-weight: 400;
          line-height: 1em;
          margin-right: 4px;
        }
        #measurement {
          align-self: flex-end;
          display: inline-block;
          font-size: 1.3rem;
          line-height: 1.2em;
          margin-top: .1em;
          opacity: .6;
          vertical-align: bottom;
        }
        .graph {
          align-self: flex-end;
          margin: auto;
          margin-bottom: 0px;
          position: relative;
          width: 100%;
        }
        .graph > div {
          align-self: flex-end;
          margin: auto 8px;
        }
      </style>`}}customElements.define("hui-sensor-card",hui_sensor_card_HuiSensorCard);customElements.define("hui-vertical-stack-card",class extends hui_stack_card_HuiStackCard{getCardSize(){let totalSize=0;if(!this._cards){return totalSize}for(const element of this._cards){totalSize+=Object(compute_card_size.a)(element)}return totalSize}renderStyle(){return lit_element.c`
      <style>
        #root {
          display: flex;
          flex-direction: column;
        }
        #root > * {
          margin: 4px 0 4px 0;
        }
        #root > *:first-child {
          margin-top: 0;
        }
        #root > *:last-child {
          margin-bottom: 0;
        }
      </style>
    `}});const thermostatConfig={radius:150,step:1,circleShape:"pie",startAngle:315,width:5,lineCap:"round",handleSize:"+10",showTooltip:!1},modeIcons={auto:"hass:autorenew",heat:"hass:fire",cool:"hass:snowflake",off:"hass:power"};function formatTemp(temps){return temps.filter(Boolean).join("-")}class hui_thermostat_card_HuiThermostatCard extends Object(lit_localize_mixin.a)(lit_element.a){static get properties(){return{hass:{},_config:{}}}getCardSize(){return 4}setConfig(config){if(!config.entity||"climate"!==config.entity.split(".")[0]){throw new Error("Specify an entity from within the climate domain.")}this._config=Object.assign({theme:"default"},config)}render(){if(!this.hass||!this._config){return lit_element.c``}const stateObj=this.hass.states[this._config.entity],broadCard=390<this.clientWidth,mode=modeIcons[stateObj.attributes.operation_mode||""]?stateObj.attributes.operation_mode:"unknown-mode";return lit_element.c`
      ${this.renderStyle()}
      <ha-card
        class="${Object(classMap.a)({[mode]:!0,large:broadCard,small:!broadCard})}">
        <div id="root">
          <div id="thermostat"></div>
          <div id="tooltip">
            <div class="title">${Object(compute_state_name.a)(stateObj)}</div>
            <div class="current-temperature">
              <span class="current-temperature-text">${stateObj.attributes.current_temperature}
                <span class="uom">${this.hass.config.unit_system.temperature}</span>
              </span>
            </div>
            <div class="climate-info">
            <div id="set-temperature"></div>
            <div class="current-mode">${this.localize(`state.climate.${stateObj.state}`)}</div>
            <div class="modes">
              ${(stateObj.attributes.operation_list||[]).map(modeItem=>this._renderIcon(modeItem,mode))}
            </div>
          </div>
        </div>
      </ha-card>
    `}shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps)}firstUpdated(){const stateObj=this.hass.states[this._config.entity],_sliderType=stateObj.attributes.target_temp_low&&stateObj.attributes.target_temp_high?"range":"min-range";jQuery("#thermostat",this.shadowRoot).roundSlider(Object.assign({},thermostatConfig,{radius:this.clientWidth/3,min:stateObj.attributes.min_temp,max:stateObj.attributes.max_temp,sliderType:_sliderType,change:value=>this._setTemperature(value),drag:value=>this._dragEvent(value)}))}updated(changedProps){if(!this._config||!this.hass){return}const stateObj=this.hass.states[this._config.entity];let sliderValue,uiValue;if(stateObj.attributes.target_temp_low&&stateObj.attributes.target_temp_high){sliderValue=`${stateObj.attributes.target_temp_low}, ${stateObj.attributes.target_temp_high}`;uiValue=formatTemp([stateObj.attributes.target_temp_low+"",stateObj.attributes.target_temp_high+""])}else{sliderValue=uiValue=stateObj.attributes.temperature}jQuery("#thermostat",this.shadowRoot).roundSlider({value:sliderValue});this.shadowRoot.querySelector("#set-temperature").innerHTML=uiValue;const oldHass=changedProps.get("hass");if(!oldHass||oldHass.themes!==this.hass.themes){Object(apply_themes_on_element.a)(this,this.hass.themes,this._config.theme)}}renderStyle(){return lit_element.c`
    ${roundSliderStyle}
    <style>
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        --rail-border-color: transparent;
        --auto-color: green;
        --cool-color: #2b9af9;
        --heat-color: #FF8100;
        --off-color: #8a8a8a;
        --unknown-color: #bac;
      }
      #root {
        position: relative;
        overflow: hidden;
      }
      .auto {
        --mode-color: var(--auto-color);
      }
      .cool {
        --mode-color: var(--cool-color);
      }
      .heat {
        --mode-color: var(--heat-color);
      }
      .off {
        --mode-color: var(--off-color);
      }
      .unknown-mode {
        --mode-color: var(--unknown-color);
      }
      .no-title {
        --title-margin-top: 33% !important;
      }
      .large {
        --thermostat-padding-top: 25px;
        --thermostat-margin-bottom: 25px;
        --title-font-size: 28px;
        --title-margin-top: 20%;
        --climate-info-margin-top: 17%;
        --modes-margin-top: 2%;
        --set-temperature-font-size: 25px;
        --current-temperature-font-size: 71px;
        --current-temperature-margin-top: 10%;
        --current-temperature-text-padding-left: 15px;
        --uom-font-size: 20px;
        --uom-margin-left: -18px;
        --current-mode-font-size: 18px;
        --set-temperature-padding-bottom: 5px;
      }
      .small {
        --thermostat-padding-top: 15px;
        --thermostat-margin-bottom: 15px;
        --title-font-size: 18px;
        --title-margin-top: 20%;
        --climate-info-margin-top: 7.5%;
        --modes-margin-top: 1%;
        --set-temperature-font-size: 16px;
        --current-temperature-font-size: 25px;
        --current-temperature-margin-top: 5%;
        --current-temperature-text-padding-left: 7px;
        --uom-font-size: 12px;
        --uom-margin-left: -5px;
        --current-mode-font-size: 14px;
        --set-temperature-padding-bottom: 0px;
      }
      #thermostat {
        margin: 0 auto var(--thermostat-margin-bottom);
        padding-top: var(--thermostat-padding-top);
      }
      #thermostat .rs-range-color  {
        background-color: var(--mode-color, var(--disabled-text-color));
      }
      #thermostat .rs-path-color  {
          background-color: var(--disabled-text-color);
      }
      #thermostat .rs-handle  {
          background-color: var(--paper-card-background-color, white);
          padding: 7px;
          border: 2px solid var(--disabled-text-color);
      }
      #thermostat .rs-handle.rs-focus  {
          border-color: var(--mode-color, var(--disabled-text-color));
      }
      #thermostat .rs-handle:after  {
          border-color: var(--mode-color, var(--disabled-text-color));
          background-color: var(--mode-color, var(--disabled-text-color));
      }
      #thermostat .rs-border  {
        border-color: var(--rail-border-color);
      }
      #thermostat .rs-bar.rs-transition.rs-first, .rs-bar.rs-transition.rs-second{
        z-index: 20 !important;
      }
      #thermostat .rs-inner.rs-bg-color.rs-border,
      #thermostat .rs-overlay.rs-transition.rs-bg-color {
        background-color: var(--paper-card-background-color, white);
      }
      #tooltip {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        text-align: center;
        z-index: 15;
        color: var(--primary-text-color);
      }
      #set-temperature {
        font-size: var(--set-temperature-font-size);
        padding-bottom: var(--set-temperature-padding-bottom);
      }
      .title {
        font-size: var(--title-font-size);
        margin-top: var(--title-margin-top);
      }
      .climate-info {
        margin-top: var(--climate-info-margin-top);
      }
      .current-mode {
        font-size: var(--current-mode-font-size);
        color: var(--secondary-text-color);
      }
      .modes {
        margin-top: var(--modes-margin-top);
      }
      .modes ha-icon {
        color: var(--disabled-text-color);
        cursor: pointer;
        display: inline-block;
        margin: 0 10px;
      }
      .modes ha-icon.selected-icon {
        color: var(--mode-color);
      }
      .current-temperature {
        margin-top: var(--current-temperature-margin-top);
        font-size: var(--current-temperature-font-size);
      }
      .current-temperature-text {
        padding-left: var(--current-temperature-text-padding-left);
      }
      .uom {
        font-size: var(--uom-font-size);
        vertical-align: top;
        margin-left: var(--uom-margin-left);
      }
    </style>
    `}_dragEvent(e){this.shadowRoot.querySelector("#set-temperature").innerHTML=formatTemp((e.value+"").split(","))}_setTemperature(e){const stateObj=this.hass.states[this._config.entity];if(stateObj.attributes.target_temp_low&&stateObj.attributes.target_temp_high){if(1===e.handle.index){this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:e.handle.value,target_temp_high:stateObj.attributes.target_temp_high})}else{this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,target_temp_low:stateObj.attributes.target_temp_low,target_temp_high:e.handle.value})}}else{this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:e.value})}}_renderIcon(mode,currentMode){if(!modeIcons[mode]){return lit_element.c``}return lit_element.c`<ha-icon
      class="${Object(classMap.a)({"selected-icon":currentMode===mode})}"
      .mode="${mode}"
      .icon="${modeIcons[mode]}"
      @click="${this._handleModeClick}"
    ></ha-icon>`}_handleModeClick(e){this.hass.callService("climate","set_operation_mode",{entity_id:this._config.entity,operation_mode:e.currentTarget.mode})}}customElements.define("hui-thermostat-card",hui_thermostat_card_HuiThermostatCard);__webpack_require__(174);customElements.define("hui-weather-forecast-card",class extends hui_legacy_wrapper_card_LegacyWrapperCard{constructor(){super("ha-weather-card","weather")}getCardSize(){return 4}});const severityMap={red:"var(--label-badge-red)",green:"var(--label-badge-green)",yellow:"var(--label-badge-yellow)",normal:"var(--label-badge-blue)"};class hui_gauge_card_HuiGaugeCard extends lit_element.a{static get properties(){return{hass:{},_config:{}}}getCardSize(){return 2}setConfig(config){if(!config||!config.entity){throw new Error("Invalid card configuration")}if(!Object(valid_entity_id.a)(config.entity)){throw new Error("Invalid Entity")}this._config=Object.assign({min:0,max:100,theme:"default"},config)}render(){if(!this._config||!this.hass){return lit_element.c``}const stateObj=this.hass.states[this._config.entity];let error;if(!stateObj){error="Entity not available: "+this._config.entity}else if(isNaN(+stateObj.state)){error="Entity is non-numeric: "+this._config.entity}return lit_element.c`
    ${this.renderStyle()}
    <ha-card @click="${this._handleClick}">
    ${error?lit_element.c`<div class="not-found">${error}</div>`:lit_element.c`
          <div class='container'>
            <div class='gauge-a'></div>
            <div class='gauge-b'></div>
            <div class='gauge-c' id='gauge'></div>
            <div class='gauge-data'>
              <div id='percent'>${stateObj.state}
              ${this._config.unit_of_measurement||stateObj.attributes.unit_of_measurement||""}
              </div>
              <div id='title'>${this._config.title}

              </div>
            </div>
          </div>
        `}
    </ha-card>
    `}shouldUpdate(changedProps){return hasConfigOrEntityChanged(this,changedProps)}updated(changedProps){if(!this._config||!this.hass||!this.shadowRoot.getElementById("gauge")){return}const stateObj=this.hass.states[this._config.entity];if(isNaN(+stateObj.state)){return}const turn=this._translateTurn(+stateObj.state,this._config);this.shadowRoot.getElementById("gauge").style.cssText=`transform: rotate(${turn}turn); background-color: ${this._computeSeverity(stateObj.state,this._config.severity)}`;this.shadowRoot.querySelector("ha-card").style.setProperty("--base-unit",this._computeBaseUnit());const oldHass=changedProps.get("hass");if(!oldHass||oldHass.themes!==this.hass.themes){Object(apply_themes_on_element.a)(this,this.hass.themes,this._config.theme)}}renderStyle(){return lit_element.c`
      <style>
        ha-card {
          --base-unit: 50px;
          height: calc(var(--base-unit)*3);
          position: relative;
          cursor: pointer;
        }
        .container{
          width: calc(var(--base-unit) * 4);
          height: calc(var(--base-unit) * 2);
          position: absolute;
          top: calc(var(--base-unit)*1.5);
          left: 50%;
          overflow: hidden;
          text-align: center;
          transform: translate(-50%, -50%);
        }
        .gauge-a{
          z-index: 1;
          position: absolute;
          background-color: var(--primary-background-color);
          width: calc(var(--base-unit) * 4);
          height: calc(var(--base-unit) * 2);
          top: 0%;
          border-radius:calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5) 0px 0px ;
        }
        .gauge-b{
          z-index: 3;
          position: absolute;
          background-color: var(--paper-card-background-color);
          width: calc(var(--base-unit) * 2.5);
          height: calc(var(--base-unit) * 1.25);
          top: calc(var(--base-unit) * 0.75);
          margin-left: calc(var(--base-unit) * 0.75);
          margin-right: auto;
          border-radius: calc(var(--base-unit) * 2.5) calc(var(--base-unit) * 2.5) 0px 0px ;
        }
        .gauge-c{
          z-index: 2;
          position: absolute;
          background-color: var(--label-badge-blue);
          width: calc(var(--base-unit) * 4);
          height: calc(var(--base-unit) * 2);
          top: calc(var(--base-unit) * 2);
          margin-left: auto;
          margin-right: auto;
          border-radius: 0px 0px calc(var(--base-unit) * 2) calc(var(--base-unit) * 2) ;
          transform-origin: center top;
          transition: all 1.3s ease-in-out;
        }
        .gauge-data{
          z-index: 4;
          color: var(--primary-text-color);
          line-height: calc(var(--base-unit) * 0.3);
          position: absolute;
          width: calc(var(--base-unit) * 4);
          height: calc(var(--base-unit) * 2.1);
          top: calc(var(--base-unit) * 1.2);
          margin-left: auto;
          margin-right: auto;
          transition: all 1s ease-out;
        }
        .gauge-data #percent{
          font-size: calc(var(--base-unit) * 0.55);
        }
        .gauge-data #title{
          padding-top: calc(var(--base-unit) * 0.15);
          font-size: calc(var(--base-unit) * 0.30);
        }
        .not-found {
          flex: 1;
          background-color: yellow;
          padding: 8px;
        }
      </style>
    `}_computeSeverity(stateValue,sections){const numberValue=+stateValue;if(!sections){return severityMap.normal}const sectionsArray=Object.keys(sections),sortable=sectionsArray.map(severity=>[severity,sections[severity]]);for(const severity of sortable){if(null==severityMap[severity[0]]||isNaN(severity[1])){return severityMap.normal}}sortable.sort((a,b)=>a[1]-b[1]);if(numberValue>=sortable[0][1]&&numberValue<sortable[1][1]){return severityMap[sortable[0][0]]}if(numberValue>=sortable[1][1]&&numberValue<sortable[2][1]){return severityMap[sortable[1][0]]}if(numberValue>=sortable[2][1]){return severityMap[sortable[2][0]]}return severityMap.normal}_translateTurn(value,config){const maxTurnValue=_Mathmin(_Mathmax(value,config.min),config.max);return 5*(maxTurnValue-config.min)/(config.max-config.min)/10}_computeBaseUnit(){return 200>this.clientWidth?this.clientWidth/5+"px":"50px"}_handleClick(){Object(fire_event.a)(this,"hass-more-info",{entityId:this._config.entity})}}customElements.define("hui-gauge-card",hui_gauge_card_HuiGaugeCard);__webpack_require__.d(__webpack_exports__,"a",function(){return createCardElement});const CARD_TYPES=new Set(["alarm-panel","conditional","entities","entity-button","entity-filter","error","gauge","glance","history-graph","horizontal-stack","iframe","light","map","markdown","media-control","picture","picture-elements","picture-entity","picture-glance","plant-status","sensor","thermostat","vertical-stack","weather-forecast"]),create_card_element_CUSTOM_TYPE_PREFIX="custom:";function create_card_element_createElement(tag,config){const element=document.createElement(tag);try{element.setConfig(config)}catch(err){console.error(tag,err);return create_card_element_createErrorElement(err.message,config)}return element}function create_card_element_createErrorElement(error,config){return create_card_element_createElement("hui-error-card",Object(create_error_card_config.a)(error,config))}function createCardElement(config){if(!config||"object"!==typeof config||!config.type){return create_card_element_createErrorElement("No card type configured.",config)}if(config.type.startsWith(create_card_element_CUSTOM_TYPE_PREFIX)){const tag=config.type.substr(create_card_element_CUSTOM_TYPE_PREFIX.length);if(customElements.get(tag)){return create_card_element_createElement(tag,config)}const element=create_card_element_createErrorElement(`Custom element doesn't exist: ${tag}.`,config);element.style.display="None";const timer=window.setTimeout(()=>{element.style.display=""},2e3);customElements.whenDefined(tag).then(()=>{clearTimeout(timer);Object(fire_event.a)(element,"rebuild-view")});return element}if(!CARD_TYPES.has(config.type)){return create_card_element_createErrorElement(`Unknown card type encountered: ${config.type}.`,config)}return create_card_element_createElement(`hui-${config.type}-card`,config)}},306:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return validEntityId});function validEntityId(entityId){return /^(\w+)\.(\w+)$/.test(entityId)}},308:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_iron_image_iron_image__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(166),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16);class HaEntityMarker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__.a`
    <style include="iron-positioning"></style>
    <style>
    .marker {
      vertical-align: top;
      position: relative;
      display: block;
      margin: 0 auto;
      width: 2.5em;
      text-align: center;
      height: 2.5em;
      line-height: 2.5em;
      font-size: 1.5em;
      border-radius: 50%;
      border: 0.1em solid var(--ha-marker-color, var(--default-primary-color));
      color: rgb(76, 76, 76);
      background-color: white;
    }
    iron-image {
      border-radius: 50%;
    }
    </style>

    <div class="marker">
      <template is="dom-if" if="[[entityName]]">[[entityName]]</template>
      <template is="dom-if" if="[[entityPicture]]">
        <iron-image sizing="cover" class="fit" src="[[entityPicture]]"></iron-image>
      </template>
    </div>
`}static get properties(){return{hass:{type:Object},entityId:{type:String,value:""},entityName:{type:String,value:null},entityPicture:{type:String,value:null}}}ready(){super.ready();this.addEventListener("click",ev=>this.badgeTap(ev))}badgeTap(ev){ev.stopPropagation();if(this.entityId){this.fire("hass-more-info",{entityId:this.entityId})}}}customElements.define("ha-entity-marker",HaEntityMarker)},309:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return setupLeafletMap});var leaflet__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(276),leaflet__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);function setupLeafletMap(mapElement){const map=leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.map(mapElement),style=document.createElement("link");style.setAttribute("href","/static/images/leaflet/leaflet.css");style.setAttribute("rel","stylesheet");mapElement.parentNode.appendChild(style);map.setView([51.505,-.09],13);leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.tileLayer(`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}${leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Browser.retina?"@2x.png":".png"}`,{attribution:"&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>, &copy; <a href=\"https://carto.com/attributions\">CARTO</a>",subdomains:"abcd",minZoom:0,maxZoom:20}).addTo(map);return map}},361:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return debounce});function debounce(func,wait,immediate){let timeout;return function(...args){const context=this,callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(()=>{timeout=null;if(!immediate)func.apply(context,args)},wait);if(callNow)func.apply(context,args)}}},415:function(module,__webpack_exports__,__webpack_require__){"use strict";var lit_element=__webpack_require__(196),ha_card=__webpack_require__(108),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),paper_toggle_button=__webpack_require__(158),common_const=__webpack_require__(39),compute_domain=__webpack_require__(67);function turnOnOffEntities(hass,entityIds,turnOn=!0){const domainsToCall={};entityIds.forEach(entityId=>{if(common_const.h.includes(hass.states[entityId].state)===turnOn){const stateDomain=Object(compute_domain.a)(entityId),serviceDomain=["cover","lock"].includes(stateDomain)?stateDomain:"homeassistant";if(!(serviceDomain in domainsToCall))domainsToCall[serviceDomain]=[];domainsToCall[serviceDomain].push(entityId)}});Object.keys(domainsToCall).forEach(domain=>{let service;switch(domain){case"lock":service=turnOn?"unlock":"lock";break;case"cover":service=turnOn?"open_cover":"close_cover";break;default:service=turnOn?"turn_on":"turn_off";}const entities=domainsToCall[domain];hass.callService(domain,service,{entity_id:entities})})}class hui_entities_toggle_HuiEntitiesToggle extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      :host {
        width: 38px;
        display: block;
      }
      paper-toggle-button {
        cursor: pointer;
        --paper-toggle-button-label-spacing: 0;
        padding: 13px 5px;
        margin: -4px -5px;
      }
    </style>
    <template is="dom-if" if="[[_toggleEntities.length]]">
      <paper-toggle-button checked="[[_computeIsChecked(hass, _toggleEntities)]]" on-change="_callService"></paper-toggle-button>
    </template>
`}static get properties(){return{hass:Object,entities:Array,_toggleEntities:{type:Array,computed:"_computeToggleEntities(hass, entities)"}}}_computeToggleEntities(hass,entityIds){return entityIds.filter(entityId=>entityId in hass.states&&common_const.e.has(entityId.split(".",1)[0]))}_computeIsChecked(hass,entityIds){return entityIds.some(entityId=>"on"===hass.states[entityId].state)}_callService(ev){const turnOn=ev.target.checked;turnOnOffEntities(this.hass,this._toggleEntities,turnOn)}}customElements.define("hui-entities-toggle",hui_entities_toggle_HuiEntitiesToggle);var fire_event=__webpack_require__(75),lit_localize_mixin=__webpack_require__(226),process_config_entities=__webpack_require__(241),ha_climate_state=__webpack_require__(175),state_badge=__webpack_require__(125),ha_relative_time=__webpack_require__(160),ha_icon=__webpack_require__(88),compute_state_name=__webpack_require__(27);class hui_generic_entity_row_HuiGenericEntityRow extends polymer_element.a{static get template(){return html_tag.a`
      ${this.styleTemplate}
      <template is="dom-if" if="[[_stateObj]]">
        ${this.stateBadgeTemplate}
        <div class="flex">
          ${this.infoTemplate}
          <slot></slot>
        </div>
      </template>
      <template is="dom-if" if="[[!_stateObj]]">
        <div class="not-found">
          Entity not available: [[config.entity]]
        </div>
      </template>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        :host {
          display: flex;
          align-items: center;
        }
        .flex {
          flex: 1;
          margin-left: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-width: 0;
        }
        .info {
          flex: 1 0 60px;
        }
        .info,
        .info > * {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .flex ::slotted(*) {
          margin-left: 8px;
          min-width: 0;
        }
        .flex ::slotted([slot=secondary]) {
          margin-left: 0;
        }
        .secondary,
        ha-relative-time {
          display: block;
          color: var(--secondary-text-color);
        }
        .not-found {
          flex: 1;
          background-color: yellow;
          padding: 8px;
        }
        state-badge {
          flex: 0 0 40px;
        }
      </style>
    `}static get stateBadgeTemplate(){return html_tag.a`
      <state-badge
        state-obj="[[_stateObj]]"
        override-icon="[[config.icon]]"
      ></state-badge>
    `}static get infoTemplate(){return html_tag.a`
      <div class="info">
        [[_computeName(config.name, _stateObj)]]
        <div class="secondary">
          <template is="dom-if" if="[[showSecondary]]">
            <template is="dom-if" if="[[_equals(config.secondary_info, 'entity-id')]]">
              [[_stateObj.entity_id]]
            </template>
            <template is="dom-if" if="[[_equals(config.secondary_info, 'last-changed')]]">
              <ha-relative-time
                hass="[[hass]]"
                datetime="[[_stateObj.last_changed]]"
              ></ha-relative-time>
            </template>
          </template>
          <template is="dom-if" if="[[!showSecondary]">
            <slot name="secondary"></slot>
          </template>
        </div>
      </div>
    `}static get properties(){return{hass:Object,config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, config.entity)"},showSecondary:{type:Boolean,value:!0}}}_equals(a,b){return a===b}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}_computeName(name,stateObj){return name||Object(compute_state_name.a)(stateObj)}}customElements.define("hui-generic-entity-row",hui_generic_entity_row_HuiGenericEntityRow);class hui_climate_entity_row_HuiClimateEntityRow extends lit_element.a{static get properties(){return{hass:{},_config:{}}}setConfig(config){if(!config||!config.entity){throw new Error("Invalid Configuration: 'entity' required")}this._config=config}render(){if(!this.hass||!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
      >
        <ha-climate-state
          .hass=${this.hass}
          .stateObj=${this.hass.states[this._config.entity]}
        ></ha-climate-state>
      </hui-generic-entity-row>
    `}renderStyle(){return lit_element.c`
      <style>
        ha-climate-state {
          text-align: right;
        }
      </style>
    `}}customElements.define("hui-climate-entity-row",hui_climate_entity_row_HuiClimateEntityRow);var ha_cover_controls=__webpack_require__(176),ha_cover_tilt_controls=__webpack_require__(165),cover_model=__webpack_require__(84);class hui_cover_entity_row_HuiCoverEntityRow extends polymer_element.a{static get template(){return html_tag.a`
      ${this.styleTemplate}
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.coverControlTemplate}
      </hui-generic-entity-row>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        ha-cover-controls,
        ha-cover-tilt-controls {
          margin-right: -.57em;
        }
      </style>
    `}static get coverControlTemplate(){return html_tag.a`
      <template is="dom-if" if="[[!_entityObj.isTiltOnly]]">
        <ha-cover-controls hass="[[hass]]" state-obj="[[_stateObj]]"></ha-cover-controls>
      </template>
      <template is="dom-if" if="[[_entityObj.isTiltOnly]]">
        <ha-cover-tilt-controls hass="[[hass]]" state-obj="[[_stateObj]]"></ha-cover-tilt-controls>
      </template>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"},_entityObj:{type:Object,computed:"_computeEntityObj(hass, _stateObj)"}}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}_computeEntityObj(hass,stateObj){return stateObj?new cover_model.a(hass,stateObj):null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}}customElements.define("hui-cover-entity-row",hui_cover_entity_row_HuiCoverEntityRow);var ha_entity_toggle=__webpack_require__(129),compute_state_display=__webpack_require__(109),localize_mixin=__webpack_require__(10);class hui_group_entity_row_HuiGroupEntityRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.groupControlTemplate}
      </hui-generic-entity-row>
    `}static get groupControlTemplate(){return html_tag.a`
      <template is="dom-if" if="[[_canToggle]]">
        <ha-entity-toggle
          hass="[[hass]]"
          state-obj="[[_stateObj]]"
        ></ha-entity-toggle>
      </template>
      <template is="dom-if" if="[[!_canToggle]]">
        <div>
          [[_computeState(_stateObj)]]
        </div>
      </template>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"},_canToggle:{type:Boolean,computed:"_computeCanToggle(_stateObj.attributes.entity_id)"}}}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}_computeCanToggle(entityIds){return entityIds.some(entityId=>common_const.e.has(entityId.split(".",1)[0]))}_computeState(stateObj){return Object(compute_state_display.a)(this.localize,stateObj)}}customElements.define("hui-group-entity-row",hui_group_entity_row_HuiGroupEntityRow);var paper_input=__webpack_require__(61),iron_resizable_behavior=__webpack_require__(44),legacy_class=__webpack_require__(55),ha_slider=__webpack_require__(177);class hui_input_number_entity_row_HuiInputNumberEntityRow extends Object(legacy_class.b)([iron_resizable_behavior.a],polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
        id="input_number_card"
      >
        ${this.inputNumberControlTemplate}
      </hui-generic-entity-row>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        .flex {
          display: flex;
          align-items: center;
        }
        .state {
          min-width: 45px;
          text-align: center;
        }
        paper-input {
          text-align: right;
        }
      </style>
    `}static get inputNumberControlTemplate(){return html_tag.a`
      <div>
        <template is="dom-if" if="[[_equals(_stateObj.attributes.mode, 'slider')]]">
          <div class="flex">
            <ha-slider
              min="[[_min]]"
              max="[[_max]]"
              value="{{_value}}"
              step="[[_step]]"
              pin
              on-change="_selectedValueChanged"
              ignore-bar-touch
            ></ha-slider>
            <span class="state">[[_value]] [[_stateObj.attributes.unit_of_measurement]]</span>
          </div>
        </template>
        <template is="dom-if" if="[[_equals(_stateObj.attributes.mode, 'box')]]">
          <paper-input
            no-label-float
            auto-validate
            pattern="[0-9]+([\\.][0-9]+)?"
            step="[[_step]]"
            min="[[_min]]"
            max="[[_max]]"
            value="{{_value}}"
            type="number"
            on-change="_selectedValueChanged"
          ></paper-input>
        </template>
      </div>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)",observer:"_stateObjChanged"},_min:{type:Number,value:0},_max:{type:Number,value:100},_step:Number,_value:Number}}ready(){super.ready();if("function"===typeof ResizeObserver){const ro=new ResizeObserver(entries=>{entries.forEach(()=>{this._hiddenState()})});ro.observe(this.$.input_number_card)}else{this.addEventListener("iron-resize",this._hiddenState)}}_equals(a,b){return a===b}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_hiddenState(){if(!this.$||!this._stateObj||"slider"!==this._stateObj.attributes.mode)return;const width=this.$.input_number_card.offsetWidth,stateEl=this.shadowRoot.querySelector(".state");if(!stateEl)return;stateEl.hidden=350>=width}_stateObjChanged(stateObj,oldStateObj){if(!stateObj)return;this.setProperties({_min:+stateObj.attributes.min,_max:+stateObj.attributes.max,_step:+stateObj.attributes.step,_value:+stateObj.state});if(oldStateObj&&"slider"===stateObj.attributes.mode&&"slider"!==oldStateObj.attributes.mode){this._hiddenState()}}_selectedValueChanged(){if(this._value===+this._stateObj.state)return;this.hass.callService("input_number","set_value",{value:this._value,entity_id:this._stateObj.entity_id})}}customElements.define("hui-input-number-entity-row",hui_input_number_entity_row_HuiInputNumberEntityRow);var paper_dropdown_menu=__webpack_require__(123),paper_item=__webpack_require__(119),paper_listbox=__webpack_require__(122),events_mixin=__webpack_require__(16);class hui_input_select_entity_row_HuiInputSelectEntityRow extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <template is="dom-if" if="[[_stateObj]]">
        <state-badge state-obj="[[_stateObj]]"></state-badge>
        <paper-dropdown-menu on-click="_stopPropagation" selected-item-label="{{_selected}}" label="[[_computeName(_config.name, _stateObj)]]">
          <paper-listbox slot="dropdown-content" selected="[[_computeSelected(_stateObj)]]">
            <template is="dom-repeat" items="[[_stateObj.attributes.options]]">
              <paper-item>[[item]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </template>
      <template is="dom-if" if="[[!_stateObj]]">
        <div class="not-found">
          Entity not available: [[_config.entity]]
        </div>
      </template>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        :host {
          display: flex;
          align-items: center;
        }
        paper-dropdown-menu {
          margin-left: 16px;
          flex: 1;
        }
        .not-found {
          flex: 1;
          background-color: yellow;
          padding: 8px;
        }
      </style>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"},_selected:{type:String,observer:"_selectedChanged"}}}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}_computeName(name,stateObj){return name||Object(compute_state_name.a)(stateObj)}_computeSelected(stateObj){return stateObj.attributes.options.indexOf(stateObj.state)}_selectedChanged(option){if(""===option||option===this._stateObj.state){return}this.hass.callService("input_select","select_option",{option:option,entity_id:this._stateObj.entity_id})}_stopPropagation(ev){ev.stopPropagation()}}customElements.define("hui-input-select-entity-row",hui_input_select_entity_row_HuiInputSelectEntityRow);class hui_input_text_entity_row_HuiInputTextEntityRow extends polymer_element.a{static get template(){return html_tag.a`
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.inputTextControlTemplate}
      </hui-generic-entity-row>
    `}static get inputTextControlTemplate(){return html_tag.a`
      <paper-input
        no-label-float
        minlength="[[_stateObj.attributes.min]]"
        maxlength="[[_stateObj.attributes.max]]"
        value="{{_value}}"
        auto-validate="[[_stateObj.attributes.pattern]]"
        pattern="[[_stateObj.attributes.pattern]]"
        type="[[_stateObj.attributes.mode]]"
        on-change="_selectedValueChanged"
        placeholder="(empty value)"
      ></paper-input>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)",observer:"_stateObjChanged"},_value:String}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_stateObjChanged(stateObj){this._value=stateObj&&stateObj.state}_selectedValueChanged(){if(this._value===this._stateObj.state){return}this.hass.callService("input_text","set_value",{value:this._value,entity_id:this._stateObj.entity_id})}}customElements.define("hui-input-text-entity-row",hui_input_text_entity_row_HuiInputTextEntityRow);__webpack_require__(54);class hui_lock_entity_row_HuiLockEntityRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.lockControlTemplate}
      </hui-generic-entity-row>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        paper-button {
          color: var(--primary-color);
          font-weight: 500;
          margin-right: -.57em;
        }
      </style>
    `}static get lockControlTemplate(){return html_tag.a`
      <paper-button on-click="_callService">
        [[_computeButtonTitle(_stateObj.state)]]
      </paper-button>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"}}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_computeButtonTitle(state){return"locked"===state?this.localize("ui.card.lock.unlock"):this.localize("ui.card.lock.lock")}_callService(ev){ev.stopPropagation();const stateObj=this._stateObj;this.hass.callService("lock","locked"===stateObj.state?"unlock":"lock",{entity_id:stateObj.entity_id})}}customElements.define("hui-lock-entity-row",hui_lock_entity_row_HuiLockEntityRow);__webpack_require__(62);const SUPPORT_NEXT_TRACK=32,OFF_STATES=["off","idle"];class hui_media_player_entity_row_HuiMediaPlayerEntityRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
        show-secondary="false"
      >
        ${this.mediaPlayerControlTemplate}
      </hui-generic-entity-row>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        .controls {
          white-space: nowrap;
        }
      </style>
    `}static get mediaPlayerControlTemplate(){return html_tag.a`
      <template is="dom-if" if="[[!_isOff(_stateObj.state)]]">
        <div class="controls">
          <template is="dom-if" if="[[_computeControlIcon(_stateObj)]]">
            <paper-icon-button
              icon="[[_computeControlIcon(_stateObj)]]"
              on-click="_playPause"
            ></paper-icon-button>
          </template>
          <template is="dom-if" if="[[_supportsNext(_stateObj)]]">
            <paper-icon-button
              icon="hass:skip-next"
              on-click="_nextTrack"
            ></paper-icon-button>
          </template>
        </div>
      </template>
      <template is="dom-if" if="[[_isOff(_stateObj.state)]]">
        <div>[[_computeState(_stateObj.state)]]</div>
      </template>

      <div slot="secondary">
        [[_computeMediaTitle(_stateObj)]]
      </div>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"}}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_computeControlIcon(stateObj){if(!stateObj)return null;if("playing"!==stateObj.state){return stateObj.attributes.supported_features&16384?"hass:play":""}return stateObj.attributes.supported_features&1?"hass:pause":"hass:stop"}_computeMediaTitle(stateObj){if(!stateObj||this._isOff(stateObj.state))return null;switch(stateObj.attributes.media_content_type){case"music":return`${stateObj.attributes.media_artist}: ${stateObj.attributes.media_title}`;case"tvshow":return`${stateObj.attributes.media_series_title}: ${stateObj.attributes.media_title}`;default:return stateObj.attributes.media_title||stateObj.attributes.app_name||stateObj.state;}}_computeState(state){return this.localize(`state.media_player.${state}`)||this.localize(`state.default.${state}`)||state}_callService(service){this.hass.callService("media_player",service,{entity_id:this._config.entity})}_playPause(event){event.stopPropagation();this._callService("media_play_pause")}_nextTrack(event){event.stopPropagation();if(this._stateObj.attributes.supported_features&SUPPORT_NEXT_TRACK){this._callService("media_next_track")}}_isOff(state){return OFF_STATES.includes(state)}_supportsNext(stateObj){return stateObj&&stateObj.attributes.supported_features&SUPPORT_NEXT_TRACK}}customElements.define("hui-media-player-entity-row",hui_media_player_entity_row_HuiMediaPlayerEntityRow);class hui_scene_entity_row_HuiSceneEntityRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.sceneControlTemplate}
      </hui-generic-entity-row>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        paper-button {
          color: var(--primary-color);
          font-weight: 500;
          margin-right: -.57em;
        }
      </style>
    `}static get sceneControlTemplate(){return html_tag.a`
      <paper-button on-click="_callService">
        [[localize('ui.card.scene.activate')]]
      </paper-button>
    `}static get properties(){return{hass:Object,_config:Object}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_callService(ev){ev.stopPropagation();this.hass.callService("scene","turn_on",{entity_id:this._config.entity})}}customElements.define("hui-scene-entity-row",hui_scene_entity_row_HuiSceneEntityRow);class hui_script_entity_row_HuiScriptEntityRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.scriptControlTemplate}
      </hui-generic-entity-row>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        paper-button {
          color: var(--primary-color);
          font-weight: 500;
          margin-right: -.57em;
        }
      </style>
    `}static get scriptControlTemplate(){return html_tag.a`
      <template is="dom-if" if="[[_stateObj.attributes.can_cancel]]">
        <ha-entity-toggle state-obj="[[_stateObj]]" hass="[[hass]]"></ha-entity-toggle>
      </template>
      <template is="dom-if" if="[[!_stateObj.attributes.can_cancel]]">
        <paper-button on-click="_callService">[[localize('ui.card.script.execute')]]</paper-button>
      </template>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"}}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_callService(ev){ev.stopPropagation();this.hass.callService("script","turn_on",{entity_id:this._config.entity})}}customElements.define("hui-script-entity-row",hui_script_entity_row_HuiScriptEntityRow);class hui_text_entity_row_HuiTextEntityRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      ${this.styleTemplate}
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.textControlTemplate}
      </hui-generic-entity-row>
    `}static get styleTemplate(){return html_tag.a`
      <style>
        div {
          text-align: right;
        }
      </style>
    `}static get textControlTemplate(){return html_tag.a`
      <div>
        [[_computeState(_stateObj)]]
      </div>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"}}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}_computeState(stateObj){return stateObj&&Object(compute_state_display.a)(this.localize,stateObj)}}customElements.define("hui-text-entity-row",hui_text_entity_row_HuiTextEntityRow);var timer_time_remaining=__webpack_require__(117),seconds_to_duration=__webpack_require__(115);class hui_timer_entity_row_HuiTimerEntityRow extends polymer_element.a{static get template(){return html_tag.a`
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.timerControlTemplate}
      </hui-generic-entity-row>
    `}static get timerControlTemplate(){return html_tag.a`
      <div>
        [[_computeDisplay(_stateObj, _timeRemaining)]]
      </div>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)",observer:"_stateObjChanged"},_timeRemaining:Number}}disconnectedCallback(){super.disconnectedCallback();this._clearInterval()}_stateObjChanged(stateObj){if(stateObj){this._startInterval(stateObj)}else{this._clearInterval()}}_clearInterval(){if(this._updateRemaining){clearInterval(this._updateRemaining);this._updateRemaining=null}}_startInterval(stateObj){this._clearInterval();this._calculateRemaining(stateObj);if("active"===stateObj.state){this._updateRemaining=setInterval(()=>this._calculateRemaining(this._stateObj),1e3)}}_calculateRemaining(stateObj){this._timeRemaining=Object(timer_time_remaining.a)(stateObj)}_computeDisplay(stateObj,time){if(!stateObj)return null;if("idle"===stateObj.state||0===time)return stateObj.state;let display=Object(seconds_to_duration.a)(time);if("paused"===stateObj.state){display+=" (paused)"}return display}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}}customElements.define("hui-timer-entity-row",hui_timer_entity_row_HuiTimerEntityRow);class hui_toggle_entity_row_HuiToggleEntityRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <hui-generic-entity-row
        hass="[[hass]]"
        config="[[_config]]"
      >
        ${this.toggleControlTemplate}
      </hui-generic-entity-row>
    `}static get toggleControlTemplate(){return html_tag.a`
      <template is="dom-if" if="[[_canToggle]]">
        <ha-entity-toggle
          hass="[[hass]]"
          state-obj="[[_stateObj]]"
        ></ha-entity-toggle>
      </template>
      <template is="dom-if" if="[[!_canToggle]]">
        <div>
          [[_computeState(_stateObj)]]
        </div>
      </template>
    `}static get properties(){return{hass:Object,_config:Object,_stateObj:{type:Object,computed:"_computeStateObj(hass.states, _config.entity)"},_canToggle:{type:Boolean,computed:"_computeCanToggle(_stateObj.state)"}}}_computeStateObj(states,entityId){return states&&entityId in states?states[entityId]:null}_computeCanToggle(state){return"on"===state||"off"===state}_computeState(stateObj){return stateObj&&Object(compute_state_display.a)(this.localize,stateObj)}setConfig(config){if(!config||!config.entity){throw new Error("Entity not configured.")}this._config=config}}customElements.define("hui-toggle-entity-row",hui_toggle_entity_row_HuiToggleEntityRow);function callService(config,hass){const entityId=config.entity,[domain,service]=config.service.split(".",2),serviceData=Object.assign({},{entity_id:entityId},config.service_data);hass.callService(domain,service,serviceData)}class hui_call_service_row_HuiCallServiceRow extends lit_element.a{static get properties(){return{hass:{},_config:{}}}setConfig(config){if(!config||!config.name||!config.service){throw new Error("Error in card configuration.")}this._config=Object.assign({icon:"hass:remote",action_name:"Run"},config)}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <ha-icon .icon="${this._config.icon}"></ha-icon>
      <div class="flex">
        <div>
          ${this._config.name}
        </div>
        <paper-button
          @click="${this._callService}"
        >${this._config.action_name}</paper-button>
      </div>
    `}renderStyle(){return lit_element.c`
      <style>
        :host {
          display: flex;
          align-items: center;
        }
        ha-icon {
          padding: 8px;
          color: var(--paper-item-icon-color);
        }
        .flex {
          flex: 1;
          overflow: hidden;
          margin-left: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .flex div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        paper-button {
          color: var(--primary-color);
          font-weight: 500;
          margin-right: -.57em;
        }
      </style>
    `}_callService(){callService(this._config,this.hass)}}customElements.define("hui-call-service-row",hui_call_service_row_HuiCallServiceRow);class hui_divider_row_HuiDividerRow extends lit_element.a{static get properties(){return{_config:{}}}setConfig(config){if(!config){throw new Error("Error in card configuration.")}this._config=Object.assign({style:{height:"1px","background-color":"var(--secondary-text-color)"}},config)}render(){if(!this._config){return lit_element.c``}const el=document.createElement("div");Object.keys(this._config.style).forEach(prop=>{el.style.setProperty(prop,this._config.style[prop])});return lit_element.c`
      ${el}
    `}}customElements.define("hui-divider-row",hui_divider_row_HuiDividerRow);class hui_section_row_HuiSectionRow extends lit_element.a{static get properties(){return{_config:{}}}setConfig(config){if(!config){throw new Error("Error in card configuration.")}this._config=config}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <div class=divider></div>
      ${this._config.label?lit_element.c`<div class="label">${this._config.label}</div>`:lit_element.c``}
    `}renderStyle(){return lit_element.c`
      <style>
        .label {
          color: var(--primary-color);
          margin-left: 8px;
          margin-bottom: 16px;
          margin-top: 16px;
        }
        .divider {
          height: 1px;
          background-color: var(--secondary-text-color);
          opacity: 0.25;
          margin-left: -16px;
          margin-right: -16px;
          margin-top: 8px;
        }
      </style>
    `}}customElements.define("hui-section-row",hui_section_row_HuiSectionRow);class hui_weblink_row_HuiWeblinkRow extends lit_element.a{static get properties(){return{_config:{}}}setConfig(config){if(!config||!config.url){throw new Error("Invalid Configuration: 'url' required")}this._config=Object.assign({icon:"hass:link",name:config.url},config)}render(){if(!this._config){return lit_element.c``}return lit_element.c`
      ${this.renderStyle()}
      <a href="${this._config.url}">
        <ha-icon .icon="${this._config.icon}"></ha-icon>
        <div>${this._config.name}</div>
      </a>
    `}renderStyle(){return lit_element.c`
      <style>
        a {
          display: flex;
          align-items: center;
          color: var(--primary-color);
        }
        ha-icon {
          padding: 8px;
          color: var(--paper-item-icon-color);
        }
        div {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-left: 16px;
        }
      </style>
    `}}customElements.define("hui-weblink-row",hui_weblink_row_HuiWeblinkRow);var create_error_card_config=__webpack_require__(254);const CUSTOM_TYPE_PREFIX="custom:",SPECIAL_TYPES=new Set(["call-service","divider","section","weblink"]),DOMAIN_TO_ELEMENT_TYPE={automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",media_player:"media-player",lock:"lock",scene:"scene",script:"script",timer:"timer",switch:"toggle",vacuum:"toggle"};function _createElement(tag,config){const element=document.createElement(tag);try{if("setConfig"in element)element.setConfig(config)}catch(err){console.error(tag,err);return _createErrorElement(err.message,config)}return element}function _createErrorElement(error,config){return _createElement("hui-error-card",Object(create_error_card_config.a)(error,config))}function _hideErrorElement(element){element.style.display="None";return window.setTimeout(()=>{element.style.display=""},2e3)}function createRowElement(config){let tag;if(!config||"object"!==typeof config||!config.entity&&!config.type){return _createErrorElement("Invalid config given.",config)}const type=config.type||"default";if(SPECIAL_TYPES.has(type)){return _createElement(`hui-${type}-row`,config)}if(type.startsWith(CUSTOM_TYPE_PREFIX)){tag=type.substr(CUSTOM_TYPE_PREFIX.length);if(customElements.get(tag)){return _createElement(tag,config)}const element=_createErrorElement(`Custom element doesn't exist: ${tag}.`,config),timer=_hideErrorElement(element);customElements.whenDefined(tag).then(()=>{clearTimeout(timer);Object(fire_event.a)(element,"rebuild-view")});return element}const domain=config.entity.split(".",1)[0];tag=`hui-${DOMAIN_TO_ELEMENT_TYPE[domain]||"text"}-entity-row`;return _createElement(tag,config)}var apply_themes_on_element=__webpack_require__(136);class hui_entities_card_HuiEntitiesCard extends Object(lit_localize_mixin.a)(lit_element.a){set hass(hass){this._hass=hass;this.shadowRoot.querySelectorAll("#states > div > *").forEach(element=>{element.hass=hass});const entitiesToggle=this.shadowRoot.querySelector("hui-entities-toggle");if(entitiesToggle){entitiesToggle.hass=hass}}static get properties(){return{_config:{}}}getCardSize(){if(!this._config){return 0}return(this._config.title?1:0)+this._config.entities.length}setConfig(config){const entities=Object(process_config_entities.a)(config.entities);this._config=Object.assign({theme:"default"},config);this._configEntities=entities}updated(){if(this._hass&&this._config){Object(apply_themes_on_element.a)(this,this._hass.themes,this._config.theme)}}render(){if(!this._config||!this._hass){return lit_element.c``}const{show_header_toggle,title}=this._config;return lit_element.c`
      ${this.renderStyle()}
      <ha-card>
        ${!title&&!show_header_toggle?lit_element.c``:lit_element.c`
            <div class='header'>
              <div class="name">${title}</div>
              ${!1===show_header_toggle?lit_element.c``:lit_element.c`
                  <hui-entities-toggle
                    .hass="${this._hass}"
                    .entities="${this._configEntities.map(conf=>conf.entity)}"
                  ></hui-entities-toggle>`}
            </div>`}
        <div id="states">
          ${this._configEntities.map(entityConf=>this.renderEntity(entityConf))}
        </div>
      </ha-card>
    `}renderStyle(){return lit_element.c`
      <style>
        ha-card {
          padding: 16px;
        }
        #states {
          margin: -4px 0;
        }
        #states > * {
          margin: 8px 0;
        }
        #states > div > * {
          overflow: hidden;
        }
        .header {
          @apply --paper-font-headline;
          /* overwriting line-height +8 because entity-toggle can be 40px height,
            compensating this with reduced padding */
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 4px 0 12px;
          display: flex;
          justify-content: space-between;
        }
        .header .name {
          @apply --paper-font-common-nowrap;
        }
        .state-card-dialog {
          cursor: pointer;
        }
      </style>
    `}renderEntity(entityConf){const element=createRowElement(entityConf);if(this._hass){element.hass=this._hass}if(entityConf.entity&&!common_const.c.includes(Object(compute_domain.a)(entityConf.entity))){element.classList.add("state-card-dialog");element.addEventListener("click",()=>this._handleClick(entityConf))}return lit_element.c`<div>${element}</div>`}_handleClick(entityConf){const entityId=entityConf.entity;Object(fire_event.a)(this,"hass-more-info",{entityId})}}customElements.define("hui-entities-card",hui_entities_card_HuiEntitiesCard)},715:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),paper_button=__webpack_require__(54),hass_loading_screen=__webpack_require__(181),hass_error_screen=__webpack_require__(168),app_header_layout=__webpack_require__(155),app_header=__webpack_require__(154),waterfall=__webpack_require__(173),app_toolbar=__webpack_require__(121),app_route=__webpack_require__(90),paper_icon_button=__webpack_require__(62),paper_item=__webpack_require__(119),paper_listbox=__webpack_require__(122),paper_menu_button=__webpack_require__(127),paper_tab=__webpack_require__(140),paper_tabs=__webpack_require__(172);function scrollToTarget(element,target){var top=0,scroller=target,easingFn=function(t,b,c,d){t/=d;return-c*t*(t-2)+b},animationId=Math.random(),duration=200,startTime=Date.now(),currentScrollTop=scroller.scrollTop;element._currentAnimationId=animationId;(function updateFrame(){var now=Date.now(),elapsedTime=now-startTime;if(elapsedTime>duration){scroller.scrollTop=top}else if(element._currentAnimationId===animationId){scroller.scrollTop=easingFn(elapsedTime,currentScrollTop,top-currentScrollTop,duration);requestAnimationFrame(updateFrame.bind(element))}}).call(element)}var events_mixin=__webpack_require__(16),navigate_mixin=__webpack_require__(82),ha_app_layout=__webpack_require__(159),ha_start_voice_button=__webpack_require__(167),ha_icon=__webpack_require__(88),load_resource=__webpack_require__(83),haws_es=__webpack_require__(22);const fetchNotifications=conn=>conn.sendMessagePromise({type:"persistent_notification/get"}),subscribeUpdates=(conn,store)=>conn.subscribeEvents(()=>fetchNotifications(conn).then(ntf=>store.setState(ntf,!0)),"persistent_notifications_updated"),subscribeNotifications=(conn,onChange)=>Object(haws_es.d)("_ntf",fetchNotifications,subscribeUpdates,conn,onChange);var compute_domain=__webpack_require__(67),ha_card=__webpack_require__(108);class hui_notification_item_template_HuiNotificationItemTemplate extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      .contents {
        padding: 16px;
      }

      ha-card .header {
        @apply --paper-font-headline;
        color: var(--primary-text-color);
        padding: 16px 16px 0;
      }

      .actions {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
      }

      ::slotted(.primary) {
        color: var(--primary-color);
      }
    </style>
    <ha-card>
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="contents">
        <slot></slot>
      </div>
      <div class="actions">
        <slot name="actions"></slot>
      </div>
    </ha-card>
    `}}customElements.define("hui-notification-item-template",hui_notification_item_template_HuiNotificationItemTemplate);var localize_mixin=__webpack_require__(10);class hui_configurator_notification_item_HuiConfiguratorNotificationItem extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <hui-notification-item-template>
      <span slot="header">[[localize('domain.configurator')]]</span>

      <div>[[_getMessage(notification)]]</div>

      <paper-button
        slot="actions"
        class="primary"
        on-click="_handleClick"
      >[[_localizeState(notification.state)]]</paper-button>
    </hui-notification-item-template>
    `}static get properties(){return{hass:Object,notification:Object}}_handleClick(){this.fire("hass-more-info",{entityId:this.notification.entity_id})}_localizeState(state){return this.localize(`state.configurator.${state}`)}_getMessage(notification){const friendlyName=notification.attributes.friendly_name;return this.localize("ui.notification_drawer.click_to_configure","entity",friendlyName)}}customElements.define("hui-configurator-notification-item",hui_configurator_notification_item_HuiConfiguratorNotificationItem);var paper_tooltip=__webpack_require__(239),ha_relative_time=__webpack_require__(160),ha_markdown=__webpack_require__(126);class hui_persistent_notification_item_HuiPersistentNotificationItem extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      .time {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
      }
      ha-relative-time {
        color: var(--secondary-text-color);
      }
    </style>
    <hui-notification-item-template>
      <span slot="header">[[_computeTitle(notification)]]</span>

      <ha-markdown content="[[notification.message]]"></ha-markdown>

      <div class="time">
        <span>
          <ha-relative-time
            hass="[[hass]]"
            datetime="[[notification.created_at]]"
          ></ha-relative-time>
          <paper-tooltip>[[_computeTooltip(hass, notification)]]</paper-tooltip>
        </span>
      </div>

      <paper-button
        slot="actions"
        class="primary"
        on-click="_handleDismiss"
      >[[localize('ui.card.persistent_notification.dismiss')]]</paper-button>
    </hui-notification-item-template>
    `}static get properties(){return{hass:Object,notification:Object}}_handleDismiss(){this.hass.callService("persistent_notification","dismiss",{notification_id:this.notification.notification_id})}_computeTitle(notification){return notification.title||notification.notification_id}_computeTooltip(hass,notification){if(!hass||!notification)return null;const d=new Date(notification.created_at);return d.toLocaleDateString(hass.language,{year:"numeric",month:"short",day:"numeric",minute:"numeric",hour:"numeric"})}}customElements.define("hui-persistent_notification-notification-item",hui_persistent_notification_item_HuiPersistentNotificationItem);class hui_notification_item_HuiNotificationItem extends polymer_element.a{static get properties(){return{hass:Object,notification:{type:Object,observer:"_stateChanged"}}}_stateChanged(notification){if(this.lastChild){this.removeChild(this.lastChild)}if(!notification)return;const domain=notification.entity_id?Object(compute_domain.a)(notification.entity_id):"persistent_notification",tag=`hui-${domain}-notification-item`,el=document.createElement(tag);el.hass=this.hass;el.notification=notification;this.appendChild(el)}}customElements.define("hui-notification-item",hui_notification_item_HuiNotificationItem);class hui_notification_drawer_HuiNotificationDrawer extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="paper-material-styles">
      :host {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }

      :host([hidden]) {
        display: none;
      }

      .container {
        align-items: stretch;
        background: var(--sidebar-background-color, var(--primary-background-color));
        bottom: 0;
        box-shadow: var(--paper-material-elevation-1_-_box-shadow);
        display: flex;
        flex-direction: column;
        overflow-y: hidden;
        position: fixed;
        top: 0;
        transition: right .2s ease-in;
        width: 500px;
        z-index: 10;
      }

      :host(:not(narrow)) .container {
        right: -500px;
      }

      :host([narrow]) .container {
        right: -100%;
        width: 100%;
      }

      :host(.open) .container,
      :host(.open[narrow]) .container {
        right: 0;
      }

      app-toolbar {
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
        min-height: 64px;
        width: calc(100% - 32px);
        z-index: 11;
      }

      .overlay {
        display: none;
      }

      :host(.open) .overlay {
        bottom: 0;
        display: block;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 5;
      }

      .notifications {
        overflow-y: auto;
        padding-top: 16px;
      }

      .notification {
        padding: 0 16px 16px;
      }

      .empty {
        padding: 16px;
        text-align: center;
      }
    </style>
    <div class="overlay" on-click="_closeDrawer"></div>
    <div class="container">
      <app-toolbar>
        <div main-title>[[localize('ui.notification_drawer.title')]]</div>
        <paper-icon-button icon="hass:chevron-right" on-click="_closeDrawer"></paper-icon-button>
      </app-toolbar>
      <div class="notifications">
        <template is="dom-if" if="[[!_empty(notifications)]]">
          <dom-repeat items="[[notifications]]">
            <template>
              <div class="notification">
                <hui-notification-item hass="[[hass]]" notification="[[item]]"></hui-notification-item>
              </div>
            </template>
          </dom-repeat>
        </template>
        <template is="dom-if" if="[[_empty(notifications)]]">
          <div class="empty">[[localize('ui.notification_drawer.empty')]]<div>
        </template>
      </div>
    </div>
    `}static get properties(){return{hass:Object,narrow:{type:Boolean,reflectToAttribute:!0},open:{type:Boolean,notify:!0,observer:"_openChanged"},hidden:{type:Boolean,value:!0,reflectToAttribute:!0},notifications:{type:Array,value:[]}}}_closeDrawer(ev){ev.stopPropagation();this.open=!1}_empty(notifications){return 0===notifications.length}_openChanged(open){clearTimeout(this._openTimer);if(open){this.hidden=!1;this._openTimer=setTimeout(()=>{this.classList.add("open")},50)}else{this.classList.remove("open");this._openTimer=setTimeout(()=>{this.hidden=!0},250)}}}customElements.define("hui-notification-drawer",hui_notification_drawer_HuiNotificationDrawer);class hui_notifications_button_HuiNotificationsButton extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      :host {
        position: relative;
      }

      .indicator {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--accent-color);
        pointer-events: none;
      }

      .indicator[hidden] {
        display: none;
      }
    </style>
    <paper-icon-button icon="hass:bell" on-click="_clicked"></paper-icon-button>
    <span class="indicator" hidden$="[[!_hasNotifications(notifications)]]"></span>
    `}static get properties(){return{notificationsOpen:{type:Boolean,notify:!0},notifications:{type:Array,value:[]}}}_clicked(){this.notificationsOpen=!0}_hasNotifications(notifications){return 0<notifications.length}}customElements.define("hui-notifications-button",hui_notifications_button_HuiNotificationsButton);const EXCLUDED_DOMAINS=["zone"];function computeUsedEntities(config){const entities=new Set;function addEntityId(entity){if("string"===typeof entity){entities.add(entity)}else if(entity.entity){entities.add(entity.entity)}}function addEntities(obj){if(obj.entity)addEntityId(obj.entity);if(obj.entities)obj.entities.forEach(entity=>addEntityId(entity));if(obj.card)addEntities(obj.card);if(obj.cards)obj.cards.forEach(card=>addEntities(card));if(obj.badges)obj.badges.forEach(badge=>addEntityId(badge))}config.views.forEach(view=>addEntities(view));return entities}function computeUnusedEntities(hass,config){const usedEntities=computeUsedEntities(config);return Object.keys(hass.states).filter(entity=>!usedEntities.has(entity)&&!(config.excluded_entities&&config.excluded_entities.includes(entity))&&!EXCLUDED_DOMAINS.includes(entity.split(".",1)[0])).sort()}var create_card_element=__webpack_require__(295),hui_entities_card=__webpack_require__(415);class hui_unused_entities_HuiUnusedEntities extends polymer_element.a{static get template(){return html_tag.a`
      <style>
        #root {
          max-width: 600px;
          margin: 0 auto;
          padding: 8px 0;
        }
      </style>
      <div id="root"></div>
    `}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},config:{type:Object,observer:"_configChanged"}}}_configChanged(config){const root=this.$.root;if(root.lastChild)root.removeChild(root.lastChild);const entities=computeUnusedEntities(this.hass,config).map(entity=>({entity,secondary_info:"entity-id"})),element=Object(create_card_element.a)({type:"entities",title:"Unused entities",entities,show_header_toggle:!1});element.hass=this.hass;root.appendChild(element)}_hassChanged(hass){const root=this.$.root;if(!root.lastChild)return;root.lastChild.hass=hass}}customElements.define("hui-unused-entities",hui_unused_entities_HuiUnusedEntities);var ha_state_label_badge=__webpack_require__(162),lit_element=__webpack_require__(196),fire_event=__webpack_require__(75);let registeredDialog=!1;class hui_card_options_HuiCardOptions extends lit_element.a{static get properties(){return{hass:{}}}connectedCallback(){super.connectedCallback();if(!registeredDialog){registeredDialog=!0;Object(fire_event.a)(this,"register-dialog",{dialogShowEvent:"show-edit-card",dialogTag:"hui-dialog-edit-card",dialogImport:()=>Promise.all([__webpack_require__.e(68),__webpack_require__.e(59)]).then(__webpack_require__.bind(null,717))})}}render(){return lit_element.c`
    <style>
      div {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        background: var(--paper-card-background-color, white);
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
        text-align: right;
      }
      paper-button {
        color: var(--primary-color);
        font-weight: 500;
      }
    </style>
    <slot></slot>
    <div>
      <paper-button
        @click="${this._editCard}"
      >EDIT</paper-button>
    </div>
    `}_editCard(){Object(fire_event.a)(this,"show-edit-card",{hass:this.hass,cardId:this.cardId,reloadLovelace:()=>Object(fire_event.a)(this,"config-refresh")})}}customElements.define("hui-card-options",hui_card_options_HuiCardOptions);var apply_themes_on_element=__webpack_require__(136),compute_card_size=__webpack_require__(272);class hui_view_HUIView extends polymer_element.a{static get template(){return html_tag.a`
      <style>
      :host {
        display: block;
        padding: 4px 4px 0;
        transform: translateZ(0);
        position: relative;
      }

      #badges {
        margin: 8px 16px;
        font-size: 85%;
        text-align: center;
      }

      #columns {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }

      .column {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 500px;
        overflow-x: hidden;
      }

      .column > * {
        display: block;
        margin: 4px 4px 8px;
      }

      @media (max-width: 500px) {
        :host {
          padding-left: 0;
          padding-right: 0;
        }

        .column > * {
          margin-left: 0;
          margin-right: 0;
        }
      }

      @media (max-width: 599px) {
        .column {
          max-width: 600px;
        }
      }
      </style>
      <div id="badges"></div>
      <div id="columns"></div>
    `}static get properties(){return{hass:{type:Object,observer:"_hassChanged"},config:Object,columns:Number,editMode:Boolean}}static get observers(){return["_createBadges(config)","_createCards(config, columns, editMode)"]}constructor(){super();this._cards=[];this._badges=[]}_createBadges(config){const root=this.$.badges;while(root.lastChild){root.removeChild(root.lastChild)}if(!config||!config.badges||!Array.isArray(config.badges)){root.style.display="none";this._badges=[];return}const elements=[];for(const entityId of config.badges){if(!(entityId in this.hass.states))continue;const element=document.createElement("ha-state-label-badge");element.setProperties({hass:this.hass,state:this.hass.states[entityId]});elements.push({element,entityId});root.appendChild(element)}this._badges=elements;root.style.display=0<elements.length?"block":"none"}_createCards(config){const root=this.$.columns;while(root.lastChild){root.removeChild(root.lastChild)}if(!config||!config.cards||!Array.isArray(config.cards)){this._cards=[];return}const elements=[],elementsToAppend=[];for(const cardConfig of config.cards){const element=Object(create_card_element.a)(cardConfig);element.hass=this.hass;elements.push(element);if(!this.editMode){elementsToAppend.push(element);continue}const wrapper=document.createElement("hui-card-options");wrapper.hass=this.hass;wrapper.cardId=cardConfig.id;wrapper.editMode=this.editMode;wrapper.appendChild(element);elementsToAppend.push(wrapper)}let columns=[];const columnEntityCount=[];for(let i=0;i<this.columns;i++){columns.push([]);columnEntityCount.push(0)}function getColumnIndex(size){let minIndex=0;for(let i=0;i<columnEntityCount.length;i++){if(5>columnEntityCount[i]){minIndex=i;break}if(columnEntityCount[i]<columnEntityCount[minIndex]){minIndex=i}}columnEntityCount[minIndex]+=size;return minIndex}elements.forEach((el,index)=>{const cardSize=Object(compute_card_size.a)(el);columns[getColumnIndex(cardSize)].push(elementsToAppend[index])});columns=columns.filter(val=>0<val.length);columns.forEach(column=>{const columnEl=document.createElement("div");columnEl.classList.add("column");column.forEach(el=>columnEl.appendChild(el));root.appendChild(columnEl)});this._cards=elements;if("theme"in config){Object(apply_themes_on_element.a)(root,this.hass.themes,config.theme)}}_hassChanged(hass){this._badges.forEach(badge=>{const{element,entityId}=badge;element.setProperties({hass,state:hass.states[entityId]})});this._cards.forEach(element=>{element.hass=hass})}}customElements.define("hui-view",hui_view_HUIView);var debounce=__webpack_require__(361);function computeNotifications(states){return Object.keys(states).filter(entityId=>"configurator"===Object(compute_domain.a)(entityId)).map(entityId=>states[entityId])}const CSS_CACHE={},JS_CACHE={};class hui_root_HUIRoot extends Object(navigate_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include='ha-style'>
      :host {
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
      }

      ha-app-layout {
        min-height: 100%;
      }
      paper-tabs {
        margin-left: 12px;
        --paper-tabs-selection-bar-color: var(--text-primary-color, #FFF);
        text-transform: uppercase;
      }
      app-toolbar a {
        color: var(--text-primary-color, white);
      }
      #view {
        min-height: calc(100vh - 112px);
        /**
         * Since we only set min-height, if child nodes need percentage
         * heights they must use absolute positioning so we need relative
         * positioning here.
         *
         * https://www.w3.org/TR/CSS2/visudet.html#the-height-property
         */
        position: relative;
      }
      #view.tabs-hidden {
        min-height: calc(100vh - 64px);
      }
      paper-item {
        cursor: pointer;
      }
    </style>
    <app-route route="[[route]]" pattern="/:view" data="{{routeData}}"></app-route>
    <hui-notification-drawer
      hass="[[hass]]"
      notifications="[[_notifications]]"
      open="{{notificationsOpen}}"
      narrow="[[narrow]]"
    ></hui-notification-drawer>
    <ha-app-layout id="layout">
      <app-header slot="header" effects="waterfall" fixed condenses>
        <template is='dom-if' if="[[!_editMode]]">
          <app-toolbar>
            <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
            <div main-title>[[_computeTitle(config)]]</div>
            <hui-notifications-button
              hass="[[hass]]"
              notifications-open="{{notificationsOpen}}"
              notifications="[[_notifications]]"
            ></hui-notifications-button>
            <ha-start-voice-button hass="[[hass]]"></ha-start-voice-button>
            <paper-menu-button
              no-animations
              horizontal-align="right"
              horizontal-offset="-5"
            >
              <paper-icon-button icon="hass:dots-vertical" slot="dropdown-trigger"></paper-icon-button>
              <paper-listbox on-iron-select="_deselect" slot="dropdown-content">
                <paper-item on-click="_handleRefresh">Refresh</paper-item>
                <paper-item on-click="_handleUnusedEntities">Unused entities</paper-item>
                <paper-item on-click="_editModeEnable">Configure UI (alpha)</paper-item>
                <paper-item on-click="_handleHelp">Help</paper-item>
              </paper-listbox>
            </paper-menu-button>
          </app-toolbar>
        </template>
        <template is='dom-if' if="[[_editMode]]">
          <app-toolbar>
            <paper-icon-button
              icon='hass:close'
              on-click='_editModeDisable'
            ></paper-icon-button>
            <div main-title>Edit UI</div>
          </app-toolbar>
        </template>

        <div sticky hidden$="[[_computeTabsHidden(config.views)]]">
          <paper-tabs scrollable selected="[[_curView]]" on-iron-activate="_handleViewSelected">
            <template is="dom-repeat" items="[[config.views]]">
              <paper-tab>
                <template is="dom-if" if="[[item.icon]]">
                  <ha-icon title$="[[item.title]]" icon="[[item.icon]]"></ha-icon>
                </template>
                <template is="dom-if" if="[[!item.icon]]">
                  [[_computeTabTitle(item.title)]]
                </template>
              </paper-tab>
            </template>
          </paper-tabs>
        </div>
      </app-header>

      <div id='view' on-rebuild-view='_debouncedConfigChanged'></div>
    </app-header-layout>
    `}static get properties(){return{narrow:Boolean,showMenu:Boolean,hass:{type:Object,observer:"_hassChanged"},config:{type:Object,observer:"_configChanged"},columns:{type:Number,observer:"_columnsChanged"},_curView:{type:Number,value:0},route:{type:Object,observer:"_routeChanged"},notificationsOpen:{type:Boolean,value:!1},_persistentNotifications:{type:Array,value:[]},_notifications:{type:Array,computed:"_updateNotifications(hass.states, _persistentNotifications)"},_editMode:{type:Boolean,value:!1,observer:"_editModeChanged"},routeData:Object}}constructor(){super();this._debouncedConfigChanged=Object(debounce.a)(()=>this._selectView(this._curView),100)}connectedCallback(){super.connectedCallback();this._unsubNotifications=subscribeNotifications(this.hass.connection,notifications=>{this._persistentNotifications=notifications})}disconnectedCallback(){super.disconnectedCallback();if("function"===typeof this._unsubNotifications){this._unsubNotifications()}}_updateNotifications(states,persistent){if(!states)return persistent;const configurator=computeNotifications(states);return persistent.concat(configurator)}_routeChanged(route){const views=this.config&&this.config.views;if(""===route.path&&"/lovelace"===route.prefix&&views){this.navigate(`/lovelace/${views[0].id||0}`,!0)}else if(this.routeData.view){const view=this.routeData.view;let index=0;for(let i=0;i<views.length;i++){if(views[i].id===view||i===parseInt(view)){index=i;break}}if(index!==this._curView)this._selectView(index)}}_computeViewId(id,index){return id||index}_computeTitle(config){return config.title||"Home Assistant"}_computeTabsHidden(views){return 2>views.length}_computeTabTitle(title){return title||"Unnamed view"}_handleRefresh(){this.fire("config-refresh")}_handleUnusedEntities(){this._selectView("unused")}_deselect(ev){ev.target.selected=null}_handleHelp(){window.open("https://www.home-assistant.io/lovelace/","_blank")}_editModeEnable(){this._editMode=!0}_editModeDisable(){this._editMode=!1}_editModeChanged(){this._selectView(this._curView)}_handleViewSelected(ev){const index=ev.detail.selected;if(index!==this._curView){const id=this.config.views[index].id||index;this.navigate(`/lovelace/${id}`)}scrollToTarget(this,this.$.layout.header.scrollTarget)}_selectView(viewIndex){this._curView=viewIndex;const root=this.$.view;if(root.lastChild){root.removeChild(root.lastChild)}let view,background=this.config.background||"";if("unused"===viewIndex){view=document.createElement("hui-unused-entities");view.config=this.config}else{const viewConfig=this.config.views[this._curView];if(viewConfig.panel){view=Object(create_card_element.a)(viewConfig.cards[0]);view.isPanel=!0;view.editMode=this._editMode}else{view=document.createElement("hui-view");view.config=viewConfig;view.columns=this.columns;view.editMode=this._editMode}if(viewConfig.background)background=viewConfig.background}this.$.view.style.background=background;view.hass=this.hass;root.appendChild(view)}_hassChanged(hass){if(!this.$.view.lastChild)return;this.$.view.lastChild.hass=hass}_configChanged(config){this._loadResources(config.resources||[]);this._selectView(this._curView);this.$.view.classList.toggle("tabs-hidden",2>config.views.length)}_columnsChanged(columns){if(!this.$.view.lastChild)return;this.$.view.lastChild.columns=columns}_loadResources(resources){resources.forEach(resource=>{switch(resource.type){case"css":if(resource.url in CSS_CACHE)break;CSS_CACHE[resource.url]=Object(load_resource.a)(resource.url);break;case"js":if(resource.url in JS_CACHE)break;JS_CACHE[resource.url]=Object(load_resource.b)(resource.url);break;case"module":Object(load_resource.c)(resource.url);break;case"html":Promise.resolve().then(__webpack_require__.bind(null,270)).then(({importHref})=>importHref(resource.url));break;default:console.warn("Unknown resource type specified: ${resource.type}");}})}}customElements.define("hui-root",hui_root_HUIRoot);class ha_panel_lovelace_Lovelace extends polymer_element.a{static get template(){return html_tag.a`
      <style>
        paper-button {
          color: var(--primary-color);
          font-weight: 500;
        }
      </style>
      <template is='dom-if' if='[[_equal(_state, "loaded")]]' restamp>
        <hui-root
          narrow="[[narrow]]"
          show-menu="[[showMenu]]"
          hass='[[hass]]'
          route="[[route]]"
          config='[[_config]]'
          columns='[[_columns]]'
          on-config-refresh='_fetchConfig'
        ></hui-root>
      </template>
      <template is='dom-if' if='[[_equal(_state, "loading")]]' restamp>
        <hass-loading-screen
          narrow="[[narrow]]"
          show-menu="[[showMenu]]"
        ></hass-loading-screen>
      </template>
      <template is='dom-if' if='[[_equal(_state, "error")]]' restamp>
        <hass-error-screen
          title='Lovelace'
          error='[[_errorMsg]]'
          narrow="[[narrow]]"
          show-menu="[[showMenu]]"
        >
          <paper-button on-click="_fetchConfig">Reload ui-lovelace.yaml</paper-button>
        </hass-error-screen>
      </template>
    `}static get properties(){return{hass:Object,narrow:{type:Boolean,value:!1},showMenu:{type:Boolean,value:!1},route:Object,_columns:{type:Number,value:1},_state:{type:String,value:"loading"},_errorMsg:String,_config:{type:Object,value:null}}}static get observers(){return["_updateColumns(narrow, showMenu)"]}ready(){this._fetchConfig();this._updateColumns=this._updateColumns.bind(this);this.mqls=[300,600,900,1200].map(width=>{const mql=matchMedia(`(min-width: ${width}px)`);mql.addListener(this._updateColumns);return mql});this._updateColumns();super.ready()}_updateColumns(){const matchColumns=this.mqls.reduce((cols,mql)=>cols+mql.matches,0);this._columns=Math.max(1,matchColumns-(!this.narrow&&this.showMenu))}async _fetchConfig(){try{const conf=await this.hass.callWS({type:"lovelace/config"});this.setProperties({_config:conf,_state:"loaded"})}catch(err){this.setProperties({_state:"error",_errorMsg:err.message})}}_equal(a,b){return a===b}}customElements.define("ha-panel-lovelace",ha_panel_lovelace_Lovelace)},83:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return loadCSS});__webpack_require__.d(__webpack_exports__,"b",function(){return loadJS});__webpack_require__.d(__webpack_exports__,"c",function(){return loadModule});function _load(tag,url,type){return new Promise(function(resolve,reject){const element=document.createElement(tag);let attr="src",parent="body";element.onload=()=>resolve(url);element.onerror=()=>reject(url);switch(tag){case"script":element.async=!0;if(type){element.type=type}break;case"link":element.type="text/css";element.rel="stylesheet";attr="href";parent="head";}element[attr]=url;document[parent].appendChild(element)})}const loadCSS=url=>_load("link",url),loadJS=url=>_load("script",url),loadModule=url=>_load("script",url,"module")}}]);
//# sourceMappingURL=2716aa0fbd89b9909457.chunk.js.map