import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
let MemberMessagesComponent = class MemberMessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.loading = false;
    }
    ngOnInit() {
    }
    sendMessage() {
        this.loading = true;
        this.messageService.sendMessage(this.username, this.messageContent).then(() => {
            this.messageForm.reset();
        }).finally(() => this.loading = false);
    }
};
__decorate([
    ViewChild('messageForm')
], MemberMessagesComponent.prototype, "messageForm", void 0);
__decorate([
    Input()
], MemberMessagesComponent.prototype, "messages", void 0);
__decorate([
    Input()
], MemberMessagesComponent.prototype, "username", void 0);
MemberMessagesComponent = __decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'app-member-messages',
        templateUrl: './member-messages.component.html',
        styleUrls: ['./member-messages.component.css']
    })
], MemberMessagesComponent);
export { MemberMessagesComponent };
//# sourceMappingURL=member-messages.component.js.map