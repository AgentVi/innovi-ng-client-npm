/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Recurrent time frame
*/
var /*
   Recurrent time frame
*/
Recurrent = /** @class */ (function () {
    function Recurrent(startTime, endTime, period, daysOfWeek, action) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.period = period;
        this.daysOfWeek = daysOfWeek;
        this.action = action;
    }
    return Recurrent;
}());
/*
   Recurrent time frame
*/
export { Recurrent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1JlY3VycmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7Ozs7SUFpQkksbUJBQVksU0FBa0IsRUFBRSxPQUFnQixFQUFFLE1BQWUsRUFBRSxVQUE0QixFQUFFLE1BQXdCO1FBQ3JILElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7SUF0QkcsOEJBQXlCOztJQUd6Qiw0QkFBdUI7O0lBR3ZCLDJCQUFzQjs7SUFHdEIsK0JBQW1DOztJQUduQywyQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXlPZldlZWtDb2RlIH0gZnJvbSAnLi4vZW51bXMvRGF5T2ZXZWVrQ29kZSc7XG5pbXBvcnQgeyBJbnRlZ3JhdGlvblNwZWMgfSBmcm9tICcuLi9jb21tb24vSW50ZWdyYXRpb25TcGVjJztcblxuLyogXG4gICBSZWN1cnJlbnQgdGltZSBmcmFtZSBcbiovXG5leHBvcnQgY2xhc3MgUmVjdXJyZW50IHtcbiBcbiAgICAvLyBTdGFydCB0aW1lIG9mIHRoZSByZWN1cnJlbnQgaW4gSVNPLTg2MDEgZm9ybWF0IGluY2x1ZGluZyB0aW1lIG9mZnNldCBZWVlZLU1NLUREVGhoOm1tOnNzKzBaOjAwIFxuICAgIHB1YmxpYyBzdGFydFRpbWU6IHN0cmluZztcbiBcbiAgICAvLyBFbmQgdGltZSBvZiB0aGUgcmVjdXJyZW50IGluIElTTy04NjAxIGZvcm1hdCBpbmNsdWRpbmcgdGltZSBvZmZzZXQgWVlZWS1NTS1ERFRoaDptbTpzcyswWjowMCBMZWF2ZSBlbXB0eSBmb3Igbm8gZW5kIHRpbWUgXG4gICAgcHVibGljIGVuZFRpbWU6IHN0cmluZztcbiBcbiAgICAvLyBQZXJpb2QgaW4gSVNPLTg2MDEgZm9ybWF0IChQblluTW5EIC8gUG5XKSBFeGFtcGxlczogPHVsPiA8bGk+UDFZIC0gRXZlcnkgMSB5ZWFyPC9saT4gPGxpPlAyTSAtIEV2ZXJ5IDIgbW9udGhzPC9saT4gPGxpPlAzVyAtIEV2ZXJ5IDMgd2Vla3M8L2xpPiA8bGk+UDREIC0gRXZlcnkgMiBtb250aHM8L2xpPiA8L3VsPiBcbiAgICBwdWJsaWMgcGVyaW9kOiBzdHJpbmc7XG4gXG4gICAgLy8gRGF5cyBvZiB3ZWVrIC0gYmFzZWQgb24gSVNPODYwMSBcbiAgICBwdWJsaWMgZGF5c09mV2VlazogRGF5T2ZXZWVrQ29kZVtdO1xuIFxuICAgIC8vIEFjdGlvbiBkZWZpbml0aW9uIFxuICAgIHB1YmxpYyBhY3Rpb246IEludGVncmF0aW9uU3BlYztcbiBcbiAgICBjb25zdHJ1Y3RvcihzdGFydFRpbWU/OiBzdHJpbmcsIGVuZFRpbWU/OiBzdHJpbmcsIHBlcmlvZD86IHN0cmluZywgZGF5c09mV2Vlaz86IERheU9mV2Vla0NvZGVbXSwgYWN0aW9uPzogSW50ZWdyYXRpb25TcGVjKSB7IFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwZXJpb2Q7XG4gICAgICAgIHRoaXMuZGF5c09mV2VlayA9IGRheXNPZldlZWs7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIH1cblxufVxuXG5cbiJdfQ==