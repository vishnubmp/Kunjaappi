import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AdminGuard = class AdminGuard {
    constructor(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
    }
    canActivate() {
        return this.accountService.currentUser$.pipe(map(user => {
            if (user.roles.includes('Admin') || user.roles.includes('Moderator')) {
                return true;
            }
            this.toastr.error('You cannot enter this area');
        }));
    }
};
AdminGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminGuard);
export { AdminGuard };
//# sourceMappingURL=admin.guard.js.map