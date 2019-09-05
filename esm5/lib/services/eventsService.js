/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
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
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
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
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (folderId, subFolders, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
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
     * @param {?=} format
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
     * @param {?=} format
     * @return {?}
     */
    function (folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/overtime"], params));
    };
    EventsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    EventsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V2ZW50c1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQWdCakQ7SUFNRTs7T0FFRztJQUNILHVCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFNMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCw4QkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxvQ0FBWTs7Ozs7OztJQUFaLFVBQWEsRUFBVyxFQUFFLE1BQXdCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGdCQUFXLE1BQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILG9DQUFZOzs7Ozs7O0lBQVosVUFBYSxFQUFXLEVBQUUsSUFBYTtRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxlQUFZLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILG1DQUFXOzs7Ozs7O0lBQVgsVUFBWSxFQUFXLEVBQUUsSUFBYTtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxjQUFXLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsMkJBQUc7Ozs7OztJQUFILFVBQUksRUFBVztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsNEJBQUk7Ozs7OztJQUFKLFVBQUssRUFBYTs7O1lBQ1YsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxFQUFJLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLFVBQU8sR0FBSyxNQUFNLEdBQUU7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSCw0QkFBSTs7Ozs7Ozs7Ozs7Ozs7OztJQUFKLFVBQUssUUFBaUIsRUFBRSxVQUFvQixFQUFFLFFBQWlCLEVBQUUsVUFBMkIsRUFBRSxZQUErQixFQUFFLFFBQTJCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCOzs7WUFDL04sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsVUFBWSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFjLFVBQVksQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBZ0IsWUFBYyxDQUFDLENBQUM7U0FBRTtRQUMxRSxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUM5RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQU0sRUFBSSxDQUFDLENBQUM7U0FBRTtRQUM1QyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEdBQUssTUFBTSxHQUFFO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSCxrQ0FBVTs7Ozs7Ozs7Ozs7Ozs7O0lBQVYsVUFBVyxRQUFpQixFQUFFLFFBQWlCLEVBQUUsVUFBMkIsRUFBRSxZQUErQixFQUFFLFFBQTJCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCOzs7WUFDL00sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsVUFBWSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFnQixZQUFjLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxFQUFJLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxJQUFJLDZCQUFJLElBQUksQ0FBQyxPQUFPLFVBQU8sRUFBRSxJQUFJLEdBQUssTUFBTSxHQUFFO0lBQy9ELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxxQ0FBYTs7Ozs7O0lBQWIsVUFBYyxFQUFXO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLFdBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxvQ0FBWTs7Ozs7O0lBQVosVUFBYSxFQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLFVBQU8sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7Ozs7Ozs7OztJQUNILDhDQUFzQjs7Ozs7Ozs7Ozs7Ozs7SUFBdEIsVUFBdUIsUUFBaUIsRUFBRSxRQUFpQixFQUFFLFVBQTZCLEVBQUUsWUFBaUMsRUFBRSxRQUE2QixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsUUFBdUIsRUFBRSxNQUFlOzs7WUFDMU4sTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsVUFBWSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFnQixZQUFjLENBQUMsQ0FBQztTQUFFO1FBQzFFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBUSxJQUFNLENBQUMsQ0FBQztTQUFFO1FBQ2xELElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBTSxFQUFJLENBQUMsQ0FBQztTQUFFO1FBQzVDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLDZCQUFJLElBQUksQ0FBQyxPQUFPLGNBQVcsR0FBSyxNQUFNLEdBQUU7SUFDNUQsQ0FBQzs7Z0JBM0lGLFVBQVU7Ozs7Z0RBU0ksTUFBTSxTQUFDLFFBQVE7Z0JBekJyQixRQUFROztJQTZKakIsb0JBQUM7Q0FBQSxBQTdJRCxJQTZJQztTQTVJWSxhQUFhOzs7Ozs7SUFHeEIsZ0NBQTRCOzs7OztJQUtoQiwrQkFBNEM7Ozs7O0lBQUUsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1jb25maWcnO1xuXG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IFRpbWVVbml0Q29kZSB9IGZyb20gJy4uL2VudW1zL1RpbWVVbml0Q29kZSc7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4uL2VudGl0aWVzL0V2ZW50JztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgZXZlbnRzIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEV2ZW50c1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvZXZlbnRzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBldmVudFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGV2ZW50IHdvcmtmbG93IHN0YXR1c1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIGNoYW5nZVN0YXR1cyhpZD86IHN0cmluZywgc3RhdHVzPzogRXZlbnRTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50IGltYWdlIHBhdGhcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8RXZlbnQ+XG4gICAqL1xuICBzZXRJbWFnZVBhdGgoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ltYWdlUGF0aGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGV2ZW50IGNsaXAgcGF0aFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIHNldENsaXBQYXRoKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jbGlwUGF0aGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBldmVudCBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXZlbnRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8RXZlbnQ+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEV2ZW50PlxuICAgKi9cbiAgZmluZChmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlbnNvcklkPzogc3RyaW5nLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGUsIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuICAgIGlmIChvYmplY3RUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYG9iamVjdFR5cGU9JHtvYmplY3RUeXBlfWApOyB9XG4gICAgaWYgKGJlaGF2aW9yVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBiZWhhdmlvclR5cGU9JHtiZWhhdmlvclR5cGV9YCk7IH1cbiAgICBpZiAoc2V2ZXJpdHkgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2V2ZXJpdHk9JHtzZXZlcml0eX1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgZXZlbnRzIGdlbmVyYXRlZCBpbiBhcmVhIHVzaW5nIHNwYXRpYWwgcXVlcnlcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxFdmVudD5cbiAgICovXG4gIGZpbmRJbkFyZWEoZm9sZGVySWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGUsIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAob2JqZWN0VHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBvYmplY3RUeXBlPSR7b2JqZWN0VHlwZX1gKTsgfVxuICAgIGlmIChiZWhhdmlvclR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYmVoYXZpb3JUeXBlPSR7YmVoYXZpb3JUeXBlfWApOyB9XG4gICAgaWYgKHNldmVyaXR5ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNldmVyaXR5PSR7c2V2ZXJpdHl9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9hcmVhYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXZlbnQgaW1hZ2UgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSBpbWFnZVxuICAgKi9cbiAgZ2V0RXZlbnRJbWFnZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXZlbnQgY2xpcCBbcmVzcG9uc2UgY29udGVudCB0eXBlOiB2aWRlby9tcDRdXG4gICAqIEBSZXR1cm46IFN0cmVhbWluZ091dHB1dCBvZiB0aGUgY2xpcFxuICAgKi9cbiAgZ2V0RXZlbnRDbGlwKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9jbGlwYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGV2ZW50cyBjb3VudCBvdmVydGltZSBmb3IgYWxsIGV2ZW50cyBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEV2ZW50Q291bnRUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0RXZlbnRzQ291bnRPdmVydGltZShmb2xkZXJJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIG9iamVjdFR5cGU/OiBPYmplY3RUeXBlQ29kZVtdLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlW10sIHNldmVyaXR5PzogU2V2ZXJpdHlUeXBlQ29kZVtdLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlciwgaW50ZXJ2YWw/OiBUaW1lVW5pdENvZGUsIGZvcm1hdD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKG9iamVjdFR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgb2JqZWN0VHlwZT0ke29iamVjdFR5cGV9YCk7IH1cbiAgICBpZiAoYmVoYXZpb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGJlaGF2aW9yVHlwZT0ke2JlaGF2aW9yVHlwZX1gKTsgfVxuICAgIGlmIChzZXZlcml0eSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZXZlcml0eT0ke3NldmVyaXR5fWApOyB9XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuICAgIGlmIChpbnRlcnZhbCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpbnRlcnZhbD0ke2ludGVydmFsfWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vb3ZlcnRpbWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==