import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../modals/confirm-dialog/confirm-dialog.component';
let ConfirmService = class ConfirmService {
    constructor(modalService) {
        this.modalService = modalService;
    }
    confirm(title = 'Confirmation', message = 'Are you sure you want to do this?', btnOkText = 'Ok', btnCancelText = 'Cancel') {
        const config = {
            initialState: {
                title,
                message,
                btnOkText,
                btnCancelText
            }
        };
        this.bsModelRef = this.modalService.show(ConfirmDialogComponent, config);
        return new Observable(this.getResult());
    }
    getResult() {
        return (observer) => {
            const subscription = this.bsModelRef.onHidden.subscribe(() => {
                observer.next(this.bsModelRef.content.result);
                observer.complete();
            });
            return {
                unsubscribe() {
                    subscription.unsubscribe();
                }
            };
        };
    }
};
ConfirmService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ConfirmService);
export { ConfirmService };
//# sourceMappingURL=confirm.service.js.map