/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
FoldersServiceFindRequest = /** @class */ (function () {
    function FoldersServiceFindRequest(id, search, parentId, sort, page, pageSize, format) {
        this.id = id;
        this.search = search;
        this.parentId = parentId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
        this.format = format;
    }
    return FoldersServiceFindRequest;
}());
/*
*/
export { FoldersServiceFindRequest };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyc1NlcnZpY2VGaW5kUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL0ZvbGRlcnNTZXJ2aWNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7OztJQXVCSSxtQ0FBWSxFQUFXLEVBQUUsTUFBZSxFQUFFLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQixFQUFFLE1BQWU7UUFDekgsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUwsZ0NBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDOzs7Ozs7SUE5QkcsdUNBQWtCOztJQUdsQiwyQ0FBc0I7O0lBR3RCLDZDQUF3Qjs7SUFHeEIseUNBQW9COztJQUdwQix5Q0FBb0I7O0lBR3BCLDZDQUF3Qjs7SUFHeEIsMkNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEZvbGRlcnNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZvbGRlciBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbmFtZSBvciBwYXJ0aWFsIG5hbWUgXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBwYXJlbnQgZm9sZGVyIElkIFxuICAgIHB1YmxpYyBwYXJlbnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIC8vIEV4cG9ydCByZXN1bHRzIHRvIGEgZGlmZmVyZW50IGZvcm1hdC4gU3VwcG9ydGVkIGZvcm1hdHM6IGNzdiB8IGpzb24gfCB4bWwgXG4gICAgcHVibGljIGZvcm1hdDogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKGlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciwgZm9ybWF0Pzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgICAgICB0aGlzLnBhcmVudElkID0gcGFyZW50SWQ7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgfVxuXG59XG5cblxuIl19