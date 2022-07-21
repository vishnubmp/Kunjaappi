import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MemberListComponent = class MemberListComponent {
    constructor(memberService) {
        this.memberService = memberService;
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = this.memberService.getUserParams();
    }
    ngOnInit() {
        this.loadMembers();
    }
    loadMembers() {
        this.memberService.setUserParams(this.userParams);
        this.memberService.getMembers(this.userParams).subscribe(response => {
            this.members = response.result;
            this.pagination = response.pagination;
        });
    }
    resetFilters() {
        this.userParams = this.memberService.resetUserParams();
        this.loadMembers();
    }
    pageChanged(event) {
        this.userParams.pageNumber = event.page;
        this.memberService.setUserParams(this.userParams);
        this.loadMembers();
    }
};
MemberListComponent = __decorate([
    Component({
        selector: 'app-member-list',
        templateUrl: './member-list.component.html',
        styleUrls: ['./member-list.component.css']
    })
], MemberListComponent);
export { MemberListComponent };
//# sourceMappingURL=member-list.component.js.map