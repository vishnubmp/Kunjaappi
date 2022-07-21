import { __decorate } from "tslib";
import { Component, ViewChild, HostListener } from '@angular/core';
import { take } from 'rxjs/operators';
let MemberEditComponent = class MemberEditComponent {
    constructor(accountService, memberService, toastr) {
        this.accountService = accountService;
        this.memberService = memberService;
        this.toastr = toastr;
        this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    }
    unloadNotification($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    }
    ngOnInit() {
        this.loadMember();
    }
    loadMember() {
        this.memberService.getMember(this.user.username).subscribe(member => {
            this.member = member;
        });
    }
    updateMember() {
        this.memberService.updateMember(this.member).subscribe(() => {
            this.toastr.success('Profile updated successfully');
            this.editForm.reset(this.member);
        });
    }
};
__decorate([
    ViewChild('editForm')
], MemberEditComponent.prototype, "editForm", void 0);
__decorate([
    HostListener('window:beforeunload', ['$event'])
], MemberEditComponent.prototype, "unloadNotification", null);
MemberEditComponent = __decorate([
    Component({
        selector: 'app-member-edit',
        templateUrl: './member-edit.component.html',
        styleUrls: ['./member-edit.component.css']
    })
], MemberEditComponent);
export { MemberEditComponent };
//# sourceMappingURL=member-edit.component.js.map