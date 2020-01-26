/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Query definitions for ad-hoc search specification
*/
export class SearchDefinition extends BaseEntity {
}
if (false) {
    /** @type {?} */
    SearchDefinition.prototype.accountId;
    /** @type {?} */
    SearchDefinition.prototype.userId;
    /** @type {?} */
    SearchDefinition.prototype.name;
    /** @type {?} */
    SearchDefinition.prototype.tag;
    /** @type {?} */
    SearchDefinition.prototype.privateSearch;
    /** @type {?} */
    SearchDefinition.prototype.sourceScope;
    /** @type {?} */
    SearchDefinition.prototype.timeScope;
    /** @type {?} */
    SearchDefinition.prototype.timeFrame;
    /** @type {?} */
    SearchDefinition.prototype.behavior;
    /** @type {?} */
    SearchDefinition.prototype.objects;
    /** @type {?} */
    SearchDefinition.prototype.id;
    /** @type {?} */
    SearchDefinition.prototype._type;
    /** @type {?} */
    SearchDefinition.prototype.createdOn;
    /** @type {?} */
    SearchDefinition.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1NlYXJjaERlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVFwRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtDQTZDL0M7OztJQTFDRyxxQ0FBeUI7O0lBR3pCLGtDQUFzQjs7SUFHdEIsZ0NBQW9COztJQUdwQiwrQkFBbUI7O0lBR25CLHlDQUE4Qjs7SUFHOUIsdUNBQW9DOztJQUdwQyxxQ0FBaUM7O0lBR2pDLHFDQUE0Qjs7SUFHNUIsb0NBQWdDOztJQUdoQyxtQ0FBK0I7O0lBRy9CLDhCQUFrQjs7SUFHbEIsaUNBQXFCOztJQUdyQixxQ0FBeUI7O0lBR3pCLHFDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJlaGF2aW9yIH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoQmVoYXZpb3InO1xuaW1wb3J0IHsgU2VhcmNoT2JqZWN0IH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoT2JqZWN0JztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IFNlYXJjaFNjb3BlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlYXJjaFNjb3BlQ29kZSc7XG5pbXBvcnQgeyBTZWFyY2hUaW1lQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlYXJjaFRpbWVDb2RlJztcbmltcG9ydCB7IFRpbWVGcmFtZSB9IGZyb20gJy4uL2NvbW1vbi9UaW1lRnJhbWUnO1xuXG4vKiBcbiAgIFF1ZXJ5IGRlZmluaXRpb25zIGZvciBhZC1ob2Mgc2VhcmNoIHNwZWNpZmljYXRpb24gXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaERlZmluaXRpb24gZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIHdobyBjcmVhdGVkIHRoZSBzZWFyY2ggXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlYXJjaCBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2VhcmNoIFRhZyAoZm9yIG9yZ2FuaXppbmcgc2VhcmNoIGRlZmluaXRpb25zIGluIGZvbGRlci1saWtlIHN0cnVjdHVyZSkgXG4gICAgcHVibGljIHRhZzogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoZSBzZWFyY2ggZGVmaW5pdGlvbiBpcyBwcml2YXRlIChhY2Nlc3NpYmxlIGJ5IG93bmVyIG9ubHkpIG9yIHB1YmxpYyAoYWNjZXNzaWJsZSBieSBhbGwgYWNjb3VudCB1c2VycykgXG4gICAgcHVibGljIHByaXZhdGVTZWFyY2g6IGJvb2xlYW47XG4gXG4gICAgLy8gU2NvcGUgb2Ygc291cmNlOiBVTkRFRklORUQgfCBTRU5TT1JTIHwgRk9MREVSUyB8IEdFT19DSVJDTEUgfCBHRU9fUE9MWUdPTiBcbiAgICBwdWJsaWMgc291cmNlU2NvcGU6IFNlYXJjaFNjb3BlQ29kZTtcbiBcbiAgICAvLyBUaW1lIHNjb3BlIHRvIHNlYXJjaCBmb3IgKENVU1RPTSBvciBEdXJhdGlvbiBmb3JtYXQgW1BuRFRuSG5Nbl0gZS5nLiBQVDI0SCkgXG4gICAgcHVibGljIHRpbWVTY29wZTogU2VhcmNoVGltZUNvZGU7XG4gXG4gICAgLy8gVGltZSBmcmFtZSB0byBzZWFyY2ggZm9yIChhcHBsaWNhdGl2ZSBvbmx5IGlmIHNlYXJjaCBzY29wZSBpcyBDVVNUT00pIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBTZWFyY2ggYmVoYXZpb3IgYXR0cmlidXRlcyBcbiAgICBwdWJsaWMgYmVoYXZpb3I6IFNlYXJjaEJlaGF2aW9yO1xuIFxuICAgIC8vIE9iamVjdHMgYXR0cmlidXRlcyB0byBzZWFyY2ggZm9yICh3aGF0KSBcbiAgICBwdWJsaWMgb2JqZWN0czogU2VhcmNoT2JqZWN0W107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19