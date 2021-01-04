/*
   Appliance status code
*/
export var ApplianceStatusCode;
(function (ApplianceStatusCode) {
    // Undefined [0] 
    ApplianceStatusCode[ApplianceStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Appliance was added but did not establish connection yet [1] 
    ApplianceStatusCode[ApplianceStatusCode["PENDING"] = 1] = "PENDING";
    // Appliance deleted by the user from the system but not confirmation accepted yet [2] 
    ApplianceStatusCode[ApplianceStatusCode["PENDING_DELETE"] = 2] = "PENDING_DELETE";
    // Appliance is paired but not registered yet [3] 
    ApplianceStatusCode[ApplianceStatusCode["UNREGISTERED"] = 3] = "UNREGISTERED";
    // Appliance is not active [4] 
    ApplianceStatusCode[ApplianceStatusCode["INACTIVE"] = 4] = "INACTIVE";
    // Appliance is running [5] 
    ApplianceStatusCode[ApplianceStatusCode["ACTIVE"] = 5] = "ACTIVE";
    // Appliance is running and in warning state [6] 
    ApplianceStatusCode[ApplianceStatusCode["ACTIVE_WARNING"] = 6] = "ACTIVE_WARNING";
    // Appliance is running and in error state [7] 
    ApplianceStatusCode[ApplianceStatusCode["ACTIVE_ERROR"] = 7] = "ACTIVE_ERROR";
})(ApplianceStatusCode || (ApplianceStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLG1CQTBCWDtBQTFCRCxXQUFZLG1CQUFtQjtJQUUzQixpQkFBaUI7SUFDakIsdUVBQWEsQ0FBQTtJQUViLGdFQUFnRTtJQUNoRSxtRUFBVyxDQUFBO0lBRVgsdUZBQXVGO0lBQ3ZGLGlGQUFrQixDQUFBO0lBRWxCLGtEQUFrRDtJQUNsRCw2RUFBZ0IsQ0FBQTtJQUVoQiwrQkFBK0I7SUFDL0IscUVBQVksQ0FBQTtJQUVaLDRCQUE0QjtJQUM1QixpRUFBVSxDQUFBO0lBRVYsaURBQWlEO0lBQ2pELGlGQUFrQixDQUFBO0lBRWxCLCtDQUErQztJQUMvQyw2RUFBZ0IsQ0FBQTtBQUVwQixDQUFDLEVBMUJXLG1CQUFtQixLQUFuQixtQkFBbUIsUUEwQjlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBcHBsaWFuY2Ugc3RhdHVzIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gQXBwbGlhbmNlU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEFwcGxpYW5jZSB3YXMgYWRkZWQgYnV0IGRpZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb24geWV0IFsxXSBcbiAgICBQRU5ESU5HID0gMSxcbiBcbiAgICAvLyBBcHBsaWFuY2UgZGVsZXRlZCBieSB0aGUgdXNlciBmcm9tIHRoZSBzeXN0ZW0gYnV0IG5vdCBjb25maXJtYXRpb24gYWNjZXB0ZWQgeWV0IFsyXSBcbiAgICBQRU5ESU5HX0RFTEVURSA9IDIsXG4gXG4gICAgLy8gQXBwbGlhbmNlIGlzIHBhaXJlZCBidXQgbm90IHJlZ2lzdGVyZWQgeWV0IFszXSBcbiAgICBVTlJFR0lTVEVSRUQgPSAzLFxuIFxuICAgIC8vIEFwcGxpYW5jZSBpcyBub3QgYWN0aXZlIFs0XSBcbiAgICBJTkFDVElWRSA9IDQsXG4gXG4gICAgLy8gQXBwbGlhbmNlIGlzIHJ1bm5pbmcgWzVdIFxuICAgIEFDVElWRSA9IDUsXG4gXG4gICAgLy8gQXBwbGlhbmNlIGlzIHJ1bm5pbmcgYW5kIGluIHdhcm5pbmcgc3RhdGUgWzZdIFxuICAgIEFDVElWRV9XQVJOSU5HID0gNixcbiBcbiAgICAvLyBBcHBsaWFuY2UgaXMgcnVubmluZyBhbmQgaW4gZXJyb3Igc3RhdGUgWzddIFxuICAgIEFDVElWRV9FUlJPUiA9IDcsXG4gXG59Il19