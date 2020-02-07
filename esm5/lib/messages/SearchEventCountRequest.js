/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
SearchEventCountRequest = /** @class */ (function () {
    function SearchEventCountRequest(sessionId, sensorId, objectType, from, to, interval, labelFormat) {
        this.sessionId = sessionId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.labelFormat = labelFormat;
    }
    return SearchEventCountRequest;
}());
/*
*/
export { SearchEventCountRequest };
if (false) {
    /** @type {?} */
    SearchEventCountRequest.prototype.sessionId;
    /** @type {?} */
    SearchEventCountRequest.prototype.sensorId;
    /** @type {?} */
    SearchEventCountRequest.prototype.objectType;
    /** @type {?} */
    SearchEventCountRequest.prototype.from;
    /** @type {?} */
    SearchEventCountRequest.prototype.to;
    /** @type {?} */
    SearchEventCountRequest.prototype.interval;
    /** @type {?} */
    SearchEventCountRequest.prototype.labelFormat;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXZlbnRDb3VudFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9TZWFyY2hFdmVudENvdW50UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7O0lBdUJJLGlDQUFZLFNBQWtCLEVBQUUsUUFBbUIsRUFBRSxVQUE2QixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsUUFBdUIsRUFBRSxXQUFvQjtRQUN6SixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTCw4QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7OztJQTlCRyw0Q0FBeUI7O0lBR3pCLDJDQUEwQjs7SUFHMUIsNkNBQW9DOztJQUdwQyx1Q0FBb0I7O0lBR3BCLHFDQUFrQjs7SUFHbEIsMkNBQThCOztJQUc5Qiw4Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lVW5pdENvZGUgfSBmcm9tICcuLi9lbnVtcy9UaW1lVW5pdENvZGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoRXZlbnRDb3VudFJlcXVlc3Qge1xuIFxuICAgIC8vIFNlc3Npb24gSWQgXG4gICAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZW5zb3IgSWQocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgb2JqZWN0IHR5cGUocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIHNlYXJjaCBldmVudHMgYWZ0ZXIgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBzZWFyY2ggZXZlbnRzIGJlZm9yZSB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIFRpbWUgc2VyaWVzIGludGVydmFsIHVuaXQgKE1JTlVURSwgSE9VUiwgREFZLCBNSU5VVEUpIFxuICAgIHB1YmxpYyBpbnRlcnZhbDogVGltZVVuaXRDb2RlO1xuIFxuICAgIC8vIExhYmVsIGZvcm1hdCBvZiBZIGF4aXMgXG4gICAgcHVibGljIGxhYmVsRm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZ1tdLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGludGVydmFsPzogVGltZVVuaXRDb2RlLCBsYWJlbEZvcm1hdD86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XG4gICAgICAgIHRoaXMuc2Vuc29ySWQgPSBzZW5zb3JJZDtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubGFiZWxGb3JtYXQgPSBsYWJlbEZvcm1hdDtcbiAgICB9XG5cbn1cblxuXG4iXX0=