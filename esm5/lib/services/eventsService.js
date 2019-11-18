/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * Services for events actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var EventsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function EventsService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/events';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new event
     * @Return: EntityResponse<Event>
     */
    /**
     * Create new event
     * \@Return: EntityResponse<Event>
     * @param {?=} body
     * @return {?}
     */
    EventsService.prototype.create = /**
     * Create new event
     * \@Return: EntityResponse<Event>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change event workflow status
     * @Return: EntityResponse<Event>
     */
    /**
     * Change event workflow status
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    EventsService.prototype.changeStatus = /**
     * Change event workflow status
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    function (id, status) {
        return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
    };
    /**
     * Set event image path
     * @Return: EntityResponse<Event>
     */
    /**
     * Set event image path
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    EventsService.prototype.setImagePath = /**
     * Set event image path
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/imagePath", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Set event clip path
     * @Return: EntityResponse<Event>
     */
    /**
     * Set event clip path
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    EventsService.prototype.setClipPath = /**
     * Set event clip path
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/clipPath", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Get single event by id
     * @Return: EntityResponse<Event>
     */
    /**
     * Get single event by id
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @return {?}
     */
    EventsService.prototype.get = /**
     * Get single event by id
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get events by list of ids
     * @Return: EntitiesResponse<Event>
     */
    /**
     * Get events by list of ids
     * \@Return: EntitiesResponse<Event>
     * @param {?=} id
     * @return {?}
     */
    EventsService.prototype.list = /**
     * Get events by list of ids
     * \@Return: EntitiesResponse<Event>
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
     * Find events by filters
     * @Return: QueryResponse<Event>
     */
    /**
     * Find events by filters
     * \@Return: QueryResponse<Event>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} status
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    EventsService.prototype.find = /**
     * Find events by filters
     * \@Return: QueryResponse<Event>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} status
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    function (folderId, subFolders, sensorId, objectType, behaviorType, severity, status, from, to, sort, page, pageSize, format, fields) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
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
        if (status != null) {
            params.push("status=" + status);
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
        if (format != null) {
            params.push("format=" + format);
        }
        if (fields != null) {
            params.push("fields=" + fields);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread(["" + this.baseUrl], params));
    };
    /**
     * Find events generated in area using spatial query
     * @Return: QueryResponse<Event>
     */
    /**
     * Find events generated in area using spatial query
     * \@Return: QueryResponse<Event>
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
    EventsService.prototype.findInArea = /**
     * Find events generated in area using spatial query
     * \@Return: QueryResponse<Event>
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
    function (folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
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
        return (_a = this.rest).post.apply(_a, tslib_1.__spread([this.baseUrl + "/area", null], params));
    };
    /**
     * Get event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    /**
     * Get event image [response content type: image/jpeg]
     * \@Return: StreamingOutput of the image
     * @param {?=} id
     * @return {?}
     */
    EventsService.prototype.getEventImage = /**
     * Get event image [response content type: image/jpeg]
     * \@Return: StreamingOutput of the image
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/image");
    };
    /**
     * Get event clip [response content type: video/mp4]
     * @Return: StreamingOutput of the clip
     */
    /**
     * Get event clip [response content type: video/mp4]
     * \@Return: StreamingOutput of the clip
     * @param {?=} id
     * @return {?}
     */
    EventsService.prototype.getEventClip = /**
     * Get event clip [response content type: video/mp4]
     * \@Return: StreamingOutput of the clip
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/clip");
    };
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    /**
     * Get events count overtime for all events in the system
     * \@Return: EntityResponse<EventCountTimeSeries>
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} label
     * @return {?}
     */
    EventsService.prototype.getEventsCountOvertime = /**
     * Get events count overtime for all events in the system
     * \@Return: EntityResponse<EventCountTimeSeries>
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} label
     * @return {?}
     */
    function (folderId, sensorId, objectType, behaviorType, severity, from, to, interval, label) {
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
        if (label != null) {
            params.push("label=" + label);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/overtime"], params));
    };
    EventsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EventsService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return EventsService;
}());
export { EventsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V2ZW50c1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBZTFDO0lBTUU7O09BRUc7SUFDSCx1QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsU0FBUyxDQUFDO1FBTTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHOzs7Ozs7O0lBQ0gsOEJBQU07Ozs7OztJQUFOLFVBQU8sSUFBWTtRQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsb0NBQVk7Ozs7Ozs7SUFBWixVQUFhLEVBQVcsRUFBRSxNQUF3QjtRQUNoRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxnQkFBVyxNQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7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QUMsUUFBTSxFQUFJLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBUyxLQUFPLENBQUMsQ0FBQztTQUFFO1FBRXZELE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLGNBQVcsR0FBSyxNQUFNLEdBQUU7SUFDNUQsQ0FBQzs7Z0JBOUlGLFVBQVU7Ozs7Z0JBZkYsVUFBVSx1QkF3QkosTUFBTSxTQUFDLFFBQVE7Z0JBekJyQixRQUFROztJQWdLakIsb0JBQUM7Q0FBQSxBQWhKRCxJQWdKQztTQS9JWSxhQUFhOzs7Ozs7SUFHeEIsZ0NBQTRCOzs7OztJQUtoQiwrQkFBNEM7Ozs7O0lBQUUsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgVGltZVVuaXRDb2RlIH0gZnJvbSAnLi4vZW51bXMvVGltZVVuaXRDb2RlJztcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi4vZW50aXRpZXMvRXZlbnQnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGV2ZW50cyBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFdmVudHNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2V2ZW50cyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgZXZlbnRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RXZlbnQ+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBldmVudCB3b3JrZmxvdyBzdGF0dXNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RXZlbnQ+XG4gICAqL1xuICBjaGFuZ2VTdGF0dXMoaWQ/OiBzdHJpbmcsIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzLyR7c3RhdHVzfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudCBpbWFnZSBwYXRoXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEV2ZW50PlxuICAgKi9cbiAgc2V0SW1hZ2VQYXRoKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9pbWFnZVBhdGhgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBldmVudCBjbGlwIHBhdGhcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RXZlbnQ+XG4gICAqL1xuICBzZXRDbGlwUGF0aChpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY2xpcFBhdGhgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgZXZlbnQgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RXZlbnQ+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV2ZW50cyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEV2ZW50PlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZXZlbnRzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIGZpbmQoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuLCBzZW5zb3JJZD86IHN0cmluZywgb2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb2RlLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCBzZXZlcml0eT86IFNldmVyaXR5VHlwZUNvZGUsIHN0YXR1cz86IEV2ZW50U3RhdHVzQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChvYmplY3RUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG9iamVjdFR5cGU9JHtvYmplY3RUeXBlfWApOyB9XG4gICAgaWYgKGJlaGF2aW9yVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBiZWhhdmlvclR5cGU9JHtiZWhhdmlvclR5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZXZlbnRzIGdlbmVyYXRlZCBpbiBhcmVhIHVzaW5nIHNwYXRpYWwgcXVlcnlcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIGZpbmRJbkFyZWEoZm9sZGVySWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGUsIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAob2JqZWN0VHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBvYmplY3RUeXBlPSR7b2JqZWN0VHlwZX1gKTsgfVxuICAgIGlmIChiZWhhdmlvclR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYmVoYXZpb3JUeXBlPSR7YmVoYXZpb3JUeXBlfWApOyB9XG4gICAgaWYgKHNldmVyaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNldmVyaXR5PSR7c2V2ZXJpdHl9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hcmVhYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXZlbnQgaW1hZ2UgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSBpbWFnZVxuICAgKi9cbiAgZ2V0RXZlbnRJbWFnZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXZlbnQgY2xpcCBbcmVzcG9uc2UgY29udGVudCB0eXBlOiB2aWRlby9tcDRdXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY2xpcFxuICAgKi9cbiAgZ2V0RXZlbnRDbGlwKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jbGlwYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV2ZW50cyBjb3VudCBvdmVydGltZSBmb3IgYWxsIGV2ZW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEV2ZW50Q291bnRUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0RXZlbnRzQ291bnRPdmVydGltZShmb2xkZXJJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaW50ZXJ2YWw/OiBUaW1lVW5pdENvZGUsIGxhYmVsPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAob2JqZWN0VHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBvYmplY3RUeXBlPSR7b2JqZWN0VHlwZX1gKTsgfVxuICAgIGlmIChiZWhhdmlvclR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYmVoYXZpb3JUeXBlPSR7YmVoYXZpb3JUeXBlfWApOyB9XG4gICAgaWYgKHNldmVyaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNldmVyaXR5PSR7c2V2ZXJpdHl9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKGludGVydmFsICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGludGVydmFsPSR7aW50ZXJ2YWx9YCk7IH1cbiAgICBpZiAobGFiZWwgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgbGFiZWw9JHtsYWJlbH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19