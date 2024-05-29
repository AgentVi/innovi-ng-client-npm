/*
   Rule specification describe rule parameters
*/
export class RuleSpec {
    constructor(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, minSpeed, peopleInGroup, clusterDistance, intervalTime, referenceCrop, objectHierarchy, sensorTypes, externalModel, viewTypes, excludeObjectTypes, autoSensitivity, sensitivity, existsInWatchlist) {
        this.behaviorType = behaviorType;
        this.ruleTypeName = ruleTypeName;
        this.objectTypes = objectTypes;
        this.isLineDrawing = isLineDrawing;
        this.dwellTime = dwellTime;
        this.minSpeed = minSpeed;
        this.peopleInGroup = peopleInGroup;
        this.clusterDistance = clusterDistance;
        this.intervalTime = intervalTime;
        this.referenceCrop = referenceCrop;
        this.objectHierarchy = objectHierarchy;
        this.sensorTypes = sensorTypes;
        this.externalModel = externalModel;
        this.viewTypes = viewTypes;
        this.excludeObjectTypes = excludeObjectTypes;
        this.autoSensitivity = autoSensitivity;
        this.sensitivity = sensitivity;
        this.existsInWatchlist = existsInWatchlist;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9SdWxlU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxRQUFRO0lBd0RqQixZQUFZLFlBQStCLEVBQUUsWUFBcUIsRUFBRSxXQUE4QixFQUFFLGFBQXVCLEVBQUUsU0FBdUIsRUFBRSxRQUFzQixFQUFFLGFBQTJCLEVBQUUsZUFBNkIsRUFBRSxZQUEwQixFQUFFLGFBQXVCLEVBQUUsZUFBa0MsRUFBRSxXQUE4QixFQUFFLGFBQXNCLEVBQUUsU0FBMEIsRUFBRSxrQkFBcUMsRUFBRSxlQUEyQyxFQUFFLFdBQW9DLEVBQUUsaUJBQTZCO1FBQzFpQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQy9DLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yVHlwZUNvZGUnO1xuaW1wb3J0IHsgVmlld1R5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVmlld1R5cGVDb2RlJztcbmltcG9ydCB7IFJ1bGVBdXRvU2Vuc2l0aXZpdHlDb2RlIH0gZnJvbSAnLi4vZW51bXMvUnVsZUF1dG9TZW5zaXRpdml0eUNvZGUnO1xuaW1wb3J0IHsgUnVsZURlZmF1bHRTZW5zaXRpdml0eSB9IGZyb20gJy4uL2NvbW1vbi9SdWxlRGVmYXVsdFNlbnNpdGl2aXR5JztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgUnVsZURlZmF1bHQgfSBmcm9tICcuLi9jb21tb24vUnVsZURlZmF1bHQnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZU5vZGUgfSBmcm9tICcuLi9jb21tb24vT2JqZWN0VHlwZU5vZGUnO1xuXG4vKiBcbiAgIFJ1bGUgc3BlY2lmaWNhdGlvbiBkZXNjcmliZSBydWxlIHBhcmFtZXRlcnMgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVTcGVjIHtcbiBcbiAgICAvLyBCZWhhdmlvciB0eXBlcyBmb3IgdGhpcyBydWxlIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSB0eXBlIG5hbWUgXG4gICAgcHVibGljIHJ1bGVUeXBlTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gSXMgdGhpcyBydWxlIHJlcXVpcmVzIGxpbmUgZHJhd2luZyAodHJ1ZSkgb3IgYXJlYSBkcmF3aW5nIChmYWxzZSkgXG4gICAgcHVibGljIGlzTGluZURyYXdpbmc6IGJvb2xlYW47XG4gXG4gICAgLy8gRHdlbGwgVGltZSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBNaW4gU3BlZWQgZmlsdGVyIChtb3ZpbmcgaW4gYW4gYXJlYSwgbGluZSBjcm9zc2luZykgXG4gICAgcHVibGljIG1pblNwZWVkOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBOdW1iZXIgb2YgcGVvcGxlIEluIEdyb3VwIChmb3IgZ3JvdXBpbmcgYW5kIGNyb3dkIGRlbnNpdHkgcnVsZXMpIFxuICAgIHB1YmxpYyBwZW9wbGVJbkdyb3VwOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBNYXggZGlzdGFuY2UgYmV0d2VlbiBwZW9wbGUgdG8gYmUgY29uc2lkZXJlZCBhcyBncm91cCAoZm9yIEdyb3VwaW5nIHJ1bGUpIFxuICAgIHB1YmxpYyBjbHVzdGVyRGlzdGFuY2U6IFJ1bGVEZWZhdWx0O1xuIFxuICAgIC8vIFRpbWUgaW50ZXJ2YWwgW3NlY29uZHNdIGJldHdlZW4gc3RhdGlzdGljcyByZXBvcnRzIChmb3Igc3RhdGlzdGljcyBydWxlcykgXG4gICAgcHVibGljIGludGVydmFsVGltZTogUnVsZURlZmF1bHQ7XG4gXG4gICAgLy8gSXMgcmVmZXJlbmNlIGNyb3AgcmVxdWlyZWQgKGZvciBBc3NldCBQcm90ZWN0aW9uKSBcbiAgICBwdWJsaWMgcmVmZXJlbmNlQ3JvcDogYm9vbGVhbjtcbiBcbiAgICAvLyBBdmFpbGFibGUgb2JqZWN0IHR5cGVzIGZvciB0aGlzIHJ1bGUgb3JnYW5pemVkIGluIGhpZXJhcmNoeSBcbiAgICBwdWJsaWMgb2JqZWN0SGllcmFyY2h5OiBPYmplY3RUeXBlTm9kZVtdO1xuIFxuICAgIC8vIExpbWl0IHRoaXMgcnVsZSBvbiBzcGVjaWZpYyBzZW5zb3IgdHlwZXMgXG4gICAgcHVibGljIHNlbnNvclR5cGVzOiBTZW5zb3JUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEV4dGVybmFsIG1vZGVsIElkIHVzZWQgYnkgdGhlIHJ1bGUgXG4gICAgcHVibGljIGV4dGVybmFsTW9kZWw6IHN0cmluZztcbiBcbiAgICAvLyBMaW1pdCB0aGlzIHJ1bGUgb24gc3BlY2lmaWMgdmlldyB0eXBlcyBcbiAgICBwdWJsaWMgdmlld1R5cGVzOiBWaWV3VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBFeGNsdWRlZCBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgZXhjbHVkZU9iamVjdFR5cGVzOiBPYmplY3RUeXBlQ29kZVtdO1xuIFxuICAgIC8vIFJ1bGUncyBhdXRvIHNlbnNpdGl2aXR5IFxuICAgIHB1YmxpYyBhdXRvU2Vuc2l0aXZpdHk6IFJ1bGVBdXRvU2Vuc2l0aXZpdHlDb2RlW107XG4gXG4gICAgLy8gU2Vuc2l0aXZpdHkgKGZvciBBbm9tYWx5IHJ1bGUgb25seSksIGRlZmluZXMgdGhlIGV4cGVjdGVkIG51bWJlciBvZiBldmVudHMgcGVyIGRheSBcbiAgICBwdWJsaWMgc2Vuc2l0aXZpdHk6IFJ1bGVEZWZhdWx0U2Vuc2l0aXZpdHk7XG4gXG4gICAgLy8gVXNlZCBpbiBjb25qdWN0aW9uIHdpdGggV2F0Y2hMaXN0SWQgdG8gaW5kaWNhdGUgaWYgdGhpcyBydWxlIHNob3VsZCB0cmlnZ2VyIGlmIHRoZSBvYmplY3QgaXMgZm91bmQgaW4gdGhlIHdhdGNobGlzdCBvciBub3QuIEFkZGVkIGZvciBNSEEgXG4gICAgcHVibGljIGV4aXN0c0luV2F0Y2hsaXN0OiBib29sZWFuW107XG4gXG4gICAgY29uc3RydWN0b3IoYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgcnVsZVR5cGVOYW1lPzogc3RyaW5nLCBvYmplY3RUeXBlcz86IE9iamVjdFR5cGVDb2RlW10sIGlzTGluZURyYXdpbmc/OiBib29sZWFuLCBkd2VsbFRpbWU/OiBSdWxlRGVmYXVsdCwgbWluU3BlZWQ/OiBSdWxlRGVmYXVsdCwgcGVvcGxlSW5Hcm91cD86IFJ1bGVEZWZhdWx0LCBjbHVzdGVyRGlzdGFuY2U/OiBSdWxlRGVmYXVsdCwgaW50ZXJ2YWxUaW1lPzogUnVsZURlZmF1bHQsIHJlZmVyZW5jZUNyb3A/OiBib29sZWFuLCBvYmplY3RIaWVyYXJjaHk/OiBPYmplY3RUeXBlTm9kZVtdLCBzZW5zb3JUeXBlcz86IFNlbnNvclR5cGVDb2RlW10sIGV4dGVybmFsTW9kZWw/OiBzdHJpbmcsIHZpZXdUeXBlcz86IFZpZXdUeXBlQ29kZVtdLCBleGNsdWRlT2JqZWN0VHlwZXM/OiBPYmplY3RUeXBlQ29kZVtdLCBhdXRvU2Vuc2l0aXZpdHk/OiBSdWxlQXV0b1NlbnNpdGl2aXR5Q29kZVtdLCBzZW5zaXRpdml0eT86IFJ1bGVEZWZhdWx0U2Vuc2l0aXZpdHksIGV4aXN0c0luV2F0Y2hsaXN0PzogYm9vbGVhbltdKSB7IFxuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5ydWxlVHlwZU5hbWUgPSBydWxlVHlwZU5hbWU7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZXMgPSBvYmplY3RUeXBlcztcbiAgICAgICAgdGhpcy5pc0xpbmVEcmF3aW5nID0gaXNMaW5lRHJhd2luZztcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMubWluU3BlZWQgPSBtaW5TcGVlZDtcbiAgICAgICAgdGhpcy5wZW9wbGVJbkdyb3VwID0gcGVvcGxlSW5Hcm91cDtcbiAgICAgICAgdGhpcy5jbHVzdGVyRGlzdGFuY2UgPSBjbHVzdGVyRGlzdGFuY2U7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lID0gaW50ZXJ2YWxUaW1lO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZUNyb3AgPSByZWZlcmVuY2VDcm9wO1xuICAgICAgICB0aGlzLm9iamVjdEhpZXJhcmNoeSA9IG9iamVjdEhpZXJhcmNoeTtcbiAgICAgICAgdGhpcy5zZW5zb3JUeXBlcyA9IHNlbnNvclR5cGVzO1xuICAgICAgICB0aGlzLmV4dGVybmFsTW9kZWwgPSBleHRlcm5hbE1vZGVsO1xuICAgICAgICB0aGlzLnZpZXdUeXBlcyA9IHZpZXdUeXBlcztcbiAgICAgICAgdGhpcy5leGNsdWRlT2JqZWN0VHlwZXMgPSBleGNsdWRlT2JqZWN0VHlwZXM7XG4gICAgICAgIHRoaXMuYXV0b1NlbnNpdGl2aXR5ID0gYXV0b1NlbnNpdGl2aXR5O1xuICAgICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHk7XG4gICAgICAgIHRoaXMuZXhpc3RzSW5XYXRjaGxpc3QgPSBleGlzdHNJbldhdGNobGlzdDtcbiAgICB9XG5cbn1cblxuXG4iXX0=