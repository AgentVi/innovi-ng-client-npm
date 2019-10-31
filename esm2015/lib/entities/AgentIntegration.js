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
export class AgentIntegration {
    /**
     * @param {?=} content
     * @param {?=} endpoint
     * @param {?=} operation
     * @param {?=} headers
     */
    constructor(content, endpoint, operation, headers) {
        this.content = content;
        this.endpoint = endpoint;
        this.operation = operation;
        this.headers = headers;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnRJbnRlZ3JhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FnZW50SW50ZWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7OztJQWN6QixZQUFZLE9BQWdCLEVBQUUsUUFBaUIsRUFBRSxTQUFrQixFQUFFLE9BQTBCO1FBQzNGLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FFSjs7O0lBbEJHLG1DQUF1Qjs7SUFHdkIsb0NBQXdCOztJQUd4QixxQ0FBeUI7O0lBR3pCLG1DQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ0tleVZhbHVlIH0gZnJvbSAnLi4vY29tbW9uL1N0cmluZ0tleVZhbHVlJztcblxuLyogXG4gICBBZ2VudCBpbnRlZ3JhdGlvbiByZXByZXNlbnRzIGEgbG9jYWwgYWdlbnQgdG8gdGhpcmQtcGFydHkgaW50ZXJhY3Rpb25zLlxuICAgVGhlIHB1cnBvc2UgaXMgdG8gY29ubmVjdCB0aGUgYWdlbnQgdG8gYW5vdGhlciBzeXN0ZW0gaW4gdGhlIGxvY2FsIG5ldHdvcmtcbiAgIGFuZCBwZXJmb3JtIGludGVncmF0aW9uIHdpdGhvdXQgdGhlIGRlcGVuZGVuY3kgd2l0aCB0aGUgcmVtb3RlIGNvcmUgc2VydmljZXMgaW4gdGhlIGRhdGEgY2VudGVyIG9yIGNsb3VkLlxuICAgVGhlIHN1cHBvcnRlZCBpbnRlZ3JhdGlvbnMgYXJlOlxuICAgLSBXZWItaG9vazogUkVTVCBBUEkgY2FsbCB0byBodHRwKHMpIGVuZHBvaW50IChHRVQgLyBQT1NUIC8gUFVUKVxuICAgLSBXZWItc29ja2V0OiBXZWJzb2NrZXQgY2xpZW50IGVuZHBvaW50OyB3cyhzKSBcbiovXG5leHBvcnQgY2xhc3MgQWdlbnRJbnRlZ3JhdGlvbiB7XG4gXG4gICAgLy8gVHlwZSBvZiBpbnRlZ3JhdGlvbiBjb250ZW50OiAxIC0gbWV0YWRhdGEsIDIgLSBldmVudHMgXG4gICAgcHVibGljIGNvbnRlbnQ6IG51bWJlcjtcbiBcbiAgICAvLyBFbmRwb2ludCB1cmkgKGUuZy4gaHR0cHM6Ly9wYXRoL3RvL2VuZHBvaW50IHwgd3NzOi8vcGF0aC90by9zZXJ2ZXIpIFRoZSBhZ2VudCBzaGFsbCBjb25uZWN0IChhcyBjbGllbnQpIHRvIHRoZSB1cmkgZW5kcG9pbnQgYW5kIHNlbmQgdGhlIHNwZWNpZmllZCBjb250ZW50IFN1cHBvcnRlZCBlbmRwb2ludHM6IGZvciBSRVNUOiBodHRwIHwgaHR0cHMsIGZvciBXZWIgU29ja2V0OiB3cyB8IHdzcyBcbiAgICBwdWJsaWMgZW5kcG9pbnQ6IHN0cmluZztcbiBcbiAgICAvLyBSRVNUIEhUVFAgb3BlcmF0aW9uOiBHRVQgfCBQT1NUIHwgUFVUIFxuICAgIHB1YmxpYyBvcGVyYXRpb246IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIEhUVFAgaGVhZGVycyB0byBhZGQgXG4gICAgcHVibGljIGhlYWRlcnM6IFN0cmluZ0tleVZhbHVlW107XG4gXG4gICAgY29uc3RydWN0b3IoY29udGVudD86IG51bWJlciwgZW5kcG9pbnQ/OiBzdHJpbmcsIG9wZXJhdGlvbj86IHN0cmluZywgaGVhZGVycz86IFN0cmluZ0tleVZhbHVlW10pIHsgXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludDtcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgfVxuXG59XG5cblxuIl19