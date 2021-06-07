/*
   @WebSocketMessage
   Payload for events filter socket message
*/
export class SocketEventsFilterPayload {
    constructor(sensorIds, extSensorIds, ruleIds, extRuleIds, objectTypes, behaviorTypes) {
        this.sensorIds = sensorIds;
        this.extSensorIds = extSensorIds;
        this.ruleIds = ruleIds;
        this.extRuleIds = extRuleIds;
        this.objectTypes = objectTypes;
        this.behaviorTypes = behaviorTypes;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0RXZlbnRzRmlsdGVyUGF5bG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc29ja2V0cy9Tb2NrZXRFdmVudHNGaWx0ZXJQYXlsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOzs7RUFHRTtBQUNGLE1BQU0sT0FBTyx5QkFBeUI7SUFvQmxDLFlBQVksU0FBb0IsRUFBRSxZQUF1QixFQUFFLE9BQWtCLEVBQUUsVUFBcUIsRUFBRSxXQUE4QixFQUFFLGFBQWtDO1FBQ3BLLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuXG4vKiBcbiAgIEBXZWJTb2NrZXRNZXNzYWdlXG4gICBQYXlsb2FkIGZvciBldmVudHMgZmlsdGVyIHNvY2tldCBtZXNzYWdlIFxuKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXRFdmVudHNGaWx0ZXJQYXlsb2FkIHtcbiBcbiAgICAvLyBMaXN0IG9mIFNlbnNvciBJZHMgXG4gICAgcHVibGljIHNlbnNvcklkczogc3RyaW5nW107XG4gXG4gICAgLy8gTGlzdCBvZiBFeHRlcm5hbCBTZW5zb3IgSWRzIFxuICAgIHB1YmxpYyBleHRTZW5zb3JJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIExpc3Qgb2YgUnVsZSBJZHMgXG4gICAgcHVibGljIHJ1bGVJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIExpc3Qgb2YgRXh0ZXJuYWwgUnVsZSBJZHMgXG4gICAgcHVibGljIGV4dFJ1bGVJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIExpc3Qgb2Ygb2JqZWN0IHR5cGVzIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlczogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBMaXN0IG9mIGJlaGF2aW9yIChydWxlKSB0eXBlcyBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlczogQmVoYXZpb3JUeXBlQ29kZVtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKHNlbnNvcklkcz86IHN0cmluZ1tdLCBleHRTZW5zb3JJZHM/OiBzdHJpbmdbXSwgcnVsZUlkcz86IHN0cmluZ1tdLCBleHRSdWxlSWRzPzogc3RyaW5nW10sIG9iamVjdFR5cGVzPzogT2JqZWN0VHlwZUNvZGVbXSwgYmVoYXZpb3JUeXBlcz86IEJlaGF2aW9yVHlwZUNvZGVbXSkgeyBcbiAgICAgICAgdGhpcy5zZW5zb3JJZHMgPSBzZW5zb3JJZHM7XG4gICAgICAgIHRoaXMuZXh0U2Vuc29ySWRzID0gZXh0U2Vuc29ySWRzO1xuICAgICAgICB0aGlzLnJ1bGVJZHMgPSBydWxlSWRzO1xuICAgICAgICB0aGlzLmV4dFJ1bGVJZHMgPSBleHRSdWxlSWRzO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGVzID0gb2JqZWN0VHlwZXM7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlcyA9IGJlaGF2aW9yVHlwZXM7XG4gICAgfVxuXG59XG5cblxuIl19