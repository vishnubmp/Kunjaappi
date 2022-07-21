import { __decorate, __param } from "tslib";
import { Component, Input, Self } from '@angular/core';
let DateInputComponent = class DateInputComponent {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.ngControl.valueAccessor = this;
        this.bsConfig = {
            containerClass: 'theme-red',
            dateInputFormat: 'DD MMMM YYYY'
        };
    }
    writeValue(obj) {
    }
    registerOnChange(fn) {
    }
    registerOnTouched(fn) {
    }
};
__decorate([
    Input()
], DateInputComponent.prototype, "label", void 0);
__decorate([
    Input()
], DateInputComponent.prototype, "maxDate", void 0);
DateInputComponent = __decorate([
    Component({
        selector: 'app-date-input',
        templateUrl: './date-input.component.html',
        styleUrls: ['./date-input.component.css']
    }),
    __param(0, Self())
], DateInputComponent);
export { DateInputComponent };
//# sourceMappingURL=date-input.component.js.map