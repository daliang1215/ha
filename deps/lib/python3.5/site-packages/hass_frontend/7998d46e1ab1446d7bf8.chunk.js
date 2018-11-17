(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{685:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_route=__webpack_require__(90),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),app_header=__webpack_require__(154),app_toolbar=__webpack_require__(121),paper_icon_button=__webpack_require__(62),paper_fab=__webpack_require__(245),preact=__webpack_require__(195),ha_app_layout=__webpack_require__(159),paper_card=__webpack_require__(153),paper_input=__webpack_require__(61),ha_config_section=__webpack_require__(202),js_script=__webpack_require__(416);class script_ScriptEditor extends preact.a{constructor(){super();this.onChange=this.onChange.bind(this);this.sequenceChanged=this.sequenceChanged.bind(this)}onChange(ev){this.props.onChange(Object.assign({},this.props.script,{[ev.target.name]:ev.target.value}))}sequenceChanged(sequence){this.props.onChange(Object.assign({},this.props.script,{sequence}))}render({script,isWide,hass,localize}){const{alias,sequence}=script;return Object(preact.c)("div",null,Object(preact.c)("ha-config-section",{"is-wide":isWide},Object(preact.c)("span",{slot:"header"},alias),Object(preact.c)("span",{slot:"introduction"},"Use scripts to execute a sequence of actions."),Object(preact.c)("paper-card",null,Object(preact.c)("div",{class:"card-content"},Object(preact.c)("paper-input",{label:"Name",name:"alias",value:alias,"onvalue-changed":this.onChange})))),Object(preact.c)("ha-config-section",{"is-wide":isWide},Object(preact.c)("span",{slot:"header"},"Sequence"),Object(preact.c)("span",{slot:"introduction"},"The sequence of actions of this script.",Object(preact.c)("p",null,Object(preact.c)("a",{href:"https://home-assistant.io/docs/scripts/",target:"_blank"},"Learn more about available actions."))),Object(preact.c)(js_script.a,{script:sequence,onChange:this.sequenceChanged,hass:hass,localize:localize})))}}var unmount=__webpack_require__(412),compute_object_id=__webpack_require__(114),compute_state_name=__webpack_require__(27),navigate_mixin=__webpack_require__(82),localize_mixin=__webpack_require__(10);function ha_script_editor_ScriptEditor(mountEl,props,mergeEl){return Object(preact.e)(Object(preact.c)(script_ScriptEditor,props),mountEl,mergeEl)}class ha_script_editor_HaScriptEditor extends Object(localize_mixin.a)(Object(navigate_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="ha-style">
      .errors {
        padding: 20px;
        font-weight: bold;
        color: var(--google-red-500);
      }
      .content {
        padding-bottom: 20px;
      }
      paper-card {
        display: block;
      }
      .triggers,
      .script {
        margin-top: -16px;
      }
      .triggers paper-card,
      .script paper-card {
        margin-top: 16px;
      }
      .add-card paper-button {
        display: block;
        text-align: center;
      }
      .card-menu {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        color: var(--primary-text-color);
      }
      .card-menu paper-item {
        cursor: pointer;
      }
      span[slot=introduction] a {
        color: var(--primary-color);
      }
      paper-fab {
        position: fixed;
        bottom: 16px;
        right: 16px;
        z-index: 1;
        margin-bottom: -80px;
        transition: margin-bottom .3s;
      }

      paper-fab[is-wide] {
        bottom: 24px;
        right: 24px;
      }

      paper-fab[dirty] {
        margin-bottom: 0;
      }
    </style>
    <ha-app-layout has-scrolling-region="">
      <app-header slot="header" fixed="">
        <app-toolbar>
          <paper-icon-button icon="hass:arrow-left" on-click="backTapped"></paper-icon-button>
          <div main-title="">Script [[computeName(script)]]</div>
        </app-toolbar>
      </app-header>
      <div class="content">
        <template is="dom-if" if="[[errors]]">
          <div class="errors">[[errors]]</div>
        </template>
        <div id="root"></div>
      </div>
      <paper-fab slot="fab" is-wide$="[[isWide]]" dirty$="[[dirty]]" icon="hass:content-save" title="Save" on-click="saveScript"></paper-fab>
    </ha-app-layout>
`}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},errors:{type:Object,value:null},dirty:{type:Boolean,value:!1},config:{type:Object,value:null},script:{type:Object,observer:"scriptChanged"},creatingNew:{type:Boolean,observer:"creatingNewChanged"},isWide:{type:Boolean,observer:"_updateComponent"},_rendered:{type:Object,value:null},_renderScheduled:{type:Boolean,value:!1}}}ready(){this.configChanged=this.configChanged.bind(this);super.ready()}disconnectedCallback(){super.disconnectedCallback();if(this._rendered){Object(unmount.a)(this._rendered);this._rendered=null}}configChanged(config){if(null===this._rendered)return;this.config=config;this.errors=null;this.dirty=!0;this._updateComponent()}scriptChanged(newVal,oldVal){if(!newVal)return;if(!this.hass){setTimeout(()=>this.scriptChanged(newVal,oldVal),0);return}if(oldVal&&oldVal.entity_id===newVal.entity_id){return}this.hass.callApi("get","config/script/config/"+Object(compute_object_id.a)(newVal.entity_id)).then(config=>{var value=config.sequence;if(value&&!Array.isArray(value)){config.sequence=[value]}this.dirty=!1;this.config=config;this._updateComponent()},()=>{alert("Only scripts inside scripts.yaml are editable.");history.back()})}creatingNewChanged(newVal){if(!newVal){return}this.dirty=!1;this.config={alias:"New Script",sequence:[{service:"",data:{}}]};this._updateComponent()}backTapped(){if(this.dirty&&!confirm("You have unsaved changes. Are you sure you want to leave?")){return}history.back()}_updateComponent(){if(this._renderScheduled||!this.hass||!this.config)return;this._renderScheduled=!0;Promise.resolve().then(()=>{this._rendered=ha_script_editor_ScriptEditor(this.$.root,{script:this.config,onChange:this.configChanged,isWide:this.isWide,hass:this.hass,localize:this.localize},this._rendered);this._renderScheduled=!1})}saveScript(){var id=this.creatingNew?""+Date.now():Object(compute_object_id.a)(this.script.entity_id);this.hass.callApi("post","config/script/config/"+id,this.config).then(()=>{this.dirty=!1;if(this.creatingNew){this.navigate(`/config/script/edit/${id}`,!0)}},errors=>{this.errors=errors.body.message;throw errors})}computeName(script){return script&&Object(compute_state_name.a)(script)}}customElements.define("ha-script-editor",ha_script_editor_HaScriptEditor);var paper_item_body=__webpack_require__(198),paper_item=__webpack_require__(119);class ha_script_picker_HaScriptPicker extends Object(localize_mixin.a)(Object(navigate_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
    <style include="ha-style">
      :host {
        display: block;
      }

      paper-item {
        cursor: pointer;
      }

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

      a {
        color: var(--primary-color);
      }
    </style>

    <ha-app-layout has-scrolling-region="">
      <app-header slot="header" fixed="">
        <app-toolbar>
          <paper-icon-button icon="hass:arrow-left" on-click="_backTapped"></paper-icon-button>
          <div main-title="">[[localize('ui.panel.config.script.caption')]]</div>
        </app-toolbar>
      </app-header>

      <ha-config-section is-wide="[[isWide]]">
        <div slot="header">Script Editor</div>
        <div slot="introduction">
          The script editor allows you to create and edit scripts.
          Please read <a href="https://home-assistant.io/docs/scripts/editor/" target="_blank">the instructions</a> to make sure that you have configured Home Assistant correctly.
        </div>

        <paper-card heading="Pick script to edit">
          <template is="dom-if" if="[[!scripts.length]]">
            <div class="card-content">
              <p>We couldn't find any editable scripts.</p>
            </div>
          </template>
          <template is="dom-repeat" items="[[scripts]]" as="script">
            <paper-item>
              <paper-item-body two-line="" on-click="scriptTapped">
                <div>[[computeName(script)]]</div>
                <div secondary="">[[computeDescription(script)]]</div>
              </paper-item-body>
              <iron-icon icon="hass:chevron-right"></iron-icon>
            </paper-item>
          </template>
        </paper-card>
      </ha-config-section>

      <paper-fab slot="fab" is-wide$="[[isWide]]" icon="hass:plus" title="Add Script" on-click="addScript"></paper-fab>
    </ha-app-layout>
`}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},scripts:{type:Array},isWide:{type:Boolean}}}scriptTapped(ev){this.navigate("/config/script/edit/"+this.scripts[ev.model.index].entity_id)}addScript(){this.navigate("/config/script/new")}computeName(script){return Object(compute_state_name.a)(script)}computeDescription(){return""}_backTapped(){history.back()}}customElements.define("ha-script-picker",ha_script_picker_HaScriptPicker);var compute_state_domain=__webpack_require__(23);class ha_config_script_HaConfigScript extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      ha-script-picker,
      ha-script-editor {
        height: 100%;
      }
    </style>
    <app-route route="[[route]]" pattern="/script/edit/:script" data="{{_routeData}}" active="{{_edittingScript}}"></app-route>
    <app-route route="[[route]]" pattern="/script/new" active="{{_creatingNew}}"></app-route>

    <template is="dom-if" if="[[!showEditor]]">
      <ha-script-picker hass="[[hass]]" narrow="[[narrow]]" show-menu="[[showMenu]]" scripts="[[scripts]]" is-wide="[[isWide]]"></ha-script-picker>
    </template>

    <template is="dom-if" if="[[showEditor]]" restamp="">
      <ha-script-editor hass="[[hass]]" script="[[script]]" is-wide="[[isWide]]" creating-new="[[_creatingNew]]"></ha-script-editor>
    </template>
`}static get properties(){return{hass:Object,narrow:Boolean,showMenu:Boolean,route:Object,isWide:Boolean,_routeData:Object,_routeMatches:Boolean,_creatingNew:Boolean,_edittingScript:Boolean,scripts:{type:Array,computed:"computeScripts(hass)"},script:{type:Object,computed:"computeScript(scripts, _edittingScript, _routeData)"},showEditor:{type:Boolean,computed:"computeShowEditor(_edittingScript, _creatingNew)"}}}computeScript(scripts,edittingAddon,routeData){if(!scripts||!edittingAddon){return null}for(var i=0;i<scripts.length;i++){if(scripts[i].entity_id===routeData.script){return scripts[i]}}return null}computeScripts(hass){var scripts=[];Object.keys(hass.states).forEach(function(key){var entity=hass.states[key];if("script"===Object(compute_state_domain.a)(entity)){scripts.push(entity)}});return scripts.sort(function(entityA,entityB){var nameA=Object(compute_state_name.a)(entityA),nameB=Object(compute_state_name.a)(entityB);if(nameA<nameB){return-1}if(nameA>nameB){return 1}return 0})}computeShowEditor(_edittingScript,_creatingNew){return _creatingNew||_edittingScript}}customElements.define("ha-config-script",ha_config_script_HaConfigScript)}}]);
//# sourceMappingURL=7998d46e1ab1446d7bf8.chunk.js.map