/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Query response message returned for find operation (with pagination) on multiple entities
*/
var /*
   Query response message returned for find operation (with pagination) on multiple entities
*/
QueryResponse = /** @class */ (function () {
    function QueryResponse(code, error, page, pageSize, pages, total, queryDef, docType) {
        this.code = code;
        this.error = error;
        this.page = page;
        this.pageSize = pageSize;
        this.pages = pages;
        this.total = total;
        this.queryDef = queryDef;
        this.docType = docType;
    }
    return QueryResponse;
}());
/*
   Query response message returned for find operation (with pagination) on multiple entities
*/
export { QueryResponse };
if (false) {
    /** @type {?} */
    QueryResponse.prototype.code;
    /** @type {?} */
    QueryResponse.prototype.error;
    /** @type {?} */
    QueryResponse.prototype.page;
    /** @type {?} */
    QueryResponse.prototype.pageSize;
    /** @type {?} */
    QueryResponse.prototype.pages;
    /** @type {?} */
    QueryResponse.prototype.total;
    /** @type {?} */
    QueryResponse.prototype.queryDef;
    /** @type {?} */
    QueryResponse.prototype.docType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1F1ZXJ5UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBMEJJLHVCQUFZLElBQWEsRUFBRSxLQUFjLEVBQUUsSUFBYSxFQUFFLFFBQWlCLEVBQUUsS0FBYyxFQUFFLEtBQWMsRUFBRSxRQUFpQixFQUFFLE9BQWdCO1FBQzVJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTCxvQkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7Ozs7Ozs7SUFsQ0csNkJBQW9COztJQUdwQiw4QkFBcUI7O0lBR3JCLDZCQUFvQjs7SUFHcEIsaUNBQXdCOztJQUd4Qiw4QkFBcUI7O0lBR3JCLDhCQUFxQjs7SUFHckIsaUNBQXdCOztJQUd4QixnQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFxuICAgUXVlcnkgcmVzcG9uc2UgbWVzc2FnZSByZXR1cm5lZCBmb3IgZmluZCBvcGVyYXRpb24gKHdpdGggcGFnaW5hdGlvbikgb24gbXVsdGlwbGUgZW50aXRpZXMgXG4qL1xuZXhwb3J0IGNsYXNzIFF1ZXJ5UmVzcG9uc2Uge1xuIFxuICAgIC8vIEVycm9yIGNvZGUgKDAgZm9yIHN1Y2Nlc3MpIFxuICAgIHB1YmxpYyBjb2RlOiBudW1iZXI7XG4gXG4gICAgLy8gRXJyb3IgbWVzc2FnZSBcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZztcbiBcbiAgICAvLyBDdXJyZW50IHBhZ2UgKEJ1bGspIG51bWJlciBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIFNpemUgb2YgcGFnZSAoaXRlbXMgaW4gYnVsaykgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgLy8gVG90YWwgbnVtYmVyIG9mIHBhZ2VzIFxuICAgIHB1YmxpYyBwYWdlczogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgcXVlcnkgXG4gICAgcHVibGljIHRvdGFsOiBudW1iZXI7XG4gXG4gICAgLy8gUXVlcnkgZGVmaW5pdGlvbiBzcGVjIGFzIEpzb24gc3RyaW5nIFxuICAgIHB1YmxpYyBxdWVyeURlZjogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSB0eXBlIFxuICAgIHB1YmxpYyBkb2NUeXBlOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IoY29kZT86IG51bWJlciwgZXJyb3I/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyLCBwYWdlcz86IG51bWJlciwgdG90YWw/OiBudW1iZXIsIHF1ZXJ5RGVmPzogc3RyaW5nLCBkb2NUeXBlPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICAgICAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xuICAgICAgICB0aGlzLnRvdGFsID0gdG90YWw7XG4gICAgICAgIHRoaXMucXVlcnlEZWYgPSBxdWVyeURlZjtcbiAgICAgICAgdGhpcy5kb2NUeXBlID0gZG9jVHlwZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=