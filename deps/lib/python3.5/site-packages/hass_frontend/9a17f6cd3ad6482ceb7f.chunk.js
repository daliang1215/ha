(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{701:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(121),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_components_ha_menu_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(134),_resources_ha_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(120);class HaPanelIframe extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__.a{static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__.a`
    <style include='ha-style'>
      iframe {
        border: 0;
        width: 100%;
        height: calc(100% - 64px);
      }
    </style>
    <app-toolbar>
      <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
      <div main-title>[[panel.title]]</div>
    </app-toolbar>

    <iframe
      src='[[panel.config.url]]'
      sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
      allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
    ></iframe>
    `}static get properties(){return{panel:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean}}}}customElements.define("ha-panel-iframe",HaPanelIframe)}}]);
//# sourceMappingURL=9a17f6cd3ad6482ceb7f.chunk.js.map