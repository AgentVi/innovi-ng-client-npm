/*
*/
export class EventsServiceFindRequest {
    constructor(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.status = status;
        this.rule = rule;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzU2VydmljZUZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvRXZlbnRzU2VydmljZUZpbmRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0U7QUFDRixNQUFNLE9BQU8sd0JBQXdCO0lBeUNqQyxZQUFZLFFBQWlCLEVBQUUsVUFBb0IsRUFBRSxRQUFpQixFQUFFLFVBQTZCLEVBQUUsWUFBaUMsRUFBRSxRQUE2QixFQUFFLE1BQTBCLEVBQUUsSUFBZSxFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUM3UixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudHNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEluZGljYXRlIHRoYXQgdGhlIHNlYXJjaCBzY29wZSBpcyBvbiBhbGwgc3ViLWZvbGRlcnMgaGllcmFyY2h5IHVuZGVyIHRoZSBwcm92aWRlZCBmb2xkZXIgXG4gICAgcHVibGljIHN1YkZvbGRlcnM6IGJvb2xlYW47XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG9iamVjdCB0eXBlKHMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSAtIG11bHRpcGxlIHZhbHVlcyBlbmFibGVkIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEZpbHRlciBieSBiZWhhdmlvciB0eXBlKHMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSAtIG11bHRpcGxlIHZhbHVlcyBlbmFibGVkIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2V2ZXJpdHkgdHlwZShzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgZXZlbnQgc3RhdHVzKGVzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgZXZlbnQgcnVsZShzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgcnVsZTogc3RyaW5nW107XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBhZnRlciB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBiZWZvcmUgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlbnNvcklkPzogc3RyaW5nLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGVbXSwgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlW10sIHJ1bGU/OiBzdHJpbmdbXSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmZvbGRlcklkID0gZm9sZGVySWQ7XG4gICAgICAgIHRoaXMuc3ViRm9sZGVycyA9IHN1YkZvbGRlcnM7XG4gICAgICAgIHRoaXMuc2Vuc29ySWQgPSBzZW5zb3JJZDtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGUgPSBiZWhhdmlvclR5cGU7XG4gICAgICAgIHRoaXMuc2V2ZXJpdHkgPSBzZXZlcml0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==