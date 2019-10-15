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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm92R2VvQXR0cmlidXRlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQSxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBY3pCLFlBQVksT0FBc0IsRUFBRSxXQUF1QixFQUFFLGtCQUE2QixFQUFFLGFBQWlDO1FBQ3pILElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0NBRUo7OztJQWxCRyxtQ0FBNkI7O0lBRzdCLHVDQUE4Qjs7SUFHOUIsOENBQW9DOztJQUdwQyx5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRGltZW5zaW9uIH0gZnJvbSAnLi4vY29tbW9uL0RpbWVuc2lvbic7XG5pbXBvcnQgeyBHZW9Db250cm9sUG9pbnQgfSBmcm9tICcuLi9jb21tb24vR2VvQ29udHJvbFBvaW50JztcblxuLyogXG4gICBGT1YgKFNlbnNvciBGaWVsZCBvZiBWaWV3KSBHZW8gYXR0cmlidXRlcyBcbiovXG5leHBvcnQgY2xhc3MgRm92R2VvQXR0cmlidXRlcyB7XG4gXG4gICAgLy8gU2Vuc29yIEZPViBnZW8gYXJlYSBwb2x5Z29uICh0aGUgYm91bmRpbmcgcG9seWdvbiBvZiB0aGUgYXJlYSBjb3ZlcmVkIGJ5IHRoZSBGT1YpIFxuICAgIHB1YmxpYyBnZW9BcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gVGhlIG5vcm1hbGl6ZWQgKDEwMDAwIHggMTAwMDApIHZpc2libGUgYXJlYSAocmVjdGFuZ2xlKSBpbiB0aGUgRk9WIFxuICAgIHB1YmxpYyB2aXNpYmxlQXJlYTogRGltZW5zaW9uO1xuIFxuICAgIC8vIENvZWZmaWNpZW50IG1hdHJpeCBmb3IgdGhlIEZPViAtIFdHUy04NCBhZmZpbmUgdHJhbnNmb3JtYXRpb24gXG4gICAgcHVibGljIGFmZmluZUNvZWZmaWNpZW50czogbnVtYmVyW107XG4gXG4gICAgLy8gTWluIFggYXhpcyBpbiB0aGUgZmllbGQtb2YtdmlldyBvZiB0aGUgYm91bmRpbmcgYm94IFxuICAgIHB1YmxpYyBjb250cm9sUG9pbnRzOiBHZW9Db250cm9sUG9pbnRbXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihnZW9BcmVhPzogQ29vcmRpbmF0ZVtdLCB2aXNpYmxlQXJlYT86IERpbWVuc2lvbiwgYWZmaW5lQ29lZmZpY2llbnRzPzogbnVtYmVyW10sIGNvbnRyb2xQb2ludHM/OiBHZW9Db250cm9sUG9pbnRbXSkgeyBcbiAgICAgICAgdGhpcy5nZW9BcmVhID0gZ2VvQXJlYTtcbiAgICAgICAgdGhpcy52aXNpYmxlQXJlYSA9IHZpc2libGVBcmVhO1xuICAgICAgICB0aGlzLmFmZmluZUNvZWZmaWNpZW50cyA9IGFmZmluZUNvZWZmaWNpZW50cztcbiAgICAgICAgdGhpcy5jb250cm9sUG9pbnRzID0gY29udHJvbFBvaW50cztcbiAgICB9XG5cbn1cblxuXG4iXX0=