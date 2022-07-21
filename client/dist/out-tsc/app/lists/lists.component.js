import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListsComponent = class ListsComponent {
    constructor(memberService) {
        this.memberService = memberService;
        this.predicate = 'liked';
        this.pageNumber = 1;
        this.pageSize = 5;
    }
    ngOnInit() {
        this.loadLikes();
    }
    loadLikes() {
        this.memberService.getLikes(this.predicate, this.pageNumber, this.pageSize).subscribe(response => {
            this.members = response.result;
            this.pagination = response.pagination;
        });
    }
    pageChanged(event) {
        this.pageNumber = event.page;
        this.loadLikes();
    }
};
ListsComponent = __decorate([
    Component({
        selector: 'app-lists',
        templateUrl: './lists.component.html',
        styleUrls: ['./lists.component.css']
    })
], ListsComponent);
export { ListsComponent };
//# sourceMappingURL=lists.component.js.map