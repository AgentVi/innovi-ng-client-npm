/*
*/
var AuditLogServiceFindRequest = /** @class */ (function () {
    function AuditLogServiceFindRequest(userId, from, to, item, itemType, sort, page, pageSize) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.item = item;
        this.itemType = itemType;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return AuditLogServiceFindRequest;
}());
export { AuditLogServiceFindRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVkaXRMb2dTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9BdWRpdExvZ1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFO0FBQ0Y7SUEwQkksb0NBQVksTUFBZSxFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLFFBQXlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUM5SSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTCxpQ0FBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0VudGl0eVR5cGVDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBBdWRpdExvZ1NlcnZpY2VGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSB0aW1lIHBlcmlvZCAobG93ZXIgYm91bmQgaW4gZXBvY2ggdGltZSBtaWxsaXNlY29uZHMpIC0gMCBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHRpbWUgcGVyaW9kICh1cHBlciBib3VuZCBpbiBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcykgLSAwIGZvciBubyBmaWx0ZXIgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGl0ZW0gbmFtZSBvciBJZCBcbiAgICBwdWJsaWMgaXRlbTogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBpdGVtIHR5cGUgLSBlbXB0eSBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBpdGVtVHlwZTogRW50aXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IodXNlcklkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaXRlbT86IHN0cmluZywgaXRlbVR5cGU/OiBFbnRpdHlUeXBlQ29kZSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuaXRlbSA9IGl0ZW07XG4gICAgICAgIHRoaXMuaXRlbVR5cGUgPSBpdGVtVHlwZTtcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==