/*
   DigitalIO device status code
*/
export var DigitalIOStatusCode;
(function (DigitalIOStatusCode) {
    // Undefined [0] 
    DigitalIOStatusCode[DigitalIOStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // DigitalIO device gateway is connected to the proxy and to the device [1] 
    DigitalIOStatusCode[DigitalIOStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // DigitalIO device gateway in warning state (high latency) [2] 
    DigitalIOStatusCode[DigitalIOStatusCode["WARNING"] = 2] = "WARNING";
    // DigitalIO device gateway not connected [3] 
    DigitalIOStatusCode[DigitalIOStatusCode["ERROR"] = 3] = "ERROR";
    // DigitalIO device gateway has no connection to the physical device [4] 
    DigitalIOStatusCode[DigitalIOStatusCode["INACTIVE"] = 4] = "INACTIVE";
    // DigitalIO device gateway is configured but not yet connected [5] 
    DigitalIOStatusCode[DigitalIOStatusCode["PENDING"] = 5] = "PENDING";
})(DigitalIOStatusCode || (DigitalIOStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlnaXRhbElPU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0RpZ2l0YWxJT1N0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxtQkFvQlg7QUFwQkQsV0FBWSxtQkFBbUI7SUFFM0IsaUJBQWlCO0lBQ2pCLHVFQUFhLENBQUE7SUFFYiw0RUFBNEU7SUFDNUUsaUVBQVUsQ0FBQTtJQUVWLGdFQUFnRTtJQUNoRSxtRUFBVyxDQUFBO0lBRVgsOENBQThDO0lBQzlDLCtEQUFTLENBQUE7SUFFVCx5RUFBeUU7SUFDekUscUVBQVksQ0FBQTtJQUVaLG9FQUFvRTtJQUNwRSxtRUFBVyxDQUFBO0FBRWYsQ0FBQyxFQXBCVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBb0I5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgRGlnaXRhbElPIGRldmljZSBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBEaWdpdGFsSU9TdGF0dXNDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IGlzIGNvbm5lY3RlZCB0byB0aGUgcHJveHkgYW5kIHRvIHRoZSBkZXZpY2UgWzFdIFxuICAgIEFDVElWRSA9IDEsXG4gXG4gICAgLy8gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IGluIHdhcm5pbmcgc3RhdGUgKGhpZ2ggbGF0ZW5jeSkgWzJdIFxuICAgIFdBUk5JTkcgPSAyLFxuIFxuICAgIC8vIERpZ2l0YWxJTyBkZXZpY2UgZ2F0ZXdheSBub3QgY29ubmVjdGVkIFszXSBcbiAgICBFUlJPUiA9IDMsXG4gXG4gICAgLy8gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IGhhcyBubyBjb25uZWN0aW9uIHRvIHRoZSBwaHlzaWNhbCBkZXZpY2UgWzRdIFxuICAgIElOQUNUSVZFID0gNCxcbiBcbiAgICAvLyBEaWdpdGFsSU8gZGV2aWNlIGdhdGV3YXkgaXMgY29uZmlndXJlZCBidXQgbm90IHlldCBjb25uZWN0ZWQgWzVdIFxuICAgIFBFTkRJTkcgPSA1LFxuIFxufSJdfQ==