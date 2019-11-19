/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
UsersServiceFindRequest = /** @class */ (function () {
    function UsersServiceFindRequest(search, type, status, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return UsersServiceFindRequest;
}());
/*
*/
export { UsersServiceFindRequest };
if (false) {
    /** @type {?} */
    UsersServiceFindRequest.prototype.search;
    /** @type {?} */
    UsersServiceFindRequest.prototype.type;
    /** @type {?} */
    UsersServiceFindRequest.prototype.status;
    /** @type {?} */
    UsersServiceFindRequest.prototype.sort;
    /** @type {?} */
    UsersServiceFindRequest.prototype.page;
    /** @type {?} */
    UsersServiceFindRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9Vc2Vyc1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7O0lBb0JJLGlDQUFZLE1BQWUsRUFBRSxJQUFxQixFQUFFLE1BQXlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUMxSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUwsOEJBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDOzs7Ozs7SUExQkcseUNBQXNCOztJQUd0Qix1Q0FBNEI7O0lBRzVCLHlDQUFnQzs7SUFHaEMsdUNBQW9COztJQUdwQix1Q0FBb0I7O0lBR3BCLDJDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBVc2Vyc1NlcnZpY2VGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgcGFydGlhbCBuYW1lIG9yIGlkIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNlciB0eXBlKHMpIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHR5cGU6IFVzZXJUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2VyIHN0YXR1cyhlcykgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBVc2VyU3RhdHVzQ29kZVtdO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKHNlYXJjaD86IHN0cmluZywgdHlwZT86IFVzZXJUeXBlQ29kZVtdLCBzdGF0dXM/OiBVc2VyU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuIl19