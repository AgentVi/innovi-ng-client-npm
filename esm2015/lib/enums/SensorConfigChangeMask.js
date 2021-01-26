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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yQ29uZmlnQ2hhbmdlTWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvU2Vuc29yQ29uZmlnQ2hhbmdlTWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0U7QUFDRixNQUFNLENBQU4sSUFBWSxzQkFjWDtBQWRELFdBQVksc0JBQXNCO0lBRTlCLDJDQUEyQztJQUMzQyx5RUFBVyxDQUFBO0lBRVgsK0VBQStFO0lBQy9FLHVFQUFVLENBQUE7SUFFVix3REFBd0Q7SUFDeEQscUVBQVMsQ0FBQTtJQUVULDhEQUE4RDtJQUM5RCxpRkFBZSxDQUFBO0FBRW5CLENBQUMsRUFkVyxzQkFBc0IsS0FBdEIsc0JBQXNCLFFBY2pDIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBCaXQgbWFzayB0byBpbmRpY2F0ZSBzZW5zb3IgY29uZmlndXJhdGlvbiBjaGFuZ2VzICh3aGF0IHBhcnQgb2YgdGhlIHNlbnNvciBjb25maWd1cmF0aW9uIGhhcyBjaGFuZ2VkKVxuICAgU2luY2UgaXQgaXMgYSBiaXQgbWFzaywgdGhlIGFjdHVhbCB2YWx1ZSBjYW4gYmUgYSBjb21iaW5hdGlvbiBvZiB0aGUgbGlzdGVkIGVudW0gdmFsdWVzIFxuKi9cbmV4cG9ydCBlbnVtIFNlbnNvckNvbmZpZ0NoYW5nZU1hc2sge1xuIFxuICAgIC8vIFNlbnNvciBoYXMgYmVlbiByZW1vdmVkIGZyb20gdGhlIHN5c3RlbSBcbiAgICBERUxFVEVEID0gMCxcbiBcbiAgICAvLyBTZW5zb3IgZGF0YSBoYXMgY2hhbmdlZCBpbiB0aGUgc2Vuc29yIGNvbmZpZ3VyYXRpb24gKHJlcXVpcmVzIGFnZW50IHJlbG9hZCkgXG4gICAgU0VOU09SID0gMSxcbiBcbiAgICAvLyBSdWxlcyBhdHRyaWJ1dGVzIGNoYW5nZWQgaW4gdGhlIHNlbnNvciBjb25maWd1cmF0aW9uIFxuICAgIFJVTEVTID0gMixcbiBcbiAgICAvLyBTZW5zb3IgY2FsaWJyYXRpb24gaGFzIGNoYW5nZWQgaW4gdGhlIHNlbnNvciBjb25maWd1cmF0aW9uIFxuICAgIENBTElCUkFUSU9OID0gNCxcbiBcbn0iXX0=