/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
EventsServiceStatisticsRequest = /** @class */ (function () {
    function EventsServiceStatisticsRequest() {
    }
    return EventsServiceStatisticsRequest;
}());
/*
*/
export { EventsServiceStatisticsRequest };
if (false) {
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.folderId;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.sensorId;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.objectType;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.behaviorType;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.severity;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.from;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.to;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.interval;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BOzs7SUFBQTtJQTZCQSxDQUFDO0lBQUQscUNBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDOzs7Ozs7SUExQkcsa0RBQXdCOztJQUd4QixrREFBd0I7O0lBR3hCLG9EQUFrQzs7SUFHbEMsc0RBQXNDOztJQUd0QyxrREFBa0M7O0lBR2xDLDhDQUFvQjs7SUFHcEIsNENBQWtCOztJQUdsQixrREFBOEI7O0lBRzlCLGdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVVbml0Q29kZSB9IGZyb20gJy4uL2VudW1zL1RpbWVVbml0Q29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudHNTZXJ2aWNlU3RhdGlzdGljc1JlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZW5zb3IgSWQgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBvYmplY3QgdHlwZSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBiZWhhdmlvciB0eXBlIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZXZlcml0eSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBldmVudHMgYWZ0ZXIgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBldmVudHMgYmVmb3JlIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gVGltZSBzZXJpZXMgaW50ZXJ2YWwgdW5pdCAoTUlOVVRFLCBIT1VSLCBEQVksIE1JTlVURSkgXG4gICAgcHVibGljIGludGVydmFsOiBUaW1lVW5pdENvZGU7XG4gXG4gICAgLy8gTGFiZWwgZm9ybWF0IG9mIFkgYXhpcyBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG59XG5cblxuIl19