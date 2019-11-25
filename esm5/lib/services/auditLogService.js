/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * Audit log queries for account administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var AuditLogService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function AuditLogService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/auditlog';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of audit log entries and filter
     * @Return: QueryResponse<AuditLog>
     */
    /**
     * Find list of audit log entries and filter
     * \@Return: QueryResponse<AuditLog>
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AuditLogService.prototype.find = /**
     * Find list of audit log entries and filter
     * \@Return: QueryResponse<AuditLog>
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (userId, from, to, itemType, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (userId != null) {
            params.push("userId=" + userId);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        if (itemType != null) {
            params.push("itemType=" + itemType);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (page != null) {
            params.push("page=" + page);
        }
        if (pageSize != null) {
            params.push("pageSize=" + pageSize);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread(["" + this.baseUrl], params));
    };
    /**
     * Export list of audit log entries and filter
     * @Return: StreamContent
     */
    /**
     * Export list of audit log entries and filter
     * \@Return: StreamContent
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    AuditLogService.prototype.exportFormat = /**
     * Export list of audit log entries and filter
     * \@Return: StreamContent
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    function (userId, from, to, itemType, sort, format, fields) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (userId != null) {
            params.push("userId=" + userId);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        if (itemType != null) {
            params.push("itemType=" + itemType);
        }
        if (sort != null) {
            params.push("sort=" + sort);
        }
        if (format != null) {
            params.push("format=" + format);
        }
        if (fields != null) {
            params.push("fields=" + fields);
        }
        return (_a = this.rest).download.apply(_a, tslib_1.__spread(["auditlog", this.baseUrl + "/export"], params));
    };
    /**
     * Get single audit log entry by id
     * @Return: EntityResponse<Appliance>
     */
    /**
     * Get single audit log entry by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    AuditLogService.prototype.get = /**
     * Get single audit log entry by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    AuditLogService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuditLogService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return AuditLogService;
}());
export { AuditLogService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuditLogService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    AuditLogService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AuditLogService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaXRMb2dTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYXVkaXRMb2dTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7OztBQVMxQztJQU1FOztPQUVHO0lBQ0gseUJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFdBQVcsQ0FBQztRQU01QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7Ozs7Ozs7OztJQUNILDhCQUFJOzs7Ozs7Ozs7Ozs7SUFBSixVQUFLLE1BQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLFFBQWlCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjs7O1lBQzVHLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVUsTUFBUSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQU0sRUFBSSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEdBQUssTUFBTSxHQUFFO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7Ozs7Ozs7SUFDSCxzQ0FBWTs7Ozs7Ozs7Ozs7O0lBQVosVUFBYSxNQUFlLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxRQUFpQixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUI7OztZQUN0SCxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLElBQU0sQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFNLEVBQUksQ0FBQyxDQUFDO1NBQUU7UUFDNUMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFZLFFBQVUsQ0FBQyxDQUFDO1NBQUU7UUFDOUQsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLElBQU0sQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFFMUQsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLFFBQVEsNkJBQUMsVUFBVSxFQUFJLElBQUksQ0FBQyxPQUFPLFlBQVMsR0FBSyxNQUFNLEdBQUU7SUFDMUUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDZCQUFHOzs7Ozs7SUFBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBdERGLFVBQVU7Ozs7Z0JBVEYsVUFBVSx1QkFrQkosTUFBTSxTQUFDLFFBQVE7Z0JBbkJyQixRQUFROztJQWtFakIsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXZEWSxlQUFlOzs7Ozs7SUFHMUIsa0NBQThCOzs7OztJQUtsQixpQ0FBNEM7Ozs7O0lBQUUsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuXG5cbi8qKlxuICogQXVkaXQgbG9nIHF1ZXJpZXMgZm9yIGFjY291bnQgYWRtaW5pc3RyYXRvciBvbmx5XG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdWRpdExvZ1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvYXVkaXRsb2cnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXVkaXQgbG9nIGVudHJpZXMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEF1ZGl0TG9nPlxuICAgKi9cbiAgZmluZCh1c2VySWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBpdGVtVHlwZT86IHN0cmluZywgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHVzZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB1c2VySWQ9JHt1c2VySWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKGl0ZW1UeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGl0ZW1UeXBlPSR7aXRlbVR5cGV9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIGF1ZGl0IGxvZyBlbnRyaWVzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KHVzZXJJZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGl0ZW1UeXBlPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmICh1c2VySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdXNlcklkPSR7dXNlcklkfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChpdGVtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpdGVtVHlwZT0ke2l0ZW1UeXBlfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBhdWRpdGxvZ2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXVkaXQgbG9nIGVudHJ5IGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG59XG4iXX0=