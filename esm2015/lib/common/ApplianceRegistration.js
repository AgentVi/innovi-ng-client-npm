/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
export class ApplianceRegistration {
    /**
     * @param {?=} name
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} machineId
     * @param {?=} productType
     * @param {?=} configurationId
     * @param {?=} configurationVersionId
     */
    constructor(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId) {
        this.name = name;
        this.accountId = accountId;
        this.folderId = folderId;
        this.machineId = machineId;
        this.productType = productType;
        this.configurationId = configurationId;
        this.configurationVersionId = configurationVersionId;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlUmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0FwcGxpYW5jZVJlZ2lzdHJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQU1BLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7Ozs7SUF1QjlCLFlBQVksSUFBYSxFQUFFLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLFdBQTZCLEVBQUUsZUFBd0IsRUFBRSxzQkFBK0I7UUFDMUssSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFDO0lBQ3pELENBQUM7Q0FFSjs7O0lBOUJHLHFDQUFvQjs7SUFHcEIsMENBQXlCOztJQUd6Qix5Q0FBd0I7O0lBR3hCLDBDQUF5Qjs7SUFHekIsNENBQW9DOztJQUdwQyxnREFBK0I7O0lBRy9CLHVEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5cbi8qIFxuICAgQXBwbGlhbmNlIHJlZ2lzdHJhdGlvbiBpbmZvXG4gICBUaGlzIG1vZGVsIGlzIHVzZWQgd2hlbiBhIHVzZXIgcmVnaXN0ZXJzIG5ldyBhcHBsaWFuY2UgaW4gdGhlIHN5c3RlbSBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlUmVnaXN0cmF0aW9uIHtcbiBcbiAgICAvLyBBcHBsaWFuY2UgbmFtZSAob3B0aW9uYWwpIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVySWQgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUGh5c2ljYWwgbWFjaGluZSBpZGVudGlmaWVyIChzZXJpYWwgbnVtYmVyKSBcbiAgICBwdWJsaWMgbWFjaGluZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gUHJvZHVjdCB0eXBlIGNvZGUgKEVkZ2UgTW9kZWwpIFxuICAgIHB1YmxpYyBwcm9kdWN0VHlwZTogUHJvZHVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIGlkIFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgU1cgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGlkIFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uVmVyc2lvbklkOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IobmFtZT86IHN0cmluZywgYWNjb3VudElkPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZywgbWFjaGluZUlkPzogc3RyaW5nLCBwcm9kdWN0VHlwZT86IFByb2R1Y3RUeXBlQ29kZSwgY29uZmlndXJhdGlvbklkPzogc3RyaW5nLCBjb25maWd1cmF0aW9uVmVyc2lvbklkPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLm1hY2hpbmVJZCA9IG1hY2hpbmVJZDtcbiAgICAgICAgdGhpcy5wcm9kdWN0VHlwZSA9IHByb2R1Y3RUeXBlO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25JZCA9IGNvbmZpZ3VyYXRpb25JZDtcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uVmVyc2lvbklkID0gY29uZmlndXJhdGlvblZlcnNpb25JZDtcbiAgICB9XG5cbn1cblxuXG4iXX0=