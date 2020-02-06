/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class SearchEventCountRequest {
    /**
     * @param {?=} sessionId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} labelFormat
     */
    constructor(sessionId, sensorId, objectType, from, to, interval, labelFormat) {
        this.sessionId = sessionId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.labelFormat = labelFormat;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXZlbnRDb3VudFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9TZWFyY2hFdmVudENvdW50UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQSxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7Ozs7O0lBdUJoQyxZQUFZLFNBQWtCLEVBQUUsUUFBbUIsRUFBRSxVQUE2QixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsUUFBdUIsRUFBRSxXQUFvQjtRQUN6SixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7Q0FFSjs7O0lBOUJHLDRDQUF5Qjs7SUFHekIsMkNBQTBCOztJQUcxQiw2Q0FBb0M7O0lBR3BDLHVDQUFvQjs7SUFHcEIscUNBQWtCOztJQUdsQiwyQ0FBOEI7O0lBRzlCLDhDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgVGltZVVuaXRDb2RlIH0gZnJvbSAnLi4vZW51bXMvVGltZVVuaXRDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hFdmVudENvdW50UmVxdWVzdCB7XG4gXG4gICAgLy8gU2Vzc2lvbiBJZCBcbiAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZChzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEZpbHRlciBieSBvYmplY3QgdHlwZShzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgc2VhcmNoIGV2ZW50cyBhZnRlciB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIHNlYXJjaCBldmVudHMgYmVmb3JlIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gVGltZSBzZXJpZXMgaW50ZXJ2YWwgdW5pdCAoTUlOVVRFLCBIT1VSLCBEQVksIE1JTlVURSkgXG4gICAgcHVibGljIGludGVydmFsOiBUaW1lVW5pdENvZGU7XG4gXG4gICAgLy8gTGFiZWwgZm9ybWF0IG9mIFkgYXhpcyBcbiAgICBwdWJsaWMgbGFiZWxGb3JtYXQ6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nW10sIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaW50ZXJ2YWw/OiBUaW1lVW5pdENvZGUsIGxhYmVsRm9ybWF0Pzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgdGhpcy5sYWJlbEZvcm1hdCA9IGxhYmVsRm9ybWF0O1xuICAgIH1cblxufVxuXG5cbiJdfQ==