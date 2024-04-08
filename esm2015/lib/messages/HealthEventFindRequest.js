/*
*/
export class HealthEventFindRequest {
    constructor(folderId, from, to, source, openClosed, entityId, sort, page, pageSize) {
        this.folderId = folderId;
        this.from = from;
        this.to = to;
        this.source = source;
        this.openClosed = openClosed;
        this.entityId = entityId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbHRoRXZlbnRGaW5kUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvbWVzc2FnZXMvSGVhbHRoRXZlbnRGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0FBQ0YsTUFBTSxPQUFPLHNCQUFzQjtJQTZCL0IsWUFBWSxRQUFpQixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsTUFBdUIsRUFBRSxVQUFpQyxFQUFFLFFBQW1CLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN2TCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRW50aXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgT3BlbkNsb3NlZFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9PcGVuQ2xvc2VkU3RhdHVzQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgSGVhbHRoRXZlbnRGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGZvbGRlciAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBhZnRlciB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMgb3IgcmVsYXRpdmUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIG5lZ2F0aXZlIG51bWJlcikgXG4gICAgcHVibGljIGZyb206IG51bWJlcjtcbiBcbiAgICAvLyBGaWx0ZXIgZXZlbnRzIGJlZm9yZSB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMgb3IgcmVsYXRpdmUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIG5lZ2F0aXZlIG51bWJlcikgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGhlYWx0aCBldmVudCBzb3VyY2UgdHlwZSBcbiAgICBwdWJsaWMgc291cmNlOiBFbnRpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgb3BlbmVkLCBjbG9zZWQgb3IgYWxsIGhlYWx0aCBldmVudHMgXG4gICAgcHVibGljIG9wZW5DbG9zZWQ6IE9wZW5DbG9zZWRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBzb3VyY2UgZW50aXR5IGlkKHMpIFxuICAgIHB1YmxpYyBlbnRpdHlJZDogc3RyaW5nW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IoZm9sZGVySWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzb3VyY2U/OiBFbnRpdHlUeXBlQ29kZSwgb3BlbkNsb3NlZD86IE9wZW5DbG9zZWRTdGF0dXNDb2RlLCBlbnRpdHlJZD86IHN0cmluZ1tdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLm9wZW5DbG9zZWQgPSBvcGVuQ2xvc2VkO1xuICAgICAgICB0aGlzLmVudGl0eUlkID0gZW50aXR5SWQ7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=