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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm92R2VvQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBY3pCLFlBQVksT0FBc0IsRUFBRSxXQUF1QixFQUFFLGtCQUE2QixFQUFFLGFBQWlDO1FBQ3pILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0NBRUo7OztJQWxCRyxtQ0FBNkI7O0lBRzdCLHVDQUE4Qjs7SUFHOUIsOENBQW9DOztJQUdwQyx5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW9Db250cm9sUG9pbnQgfSBmcm9tICcuLi9jb21tb24vR2VvQ29udHJvbFBvaW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBEaW1lbnNpb24gfSBmcm9tICcuLi9jb21tb24vRGltZW5zaW9uJztcblxuLyogXG4gICBGT1YgKFNlbnNvciBGaWVsZCBvZiBWaWV3KSBHZW8gYXR0cmlidXRlcyBcbiovXG5leHBvcnQgY2xhc3MgRm92R2VvQXR0cmlidXRlcyB7XG4gXG4gICAgLy8gU2Vuc29yIEZPViBnZW8gYXJlYSBwb2x5Z29uICh0aGUgYm91bmRpbmcgcG9seWdvbiBvZiB0aGUgYXJlYSBjb3ZlcmVkIGJ5IHRoZSBGT1YpIFxuICAgIHB1YmxpYyBnZW9BcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gVGhlIG5vcm1hbGl6ZWQgKDEwMDAgeCAxMDAwKSB2aXNpYmxlIGFyZWEgKHJlY3RhbmdsZSkgaW4gdGhlIEZPViBcbiAgICBwdWJsaWMgdmlzaWJsZUFyZWE6IERpbWVuc2lvbjtcbiBcbiAgICAvLyBDb2VmZmljaWVudCBtYXRyaXggZm9yIHRoZSBGT1YgLSBXR1MtODQgYWZmaW5lIHRyYW5zZm9ybWF0aW9uIFxuICAgIHB1YmxpYyBhZmZpbmVDb2VmZmljaWVudHM6IG51bWJlcltdO1xuIFxuICAgIC8vIE1pbiBYIGF4aXMgaW4gdGhlIGZpZWxkLW9mLXZpZXcgb2YgdGhlIGJvdW5kaW5nIGJveCBcbiAgICBwdWJsaWMgY29udHJvbFBvaW50czogR2VvQ29udHJvbFBvaW50W107XG4gXG4gICAgY29uc3RydWN0b3IoZ2VvQXJlYT86IENvb3JkaW5hdGVbXSwgdmlzaWJsZUFyZWE/OiBEaW1lbnNpb24sIGFmZmluZUNvZWZmaWNpZW50cz86IG51bWJlcltdLCBjb250cm9sUG9pbnRzPzogR2VvQ29udHJvbFBvaW50W10pIHsgXG4gICAgICAgIHRoaXMuZ2VvQXJlYSA9IGdlb0FyZWE7XG4gICAgICAgIHRoaXMudmlzaWJsZUFyZWEgPSB2aXNpYmxlQXJlYTtcbiAgICAgICAgdGhpcy5hZmZpbmVDb2VmZmljaWVudHMgPSBhZmZpbmVDb2VmZmljaWVudHM7XG4gICAgICAgIHRoaXMuY29udHJvbFBvaW50cyA9IGNvbnRyb2xQb2ludHM7XG4gICAgfVxuXG59XG5cblxuIl19