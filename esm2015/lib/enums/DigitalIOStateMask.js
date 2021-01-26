/*
   Digital IO state mask - the bit mask represents the actual state of the device as reported by the device proxy
   Bit mask range:
   OK:			0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
export var DigitalIOStateMask;
(function (DigitalIOStateMask) {
    // [OK] Digital IO device is connected and active' [0x0] 
    DigitalIOStateMask[DigitalIOStateMask["DEVICE_OK"] = 0] = "DEVICE_OK";
    // [WARNING] Network high latency [0x00000001] 
    DigitalIOStateMask[DigitalIOStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
    // [ERROR] DigitalIO device gateway not connected [0x00010000] 
    DigitalIOStateMask[DigitalIOStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
    // [ERROR] DigitalIO device gateway has no connection to the physical device [0x00011000] 
    DigitalIOStateMask[DigitalIOStateMask["NO_DEVICE_ERROR"] = 69632] = "NO_DEVICE_ERROR";
    // [ERROR] DigitalIO device configuration error [0x00011100] 
    DigitalIOStateMask[DigitalIOStateMask["DEVICE_CONFIG_ERROR"] = 69888] = "DEVICE_CONFIG_ERROR";
})(DigitalIOStateMask || (DigitalIOStateMask = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlnaXRhbElPU3RhdGVNYXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9EaWdpdGFsSU9TdGF0ZU1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FO0FBQ0YsTUFBTSxDQUFOLElBQVksa0JBaUJYO0FBakJELFdBQVksa0JBQWtCO0lBRTFCLHlEQUF5RDtJQUN6RCxxRUFBYSxDQUFBO0lBRWIsK0NBQStDO0lBQy9DLHFGQUFxQixDQUFBO0lBRXJCLCtEQUErRDtJQUMvRCxpRkFBcUIsQ0FBQTtJQUVyQiwwRkFBMEY7SUFDMUYscUZBQXVCLENBQUE7SUFFdkIsNkRBQTZEO0lBQzdELDZGQUEyQixDQUFBO0FBRS9CLENBQUMsRUFqQlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQWlCN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIERpZ2l0YWwgSU8gc3RhdGUgbWFzayAtIHRoZSBiaXQgbWFzayByZXByZXNlbnRzIHRoZSBhY3R1YWwgc3RhdGUgb2YgdGhlIGRldmljZSBhcyByZXBvcnRlZCBieSB0aGUgZGV2aWNlIHByb3h5XG4gICBCaXQgbWFzayByYW5nZTpcbiAgIE9LOlx0XHRcdDBcbiAgIFdBUk5JTkc6XHRbMHgwMDAwMSAtIDB4MDAwMEZGRkZdXHRcdDEgLSA2NTUzNVxuICAgRVJST1I6XHRcdFsweDEwMDAwIC0gMHhGRkZGRkZGRl1cdFx0NjU1MzYgLSBNYXhJbnQgXG4qL1xuZXhwb3J0IGVudW0gRGlnaXRhbElPU3RhdGVNYXNrIHtcbiBcbiAgICAvLyBbT0tdIERpZ2l0YWwgSU8gZGV2aWNlIGlzIGNvbm5lY3RlZCBhbmQgYWN0aXZlJyBbMHgwXSBcbiAgICBERVZJQ0VfT0sgPSAwLFxuIFxuICAgIC8vIFtXQVJOSU5HXSBOZXR3b3JrIGhpZ2ggbGF0ZW5jeSBbMHgwMDAwMDAwMV0gXG4gICAgSElHSF9MQVRFTkNZX1dBUk4gPSAxLFxuIFxuICAgIC8vIFtFUlJPUl0gRGlnaXRhbElPIGRldmljZSBnYXRld2F5IG5vdCBjb25uZWN0ZWQgWzB4MDAwMTAwMDBdIFxuICAgIE5PX0NPTU1fRVJST1IgPSA2NTUzNixcbiBcbiAgICAvLyBbRVJST1JdIERpZ2l0YWxJTyBkZXZpY2UgZ2F0ZXdheSBoYXMgbm8gY29ubmVjdGlvbiB0byB0aGUgcGh5c2ljYWwgZGV2aWNlIFsweDAwMDExMDAwXSBcbiAgICBOT19ERVZJQ0VfRVJST1IgPSA2OTYzMixcbiBcbiAgICAvLyBbRVJST1JdIERpZ2l0YWxJTyBkZXZpY2UgY29uZmlndXJhdGlvbiBlcnJvciBbMHgwMDAxMTEwMF0gXG4gICAgREVWSUNFX0NPTkZJR19FUlJPUiA9IDY5ODg4LFxuIFxufSJdfQ==