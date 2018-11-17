(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{349:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var iron_a11y_announcer=__webpack_require__(71),iron_overlay_behavior=__webpack_require__(53),polymer_fn=__webpack_require__(3),html_tag=__webpack_require__(0),polymer_legacy=__webpack_require__(2),currentToast=null;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Object(polymer_fn.a)({_template:html_tag.a`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[iron_overlay_behavior.a],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){polymer_legacy.a._warn("`visible` is deprecated, use `opened` instead");return this.opened},get _canAutoClose(){return 0<this.duration&&this.duration!==Infinity},created:function(){this._autoClose=null;iron_a11y_announcer.a.requestAvailability()},show:function(properties){if("string"==typeof properties){properties={text:properties}}for(var property in properties){if(0===property.indexOf("_")){polymer_legacy.a._warn("The property \""+property+"\" is private and was not set.")}else if(property in this){this[property]=properties[property]}else{polymer_legacy.a._warn("The property \""+property+"\" is not valid.")}}this.open()},hide:function(){this.close()},__onTransitionEnd:function(e){if(e&&e.target===this&&"opacity"===e.propertyName){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}},_openedChanged:function(){if(null!==this._autoClose){this.cancelAsync(this._autoClose);this._autoClose=null}if(this.opened){if(currentToast&&currentToast!==this){currentToast.close()}currentToast=this;this.fire("iron-announce",{text:this.text});if(this._canAutoClose){this._autoClose=this.async(this.close,this.duration)}}else if(currentToast===this){currentToast=null}iron_overlay_behavior.b._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(fitInto){this.positionTarget=fitInto}});const PaperToast=customElements.get("paper-toast");customElements.define("ha-toast",class extends PaperToast{connectedCallback(){super.connectedCallback();if(!this._resizeListener){this._resizeListener=ev=>this.classList.toggle("fit-bottom",ev.matches);this._mediaq=window.matchMedia("(max-width: 599px")}this._mediaq.addListener(this._resizeListener);this._resizeListener(this._mediaq)}disconnectedCallback(){super.disconnectedCallback();this._mediaq.removeListener(this._resizeListener)}})}}]);
//# sourceMappingURL=0db7f10eb4bf9cea379e.chunk.js.map