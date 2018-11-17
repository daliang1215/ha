(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{707:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(153),_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(81),_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),_resources_ha_style__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(120);class HaStoreAuth extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__.a)(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__.a){static get template(){return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__.a`
      <style include='ha-style'>
        paper-card {
          position: fixed;
          padding: 8px 0;
          bottom: 16px;
          right: 16px;
        }

        .card-actions {
          text-align: right;
          border-top: 0;
          margin-right: -4px;
        }

        :host(.small) paper-card {
          bottom: 0;
          left: 0;
          right: 0;
        }
      </style>
      <paper-card elevation="4">
        <div class='card-content'>
          [[localize('ui.auth_store.ask')]]
        </div>
        <div class='card-actions'>
          <paper-button on-click='_done'>[[localize('ui.auth_store.decline')]]</paper-button>
          <paper-button primary on-click='_save'>[[localize('ui.auth_store.confirm')]]</paper-button>
        </div>
      </paper-card>
    `}static get properties(){return{hass:Object}}ready(){super.ready();this.classList.toggle("small",600>window.innerWidth)}_save(){Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_3__.b)();this._done()}_done(){const card=this.shadowRoot.querySelector("paper-card");card.style.transition="bottom .25s";card.style.bottom=`-${card.offsetHeight+8}px`;setTimeout(()=>this.parentNode.removeChild(this),300)}}customElements.define("ha-store-auth-card",HaStoreAuth)}}]);
//# sourceMappingURL=df88facdd89de20585f5.chunk.js.map