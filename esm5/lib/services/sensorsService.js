/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
     * Enable (activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Enable (activate) sensor
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.enable = /**
     * Enable (activate) sensor
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.put(this.baseUrl + "/" + id + "/enable", null);
    };
    /**
     * Disable (de-activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    /**
     * Disable (de-activate) sensor
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.disable = /**
     * Disable (de-activate) sensor
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.put(this.baseUrl + "/" + id + "/disable", null);
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
     * Export list of sensors and filter
     * @Return: StreamContent
     */
    /**
     * Export list of sensors and filter
     * \@Return: StreamContent
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    SensorsService.prototype.exportFormat = /**
     * Export list of sensors and filter
     * \@Return: StreamContent
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    function (folderId, subFolders, search, type, status, stream, sort, format, fields) {
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
        if (format != null) {
            params.push("format=" + format);
        }
        if (fields != null) {
            params.push("fields=" + fields);
        }
        return (_a = this.rest).download.apply(_a, tslib_1.__spread(["sensors", this.baseUrl + "/export"], params));
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
        return this.rest.download("sensors", this.baseUrl + "/" + id + "/ref-image");
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
     * @Return: EntityResponse<SensorStatus>
     */
    /**
     * Get single sensor health by sensor id
     * \@Return: EntityResponse<SensorStatus>
     * @param {?=} id
     * @return {?}
     */
    SensorsService.prototype.getSensorHealthStatus = /**
     * Get single sensor health by sensor id
     * \@Return: EntityResponse<SensorStatus>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/health");
    };
    /**
     * Get all sensors health status
     * @Return: EntitiesResponse<SensorStatus>
     */
    /**
     * Get all sensors health status
     * \@Return: EntitiesResponse<SensorStatus>
     * @return {?}
     */
    SensorsService.prototype.getSensorsHealthStatus = /**
     * Get all sensors health status
     * \@Return: EntitiesResponse<SensorStatus>
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
    /**
     * Aggregate sensors count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    /**
     * Aggregate sensors count distribution by type
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorType
     * @param {?=} status
     * @param {?=} streamType
     * @return {?}
     */
    SensorsService.prototype.getSensorsCountByType = /**
     * Aggregate sensors count distribution by type
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorType
     * @param {?=} status
     * @param {?=} streamType
     * @return {?}
     */
    function (folderId, subFolders, sensorType, status, streamType) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        if (sensorType != null) {
            params.push("sensorType=" + sensorType);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (streamType != null) {
            params.push("streamType=" + streamType);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/count/by-type"], params));
    };
    /**
     * Aggregate sensors count distribution by stream type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    /**
     * Aggregate sensors count distribution by stream type
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorType
     * @param {?=} status
     * @param {?=} streamType
     * @return {?}
     */
    SensorsService.prototype.getSensorsCountByStream = /**
     * Aggregate sensors count distribution by stream type
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorType
     * @param {?=} status
     * @param {?=} streamType
     * @return {?}
     */
    function (folderId, subFolders, sensorType, status, streamType) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        if (sensorType != null) {
            params.push("sensorType=" + sensorType);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (streamType != null) {
            params.push("streamType=" + streamType);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/count/by-stream"], params));
    };
    /**
     * Aggregate sensors count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    /**
     * Aggregate sensors count distribution by status
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorType
     * @param {?=} status
     * @param {?=} streamType
     * @return {?}
     */
    SensorsService.prototype.getSensorsCountByStatus = /**
     * Aggregate sensors count distribution by status
     * \@Return: EntityResponse<DistributionOfLong>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorType
     * @param {?=} status
     * @param {?=} streamType
     * @return {?}
     */
    function (folderId, subFolders, sensorType, status, streamType) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (folderId != null) {
            params.push("folderId=" + folderId);
        }
        if (subFolders != null) {
            params.push("subFolders=" + subFolders);
        }
        if (sensorType != null) {
            params.push("sensorType=" + sensorType);
        }
        if (status != null) {
            params.push("status=" + status);
        }
        if (streamType != null) {
            params.push("streamType=" + streamType);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/count/by-status"], params));
    };
    SensorsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SensorsService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc29yc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZW5zb3JzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFlMUM7SUFNRTs7T0FFRztJQUNILHdCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxVQUFVLENBQUM7UUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7OztJQUFOLFVBQU8sRUFBVyxFQUFFLElBQWE7UUFDL0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FB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UUFBUTs7SUFtUWpCLHFCQUFDO0NBQUEsQUFuUEQsSUFtUEM7U0FsUFksY0FBYzs7Ozs7O0lBR3pCLGlDQUE2Qjs7Ozs7SUFLakIsZ0NBQTRDOzs7OztJQUFFLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmltcG9ydCB7IFNlbnNvclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JTdGF0dXNDb2RlJztcbmltcG9ydCB7IFN0cmVhbVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU3RyZWFtVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc29yIH0gZnJvbSAnLi4vZW50aXRpZXMvU2Vuc29yJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBGb3ZHZW9BdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29tbW9uL0Zvdkdlb0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3Igc2Vuc29yIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbnNvcnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3NlbnNvcnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHNlbnNvclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IFNlbnNvcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Vuc29yIHBhcmFtZXRlcnNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogU2Vuc29yKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNlbnNvciBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzZW5zb3IgcGFyZW50IGZvbGRlciBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VGb2xkZXIoaWQ/OiBzdHJpbmcsIGZvbGRlcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9mb2xkZXIvJHtmb2xkZXJJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIGdlby1sb2NhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VHZW9Mb2NhdGlvbihpZD86IHN0cmluZywgYm9keT86IENvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIGZpZWxkIG9mIHZpZXcgdHJhbnNmb3JtYXRpb24gYXR0cmlidXRlc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VGb3ZBdHRyaWJ1dGVzKGlkPzogc3RyaW5nLCBhemltdXRoPzogbnVtYmVyLCBib2R5PzogRm92R2VvQXR0cmlidXRlcykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYXppbXV0aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhemltdXRoPSR7YXppbXV0aH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9mb3ZgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHksIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIChhY3RpdmF0ZSkgc2Vuc29yXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGVuYWJsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZW5hYmxlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSAoZGUtYWN0aXZhdGUpIHNlbnNvclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBkaXNhYmxlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9kaXNhYmxlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHNlbnNvciBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHNlbnNvciBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvcnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBzZW5zb3JzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBmaW5kKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogU2Vuc29yVHlwZUNvZGVbXSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZVtdLCBzdHJlYW0/OiBTdHJlYW1UeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHN0cmVhbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW09JHtzdHJlYW19YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIHNlbnNvcnMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuLCBzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBTZW5zb3JUeXBlQ29kZVtdLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlW10sIHN0cmVhbT86IFN0cmVhbVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzdHJlYW0gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtPSR7c3RyZWFtfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzZW5zb3JzYCxgJHt0aGlzLmJhc2VVcmx9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciByZWZlcmVuY2UgaW1hZ2UgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSByZWZlcmVuY2UgaW1hZ2VcbiAgICovXG4gIGdldFJlZkltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2Vuc29yc2AsYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWYtaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2Vuc29yIHJlZmVyZW5jZSBpbWFnZSBbcHV0IGJpbmFyeSBpbWFnZSBpbiBib2R5IHdpdGggY29udGVudCB0eXBlOiBpbWFnZS9qcGVnXVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0UmVmSW1hZ2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlZi1pbWFnZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvb3JkaW5hdGU+XG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZW5zb3IgaGVhbHRoIGJ5IHNlbnNvciBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JTdGF0dXM+XG4gICAqL1xuICBnZXRTZW5zb3JIZWFsdGhTdGF0dXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2Vuc29ycyBoZWFsdGggc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2Vuc29yU3RhdHVzPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0hlYWx0aFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3Igc3RhdHVzIGhpc3Rvcnkgb3ZlciB0aW1lXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxTZW5zb3JTdGF0dXNUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0U3RhdHVzT3ZlclRpbWUoaWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzL292ZXJ0aW1lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgc2Vuc29ycyBjb3VudCBkaXN0cmlidXRpb24gYnkgdHlwZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8RGlzdHJpYnV0aW9uT2ZMb25nPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0NvdW50QnlUeXBlKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS10eXBlYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgc2Vuc29ycyBjb3VudCBkaXN0cmlidXRpb24gYnkgc3RyZWFtIHR5cGVcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldFNlbnNvcnNDb3VudEJ5U3RyZWFtKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zdHJlYW1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZSBzZW5zb3JzIGNvdW50IGRpc3RyaWJ1dGlvbiBieSBzdGF0dXNcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldFNlbnNvcnNDb3VudEJ5U3RhdHVzKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zdGF0dXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==