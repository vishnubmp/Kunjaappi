export class UserParams {
    constructor(user) {
        this.minAge = 18;
        this.maxAge = 99;
        this.pageNumber = 1;
        this.pageSize = 24;
        this.orderBy = 'lastActive';
        this.gender = user.gender === 'female' ? 'male' : 'female';
    }
}
//# sourceMappingURL=userParams.js.map