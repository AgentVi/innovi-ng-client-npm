/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * List of appliance related actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var AppliancesService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function AppliancesService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/appliances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    /**
     * Find list of appliances and filter
     * \@Return: QueryResponse<Appliance>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AppliancesService.prototype.find = /**
     * Find list of appliances and filter
     * \@Return: QueryResponse<Appliance>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (folderId, subFolders, search, status, sort, page, pageSize) {
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
        if (status != null) {
            params.push("status=" + status);
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
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    /**
     * Get single appliance by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    AppliancesService.prototype.get = /**
     * Get single appliance by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * \@Return: QueryResponse<Sensor>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AppliancesService.prototype.findApplianceSensors = /**
     * Get all sensors assigned to the appliance (getSensors)
     * \@Return: QueryResponse<Sensor>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (id, search, type, status, stream, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
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
        return (_a = this.rest).put.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/sensors", null], params));
    };
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * @Return: EntityResponse<Sensor> The updated sensor
     */
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * \@Return: EntityResponse<Sensor> The updated sensor
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    AppliancesService.prototype.addApplianceSensor = /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * \@Return: EntityResponse<Sensor> The updated sensor
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.post(this.baseUrl + "/" + id + "/sensors", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    /**
     * Register new appliance in the system
     * \@Return: EntityResponse<Appliance> The registered appliance
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    AppliancesService.prototype.registerAppliance = /**
     * Register new appliance in the system
     * \@Return: EntityResponse<Appliance> The registered appliance
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Get appliance runtime configuration components
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    /**
     * Get appliance runtime configuration components
     * \@Return: EntitiesResponse<ComponentConfiguration>
     * @param {?=} id
     * @return {?}
     */
    AppliancesService.prototype.getRuntimeConfiguration = /**
     * Get appliance runtime configuration components
     * \@Return: EntitiesResponse<ComponentConfiguration>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/components");
    };
    /**
     * Get list of appliance configurations for the specific product
     * @Return: EntitiesResponse<ApplianceConfiguration>
     */
    /**
     * Get list of appliance configurations for the specific product
     * \@Return: EntitiesResponse<ApplianceConfiguration>
     * @param {?=} target
     * @return {?}
     */
    AppliancesService.prototype.getConfigurations = /**
     * Get list of appliance configurations for the specific product
     * \@Return: EntitiesResponse<ApplianceConfiguration>
     * @param {?=} target
     * @return {?}
     */
    function (target) {
        return this.rest.get(this.baseUrl + "/configurations/" + target);
    };
    /**
     * Change appliance name
     * @Return: EntityResponse<Appliance>
     */
    /**
     * Change appliance name
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @param {?=} name
     * @return {?}
     */
    AppliancesService.prototype.changeName = /**
     * Change appliance name
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @param {?=} name
     * @return {?}
     */
    function (id, name) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", null);
    };
    /**
     * Change appliance folder
     * @Return: EntityResponse<Appliance>
     */
    /**
     * Change appliance folder
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @param {?=} folderId
     * @return {?}
     */
    AppliancesService.prototype.changeFolder = /**
     * Change appliance folder
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @param {?=} folderId
     * @return {?}
     */
    function (id, folderId) {
        return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
    };
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} machineId
     * @return {?}
     */
    AppliancesService.prototype.changeMachineId = /**
     * Change appliance machine Id (for VIRTUAL device only)
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} machineId
     * @return {?}
     */
    function (id, machineId) {
        return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
    };
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    /**
     * Change appliance configuration
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} configId
     * @param {?=} versionId
     * @return {?}
     */
    AppliancesService.prototype.changeConfiguration = /**
     * Change appliance configuration
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} configId
     * @param {?=} versionId
     * @return {?}
     */
    function (id, configId, versionId) {
        return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
    };
    /**
     * Delete appliance from the system
     * @Return: ActionResponse
     */
    /**
     * Delete appliance from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    AppliancesService.prototype.delete = /**
     * Delete appliance from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    /**
     * Find list of appliance commands and filter
     * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     * @param {?=} accountId
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AppliancesService.prototype.getCommands = /**
     * Find list of appliance commands and filter
     * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     * @param {?=} accountId
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (accountId, status, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (accountId != null) {
            params.push("accountId=" + accountId);
        }
        if (status != null) {
            params.push("status=" + status);
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/commands"], params));
    };
    /**
     * Delete command
     * @Return: ActionResponse
     */
    /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @return {?}
     */
    AppliancesService.prototype.deleteCommand = /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @return {?}
     */
    function (commandId) {
        return this.rest.delete(this.baseUrl + "/commands/" + commandId);
    };
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    /**
     * Get appliance status history over time
     * \@Return: EntityResponse<ApplianceStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    AppliancesService.prototype.getStatusOverTime = /**
     * Get appliance status history over time
     * \@Return: EntityResponse<ApplianceStatusTimeSeries>
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
    AppliancesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AppliancesService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return AppliancesService;
}());
export { AppliancesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AppliancesService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    AppliancesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AppliancesService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGlhbmNlc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hcHBsaWFuY2VzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBa0JqRDtJQU1FOztPQUVHO0lBQ0gsMkJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTs7UUFMeEUsWUFBTyxHQUFHLGFBQWEsQ0FBQztRQU05QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRzs7Ozs7Ozs7Ozs7OztJQUNILGdDQUFJOzs7Ozs7Ozs7Ozs7SUFBSixVQUFLLFFBQWlCLEVBQUUsVUFBb0IsRUFBRSxNQUFlLEVBQUUsTUFBNEIsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCOzs7WUFDcEksTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO1FBQzFCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBWSxRQUFVLENBQUMsQ0FBQztTQUFFO1FBQzlELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWMsVUFBWSxDQUFDLENBQUM7U0FBRTtRQUNwRSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVUsTUFBUSxDQUFDLENBQUM7U0FBRTtRQUN4RCxJQUFJLE1BQU0sSUFBSSxJQUFJLEVB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LElBQUksQ0FBQyxPQUFPLGNBQVcsR0FBSyxNQUFNLEdBQUU7SUFDNUQsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHlDQUFhOzs7Ozs7SUFBYixVQUFjLFNBQWtCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUksSUFBSSxDQUFDLE9BQU8sa0JBQWEsU0FBVyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7O0lBQ0gsNkNBQWlCOzs7Ozs7OztJQUFqQixVQUFrQixFQUFXLEVBQUUsSUFBYSxFQUFFLEVBQVc7OztZQUNqRCxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDMUIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLElBQU0sQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFNLEVBQUksQ0FBQyxDQUFDO1NBQUU7UUFFOUMsT0FBTyxDQUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcsNkJBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLHFCQUFrQixHQUFLLE1BQU0sR0FBRTtJQUN6RSxDQUFDOztnQkFsS0YsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkEzQnJCLFFBQVE7O0lBc0xqQix3QkFBQztDQUFBLEFBcEtELElBb0tDO1NBbktZLGlCQUFpQjs7Ozs7O0lBRzVCLG9DQUFnQzs7Ozs7SUFLcEIsbUNBQTRDOzs7OztJQUFFLGlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVzdFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9yZXN0LXV0aWwnO1xuaW1wb3J0IHsgQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUtbGliLm1vZHVsZSc7XG5cbmltcG9ydCB7IENvbW1hbmRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQ29tbWFuZFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgU2Vuc29yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3JTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2Vuc29yU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBTdHJlYW1UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1N0cmVhbVR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlbnNvcic7XG5pbXBvcnQgeyBBcHBsaWFuY2VSZWdpc3RyYXRpb24gfSBmcm9tICcuLi9jb21tb24vQXBwbGlhbmNlUmVnaXN0cmF0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIGFwcGxpYW5jZSByZWxhdGVkIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZXNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2FwcGxpYW5jZXMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGaW5kIGxpc3Qgb2YgYXBwbGlhbmNlcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgZmluZChmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlYXJjaD86IHN0cmluZywgc3RhdHVzPzogQXBwbGlhbmNlU3RhdHVzQ29kZSwgc29ydD86IHN0cmluZywgcGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoc3ViRm9sZGVycyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdWJGb2xkZXJzPSR7c3ViRm9sZGVyc31gKTsgfVxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgYXBwbGlhbmNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIHNlbnNvcnMgYXNzaWduZWQgdG8gdGhlIGFwcGxpYW5jZSAoZ2V0U2Vuc29ycylcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxTZW5zb3I+XG4gICAqL1xuICBmaW5kQXBwbGlhbmNlU2Vuc29ycyhpZD86IHN0cmluZywgc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogU2Vuc29yVHlwZUNvZGUsIHN0YXR1cz86IFNlbnNvclN0YXR1c0NvZGUsIHN0cmVhbT86IFN0cmVhbVR5cGVDb2RlLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmICh0eXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHR5cGU9JHt0eXBlfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc3RyZWFtICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0cmVhbT0ke3N0cmVhbX1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zZW5zb3JzYCwgbnVsbCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbmV3IHNlbnNvciBhbmQgYXNzaWduZWQgaXQgdG8gYSBzcGVjaWZpYyBhcHBsaWFuY2VcbiAgICogVGhlIHNlbnNvciB3aWxsIGJlIGNyZWF0ZWQgd2l0aCBzdGF0dXMgUEVORElORywgdGhlIHN0YXR1cyB3aWxsIGJlIGNoYW5nZWQgd2hlbiB0aGUgYWdlbnQgd2lsbCBlc3RhYmxpc2ggY29ubmVjdGlvbiB0byB0aGUgcHJveHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8U2Vuc29yPiBUaGUgdXBkYXRlZCBzZW5zb3JcbiAgICovXG4gIGFkZEFwcGxpYW5jZVNlbnNvcihpZD86IHN0cmluZywgYm9keT86IFNlbnNvcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3NlbnNvcnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIG5ldyBhcHBsaWFuY2UgaW4gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxBcHBsaWFuY2U+IFRoZSByZWdpc3RlcmVkIGFwcGxpYW5jZVxuICAgKi9cbiAgcmVnaXN0ZXJBcHBsaWFuY2UoaWQ/OiBzdHJpbmcsIGJvZHk/OiBBcHBsaWFuY2VSZWdpc3RyYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9yZWdpc3RlcmAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBydW50aW1lIGNvbmZpZ3VyYXRpb24gY29tcG9uZW50c1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPENvbXBvbmVudENvbmZpZ3VyYXRpb24+XG4gICAqL1xuICBnZXRSdW50aW1lQ29uZmlndXJhdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29tcG9uZW50c2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIGFwcGxpYW5jZSBjb25maWd1cmF0aW9ucyBmb3IgdGhlIHNwZWNpZmljIHByb2R1Y3RcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxBcHBsaWFuY2VDb25maWd1cmF0aW9uPlxuICAgKi9cbiAgZ2V0Q29uZmlndXJhdGlvbnModGFyZ2V0PzogUHJvZHVjdFR5cGVDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9jb25maWd1cmF0aW9ucy8ke3RhcmdldH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgYXBwbGlhbmNlIG5hbWVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8QXBwbGlhbmNlPlxuICAgKi9cbiAgY2hhbmdlTmFtZShpZD86IHN0cmluZywgbmFtZT86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vbmFtZWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhcHBsaWFuY2UgZm9sZGVyXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT5cbiAgICovXG4gIGNoYW5nZUZvbGRlcihpZD86IHN0cmluZywgZm9sZGVySWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvbGRlci8ke2ZvbGRlcklkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBhcHBsaWFuY2UgbWFjaGluZSBJZCAoZm9yIFZJUlRVQUwgZGV2aWNlIG9ubHkpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT4gLSBVcGRhdGVkIGFwcGxpYW5jZVxuICAgKi9cbiAgY2hhbmdlTWFjaGluZUlkKGlkPzogc3RyaW5nLCBtYWNoaW5lSWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L21hY2hpbmUvJHttYWNoaW5lSWR9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGFwcGxpYW5jZSBjb25maWd1cmF0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZT4gLSBVcGRhdGVkIGFwcGxpYW5jZVxuICAgKi9cbiAgY2hhbmdlQ29uZmlndXJhdGlvbihpZD86IHN0cmluZywgY29uZmlnSWQ/OiBzdHJpbmcsIHZlcnNpb25JZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vY29uZmlnLyR7Y29uZmlnSWR9LyR7dmVyc2lvbklkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhcHBsaWFuY2UgZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIGFwcGxpYW5jZSBjb21tYW5kcyBhbmQgZmlsdGVyXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8QXBwbGlhbmNlQ29tbWFuZD4gTGlzdCBvZiBhcHBsaWFuY2UgY29tbWFuZHNcbiAgICovXG4gIGdldENvbW1hbmRzKGFjY291bnRJZD86IHN0cmluZywgc3RhdHVzPzogQ29tbWFuZFN0YXR1c0NvZGUsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChhY2NvdW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWNjb3VudElkPSR7YWNjb3VudElkfWApOyB9XG4gICAgaWYgKHN0YXR1cyAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzdGF0dXM9JHtzdGF0dXN9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vY29tbWFuZHNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBjb21tYW5kXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGVDb21tYW5kKGNvbW1hbmRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vY29tbWFuZHMvJHtjb21tYW5kSWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFwcGxpYW5jZSBzdGF0dXMgaGlzdG9yeSBvdmVyIHRpbWVcbiAgICogQFJldHVybjogIEVudGl0eVJlc3BvbnNlPEFwcGxpYW5jZVN0YXR1c1RpbWVTZXJpZXM+XG4gICAqL1xuICBnZXRTdGF0dXNPdmVyVGltZShpZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGZyb20gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZnJvbT0ke2Zyb219YCk7IH1cbiAgICBpZiAodG8gIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdG89JHt0b31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvb3ZlcnRpbWVgLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==