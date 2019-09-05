/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * Services for sensor actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var SensorsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function SensorsService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sensors';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new sensor
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Create new sensor
     * \@Return: EntityResponse<Sensor>
     * @param {?=} body
     * @return {?}
     */
    SensorsService.prototype.create = /**
     * Create new sensor
     * \@Return: EntityResponse<Sensor>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update sensor parameters
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Update sensor parameters
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SensorsService.prototype.update = /**
     * Update sensor parameters
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change sensor name
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Change sensor name
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SensorsService.prototype.changeName = /**
     * Change sensor name
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change sensor parent folder id
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Change sensor parent folder id
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} folderId
     * @return {?}
     */
    SensorsService.prototype.changeFolder = /**
     * Change sensor parent folder id
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} folderId
     * @return {?}
     */
    function (id, folderId) {
        return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
    };
    /**
     * Change sensor geo-location
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Change sensor geo-location
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SensorsService.prototype.changeGeoLocation = /**
     * Change sensor geo-location
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change sensor field of view transformation attributes
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Change sensor field of view transformation attributes
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} azimuth
     * @param {?=} body
     * @return {?}
     */
    SensorsService.prototype.changeFovAttributes = /**
     * Change sensor field of view transformation attributes
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} azimuth
     * @param {?=} body
     * @return {?}
     */
    function (id, azimuth, body) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (azimuth != null) {
            params.push("azimuth=" + azimuth);
        }
        return (_a = this.rest).put.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/fov", typeof body === 'object' ? JSON.stringify(body) : body], params));
    };
    /**
     * Change sensor status
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Change sensor status
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    SensorsService.prototype.changeStatus = /**
     * Change sensor status
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    function (id, status) {
        return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
    };
    /**
     * Delete sensor from the system
     * @Return: ActionResponse
     */
    /**
     * Delete sensor from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.delete = /**
     * Delete sensor from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single sensor by id
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Get single sensor by id
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.get = /**
     * Get single sensor by id
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get sensors by list of ids
     * @Return: EntitiesResponse<Sensor>
     */
    /**
     * Get sensors by list of ids
     * \@Return: EntitiesResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.list = /**
     * Get sensors by list of ids
     * \@Return: EntitiesResponse<Sensor>
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
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    /**
     * Find sensors by filters
     * \@Return: QueryResponse<Sensor>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    SensorsService.prototype.find = /**
     * Find sensors by filters
     * \@Return: QueryResponse<Sensor>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        if (search != null) {
            params.push("search=" + search);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (stream != null) {
            params.push("stream=" + stream);
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
     * Get sensor reference image [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * \@Return: StreamingOutput of the reference image
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.getRefImage = /**
     * Get sensor reference image [response content type: image/jpeg]
     * \@Return: StreamingOutput of the reference image
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/ref-image");
    };
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * @Return: ActionResponse
     */
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    SensorsService.prototype.setRefImage = /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/ref-image", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate>
     */
    /**
     * Get default geo location
     * \@Return: EntityResponse<Coordinate>
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.getDefaultLocation = /**
     * Get default geo location
     * \@Return: EntityResponse<Coordinate>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
    };
    /**
     * Get single sensor health by sensor id
     * @Return: EntityResponse<SensorHealth>
     */
    /**
     * Get single sensor health by sensor id
     * \@Return: EntityResponse<SensorHealth>
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.getSensorHealthStatus = /**
     * Get single sensor health by sensor id
     * \@Return: EntityResponse<SensorHealth>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/health");
    };
    /**
     * Get all sensors health status
     * @Return: EntitiesResponse<SensorHealth>
     */
    /**
     * Get all sensors health status
     * \@Return: EntitiesResponse<SensorHealth>
     * @return {?}
     */
    SensorsService.prototype.getSensorsHealthStatus = /**
     * Get all sensors health status
     * \@Return: EntitiesResponse<SensorHealth>
     * @return {?}
     */
    function () {
        return this.rest.get(this.baseUrl + "/health");
    };
    /**
     * Get sensor status history over time
     * @Return:  EntityResponse<SensorStatusTimeSeries>
     */
    /**
     * Get sensor status history over time
     * \@Return: EntityResponse<SensorStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    SensorsService.prototype.getStatusOverTime = /**
     * Get sensor status history over time
     * \@Return: EntityResponse<SensorStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    function (id, from, to) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/status/overtime"], params));
    };
    SensorsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SensorsService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return SensorsService;
}());
export { SensorsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SensorsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SensorsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SensorsService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc29yc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZW5zb3JzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBZ0JqRDtJQU1FOztPQUVHO0lBQ0gsd0JBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLFVBQVUsQ0FBQztRQU0zQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7OztJQUNILCtCQUFNOzs7Ozs7SUFBTixVQUFPLElBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILCtCQUFNOzs7Ozs7O0lBQU4sVUFBTyxFQUFXLEVBQUUsSUFBYTtRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxtQ0FBVTs7Ozs7OztJQUFWLFVBQVcsRUFBVyxFQUFFLElBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUUsVUFBTyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxxQ0FBWTs7Ozs7OztJQUFaLFVBQWEsRUFBVyxFQUFFLFFBQWlCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGdCQUFXLFFBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILDBDQUFpQjs7Ozs7OztJQUFqQixVQUFrQixFQUFXLEVBQUUsSUFBaUI7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUUsaUJBQWMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7OztJQUNILDRDQUFtQjs7Ozs7Ozs7SUFBbkIsVUFBb0IsRUFBVyxFQUFFLE9BQWdCLEVBQUUsSUFBdUI7OztZQUNsRSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFXLE9BQVMsQ0FBQyxDQUFDO1NBQUU7UUFFN0QsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLFNBQU0sRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBSyxNQUFNLEdBQUU7SUFDckgsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxxQ0FBWTs7Ozs7OztJQUFaLFVBQWEsRUFBVyxFQUFFLE1BQXlCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGdCQUFXLE1BQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsK0JBQU07Ozs7OztJQUFOLFVBQU8sRUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDRCQUFHOzs7Ozs7SUFBSCxVQUFJLEVBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDZCQUFJOzs7Ozs7SUFBSixVQUFLLEVBQWE7OztZQUNWLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQU0sRUFBSSxDQUFDLENBQUM7U0FBRTtRQUU5QyxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBSSxJQUFJLENBQUMsT0FBTyxVQUFPLEdBQUssTUFBTSxHQUFFO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7Ozs7Ozs7OztJQUNILDZCQUFJOzs7Ozs7Ozs7Ozs7OztJQUFKLFVBQUssUUFBaUIsRUFBRSxVQUFvQixFQUFFLE1BQWUsRUFBRSxJQUF1QixFQUFFLE1BQTJCLEVBQUUsTUFBeUIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCOzs7WUFDdkwsTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsVUFBWSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVUsTUFBUSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVUsTUFBUSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVUsTUFBUSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQVksUUFBVSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBQyxLQUFHLElBQUksQ0FBQyxPQUFTLEdBQUssTUFBTSxHQUFFO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCxvQ0FBVzs7Ozs7O0lBQVgsVUFBWSxFQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGVBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsb0NBQVc7Ozs7Ozs7SUFBWCxVQUFZLEVBQVcsRUFBRSxJQUFhO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGVBQVksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCwyQ0FBa0I7Ozs7OztJQUFsQixVQUFtQixFQUFXO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGlCQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ0gsOENBQXFCOzs7Ozs7SUFBckIsVUFBc0IsRUFBVztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFNBQUksRUFBRSxZQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCwrQ0FBc0I7Ozs7O0lBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxZQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7Ozs7SUFDSCwwQ0FBaUI7Ozs7Ozs7O0lBQWpCLFVBQWtCLEVBQVcsRUFBRSxJQUFhLEVBQUUsRUFBVzs7O1lBQ2pELE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUMxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVEsSUFBTSxDQUFDLENBQUM7U0FBRTtRQUNsRCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQU0sRUFBSSxDQUFDLENBQUM7U0FBRTtRQUU5QyxPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUUscUJBQWtCLEdBQUssTUFBTSxHQUFFO0lBQ3pFLENBQUM7O2dCQXpLRixVQUFVOzs7O2dEQVNJLE1BQU0sU0FBQyxRQUFRO2dCQXpCckIsUUFBUTs7SUEyTGpCLHFCQUFDO0NBQUEsQUEzS0QsSUEyS0M7U0ExS1ksY0FBYzs7Ozs7O0lBR3pCLGlDQUE2Qjs7Ozs7SUFLakIsZ0NBQTRDOzs7OztJQUFFLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtY29uZmlnJztcblxuaW1wb3J0IHsgU2Vuc29yU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTdHJlYW1UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1N0cmVhbVR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvcic7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRm92R2VvQXR0cmlidXRlcyB9IGZyb20gJy4uL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBzZW5zb3IgYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vuc29yc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc2Vuc29ycyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgc2Vuc29yXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogU2Vuc29yKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZW5zb3IgcGFyYW1ldGVyc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBTZW5zb3IpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgY2hhbmdlTmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNlbnNvciBwYXJlbnQgZm9sZGVyIGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZUZvbGRlcihpZD86IHN0cmluZywgZm9sZGVySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvbGRlci8ke2ZvbGRlcklkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzZW5zb3IgZ2VvLWxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZUdlb0xvY2F0aW9uKGlkPzogc3RyaW5nLCBib2R5PzogQ29vcmRpbmF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ2VvTG9jYXRpb25gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzZW5zb3IgZmllbGQgb2YgdmlldyB0cmFuc2Zvcm1hdGlvbiBhdHRyaWJ1dGVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZUZvdkF0dHJpYnV0ZXMoaWQ/OiBzdHJpbmcsIGF6aW11dGg/OiBudW1iZXIsIGJvZHk/OiBGb3ZHZW9BdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhemltdXRoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGF6aW11dGg9JHthemltdXRofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvdmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIHN0YXR1c1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VTdGF0dXMoaWQ/OiBzdHJpbmcsIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3N0YXR1cy8ke3N0YXR1c31gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgc2Vuc29yIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgc2Vuc29yIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29ycyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGxpc3QoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHNlbnNvcnMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGZpbmQoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuLCBzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBTZW5zb3JUeXBlQ29kZVtdLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlW10sIHN0cmVhbT86IFN0cmVhbVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbT0ke3N0cmVhbX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciByZWZlcmVuY2UgaW1hZ2UgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSByZWZlcmVuY2UgaW1hZ2VcbiAgICovXG4gIGdldFJlZkltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWYtaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2Vuc29yIHJlZmVyZW5jZSBpbWFnZSBbcHV0IGJpbmFyeSBpbWFnZSBpbiBib2R5IHdpdGggY29udGVudCB0eXBlOiBpbWFnZS9qcGVnXVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0UmVmSW1hZ2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlZi1pbWFnZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvb3JkaW5hdGU+XG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZW5zb3IgaGVhbHRoIGJ5IHNlbnNvciBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JIZWFsdGg+XG4gICAqL1xuICBnZXRTZW5zb3JIZWFsdGhTdGF0dXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2Vuc29ycyBoZWFsdGggc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2Vuc29ySGVhbHRoPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0hlYWx0aFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3Igc3RhdHVzIGhpc3Rvcnkgb3ZlciB0aW1lXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxTZW5zb3JTdGF0dXNUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0U3RhdHVzT3ZlclRpbWUoaWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzL292ZXJ0aW1lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG59XG4iXX0=