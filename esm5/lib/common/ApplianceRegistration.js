/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
var ApplianceRegistration = /** @class */ (function () {
    function ApplianceRegistration(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId, customProfile) {
        this.name = name;
        this.accountId = accountId;
        this.folderId = folderId;
        this.machineId = machineId;
        this.productType = productType;
        this.configurationId = configurationId;
        this.configurationVersionId = configurationVersionId;
        this.customProfile = customProfile;
    }
    return ApplianceRegistration;
}());
export { ApplianceRegistration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlUmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0FwcGxpYW5jZVJlZ2lzdHJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0VBR0U7QUFDRjtJQTBCSSwrQkFBWSxJQUFhLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsV0FBNkIsRUFBRSxlQUF3QixFQUFFLHNCQUErQixFQUFFLGFBQXNCO1FBQ2xNLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUwsNEJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUHJvZHVjdFR5cGVDb2RlJztcblxuLyogXG4gICBBcHBsaWFuY2UgcmVnaXN0cmF0aW9uIGluZm9cbiAgIFRoaXMgbW9kZWwgaXMgdXNlZCB3aGVuIGEgdXNlciByZWdpc3RlcnMgbmV3IGFwcGxpYW5jZSBpbiB0aGUgc3lzdGVtIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VSZWdpc3RyYXRpb24ge1xuIFxuICAgIC8vIEFwcGxpYW5jZSBuYW1lIChvcHRpb25hbCkgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXJJZCBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBQaHlzaWNhbCBtYWNoaW5lIGlkZW50aWZpZXIgKHNlcmlhbCBudW1iZXIpIFxuICAgIHB1YmxpYyBtYWNoaW5lSWQ6IHN0cmluZztcbiBcbiAgICAvLyBQcm9kdWN0IHR5cGUgY29kZSAoRWRnZSBNb2RlbCkgXG4gICAgcHVibGljIHByb2R1Y3RUeXBlOiBQcm9kdWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIHZlcnNpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBDdXN0b20gcHJvZmlsZSB0byBvdmVycmlkZSBnZW5lcmFsIHBhY2thZ2UgcGFyYW1ldGVycyBcbiAgICBwdWJsaWMgY3VzdG9tUHJvZmlsZTogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZywgZm9sZGVySWQ/OiBzdHJpbmcsIG1hY2hpbmVJZD86IHN0cmluZywgcHJvZHVjdFR5cGU/OiBQcm9kdWN0VHlwZUNvZGUsIGNvbmZpZ3VyYXRpb25JZD86IHN0cmluZywgY29uZmlndXJhdGlvblZlcnNpb25JZD86IHN0cmluZywgY3VzdG9tUHJvZmlsZT86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBmb2xkZXJJZDtcbiAgICAgICAgdGhpcy5tYWNoaW5lSWQgPSBtYWNoaW5lSWQ7XG4gICAgICAgIHRoaXMucHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZTtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uSWQgPSBjb25maWd1cmF0aW9uSWQ7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvblZlcnNpb25JZCA9IGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ7XG4gICAgICAgIHRoaXMuY3VzdG9tUHJvZmlsZSA9IGN1c3RvbVByb2ZpbGU7XG4gICAgfVxuXG59XG5cblxuIl19