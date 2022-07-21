import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
let AccountService = class AccountService {
    constructor(http, presence) {
        this.http = http;
        this.presence = presence;
        this.baseUrl = environment.apiUrl;
        this.currentUserSource = new ReplaySubject(1);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    login(model) {
        return this.http.post(this.baseUrl + 'account/login', model).pipe(map((response) => {
            const user = response;
            if (user) {
                this.setCurrentUser(user);
                this.presence.createHubConnection(user);
            }
        }));
    }
    register(model) {
        return this.http.post(this.baseUrl + 'account/register', model).pipe(map((user) => {
            if (user) {
                this.setCurrentUser(user);
                this.presence.createHubConnection(user);
            }
        }));
    }
    setCurrentUser(user) {
        user.roles = [];
        const roles = this.getDecodedToken(user.token).role;
        Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    }
    logout() {
        localStorage.removeItem('user');
        this.currentUserSource.next(null);
        this.presence.stopHubConnection();
    }
    getDecodedToken(token) {
        return JSON.parse(atob(token.split('.')[1]));
    }
};
AccountService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AccountService);
export { AccountService };
//# sourceMappingURL=account.service.js.map