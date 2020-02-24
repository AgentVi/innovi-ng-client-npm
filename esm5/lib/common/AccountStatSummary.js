/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Account statistic summary (provide info about account sensors and devices number compared to previous month)
*/
var /*
   Account statistic summary (provide info about account sensors and devices number compared to previous month)
*/
AccountStatSummary = /** @class */ (function () {
    function AccountStatSummary(accountId, accountName, monthId, channels, channelsPercentage, devices, devicesPercentage) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.monthId = monthId;
        this.channels = channels;
        this.channelsPercentage = channelsPercentage;
        this.devices = devices;
        this.devicesPercentage = devicesPercentage;
    }
    return AccountStatSummary;
}());
/*
   Account statistic summary (provide info about account sensors and devices number compared to previous month)
*/
export { AccountStatSummary };
if (false) {
    /** @type {?} */
    AccountStatSummary.prototype.accountId;
    /** @type {?} */
    AccountStatSummary.prototype.accountName;
    /** @type {?} */
    AccountStatSummary.prototype.monthId;
    /** @type {?} */
    AccountStatSummary.prototype.channels;
    /** @type {?} */
    AccountStatSummary.prototype.channelsPercentage;
    /** @type {?} */
    AccountStatSummary.prototype.devices;
    /** @type {?} */
    AccountStatSummary.prototype.devicesPercentage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFN0YXRTdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0FjY291bnRTdGF0U3VtbWFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7Ozs7SUF1QkksNEJBQVksU0FBa0IsRUFBRSxXQUFvQixFQUFFLE9BQWdCLEVBQUUsUUFBaUIsRUFBRSxrQkFBMkIsRUFBRSxPQUFnQixFQUFFLGlCQUEwQjtRQUNoSyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQy9DLENBQUM7SUFFTCx5QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7Ozs7SUE5QkcsdUNBQXlCOztJQUd6Qix5Q0FBMkI7O0lBRzNCLHFDQUF1Qjs7SUFHdkIsc0NBQXdCOztJQUd4QixnREFBa0M7O0lBR2xDLHFDQUF1Qjs7SUFHdkIsK0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIEFjY291bnQgc3RhdGlzdGljIHN1bW1hcnkgKHByb3ZpZGUgaW5mbyBhYm91dCBhY2NvdW50IHNlbnNvcnMgYW5kIGRldmljZXMgbnVtYmVyIGNvbXBhcmVkIHRvIHByZXZpb3VzIG1vbnRoKSBcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudFN0YXRTdW1tYXJ5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IG5hbWUgXG4gICAgcHVibGljIGFjY291bnROYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gTW9udGggaWQgbnVtYmVyIChpbiB0aGUgZm9ybWF0IG9mIFlZWVlNTSkgXG4gICAgcHVibGljIG1vbnRoSWQ6IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgY2hhbm5lbHMgKHNlbnNvcnMpIFxuICAgIHB1YmxpYyBjaGFubmVsczogbnVtYmVyO1xuIFxuICAgIC8vIFBlcmNlbnRhZ2Ugb2YgbnVtYmVyIG9mIGNoYW5uZWxzIChzZW5zb3JzKSBjb21wYXJlZCB0byBwcmV2aW91cyBtb250aCBcbiAgICBwdWJsaWMgY2hhbm5lbHNQZXJjZW50YWdlOiBudW1iZXI7XG4gXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIGVkZ2UgZGV2aWNlcyBcbiAgICBwdWJsaWMgZGV2aWNlczogbnVtYmVyO1xuIFxuICAgIC8vIFBlcmNlbnRhZ2Ugb2YgbnVtYmVyIG9mIGVkZ2UgZGV2aWNlcyBjb21wYXJlZCB0byBwcmV2aW91cyBtb250aCBcbiAgICBwdWJsaWMgZGV2aWNlc1BlcmNlbnRhZ2U6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWQ/OiBzdHJpbmcsIGFjY291bnROYW1lPzogc3RyaW5nLCBtb250aElkPzogbnVtYmVyLCBjaGFubmVscz86IG51bWJlciwgY2hhbm5lbHNQZXJjZW50YWdlPzogbnVtYmVyLCBkZXZpY2VzPzogbnVtYmVyLCBkZXZpY2VzUGVyY2VudGFnZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgICAgIHRoaXMuYWNjb3VudE5hbWUgPSBhY2NvdW50TmFtZTtcbiAgICAgICAgdGhpcy5tb250aElkID0gbW9udGhJZDtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IGNoYW5uZWxzO1xuICAgICAgICB0aGlzLmNoYW5uZWxzUGVyY2VudGFnZSA9IGNoYW5uZWxzUGVyY2VudGFnZTtcbiAgICAgICAgdGhpcy5kZXZpY2VzID0gZGV2aWNlcztcbiAgICAgICAgdGhpcy5kZXZpY2VzUGVyY2VudGFnZSA9IGRldmljZXNQZXJjZW50YWdlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==