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
export class SensorsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
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
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create bulk of sensors with the same account Id, appliance Id and agent Id
     * @Return: EntitiesResponse<Sensor>
     */
    createBulk(body) {
        return this.rest.post(`${this.baseUrl}/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update sensor parameters
     * @Return: EntityResponse<Sensor>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change sensor name
     * @Return: EntityResponse<Sensor>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change sensor parent folder id
     * @Return: EntityResponse<Sensor>
     */
    changeFolder(id, folderId) {
        return this.rest.put(`${this.baseUrl}/${id}/folder/${folderId}`, null);
    }
    /**
     * Change sensor geo-location
     * @Return: EntityResponse<Sensor>
     */
    changeGeoLocation(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoLocation`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change sensor field of view transformation attributes
     * @Return: EntityResponse<Sensor>
     */
    changeFovAttributes(id, azimuth, body) {
        const params = new Array();
        if (azimuth != null) {
            params.push(`azimuth=${azimuth}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/fov`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Enable (activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    enable(id) {
        return this.rest.put(`${this.baseUrl}/${id}/enable`, null);
    }
    /**
     * Disable (de-activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    disable(id) {
        return this.rest.put(`${this.baseUrl}/${id}/disable`, null);
    }
    /**
     * Attach sensor to a device with the given appliance Id
     * This action enabled on already detached and SUSPENDED sensor
     * @Return: EntityResponse<Sensor>
     */
    attach(id, applianceId) {
        return this.rest.put(`${this.baseUrl}/${id}/attach/${applianceId}`, null);
    }
    /**
     * Detach sensor from a device and change it's status to SUSPENDED
     * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
     * The sensor can be attached later to any other device in the system
     * @Return: EntityResponse<Sensor>
     */
    detach(id) {
        return this.rest.put(`${this.baseUrl}/${id}/detach`, null);
    }
    /**
     * Delete sensor from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single sensor by id
     * @Return: EntityResponse<Sensor>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get sensors by list of ids
     * @Return: EntitiesResponse<Sensor>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Get sensors Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=SensorId)
     */
    mapExternalIds(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/map-external-ids`, ...params);
    }
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    find(folderId, subFolders, applianceId, physical, search, type, status, stream, sort, page, pageSize) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
        }
        if (physical != null) {
            params.push(`physical=${physical}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (stream != null) {
            params.push(`stream=${stream}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of sensors and filter
     * @Return: StreamContent
     */
    exportFormat(folderId, subFolders, search, type, status, stream, sort, format, fields, fileName) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (stream != null) {
            params.push(`stream=${stream}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sensors`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get single sensor preset data by id
     * @Return: EntityResponse<Preset>
     */
    getPreset(id) {
        return this.rest.get(`${this.baseUrl}/${id}/preset`);
    }
    /**
     * Set single sensor preset data
     * @Return: EntityResponse<Preset>
     */
    setPreset(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/preset`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Reset single sensor preset back to the default
     * @Return: EntityResponse<Preset>
     */
    resetPreset(id, body) {
        return this.rest.delete(`${this.baseUrl}/${id}/preset/reset`);
    }
    /**
     * Export single sensor preset (including calibration) as Json stream
     * @Return: Sensor preset Json as StreamContent
     */
    exportPreset(id) {
        return this.rest.download(`sensors`, `${this.baseUrl}/${id}/preset/export`);
    }
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImage(id) {
        return this.rest.download(`sensors`, `${this.baseUrl}/${id}/ref-image`);
    }
    /**
     * Clear sensor reference image
     * @Return: ActionResponse
     */
    clearRefImage(id) {
        return this.rest.delete(`${this.baseUrl}/${id}/ref-image`);
    }
    /**
     * Get sensor reference image for a specific timestamp [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImageAt(id, timestamp) {
        return this.rest.download(`sensors`, `${this.baseUrl}/${id}/ref-image-at/${timestamp}`);
    }
    /**
     * Get sensor reference image Url suffix
     * @Return: ActionResponse key is sensor Id and data is the URL suffix
     */
    getRefImageUrl(id) {
        return this.rest.get(`${this.baseUrl}/${id}/ref-image-url`);
    }
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * @Return: ActionResponse
     */
    setRefImage(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/ref-image`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Return a cropped Jpeg image out of sensor reference image for Asset Protection rule
     * @Return: ActionResponse - the encoded jpeg as base64 is in the data key
     */
    cropImage(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/crop`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Collect object crops from agents based on the query parameters
     * @Return: ActionResponse
     */
    fetchObjectCrops(id, ts, objectId, bucketFolder) {
        const params = new Array();
        if (ts != null) {
            params.push(`ts=${ts}`);
        }
        if (objectId != null) {
            params.push(`objectId=${objectId}`);
        }
        if (bucketFolder != null) {
            params.push(`bucketFolder=${bucketFolder}`);
        }
        return this.rest.post(`${this.baseUrl}/${id}/fetch-objects-crops`, null, ...params);
    }
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate>
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
    /**
     * Get single sensor health by sensor id
     * REMOVED: Please use /sensors/{id} instead.
     * @Return: EntityResponse<SensorStatus>
     */
    getSensorHealthStatus(id) {
        return this.rest.get(`${this.baseUrl}/${id}/health`);
    }
    /**
     * Get all sensors health status
     * REMOVED: Please use /sensors instead.
     * @Return: EntitiesResponse<SensorStatus>
     */
    getSensorsHealthStatus() {
        return this.rest.get(`${this.baseUrl}/health`);
    }
    /**
     * Get sensor status history over time
     * @Return:  EntityResponse<SensorStatusTimeSeries>
     */
    getStatusOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
    /**
     * Aggregate sensors count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByType(folderId, subFolders, sensorType, status, streamType) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-type`, ...params);
    }
    /**
     * Aggregate sensors count distribution by stream type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStream(folderId, subFolders, sensorType, status, streamType) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-stream`, ...params);
    }
    /**
     * Aggregate sensors count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStatus(folderId, subFolders, sensorType, status, streamType) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
    /**
     * Get list of all detection models available for the account
     * @Return: EntitiesResponse<DetectionModel>
     */
    getAllModels() {
        return this.rest.get(`${this.baseUrl}/models`);
    }
    /**
     * Get list of all detection models per sensor
     * @Return: EntitiesResponse<DetectionModel>
     */
    getSensorModels(id) {
        return this.rest.get(`${this.baseUrl}/${id}/models`);
    }
    /**
     * Add detection model to sensor
     * @Return: ActionResponse
     */
    addSensorModel(id, modelId) {
        return this.rest.post(`${this.baseUrl}/${id}/models/${modelId}`, null);
    }
    /**
     * Remove detection model from sensor
     * @Return: ActionResponse
     */
    removeSensorModel(id, modelId) {
        return this.rest.delete(`${this.baseUrl}/${id}/models/${modelId}`);
    }
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    findApplianceSensors(id, search, type, status, stream, sort, page, pageSize, format, fields, fileName) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (stream != null) {
            params.push(`stream=${stream}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.get(`${this.baseUrl}/for-appliance/{applianceId}`, ...params);
    }
    /**
     * Import sensors from CSV file
     * The file must include header with the columns:
     * @return ActionResponse
     */
    importSensors(id, csvFile) {
        return this.rest.upload(csvFile, `${this.baseUrl}/for-appliance/{applianceId}/import`);
    }
    /**
     * Export appliance sensors to CSV file
     * @return StreamContent
     */
    exportSensors(id, format, fileName) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sensors`, `${this.baseUrl}/for-appliance/${id}/export`, ...params);
    }
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * @Return: EntityResponse<Sensor> The updated sensor
     */
    addApplianceSensor(id, body) {
        return this.rest.post(`${this.baseUrl}/for-appliance/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Attach multiple sensors to the device
     * @Return: ActionResponse
     */
    bulkAttach(id, sensorId) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        return this.rest.put(`${this.baseUrl}/for-appliance/{applianceId}/attach`, null, ...params);
    }
    /**
     * Detach multiple sensors from the device
     * @Return: ActionResponse
     */
    bulkDetach(id, sensorId) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        return this.rest.put(`${this.baseUrl}/for-appliance/{applianceId}/detach`, null, ...params);
    }
}
/** @nocollapse */ SensorsService.ɵfac = function SensorsService_Factory(t) { return new (t || SensorsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ SensorsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SensorsService, factory: SensorsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SensorsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vuc29yc1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL3NlcnZpY2VzL3NlbnNvcnNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBYTFDOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sY0FBYztJQUt6Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBTTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLElBQWE7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsSUFBbUI7UUFDNUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLE9BQU8sRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElB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LEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVEOzs7T0FHRztJQUNILFVBQVUsQ0FBQyxFQUFXLEVBQUUsUUFBbUI7UUFDekMsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRWhFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxxQ0FBcUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1RixDQUFDOzsrRkFoZFUsY0FBYyxjQVFMLFFBQVE7bUdBUmpCLGNBQWMsV0FBZCxjQUFjO3VGQUFkLGNBQWM7Y0FEMUIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgU2Vuc29yU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgUHJlc2V0IH0gZnJvbSAnLi4vZW50aXRpZXMvUHJlc2V0JztcbmltcG9ydCB7IFNlbnNvcnNHcm91cCB9IGZyb20gJy4uL2NvbW1vbi9TZW5zb3JzR3JvdXAnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IEZvdkdlb0F0dHJpYnV0ZXMgfSBmcm9tICcuLi9jb21tb24vRm92R2VvQXR0cmlidXRlcyc7XG5pbXBvcnQgeyBTZW5zb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvcic7XG5pbXBvcnQgeyBTdHJlYW1UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1N0cmVhbVR5cGVDb2RlJztcbmltcG9ydCB7IFJ1bGVQb2x5Z29uIH0gZnJvbSAnLi4vY29tbW9uL1J1bGVQb2x5Z29uJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBzZW5zb3IgYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vuc29yc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvc2Vuc29ycyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgc2Vuc29yXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogU2Vuc29yKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBidWxrIG9mIHNlbnNvcnMgd2l0aCB0aGUgc2FtZSBhY2NvdW50IElkLCBhcHBsaWFuY2UgSWQgYW5kIGFnZW50IElkXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgY3JlYXRlQnVsayhib2R5PzogU2Vuc29yc0dyb3VwKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vYnVsa2AsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHNlbnNvciBwYXJhbWV0ZXJzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IFNlbnNvcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBzZW5zb3IgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBjaGFuZ2VOYW1lKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9uYW1lYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2Ugc2Vuc29yIHBhcmVudCBmb2xkZXIgaWRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgY2hhbmdlRm9sZGVyKGlkPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZm9sZGVyLyR7Zm9sZGVySWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNlbnNvciBnZW8tbG9jYXRpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgY2hhbmdlR2VvTG9jYXRpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb29yZGluYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9Mb2NhdGlvbmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHNlbnNvciBmaWVsZCBvZiB2aWV3IHRyYW5zZm9ybWF0aW9uIGF0dHJpYnV0ZXNcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgY2hhbmdlRm92QXR0cmlidXRlcyhpZD86IHN0cmluZywgYXppbXV0aD86IG51bWJlciwgYm9keT86IEZvdkdlb0F0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGF6aW11dGggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYXppbXV0aD0ke2F6aW11dGh9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZm92YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5LCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSAoYWN0aXZhdGUpIHNlbnNvclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBlbmFibGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2VuYWJsZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgKGRlLWFjdGl2YXRlKSBzZW5zb3JcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgZGlzYWJsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZGlzYWJsZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEF0dGFjaCBzZW5zb3IgdG8gYSBkZXZpY2Ugd2l0aCB0aGUgZ2l2ZW4gYXBwbGlhbmNlIElkXG4gICAqIFRoaXMgYWN0aW9uIGVuYWJsZWQgb24gYWxyZWFkeSBkZXRhY2hlZCBhbmQgU1VTUEVOREVEIHNlbnNvclxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBhdHRhY2goaWQ/OiBzdHJpbmcsIGFwcGxpYW5jZUlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9hdHRhY2gvJHthcHBsaWFuY2VJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggc2Vuc29yIGZyb20gYSBkZXZpY2UgYW5kIGNoYW5nZSBpdCdzIHN0YXR1cyB0byBTVVNQRU5ERURcbiAgICogVGhpcyBhY3Rpb24gcmVtb3ZlIHRoZSBzZW5zb3IgZnJvbSB0aGUgZGV2aWNlIGJ1dCBrZWVwIHRoZSBzZW5zb3IgYW5kIGFsbCBpdHMgY29uZmlndXJhdGlvbiBhbmQgcnVsZXMgaW4gdGhlIHN5c3RlbVxuICAgKiBUaGUgc2Vuc29yIGNhbiBiZSBhdHRhY2hlZCBsYXRlciB0byBhbnkgb3RoZXIgZGV2aWNlIGluIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgZGV0YWNoKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9kZXRhY2hgLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgc2Vuc29yIGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgc2Vuc29yIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29ycyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFNlbnNvcj5cbiAgICovXG4gIGxpc3QoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29ycyBJZHMgYnkgbGlzdCBvZiBleHRlcm5hbCBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxTdHJpbmdLZXlWYWx1ZT4gKEtleT1FeHRlcm5hbElkLCBWYWx1ZT1TZW5zb3JJZClcbiAgICovXG4gIG1hcEV4dGVybmFsSWRzKGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbWFwLWV4dGVybmFsLWlkc2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBzZW5zb3JzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBmaW5kKGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgYXBwbGlhbmNlSWQ/OiBzdHJpbmcsIHBoeXNpY2FsPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogU2Vuc29yVHlwZUNvZGVbXSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZVtdLCBzdHJlYW0/OiBTdHJlYW1UeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKGFwcGxpYW5jZUlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGFwcGxpYW5jZUlkPSR7YXBwbGlhbmNlSWR9YCk7IH1cbiAgICBpZiAocGh5c2ljYWwgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGh5c2ljYWw9JHtwaHlzaWNhbH1gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzdHJlYW0gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtPSR7c3RyZWFtfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgbGlzdCBvZiBzZW5zb3JzIGFuZCBmaWx0ZXJcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0Rm9ybWF0KGZvbGRlcklkPzogc3RyaW5nLCBzdWJGb2xkZXJzPzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogU2Vuc29yVHlwZUNvZGVbXSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZVtdLCBzdHJlYW0/OiBTdHJlYW1UeXBlQ29kZVtdLCBzb3J0Pzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpZWxkcz86IHN0cmluZ1tdLCBmaWxlTmFtZT86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChzdWJGb2xkZXJzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN1YkZvbGRlcnM9JHtzdWJGb2xkZXJzfWApOyB9XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAodHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0eXBlPSR7dHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHN0cmVhbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdHJlYW09JHtzdHJlYW19YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpZWxkcyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWVsZHM9JHtmaWVsZHN9YCk7IH1cbiAgICBpZiAoZmlsZU5hbWUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZmlsZU5hbWU9JHtmaWxlTmFtZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2Vuc29yc2AsYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgc2Vuc29yIHByZXNldCBkYXRhIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFByZXNldD5cbiAgICovXG4gIGdldFByZXNldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcHJlc2V0YCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNpbmdsZSBzZW5zb3IgcHJlc2V0IGRhdGFcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8UHJlc2V0PlxuICAgKi9cbiAgc2V0UHJlc2V0KGlkPzogc3RyaW5nLCBib2R5PzogUHJlc2V0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9wcmVzZXRgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHNpbmdsZSBzZW5zb3IgcHJlc2V0IGJhY2sgdG8gdGhlIGRlZmF1bHRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8UHJlc2V0PlxuICAgKi9cbiAgcmVzZXRQcmVzZXQoaWQ/OiBzdHJpbmcsIGJvZHk/OiBQcmVzZXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3ByZXNldC9yZXNldGApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBzaW5nbGUgc2Vuc29yIHByZXNldCAoaW5jbHVkaW5nIGNhbGlicmF0aW9uKSBhcyBKc29uIHN0cmVhbVxuICAgKiBAUmV0dXJuOiBTZW5zb3IgcHJlc2V0IEpzb24gYXMgU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0UHJlc2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2Vuc29yc2AsYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9wcmVzZXQvZXhwb3J0YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNlbnNvciByZWZlcmVuY2UgaW1hZ2UgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSByZWZlcmVuY2UgaW1hZ2VcbiAgICovXG4gIGdldFJlZkltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgc2Vuc29yc2AsYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWYtaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBzZW5zb3IgcmVmZXJlbmNlIGltYWdlXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBjbGVhclJlZkltYWdlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yZWYtaW1hZ2VgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29yIHJlZmVyZW5jZSBpbWFnZSBmb3IgYSBzcGVjaWZpYyB0aW1lc3RhbXAgW3Jlc3BvbnNlIGNvbnRlbnQgdHlwZTogaW1hZ2UvanBlZ11cbiAgICogQFJldHVybjogU3RyZWFtaW5nT3V0cHV0IG9mIHRoZSByZWZlcmVuY2UgaW1hZ2VcbiAgICovXG4gIGdldFJlZkltYWdlQXQoaWQ/OiBzdHJpbmcsIHRpbWVzdGFtcD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHNlbnNvcnNgLGAke3RoaXMuYmFzZVVybH0vJHtpZH0vcmVmLWltYWdlLWF0LyR7dGltZXN0YW1wfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZW5zb3IgcmVmZXJlbmNlIGltYWdlIFVybCBzdWZmaXhcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2Uga2V5IGlzIHNlbnNvciBJZCBhbmQgZGF0YSBpcyB0aGUgVVJMIHN1ZmZpeFxuICAgKi9cbiAgZ2V0UmVmSW1hZ2VVcmwoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlZi1pbWFnZS11cmxgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc2Vuc29yIHJlZmVyZW5jZSBpbWFnZSBbcHV0IGJpbmFyeSBpbWFnZSBpbiBib2R5IHdpdGggY29udGVudCB0eXBlOiBpbWFnZS9qcGVnXVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgc2V0UmVmSW1hZ2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JlZi1pbWFnZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgY3JvcHBlZCBKcGVnIGltYWdlIG91dCBvZiBzZW5zb3IgcmVmZXJlbmNlIGltYWdlIGZvciBBc3NldCBQcm90ZWN0aW9uIHJ1bGVcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2UgLSB0aGUgZW5jb2RlZCBqcGVnIGFzIGJhc2U2NCBpcyBpbiB0aGUgZGF0YSBrZXlcbiAgICovXG4gIGNyb3BJbWFnZShpZD86IHN0cmluZywgYm9keT86IFJ1bGVQb2x5Z29uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY3JvcGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdCBvYmplY3QgY3JvcHMgZnJvbSBhZ2VudHMgYmFzZWQgb24gdGhlIHF1ZXJ5IHBhcmFtZXRlcnNcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGZldGNoT2JqZWN0Q3JvcHMoaWQ/OiBzdHJpbmcsIHRzPzogbnVtYmVyW10sIG9iamVjdElkPzogbnVtYmVyW10sIGJ1Y2tldEZvbGRlcj86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAodHMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHM9JHt0c31gKTsgfVxuICAgIGlmIChvYmplY3RJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBvYmplY3RJZD0ke29iamVjdElkfWApOyB9XG4gICAgaWYgKGJ1Y2tldEZvbGRlciAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBidWNrZXRGb2xkZXI9JHtidWNrZXRGb2xkZXJ9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZldGNoLW9iamVjdHMtY3JvcHNgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBkZWZhdWx0IGdlbyBsb2NhdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb29yZGluYXRlPlxuICAgKi9cbiAgZ2V0RGVmYXVsdExvY2F0aW9uKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9Mb2NhdGlvbmApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgc2Vuc29yIGhlYWx0aCBieSBzZW5zb3IgaWRcbiAgICogUkVNT1ZFRDogUGxlYXNlIHVzZSAvc2Vuc29ycy97aWR9IGluc3RlYWQuXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFNlbnNvclN0YXR1cz5cbiAgICovXG4gIGdldFNlbnNvckhlYWx0aFN0YXR1cyhpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vaGVhbHRoYCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBzZW5zb3JzIGhlYWx0aCBzdGF0dXNcbiAgICogUkVNT1ZFRDogUGxlYXNlIHVzZSAvc2Vuc29ycyBpbnN0ZWFkLlxuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFNlbnNvclN0YXR1cz5cbiAgICovXG4gIGdldFNlbnNvcnNIZWFsdGhTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9oZWFsdGhgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2Vuc29yIHN0YXR1cyBoaXN0b3J5IG92ZXIgdGltZVxuICAgKiBAUmV0dXJuOiAgRW50aXR5UmVzcG9uc2U8U2Vuc29yU3RhdHVzVGltZVNlcmllcz5cbiAgICovXG4gIGdldFN0YXR1c092ZXJUaW1lKGlkPzogc3RyaW5nLCBmcm9tPzogbnVtYmVyLCB0bz86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3N0YXR1cy9vdmVydGltZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQWdncmVnYXRlIHNlbnNvcnMgY291bnQgZGlzdHJpYnV0aW9uIGJ5IHR5cGVcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPERpc3RyaWJ1dGlvbk9mTG9uZz5cbiAgICovXG4gIGdldFNlbnNvcnNDb3VudEJ5VHlwZShmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlbnNvclR5cGU/OiBTZW5zb3JUeXBlQ29kZSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZSwgc3RyZWFtVHlwZT86IFN0cmVhbVR5cGVDb2RlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2Vuc29yVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JUeXBlPSR7c2Vuc29yVHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHN0cmVhbVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtVHlwZT0ke3N0cmVhbVR5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktdHlwZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQWdncmVnYXRlIHNlbnNvcnMgY291bnQgZGlzdHJpYnV0aW9uIGJ5IHN0cmVhbSB0eXBlXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxEaXN0cmlidXRpb25PZkxvbmc+XG4gICAqL1xuICBnZXRTZW5zb3JzQ291bnRCeVN0cmVhbShmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlbnNvclR5cGU/OiBTZW5zb3JUeXBlQ29kZSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZSwgc3RyZWFtVHlwZT86IFN0cmVhbVR5cGVDb2RlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2Vuc29yVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JUeXBlPSR7c2Vuc29yVHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHN0cmVhbVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtVHlwZT0ke3N0cmVhbVR5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktc3RyZWFtYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZ2dyZWdhdGUgc2Vuc29ycyBjb3VudCBkaXN0cmlidXRpb24gYnkgc3RhdHVzXG4gICAqIEBSZXR1cm46ICBFbnRpdHlSZXNwb25zZTxEaXN0cmlidXRpb25PZkxvbmc+XG4gICAqL1xuICBnZXRTZW5zb3JzQ291bnRCeVN0YXR1cyhmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlbnNvclR5cGU/OiBTZW5zb3JUeXBlQ29kZSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZSwgc3RyZWFtVHlwZT86IFN0cmVhbVR5cGVDb2RlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb2xkZXJJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb2xkZXJJZD0ke2ZvbGRlcklkfWApOyB9XG4gICAgaWYgKHN1YkZvbGRlcnMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3ViRm9sZGVycz0ke3N1YkZvbGRlcnN9YCk7IH1cbiAgICBpZiAoc2Vuc29yVHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JUeXBlPSR7c2Vuc29yVHlwZX1gKTsgfVxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG4gICAgaWYgKHN0cmVhbVR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtVHlwZT0ke3N0cmVhbVR5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY291bnQvYnktc3RhdHVzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBhbGwgZGV0ZWN0aW9uIG1vZGVscyBhdmFpbGFibGUgZm9yIHRoZSBhY2NvdW50XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8RGV0ZWN0aW9uTW9kZWw+XG4gICAqL1xuICBnZXRBbGxNb2RlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9tb2RlbHNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbGlzdCBvZiBhbGwgZGV0ZWN0aW9uIG1vZGVscyBwZXIgc2Vuc29yXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8RGV0ZWN0aW9uTW9kZWw+XG4gICAqL1xuICBnZXRTZW5zb3JNb2RlbHMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L21vZGVsc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBkZXRlY3Rpb24gbW9kZWwgdG8gc2Vuc29yXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBhZGRTZW5zb3JNb2RlbChpZD86IHN0cmluZywgbW9kZWxJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L21vZGVscy8ke21vZGVsSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGRldGVjdGlvbiBtb2RlbCBmcm9tIHNlbnNvclxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgcmVtb3ZlU2Vuc29yTW9kZWwoaWQ/OiBzdHJpbmcsIG1vZGVsSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L21vZGVscy8ke21vZGVsSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBzZW5zb3JzIGFzc2lnbmVkIHRvIHRoZSBhcHBsaWFuY2UgKGdldFNlbnNvcnMpXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8U2Vuc29yPlxuICAgKi9cbiAgZmluZEFwcGxpYW5jZVNlbnNvcnMoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgdHlwZT86IFNlbnNvclR5cGVDb2RlW10sIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGVbXSwgc3RyZWFtPzogU3RyZWFtVHlwZUNvZGVbXSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10sIGZpbGVOYW1lPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzdHJlYW0gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RyZWFtPSR7c3RyZWFtfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuICAgIGlmIChmaWxlTmFtZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmaWxlTmFtZT0ke2ZpbGVOYW1lfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2Zvci1hcHBsaWFuY2Uve2FwcGxpYW5jZUlkfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IHNlbnNvcnMgZnJvbSBDU1YgZmlsZVxuICAgKiBUaGUgZmlsZSBtdXN0IGluY2x1ZGUgaGVhZGVyIHdpdGggdGhlIGNvbHVtbnM6XG4gICAqIEByZXR1cm4gQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGltcG9ydFNlbnNvcnMoaWQ/OiBzdHJpbmcsIGNzdkZpbGU/OiBGaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC51cGxvYWQoY3N2RmlsZSxgJHt0aGlzLmJhc2VVcmx9L2Zvci1hcHBsaWFuY2Uve2FwcGxpYW5jZUlkfS9pbXBvcnRgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHBvcnQgYXBwbGlhbmNlIHNlbnNvcnMgdG8gQ1NWIGZpbGVcbiAgICogQHJldHVybiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRTZW5zb3JzKGlkPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIGZpbGVOYW1lPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChmb3JtYXQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9ybWF0PSR7Zm9ybWF0fWApOyB9XG4gICAgaWYgKGZpbGVOYW1lICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpbGVOYW1lPSR7ZmlsZU5hbWV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHNlbnNvcnNgLGAke3RoaXMuYmFzZVVybH0vZm9yLWFwcGxpYW5jZS8ke2lkfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBuZXcgc2Vuc29yIGFuZCBhc3NpZ25lZCBpdCB0byBhIHNwZWNpZmljIGFwcGxpYW5jZVxuICAgKiBUaGUgc2Vuc29yIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHN0YXR1cyBQRU5ESU5HLCB0aGUgc3RhdHVzIHdpbGwgYmUgY2hhbmdlZCB3aGVuIHRoZSBhZ2VudCB3aWxsIGVzdGFibGlzaCBjb25uZWN0aW9uIHRvIHRoZSBwcm94eVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxTZW5zb3I+IFRoZSB1cGRhdGVkIHNlbnNvclxuICAgKi9cbiAgYWRkQXBwbGlhbmNlU2Vuc29yKGlkPzogc3RyaW5nLCBib2R5PzogU2Vuc29yKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZm9yLWFwcGxpYW5jZS8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQXR0YWNoIG11bHRpcGxlIHNlbnNvcnMgdG8gdGhlIGRldmljZVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgYnVsa0F0dGFjaChpZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2Vuc29ySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2Vuc29ySWQ9JHtzZW5zb3JJZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9mb3ItYXBwbGlhbmNlL3thcHBsaWFuY2VJZH0vYXR0YWNoYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRhY2ggbXVsdGlwbGUgc2Vuc29ycyBmcm9tIHRoZSBkZXZpY2VcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGJ1bGtEZXRhY2goaWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vZm9yLWFwcGxpYW5jZS97YXBwbGlhbmNlSWR9L2RldGFjaGAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxufVxuIl19