/*
   User registration data model - used by self registered users
*/
export class UserRegistration {
    constructor(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail, description) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Vc2VyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGdCQUFnQjtJQWdDekIsWUFBWSxJQUFhLEVBQUUsS0FBYyxFQUFFLE1BQWUsRUFBRSxjQUF1QixFQUFFLFlBQTRCLEVBQUUsSUFBbUIsRUFBRSxZQUFxQixFQUFFLGNBQXdCLEVBQUUsYUFBdUIsRUFBRSxXQUFvQjtRQUNsTyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFJvbGUgfSBmcm9tICcuLi9jb21tb24vQWNjb3VudFJvbGUnO1xuXG4vKiBcbiAgIFVzZXIgcmVnaXN0cmF0aW9uIGRhdGEgbW9kZWwgLSB1c2VkIGJ5IHNlbGYgcmVnaXN0ZXJlZCB1c2VycyBcbiovXG5leHBvcnQgY2xhc3MgVXNlclJlZ2lzdHJhdGlvbiB7XG4gXG4gICAgLy8gVXNlciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG1vYmlsZSBwaG9uZSBudW1iZXIgKGZvciBub3RpZmljYXRpb24gYW5kIHZhbGlkYXRpb24pIFxuICAgIHB1YmxpYyBtb2JpbGU6IHN0cmluZztcbiBcbiAgICAvLyBEZWZhdWx0IGFjY291bnQgSWQgXG4gICAgcHVibGljIGRlZmF1bHRBY2NvdW50OiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBhY2NvdW50cyBhbmQgcm9sZXMgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBcbiAgICBwdWJsaWMgYWNjb3VudFJvbGVzOiBBY2NvdW50Um9sZVtdO1xuIFxuICAgIC8vIFVzZXIgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBTVVBQT1JUIHwgVVNFUiBcbiAgICBwdWJsaWMgdHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFRlbXBvcmFyeSBwYXNzd29yZCAobGVhdmUgZW1wdHkgZm9yIHN5c3RlbSBnZW5lcmF0ZWQgcGFzc3dvcmQpIFxuICAgIHB1YmxpYyB0ZW1wUGFzc3dvcmQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIC8vIEZsYWcgdG8gc2VuZCBlbWFpbCB2ZXJpZmljYXRpb24gdG8gdGhlIHVzZXIgXG4gICAgcHVibGljIHZlcmlmeUJ5RW1haWw6IGJvb2xlYW47XG4gXG4gICAgLy8gVXNlciBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCBlbWFpbD86IHN0cmluZywgbW9iaWxlPzogc3RyaW5nLCBkZWZhdWx0QWNjb3VudD86IHN0cmluZywgYWNjb3VudFJvbGVzPzogQWNjb3VudFJvbGVbXSwgdHlwZT86IFVzZXJUeXBlQ29kZSwgdGVtcFBhc3N3b3JkPzogc3RyaW5nLCBjaGFuZ2VQYXNzd29yZD86IGJvb2xlYW4sIHZlcmlmeUJ5RW1haWw/OiBib29sZWFuLCBkZXNjcmlwdGlvbj86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLm1vYmlsZSA9IG1vYmlsZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0QWNjb3VudCA9IGRlZmF1bHRBY2NvdW50O1xuICAgICAgICB0aGlzLmFjY291bnRSb2xlcyA9IGFjY291bnRSb2xlcztcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50ZW1wUGFzc3dvcmQgPSB0ZW1wUGFzc3dvcmQ7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSBjaGFuZ2VQYXNzd29yZDtcbiAgICAgICAgdGhpcy52ZXJpZnlCeUVtYWlsID0gdmVyaWZ5QnlFbWFpbDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxufVxuXG5cbiJdfQ==