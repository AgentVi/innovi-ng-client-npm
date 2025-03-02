/*
   Rule specification describe rule parameters
*/
export class RuleSpec {
    constructor(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, minSpeed, peopleInGroup, clusterDistance, referenceCrop, objectHierarchy, sensorTypes, externalModel, viewTypes, excludeObjectTypes, autoSensitivity, sensitivity, existsInWatchlist) {
        this.behaviorType = behaviorType;
        this.ruleTypeName = ruleTypeName;
        this.objectTypes = objectTypes;
        this.isLineDrawing = isLineDrawing;
        this.dwellTime = dwellTime;
        this.minSpeed = minSpeed;
        this.peopleInGroup = peopleInGroup;
        this.clusterDistance = clusterDistance;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9SdWxlU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxRQUFRO0lBcURqQixZQUFZLFlBQStCLEVBQUUsWUFBcUIsRUFBRSxXQUE4QixFQUFFLGFBQXVCLEVBQUUsU0FBdUIsRUFBRSxRQUFzQixFQUFFLGFBQTJCLEVBQUUsZUFBNkIsRUFBRSxhQUF1QixFQUFFLGVBQWtDLEVBQUUsV0FBOEIsRUFBRSxhQUFzQixFQUFFLFNBQTBCLEVBQUUsa0JBQXFDLEVBQUUsZUFBMkMsRUFBRSxXQUFvQyxFQUFFLGlCQUE2QjtRQUM5Z0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlTm9kZSB9IGZyb20gJy4uL2NvbW1vbi9PYmplY3RUeXBlTm9kZSc7XG5pbXBvcnQgeyBTZW5zb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclR5cGVDb2RlJztcbmltcG9ydCB7IFZpZXdUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1ZpZXdUeXBlQ29kZSc7XG5pbXBvcnQgeyBSdWxlQXV0b1NlbnNpdGl2aXR5Q29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVBdXRvU2Vuc2l0aXZpdHlDb2RlJztcbmltcG9ydCB7IFJ1bGVEZWZhdWx0U2Vuc2l0aXZpdHkgfSBmcm9tICcuLi9jb21tb24vUnVsZURlZmF1bHRTZW5zaXRpdml0eSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IFJ1bGVEZWZhdWx0IH0gZnJvbSAnLi4vY29tbW9uL1J1bGVEZWZhdWx0JztcblxuLyogXG4gICBSdWxlIHNwZWNpZmljYXRpb24gZGVzY3JpYmUgcnVsZSBwYXJhbWV0ZXJzIFxuKi9cbmV4cG9ydCBjbGFzcyBSdWxlU3BlYyB7XG4gXG4gICAgLy8gQmVoYXZpb3IgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFJ1bGUgdHlwZSBuYW1lIFxuICAgIHB1YmxpYyBydWxlVHlwZU5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBdmFpbGFibGUgb2JqZWN0IHR5cGVzIGZvciB0aGlzIHJ1bGUgXG4gICAgcHVibGljIG9iamVjdFR5cGVzOiBPYmplY3RUeXBlQ29kZVtdO1xuIFxuICAgIC8vIElzIHRoaXMgcnVsZSByZXF1aXJlcyBsaW5lIGRyYXdpbmcgKHRydWUpIG9yIGFyZWEgZHJhd2luZyAoZmFsc2UpIFxuICAgIHB1YmxpYyBpc0xpbmVEcmF3aW5nOiBib29sZWFuO1xuIFxuICAgIC8vIER3ZWxsIFRpbWUgXG4gICAgcHVibGljIGR3ZWxsVGltZTogUnVsZURlZmF1bHQ7XG4gXG4gICAgLy8gTWluIFNwZWVkIGZpbHRlciAobW92aW5nIGluIGFuIGFyZWEsIGxpbmUgY3Jvc3NpbmcpIFxuICAgIHB1YmxpYyBtaW5TcGVlZDogUnVsZURlZmF1bHQ7XG4gXG4gICAgLy8gTnVtYmVyIG9mIHBlb3BsZSBJbiBHcm91cCAoZm9yIGdyb3VwaW5nIGFuZCBjcm93ZCBkZW5zaXR5IHJ1bGVzKSBcbiAgICBwdWJsaWMgcGVvcGxlSW5Hcm91cDogUnVsZURlZmF1bHQ7XG4gXG4gICAgLy8gTWF4IGRpc3RhbmNlIGJldHdlZW4gcGVvcGxlIHRvIGJlIGNvbnNpZGVyZWQgYXMgZ3JvdXAgKGZvciBHcm91cGluZyBydWxlKSBcbiAgICBwdWJsaWMgY2x1c3RlckRpc3RhbmNlOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBJcyByZWZlcmVuY2UgY3JvcCByZXF1aXJlZCAoZm9yIEFzc2V0IFByb3RlY3Rpb24pIFxuICAgIHB1YmxpYyByZWZlcmVuY2VDcm9wOiBib29sZWFuO1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBvcmdhbml6ZWQgaW4gaGllcmFyY2h5IFxuICAgIHB1YmxpYyBvYmplY3RIaWVyYXJjaHk6IE9iamVjdFR5cGVOb2RlW107XG4gXG4gICAgLy8gTGltaXQgdGhpcyBydWxlIG9uIHNwZWNpZmljIHNlbnNvciB0eXBlcyBcbiAgICBwdWJsaWMgc2Vuc29yVHlwZXM6IFNlbnNvclR5cGVDb2RlW107XG4gXG4gICAgLy8gRXh0ZXJuYWwgbW9kZWwgSWQgdXNlZCBieSB0aGUgcnVsZSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIExpbWl0IHRoaXMgcnVsZSBvbiBzcGVjaWZpYyB2aWV3IHR5cGVzIFxuICAgIHB1YmxpYyB2aWV3VHlwZXM6IFZpZXdUeXBlQ29kZVtdO1xuIFxuICAgIC8vIEV4Y2x1ZGVkIG9iamVjdCB0eXBlcyBmb3IgdGhpcyBydWxlIFxuICAgIHB1YmxpYyBleGNsdWRlT2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gUnVsZSdzIGF1dG8gc2Vuc2l0aXZpdHkgXG4gICAgcHVibGljIGF1dG9TZW5zaXRpdml0eTogUnVsZUF1dG9TZW5zaXRpdml0eUNvZGVbXTtcbiBcbiAgICAvLyBTZW5zaXRpdml0eSAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSwgZGVmaW5lcyB0aGUgZXhwZWN0ZWQgbnVtYmVyIG9mIGV2ZW50cyBwZXIgZGF5IFxuICAgIHB1YmxpYyBzZW5zaXRpdml0eTogUnVsZURlZmF1bHRTZW5zaXRpdml0eTtcbiBcbiAgICAvLyBVc2VkIGluIGNvbmp1Y3Rpb24gd2l0aCBXYXRjaExpc3RJZCB0byBpbmRpY2F0ZSBpZiB0aGlzIHJ1bGUgc2hvdWxkIHRyaWdnZXIgaWYgdGhlIG9iamVjdCBpcyBmb3VuZCBpbiB0aGUgd2F0Y2hsaXN0IG9yIG5vdC4gQWRkZWQgZm9yIE1IQSBcbiAgICBwdWJsaWMgZXhpc3RzSW5XYXRjaGxpc3Q6IGJvb2xlYW5bXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCBydWxlVHlwZU5hbWU/OiBzdHJpbmcsIG9iamVjdFR5cGVzPzogT2JqZWN0VHlwZUNvZGVbXSwgaXNMaW5lRHJhd2luZz86IGJvb2xlYW4sIGR3ZWxsVGltZT86IFJ1bGVEZWZhdWx0LCBtaW5TcGVlZD86IFJ1bGVEZWZhdWx0LCBwZW9wbGVJbkdyb3VwPzogUnVsZURlZmF1bHQsIGNsdXN0ZXJEaXN0YW5jZT86IFJ1bGVEZWZhdWx0LCByZWZlcmVuY2VDcm9wPzogYm9vbGVhbiwgb2JqZWN0SGllcmFyY2h5PzogT2JqZWN0VHlwZU5vZGVbXSwgc2Vuc29yVHlwZXM/OiBTZW5zb3JUeXBlQ29kZVtdLCBleHRlcm5hbE1vZGVsPzogc3RyaW5nLCB2aWV3VHlwZXM/OiBWaWV3VHlwZUNvZGVbXSwgZXhjbHVkZU9iamVjdFR5cGVzPzogT2JqZWN0VHlwZUNvZGVbXSwgYXV0b1NlbnNpdGl2aXR5PzogUnVsZUF1dG9TZW5zaXRpdml0eUNvZGVbXSwgc2Vuc2l0aXZpdHk/OiBSdWxlRGVmYXVsdFNlbnNpdGl2aXR5LCBleGlzdHNJbldhdGNobGlzdD86IGJvb2xlYW5bXSkgeyBcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGUgPSBiZWhhdmlvclR5cGU7XG4gICAgICAgIHRoaXMucnVsZVR5cGVOYW1lID0gcnVsZVR5cGVOYW1lO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGVzID0gb2JqZWN0VHlwZXM7XG4gICAgICAgIHRoaXMuaXNMaW5lRHJhd2luZyA9IGlzTGluZURyYXdpbmc7XG4gICAgICAgIHRoaXMuZHdlbGxUaW1lID0gZHdlbGxUaW1lO1xuICAgICAgICB0aGlzLm1pblNwZWVkID0gbWluU3BlZWQ7XG4gICAgICAgIHRoaXMucGVvcGxlSW5Hcm91cCA9IHBlb3BsZUluR3JvdXA7XG4gICAgICAgIHRoaXMuY2x1c3RlckRpc3RhbmNlID0gY2x1c3RlckRpc3RhbmNlO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZUNyb3AgPSByZWZlcmVuY2VDcm9wO1xuICAgICAgICB0aGlzLm9iamVjdEhpZXJhcmNoeSA9IG9iamVjdEhpZXJhcmNoeTtcbiAgICAgICAgdGhpcy5zZW5zb3JUeXBlcyA9IHNlbnNvclR5cGVzO1xuICAgICAgICB0aGlzLmV4dGVybmFsTW9kZWwgPSBleHRlcm5hbE1vZGVsO1xuICAgICAgICB0aGlzLnZpZXdUeXBlcyA9IHZpZXdUeXBlcztcbiAgICAgICAgdGhpcy5leGNsdWRlT2JqZWN0VHlwZXMgPSBleGNsdWRlT2JqZWN0VHlwZXM7XG4gICAgICAgIHRoaXMuYXV0b1NlbnNpdGl2aXR5ID0gYXV0b1NlbnNpdGl2aXR5O1xuICAgICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHk7XG4gICAgICAgIHRoaXMuZXhpc3RzSW5XYXRjaGxpc3QgPSBleGlzdHNJbldhdGNobGlzdDtcbiAgICB9XG5cbn1cblxuXG4iXX0=