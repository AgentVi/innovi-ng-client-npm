/*
   Edge Event Info
*/
export class EdgeEventInfo {
    constructor(behaviorType, clipPeriod, description, eventBboxes, eventId, eventImageTime, eventObjects, eventTime, eventType, externalId, jpegBuffers, objectType, ruleId, sensorId, severity) {
        this.behaviorType = behaviorType;
        this.clipPeriod = clipPeriod;
        this.description = description;
        this.eventBboxes = eventBboxes;
        this.eventId = eventId;
        this.eventImageTime = eventImageTime;
        this.eventObjects = eventObjects;
        this.eventTime = eventTime;
        this.eventType = eventType;
        this.externalId = externalId;
        this.jpegBuffers = jpegBuffers;
        this.objectType = objectType;
        this.ruleId = ruleId;
        this.sensorId = sensorId;
        this.severity = severity;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRnZUV2ZW50SW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9FZGdlRXZlbnRJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGFBQWE7SUErQ3RCLFlBQVksWUFBK0IsRUFBRSxVQUFtQixFQUFFLFdBQW9CLEVBQUUsV0FBMkIsRUFBRSxPQUFnQixFQUFFLGNBQXVCLEVBQUUsWUFBZ0MsRUFBRSxTQUFrQixFQUFFLFNBQWtCLEVBQUUsVUFBbUIsRUFBRSxXQUE4QixFQUFFLFVBQTJCLEVBQUUsTUFBZSxFQUFFLFFBQWlCLEVBQUUsUUFBMkI7UUFDdlgsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRnZUV2ZW50SW1hZ2UgfSBmcm9tICcuLi9jb21tb24vRWRnZUV2ZW50SW1hZ2UnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJy4uL2NvbW1vbi9Cb3VuZGluZ0JveCc7XG5pbXBvcnQgeyBFZGdlRXZlbnRPYmplY3QgfSBmcm9tICcuLi9jb21tb24vRWRnZUV2ZW50T2JqZWN0JztcblxuLyogXG4gICBFZGdlIEV2ZW50IEluZm8gXG4qL1xuZXhwb3J0IGNsYXNzIEVkZ2VFdmVudEluZm8ge1xuIFxuICAgIC8vIERldGVjdGVkIGJlaGF2aW9yIHR5cGUgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBDbGlwIHBlcmlvZCB0aW1lIChOL0EpIFxuICAgIHB1YmxpYyBjbGlwUGVyaW9kOiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gKE4vQSkgXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQXJyYXkgb2YgZGV0ZWN0ZWQgb2JqZWN0J3MgYm91bmRpbmcgYm94ZXMgXG4gICAgcHVibGljIGV2ZW50QmJveGVzOiBCb3VuZGluZ0JveFtdO1xuIFxuICAgIC8vIEV2ZW50IHVuaXF1ZSBJZCBcbiAgICBwdWJsaWMgZXZlbnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudEltYWdlVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCBpbmZvcm1hdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRPYmplY3RzOiBFZGdlRXZlbnRPYmplY3RbXTtcbiBcbiAgICAvLyBXaGVuIHRoZSBldmVudCB3YXMgZGV0ZWN0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBFdmVudCB0eXBlIChOL0EpIFxuICAgIHB1YmxpYyBldmVudFR5cGU6IG51bWJlcjtcbiBcbiAgICAvLyBFeHRlcm5hbCBzZW5zb3IgSWQgXG4gICAgcHVibGljIGV4dGVybmFsSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBpbWFnZSBhcnJheSAoaW5jbHVkZSBhIHNpbmdsZSBpdGVtKSBcbiAgICBwdWJsaWMganBlZ0J1ZmZlcnM6IEVkZ2VFdmVudEltYWdlW107XG4gXG4gICAgLy8gT2JqZWN0IHR5cGUgKGNsYXNzKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSBJZCBcbiAgICBwdWJsaWMgcnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IHNldmVyaXR5IGxldmVsIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICBjb25zdHJ1Y3RvcihiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCBjbGlwUGVyaW9kPzogbnVtYmVyLCBkZXNjcmlwdGlvbj86IHN0cmluZywgZXZlbnRCYm94ZXM/OiBCb3VuZGluZ0JveFtdLCBldmVudElkPzogc3RyaW5nLCBldmVudEltYWdlVGltZT86IG51bWJlciwgZXZlbnRPYmplY3RzPzogRWRnZUV2ZW50T2JqZWN0W10sIGV2ZW50VGltZT86IG51bWJlciwgZXZlbnRUeXBlPzogbnVtYmVyLCBleHRlcm5hbElkPzogc3RyaW5nLCBqcGVnQnVmZmVycz86IEVkZ2VFdmVudEltYWdlW10sIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZSwgcnVsZUlkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZywgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlKSB7IFxuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5jbGlwUGVyaW9kID0gY2xpcFBlcmlvZDtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmV2ZW50QmJveGVzID0gZXZlbnRCYm94ZXM7XG4gICAgICAgIHRoaXMuZXZlbnRJZCA9IGV2ZW50SWQ7XG4gICAgICAgIHRoaXMuZXZlbnRJbWFnZVRpbWUgPSBldmVudEltYWdlVGltZTtcbiAgICAgICAgdGhpcy5ldmVudE9iamVjdHMgPSBldmVudE9iamVjdHM7XG4gICAgICAgIHRoaXMuZXZlbnRUaW1lID0gZXZlbnRUaW1lO1xuICAgICAgICB0aGlzLmV2ZW50VHlwZSA9IGV2ZW50VHlwZTtcbiAgICAgICAgdGhpcy5leHRlcm5hbElkID0gZXh0ZXJuYWxJZDtcbiAgICAgICAgdGhpcy5qcGVnQnVmZmVycyA9IGpwZWdCdWZmZXJzO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xuICAgICAgICB0aGlzLnJ1bGVJZCA9IHJ1bGVJZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLnNldmVyaXR5ID0gc2V2ZXJpdHk7XG4gICAgfVxuXG59XG5cblxuIl19