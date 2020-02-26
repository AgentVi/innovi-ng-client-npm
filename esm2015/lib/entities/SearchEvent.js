/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Search result item of search operation. The data structure is identical to an Event
*/
export class SearchEvent extends BaseEntity {
}
if (false) {
    /** @type {?} */
    SearchEvent.prototype.sensorId;
    /** @type {?} */
    SearchEvent.prototype.extSensorId;
    /** @type {?} */
    SearchEvent.prototype.accountId;
    /** @type {?} */
    SearchEvent.prototype.eventTime;
    /** @type {?} */
    SearchEvent.prototype.ruleId;
    /** @type {?} */
    SearchEvent.prototype.extRuleId;
    /** @type {?} */
    SearchEvent.prototype.description;
    /** @type {?} */
    SearchEvent.prototype.objectType;
    /** @type {?} */
    SearchEvent.prototype.behaviorType;
    /** @type {?} */
    SearchEvent.prototype.status;
    /** @type {?} */
    SearchEvent.prototype.geoLocation;
    /** @type {?} */
    SearchEvent.prototype.imagePath;
    /** @type {?} */
    SearchEvent.prototype.clipPath;
    /** @type {?} */
    SearchEvent.prototype.severity;
    /** @type {?} */
    SearchEvent.prototype.eventImageTime;
    /** @type {?} */
    SearchEvent.prototype.eventObjects;
    /** @type {?} */
    SearchEvent.prototype.boundingBoxes;
    /** @type {?} */
    SearchEvent.prototype.id;
    /** @type {?} */
    SearchEvent.prototype._type;
    /** @type {?} */
    SearchEvent.prototype.createdOn;
    /** @type {?} */
    SearchEvent.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TZWFyY2hFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBU3BELE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtDQWtFMUM7OztJQS9ERywrQkFBd0I7O0lBR3hCLGtDQUEyQjs7SUFHM0IsZ0NBQXlCOztJQUd6QixnQ0FBeUI7O0lBR3pCLDZCQUFzQjs7SUFHdEIsZ0NBQXlCOztJQUd6QixrQ0FBMkI7O0lBRzNCLGlDQUFrQzs7SUFHbEMsbUNBQXNDOztJQUd0Qyw2QkFBK0I7O0lBRy9CLGtDQUErQjs7SUFHL0IsZ0NBQXlCOztJQUd6QiwrQkFBd0I7O0lBR3hCLCtCQUFrQzs7SUFHbEMscUNBQThCOztJQUc5QixtQ0FBa0M7O0lBR2xDLG9DQUFvQzs7SUFHcEMseUJBQWtCOztJQUdsQiw0QkFBcUI7O0lBR3JCLGdDQUF5Qjs7SUFHekIsZ0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0SW5mbyB9IGZyb20gJy4uL2NvbW1vbi9PYmplY3RJbmZvJztcbmltcG9ydCB7IEJvdW5kaW5nQm94IH0gZnJvbSAnLi4vY29tbW9uL0JvdW5kaW5nQm94JztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5cbi8qIFxuICAgU2VhcmNoIHJlc3VsdCBpdGVtIG9mIHNlYXJjaCBvcGVyYXRpb24uIFRoZSBkYXRhIHN0cnVjdHVyZSBpcyBpZGVudGljYWwgdG8gYW4gRXZlbnQgXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaEV2ZW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV4dGVybmFsIFNlbnNvciBJZCAoZm9yIGludGVncmF0aW9ucykgXG4gICAgcHVibGljIGV4dFNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZXZlbnQgd2FzIGRldGVjdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXZlbnRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gUnVsZSBJZCBcbiAgICBwdWJsaWMgcnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXh0ZXJuYWwgUnVsZSBJZCAoZm9yIGludGVncmF0aW9ucykgXG4gICAgcHVibGljIGV4dFJ1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGRlc2NyaXB0aW9uIChmcmVlIHRleHQgYXMgcHJvdmlkZWQgYnkgdGhlIGV2ZW50IHNvdXJjZSAtIGV2ZW50IGVuZ2luZSwgYW5vbWFseSwgY3VzdG9tLCBGUiwgTFBSIC4uLikgXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgYmVoYXZpb3IgdHlwZSAoVU5LTk9XTiB8IENST1NTSU5HIHwgTU9WSU5HIHwgR1JPVVBJTkcgfCBPQ0NVUEFOQ1kgLi4uKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IHR5cGUgKFVOS05PV04gfCBQRVJTT04gfCBWRUhJQ0xFIHwgQlVTIHwgVFJBQ0sgLi4uKSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFZhbGlkYXRpb24gc3RhdHVzIGZvciBldmVudCBwcm9jZXNzaW5nIHdvcmtmbG93OiBORVcgfCBPUEVOIHwgQ0xPU0UgfCBJUlJFTEVWQU5UIHwgRkFMU0UgXG4gICAgcHVibGljIHN0YXR1czogRXZlbnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGdlbyBsb2NhdGlvbiAoV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtKS4gVGhpcyBmaWVsZCBpcyBhcHBsaWNhYmxlIG9ubHkgaWYgdGhlIHNlbnNvciBpcyBnZW8tcmVmZXJlbmNlZC4gXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHBhdGggXG4gICAgcHVibGljIGltYWdlUGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGNsaXAgcGF0aCBcbiAgICBwdWJsaWMgY2xpcFBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBzZXZlcml0eSBsZXZlbDogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBFdmVudCBpbWFnZSB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXZlbnRJbWFnZVRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgaW5mb3JtYXRpb24gXG4gICAgcHVibGljIGV2ZW50T2JqZWN0czogT2JqZWN0SW5mb1tdO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdChzKSBib3VuZGluZyBib3goZXMpIFxuICAgIHB1YmxpYyBib3VuZGluZ0JveGVzOiBCb3VuZGluZ0JveFtdO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==