/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
SysEventsServiceStatisticsRequest = /** @class */ (function () {
    function SysEventsServiceStatisticsRequest(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
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
    return SysEventsServiceStatisticsRequest;
}());
/*
*/
export { SysEventsServiceStatisticsRequest };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvU3lzRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU9BOzs7SUFnQ0ksMkNBQVksU0FBa0IsRUFBRSxRQUFpQixFQUFFLFFBQWlCLEVBQUUsVUFBNkIsRUFBRSxZQUFpQyxFQUFFLFFBQTZCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxRQUF1QixFQUFFLE1BQWU7UUFDdk8sSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUwsd0NBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDOzs7Ozs7SUExQ0csc0RBQXlCOztJQUd6QixxREFBd0I7O0lBR3hCLHFEQUF3Qjs7SUFHeEIsdURBQW9DOztJQUdwQyx5REFBd0M7O0lBR3hDLHFEQUFvQzs7SUFHcEMsaURBQW9COztJQUdwQiwrQ0FBa0I7O0lBR2xCLHFEQUE4Qjs7SUFHOUIsbURBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZVVuaXRDb2RlIH0gZnJvbSAnLi4vZW51bXMvVGltZVVuaXRDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFN5c0V2ZW50c1NlcnZpY2VTdGF0aXN0aWNzUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgKG11c3Qgbm90IGJlIGVtcHR5IC0gY3Jvc3MgYWNjb3VudHMgc2VhcmNoIGlzIG5vdCBzdXBwb3J0ZWQpIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgZm9sZGVyIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIElkIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgb2JqZWN0IHR5cGUocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSBiZWhhdmlvciB0eXBlKHMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNldmVyaXR5KGllcykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBldmVudHMgYWZ0ZXIgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBldmVudHMgYmVmb3JlIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gVGltZSBzZXJpZXMgaW50ZXJ2YWwgdW5pdCAoTUlOVVRFLCBIT1VSLCBEQVksIE1JTlVURSkgXG4gICAgcHVibGljIGludGVydmFsOiBUaW1lVW5pdENvZGU7XG4gXG4gICAgLy8gTGFiZWwgZm9ybWF0IG9mIFkgYXhpcyBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaW50ZXJ2YWw/OiBUaW1lVW5pdENvZGUsIGZvcm1hdD86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBmb2xkZXJJZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG59XG5cblxuIl19