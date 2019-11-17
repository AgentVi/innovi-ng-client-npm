/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
export class Account extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Account.prototype.name;
    /** @type {?} */
    Account.prototype.key;
    /** @type {?} */
    Account.prototype.type;
    /** @type {?} */
    Account.prototype.status;
    /** @type {?} */
    Account.prototype.suspendedOn;
    /** @type {?} */
    Account.prototype.groups;
    /** @type {?} */
    Account.prototype.geoArea;
    /** @type {?} */
    Account.prototype.geoLocation;
    /** @type {?} */
    Account.prototype.timezone;
    /** @type {?} */
    Account.prototype.expiredOn;
    /** @type {?} */
    Account.prototype.maxChannels;
    /** @type {?} */
    Account.prototype.description;
    /** @type {?} */
    Account.prototype.id;
    /** @type {?} */
    Account.prototype._type;
    /** @type {?} */
    Account.prototype.createdOn;
    /** @type {?} */
    Account.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVFwRCxNQUFNLE9BQU8sT0FBUSxTQUFRLFVBQVU7Q0FtRHRDOzs7SUFoREcsdUJBQW9COztJQUdwQixzQkFBbUI7O0lBR25CLHVCQUE2Qjs7SUFHN0IseUJBQWlDOztJQUdqQyw4QkFBMkI7O0lBRzNCLHlCQUF3Qjs7SUFHeEIsMEJBQTZCOztJQUc3Qiw4QkFBK0I7O0lBRy9CLDJCQUF3Qjs7SUFHeEIsNEJBQXlCOztJQUd6Qiw4QkFBMkI7O0lBRzNCLDhCQUEyQjs7SUFHM0IscUJBQWtCOztJQUdsQix3QkFBcUI7O0lBR3JCLDRCQUF5Qjs7SUFHekIsNEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQWNjb3VudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcblxuLyogXG4gICBBY2NvdW50IGVudGl0eSBpbiB0aGUgc3lzdGVtIHJlcHJlc2VudHMgY3VzdG9tZXIgYWNjb3VudCB3aGljaCBncm91cHMgc2V0IG9mIGZvbGRlcnMsIGNhbWVyYXMsIHJ1bGVzLCBpbnRlZ3JhdGlvbnMgYW5kIGN1c3RvbWVyIHNwZWNpZmljIG9wZXJhdGlvbmFsIGNvbmZpZ3VyYXRpb24gXG4qL1xuZXhwb3J0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IGtleSBcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBUeXBlOiBVTkRFRklORUQgfCBERU1PIHwgVFJJQUwgfCBQQVJUTkVSIHwgQ1VTVE9NRVIgXG4gICAgcHVibGljIHR5cGU6IEFjY291bnRUeXBlQ29kZTtcbiBcbiAgICAvLyBBY2NvdW50IHN0YXR1czogVU5ERUZJTkVEIHwgQUNUSVZFIHwgU1VTUEVOREVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFjY291bnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFdoZW4gdGhlIGFjY291bnQgd2FzIHN1c3BlbmRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gc2Vjb25kIGlubGluZSBmaWVsZCBkb2N1bWVudGF0aW9uIFxuICAgIHB1YmxpYyBzdXNwZW5kZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgYXNzb2NpYXRlZCBhY2NvdW50IGdyb3VwcyAoZm9yIGZlYXR1cmUgdG9nZ2xlKSBcbiAgICBwdWJsaWMgZ3JvdXBzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBBY2NvdW50IGdlbyBhcmVhIHBvbHlnb24gKHRoZSBib3VuZGluZyBwb2x5Z29uIG9mIHRoZSBhcmVhKSBcbiAgICBwdWJsaWMgZ2VvQXJlYTogQ29vcmRpbmF0ZVtdO1xuIFxuICAgIC8vIEFjY291bnQgZ2VvIGxvY2F0aW9uICh0aGUgY2VudGVyIGNvb3JkaW5hdGUgb2YgdGhlIGFjY291bnQgcmVnaW9uKSBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gQWNjb3VudCB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICBwdWJsaWMgdGltZXpvbmU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdpbGwgYmUgZXhwaXJlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gKDAgbWVhbnMgbm8gZXhwaXJhdGlvbiB0aW1lKSBcbiAgICBwdWJsaWMgZXhwaXJlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTGltaXQgdGhlIG51bWJlciBvZiBjaGFubmVscyBwZXIgYWNjb3VudCAoMCBtZWFucyBubyBsaW1pdCkgXG4gICAgcHVibGljIG1heENoYW5uZWxzOiBudW1iZXI7XG4gXG4gICAgLy8gQWNjb3VudCBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=