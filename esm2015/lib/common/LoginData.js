/*
   Login data (returned by the API after successful login)
*/
export class LoginData {
    constructor(accessToken, accountRole, permissions, userId, userName, userEmail, userType, userStatus, changePassword, acceptedEula, platformType) {
        this.accessToken = accessToken;
        this.accountRole = accountRole;
        this.permissions = permissions;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userType = userType;
        this.userStatus = userStatus;
        this.changePassword = changePassword;
        this.acceptedEula = acceptedEula;
        this.platformType = platformType;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5EYXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9jb21tb24vTG9naW5EYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFNBQVM7SUFtQ2xCLFlBQVksV0FBb0IsRUFBRSxXQUF5QixFQUFFLFdBQTBCLEVBQUUsTUFBZSxFQUFFLFFBQWlCLEVBQUUsU0FBa0IsRUFBRSxRQUF1QixFQUFFLFVBQTJCLEVBQUUsY0FBd0IsRUFBRSxZQUFzQixFQUFFLFlBQStCO1FBQ3BSLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9QbGF0Zm9ybVR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRSb2xlIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRSb2xlJztcbmltcG9ydCB7IFBlcm1pc3Npb24gfSBmcm9tICcuLi9jb21tb24vUGVybWlzc2lvbic7XG5pbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgTG9naW4gZGF0YSAocmV0dXJuZWQgYnkgdGhlIEFQSSBhZnRlciBzdWNjZXNzZnVsIGxvZ2luKSBcbiovXG5leHBvcnQgY2xhc3MgTG9naW5EYXRhIHtcbiBcbiAgICAvLyBBY2Nlc3MgdG9rZW4gdG8gdXNlIChmb3IgdGhlIGRlZmF1bHQgYWNjb3VudCkgXG4gICAgcHVibGljIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VycmVudCBhY2NvdW50IGlkIGFuZCByb2xlIFxuICAgIHB1YmxpYyBhY2NvdW50Um9sZTogQWNjb3VudFJvbGU7XG4gXG4gICAgLy8gVXNlciBwZXJtaXNzaW9ucyBcbiAgICBwdWJsaWMgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25bXTtcbiBcbiAgICAvLyBVc2VyIElkIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIHVzZXJOYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgdXNlckVtYWlsOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciB0eXBlIFxuICAgIHB1YmxpYyB1c2VyVHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzIFxuICAgIHB1YmxpYyB1c2VyU3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIC8vIFVzZXIgYWNjZXB0ZWQgdGhlIEVVTEEgYWdyZWVtZW50IFxuICAgIHB1YmxpYyBhY2NlcHRlZEV1bGE6IGJvb2xlYW47XG4gXG4gICAgLy8gUGxhdGZvcm0gdHlwZSBmb3IgY3VycmVudCBhY2NvdW50IFxuICAgIHB1YmxpYyBwbGF0Zm9ybVR5cGU6IFBsYXRmb3JtVHlwZUNvZGU7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjZXNzVG9rZW4/OiBzdHJpbmcsIGFjY291bnRSb2xlPzogQWNjb3VudFJvbGUsIHBlcm1pc3Npb25zPzogUGVybWlzc2lvbltdLCB1c2VySWQ/OiBzdHJpbmcsIHVzZXJOYW1lPzogc3RyaW5nLCB1c2VyRW1haWw/OiBzdHJpbmcsIHVzZXJUeXBlPzogVXNlclR5cGVDb2RlLCB1c2VyU3RhdHVzPzogVXNlclN0YXR1c0NvZGUsIGNoYW5nZVBhc3N3b3JkPzogYm9vbGVhbiwgYWNjZXB0ZWRFdWxhPzogYm9vbGVhbiwgcGxhdGZvcm1UeXBlPzogUGxhdGZvcm1UeXBlQ29kZSkgeyBcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmFjY291bnRSb2xlID0gYWNjb3VudFJvbGU7XG4gICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB1c2VyTmFtZTtcbiAgICAgICAgdGhpcy51c2VyRW1haWwgPSB1c2VyRW1haWw7XG4gICAgICAgIHRoaXMudXNlclR5cGUgPSB1c2VyVHlwZTtcbiAgICAgICAgdGhpcy51c2VyU3RhdHVzID0gdXNlclN0YXR1cztcbiAgICAgICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IGNoYW5nZVBhc3N3b3JkO1xuICAgICAgICB0aGlzLmFjY2VwdGVkRXVsYSA9IGFjY2VwdGVkRXVsYTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVR5cGUgPSBwbGF0Zm9ybVR5cGU7XG4gICAgfVxuXG59XG5cblxuIl19