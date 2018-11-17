(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{720:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var app_header_layout=__webpack_require__(155),app_header=__webpack_require__(154),app_toolbar=__webpack_require__(121),paper_listbox=__webpack_require__(122),paper_card=__webpack_require__(153),paper_checkbox=__webpack_require__(156),paper_item=__webpack_require__(119),html_tag=__webpack_require__(0),polymer_element=__webpack_require__(4),moment=__webpack_require__(362),moment_default=__webpack_require__.n(moment),dates=__webpack_require__(205),dates_default=__webpack_require__.n(dates),ha_menu_button=__webpack_require__(134),ha_style=__webpack_require__(120),preact_compat_es=__webpack_require__(194),lib=__webpack_require__(483),lib_default=__webpack_require__.n(lib),events_mixin=__webpack_require__(16);lib_default.a.setLocalizer(lib_default.a.momentLocalizer(moment_default.a));class ha_big_calendar_HaBigCalendar extends Object(events_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <link rel="stylesheet" href="/static/panels/calendar/react-big-calendar.css">
      <style>
        div#root {
          height: 100%;
          width: 100%;
        }
      </style>
      <div id="root"></div>`}static get properties(){return{events:{type:Array,observer:"_update"}}}_update(events){const allViews=lib_default.a.Views.values,BCElement=preact_compat_es["default"].createElement(lib_default.a,{events:events,views:allViews,popup:!0,onNavigate:(date,viewName)=>this.fire("navigate",{date,viewName}),onView:viewName=>this.fire("view-changed",{viewName}),eventPropGetter:this._setEventStyle,defaultView:"month",defaultDate:new Date});Object(preact_compat_es.render)(BCElement,this.$.root)}_setEventStyle(event){const newStyle={};if(event.color){newStyle.backgroundColor=event.color}return{style:newStyle}}}customElements.define("ha-big-calendar",ha_big_calendar_HaBigCalendar);var localize_mixin=__webpack_require__(10);class ha_panel_calendar_HaPanelCalendar extends Object(localize_mixin.a)(polymer_element.a){static get template(){return html_tag.a`
      <style include="iron-flex ha-style">
        .content {
          padding: 16px;
          @apply --layout-horizontal;
        }

        ha-big-calendar {
          min-height: 500px;
          min-width: 100%;
        }

        #calendars {
          padding-right: 16px;
          width: 15%;
          min-width: 170px;
        }

        paper-item {
          cursor: pointer;
        }

        div.all_calendars {
    ￼     height: 20px;
    ￼     text-align: center;
        }

        .iron-selected {
          background-color: #e5e5e5;
          font-weight: normal;
        }

        :host([narrow]) .content {
          flex-direction: column;
        }
        :host([narrow]) #calendars {
          margin-bottom: 24px;
          width: 100%;
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
            <div main-title>[[localize('panel.calendar')]]</div>
          </app-toolbar>
        </app-header>

        <div class="flex content">
          <div id="calendars" class="layout vertical wrap">
            <paper-card heading="Calendars">
              <paper-listbox
                id="calendar_list"
                multi
                on-selected-items-changed="_fetchData"
                selected-values="{{selectedCalendars}}"
                attr-for-selected="item-name"
              >
                <template is="dom-repeat" items="[[calendars]]">
                  <paper-item item-name="[[item.entity_id]]">
                    <span class="calendar_color" style$="background-color: [[item.color]]"></span>
                    <span class="calendar_color_spacer"></span>
                    [[item.name]]
                  </paper-item>
                </template>
              </paper-listbox>
            </paper-card>
          </div>
          <div class="flex layout horizontal wrap">
            <ha-big-calendar
              default-date="[[currentDate]]"
              default-view="[[currentView]]"
              on-navigate='_handleNavigate'
              on-view='_handleViewChanged'
              events="[[events]]">
            </ha-big-calendar>
          </div>
        </div>
      </app-header-layout>`}static get properties(){return{hass:Object,currentView:{type:String,value:"month"},currentDate:{type:Object,value:new Date},events:{type:Array,value:[]},calendars:{type:Array,value:[]},selectedCalendars:{type:Array,value:[]},narrow:{type:Boolean,reflectToAttribute:!0},showMenu:{type:Boolean,value:!1}}}connectedCallback(){super.connectedCallback();this._fetchCalendars()}_fetchCalendars(){this.hass.callApi("get","calendars").then(result=>{this.calendars=result;this.selectedCalendars=result.map(cal=>cal.entity_id)})}_fetchData(){const start=dates_default.a.firstVisibleDay(this.currentDate).toISOString(),end=dates_default.a.lastVisibleDay(this.currentDate).toISOString(),params=encodeURI(`?start=${start}&end=${end}`),calls=this.selectedCalendars.map(cal=>this.hass.callApi("get",`calendars/${cal}${params}`));Promise.all(calls).then(results=>{const tmpEvents=[];results.forEach(res=>{res.forEach(ev=>{ev.start=new Date(ev.start);if(ev.end){ev.end=new Date(ev.end)}else{ev.end=null}tmpEvents.push(ev)})});this.events=tmpEvents})}_getDateRange(){let startDate,endDate;if("day"===this.currentView){startDate=moment_default()(this.currentDate).startOf("day");endDate=moment_default()(this.currentDate).startOf("day")}else if("week"===this.currentView){startDate=moment_default()(this.currentDate).startOf("isoWeek");endDate=moment_default()(this.currentDate).endOf("isoWeek")}else if("month"===this.currentView){startDate=moment_default()(this.currentDate).startOf("month").subtract(7,"days");endDate=moment_default()(this.currentDate).endOf("month").add(7,"days")}else if("agenda"===this.currentView){startDate=moment_default()(this.currentDate).startOf("day");endDate=moment_default()(this.currentDate).endOf("day").add(1,"month")}return[startDate.toISOString(),endDate.toISOString()]}_handleViewChanged(ev){this.currentView=ev.detail.viewName;this._fetchData()}_handleNavigate(ev){this.currentDate=ev.detail.date;this.currentView=ev.detail.viewName;this._fetchData()}}customElements.define("ha-panel-calendar",ha_panel_calendar_HaPanelCalendar)}}]);
//# sourceMappingURL=a4dbe268dd4cfdf67cfe.chunk.js.map