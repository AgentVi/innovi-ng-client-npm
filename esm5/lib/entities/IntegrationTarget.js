/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration target describes template of the integrated system
   Definition of target templates is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder base on this template
*/
var /*
   Integration target describes template of the integrated system
   Definition of target templates is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder base on this template
*/
IntegrationTarget = /** @class */ (function (_super) {
    tslib_1.__extends(IntegrationTarget, _super);
    function IntegrationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntegrationTarget;
}(BaseEntity));
/*
   Integration target describes template of the integrated system
   Definition of target templates is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder base on this template
*/
export { IntegrationTarget };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UYXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvblRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBT3BEOzs7Ozs7SUFBdUMsNkNBQVU7SUFBakQ7O0lBNkNBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUE3Q0QsQ0FBdUMsVUFBVSxHQTZDaEQ7Ozs7Ozs7OztJQTFDRyxzQ0FBeUI7O0lBR3pCLGlDQUFvQjs7SUFHcEIsZ0NBQW1COztJQUduQixzQ0FBeUI7O0lBR3pCLG9DQUFpQzs7SUFHakMsdUNBQTRCOztJQUc1QixvQ0FBdUI7O0lBR3ZCLGlDQUFvQjs7SUFHcEIscUNBQXdCOztJQUd4Qix5Q0FBNkI7O0lBRzdCLCtCQUFrQjs7SUFHbEIsa0NBQXFCOztJQUdyQixzQ0FBeUI7O0lBR3pCLHNDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ0tleVZhbHVlIH0gZnJvbSAnLi4vY29tbW9uL1N0cmluZ0tleVZhbHVlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBJbnRlZ3JhdGlvbiB0YXJnZXQgZGVzY3JpYmVzIHRlbXBsYXRlIG9mIHRoZSBpbnRlZ3JhdGVkIHN5c3RlbVxuICAgRGVmaW5pdGlvbiBvZiB0YXJnZXQgdGVtcGxhdGVzIGlzIGRvbmUgYnkgdGhlIGFjY291bnQgYWRtaW5pc3RyYXRvciBvbmx5XG4gICBBY2NvdW50IGFkbWluaXN0cmF0b3IgU3VwZXJ2aXNvciByb2xlcyBjYW4gZGVmaW5lIHNwZWNpZmljIGludGVncmF0aW9ucyBwZXIgYWNjb3VudCAvIGZvbGRlciBiYXNlIG9uIHRoaXMgdGVtcGxhdGUgXG4qL1xuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uVGFyZ2V0IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFRoZSBVUkkgZW5jYXBzdWxhdGVzIG1hbnkgb2YgdGhlIHByb3RvY29sIHNwZWNpZmljYXRpb24gKGJhc2VkIG9uIFJGQy0zOTg2KTogc2NoZW1hOi8vW3VzZXI6cGFzc3dvcmRdQGhvc3Q6W3BvcnRdL1twYXRoXT9bcGFyYW1ldGVyc10gc3VwcG9ydGVkIHNjaGVtYXM6IGh0dHAgfCBodHRwcyB8IHNtdHAgfCBlbWFpbCBcbiAgICBwdWJsaWMgdXJpOiBzdHJpbmc7XG4gXG4gICAgLy8gSFRUUCBwcm90b2NvbCBPcGVyYXRpb246IEdFVCB8IFBPU1QgfCBQVVQgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSFRUUCBwcm90b2NvbCBIZWFkZXJzIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIGhlYWRlcnM6IFN0cmluZ0tleVZhbHVlW107XG4gXG4gICAgLy8gU01UUCBwcm90b2NvbCBMaXN0IG9mIHJlY2lwaWVudHMgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyByZWNpcGllbnRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBTTVRQIHByb3RvY29sIE1lc3NhZ2Ugc3ViamVjdCB0ZW1wbGF0ZSAoYXBwbGljYWJsZSBmb3Igc210cCBwcm90b2NvbCkgXG4gICAgcHVibGljIHN1YmplY3Q6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGJvZHkgdGVtcGxhdGUgXG4gICAgcHVibGljIGJvZHk6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGNvbnRlbnQgbWltZSB0eXBlIFxuICAgIHB1YmxpYyBtaW1lVHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIElzIGNsaXAgcmVxdWlyZWQgZm9yIHRoZSBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgY2xpcFJlcXVpcmVkOiBib29sZWFuO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==