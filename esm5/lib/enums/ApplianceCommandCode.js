/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ApplianceCommandCode = {
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
    // Open SSH tunnel [10] 
    OPEN_SSH: 10,
    // Close SSH tunnel [11] 
    CLOSE_SSH: 11,
    // Reset to factory mode (remove pairing key and all containers except manager) [12] 
    RESET_DEVICE: 12,
    // Discovery - discover all network cameras using ONVIF discovery protocol [13] 
    ONVIF_DISCOVERY: 13,
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
ApplianceCommandCode[ApplianceCommandCode.OPEN_SSH] = 'OPEN_SSH';
ApplianceCommandCode[ApplianceCommandCode.CLOSE_SSH] = 'CLOSE_SSH';
ApplianceCommandCode[ApplianceCommandCode.RESET_DEVICE] = 'RESET_DEVICE';
ApplianceCommandCode[ApplianceCommandCode.ONVIF_DISCOVERY] = 'ONVIF_DISCOVERY';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZENvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BcHBsaWFuY2VDb21tYW5kQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNSSxpQkFBaUI7SUFDakIsWUFBYTtJQUViLHNDQUFzQztJQUN0QyxtQkFBb0I7SUFFcEIsOERBQThEO0lBQzlELGlCQUFrQjtJQUVsQixzRkFBc0Y7SUFDdEYsb0JBQXFCO0lBRXJCLGlFQUFpRTtJQUNqRSxxQkFBc0I7SUFFdEIsd0RBQXdEO0lBQ3hELGtCQUFtQjtJQUVuQiwwRUFBMEU7SUFDMUUsWUFBYTtJQUViLGdDQUFnQztJQUNoQyxjQUFlO0lBRWYsZ0RBQWdEO0lBQ2hELG9CQUFxQjtJQUVyQixnQ0FBZ0M7SUFDaEMsY0FBZTtJQUVmLHdCQUF3QjtJQUN4QixZQUFhO0lBRWIseUJBQXlCO0lBQ3pCLGFBQWM7SUFFZCxxRkFBcUY7SUFDckYsZ0JBQWlCO0lBRWpCLGdGQUFnRjtJQUNoRixtQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEFwcGxpYW5jZSBjb21tYW5kIGNvZGUuXG4gICBNZXNzYWdlIHBheWxvYWQgaW5jbHVkZXMgY29tbWFuZCBzcGVjaWZpYyBkYXRhIFxuKi9cbmV4cG9ydCBlbnVtIEFwcGxpYW5jZUNvbW1hbmRDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gU2VuZCBjYXBhYmlsaXRpZXMgKG5vIHBheWxvYWQpIFsxXSBcbiAgICBHRVRfQ0FQQUJJTElUSUVTID0gMSxcbiBcbiAgICAvLyBTZXQgY29tcG9uZW50cyBjb25maWd1cmF0aW9uIChvciBhZGQgaXQgaWYgbm90IGV4aXN0cykgWzJdIFxuICAgIFNFVF9DT01QT05FTlRTID0gMixcbiBcbiAgICAvLyBSZW1vdmUgY29tcG9uZW50cyAoY29tbWFuZCBwYXlsb2FkIGRlc2NyaWJlZCBpbiBBcHBsaWFuY2VDb21tYW5kUmVtb3ZlQ2hhbm5lbCkgWzNdIFxuICAgIFJFTU9WRV9DT01QT05FTlRTID0gMyxcbiBcbiAgICAvLyBSZXN0YXJ0IGNvbXBvbmVudCBjb250YWluZXJzIChjdXJyZW50bHkgZG8gbm90IGltcGxlbWVudCkgWzRdIFxuICAgIFJFU1RBUlRfQ09NUE9ORU5UUyA9IDQsXG4gXG4gICAgLy8gU2VuZCBsaXN0IG9mIGFsbCBydW5uaW5nIGNvbnRhaW5lcnMgKG5vIHBheWxvYWQpIFs1XSBcbiAgICBMSVNUX0NPTlRBSU5FUlMgPSA1LFxuIFxuICAgIC8vIFNlbmQgbG9ncyBvZiBzcGVjaWZpZWQgY29tcG9uZW50IChwcm92aWRlZCBpbiB0aGUgY29tbWFuZCBwYXlsb2FkKSBbNl0gXG4gICAgU0VORF9MT0dTID0gNixcbiBcbiAgICAvLyBTZW5kIHN0YXR1cyAobm8gcGF5bG9hZCkgWzddIFxuICAgIFNFTkRfU1RBVFVTID0gNyxcbiBcbiAgICAvLyBSZXNldCBhcHBsaWFuY2UgY3JlZGVudGlhbHMgKG5vIHBheWxvYWQpIFs4XSBcbiAgICBSRVNFVF9DUkVERU5USUFMUyA9IDgsXG4gXG4gICAgLy8gUmVib290IGhvc3QgKG5vIHBheWxvYWQpIFs5XSBcbiAgICBSRUJPT1RfSE9TVCA9IDksXG4gXG4gICAgLy8gT3BlbiBTU0ggdHVubmVsIFsxMF0gXG4gICAgT1BFTl9TU0ggPSAxMCxcbiBcbiAgICAvLyBDbG9zZSBTU0ggdHVubmVsIFsxMV0gXG4gICAgQ0xPU0VfU1NIID0gMTEsXG4gXG4gICAgLy8gUmVzZXQgdG8gZmFjdG9yeSBtb2RlIChyZW1vdmUgcGFpcmluZyBrZXkgYW5kIGFsbCBjb250YWluZXJzIGV4Y2VwdCBtYW5hZ2VyKSBbMTJdIFxuICAgIFJFU0VUX0RFVklDRSA9IDEyLFxuIFxuICAgIC8vIERpc2NvdmVyeSAtIGRpc2NvdmVyIGFsbCBuZXR3b3JrIGNhbWVyYXMgdXNpbmcgT05WSUYgZGlzY292ZXJ5IHByb3RvY29sIFsxM10gXG4gICAgT05WSUZfRElTQ09WRVJZID0gMTMsXG4gXG59Il19