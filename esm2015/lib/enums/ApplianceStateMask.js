/*
   Appliance (device) state mask - the bit mask represents the actual state of the appliance as reported by the device proxy
   Bit mask range:
   OK:		0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
export var ApplianceStateMask;
(function (ApplianceStateMask) {
    // [OK] No error [0x0] 
    ApplianceStateMask[ApplianceStateMask["APPLIANCE_OK"] = 0] = "APPLIANCE_OK";
    // [WARNING] Network high latency (over 2000 ms) for 1 minute or more [0x00000001] 
    ApplianceStateMask[ApplianceStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
    // [WARNING] CPU is over 85% for 5 minutes or more [0x00000002] 
    ApplianceStateMask[ApplianceStateMask["HIGH_CPU_WARN"] = 2] = "HIGH_CPU_WARN";
    // [WARNING] RAM consumption is over 85% for 5 minutes or more [0x00000004] 
    ApplianceStateMask[ApplianceStateMask["HIGH_RAM_WARN"] = 4] = "HIGH_RAM_WARN";
    // [ERROR] Communication error [0x00010000] 
    ApplianceStateMask[ApplianceStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
})(ApplianceStateMask || (ApplianceStateMask = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdGVNYXNrLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BcHBsaWFuY2VTdGF0ZU1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztFQU1FO0FBQ0YsTUFBTSxDQUFOLElBQVksa0JBaUJYO0FBakJELFdBQVksa0JBQWtCO0lBRTFCLHVCQUF1QjtJQUN2QiwyRUFBZ0IsQ0FBQTtJQUVoQixtRkFBbUY7SUFDbkYscUZBQXFCLENBQUE7SUFFckIsZ0VBQWdFO0lBQ2hFLDZFQUFpQixDQUFBO0lBRWpCLDRFQUE0RTtJQUM1RSw2RUFBaUIsQ0FBQTtJQUVqQiw0Q0FBNEM7SUFDNUMsaUZBQXFCLENBQUE7QUFFekIsQ0FBQyxFQWpCVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBaUI3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQXBwbGlhbmNlIChkZXZpY2UpIHN0YXRlIG1hc2sgLSB0aGUgYml0IG1hc2sgcmVwcmVzZW50cyB0aGUgYWN0dWFsIHN0YXRlIG9mIHRoZSBhcHBsaWFuY2UgYXMgcmVwb3J0ZWQgYnkgdGhlIGRldmljZSBwcm94eVxuICAgQml0IG1hc2sgcmFuZ2U6XG4gICBPSzpcdFx0MFxuICAgV0FSTklORzpcdFsweDAwMDAxIC0gMHgwMDAwRkZGRl1cdFx0MSAtIDY1NTM1XG4gICBFUlJPUjpcdFx0WzB4MTAwMDAgLSAweEZGRkZGRkZGXVx0XHQ2NTUzNiAtIE1heEludCBcbiovXG5leHBvcnQgZW51bSBBcHBsaWFuY2VTdGF0ZU1hc2sge1xuIFxuICAgIC8vIFtPS10gTm8gZXJyb3IgWzB4MF0gXG4gICAgQVBQTElBTkNFX09LID0gMCxcbiBcbiAgICAvLyBbV0FSTklOR10gTmV0d29yayBoaWdoIGxhdGVuY3kgKG92ZXIgMjAwMCBtcykgZm9yIDEgbWludXRlIG9yIG1vcmUgWzB4MDAwMDAwMDFdIFxuICAgIEhJR0hfTEFURU5DWV9XQVJOID0gMSxcbiBcbiAgICAvLyBbV0FSTklOR10gQ1BVIGlzIG92ZXIgODUlIGZvciA1IG1pbnV0ZXMgb3IgbW9yZSBbMHgwMDAwMDAwMl0gXG4gICAgSElHSF9DUFVfV0FSTiA9IDIsXG4gXG4gICAgLy8gW1dBUk5JTkddIFJBTSBjb25zdW1wdGlvbiBpcyBvdmVyIDg1JSBmb3IgNSBtaW51dGVzIG9yIG1vcmUgWzB4MDAwMDAwMDRdIFxuICAgIEhJR0hfUkFNX1dBUk4gPSA0LFxuIFxuICAgIC8vIFtFUlJPUl0gQ29tbXVuaWNhdGlvbiBlcnJvciBbMHgwMDAxMDAwMF0gXG4gICAgTk9fQ09NTV9FUlJPUiA9IDY1NTM2LFxuIFxufSJdfQ==