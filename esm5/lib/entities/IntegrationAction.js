/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration action describes content details to use for a specific integration target
*/
var /*
   Integration action describes content details to use for a specific integration target
*/
IntegrationAction = /** @class */ (function (_super) {
    tslib_1.__extends(IntegrationAction, _super);
    function IntegrationAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntegrationAction;
}(BaseEntity));
/*
   Integration action describes content details to use for a specific integration target
*/
export { IntegrationAction };
if (false) {
    /** @type {?} */
    IntegrationAction.prototype.accountId;
    /** @type {?} */
    IntegrationAction.prototype.folderId;
    /** @type {?} */
    IntegrationAction.prototype.name;
    /** @type {?} */
    IntegrationAction.prototype.targetId;
    /** @type {?} */
    IntegrationAction.prototype.recipients;
    /** @type {?} */
    IntegrationAction.prototype.subject;
    /** @type {?} */
    IntegrationAction.prototype.body;
    /** @type {?} */
    IntegrationAction.prototype.mimeType;
    /** @type {?} */
    IntegrationAction.prototype.id;
    /** @type {?} */
    IntegrationAction.prototype._type;
    /** @type {?} */
    IntegrationAction.prototype.createdOn;
    /** @type {?} */
    IntegrationAction.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtwRDs7OztJQUF1Qyw2Q0FBVTtJQUFqRDs7SUF1Q0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQXZDRCxDQUF1QyxVQUFVLEdBdUNoRDs7Ozs7OztJQXBDRyxzQ0FBeUI7O0lBR3pCLHFDQUF3Qjs7SUFHeEIsaUNBQW9COztJQUdwQixxQ0FBd0I7O0lBR3hCLHVDQUE0Qjs7SUFHNUIsb0NBQXVCOztJQUd2QixpQ0FBb0I7O0lBR3BCLHFDQUF3Qjs7SUFHeEIsK0JBQWtCOztJQUdsQixrQ0FBcUI7O0lBR3JCLHNDQUF5Qjs7SUFHekIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEludGVncmF0aW9uIGFjdGlvbiBkZXNjcmliZXMgY29udGVudCBkZXRhaWxzIHRvIHVzZSBmb3IgYSBzcGVjaWZpYyBpbnRlZ3JhdGlvbiB0YXJnZXQgXG4qL1xuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uQWN0aW9uIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkIChFbXB0eSBpZiBpbnRlZ3JhdGlvbiBpcyBhc3NvY2lhdGVkIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IElkIFxuICAgIHB1YmxpYyB0YXJnZXRJZDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgcmVjaXBpZW50cyAoYXBwbGljYWJsZSBmb3IgU01UUC9FTUFJTCBwcm90b2NvbCkgXG4gICAgcHVibGljIHJlY2lwaWVudHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIE1lc3NhZ2Ugc3ViamVjdCB0ZW1wbGF0ZSAoYXBwbGljYWJsZSBmb3IgU01UUC9FTUFJTCBwcm90b2NvbCkgXG4gICAgcHVibGljIHN1YmplY3Q6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGJvZHkgdGVtcGxhdGUgXG4gICAgcHVibGljIGJvZHk6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGNvbnRlbnQgbWltZSB0eXBlIFxuICAgIHB1YmxpYyBtaW1lVHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==