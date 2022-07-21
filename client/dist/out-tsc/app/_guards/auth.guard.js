import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let AuthGuard = class AuthGuard {
    constructor(accountService, toastr) {
        this.accountService = accountService;
        this.toastr = toastr;
    }
    canActivate() {
        return this.accountService.currentUser$.pipe(map(user => {
            if (user)
                return true;
            this.toastr.error('You shall not pass!');
        }));
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map