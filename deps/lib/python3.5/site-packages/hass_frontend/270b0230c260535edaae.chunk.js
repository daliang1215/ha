(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{198:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
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
`,is:"paper-item-body"})},202:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_resources_ha_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(120);class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__.a`
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
`}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},isWide:{type:Boolean,value:!1}}}computeContentClasses(isWide){var classes="content ";return isWide?classes:classes+"narrow"}computeClasses(isWide){return"together layout "+(isWide?"horizontal":"vertical narrow")}}customElements.define("ha-config-section",HaConfigSection)},211:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(155),_polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(154),_polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(121),_polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(62),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4);class HassSubpage extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__.a`
    <style include="ha-style"></style>
    <app-header-layout has-scrolling-region="">
      <app-header slot="header" fixed="">
        <app-toolbar>
          <paper-icon-button icon="hass:arrow-left" on-click="_backTapped"></paper-icon-button>
          <div main-title="">[[header]]</div>
          <slot name="toolbar-icon"></slot>
        </app-toolbar>
      </app-header>

      <slot></slot>
    </app-header-layout>
`}static get properties(){return{header:String}}_backTapped(){history.back()}}customElements.define("hass-subpage",HassSubpage)},218:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(42),_paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(128),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(98);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__.a]})},239:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__.a)({_template:_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__.a`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:!1,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:!1},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:!1}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){var parentNode=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).parentNode,ownerRoot=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).getOwnerRoot(),target;if(this.for){target=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(ownerRoot).querySelector("#"+this.for)}else{target=parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}return target},attached:function(){this._findTarget()},detached:function(){if(!this.manualMode)this._removeListeners()},playAnimation:function(type){if("entry"===type){this.show()}else if("exit"===type){this.hide()}},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(this._showing)return;if(""===Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).textContent.trim()){for(var allChildrenEmpty=!0,effectiveChildren=Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__.b)(this).getEffectiveChildNodes(),i=0;i<effectiveChildren.length;i++){if(""!==effectiveChildren[i].textContent.trim()){allChildrenEmpty=!1;break}}if(allChildrenEmpty){return}}this._showing=!0;this.$.tooltip.classList.remove("hidden");this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.updatePosition();this._animationPlaying=!0;this.$.tooltip.classList.add(this._getAnimationType("entry"))},hide:function(){if(!this._showing){return}if(this._animationPlaying){this._showing=!1;this._cancelAnimation();return}else{this._onAnimationFinish()}this._showing=!1;this._animationPlaying=!0},updatePosition:function(){var _Mathmax=Math.max;if(!this._target||!this.offsetParent)return;var offset=this.offset;if(14!=this.marginTop&&14==this.offset)offset=this.marginTop;var parentRect=this.offsetParent.getBoundingClientRect(),targetRect=this._target.getBoundingClientRect(),thisRect=this.getBoundingClientRect(),horizontalCenterOffset=(targetRect.width-thisRect.width)/2,verticalCenterOffset=(targetRect.height-thisRect.height)/2,targetLeft=targetRect.left-parentRect.left,targetTop=targetRect.top-parentRect.top,tooltipLeft,tooltipTop;switch(this.position){case"top":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-thisRect.height-offset;break;case"bottom":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case"left":tooltipLeft=targetLeft-thisRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case"right":tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break;}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+thisRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=_Mathmax(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+thisRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=_Mathmax(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}},_addListeners:function(){if(this._target){this.listen(this._target,"mouseenter","show");this.listen(this._target,"focus","show");this.listen(this._target,"mouseleave","hide");this.listen(this._target,"blur","hide");this.listen(this._target,"tap","hide")}this.listen(this.$.tooltip,"animationend","_onAnimationEnd");this.listen(this,"mouseenter","hide")},_findTarget:function(){if(!this.manualMode)this._removeListeners();this._target=this.target;if(!this.manualMode)this._addListeners()},_delayChange:function(newValue){if(500!==newValue){this.updateStyles({"--paper-tooltip-delay-in":newValue+"ms"})}},_manualModeChanged:function(){if(this.manualMode)this._removeListeners();else this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){if(this._showing){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add(this._getAnimationType("exit"))}},_onAnimationEnd:function(){this._animationPlaying=!1;if(!this._showing){this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.add("hidden")}},_getAnimationType:function(type){if("entry"===type&&""!==this.animationEntry){return this.animationEntry}if("exit"===type&&""!==this.animationExit){return this.animationExit}if(this.animationConfig[type]&&"string"===typeof this.animationConfig[type][0].name){if(this.animationConfig[type][0].timing&&this.animationConfig[type][0].timing.delay&&0!==this.animationConfig[type][0].timing.delay){var timingDelay=this.animationConfig[type][0].timing.delay;if("entry"===type){this.updateStyles({"--paper-tooltip-delay-in":timingDelay+"ms"})}else if("exit"===type){this.updateStyles({"--paper-tooltip-delay-out":timingDelay+"ms"})}}return this.animationConfig[type][0].name}},_removeListeners:function(){if(this._target){this.unlisten(this._target,"mouseenter","show");this.unlisten(this._target,"focus","show");this.unlisten(this._target,"mouseleave","hide");this.unlisten(this._target,"blur","hide");this.unlisten(this._target,"tap","hide")}this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd");this.unlisten(this,"mouseenter","hide")}})},683:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_route=__webpack_require__(90),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),debounce=__webpack_require__(14),utils_async=__webpack_require__(8),iron_flex_layout_classes=__webpack_require__(30),paper_tooltip=__webpack_require__(239),paper_button=__webpack_require__(54),paper_card=__webpack_require__(153),iron_icon=__webpack_require__(76),paper_item=__webpack_require__(119),paper_item_body=__webpack_require__(198),ha_icon=__webpack_require__(88),state_icon=__webpack_require__(111);class ha_state_icon_HaStateIcon extends polymer_element.a{static get template(){return html_tag.a`<ha-icon icon="[[computeIcon(stateObj)]]"></ha-icon>`}static get properties(){return{stateObj:{type:Object}}}computeIcon(stateObj){return Object(state_icon.a)(stateObj)}}customElements.define("ha-state-icon",ha_state_icon_HaStateIcon);var hass_subpage=__webpack_require__(211),ha_style=__webpack_require__(120),ha_config_section=__webpack_require__(202),events_mixin=__webpack_require__(16),localize_mixin=__webpack_require__(10),compute_state_name=__webpack_require__(27);let registeredDialog=!1;class ha_config_entries_dashboard_HaConfigManagerDashboard extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
  <style include="iron-flex ha-style">
    paper-button {
      color: var(--primary-color);
      font-weight: 500;
      top: 3px;
      margin-right: -.57em;
    }
    paper-card:last-child {
      margin-top: 12px;
    }
    .config-entry-row {
      display: flex;
      padding: 0 16px;
    }
    ha-state-icon {
      cursor: pointer;
    }
    .configured a {
      color: var(--primary-text-color);
      text-decoration: none;
    }
  </style>

  <hass-subpage header="[[localize('ui.panel.config.integrations.caption')]]">
    <template is="dom-if" if="[[progress.length]]">
      <ha-config-section>
        <span slot="header">[[localize('ui.panel.config.integrations.discovered')]]</span>
        <paper-card>
          <template is="dom-repeat" items="[[progress]]">
            <div class="config-entry-row">
              <paper-item-body>
                [[_computeIntegrationTitle(localize, item.handler)]]
              </paper-item-body>
              <paper-button
                on-click="_continueFlow"
              >[[localize('ui.panel.config.integrations.configure')]]</paper-button>
            </div>
          </template>
        </paper-card>
      </ha-config-section>
    </template>

    <ha-config-section class='configured'>
      <span slot="header">[[localize('ui.panel.config.integrations.configured')]]</span>
      <paper-card>
        <template is="dom-if" if="[[!entries.length]]">
          <div class="config-entry-row">
            <paper-item-body two-line>
              <div>[[localize('ui.panel.config.integrations.none')]]</div>
            </paper-item-body>
          </div>
        </template>
        <template is="dom-repeat" items="[[entries]]">
          <a href='/config/integrations/[[item.entry_id]]'>
            <paper-item>
              <paper-item-body two-line>
                <div>[[_computeIntegrationTitle(localize, item.domain)]]: [[item.title]]</div>
                <div secondary>
                  <template is='dom-repeat' items='[[_computeConfigEntryEntities(hass, item, entities)]]'>
                    <span>
                      <ha-state-icon state-obj='[[item]]' on-click='_handleMoreInfo'></ha-state-icon>
                      <paper-tooltip position="bottom">[[_computeStateName(item)]]</paper-tooltip>
                    </span>
                  </template>
                </div>
              </paper-item-body>
              <iron-icon icon='hass:chevron-right'></iron-icon>
            </paper-item>
          </a>
        </template>
      </paper-card>
    </ha-config-section>

    <ha-config-section>
      <span slot="header">[[localize('ui.panel.config.integrations.new')]]</span>
      <paper-card>
        <template is="dom-repeat" items="[[handlers]]">
          <div class="config-entry-row">
            <paper-item-body>
              [[_computeIntegrationTitle(localize, item)]]
            </paper-item-body>
            <paper-button
              on-click="_createFlow"
            >[[localize('ui.panel.config.integrations.configure')]]</paper-button>
          </div>
        </template>
      </paper-card>
    </ha-config-section>
  </hass-subpage>
`}static get properties(){return{hass:Object,isWide:Boolean,entries:Array,entities:Array,progress:Array,handlers:Array}}connectedCallback(){super.connectedCallback();if(!registeredDialog){registeredDialog=!0;this.fire("register-dialog",{dialogShowEvent:"show-config-flow",dialogTag:"ha-config-flow",dialogImport:()=>__webpack_require__.e(62).then(__webpack_require__.bind(null,711))})}}_createFlow(ev){this.fire("show-config-flow",{hass:this.hass,newFlowForHandler:ev.model.item,dialogClosedCallback:()=>this.fire("hass-reload-entries")})}_continueFlow(ev){this.fire("show-config-flow",{hass:this.hass,continueFlowId:ev.model.item.flow_id,dialogClosedCallback:()=>this.fire("hass-reload-entries")})}_computeIntegrationTitle(localize,integration){return localize(`component.${integration}.config.title`)}_computeConfigEntryEntities(hass,configEntry,entities){if(!entities){return[]}const states=[];entities.forEach(entity=>{if(entity.config_entry_id===configEntry.entry_id&&entity.entity_id in hass.states){states.push(hass.states[entity.entity_id])}});return states}_computeStateName(stateObj){return Object(compute_state_name.a)(stateObj)}_handleMoreInfo(ev){this.fire("hass-more-info",{entityId:ev.model.item.entity_id})}}customElements.define("ha-config-entries-dashboard",ha_config_entries_dashboard_HaConfigManagerDashboard);var state_badge=__webpack_require__(125),compare=(a,b)=>{if(a<b){return-1}if(a>b){return 1}return 0},paper_icon_item=__webpack_require__(218);function computeEntityName(hass,entity){if(entity.name)return entity.name;const state=hass.states[entity.entity_id];return state?Object(compute_state_name.a)(state):null}class ha_device_card_HaDeviceCard extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style>
      :host(:not([narrow])) .device-entities {
        max-height: 225px;
        overflow: auto;
      }
      paper-card {
        flex: 1 0 100%;
        padding-bottom: 10px;
        min-width: 0;
      }
      .device {
        width: 30%;
      }
      .device .name {
        font-weight: bold;
      }
      .device .model,
      .device .manuf {
        color: var(--secondary-text-color);
      }
      .extra-info {
        margin-top: 8px;
      }
      paper-icon-item {
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      .manuf,
      .entity-id {
        color: var(--secondary-text-color);
      }
    </style>
    <paper-card heading='[[device.name]]'>
      <div class='card-content'>
      <!-- <h1>[[configEntry.title]] ([[_computeIntegrationTitle(localize, configEntry.domain)]])</h1> -->
        <div class='info'>
          <div class='model'>[[device.model]]</div>
          <div class='manuf'>
            [[localize('ui.panel.config.integrations.config_entry.manuf', 'manufacturer', device.manufacturer)]]
          </div>
        </div>
        <template is='dom-if' if='[[device.hub_device_id]]'>
          <div class='extra-info'>
            [[localize('ui.panel.config.integrations.config_entry.hub')]]
            <span class='hub'>[[_computeDeviceName(devices, device.hub_device_id)]]</span>
          </div>
        </template>
        <template is='dom-if' if='[[device.sw_version]]'>
          <div class='extra-info'>
            [[localize('ui.panel.config.integrations.config_entry.firmware', 'version', device.sw_version)]]
          </div>
        </template>
      </div>

      <div class='device-entities'>
        <template is='dom-repeat' items='[[_computeDeviceEntities(hass, device, entities)]]' as='entity'>
          <paper-icon-item on-click='_openMoreInfo'>
            <state-badge
              state-obj="[[_computeStateObj(entity, hass)]]"
              slot='item-icon'
            ></state-badge>
            <paper-item-body>
              <div class='name'>[[_computeEntityName(entity, hass)]]</div>
              <div class='secondary entity-id'>[[entity.entity_id]]</div>
            </paper-item-body>
          </paper-icon-item>
        </template>
      </div>
    </paper-card>

    `}static get properties(){return{device:Object,devices:Array,entities:Array,hass:Object,narrow:{type:Boolean,reflectToAttribute:!0},_childDevices:{type:Array,computed:"_computeChildDevices(device, devices)"}}}_computeChildDevices(device,devices){return devices.filter(dev=>dev.hub_device_id===device.id).sort((dev1,dev2)=>compare(dev1.name,dev2.name))}_computeDeviceEntities(hass,device,entities){return entities.filter(entity=>entity.device_id===device.id).sort((ent1,ent2)=>compare(computeEntityName(hass,ent1)||`zzz${ent1.entity_id}`,computeEntityName(hass,ent2)||`zzz${ent2.entity_id}`))}_computeStateObj(entity,hass){return hass.states[entity.entity_id]}_computeEntityName(entity,hass){return computeEntityName(hass,entity)||`(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`}_computeDeviceName(devices,deviceId){const device=devices.find(dev=>dev.id===deviceId);return device?device.name:`(${this.localize("ui.panel.config.integrations.config_entry.device_unavailable")})`}_openMoreInfo(ev){this.fire("hass-more-info",{entityId:ev.model.entity.entity_id})}}customElements.define("ha-device-card",ha_device_card_HaDeviceCard);function ha_ce_entities_card_computeEntityName(hass,entity){if(entity.name)return entity.name;const state=hass.states[entity.entity_id];return state?Object(compute_state_name.a)(state):null}class ha_ce_entities_card_HaCeEntitiesCard extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style>
      paper-card {
        flex: 1 0 100%;
        padding-bottom: 8px;
      }
      paper-icon-item {
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 4px;
      }
    </style>
    <paper-card heading='[[heading]]'>
      <template is='dom-repeat' items='[[entities]]' as='entity'>
        <paper-icon-item on-click='_openMoreInfo'>
          <state-badge
            state-obj="[[_computeStateObj(entity, hass)]]"
            slot='item-icon'
          ></state-badge>
          <paper-item-body>
            <div class='name'>[[_computeEntityName(entity, hass)]]</div>
            <div class='secondary entity-id'>[[entity.entity_id]]</div>
          </paper-item-body>
        </paper-icon-item>
      </template>
    </paper-card>
    `}static get properties(){return{heading:String,entities:Array,hass:Object}}_computeStateObj(entity,hass){return hass.states[entity.entity_id]}_computeEntityName(entity,hass){return ha_ce_entities_card_computeEntityName(hass,entity)||`(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`}_openMoreInfo(ev){this.fire("hass-more-info",{entityId:ev.model.entity.entity_id})}}customElements.define("ha-ce-entities-card",ha_ce_entities_card_HaCeEntitiesCard);var navigate_mixin=__webpack_require__(82);class ha_config_entry_page_HaConfigEntryPage extends Object(navigate_mixin.a)(Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a))){static get template(){return html_tag.a`
  <style>
    .content {
      display: flex;
      flex-wrap: wrap;
      padding: 4px;
      justify-content: center;
    }
    .card {
      box-sizing: border-box;
      display: flex;
      flex: 1 0 300px;
      min-width: 0;
      max-width: 500px;
      padding: 8px;
    }
  </style>
  <hass-subpage header='[[configEntry.title]]'>
    <paper-icon-button
      slot='toolbar-icon'
      icon='hass:delete'
      on-click='_removeEntry'
    ></paper-icon-button>
    <div class='content'>
      <template is='dom-if' if='[[_computeIsEmpty(_configEntryDevices, _noDeviceEntities)]]'>
        <p>[[localize('ui.panel.config.integrations.config_entry.no_devices')]]</p>
      </template>
      <template is='dom-repeat' items='[[_configEntryDevices]]' as='device'>
        <ha-device-card
          class="card"
          hass='[[hass]]'
          devices='[[devices]]'
          device='[[device]]'
          entities='[[entities]]'
          narrow='[[narrow]]'
        ></ha-device-card>
      </template>
      <template is='dom-if' if='[[_noDeviceEntities.length]]'>
        <ha-ce-entities-card
          class="card"
          heading="[[localize('ui.panel.config.integrations.config_entry.no_device')]]"
          entities='[[_noDeviceEntities]]'
          hass='[[hass]]'
          narrow='[[narrow]]'
        ></ha-ce-entities-card>
      </template>
    </div>
  </hass-subpage>
`}static get properties(){return{hass:Object,isWide:Boolean,narrow:Boolean,configEntry:{type:Object,value:null},_configEntryDevices:{type:Array,computed:"_computeConfigEntryDevices(configEntry, devices)"},_noDeviceEntities:{type:Array,computed:"_computeNoDeviceEntities(configEntry, entities)"},devices:Array,entries:Array,entities:Array}}_computeConfigEntryDevices(configEntry,devices){if(!devices)return[];return devices.filter(device=>device.config_entries.includes(configEntry.entry_id)).sort((dev1,dev2)=>!!dev1.hub_device_id-!!dev2.hub_device_id||compare(dev1.name,dev2.name))}_computeNoDeviceEntities(configEntry,entities){if(!entities)return[];return entities.filter(ent=>!ent.device_id&&ent.config_entry_id===configEntry.entry_id)}_computeIsEmpty(configEntryDevices,noDeviceEntities){return 0===configEntryDevices.length&&0===noDeviceEntities.length}_removeEntry(){if(!confirm(this.localize("ui.panel.config.integrations.config_entry.delete_confirm")))return;const entryId=this.configEntry.entry_id;this.hass.callApi("delete",`config/config_entries/entry/${entryId}`).then(result=>{this.fire("hass-reload-entries");if(result.require_restart){alert(this.localize("ui.panel.config.integrations.config_entry.restart_confirm"))}this.navigate("/config/integrations/dashboard",!0)})}}customElements.define("ha-config-entry-page",ha_config_entry_page_HaConfigEntryPage);class ha_config_entries_HaConfigEntries extends Object(navigate_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
  <app-route route="[[route]]" pattern="/integrations/:page" data="{{_routeData}}" tail="{{_routeTail}}"></app-route>

  <template is='dom-if' if='[[_configEntry]]'>
    <ha-config-entry-page
      hass='[[hass]]'
      config-entry='[[_configEntry]]'
      entries='[[_entries]]'
      entities='[[_entities]]'
      devices='[[_devices]]'
      narrow='[[narrow]]'
    ></ha-config-entry-page>
  </template>
  <template is='dom-if' if='[[!_configEntry]]'>
    <ha-config-entries-dashboard
      hass='[[hass]]'
      entries='[[_entries]]'
      entities='[[_entities]]'
      handlers='[[_handlers]]'
      progress='[[_progress]]'
    ></ha-config-entries-dashboard>
  </template>
`}static get properties(){return{hass:Object,isWide:Boolean,narrow:Boolean,route:Object,_configEntry:{type:Object,computed:"_computeConfigEntry(_routeData, _entries)"},_entries:Array,_entities:Array,_devices:Array,_progress:Array,_handlers:Array,_routeData:Object,_routeTail:Object}}ready(){super.ready();this._loadData();this.addEventListener("hass-reload-entries",()=>this._loadData())}connectedCallback(){super.connectedCallback();this.hass.connection.subscribeEvents(()=>{this._debouncer=debounce.a.debounce(this._debouncer,utils_async.d.after(500),()=>this._loadData())},"config_entry_discovered").then(unsub=>{this._unsubEvents=unsub})}disconnectedCallback(){super.disconnectedCallback();if(this._unsubEvents)this._unsubEvents()}_loadData(){this.hass.callApi("get","config/config_entries/entry").then(entries=>{this._entries=entries.sort((conf1,conf2)=>compare(conf1.title,conf2.title))});this.hass.callApi("get","config/config_entries/flow").then(progress=>{this._progress=progress});this.hass.callApi("get","config/config_entries/flow_handlers").then(handlers=>{this._handlers=handlers});this.hass.callWS({type:"config/entity_registry/list"}).then(entities=>{this._entities=entities});this.hass.callWS({type:"config/device_registry/list"}).then(devices=>{this._devices=devices})}_computeConfigEntry(routeData,entries){return!!entries&&!!routeData&&entries.find(ent=>ent.entry_id===routeData.page)}}customElements.define("ha-config-entries",ha_config_entries_HaConfigEntries)}}]);
//# sourceMappingURL=270b0230c260535edaae.chunk.js.map