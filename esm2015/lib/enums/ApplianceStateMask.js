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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdGVNYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQXBwbGlhbmNlU3RhdGVNYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGtCQWlCWDtBQWpCRCxXQUFZLGtCQUFrQjtJQUUxQix1QkFBdUI7SUFDdkIsMkVBQWdCLENBQUE7SUFFaEIsbUZBQW1GO0lBQ25GLHFGQUFxQixDQUFBO0lBRXJCLGdFQUFnRTtJQUNoRSw2RUFBaUIsQ0FBQTtJQUVqQiw0RUFBNEU7SUFDNUUsNkVBQWlCLENBQUE7SUFFakIsNENBQTRDO0lBQzVDLGlGQUFxQixDQUFBO0FBRXpCLENBQUMsRUFqQlcsa0JBQWtCLEtBQWxCLGtCQUFrQixRQWlCN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEFwcGxpYW5jZSAoZGV2aWNlKSBzdGF0ZSBtYXNrIC0gdGhlIGJpdCBtYXNrIHJlcHJlc2VudHMgdGhlIGFjdHVhbCBzdGF0ZSBvZiB0aGUgYXBwbGlhbmNlIGFzIHJlcG9ydGVkIGJ5IHRoZSBkZXZpY2UgcHJveHlcbiAgIEJpdCBtYXNrIHJhbmdlOlxuICAgT0s6XHRcdDBcbiAgIFdBUk5JTkc6XHRbMHgwMDAwMSAtIDB4MDAwMEZGRkZdXHRcdDEgLSA2NTUzNVxuICAgRVJST1I6XHRcdFsweDEwMDAwIC0gMHhGRkZGRkZGRl1cdFx0NjU1MzYgLSBNYXhJbnQgXG4qL1xuZXhwb3J0IGVudW0gQXBwbGlhbmNlU3RhdGVNYXNrIHtcbiBcbiAgICAvLyBbT0tdIE5vIGVycm9yIFsweDBdIFxuICAgIEFQUExJQU5DRV9PSyA9IDAsXG4gXG4gICAgLy8gW1dBUk5JTkddIE5ldHdvcmsgaGlnaCBsYXRlbmN5IChvdmVyIDIwMDAgbXMpIGZvciAxIG1pbnV0ZSBvciBtb3JlIFsweDAwMDAwMDAxXSBcbiAgICBISUdIX0xBVEVOQ1lfV0FSTiA9IDEsXG4gXG4gICAgLy8gW1dBUk5JTkddIENQVSBpcyBvdmVyIDg1JSBmb3IgNSBtaW51dGVzIG9yIG1vcmUgWzB4MDAwMDAwMDJdIFxuICAgIEhJR0hfQ1BVX1dBUk4gPSAyLFxuIFxuICAgIC8vIFtXQVJOSU5HXSBSQU0gY29uc3VtcHRpb24gaXMgb3ZlciA4NSUgZm9yIDUgbWludXRlcyBvciBtb3JlIFsweDAwMDAwMDA0XSBcbiAgICBISUdIX1JBTV9XQVJOID0gNCxcbiBcbiAgICAvLyBbRVJST1JdIENvbW11bmljYXRpb24gZXJyb3IgWzB4MDAwMTAwMDBdIFxuICAgIE5PX0NPTU1fRVJST1IgPSA2NTUzNixcbiBcbn0iXX0=