/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Geo Reference data includes the contour of the raster image on the World coordinate system (WGS-84)
   and the list of transformation coefficients.
   To transform any point (x,y) on the FOV to WGS-84 coordinate, use the following functions:
   lng = (c0 * x) + (c1 * y) + c2
   lat = (c3 * y) + (c4 * x) + c5
   Where: c0..c5 are the indexed values of the coefficients vector e.g.
   c0 = coefficients[0], c1 = coefficients[1] ... c5 = coefficients[5];
*/
var /*
   Geo Reference data includes the contour of the raster image on the World coordinate system (WGS-84)
   and the list of transformation coefficients.
   To transform any point (x,y) on the FOV to WGS-84 coordinate, use the following functions:
   lng = (c0 * x) + (c1 * y) + c2
   lat = (c3 * y) + (c4 * x) + c5
   Where: c0..c5 are the indexed values of the coefficients vector e.g.
   c0 = coefficients[0], c1 = coefficients[1] ... c5 = coefficients[5];
*/
GeoReferenceData = /** @class */ (function () {
    function GeoReferenceData(coordinates, coefficients) {
        this.coordinates = coordinates;
        this.coefficients = coefficients;
    }
    return GeoReferenceData;
}());
/*
   Geo Reference data includes the contour of the raster image on the World coordinate system (WGS-84)
   and the list of transformation coefficients.
   To transform any point (x,y) on the FOV to WGS-84 coordinate, use the following functions:
   lng = (c0 * x) + (c1 * y) + c2
   lat = (c3 * y) + (c4 * x) + c5
   Where: c0..c5 are the indexed values of the coefficients vector e.g.
   c0 = coefficients[0], c1 = coefficients[1] ... c5 = coefficients[5];
*/
export { GeoReferenceData };
if (false) {
    /** @type {?} */
    GeoReferenceData.prototype.coordinates;
    /** @type {?} */
    GeoReferenceData.prototype.coefficients;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvUmVmZXJlbmNlRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi9HZW9SZWZlcmVuY2VEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7OztJQVFJLDBCQUFZLFdBQTBCLEVBQUUsWUFBdUI7UUFDM0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7Ozs7Ozs7Ozs7SUFWRyx1Q0FBaUM7O0lBR2pDLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5cbi8qIFxuICAgR2VvIFJlZmVyZW5jZSBkYXRhIGluY2x1ZGVzIHRoZSBjb250b3VyIG9mIHRoZSByYXN0ZXIgaW1hZ2Ugb24gdGhlIFdvcmxkIGNvb3JkaW5hdGUgc3lzdGVtIChXR1MtODQpXG4gICBhbmQgdGhlIGxpc3Qgb2YgdHJhbnNmb3JtYXRpb24gY29lZmZpY2llbnRzLlxuICAgVG8gdHJhbnNmb3JtIGFueSBwb2ludCAoeCx5KSBvbiB0aGUgRk9WIHRvIFdHUy04NCBjb29yZGluYXRlLCB1c2UgdGhlIGZvbGxvd2luZyBmdW5jdGlvbnM6XG4gICBsbmcgPSAoYzAgKiB4KSArIChjMSAqIHkpICsgYzJcbiAgIGxhdCA9IChjMyAqIHkpICsgKGM0ICogeCkgKyBjNVxuICAgV2hlcmU6IGMwLi5jNSBhcmUgdGhlIGluZGV4ZWQgdmFsdWVzIG9mIHRoZSBjb2VmZmljaWVudHMgdmVjdG9yIGUuZy5cbiAgIGMwID0gY29lZmZpY2llbnRzWzBdLCBjMSA9IGNvZWZmaWNpZW50c1sxXSAuLi4gYzUgPSBjb2VmZmljaWVudHNbNV07IFxuKi9cbmV4cG9ydCBjbGFzcyBHZW9SZWZlcmVuY2VEYXRhIHtcbiBcbiAgICAvLyBMaXN0IG9mIFdHUy04NCBjb29yZGluYXRlcyAoY29udG91ciBvZiB0aGUgRk9WIG9uIG1hcCk8YnI+IFRoZSBvcmRlciBvZiB0aGUgY29vcmRpbmF0ZXMgY29ycmVzcG9uZHMgdG8gdGhlIEZPViBjb3JuZXJzOiA8dWw+IDxsaT5jb29yZGluYXRlc1swXSA9IFVMQyAoVXBwZXIgTGVmdCBDb3JuZXIpPC9saT4gPGxpPmNvb3JkaW5hdGVzWzFdID0gVVJDIChVcHBlciBSaWdodCBDb3JuZXIpPC9saT4gPGxpPmNvb3JkaW5hdGVzWzJdID0gTFJDIChMb3dlciBSaWdodCBDb3JuZXIpPC9saT4gPGxpPmNvb3JkaW5hdGVzWzNdID0gTExDIChMb3dlciBMZWZ0IENvcm5lcik8L2xpPiA8L3VsPiBcbiAgICBwdWJsaWMgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVbXTtcbiBcbiAgICAvLyBMaXN0IG9mIHRyYW5zZm9ybWF0aW9uIGNvZWZmaWNpZW50cyBtYXRyaXggPGJyPiBNYXRyaXggaGFzIDkgdmFsdWVzIGluIHRoZSBmb2xsb3dpbmcgb3JkZXI6IG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIgVXNlIHRoaXMgbWF0cml4IHRvIGNvbnZlcnQgYW55IHBvaW50ICh4LHkpIGluIHRoZSBGT1YgdG8gV0dTLTg0IGNvb3JkaW5hdGUgKGxhdCwgbG5nKSA8YmxvY2txdW90ZT4gPHByZT4gWyBsbmcgXSAgICAgWyBtPHN1Yj4wMDwvc3ViPiAgbTxzdWI+MDE8L3N1Yj4gIG08c3ViPjAyPC9zdWI+IF0gICAgIFsgeCBdIFsgbGF0IF0gID0gIFsgbTxzdWI+MTA8L3N1Yj4gIG08c3ViPjExPC9zdWI+ICBtPHN1Yj4xMjwvc3ViPiBdICAqICBbIHkgXSBbICB3ICBdICAgICBbIG08c3ViPjIwPC9zdWI+ICBtPHN1Yj4yMTwvc3ViPiAgbTxzdWI+MjI8L3N1Yj4gXSAgICAgWyAxIF0gbG5nID0gKG0wMCAqIHgpICsgKG0wMSAqIHkpICsgbTAyIGxhdCA9IChtMTAgKiB4KSArIChtMTEgKiB5KSArIG0xMiBUbyBjb252ZXJ0IGJhY2sgdG8gbm9uIGhvbW9nZW5vdXMgY29vcmRpbmF0ZXMgKFhgLFlgKTogdyA9IChtMjAgKiB4KSArIChtMjEgKiB5KSArIG0yMiBYYCA9IGxuZyAvIHcgWWAgPSBsYXQgLyB3IDwvcHJlPiA8L2Jsb2NrcXVvdGU+IFxuICAgIHB1YmxpYyBjb2VmZmljaWVudHM6IG51bWJlcltdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzPzogQ29vcmRpbmF0ZVtdLCBjb2VmZmljaWVudHM/OiBudW1iZXJbXSkgeyBcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgICAgICB0aGlzLmNvZWZmaWNpZW50cyA9IGNvZWZmaWNpZW50cztcbiAgICB9XG5cbn1cblxuXG4iXX0=