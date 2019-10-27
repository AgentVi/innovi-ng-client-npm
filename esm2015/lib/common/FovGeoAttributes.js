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
     * @param {?=} coefficients
     * @param {?=} controlPoints
     */
    constructor(geoArea, visibleArea, coefficients, controlPoints) {
        this.geoArea = geoArea;
        this.visibleArea = visibleArea;
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
    FovGeoAttributes.prototype.coefficients;
    /** @type {?} */
    FovGeoAttributes.prototype.controlPoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm92R2VvQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBY3pCLFlBQVksT0FBc0IsRUFBRSxXQUF1QixFQUFFLFlBQXVCLEVBQUUsYUFBaUM7UUFDbkgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztDQUVKOzs7SUFsQkcsbUNBQTZCOztJQUc3Qix1Q0FBOEI7O0lBRzlCLHdDQUE4Qjs7SUFHOUIseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VvQ29udHJvbFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL0dlb0NvbnRyb2xQb2ludCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRGltZW5zaW9uIH0gZnJvbSAnLi4vY29tbW9uL0RpbWVuc2lvbic7XG5cbi8qIFxuICAgRk9WIChTZW5zb3IgRmllbGQgb2YgVmlldykgR2VvIGF0dHJpYnV0ZXMgXG4qL1xuZXhwb3J0IGNsYXNzIEZvdkdlb0F0dHJpYnV0ZXMge1xuIFxuICAgIC8vIFNlbnNvciBGT1YgZ2VvIGFyZWEgcG9seWdvbiAodGhlIGJvdW5kaW5nIHBvbHlnb24gb2YgdGhlIGFyZWEgY292ZXJlZCBieSB0aGUgRk9WKSBcbiAgICBwdWJsaWMgZ2VvQXJlYTogQ29vcmRpbmF0ZVtdO1xuIFxuICAgIC8vIFRoZSBub3JtYWxpemVkICgxMDAwMCB4IDEwMDAwKSB2aXNpYmxlIGFyZWEgKHJlY3RhbmdsZSkgaW4gdGhlIEZPViBcbiAgICBwdWJsaWMgdmlzaWJsZUFyZWE6IERpbWVuc2lvbjtcbiBcbiAgICAvLyBDb2VmZmljaWVudCBtYXRyaXggZm9yIHRoZSBGT1YgLSBmb3IgOCBjb2VmZmljaWVudHMgcHJvamVjdGl2ZSB0cmFuc2Zvcm1hdGlvbiBpcyB1c2VkLCBmb3IgMTIgY29lZmZpY2llbnRzIHBvbHlub21pYWwgdHJhbnNmb3JtYXRpb24gaXMgdXNlZCBcbiAgICBwdWJsaWMgY29lZmZpY2llbnRzOiBudW1iZXJbXTtcbiBcbiAgICAvLyBNaW4gWCBheGlzIGluIHRoZSBmaWVsZC1vZi12aWV3IG9mIHRoZSBib3VuZGluZyBib3ggXG4gICAgcHVibGljIGNvbnRyb2xQb2ludHM6IEdlb0NvbnRyb2xQb2ludFtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGdlb0FyZWE/OiBDb29yZGluYXRlW10sIHZpc2libGVBcmVhPzogRGltZW5zaW9uLCBjb2VmZmljaWVudHM/OiBudW1iZXJbXSwgY29udHJvbFBvaW50cz86IEdlb0NvbnRyb2xQb2ludFtdKSB7IFxuICAgICAgICB0aGlzLmdlb0FyZWEgPSBnZW9BcmVhO1xuICAgICAgICB0aGlzLnZpc2libGVBcmVhID0gdmlzaWJsZUFyZWE7XG4gICAgICAgIHRoaXMuY29lZmZpY2llbnRzID0gY29lZmZpY2llbnRzO1xuICAgICAgICB0aGlzLmNvbnRyb2xQb2ludHMgPSBjb250cm9sUG9pbnRzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==