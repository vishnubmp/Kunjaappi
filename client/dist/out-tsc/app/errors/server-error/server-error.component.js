import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ServerErrorComponent = class ServerErrorComponent {
    constructor(router) {
        var _a, _b;
        this.router = router;
        const navigation = this.router.getCurrentNavigation();
        this.error = (_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.error;
    }
    ngOnInit() {
    }
};
ServerErrorComponent = __decorate([
    Component({
        selector: 'app-server-error',
        templateUrl: './server-error.component.html',
        styleUrls: ['./server-error.component.css']
    })
], ServerErrorComponent);
export { ServerErrorComponent };
//# sourceMappingURL=server-error.component.js.map