/*
*/
var SensorsServiceExportRequest = /** @class */ (function () {
    function SensorsServiceExportRequest(folderId, subFolders, search, type, status, stream, sort, format, fields) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
    return SensorsServiceExportRequest;
}());
export { SensorsServiceExportRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yc1NlcnZpY2VFeHBvcnRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvU2Vuc29yc1NlcnZpY2VFeHBvcnRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0U7QUFDRjtJQTZCSSxxQ0FBWSxRQUFpQixFQUFFLFVBQW9CLEVBQUUsTUFBZSxFQUFFLElBQXVCLEVBQUUsTUFBMkIsRUFBRSxNQUF5QixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUI7UUFDcE0sSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVMLGtDQUFDO0FBQUQsQ0FBQyxBQXpDRCxJQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNvclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JTdGF0dXNDb2RlJztcbmltcG9ydCB7IFN0cmVhbVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU3RyZWFtVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgU2Vuc29yc1NlcnZpY2VFeHBvcnRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgZm9sZGVyIElkIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBJZiB0cnVlLCBzZWFyY2ggYWxsIHNlbnNvcnMgaW4gZm9sZGVyIGFuZCBhbGwgaXRzIHN1Yi1mb2xkZXJzIFxuICAgIHB1YmxpYyBzdWJGb2xkZXJzOiBib29sZWFuO1xuIFxuICAgIC8vIEZpbHRlciBieSBuYW1lIG9yIHBhcnRpYWwgbmFtZSBvciBpZCBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciB0eXBlKHMpIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgdHlwZTogU2Vuc29yVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIHN0YXR1cyhlcykgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSAtIG11bHRpcGxlIHZhbHVlcyBlbmFibGVkIFxuICAgIHB1YmxpYyBzdGF0dXM6IFNlbnNvclN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc3RyZWFtIHR5cGUocykgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSAtIG11bHRpcGxlIHZhbHVlcyBlbmFibGVkIFxuICAgIHB1YmxpYyBzdHJlYW06IFN0cmVhbVR5cGVDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHBvcnQgcmVzdWx0cyB0byBhIGRpZmZlcmVudCBmb3JtYXQuIFN1cHBvcnRlZCBmb3JtYXRzOiBjc3YgfCBqc29uIHwgeG1sIFxuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGZpZWxkcyB0byBleHBvcnQgKGxlYXZlIGVtcHR5IHRvIGV4cG9ydCBhbGwgZmllbGRzKSBcbiAgICBwdWJsaWMgZmllbGRzOiBzdHJpbmdbXTtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgdHlwZT86IFNlbnNvclR5cGVDb2RlW10sIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGVbXSwgc3RyZWFtPzogU3RyZWFtVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSkgeyBcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLnN1YkZvbGRlcnMgPSBzdWJGb2xkZXJzO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgfVxuXG59XG5cblxuIl19