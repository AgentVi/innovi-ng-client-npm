/*
*/
export class EventsServiceFindRequest {
    constructor(folderId, subFolders, sensorId, applianceId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize, after, limit) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorId = sensorId;
        this.applianceId = applianceId;
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
        this.after = after;
        this.limit = limit;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzU2VydmljZUZpbmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9tZXNzYWdlcy9FdmVudHNTZXJ2aWNlRmluZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRTtBQUNGLE1BQU0sT0FBTyx3QkFBd0I7SUFrRGpDLFlBQVksUUFBbUIsRUFBRSxVQUFvQixFQUFFLFFBQW1CLEVBQUUsV0FBb0IsRUFBRSxVQUE2QixFQUFFLFlBQWlDLEVBQUUsUUFBNkIsRUFBRSxNQUEwQixFQUFFLElBQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUIsRUFBRSxLQUFjLEVBQUUsS0FBYztRQUN2VixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudHNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nW107XG4gXG4gICAgLy8gSW5kaWNhdGUgdGhhdCB0aGUgc2VhcmNoIHNjb3BlIGlzIG9uIGFsbCBzdWItZm9sZGVycyBoaWVyYXJjaHkgdW5kZXIgdGhlIHByb3ZpZGVkIGZvbGRlciBcbiAgICBwdWJsaWMgc3ViRm9sZGVyczogYm9vbGVhbjtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIElkIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEZpbHRlciBieSBhcHBsaWFuY2UgSWQgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBhcHBsaWFuY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBvYmplY3QgdHlwZShzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYmVoYXZpb3IgdHlwZShzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNldmVyaXR5IHR5cGUocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGV2ZW50IHN0YXR1cyhlcykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIHN0YXR1czogRXZlbnRTdGF0dXNDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGV2ZW50IHJ1bGUocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIHJ1bGU6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEZpbHRlciBldmVudHMgYWZ0ZXIgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzIG9yIHJlbGF0aXZlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciBuZWdhdGl2ZSBudW1iZXIpIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGV2ZW50cyBiZWZvcmUgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzIG9yIHJlbGF0aXZlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciBuZWdhdGl2ZSBudW1iZXIpIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIC8vIEZldGNoIHRoZSBuZXh0IHBhZ2Ugb2YgcmVzdWx0cyBhZnRlciB0aGUgb25lIHBvaW50aW5nIHRvIGJ5IHRoZSBzdXBwbGllZCBjdXJzb3IgXG4gICAgcHVibGljIGFmdGVyOiBzdHJpbmc7XG4gXG4gICAgLy8gTGltaXQgb2YgdGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIGN1cnNvci1iYXNlZCBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgbGltaXQ6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZ1tdLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29ySWQ/OiBzdHJpbmdbXSwgYXBwbGlhbmNlSWQ/OiBzdHJpbmcsIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBzdGF0dXM/OiBFdmVudFN0YXR1c0NvZGVbXSwgcnVsZT86IHN0cmluZ1tdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIsIGFmdGVyPzogc3RyaW5nLCBsaW1pdD86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLnN1YkZvbGRlcnMgPSBzdWJGb2xkZXJzO1xuICAgICAgICB0aGlzLnNlbnNvcklkID0gc2Vuc29ySWQ7XG4gICAgICAgIHRoaXMuYXBwbGlhbmNlSWQgPSBhcHBsaWFuY2VJZDtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGUgPSBiZWhhdmlvclR5cGU7XG4gICAgICAgIHRoaXMuc2V2ZXJpdHkgPSBzZXZlcml0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgICAgICB0aGlzLmFmdGVyID0gYWZ0ZXI7XG4gICAgICAgIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgICB9XG5cbn1cblxuXG4iXX0=