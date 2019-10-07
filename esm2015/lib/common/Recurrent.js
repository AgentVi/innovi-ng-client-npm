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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1JlY3VycmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUEsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7O0lBaUJsQixZQUFZLFNBQWtCLEVBQUUsT0FBZ0IsRUFBRSxNQUFlLEVBQUUsVUFBNEIsRUFBRSxNQUFvQjtRQUNqSCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7OztJQXRCRyw4QkFBeUI7O0lBR3pCLDRCQUF1Qjs7SUFHdkIsMkJBQXNCOztJQUd0QiwrQkFBbUM7O0lBR25DLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERheU9mV2Vla0NvZGUgfSBmcm9tICcuLi9lbnVtcy9EYXlPZldlZWtDb2RlJztcbmltcG9ydCB7IEV2ZW50QWN0aW9uIH0gZnJvbSAnLi4vY29tbW9uL0V2ZW50QWN0aW9uJztcblxuLyogXG4gICBSZWN1cnJlbnQgdGltZSBmcmFtZSBcbiovXG5leHBvcnQgY2xhc3MgUmVjdXJyZW50IHtcbiBcbiAgICAvLyBTdGFydCB0aW1lIG9mIHRoZSByZWN1cnJlbnQgaW4gSVNPLTg2MDEgZm9ybWF0IGluY2x1ZGluZyB0aW1lIG9mZnNldCBZWVlZLU1NLUREVGhoOm1tOnNzKzBaOjAwIFxuICAgIHB1YmxpYyBzdGFydFRpbWU6IHN0cmluZztcbiBcbiAgICAvLyBFbmQgdGltZSBvZiB0aGUgcmVjdXJyZW50IGluIElTTy04NjAxIGZvcm1hdCBpbmNsdWRpbmcgdGltZSBvZmZzZXQgWVlZWS1NTS1ERFRoaDptbTpzcyswWjowMCBMZWF2ZSBlbXB0eSBmb3Igbm8gZW5kIHRpbWUgXG4gICAgcHVibGljIGVuZFRpbWU6IHN0cmluZztcbiBcbiAgICAvLyBQZXJpb2QgaW4gSVNPLTg2MDEgZm9ybWF0IChQblluTW5EIC8gUG5XKSBFeGFtcGxlczogPHVsPiA8bGk+UDFZIC0gRXZlcnkgMSB5ZWFyPC9saT4gPGxpPlAyTSAtIEV2ZXJ5IDIgbW9udGhzPC9saT4gPGxpPlAzVyAtIEV2ZXJ5IDMgd2Vla3M8L2xpPiA8bGk+UDREIC0gRXZlcnkgMiBtb250aHM8L2xpPiA8L3VsPiBcbiAgICBwdWJsaWMgcGVyaW9kOiBzdHJpbmc7XG4gXG4gICAgLy8gRGF5cyBvZiB3ZWVrIC0gYmFzZWQgb24gSVNPODYwMSBcbiAgICBwdWJsaWMgZGF5c09mV2VlazogRGF5T2ZXZWVrQ29kZVtdO1xuIFxuICAgIC8vIEFjdGlvbiBkZWZpbml0aW9uIFxuICAgIHB1YmxpYyBhY3Rpb246IEV2ZW50QWN0aW9uO1xuIFxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0VGltZT86IHN0cmluZywgZW5kVGltZT86IHN0cmluZywgcGVyaW9kPzogc3RyaW5nLCBkYXlzT2ZXZWVrPzogRGF5T2ZXZWVrQ29kZVtdLCBhY3Rpb24/OiBFdmVudEFjdGlvbikgeyBcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcGVyaW9kO1xuICAgICAgICB0aGlzLmRheXNPZldlZWsgPSBkYXlzT2ZXZWVrO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB9XG5cbn1cblxuXG4iXX0=