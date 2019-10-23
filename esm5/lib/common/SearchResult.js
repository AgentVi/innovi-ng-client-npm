/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Search result item
*/
var /*
   Search result item
*/
SearchResult = /** @class */ (function () {
    function SearchResult(id, sequenceId, timestamp, behaviorType, objectType, description, isGeo, location, objectsInfo) {
        this.id = id;
        this.sequenceId = sequenceId;
        this.timestamp = timestamp;
        this.behaviorType = behaviorType;
        this.objectType = objectType;
        this.description = description;
        this.isGeo = isGeo;
        this.location = location;
        this.objectsInfo = objectsInfo;
    }
    return SearchResult;
}());
/*
   Search result item
*/
export { SearchResult };
if (false) {
    /** @type {?} */
    SearchResult.prototype.id;
    /** @type {?} */
    SearchResult.prototype.sequenceId;
    /** @type {?} */
    SearchResult.prototype.timestamp;
    /** @type {?} */
    SearchResult.prototype.behaviorType;
    /** @type {?} */
    SearchResult.prototype.objectType;
    /** @type {?} */
    SearchResult.prototype.description;
    /** @type {?} */
    SearchResult.prototype.isGeo;
    /** @type {?} */
    SearchResult.prototype.location;
    /** @type {?} */
    SearchResult.prototype.objectsInfo;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoUmVzdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1NlYXJjaFJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBUUE7Ozs7SUE2Qkksc0JBQVksRUFBVyxFQUFFLFVBQW1CLEVBQUUsU0FBa0IsRUFBRSxZQUErQixFQUFFLFVBQTJCLEVBQUUsV0FBb0IsRUFBRSxLQUFlLEVBQUUsUUFBcUIsRUFBRSxXQUFrQztRQUM1TixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7SUFFTCxtQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7Ozs7Ozs7SUF0Q0csMEJBQWtCOztJQUdsQixrQ0FBMEI7O0lBRzFCLGlDQUF5Qjs7SUFHekIsb0NBQXNDOztJQUd0QyxrQ0FBa0M7O0lBR2xDLG1DQUEyQjs7SUFHM0IsNkJBQXNCOztJQUd0QixnQ0FBNEI7O0lBRzVCLG1DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IFNlYXJjaFJlc3VsdE9iamVjdCB9IGZyb20gJy4uL2NvbW1vbi9TZWFyY2hSZXN1bHRPYmplY3QnO1xuXG4vKiBcbiAgIFNlYXJjaCByZXN1bHQgaXRlbSBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0IHtcbiBcbiAgICAvLyBTZWFyY2hlZCBpdGVtIGlkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIE51bWVyaWMgaXRlbSBzZXF1ZW5jZSBudW1iZXIgXG4gICAgcHVibGljIHNlcXVlbmNlSWQ6IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBvYmplY3QgaGFzIGJlZW4gZGV0ZWN0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB0aW1lc3RhbXA6IG51bWJlcjtcbiBcbiAgICAvLyBEZXRlY3RlZCBiZWhhdmlvciB0eXBlIChVTktOT1dOIHwgQ1JPU1NJTkcgfCBNT1ZJTkcgfCBHUk9VUElORyB8IE9DQ1VQQU5DWSAuLi4pIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IHR5cGUgKFVOS05PV04gfCBQRVJTT04gfCBWRUhJQ0xFIHwgQlVTIHwgVFJBQ0sgLi4uKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gRGVzY3JpcHRpb24gKHByb3ZpZGVkIGJ5IHRoZSBzZWFyY2ggZW5naW5lKSBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBJcyB0aGlzIG9iamVjdCB3YXMgZGV0ZWN0ZWQgYnkgR2VvIHJ1bGUgb3Igc2Vuc29yIHJ1bGUgXG4gICAgcHVibGljIGlzR2VvOiBib29sZWFuO1xuIFxuICAgIC8vIE9iamVjdCdzIGdlbyBsb2NhdGlvbiAoV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtKS4gVGhpcyBmaWVsZCBpcyBhcHBsaWNhYmxlIG9ubHkgaWYgdGhlIHNlbnNvciBpcyBnZW8tcmVmZXJlbmNlZC4gXG4gICAgcHVibGljIGxvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIExpc3Qgb2YgYWxsIG9iamVjdHMgaW4gdGhpcyBzZWFyY2ggaXRlbSBcbiAgICBwdWJsaWMgb2JqZWN0c0luZm86IFNlYXJjaFJlc3VsdE9iamVjdFtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGlkPzogc3RyaW5nLCBzZXF1ZW5jZUlkPzogbnVtYmVyLCB0aW1lc3RhbXA/OiBudW1iZXIsIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZSwgZGVzY3JpcHRpb24/OiBzdHJpbmcsIGlzR2VvPzogYm9vbGVhbiwgbG9jYXRpb24/OiBDb29yZGluYXRlLCBvYmplY3RzSW5mbz86IFNlYXJjaFJlc3VsdE9iamVjdFtdKSB7IFxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VJZCA9IHNlcXVlbmNlSWQ7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmlzR2VvID0gaXNHZW87XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5vYmplY3RzSW5mbyA9IG9iamVjdHNJbmZvO1xuICAgIH1cblxufVxuXG5cbiJdfQ==