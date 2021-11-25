/*
*/
export class SearchServiceSimilarRequest {
    constructor(objectId, sensorId, timestamp, from, to, similarity) {
        this.objectId = objectId;
        this.sensorId = sensorId;
        this.timestamp = timestamp;
        this.from = from;
        this.to = to;
        this.similarity = similarity;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoU2VydmljZVNpbWlsYXJSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9tZXNzYWdlcy9TZWFyY2hTZXJ2aWNlU2ltaWxhclJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtBQUNGLE1BQU0sT0FBTywyQkFBMkI7SUFvQnBDLFlBQVksUUFBaUIsRUFBRSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxVQUEwQjtRQUN4SCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExldmVsVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9MZXZlbFR5cGVDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hTZXJ2aWNlU2ltaWxhclJlcXVlc3Qge1xuIFxuICAgIC8vIE9iamVjdCBJZCB0byBsb29rIGZvciBzaW1pbGFyIG9iamVjdHMgXG4gICAgcHVibGljIG9iamVjdElkOiBudW1iZXI7XG4gXG4gICAgLy8gU2Vuc29yIElkIHdoZXJlIHRoZSBvYmplY3Qgd2FzIGRldGVjdGVkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIFRpbWVzdGFtcCB3aGVuIHRoZSBvYmplY3Qgd2FzIGRldGVjdGVkIFxuICAgIHB1YmxpYyB0aW1lc3RhbXA6IG51bWJlcjtcbiBcbiAgICAvLyBTZWFyY2ggdGltZSBzY29wZSBzdGFydCB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIFNlYXJjaCB0aW1lIHNjb3BlIGVuZCB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBMZXZlbCBvZiBzaW1pbGFyaXR5IHRvbGVyYW5jZSAoTE9XIHwgTUVESVVNIHwgSElHSCkgXG4gICAgcHVibGljIHNpbWlsYXJpdHk6IExldmVsVHlwZUNvZGU7XG4gXG4gICAgY29uc3RydWN0b3Iob2JqZWN0SWQ/OiBudW1iZXIsIHNlbnNvcklkPzogc3RyaW5nLCB0aW1lc3RhbXA/OiBudW1iZXIsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzaW1pbGFyaXR5PzogTGV2ZWxUeXBlQ29kZSkgeyBcbiAgICAgICAgdGhpcy5vYmplY3RJZCA9IG9iamVjdElkO1xuICAgICAgICB0aGlzLnNlbnNvcklkID0gc2Vuc29ySWQ7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuc2ltaWxhcml0eSA9IHNpbWlsYXJpdHk7XG4gICAgfVxuXG59XG5cblxuIl19