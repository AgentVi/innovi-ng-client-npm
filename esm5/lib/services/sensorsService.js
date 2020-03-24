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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc29yc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zZW5zb3JzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFXMUM7Ozs7R0FJRztBQUNIO0lBTUU7O09BRUc7SUFDSCx3QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVO1FBTmhGLGlCQUFpQjtRQUNULFlBQU8sR0FBRyxVQUFVLENBQUM7UUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7SUFDSCwrQkFBTSxHQUFOLFVBQU8sSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUcsSUFBSSxDQUFDLE9BQVMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBVSxHQUFWLFVBQVcsSUFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBSSxJQUFJLENBQUMsT0FBTyxVQUFPLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FB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QUFNLENBQUMsSUFBSSxDQUFDLFlBQVUsTUFBUSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFjLFVBQVksQ0FBQyxDQUFDO1NBQUU7UUFFdEUsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcscUJBQUksSUFBSSxDQUFDLE9BQU8scUJBQWtCLEdBQUssTUFBTSxHQUFFO0lBQ25FLENBQUM7Z0ZBM1FVLGNBQWMsY0FRTCxRQUFROzBEQVJqQixjQUFjLFdBQWQsY0FBYzt5QkFuQjNCO0NBZ1NDLEFBOVFELElBOFFDO1NBN1FZLGNBQWM7a0RBQWQsY0FBYztjQUQxQixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBGb3ZHZW9BdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29tbW9uL0Zvdkdlb0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3JTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTdHJlYW1UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1N0cmVhbVR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvcic7XG5pbXBvcnQgeyBTZW5zb3JzR3JvdXAgfSBmcm9tICcuLi9jb21tb24vU2Vuc29yc0dyb3VwJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3Igc2Vuc29yIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbnNvcnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3NlbnNvcnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IHNlbnNvclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IFNlbnNvcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYnVsayBvZiBzZW5zb3JzIHdpdGggdGhlIHNhbWUgYWNjb3VudCBJZCwgYXBwbGlhbmNlIElkIGFuZCBhZ2VudCBJZFxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNyZWF0ZUJ1bGsoYm9keT86IFNlbnNvcnNHcm91cCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2J1bGtgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzZW5zb3IgcGFyYW1ldGVyc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICB1cGRhdGUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBTZW5zb3IpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgY2hhbmdlTmFtZShpZD86IHN0cmluZywgYm9keT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNlbnNvciBwYXJlbnQgZm9sZGVyIGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZUZvbGRlcihpZD86IHN0cmluZywgZm9sZGVySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvbGRlci8ke2ZvbGRlcklkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzZW5zb3IgZ2VvLWxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZUdlb0xvY2F0aW9uKGlkPzogc3RyaW5nLCBib2R5PzogQ29vcmRpbmF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ2VvTG9jYXRpb25gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzZW5zb3IgZmllbGQgb2YgdmlldyB0cmFuc2Zvcm1hdGlvbiBhdHRyaWJ1dGVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNoYW5nZUZvdkF0dHJpYnV0ZXMoaWQ/OiBzdHJpbmcsIGF6aW11dGg/OiBudW1iZXIsIGJvZHk/OiBGb3ZHZW9BdHRyaWJ1dGVzKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhemltdXRoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGF6aW11dGg9JHthemltdXRofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvdmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgKGFjdGl2YXRlKSBzZW5zb3JcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgZW5hYmxlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9lbmFibGVgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIChkZS1hY3RpdmF0ZSkgc2Vuc29yXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGRpc2FibGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2Rpc2FibGVgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggc2Vuc29yIHRvIGEgZGV2aWNlIHdpdGggdGhlIGdpdmVuIGFwcGxpYW5jZSBJZFxuICAgKiBUaGlzIGFjdGlvbiBlbmFibGVkIG9uIGFscmVhZHkgZGV0YWNoZWQgYW5kIFNVU1BFTkRFRCBzZW5zb3JcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgYXR0YWNoKGlkPzogc3RyaW5nLCBhcHBsaWFuY2VJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vYXR0YWNoLyR7YXBwbGlhbmNlSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGV0YWNoIHNlbnNvciBmcm9tIGEgZGV2aWNlIGFuZCBjaGFuZ2UgaXQncyBzdGF0dXMgdG8gU1VTUEVOREVEXG4gICAqIFRoaXMgYWN0aW9uIHJlbW92ZSB0aGUgc2Vuc29yIGZyb20gdGhlIGRldmljZSBidXQga2VlcCB0aGUgc2Vuc29yIGFuZCBhbGwgaXRzIGNvbmZpZ3VyYXRpb24gYW5kIHJ1bGVzIGluIHRoZSBzeXN0ZW1cbiAgICogVGhlIHNlbnNvciBjYW4gYmUgYXR0YWNoZWQgbGF0ZXIgdG8gYW55IG90aGVyIGRldmljZSBpbiB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGRldGFjaChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZGV0YWNoYCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHNlbnNvciBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHNlbnNvciBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvcnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBzZW5zb3JzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBmaW5kKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogU2Vuc29yVHlwZUNvZGVbXSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZVtdLCBzdHJlYW0/OiBTdHJlYW1UeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHN0cmVhbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW09JHtzdHJlYW19YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIHNlbnNvcnMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQoZm9sZGVySWQ/OiBzdHJpbmcsIHN1YkZvbGRlcnM/OiBib29sZWFuLCBzZWFyY2g/OiBzdHJpbmcsIHR5cGU/OiBTZW5zb3JUeXBlQ29kZVtdLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlW10sIHN0cmVhbT86IFN0cmVhbVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzdHJlYW0gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtPSR7c3RyZWFtfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAoZm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvcm1hdD0ke2Zvcm1hdH1gKTsgfVxuICAgIGlmIChmaWVsZHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmllbGRzPSR7ZmllbGRzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBzZW5zb3JzYCxgJHt0aGlzLmJhc2VVcmx9L2V4cG9ydGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciByZWZlcmVuY2UgaW1hZ2UgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSByZWZlcmVuY2UgaW1hZ2VcbiAgICovXG4gIGdldFJlZkltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2Vuc29yc2AsYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWYtaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2Vuc29yIHJlZmVyZW5jZSBpbWFnZSBbcHV0IGJpbmFyeSBpbWFnZSBpbiBib2R5IHdpdGggY29udGVudCB0eXBlOiBpbWFnZS9qcGVnXVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0UmVmSW1hZ2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlZi1pbWFnZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGxvY2F0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENvb3JkaW5hdGU+XG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBzZW5zb3IgaGVhbHRoIGJ5IHNlbnNvciBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3JTdGF0dXM+XG4gICAqL1xuICBnZXRTZW5zb3JIZWFsdGhTdGF0dXMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgc2Vuc29ycyBoZWFsdGggc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2Vuc29yU3RhdHVzPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0hlYWx0aFN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2hlYWx0aGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3Igc3RhdHVzIGhpc3Rvcnkgb3ZlciB0aW1lXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxTZW5zb3JTdGF0dXNUaW1lU2VyaWVzPlxuICAgKi9cbiAgZ2V0U3RhdHVzT3ZlclRpbWUoaWQ/OiBzdHJpbmcsIGZyb20/OiBudW1iZXIsIHRvPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vc3RhdHVzL292ZXJ0aW1lYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgc2Vuc29ycyBjb3VudCBkaXN0cmlidXRpb24gYnkgdHlwZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8RGlzdHJpYnV0aW9uT2ZMb25nPlxuICAgKi9cbiAgZ2V0U2Vuc29yc0NvdW50QnlUeXBlKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS10eXBlYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgc2Vuc29ycyBjb3VudCBkaXN0cmlidXRpb24gYnkgc3RyZWFtIHR5cGVcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldFNlbnNvcnNDb3VudEJ5U3RyZWFtKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zdHJlYW1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFnZ3JlZ2F0ZSBzZW5zb3JzIGNvdW50IGRpc3RyaWJ1dGlvbiBieSBzdGF0dXNcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldFNlbnNvcnNDb3VudEJ5U3RhdHVzKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2Vuc29yVHlwZT86IFNlbnNvclR5cGVDb2RlLCBzdGF0dXM/OiBTZW5zb3JTdGF0dXNDb2RlLCBzdHJlYW1UeXBlPzogU3RyZWFtVHlwZUNvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZW5zb3JUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvclR5cGU9JHtzZW5zb3JUeXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW1UeXBlPSR7c3RyZWFtVHlwZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb3VudC9ieS1zdGF0dXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==