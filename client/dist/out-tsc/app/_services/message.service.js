import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
let MessageService = class MessageService {
    constructor(http, busyService) {
        this.http = http;
        this.busyService = busyService;
        this.baseUrl = environment.apiUrl;
        this.hubUrl = environment.hubUrl;
        this.messageThreadSource = new BehaviorSubject([]);
        this.messageThread$ = this.messageThreadSource.asObservable();
    }
    createHubConnection(user, otherUsername) {
        this.busyService.busy();
        this.hubConnection = new HubConnectionBuilder()
            .withUrl(this.hubUrl + 'message?user=' + otherUsername, {
            accessTokenFactory: () => user.token
        })
            .withAutomaticReconnect()
            .build();
        this.hubConnection.start()
            .catch(error => console.log(error))
            .finally(() => this.busyService.idle());
        this.hubConnection.on('ReceiveMessageThread', messages => {
            this.messageThreadSource.next(messages);
        });
        this.hubConnection.on('NewMessage', message => {
            this.messageThread$.pipe(take(1)).subscribe(messages => {
                this.messageThreadSource.next([...messages, message]);
            });
        });
        this.hubConnection.on('UpdatedGroup', (group) => {
            if (group.connections.some(x => x.username === otherUsername)) {
                this.messageThread$.pipe(take(1)).subscribe(messages => {
                    messages.forEach(message => {
                        if (!message.dateRead) {
                            message.dateRead = new Date(Date.now());
                        }
                    });
                    this.messageThreadSource.next([...messages]);
                });
            }
        });
    }
    stopHubConnection() {
        if (this.hubConnection) {
            this.messageThreadSource.next([]);
            this.hubConnection.stop();
        }
    }
    getMessages(pageNumber, pageSize, container) {
        let params = getPaginationHeaders(pageNumber, pageSize);
        params = params.append('Container', container);
        return getPaginatedResult(this.baseUrl + 'messages', params, this.http);
    }
    getMessageThread(username) {
        return this.http.get(this.baseUrl + 'messages/thread/' + username);
    }
    sendMessage(username, content) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.hubConnection.invoke('SendMessage', { recipientUsername: username, content })
                .catch(error => console.log(error));
        });
    }
    deleteMessage(id) {
        return this.http.delete(this.baseUrl + 'messages/' + id);
    }
};
MessageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MessageService);
export { MessageService };
//# sourceMappingURL=message.service.js.map