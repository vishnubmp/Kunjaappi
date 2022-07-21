import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BusyService = class BusyService {
    constructor(spinnerService) {
        this.spinnerService = spinnerService;
        this.busyRequestCount = 0;
    }
    busy() {
        this.busyRequestCount++;
        this.spinnerService.show(undefined, {
            type: 'line-scale-party',
            bdColor: 'rgba(255,255,255,0)',
            color: '#333333'
        });
    }
    idle() {
        this.busyRequestCount--;
        if (this.busyRequestCount <= 0) {
            this.busyRequestCount = 0;
            this.spinnerService.hide();
        }
    }
};
BusyService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BusyService);
export { BusyService };
//# sourceMappingURL=busy.service.js.map