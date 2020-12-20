/*
*/
var AppliancesServiceExportRequest = /** @class */ (function () {
    function AppliancesServiceExportRequest(folderId, subFolders, search, status, agentStatus, sort, format, fields) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.status = status;
        this.agentStatus = agentStatus;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
    return AppliancesServiceExportRequest;
}());
export { AppliancesServiceExportRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlc1NlcnZpY2VFeHBvcnRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvQXBwbGlhbmNlc1NlcnZpY2VFeHBvcnRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0U7QUFDRjtJQTBCSSx3Q0FBWSxRQUFpQixFQUFFLFVBQW9CLEVBQUUsTUFBZSxFQUFFLE1BQThCLEVBQUUsV0FBK0IsRUFBRSxJQUFhLEVBQUUsTUFBZSxFQUFFLE1BQWlCO1FBQ3BMLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTCxxQ0FBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BZ2VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZXNTZXJ2aWNlRXhwb3J0UmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGZvbGRlciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSWYgdHJ1ZSwgc2VhcmNoIGFsbCBhcHBsaWFuY2VzIGluIGZvbGRlciBhbmQgYWxsIGl0cyBzdWItZm9sZGVycyBcbiAgICBwdWJsaWMgc3ViRm9sZGVyczogYm9vbGVhbjtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbmFtZSBvciBtYWMgYWRkcmVzcyBvciBzZXJpYWwgbnVtYmVyIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYXBwbGlhbmNlIHN0YXR1cyhlcykgKGVtcHR5IG9yIFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIHN0YXR1czogQXBwbGlhbmNlU3RhdHVzQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSBhZ2VudCBzdGF0dXMoZXMpIChlbXB0eSBvciBVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSAtIG11bHRpcGxlIHZhbHVlcyBlbmFibGVkIFxuICAgIHB1YmxpYyBhZ2VudFN0YXR1czogQWdlbnRTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHBvcnQgcmVzdWx0cyB0byBhIGRpZmZlcmVudCBmb3JtYXQuIFN1cHBvcnRlZCBmb3JtYXRzOiBjc3YgfCBqc29uIHwgeG1sIFxuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGZpZWxkcyB0byBleHBvcnQgKGxlYXZlIGVtcHR5IHRvIGV4cG9ydCBhbGwgZmllbGRzKSBcbiAgICBwdWJsaWMgZmllbGRzOiBzdHJpbmdbXTtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBhZ2VudFN0YXR1cz86IEFnZW50U3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7IFxuICAgICAgICB0aGlzLmZvbGRlcklkID0gZm9sZGVySWQ7XG4gICAgICAgIHRoaXMuc3ViRm9sZGVycyA9IHN1YkZvbGRlcnM7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5hZ2VudFN0YXR1cyA9IGFnZW50U3RhdHVzO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgfVxuXG59XG5cblxuIl19