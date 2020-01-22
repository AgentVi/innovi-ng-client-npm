/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration action describes integration protocol and details to execute
*/
export class IntegrationAction extends BaseEntity {
}
if (false) {
    /** @type {?} */
    IntegrationAction.prototype.accountId;
    /** @type {?} */
    IntegrationAction.prototype.folderId;
    /** @type {?} */
    IntegrationAction.prototype.name;
    /** @type {?} */
    IntegrationAction.prototype.uri;
    /** @type {?} */
    IntegrationAction.prototype.operation;
    /** @type {?} */
    IntegrationAction.prototype.headers;
    /** @type {?} */
    IntegrationAction.prototype.recipients;
    /** @type {?} */
    IntegrationAction.prototype.subject;
    /** @type {?} */
    IntegrationAction.prototype.body;
    /** @type {?} */
    IntegrationAction.prototype.mimeType;
    /** @type {?} */
    IntegrationAction.prototype.clipRequired;
    /** @type {?} */
    IntegrationAction.prototype.id;
    /** @type {?} */
    IntegrationAction.prototype._type;
    /** @type {?} */
    IntegrationAction.prototype.createdOn;
    /** @type {?} */
    IntegrationAction.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3BELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0NBZ0RoRDs7O0lBN0NHLHNDQUF5Qjs7SUFHekIscUNBQXdCOztJQUd4QixpQ0FBb0I7O0lBR3BCLGdDQUFtQjs7SUFHbkIsc0NBQXlCOztJQUd6QixvQ0FBaUM7O0lBR2pDLHVDQUE0Qjs7SUFHNUIsb0NBQXVCOztJQUd2QixpQ0FBb0I7O0lBR3BCLHFDQUF3Qjs7SUFHeEIseUNBQTZCOztJQUc3QiwrQkFBa0I7O0lBR2xCLGtDQUFxQjs7SUFHckIsc0NBQXlCOztJQUd6QixzQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgSW50ZWdyYXRpb24gYWN0aW9uIGRlc2NyaWJlcyBpbnRlZ3JhdGlvbiBwcm90b2NvbCBhbmQgZGV0YWlscyB0byBleGVjdXRlIFxuKi9cbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvbkFjdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCAoRW1wdHkgaWYgaW50ZWdyYXRpb24gaXMgYXNzb2NpYXRlZCB0byB0aGUgYWNjb3VudCBsZXZlbCkgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFRoZSBVUkkgZW5jYXBzdWxhdGVzIG1hbnkgb2YgdGhlIHByb3RvY29sIHNwZWNpZmljYXRpb24gKGJhc2VkIG9uIFJGQy0zOTg2KTogc2NoZW1hOi8vW3VzZXI6cGFzc3dvcmRdQGhvc3Q6W3BvcnRdL1twYXRoXT9bcGFyYW1ldGVyc10gc3VwcG9ydGVkIHNjaGVtYXM6IGh0dHAgfCBodHRwcyB8IHNtdHAgfCBlbWFpbCBcbiAgICBwdWJsaWMgdXJpOiBzdHJpbmc7XG4gXG4gICAgLy8gSFRUUCBwcm90b2NvbCBPcGVyYXRpb246IEdFVCB8IFBPU1QgfCBQVVQgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSFRUUCBwcm90b2NvbCBIZWFkZXJzIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIGhlYWRlcnM6IFN0cmluZ0tleVZhbHVlW107XG4gXG4gICAgLy8gU01UUCBwcm90b2NvbCBMaXN0IG9mIHJlY2lwaWVudHMgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyByZWNpcGllbnRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBTTVRQIHByb3RvY29sIE1lc3NhZ2Ugc3ViamVjdCB0ZW1wbGF0ZSAoYXBwbGljYWJsZSBmb3Igc210cCBwcm90b2NvbCkgXG4gICAgcHVibGljIHN1YmplY3Q6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGJvZHkgdGVtcGxhdGUgXG4gICAgcHVibGljIGJvZHk6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGNvbnRlbnQgbWltZSB0eXBlIFxuICAgIHB1YmxpYyBtaW1lVHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIElzIGNsaXAgcmVxdWlyZWQgZm9yIHRoZSBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgY2xpcFJlcXVpcmVkOiBib29sZWFuO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==