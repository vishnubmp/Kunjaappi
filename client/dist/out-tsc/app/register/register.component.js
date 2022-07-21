import { __decorate } from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(accountService, toastr, fb, router) {
        this.accountService = accountService;
        this.toastr = toastr;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new EventEmitter();
        this.validationErrors = [];
    }
    ngOnInit() {
        this.intitializeForm();
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }
    intitializeForm() {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', Validators.required],
            knownAs: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            password: ['', [Validators.required,
                    Validators.minLength(4), Validators.maxLength(8)]],
            confirmPassword: ['', [Validators.required, this.matchValues('password')]]
        });
    }
    matchValues(matchTo) {
        return (control) => {
            var _a;
            return (control === null || control === void 0 ? void 0 : control.value) === ((_a = control === null || control === void 0 ? void 0 : control.parent) === null || _a === void 0 ? void 0 : _a.controls[matchTo].value)
                ? null : { isMatching: true };
        };
    }
    register() {
        this.accountService.register(this.registerForm.value).subscribe(response => {
            this.router.navigateByUrl('/members');
        }, error => {
            this.validationErrors = error;
        });
    }
    cancel() {
        this.cancelRegister.emit(false);
    }
};
__decorate([
    Output()
], RegisterComponent.prototype, "cancelRegister", void 0);
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map