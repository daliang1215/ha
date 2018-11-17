(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{198:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
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
`,is:"paper-item-body"})},211:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(155),_polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(154),_polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(121),_polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(62),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4);class HassSubpage extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__.a`
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
`}static get properties(){return{header:String}}_backTapped(){history.back()}}customElements.define("hass-subpage",HassSubpage)},245:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(76),_polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(64),_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(47),_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(29),_polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(59),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__.a`
  <style include="paper-material-styles">
    :host {
      @apply --layout-vertical;
      @apply --layout-center-center;

      background: var(--paper-fab-background, var(--accent-color));
      border-radius: 50%;
      box-sizing: border-box;
      color: var(--text-primary-color);
      cursor: pointer;
      height: 56px;
      min-width: 0;
      outline: none;
      padding: 16px;
      position: relative;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      width: 56px;
      z-index: 0;

      /* NOTE: Both values are needed, since some phones require the value \`transparent\`. */
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;

      @apply --paper-fab;
    }

    [hidden] {
      display: none !important;
    }

    :host([mini]) {
      width: 40px;
      height: 40px;
      padding: 8px;

      @apply --paper-fab-mini;
    }

    :host([disabled]) {
      color: var(--paper-fab-disabled-text, var(--paper-grey-500));
      background: var(--paper-fab-disabled-background, var(--paper-grey-300));

      @apply --paper-fab-disabled;
    }

    iron-icon {
      @apply --paper-fab-iron-icon;
    }

    span {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;

      @apply --paper-fab-label;
    }

    :host(.keyboard-focus) {
      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }
  </style>

  <iron-icon id="icon" hidden\$="{{!_computeIsIconFab(icon, src)}}" src="[[src]]" icon="[[icon]]"></iron-icon>
  <span hidden\$="{{_computeIsIconFab(icon, src)}}">{{label}}</span>
`;template.setAttribute("strip-whitespace","");Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__.a)({_template:template,is:"paper-fab",behaviors:[_polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__.a],properties:{src:{type:String,value:""},icon:{type:String,value:""},mini:{type:Boolean,value:!1,reflectToAttribute:!0},label:{type:String,observer:"_labelChanged"}},_labelChanged:function(){this.setAttribute("aria-label",this.label)},_computeIsIconFab:function(icon,src){return 0<icon.length||0<src.length}})},686:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_route=__webpack_require__(90),utils_async=__webpack_require__(8),debounce=__webpack_require__(14),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),navigate_mixin=__webpack_require__(82),paper_fab=__webpack_require__(245),paper_item=__webpack_require__(119),paper_card=__webpack_require__(153),paper_item_body=__webpack_require__(198),hass_subpage=__webpack_require__(211),localize_mixin=__webpack_require__(10),events_mixin=__webpack_require__(16);let registeredDialog=!1;class ha_user_picker_HaUserPicker extends Object(events_mixin.a)(Object(navigate_mixin.a)(Object(localize_mixin.a)(polymer_element.a))){static get template(){return html_tag.a`
  <style>
    paper-fab {
      position: fixed;
      bottom: 16px;
      right: 16px;
      z-index: 1;
    }
    paper-fab[is-wide] {
      bottom: 24px;
      right: 24px;
    }
    paper-card {
      display: block;
      max-width: 600px;
      margin: 16px auto;
    }
    a {
      text-decoration: none;
      color: var(--primary-text-color);
    }
  </style>

  <hass-subpage header="[[localize('ui.panel.config.users.picker.title')]]">
    <paper-card>
      <template is="dom-repeat" items="[[users]]" as="user">
        <a href='[[_computeUrl(user)]]'>
          <paper-item>
            <paper-item-body two-line>
              <div>[[_withDefault(user.name, 'Unnamed User')]]</div>
              <div secondary="">
                [[user.id]]
                <template is='dom-if' if='[[user.system_generated]]'>
                - System Generated
                </template>
              </div>
            </paper-item-body>
            <iron-icon icon="hass:chevron-right"></iron-icon>
          </paper-item>
        </a>
      </template>
    </paper-card>

    <paper-fab
      is-wide$="[[isWide]]"
      icon="hass:plus"
      title="[[localize('ui.panel.config.users.picker.add_user')]]"
      on-click="_addUser"
    ></paper-fab>
  </hass-subpage>
`}static get properties(){return{hass:Object,users:Array}}connectedCallback(){super.connectedCallback();if(!registeredDialog){registeredDialog=!0;this.fire("register-dialog",{dialogShowEvent:"show-add-user",dialogTag:"ha-dialog-add-user",dialogImport:()=>__webpack_require__.e(63).then(__webpack_require__.bind(null,712))})}}_withDefault(value,defaultValue){return value||defaultValue}_computeUrl(user){return`/config/users/${user.id}`}_addUser(){this.fire("show-add-user",{hass:this.hass,dialogClosedCallback:async({userId})=>{this.fire("reload-users");if(userId)this.navigate(`/config/users/${userId}`)}})}}customElements.define("ha-user-picker",ha_user_picker_HaUserPicker);__webpack_require__(54);class ha_user_editor_HaUserEditor extends Object(events_mixin.a)(Object(navigate_mixin.a)(Object(localize_mixin.a)(polymer_element.a))){static get template(){return html_tag.a`
  <style>
    paper-card {
      display: block;
      max-width: 600px;
      margin: 0 auto 16px;
    }
    paper-card:first-child {
      margin-top: 16px;
    }
    paper-card:last-child {
      margin-bottom: 16px;
    }
  </style>

  <hass-subpage header="View user">
    <paper-card heading="[[_computeName(user)]]">
      <table class='card-content'>
        <tr>
          <td>ID</td>
          <td>[[user.id]]</td>
        </tr>
        <tr>
          <td>Owner</td>
          <td>[[user.is_owner]]</td>
        </tr>
        <tr>
          <td>Active</td>
          <td>[[user.is_active]]</td>
        </tr>
        <tr>
          <td>System generated</td>
          <td>[[user.system_generated]]</td>
        </tr>
      </table>
    </paper-card>
    <paper-card>
      <div class='card-actions'>
        <paper-button on-click='_deleteUser' disabled='[[user.system_generated]]'>
          [[localize('ui.panel.config.users.editor.delete_user')]]
        </paper-button>
        <template is='dom-if' if='[[user.system_generated]]'>
          Unable to remove system generated users.
        </template>
      </div>
    </paper-card>
  </hass-subpage>
`}static get properties(){return{hass:Object,user:Object}}_computeName(user){return user&&(user.name||"Unnamed user")}async _deleteUser(ev){if(!confirm(`Are you sure you want to delete ${this._computeName(this.user)}`)){ev.target.blur();return}try{await this.hass.callWS({type:"config/auth/delete",user_id:this.user.id})}catch(err){alert(err.code);return}this.fire("reload-users");this.navigate("/config/users")}}customElements.define("ha-user-editor",ha_user_editor_HaUserEditor);var fire_event=__webpack_require__(75);class ha_config_users_HaConfigUsers extends Object(navigate_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <app-route
      route='[[route]]'
      pattern='/users/:user'
      data="{{_routeData}}"
    ></app-route>

    <template is='dom-if' if='[[_equals(_routeData.user, "picker")]]'>
      <ha-user-picker
        hass='[[hass]]'
        users='[[_users]]'
      ></ha-user-picker>
    </template>
    <template is='dom-if' if='[[!_equals(_routeData.user, "picker")]]' restamp>
      <ha-user-editor
        hass='[[hass]]'
        user='[[_computeUser(_users, _routeData.user)]]'
      ></ha-user-editor>
    </template>
`}static get properties(){return{hass:Object,route:{type:Object,observer:"_checkRoute"},_routeData:Object,_user:{type:Object,value:null},_users:{type:Array,value:null}}}ready(){super.ready();this._loadData();this.addEventListener("reload-users",()=>this._loadData())}_handlePickUser(ev){this._user=ev.detail.user}_checkRoute(route){if(!route||"/users"!==route.path.substr(0,6))return;Object(fire_event.a)(this,"iron-resize");this._debouncer=debounce.a.debounce(this._debouncer,utils_async.d.after(0),()=>{if("/users"===route.path){this.navigate("/config/users/picker",!0)}})}_computeUser(users,userId){return users&&users.filter(u=>u.id===userId)[0]}_equals(a,b){return a===b}async _loadData(){this._users=await this.hass.callWS({type:"config/auth/list"})}}customElements.define("ha-config-users",ha_config_users_HaConfigUsers)}}]);
//# sourceMappingURL=407a0470f76464dfbf89.chunk.js.map