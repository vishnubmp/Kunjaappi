import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PreventUnsavedChangesGuard = class PreventUnsavedChangesGuard {
    constructor(confirmService) {
        this.confirmService = confirmService;
    }
    canDeactivate(component) {
        if (component.editForm.dirty) {
            return this.confirmService.confirm();
        }
        return true;
    }
};
PreventUnsavedChangesGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PreventUnsavedChangesGuard);
export { PreventUnsavedChangesGuard };
//# sourceMappingURL=prevent-unsaved-changes.guard.js.map