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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRnZUV2ZW50SW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvY29tbW9uL0VkZ2VFdmVudEluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7O0VBRUU7QUFDRixNQUFNLE9BQU8sYUFBYTtJQStDdEIsWUFBWSxZQUErQixFQUFFLFVBQW1CLEVBQUUsV0FBb0IsRUFBRSxXQUEyQixFQUFFLE9BQWdCLEVBQUUsY0FBdUIsRUFBRSxZQUFnQyxFQUFFLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxVQUFtQixFQUFFLFdBQThCLEVBQUUsVUFBMkIsRUFBRSxNQUFlLEVBQUUsUUFBaUIsRUFBRSxRQUEyQjtRQUN2WCxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJy4uL2NvbW1vbi9Cb3VuZGluZ0JveCc7XG5pbXBvcnQgeyBFZGdlRXZlbnRPYmplY3QgfSBmcm9tICcuLi9jb21tb24vRWRnZUV2ZW50T2JqZWN0JztcbmltcG9ydCB7IEVkZ2VFdmVudEltYWdlIH0gZnJvbSAnLi4vY29tbW9uL0VkZ2VFdmVudEltYWdlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuXG4vKiBcbiAgIEVkZ2UgRXZlbnQgSW5mbyBcbiovXG5leHBvcnQgY2xhc3MgRWRnZUV2ZW50SW5mbyB7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgYmVoYXZpb3IgdHlwZSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIENsaXAgcGVyaW9kIHRpbWUgKE4vQSkgXG4gICAgcHVibGljIGNsaXBQZXJpb2Q6IG51bWJlcjtcbiBcbiAgICAvLyBFdmVudCBkZXNjcmlwdGlvbiAoTi9BKSBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBBcnJheSBvZiBkZXRlY3RlZCBvYmplY3QncyBib3VuZGluZyBib3hlcyBcbiAgICBwdWJsaWMgZXZlbnRCYm94ZXM6IEJvdW5kaW5nQm94W107XG4gXG4gICAgLy8gRXZlbnQgdW5pcXVlIElkIFxuICAgIHB1YmxpYyBldmVudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGV2ZW50SW1hZ2VUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IGluZm9ybWF0aW9uIFxuICAgIHB1YmxpYyBldmVudE9iamVjdHM6IEVkZ2VFdmVudE9iamVjdFtdO1xuIFxuICAgIC8vIFdoZW4gdGhlIGV2ZW50IHdhcyBkZXRlY3RlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGV2ZW50VGltZTogbnVtYmVyO1xuIFxuICAgIC8vIEV2ZW50IHR5cGUgKE4vQSkgXG4gICAgcHVibGljIGV2ZW50VHlwZTogbnVtYmVyO1xuIFxuICAgIC8vIEV4dGVybmFsIHNlbnNvciBJZCBcbiAgICBwdWJsaWMgZXh0ZXJuYWxJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIGFycmF5IChpbmNsdWRlIGEgc2luZ2xlIGl0ZW0pIFxuICAgIHB1YmxpYyBqcGVnQnVmZmVyczogRWRnZUV2ZW50SW1hZ2VbXTtcbiBcbiAgICAvLyBPYmplY3QgdHlwZSAoY2xhc3MpIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZTtcbiBcbiAgICAvLyBSdWxlIElkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgc2V2ZXJpdHkgbGV2ZWwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIGNvbnN0cnVjdG9yKGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIGNsaXBQZXJpb2Q/OiBudW1iZXIsIGRlc2NyaXB0aW9uPzogc3RyaW5nLCBldmVudEJib3hlcz86IEJvdW5kaW5nQm94W10sIGV2ZW50SWQ/OiBzdHJpbmcsIGV2ZW50SW1hZ2VUaW1lPzogbnVtYmVyLCBldmVudE9iamVjdHM/OiBFZGdlRXZlbnRPYmplY3RbXSwgZXZlbnRUaW1lPzogbnVtYmVyLCBldmVudFR5cGU/OiBudW1iZXIsIGV4dGVybmFsSWQ/OiBzdHJpbmcsIGpwZWdCdWZmZXJzPzogRWRnZUV2ZW50SW1hZ2VbXSwgb2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb2RlLCBydWxlSWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGUpIHsgXG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlID0gYmVoYXZpb3JUeXBlO1xuICAgICAgICB0aGlzLmNsaXBQZXJpb2QgPSBjbGlwUGVyaW9kO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZXZlbnRCYm94ZXMgPSBldmVudEJib3hlcztcbiAgICAgICAgdGhpcy5ldmVudElkID0gZXZlbnRJZDtcbiAgICAgICAgdGhpcy5ldmVudEltYWdlVGltZSA9IGV2ZW50SW1hZ2VUaW1lO1xuICAgICAgICB0aGlzLmV2ZW50T2JqZWN0cyA9IGV2ZW50T2JqZWN0cztcbiAgICAgICAgdGhpcy5ldmVudFRpbWUgPSBldmVudFRpbWU7XG4gICAgICAgIHRoaXMuZXZlbnRUeXBlID0gZXZlbnRUeXBlO1xuICAgICAgICB0aGlzLmV4dGVybmFsSWQgPSBleHRlcm5hbElkO1xuICAgICAgICB0aGlzLmpwZWdCdWZmZXJzID0ganBlZ0J1ZmZlcnM7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XG4gICAgICAgIHRoaXMucnVsZUlkID0gcnVsZUlkO1xuICAgICAgICB0aGlzLnNlbnNvcklkID0gc2Vuc29ySWQ7XG4gICAgICAgIHRoaXMuc2V2ZXJpdHkgPSBzZXZlcml0eTtcbiAgICB9XG5cbn1cblxuXG4iXX0=