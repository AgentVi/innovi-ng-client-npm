import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for sensor actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
    SensorsService.prototype.create = function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Create bulk of sensors with the same account Id, appliance Id and agent Id
     * @Return: EntitiesResponse<Sensor>
     */
    SensorsService.prototype.createBulk = function (body) {
        return this.rest.post(this.baseUrl + "/bulk", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update sensor parameters
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.update = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change sensor name
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.changeName = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change sensor parent folder id
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.changeFolder = function (id, folderId) {
        return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
    };
    /**
     * Change sensor geo-location
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.changeGeoLocation = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change sensor field of view transformation attributes
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.changeFovAttributes = function (id, azimuth, body) {
        var _a;
        var params = new Array();
        if (azimuth != null) {
            params.push("azimuth=" + azimuth);
        }
        return (_a = this.rest).put.apply(_a, __spread([this.baseUrl + "/" + id + "/fov", typeof body === 'object' ? JSON.stringify(body) : body], params));
    };
    /**
     * Enable (activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.enable = function (id) {
        return this.rest.put(this.baseUrl + "/" + id + "/enable", null);
    };
    /**
     * Disable (de-activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.disable = function (id) {
        return this.rest.put(this.baseUrl + "/" + id + "/disable", null);
    };
    /**
     * Attach sensor to a device with the given appliance Id
     * This action enabled on already detached and SUSPENDED sensor
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.attach = function (id, applianceId) {
        return this.rest.put(this.baseUrl + "/" + id + "/attach/" + applianceId, null);
    };
    /**
     * Detach sensor from a device and change it's status to SUSPENDED
     * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
     * The sensor can be attached later to any other device in the system
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.detach = function (id) {
        return this.rest.put(this.baseUrl + "/" + id + "/detach", null);
    };
    /**
     * Delete sensor from the system
     * @Return: ActionResponse
     */
    SensorsService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single sensor by id
     * @Return: EntityResponse<Sensor>
     */
    SensorsService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get sensors by list of ids
     * @Return: EntitiesResponse<Sensor>
     */
    SensorsService.prototype.list = function (id) {
        var _a;
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
    };
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    SensorsService.prototype.find = function (folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
        var _a;
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
        return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
    };
    /**
     * Export list of sensors and filter
     * @Return: StreamContent
     */
    SensorsService.prototype.exportFormat = function (folderId, subFolders, search, type, status, stream, sort, format, fields) {
        var _a;
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
        return (_a = this.rest).download.apply(_a, __spread(["sensors", this.baseUrl + "/export"], params));
    };
    /**
     * Get single sensor preset data by id
     * @Return: EntityResponse<Preset>
     */
    SensorsService.prototype.getPreset = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/preset");
    };
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    SensorsService.prototype.getRefImage = function (id) {
        return this.rest.download("sensors", this.baseUrl + "/" + id + "/ref-image");
    };
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * @Return: ActionResponse
     */
    SensorsService.prototype.setRefImage = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/ref-image", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Return a cropped Jpeg image out of sensor reference image for Asset Protection rule
     * @Return: ActionResponse - the encoded jpeg as base64 is in the data key
     */
    SensorsService.prototype.cropImage = function (id, body) {
        return this.rest.post(this.baseUrl + "/" + id + "/crop", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate>
     */
    SensorsService.prototype.getDefaultLocation = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
    };
    /**
     * Get single sensor health by sensor id
     * @Return: EntityResponse<SensorStatus>
     */
    SensorsService.prototype.getSensorHealthStatus = function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/health");
    };
    /**
     * Get all sensors health status
     * @Return: EntitiesResponse<SensorStatus>
     */
    SensorsService.prototype.getSensorsHealthStatus = function () {
        return this.rest.get(this.baseUrl + "/health");
    };
    /**
     * Get sensor status history over time
     * @Return:  EntityResponse<SensorStatusTimeSeries>
     */
    SensorsService.prototype.getStatusOverTime = function (id, from, to) {
        var _a;
        var params = new Array();
        if (from != null) {
            params.push("from=" + from);
        }
        if (to != null) {
            params.push("to=" + to);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/status/overtime"], params));
    };
    /**
     * Aggregate sensors count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    SensorsService.prototype.getSensorsCountByType = function (folderId, subFolders, sensorType, status, streamType) {
        var _a;
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
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-type"], params));
    };
    /**
     * Aggregate sensors count distribution by stream type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    SensorsService.prototype.getSensorsCountByStream = function (folderId, subFolders, sensorType, status, streamType) {
        var _a;
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
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-stream"], params));
    };
    /**
     * Aggregate sensors count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    SensorsService.prototype.getSensorsCountByStatus = function (folderId, subFolders, sensorType, status, streamType) {
        var _a;
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
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
    };
    /** @nocollapse */ SensorsService.ɵfac = function SensorsService_Factory(t) { return new (t || SensorsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ SensorsService.ɵprov = i0.ɵɵdefineInjectable({ token: SensorsService, factory: SensorsService.ɵfac });
    return SensorsService;
}());
export { SensorsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SensorsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc29yc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZW5zb3JzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFZMUM7Ozs7R0FJRztBQUNIO0lBTUU7O09BRUc7SUFDSCx3QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxVQUFVLENBQUM7UUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCwrQkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBVSxHQUFWLFVBQVcsSUFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxVQUFPLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FB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QW9CLEVBQUUsVUFBMkIsRUFBRSxNQUF5QixFQUFFLFVBQTJCOztRQUNsSixJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsVUFBWSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFjLFVBQVksQ0FBQyxDQUFDO1NBQUU7UUFDcEUsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFVLE1BQVEsQ0FBQyxDQUFDO1NBQUU7UUFDeEQsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBYyxVQUFZLENBQUMsQ0FBQztTQUFFO1FBRXRFLE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLHFCQUFJLElBQUksQ0FBQyxPQUFPLHFCQUFrQixHQUFLLE1BQU0sR0FBRTtJQUNuRSxDQUFDO21HQTNSVSxjQUFjLGNBUUwsUUFBUTs2RUFSakIsY0FBYyxXQUFkLGNBQWM7eUJBcEIzQjtDQWlUQyxBQTlSRCxJQThSQztTQTdSWSxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgU2Vuc29yc0dyb3VwIH0gZnJvbSAnLi4vY29tbW9uL1NlbnNvcnNHcm91cCc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRm92R2VvQXR0cmlidXRlcyB9IGZyb20gJy4uL2NvbW1vbi9Gb3ZHZW9BdHRyaWJ1dGVzJztcbmltcG9ydCB7IFNlbnNvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc29yU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgU3RyZWFtVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TdHJlYW1UeXBlQ29kZSc7XG5pbXBvcnQgeyBSdWxlUG9seWdvbiB9IGZyb20gJy4uL2NvbW1vbi9SdWxlUG9seWdvbic7XG5pbXBvcnQgeyBTZW5zb3IgfSBmcm9tICcuLi9lbnRpdGllcy9TZW5zb3InO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIHNlbnNvciBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZW5zb3JzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zZW5zb3JzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyBzZW5zb3JcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBTZW5zb3IpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGJ1bGsgb2Ygc2Vuc29ycyB3aXRoIHRoZSBzYW1lIGFjY291bnQgSWQsIGFwcGxpYW5jZSBJZCBhbmQgYWdlbnQgSWRcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjcmVhdGVCdWxrKGJvZHk/OiBTZW5zb3JzR3JvdXApIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9idWxrYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc2Vuc29yIHBhcmFtZXRlcnNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogU2Vuc29yKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNlbnNvciBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzZW5zb3IgcGFyZW50IGZvbGRlciBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VGb2xkZXIoaWQ/OiBzdHJpbmcsIGZvbGRlcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9mb2xkZXIvJHtmb2xkZXJJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIGdlby1sb2NhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VHZW9Mb2NhdGlvbihpZD86IHN0cmluZywgYm9keT86IENvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIGZpZWxkIG9mIHZpZXcgdHJhbnNmb3JtYXRpb24gYXR0cmlidXRlc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VGb3ZBdHRyaWJ1dGVzKGlkPzogc3RyaW5nLCBhemltdXRoPzogbnVtYmVyLCBib2R5PzogRm92R2VvQXR0cmlidXRlcykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoYXppbXV0aCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBhemltdXRoPSR7YXppbXV0aH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9mb3ZgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHksIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIChhY3RpdmF0ZSkgc2Vuc29yXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGVuYWJsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZW5hYmxlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSAoZGUtYWN0aXZhdGUpIHNlbnNvclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBkaXNhYmxlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9kaXNhYmxlYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIHNlbnNvciB0byBhIGRldmljZSB3aXRoIHRoZSBnaXZlbiBhcHBsaWFuY2UgSWRcbiAgICogVGhpcyBhY3Rpb24gZW5hYmxlZCBvbiBhbHJlYWR5IGRldGFjaGVkIGFuZCBTVVNQRU5ERUQgc2Vuc29yXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGF0dGFjaChpZD86IHN0cmluZywgYXBwbGlhbmNlSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2F0dGFjaC8ke2FwcGxpYW5jZUlkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGFjaCBzZW5zb3IgZnJvbSBhIGRldmljZSBhbmQgY2hhbmdlIGl0J3Mgc3RhdHVzIHRvIFNVU1BFTkRFRFxuICAgKiBUaGlzIGFjdGlvbiByZW1vdmUgdGhlIHNlbnNvciBmcm9tIHRoZSBkZXZpY2UgYnV0IGtlZXAgdGhlIHNlbnNvciBhbmQgYWxsIGl0cyBjb25maWd1cmF0aW9uIGFuZCBydWxlcyBpbiB0aGUgc3lzdGVtXG4gICAqIFRoZSBzZW5zb3IgY2FuIGJlIGF0dGFjaGVkIGxhdGVyIHRvIGFueSBvdGhlciBkZXZpY2UgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBkZXRhY2goaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2RldGFjaGAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBzZW5zb3IgZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZW5zb3IgYnkgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3JzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgbGlzdChpZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2xpc3RgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgc2Vuc29ycyBieSBmaWx0ZXJzXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgZmluZChmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgdHlwZT86IFNlbnNvclR5cGVDb2RlW10sIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGVbXSwgc3RyZWFtPzogU3RyZWFtVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzdHJlYW0gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtPSR7c3RyZWFtfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBzZW5zb3JzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogU2Vuc29yVHlwZUNvZGVbXSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZVtdLCBzdHJlYW0/OiBTdHJlYW1UeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbT0ke3N0cmVhbX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2Vuc29yc2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgc2Vuc29yIHByZXNldCBkYXRhIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFByZXNldD5cbiAgICovXG4gIGdldFByZXNldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcHJlc2V0YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciByZWZlcmVuY2UgaW1hZ2UgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSByZWZlcmVuY2UgaW1hZ2VcbiAgICovXG4gIGdldFJlZkltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2Vuc29yc2AsYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWYtaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2Vuc29yIHJlZmVyZW5jZSBpbWFnZSBbcHV0IGJpbmFyeSBpbWFnZSBpbiBib2R5IHdpdGggY29udGVudCB0eXBlOiBpbWFnZS9qcGVnXVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0UmVmSW1hZ2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlZi1pbWFnZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgY3JvcHBlZCBKcGVnIGltYWdlIG91dCBvZiBzZW5zb3IgcmVmZXJlbmNlIGltYWdlIGZvciBBc3NldCBQcm90ZWN0aW9uIHJ1bGVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2UgLSB0aGUgZW5jb2RlZCBqcGVnIGFzIGJhc2U2NCBpcyBpbiB0aGUgZGF0YSBrZXlcbiAgICovXG4gIGNyb3BJbWFnZShpZD86IHN0cmluZywgYm9keT86IFJ1bGVQb2x5Z29uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY3JvcGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvb3JkaW5hdGU+XG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZW5zb3IgaGVhbHRoIGJ5IHNlbnNvciBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JTdGF0dXM+XG4gICAqL1xuICBnZXRTZW5zb3JIZWFsdGhTdGF0dXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2Vuc29ycyBoZWFsdGggc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2Vuc29yU3RhdHVzPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0hlYWx0aFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3Igc3RhdHVzIGhpc3Rvcnkgb3ZlciB0aW1lXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxTZW5zb3JTdGF0dXNUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0U3RhdHVzT3ZlclRpbWUoaWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzL292ZXJ0aW1lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgc2Vuc29ycyBjb3VudCBkaXN0cmlidXRpb24gYnkgdHlwZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8RGlzdHJpYnV0aW9uT2ZMb25nPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0NvdW50QnlUeXBlKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS10eXBlYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgc2Vuc29ycyBjb3VudCBkaXN0cmlidXRpb24gYnkgc3RyZWFtIHR5cGVcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldFNlbnNvcnNDb3VudEJ5U3RyZWFtKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zdHJlYW1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZSBzZW5zb3JzIGNvdW50IGRpc3RyaWJ1dGlvbiBieSBzdGF0dXNcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldFNlbnNvcnNDb3VudEJ5U3RhdHVzKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zdGF0dXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==