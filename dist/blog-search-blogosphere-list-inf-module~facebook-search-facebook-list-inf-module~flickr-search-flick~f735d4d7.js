(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-search-blogosphere-list-inf-module~facebook-search-facebook-list-inf-module~flickr-search-flick~f735d4d7"],{

/***/ "./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-inline-editor/ng2-inline-editor.es5.js ***!
  \*****************************************************************/
/*! exports provided: InlineEditorModule, InputComponets, InlineEditorComponent, InputDateTimeComponent, InputDateComponent, InputNumberComponent, InputPasswordComponent, InputRangeComponent, InputSelectComponent, InputTextComponent, InputTextareaComponent, InputTimeComponent, InputBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditorModule", function() { return InlineEditorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponets", function() { return InputComponets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditorComponent", function() { return InlineEditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateTimeComponent", function() { return InputDateTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDateComponent", function() { return InputDateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPasswordComponent", function() { return InputPasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRangeComponent", function() { return InputRangeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSelectComponent", function() { return InputSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return InputTextComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextareaComponent", function() { return InputTextareaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTimeComponent", function() { return InputTimeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBase", function() { return InputBase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * @abstract
 */
var InputBase = (function () {
    /**
     * @param {?} renderer
     */
    function InputBase(renderer) {
        this.renderer = renderer;
        this.isNumeric = false;
        this.isRegexTestable = false;
    }
    /**
     * @param {?} _context
     * @return {?}
     */
    InputBase.prototype.setContext = function (_context) {
        this.context = _context;
        this.whenContextIsReady();
    };
    /**
     * @return {?}
     */
    InputBase.prototype.whenContextIsReady = function () { };
    /**
     * @return {?}
     */
    InputBase.prototype.getPlaceholder = function () {
        return this.context.isEmpty ? this.context.empty : ((this.context.value));
    };
    /**
     * @return {?}
     */
    InputBase.prototype.focus = function () {
        var _this = this;
        setTimeout(function () { return _this.renderer.invokeElementMethod(_this.inputElement, "focus", []); });
    };
    return InputBase;
}());
var InputNumberComponent = (function (_super) {
    __extends(InputNumberComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputNumberComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isNumeric = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputNumberComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputNumberComponent;
}(InputBase));
InputNumberComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-number",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"number\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputNumberComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputNumberComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputTextComponent = (function (_super) {
    __extends(InputTextComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputTextComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputTextComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputTextComponent;
}(InputBase));
InputTextComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-text",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"text\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputTextComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputTextComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputPasswordComponent = (function (_super) {
    __extends(InputPasswordComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputPasswordComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputPasswordComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    /**
     * @return {?}
     */
    InputPasswordComponent.prototype.getPlaceholder = function () {
        return "*****";
    };
    return InputPasswordComponent;
}(InputBase));
InputPasswordComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-password",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"password\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputPasswordComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputPasswordComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputRangeComponent = (function (_super) {
    __extends(InputRangeComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputRangeComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isNumeric = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputRangeComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputRangeComponent;
}(InputBase));
InputRangeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-range",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"range\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputRangeComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputRangeComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputTextareaComponent = (function (_super) {
    __extends(InputTextareaComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputTextareaComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputTextareaComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputTextareaComponent;
}(InputBase));
InputTextareaComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-textarea",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<textarea #inputRef class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [rows]=\"context.rows\" [cols]=\"context.cols\" [disabled]=\"context.disabled\" [name]=\"context.name\"\n                      [placeholder]=\"context.placeholder\"></textarea>",
            },] },
];
/**
 * @nocollapse
 */
InputTextareaComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputTextareaComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputSelectComponent = (function (_super) {
    __extends(InputSelectComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputSelectComponent(renderer) {
        return _super.call(this, renderer) || this;
    }
    /**
     * @return {?}
     */
    InputSelectComponent.prototype.getPlaceholder = function () {
        return this.optionSelected();
    };
    /**
     * @return {?}
     */
    InputSelectComponent.prototype.optionSelected = function () {
        var /** @type {?} */ selectedOptionText;
        var /** @type {?} */ options = this.context.options;
        if (options && options.data) {
            for (var _i = 0, _a = options.data; _i < _a.length; _i++) {
                var option = _a[_i];
                selectedOptionText = this.getTextOfSelectedOption(option);
                if (selectedOptionText) {
                    break;
                }
            }
        }
        return selectedOptionText ? selectedOptionText : this.context.empty;
    };
    /**
     * @param {?} options
     * @return {?}
     */
    InputSelectComponent.prototype.getTextOfSelectedOption = function (options) {
        var /** @type {?} */ textOfSelectedOption;
        var _a = ((this.context.options)), text = _a.text, value = _a.value;
        if (options.children) {
            for (var _i = 0, _b = options.children; _i < _b.length; _i++) {
                var child = _b[_i];
                textOfSelectedOption = this.getTextOfSelectedOption(child);
                if (textOfSelectedOption) {
                    break;
                }
            }
        }
        else {
            // tslint:disable-next-line:triple-equals
            if (options[value] == this.context.value) {
                textOfSelectedOption = options[text];
            }
        }
        return textOfSelectedOption;
    };
    /**
     * @return {?}
     */
    InputSelectComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputSelectComponent;
}(InputBase));
InputSelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-select",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "\n    <select #inputRef class=\"form-control\" [(ngModel)]=\"context.value\">\n        <ng-template ngFor let-option [ngForOf]=\"context.options.data\">\n            <optgroup *ngIf=\"option.children\" [label]=\"option[context.options.text]\">\n                <option *ngFor=\"let child of option.children\" [value]=\"child[context.options.value]\">\n                    {{child[context.options.text]}}\n                </option>\n            </optgroup>\n            <option *ngIf=\"!option.children\" [value]=\"option[context.options.value]\">{{option[context.options.text]}}</option>\n        </ng-template>\n    </select>\n            ",
            },] },
];
/**
 * @nocollapse
 */
InputSelectComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputSelectComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputDateComponent = (function (_super) {
    __extends(InputDateComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputDateComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputDateComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputDateComponent;
}(InputBase));
InputDateComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-date",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"date\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputDateComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputDateComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputTimeComponent = (function (_super) {
    __extends(InputTimeComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputTimeComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputTimeComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputTimeComponent;
}(InputBase));
InputTimeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-time",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"time\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputTimeComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputTimeComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputDateTimeComponent = (function (_super) {
    __extends(InputDateTimeComponent, _super);
    /**
     * @param {?} renderer
     */
    function InputDateTimeComponent(renderer) {
        var _this = _super.call(this, renderer) || this;
        _this.isRegexTestable = true;
        return _this;
    }
    /**
     * @return {?}
     */
    InputDateTimeComponent.prototype.ngOnInit = function () {
        this.inputElement = this.inputRef.nativeElement;
    };
    return InputDateTimeComponent;
}(InputBase));
InputDateTimeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor-datetime",
                styles: ["a {     text-decoration: none;     color: #428bca;     border-bottom: dashed 1px #428bca;     cursor: pointer;     line-height: 2;     margin-right: 5px;     margin-left: 5px; }   /* editable-empty */  .editable-empty, .editable-empty:hover, .editable-empty:focus, a.editable-empty, a.editable-empty:hover, a.editable-empty:focus {     font-style: italic;     color: #DD1144;     text-decoration: none; }  .inlineEditForm {     display: inline-block;     white-space: nowrap;     margin: 0; }  #inlineEditWrapper {     display: inline-block; }  .inlineEditForm input, select {     width: auto;     display: inline; }  .editInvalid {     color: #a94442;     margin-bottom: 0; }  .error {     border-color: #a94442; }  [hidden] {     display: none; }"],
                template: "<input #inputRef type=\"datetime-local\" class=\"form-control\" [(ngModel)]=\"context.value\" [required]=\"context.required\"\n                      [disabled]=\"context.disabled\" [name]=\"context.name\" [placeholder]=\"context.placeholder\" [size]=\"context.size\"\n                      [min]=\"context.min\" [max]=\"context.max\"/>",
            },] },
];
/**
 * @nocollapse
 */
InputDateTimeComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], },
]; };
InputDateTimeComponent.propDecorators = {
    'inputRef': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["inputRef",] },],
};
var InputComponets = [
    InputTextComponent,
    InputNumberComponent,
    InputPasswordComponent,
    InputRangeComponent,
    InputTextareaComponent,
    InputSelectComponent,
    InputDateComponent,
    InputTimeComponent,
    InputDateTimeComponent,
];
// TO-DO Default's value
var inputConfig = {
    options: {
        data: [],
        text: "text",
        value: "value",
    },
    empty: "empty",
    placeholder: "",
    type: "text",
    disabled: false,
    name: "",
    size: 8,
    min: 1,
    pattern: "",
    max: Infinity,
    /**
     * @return {?}
     */
    fnErrorLength: function () { alert("Error: Lenght!"); },
    /**
     * @return {?}
     */
    fnErrorPattern: function () { alert("Error: Pattern!"); },
};
var InlineEditorComponent = (function () {
    /**
     * @param {?} componentFactoryResolver
     */
    function InlineEditorComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.onSave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cols = 50;
        this.rows = 4;
        this.editing = false;
        this.isEmpty = false;
        this._value = "";
        this.preValue = "";
        this.components = {
            text: InputTextComponent,
            number: InputNumberComponent,
            password: InputPasswordComponent,
            range: InputRangeComponent,
            textarea: InputTextareaComponent,
            select: InputSelectComponent,
            date: InputDateComponent,
            time: InputTimeComponent,
            datetime: InputDateTimeComponent,
        };
    }
    Object.defineProperty(InlineEditorComponent.prototype, "options", {
        /**
         * @return {?}
         */
        get: function () { return this._options; },
        /**
         * @param {?} options
         * @return {?}
         */
        set: function (options) {
            this._options = options instanceof Array ?
                {
                    data: options,
                    value: "value",
                    text: "text",
                } : options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineEditorComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this._value; },
        /**
         * @param {?} newValue
         * @return {?}
         */
        set: function (newValue) {
            if (newValue !== this._value) {
                this._value = newValue;
                this.onChange(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @param {?} typeName
     * @return {?}
     */
    InlineEditorComponent.prototype.getComponentType = function (typeName) {
        var /** @type {?} */ type = this.components[typeName];
        if (!type) {
            throw new Error("That type does not exist or it is not implemented yet!");
        }
        return type;
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.ngOnInit = function () {
        if (this.type) {
            this.initializeProperties();
            this.generateComponent(this.type);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    InlineEditorComponent.prototype.generateComponent = function (type) {
        var /** @type {?} */ componentType = this.getComponentType(type);
        this.inputInstance = this.createInputInstance(componentType);
        this.inputInstance.setContext(this);
    };
    /**
     * @param {?} componentType
     * @return {?}
     */
    InlineEditorComponent.prototype.createInputInstance = function (componentType) {
        var /** @type {?} */ factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        this.componentRef = this.container.createComponent(factory);
        return (this.componentRef.instance);
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.initializeProperties = function () {
        this.initProperty("type");
        this.initProperty("disabled");
        this.initProperty("placeholder");
        this.initProperty("empty");
        this.initProperty("name");
        this.initProperty("size");
        this.initProperty("min");
        this.initProperty("max");
        this.initProperty("pattern");
        this.initProperty("options");
        this.initProperty("fnErrorLength");
        this.initProperty("fnErrorPattern");
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InlineEditorComponent.prototype.writeValue = function (value) {
        if (value == null) {
            this.isEmpty = true;
        }
        else {
            this.value = value;
            this.isEmpty = false;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    InlineEditorComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    InlineEditorComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    InlineEditorComponent.prototype.edit = function (value) {
        this.preValue = value; // Store original value in case the form is cancelled
        this.editing = true;
        this.inputInstance.focus();
        this.onEdit.emit(this);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    InlineEditorComponent.prototype.onSubmit = function (value) {
        if (this.pattern && this.inputInstance.isRegexTestable && !new RegExp(this.pattern).test(value)) {
            return this.fnErrorPattern();
        }
        var /** @type {?} */ length = this.inputInstance.isNumeric ? Number(value) : value.length;
        if (length < this.min || length > this.max) {
            return this.fnErrorLength();
        }
        this.onSave.emit(value);
        this.editing = false;
        this.isEmpty = false;
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.cancel = function () {
        this.value = this.preValue;
        this.editing = false;
        this.onCancel.emit(this);
    };
    /**
     * @param {?} property
     * @return {?}
     */
    InlineEditorComponent.prototype.initProperty = function (property) {
        this[property] = typeof this[property] !== "undefined"
            ? this[property]
            : inputConfig[property];
    };
    /**
     * @return {?}
     */
    InlineEditorComponent.prototype.showText = function () {
        return this.inputInstance ? this.inputInstance.getPlaceholder() : "Loading...";
    };
    return InlineEditorComponent;
}());
InlineEditorComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "inline-editor",
                template: "<div>   <div id=\"inlineEditWrapper\">     <a [ngClass]=\"{'editable-empty': isEmpty, 'c-inline-editor' :true }\" (click)=\"edit(value)\" [hidden]=\"editing && !disabled\">{{ showText() }}</a>     <div class=\"c-inline-editor inlineEditForm form-inline\" [hidden]=\"!editing || disabled\">       <div class=\"form-group\">         <div #container></div>         <span class=\"c-inline-editor inline-editor-button-group\">          <button id=\"inline-editor-button-save\" class=\"btn btn-xs btn-primary c-inline-editor\"             (click)=\"onSubmit(value)\"><span class=\"fa fa-check\"></span></button>         <button class=\"btn btn-xs btn-danger c-inline-editor\" (click)=\"cancel()\"><span class=\"fa fa-remove\"></span> </button>         </span>        </div>     </div>   </div> </div>",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return InlineEditorComponent; }),
                        multi: true,
                    }],
                entryComponents: InputComponets,
            },] },
];
/**
 * @nocollapse
 */
InlineEditorComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], },
]; };
InlineEditorComponent.propDecorators = {
    'type': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onSave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onEdit': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onCancel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'empty': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'disabled': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'required': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'placeholder': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'name': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'size': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'min': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'max': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'pattern': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fnErrorLength': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'fnErrorPattern': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'cols': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'rows': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'options': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'container': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ["container", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },] },],
};
var InlineEditorModule = (function () {
    function InlineEditorModule() {
    }
    return InlineEditorModule;
}());
InlineEditorModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [InlineEditorComponent].concat(InputComponets),
                exports: [InlineEditorComponent],
            },] },
];
/**
 * @nocollapse
 */
InlineEditorModule.ctorParameters = function () { return []; };



/***/ })

}]);
//# sourceMappingURL=blog-search-blogosphere-list-inf-module~facebook-search-facebook-list-inf-module~flickr-search-flick~f735d4d7.js.map