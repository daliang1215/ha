(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{716:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_header_layout=__webpack_require__(155),app_header=__webpack_require__(154),paper_card=__webpack_require__(153),paper_item_body=__webpack_require__(198),paper_item=__webpack_require__(119),paper_button=__webpack_require__(54),app_toolbar=__webpack_require__(121),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),ha_menu_button=__webpack_require__(134),ha_style=__webpack_require__(120),events_mixin=__webpack_require__(16),localize_mixin=__webpack_require__(10),paper_dialog=__webpack_require__(207),paper_spinner=__webpack_require__(124);class ha_change_password_card_HaChangePasswordCard extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style include="ha-style">
      .error {
        color: red;
      }
      .status {
        color: var(--primary-color);
      }
      .error, .status {
        position: absolute;
        top: -4px;
      }
      paper-card {
        display: block;
      }
      .currentPassword {
        margin-top: -4px;
      }
    </style>
    <div>
      <paper-card heading="[[localize('ui.panel.profile.change_password.header')]]">
        <div class="card-content">
          <template is="dom-if" if="[[_errorMsg]]">
            <div class='error'>[[_errorMsg]]</div>
          </template>
          <template is="dom-if" if="[[_statusMsg]]">
            <div class="status">[[_statusMsg]]</div>
          </template>
          <paper-input
            class="currentPassword"
            label="[[localize('ui.panel.profile.change_password.current_password')]]"
            type="password"
            value="{{_currentPassword}}"
            required
            auto-validate
            error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
          ></paper-input>
          <template is="dom-if" if="[[_currentPassword]]">
            <paper-input
              label="[[localize('ui.panel.profile.change_password.new_password')]]"
              type="password"
              value="{{_password1}}"
              required
              auto-validate
              error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
            ></paper-input>
            <paper-input
              label="[[localize('ui.panel.profile.change_password.confirm_new_password')]]"
              type="password"
              value="{{_password2}}"
              required
              auto-validate
              error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
            ></paper-input>
          </template>
        </div>
        <div class="card-actions">
          <template is="dom-if" if="[[_loading]]">
            <div><paper-spinner active></paper-spinner></div>
          </template>
          <template is="dom-if" if="[[!_loading]]">
            <paper-button
              on-click="_changePassword"
            >[[localize('ui.panel.profile.change_password.submit')]]</paper-button>
          </template>
        </div>
      </paper-card>
    </div>
`}static get properties(){return{hass:Object,_loading:{type:Boolean,value:!1},_statusMsg:String,_errorMsg:String,_currentPassword:String,_password1:String,_password2:String}}ready(){super.ready();this.addEventListener("keypress",ev=>{this._statusMsg=null;if(13===ev.keyCode){this._changePassword()}})}async _changePassword(){this._statusMsg=null;if(!this._currentPassword||!this._password1||!this._password2)return;if(this._password1!==this._password2){this._errorMsg="New password confirmation doesn't match";return}if(this._currentPassword===this._password1){this._errorMsg="New password must be different than current password";return}this._loading=!0;this._errorMsg=null;try{await this.hass.callWS({type:"config/auth_provider/homeassistant/change_password",current_password:this._currentPassword,new_password:this._password1});this.setProperties({_statusMsg:"Password changed successfully",_currentPassword:null,_password1:null,_password2:null})}catch(err){this._errorMsg=err.message}this._loading=!1}}customElements.define("ha-change-password-card",ha_change_password_card_HaChangePasswordCard);let registeredDialog=!1;class ha_mfa_modules_card_HaMfaModulesCard extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="iron-flex ha-style">
      .error {
        color: red;
      }
      .status {
        color: var(--primary-color);
      }
      .error, .status {
        position: absolute;
        top: -4px;
      }
      paper-card {
        display: block;
        max-width: 600px;
        margin: 16px auto;
      }
      paper-button {
        color: var(--primary-color);
        font-weight: 500;
        margin-right: -.57em;
      }
    </style>
    <paper-card heading="[[localize('ui.panel.profile.mfa.header')]]">
      <template is="dom-repeat" items="[[mfaModules]]" as="module">
        <paper-item>
          <paper-item-body two-line="">
            <div>[[module.name]]</div>
            <div secondary="">[[module.id]]</div>
          </paper-item-body>
          <template is="dom-if" if="[[module.enabled]]">
            <paper-button
              on-click="_disable"
            >[[localize('ui.panel.profile.mfa.disable')]]</paper-button>
          </template>
          <template is="dom-if" if="[[!module.enabled]]">
            <paper-button
              on-click="_enable"
            >[[localize('ui.panel.profile.mfa.enable')]]</paper-button>
          </template>
        </paper-item>
      </template>
    </paper-card>
`}static get properties(){return{hass:Object,_loading:{type:Boolean,value:!1},_statusMsg:String,_errorMsg:String,mfaModules:Array}}connectedCallback(){super.connectedCallback();if(!registeredDialog){registeredDialog=!0;this.fire("register-dialog",{dialogShowEvent:"show-mfa-module-setup-flow",dialogTag:"ha-mfa-module-setup-flow",dialogImport:()=>__webpack_require__.e(61).then(__webpack_require__.bind(null,710))})}}_enable(ev){this.fire("show-mfa-module-setup-flow",{hass:this.hass,mfaModuleId:ev.model.module.id,dialogClosedCallback:()=>this._refreshCurrentUser()})}_disable(ev){if(!confirm(this.localize("ui.panel.profile.mfa.confirm_disable","name",ev.model.module.name))){return}const mfaModuleId=ev.model.module.id;this.hass.callWS({type:"auth/depose_mfa",mfa_module_id:mfaModuleId}).then(()=>{this._refreshCurrentUser()})}_refreshCurrentUser(){this.fire("hass-refresh-current-user")}}customElements.define("ha-mfa-modules-card",ha_mfa_modules_card_HaMfaModulesCard);var paper_icon_button=__webpack_require__(62),paper_tooltip=__webpack_require__(239),format_date_time=__webpack_require__(78);class ha_settings_row_HaSettingsRow extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      :host {
        display: flex;
        padding: 0 16px;
        align-content: normal;
        align-self: auto;
        align-items: center;
      }
      :host([narrow]) {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        padding-bottom: 8px;
      }
      paper-item-body {
        padding-right: 16px;
      }
    </style>
    <paper-item-body two-line$='[[!threeLine]]' three-line$='[[threeLine]]'>
      <slot name="heading"></slot>
      <div secondary><slot name="description"></slot></div>
    </paper-item-body>
    <slot></slot>
    `}static get properties(){return{narrow:{type:Boolean,reflectToAttribute:!0},threeLine:{type:Boolean,value:!1}}}}customElements.define("ha-settings-row",ha_settings_row_HaSettingsRow);class ha_refresh_tokens_card_HaRefreshTokens extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style>
      paper-card {
        display: block;
      }
      paper-icon-button {
        color: var(--primary-text-color);
      }
      paper-icon-button[disabled] {
        color: var(--disabled-text-color);
      }
    </style>
    <paper-card heading="[[localize('ui.panel.profile.refresh_tokens.header')]]">
      <div class="card-content">[[localize('ui.panel.profile.refresh_tokens.description')]]</div>
      <template is='dom-repeat' items='[[_computeTokens(refreshTokens)]]'>
        <ha-settings-row three-line>
          <span slot='heading'>[[_formatTitle(item.client_id)]]</span>
          <div slot='description'>[[_formatCreatedAt(item.created_at)]]</div>
          <div slot='description'>[[_formatLastUsed(item)]]</div>
          <div>
            <template is='dom-if' if='[[item.is_current]]'>
              <paper-tooltip
                position="left"
              >[[localize('ui.panel.profile.refresh_tokens.current_token_tooltip')]]</paper-tooltip>
            </template>
            <paper-icon-button
              icon="hass:delete"
              on-click='_handleDelete'
              disabled="[[item.is_current]]"
            ></paper-icon-button>
          </div>
        </ha-settings-row>
      </template>
    </paper-card>
    `}static get properties(){return{hass:Object,refreshTokens:Array}}_computeTokens(refreshTokens){return refreshTokens.filter(tkn=>"normal"===tkn.type).reverse()}_formatTitle(clientId){return this.localize("ui.panel.profile.refresh_tokens.token_title","clientId",clientId)}_formatCreatedAt(created){return this.localize("ui.panel.profile.refresh_tokens.created_at","date",Object(format_date_time.a)(new Date(created),this.hass.language))}_formatLastUsed(item){return item.last_used_at?this.localize("ui.panel.profile.refresh_tokens.last_used","date",Object(format_date_time.a)(new Date(item.last_used_at),this.hass.language),"location",item.last_used_ip):this.localize("ui.panel.profile.refresh_tokens.not_used")}async _handleDelete(ev){if(!confirm(this.localize("ui.panel.profile.refresh_tokens.confirm_delete","name",ev.model.item.client_id))){return}try{await this.hass.callWS({type:"auth/delete_refresh_token",refresh_token_id:ev.model.item.id});this.fire("hass-refresh-tokens")}catch(err){console.error(err);alert(this.localize("ui.panel.profile.refresh_tokens.delete_failed"))}}}customElements.define("ha-refresh-tokens-card",ha_refresh_tokens_card_HaRefreshTokens);class ha_long_lived_access_tokens_card_HaLongLivedTokens extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="ha-style">
      paper-card {
        display: block;
      }
      .card-content {
        margin: -1em 0;
      }
      a {
        color: var(--primary-color);
      }
      paper-icon-button {
        color: var(--primary-text-color);
      }
    </style>
    <paper-card heading="[[localize('ui.panel.profile.long_lived_access_tokens.header')]]">
      <div class="card-content">
        <p>
          [[localize('ui.panel.profile.long_lived_access_tokens.description')]]
          <a href='https://developers.home-assistant.io/docs/en/auth_api.html#making-authenticated-requests' target='_blank'>
            [[localize('ui.panel.profile.long_lived_access_tokens.learn_auth_requests')]]
          </a>
        </p>
        <template is='dom-if' if='[[!_tokens.length]]'>
          <p>[[localize('ui.panel.profile.long_lived_access_tokens.empty_state')]]</p>
        </template>
      </div>
      <template is='dom-repeat' items='[[_tokens]]'>
        <ha-settings-row two-line>
          <span slot='heading'>[[item.client_name]]</span>
          <div slot='description'>[[_formatCreatedAt(item.created_at)]]</div>
          <paper-icon-button icon="hass:delete" on-click='_handleDelete'></paper-icon-button>
        </ha-settings-row>
      </template>
      <div class='card-actions'>
        <paper-button on-click='_handleCreate'>
          [[localize('ui.panel.profile.long_lived_access_tokens.create')]]
        </paper-button>
      </div>
    </paper-card>
    `}static get properties(){return{hass:Object,refreshTokens:Array,_tokens:{type:Array,computed:"_computeTokens(refreshTokens)"}}}_computeTokens(refreshTokens){return refreshTokens.filter(tkn=>"long_lived_access_token"===tkn.type).reverse()}_formatTitle(name){return this.localize("ui.panel.profile.long_lived_access_tokens.token_title","name",name)}_formatCreatedAt(created){return this.localize("ui.panel.profile.long_lived_access_tokens.created_at","date",Object(format_date_time.a)(new Date(created),this.hass.language))}async _handleCreate(){const name=prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_name"));if(!name)return;try{const token=await this.hass.callWS({type:"auth/long_lived_access_token",lifespan:3650,client_name:name});prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_copy_token"),token);this.fire("hass-refresh-tokens")}catch(err){console.error(err);alert(this.localize("ui.panel.profile.long_lived_access_tokens.create_failed"))}}async _handleDelete(ev){if(!confirm(this.localize("ui.panel.profile.long_lived_access_tokens.confirm_delete","name",ev.model.item.client_name))){return}try{await this.hass.callWS({type:"auth/delete_refresh_token",refresh_token_id:ev.model.item.id});this.fire("hass-refresh-tokens")}catch(err){console.error(err);alert(this.localize("ui.panel.profile.long_lived_access_tokens.delete_failed"))}}}customElements.define("ha-long-lived-access-tokens-card",ha_long_lived_access_tokens_card_HaLongLivedTokens);var paper_dropdown_menu=__webpack_require__(123),paper_listbox=__webpack_require__(122);class ha_pick_language_row_HaPickLanguageRow extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style>
      a { color: var(--primary-color); }
    </style>
    <ha-settings-row narrow='[[narrow]]'>
      <span slot='heading'>[[localize('ui.panel.profile.language.header')]]</span>
      <span slot='description'>
        <a
          href='https://developers.home-assistant.io/docs/en/internationalization_translation.html'
          target='_blank'>[[localize('ui.panel.profile.language.link_promo')]]</a>
      </span>
      <paper-dropdown-menu label="[[localize('ui.panel.profile.language.dropdown_label')]]" dynamic-align="">
        <paper-listbox slot="dropdown-content" attr-for-selected="language-tag" selected="{{languageSelection}}">
          <template is="dom-repeat" items="[[languages]]">
            <paper-item language-tag$="[[item.tag]]">[[item.nativeName]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    </ha-settings-row>
    `}static get properties(){return{hass:Object,narrow:Boolean,languageSelection:{type:String,observer:"languageSelectionChanged"},languages:{type:Array,computed:"computeLanguages(hass)"}}}static get observers(){return["setLanguageSelection(language)"]}computeLanguages(hass){if(!hass||!hass.translationMetadata){return[]}return Object.keys(hass.translationMetadata.translations).map(key=>({tag:key,nativeName:hass.translationMetadata.translations[key].nativeName}))}setLanguageSelection(language){this.languageSelection=language}languageSelectionChanged(newVal){if(newVal!==this.hass.language){this.fire("hass-language-select",{language:newVal})}}ready(){super.ready();if(this.hass&&this.hass.language){this.setLanguageSelection(this.hass.language)}}}customElements.define("ha-pick-language-row",ha_pick_language_row_HaPickLanguageRow);class ha_pick_theme_row_HaPickThemeRow extends Object(localize_mixin.a)(Object(events_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style>
      a { color: var(--primary-color); }
    </style>
    <ha-settings-row narrow='[[narrow]]'>
      <span slot='heading'>[[localize('ui.panel.profile.themes.header')]]</span>
      <span slot='description'>
        <template is='dom-if' if='[[!_hasThemes]]'>
        [[localize('ui.panel.profile.themes.error_no_theme')]]
        </template>
        <a
          href='https://www.home-assistant.io/components/frontend/#defining-themes'
          target='_blank'>[[localize('ui.panel.profile.themes.link_promo')]]</a>
      </span>
      <paper-dropdown-menu
        label="[[localize('ui.panel.profile.themes.dropdown_label')]]"
        dynamic-align
        disabled='[[!_hasThemes]]'
      >
        <paper-listbox slot="dropdown-content" selected="{{selectedTheme}}">
          <template is="dom-repeat" items="[[themes]]" as="theme">
            <paper-item>[[theme]]</paper-item>
          </template>
        </paper-listbox>
      </paper-dropdown-menu>
    </ha-settings-row>
    `}static get properties(){return{hass:Object,narrow:Boolean,_hasThemes:{type:Boolean,computed:"_compHasThemes(hass)"},themes:{type:Array,computed:"_computeThemes(hass)"},selectedTheme:{type:Number}}}static get observers(){return["selectionChanged(hass, selectedTheme)"]}_compHasThemes(hass){return hass.themes&&hass.themes.themes&&Object.keys(hass.themes.themes).length}ready(){super.ready();if(this.hass.selectedTheme&&0<this.themes.indexOf(this.hass.selectedTheme)){this.selectedTheme=this.themes.indexOf(this.hass.selectedTheme)}else if(!this.hass.selectedTheme){this.selectedTheme=0}}_computeThemes(hass){if(!hass)return[];return["Backend-selected","default"].concat(Object.keys(hass.themes.themes).sort())}selectionChanged(hass,selection){if(0<selection&&selection<this.themes.length){if(hass.selectedTheme!==this.themes[selection]){this.fire("settheme",this.themes[selection])}}else if(0===selection&&""!==hass.selectedTheme){this.fire("settheme","")}}}customElements.define("ha-pick-theme-row",ha_pick_theme_row_HaPickThemeRow);var iron_flex_layout_classes=__webpack_require__(30),iron_label=__webpack_require__(475),is_component_loaded=__webpack_require__(135),paper_toggle_button=__webpack_require__(158);const pushSupported="serviceWorker"in navigator&&"PushManager"in window&&("https:"===document.location.protocol||"localhost"===document.location.hostname||"127.0.0.1"===document.location.hostname);class ha_push_notifications_toggle_HaPushNotificationsToggle extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <paper-toggle-button
      disabled="[[_compDisabled(disabled, loading)]]"
      checked="{{pushChecked}}"
    ></paper-toggle-button>
`}static get properties(){return{hass:{type:Object,value:null},disabled:{type:Boolean,value:!1},pushChecked:{type:Boolean,value:"Notification"in window&&"granted"===Notification.permission,observer:"handlePushChange"},loading:{type:Boolean,value:!0}}}async connectedCallback(){super.connectedCallback();if(!pushSupported)return;try{const reg=await navigator.serviceWorker.ready;if(!reg.pushManager){return}reg.pushManager.getSubscription().then(subscription=>{this.loading=!1;this.pushChecked=!!subscription})}catch(err){}}handlePushChange(pushChecked){if(!pushSupported)return;if(pushChecked){this.subscribePushNotifications()}else{this.unsubscribePushNotifications()}}async subscribePushNotifications(){const reg=await navigator.serviceWorker.ready;try{const sub=await reg.pushManager.subscribe({userVisibleOnly:!0});let browserName;if(-1<navigator.userAgent.toLowerCase().indexOf("firefox")){browserName="firefox"}else{browserName="chrome"}await this.hass.callApi("POST","notify.html5",{subscription:sub,browser:browserName})}catch(err){const message=err.message||"Notification registration failed.";console.error(err);this.fire("hass-notification",{message});this.pushChecked=!1}}async unsubscribePushNotifications(){const reg=await navigator.serviceWorker.ready;try{const sub=await reg.pushManager.getSubscription();if(!sub)return;await this.hass.callApi("DELETE","notify.html5",{subscription:sub});await sub.unsubscribe()}catch(err){const message=err.message||"Failed unsubscribing for push notifications.";console.error("Error in unsub push",err);this.fire("hass-notification",{message});this.pushChecked=!0}}_compDisabled(disabled,loading){return disabled||loading}}customElements.define("ha-push-notifications-toggle",ha_push_notifications_toggle_HaPushNotificationsToggle);class ha_push_notifications_row_HaPushNotificationsRow extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
    <style>
      a { color: var(--primary-color); }
    </style>
    <ha-settings-row narrow='[[narrow]]'>
      <span slot='heading'>[[localize('ui.panel.profile.push_notifications.header')]]</span>
      <span
        slot='description'
      >
        [[_description(_platformLoaded, _pushSupported)]]
        <a
          href='https://www.home-assistant.io/components/notify.html5/'
          target='_blank'>[[localize('ui.panel.profile.push_notifications.link_promo')]]</a>
      </span>
      <ha-push-notifications-toggle
        hass="[[hass]]"
        disabled='[[_error]]'
      ></ha-push-notifications-toggle>
    </ha-settings-row>
    `}static get properties(){return{hass:Object,narrow:Boolean,_platformLoaded:{type:Boolean,computed:"_compPlatformLoaded(hass)"},_pushSupported:{type:Boolean,value:pushSupported},_error:{type:Boolean,computed:"_compError(_platformLoaded, _pushSupported)"}}}_compPlatformLoaded(hass){return Object(is_component_loaded.a)(hass,"notify.html5")}_compError(platformLoaded,pushSupported_){return!platformLoaded||!pushSupported_}_description(platformLoaded,pushSupported_){let key;if(!pushSupported_){key="error_use_https"}else if(!platformLoaded){key="error_load_platform"}else{key="description"}return this.localize(`ui.panel.profile.push_notifications.${key}`)}}customElements.define("ha-push-notifications-row",ha_push_notifications_row_HaPushNotificationsRow);class ha_panel_profile_HaPanelProfile extends Object(events_mixin.a)(Object(localize_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="ha-style">
      :host {
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }

      .content {
        display: block;
        max-width: 600px;
        margin: 0 auto;
      }

      .content > * {
        display: block;
        margin: 24px 0;
      }
    </style>

    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
          <div main-title>[[localize('panel.profile')]]</div>
        </app-toolbar>
      </app-header>

      <div class='content'>
        <paper-card heading='[[hass.user.name]]'>
          <div class='card-content'>
            [[localize('ui.panel.profile.current_user', 'fullName', hass.user.name)]]
            <template is='dom-if' if='[[hass.user.is_owner]]'>[[localize('ui.panel.profile.is_owner')]]</template>
          </div>

          <hello-world hass='[[hass]]'></hello-world>

          <ha-pick-language-row
            narrow="[[narrow]]"
            hass="[[hass]]"
          ></ha-pick-language-row>
          <ha-pick-theme-row
            narrow="[[narrow]]"
            hass="[[hass]]"
          ></ha-pick-theme-row>
          <ha-push-notifications-row
            narrow="[[narrow]]"
            hass="[[hass]]"
          ></ha-push-notifications-row>

          <div class='card-actions'>
            <paper-button
              class='warning'
              on-click='_handleLogOut'
            >[[localize('ui.panel.profile.logout')]]</paper-button>
          </div>
        </paper-card>

        <template is="dom-if" if="[[_canChangePassword(hass.user)]]">
          <ha-change-password-card hass="[[hass]]"></ha-change-password-card>
        </template>

        <ha-mfa-modules-card
          hass='[[hass]]'
          mfa-modules='[[hass.user.mfa_modules]]'
        ></ha-mfa-modules-card>

        <ha-refresh-tokens-card
          hass='[[hass]]'
          refresh-tokens='[[_refreshTokens]]'
          on-hass-refresh-tokens='_refreshRefreshTokens'
        ></ha-refresh-tokens-card>

        <ha-long-lived-access-tokens-card
          hass='[[hass]]'
          refresh-tokens='[[_refreshTokens]]'
          on-hass-refresh-tokens='_refreshRefreshTokens'
        ></ha-long-lived-access-tokens-card>
      </div>
    </app-header-layout>
    `}static get properties(){return{hass:Object,narrow:Boolean,showMenu:Boolean,_refreshTokens:Array}}connectedCallback(){super.connectedCallback();this._refreshRefreshTokens()}async _refreshRefreshTokens(){this._refreshTokens=await this.hass.callWS({type:"auth/refresh_tokens"})}_handleLogOut(){this.fire("hass-logout")}_canChangePassword(user){return user.credentials.some(cred=>"homeassistant"===cred.auth_provider_type)}}customElements.define("ha-panel-profile",ha_panel_profile_HaPanelProfile)}}]);
//# sourceMappingURL=72bf51ee5b50dd77aa96.chunk.js.map