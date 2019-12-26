/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class EventsServiceStatisticsRequest {
    /**
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} status
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} label
     */
    constructor(folderId, sensorId, objectType, behaviorType, severity, status, from, to, interval, label) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.status = status;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.label = label;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.folderId;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.sensorId;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.objectType;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.behaviorType;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.severity;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.status;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.from;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.to;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.interval;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.label;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvRXZlbnRzU2VydmljZVN0YXRpc3RpY3NSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7Ozs7Ozs7SUFnQ3ZDLFlBQVksUUFBaUIsRUFBRSxRQUFpQixFQUFFLFVBQTZCLEVBQUUsWUFBaUMsRUFBRSxRQUE2QixFQUFFLE1BQTBCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxRQUF1QixFQUFFLEtBQWM7UUFDOU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBRUo7OztJQTFDRyxrREFBd0I7O0lBR3hCLGtEQUF3Qjs7SUFHeEIsb0RBQW9DOztJQUdwQyxzREFBd0M7O0lBR3hDLGtEQUFvQzs7SUFHcEMsZ0RBQWlDOztJQUdqQyw4Q0FBb0I7O0lBR3BCLDRDQUFrQjs7SUFHbEIsa0RBQThCOztJQUc5QiwrQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBUaW1lVW5pdENvZGUgfSBmcm9tICcuLi9lbnVtcy9UaW1lVW5pdENvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEV2ZW50c1NlcnZpY2VTdGF0aXN0aWNzUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGZvbGRlciAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG9iamVjdCB0eXBlKHMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYmVoYXZpb3IgdHlwZShzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZXZlcml0eShpZXMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgZXZlbnQgc3RhdHVzKGVzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgZXZlbnRzIGFmdGVyIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIGZyb206IG51bWJlcjtcbiBcbiAgICAvLyBGaWx0ZXIgZXZlbnRzIGJlZm9yZSB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIFRpbWUgc2VyaWVzIGludGVydmFsIHVuaXQgKE1JTlVURSwgSE9VUiwgREFZLCBNSU5VVEUpIFxuICAgIHB1YmxpYyBpbnRlcnZhbDogVGltZVVuaXRDb2RlO1xuIFxuICAgIC8vIExhYmVsIGZvcm1hdCBvZiBZIGF4aXMgXG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IoZm9sZGVySWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBpbnRlcnZhbD86IFRpbWVVbml0Q29kZSwgbGFiZWw/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMuZm9sZGVySWQgPSBmb2xkZXJJZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB9XG5cbn1cblxuXG4iXX0=