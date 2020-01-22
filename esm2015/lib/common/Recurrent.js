/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Recurrent time frame
*/
export class Recurrent {
    /**
     * @param {?=} startTime
     * @param {?=} endTime
     * @param {?=} period
     * @param {?=} daysOfWeek
     * @param {?=} action
     */
    constructor(startTime, endTime, period, daysOfWeek, action) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.period = period;
        this.daysOfWeek = daysOfWeek;
        this.action = action;
    }
}
if (false) {
    /** @type {?} */
    Recurrent.prototype.startTime;
    /** @type {?} */
    Recurrent.prototype.endTime;
    /** @type {?} */
    Recurrent.prototype.period;
    /** @type {?} */
    Recurrent.prototype.daysOfWeek;
    /** @type {?} */
    Recurrent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1JlY3VycmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7O0lBaUJsQixZQUFZLFNBQWtCLEVBQUUsT0FBZ0IsRUFBRSxNQUFlLEVBQUUsVUFBNEIsRUFBRSxNQUF3QjtRQUNySCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7OztJQXRCRyw4QkFBeUI7O0lBR3pCLDRCQUF1Qjs7SUFHdkIsMkJBQXNCOztJQUd0QiwrQkFBbUM7O0lBR25DLDJCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERheU9mV2Vla0NvZGUgfSBmcm9tICcuLi9lbnVtcy9EYXlPZldlZWtDb2RlJztcbmltcG9ydCB7IEludGVncmF0aW9uU3BlYyB9IGZyb20gJy4uL2NvbW1vbi9JbnRlZ3JhdGlvblNwZWMnO1xuXG4vKiBcbiAgIFJlY3VycmVudCB0aW1lIGZyYW1lIFxuKi9cbmV4cG9ydCBjbGFzcyBSZWN1cnJlbnQge1xuIFxuICAgIC8vIFN0YXJ0IHRpbWUgb2YgdGhlIHJlY3VycmVudCBpbiBJU08tODYwMSBmb3JtYXQgaW5jbHVkaW5nIHRpbWUgb2Zmc2V0IFlZWVktTU0tRERUaGg6bW06c3MrMFo6MDAgXG4gICAgcHVibGljIHN0YXJ0VGltZTogc3RyaW5nO1xuIFxuICAgIC8vIEVuZCB0aW1lIG9mIHRoZSByZWN1cnJlbnQgaW4gSVNPLTg2MDEgZm9ybWF0IGluY2x1ZGluZyB0aW1lIG9mZnNldCBZWVlZLU1NLUREVGhoOm1tOnNzKzBaOjAwIExlYXZlIGVtcHR5IGZvciBubyBlbmQgdGltZSBcbiAgICBwdWJsaWMgZW5kVGltZTogc3RyaW5nO1xuIFxuICAgIC8vIFBlcmlvZCBpbiBJU08tODYwMSBmb3JtYXQgKFBuWW5NbkQgLyBQblcpIEV4YW1wbGVzOiA8dWw+IDxsaT5QMVkgLSBFdmVyeSAxIHllYXI8L2xpPiA8bGk+UDJNIC0gRXZlcnkgMiBtb250aHM8L2xpPiA8bGk+UDNXIC0gRXZlcnkgMyB3ZWVrczwvbGk+IDxsaT5QNEQgLSBFdmVyeSAyIG1vbnRoczwvbGk+IDwvdWw+IFxuICAgIHB1YmxpYyBwZXJpb2Q6IHN0cmluZztcbiBcbiAgICAvLyBEYXlzIG9mIHdlZWsgLSBiYXNlZCBvbiBJU084NjAxIFxuICAgIHB1YmxpYyBkYXlzT2ZXZWVrOiBEYXlPZldlZWtDb2RlW107XG4gXG4gICAgLy8gQWN0aW9uIGRlZmluaXRpb24gXG4gICAgcHVibGljIGFjdGlvbjogSW50ZWdyYXRpb25TcGVjO1xuIFxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0VGltZT86IHN0cmluZywgZW5kVGltZT86IHN0cmluZywgcGVyaW9kPzogc3RyaW5nLCBkYXlzT2ZXZWVrPzogRGF5T2ZXZWVrQ29kZVtdLCBhY3Rpb24/OiBJbnRlZ3JhdGlvblNwZWMpIHsgXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lO1xuICAgICAgICB0aGlzLnBlcmlvZCA9IHBlcmlvZDtcbiAgICAgICAgdGhpcy5kYXlzT2ZXZWVrID0gZGF5c09mV2VlaztcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgfVxuXG59XG5cblxuIl19