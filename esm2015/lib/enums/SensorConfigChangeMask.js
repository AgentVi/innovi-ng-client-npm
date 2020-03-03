/*
   Bit mask to indicate sensor configuration changes (what part of the sensor configuration has changed)
   Since it is a bit mask, the actual value can be a combination of the listed enum values
*/
export var SensorConfigChangeMask;
(function (SensorConfigChangeMask) {
    // Sensor has been removed from the system 
    SensorConfigChangeMask[SensorConfigChangeMask["DELETED"] = 0] = "DELETED";
    // Sensor data has changed in the sensor configuration (requires agent reload) 
    SensorConfigChangeMask[SensorConfigChangeMask["SENSOR"] = 1] = "SENSOR";
    // Rules attributes changed in the sensor configuration 
    SensorConfigChangeMask[SensorConfigChangeMask["RULES"] = 2] = "RULES";
    // Sensor calibration has changed in the sensor configuration 
    SensorConfigChangeMask[SensorConfigChangeMask["CALIBRATION"] = 4] = "CALIBRATION";
})(SensorConfigChangeMask || (SensorConfigChangeMask = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yQ29uZmlnQ2hhbmdlTWFzay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL1NlbnNvckNvbmZpZ0NoYW5nZU1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0YsTUFBTSxDQUFOLElBQVksc0JBY1g7QUFkRCxXQUFZLHNCQUFzQjtJQUU5QiwyQ0FBMkM7SUFDM0MseUVBQVcsQ0FBQTtJQUVYLCtFQUErRTtJQUMvRSx1RUFBVSxDQUFBO0lBRVYsd0RBQXdEO0lBQ3hELHFFQUFTLENBQUE7SUFFVCw4REFBOEQ7SUFDOUQsaUZBQWUsQ0FBQTtBQUVuQixDQUFDLEVBZFcsc0JBQXNCLEtBQXRCLHNCQUFzQixRQWNqQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQml0IG1hc2sgdG8gaW5kaWNhdGUgc2Vuc29yIGNvbmZpZ3VyYXRpb24gY2hhbmdlcyAod2hhdCBwYXJ0IG9mIHRoZSBzZW5zb3IgY29uZmlndXJhdGlvbiBoYXMgY2hhbmdlZClcbiAgIFNpbmNlIGl0IGlzIGEgYml0IG1hc2ssIHRoZSBhY3R1YWwgdmFsdWUgY2FuIGJlIGEgY29tYmluYXRpb24gb2YgdGhlIGxpc3RlZCBlbnVtIHZhbHVlcyBcbiovXG5leHBvcnQgZW51bSBTZW5zb3JDb25maWdDaGFuZ2VNYXNrIHtcbiBcbiAgICAvLyBTZW5zb3IgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBzeXN0ZW0gXG4gICAgREVMRVRFRCA9IDAsXG4gXG4gICAgLy8gU2Vuc29yIGRhdGEgaGFzIGNoYW5nZWQgaW4gdGhlIHNlbnNvciBjb25maWd1cmF0aW9uIChyZXF1aXJlcyBhZ2VudCByZWxvYWQpIFxuICAgIFNFTlNPUiA9IDEsXG4gXG4gICAgLy8gUnVsZXMgYXR0cmlidXRlcyBjaGFuZ2VkIGluIHRoZSBzZW5zb3IgY29uZmlndXJhdGlvbiBcbiAgICBSVUxFUyA9IDIsXG4gXG4gICAgLy8gU2Vuc29yIGNhbGlicmF0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBzZW5zb3IgY29uZmlndXJhdGlvbiBcbiAgICBDQUxJQlJBVElPTiA9IDQsXG4gXG59Il19