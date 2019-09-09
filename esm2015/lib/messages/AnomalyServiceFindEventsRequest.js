/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class AnomalyServiceFindEventsRequest {
    /**
     * @param {?=} accountId
     * @param {?=} sensorId
     * @param {?=} status
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(accountId, sensorId, status, from, to, sort, page, pageSize) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.status = status;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.accountId;
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.sensorId;
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.status;
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.from;
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.to;
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.sort;
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.page;
    /** @type {?} */
    AnomalyServiceFindEventsRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5vbWFseVNlcnZpY2VGaW5kRXZlbnRzUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL0Fub21hbHlTZXJ2aWNlRmluZEV2ZW50c1JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsTUFBTSxPQUFPLCtCQUErQjs7Ozs7Ozs7Ozs7SUEwQnhDLFlBQVksU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQXdCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQ3BKLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUVKOzs7SUFsQ0csb0RBQXlCOztJQUd6QixtREFBd0I7O0lBR3hCLGlEQUErQjs7SUFHL0IsK0NBQW9COztJQUdwQiw2Q0FBa0I7O0lBR2xCLCtDQUFvQjs7SUFHcEIsK0NBQW9COztJQUdwQixtREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEFub21hbHlTZXJ2aWNlRmluZEV2ZW50c1JlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBhY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBldmVudCBzdGF0dXMgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzdGF0dXM6IEV2ZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgZXZlbnRzIGFmdGVyIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIGZyb206IG51bWJlcjtcbiBcbiAgICAvLyBGaWx0ZXIgZXZlbnRzIGJlZm9yZSB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuIl19