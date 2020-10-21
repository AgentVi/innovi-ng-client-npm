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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlnaXRhbElPU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0RpZ2l0YWxJT1N0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxtQkFpQlg7QUFqQkQsV0FBWSxtQkFBbUI7SUFFM0IsaUJBQWlCO0lBQ2pCLHVFQUFhLENBQUE7SUFFYixvRUFBb0U7SUFDcEUsbUVBQVcsQ0FBQTtJQUVYLDRFQUE0RTtJQUM1RSxpRUFBVSxDQUFBO0lBRVYsZ0VBQWdFO0lBQ2hFLG1FQUFXLENBQUE7SUFFWCwrQ0FBK0M7SUFDL0MsK0RBQVMsQ0FBQTtBQUViLENBQUMsRUFqQlcsbUJBQW1CLEtBQW5CLG1CQUFtQixRQWlCOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIERpZ2l0YWxJTyBkZXZpY2Ugc3RhdHVzIGNvZGUgXG4qL1xuZXhwb3J0IGVudW0gRGlnaXRhbElPU3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIERpZ2l0YWxJTyBkZXZpY2UgZ2F0ZXdheSBpcyBjb25maWd1cmVkIGJ1dCBub3QgeWV0IGNvbm5lY3RlZCBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IGlzIGNvbm5lY3RlZCB0byB0aGUgcHJveHkgYW5kIHRvIHRoZSBkZXZpY2UgWzJdIFxuICAgIEFDVElWRSA9IDIsXG4gXG4gICAgLy8gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IGluIHdhcm5pbmcgc3RhdGUgKGhpZ2ggbGF0ZW5jeSkgWzNdIFxuICAgIFdBUk5JTkcgPSAzLFxuIFxuICAgIC8vIERpZ2l0YWxJTyBkZXZpY2UgZ2F0ZXdheSBpbiBlcnJvciBzdGF0ZSBbNF0gXG4gICAgRVJST1IgPSA0LFxuIFxufSJdfQ==