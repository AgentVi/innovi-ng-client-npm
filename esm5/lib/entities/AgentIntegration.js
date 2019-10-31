/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Agent integration represents a local agent to third-party interactions.
   The purpose is to connect the agent to another system in the local network
   and perform integration without the dependency with the remote core services in the data center or cloud.
   The supported integrations are:
   - Web-hook: REST API call to http(s) endpoint (GET / POST / PUT)
   - Web-socket: Websocket client endpoint; ws(s)
*/
var /*
   Agent integration represents a local agent to third-party interactions.
   The purpose is to connect the agent to another system in the local network
   and perform integration without the dependency with the remote core services in the data center or cloud.
   The supported integrations are:
   - Web-hook: REST API call to http(s) endpoint (GET / POST / PUT)
   - Web-socket: Websocket client endpoint; ws(s)
*/
AgentIntegration = /** @class */ (function () {
    function AgentIntegration(content, endpoint, operation, headers) {
        this.content = content;
        this.endpoint = endpoint;
        this.operation = operation;
        this.headers = headers;
    }
    return AgentIntegration;
}());
/*
   Agent integration represents a local agent to third-party interactions.
   The purpose is to connect the agent to another system in the local network
   and perform integration without the dependency with the remote core services in the data center or cloud.
   The supported integrations are:
   - Web-hook: REST API call to http(s) endpoint (GET / POST / PUT)
   - Web-socket: Websocket client endpoint; ws(s)
*/
export { AgentIntegration };
if (false) {
    /** @type {?} */
    AgentIntegration.prototype.content;
    /** @type {?} */
    AgentIntegration.prototype.endpoint;
    /** @type {?} */
    AgentIntegration.prototype.operation;
    /** @type {?} */
    AgentIntegration.prototype.headers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnRJbnRlZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FnZW50SW50ZWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7OztJQWNJLDBCQUFZLE9BQWdCLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLE9BQTBCO1FBQzNGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFTCx1QkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7Ozs7Ozs7Ozs7OztJQWxCRyxtQ0FBdUI7O0lBR3ZCLG9DQUF3Qjs7SUFHeEIscUNBQXlCOztJQUd6QixtQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5cbi8qIFxuICAgQWdlbnQgaW50ZWdyYXRpb24gcmVwcmVzZW50cyBhIGxvY2FsIGFnZW50IHRvIHRoaXJkLXBhcnR5IGludGVyYWN0aW9ucy5cbiAgIFRoZSBwdXJwb3NlIGlzIHRvIGNvbm5lY3QgdGhlIGFnZW50IHRvIGFub3RoZXIgc3lzdGVtIGluIHRoZSBsb2NhbCBuZXR3b3JrXG4gICBhbmQgcGVyZm9ybSBpbnRlZ3JhdGlvbiB3aXRob3V0IHRoZSBkZXBlbmRlbmN5IHdpdGggdGhlIHJlbW90ZSBjb3JlIHNlcnZpY2VzIGluIHRoZSBkYXRhIGNlbnRlciBvciBjbG91ZC5cbiAgIFRoZSBzdXBwb3J0ZWQgaW50ZWdyYXRpb25zIGFyZTpcbiAgIC0gV2ViLWhvb2s6IFJFU1QgQVBJIGNhbGwgdG8gaHR0cChzKSBlbmRwb2ludCAoR0VUIC8gUE9TVCAvIFBVVClcbiAgIC0gV2ViLXNvY2tldDogV2Vic29ja2V0IGNsaWVudCBlbmRwb2ludDsgd3MocykgXG4qL1xuZXhwb3J0IGNsYXNzIEFnZW50SW50ZWdyYXRpb24ge1xuIFxuICAgIC8vIFR5cGUgb2YgaW50ZWdyYXRpb24gY29udGVudDogMSAtIG1ldGFkYXRhLCAyIC0gZXZlbnRzIFxuICAgIHB1YmxpYyBjb250ZW50OiBudW1iZXI7XG4gXG4gICAgLy8gRW5kcG9pbnQgdXJpIChlLmcuIGh0dHBzOi8vcGF0aC90by9lbmRwb2ludCB8IHdzczovL3BhdGgvdG8vc2VydmVyKSBUaGUgYWdlbnQgc2hhbGwgY29ubmVjdCAoYXMgY2xpZW50KSB0byB0aGUgdXJpIGVuZHBvaW50IGFuZCBzZW5kIHRoZSBzcGVjaWZpZWQgY29udGVudCBTdXBwb3J0ZWQgZW5kcG9pbnRzOiBmb3IgUkVTVDogaHR0cCB8IGh0dHBzLCBmb3IgV2ViIFNvY2tldDogd3MgfCB3c3MgXG4gICAgcHVibGljIGVuZHBvaW50OiBzdHJpbmc7XG4gXG4gICAgLy8gUkVTVCBIVFRQIG9wZXJhdGlvbjogR0VUIHwgUE9TVCB8IFBVVCBcbiAgICBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBIVFRQIGhlYWRlcnMgdG8gYWRkIFxuICAgIHB1YmxpYyBoZWFkZXJzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGNvbnRlbnQ/OiBudW1iZXIsIGVuZHBvaW50Pzogc3RyaW5nLCBvcGVyYXRpb24/OiBzdHJpbmcsIGhlYWRlcnM/OiBTdHJpbmdLZXlWYWx1ZVtdKSB7IFxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gICAgICAgIHRoaXMub3BlcmF0aW9uID0gb3BlcmF0aW9uO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==