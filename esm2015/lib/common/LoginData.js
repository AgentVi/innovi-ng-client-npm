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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5EYXRhLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vTG9naW5EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFNBQVM7SUEwQmxCLFlBQVksV0FBb0IsRUFBRSxXQUF5QixFQUFFLE1BQWUsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsUUFBdUIsRUFBRSxVQUEyQixFQUFFLGNBQXdCO1FBQy9MLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3pDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRSb2xlJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcblxuLyogXG4gICBMb2dpbiBkYXRhIChyZXR1cm5lZCBieSB0aGUgQVBJIGFmdGVyIHN1Y2Nlc3NmdWwgbG9naW4pIFxuKi9cbmV4cG9ydCBjbGFzcyBMb2dpbkRhdGEge1xuIFxuICAgIC8vIEFjY2VzcyB0b2tlbiB0byB1c2UgKGZvciB0aGUgZGVmYXVsdCBhY2NvdW50KSBcbiAgICBwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZztcbiBcbiAgICAvLyBDdXJyZW50IGFjY291bnQgaWQgYW5kIHJvbGUgXG4gICAgcHVibGljIGFjY291bnRSb2xlOiBBY2NvdW50Um9sZTtcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgdXNlckVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciB0eXBlIFxuICAgIHB1YmxpYyB1c2VyVHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzIFxuICAgIHB1YmxpYyB1c2VyU3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIGNvbnN0cnVjdG9yKGFjY2Vzc1Rva2VuPzogc3RyaW5nLCBhY2NvdW50Um9sZT86IEFjY291bnRSb2xlLCB1c2VySWQ/OiBzdHJpbmcsIHVzZXJOYW1lPzogc3RyaW5nLCB1c2VyRW1haWw/OiBzdHJpbmcsIHVzZXJUeXBlPzogVXNlclR5cGVDb2RlLCB1c2VyU3RhdHVzPzogVXNlclN0YXR1c0NvZGUsIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbikgeyBcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmFjY291bnRSb2xlID0gYWNjb3VudFJvbGU7XG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XG4gICAgICAgIHRoaXMudXNlckVtYWlsID0gdXNlckVtYWlsO1xuICAgICAgICB0aGlzLnVzZXJUeXBlID0gdXNlclR5cGU7XG4gICAgICAgIHRoaXMudXNlclN0YXR1cyA9IHVzZXJTdGF0dXM7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSBjaGFuZ2VQYXNzd29yZDtcbiAgICB9XG5cbn1cblxuXG4iXX0=