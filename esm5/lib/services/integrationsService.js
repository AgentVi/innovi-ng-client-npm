/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for integrations targets (templates)
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
var IntegrationsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function IntegrationsService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/integrations';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    /**
     * Create new integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} body
     * @return {?}
     */
    IntegrationsService.prototype.create = /**
     * Create new integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post(this.baseUrl + "/", JSON.stringify(body));
    };
    /**
     * Update integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    /**
     * Update integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    IntegrationsService.prototype.update = /**
     * Update integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, JSON.stringify(body));
    };
    /**
     * Delete integration target from the system
     * @Return: ActionResponse
     */
    /**
     * Delete integration target from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.delete = /**
     * Delete integration target from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single integration target by id
     * @Return: EntityResponse<IntegrationTarget>
     */
    /**
     * Get single integration target by id
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.get = /**
     * Get single integration target by id
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get integration targets by list of ids
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    /**
     * Get integration targets by list of ids
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    IntegrationsService.prototype.list = /**
     * Get integration targets by list of ids
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/list"], params));
    };
    /**
     * Find integration targets by filters
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    /**
     * Find integration targets by filters
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} search
     * @param {?=} type
     * @return {?}
     */
    IntegrationsService.prototype.find = /**
     * Find integration targets by filters
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} search
     * @param {?=} type
     * @return {?}
     */
    function (search, type) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/"], params));
    };
    IntegrationsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    IntegrationsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return IntegrationsService;
}());
export { IntegrationsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ludGVncmF0aW9uc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFZakQ7SUFNRTs7T0FFRztJQUNILDZCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxlQUFlLENBQUM7UUFNaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7O0lBQU4sVUFBTyxJQUF3QjtRQUM3QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLE1BQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7OztJQUFOLFVBQU8sRUFBVyxFQUFFLElBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7O0lBQU4sVUFBTyxFQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsaUNBQUc7Ozs7OztJQUFILFVBQUksRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsa0NBQUk7Ozs7OztJQUFKLFVBQUssRUFBVzs7O1lBQ1IsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxFQUFJLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLFVBQU8sR0FBSyxNQUFNLEdBQUU7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxrQ0FBSTs7Ozs7OztJQUFKLFVBQUssTUFBZSxFQUFFLElBQWE7OztZQUMzQixNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLElBQU0sQ0FBQyxDQUFDO1NBQUU7UUFFcEQsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUksSUFBSSxDQUFDLE9BQU8sTUFBRyxHQUFLLE1BQU0sR0FBRTtJQUNwRCxDQUFDOztnQkFuRUYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFyQnJCLFFBQVE7O0lBaUZqQiwwQkFBQztDQUFBLEFBckVELElBcUVDO1NBcEVZLG1CQUFtQjs7Ozs7O0lBRzlCLHNDQUFrQzs7Ozs7SUFLdEIscUNBQTRDOzs7OztJQUFFLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IEludGVncmF0aW9uVGFyZ2V0IH0gZnJvbSAnLi4vZW50aXRpZXMvSW50ZWdyYXRpb25UYXJnZXQnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGludGVncmF0aW9ucyB0YXJnZXRzICh0ZW1wbGF0ZXMpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXJcbiAqIEBSZXNvdXJjZUdyb3VwIFVzZXIgQWN0aW9ucyBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvaW50ZWdyYXRpb25zJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBpbnRlZ3JhdGlvbiB0YXJnZXRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8SW50ZWdyYXRpb25UYXJnZXQ+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEludGVncmF0aW9uVGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBpbnRlZ3JhdGlvbiB0YXJnZXRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8SW50ZWdyYXRpb25UYXJnZXQ+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBJbnRlZ3JhdGlvblRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGludGVncmF0aW9uIHRhcmdldCBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGludGVncmF0aW9uIHRhcmdldCBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxJbnRlZ3JhdGlvblRhcmdldD5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaW50ZWdyYXRpb24gdGFyZ2V0cyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGludGVncmF0aW9uIHRhcmdldHMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgZmluZChzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9gLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==