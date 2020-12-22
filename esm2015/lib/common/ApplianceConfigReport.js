/*
   A single entry in appliance configuration report that lists all the devices in the system with their desired vs. actual configuration
*/
export class ApplianceConfigReport {
    constructor(accountId, accountName, accountType, applianceId, applianceName, machineId, groups, configId, versionId, actualConfigId, actualVersionId) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.accountType = accountType;
        this.applianceId = applianceId;
        this.applianceName = applianceName;
        this.machineId = machineId;
        this.groups = groups;
        this.configId = configId;
        this.versionId = versionId;
        this.actualConfigId = actualConfigId;
        this.actualVersionId = actualVersionId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29uZmlnUmVwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0FwcGxpYW5jZUNvbmZpZ1JlcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxxQkFBcUI7SUFtQzlCLFlBQVksU0FBa0IsRUFBRSxXQUFvQixFQUFFLFdBQW9CLEVBQUUsV0FBb0IsRUFBRSxhQUFzQixFQUFFLFNBQWtCLEVBQUUsTUFBZSxFQUFFLFFBQWlCLEVBQUUsU0FBa0IsRUFBRSxjQUF1QixFQUFFLGVBQXdCO1FBQ25QLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQzNDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogXG4gICBBIHNpbmdsZSBlbnRyeSBpbiBhcHBsaWFuY2UgY29uZmlndXJhdGlvbiByZXBvcnQgdGhhdCBsaXN0cyBhbGwgdGhlIGRldmljZXMgaW4gdGhlIHN5c3RlbSB3aXRoIHRoZWlyIGRlc2lyZWQgdnMuIGFjdHVhbCBjb25maWd1cmF0aW9uIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VDb25maWdSZXBvcnQge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgTmFtZSBcbiAgICBwdWJsaWMgYWNjb3VudE5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IFR5cGUgXG4gICAgcHVibGljIGFjY291bnRUeXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIElkIFxuICAgIHB1YmxpYyBhcHBsaWFuY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBOYW1lIFxuICAgIHB1YmxpYyBhcHBsaWFuY2VOYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gTWFjaGluZSBJZCAoU2VyaWFsIE51bWJlcikgXG4gICAgcHVibGljIG1hY2hpbmVJZDogc3RyaW5nO1xuIFxuICAgIC8vIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIGZlYXR1cmVzIGdyb3VwcyBcbiAgICBwdWJsaWMgZ3JvdXBzOiBzdHJpbmc7XG4gXG4gICAgLy8gRGVzaXJlZCBDb25maWd1cmF0aW9uIFZlcnNpb24gSWQgXG4gICAgcHVibGljIGNvbmZpZ0lkOiBzdHJpbmc7XG4gXG4gICAgLy8gRGVzaXJlZCBDb25maWd1cmF0aW9uIFZlcnNpb24gSWQgXG4gICAgcHVibGljIHZlcnNpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjdHVhbCBDb25maWd1cmF0aW9uIFZlcnNpb24gSWQgXG4gICAgcHVibGljIGFjdHVhbENvbmZpZ0lkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWN0dWFsIENvbmZpZ3VyYXRpb24gVmVyc2lvbiBJZCBcbiAgICBwdWJsaWMgYWN0dWFsVmVyc2lvbklkOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBhY2NvdW50TmFtZT86IHN0cmluZywgYWNjb3VudFR5cGU/OiBzdHJpbmcsIGFwcGxpYW5jZUlkPzogc3RyaW5nLCBhcHBsaWFuY2VOYW1lPzogc3RyaW5nLCBtYWNoaW5lSWQ/OiBzdHJpbmcsIGdyb3Vwcz86IHN0cmluZywgY29uZmlnSWQ/OiBzdHJpbmcsIHZlcnNpb25JZD86IHN0cmluZywgYWN0dWFsQ29uZmlnSWQ/OiBzdHJpbmcsIGFjdHVhbFZlcnNpb25JZD86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSBhY2NvdW50TmFtZTtcbiAgICAgICAgdGhpcy5hY2NvdW50VHlwZSA9IGFjY291bnRUeXBlO1xuICAgICAgICB0aGlzLmFwcGxpYW5jZUlkID0gYXBwbGlhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXBwbGlhbmNlTmFtZSA9IGFwcGxpYW5jZU5hbWU7XG4gICAgICAgIHRoaXMubWFjaGluZUlkID0gbWFjaGluZUlkO1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICAgICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZ0lkO1xuICAgICAgICB0aGlzLnZlcnNpb25JZCA9IHZlcnNpb25JZDtcbiAgICAgICAgdGhpcy5hY3R1YWxDb25maWdJZCA9IGFjdHVhbENvbmZpZ0lkO1xuICAgICAgICB0aGlzLmFjdHVhbFZlcnNpb25JZCA9IGFjdHVhbFZlcnNpb25JZDtcbiAgICB9XG5cbn1cblxuXG4iXX0=