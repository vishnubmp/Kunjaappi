import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let MemberCardComponent = class MemberCardComponent {
    constructor(memberService, toastr, presence) {
        this.memberService = memberService;
        this.toastr = toastr;
        this.presence = presence;
    }
    ngOnInit() {
    }
    addLike(member) {
        this.memberService.addLike(member.username).subscribe(() => {
            this.toastr.success('You have liked ' + member.knownAs);
        });
    }
};
__decorate([
    Input()
], MemberCardComponent.prototype, "member", void 0);
MemberCardComponent = __decorate([
    Component({
        selector: 'app-member-card',
        templateUrl: './member-card.component.html',
        styleUrls: ['./member-card.component.css'],
    })
], MemberCardComponent);
export { MemberCardComponent };
//# sourceMappingURL=member-card.component.js.map