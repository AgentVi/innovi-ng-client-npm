/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
/**
 * Services for folders actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var FoldersService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function FoldersService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/folders';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new folder in the account hierarchy
     * @Return: EntityResponse<Folder>
     */
    /**
     * Create new folder in the account hierarchy
     * \@Return: EntityResponse<Folder>
     * @param {?=} body
     * @return {?}
     */
    FoldersService.prototype.create = /**
     * Create new folder in the account hierarchy
     * \@Return: EntityResponse<Folder>
     * @param {?=} body
     * @return {?}
     */
    function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change folder name
     * @Return: EntityResponse<Folder>
     */
    /**
     * Change folder name
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    FoldersService.prototype.changeName = /**
     * Change folder name
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change folder parent id
     * @Return: EntityResponse<Folder>
     */
    /**
     * Change folder parent id
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} parentId
     * @return {?}
     */
    FoldersService.prototype.changeParent = /**
     * Change folder parent id
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} parentId
     * @return {?}
     */
    function (id, parentId) {
        return this.rest.put(this.baseUrl + "/" + id + "/parent/" + parentId, null);
    };
    /**
     * Change folder geo-area (polygon)
     * @Return: EntityResponse<Folder>
     */
    /**
     * Change folder geo-area (polygon)
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    FoldersService.prototype.changeGeoArea = /**
     * Change folder geo-area (polygon)
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change folder geo-location (center)
     * @Return: EntityResponse<Folder>
     */
    /**
     * Change folder geo-location (center)
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    FoldersService.prototype.changeGeoLocation = /**
     * Change folder geo-location (center)
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Change folder timezone
     * @Return: EntityResponse<Folder>
     */
    /**
     * Change folder timezone
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    FoldersService.prototype.changeTimezone = /**
     * Change folder timezone
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id + "/timezone", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete folder from the system (only if it is empty)
     * @Return: ActionResponse error will be returned if the folder is not empty
     */
    /**
     * Delete folder from the system (only if it is empty)
     * \@Return: ActionResponse error will be returned if the folder is not empty
     * @param {?=} id
     * @return {?}
     */
    FoldersService.prototype.delete = /**
     * Delete folder from the system (only if it is empty)
     * \@Return: ActionResponse error will be returned if the folder is not empty
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single folder by id
     * @Return: EntityResponse<Folder>
     */
    /**
     * Get single folder by id
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @return {?}
     */
    FoldersService.prototype.get = /**
     * Get single folder by id
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get folders by list of ids
     * @Return: EntitiesResponse<Folder>
     */
    /**
     * Get folders by list of ids
     * \@Return: EntitiesResponse<Folder>
     * @param {?=} id
     * @return {?}
     */
    FoldersService.prototype.list = /**
     * Get folders by list of ids
     * \@Return: EntitiesResponse<Folder>
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
     * Find folders by filters
     * @Return: QueryResponse<Folder>
     */
    /**
     * Find folders by filters
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    FoldersService.prototype.find = /**
     * Find folders by filters
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (id, search, parentId, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (parentId != null) {
            params.push("parentId=" + parentId);
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
     * Export list of folders and filter
     * @Return: StreamContent
     */
    /**
     * Export list of folders and filter
     * \@Return: StreamContent
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    FoldersService.prototype.exportFormat = /**
     * Export list of folders and filter
     * \@Return: StreamContent
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} format
     * @param {?=} fields
     * @return {?}
     */
    function (id, search, parentId, sort, format, fields) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (parentId != null) {
            params.push("parentId=" + parentId);
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/export"], params));
    };
    /**
     * Find and filter list of folders
     * @Return: QueryResponse<Folder>
     */
    /**
     * Find and filter list of folders
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    FoldersService.prototype.getSubFolders = /**
     * Find and filter list of folders
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (id, search, parentId, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (parentId != null) {
            params.push("parentId=" + parentId);
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/folders"], params));
    };
    /**
     * Get items (folders and sensors) by parent folder id
     * @Return: QueryResponse<TreeItem>
     */
    /**
     * Get items (folders and sensors) by parent folder id
     * \@Return: QueryResponse<TreeItem>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    FoldersService.prototype.getSubItems = /**
     * Get items (folders and sensors) by parent folder id
     * \@Return: QueryResponse<TreeItem>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (id, search, parentId, sort, page, pageSize) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (parentId != null) {
            params.push("parentId=" + parentId);
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
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/" + id + "/items"], params));
    };
    /**
     * Get account tree hierarchy (folders and sensors) - starting from the account level as root
     * @Return: EntityResponse<TreeNode>
     */
    /**
     * Get account tree hierarchy (folders and sensors) - starting from the account level as root
     * \@Return: EntityResponse<TreeNode>
     * @param {?=} includeSensors
     * @return {?}
     */
    FoldersService.prototype.getHierarchy = /**
     * Get account tree hierarchy (folders and sensors) - starting from the account level as root
     * \@Return: EntityResponse<TreeNode>
     * @param {?=} includeSensors
     * @return {?}
     */
    function (includeSensors) {
        var _a;
        /** @type {?} */
        var params = new Array();
        if (includeSensors != null) {
            params.push("includeSensors=" + includeSensors);
        }
        return (_a = this.rest).get.apply(_a, tslib_1.__spread([this.baseUrl + "/tree"], params));
    };
    /**
     * Get default geo bounds
     * @Return: EntityResponse<Coordinate> The folder location
     */
    /**
     * Get default geo bounds
     * \@Return: EntityResponse<Coordinate> The folder location
     * @param {?=} id
     * @return {?}
     */
    FoldersService.prototype.getDefaultLocation = /**
     * Get default geo bounds
     * \@Return: EntityResponse<Coordinate> The folder location
     * @param {?=} id
     * @return {?}
     */
    function (id) {
        return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
    };
    FoldersService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FoldersService.ctorParameters = function () { return [
        { type: CoreConfig, decorators: [{ type: Inject, args: ['config',] }] },
        { type: RestUtil }
    ]; };
    return FoldersService;
}());
export { FoldersService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FoldersService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    FoldersService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    FoldersService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVyc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mb2xkZXJzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFXMUM7SUFNRTs7T0FFRztJQUNILHdCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxVQUFVLENBQUM7UUFNM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFHRDs7O09BR0c7Ozs7Ozs7SUFDSCwrQkFBTTs7Ozs7O0lBQU4sVUFBTyxJQUFhO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSCxtQ0FBVTs7Ozs7OztJQUFWLFVBQVcsRUFBVyxFQUFFLElBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUUsVUFBTyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFB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SUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGlCQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkF0S0YsVUFBVTs7OztnQkFYRixVQUFVLHVCQW9CSixNQUFNLFNBQUMsUUFBUTtnQkFyQnJCLFFBQVE7O0lBb0xqQixxQkFBQztDQUFBLEFBeEtELElBd0tDO1NBdktZLGNBQWM7Ozs7OztJQUd6QixpQ0FBNkI7Ozs7O0lBS2pCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgRm9sZGVyIH0gZnJvbSAnLi4vZW50aXRpZXMvRm9sZGVyJztcblxuXG4vKipcbiAqIFNlcnZpY2VzIGZvciBmb2xkZXJzIGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvbGRlcnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2ZvbGRlcnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGZvbGRlciBpbiB0aGUgYWNjb3VudCBoaWVyYXJjaHlcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Rm9sZGVyPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBGb2xkZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIGZvbGRlciBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGNoYW5nZU5hbWUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L25hbWVgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBmb2xkZXIgcGFyZW50IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGNoYW5nZVBhcmVudChpZD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3BhcmVudC8ke3BhcmVudElkfWAsIG51bGwpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBmb2xkZXIgZ2VvLWFyZWEgKHBvbHlnb24pXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGNoYW5nZUdlb0FyZWEoaWQ/OiBzdHJpbmcsIGJvZHk/OiBDb29yZGluYXRlW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0FyZWFgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBmb2xkZXIgZ2VvLWxvY2F0aW9uIChjZW50ZXIpXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGNoYW5nZUdlb0xvY2F0aW9uKGlkPzogc3RyaW5nLCBib2R5PzogQ29vcmRpbmF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZ2VvTG9jYXRpb25gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBmb2xkZXIgdGltZXpvbmVcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Rm9sZGVyPlxuICAgKi9cbiAgY2hhbmdlVGltZXpvbmUoaWQ/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3RpbWV6b25lYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgZm9sZGVyIGZyb20gdGhlIHN5c3RlbSAob25seSBpZiBpdCBpcyBlbXB0eSlcbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2UgZXJyb3Igd2lsbCBiZSByZXR1cm5lZCBpZiB0aGUgZm9sZGVyIGlzIG5vdCBlbXB0eVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgZm9sZGVyIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGdldChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZm9sZGVycyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGxpc3QoaWQ/OiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoaWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgaWQ9JHtpZH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGZvbGRlcnMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGZpbmQoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHBhcmVudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhcmVudElkPSR7cGFyZW50SWR9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBsaXN0IG9mIGZvbGRlcnMgYW5kIGZpbHRlclxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRGb3JtYXQoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlYXJjaCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZWFyY2g9JHtzZWFyY2h9YCk7IH1cbiAgICBpZiAocGFyZW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFyZW50SWQ9JHtwYXJlbnRJZH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKGZvcm1hdCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmb3JtYXQ9JHtmb3JtYXR9YCk7IH1cbiAgICBpZiAoZmllbGRzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZpZWxkcz0ke2ZpZWxkc31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9leHBvcnRgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW5kIGZpbHRlciBsaXN0IG9mIGZvbGRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBnZXRTdWJGb2xkZXJzKGlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChwYXJlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXJlbnRJZD0ke3BhcmVudElkfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvbGRlcnNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdGVtcyAoZm9sZGVycyBhbmQgc2Vuc29ycykgYnkgcGFyZW50IGZvbGRlciBpZFxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFRyZWVJdGVtPlxuICAgKi9cbiAgZ2V0U3ViSXRlbXMoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHBhcmVudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhcmVudElkPSR7cGFyZW50SWR9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vaXRlbXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50IHRyZWUgaGllcmFyY2h5IChmb2xkZXJzIGFuZCBzZW5zb3JzKSAtIHN0YXJ0aW5nIGZyb20gdGhlIGFjY291bnQgbGV2ZWwgYXMgcm9vdFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUcmVlTm9kZT5cbiAgICovXG4gIGdldEhpZXJhcmNoeShpbmNsdWRlU2Vuc29ycz86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGluY2x1ZGVTZW5zb3JzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGluY2x1ZGVTZW5zb3JzPSR7aW5jbHVkZVNlbnNvcnN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vdHJlZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGJvdW5kc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb29yZGluYXRlPiBUaGUgZm9sZGVyIGxvY2F0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxufVxuIl19