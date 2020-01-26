/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration target describes connectivity attributes of the integrated system
*/
export class IntegrationTarget extends BaseEntity {
}
if (false) {
    /** @type {?} */
    IntegrationTarget.prototype.accountId;
    /** @type {?} */
    IntegrationTarget.prototype.name;
    /** @type {?} */
    IntegrationTarget.prototype.type;
    /** @type {?} */
    IntegrationTarget.prototype.host;
    /** @type {?} */
    IntegrationTarget.prototype.port;
    /** @type {?} */
    IntegrationTarget.prototype.user;
    /** @type {?} */
    IntegrationTarget.prototype.password;
    /** @type {?} */
    IntegrationTarget.prototype.url;
    /** @type {?} */
    IntegrationTarget.prototype.operation;
    /** @type {?} */
    IntegrationTarget.prototype.headers;
    /** @type {?} */
    IntegrationTarget.prototype.id;
    /** @type {?} */
    IntegrationTarget.prototype._type;
    /** @type {?} */
    IntegrationTarget.prototype.createdOn;
    /** @type {?} */
    IntegrationTarget.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UYXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvblRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBT3BELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0NBNkNoRDs7O0lBMUNHLHNDQUF5Qjs7SUFHekIsaUNBQW9COztJQUdwQixpQ0FBaUM7O0lBR2pDLGlDQUFvQjs7SUFHcEIsaUNBQW9COztJQUdwQixpQ0FBb0I7O0lBR3BCLHFDQUF3Qjs7SUFHeEIsZ0NBQW1COztJQUduQixzQ0FBeUI7O0lBR3pCLG9DQUFpQzs7SUFHakMsK0JBQWtCOztJQUdsQixrQ0FBcUI7O0lBR3JCLHNDQUF5Qjs7SUFHekIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgSW50ZWdyYXRpb25UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0ludGVncmF0aW9uVHlwZUNvZGUnO1xuaW1wb3J0IHsgU3RyaW5nS2V5VmFsdWUgfSBmcm9tICcuLi9jb21tb24vU3RyaW5nS2V5VmFsdWUnO1xuXG4vKiBcbiAgIEludGVncmF0aW9uIHRhcmdldCBkZXNjcmliZXMgY29ubmVjdGl2aXR5IGF0dHJpYnV0ZXMgb2YgdGhlIGludGVncmF0ZWQgc3lzdGVtIFxuKi9cbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvblRhcmdldCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0eXBlIFxuICAgIHB1YmxpYyB0eXBlOiBJbnRlZ3JhdGlvblR5cGVDb2RlO1xuIFxuICAgIC8vIEhvc3QgbmFtZSBvciBpcCBhZGRyZXNzIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgaG9zdDogc3RyaW5nO1xuIFxuICAgIC8vIFBvcnQgbnVtYmVyIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgcG9ydDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyB1c2VyOiBzdHJpbmc7XG4gXG4gICAgLy8gUGFzc3dvcmQgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuIFxuICAgIC8vIEhUVFAgcHJvdG9jb2wgVVJMIHBhdGggKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gXG4gICAgLy8gSFRUUCBwcm90b2NvbCBPcGVyYXRpb246IEdFVCB8IFBPU1QgfCBQVVQgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSFRUUCBwcm90b2NvbCBIZWFkZXJzIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIGhlYWRlcnM6IFN0cmluZ0tleVZhbHVlW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19