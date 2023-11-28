/*
   List of filter criteria for conditional integration action
*/
export class IntegrationActionFilter {
    constructor(sensorIds, ruleIds, objectTypes, behaviorTypes, severity, subjectType, subjectStatus, subjectState) {
        this.sensorIds = sensorIds;
        this.ruleIds = ruleIds;
        this.objectTypes = objectTypes;
        this.behaviorTypes = behaviorTypes;
        this.severity = severity;
        this.subjectType = subjectType;
        this.subjectStatus = subjectStatus;
        this.subjectState = subjectState;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25BY3Rpb25GaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL0ludGVncmF0aW9uQWN0aW9uRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLHVCQUF1QjtJQTBCaEMsWUFBWSxTQUFvQixFQUFFLE9BQWtCLEVBQUUsV0FBOEIsRUFBRSxhQUFrQyxFQUFFLFFBQTJCLEVBQUUsV0FBNEIsRUFBRSxhQUFzQixFQUFFLFlBQXFCO1FBQzlOLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IEVudGl0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRW50aXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5cbi8qIFxuICAgTGlzdCBvZiBmaWx0ZXIgY3JpdGVyaWEgZm9yIGNvbmRpdGlvbmFsIGludGVncmF0aW9uIGFjdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25BY3Rpb25GaWx0ZXIge1xuIFxuICAgIC8vIEFjdGl2YXRlIGludGVncmF0aW9uIG9ubHkgaWYgdGhlIHNlbnNvciBpZCBpcyBpbiB0aGUgbGlzdCAoZW1wdHkgbGlzdCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBzZW5zb3JJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEFjdGl2YXRlIGludGVncmF0aW9uIG9ubHkgaWYgdGhlIHJ1bGUgaWQgaXMgaW4gdGhlIGxpc3QgKGVtcHR5IGxpc3QgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgcnVsZUlkczogc3RyaW5nW107XG4gXG4gICAgLy8gQWN0aXZhdGUgaW50ZWdyYXRpb24gb25seSBpZiB0aGUgb2JqZWN0IHR5cGUgY29kZSBpcyBpbiB0aGUgbGlzdCAoZW1wdHkgbGlzdCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlczogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBBY3RpdmF0ZSBpbnRlZ3JhdGlvbiBvbmx5IGlmIHRoZSBvYmplY3QgdHlwZSBjb2RlIGlzIGluIHRoZSBsaXN0IChlbXB0eSBsaXN0IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZXM6IEJlaGF2aW9yVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBBY3RpdmF0ZSBpbnRlZ3JhdGlvbiBvbmx5IGlmIHRoZSBldmVudCBzZXZlcml0eSBtYXRjaGluZyB0aGlzIHZhbHVlIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBBY3RpdmF0ZSBpbnRlZ3JhdGlvbiBvbmx5IGZvciBzcGVjaWZpYyBzdWJqZWN0IHR5cGU6IFNFTlNPUiB8IEFHRU5UIHwgQVBQTElBTkNFIChGb3IgaGVhbHRoIGV2ZW50IG9ubHkpIFxuICAgIHB1YmxpYyBzdWJqZWN0VHlwZTogRW50aXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gQWN0aXZhdGUgaW50ZWdyYXRpb24gb25seSBmb3Igc3BlY2lmaWMgc3ViamVjdCBzdGF0dXMgKEZvciBoZWFsdGggZXZlbnQgb25seSkgXG4gICAgcHVibGljIHN1YmplY3RTdGF0dXM6IG51bWJlcjtcbiBcbiAgICAvLyBBY3RpdmF0ZSBpbnRlZ3JhdGlvbiBvbmx5IGZvciBzcGVjaWZpYyBzdWJqZWN0IHN0YXR1cyAoRm9yIGhlYWx0aCBldmVudCBvbmx5KSBcbiAgICBwdWJsaWMgc3ViamVjdFN0YXRlOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3Ioc2Vuc29ySWRzPzogc3RyaW5nW10sIHJ1bGVJZHM/OiBzdHJpbmdbXSwgb2JqZWN0VHlwZXM/OiBPYmplY3RUeXBlQ29kZVtdLCBiZWhhdmlvclR5cGVzPzogQmVoYXZpb3JUeXBlQ29kZVtdLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGUsIHN1YmplY3RUeXBlPzogRW50aXR5VHlwZUNvZGUsIHN1YmplY3RTdGF0dXM/OiBudW1iZXIsIHN1YmplY3RTdGF0ZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5zZW5zb3JJZHMgPSBzZW5zb3JJZHM7XG4gICAgICAgIHRoaXMucnVsZUlkcyA9IHJ1bGVJZHM7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZXMgPSBvYmplY3RUeXBlcztcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGVzID0gYmVoYXZpb3JUeXBlcztcbiAgICAgICAgdGhpcy5zZXZlcml0eSA9IHNldmVyaXR5O1xuICAgICAgICB0aGlzLnN1YmplY3RUeXBlID0gc3ViamVjdFR5cGU7XG4gICAgICAgIHRoaXMuc3ViamVjdFN0YXR1cyA9IHN1YmplY3RTdGF0dXM7XG4gICAgICAgIHRoaXMuc3ViamVjdFN0YXRlID0gc3ViamVjdFN0YXRlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==