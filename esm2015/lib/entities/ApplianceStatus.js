/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance status - reported periodically by the appliance
*/
export class ApplianceStatus extends BaseEntity {
}
if (false) {
    /** @type {?} */
    ApplianceStatus.prototype.applianceId;
    /** @type {?} */
    ApplianceStatus.prototype.status;
    /** @type {?} */
    ApplianceStatus.prototype.cpuAvg;
    /** @type {?} */
    ApplianceStatus.prototype.cpuMax;
    /** @type {?} */
    ApplianceStatus.prototype.ram;
    /** @type {?} */
    ApplianceStatus.prototype.loadAvg;
    /** @type {?} */
    ApplianceStatus.prototype.id;
    /** @type {?} */
    ApplianceStatus.prototype._type;
    /** @type {?} */
    ApplianceStatus.prototype.createdOn;
    /** @type {?} */
    ApplianceStatus.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLcEQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtDQWlDOUM7OztJQTlCRyxzQ0FBMkI7O0lBRzNCLGlDQUFtQzs7SUFHbkMsaUNBQXNCOztJQUd0QixpQ0FBc0I7O0lBR3RCLDhCQUFtQjs7SUFHbkIsa0NBQXVCOztJQUd2Qiw2QkFBa0I7O0lBR2xCLGdDQUFxQjs7SUFHckIsb0NBQXlCOztJQUd6QixvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQXBwbGlhbmNlIHN0YXR1cyAtIHJlcG9ydGVkIHBlcmlvZGljYWxseSBieSB0aGUgYXBwbGlhbmNlIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VTdGF0dXMgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBcHBsaWFuY2UgSWQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHN0YXR1cyBcbiAgICBwdWJsaWMgc3RhdHVzOiBBcHBsaWFuY2VTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEF2ZXJhZ2UgQ1BVIHVzYWdlIHBlcmNlbnRhZ2UgWzEtMTAwXSBcbiAgICBwdWJsaWMgY3B1QXZnOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IENQVSB1c2FnZSBwZXJjZW50YWdlIFsxLTEwMF0gXG4gICAgcHVibGljIGNwdU1heDogbnVtYmVyO1xuIFxuICAgIC8vIFJBTSB1c2FnZSBwZXJjZW50YWdlIFsxLTEwMF0gXG4gICAgcHVibGljIHJhbTogbnVtYmVyO1xuIFxuICAgIC8vIExvYWQgYXZlcmFnZSBwZXJjZW50YWdlIChjb3VsZCBiZSBtb3JlIHRoYW4gMTAwLCBlLmcuIGxvYWQgYXZlcmFnZSBvZiAyLjIxIHdpbGwgYmUgcmVwcmVzZW50ZWQgYXMgMjIxKSBcbiAgICBwdWJsaWMgbG9hZEF2ZzogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==