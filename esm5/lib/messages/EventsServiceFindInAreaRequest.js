/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
EventsServiceFindInAreaRequest = /** @class */ (function () {
    function EventsServiceFindInAreaRequest() {
    }
    return EventsServiceFindInAreaRequest;
}());
/*
*/
export { EventsServiceFindInAreaRequest };
if (false) {
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.folderId;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.searchArea;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.sensorId;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.objectType;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.behaviorType;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.severity;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.from;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.to;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.sort;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.page;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzU2VydmljZUZpbmRJbkFyZWFSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvRXZlbnRzU2VydmljZUZpbmRJbkFyZWFSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BOzs7SUFBQTtJQW1DQSxDQUFDO0lBQUQscUNBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDOzs7Ozs7SUFoQ0csa0RBQXdCOztJQUd4QixvREFBZ0M7O0lBR2hDLGtEQUF3Qjs7SUFHeEIsb0RBQWtDOztJQUdsQyxzREFBc0M7O0lBR3RDLGtEQUFrQzs7SUFHbEMsOENBQW9COztJQUdwQiw0Q0FBa0I7O0lBR2xCLDhDQUFvQjs7SUFHcEIsOENBQW9COztJQUdwQixrREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgRXZlbnRzU2VydmljZUZpbmRJbkFyZWFSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgZm9sZGVyIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBQb2x5Z29uIHJlcHJlc2VudGluZyB0aGUgc2VhcmNoIGFyZWEgQFFCb2R5UGFyYW0gXG4gICAgcHVibGljIHNlYXJjaEFyZWE6IENvb3JkaW5hdGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIElkIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgb2JqZWN0IHR5cGUgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYmVoYXZpb3IgdHlwZSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2V2ZXJpdHkgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgZXZlbnRzIGFmdGVyIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIGZyb206IG51bWJlcjtcbiBcbiAgICAvLyBGaWx0ZXIgZXZlbnRzIGJlZm9yZSB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxufVxuXG5cbiJdfQ==