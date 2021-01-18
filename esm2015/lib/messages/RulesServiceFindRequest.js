/*
*/
export class RulesServiceFindRequest {
    constructor(folderId, physical, sensorId, search, behaviorType, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.physical = physical;
        this.sensorId = sensorId;
        this.search = search;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZXNTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1J1bGVzU2VydmljZUZpbmRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0U7QUFDRixNQUFNLE9BQU8sdUJBQXVCO0lBNkJoQyxZQUFZLFFBQWlCLEVBQUUsUUFBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxZQUFpQyxFQUFFLFFBQTZCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUNwTSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgUnVsZXNTZXJ2aWNlRmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIElmIHRydWUsIHRoZSBzZWFyY2ggaXMgcGVyZm9ybWVkIG9uIHRoZSBwaHlzaWNhbCBoaWVyYXJjaHkgLSBzZWFyY2ggcnVsZXMgb2Ygc2Vuc29ycyBieSBkZXZpY2VzIGFuZCBub3QgYnkgZm9sZGVycyBcbiAgICBwdWJsaWMgcGh5c2ljYWw6IGJvb2xlYW47XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgZGVzY3JpcHRpb24gb3IgZXh0ZXJuYWwgaWQgb3IgcGFydGlhbCAodXNpbmcgKiB3aWxkY2FyZCkgXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBiZWhhdmlvciB0eXBlKHMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSAtIG11bHRpcGxlIHZhbHVlcyBlbmFibGVkIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2V2ZXJpdHkoaWVzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihmb2xkZXJJZD86IHN0cmluZywgcGh5c2ljYWw/OiBib29sZWFuLCBzZW5zb3JJZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLnBoeXNpY2FsID0gcGh5c2ljYWw7XG4gICAgICAgIHRoaXMuc2Vuc29ySWQgPSBzZW5zb3JJZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlID0gYmVoYXZpb3JUeXBlO1xuICAgICAgICB0aGlzLnNldmVyaXR5ID0gc2V2ZXJpdHk7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=