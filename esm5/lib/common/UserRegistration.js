/*
   User registration data model - used by self registered users
*/
var UserRegistration = /** @class */ (function () {
    function UserRegistration(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail, description) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.defaultAccount = defaultAccount;
        this.accountRoles = accountRoles;
        this.type = type;
        this.tempPassword = tempPassword;
        this.changePassword = changePassword;
        this.verifyByEmail = verifyByEmail;
        this.description = description;
    }
    return UserRegistration;
}());
export { UserRegistration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFO0FBQ0Y7SUFnQ0ksMEJBQVksSUFBYSxFQUFFLEtBQWMsRUFBRSxNQUFlLEVBQUUsY0FBdUIsRUFBRSxZQUE0QixFQUFFLElBQW1CLEVBQUUsWUFBcUIsRUFBRSxjQUF3QixFQUFFLGFBQXVCLEVBQUUsV0FBb0I7UUFDbE8sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQTdDRCxJQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZSB9IGZyb20gJy4uL2NvbW1vbi9BY2NvdW50Um9sZSc7XG5cbi8qIFxuICAgVXNlciByZWdpc3RyYXRpb24gZGF0YSBtb2RlbCAtIHVzZWQgYnkgc2VsZiByZWdpc3RlcmVkIHVzZXJzIFxuKi9cbmV4cG9ydCBjbGFzcyBVc2VyUmVnaXN0cmF0aW9uIHtcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbW9iaWxlIHBob25lIG51bWJlciAoZm9yIG5vdGlmaWNhdGlvbiBhbmQgdmFsaWRhdGlvbikgXG4gICAgcHVibGljIG1vYmlsZTogc3RyaW5nO1xuIFxuICAgIC8vIERlZmF1bHQgYWNjb3VudCBJZCBcbiAgICBwdWJsaWMgZGVmYXVsdEFjY291bnQ6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGFjY291bnRzIGFuZCByb2xlcyB0aGUgdXNlciBoYXMgYWNjZXNzIHRvIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZXM6IEFjY291bnRSb2xlW107XG4gXG4gICAgLy8gVXNlciB0eXBlOiBVTkRFRklORUQgfCBTWVNBRE1JTiB8IFNVUFBPUlQgfCBVU0VSIFxuICAgIHB1YmxpYyB0eXBlOiBVc2VyVHlwZUNvZGU7XG4gXG4gICAgLy8gVGVtcG9yYXJ5IHBhc3N3b3JkIChsZWF2ZSBlbXB0eSBmb3Igc3lzdGVtIGdlbmVyYXRlZCBwYXNzd29yZCkgXG4gICAgcHVibGljIHRlbXBQYXNzd29yZDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbXVzdCBjaGFuZ2UgcGFzc3dvcmQgb24gbmV4dCBsb2dpbiBcbiAgICBwdWJsaWMgY2hhbmdlUGFzc3dvcmQ6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBzZW5kIGVtYWlsIHZlcmlmaWNhdGlvbiB0byB0aGUgdXNlciBcbiAgICBwdWJsaWMgdmVyaWZ5QnlFbWFpbDogYm9vbGVhbjtcbiBcbiAgICAvLyBVc2VyIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIGVtYWlsPzogc3RyaW5nLCBtb2JpbGU/OiBzdHJpbmcsIGRlZmF1bHRBY2NvdW50Pzogc3RyaW5nLCBhY2NvdW50Um9sZXM/OiBBY2NvdW50Um9sZVtdLCB0eXBlPzogVXNlclR5cGVDb2RlLCB0ZW1wUGFzc3dvcmQ/OiBzdHJpbmcsIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbiwgdmVyaWZ5QnlFbWFpbD86IGJvb2xlYW4sIGRlc2NyaXB0aW9uPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHRoaXMubW9iaWxlID0gbW9iaWxlO1xuICAgICAgICB0aGlzLmRlZmF1bHRBY2NvdW50ID0gZGVmYXVsdEFjY291bnQ7XG4gICAgICAgIHRoaXMuYWNjb3VudFJvbGVzID0gYWNjb3VudFJvbGVzO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRlbXBQYXNzd29yZCA9IHRlbXBQYXNzd29yZDtcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IGNoYW5nZVBhc3N3b3JkO1xuICAgICAgICB0aGlzLnZlcmlmeUJ5RW1haWwgPSB2ZXJpZnlCeUVtYWlsO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG59XG5cblxuIl19