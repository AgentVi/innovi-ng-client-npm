import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for integrations targets (templates)
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var IntegrationsService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function IntegrationsService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/integrations';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    IntegrationsService.prototype.create = function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    IntegrationsService.prototype.update = function (id, body) {
        return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete integration target from the system
     * @Return: ActionResponse
     */
    IntegrationsService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single integration target by id
     * @Return: EntityResponse<IntegrationTarget>
     */
    IntegrationsService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Get integration targets by list of ids
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    IntegrationsService.prototype.list = function (id) {
        var _a;
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
    };
    /**
     * Find integration targets by filters
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    IntegrationsService.prototype.find = function (search, type) {
        var _a;
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        if (type != null) {
            params.push("type=" + type);
        }
        return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
    };
    /**
     * Create new integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    IntegrationsService.prototype.createAction = function (body) {
        return this.rest.post(this.baseUrl + "/actions", typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    IntegrationsService.prototype.updateAction = function (id, body) {
        return this.rest.put(this.baseUrl + "/actions/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete integration action from the system
     * @Return: ActionResponse
     */
    IntegrationsService.prototype.deleteAction = function (id) {
        return this.rest.delete(this.baseUrl + "/actions/" + id);
    };
    /**
     * Get single integration action by id
     * @Return: EntityResponse<IntegrationAction>
     */
    IntegrationsService.prototype.getAction = function (id) {
        return this.rest.get(this.baseUrl + "/actions/" + id);
    };
    /**
     * Get integration actions by list of ids
     * @Return: EntitiesResponse<IntegrationAction>
     */
    IntegrationsService.prototype.listActions = function (id) {
        var _a;
        var params = new Array();
        if (id != null) {
            params.push("id=" + id);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/actions/list"], params));
    };
    /**
     * Find integration actions by filters
     * @Return: EntitiesResponse<IntegrationAction>
     */
    IntegrationsService.prototype.findActions = function (search) {
        var _a;
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
        }
        return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/actions"], params));
    };
    /**
     * Find all integration actions for a specified level in the folder hierarchy
     * @Return: EntitiesResponse<IntegrationAction>
     */
    IntegrationsService.prototype.getFolderActions = function (folderId) {
        return this.rest.get(this.baseUrl + "/actions/folder/" + folderId);
    };
    /** @nocollapse */ IntegrationsService.ɵfac = function IntegrationsService_Factory(t) { return new (t || IntegrationsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ IntegrationsService.ɵprov = i0.ɵɵdefineInjectable({ token: IntegrationsService, factory: IntegrationsService.ɵfac });
    return IntegrationsService;
}());
export { IntegrationsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IntegrationsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25zU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2ludGVncmF0aW9uc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBTTFDOzs7O0dBSUc7QUFDSDtJQU1FOztPQUVHO0lBQ0gsNkJBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsZUFBZSxDQUFDO1FBTWhDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsb0NBQU0sR0FBTixVQUFPLElBQXdCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFNLEdBQU4sVUFBTyxFQUFXLEVBQUUsSUFBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxTQUFJLEVBQUksRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElB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QUFBLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQSxDQUFDLEdBQUcscUJBQUksSUFBSSxDQUFDLE9BQU8sa0JBQWUsR0FBSyxNQUFNLEdBQUU7SUFDaEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlDQUFXLEdBQVgsVUFBWSxNQUFlOztRQUN6QixJQUFNLE1BQU0sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzNCLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBVSxNQUFRLENBQUMsQ0FBQztTQUFFO1FBRTFELE9BQU8sQ0FBQSxLQUFBLElBQUksQ0FBQyxJQUFJLENBQUEsQ0FBQyxHQUFHLHFCQUFJLElBQUksQ0FBQyxPQUFPLGFBQVUsR0FBSyxNQUFNLEdBQUU7SUFDM0QsQ0FBQztJQUVEOzs7T0FHRztJQUNILDhDQUFnQixHQUFoQixVQUFpQixRQUFpQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLHdCQUFtQixRQUFVLENBQUMsQ0FBQztJQUNyRSxDQUFDOzBGQWhJVSxtQkFBbUIsY0FRVixRQUFROytEQVJqQixtQkFBbUIsV0FBbkIsbUJBQW1COzhCQWRoQztDQWdKQyxBQW5JRCxJQW1JQztTQWxJWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUQvQixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBJbnRlZ3JhdGlvblRhcmdldCB9IGZyb20gJy4uL2VudGl0aWVzL0ludGVncmF0aW9uVGFyZ2V0JztcbmltcG9ydCB7IEludGVncmF0aW9uQWN0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvSW50ZWdyYXRpb25BY3Rpb24nO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIGludGVncmF0aW9ucyB0YXJnZXRzICh0ZW1wbGF0ZXMpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvbnNTZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL2ludGVncmF0aW9ucyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgaW50ZWdyYXRpb24gdGFyZ2V0XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBJbnRlZ3JhdGlvblRhcmdldCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgaW50ZWdyYXRpb24gdGFyZ2V0XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogSW50ZWdyYXRpb25UYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgaW50ZWdyYXRpb24gdGFyZ2V0IGZyb20gdGhlIHN5c3RlbVxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgaW50ZWdyYXRpb24gdGFyZ2V0IGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uVGFyZ2V0PlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpbnRlZ3JhdGlvbiB0YXJnZXRzIGJ5IGxpc3Qgb2YgaWRzXG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25UYXJnZXQ+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBpbnRlZ3JhdGlvbiB0YXJnZXRzIGJ5IGZpbHRlcnNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvblRhcmdldD5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH1gLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgaW50ZWdyYXRpb24gYWN0aW9uXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgY3JlYXRlQWN0aW9uKGJvZHk/OiBJbnRlZ3JhdGlvbkFjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnNgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBpbnRlZ3JhdGlvbiBhY3Rpb25cbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICB1cGRhdGVBY3Rpb24oaWQ/OiBzdHJpbmcsIGJvZHk/OiBJbnRlZ3JhdGlvbkFjdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy8ke2lkfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGludGVncmF0aW9uIGFjdGlvbiBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZUFjdGlvbihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzaW5nbGUgaW50ZWdyYXRpb24gYWN0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgZ2V0QWN0aW9uKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGludGVncmF0aW9uIGFjdGlvbnMgYnkgbGlzdCBvZiBpZHNcbiAgICogQFJldHVybjogRW50aXRpZXNSZXNwb25zZTxJbnRlZ3JhdGlvbkFjdGlvbj5cbiAgICovXG4gIGxpc3RBY3Rpb25zKGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vYWN0aW9ucy9saXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGludGVncmF0aW9uIGFjdGlvbnMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPEludGVncmF0aW9uQWN0aW9uPlxuICAgKi9cbiAgZmluZEFjdGlvbnMoc2VhcmNoPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L2FjdGlvbnNgLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgYWxsIGludGVncmF0aW9uIGFjdGlvbnMgZm9yIGEgc3BlY2lmaWVkIGxldmVsIGluIHRoZSBmb2xkZXIgaGllcmFyY2h5XG4gICAqIEBSZXR1cm46IEVudGl0aWVzUmVzcG9uc2U8SW50ZWdyYXRpb25BY3Rpb24+XG4gICAqL1xuICBnZXRGb2xkZXJBY3Rpb25zKGZvbGRlcklkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9hY3Rpb25zL2ZvbGRlci8ke2ZvbGRlcklkfWApO1xuICB9XG5cbn1cbiJdfQ==