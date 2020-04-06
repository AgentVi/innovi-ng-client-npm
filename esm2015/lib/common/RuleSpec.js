/*
   Rule specification describe rule parameters
*/
export class RuleSpec {
    constructor(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, peopleInGroup, clusterDistance, objectHierarchy) {
        this.behaviorType = behaviorType;
        this.ruleTypeName = ruleTypeName;
        this.objectTypes = objectTypes;
        this.isLineDrawing = isLineDrawing;
        this.dwellTime = dwellTime;
        this.peopleInGroup = peopleInGroup;
        this.clusterDistance = clusterDistance;
        this.objectHierarchy = objectHierarchy;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVNwZWMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vUnVsZVNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7O0VBRUU7QUFDRixNQUFNLE9BQU8sUUFBUTtJQTBCakIsWUFBWSxZQUErQixFQUFFLFlBQXFCLEVBQUUsV0FBOEIsRUFBRSxhQUF1QixFQUFFLFNBQXVCLEVBQUUsYUFBMkIsRUFBRSxlQUE2QixFQUFFLGVBQWtDO1FBQ2hQLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0lBQzNDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJ1bGVEZWZhdWx0IH0gZnJvbSAnLi4vY29tbW9uL1J1bGVEZWZhdWx0JztcbmltcG9ydCB7IE9iamVjdFR5cGVOb2RlIH0gZnJvbSAnLi4vY29tbW9uL09iamVjdFR5cGVOb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuXG4vKiBcbiAgIFJ1bGUgc3BlY2lmaWNhdGlvbiBkZXNjcmliZSBydWxlIHBhcmFtZXRlcnMgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVTcGVjIHtcbiBcbiAgICAvLyBCZWhhdmlvciB0eXBlcyBmb3IgdGhpcyBydWxlIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSB0eXBlIG5hbWUgXG4gICAgcHVibGljIHJ1bGVUeXBlTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEF2YWlsYWJsZSBvYmplY3QgdHlwZXMgZm9yIHRoaXMgcnVsZSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gSXMgdGhpcyBydWxlIHJlcXVpcmVzIGxpbmUgZHJhd2luZyAodHJ1ZSkgb3IgYXJlYSBkcmF3aW5nIChmYWxzZSkgXG4gICAgcHVibGljIGlzTGluZURyYXdpbmc6IGJvb2xlYW47XG4gXG4gICAgLy8gRHdlbGwgVGltZSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBSdWxlRGVmYXVsdDtcbiBcbiAgICAvLyBOdW1iZXIgb2YgcGVvcGxlIEluIEdyb3VwIChmb3IgZ3JvdXBpbmcgYW5kIG9jY3VwYW5jeSBydWxlcykgXG4gICAgcHVibGljIHBlb3BsZUluR3JvdXA6IFJ1bGVEZWZhdWx0O1xuIFxuICAgIC8vIE1heCBkaXN0YW5jZSBiZXR3ZWVuIHBlb3BsZSB0byBiZSBjb25zaWRlcmVkIGFzIGdyb3VwIChmb3IgR3JvdXBpbmcgcnVsZSkgXG4gICAgcHVibGljIGNsdXN0ZXJEaXN0YW5jZTogUnVsZURlZmF1bHQ7XG4gXG4gICAgLy8gQXZhaWxhYmxlIG9iamVjdCB0eXBlcyBmb3IgdGhpcyBydWxlIG9yZ2FuaXplZCBpbiBoaWVyYXJjaHkgXG4gICAgcHVibGljIG9iamVjdEhpZXJhcmNoeTogT2JqZWN0VHlwZU5vZGVbXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCBydWxlVHlwZU5hbWU/OiBzdHJpbmcsIG9iamVjdFR5cGVzPzogT2JqZWN0VHlwZUNvZGVbXSwgaXNMaW5lRHJhd2luZz86IGJvb2xlYW4sIGR3ZWxsVGltZT86IFJ1bGVEZWZhdWx0LCBwZW9wbGVJbkdyb3VwPzogUnVsZURlZmF1bHQsIGNsdXN0ZXJEaXN0YW5jZT86IFJ1bGVEZWZhdWx0LCBvYmplY3RIaWVyYXJjaHk/OiBPYmplY3RUeXBlTm9kZVtdKSB7IFxuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5ydWxlVHlwZU5hbWUgPSBydWxlVHlwZU5hbWU7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZXMgPSBvYmplY3RUeXBlcztcbiAgICAgICAgdGhpcy5pc0xpbmVEcmF3aW5nID0gaXNMaW5lRHJhd2luZztcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMucGVvcGxlSW5Hcm91cCA9IHBlb3BsZUluR3JvdXA7XG4gICAgICAgIHRoaXMuY2x1c3RlckRpc3RhbmNlID0gY2x1c3RlckRpc3RhbmNlO1xuICAgICAgICB0aGlzLm9iamVjdEhpZXJhcmNoeSA9IG9iamVjdEhpZXJhcmNoeTtcbiAgICB9XG5cbn1cblxuXG4iXX0=