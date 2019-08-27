/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
RulesServiceFindRequest = /** @class */ (function () {
    function RulesServiceFindRequest(folderId, sensorId, search, ruleType, behaviorType, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.ruleType = ruleType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return RulesServiceFindRequest;
}());
/*
*/
export { RulesServiceFindRequest };
if (false) {
    /** @type {?} */
    RulesServiceFindRequest.prototype.folderId;
    /** @type {?} */
    RulesServiceFindRequest.prototype.sensorId;
    /** @type {?} */
    RulesServiceFindRequest.prototype.search;
    /** @type {?} */
    RulesServiceFindRequest.prototype.ruleType;
    /** @type {?} */
    RulesServiceFindRequest.prototype.behaviorType;
    /** @type {?} */
    RulesServiceFindRequest.prototype.severity;
    /** @type {?} */
    RulesServiceFindRequest.prototype.sort;
    /** @type {?} */
    RulesServiceFindRequest.prototype.page;
    /** @type {?} */
    RulesServiceFindRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZXNTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9SdWxlc1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQTs7O0lBNkJJLGlDQUFZLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsUUFBdUIsRUFBRSxZQUErQixFQUFFLFFBQTJCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUNyTSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUwsOEJBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDOzs7Ozs7SUF0Q0csMkNBQXdCOztJQUd4QiwyQ0FBd0I7O0lBR3hCLHlDQUFzQjs7SUFHdEIsMkNBQThCOztJQUc5QiwrQ0FBc0M7O0lBR3RDLDJDQUFrQzs7SUFHbEMsdUNBQW9COztJQUdwQix1Q0FBb0I7O0lBR3BCLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IFJ1bGVUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgUnVsZXNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZW5zb3IgSWQgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBuYW1lIG9yIGRlc2NyaXB0aW9uIG9yIGV4dGVybmFsIGlkIG9yIHBhcnRpYWwgKHVzaW5nICogd2lsZGNhcmQpIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgcnVsZSB0eXBlIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgcnVsZVR5cGU6IFJ1bGVUeXBlQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYmVoYXZpb3IgdHlwZSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2V2ZXJpdHkgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcnVsZVR5cGU/OiBSdWxlVHlwZUNvZGUsIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBmb2xkZXJJZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5ydWxlVHlwZSA9IHJ1bGVUeXBlO1xuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuIl19