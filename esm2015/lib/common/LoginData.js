/*
   Login data (returned by the API after successful login)
*/
export class LoginData {
    constructor(accessToken, accountRole, userId, userName, userEmail, userType, userStatus, changePassword) {
        this.accessToken = accessToken;
        this.accountRole = accountRole;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userType = userType;
        this.userStatus = userStatus;
        this.changePassword = changePassword;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5EYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0xvZ2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxTQUFTO0lBMEJsQixZQUFZLFdBQW9CLEVBQUUsV0FBeUIsRUFBRSxNQUFlLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLFFBQXVCLEVBQUUsVUFBMkIsRUFBRSxjQUF3QjtRQUMvTCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFjY291bnRSb2xlIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRSb2xlJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5cbi8qIFxuICAgTG9naW4gZGF0YSAocmV0dXJuZWQgYnkgdGhlIEFQSSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luKSBcbiovXG5leHBvcnQgY2xhc3MgTG9naW5EYXRhIHtcbiBcbiAgICAvLyBBY2Nlc3MgdG9rZW4gdG8gdXNlIChmb3IgdGhlIGRlZmF1bHQgYWNjb3VudCkgXG4gICAgcHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VycmVudCBhY2NvdW50IGlkIGFuZCByb2xlIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZTogQWNjb3VudFJvbGU7XG4gXG4gICAgLy8gVXNlciBJZCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBuYW1lIFxuICAgIHB1YmxpYyB1c2VyTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgZW1haWwgXG4gICAgcHVibGljIHVzZXJFbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgdHlwZSBcbiAgICBwdWJsaWMgdXNlclR5cGU6IFVzZXJUeXBlQ29kZTtcbiBcbiAgICAvLyBVc2VyIHN0YXR1cyBcbiAgICBwdWJsaWMgdXNlclN0YXR1czogVXNlclN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVXNlciBtdXN0IGNoYW5nZSBwYXNzd29yZCBvbiBuZXh0IGxvZ2luIFxuICAgIHB1YmxpYyBjaGFuZ2VQYXNzd29yZDogYm9vbGVhbjtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbj86IHN0cmluZywgYWNjb3VudFJvbGU/OiBBY2NvdW50Um9sZSwgdXNlcklkPzogc3RyaW5nLCB1c2VyTmFtZT86IHN0cmluZywgdXNlckVtYWlsPzogc3RyaW5nLCB1c2VyVHlwZT86IFVzZXJUeXBlQ29kZSwgdXNlclN0YXR1cz86IFVzZXJTdGF0dXNDb2RlLCBjaGFuZ2VQYXNzd29yZD86IGJvb2xlYW4pIHsgXG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5hY2NvdW50Um9sZSA9IGFjY291bnRSb2xlO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xuICAgICAgICB0aGlzLnVzZXJFbWFpbCA9IHVzZXJFbWFpbDtcbiAgICAgICAgdGhpcy51c2VyVHlwZSA9IHVzZXJUeXBlO1xuICAgICAgICB0aGlzLnVzZXJTdGF0dXMgPSB1c2VyU3RhdHVzO1xuICAgICAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gY2hhbmdlUGFzc3dvcmQ7XG4gICAgfVxuXG59XG5cblxuIl19