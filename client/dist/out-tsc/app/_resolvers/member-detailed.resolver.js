import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MemberDetailedResolver = class MemberDetailedResolver {
    constructor(memberService) {
        this.memberService = memberService;
    }
    resolve(route) {
        return this.memberService.getMember(route.paramMap.get('username'));
    }
};
MemberDetailedResolver = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MemberDetailedResolver);
export { MemberDetailedResolver };
//# sourceMappingURL=member-detailed.resolver.js.map