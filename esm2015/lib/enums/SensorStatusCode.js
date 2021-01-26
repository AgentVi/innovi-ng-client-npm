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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvU2Vuc29yU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGdCQTBCWDtBQTFCRCxXQUFZLGdCQUFnQjtJQUV4QixpQkFBaUI7SUFDakIsaUVBQWEsQ0FBQTtJQUViLDZEQUE2RDtJQUM3RCw2REFBVyxDQUFBO0lBRVgseUZBQXlGO0lBQ3pGLDJFQUFrQixDQUFBO0lBRWxCLHFLQUFxSztJQUNySyxpRUFBYSxDQUFBO0lBRWIsNkRBQTZEO0lBQzdELCtEQUFZLENBQUE7SUFFWiw2Q0FBNkM7SUFDN0MsMkRBQVUsQ0FBQTtJQUVWLGtFQUFrRTtJQUNsRSwyRUFBa0IsQ0FBQTtJQUVsQixnRUFBZ0U7SUFDaEUsdUVBQWdCLENBQUE7QUFFcEIsQ0FBQyxFQTFCVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBMEIzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgU2Vuc29yIGNvbmZpZ3VyYXRpb24gc3RhdHVzIGNvZGUgKHJlcHJlc2VudHMgdGhlIHN0YXR1cyBkdWUgdG8gdXNlciBhY3Rpb25zKSBcbiovXG5leHBvcnQgZW51bSBTZW5zb3JTdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU2Vuc29yIHdhcyBhZGRlZCBidXQgZGlkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbiB5ZXQgWzFdIFxuICAgIFBFTkRJTkcgPSAxLFxuIFxuICAgIC8vIERlbGV0ZSBzZW5zb3IgY29tbWFuZCBzZW50IHRvIHRoZSBhcHBsaWFuY2UgYnV0IGl0IHdhcyBub3QgY29uZmlybWVkIGJ5IHRoZSBhZ2VudCBbMl0gXG4gICAgUEVORElOR19ERUxFVEUgPSAyLFxuIFxuICAgIC8vIFN1c3BlbmRlZCAoYmFubmVkKSBzZW5zb3IgLSB3aGVuIGl0IGlzIGRldGFjaGVkIGZyb20gYXBwbGlhbmNlLCB0aGUgc2Vuc29yIGNvbmZpZ3VyYXRpb24gYW5kIHJ1bGVzIHN0aWxsIGV4aXN0cyBidXQgbm8gcmVhbCBzZW5zb3IgY29ubmVjdGVkIHRvIGFueSBhcHBsaWFuY2UgWzNdIFxuICAgIFNVU1BFTkRFRCA9IDMsXG4gXG4gICAgLy8gU2Vuc29yIGlzIGRpc2FibGVkIGJ5IHVzZXIgKG9yIGJ5IEFybS9EaXNhcm0gY29tbWFuZCkgWzRdIFxuICAgIElOQUNUSVZFID0gNCxcbiBcbiAgICAvLyBTZW5zb3IgaXMgZW5hYmxlZCBieSB1c2VyIGFuZCBydW5uaW5nIFs1XSBcbiAgICBBQ1RJVkUgPSA1LFxuIFxuICAgIC8vIFNlbnNvciBpcyBlbmFibGVkIGJ5IHVzZXIgYW5kIHJ1bm5pbmcgYW5kIGluIHdhcm5pbmcgc3RhdGUgWzZdIFxuICAgIEFDVElWRV9XQVJOSU5HID0gNixcbiBcbiAgICAvLyBTZW5zb3IgaXMgZW5hYmxlZCBieSB1c2VyIGFuZCBydW5uaW5nIGFuZCBpbiBlcnJvciBzdGF0ZSBbN10gXG4gICAgQUNUSVZFX0VSUk9SID0gNyxcbiBcbn0iXX0=