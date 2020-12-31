/*
   FOV (Sensor Field of View) Geo attributes
*/
export class FovGeoAttributes {
    constructor(geoArea, visibleArea, transformType, coefficients, controlPoints) {
        this.geoArea = geoArea;
        this.visibleArea = visibleArea;
        this.transformType = transformType;
        this.coefficients = coefficients;
        this.controlPoints = controlPoints;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm92R2VvQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGdCQUFnQjtJQWlCekIsWUFBWSxPQUFzQixFQUFFLFdBQXVCLEVBQUUsYUFBc0MsRUFBRSxZQUF1QixFQUFFLGFBQWlDO1FBQzNKLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBEaW1lbnNpb24gfSBmcm9tICcuLi9jb21tb24vRGltZW5zaW9uJztcbmltcG9ydCB7IFRyYW5zZm9ybWF0aW9uVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9UcmFuc2Zvcm1hdGlvblR5cGVDb2RlJztcbmltcG9ydCB7IEdlb0NvbnRyb2xQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9HZW9Db250cm9sUG9pbnQnO1xuXG4vKiBcbiAgIEZPViAoU2Vuc29yIEZpZWxkIG9mIFZpZXcpIEdlbyBhdHRyaWJ1dGVzIFxuKi9cbmV4cG9ydCBjbGFzcyBGb3ZHZW9BdHRyaWJ1dGVzIHtcbiBcbiAgICAvLyBTZW5zb3IgRk9WIGdlbyBhcmVhIHBvbHlnb24gKHRoZSBib3VuZGluZyBwb2x5Z29uIG9mIHRoZSBhcmVhIGNvdmVyZWQgYnkgdGhlIEZPVikgXG4gICAgcHVibGljIGdlb0FyZWE6IENvb3JkaW5hdGVbXTtcbiBcbiAgICAvLyBUaGUgbm9ybWFsaXplZCAoMTAwMDAgeCAxMDAwMCkgdmlzaWJsZSBhcmVhIChyZWN0YW5nbGUpIGluIHRoZSBGT1YgXG4gICAgcHVibGljIHZpc2libGVBcmVhOiBEaW1lbnNpb247XG4gXG4gICAgLy8gR2VvIHJlZmVyZW5jaW5nIHRyYW5zZm9ybWF0aW9uIGFsZ29yaXRobSBcbiAgICBwdWJsaWMgdHJhbnNmb3JtVHlwZTogVHJhbnNmb3JtYXRpb25UeXBlQ29kZTtcbiBcbiAgICAvLyBDb2VmZmljaWVudCBtYXRyaXggZm9yIHRoZSBGT1YgLSBmb3IgOCBjb2VmZmljaWVudHMgcHJvamVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBpcyB1c2VkLCBmb3IgMTIgY29lZmZpY2llbnRzIHBvbHlub21pYWwgdHJhbnNmb3JtYXRpb24gaXMgdXNlZCBcbiAgICBwdWJsaWMgY29lZmZpY2llbnRzOiBudW1iZXJbXTtcbiBcbiAgICAvLyBNaW4gWCBheGlzIGluIHRoZSBmaWVsZC1vZi12aWV3IG9mIHRoZSBib3VuZGluZyBib3ggXG4gICAgcHVibGljIGNvbnRyb2xQb2ludHM6IEdlb0NvbnRyb2xQb2ludFtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGdlb0FyZWE/OiBDb29yZGluYXRlW10sIHZpc2libGVBcmVhPzogRGltZW5zaW9uLCB0cmFuc2Zvcm1UeXBlPzogVHJhbnNmb3JtYXRpb25UeXBlQ29kZSwgY29lZmZpY2llbnRzPzogbnVtYmVyW10sIGNvbnRyb2xQb2ludHM/OiBHZW9Db250cm9sUG9pbnRbXSkgeyBcbiAgICAgICAgdGhpcy5nZW9BcmVhID0gZ2VvQXJlYTtcbiAgICAgICAgdGhpcy52aXNpYmxlQXJlYSA9IHZpc2libGVBcmVhO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVR5cGUgPSB0cmFuc2Zvcm1UeXBlO1xuICAgICAgICB0aGlzLmNvZWZmaWNpZW50cyA9IGNvZWZmaWNpZW50cztcbiAgICAgICAgdGhpcy5jb250cm9sUG9pbnRzID0gY29udHJvbFBvaW50cztcbiAgICB9XG5cbn1cblxuXG4iXX0=