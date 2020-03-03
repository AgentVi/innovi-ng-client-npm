/*
   Sensor configuration status code (represents the status due to user actions)
*/
export var SensorStatusCode;
(function (SensorStatusCode) {
    // Undefined [0] 
    SensorStatusCode[SensorStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Sensor was added but did not establish connection yet [1] 
    SensorStatusCode[SensorStatusCode["PENDING"] = 1] = "PENDING";
    // Delete sensor command sent to the appliance but it was not confirmed by the agent [2] 
    SensorStatusCode[SensorStatusCode["PENDING_DELETE"] = 2] = "PENDING_DELETE";
    // Suspended (banned) sensor - when it is detached from appliance, the sensor configuration and rules still exists but no real sensor connected to any appliance [3] 
    SensorStatusCode[SensorStatusCode["SUSPENDED"] = 3] = "SUSPENDED";
    // Sensor is disabled by user (or by Arm/Disarm command) [4] 
    SensorStatusCode[SensorStatusCode["INACTIVE"] = 4] = "INACTIVE";
    // Sensor is enabled by user and running [5] 
    SensorStatusCode[SensorStatusCode["ACTIVE"] = 5] = "ACTIVE";
    // Sensor is enabled by user and running and in warning state [6] 
    SensorStatusCode[SensorStatusCode["ACTIVE_WARNING"] = 6] = "ACTIVE_WARNING";
    // Sensor is enabled by user and running and in error state [7] 
    SensorStatusCode[SensorStatusCode["ACTIVE_ERROR"] = 7] = "ACTIVE_ERROR";
})(SensorStatusCode || (SensorStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL1NlbnNvclN0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxnQkEwQlg7QUExQkQsV0FBWSxnQkFBZ0I7SUFFeEIsaUJBQWlCO0lBQ2pCLGlFQUFhLENBQUE7SUFFYiw2REFBNkQ7SUFDN0QsNkRBQVcsQ0FBQTtJQUVYLHlGQUF5RjtJQUN6RiwyRUFBa0IsQ0FBQTtJQUVsQixxS0FBcUs7SUFDckssaUVBQWEsQ0FBQTtJQUViLDZEQUE2RDtJQUM3RCwrREFBWSxDQUFBO0lBRVosNkNBQTZDO0lBQzdDLDJEQUFVLENBQUE7SUFFVixrRUFBa0U7SUFDbEUsMkVBQWtCLENBQUE7SUFFbEIsZ0VBQWdFO0lBQ2hFLHVFQUFnQixDQUFBO0FBRXBCLENBQUMsRUExQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQTBCM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFNlbnNvciBjb25maWd1cmF0aW9uIHN0YXR1cyBjb2RlIChyZXByZXNlbnRzIHRoZSBzdGF0dXMgZHVlIHRvIHVzZXIgYWN0aW9ucykgXG4qL1xuZXhwb3J0IGVudW0gU2Vuc29yU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFNlbnNvciB3YXMgYWRkZWQgYnV0IGRpZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb24geWV0IFsxXSBcbiAgICBQRU5ESU5HID0gMSxcbiBcbiAgICAvLyBEZWxldGUgc2Vuc29yIGNvbW1hbmQgc2VudCB0byB0aGUgYXBwbGlhbmNlIGJ1dCBpdCB3YXMgbm90IGNvbmZpcm1lZCBieSB0aGUgYWdlbnQgWzJdIFxuICAgIFBFTkRJTkdfREVMRVRFID0gMixcbiBcbiAgICAvLyBTdXNwZW5kZWQgKGJhbm5lZCkgc2Vuc29yIC0gd2hlbiBpdCBpcyBkZXRhY2hlZCBmcm9tIGFwcGxpYW5jZSwgdGhlIHNlbnNvciBjb25maWd1cmF0aW9uIGFuZCBydWxlcyBzdGlsbCBleGlzdHMgYnV0IG5vIHJlYWwgc2Vuc29yIGNvbm5lY3RlZCB0byBhbnkgYXBwbGlhbmNlIFszXSBcbiAgICBTVVNQRU5ERUQgPSAzLFxuIFxuICAgIC8vIFNlbnNvciBpcyBkaXNhYmxlZCBieSB1c2VyIChvciBieSBBcm0vRGlzYXJtIGNvbW1hbmQpIFs0XSBcbiAgICBJTkFDVElWRSA9IDQsXG4gXG4gICAgLy8gU2Vuc29yIGlzIGVuYWJsZWQgYnkgdXNlciBhbmQgcnVubmluZyBbNV0gXG4gICAgQUNUSVZFID0gNSxcbiBcbiAgICAvLyBTZW5zb3IgaXMgZW5hYmxlZCBieSB1c2VyIGFuZCBydW5uaW5nIGFuZCBpbiB3YXJuaW5nIHN0YXRlIFs2XSBcbiAgICBBQ1RJVkVfV0FSTklORyA9IDYsXG4gXG4gICAgLy8gU2Vuc29yIGlzIGVuYWJsZWQgYnkgdXNlciBhbmQgcnVubmluZyBhbmQgaW4gZXJyb3Igc3RhdGUgWzddIFxuICAgIEFDVElWRV9FUlJPUiA9IDcsXG4gXG59Il19