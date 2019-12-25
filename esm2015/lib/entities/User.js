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
    User.prototype.lastSignIn;
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
    User.prototype.description;
    /** @type {?} */
    User.prototype.id;
    /** @type {?} */
    User.prototype._type;
    /** @type {?} */
    User.prototype.createdOn;
    /** @type {?} */
    User.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQU9wRCxNQUFNLE9BQU8sSUFBSyxTQUFRLFVBQVU7Q0ErRG5DOzs7SUE1REcsb0JBQW9COztJQUdwQixxQkFBcUI7O0lBR3JCLHNCQUFzQjs7SUFHdEIsb0JBQW9COztJQUdwQixvQkFBb0I7O0lBR3BCLG9CQUEwQjs7SUFHMUIsc0JBQThCOztJQUc5QiwyQkFBMkI7O0lBRzNCLDhCQUE4Qjs7SUFHOUIsMEJBQTBCOztJQUcxQixnQ0FBZ0M7O0lBR2hDLDhCQUErQjs7SUFHL0IsaUNBQWlDOztJQUdqQyw0QkFBbUM7O0lBR25DLDhCQUE4Qjs7SUFHOUIsMkJBQTJCOztJQUczQixrQkFBa0I7O0lBR2xCLHFCQUFxQjs7SUFHckIseUJBQXlCOztJQUd6Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50Um9sZSB9IGZyb20gJy4uL2NvbW1vbi9BY2NvdW50Um9sZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBVc2VyVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyVHlwZUNvZGUnO1xuaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgVXNlciB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gVXNlciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciBlbWFpbCBcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG1vYmlsZSBwaG9uZSBudW1iZXIgKGZvciBub3RpZmljYXRpb24gYW5kIHZhbGlkYXRpb24pIFxuICAgIHB1YmxpYyBtb2JpbGU6IHN0cmluZztcbiBcbiAgICAvLyBQYXNzd29yZCBzYWx0IFxuICAgIHB1YmxpYyBzYWx0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFzc3dvcmQgaGFzaCBcbiAgICBwdWJsaWMgaGFzaDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgdHlwZTogVU5ERUZJTkVEIHwgU1lTQURNSU4gfCBTVVBQT1JUIHwgVVNFUiBcbiAgICBwdWJsaWMgdHlwZTogVXNlclR5cGVDb2RlO1xuIFxuICAgIC8vIFVzZXIgc3RhdHVzOiBVTkRFRklORUQgfCBQRU5ESU5HIHwgQUNUSVZFIHwgQkxPQ0tFRCB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBVc2VyU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHVzZXIgd2FzIGxhc3Qgc3VzcGVuZGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3VzcGVuZGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgU2lnbi1pbiBBdHRlbXB0cyBcbiAgICBwdWJsaWMgc2lnbkluQXR0ZW1wdHM6IG51bWJlcjtcbiBcbiAgICAvLyBMYXN0IFNpZ24taW4gW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBsYXN0U2lnbkluOiBudW1iZXI7XG4gXG4gICAgLy8gTGFzdCBGYWlsZWQgU2lnbi1pbiBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGxhc3RGYWlsZWRTaWduSW46IG51bWJlcjtcbiBcbiAgICAvLyBVc2VyIG11c3QgY2hhbmdlIHBhc3N3b3JkIG9uIG5leHQgbG9naW4gXG4gICAgcHVibGljIGNoYW5nZVBhc3N3b3JkOiBib29sZWFuO1xuIFxuICAgIC8vIFdoZW4gdXNlciBjcmVhdGVkIGhpcyBwYXNzd29yZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHBhc3N3b3JkQ2hhbmdlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBhY2NvdW50cyBhbmQgcm9sZXMgdGhlIHVzZXIgaGFzIGFjY2VzcyB0byBcbiAgICBwdWJsaWMgYWNjb3VudFJvbGVzOiBBY2NvdW50Um9sZVtdO1xuIFxuICAgIC8vIERlZmF1bHQgYWNjb3VudCBJZCBcbiAgICBwdWJsaWMgZGVmYXVsdEFjY291bnQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==