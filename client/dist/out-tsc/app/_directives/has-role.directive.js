import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { take } from 'rxjs/operators';
let HasRoleDirective = class HasRoleDirective {
    constructor(viewContainerRef, templateRef, accountService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.accountService = accountService;
        this.accountService.currentUser$.pipe(take(1)).subscribe(user => {
            this.user = user;
        });
    }
    ngOnInit() {
        var _a, _b;
        // clear view if no roles
        if (!((_a = this.user) === null || _a === void 0 ? void 0 : _a.roles) || this.user == null) {
            this.viewContainerRef.clear();
            return;
        }
        if ((_b = this.user) === null || _b === void 0 ? void 0 : _b.roles.some(r => this.appHasRole.includes(r))) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainerRef.clear();
        }
    }
};
__decorate([
    Input()
], HasRoleDirective.prototype, "appHasRole", void 0);
HasRoleDirective = __decorate([
    Directive({
        selector: '[appHasRole]'
    })
], HasRoleDirective);
export { HasRoleDirective };
//# sourceMappingURL=has-role.directive.js.map