/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
AuditLogServiceExportRequest = /** @class */ (function () {
    function AuditLogServiceExportRequest(userId, from, to, itemType, sort, format, fields) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.itemType = itemType;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
    return AuditLogServiceExportRequest;
}());
/*
*/
export { AuditLogServiceExportRequest };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dTZXJ2aWNlRXhwb3J0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL0F1ZGl0TG9nU2VydmljZUV4cG9ydFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7OztJQXVCSSxzQ0FBWSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxRQUFpQixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUI7UUFDekgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUwsbUNBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDOzs7Ozs7SUE5QkcsOENBQXNCOztJQUd0Qiw0Q0FBb0I7O0lBR3BCLDBDQUFrQjs7SUFHbEIsZ0RBQXdCOztJQUd4Qiw0Q0FBb0I7O0lBR3BCLDhDQUFzQjs7SUFHdEIsOENBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEF1ZGl0TG9nU2VydmljZUV4cG9ydFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2VyIGlkIChlbXB0eSBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyB1c2VySWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdGltZSBwZXJpb2QgKGxvd2VyIGJvdW5kIGluIGVwb2NoIHRpbWUgbWlsbGlzZWNvbmRzKSAtIDAgZm9yIG5vIGZpbHRlciBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBieSB0aW1lIHBlcmlvZCAodXBwZXIgYm91bmQgaW4gZXBvY2ggdGltZSBtaWxsaXNlY29uZHMpIC0gMCBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBieSBpdGVtIHR5cGUgb3IgcGFydGlhbCB0eXBlIC0gZW1wdHkgZm9yIG5vIGZpbHRlciBcbiAgICBwdWJsaWMgaXRlbVR5cGU6IHN0cmluZztcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIEV4cG9ydCByZXN1bHRzIHRvIGEgZGlmZmVyZW50IGZvcm1hdC4gU3VwcG9ydGVkIGZvcm1hdHM6IGNzdiB8IGpzb24gfCB4bWwgXG4gICAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgZmllbGRzIHRvIGV4cG9ydCAobGVhdmUgZW1wdHkgdG8gZXhwb3J0IGFsbCBmaWVsZHMpIFxuICAgIHB1YmxpYyBmaWVsZHM6IHN0cmluZ1tdO1xuIFxuICAgIGNvbnN0cnVjdG9yKHVzZXJJZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGl0ZW1UeXBlPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7IFxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLml0ZW1UeXBlID0gaXRlbVR5cGU7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICB9XG5cbn1cblxuXG4iXX0=