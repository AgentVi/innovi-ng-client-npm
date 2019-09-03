/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SensorConfigChangeMask = {
    // Sensor has been removed from the system 
    DELETED: 0,
    // Sensor data has changed in the sensor configuration (requires agent reload) 
    SENSOR: 1,
    // Rules attributes changed in the sensor configuration 
    RULES: 2,
    // Sensor calibration has changed in the sensor configuration 
    CALIBRATION: 4,
};
export { SensorConfigChangeMask };
SensorConfigChangeMask[SensorConfigChangeMask.DELETED] = 'DELETED';
SensorConfigChangeMask[SensorConfigChangeMask.SENSOR] = 'SENSOR';
SensorConfigChangeMask[SensorConfigChangeMask.RULES] = 'RULES';
SensorConfigChangeMask[SensorConfigChangeMask.CALIBRATION] = 'CALIBRATION';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yQ29uZmlnQ2hhbmdlTWFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL1NlbnNvckNvbmZpZ0NoYW5nZU1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUksMkNBQTJDO0lBQzNDLFVBQVc7SUFFWCwrRUFBK0U7SUFDL0UsU0FBVTtJQUVWLHdEQUF3RDtJQUN4RCxRQUFTO0lBRVQsOERBQThEO0lBQzlELGNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEJpdCBtYXNrIHRvIGluZGljYXRlIHNlbnNvciBjb25maWd1cmF0aW9uIGNoYW5nZXMgKHdoYXQgcGFydCBvZiB0aGUgc2Vuc29yIGNvbmZpZ3VyYXRpb24gaGFzIGNoYW5nZWQpXG4gICBTaW5jZSBpdCBpcyBhIGJpdCBtYXNrLCB0aGUgYWN0dWFsIHZhbHVlIGNhbiBiZSBhIGNvbWJpbmF0aW9uIG9mIHRoZSBsaXN0ZWQgZW51bSB2YWx1ZXMgXG4qL1xuZXhwb3J0IGVudW0gU2Vuc29yQ29uZmlnQ2hhbmdlTWFzayB7XG4gXG4gICAgLy8gU2Vuc29yIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgc3lzdGVtIFxuICAgIERFTEVURUQgPSAwLFxuIFxuICAgIC8vIFNlbnNvciBkYXRhIGhhcyBjaGFuZ2VkIGluIHRoZSBzZW5zb3IgY29uZmlndXJhdGlvbiAocmVxdWlyZXMgYWdlbnQgcmVsb2FkKSBcbiAgICBTRU5TT1IgPSAxLFxuIFxuICAgIC8vIFJ1bGVzIGF0dHJpYnV0ZXMgY2hhbmdlZCBpbiB0aGUgc2Vuc29yIGNvbmZpZ3VyYXRpb24gXG4gICAgUlVMRVMgPSAyLFxuIFxuICAgIC8vIFNlbnNvciBjYWxpYnJhdGlvbiBoYXMgY2hhbmdlZCBpbiB0aGUgc2Vuc29yIGNvbmZpZ3VyYXRpb24gXG4gICAgQ0FMSUJSQVRJT04gPSA0LFxuIFxufSJdfQ==