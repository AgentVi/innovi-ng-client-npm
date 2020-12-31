import { __read, __spread } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for case management actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
var CasesService = /** @class */ (function () {
    /**
     * Class constructor
     */
    function CasesService(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/cases';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new case
     * @Return: EntityResponse<CaseInfo>
     */
    CasesService.prototype.create = function (body) {
        return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Update case
     * @Return: EntityResponse<CaseInfo>
     */
    CasesService.prototype.update = function (body) {
        return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
    };
    /**
     * Delete case from the system
     * @Return: ActionResponse
     */
    CasesService.prototype.delete = function (id) {
        return this.rest.delete(this.baseUrl + "/" + id);
    };
    /**
     * Get single case by id
     * @Return: EntityResponse<CaseInfo>
     */
    CasesService.prototype.get = function (id) {
        return this.rest.get(this.baseUrl + "/" + id);
    };
    /**
     * Find list of all public cases and user owned private cases
     * @Return: QueryResponse<CaseInfo>
     */
    CasesService.prototype.find = function (search, sort, page, pageSize) {
        var _a;
        var params = new Array();
        if (search != null) {
            params.push("search=" + search);
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
     * Add bulk of search events to the case
     * @Return: EntityResponse<CaseInfo>
     */
    CasesService.prototype.addSearchEvents = function (id, sessionId, eventId) {
        var _a;
        var params = new Array();
        if (eventId != null) {
            params.push("eventId=" + eventId);
        }
        return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/" + id + "/sessions/" + sessionId + "/events", null], params));
    };
    /**
     * Remove bulk of search events from the case
     * @Return: EntityResponse<CaseInfo>
     */
    CasesService.prototype.removeSearchEvents = function (id, eventId) {
        var _a;
        var params = new Array();
        if (eventId != null) {
            params.push("eventId=" + eventId);
        }
        return (_a = this.rest).delete.apply(_a, __spread([this.baseUrl + "/" + id + "/events"], params));
    };
    /**
     * Get all timestamped objects of the provided case event
     * @Return: EntityResponse<TimestampedCrop>
     */
    CasesService.prototype.getEventObjectCrops = function (id, eventId) {
        return this.rest.get(this.baseUrl + "/" + id + "/events/" + eventId);
    };
    /**
     * Get single timestamped object of the provided case event
     * @Return: EntityResponse<TimestampedCrop>
     */
    CasesService.prototype.getMainEventObjectCrop = function (id, eventId) {
        return this.rest.get(this.baseUrl + "/" + id + "/event/" + eventId);
    };
    /** @nocollapse */ CasesService.ɵfac = function CasesService_Factory(t) { return new (t || CasesService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
    /** @nocollapse */ CasesService.ɵprov = i0.ɵɵdefineInjectable({ token: CasesService, factory: CasesService.ɵfac });
    return CasesService;
}());
export { CasesService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CasesService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2FzZXNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUsxQzs7OztHQUlHO0FBQ0g7SUFNRTs7T0FFRztJQUNILHNCQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLFFBQVEsQ0FBQztRQU16QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDaEQsQ0FBQztJQUdEOzs7T0FHRztJQUNILDZCQUFNLEdBQU4sVUFBTyxJQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVEOzs7T0FHRztJQUNILDZCQUFNLEdBQU4sVUFBTyxJQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBRyxJQUFJLENBQUMsT0FBUyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FB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QWpHWSxZQUFZO2tEQUFaLFlBQVk7Y0FEeEIsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQ2FzZUluZm8gfSBmcm9tICcuLi9lbnRpdGllcy9DYXNlSW5mbyc7XG5cblxuLyoqXG4gKiBTZXJ2aWNlcyBmb3IgY2FzZSBtYW5hZ2VtZW50IGFjdGlvbnNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhc2VzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9jYXNlcyc7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIENyZWF0ZSBuZXcgY2FzZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDYXNlSW5mbz5cbiAgICovXG4gIGNyZWF0ZShib2R5PzogQ2FzZUluZm8pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGNhc2VcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8Q2FzZUluZm8+XG4gICAqL1xuICB1cGRhdGUoYm9keT86IENhc2VJbmZvKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIGNhc2UgZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSBjYXNlIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPENhc2VJbmZvPlxuICAgKi9cbiAgZ2V0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgbGlzdCBvZiBhbGwgcHVibGljIGNhc2VzIGFuZCB1c2VyIG93bmVkIHByaXZhdGUgY2FzZXNcbiAgICogQFJldHVybjogUXVlcnlSZXNwb25zZTxDYXNlSW5mbz5cbiAgICovXG4gIGZpbmQoc2VhcmNoPzogc3RyaW5nLCBzb3J0Pzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGJ1bGsgb2Ygc2VhcmNoIGV2ZW50cyB0byB0aGUgY2FzZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDYXNlSW5mbz5cbiAgICovXG4gIGFkZFNlYXJjaEV2ZW50cyhpZD86IHN0cmluZywgc2Vzc2lvbklkPzogc3RyaW5nLCBldmVudElkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGV2ZW50SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZXZlbnRJZD0ke2V2ZW50SWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3Nlc3Npb25zLyR7c2Vzc2lvbklkfS9ldmVudHNgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBidWxrIG9mIHNlYXJjaCBldmVudHMgZnJvbSB0aGUgY2FzZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxDYXNlSW5mbz5cbiAgICovXG4gIHJlbW92ZVNlYXJjaEV2ZW50cyhpZD86IHN0cmluZywgZXZlbnRJZD86IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChldmVudElkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGV2ZW50SWQ9JHtldmVudElkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2V2ZW50c2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCB0aW1lc3RhbXBlZCBvYmplY3RzIG9mIHRoZSBwcm92aWRlZCBjYXNlIGV2ZW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFRpbWVzdGFtcGVkQ3JvcD5cbiAgICovXG4gIGdldEV2ZW50T2JqZWN0Q3JvcHMoaWQ/OiBzdHJpbmcsIGV2ZW50SWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L2V2ZW50cy8ke2V2ZW50SWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSB0aW1lc3RhbXBlZCBvYmplY3Qgb2YgdGhlIHByb3ZpZGVkIGNhc2UgZXZlbnRcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VGltZXN0YW1wZWRDcm9wPlxuICAgKi9cbiAgZ2V0TWFpbkV2ZW50T2JqZWN0Q3JvcChpZD86IHN0cmluZywgZXZlbnRJZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vZXZlbnQvJHtldmVudElkfWApO1xuICB9XG5cbn1cbiJdfQ==