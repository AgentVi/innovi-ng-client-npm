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
     * Download is HTTP GET action but the content is blob
     * @param {?} fileName
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    download(fileName, url, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        /** @type {?} */
        let ext = 'json';
        params.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => {
            /** @type {?} */
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'format') {
                    ext = arr[1];
                }
            }
        }));
        /** @type {?} */
        const downloadLink = fileName + '.' + ext;
        return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            /** @type {?} */
            const downloadURL = window.URL.createObjectURL(data);
            /** @type {?} */
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = downloadLink;
            link.click();
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJ1dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUMsQ0FBRSxpQ0FBaUM7O0FBQ2hILE9BQU8sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxLQUFLLGdCQUFnQixNQUFNLHFCQUFxQixDQUFDOzs7O0FBTXhELE1BQU0sT0FBTyxRQUFROzs7OztJQVFuQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZOztRQUw1QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFLcEMsQ0FBQzs7Ozs7Ozs7SUFLekMsUUFBUSxDQUFDLFFBQWdCLEVBQUUsR0FBVyxFQUFFLEdBQUcsTUFBZ0I7O2NBQ25ELFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQzs7WUFFN0MsR0FBRyxHQUFHLE1BQU07UUFDaEIsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTs7Z0JBQ2IsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3RCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFBRTtvQkFDckMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDZDthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7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USxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDbkUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsRTtRQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDOzs7Ozs7O0lBS08sV0FBVyxDQUFDLEtBQVU7UUFDNUIsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBcklGLFVBQVU7Ozs7WUFQRixVQUFVOzs7Ozs7O0lBV2pCLDJCQUE0RTs7Ozs7SUFLaEUsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJzsgIC8vIHJlcGxhY2VzIHByZXZpb3VzIEh0dHAgc2VydmljZVxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgTG9jYWxTdG9yYWdlVXRpbCBmcm9tICcuL2xvY2FsU3RvcmFnZS11dGlsJztcblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBhbGwgUkVTVCBzZXJ2aWNlcyB3aXRoIGNvbW1vbiBmdW5jdGlvbnNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc3RVdGlsIHtcblxuICAvLyBTZXQgaGVhZGVyc1xuICBwcml2YXRlIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIHdpdGggaW5qZWN0ZWQgYXV0aGVudGljYXRpb24gc2VydmljZVxuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAvKipcbiAgICogRG93bmxvYWQgaXMgSFRUUCBHRVQgYWN0aW9uIGJ1dCB0aGUgY29udGVudCBpcyBibG9iXG4gICAqL1xuICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG5cbiAgICBsZXQgZXh0ID0gJ2pzb24nO1xuICAgIHBhcmFtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgbGV0IGFyciA9IHAuc3BsaXQoJz0nKTtcbiAgICAgIGlmIChhcnIubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoYXJyWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdmb3JtYXQnKSB7XG4gICAgICAgICAgZXh0ID0gYXJyWzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgY29uc3QgZG93bmxvYWRMaW5rID0gZmlsZU5hbWUgKyAnLicgKyBleHQ7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChyZXNvdXJjZVVybCwge3Jlc3BvbnNlVHlwZTogJ2Jsb2InfSkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBkb3dubG9hZFVSTCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGRhdGEpO1xuICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIGxpbmsuaHJlZiA9IGRvd25sb2FkVVJMO1xuICAgICAgbGluay5kb3dubG9hZCA9IGRvd25sb2FkTGluaztcbiAgICAgIGxpbmsuY2xpY2soKTtcbiAgICB9KTtcblxuICB9XG4gIFxuICAvKipcbiAgICogSFRUUCBHRVQgYWN0aW9uXG4gICAqL1xuICBnZXQodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQocmVzb3VyY2VVcmwsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKSxcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBQT1NUIGFjdGlvblxuICAgKi9cbiAgcG9zdCh1cmw6IHN0cmluZywgYm9keTogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdChyZXNvdXJjZVVybCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhUVFAgUFVUIGFjdGlvblxuICAgKi9cbiAgcHV0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQocmVzb3VyY2VVcmwsIGJvZHksIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxhbnk+KSA9PiB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXMpKSxcbiAgICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIVFRQIERFTEVURSBhY3Rpb25cbiAgICovXG4gIGRlbGV0ZSh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZShyZXNvdXJjZVVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdCBVUkwgd2l0aCBwYXJhbWV0ZXJzXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkVXJsKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIChwYXJhbXMgPT09IG51bGwpID8gdXJsIDogKHBhcmFtcy5sZW5ndGggPT09IDApID8gdXJsIDogYCR7dXJsfSR7cGFyYW1zICYmIHBhcmFtcy5sZW5ndGggPiAwID8gJz8nK3BhcmFtcy5qb2luKCcmJykgOiAnJ31gO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb2Nlc3MgdGhlIHJlc3BvbnNlLCBleHRyYWN0IGFuZCByZWZyZXNoIGFjY2VzcyB0b2tlbiBhbmQgcmV0dXJuIHRoZSBib2R5XG4gICAqL1xuICBwcml2YXRlIHByb2Nlc3NSZXNwb25zZShyZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4pIHtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgTG9jYWxTdG9yYWdlVXRpbC5yZW1vdmVUb2tlbigpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY2Nlc3MgZGVuaWVkLCByZXNldCB0b2tlbjogJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPiA0MDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSFRUUCBzdGF0dXMgZXJyb3I6ICcgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cblxuICAgIC8vIEdldCBhY2Nlc3MgdG9rZW4gZnJvbSBoZWFkZXIgYW5kIHVwZGF0ZSBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdYLUFDQ0VTUy1UT0tFTicpO1xuXG4gICAgaWYgKChhY2Nlc3NUb2tlbiAhPT0gbnVsbCkgJiYgKGFjY2Vzc1Rva2VuLmxlbmd0aCA+IDApKSB7XG4gICAgICBMb2NhbFN0b3JhZ2VVdGlsLnNldFRva2VuKGFjY2Vzc1Rva2VuKTtcbiAgICB9IFxuICAgIFxuICAgIGlmIChyZXNwb25zZS5ib2R5ICYmIHJlc3BvbnNlLmJvZHkuY29kZSAmJiByZXNwb25zZS5ib2R5LmNvZGUgIT09IDApIHtcbiAgICAgIHRocm93IHsgY29kZTogcmVzcG9uc2UuYm9keS5jb2RlLCBtZXNzYWdlOiByZXNwb25zZS5ib2R5LmVycm9yIH07XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXNwb25zZS5ib2R5O1xuICB9XG5cbiAgLyoqXG4gICAqIEVycm9yIGhhbmRsaW5nXG4gICAqL1xuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChlcnJvci5jb2RlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gIH1cbn1cbiJdfQ==