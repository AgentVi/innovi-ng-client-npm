/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
var /*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
ApplianceRegistration = /** @class */ (function () {
    function ApplianceRegistration(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId) {
        this.name = name;
        this.accountId = accountId;
        this.folderId = folderId;
        this.machineId = machineId;
        this.productType = productType;
        this.configurationId = configurationId;
        this.configurationVersionId = configurationVersionId;
    }
    return ApplianceRegistration;
}());
/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
export { ApplianceRegistration };
if (false) {
    /** @type {?} */
    ApplianceRegistration.prototype.name;
    /** @type {?} */
    ApplianceRegistration.prototype.accountId;
    /** @type {?} */
    ApplianceRegistration.prototype.folderId;
    /** @type {?} */
    ApplianceRegistration.prototype.machineId;
    /** @type {?} */
    ApplianceRegistration.prototype.productType;
    /** @type {?} */
    ApplianceRegistration.prototype.configurationId;
    /** @type {?} */
    ApplianceRegistration.prototype.configurationVersionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlUmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0FwcGxpYW5jZVJlZ2lzdHJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BOzs7OztJQXVCSSwrQkFBWSxJQUFhLEVBQUUsU0FBa0IsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsV0FBNkIsRUFBRSxlQUF3QixFQUFFLHNCQUErQjtRQUMxSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsc0JBQXNCLENBQUM7SUFDekQsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7Ozs7SUE5QkcscUNBQW9COztJQUdwQiwwQ0FBeUI7O0lBR3pCLHlDQUF3Qjs7SUFHeEIsMENBQXlCOztJQUd6Qiw0Q0FBb0M7O0lBR3BDLGdEQUErQjs7SUFHL0IsdURBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUHJvZHVjdFR5cGVDb2RlJztcblxuLyogXG4gICBBcHBsaWFuY2UgcmVnaXN0cmF0aW9uIGluZm9cbiAgIFRoaXMgbW9kZWwgaXMgdXNlZCB3aGVuIGEgdXNlciByZWdpc3RlcnMgbmV3IGFwcGxpYW5jZSBpbiB0aGUgc3lzdGVtIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VSZWdpc3RyYXRpb24ge1xuIFxuICAgIC8vIEFwcGxpYW5jZSBuYW1lIChvcHRpb25hbCkgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXJJZCBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBQaHlzaWNhbCBtYWNoaW5lIGlkZW50aWZpZXIgKHNlcmlhbCBudW1iZXIpIFxuICAgIHB1YmxpYyBtYWNoaW5lSWQ6IHN0cmluZztcbiBcbiAgICAvLyBQcm9kdWN0IHR5cGUgY29kZSAoRWRnZSBNb2RlbCkgXG4gICAgcHVibGljIHByb2R1Y3RUeXBlOiBQcm9kdWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIHZlcnNpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3RvcihuYW1lPzogc3RyaW5nLCBhY2NvdW50SWQ/OiBzdHJpbmcsIGZvbGRlcklkPzogc3RyaW5nLCBtYWNoaW5lSWQ/OiBzdHJpbmcsIHByb2R1Y3RUeXBlPzogUHJvZHVjdFR5cGVDb2RlLCBjb25maWd1cmF0aW9uSWQ/OiBzdHJpbmcsIGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkO1xuICAgICAgICB0aGlzLmZvbGRlcklkID0gZm9sZGVySWQ7XG4gICAgICAgIHRoaXMubWFjaGluZUlkID0gbWFjaGluZUlkO1xuICAgICAgICB0aGlzLnByb2R1Y3RUeXBlID0gcHJvZHVjdFR5cGU7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbklkID0gY29uZmlndXJhdGlvbklkO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25WZXJzaW9uSWQgPSBjb25maWd1cmF0aW9uVmVyc2lvbklkO1xuICAgIH1cblxufVxuXG5cbiJdfQ==