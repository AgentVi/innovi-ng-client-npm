/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
EventsServiceFindInAreaRequest = /** @class */ (function () {
    function EventsServiceFindInAreaRequest(folderId, searchArea, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        this.folderId = folderId;
        this.searchArea = searchArea;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzU2VydmljZUZpbmRJbkFyZWFSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvRXZlbnRzU2VydmljZUZpbmRJbkFyZWFSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BOzs7SUFtQ0ksd0NBQVksUUFBaUIsRUFBRSxVQUF5QixFQUFFLFFBQWlCLEVBQUUsVUFBMkIsRUFBRSxZQUErQixFQUFFLFFBQTJCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQy9PLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVMLHFDQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQzs7Ozs7O0lBOUNHLGtEQUF3Qjs7SUFHeEIsb0RBQWdDOztJQUdoQyxrREFBd0I7O0lBR3hCLG9EQUFrQzs7SUFHbEMsc0RBQXNDOztJQUd0QyxrREFBa0M7O0lBR2xDLDhDQUFvQjs7SUFHcEIsNENBQWtCOztJQUdsQiw4Q0FBb0I7O0lBR3BCLDhDQUFvQjs7SUFHcEIsa0RBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEV2ZW50c1NlcnZpY2VGaW5kSW5BcmVhUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGZvbGRlciAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUG9seWdvbiByZXByZXNlbnRpbmcgdGhlIHNlYXJjaCBhcmVhIEBRQm9keVBhcmFtIFxuICAgIHB1YmxpYyBzZWFyY2hBcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG9iamVjdCB0eXBlIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGJlaGF2aW9yIHR5cGUgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNldmVyaXR5IChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBhZnRlciB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBiZWZvcmUgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc2VhcmNoQXJlYT86IENvb3JkaW5hdGVbXSwgc2Vuc29ySWQ/OiBzdHJpbmcsIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZSwgYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBmb2xkZXJJZDtcbiAgICAgICAgdGhpcy5zZWFyY2hBcmVhID0gc2VhcmNoQXJlYTtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=