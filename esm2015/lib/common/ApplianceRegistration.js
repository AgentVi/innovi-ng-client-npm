/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
export class ApplianceRegistration {
    constructor(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId, deviceProfileId) {
        this.name = name;
        this.accountId = accountId;
        this.folderId = folderId;
        this.machineId = machineId;
        this.productType = productType;
        this.configurationId = configurationId;
        this.configurationVersionId = configurationVersionId;
        this.deviceProfileId = deviceProfileId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlUmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vQXBwbGlhbmNlUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7RUFHRTtBQUNGLE1BQU0sT0FBTyxxQkFBcUI7SUEwQjlCLFlBQVksSUFBYSxFQUFFLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLFdBQTZCLEVBQUUsZUFBd0IsRUFBRSxzQkFBK0IsRUFBRSxlQUF3QjtRQUNwTSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDM0MsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUHJvZHVjdFR5cGVDb2RlJztcblxuLyogXG4gICBBcHBsaWFuY2UgcmVnaXN0cmF0aW9uIGluZm9cbiAgIFRoaXMgbW9kZWwgaXMgdXNlZCB3aGVuIGEgdXNlciByZWdpc3RlcnMgbmV3IGFwcGxpYW5jZSBpbiB0aGUgc3lzdGVtIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VSZWdpc3RyYXRpb24ge1xuIFxuICAgIC8vIEFwcGxpYW5jZSBuYW1lIChvcHRpb25hbCkgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXJJZCBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBQaHlzaWNhbCBtYWNoaW5lIGlkZW50aWZpZXIgKHNlcmlhbCBudW1iZXIpIFxuICAgIHB1YmxpYyBtYWNoaW5lSWQ6IHN0cmluZztcbiBcbiAgICAvLyBQcm9kdWN0IHR5cGUgY29kZSAoRWRnZSBNb2RlbCkgXG4gICAgcHVibGljIHByb2R1Y3RUeXBlOiBQcm9kdWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIHZlcnNpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBDdXN0b20gcHJvZmlsZSB0byBvdmVycmlkZSBnZW5lcmFsIHBhY2thZ2UgcGFyYW1ldGVycyBcbiAgICBwdWJsaWMgZGV2aWNlUHJvZmlsZUlkOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgYWNjb3VudElkPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZywgbWFjaGluZUlkPzogc3RyaW5nLCBwcm9kdWN0VHlwZT86IFByb2R1Y3RUeXBlQ29kZSwgY29uZmlndXJhdGlvbklkPzogc3RyaW5nLCBjb25maWd1cmF0aW9uVmVyc2lvbklkPzogc3RyaW5nLCBkZXZpY2VQcm9maWxlSWQ/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkO1xuICAgICAgICB0aGlzLmZvbGRlcklkID0gZm9sZGVySWQ7XG4gICAgICAgIHRoaXMubWFjaGluZUlkID0gbWFjaGluZUlkO1xuICAgICAgICB0aGlzLnByb2R1Y3RUeXBlID0gcHJvZHVjdFR5cGU7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbklkID0gY29uZmlndXJhdGlvbklkO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25WZXJzaW9uSWQgPSBjb25maWd1cmF0aW9uVmVyc2lvbklkO1xuICAgICAgICB0aGlzLmRldmljZVByb2ZpbGVJZCA9IGRldmljZVByb2ZpbGVJZDtcbiAgICB9XG5cbn1cblxuXG4iXX0=