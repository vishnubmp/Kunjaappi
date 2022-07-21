import { __decorate } from "tslib";
import { Component, EventEmitter, Input } from '@angular/core';
let RolesModalComponent = class RolesModalComponent {
    constructor(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.updateSelectedRoles = new EventEmitter();
    }
    ngOnInit() {
    }
    updateRoles() {
        this.updateSelectedRoles.emit(this.roles);
        this.bsModalRef.hide();
    }
};
__decorate([
    Input()
], RolesModalComponent.prototype, "updateSelectedRoles", void 0);
RolesModalComponent = __decorate([
    Component({
        selector: 'app-roles-modal',
        templateUrl: './roles-modal.component.html',
        styleUrls: ['./roles-modal.component.css']
    })
], RolesModalComponent);
export { RolesModalComponent };
//# sourceMappingURL=roles-modal.component.js.map