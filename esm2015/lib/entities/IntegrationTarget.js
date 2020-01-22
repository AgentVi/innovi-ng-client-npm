/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration target describes template of the integrated system
   Definition of target templates is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder base on this template
*/
export class IntegrationTarget extends BaseEntity {
}
if (false) {
    /** @type {?} */
    IntegrationTarget.prototype.accountId;
    /** @type {?} */
    IntegrationTarget.prototype.name;
    /** @type {?} */
    IntegrationTarget.prototype.uri;
    /** @type {?} */
    IntegrationTarget.prototype.operation;
    /** @type {?} */
    IntegrationTarget.prototype.headers;
    /** @type {?} */
    IntegrationTarget.prototype.recipients;
    /** @type {?} */
    IntegrationTarget.prototype.subject;
    /** @type {?} */
    IntegrationTarget.prototype.body;
    /** @type {?} */
    IntegrationTarget.prototype.mimeType;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UYXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvblRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFPcEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7Q0E2Q2hEOzs7SUExQ0csc0NBQXlCOztJQUd6QixpQ0FBb0I7O0lBR3BCLGdDQUFtQjs7SUFHbkIsc0NBQXlCOztJQUd6QixvQ0FBaUM7O0lBR2pDLHVDQUE0Qjs7SUFHNUIsb0NBQXVCOztJQUd2QixpQ0FBb0I7O0lBR3BCLHFDQUF3Qjs7SUFHeEIseUNBQTZCOztJQUc3QiwrQkFBa0I7O0lBR2xCLGtDQUFxQjs7SUFHckIsc0NBQXlCOztJQUd6QixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgSW50ZWdyYXRpb24gdGFyZ2V0IGRlc2NyaWJlcyB0ZW1wbGF0ZSBvZiB0aGUgaW50ZWdyYXRlZCBzeXN0ZW1cbiAgIERlZmluaXRpb24gb2YgdGFyZ2V0IHRlbXBsYXRlcyBpcyBkb25lIGJ5IHRoZSBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICAgQWNjb3VudCBhZG1pbmlzdHJhdG9yIFN1cGVydmlzb3Igcm9sZXMgY2FuIGRlZmluZSBzcGVjaWZpYyBpbnRlZ3JhdGlvbnMgcGVyIGFjY291bnQgLyBmb2xkZXIgYmFzZSBvbiB0aGlzIHRlbXBsYXRlIFxuKi9cbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvblRhcmdldCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBUaGUgVVJJIGVuY2Fwc3VsYXRlcyBtYW55IG9mIHRoZSBwcm90b2NvbCBzcGVjaWZpY2F0aW9uIChiYXNlZCBvbiBSRkMtMzk4Nik6IHNjaGVtYTovL1t1c2VyOnBhc3N3b3JkXUBob3N0Oltwb3J0XS9bcGF0aF0/W3BhcmFtZXRlcnNdIHN1cHBvcnRlZCBzY2hlbWFzOiBodHRwIHwgaHR0cHMgfCBzbXRwIHwgZW1haWwgXG4gICAgcHVibGljIHVyaTogc3RyaW5nO1xuIFxuICAgIC8vIEhUVFAgcHJvdG9jb2wgT3BlcmF0aW9uOiBHRVQgfCBQT1NUIHwgUFVUIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEhUVFAgcHJvdG9jb2wgSGVhZGVycyAoYXBwbGljYWJsZSBmb3IgaHR0cC9odHRwcyBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBoZWFkZXJzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIFNNVFAgcHJvdG9jb2wgTGlzdCBvZiByZWNpcGllbnRzIChhcHBsaWNhYmxlIGZvciBzbXRwIHByb3RvY29sKSBcbiAgICBwdWJsaWMgcmVjaXBpZW50czogc3RyaW5nW107XG4gXG4gICAgLy8gU01UUCBwcm90b2NvbCBNZXNzYWdlIHN1YmplY3QgdGVtcGxhdGUgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyBzdWJqZWN0OiBzdHJpbmc7XG4gXG4gICAgLy8gTWVzc2FnZSBib2R5IHRlbXBsYXRlIFxuICAgIHB1YmxpYyBib2R5OiBzdHJpbmc7XG4gXG4gICAgLy8gTWVzc2FnZSBjb250ZW50IG1pbWUgdHlwZSBcbiAgICBwdWJsaWMgbWltZVR5cGU6IHN0cmluZztcbiBcbiAgICAvLyBJcyBjbGlwIHJlcXVpcmVkIGZvciB0aGUgaW50ZWdyYXRpb24gXG4gICAgcHVibGljIGNsaXBSZXF1aXJlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=