/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ApplianceCommandCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Send capabilities (no payload) [1] 
    GET_CAPABILITIES: 1,
    // Set components configuration (or add it if not exists) [2] 
    SET_COMPONENTS: 2,
    // Remove components (command payload described in ApplianceCommandRemoveChannel) [3] 
    REMOVE_COMPONENTS: 3,
    // Restart component containers (currently do not implement) [4] 
    RESTART_COMPONENTS: 4,
    // Send list of all running containers (no payload) [5] 
    LIST_CONTAINERS: 5,
    // Send logs of specified component (provided in the command payload) [6] 
    SEND_LOGS: 6,
    // Send status (no payload) [7] 
    SEND_STATUS: 7,
    // Reset appliance credentials (no payload) [8] 
    RESET_CREDENTIALS: 8,
    // Reboot host (no payload) [9] 
    REBOOT_HOST: 9,
    // Reset to factory mode (remove all container except manager) [10] 
    FACTORY_RESET: 10,
    // Open SSH tunnel [11] 
    OPEN_SSH: 11,
    // Close SSH tunnel [12] 
    CLOSE_SSH: 12,
};
export { ApplianceCommandCode };
ApplianceCommandCode[ApplianceCommandCode.UNDEFINED] = 'UNDEFINED';
ApplianceCommandCode[ApplianceCommandCode.GET_CAPABILITIES] = 'GET_CAPABILITIES';
ApplianceCommandCode[ApplianceCommandCode.SET_COMPONENTS] = 'SET_COMPONENTS';
ApplianceCommandCode[ApplianceCommandCode.REMOVE_COMPONENTS] = 'REMOVE_COMPONENTS';
ApplianceCommandCode[ApplianceCommandCode.RESTART_COMPONENTS] = 'RESTART_COMPONENTS';
ApplianceCommandCode[ApplianceCommandCode.LIST_CONTAINERS] = 'LIST_CONTAINERS';
ApplianceCommandCode[ApplianceCommandCode.SEND_LOGS] = 'SEND_LOGS';
ApplianceCommandCode[ApplianceCommandCode.SEND_STATUS] = 'SEND_STATUS';
ApplianceCommandCode[ApplianceCommandCode.RESET_CREDENTIALS] = 'RESET_CREDENTIALS';
ApplianceCommandCode[ApplianceCommandCode.REBOOT_HOST] = 'REBOOT_HOST';
ApplianceCommandCode[ApplianceCommandCode.FACTORY_RESET] = 'FACTORY_RESET';
ApplianceCommandCode[ApplianceCommandCode.OPEN_SSH] = 'OPEN_SSH';
ApplianceCommandCode[ApplianceCommandCode.CLOSE_SSH] = 'CLOSE_SSH';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZENvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BcHBsaWFuY2VDb21tYW5kQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNSSxpQkFBaUI7SUFDakIsWUFBYTtJQUViLHNDQUFzQztJQUN0QyxtQkFBb0I7SUFFcEIsOERBQThEO0lBQzlELGlCQUFrQjtJQUVsQixzRkFBc0Y7SUFDdEYsb0JBQXFCO0lBRXJCLGlFQUFpRTtJQUNqRSxxQkFBc0I7SUFFdEIsd0RBQXdEO0lBQ3hELGtCQUFtQjtJQUVuQiwwRUFBMEU7SUFDMUUsWUFBYTtJQUViLGdDQUFnQztJQUNoQyxjQUFlO0lBRWYsZ0RBQWdEO0lBQ2hELG9CQUFxQjtJQUVyQixnQ0FBZ0M7SUFDaEMsY0FBZTtJQUVmLG9FQUFvRTtJQUNwRSxpQkFBa0I7SUFFbEIsd0JBQXdCO0lBQ3hCLFlBQWE7SUFFYix5QkFBeUI7SUFDekIsYUFBYyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgQXBwbGlhbmNlIGNvbW1hbmQgY29kZS5cbiAgIE1lc3NhZ2UgcGF5bG9hZCBpbmNsdWRlcyBjb21tYW5kIHNwZWNpZmljIGRhdGEgXG4qL1xuZXhwb3J0IGVudW0gQXBwbGlhbmNlQ29tbWFuZENvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBTZW5kIGNhcGFiaWxpdGllcyAobm8gcGF5bG9hZCkgWzFdIFxuICAgIEdFVF9DQVBBQklMSVRJRVMgPSAxLFxuIFxuICAgIC8vIFNldCBjb21wb25lbnRzIGNvbmZpZ3VyYXRpb24gKG9yIGFkZCBpdCBpZiBub3QgZXhpc3RzKSBbMl0gXG4gICAgU0VUX0NPTVBPTkVOVFMgPSAyLFxuIFxuICAgIC8vIFJlbW92ZSBjb21wb25lbnRzIChjb21tYW5kIHBheWxvYWQgZGVzY3JpYmVkIGluIEFwcGxpYW5jZUNvbW1hbmRSZW1vdmVDaGFubmVsKSBbM10gXG4gICAgUkVNT1ZFX0NPTVBPTkVOVFMgPSAzLFxuIFxuICAgIC8vIFJlc3RhcnQgY29tcG9uZW50IGNvbnRhaW5lcnMgKGN1cnJlbnRseSBkbyBub3QgaW1wbGVtZW50KSBbNF0gXG4gICAgUkVTVEFSVF9DT01QT05FTlRTID0gNCxcbiBcbiAgICAvLyBTZW5kIGxpc3Qgb2YgYWxsIHJ1bm5pbmcgY29udGFpbmVycyAobm8gcGF5bG9hZCkgWzVdIFxuICAgIExJU1RfQ09OVEFJTkVSUyA9IDUsXG4gXG4gICAgLy8gU2VuZCBsb2dzIG9mIHNwZWNpZmllZCBjb21wb25lbnQgKHByb3ZpZGVkIGluIHRoZSBjb21tYW5kIHBheWxvYWQpIFs2XSBcbiAgICBTRU5EX0xPR1MgPSA2LFxuIFxuICAgIC8vIFNlbmQgc3RhdHVzIChubyBwYXlsb2FkKSBbN10gXG4gICAgU0VORF9TVEFUVVMgPSA3LFxuIFxuICAgIC8vIFJlc2V0IGFwcGxpYW5jZSBjcmVkZW50aWFscyAobm8gcGF5bG9hZCkgWzhdIFxuICAgIFJFU0VUX0NSRURFTlRJQUxTID0gOCxcbiBcbiAgICAvLyBSZWJvb3QgaG9zdCAobm8gcGF5bG9hZCkgWzldIFxuICAgIFJFQk9PVF9IT1NUID0gOSxcbiBcbiAgICAvLyBSZXNldCB0byBmYWN0b3J5IG1vZGUgKHJlbW92ZSBhbGwgY29udGFpbmVyIGV4Y2VwdCBtYW5hZ2VyKSBbMTBdIFxuICAgIEZBQ1RPUllfUkVTRVQgPSAxMCxcbiBcbiAgICAvLyBPcGVuIFNTSCB0dW5uZWwgWzExXSBcbiAgICBPUEVOX1NTSCA9IDExLFxuIFxuICAgIC8vIENsb3NlIFNTSCB0dW5uZWwgWzEyXSBcbiAgICBDTE9TRV9TU0ggPSAxMixcbiBcbn0iXX0=