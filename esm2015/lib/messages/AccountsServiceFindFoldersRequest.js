/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class AccountsServiceFindFoldersRequest {
    /**
     * @param {?=} id
     * @param {?=} parentId
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(id, parentId, search, sort, page, pageSize) {
        this.id = id;
        this.parentId = parentId;
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceFindFoldersRequest.prototype.id;
    /** @type {?} */
    AccountsServiceFindFoldersRequest.prototype.parentId;
    /** @type {?} */
    AccountsServiceFindFoldersRequest.prototype.search;
    /** @type {?} */
    AccountsServiceFindFoldersRequest.prototype.sort;
    /** @type {?} */
    AccountsServiceFindFoldersRequest.prototype.page;
    /** @type {?} */
    AccountsServiceFindFoldersRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudHNTZXJ2aWNlRmluZEZvbGRlcnNSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvQWNjb3VudHNTZXJ2aWNlRmluZEZvbGRlcnNSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7OztJQW9CMUMsWUFBWSxFQUFXLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN4RyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSjs7O0lBMUJHLCtDQUFrQjs7SUFHbEIscURBQXdCOztJQUd4QixtREFBc0I7O0lBR3RCLGlEQUFvQjs7SUFHcEIsaURBQW9COztJQUdwQixxREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qICBcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudHNTZXJ2aWNlRmluZEZvbGRlcnNSZXF1ZXN0IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBwYXJlbnQgZm9sZGVyIElkIFxuICAgIHB1YmxpYyBwYXJlbnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBuYW1lIG9yIHBhcnRpYWwgbmFtZSBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IoaWQ/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucGFyZW50SWQgPSBwYXJlbnRJZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=