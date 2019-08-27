/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
SensorsServiceFindRequest = /** @class */ (function () {
    function SensorsServiceFindRequest(folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return SensorsServiceFindRequest;
}());
/*
*/
export { SensorsServiceFindRequest };
if (false) {
    /** @type {?} */
    SensorsServiceFindRequest.prototype.folderId;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.subFolders;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.search;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.type;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.status;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.stream;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.sort;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.page;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yc1NlcnZpY2VGaW5kUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1NlbnNvcnNTZXJ2aWNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUE7OztJQTZCSSxtQ0FBWSxRQUFpQixFQUFFLFVBQW9CLEVBQUUsTUFBZSxFQUFFLElBQXFCLEVBQUUsTUFBeUIsRUFBRSxNQUF1QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDNUwsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVMLGdDQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQzs7Ozs7O0lBdENHLDZDQUF3Qjs7SUFHeEIsK0NBQTJCOztJQUczQiwyQ0FBc0I7O0lBR3RCLHlDQUE0Qjs7SUFHNUIsMkNBQWdDOztJQUdoQywyQ0FBOEI7O0lBRzlCLHlDQUFvQjs7SUFHcEIseUNBQW9COztJQUdwQiw2Q0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JTdGF0dXNDb2RlJztcbmltcG9ydCB7IFN0cmVhbVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU3RyZWFtVHlwZUNvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFNlbnNvcnNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgSWQgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIElmIHRydWUsIHNlYXJjaCBhbGwgc2Vuc29ycyBpbiBmb2xkZXIgYW5kIGFsbCBpdHMgc3ViLWZvbGRlcnMgXG4gICAgcHVibGljIHN1YkZvbGRlcnM6IGJvb2xlYW47XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgcGFydGlhbCBuYW1lIG9yIGlkIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIHR5cGUgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgdHlwZTogU2Vuc29yVHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBzdGF0dXMgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBTZW5zb3JTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBzdHJlYW0gdHlwZSAoZW1wdHkgb3IgVU5ERUZJTkVEIGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzdHJlYW06IFN0cmVhbVR5cGVDb2RlO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogU2Vuc29yVHlwZUNvZGUsIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGUsIHN0cmVhbT86IFN0cmVhbVR5cGVDb2RlLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLnN1YkZvbGRlcnMgPSBzdWJGb2xkZXJzO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgfVxuXG59XG5cblxuIl19