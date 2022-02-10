/*
   Rule specification describe rule parameters
*/
export class RuleSpec {
    constructor(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, minSpeed, peopleInGroup, clusterDistance, intervalTime, referenceCrop, objectHierarchy, sensorTypes, externalModel, viewTypes, excludeObjectTypes) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9SdWxlU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxRQUFRO0lBK0NqQixZQUFZLFlBQStCLEVBQUUsWUFBcUIsRUFBRSxXQUE4QixFQUFFLGFBQXVCLEVBQUUsU0FBdUIsRUFBRSxRQUFzQixFQUFFLGFBQTJCLEVBQUUsZUFBNkIsRUFBRSxZQUEwQixFQUFFLGFBQXVCLEVBQUUsZUFBa0MsRUFBRSxXQUE4QixFQUFFLGFBQXNCLEVBQUUsU0FBMEIsRUFBRSxrQkFBcUM7UUFDeGIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO0lBQ2pELENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yVHlwZUNvZGUnO1xuaW1wb3J0IHsgVmlld1R5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVmlld1R5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgUnVsZURlZmF1bHQgfSBmcm9tICcuLi9jb21tb24vUnVsZURlZmF1bHQnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZU5vZGUgfSBmcm9tICcuLi9jb21tb24vT2JqZWN0VHlwZU5vZGUnO1xuXG4vKiBcbiAgIFJ1bGUgc3BlY2lmaWNhdGlvbiBkZXNjcmliZSBydWxlIHBhcmFtZXRlcnMgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVTcGVjIHtcbiBcbiAgICAvLyBCZWhhdmlvciB0eXBlcyBmb3IgdGhpcyBydWxlIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSB0eXBlIG5hbWUgXG4gICAgcHVibGljIHJ1bGVUeXBlTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gSXMgdGhpcyBydWxlIHJlcXVpcmVzIGxpbmUgZHJhd2luZyAodHJ1ZSkgb3IgYXJlYSBkcmF3aW5nIChmYWxzZSkgXG4gICAgcHVibGljIGlzTGluZURyYXdpbmc6IGJvb2xlYW47XG4gXG4gICAgLy8gRHdlbGwgVGltZSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBNaW4gU3BlZWQgZmlsdGVyIChtb3ZpbmcgaW4gYW4gYXJlYSwgbGluZSBjcm9zc2luZykgXG4gICAgcHVibGljIG1pblNwZWVkOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBOdW1iZXIgb2YgcGVvcGxlIEluIEdyb3VwIChmb3IgZ3JvdXBpbmcgYW5kIG9jY3VwYW5jeSBydWxlcykgXG4gICAgcHVibGljIHBlb3BsZUluR3JvdXA6IFJ1bGVEZWZhdWx0O1xuIFxuICAgIC8vIE1heCBkaXN0YW5jZSBiZXR3ZWVuIHBlb3BsZSB0byBiZSBjb25zaWRlcmVkIGFzIGdyb3VwIChmb3IgR3JvdXBpbmcgcnVsZSkgXG4gICAgcHVibGljIGNsdXN0ZXJEaXN0YW5jZTogUnVsZURlZmF1bHQ7XG4gXG4gICAgLy8gVGltZSBpbnRlcnZhbCBbc2Vjb25kc10gYmV0d2VlbiBzdGF0aXN0aWNzIHJlcG9ydHMgKGZvciBzdGF0aXN0aWNzIHJ1bGVzKSBcbiAgICBwdWJsaWMgaW50ZXJ2YWxUaW1lOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBJcyByZWZlcmVuY2UgY3JvcCByZXF1aXJlZCAoZm9yIEFzc2V0IFByb3RlY3Rpb24pIFxuICAgIHB1YmxpYyByZWZlcmVuY2VDcm9wOiBib29sZWFuO1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBvcmdhbml6ZWQgaW4gaGllcmFyY2h5IFxuICAgIHB1YmxpYyBvYmplY3RIaWVyYXJjaHk6IE9iamVjdFR5cGVOb2RlW107XG4gXG4gICAgLy8gTGltaXQgdGhpcyBydWxlIG9uIHNwZWNpZmljIHNlbnNvciB0eXBlcyBcbiAgICBwdWJsaWMgc2Vuc29yVHlwZXM6IFNlbnNvclR5cGVDb2RlW107XG4gXG4gICAgLy8gRXh0ZXJuYWwgbW9kZWwgSWQgdXNlZCBieSB0aGUgcnVsZSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIExpbWl0IHRoaXMgcnVsZSBvbiBzcGVjaWZpYyB2aWV3IHR5cGVzIFxuICAgIHB1YmxpYyB2aWV3VHlwZXM6IFZpZXdUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEV4Y2x1ZGVkIG9iamVjdCB0eXBlcyBmb3IgdGhpcyBydWxlIFxuICAgIHB1YmxpYyBleGNsdWRlT2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgY29uc3RydWN0b3IoYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgcnVsZVR5cGVOYW1lPzogc3RyaW5nLCBvYmplY3RUeXBlcz86IE9iamVjdFR5cGVDb2RlW10sIGlzTGluZURyYXdpbmc/OiBib29sZWFuLCBkd2VsbFRpbWU/OiBSdWxlRGVmYXVsdCwgbWluU3BlZWQ/OiBSdWxlRGVmYXVsdCwgcGVvcGxlSW5Hcm91cD86IFJ1bGVEZWZhdWx0LCBjbHVzdGVyRGlzdGFuY2U/OiBSdWxlRGVmYXVsdCwgaW50ZXJ2YWxUaW1lPzogUnVsZURlZmF1bHQsIHJlZmVyZW5jZUNyb3A/OiBib29sZWFuLCBvYmplY3RIaWVyYXJjaHk/OiBPYmplY3RUeXBlTm9kZVtdLCBzZW5zb3JUeXBlcz86IFNlbnNvclR5cGVDb2RlW10sIGV4dGVybmFsTW9kZWw/OiBzdHJpbmcsIHZpZXdUeXBlcz86IFZpZXdUeXBlQ29kZVtdLCBleGNsdWRlT2JqZWN0VHlwZXM/OiBPYmplY3RUeXBlQ29kZVtdKSB7IFxuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5ydWxlVHlwZU5hbWUgPSBydWxlVHlwZU5hbWU7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZXMgPSBvYmplY3RUeXBlcztcbiAgICAgICAgdGhpcy5pc0xpbmVEcmF3aW5nID0gaXNMaW5lRHJhd2luZztcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMubWluU3BlZWQgPSBtaW5TcGVlZDtcbiAgICAgICAgdGhpcy5wZW9wbGVJbkdyb3VwID0gcGVvcGxlSW5Hcm91cDtcbiAgICAgICAgdGhpcy5jbHVzdGVyRGlzdGFuY2UgPSBjbHVzdGVyRGlzdGFuY2U7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lID0gaW50ZXJ2YWxUaW1lO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZUNyb3AgPSByZWZlcmVuY2VDcm9wO1xuICAgICAgICB0aGlzLm9iamVjdEhpZXJhcmNoeSA9IG9iamVjdEhpZXJhcmNoeTtcbiAgICAgICAgdGhpcy5zZW5zb3JUeXBlcyA9IHNlbnNvclR5cGVzO1xuICAgICAgICB0aGlzLmV4dGVybmFsTW9kZWwgPSBleHRlcm5hbE1vZGVsO1xuICAgICAgICB0aGlzLnZpZXdUeXBlcyA9IHZpZXdUeXBlcztcbiAgICAgICAgdGhpcy5leGNsdWRlT2JqZWN0VHlwZXMgPSBleGNsdWRlT2JqZWN0VHlwZXM7XG4gICAgfVxuXG59XG5cblxuIl19