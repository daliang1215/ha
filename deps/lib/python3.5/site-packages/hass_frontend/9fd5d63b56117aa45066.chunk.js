(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{198:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
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
`,is:"paper-item-body"})},709:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(119),_polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(198),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),_mixins_localize_lite_mixin__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(80);class HaPickAuthProvider extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__.a)(Object(_mixins_localize_lite_mixin__WEBPACK_IMPORTED_MODULE_5__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__.a)){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__.a`
    <style>
      paper-item {
        cursor: pointer;
      }
      p {
        margin-top: 0;
      }
    </style>
    <p>[[localize('ui.panel.page-authorize.pick_auth_provider')]]:</p>
    <template is="dom-repeat" items="[[authProviders]]">
      <paper-item on-click="_handlePick">
        <paper-item-body>[[item.name]]</paper-item-body>
        <iron-icon icon="hass:chevron-right"></iron-icon>
      </paper-item>
    </template>
`}static get properties(){return{_state:{type:String,value:"loading"},authProviders:Array}}_handlePick(ev){this.fire("pick",ev.model.item)}_equal(a,b){return a===b}}customElements.define("ha-pick-auth-provider",HaPickAuthProvider)}}]);
//# sourceMappingURL=9fd5d63b56117aa45066.chunk.js.map