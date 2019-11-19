/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
AuditLogServiceFindRequest = /** @class */ (function () {
    function AuditLogServiceFindRequest(userId, from, to, itemType, sort, page, pageSize) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.itemType = itemType;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return AuditLogServiceFindRequest;
}());
/*
*/
export { AuditLogServiceFindRequest };
if (false) {
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.userId;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.from;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.to;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.itemType;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.sort;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.page;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9BdWRpdExvZ1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTs7O0lBdUJJLG9DQUFZLE1BQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN2SCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTCxpQ0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7OztJQTlCRyw0Q0FBc0I7O0lBR3RCLDBDQUFvQjs7SUFHcEIsd0NBQWtCOztJQUdsQiw4Q0FBd0I7O0lBR3hCLDBDQUFvQjs7SUFHcEIsMENBQW9COztJQUdwQiw4Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qICBcbiovXG5leHBvcnQgY2xhc3MgQXVkaXRMb2dTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2VyIGlkIChlbXB0eSBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdGltZSBwZXJpb2QgKGxvd2VyIGJvdW5kIGluIGVwb2NoIHRpbWUgbWlsbGlzZWNvbmRzKSAtIDAgZm9yIG5vIGZpbHRlciBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBieSB0aW1lIHBlcmlvZCAodXBwZXIgYm91bmQgaW4gZXBvY2ggdGltZSBtaWxsaXNlY29uZHMpIC0gMCBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBieSBpdGVtIHR5cGUgb3IgcGFydGlhbCB0eXBlIC0gZW1wdHkgZm9yIG5vIGZpbHRlciBcbiAgICBwdWJsaWMgaXRlbVR5cGU6IHN0cmluZztcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBpdGVtVHlwZT86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuaXRlbVR5cGUgPSBpdGVtVHlwZTtcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==