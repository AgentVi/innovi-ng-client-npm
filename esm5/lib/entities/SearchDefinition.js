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
    SearchDefinition.prototype.objects;
    /** @type {?} */
    SearchDefinition.prototype.timeScope;
    /** @type {?} */
    SearchDefinition.prototype.timeFrame;
    /** @type {?} */
    SearchDefinition.prototype.sourceScope;
    /** @type {?} */
    SearchDefinition.prototype.sensorIds;
    /** @type {?} */
    SearchDefinition.prototype.folderIds;
    /** @type {?} */
    SearchDefinition.prototype.geoCircle;
    /** @type {?} */
    SearchDefinition.prototype.geoPolygon;
    /** @type {?} */
    SearchDefinition.prototype.id;
    /** @type {?} */
    SearchDefinition.prototype._type;
    /** @type {?} */
    SearchDefinition.prototype.createdOn;
    /** @type {?} */
    SearchDefinition.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1NlYXJjaERlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLcEQ7Ozs7SUFBc0MsNENBQVU7SUFBaEQ7O0lBc0RBLENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUF0REQsQ0FBc0MsVUFBVSxHQXNEL0M7Ozs7Ozs7SUFuREcscUNBQXlCOztJQUd6QixrQ0FBc0I7O0lBR3RCLGdDQUFvQjs7SUFHcEIsK0JBQW1COztJQUduQix5Q0FBOEI7O0lBRzlCLG1DQUErQjs7SUFHL0IscUNBQWlDOztJQUdqQyxxQ0FBNEI7O0lBRzVCLHVDQUFvQzs7SUFHcEMscUNBQTJCOztJQUczQixxQ0FBMkI7O0lBRzNCLHFDQUE0Qjs7SUFHNUIsc0NBQThCOztJQUc5Qiw4QkFBa0I7O0lBR2xCLGlDQUFxQjs7SUFHckIscUNBQXlCOztJQUd6QixxQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hPYmplY3QgfSBmcm9tICcuLi9jb21tb24vU2VhcmNoT2JqZWN0JztcbmltcG9ydCB7IFNlYXJjaFRpbWVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2VhcmNoVGltZUNvZGUnO1xuaW1wb3J0IHsgVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVGcmFtZSc7XG5pbXBvcnQgeyBTZWFyY2hTY29wZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hTY29wZUNvZGUnO1xuaW1wb3J0IHsgR2VvQ2lyY2xlIH0gZnJvbSAnLi4vY29tbW9uL0dlb0NpcmNsZSc7XG5pbXBvcnQgeyBHZW9Qb2x5Z29uIH0gZnJvbSAnLi4vY29tbW9uL0dlb1BvbHlnb24nO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIFF1ZXJ5IGRlZmluaXRpb25zIGZvciBhZC1ob2Mgc2VhcmNoIHNwZWNpZmljYXRpb24gXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaERlZmluaXRpb24gZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIHdobyBjcmVhdGVkIHRoZSBzZWFyY2ggXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlYXJjaCBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2VhcmNoIFRhZyAoZm9yIG9yZ2FuaXppbmcgc2VhcmNoIGRlZmluaXRpb25zIGluIGZvbGRlci1saWtlIHN0cnVjdHVyZSkgXG4gICAgcHVibGljIHRhZzogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoZSBzZWFyY2ggZGVmaW5pdGlvbiBpcyBwcml2YXRlIChhY2Nlc3NpYmxlIGJ5IG93bmVyIG9ubHkpIG9yIHB1YmxpYyAoYWNjZXNzaWJsZSBieSBhbGwgYWNjb3VudCB1c2VycykgXG4gICAgcHVibGljIHByaXZhdGVTZWFyY2g6IGJvb2xlYW47XG4gXG4gICAgLy8gT2JqZWN0cyBhdHRyaWJ1dGVzIHRvIHNlYXJjaCBmb3IgKHdoYXQpIFxuICAgIHB1YmxpYyBvYmplY3RzOiBTZWFyY2hPYmplY3RbXTtcbiBcbiAgICAvLyBUaW1lIHNjb3BlIHRvIHNlYXJjaCBmb3IgKENVU1RPTSBvciBEdXJhdGlvbiBmb3JtYXQgW1BuRFRuSG5Nbl0gZS5nLiBQVDI0SCkgXG4gICAgcHVibGljIHRpbWVTY29wZTogU2VhcmNoVGltZUNvZGU7XG4gXG4gICAgLy8gVGltZSBmcmFtZSB0byBzZWFyY2ggZm9yIChhcHBsaWNhdGl2ZSBvbmx5IGlmIHNlYXJjaCBzY29wZSBpcyBDVVNUT00pIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBTY29wZSBvZiBzb3VyY2U6IFVOREVGSU5FRCB8IFNFTlNPUlMgfCBGT0xERVJTIHwgR0VPX0NJUkNMRSB8IEdFT19QT0xZR09OIFxuICAgIHB1YmxpYyBzb3VyY2VTY29wZTogU2VhcmNoU2NvcGVDb2RlO1xuIFxuICAgIC8vIENhbWVyYXMgc2NvcGUgLSBsaXN0IG9mIHNlbnNvciBpZHMgdG8gcGVyZm9ybSBzZWFyY2ggb24gKGFwcGxpY2FibGUgZm9yIHNlYXJjaCBzY29wZSA9IFNFTlNPUlMpIFxuICAgIHB1YmxpYyBzZW5zb3JJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEZvbGRlcnMgc2NvcGUgLSBsaXN0IG9mIGZvbGRlciBpZHMgdG8gcGVyZm9ybSBzZWFyY2ggb24gKGFwcGxpY2FibGUgZm9yIHNlYXJjaCBzY29wZSA9IEZPTERFUlMpIFxuICAgIHB1YmxpYyBmb2xkZXJJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIENpcmN1bGFyIGFyZWEgb24gbWFwIHRvIGxpbWl0IHRoZSBzZWFyY2ggKGFwcGxpY2FibGUgZm9yIHNlYXJjaCBzY29wZSA9IEdFT19DSVJDTEUpIFxuICAgIHB1YmxpYyBnZW9DaXJjbGU6IEdlb0NpcmNsZTtcbiBcbiAgICAvLyBQb2x5Z29uIGFyZWEgb24gdGhlIG1hcCB0byBsaW1pdCB0aGUgc2VhcmNoIChhcHBsaWNhYmxlIGZvciBzZWFyY2ggc2NvcGUgPSBHRU9fUE9MWUdPTikgXG4gICAgcHVibGljIGdlb1BvbHlnb246IEdlb1BvbHlnb247XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19