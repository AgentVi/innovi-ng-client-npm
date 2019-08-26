/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // replaces previous Http service
// replaces previous Http service
import { map, catchError } from 'rxjs/operators';
import * as LocalStorageUtil from './localStorage-util';
/**
 * Utility class for all REST services with common functions
 */
export class RestUtil {
    /**
     * Constructor with injected authentication service
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * HTTP GET action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    get(url, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * HTTP POST action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    post(url, body, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * HTTP PUT action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    put(url, body, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * HTTP DELETE action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    delete(url, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * Construct URL with parameters
     * @private
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    /**
     * Process the response, extract and refresh access token and return the body
     * @private
     * @param {?} response
     * @return {?}
     */
    processResponse(response) {
        if (response.status === 401) {
            LocalStorageUtil.removeToken();
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
        /** @type {?} */
        const accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            LocalStorageUtil.setToken(accessToken);
        }
        else {
            LocalStorageUtil.removeToken();
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    }
    /**
     * Error handling
     * @private
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    }
}
RestUtil.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RestUtil.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestUtil.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    RestUtil.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJ1dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUMsQ0FBRSxpQ0FBaUM7O0FBQ2hILE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxLQUFLLGdCQUFnQixNQUFNLHFCQUFxQixDQUFDOzs7O0FBTXhELE1BQU0sT0FBTyxRQUFROzs7OztJQVFuQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOztRQUw1QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFLcEMsQ0FBQzs7Ozs7OztJQUt6QyxHQUFHLENBQUMsR0FBVyxFQUFFLEdBQUcsTUFBZ0I7O2NBQzVCLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUNoRSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7SUFLRCxJQUFJLENBQUMsR0FBVyxFQUFFLElBQVksRUFBRSxHQUFHLE1BQWdCOztjQUMzQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQ3ZFLElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsQ0FBQyxHQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQzFELFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzdCLENBQUM7SUFDTixDQUFDOzs7Ozs7OztJQUtELEdBQUcsQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLEdBQUcsTUFBZ0I7O2NBQzFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7YUFDdEUsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxDQUFDLEdBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFDMUQsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDN0IsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFLRCxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsTUFBZ0I7O2NBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQzthQUNuRSxJQUFJLENBQ0gsR0FBRzs7OztRQUFDLENBQUMsR0FBc0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUMxRCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7SUFLTyxRQUFRLENBQUMsR0FBVyxFQUFFLEdBQUcsTUFBZ0I7UUFDL0MsT0FBTyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDcEksQ0FBQzs7Ozs7OztJQUtPLGVBQWUsQ0FBQyxRQUEyQjtRQUVqRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQzNCLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25FO2FBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxRDs7O2NBSUssV0FBVyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBRTFELElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ25FLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEU7UUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7OztJQUtPLFdBQVcsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtZQUNkLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtRQUNELE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7OztZQTNHRixVQUFVOzs7O1lBUEYsVUFBVTs7Ozs7OztJQVdqQiwyQkFBNEU7Ozs7O0lBS2hFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7ICAvLyByZXBsYWNlcyBwcmV2aW91cyBIdHRwIHNlcnZpY2VcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIExvY2FsU3RvcmFnZVV0aWwgZnJvbSAnLi9sb2NhbFN0b3JhZ2UtdXRpbCc7XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyBmb3IgYWxsIFJFU1Qgc2VydmljZXMgd2l0aCBjb21tb24gZnVuY3Rpb25zXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0VXRpbCB7XG5cbiAgLy8gU2V0IGhlYWRlcnNcbiAgcHJpdmF0ZSBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciB3aXRoIGluamVjdGVkIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICAqIEhUVFAgR0VUIGFjdGlvblxuICAgKi9cbiAgZ2V0KHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHJlc291cmNlVXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvciksXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhUVFAgUE9TVCBhY3Rpb25cbiAgICovXG4gIHBvc3QodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QocmVzb3VyY2VVcmwsIGJvZHksIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIVFRQIFBVVCBhY3Rpb25cbiAgICovXG4gIHB1dCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KHJlc291cmNlVXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBERUxFVEUgYWN0aW9uXG4gICAqL1xuICBkZWxldGUodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUocmVzb3VyY2VVcmwsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3QgVVJMIHdpdGggcGFyYW1ldGVyc1xuICAgKi9cbiAgcHJpdmF0ZSBidWlsZFVybCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiAocGFyYW1zID09PSBudWxsKSA/IHVybCA6IChwYXJhbXMubGVuZ3RoID09PSAwKSA/IHVybCA6IGAke3VybH0ke3BhcmFtcyAmJiBwYXJhbXMubGVuZ3RoID4gMCA/ICc/JytwYXJhbXMuam9pbignJicpIDogJyd9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9jZXNzIHRoZSByZXNwb25zZSwgZXh0cmFjdCBhbmQgcmVmcmVzaCBhY2Nlc3MgdG9rZW4gYW5kIHJldHVybiB0aGUgYm9keVxuICAgKi9cbiAgcHJpdmF0ZSBwcm9jZXNzUmVzcG9uc2UocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+KSB7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgIExvY2FsU3RvcmFnZVV0aWwucmVtb3ZlVG9rZW4oKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWNjZXNzIGRlbmllZCwgcmVzZXQgdG9rZW46ICcgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID4gNDAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgc3RhdHVzIGVycm9yOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG5cbiAgICAvLyBHZXQgYWNjZXNzIHRva2VuIGZyb20gaGVhZGVyIGFuZCB1cGRhdGUgYXV0aGVudGljYXRpb24gc2VydmljZVxuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXNwb25zZS5oZWFkZXJzLmdldCgnWC1BQ0NFU1MtVE9LRU4nKTtcblxuICAgIGlmICgoYWNjZXNzVG9rZW4gIT09IG51bGwpICYmIChhY2Nlc3NUb2tlbi5sZW5ndGggPiAwKSkge1xuICAgICAgTG9jYWxTdG9yYWdlVXRpbC5zZXRUb2tlbihhY2Nlc3NUb2tlbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIExvY2FsU3RvcmFnZVV0aWwucmVtb3ZlVG9rZW4oKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UuYm9keSAmJiByZXNwb25zZS5ib2R5LmNvZGUgJiYgcmVzcG9uc2UuYm9keS5jb2RlICE9PSAwKSB7XG4gICAgICB0aHJvdyB7IGNvZGU6IHJlc3BvbnNlLmJvZHkuY29kZSwgbWVzc2FnZTogcmVzcG9uc2UuYm9keS5lcnJvciB9O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVzcG9uc2UuYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcnJvciBoYW5kbGluZ1xuICAgKi9cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoZXJyb3IuY29kZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UgfHwgZXJyb3IpO1xuICB9XG59XG4iXX0=