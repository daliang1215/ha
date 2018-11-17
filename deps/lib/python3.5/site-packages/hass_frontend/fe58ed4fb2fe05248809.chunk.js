(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{198:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(29),_polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(42),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0);/**
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
`}static get properties(){return{header:String}}_backTapped(){history.back()}}customElements.define("hass-subpage",HassSubpage)},212:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_button_paper_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(54),_polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(124),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4);class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__.a`
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
`}static get properties(){return{hass:{type:Object},progress:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1}}}tempClass(className){var classList=this.$.container.classList;classList.add(className);setTimeout(()=>{classList.remove(className)},1e3)}ready(){super.ready();this.addEventListener("click",ev=>this.buttonTapped(ev))}buttonTapped(ev){if(this.progress)ev.stopPropagation()}actionSuccess(){this.tempClass("success")}actionError(){this.tempClass("error")}computeDisabled(disabled,progress){return disabled||progress}}customElements.define("ha-progress-button",HaProgressButton)},293:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(196),_ha_progress_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(212),_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(75);class HaCallApiButton extends _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__.a{render(){return _polymer_lit_element__WEBPACK_IMPORTED_MODULE_0__.c`
      <ha-progress-button
        .progress="${this.progress}"
        @click="${this._buttonTapped}"
        ?disabled="${this.disabled}"
      ><slot></slot></ha-progress-button>
    `}constructor(){super();this.method="POST";this.data={};this.disabled=!1;this.progress=!1}static get properties(){return{hass:{},progress:Boolean,path:String,method:String,data:{},disabled:Boolean}}get progressButton(){return this.renderRoot.querySelector("ha-progress-button")}async _buttonTapped(){this.progress=!0;const eventData={method:this.method,path:this.path,data:this.data};try{const resp=await this.hass.callApi(this.method,this.path,this.data);this.progress=!1;this.progressButton.actionSuccess();eventData.success=!0;eventData.response=resp}catch(err){this.progress=!1;this.progressButton.actionError();eventData.success=!1;eventData.response=err}Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__.a)(this,"hass-api-called",eventData)}}customElements.define("ha-call-api-button",HaCallApiButton)},684:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_route=__webpack_require__(90),utils_async=__webpack_require__(8),debounce=__webpack_require__(14),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),ha_config_section=__webpack_require__(202),paper_button=__webpack_require__(54),paper_card=__webpack_require__(153),paper_item_body=__webpack_require__(198),paper_toggle_button=__webpack_require__(158),ha_call_api_button=__webpack_require__(293),hass_subpage=__webpack_require__(211),ha_style=__webpack_require__(120),format_date_time=__webpack_require__(78),events_mixin=__webpack_require__(16),localize_mixin=__webpack_require__(10);class ha_config_cloud_account_HaConfigCloudAccount extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="iron-flex ha-style">
      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      .content {
        padding-bottom: 24px;
      }
      paper-card {
        display: block;
      }
      .account-row {
        display: flex;
        padding: 0 16px;
      }
      paper-button {
        align-self: center;
      }
      .soon {
        font-style: italic;
        margin-top: 24px;
        text-align: center;
      }
      .nowrap {
        white-space: nowrap;;
      }
      .wrap {
        white-space: normal;
      }
      .status {
        text-transform: capitalize;
        padding: 16px;
      }
      paper-button {
        color: var(--primary-color);
        font-weight: 500;
      }
      a {
        color: var(--primary-color);
      }
      paper-card > paper-toggle-button {
        position: absolute;
        right: 8px;
        top: 16px;
      }
    </style>
    <hass-subpage header="Home Assistant Cloud">
      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">Home Assistant Cloud</span>
          <div slot="introduction">
            <p>
              Thank you for being part of Home Assistant Cloud. It's because of people like you that we are able to make a great home automation experience for everyone. Thank you!
            </p>
          </div>

          <paper-card heading="Nabu Casa Account">
            <div class="account-row">
              <paper-item-body two-line="">
                [[cloudStatus.email]]
                <div secondary="" class="wrap">
                  [[_formatSubscription(_subscription)]]
                </div>
              </paper-item-body>
            </div>

            <div class="account-row">
              <paper-item-body>
                Cloud connection status
              </paper-item-body>
              <div class="status">[[cloudStatus.cloud]]</div>
            </div>

            <div class='card-actions'>
              <a href='https://account.nabucasa.com' target='_blank'><paper-button>Manage Account</paper-button></a>
              <paper-button style='float: right' on-click="handleLogout">Sign out</paper-button>
            </div>
          </paper-card>
        </ha-config-section>

        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">Integrations</span>
          <div slot="introduction">
            <p>
              Integrations for Home Assistant Cloud allow you to connect with services in the cloud without having to expose your Home Assistant instance publicly on the internet.
            </p>
            <p>
              Check the website for <a href='https://www.nabucasa.com' target='_blank'>all available features</a>.
            </p>
          </div>

          <paper-card heading="Alexa">
            <paper-toggle-button
              checked='[[cloudStatus.alexa_enabled]]'
              on-change='_alexaChanged'
            ></paper-toggle-button>
            <div class="card-content">
              With the Alexa integration for Home Assistant Cloud you'll be able to control all your Home Assistant devices via any Alexa-enabled device.
              <ul>
                <li>
                  To activate, search in the Alexa app for the Home Assistant Smart Home skill.
                </li>
                <li>
                  <a href="https://www.home-assistant.io/cloud/alexa/" target="_blank">
                    Config documentation
                  </a>
                </li>
              </ul>
              <p><em>This integration requires an Alexa-enabled device like the Amazon Echo.</em></p>
            </div>
          </paper-card>

          <paper-card heading="Google Assistant">
            <paper-toggle-button
              checked='[[cloudStatus.google_enabled]]'
              on-change='_googleChanged'
            ></paper-toggle-button>
            <div class="card-content">
              With the Google Assistant integration for Home Assistant Cloud you'll be able to control all your Home Assistant devices via any Google Assistant-enabled device.
              <ul>
                <li>
                  <a href="https://assistant.google.com/services/a/uid/00000091fd5fb875" target="_blank">
                    Activate the Home Assistant skill for Google Assistant
                  </a>
                </li>
                <li>
                  <a href="https://www.home-assistant.io/cloud/google_assistant/" target="_blank">
                    Config documentation
                  </a>
                </li>
              </ul>
              <p><em>This integration requires a Google Assistant-enabled device like the Google Home or Android phone.</em></p>
            </div>
            <div class="card-actions">
              <ha-call-api-button
                hass="[[hass]]"
                disabled='[[!cloudStatus.google_enabled]]'
                path="cloud/google_actions/sync"
              >Sync devices</ha-call-api-button>
            </div>
          </paper-card>
        </ha-config-section>
      </div>
    </hass-subpage>
`}static get properties(){return{hass:Object,isWide:Boolean,cloudStatus:Object,_subscription:{type:Object,value:null}}}ready(){super.ready();this._fetchSubscriptionInfo()}async _fetchSubscriptionInfo(){this._subscription=await this.hass.callWS({type:"cloud/subscription"});if(this._subscription.provider&&"connected"!==this.cloudStatus.cloud){this.fire("ha-refresh-cloud-status")}}handleLogout(){this.hass.callApi("post","cloud/logout").then(()=>this.fire("ha-refresh-cloud-status"))}_formatSubscription(subInfo){if(null===subInfo){return"Fetching subscription\u2026"}let description=subInfo.human_description;if(subInfo.plan_renewal_date){description=description.replace("{periodEnd}",Object(format_date_time.a)(new Date(1e3*subInfo.plan_renewal_date),this.hass.language))}return description}_alexaChanged(ev){this._handleToggleChange("alexa_enabled",ev.target)}_googleChanged(ev){this._handleToggleChange("google_enabled",ev.target)}async _handleToggleChange(property,element){try{await this.hass.callWS({type:"cloud/update_prefs",[property]:element.checked});this.fire("ha-refresh-cloud-status")}catch(err){element.checked=!element.checked}}}customElements.define("ha-config-cloud-account",ha_config_cloud_account_HaConfigCloudAccount);var paper_input=__webpack_require__(61),ha_progress_button=__webpack_require__(212);class ha_config_cloud_forgot_password_HaConfigCloudForgotPassword extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="iron-flex ha-style">
      .content {
        padding-bottom: 24px;
      }

      paper-card {
        display: block;
        max-width: 600px;
        margin: 0 auto;
        margin-top: 24px;
      }
      h1 {
        @apply --paper-font-headline;
        margin: 0;
      }
      .error {
        color: var(--google-red-500);
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .card-actions a {
        color: var(--primary-text-color);
      }
      [hidden] {
        display: none;
      }
    </style>
    <hass-subpage header="Forgot Password">
      <div class="content">
        <paper-card>
          <div class="card-content">
            <h1>Forgot your password?</h1>
            <p>
              Enter your email address and we will send you a link to reset your password.
            </p>
            <div class="error" hidden$="[[!_error]]">[[_error]]</div>
            <paper-input autofocus="" id="email" label="E-mail" value="{{email}}" type="email" on-keydown="_keyDown" error-message="Invalid email"></paper-input>
          </div>
          <div class="card-actions">
            <ha-progress-button on-click="_handleEmailPasswordReset" progress="[[_requestInProgress]]">Send reset email</ha-progress-button>
          </div>
        </paper-card>
      </div>
    </hass-subpage>
`}static get properties(){return{hass:Object,email:{type:String,notify:!0,observer:"_emailChanged"},_requestInProgress:{type:Boolean,value:!1},_error:{type:String,value:""}}}_emailChanged(){this._error="";this.$.email.invalid=!1}_keyDown(ev){if(13===ev.keyCode){this._handleEmailPasswordReset();ev.preventDefault()}}_handleEmailPasswordReset(){if(!this.email||!this.email.includes("@")){this.$.email.invalid=!0}if(this.$.email.invalid)return;this._requestInProgress=!0;this.hass.callApi("post","cloud/forgot_password",{email:this.email}).then(()=>{this._requestInProgress=!1;this.fire("cloud-done",{flashMessage:"Check your email for instructions on how to reset your password."})},err=>this.setProperties({_requestInProgress:!1,_error:err&&err.body&&err.body.message?err.body.message:"Unknown error"}))}}customElements.define("ha-config-cloud-forgot-password",ha_config_cloud_forgot_password_HaConfigCloudForgotPassword);var paper_icon_button=__webpack_require__(62),paper_item=__webpack_require__(119),paper_ripple=__webpack_require__(77),navigate_mixin=__webpack_require__(82);class ha_config_cloud_login_HaConfigCloudLogin extends Object(navigate_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="iron-flex ha-style">
      .content {
        padding-bottom: 24px;
      }
      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      paper-card {
        display: block;
      }
      paper-item {
        cursor: pointer;
      }
      paper-card:last-child {
        margin-top: 24px;
      }
      h1 {
        @apply --paper-font-headline;
        margin: 0;
      }
      .error {
        color: var(--google-red-500);
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      [hidden] {
        display: none;
      }
      .flash-msg {
        padding-right: 44px;
      }
      .flash-msg paper-icon-button {
        position: absolute;
        top: 8px;
        right: 8px;
        color: var(--secondary-text-color);
      }
    </style>
    <hass-subpage header="Cloud Login">
      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">Home Assistant Cloud</span>
          <div slot="introduction">
            <p>
              Home Assistant Cloud connects your local instance securely to cloud-only services Amazon Alexa and Google Assistant.
            </p>
            <p>
              This service is run by our partner <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>, a company founded by the founders of Home Assistant and Hass.io.
            </p>
            <p>
              Home Assistant Cloud is a subscription service with a free one month trial. No payment information necessary.
            </p>
            <p><a href="https://www.nabucasa.com" target="_blank">Learn more about Home Assistant Cloud</a></p>
          </div>

          <paper-card hidden$="[[!flashMessage]]">
            <div class="card-content flash-msg">
              [[flashMessage]]
              <paper-icon-button icon="hass:close" on-click="_dismissFlash">Dismiss</paper-icon-button>
              <paper-ripple id="flashRipple" noink=""></paper-ripple>
            </div>
          </paper-card>

          <paper-card>
            <div class="card-content">
              <h1>Sign In</h1>
              <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              <paper-input label="Email" id="email" type="email" value="{{email}}" on-keydown="_keyDown" error-message="Invalid email"></paper-input>
              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="Passwords are at least 8 characters"></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button on-click="_handleLogin" progress="[[_requestInProgress]]">Sign in</ha-progress-button>
              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleForgotPassword">forgot password?</button>
            </div>
          </paper-card>

          <paper-card>
            <paper-item on-click="_handleRegister">
              <paper-item-body two-line="">
                Start your free 1 month trial
                <div secondary="">No payment information necessary</div>
              </paper-item-body>
              <iron-icon icon="hass:chevron-right"></iron-icon>
            </paper-item>
          </paper-card>
        </ha-config-section>
      </div>
    </hass-subpage>
`}static get properties(){return{hass:Object,isWide:Boolean,email:{type:String,notify:!0},_password:{type:String,value:""},_requestInProgress:{type:Boolean,value:!1},flashMessage:{type:String,notify:!0},_error:String}}static get observers(){return["_inputChanged(email, _password)"]}connectedCallback(){super.connectedCallback();if(this.flashMessage){requestAnimationFrame(()=>requestAnimationFrame(()=>this.$.flashRipple.simulatedRipple()))}}_inputChanged(){this.$.email.invalid=!1;this.$.password.invalid=!1;this._error=!1}_keyDown(ev){if(13===ev.keyCode){this._handleLogin();ev.preventDefault()}}_handleLogin(){let invalid=!1;if(!this.email||!this.email.includes("@")){this.$.email.invalid=!0;this.$.email.focus();invalid=!0}if(8>this._password.length){this.$.password.invalid=!0;if(!invalid){invalid=!0;this.$.password.focus()}}if(invalid)return;this._requestInProgress=!0;this.hass.callApi("post","cloud/login",{email:this.email,password:this._password}).then(()=>{this.fire("ha-refresh-cloud-status");this.setProperties({email:"",_password:""})},err=>{this._password="";const errCode=err&&err.body&&err.body.code;if("PasswordChangeRequired"===errCode){alert("You need to change your password before logging in.");this.navigate("/config/cloud/forgot-password");return}const props={_requestInProgress:!1,_error:err&&err.body&&err.body.message?err.body.message:"Unknown error"};if("UserNotConfirmed"===errCode){props._error="You need to confirm your email before logging in."}this.setProperties(props);this.$.email.focus()})}_handleRegister(){this.flashMessage="";this.navigate("/config/cloud/register")}_handleForgotPassword(){this.flashMessage="";this.navigate("/config/cloud/forgot-password")}_dismissFlash(){setTimeout(()=>{this.flashMessage=""},200)}}customElements.define("ha-config-cloud-login",ha_config_cloud_login_HaConfigCloudLogin);class ha_config_cloud_register_HaConfigCloudRegister extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="iron-flex ha-style">
      [slot=introduction] {
        margin: -1em 0;
      }
      [slot=introduction] a {
        color: var(--primary-color);
      }
      a {
        color: var(--primary-color);
      }
      paper-card {
        display: block;
      }
      paper-item {
        cursor: pointer;
      }
      paper-card:last-child {
        margin-top: 24px;
      }
      h1 {
        @apply --paper-font-headline;
        margin: 0;
      }
      .error {
        color: var(--google-red-500);
      }
      .card-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      [hidden] {
        display: none;
      }
    </style>
    <hass-subpage header="Register Account">
      <div class="content">
        <ha-config-section is-wide="[[isWide]]">
          <span slot="header">Start your free trial</span>
          <div slot="introduction">
            <p>
              Create an account to start your free one month trial with Home Assistant Cloud. No payment information necessary.
            </p>
            <p>
              The trial will give you access to all the benefits of Home Assistant Cloud, including:
            </p>
            <ul>
              <li>Integration with Google Assistant</li>
              <li>Integration with Amazon Alexa</li>
            </ul>
            <p>
              This service is run by our partner <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>, a company founded by the founders of Home Assistant and Hass.io.
            </p>

            <p>
              By registering an account you agree to the following terms and conditions.
              </p><ul>
                <li><a href="https://home-assistant.io/tos/" target="_blank">Terms and Conditions</a></li>
                <li><a href="https://home-assistant.io/privacy/" target="_blank">Privacy Policy</a></li>
              </ul>
            </p>
          </div>

          <paper-card>
            <div class="card-content">
              <div class="header">
                <h1>Create Account</h1>
                <div class="error" hidden$="[[!_error]]">[[_error]]</div>
              </div>
              <paper-input autofocus="" id="email" label="Email address" type="email" value="{{email}}" on-keydown="_keyDown" error-message="Invalid email"></paper-input>
              <paper-input id="password" label="Password" value="{{_password}}" type="password" on-keydown="_keyDown" error-message="Your password needs to be at least 8 characters"></paper-input>
            </div>
            <div class="card-actions">
              <ha-progress-button on-click="_handleRegister" progress="[[_requestInProgress]]">Start trial</ha-progress-button>
              <button class="link" hidden="[[_requestInProgress]]" on-click="_handleResendVerifyEmail">Resend confirmation email</button>
            </div>
          </paper-card>
        </ha-config-section>
      </div>
    </hass-subpage>
`}static get properties(){return{hass:Object,isWide:Boolean,email:{type:String,notify:!0},_requestInProgress:{type:Boolean,value:!1},_password:{type:String,value:""},_error:{type:String,value:""}}}static get observers(){return["_inputChanged(email, _password)"]}_inputChanged(){this._error="";this.$.email.invalid=!1;this.$.password.invalid=!1}_keyDown(ev){if(13===ev.keyCode){this._handleRegister();ev.preventDefault()}}_handleRegister(){let invalid=!1;if(!this.email||!this.email.includes("@")){this.$.email.invalid=!0;this.$.email.focus();invalid=!0}if(8>this._password.length){this.$.password.invalid=!0;if(!invalid){invalid=!0;this.$.password.focus()}}if(invalid)return;this._requestInProgress=!0;this.hass.callApi("post","cloud/register",{email:this.email,password:this._password}).then(()=>this._verificationEmailSent(),err=>{this._password="";this.setProperties({_requestInProgress:!1,_error:err&&err.body&&err.body.message?err.body.message:"Unknown error"})})}_handleResendVerifyEmail(){if(!this.email){this.$.email.invalid=!0;return}this.hass.callApi("post","cloud/resend_confirm",{email:this.email}).then(()=>this._verificationEmailSent(),err=>this.setProperties({_error:err&&err.body&&err.body.message?err.body.message:"Unknown error"}))}_verificationEmailSent(){this.setProperties({_requestInProgress:!1,_password:""});this.fire("cloud-done",{flashMessage:"Account created! Check your email for instructions on how to activate your account."})}}customElements.define("ha-config-cloud-register",ha_config_cloud_register_HaConfigCloudRegister);const LOGGED_IN_URLS=["/cloud/account"],NOT_LOGGED_IN_URLS=["/cloud/login","/cloud/register","/cloud/forgot-password"];class ha_config_cloud_HaConfigCloud extends Object(navigate_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
  <app-route route="[[route]]" pattern="/cloud/:page" data="{{_routeData}}" tail="{{_routeTail}}"></app-route>

  <template is="dom-if" if="[[_equals(_routeData.page, &quot;account&quot;)]]" restamp="">
    <ha-config-cloud-account
      hass="[[hass]]"
      cloud-status="[[cloudStatus]]"
      is-wide="[[isWide]]"
    ></ha-config-cloud-account>
  </template>

  <template is="dom-if" if="[[_equals(_routeData.page, &quot;login&quot;)]]" restamp="">
    <ha-config-cloud-login
      page-name="login"
      hass="[[hass]]"
      is-wide="[[isWide]]"
      email="{{_loginEmail}}"
      flash-message="{{_flashMessage}}"
    ></ha-config-cloud-login>
  </template>

  <template is="dom-if" if="[[_equals(_routeData.page, &quot;register&quot;)]]" restamp="">
    <ha-config-cloud-register
      page-name="register"
      hass="[[hass]]"
      is-wide="[[isWide]]"
      email="{{_loginEmail}}"
    ></ha-config-cloud-register>
  </template>

  <template is="dom-if" if="[[_equals(_routeData.page, &quot;forgot-password&quot;)]]" restamp="">
    <ha-config-cloud-forgot-password
      page-name="forgot-password"
      hass="[[hass]]"
      email="{{_loginEmail}}"
    ></ha-config-cloud-forgot-password>
  </template>
`}static get properties(){return{hass:Object,isWide:Boolean,loadingAccount:{type:Boolean,value:!1},cloudStatus:{type:Object},_flashMessage:{type:String,value:""},route:Object,_routeData:Object,_routeTail:Object,_loginEmail:String}}static get observers(){return["_checkRoute(route, cloudStatus)"]}ready(){super.ready();this.addEventListener("cloud-done",ev=>{this._flashMessage=ev.detail.flashMessage;this.navigate("/config/cloud/login")})}_checkRoute(route){if(!route||"/cloud"!==route.path.substr(0,6))return;this._debouncer=debounce.a.debounce(this._debouncer,utils_async.d.after(0),()=>{if(!this.cloudStatus||!this.cloudStatus.logged_in&&!NOT_LOGGED_IN_URLS.includes(route.path)){this.navigate("/config/cloud/login",!0)}else if(this.cloudStatus.logged_in&&!LOGGED_IN_URLS.includes(route.path)){this.navigate("/config/cloud/account",!0)}})}_equals(a,b){return a===b}}customElements.define("ha-config-cloud",ha_config_cloud_HaConfigCloud)}}]);
//# sourceMappingURL=fe58ed4fb2fe05248809.chunk.js.map