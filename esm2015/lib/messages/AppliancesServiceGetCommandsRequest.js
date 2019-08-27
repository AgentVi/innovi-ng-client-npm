/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class AppliancesServiceGetCommandsRequest {
    /**
     * @param {?=} accountId
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(accountId, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.accountId;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.status;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.sort;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.page;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlc1NlcnZpY2VHZXRDb21tYW5kc1JlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9BcHBsaWFuY2VzU2VydmljZUdldENvbW1hbmRzUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxNQUFNLE9BQU8sbUNBQW1DOzs7Ozs7OztJQWlCNUMsWUFBWSxTQUFrQixFQUFFLE1BQTRCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN6RyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUo7OztJQXRCRyx3REFBeUI7O0lBR3pCLHFEQUFtQzs7SUFHbkMsbURBQW9COztJQUdwQixtREFBb0I7O0lBR3BCLHVEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQ29tbWFuZFN0YXR1c0NvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZXNTZXJ2aWNlR2V0Q29tbWFuZHNSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYWNjb3VudCBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBjb21tYW5kIHN0YXR1cyhlcykgKGVtcHR5IG9yIFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzdGF0dXM6IENvbW1hbmRTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBzdGF0dXM/OiBDb21tYW5kU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuIl19