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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxtQkEwQlg7QUExQkQsV0FBWSxtQkFBbUI7SUFFM0IsaUJBQWlCO0lBQ2pCLHVFQUFhLENBQUE7SUFFYixnRUFBZ0U7SUFDaEUsbUVBQVcsQ0FBQTtJQUVYLHVGQUF1RjtJQUN2RixpRkFBa0IsQ0FBQTtJQUVsQixrREFBa0Q7SUFDbEQsNkVBQWdCLENBQUE7SUFFaEIsK0JBQStCO0lBQy9CLHFFQUFZLENBQUE7SUFFWiw0QkFBNEI7SUFDNUIsaUVBQVUsQ0FBQTtJQUVWLGlEQUFpRDtJQUNqRCxpRkFBa0IsQ0FBQTtJQUVsQiwrQ0FBK0M7SUFDL0MsNkVBQWdCLENBQUE7QUFFcEIsQ0FBQyxFQTFCVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBMEI5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQXBwbGlhbmNlIHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEFwcGxpYW5jZVN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBBcHBsaWFuY2Ugd2FzIGFkZGVkIGJ1dCBkaWQgbm90IGVzdGFibGlzaCBjb25uZWN0aW9uIHlldCBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gQXBwbGlhbmNlIGRlbGV0ZWQgYnkgdGhlIHVzZXIgZnJvbSB0aGUgc3lzdGVtIGJ1dCBub3QgY29uZmlybWF0aW9uIGFjY2VwdGVkIHlldCBbMl0gXG4gICAgUEVORElOR19ERUxFVEUgPSAyLFxuIFxuICAgIC8vIEFwcGxpYW5jZSBpcyBwYWlyZWQgYnV0IG5vdCByZWdpc3RlcmVkIHlldCBbM10gXG4gICAgVU5SRUdJU1RFUkVEID0gMyxcbiBcbiAgICAvLyBBcHBsaWFuY2UgaXMgbm90IGFjdGl2ZSBbNF0gXG4gICAgSU5BQ1RJVkUgPSA0LFxuIFxuICAgIC8vIEFwcGxpYW5jZSBpcyBydW5uaW5nIFs1XSBcbiAgICBBQ1RJVkUgPSA1LFxuIFxuICAgIC8vIEFwcGxpYW5jZSBpcyBydW5uaW5nIGFuZCBpbiB3YXJuaW5nIHN0YXRlIFs2XSBcbiAgICBBQ1RJVkVfV0FSTklORyA9IDYsXG4gXG4gICAgLy8gQXBwbGlhbmNlIGlzIHJ1bm5pbmcgYW5kIGluIGVycm9yIHN0YXRlIFs3XSBcbiAgICBBQ1RJVkVfRVJST1IgPSA3LFxuIFxufSJdfQ==