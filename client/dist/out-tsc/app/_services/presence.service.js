import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let PresenceService = class PresenceService {
    constructor(toastr, router) {
        this.toastr = toastr;
        this.router = router;
        this.hubUrl = environment.hubUrl;
        this.onlineUsersSource = new BehaviorSubject([]);
        this.onlineUsers$ = this.onlineUsersSource.asObservable();
    }
    createHubConnection(user) {
        this.hubConnection = new HubConnectionBuilder()
            .withUrl(this.hubUrl + 'presence', {
            accessTokenFactory: () => user.token
        })
            .withAutomaticReconnect()
            .build();
        this.hubConnection
            .start()
            .catch(error => console.log(error));
        this.hubConnection.on('UserIsOnline', username => {
            this.onlineUsers$.pipe(take(1)).subscribe(usernames => {
                this.onlineUsersSource.next([...usernames, username]);
            });
        });
        this.hubConnection.on('UserIsOffline', username => {
            this.onlineUsers$.pipe(take(1)).subscribe(usernames => {
                this.onlineUsersSource.next([...usernames.filter(x => x !== username)]);
            });
        });
        this.hubConnection.on('GetOnlineUsers', (usernames) => {
            this.onlineUsersSource.next(usernames);
        });
        this.hubConnection.on('NewMessageReceived', ({ username, knownAs }) => {
            this.toastr.info(knownAs + ' has sent you a new message!')
                .onTap
                .pipe(take(1))
                .subscribe(() => this.router.navigateByUrl('/members/' + username + '?tab=3'));
        });
    }
    stopHubConnection() {
        this.hubConnection.stop().catch(error => console.log(error));
    }
};
PresenceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PresenceService);
export { PresenceService };
//# sourceMappingURL=presence.service.js.map