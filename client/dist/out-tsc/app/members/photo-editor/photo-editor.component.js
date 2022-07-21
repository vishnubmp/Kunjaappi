import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
let PhotoEditorComponent = class PhotoEditorComponent {
    constructor(accountService, memberService) {
        this.accountService = accountService;
        this.memberService = memberService;
        this.hasBaseDropzoneOver = false;
        this.baseUrl = environment.apiUrl;
        this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    }
    ngOnInit() {
        this.initializeUploader();
    }
    fileOverBase(e) {
        this.hasBaseDropzoneOver = e;
    }
    setMainPhoto(photo) {
        this.memberService.setMainPhoto(photo.id).subscribe(() => {
            this.user.photoUrl = photo.url;
            this.accountService.setCurrentUser(this.user);
            this.member.photoUrl = photo.url;
            this.member.photos.forEach(p => {
                if (p.isMain)
                    p.isMain = false;
                if (p.id === photo.id)
                    p.isMain = true;
            });
        });
    }
    deletePhoto(photoId) {
        this.memberService.deletePhoto(photoId).subscribe(() => {
            this.member.photos = this.member.photos.filter(x => x.id !== photoId);
        });
    }
    initializeUploader() {
        this.uploader = new FileUploader({
            url: this.baseUrl + 'users/add-photo',
            authToken: 'Bearer ' + this.user.token,
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
        };
        this.uploader.onSuccessItem = (item, response, status, headers) => {
            if (response) {
                const photo = JSON.parse(response);
                this.member.photos.push(photo);
                if (photo.isMain) {
                    this.user.photoUrl = photo.url;
                    this.member.photoUrl = photo.url;
                    this.accountService.setCurrentUser(this.user);
                }
            }
        };
    }
};
__decorate([
    Input()
], PhotoEditorComponent.prototype, "member", void 0);
PhotoEditorComponent = __decorate([
    Component({
        selector: 'app-photo-editor',
        templateUrl: './photo-editor.component.html',
        styleUrls: ['./photo-editor.component.css']
    })
], PhotoEditorComponent);
export { PhotoEditorComponent };
//# sourceMappingURL=photo-editor.component.js.map