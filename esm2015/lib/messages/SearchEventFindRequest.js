/*
*/
export class SearchEventFindRequest {
    constructor(sessionId, sensorId, objectType, tolerance, from, to, sort, page, pageSize) {
        this.sessionId = sessionId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.tolerance = tolerance;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXZlbnRGaW5kUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvbWVzc2FnZXMvU2VhcmNoRXZlbnRGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0FBQ0YsTUFBTSxPQUFPLHNCQUFzQjtJQTZCL0IsWUFBWSxTQUFrQixFQUFFLFFBQW1CLEVBQUUsVUFBNkIsRUFBRSxTQUF5QixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN0TCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgTGV2ZWxUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0xldmVsVHlwZUNvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaEV2ZW50RmluZFJlcXVlc3Qge1xuIFxuICAgIC8vIFNlc3Npb24gSWQgXG4gICAgcHVibGljIHNlc3Npb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZW5zb3IgSWQocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgb2JqZWN0IHR5cGUocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIC0gbXVsdGlwbGUgdmFsdWVzIGVuYWJsZWQgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHRvbGVyYW5jZSBMT1cgfCBNRURJVU0gfCBISUdIIFxuICAgIHB1YmxpYyB0b2xlcmFuY2U6IExldmVsVHlwZUNvZGU7XG4gXG4gICAgLy8gRmlsdGVyIHNlYXJjaCBldmVudHMgYWZ0ZXIgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzIG9yIHJlbGF0aXZlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciBuZWdhdGl2ZSBudW1iZXIpIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIHNlYXJjaCBldmVudHMgYmVmb3JlIHRoZSBwcm92aWRlZCB0aW1lc3RhbXAgKGVwb2NoIG1pbGxpc2Vjb25kcyBvciByZWxhdGl2ZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgbmVnYXRpdmUgbnVtYmVyKSBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nW10sIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCB0b2xlcmFuY2U/OiBMZXZlbFR5cGVDb2RlLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuc2Vzc2lvbklkID0gc2Vzc2lvbklkO1xuICAgICAgICB0aGlzLnNlbnNvcklkID0gc2Vuc29ySWQ7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XG4gICAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=