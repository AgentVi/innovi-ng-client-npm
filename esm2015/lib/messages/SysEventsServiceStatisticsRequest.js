/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class SysEventsServiceStatisticsRequest {
    /**
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} format
     */
    constructor(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.format = format;
    }
}
if (false) {
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.accountId;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.folderId;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.sensorId;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.objectType;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.behaviorType;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.severity;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.from;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.to;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.interval;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvU3lzRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7Ozs7Ozs7SUFnQzFDLFlBQVksU0FBa0IsRUFBRSxRQUFpQixFQUFFLFFBQWlCLEVBQUUsVUFBMkIsRUFBRSxZQUErQixFQUFFLFFBQTJCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxRQUF1QixFQUFFLE1BQWU7UUFDak8sSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7OztJQTFDRyxzREFBeUI7O0lBR3pCLHFEQUF3Qjs7SUFHeEIscURBQXdCOztJQUd4Qix1REFBa0M7O0lBR2xDLHlEQUFzQzs7SUFHdEMscURBQWtDOztJQUdsQyxpREFBb0I7O0lBR3BCLCtDQUFrQjs7SUFHbEIscURBQThCOztJQUc5QixtREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBUaW1lVW5pdENvZGUgfSBmcm9tICcuLi9lbnVtcy9UaW1lVW5pdENvZGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgU3lzRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYWNjb3VudCAobXVzdCBub3QgYmUgZW1wdHkgLSBjcm9zcyBhY2NvdW50cyBzZWFyY2ggaXMgbm90IHN1cHBvcnRlZCkgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZW5zb3IgSWQgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBvYmplY3QgdHlwZSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBiZWhhdmlvciB0eXBlIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZXZlcml0eSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBldmVudHMgYWZ0ZXIgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBldmVudHMgYmVmb3JlIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gVGltZSBzZXJpZXMgaW50ZXJ2YWwgdW5pdCAoTUlOVVRFLCBIT1VSLCBEQVksIE1JTlVURSkgXG4gICAgcHVibGljIGludGVydmFsOiBUaW1lVW5pdENvZGU7XG4gXG4gICAgLy8gTGFiZWwgZm9ybWF0IG9mIFkgYXhpcyBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZSwgYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaW50ZXJ2YWw/OiBUaW1lVW5pdENvZGUsIGZvcm1hdD86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBmb2xkZXJJZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG59XG5cblxuIl19