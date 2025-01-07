/*
   @WebSocketMessage
   Payload for events filter socket message
*/
export class SocketEventsFilterPayload {
    constructor(sensorIds, extSensorIds, ruleIds, extRuleIds, objectTypes, behaviorTypes, severityTypes, eventStatusCodes) {
        this.sensorIds = sensorIds;
        this.extSensorIds = extSensorIds;
        this.ruleIds = ruleIds;
        this.extRuleIds = extRuleIds;
        this.objectTypes = objectTypes;
        this.behaviorTypes = behaviorTypes;
        this.severityTypes = severityTypes;
        this.eventStatusCodes = eventStatusCodes;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0RXZlbnRzRmlsdGVyUGF5bG9hZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvc29ja2V0cy9Tb2NrZXRFdmVudHNGaWx0ZXJQYXlsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7RUFHRTtBQUNGLE1BQU0sT0FBTyx5QkFBeUI7SUEwQmxDLFlBQVksU0FBb0IsRUFBRSxZQUF1QixFQUFFLE9BQWtCLEVBQUUsVUFBcUIsRUFBRSxXQUE4QixFQUFFLGFBQWtDLEVBQUUsYUFBa0MsRUFBRSxnQkFBb0M7UUFDOU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQzdDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcblxuLyogXG4gICBAV2ViU29ja2V0TWVzc2FnZVxuICAgUGF5bG9hZCBmb3IgZXZlbnRzIGZpbHRlciBzb2NrZXQgbWVzc2FnZSBcbiovXG5leHBvcnQgY2xhc3MgU29ja2V0RXZlbnRzRmlsdGVyUGF5bG9hZCB7XG4gXG4gICAgLy8gTGlzdCBvZiBTZW5zb3IgSWRzIFxuICAgIHB1YmxpYyBzZW5zb3JJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIExpc3Qgb2YgRXh0ZXJuYWwgU2Vuc29yIElkcyBcbiAgICBwdWJsaWMgZXh0U2Vuc29ySWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBMaXN0IG9mIFJ1bGUgSWRzIFxuICAgIHB1YmxpYyBydWxlSWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBMaXN0IG9mIEV4dGVybmFsIFJ1bGUgSWRzIFxuICAgIHB1YmxpYyBleHRSdWxlSWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBMaXN0IG9mIG9iamVjdCB0eXBlcyBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gTGlzdCBvZiBiZWhhdmlvciAocnVsZSkgdHlwZXMgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZXM6IEJlaGF2aW9yVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBMaXN0IG9mIHNldmVyaXR5IHR5cGVzIFxuICAgIHB1YmxpYyBzZXZlcml0eVR5cGVzOiBTZXZlcml0eVR5cGVDb2RlW107XG4gXG4gICAgLy8gTGlzdCBvZiBldmVudCBzdGF0dXMgY29kZXMgXG4gICAgcHVibGljIGV2ZW50U3RhdHVzQ29kZXM6IEV2ZW50U3RhdHVzQ29kZVtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKHNlbnNvcklkcz86IHN0cmluZ1tdLCBleHRTZW5zb3JJZHM/OiBzdHJpbmdbXSwgcnVsZUlkcz86IHN0cmluZ1tdLCBleHRSdWxlSWRzPzogc3RyaW5nW10sIG9iamVjdFR5cGVzPzogT2JqZWN0VHlwZUNvZGVbXSwgYmVoYXZpb3JUeXBlcz86IEJlaGF2aW9yVHlwZUNvZGVbXSwgc2V2ZXJpdHlUeXBlcz86IFNldmVyaXR5VHlwZUNvZGVbXSwgZXZlbnRTdGF0dXNDb2Rlcz86IEV2ZW50U3RhdHVzQ29kZVtdKSB7IFxuICAgICAgICB0aGlzLnNlbnNvcklkcyA9IHNlbnNvcklkcztcbiAgICAgICAgdGhpcy5leHRTZW5zb3JJZHMgPSBleHRTZW5zb3JJZHM7XG4gICAgICAgIHRoaXMucnVsZUlkcyA9IHJ1bGVJZHM7XG4gICAgICAgIHRoaXMuZXh0UnVsZUlkcyA9IGV4dFJ1bGVJZHM7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZXMgPSBvYmplY3RUeXBlcztcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGVzID0gYmVoYXZpb3JUeXBlcztcbiAgICAgICAgdGhpcy5zZXZlcml0eVR5cGVzID0gc2V2ZXJpdHlUeXBlcztcbiAgICAgICAgdGhpcy5ldmVudFN0YXR1c0NvZGVzID0gZXZlbnRTdGF0dXNDb2RlcztcbiAgICB9XG5cbn1cblxuXG4iXX0=