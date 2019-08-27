/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Account types aggregator summary
*/
var /*
   Account types aggregator summary
*/
AccountTypeSummary = /** @class */ (function () {
    function AccountTypeSummary(type, typeName, accounts, accountsPercentage, channels, channelsPercentage, devices, devicesPercentage) {
        this.type = type;
        this.typeName = typeName;
        this.accounts = accounts;
        this.accountsPercentage = accountsPercentage;
        this.channels = channels;
        this.channelsPercentage = channelsPercentage;
        this.devices = devices;
        this.devicesPercentage = devicesPercentage;
    }
    return AccountTypeSummary;
}());
/*
   Account types aggregator summary
*/
export { AccountTypeSummary };
if (false) {
    /** @type {?} */
    AccountTypeSummary.prototype.type;
    /** @type {?} */
    AccountTypeSummary.prototype.typeName;
    /** @type {?} */
    AccountTypeSummary.prototype.accounts;
    /** @type {?} */
    AccountTypeSummary.prototype.accountsPercentage;
    /** @type {?} */
    AccountTypeSummary.prototype.channels;
    /** @type {?} */
    AccountTypeSummary.prototype.channelsPercentage;
    /** @type {?} */
    AccountTypeSummary.prototype.devices;
    /** @type {?} */
    AccountTypeSummary.prototype.devicesPercentage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFR5cGVTdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0FjY291bnRUeXBlU3VtbWFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0E7Ozs7SUEwQkksNEJBQVksSUFBc0IsRUFBRSxRQUFpQixFQUFFLFFBQWlCLEVBQUUsa0JBQTJCLEVBQUUsUUFBaUIsRUFBRSxrQkFBMkIsRUFBRSxPQUFnQixFQUFFLGlCQUEwQjtRQUMvTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0lBRUwseUJBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDOzs7Ozs7O0lBbENHLGtDQUE2Qjs7SUFHN0Isc0NBQXdCOztJQUd4QixzQ0FBd0I7O0lBR3hCLGdEQUFrQzs7SUFHbEMsc0NBQXdCOztJQUd4QixnREFBa0M7O0lBR2xDLHFDQUF1Qjs7SUFHdkIsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjb3VudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFR5cGVDb2RlJztcblxuLyogXG4gICBBY2NvdW50IHR5cGVzIGFnZ3JlZ2F0b3Igc3VtbWFyeSBcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudFR5cGVTdW1tYXJ5IHtcbiBcbiAgICAvLyBVc2VyIHJvbGUgaW4gdGhlIGFjY291bnQgXG4gICAgcHVibGljIHR5cGU6IEFjY291bnRUeXBlQ29kZTtcbiBcbiAgICAvLyBBY2NvdW50IHR5cGUgbmFtZSBcbiAgICBwdWJsaWMgdHlwZU5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgYWNjb3VudHMgb2YgdGhpcyB0eXBlIFxuICAgIHB1YmxpYyBhY2NvdW50czogbnVtYmVyO1xuIFxuICAgIC8vIFBlcmNlbnRhZ2Ugb2YgYWNjb3VudHMgb2YgdGhpcyB0eXBlIFxuICAgIHB1YmxpYyBhY2NvdW50c1BlcmNlbnRhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgY2hhbm5lbHMgKHNlbnNvcnMpIGZvciBhbGwgYWNjb3VudHMgb2YgdGhpcyB0eXBlIFxuICAgIHB1YmxpYyBjaGFubmVsczogbnVtYmVyO1xuIFxuICAgIC8vIFBlcmNlbnRhZ2Ugb2YgbnVtYmVyIG9mIGNoYW5uZWxzIChzZW5zb3JzKSBmb3IgYWxsIGFjY291bnRzIG9mIHRoaXMgdHlwZSBcbiAgICBwdWJsaWMgY2hhbm5lbHNQZXJjZW50YWdlOiBudW1iZXI7XG4gXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGVkZ2UgZGV2aWNlcyBcbiAgICBwdWJsaWMgZGV2aWNlczogbnVtYmVyO1xuIFxuICAgIC8vIFBlcmNlbnRhZ2Ugb2YgbnVtYmVyIG9mIGVkZ2UgZGV2aWNlcyBcbiAgICBwdWJsaWMgZGV2aWNlc1BlcmNlbnRhZ2U6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcih0eXBlPzogQWNjb3VudFR5cGVDb2RlLCB0eXBlTmFtZT86IHN0cmluZywgYWNjb3VudHM/OiBudW1iZXIsIGFjY291bnRzUGVyY2VudGFnZT86IG51bWJlciwgY2hhbm5lbHM/OiBudW1iZXIsIGNoYW5uZWxzUGVyY2VudGFnZT86IG51bWJlciwgZGV2aWNlcz86IG51bWJlciwgZGV2aWNlc1BlcmNlbnRhZ2U/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSB0eXBlTmFtZTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IGFjY291bnRzO1xuICAgICAgICB0aGlzLmFjY291bnRzUGVyY2VudGFnZSA9IGFjY291bnRzUGVyY2VudGFnZTtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IGNoYW5uZWxzO1xuICAgICAgICB0aGlzLmNoYW5uZWxzUGVyY2VudGFnZSA9IGNoYW5uZWxzUGVyY2VudGFnZTtcbiAgICAgICAgdGhpcy5kZXZpY2VzID0gZGV2aWNlcztcbiAgICAgICAgdGhpcy5kZXZpY2VzUGVyY2VudGFnZSA9IGRldmljZXNQZXJjZW50YWdlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==