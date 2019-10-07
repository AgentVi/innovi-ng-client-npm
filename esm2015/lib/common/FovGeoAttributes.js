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
     * @param {?=} affineCoefficients
     * @param {?=} controlPoints
     */
    constructor(geoArea, visibleArea, affineCoefficients, controlPoints) {
        this.geoArea = geoArea;
        this.visibleArea = visibleArea;
        this.affineCoefficients = affineCoefficients;
        this.controlPoints = controlPoints;
    }
}
if (false) {
    /** @type {?} */
    FovGeoAttributes.prototype.geoArea;
    /** @type {?} */
    FovGeoAttributes.prototype.visibleArea;
    /** @type {?} */
    FovGeoAttributes.prototype.affineCoefficients;
    /** @type {?} */
    FovGeoAttributes.prototype.controlPoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm92R2VvQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBY3pCLFlBQVksT0FBc0IsRUFBRSxXQUF1QixFQUFFLGtCQUE2QixFQUFFLGFBQWlDO1FBQ3pILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0NBRUo7OztJQWxCRyxtQ0FBNkI7O0lBRzdCLHVDQUE4Qjs7SUFHOUIsOENBQW9DOztJQUdwQyx5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRGltZW5zaW9uIH0gZnJvbSAnLi4vY29tbW9uL0RpbWVuc2lvbic7XG5pbXBvcnQgeyBHZW9Db250cm9sUG9pbnQgfSBmcm9tICcuLi9jb21tb24vR2VvQ29udHJvbFBvaW50JztcblxuLyogXG4gICBGT1YgKFNlbnNvciBGaWVsZCBvZiBWaWV3KSBHZW8gYXR0cmlidXRlcyBcbiovXG5leHBvcnQgY2xhc3MgRm92R2VvQXR0cmlidXRlcyB7XG4gXG4gICAgLy8gU2Vuc29yIEZPViBnZW8gYXJlYSBwb2x5Z29uICh0aGUgYm91bmRpbmcgcG9seWdvbiBvZiB0aGUgYXJlYSBjb3ZlcmVkIGJ5IHRoZSBGT1YpIFxuICAgIHB1YmxpYyBnZW9BcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gVGhlIG5vcm1hbGl6ZWQgKDEwMDAwMCB4IDEwMDAwMCkgdmlzaWJsZSBhcmVhIChyZWN0YW5nbGUpIGluIHRoZSBGT1YgXG4gICAgcHVibGljIHZpc2libGVBcmVhOiBEaW1lbnNpb247XG4gXG4gICAgLy8gQ29lZmZpY2llbnQgbWF0cml4IGZvciB0aGUgRk9WIC0gV0dTLTg0IGFmZmluZSB0cmFuc2Zvcm1hdGlvbiBcbiAgICBwdWJsaWMgYWZmaW5lQ29lZmZpY2llbnRzOiBudW1iZXJbXTtcbiBcbiAgICAvLyBNaW4gWCBheGlzIGluIHRoZSBmaWVsZC1vZi12aWV3IG9mIHRoZSBib3VuZGluZyBib3ggXG4gICAgcHVibGljIGNvbnRyb2xQb2ludHM6IEdlb0NvbnRyb2xQb2ludFtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGdlb0FyZWE/OiBDb29yZGluYXRlW10sIHZpc2libGVBcmVhPzogRGltZW5zaW9uLCBhZmZpbmVDb2VmZmljaWVudHM/OiBudW1iZXJbXSwgY29udHJvbFBvaW50cz86IEdlb0NvbnRyb2xQb2ludFtdKSB7IFxuICAgICAgICB0aGlzLmdlb0FyZWEgPSBnZW9BcmVhO1xuICAgICAgICB0aGlzLnZpc2libGVBcmVhID0gdmlzaWJsZUFyZWE7XG4gICAgICAgIHRoaXMuYWZmaW5lQ29lZmZpY2llbnRzID0gYWZmaW5lQ29lZmZpY2llbnRzO1xuICAgICAgICB0aGlzLmNvbnRyb2xQb2ludHMgPSBjb250cm9sUG9pbnRzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==