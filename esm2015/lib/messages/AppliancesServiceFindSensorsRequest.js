/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class AppliancesServiceFindSensorsRequest {
    /**
     * @param {?=} id
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(id, search, type, status, stream, sort, page, pageSize) {
        this.id = id;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.search;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.type;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.status;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.stream;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.sort;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.page;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlc1NlcnZpY2VGaW5kU2Vuc29yc1JlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9BcHBsaWFuY2VzU2VydmljZUZpbmRTZW5zb3JzUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQSxNQUFNLE9BQU8sbUNBQW1DOzs7Ozs7Ozs7OztJQTBCNUMsWUFBWSxFQUFXLEVBQUUsTUFBZSxFQUFFLElBQXVCLEVBQUUsTUFBMkIsRUFBRSxNQUF5QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDdEssSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUo7OztJQWxDRyxpREFBa0I7O0lBR2xCLHFEQUFzQjs7SUFHdEIsbURBQThCOztJQUc5QixxREFBa0M7O0lBR2xDLHFEQUFnQzs7SUFHaEMsbURBQW9COztJQUdwQixtREFBb0I7O0lBR3BCLHVEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNvclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JTdGF0dXNDb2RlJztcbmltcG9ydCB7IFN0cmVhbVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU3RyZWFtVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlc1NlcnZpY2VGaW5kU2Vuc29yc1JlcXVlc3Qge1xuIFxuICAgIC8vIEFwcGxpYW5jZSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbmFtZSBvciBpZCBvciBleHRlcm5hbCBpZCBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciB0eXBlKHMpIChlbXB0eSBvciBVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgdHlwZTogU2Vuc29yVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIHN0YXR1cyhzKSAoZW1wdHkgb3IgVU5ERUZJTkVEIG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHN0YXR1czogU2Vuc29yU3RhdHVzQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZW5zb3Igc3RyZWFtIHR5cGUocykgKGVtcHR5IG9yIFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzdHJlYW06IFN0cmVhbVR5cGVDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgdHlwZT86IFNlbnNvclR5cGVDb2RlW10sIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGVbXSwgc3RyZWFtPzogU3RyZWFtVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnN0cmVhbSA9IHN0cmVhbTtcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==