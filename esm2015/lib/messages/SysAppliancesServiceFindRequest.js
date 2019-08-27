/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class SysAppliancesServiceFindRequest {
    /**
     * @param {?=} accountId
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(accountId, search, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.accountId;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.search;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.status;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.sort;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.page;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzQXBwbGlhbmNlc1NlcnZpY2VGaW5kUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1N5c0FwcGxpYW5jZXNTZXJ2aWNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsTUFBTSxPQUFPLCtCQUErQjs7Ozs7Ozs7O0lBb0J4QyxZQUFZLFNBQWtCLEVBQUUsTUFBZSxFQUFFLE1BQThCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUM1SCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUo7OztJQTFCRyxvREFBeUI7O0lBR3pCLGlEQUFzQjs7SUFHdEIsaURBQXFDOztJQUdyQywrQ0FBb0I7O0lBR3BCLCtDQUFvQjs7SUFHcEIsbURBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFN5c0FwcGxpYW5jZXNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBhY2NvdW50IElkIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgbWFjIGFkZHJlc3Mgb3Igc2VyaWFsIG51bWJlciBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFwcGxpYW5jZSBzdGF0dXMoZXMpIChlbXB0eSBvciBVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBBcHBsaWFuY2VTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHN0YXR1cz86IEFwcGxpYW5jZVN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=