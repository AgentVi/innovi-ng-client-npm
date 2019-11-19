/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
AppliancesServiceExportRequest = /** @class */ (function () {
    function AppliancesServiceExportRequest(folderId, subFolders, search, status, sort, format, fields) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
    return AppliancesServiceExportRequest;
}());
/*
*/
export { AppliancesServiceExportRequest };
if (false) {
    /** @type {?} */
    AppliancesServiceExportRequest.prototype.folderId;
    /** @type {?} */
    AppliancesServiceExportRequest.prototype.subFolders;
    /** @type {?} */
    AppliancesServiceExportRequest.prototype.search;
    /** @type {?} */
    AppliancesServiceExportRequest.prototype.status;
    /** @type {?} */
    AppliancesServiceExportRequest.prototype.sort;
    /** @type {?} */
    AppliancesServiceExportRequest.prototype.format;
    /** @type {?} */
    AppliancesServiceExportRequest.prototype.fields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlc1NlcnZpY2VFeHBvcnRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvQXBwbGlhbmNlc1NlcnZpY2VFeHBvcnRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBOzs7SUF1Qkksd0NBQVksUUFBaUIsRUFBRSxVQUFvQixFQUFFLE1BQWUsRUFBRSxNQUE4QixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUI7UUFDbkosSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVMLHFDQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7O0lBOUJHLGtEQUF3Qjs7SUFHeEIsb0RBQTJCOztJQUczQixnREFBc0I7O0lBR3RCLGdEQUFxQzs7SUFHckMsOENBQW9COztJQUdwQixnREFBc0I7O0lBR3RCLGdEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpYW5jZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VTdGF0dXNDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VzU2VydmljZUV4cG9ydFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgSWQgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIElmIHRydWUsIHNlYXJjaCBhbGwgYXBwbGlhbmNlcyBpbiBmb2xkZXIgYW5kIGFsbCBpdHMgc3ViLWZvbGRlcnMgXG4gICAgcHVibGljIHN1YkZvbGRlcnM6IGJvb2xlYW47XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgbWFjIGFkZHJlc3Mgb3Igc2VyaWFsIG51bWJlciBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFwcGxpYW5jZSBzdGF0dXMoZXMpIChlbXB0eSBvciBVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBBcHBsaWFuY2VTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHBvcnQgcmVzdWx0cyB0byBhIGRpZmZlcmVudCBmb3JtYXQuIFN1cHBvcnRlZCBmb3JtYXRzOiBjc3YgfCBqc29uIHwgeG1sIFxuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGZpZWxkcyB0byBleHBvcnQgKGxlYXZlIGVtcHR5IHRvIGV4cG9ydCBhbGwgZmllbGRzKSBcbiAgICBwdWJsaWMgZmllbGRzOiBzdHJpbmdbXTtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7IFxuICAgICAgICB0aGlzLmZvbGRlcklkID0gZm9sZGVySWQ7XG4gICAgICAgIHRoaXMuc3ViRm9sZGVycyA9IHN1YkZvbGRlcnM7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5mb3JtYXQgPSBmb3JtYXQ7XG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==