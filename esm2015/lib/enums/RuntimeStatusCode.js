/*
   Runtime status code represents the status of component in the host
*/
export var RuntimeStatusCode;
(function (RuntimeStatusCode) {
    // Undefined [0] 
    RuntimeStatusCode[RuntimeStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Component is defined in the configuration but not running [1] 
    RuntimeStatusCode[RuntimeStatusCode["CONFIGURED"] = 1] = "CONFIGURED";
    // Component is running on the device [2] 
    RuntimeStatusCode[RuntimeStatusCode["RUNNING"] = 2] = "RUNNING";
    // Component is defined in the configuration and running on the device [3] 
    RuntimeStatusCode[RuntimeStatusCode["CONFIGURED_AND_RUNNING"] = 3] = "CONFIGURED_AND_RUNNING";
})(RuntimeStatusCode || (RuntimeStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVudGltZVN0YXR1c0NvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL1J1bnRpbWVTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksaUJBY1g7QUFkRCxXQUFZLGlCQUFpQjtJQUV6QixpQkFBaUI7SUFDakIsbUVBQWEsQ0FBQTtJQUViLGlFQUFpRTtJQUNqRSxxRUFBYyxDQUFBO0lBRWQsMENBQTBDO0lBQzFDLCtEQUFXLENBQUE7SUFFWCwyRUFBMkU7SUFDM0UsNkZBQTBCLENBQUE7QUFFOUIsQ0FBQyxFQWRXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFjNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFJ1bnRpbWUgc3RhdHVzIGNvZGUgcmVwcmVzZW50cyB0aGUgc3RhdHVzIG9mIGNvbXBvbmVudCBpbiB0aGUgaG9zdCBcbiovXG5leHBvcnQgZW51bSBSdW50aW1lU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIENvbXBvbmVudCBpcyBkZWZpbmVkIGluIHRoZSBjb25maWd1cmF0aW9uIGJ1dCBub3QgcnVubmluZyBbMV0gXG4gICAgQ09ORklHVVJFRCA9IDEsXG4gXG4gICAgLy8gQ29tcG9uZW50IGlzIHJ1bm5pbmcgb24gdGhlIGRldmljZSBbMl0gXG4gICAgUlVOTklORyA9IDIsXG4gXG4gICAgLy8gQ29tcG9uZW50IGlzIGRlZmluZWQgaW4gdGhlIGNvbmZpZ3VyYXRpb24gYW5kIHJ1bm5pbmcgb24gdGhlIGRldmljZSBbM10gXG4gICAgQ09ORklHVVJFRF9BTkRfUlVOTklORyA9IDMsXG4gXG59Il19