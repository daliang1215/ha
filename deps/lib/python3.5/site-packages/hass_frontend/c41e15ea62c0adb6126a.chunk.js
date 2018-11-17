(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{717:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var lit_element=__webpack_require__(196),fire_event=__webpack_require__(75),paper_button=__webpack_require__(54),paper_textarea=__webpack_require__(208),paper_dialog_scrollable=__webpack_require__(210),paper_dialog=__webpack_require__(207);const getCardConfig=(hass,cardId)=>hass.callWS({type:"lovelace/config/card/get",card_id:cardId}),updateCardConfig=(hass,cardId,config)=>hass.callWS({type:"lovelace/config/card/update",card_id:cardId,card_config:config});class hui_yaml_editor_HuiYAMLEditor extends lit_element.a{static get properties(){return{yaml:{}}}render(){return lit_element.c`
      <style>
        paper-textarea {
          --paper-input-container-shared-input-style_-_font-family: monospace;
        }
      </style>
      <paper-textarea
        value="${this.yaml}"
        @value-changed="${this._valueChanged}"
      ></paper-textarea>
    `}_valueChanged(ev){this.yaml=ev.target.value;Object(fire_event.a)(this,"yaml-changed",{yaml:ev.target.value})}}customElements.define("hui-yaml-editor",hui_yaml_editor_HuiYAMLEditor);var js_yaml=__webpack_require__(652),js_yaml_default=__webpack_require__.n(js_yaml),create_card_element=__webpack_require__(295),create_error_card_config=__webpack_require__(254);class hui_yaml_card_preview_HuiYAMLCardPreview extends HTMLElement{set hass(value){this._hass=value;if(this.lastChild){this.lastChild.hass=value}}set yaml(value){if(this.lastChild){this.removeChild(this.lastChild)}if(""===value){return}let conf;try{conf=js_yaml_default.a.safeLoad(value)}catch(err){conf=Object(create_error_card_config.a)(`Invalid YAML: ${err.message}`,void 0)}const element=Object(create_card_element.a)(conf);if(this._hass){element.hass=this._hass}this.appendChild(element)}}customElements.define("hui-yaml-card-preview",hui_yaml_card_preview_HuiYAMLCardPreview);__webpack_require__.d(__webpack_exports__,"HuiDialogEditCard",function(){return hui_dialog_edit_card_HuiDialogEditCard});class hui_dialog_edit_card_HuiDialogEditCard extends lit_element.a{static get properties(){return{hass:{},cardId:{type:Number},_cardConfig:{},_dialogClosedCallback:{}}}async showDialog({hass,cardId,reloadLovelace}){this.hass=hass;this._cardId=cardId;this._reloadLovelace=reloadLovelace;this._cardConfig="";this._loadConfig();await this.updateComplete;this._dialog.open()}get _dialog(){return this.shadowRoot.querySelector("paper-dialog")}get _previewEl(){return this.shadowRoot.querySelector("hui-yaml-card-preview")}render(){return lit_element.c`
      <style>
        paper-dialog {
          width: 650px;
        }
      </style>
      <paper-dialog with-backdrop>
        <h2>Card Configuration</h2>
        <paper-dialog-scrollable>
          <hui-yaml-editor
            .yaml="${this._cardConfig}"
            @yaml-changed="${this._handleYamlChanged}"
          ></hui-yaml-editor>
          <hui-yaml-card-preview
            .hass="${this.hass}"
            .yaml="${this._cardConfig}"
          ></hui-yaml-card-preview>
        </paper-dialog-scrollable>
        <div class="paper-dialog-buttons">
          <paper-button @click="${this._closeDialog}">Cancel</paper-button>
          <paper-button @click="${this._updateConfig}">Save</paper-button>
        </div>
      </paper-dialog>
    `}_handleYamlChanged(ev){this._previewEl.yaml=ev.detail.yaml}_closeDialog(){this._dialog.close()}async _loadConfig(){this._cardConfig=await getCardConfig(this.hass,this._cardId);await this.updateComplete;Object(fire_event.a)(this._dialog,"iron-resize")}async _updateConfig(){const newCardConfig=this.shadowRoot.querySelector("hui-yaml-editor").yaml;if(this._cardConfig===newCardConfig){this._dialog.close();return}try{await updateCardConfig(this.hass,this._cardId,newCardConfig);this._dialog.close();this._reloadLovelace()}catch(err){alert(`Saving failed: ${err.reason}`)}}}customElements.define("hui-dialog-edit-card",hui_dialog_edit_card_HuiDialogEditCard)}}]);
//# sourceMappingURL=c41e15ea62c0adb6126a.chunk.js.map