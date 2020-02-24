/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
UsersServiceFindRequest = /** @class */ (function () {
    function UsersServiceFindRequest(accountId, search, type, status, sort, page, pageSize) {
        this.accountId = accountId;
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
    UsersServiceFindRequest.prototype.accountId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlcnNTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9Vc2Vyc1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7O0lBdUJJLGlDQUFZLFNBQWtCLEVBQUUsTUFBZSxFQUFFLElBQXFCLEVBQUUsTUFBeUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQzlJLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTCw4QkFBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0M7Ozs7OztJQTlCRyw0Q0FBeUI7O0lBR3pCLHlDQUFzQjs7SUFHdEIsdUNBQTRCOztJQUc1Qix5Q0FBZ0M7O0lBR2hDLHVDQUFvQjs7SUFHcEIsdUNBQW9COztJQUdwQiwyQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBhY2NvdW50IGlkIChnZXQgYW5sdSBBY2NvdW50IFVzZXJzIHdpdGggYWNjZXNzIHRvIHRoZSBhY2NvdW50SWQpIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbmFtZSBvciBwYXJ0aWFsIG5hbWUgb3IgaWQgXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSB1c2VyIHR5cGUocykgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgdHlwZTogVXNlclR5cGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgc3RhdHVzKGVzKSAoZW1wdHkgb3IgVU5ERUZJTkVEIGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzdGF0dXM6IFVzZXJTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBVc2VyVHlwZUNvZGVbXSwgc3RhdHVzPzogVXNlclN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=