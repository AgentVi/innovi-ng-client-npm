/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // replaces previous Http service
// replaces previous Http service
import { map, catchError } from 'rxjs/operators';
import * as LocalStorageUtil from './localStorage-util';
/**
 * Utility class for all REST services with common functions
 */
var RestUtil = /** @class */ (function () {
    /**
     * Constructor with injected authentication service
     */
    function RestUtil(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    /**
     * Download is HTTP GET action but the content is blob
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    RestUtil.prototype.download = /**
     * Download is HTTP GET action but the content is blob
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    function (url) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var resourceUrl = this.buildUrl.apply(this, tslib_1.__spread([url], params));
        // return this.http.get(resourceUrl, {responseType: 'blob'}).map(res => ({content: res.body,
        //   fileName: res.headers.get('content-filename')}));
        return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var downloadURL = window.URL.createObjectURL(data);
            /** @type {?} */
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = 'filename.ext';
            link.click();
        }));
    };
    /**
     * HTTP GET action
     */
    /**
     * HTTP GET action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    RestUtil.prototype.get = /**
     * HTTP GET action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    function (url) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var resourceUrl = this.buildUrl.apply(this, tslib_1.__spread([url], params));
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.processResponse(res); })), catchError(this.handleError));
    };
    /**
     * HTTP POST action
     */
    /**
     * HTTP POST action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    RestUtil.prototype.post = /**
     * HTTP POST action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    function (url, body) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        /** @type {?} */
        var resourceUrl = this.buildUrl.apply(this, tslib_1.__spread([url], params));
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.processResponse(res); })), catchError(this.handleError));
    };
    /**
     * HTTP PUT action
     */
    /**
     * HTTP PUT action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    RestUtil.prototype.put = /**
     * HTTP PUT action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    function (url, body) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        /** @type {?} */
        var resourceUrl = this.buildUrl.apply(this, tslib_1.__spread([url], params));
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.processResponse(res); })), catchError(this.handleError));
    };
    /**
     * HTTP DELETE action
     */
    /**
     * HTTP DELETE action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    RestUtil.prototype.delete = /**
     * HTTP DELETE action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    function (url) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var resourceUrl = this.buildUrl.apply(this, tslib_1.__spread([url], params));
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.processResponse(res); })), catchError(this.handleError));
    };
    /**
     * Construct URL with parameters
     */
    /**
     * Construct URL with parameters
     * @private
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    RestUtil.prototype.buildUrl = /**
     * Construct URL with parameters
     * @private
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    function (url) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return (params === null) ? url : (params.length === 0) ? url : "" + url + (params && params.length > 0 ? '?' + params.join('&') : '');
    };
    /**
     * Process the response, extract and refresh access token and return the body
     */
    /**
     * Process the response, extract and refresh access token and return the body
     * @private
     * @param {?} response
     * @return {?}
     */
    RestUtil.prototype.processResponse = /**
     * Process the response, extract and refresh access token and return the body
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        if (response.status === 401) {
            LocalStorageUtil.removeToken();
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
        /** @type {?} */
        var accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            LocalStorageUtil.setToken(accessToken);
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    };
    /**
     * Error handling
     */
    /**
     * Error handling
     * @private
     * @param {?} error
     * @return {?}
     */
    RestUtil.prototype.handleError = /**
     * Error handling
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    };
    RestUtil.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RestUtil.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return RestUtil;
}());
export { RestUtil };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJ1dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDLENBQUUsaUNBQWlDOztBQUNoSCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUt4RDtJQU1FOztPQUVHO0lBQ0gsa0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7O1FBTDVCLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUtwQyxDQUFDO0lBRXpDOztPQUVHOzs7Ozs7O0lBQ0gsMkJBQVE7Ozs7OztJQUFSLFVBQVMsR0FBVztRQUFFLGdCQUFtQjthQUFuQixVQUFtQixFQUFuQixxQkFBbUIsRUFBbkIsSUFBbUI7WUFBbkIsK0JBQW1COzs7WUFDakMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLE9BQWIsSUFBSSxvQkFBVSxHQUFHLEdBQUssTUFBTSxFQUFDO1FBQ2pELDRGQUE0RjtRQUM1RixzREFBc0Q7UUFFdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFJOztnQkFDakUsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQzs7Z0JBQzlDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdB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LENBQUMsQ0FBQztTQUMxRDs7O1lBSUssV0FBVyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1FBRTFELElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3RELGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsRTtRQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSyw4QkFBVzs7Ozs7O0lBQW5CLFVBQW9CLEtBQVU7UUFDNUIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBM0hGLFVBQVU7Ozs7Z0JBUEYsVUFBVTs7SUFtSW5CLGVBQUM7Q0FBQSxBQTVIRCxJQTRIQztTQTNIWSxRQUFROzs7Ozs7SUFHbkIsMkJBQTRFOzs7OztJQUtoRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnOyAgLy8gcmVwbGFjZXMgcHJldmlvdXMgSHR0cCBzZXJ2aWNlXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBMb2NhbFN0b3JhZ2VVdGlsIGZyb20gJy4vbG9jYWxTdG9yYWdlLXV0aWwnO1xuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGFsbCBSRVNUIHNlcnZpY2VzIHdpdGggY29tbW9uIGZ1bmN0aW9uc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzdFV0aWwge1xuXG4gIC8vIFNldCBoZWFkZXJzXG4gIHByaXZhdGUgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igd2l0aCBpbmplY3RlZCBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZCBpcyBIVFRQIEdFVCBhY3Rpb24gYnV0IHRoZSBjb250ZW50IGlzIGJsb2JcbiAgICovXG4gIGRvd25sb2FkKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChyZXNvdXJjZVVybCwge3Jlc3BvbnNlVHlwZTogJ2Jsb2InfSkubWFwKHJlcyA9PiAoe2NvbnRlbnQ6IHJlcy5ib2R5LFxuICAgIC8vICAgZmlsZU5hbWU6IHJlcy5oZWFkZXJzLmdldCgnY29udGVudC1maWxlbmFtZScpfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocmVzb3VyY2VVcmwsIHtyZXNwb25zZVR5cGU6ICdibG9iJ30pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZG93bmxvYWRVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSBkb3dubG9hZFVSTDtcbiAgICAgIGxpbmsuZG93bmxvYWQgPSAnZmlsZW5hbWUuZXh0JztcbiAgICAgIGxpbmsuY2xpY2soKTtcbiAgICB9KTtcblxuICB9XG4gIFxuICAvKipcbiAgICogSFRUUCBHRVQgYWN0aW9uXG4gICAqL1xuICBnZXQodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQocmVzb3VyY2VVcmwsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSxcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBQT1NUIGFjdGlvblxuICAgKi9cbiAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdChyZXNvdXJjZVVybCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhUVFAgUFVUIGFjdGlvblxuICAgKi9cbiAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQocmVzb3VyY2VVcmwsIGJvZHksIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIVFRQIERFTEVURSBhY3Rpb25cbiAgICovXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZShyZXNvdXJjZVVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBVUkwgd2l0aCBwYXJhbWV0ZXJzXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkVXJsKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIChwYXJhbXMgPT09IG51bGwpID8gdXJsIDogKHBhcmFtcy5sZW5ndGggPT09IDApID8gdXJsIDogYCR7dXJsfSR7cGFyYW1zICYmIHBhcmFtcy5sZW5ndGggPiAwID8gJz8nK3BhcmFtcy5qb2luKCcmJykgOiAnJ31gO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgdGhlIHJlc3BvbnNlLCBleHRyYWN0IGFuZCByZWZyZXNoIGFjY2VzcyB0b2tlbiBhbmQgcmV0dXJuIHRoZSBib2R5XG4gICAqL1xuICBwcml2YXRlIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4pIHtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgTG9jYWxTdG9yYWdlVXRpbC5yZW1vdmVUb2tlbigpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY2Nlc3MgZGVuaWVkLCByZXNldCB0b2tlbjogJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSFRUUCBzdGF0dXMgZXJyb3I6ICcgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cblxuICAgIC8vIEdldCBhY2Nlc3MgdG9rZW4gZnJvbSBoZWFkZXIgYW5kIHVwZGF0ZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLUFDQ0VTUy1UT0tFTicpO1xuXG4gICAgaWYgKChhY2Nlc3NUb2tlbiAhPT0gbnVsbCkgJiYgKGFjY2Vzc1Rva2VuLmxlbmd0aCA+IDApKSB7XG4gICAgICBMb2NhbFN0b3JhZ2VVdGlsLnNldFRva2VuKGFjY2Vzc1Rva2VuKTtcbiAgICB9IFxuICAgIFxuICAgIGlmIChyZXNwb25zZS5ib2R5ICYmIHJlc3BvbnNlLmJvZHkuY29kZSAmJiByZXNwb25zZS5ib2R5LmNvZGUgIT09IDApIHtcbiAgICAgIHRocm93IHsgY29kZTogcmVzcG9uc2UuYm9keS5jb2RlLCBtZXNzYWdlOiByZXNwb25zZS5ib2R5LmVycm9yIH07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXNwb25zZS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsaW5nXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChlcnJvci5jb2RlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gIH1cbn1cbiJdfQ==