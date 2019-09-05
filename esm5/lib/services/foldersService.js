/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
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
        return this.rest.post(this.baseUrl + "/folders", typeof body === 'object' ? JSON.stringify(body) : body);
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
     * Find events by filters
     * @Return: QueryResponse<Folder>
     */
    /**
     * Find events by filters
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
     * Find events by filters
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
        { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVyc1NlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9mb2xkZXJzU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBWWpEO0lBTUU7O09BRUc7SUFDSCx3QkFBc0MsTUFBa0IsRUFBVSxJQUFjO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFVOztRQUx4RSxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBTTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHOzs7Ozs7O0lBQ0gsK0JBQU07Ozs7OztJQUFOLFVBQU8sSUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7O0lBQ0gsbUNBQVU7Ozs7Ozs7SUFBVixVQUFXLEVBQVcsRUFBRSxJQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLFVBQU8sRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFD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LENBQUM7U0FBRTtRQUVsRixPQUFPLENBQUEsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFBLENBQUMsR0FBRyw2QkFBSSxJQUFJLENBQUMsT0FBTyxVQUFPLEdBQUssTUFBTSxHQUFFO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCwyQ0FBa0I7Ozs7OztJQUFsQixVQUFtQixFQUFXO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLE9BQU8sU0FBSSxFQUFFLGlCQUFjLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkF2SkYsVUFBVTs7OztnREFTSSxNQUFNLFNBQUMsUUFBUTtnQkFyQnJCLFFBQVE7O0lBcUtqQixxQkFBQztDQUFBLEFBekpELElBeUpDO1NBeEpZLGNBQWM7Ozs7OztJQUd6QixpQ0FBNkI7Ozs7O0lBS2pCLGdDQUE0Qzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlLWNvbmZpZyc7XG5cbmltcG9ydCB7IEZvbGRlciB9IGZyb20gJy4uL2VudGl0aWVzL0ZvbGRlcic7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGZvbGRlcnMgYWN0aW9uc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9sZGVyc1NlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvZm9sZGVycyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgZm9sZGVyIGluIHRoZSBhY2NvdW50IGhpZXJhcmNoeVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBjcmVhdGUoYm9keT86IEZvbGRlcikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2ZvbGRlcnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBmb2xkZXIgbmFtZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBjaGFuZ2VOYW1lKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9uYW1lYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZm9sZGVyIHBhcmVudCBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBjaGFuZ2VQYXJlbnQoaWQ/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9wYXJlbnQvJHtwYXJlbnRJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZm9sZGVyIGdlby1hcmVhIChwb2x5Z29uKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBjaGFuZ2VHZW9BcmVhKGlkPzogc3RyaW5nLCBib2R5PzogQ29vcmRpbmF0ZVtdKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9nZW9BcmVhYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZm9sZGVyIGdlby1sb2NhdGlvbiAoY2VudGVyKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBjaGFuZ2VHZW9Mb2NhdGlvbihpZD86IHN0cmluZywgYm9keT86IENvb3JkaW5hdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgZm9sZGVyIHRpbWV6b25lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGNoYW5nZVRpbWV6b25lKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS90aW1lem9uZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGZvbGRlciBmcm9tIHRoZSBzeXN0ZW0gKG9ubHkgaWYgaXQgaXMgZW1wdHkpXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlIGVycm9yIHdpbGwgYmUgcmV0dXJuZWQgaWYgdGhlIGZvbGRlciBpcyBub3QgZW1wdHlcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIGZvbGRlciBieSBpZFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGZvbGRlcnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBldmVudHMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPEZvbGRlcj5cbiAgICovXG4gIGZpbmQoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHBhcmVudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhcmVudElkPSR7cGFyZW50SWR9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYW5kIGZpbHRlciBsaXN0IG9mIGZvbGRlcnNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxGb2xkZXI+XG4gICAqL1xuICBnZXRTdWJGb2xkZXJzKGlkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIHBhcmVudElkPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChwYXJlbnRJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYXJlbnRJZD0ke3BhcmVudElkfWApOyB9XG4gICAgaWYgKHNvcnQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc29ydD0ke3NvcnR9YCk7IH1cbiAgICBpZiAocGFnZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlPSR7cGFnZX1gKTsgfVxuICAgIGlmIChwYWdlU2l6ZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBwYWdlU2l6ZT0ke3BhZ2VTaXplfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2ZvbGRlcnNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdGVtcyAoZm9sZGVycyBhbmQgc2Vuc29ycykgYnkgcGFyZW50IGZvbGRlciBpZFxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFRyZWVJdGVtPlxuICAgKi9cbiAgZ2V0U3ViSXRlbXMoaWQ/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgcGFyZW50SWQ/OiBzdHJpbmcsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHBhcmVudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhcmVudElkPSR7cGFyZW50SWR9YCk7IH1cbiAgICBpZiAoc29ydCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzb3J0PSR7c29ydH1gKTsgfVxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vaXRlbXNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhY2NvdW50IHRyZWUgaGllcmFyY2h5IChmb2xkZXJzIGFuZCBzZW5zb3JzKSAtIHN0YXJ0aW5nIGZyb20gdGhlIGFjY291bnQgbGV2ZWwgYXMgcm9vdFxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxUcmVlTm9kZT5cbiAgICovXG4gIGdldEhpZXJhcmNoeShpbmNsdWRlU2Vuc29ycz86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGluY2x1ZGVTZW5zb3JzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGluY2x1ZGVTZW5zb3JzPSR7aW5jbHVkZVNlbnNvcnN9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vdHJlZWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGRlZmF1bHQgZ2VvIGJvdW5kc1xuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDb29yZGluYXRlPiBUaGUgZm9sZGVyIGxvY2F0aW9uXG4gICAqL1xuICBnZXREZWZhdWx0TG9jYXRpb24oaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2dlb0xvY2F0aW9uYCk7XG4gIH1cblxufVxuIl19