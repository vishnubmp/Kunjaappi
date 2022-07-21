import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
        this.baseUrl = environment.apiUrl;
    }
    getUsersWithRoles() {
        return this.http.get(this.baseUrl + 'admin/users-with-roles');
    }
    updateUserRoles(username, roles) {
        return this.http.post(this.baseUrl + 'admin/edit-roles/' + username + '?roles=' + roles, {});
    }
};
AdminService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AdminService);
export { AdminService };
//# sourceMappingURL=admin.service.js.map