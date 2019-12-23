/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ApplianceStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Appliance was added but did not establish connection yet [1] 
    PENDING: 1,
    // Appliance deleted by the user from the system but not confirmation accepted yet [2] 
    PENDING_DELETE: 2,
    // Appliance is paired but not registered yet [3] 
    UNREGISTERED: 3,
    // Appliance is not active [4] 
    INACTIVE: 4,
    // Appliance is running [5] 
    ACTIVE: 5,
    // Appliance is running and in warning state [6] 
    ACTIVE_WARNING: 6,
    // Appliance is running and in error state [7] 
    ACTIVE_ERROR: 7,
};
export { ApplianceStatusCode };
ApplianceStatusCode[ApplianceStatusCode.UNDEFINED] = 'UNDEFINED';
ApplianceStatusCode[ApplianceStatusCode.PENDING] = 'PENDING';
ApplianceStatusCode[ApplianceStatusCode.PENDING_DELETE] = 'PENDING_DELETE';
ApplianceStatusCode[ApplianceStatusCode.UNREGISTERED] = 'UNREGISTERED';
ApplianceStatusCode[ApplianceStatusCode.INACTIVE] = 'INACTIVE';
ApplianceStatusCode[ApplianceStatusCode.ACTIVE] = 'ACTIVE';
ApplianceStatusCode[ApplianceStatusCode.ACTIVE_WARNING] = 'ACTIVE_WARNING';
ApplianceStatusCode[ApplianceStatusCode.ACTIVE_ERROR] = 'ACTIVE_ERROR';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBS0ksaUJBQWlCO0lBQ2pCLFlBQWE7SUFFYixnRUFBZ0U7SUFDaEUsVUFBVztJQUVYLHVGQUF1RjtJQUN2RixpQkFBa0I7SUFFbEIsa0RBQWtEO0lBQ2xELGVBQWdCO0lBRWhCLCtCQUErQjtJQUMvQixXQUFZO0lBRVosNEJBQTRCO0lBQzVCLFNBQVU7SUFFVixpREFBaUQ7SUFDakQsaUJBQWtCO0lBRWxCLCtDQUErQztJQUMvQyxlQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQXBwbGlhbmNlIHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEFwcGxpYW5jZVN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBBcHBsaWFuY2Ugd2FzIGFkZGVkIGJ1dCBkaWQgbm90IGVzdGFibGlzaCBjb25uZWN0aW9uIHlldCBbMV0gXG4gICAgUEVORElORyA9IDEsXG4gXG4gICAgLy8gQXBwbGlhbmNlIGRlbGV0ZWQgYnkgdGhlIHVzZXIgZnJvbSB0aGUgc3lzdGVtIGJ1dCBub3QgY29uZmlybWF0aW9uIGFjY2VwdGVkIHlldCBbMl0gXG4gICAgUEVORElOR19ERUxFVEUgPSAyLFxuIFxuICAgIC8vIEFwcGxpYW5jZSBpcyBwYWlyZWQgYnV0IG5vdCByZWdpc3RlcmVkIHlldCBbM10gXG4gICAgVU5SRUdJU1RFUkVEID0gMyxcbiBcbiAgICAvLyBBcHBsaWFuY2UgaXMgbm90IGFjdGl2ZSBbNF0gXG4gICAgSU5BQ1RJVkUgPSA0LFxuIFxuICAgIC8vIEFwcGxpYW5jZSBpcyBydW5uaW5nIFs1XSBcbiAgICBBQ1RJVkUgPSA1LFxuIFxuICAgIC8vIEFwcGxpYW5jZSBpcyBydW5uaW5nIGFuZCBpbiB3YXJuaW5nIHN0YXRlIFs2XSBcbiAgICBBQ1RJVkVfV0FSTklORyA9IDYsXG4gXG4gICAgLy8gQXBwbGlhbmNlIGlzIHJ1bm5pbmcgYW5kIGluIGVycm9yIHN0YXRlIFs3XSBcbiAgICBBQ1RJVkVfRVJST1IgPSA3LFxuIFxufSJdfQ==