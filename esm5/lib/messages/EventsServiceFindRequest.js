/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
EventsServiceFindRequest = /** @class */ (function () {
    function EventsServiceFindRequest() {
    }
    return EventsServiceFindRequest;
}());
/*
*/
export { EventsServiceFindRequest };
if (false) {
    /** @type {?} */
    EventsServiceFindRequest.prototype.folderId;
    /** @type {?} */
    EventsServiceFindRequest.prototype.subFolders;
    /** @type {?} */
    EventsServiceFindRequest.prototype.sensorId;
    /** @type {?} */
    EventsServiceFindRequest.prototype.objectType;
    /** @type {?} */
    EventsServiceFindRequest.prototype.behaviorType;
    /** @type {?} */
    EventsServiceFindRequest.prototype.severity;
    /** @type {?} */
    EventsServiceFindRequest.prototype.from;
    /** @type {?} */
    EventsServiceFindRequest.prototype.to;
    /** @type {?} */
    EventsServiceFindRequest.prototype.sort;
    /** @type {?} */
    EventsServiceFindRequest.prototype.page;
    /** @type {?} */
    EventsServiceFindRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzU2VydmljZUZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvRXZlbnRzU2VydmljZUZpbmRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BOzs7SUFBQTtJQW1DQSxDQUFDO0lBQUQsK0JBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDOzs7Ozs7SUFoQ0csNENBQXdCOztJQUd4Qiw4Q0FBMkI7O0lBRzNCLDRDQUF3Qjs7SUFHeEIsOENBQWtDOztJQUdsQyxnREFBc0M7O0lBR3RDLDRDQUFrQzs7SUFHbEMsd0NBQW9COztJQUdwQixzQ0FBa0I7O0lBR2xCLHdDQUFvQjs7SUFHcEIsd0NBQW9COztJQUdwQiw0Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudHNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIHNlYXJjaCBzY29wZSBpcyBvbiBhbGwgc3ViLWZvbGRlcnMgaGllcmFyY2h5IHVuZGVyIHRoZSBwcm92aWRlZCBmb2xkZXIgXG4gICAgcHVibGljIHN1YkZvbGRlcnM6IGJvb2xlYW47XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG9iamVjdCB0eXBlIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGJlaGF2aW9yIHR5cGUgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNldmVyaXR5IChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBhZnRlciB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBiZWZvcmUgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbn1cblxuXG4iXX0=