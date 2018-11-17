(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{679:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_route=__webpack_require__(90),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),app_header=__webpack_require__(154),app_toolbar=__webpack_require__(121),paper_icon_button=__webpack_require__(62),paper_fab=__webpack_require__(245),preact=__webpack_require__(195),ha_app_layout=__webpack_require__(159),paper_card=__webpack_require__(153),paper_input=__webpack_require__(61),ha_config_section=__webpack_require__(202),ha_markdown=__webpack_require__(126),paper_button=__webpack_require__(54),paper_menu_button=__webpack_require__(127),paper_item=__webpack_require__(119),paper_listbox=__webpack_require__(122),paper_dropdown_menu_light=__webpack_require__(342),json_textarea=__webpack_require__(343),preact_event=__webpack_require__(206);class event_EventTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger");this.eventDataChanged=this.eventDataChanged.bind(this)}eventDataChanged(event_data){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{event_data}))}render({trigger,localize}){const{event_type,event_data}=trigger;return Object(preact.c)("div",null,Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.event.event_type"),name:"event_type",value:event_type,"onvalue-changed":this.onChange}),Object(preact.c)(json_textarea.a,{label:localize("ui.panel.config.automation.editor.triggers.type.event.event_data"),value:event_data,onChange:this.eventDataChanged}))}}event_EventTrigger.defaultConfig={event_type:"",event_data:{}};var paper_radio_button=__webpack_require__(267),paper_radio_group=__webpack_require__(292);class homeassistant_HassTrigger extends preact.a{constructor(){super();this.radioGroupPicked=this.radioGroupPicked.bind(this)}radioGroupPicked(ev){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{event:ev.target.selected}))}render({trigger,localize}){const{event}=trigger;return Object(preact.c)("div",null,Object(preact.c)("label",{id:"eventlabel"},localize("ui.panel.config.automation.editor.triggers.type.homeassistant.event")),Object(preact.c)("paper-radio-group",{selected:event,"aria-labelledby":"eventlabel","onpaper-radio-group-changed":this.radioGroupPicked},Object(preact.c)("paper-radio-button",{name:"start"},localize("ui.panel.config.automation.editor.triggers.type.homeassistant.start")),Object(preact.c)("paper-radio-button",{name:"shutdown"},localize("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown"))))}}homeassistant_HassTrigger.defaultConfig={event:"start"};class mqtt_MQTTTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger")}render({trigger,localize}){const{topic,payload}=trigger;return Object(preact.c)("div",null,Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.mqtt.topic"),name:"topic",value:topic,"onvalue-changed":this.onChange}),Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.mqtt.payload"),name:"payload",value:payload,"onvalue-changed":this.onChange}))}}mqtt_MQTTTrigger.defaultConfig={topic:""};var ha_textarea=__webpack_require__(246),ha_entity_picker=__webpack_require__(215);class numeric_state_NumericStateTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger");this.entityPicked=this.entityPicked.bind(this)}entityPicked(ev){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{entity_id:ev.target.value}))}render({trigger,hass,localize}){const{value_template,entity_id,below,above}=trigger;return Object(preact.c)("div",null,Object(preact.c)("ha-entity-picker",{value:entity_id,onChange:this.entityPicked,hass:hass,allowCustomEntity:!0}),Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.numeric_state.above"),name:"above",value:above,"onvalue-changed":this.onChange}),Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.numeric_state.below"),name:"below",value:below,"onvalue-changed":this.onChange}),Object(preact.c)("ha-textarea",{label:localize("ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"),name:"value_template",value:value_template,"onvalue-changed":this.onChange}))}}numeric_state_NumericStateTrigger.defaultConfig={entity_id:""};class state_StateTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger");this.entityPicked=this.entityPicked.bind(this)}entityPicked(ev){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{entity_id:ev.target.value}))}render({trigger,hass,localize}){const{entity_id,to}=trigger,trgFrom=trigger.from;let trgFor=trigger.for;if(trgFor&&(trgFor.hours||trgFor.minutes||trgFor.seconds)){let{hours=0,minutes=0,seconds=0}=trgFor;hours=hours.toString();minutes=minutes.toString().padStart(2,"0");seconds=seconds.toString().padStart(2,"0");trgFor=`${hours}:${minutes}:${seconds}`}return Object(preact.c)("div",null,Object(preact.c)("ha-entity-picker",{value:entity_id,onChange:this.entityPicked,hass:hass,allowCustomEntity:!0}),Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.state.from"),name:"from",value:trgFrom,"onvalue-changed":this.onChange}),Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.state.to"),name:"to",value:to,"onvalue-changed":this.onChange}),Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.state.for"),name:"for",value:trgFor,"onvalue-changed":this.onChange}))}}state_StateTrigger.defaultConfig={entity_id:""};class sun_SunTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger");this.radioGroupPicked=this.radioGroupPicked.bind(this)}radioGroupPicked(ev){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{event:ev.target.selected}))}render({trigger,localize}){const{offset,event}=trigger;return Object(preact.c)("div",null,Object(preact.c)("label",{id:"eventlabel"},localize("ui.panel.config.automation.editor.triggers.type.sun.event")),Object(preact.c)("paper-radio-group",{selected:event,"aria-labelledby":"eventlabel","onpaper-radio-group-changed":this.radioGroupPicked},Object(preact.c)("paper-radio-button",{name:"sunrise"},localize("ui.panel.config.automation.editor.triggers.type.sun.sunrise")),Object(preact.c)("paper-radio-button",{name:"sunset"},localize("ui.panel.config.automation.editor.triggers.type.sun.sunset"))),Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.sun.offset"),name:"offset",value:offset,"onvalue-changed":this.onChange}))}}sun_SunTrigger.defaultConfig={event:"sunrise"};class template_TemplateTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger")}render({trigger,localize}){const{value_template}=trigger;return Object(preact.c)("div",null,Object(preact.c)("ha-textarea",{label:localize("ui.panel.config.automation.editor.triggers.type.template.value_template"),name:"value_template",value:value_template,"onvalue-changed":this.onChange}))}}template_TemplateTrigger.defaultConfig={value_template:""};class time_TimeTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger")}render({trigger,localize}){const{at}=trigger;return Object(preact.c)("div",null,Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.triggers.type.time.at"),name:"at",value:at,"onvalue-changed":this.onChange}))}}time_TimeTrigger.defaultConfig={at:""};var has_location=__webpack_require__(410),compute_state_domain=__webpack_require__(23);function zoneAndLocationFilter(stateObj){return Object(has_location.a)(stateObj)&&"zone"!==Object(compute_state_domain.a)(stateObj)}class zone_ZoneTrigger extends preact.a{constructor(){super();this.onChange=preact_event.a.bind(this,"trigger");this.radioGroupPicked=this.radioGroupPicked.bind(this);this.entityPicked=this.entityPicked.bind(this);this.zonePicked=this.zonePicked.bind(this)}entityPicked(ev){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{entity_id:ev.target.value}))}zonePicked(ev){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{zone:ev.target.value}))}radioGroupPicked(ev){this.props.onChange(this.props.index,Object.assign({},this.props.trigger,{event:ev.target.selected}))}render({trigger,hass,localize}){const{entity_id,zone,event}=trigger;return Object(preact.c)("div",null,Object(preact.c)("ha-entity-picker",{label:localize("ui.panel.config.automation.editor.triggers.type.zone.entity"),value:entity_id,onChange:this.entityPicked,hass:hass,allowCustomEntity:!0,entityFilter:zoneAndLocationFilter}),Object(preact.c)("ha-entity-picker",{label:localize("ui.panel.config.automation.editor.triggers.type.zone.zone"),value:zone,onChange:this.zonePicked,hass:hass,allowCustomEntity:!0,domainFilter:"zone"}),Object(preact.c)("label",{id:"eventlabel"},localize("ui.panel.config.automation.editor.triggers.type.zone.event")),Object(preact.c)("paper-radio-group",{selected:event,"aria-labelledby":"eventlabel","onpaper-radio-group-changed":this.radioGroupPicked},Object(preact.c)("paper-radio-button",{name:"enter"},localize("ui.panel.config.automation.editor.triggers.type.zone.enter")),Object(preact.c)("paper-radio-button",{name:"leave"},localize("ui.panel.config.automation.editor.triggers.type.zone.leave"))))}}zone_ZoneTrigger.defaultConfig={entity_id:"",zone:"",event:"enter"};const TYPES={event:event_EventTrigger,state:state_StateTrigger,homeassistant:homeassistant_HassTrigger,mqtt:mqtt_MQTTTrigger,numeric_state:numeric_state_NumericStateTrigger,sun:sun_SunTrigger,template:template_TemplateTrigger,time:time_TimeTrigger,zone:zone_ZoneTrigger},OPTIONS=Object.keys(TYPES).sort();class trigger_edit_TriggerEdit extends preact.a{constructor(){super();this.typeChanged=this.typeChanged.bind(this)}typeChanged(ev){const type=ev.target.selectedItem.attributes.platform.value;if(type!==this.props.trigger.platform){this.props.onChange(this.props.index,Object.assign({platform:type},TYPES[type].defaultConfig))}}render({index,trigger,onChange,hass,localize}){const Comp=TYPES[trigger.platform],selected=OPTIONS.indexOf(trigger.platform);if(!Comp){return Object(preact.c)("div",null,localize("ui.panel.config.automation.editor.triggers.unsupported_platform","platform",trigger.platform),Object(preact.c)("pre",null,JSON.stringify(trigger,null,2)))}return Object(preact.c)("div",null,Object(preact.c)("paper-dropdown-menu-light",{label:localize("ui.panel.config.automation.editor.triggers.type_select"),"no-animations":!0},Object(preact.c)("paper-listbox",{slot:"dropdown-content",selected:selected,"oniron-select":this.typeChanged},OPTIONS.map(opt=>Object(preact.c)("paper-item",{platform:opt},localize(`ui.panel.config.automation.editor.triggers.type.${opt}.label`))))),Object(preact.c)(Comp,{index:index,trigger:trigger,onChange:onChange,hass:hass,localize:localize}))}}class trigger_row_TriggerRow extends preact.a{constructor(){super();this.onDelete=this.onDelete.bind(this)}onDelete(){if(confirm(this.props.localize("ui.panel.config.automation.editor.triggers.delete_confirm"))){this.props.onChange(this.props.index,null)}}render(props){return Object(preact.c)("paper-card",null,Object(preact.c)("div",{class:"card-menu"},Object(preact.c)("paper-menu-button",{"no-animations":!0,"horizontal-align":"right","horizontal-offset":"-5","vertical-offset":"-5"},Object(preact.c)("paper-icon-button",{icon:"hass:dots-vertical",slot:"dropdown-trigger"}),Object(preact.c)("paper-listbox",{slot:"dropdown-content"},Object(preact.c)("paper-item",{disabled:!0},props.localize("ui.panel.config.automation.editor.triggers.duplicate")),Object(preact.c)("paper-item",{onTap:this.onDelete},props.localize("ui.panel.config.automation.editor.triggers.delete"))))),Object(preact.c)("div",{class:"card-content"},Object(preact.c)(trigger_edit_TriggerEdit,props)))}}class trigger_Trigger extends preact.a{constructor(){super();this.addTrigger=this.addTrigger.bind(this);this.triggerChanged=this.triggerChanged.bind(this)}addTrigger(){const trigger=this.props.trigger.concat(Object.assign({platform:"state"},state_StateTrigger.defaultConfig));this.props.onChange(trigger)}triggerChanged(index,newValue){const trigger=this.props.trigger.concat();if(null===newValue){trigger.splice(index,1)}else{trigger[index]=newValue}this.props.onChange(trigger)}render({trigger,hass,localize}){return Object(preact.c)("div",{class:"triggers"},trigger.map((trg,idx)=>Object(preact.c)(trigger_row_TriggerRow,{index:idx,trigger:trg,onChange:this.triggerChanged,hass:hass,localize:localize})),Object(preact.c)("paper-card",null,Object(preact.c)("div",{class:"card-actions add-card"},Object(preact.c)("paper-button",{onTap:this.addTrigger},localize("ui.panel.config.automation.editor.triggers.add")))))}}var condition_edit=__webpack_require__(417);class condition_row_ConditionRow extends preact.a{constructor(){super();this.onDelete=this.onDelete.bind(this)}onDelete(){if(confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))){this.props.onChange(this.props.index,null)}}render(props){return Object(preact.c)("paper-card",null,Object(preact.c)("div",{class:"card-menu"},Object(preact.c)("paper-menu-button",{"no-animations":!0,"horizontal-align":"right","horizontal-offset":"-5","vertical-offset":"-5"},Object(preact.c)("paper-icon-button",{icon:"hass:dots-vertical",slot:"dropdown-trigger"}),Object(preact.c)("paper-listbox",{slot:"dropdown-content"},Object(preact.c)("paper-item",{disabled:!0},props.localize("ui.panel.config.automation.editor.conditions.duplicate")),Object(preact.c)("paper-item",{onTap:this.onDelete},props.localize("ui.panel.config.automation.editor.conditions.delete"))))),Object(preact.c)("div",{class:"card-content"},Object(preact.c)(condition_edit.a,props)))}}class condition_Condition extends preact.a{constructor(){super();this.addCondition=this.addCondition.bind(this);this.conditionChanged=this.conditionChanged.bind(this)}addCondition(){const condition=this.props.condition.concat({condition:"state"});this.props.onChange(condition)}conditionChanged(index,newValue){const condition=this.props.condition.concat();if(null===newValue){condition.splice(index,1)}else{condition[index]=newValue}this.props.onChange(condition)}render({condition,hass,localize}){return Object(preact.c)("div",{class:"triggers"},condition.map((cnd,idx)=>Object(preact.c)(condition_row_ConditionRow,{index:idx,condition:cnd,onChange:this.conditionChanged,hass:hass,localize:localize})),Object(preact.c)("paper-card",null,Object(preact.c)("div",{class:"card-actions add-card"},Object(preact.c)("paper-button",{onTap:this.addCondition},localize("ui.panel.config.automation.editor.conditions.add")))))}}var script=__webpack_require__(416);class automation_Automation extends preact.a{constructor(){super();this.onChange=this.onChange.bind(this);this.triggerChanged=this.triggerChanged.bind(this);this.conditionChanged=this.conditionChanged.bind(this);this.actionChanged=this.actionChanged.bind(this)}onChange(ev){this.props.onChange(Object.assign({},this.props.automation,{[ev.target.name]:ev.target.value}))}triggerChanged(trigger){this.props.onChange(Object.assign({},this.props.automation,{trigger}))}conditionChanged(condition){this.props.onChange(Object.assign({},this.props.automation,{condition}))}actionChanged(action){this.props.onChange(Object.assign({},this.props.automation,{action}))}render({automation,isWide,hass,localize}){const{alias,trigger,condition,action}=automation;return Object(preact.c)("div",null,Object(preact.c)("ha-config-section",{"is-wide":isWide},Object(preact.c)("span",{slot:"header"},alias),Object(preact.c)("span",{slot:"introduction"},localize("ui.panel.config.automation.editor.introduction")),Object(preact.c)("paper-card",null,Object(preact.c)("div",{class:"card-content"},Object(preact.c)("paper-input",{label:localize("ui.panel.config.automation.editor.alias"),name:"alias",value:alias,"onvalue-changed":this.onChange})))),Object(preact.c)("ha-config-section",{"is-wide":isWide},Object(preact.c)("span",{slot:"header"},localize("ui.panel.config.automation.editor.triggers.header")),Object(preact.c)("span",{slot:"introduction"},Object(preact.c)("ha-markdown",{content:localize("ui.panel.config.automation.editor.triggers.introduction")})),Object(preact.c)(trigger_Trigger,{trigger:trigger,onChange:this.triggerChanged,hass:hass,localize:localize})),Object(preact.c)("ha-config-section",{"is-wide":isWide},Object(preact.c)("span",{slot:"header"},localize("ui.panel.config.automation.editor.conditions.header")),Object(preact.c)("span",{slot:"introduction"},Object(preact.c)("ha-markdown",{content:localize("ui.panel.config.automation.editor.conditions.introduction")})),Object(preact.c)(condition_Condition,{condition:condition||[],onChange:this.conditionChanged,hass:hass,localize:localize})),Object(preact.c)("ha-config-section",{"is-wide":isWide},Object(preact.c)("span",{slot:"header"},localize("ui.panel.config.automation.editor.actions.header")),Object(preact.c)("span",{slot:"introduction"},Object(preact.c)("ha-markdown",{content:localize("ui.panel.config.automation.editor.actions.introduction")})),Object(preact.c)(script.a,{script:action,onChange:this.actionChanged,hass:hass,localize:localize})))}}var unmount=__webpack_require__(412),compute_state_name=__webpack_require__(27),navigate_mixin=__webpack_require__(82),localize_mixin=__webpack_require__(10);function AutomationEditor(mountEl,props,mergeEl){return Object(preact.e)(Object(preact.c)(automation_Automation,props),mountEl,mergeEl)}class ha_automation_editor_HaAutomationEditor extends Object(localize_mixin.a)(Object(navigate_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
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
          <div main-title="">[[computeName(automation, localize)]]</div>
        </app-toolbar>
      </app-header>

      <div class="content">
        <template is="dom-if" if="[[errors]]">
          <div class="errors">[[errors]]</div>
        </template>
        <div id="root"></div>
      </div>
      <paper-fab slot="fab" is-wide$="[[isWide]]" dirty$="[[dirty]]" icon="hass:content-save" title="[[localize('ui.panel.config.automation.editor.save')]]" on-click="saveAutomation"></paper-fab>
    </ha-app-layout>
`}static get properties(){return{hass:{type:Object,observer:"_updateComponent"},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},errors:{type:Object,value:null},dirty:{type:Boolean,value:!1},config:{type:Object,value:null},automation:{type:Object,observer:"automationChanged"},creatingNew:{type:Boolean,observer:"creatingNewChanged"},isWide:{type:Boolean,observer:"_updateComponent"},_rendered:{type:Object,value:null},_renderScheduled:{type:Boolean,value:!1}}}ready(){this.configChanged=this.configChanged.bind(this);super.ready()}disconnectedCallback(){super.disconnectedCallback();if(this._rendered){Object(unmount.a)(this._rendered);this._rendered=null}}configChanged(config){if(null===this._rendered)return;this.config=config;this.errors=null;this.dirty=!0;this._updateComponent()}automationChanged(newVal,oldVal){if(!newVal)return;if(!this.hass){setTimeout(()=>this.automationChanged(newVal,oldVal),0);return}if(oldVal&&oldVal.attributes.id===newVal.attributes.id){return}this.hass.callApi("get","config/automation/config/"+newVal.attributes.id).then(function(config){["trigger","condition","action"].forEach(function(key){var value=config[key];if(value&&!Array.isArray(value)){config[key]=[value]}});this.dirty=!1;this.config=config;this._updateComponent()}.bind(this))}creatingNewChanged(newVal){if(!newVal){return}this.dirty=!1;this.config={alias:this.localize("ui.panel.config.automation.editor.default_name"),trigger:[{platform:"state"}],condition:[],action:[{service:""}]};this._updateComponent()}backTapped(){if(this.dirty&&!confirm(this.localize("ui.panel.config.automation.editor.unsaved_confirm"))){return}history.back()}async _updateComponent(){if(this._renderScheduled||!this.hass||!this.config)return;this._renderScheduled=!0;await 0;if(!this._renderScheduled)return;this._renderScheduled=!1;this._rendered=AutomationEditor(this.$.root,{automation:this.config,onChange:this.configChanged,isWide:this.isWide,hass:this.hass,localize:this.localize},this._rendered)}saveAutomation(){var id=this.creatingNew?""+Date.now():this.automation.attributes.id;this.hass.callApi("post","config/automation/config/"+id,this.config).then(function(){this.dirty=!1;if(this.creatingNew){this.navigate(`/config/automation/edit/${id}`,!0)}}.bind(this),function(errors){this.errors=errors.body.message;throw errors}.bind(this))}computeName(automation,localize){return automation?Object(compute_state_name.a)(automation):localize("ui.panel.config.automation.editor.default_name")}}customElements.define("ha-automation-editor",ha_automation_editor_HaAutomationEditor);__webpack_require__(198);class ha_automation_picker_HaAutomationPicker extends Object(localize_mixin.a)(Object(navigate_mixin.a)(polymer_element.a)){static get template(){return html_tag.a`
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

      ha-markdown p {
        margin: 0px;
      }
    </style>

    <ha-app-layout has-scrolling-region="">
      <app-header slot="header" fixed="">
        <app-toolbar>
          <paper-icon-button icon="hass:arrow-left" on-click="_backTapped"></paper-icon-button>
          <div main-title="">[[localize('ui.panel.config.automation.caption')]]</div>
        </app-toolbar>
      </app-header>

      <ha-config-section is-wide="[[isWide]]">
        <div slot="header">[[localize('ui.panel.config.automation.picker.header')]]</div>
        <div slot="introduction">
          <ha-markdown content="[[localize('ui.panel.config.automation.picker.introduction')]]"></ha-markdown>
        </div>

        <paper-card heading="[[localize('ui.panel.config.automation.picker.pick_automation')]]">
          <template is="dom-if" if="[[!automations.length]]">
            <div class="card-content">
              <p>[[localize('ui.panel.config.automation.picker.no_automations')]]</p>
            </div>
          </template>
          <template is="dom-repeat" items="[[automations]]" as="automation">
            <paper-item>
              <paper-item-body two-line="" on-click="automationTapped">
                <div>[[computeName(automation)]]</div>
                <div secondary="">[[computeDescription(automation)]]</div>
              </paper-item-body>
              <iron-icon icon="hass:chevron-right"></iron-icon>
            </paper-item>
          </template>
        </paper-card>
      </ha-config-section>

      <paper-fab slot="fab" is-wide$="[[isWide]]" icon="hass:plus" title="[[localize('ui.panel.config.automation.picker.add_automation')]]" on-click="addAutomation"></paper-fab>
    </ha-app-layout>
`}static get properties(){return{hass:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean,value:!1},automations:{type:Array},isWide:{type:Boolean}}}automationTapped(ev){this.navigate("/config/automation/edit/"+this.automations[ev.model.index].attributes.id)}addAutomation(){this.navigate("/config/automation/new")}computeName(automation){return Object(compute_state_name.a)(automation)}computeDescription(){return""}_backTapped(){history.back()}}customElements.define("ha-automation-picker",ha_automation_picker_HaAutomationPicker);class ha_config_automation_HaConfigAutomation extends polymer_element.a{static get template(){return html_tag.a`
    <style>
      ha-automation-picker,
      ha-automation-editor {
        height: 100%;
      }
    </style>
    <app-route route="[[route]]" pattern="/automation/edit/:automation" data="{{_routeData}}" active="{{_edittingAutomation}}"></app-route>
    <app-route route="[[route]]" pattern="/automation/new" active="{{_creatingNew}}"></app-route>

    <template is="dom-if" if="[[!showEditor]]">
      <ha-automation-picker hass="[[hass]]" narrow="[[narrow]]" show-menu="[[showMenu]]" automations="[[automations]]" is-wide="[[isWide]]"></ha-automation-picker>
    </template>

    <template is="dom-if" if="[[showEditor]]" restamp="">
      <ha-automation-editor hass="[[hass]]" automation="[[automation]]" is-wide="[[isWide]]" creating-new="[[_creatingNew]]"></ha-automation-editor>
    </template>
`}static get properties(){return{hass:Object,narrow:Boolean,showMenu:Boolean,route:Object,isWide:Boolean,_routeData:Object,_routeMatches:Boolean,_creatingNew:Boolean,_edittingAutomation:Boolean,automations:{type:Array,computed:"computeAutomations(hass)"},automation:{type:Object,computed:"computeAutomation(automations, _edittingAutomation, _routeData)"},showEditor:{type:Boolean,computed:"computeShowEditor(_edittingAutomation, _creatingNew)"}}}computeAutomation(automations,edittingAddon,routeData){if(!automations||!edittingAddon){return null}for(var i=0;i<automations.length;i++){if(automations[i].attributes.id===routeData.automation){return automations[i]}}return null}computeAutomations(hass){var automations=[];Object.keys(hass.states).forEach(function(key){var entity=hass.states[key];if("automation"===Object(compute_state_domain.a)(entity)&&"id"in entity.attributes){automations.push(entity)}});return automations.sort(function(entityA,entityB){var nameA=(entityA.attributes.alias||entityA.entity_id).toLowerCase(),nameB=(entityB.attributes.alias||entityB.entity_id).toLowerCase();if(nameA<nameB){return-1}if(nameA>nameB){return 1}return 0})}computeShowEditor(_edittingAutomation,_creatingNew){return _creatingNew||_edittingAutomation}}customElements.define("ha-config-automation",ha_config_automation_HaConfigAutomation)}}]);
//# sourceMappingURL=4be0664e81072c3b6316.chunk.js.map