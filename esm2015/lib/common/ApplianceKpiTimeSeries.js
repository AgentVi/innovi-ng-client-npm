/*
   Appliance KPIs list over time (CPU, RAM, LOAD)
*/
export class ApplianceKpiTimeSeries {
    constructor(label, interval, data) {
        this.label = label;
        this.interval = interval;
        this.data = data;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlS3BpVGltZVNlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0FwcGxpYW5jZUtwaVRpbWVTZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBRUU7QUFDRixNQUFNLE9BQU8sc0JBQXNCO0lBVy9CLFlBQVksS0FBYyxFQUFFLFFBQXVCLEVBQUUsSUFBZ0M7UUFDakYsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGlhbmNlS3BpVGltZXN0YW1wZWQgfSBmcm9tICcuLi9jb21tb24vQXBwbGlhbmNlS3BpVGltZXN0YW1wZWQnO1xuaW1wb3J0IHsgVGltZVVuaXRDb2RlIH0gZnJvbSAnLi4vZW51bXMvVGltZVVuaXRDb2RlJztcblxuLyogXG4gICBBcHBsaWFuY2UgS1BJcyBsaXN0IG92ZXIgdGltZSAoQ1BVLCBSQU0sIExPQUQpIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VLcGlUaW1lU2VyaWVzIHtcbiBcbiAgICAvLyBUaW1lIHNlcmllcyBsYWJlbCAob3B0aW9uYWwpIFxuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuIFxuICAgIC8vIFNlcmllcyB0aWNrIGludGVydmFsICgxOiBTZWNvbmQsIDI6IE1pbnV0ZSwgMzogSG91ciwgNDogRGF5LCA1OiBXZWVrLCA2OiBNb250aCkgXG4gICAgcHVibGljIGludGVydmFsOiBUaW1lVW5pdENvZGU7XG4gXG4gICAgLy8gVGltZSBzZXJpZXMgcmVwcmVzZW50aW5nIHRoZSBLUElzIHBlciB0aW1lc3RhbXAgXG4gICAgcHVibGljIGRhdGE6IEFwcGxpYW5jZUtwaVRpbWVzdGFtcGVkW107XG4gXG4gICAgY29uc3RydWN0b3IobGFiZWw/OiBzdHJpbmcsIGludGVydmFsPzogVGltZVVuaXRDb2RlLCBkYXRhPzogQXBwbGlhbmNlS3BpVGltZXN0YW1wZWRbXSkgeyBcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG59XG5cblxuIl19