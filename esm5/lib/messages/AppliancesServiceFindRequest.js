/*
*/
var AppliancesServiceFindRequest = /** @class */ (function () {
    function AppliancesServiceFindRequest(folderId, subFolders, search, status, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return AppliancesServiceFindRequest;
}());
export { AppliancesServiceFindRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlc1NlcnZpY2VGaW5kUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL0FwcGxpYW5jZXNTZXJ2aWNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtBQUNGO0lBdUJJLHNDQUFZLFFBQWlCLEVBQUUsVUFBb0IsRUFBRSxNQUFlLEVBQUUsTUFBOEIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQ2pKLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTCxtQ0FBQztBQUFELENBQUMsQUFqQ0QsSUFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlc1NlcnZpY2VGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGZvbGRlciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSWYgdHJ1ZSwgc2VhcmNoIGFsbCBhcHBsaWFuY2VzIGluIGZvbGRlciBhbmQgYWxsIGl0cyBzdWItZm9sZGVycyBcbiAgICBwdWJsaWMgc3ViRm9sZGVyczogYm9vbGVhbjtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbmFtZSBvciBtYWMgYWRkcmVzcyBvciBzZXJpYWwgbnVtYmVyIFxuICAgIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYXBwbGlhbmNlIHN0YXR1cyhlcykgKGVtcHR5IG9yIFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFwcGxpYW5jZVN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLnN1YkZvbGRlcnMgPSBzdWJGb2xkZXJzO1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=