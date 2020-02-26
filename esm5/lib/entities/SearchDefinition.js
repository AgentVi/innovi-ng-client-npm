/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Query definitions for ad-hoc search specification
*/
var /*
   Query definitions for ad-hoc search specification
*/
SearchDefinition = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDefinition, _super);
    function SearchDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearchDefinition;
}(BaseEntity));
/*
   Query definitions for ad-hoc search specification
*/
export { SearchDefinition };
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
    SearchDefinition.prototype.sensorIds;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1NlYXJjaERlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNcEQ7Ozs7SUFBc0MsNENBQVU7SUFBaEQ7O0lBZ0RBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFoREQsQ0FBc0MsVUFBVSxHQWdEL0M7Ozs7Ozs7SUE3Q0cscUNBQXlCOztJQUd6QixrQ0FBc0I7O0lBR3RCLGdDQUFvQjs7SUFHcEIsK0JBQW1COztJQUduQix5Q0FBOEI7O0lBRzlCLHVDQUFvQzs7SUFHcEMscUNBQWlDOztJQUdqQyxxQ0FBNEI7O0lBRzVCLHFDQUEyQjs7SUFHM0Isb0NBQWdDOztJQUdoQyxtQ0FBK0I7O0lBRy9CLDhCQUFrQjs7SUFHbEIsaUNBQXFCOztJQUdyQixxQ0FBeUI7O0lBR3pCLHFDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaFRpbWVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2VhcmNoVGltZUNvZGUnO1xuaW1wb3J0IHsgVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVGcmFtZSc7XG5pbXBvcnQgeyBTZWFyY2hCZWhhdmlvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlYXJjaEJlaGF2aW9yJztcbmltcG9ydCB7IFNlYXJjaE9iamVjdCB9IGZyb20gJy4uL2VudGl0aWVzL1NlYXJjaE9iamVjdCc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBTZWFyY2hTY29wZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hTY29wZUNvZGUnO1xuXG4vKiBcbiAgIFF1ZXJ5IGRlZmluaXRpb25zIGZvciBhZC1ob2Mgc2VhcmNoIHNwZWNpZmljYXRpb24gXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaERlZmluaXRpb24gZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIHdobyBjcmVhdGVkIHRoZSBzZWFyY2ggXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlYXJjaCBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2VhcmNoIFRhZyAoZm9yIG9yZ2FuaXppbmcgc2VhcmNoIGRlZmluaXRpb25zIGluIGZvbGRlci1saWtlIHN0cnVjdHVyZSkgXG4gICAgcHVibGljIHRhZzogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoZSBzZWFyY2ggZGVmaW5pdGlvbiBpcyBwcml2YXRlIChhY2Nlc3NpYmxlIGJ5IG93bmVyIG9ubHkpIG9yIHB1YmxpYyAoYWNjZXNzaWJsZSBieSBhbGwgYWNjb3VudCB1c2VycykgXG4gICAgcHVibGljIHByaXZhdGVTZWFyY2g6IGJvb2xlYW47XG4gXG4gICAgLy8gU2NvcGUgb2Ygc291cmNlOiBVTkRFRklORUQgfCBTRU5TT1JTIHwgRk9MREVSUyB8IEdFT19DSVJDTEUgfCBHRU9fUE9MWUdPTiBcbiAgICBwdWJsaWMgc291cmNlU2NvcGU6IFNlYXJjaFNjb3BlQ29kZTtcbiBcbiAgICAvLyBUaW1lIHNjb3BlIHRvIHNlYXJjaCBmb3IgKENVU1RPTSBvciBEdXJhdGlvbiBmb3JtYXQgW1BuRFRuSG5Nbl0gZS5nLiBQVDI0SCkgXG4gICAgcHVibGljIHRpbWVTY29wZTogU2VhcmNoVGltZUNvZGU7XG4gXG4gICAgLy8gVGltZSBmcmFtZSB0byBzZWFyY2ggZm9yIChhcHBsaWNhdGl2ZSBvbmx5IGlmIHNlYXJjaCBzY29wZSBpcyBDVVNUT00pIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBMaXN0IG9mIHNlbnNvciBJZHMgaW5jbHVkZWQgaW4gdGhlIHF1ZXJ5IChvciBcIkdFT1wiKSBcbiAgICBwdWJsaWMgc2Vuc29ySWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBTZWFyY2ggYmVoYXZpb3IgYXR0cmlidXRlcyBcbiAgICBwdWJsaWMgYmVoYXZpb3I6IFNlYXJjaEJlaGF2aW9yO1xuIFxuICAgIC8vIE9iamVjdHMgYXR0cmlidXRlcyB0byBzZWFyY2ggZm9yICh3aGF0KSBcbiAgICBwdWJsaWMgb2JqZWN0czogU2VhcmNoT2JqZWN0W107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19