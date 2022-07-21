import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavComponent = class NavComponent {
    constructor(accountService, router, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.toastr = toastr;
        this.model = {};
    }
    ngOnInit() {
    }
    login() {
        this.accountService.login(this.model).subscribe(response => {
            this.router.navigateByUrl('/members');
        });
    }
    logout() {
        this.accountService.logout();
        this.router.navigateByUrl('/');
    }
};
NavComponent = __decorate([
    Component({
        selector: 'app-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css']
    })
], NavComponent);
export { NavComponent };
//# sourceMappingURL=nav.component.js.map