/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
SysEventsServiceFindInAreaRequest = /** @class */ (function () {
    function SysEventsServiceFindInAreaRequest() {
    }
    return SysEventsServiceFindInAreaRequest;
}());
/*
*/
export { SysEventsServiceFindInAreaRequest };
if (false) {
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.accountId;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.folderId;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.sensorId;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.objectType;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.behaviorType;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.severity;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.from;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.to;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.sort;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.page;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzRXZlbnRzU2VydmljZUZpbmRJbkFyZWFSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvU3lzRXZlbnRzU2VydmljZUZpbmRJbkFyZWFSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BOzs7SUFBQTtJQW1DQSxDQUFDO0lBQUQsd0NBQUM7QUFBRCxDQUFDLEFBbkNELElBbUNDOzs7Ozs7SUFoQ0csc0RBQXlCOztJQUd6QixxREFBd0I7O0lBR3hCLHFEQUF3Qjs7SUFHeEIsdURBQWtDOztJQUdsQyx5REFBc0M7O0lBR3RDLHFEQUFrQzs7SUFHbEMsaURBQW9COztJQUdwQiwrQ0FBa0I7O0lBR2xCLGlEQUFvQjs7SUFHcEIsaURBQW9COztJQUdwQixxREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBTeXNFdmVudHNTZXJ2aWNlRmluZEluQXJlYVJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBhY2NvdW50IChtdXN0IG5vdCBiZSBlbXB0eSAtIGNyb3NzIGFjY291bnRzIHNlYXJjaCBpcyBub3Qgc3VwcG9ydGVkKSBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGZvbGRlciAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG9iamVjdCB0eXBlIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGJlaGF2aW9yIHR5cGUgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNldmVyaXR5IChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBhZnRlciB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBiZWZvcmUgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbn1cblxuXG4iXX0=