/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration target describes connectivity details of the integrated system
   Definition of target systems is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder
*/
var /*
   Integration target describes connectivity details of the integrated system
   Definition of target systems is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder
*/
IntegrationTarget = /** @class */ (function (_super) {
    tslib_1.__extends(IntegrationTarget, _super);
    function IntegrationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntegrationTarget;
}(BaseEntity));
/*
   Integration target describes connectivity details of the integrated system
   Definition of target systems is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder
*/
export { IntegrationTarget };
if (false) {
    /** @type {?} */
    IntegrationTarget.prototype.accountId;
    /** @type {?} */
    IntegrationTarget.prototype.name;
    /** @type {?} */
    IntegrationTarget.prototype.type;
    /** @type {?} */
    IntegrationTarget.prototype.protocol;
    /** @type {?} */
    IntegrationTarget.prototype.operation;
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
    IntegrationTarget.prototype.headers;
    /** @type {?} */
    IntegrationTarget.prototype.recipients;
    /** @type {?} */
    IntegrationTarget.prototype.subject;
    /** @type {?} */
    IntegrationTarget.prototype.body;
    /** @type {?} */
    IntegrationTarget.prototype.clipRequired;
    /** @type {?} */
    IntegrationTarget.prototype.id;
    /** @type {?} */
    IntegrationTarget.prototype._type;
    /** @type {?} */
    IntegrationTarget.prototype.createdOn;
    /** @type {?} */
    IntegrationTarget.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UYXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvblRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBU3BEOzs7Ozs7SUFBdUMsNkNBQVU7SUFBakQ7O0lBMkRBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUEzREQsQ0FBdUMsVUFBVSxHQTJEaEQ7Ozs7Ozs7OztJQXhERyxzQ0FBeUI7O0lBR3pCLGlDQUFvQjs7SUFHcEIsaUNBQWlDOztJQUdqQyxxQ0FBd0I7O0lBR3hCLHNDQUF5Qjs7SUFHekIsaUNBQW9COztJQUdwQixpQ0FBb0I7O0lBR3BCLGlDQUFvQjs7SUFHcEIscUNBQXdCOztJQUd4QixnQ0FBbUI7O0lBR25CLG9DQUFpQzs7SUFHakMsdUNBQTRCOztJQUc1QixvQ0FBdUI7O0lBR3ZCLGlDQUFvQjs7SUFHcEIseUNBQTZCOztJQUc3QiwrQkFBa0I7O0lBR2xCLGtDQUFxQjs7SUFHckIsc0NBQXlCOztJQUd6QixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBJbnRlZ3JhdGlvblR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvSW50ZWdyYXRpb25UeXBlQ29kZSc7XG5pbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5cbi8qIFxuICAgSW50ZWdyYXRpb24gdGFyZ2V0IGRlc2NyaWJlcyBjb25uZWN0aXZpdHkgZGV0YWlscyBvZiB0aGUgaW50ZWdyYXRlZCBzeXN0ZW1cbiAgIERlZmluaXRpb24gb2YgdGFyZ2V0IHN5c3RlbXMgaXMgZG9uZSBieSB0aGUgYWNjb3VudCBhZG1pbmlzdHJhdG9yIG9ubHlcbiAgIEFjY291bnQgYWRtaW5pc3RyYXRvciBTdXBlcnZpc29yIHJvbGVzIGNhbiBkZWZpbmUgc3BlY2lmaWMgaW50ZWdyYXRpb25zIHBlciBhY2NvdW50IC8gZm9sZGVyIFxuKi9cbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvblRhcmdldCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0eXBlIChTTVRQIHwgSFRUUCB8IElNTUlYIHwgU0VOVElORUwgfCBNSUxFU1RPTkUgfCBHRU5FVEVDKSBcbiAgICBwdWJsaWMgdHlwZTogSW50ZWdyYXRpb25UeXBlQ29kZTtcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBwcm90b2NvbDogc210cCB8IGh0dHAgfCBodHRwcyBcbiAgICBwdWJsaWMgcHJvdG9jb2w6IHN0cmluZztcbiBcbiAgICAvLyBPcGVyYXRpb246IEdFVCB8IFBPU1QgfCBQVVQgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSG9zdCBuYW1lIG9yIGlwIGFkZHJlc3MgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBob3N0OiBzdHJpbmc7XG4gXG4gICAgLy8gUG9ydCBudW1iZXIgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBwb3J0OiBudW1iZXI7XG4gXG4gICAgLy8gVXNlciAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIHVzZXI6IHN0cmluZztcbiBcbiAgICAvLyBQYXNzd29yZCAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG4gXG4gICAgLy8gVVJMIHBhdGggKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gXG4gICAgLy8gSGVhZGVycyAoYXBwbGljYWJsZSBmb3IgaHR0cC9odHRwcyBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBoZWFkZXJzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIExpc3Qgb2YgcmVjaXBpZW50cyAoYXBwbGljYWJsZSBmb3Igc210cCBwcm90b2NvbCkgXG4gICAgcHVibGljIHJlY2lwaWVudHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIE1lc3NhZ2Ugc3ViamVjdCB0ZW1wbGF0ZSAoYXBwbGljYWJsZSBmb3Igc210cCBwcm90b2NvbCkgXG4gICAgcHVibGljIHN1YmplY3Q6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGJvZHkgdGVtcGxhdGUgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBib2R5OiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgY2xpcCByZXF1aXJlZCBmb3IgdGhlIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBjbGlwUmVxdWlyZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxufVxuXG5cbiJdfQ==