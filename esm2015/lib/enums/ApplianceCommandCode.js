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
    // Open SSH tunnel [11] 
    OPEN_SSH: 10,
    // Close SSH tunnel [12] 
    CLOSE_SSH: 11,
    // Reset to factory mode (remove pairing key and all containers except manager) [10] 
    RESET_DEVICE: 12,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZENvZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BcHBsaWFuY2VDb21tYW5kQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFNSSxpQkFBaUI7SUFDakIsWUFBYTtJQUViLHNDQUFzQztJQUN0QyxtQkFBb0I7SUFFcEIsOERBQThEO0lBQzlELGlCQUFrQjtJQUVsQixzRkFBc0Y7SUFDdEYsb0JBQXFCO0lBRXJCLGlFQUFpRTtJQUNqRSxxQkFBc0I7SUFFdEIsd0RBQXdEO0lBQ3hELGtCQUFtQjtJQUVuQiwwRUFBMEU7SUFDMUUsWUFBYTtJQUViLGdDQUFnQztJQUNoQyxjQUFlO0lBRWYsZ0RBQWdEO0lBQ2hELG9CQUFxQjtJQUVyQixnQ0FBZ0M7SUFDaEMsY0FBZTtJQUVmLHdCQUF3QjtJQUN4QixZQUFhO0lBRWIseUJBQXlCO0lBQ3pCLGFBQWM7SUFFZCxxRkFBcUY7SUFDckYsZ0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBcHBsaWFuY2UgY29tbWFuZCBjb2RlLlxuICAgTWVzc2FnZSBwYXlsb2FkIGluY2x1ZGVzIGNvbW1hbmQgc3BlY2lmaWMgZGF0YSBcbiovXG5leHBvcnQgZW51bSBBcHBsaWFuY2VDb21tYW5kQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFNlbmQgY2FwYWJpbGl0aWVzIChubyBwYXlsb2FkKSBbMV0gXG4gICAgR0VUX0NBUEFCSUxJVElFUyA9IDEsXG4gXG4gICAgLy8gU2V0IGNvbXBvbmVudHMgY29uZmlndXJhdGlvbiAob3IgYWRkIGl0IGlmIG5vdCBleGlzdHMpIFsyXSBcbiAgICBTRVRfQ09NUE9ORU5UUyA9IDIsXG4gXG4gICAgLy8gUmVtb3ZlIGNvbXBvbmVudHMgKGNvbW1hbmQgcGF5bG9hZCBkZXNjcmliZWQgaW4gQXBwbGlhbmNlQ29tbWFuZFJlbW92ZUNoYW5uZWwpIFszXSBcbiAgICBSRU1PVkVfQ09NUE9ORU5UUyA9IDMsXG4gXG4gICAgLy8gUmVzdGFydCBjb21wb25lbnQgY29udGFpbmVycyAoY3VycmVudGx5IGRvIG5vdCBpbXBsZW1lbnQpIFs0XSBcbiAgICBSRVNUQVJUX0NPTVBPTkVOVFMgPSA0LFxuIFxuICAgIC8vIFNlbmQgbGlzdCBvZiBhbGwgcnVubmluZyBjb250YWluZXJzIChubyBwYXlsb2FkKSBbNV0gXG4gICAgTElTVF9DT05UQUlORVJTID0gNSxcbiBcbiAgICAvLyBTZW5kIGxvZ3Mgb2Ygc3BlY2lmaWVkIGNvbXBvbmVudCAocHJvdmlkZWQgaW4gdGhlIGNvbW1hbmQgcGF5bG9hZCkgWzZdIFxuICAgIFNFTkRfTE9HUyA9IDYsXG4gXG4gICAgLy8gU2VuZCBzdGF0dXMgKG5vIHBheWxvYWQpIFs3XSBcbiAgICBTRU5EX1NUQVRVUyA9IDcsXG4gXG4gICAgLy8gUmVzZXQgYXBwbGlhbmNlIGNyZWRlbnRpYWxzIChubyBwYXlsb2FkKSBbOF0gXG4gICAgUkVTRVRfQ1JFREVOVElBTFMgPSA4LFxuIFxuICAgIC8vIFJlYm9vdCBob3N0IChubyBwYXlsb2FkKSBbOV0gXG4gICAgUkVCT09UX0hPU1QgPSA5LFxuIFxuICAgIC8vIE9wZW4gU1NIIHR1bm5lbCBbMTFdIFxuICAgIE9QRU5fU1NIID0gMTAsXG4gXG4gICAgLy8gQ2xvc2UgU1NIIHR1bm5lbCBbMTJdIFxuICAgIENMT1NFX1NTSCA9IDExLFxuIFxuICAgIC8vIFJlc2V0IHRvIGZhY3RvcnkgbW9kZSAocmVtb3ZlIHBhaXJpbmcga2V5IGFuZCBhbGwgY29udGFpbmVycyBleGNlcHQgbWFuYWdlcikgWzEwXSBcbiAgICBSRVNFVF9ERVZJQ0UgPSAxMixcbiBcbn0iXX0=