/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for event queries for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
var SysEventsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SysEventsService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/events';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single event by id
     * @Return: EntityResponse<Event>
     */
    /**
     * Get single event by id
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} accountId
     * @return {?}
     */
    SysEventsService.prototype.get = /**
     * Get single event by id
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} accountId
     * @return {?}
     */
    function (id, accountId) {
        return this.rest.get(this.baseUrl + "/" + accountId + "/" + id);
    };
    /**
     * Find events by filters
     * @Return: QueryResponse<Event>
     */
    /**
     * Find events by filters
     * \@Return: QueryResponse<Event>
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SysEventsService.prototype.find = /**
     * Find events by filters
     * \@Return: QueryResponse<Event>
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (sensorId != null) {
            params.push("sensorId=" + sensorId);
        }
        if (objectType != null) {
            params.push("objectType=" + objectType);
        }
        if (behaviorType != null) {
            params.push("behaviorType=" + behaviorType);
        }
        if (severity != null) {
            params.push("severity=" + severity);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + accountId + "/"], params));
    };
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    /**
     * Get events count overtime for all events in the system
     * \@Return: EntityResponse<EventCountTimeSeries>
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} format
     * @return {?}
     */
    SysEventsService.prototype.getEventsCountOvertime = /**
     * Get events count overtime for all events in the system
     * \@Return: EntityResponse<EventCountTimeSeries>
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} format
     * @return {?}
     */
    function (accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (sensorId != null) {
            params.push("sensorId=" + sensorId);
        }
        if (objectType != null) {
            params.push("objectType=" + objectType);
        }
        if (behaviorType != null) {
            params.push("behaviorType=" + behaviorType);
        }
        if (severity != null) {
            params.push("severity=" + severity);
        }
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        if (interval != null) {
            params.push("interval=" + interval);
        }
        if (format != null) {
            params.push("format=" + format);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + accountId + "/overtime"], params));
    };
    SysEventsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SysEventsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SysEventsService;
}());
export { SysEventsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysEventsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysEventsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysEventsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzRXZlbnRzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3N5c0V2ZW50c1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7QUFlakQ7SUFNRTs7T0FFRztJQUNILDBCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxhQUFhLENBQUM7UUFNOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsOEJBQUc7Ozs7Ozs7SUFBSCxVQUFJLEVBQVcsRUFBRSxTQUFrQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksU0FBUyxTQUFJLEVBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsK0JBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBSixVQUFLLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxRQUFpQixFQUFFLFVBQTJCLEVBQUUsWUFBK0IsRUFBRSxRQUEyQixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjs7O1lBQzdOLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFB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T0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxTQUFTLGNBQVcsR0FBSyxNQUFNLEdBQUU7SUFDekUsQ0FBQzs7Z0JBM0RGLFVBQVU7Ozs7Z0RBU0ksTUFBTSxTQUFDLFFBQVE7Z0JBeEJyQixRQUFROztJQTRFakIsdUJBQUM7Q0FBQSxBQTdERCxJQTZEQztTQTVEWSxnQkFBZ0I7Ozs7OztJQUczQixtQ0FBZ0M7Ozs7O0lBS3BCLGtDQUE0Qzs7Ozs7SUFBRSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWxpYi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IFRpbWVVbml0Q29kZSB9IGZyb20gJy4uL2VudW1zL1RpbWVVbml0Q29kZSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgZXZlbnQgcXVlcmllcyBmb3Igc3lzdGVtIGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyXG4gKiBAUmVzb3VyY2VHcm91cCBTeXN0ZW0gQWRtaW5pc3RyYXRvciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c0V2ZW50c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc3lzL2V2ZW50cyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgZXZlbnQgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RXZlbnQ+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcsIGFjY291bnRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHthY2NvdW50SWR9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEV2ZW50PlxuICAgKi9cbiAgZmluZChhY2NvdW50SWQ/OiBzdHJpbmcsIGZvbGRlcklkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZywgb2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb2RlLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGUsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKG9iamVjdFR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgb2JqZWN0VHlwZT0ke29iamVjdFR5cGV9YCk7IH1cbiAgICBpZiAoYmVoYXZpb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGJlaGF2aW9yVHlwZT0ke2JlaGF2aW9yVHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2FjY291bnRJZH0vYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXZlbnRzIGNvdW50IG92ZXJ0aW1lIGZvciBhbGwgZXZlbnRzIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RXZlbnRDb3VudFRpbWVTZXJpZXM+XG4gICAqL1xuICBnZXRFdmVudHNDb3VudE92ZXJ0aW1lKGFjY291bnRJZD86IHN0cmluZywgZm9sZGVySWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGUsIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGludGVydmFsPzogVGltZVVuaXRDb2RlLCBmb3JtYXQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChvYmplY3RUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG9iamVjdFR5cGU9JHtvYmplY3RUeXBlfWApOyB9XG4gICAgaWYgKGJlaGF2aW9yVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBiZWhhdmlvclR5cGU9JHtiZWhhdmlvclR5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoaW50ZXJ2YWwgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaW50ZXJ2YWw9JHtpbnRlcnZhbH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7YWNjb3VudElkfS9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19