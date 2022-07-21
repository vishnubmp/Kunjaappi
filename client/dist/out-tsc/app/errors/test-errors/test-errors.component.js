import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
let TestErrorsComponent = class TestErrorsComponent {
    constructor(http) {
        this.http = http;
        this.baseUrl = environment.apiUrl;
        this.validationErrors = [];
    }
    ngOnInit() {
    }
    get404Error() {
        this.http.get(this.baseUrl + 'buggy/not-found').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400Error() {
        this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get500Error() {
        this.http.get(this.baseUrl + 'buggy/server-error').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get401Error() {
        this.http.get(this.baseUrl + 'buggy/auth').subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
        });
    }
    get400ValidationError() {
        this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
            console.log(response);
        }, error => {
            console.log(error);
            this.validationErrors = error;
        });
    }
};
TestErrorsComponent = __decorate([
    Component({
        selector: 'app-test-errors',
        templateUrl: './test-errors.component.html',
        styleUrls: ['./test-errors.component.css']
    })
], TestErrorsComponent);
export { TestErrorsComponent };
//# sourceMappingURL=test-errors.component.js.map