/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
AuditLogServiceFindRequest = /** @class */ (function () {
    function AuditLogServiceFindRequest(userId, from, to, itemType, sort, page, pageSize, format, fields) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.itemType = itemType;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
        this.format = format;
        this.fields = fields;
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
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.format;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9BdWRpdExvZ1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQTs7O0lBNkJJLG9DQUFZLE1BQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxNQUFpQjtRQUMzSixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTCxpQ0FBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0M7Ozs7OztJQXRDRyw0Q0FBc0I7O0lBR3RCLDBDQUFvQjs7SUFHcEIsd0NBQWtCOztJQUdsQiw4Q0FBd0I7O0lBR3hCLDBDQUFvQjs7SUFHcEIsMENBQW9COztJQUdwQiw4Q0FBd0I7O0lBR3hCLDRDQUFzQjs7SUFHdEIsNENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEF1ZGl0TG9nU2VydmljZUZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdXNlciBpZCAoZW1wdHkgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHRpbWUgcGVyaW9kIChsb3dlciBib3VuZCBpbiBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcykgLSAwIGZvciBubyBmaWx0ZXIgXG4gICAgcHVibGljIGZyb206IG51bWJlcjtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdGltZSBwZXJpb2QgKHVwcGVyIGJvdW5kIGluIGVwb2NoIHRpbWUgbWlsbGlzZWNvbmRzKSAtIDAgZm9yIG5vIGZpbHRlciBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgaXRlbSB0eXBlIG9yIHBhcnRpYWwgdHlwZSAtIGVtcHR5IGZvciBubyBmaWx0ZXIgXG4gICAgcHVibGljIGl0ZW1UeXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgLy8gRXhwb3J0IHJlc3VsdHMgdG8gYSBkaWZmZXJlbnQgZm9ybWF0LiBTdXBwb3J0ZWQgZm9ybWF0czogY3N2IHwganNvbiB8IHhtbCBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBmaWVsZHMgdG8gZXhwb3J0IChsZWF2ZSBlbXB0eSB0byBleHBvcnQgYWxsIGZpZWxkcykgXG4gICAgcHVibGljIGZpZWxkczogc3RyaW5nW107XG4gXG4gICAgY29uc3RydWN0b3IodXNlcklkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaXRlbVR5cGU/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7IFxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLml0ZW1UeXBlID0gaXRlbVR5cGU7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==