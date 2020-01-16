/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   FOV (Sensor Field of View) Geo attributes
*/
export class FovGeoAttributes {
    /**
     * @param {?=} geoArea
     * @param {?=} visibleArea
     * @param {?=} transformType
     * @param {?=} coefficients
     * @param {?=} controlPoints
     */
    constructor(geoArea, visibleArea, transformType, coefficients, controlPoints) {
        this.geoArea = geoArea;
        this.visibleArea = visibleArea;
        this.transformType = transformType;
        this.coefficients = coefficients;
        this.controlPoints = controlPoints;
    }
}
if (false) {
    /** @type {?} */
    FovGeoAttributes.prototype.geoArea;
    /** @type {?} */
    FovGeoAttributes.prototype.visibleArea;
    /** @type {?} */
    FovGeoAttributes.prototype.transformType;
    /** @type {?} */
    FovGeoAttributes.prototype.coefficients;
    /** @type {?} */
    FovGeoAttributes.prototype.controlPoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm92R2VvQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFRQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQWlCekIsWUFBWSxPQUFzQixFQUFFLFdBQXVCLEVBQUUsYUFBc0MsRUFBRSxZQUF1QixFQUFFLGFBQWlDO1FBQzNKLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Q0FFSjs7O0lBdEJHLG1DQUE2Qjs7SUFHN0IsdUNBQThCOztJQUc5Qix5Q0FBNkM7O0lBRzdDLHdDQUE4Qjs7SUFHOUIseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtYXRpb25UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1RyYW5zZm9ybWF0aW9uVHlwZUNvZGUnO1xuaW1wb3J0IHsgR2VvQ29udHJvbFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL0dlb0NvbnRyb2xQb2ludCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRGltZW5zaW9uIH0gZnJvbSAnLi4vY29tbW9uL0RpbWVuc2lvbic7XG5cbi8qIFxuICAgRk9WIChTZW5zb3IgRmllbGQgb2YgVmlldykgR2VvIGF0dHJpYnV0ZXMgXG4qL1xuZXhwb3J0IGNsYXNzIEZvdkdlb0F0dHJpYnV0ZXMge1xuIFxuICAgIC8vIFNlbnNvciBGT1YgZ2VvIGFyZWEgcG9seWdvbiAodGhlIGJvdW5kaW5nIHBvbHlnb24gb2YgdGhlIGFyZWEgY292ZXJlZCBieSB0aGUgRk9WKSBcbiAgICBwdWJsaWMgZ2VvQXJlYTogQ29vcmRpbmF0ZVtdO1xuIFxuICAgIC8vIFRoZSBub3JtYWxpemVkICgxMDAwMCB4IDEwMDAwKSB2aXNpYmxlIGFyZWEgKHJlY3RhbmdsZSkgaW4gdGhlIEZPViBcbiAgICBwdWJsaWMgdmlzaWJsZUFyZWE6IERpbWVuc2lvbjtcbiBcbiAgICAvLyBHZW8gcmVmZXJlbmNpbmcgdHJhbnNmb3JtYXRpb24gYWxnb3JpdGhtIFxuICAgIHB1YmxpYyB0cmFuc2Zvcm1UeXBlOiBUcmFuc2Zvcm1hdGlvblR5cGVDb2RlO1xuIFxuICAgIC8vIENvZWZmaWNpZW50IG1hdHJpeCBmb3IgdGhlIEZPViAtIGZvciA4IGNvZWZmaWNpZW50cyBwcm9qZWN0aXZlIHRyYW5zZm9ybWF0aW9uIGlzIHVzZWQsIGZvciAxMiBjb2VmZmljaWVudHMgcG9seW5vbWlhbCB0cmFuc2Zvcm1hdGlvbiBpcyB1c2VkIFxuICAgIHB1YmxpYyBjb2VmZmljaWVudHM6IG51bWJlcltdO1xuIFxuICAgIC8vIE1pbiBYIGF4aXMgaW4gdGhlIGZpZWxkLW9mLXZpZXcgb2YgdGhlIGJvdW5kaW5nIGJveCBcbiAgICBwdWJsaWMgY29udHJvbFBvaW50czogR2VvQ29udHJvbFBvaW50W107XG4gXG4gICAgY29uc3RydWN0b3IoZ2VvQXJlYT86IENvb3JkaW5hdGVbXSwgdmlzaWJsZUFyZWE/OiBEaW1lbnNpb24sIHRyYW5zZm9ybVR5cGU/OiBUcmFuc2Zvcm1hdGlvblR5cGVDb2RlLCBjb2VmZmljaWVudHM/OiBudW1iZXJbXSwgY29udHJvbFBvaW50cz86IEdlb0NvbnRyb2xQb2ludFtdKSB7IFxuICAgICAgICB0aGlzLmdlb0FyZWEgPSBnZW9BcmVhO1xuICAgICAgICB0aGlzLnZpc2libGVBcmVhID0gdmlzaWJsZUFyZWE7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtVHlwZSA9IHRyYW5zZm9ybVR5cGU7XG4gICAgICAgIHRoaXMuY29lZmZpY2llbnRzID0gY29lZmZpY2llbnRzO1xuICAgICAgICB0aGlzLmNvbnRyb2xQb2ludHMgPSBjb250cm9sUG9pbnRzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==