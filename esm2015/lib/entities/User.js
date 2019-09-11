/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   User type
*/
export class User extends BaseEntity {
}
if (false) {
    /** @type {?} */
    User.prototype.name;
    /** @type {?} */
    User.prototype.email;
    /** @type {?} */
    User.prototype.mobile;
    /** @type {?} */
    User.prototype.salt;
    /** @type {?} */
    User.prototype.hash;
    /** @type {?} */
    User.prototype.type;
    /** @type {?} */
    User.prototype.status;
    /** @type {?} */
    User.prototype.suspendedOn;
    /** @type {?} */
    User.prototype.signInAttempts;
    /** @type {?} */
    User.prototype.lastFailedSignIn;
    /** @type {?} */
    User.prototype.changePassword;
    /** @type {?} */
    User.prototype.passwordChangedOn;
    /** @type {?} */
    User.prototype.accountRoles;
    /** @type {?} */
    User.prototype.defaultAccount;
    /** @type {?} */
    User.prototype.id;
    /** @type {?} */
    User.prototype._type;
    /** @type {?} */
    User.prototype.createdOn;
    /** @type {?} */
    User.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQU9wRCxNQUFNLE9BQU8sSUFBSyxTQUFRLFVBQVU7Q0F5RG5DOzs7SUF0REcsb0JBQW9COztJQUdwQixxQkFBcUI7O0lBR3JCLHNCQUFzQjs7SUFHdEIsb0JBQW9COztJQUdwQixvQkFBb0I7O0lBR3BCLG9CQUEwQjs7SUFHMUIsc0JBQThCOztJQUc5QiwyQkFBMkI7O0lBRzNCLDhCQUE4Qjs7SUFHOUIsZ0NBQWdDOztJQUdoQyw4QkFBK0I7O0lBRy9CLGlDQUFpQzs7SUFHakMsNEJBQW1DOztJQUduQyw4QkFBOEI7O0lBRzlCLGtCQUFrQjs7SUFHbEIscUJBQXFCOztJQUdyQix5QkFBeUI7O0lBR3pCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlIH0gZnJvbSAnLi4vY29tbW9uL0FjY291bnRSb2xlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IFVzZXJUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJUeXBlQ29kZSc7XG5pbXBvcnQgeyBVc2VyU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1VzZXJTdGF0dXNDb2RlJztcblxuLyogXG4gICBVc2VyIHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbW9iaWxlIHBob25lIG51bWJlciAoZm9yIG5vdGlmaWNhdGlvbiBhbmQgdmFsaWRhdGlvbikgXG4gICAgcHVibGljIG1vYmlsZTogc3RyaW5nO1xuIFxuICAgIC8vIFBhc3N3b3JkIHNhbHQgXG4gICAgcHVibGljIHNhbHQ6IHN0cmluZztcbiBcbiAgICAvLyBQYXNzd29yZCBoYXNoIFxuICAgIHB1YmxpYyBoYXNoOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciB0eXBlOiBVTkRFRklORUQgfCBTWVNBRE1JTiB8IFNVUFBPUlQgfCBVU0VSIFxuICAgIHB1YmxpYyB0eXBlOiBVc2VyVHlwZUNvZGU7XG4gXG4gICAgLy8gVXNlciBzdGF0dXM6IFVOREVGSU5FRCB8IFBFTkRJTkcgfCBBQ1RJVkUgfCBCTE9DS0VEIHwgU1VTUEVOREVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IFVzZXJTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFdoZW4gdXNlciB3YXMgbGFzdCBzdXNwZW5kZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBzdXNwZW5kZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBTaWduLWluIEF0dGVtcHRzIFxuICAgIHB1YmxpYyBzaWduSW5BdHRlbXB0czogbnVtYmVyO1xuIFxuICAgIC8vIExhc3QgRmFpbGVkIFNpZ24taW4gW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBsYXN0RmFpbGVkU2lnbkluOiBudW1iZXI7XG4gXG4gICAgLy8gVXNlciBtdXN0IGNoYW5nZSBwYXNzd29yZCBvbiBuZXh0IGxvZ2luIFxuICAgIHB1YmxpYyBjaGFuZ2VQYXNzd29yZDogYm9vbGVhbjtcbiBcbiAgICAvLyBXaGVuIHVzZXIgY3JlYXRlZCBoaXMgcGFzc3dvcmQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBwYXNzd29yZENoYW5nZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgYWNjb3VudHMgYW5kIHJvbGVzIHRoZSB1c2VyIGhhcyBhY2Nlc3MgdG8gXG4gICAgcHVibGljIGFjY291bnRSb2xlczogQWNjb3VudFJvbGVbXTtcbiBcbiAgICAvLyBEZWZhdWx0IGFjY291bnQgSWQgXG4gICAgcHVibGljIGRlZmF1bHRBY2NvdW50OiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19