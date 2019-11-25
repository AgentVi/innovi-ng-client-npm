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
     * @param {?} fileName
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    RestUtil.prototype.download = /**
     * Download is HTTP GET action but the content is blob
     * @param {?} fileName
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    function (fileName, url) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        /** @type {?} */
        var resourceUrl = this.buildUrl.apply(this, tslib_1.__spread([url], params));
        /** @type {?} */
        var ext = 'json';
        params.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            /** @type {?} */
            var arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'format') {
                    ext = arr[1];
                }
            }
        }));
        /** @type {?} */
        var downloadLink = fileName + '.' + ext;
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
            link.download = downloadLink;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJ1dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFnQixNQUFNLHNCQUFzQixDQUFDLENBQUUsaUNBQWlDOztBQUNoSCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxxQkFBcUIsQ0FBQzs7OztBQUt4RDtJQU1FOztPQUVHO0lBQ0gsa0JBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7O1FBTDVCLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUtwQyxDQUFDO0lBRXpDOztPQUVHOzs7Ozs7OztJQUNILDJCQUFROzs7Ozs7O0lBQVIsVUFBUyxRQUFnQixFQUFFLEdBQVc7UUFBRSxnQkFBbUI7YUFBbkIsVUFBbUIsRUFBbkIscUJBQW1CLEVBQW5CLElBQW1CO1lBQW5CLCtCQUFtQjs7O1lBQ25ELFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxPQUFiLElBQUksb0JBQVUsR0FBRyxHQUFLLE1BQU0sRUFBQzs7WUFFN0MsR0FBRyxHQUFHLE1BQU07UUFDaEIsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLENBQUM7O2dCQUNWLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUN0QixJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLEVBQUU7b0JBQ3JDLEdB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Q0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBcklGLFVBQVU7Ozs7Z0JBUEYsVUFBVTs7SUE2SW5CLGVBQUM7Q0FBQSxBQXRJRCxJQXNJQztTQXJJWSxRQUFROzs7Ozs7SUFHbkIsMkJBQTRFOzs7OztJQUtoRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnOyAgLy8gcmVwbGFjZXMgcHJldmlvdXMgSHR0cCBzZXJ2aWNlXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBMb2NhbFN0b3JhZ2VVdGlsIGZyb20gJy4vbG9jYWxTdG9yYWdlLXV0aWwnO1xuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGFsbCBSRVNUIHNlcnZpY2VzIHdpdGggY29tbW9uIGZ1bmN0aW9uc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzdFV0aWwge1xuXG4gIC8vIFNldCBoZWFkZXJzXG4gIHByaXZhdGUgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igd2l0aCBpbmplY3RlZCBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZCBpcyBIVFRQIEdFVCBhY3Rpb24gYnV0IHRoZSBjb250ZW50IGlzIGJsb2JcbiAgICovXG4gIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcblxuICAgIGxldCBleHQgPSAnanNvbic7XG4gICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICBsZXQgYXJyID0gcC5zcGxpdCgnPScpO1xuICAgICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChhcnJbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2Zvcm1hdCcpIHtcbiAgICAgICAgICBleHQgPSBhcnJbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBkb3dubG9hZExpbmsgPSBmaWxlTmFtZSArICcuJyArIGV4dDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHJlc291cmNlVXJsLCB7cmVzcG9uc2VUeXBlOiAnYmxvYid9KS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGRvd25sb2FkVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgbGluay5ocmVmID0gZG93bmxvYWRVUkw7XG4gICAgICBsaW5rLmRvd25sb2FkID0gZG93bmxvYWRMaW5rO1xuICAgICAgbGluay5jbGljaygpO1xuICAgIH0pO1xuXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBIVFRQIEdFVCBhY3Rpb25cbiAgICovXG4gIGdldCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChyZXNvdXJjZVVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpLFxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIVFRQIFBPU1QgYWN0aW9uXG4gICAqL1xuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHJlc291cmNlVXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBQVVQgYWN0aW9uXG4gICAqL1xuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChyZXNvdXJjZVVybCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhUVFAgREVMRVRFIGFjdGlvblxuICAgKi9cbiAgZGVsZXRlKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlKHJlc291cmNlVXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IFVSTCB3aXRoIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgYnVpbGRVcmwodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gKHBhcmFtcyA9PT0gbnVsbCkgPyB1cmwgOiAocGFyYW1zLmxlbmd0aCA9PT0gMCkgPyB1cmwgOiBgJHt1cmx9JHtwYXJhbXMgJiYgcGFyYW1zLmxlbmd0aCA+IDAgPyAnPycrcGFyYW1zLmpvaW4oJyYnKSA6ICcnfWA7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgcmVzcG9uc2UsIGV4dHJhY3QgYW5kIHJlZnJlc2ggYWNjZXNzIHRva2VuIGFuZCByZXR1cm4gdGhlIGJvZHlcbiAgICovXG4gIHByaXZhdGUgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55Pikge1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBMb2NhbFN0b3JhZ2VVdGlsLnJlbW92ZVRva2VuKCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjY2VzcyBkZW5pZWQsIHJlc2V0IHRva2VuOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIHN0YXR1cyBlcnJvcjogJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGFjY2VzcyB0b2tlbiBmcm9tIGhlYWRlciBhbmQgdXBkYXRlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtQUNDRVNTLVRPS0VOJyk7XG5cbiAgICBpZiAoKGFjY2Vzc1Rva2VuICE9PSBudWxsKSAmJiAoYWNjZXNzVG9rZW4ubGVuZ3RoID4gMCkpIHtcbiAgICAgIExvY2FsU3RvcmFnZVV0aWwuc2V0VG9rZW4oYWNjZXNzVG9rZW4pO1xuICAgIH0gXG4gICAgXG4gICAgaWYgKHJlc3BvbnNlLmJvZHkgJiYgcmVzcG9uc2UuYm9keS5jb2RlICYmIHJlc3BvbnNlLmJvZHkuY29kZSAhPT0gMCkge1xuICAgICAgdGhyb3cgeyBjb2RlOiByZXNwb25zZS5ib2R5LmNvZGUsIG1lc3NhZ2U6IHJlc3BvbnNlLmJvZHkuZXJyb3IgfTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxpbmdcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGVycm9yLmNvZGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxufVxuIl19