/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class FoldersServiceFindRequest {
    /**
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @param {?=} format
     */
    constructor(id, search, parentId, sort, page, pageSize, format) {
        this.id = id;
        this.search = search;
        this.parentId = parentId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
        this.format = format;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceFindRequest.prototype.id;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.search;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.parentId;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.sort;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.page;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.pageSize;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyc1NlcnZpY2VGaW5kUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL0ZvbGRlcnNTZXJ2aWNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7Ozs7OztJQXVCbEMsWUFBWSxFQUFXLEVBQUUsTUFBZSxFQUFFLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQixFQUFFLE1BQWU7UUFDekgsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUo7OztJQTlCRyx1Q0FBa0I7O0lBR2xCLDJDQUFzQjs7SUFHdEIsNkNBQXdCOztJQUd4Qix5Q0FBb0I7O0lBR3BCLHlDQUFvQjs7SUFHcEIsNkNBQXdCOztJQUd4QiwyQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qICBcbiovXG5leHBvcnQgY2xhc3MgRm9sZGVyc1NlcnZpY2VGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRm9sZGVyIElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBuYW1lIG9yIHBhcnRpYWwgbmFtZSBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHBhcmVudCBmb2xkZXIgSWQgXG4gICAgcHVibGljIHBhcmVudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgLy8gRXhwb3J0IHJlc3VsdHMgdG8gYSBkaWZmZXJlbnQgZm9ybWF0LiBTdXBwb3J0ZWQgZm9ybWF0czogY3N2IHwganNvbiB8IHhtbCBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyLCBmb3JtYXQ/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMucGFyZW50SWQgPSBwYXJlbnRJZDtcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG5cbn1cblxuXG4iXX0=