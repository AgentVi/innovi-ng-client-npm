/*
   DigitalIO device status code
*/
export var DigitalIOStatusCode;
(function (DigitalIOStatusCode) {
    // Undefined [0] 
    DigitalIOStatusCode[DigitalIOStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // DigitalIO device gateway is configured but not yet connected [1] 
    DigitalIOStatusCode[DigitalIOStatusCode["PENDING"] = 1] = "PENDING";
    // DigitalIO device gateway is connected to the proxy and to the device [2] 
    DigitalIOStatusCode[DigitalIOStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // DigitalIO device gateway in warning state (high latency) [3] 
    DigitalIOStatusCode[DigitalIOStatusCode["WARNING"] = 3] = "WARNING";
    // DigitalIO device gateway in error state [4] 
    DigitalIOStatusCode[DigitalIOStatusCode["ERROR"] = 4] = "ERROR";
})(DigitalIOStatusCode || (DigitalIOStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlnaXRhbElPU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZW51bXMvRGlnaXRhbElPU3RhdHVzQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLG1CQWlCWDtBQWpCRCxXQUFZLG1CQUFtQjtJQUUzQixpQkFBaUI7SUFDakIsdUVBQWEsQ0FBQTtJQUViLG9FQUFvRTtJQUNwRSxtRUFBVyxDQUFBO0lBRVgsNEVBQTRFO0lBQzVFLGlFQUFVLENBQUE7SUFFVixnRUFBZ0U7SUFDaEUsbUVBQVcsQ0FBQTtJQUVYLCtDQUErQztJQUMvQywrREFBUyxDQUFBO0FBRWIsQ0FBQyxFQWpCVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBaUI5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgRGlnaXRhbElPIGRldmljZSBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBEaWdpdGFsSU9TdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IGlzIGNvbmZpZ3VyZWQgYnV0IG5vdCB5ZXQgY29ubmVjdGVkIFsxXSBcbiAgICBQRU5ESU5HID0gMSxcbiBcbiAgICAvLyBEaWdpdGFsSU8gZGV2aWNlIGdhdGV3YXkgaXMgY29ubmVjdGVkIHRvIHRoZSBwcm94eSBhbmQgdG8gdGhlIGRldmljZSBbMl0gXG4gICAgQUNUSVZFID0gMixcbiBcbiAgICAvLyBEaWdpdGFsSU8gZGV2aWNlIGdhdGV3YXkgaW4gd2FybmluZyBzdGF0ZSAoaGlnaCBsYXRlbmN5KSBbM10gXG4gICAgV0FSTklORyA9IDMsXG4gXG4gICAgLy8gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IGluIGVycm9yIHN0YXRlIFs0XSBcbiAgICBFUlJPUiA9IDQsXG4gXG59Il19