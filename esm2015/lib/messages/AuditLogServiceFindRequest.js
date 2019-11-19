/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class AuditLogServiceFindRequest {
    /**
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(userId, from, to, itemType, sort, page, pageSize) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.itemType = itemType;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9BdWRpdExvZ1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7Ozs7O0lBdUJuQyxZQUFZLE1BQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN2SCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSjs7O0lBOUJHLDRDQUFzQjs7SUFHdEIsMENBQW9COztJQUdwQix3Q0FBa0I7O0lBR2xCLDhDQUF3Qjs7SUFHeEIsMENBQW9COztJQUdwQiwwQ0FBb0I7O0lBR3BCLDhDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBBdWRpdExvZ1NlcnZpY2VGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSB0aW1lIHBlcmlvZCAobG93ZXIgYm91bmQgaW4gZXBvY2ggdGltZSBtaWxsaXNlY29uZHMpIC0gMCBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHRpbWUgcGVyaW9kICh1cHBlciBib3VuZCBpbiBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcykgLSAwIGZvciBubyBmaWx0ZXIgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGl0ZW0gdHlwZSBvciBwYXJ0aWFsIHR5cGUgLSBlbXB0eSBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBpdGVtVHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKHVzZXJJZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGl0ZW1UeXBlPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgICAgdGhpcy5pdGVtVHlwZSA9IGl0ZW1UeXBlO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuIl19