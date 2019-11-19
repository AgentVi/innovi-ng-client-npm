/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class AuditLogServiceExportRequest {
    /**
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     */
    constructor(userId, from, to, itemType, sort, format, fields) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.itemType = itemType;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}
if (false) {
    /** @type {?} */
    AuditLogServiceExportRequest.prototype.userId;
    /** @type {?} */
    AuditLogServiceExportRequest.prototype.from;
    /** @type {?} */
    AuditLogServiceExportRequest.prototype.to;
    /** @type {?} */
    AuditLogServiceExportRequest.prototype.itemType;
    /** @type {?} */
    AuditLogServiceExportRequest.prototype.sort;
    /** @type {?} */
    AuditLogServiceExportRequest.prototype.format;
    /** @type {?} */
    AuditLogServiceExportRequest.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dTZXJ2aWNlRXhwb3J0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL0F1ZGl0TG9nU2VydmljZUV4cG9ydFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7Ozs7OztJQXVCckMsWUFBWSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxRQUFpQixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUI7UUFDekgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7OztJQTlCRyw4Q0FBc0I7O0lBR3RCLDRDQUFvQjs7SUFHcEIsMENBQWtCOztJQUdsQixnREFBd0I7O0lBR3hCLDRDQUFvQjs7SUFHcEIsOENBQXNCOztJQUd0Qiw4Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qICBcbiovXG5leHBvcnQgY2xhc3MgQXVkaXRMb2dTZXJ2aWNlRXhwb3J0UmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSB0aW1lIHBlcmlvZCAobG93ZXIgYm91bmQgaW4gZXBvY2ggdGltZSBtaWxsaXNlY29uZHMpIC0gMCBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHRpbWUgcGVyaW9kICh1cHBlciBib3VuZCBpbiBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcykgLSAwIGZvciBubyBmaWx0ZXIgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGl0ZW0gdHlwZSBvciBwYXJ0aWFsIHR5cGUgLSBlbXB0eSBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBpdGVtVHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gRXhwb3J0IHJlc3VsdHMgdG8gYSBkaWZmZXJlbnQgZm9ybWF0LiBTdXBwb3J0ZWQgZm9ybWF0czogY3N2IHwganNvbiB8IHhtbCBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBmaWVsZHMgdG8gZXhwb3J0IChsZWF2ZSBlbXB0eSB0byBleHBvcnQgYWxsIGZpZWxkcykgXG4gICAgcHVibGljIGZpZWxkczogc3RyaW5nW107XG4gXG4gICAgY29uc3RydWN0b3IodXNlcklkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaXRlbVR5cGU/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHsgXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuaXRlbVR5cGUgPSBpdGVtVHlwZTtcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==