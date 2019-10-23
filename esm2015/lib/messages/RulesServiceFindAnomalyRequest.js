/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class RulesServiceFindAnomalyRequest {
    /**
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} search
     * @param {?=} severity
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(folderId, sensorId, search, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    RulesServiceFindAnomalyRequest.prototype.folderId;
    /** @type {?} */
    RulesServiceFindAnomalyRequest.prototype.sensorId;
    /** @type {?} */
    RulesServiceFindAnomalyRequest.prototype.search;
    /** @type {?} */
    RulesServiceFindAnomalyRequest.prototype.severity;
    /** @type {?} */
    RulesServiceFindAnomalyRequest.prototype.sort;
    /** @type {?} */
    RulesServiceFindAnomalyRequest.prototype.page;
    /** @type {?} */
    RulesServiceFindAnomalyRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZXNTZXJ2aWNlRmluZEFub21hbHlSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvUnVsZXNTZXJ2aWNlRmluZEFub21hbHlSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBLE1BQU0sT0FBTyw4QkFBOEI7Ozs7Ozs7Ozs7SUF1QnZDLFlBQVksUUFBaUIsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxRQUE2QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDN0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUVKOzs7SUE5Qkcsa0RBQXdCOztJQUd4QixrREFBd0I7O0lBR3hCLGdEQUFzQjs7SUFHdEIsa0RBQW9DOztJQUdwQyw4Q0FBb0I7O0lBR3BCLDhDQUFvQjs7SUFHcEIsa0RBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVzU2VydmljZUZpbmRBbm9tYWx5UmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGZvbGRlciAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgZGVzY3JpcHRpb24gb3IgZXh0ZXJuYWwgaWQgb3IgcGFydGlhbCAodXNpbmcgKiB3aWxkY2FyZCkgXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZXZlcml0eShpZXMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmZvbGRlcklkID0gZm9sZGVySWQ7XG4gICAgICAgIHRoaXMuc2Vuc29ySWQgPSBzZW5zb3JJZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMuc2V2ZXJpdHkgPSBzZXZlcml0eTtcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==