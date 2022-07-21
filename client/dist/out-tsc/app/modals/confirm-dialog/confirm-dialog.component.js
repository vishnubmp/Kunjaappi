import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ConfirmDialogComponent = class ConfirmDialogComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ngOnInit() {
    }
    confirm() {
        this.result = true;
        this.bsModalRef.hide();
    }
    decline() {
        this.result = false;
        this.bsModalRef.hide();
    }
};
ConfirmDialogComponent = __decorate([
    Component({
        selector: 'app-confirm-dialog',
        templateUrl: './confirm-dialog.component.html',
        styleUrls: ['./confirm-dialog.component.css']
    })
], ConfirmDialogComponent);
export { ConfirmDialogComponent };
//# sourceMappingURL=confirm-dialog.component.js.map