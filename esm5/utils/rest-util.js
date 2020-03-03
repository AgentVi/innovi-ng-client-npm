import { __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // replaces previous Http service
import { map, catchError } from 'rxjs/operators';
import * as LocalStorageUtil from './localStorage-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
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
    RestUtil.prototype.download = function (fileName, url) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        var ext = 'json';
        params.forEach(function (p) {
            var arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'format') {
                    ext = arr[1];
                }
            }
        });
        var downloadLink = fileName + '.' + ext;
        return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe(function (data) {
            var downloadURL = window.URL.createObjectURL(data);
            var link = document.createElement('a');
            link.href = downloadURL;
            link.download = downloadLink;
            link.click();
        });
    };
    /**
     * HTTP GET action
     */
    RestUtil.prototype.get = function (url) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * HTTP POST action
     */
    RestUtil.prototype.post = function (url, body) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * HTTP PUT action
     */
    RestUtil.prototype.put = function (url, body) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * HTTP DELETE action
     */
    RestUtil.prototype.delete = function (url) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map(function (res) { return _this.processResponse(res); }), catchError(this.handleError));
    };
    /**
     * Construct URL with parameters
     */
    RestUtil.prototype.buildUrl = function (url) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return (params === null) ? url : (params.length === 0) ? url : "" + url + (params && params.length > 0 ? '?' + params.join('&') : '');
    };
    /**
     * Process the response, extract and refresh access token and return the body
     */
    RestUtil.prototype.processResponse = function (response) {
        if (response.status === 401) {
            LocalStorageUtil.removeToken();
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
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
    RestUtil.prototype.handleError = function (error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    };
    /** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(i0.ɵɵinject(i1.HttpClient)); };
    /** @nocollapse */ RestUtil.ɵprov = i0.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
    return RestUtil;
}());
export { RestUtil };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RestUtil, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJ1dGlscy9yZXN0LXV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWdCLE1BQU0sc0JBQXNCLENBQUMsQ0FBRSxpQ0FBaUM7QUFDaEgsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEtBQUssZ0JBQWdCLE1BQU0scUJBQXFCLENBQUM7OztBQUV4RDs7R0FFRztBQUNIO0lBTUU7O09BRUc7SUFDSCxrQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQU5wQyxjQUFjO1FBQ04sWUFBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBS3BDLENBQUM7SUFFekM7O09BRUc7SUFDSCwyQkFBUSxHQUFSLFVBQVMsUUFBZ0IsRUFBRSxHQUFXO1FBQUUsZ0JBQW1CO2FBQW5CLFVBQW1CLEVBQW5CLHFCQUFtQixFQUFuQixJQUFtQjtZQUFuQiwrQkFBbUI7O1FBQ3pELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLE9BQWIsSUFBSSxZQUFVLEdBQUcsR0FBSyxNQUFNLEVBQUMsQ0FBQztRQUVsRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7WUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxL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O1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztvRUFwSVUsUUFBUTtvREFBUixRQUFRLFdBQVIsUUFBUTttQkFUckI7Q0E4SUMsQUF0SUQsSUFzSUM7U0FySVksUUFBUTtrREFBUixRQUFRO2NBRHBCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnOyAgLy8gcmVwbGFjZXMgcHJldmlvdXMgSHR0cCBzZXJ2aWNlXG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBMb2NhbFN0b3JhZ2VVdGlsIGZyb20gJy4vbG9jYWxTdG9yYWdlLXV0aWwnO1xuXG4vKipcbiAqIFV0aWxpdHkgY2xhc3MgZm9yIGFsbCBSRVNUIHNlcnZpY2VzIHdpdGggY29tbW9uIGZ1bmN0aW9uc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzdFV0aWwge1xuXG4gIC8vIFNldCBoZWFkZXJzXG4gIHByaXZhdGUgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3Igd2l0aCBpbmplY3RlZCBhdXRoZW50aWNhdGlvbiBzZXJ2aWNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZCBpcyBIVFRQIEdFVCBhY3Rpb24gYnV0IHRoZSBjb250ZW50IGlzIGJsb2JcbiAgICovXG4gIGRvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcblxuICAgIGxldCBleHQgPSAnanNvbic7XG4gICAgcGFyYW1zLmZvckVhY2gocCA9PiB7XG4gICAgICBsZXQgYXJyID0gcC5zcGxpdCgnPScpO1xuICAgICAgaWYgKGFyci5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmIChhcnJbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2Zvcm1hdCcpIHtcbiAgICAgICAgICBleHQgPSBhcnJbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBjb25zdCBkb3dubG9hZExpbmsgPSBmaWxlTmFtZSArICcuJyArIGV4dDtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHJlc291cmNlVXJsLCB7cmVzcG9uc2VUeXBlOiAnYmxvYid9KS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGRvd25sb2FkVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZGF0YSk7XG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgbGluay5ocmVmID0gZG93bmxvYWRVUkw7XG4gICAgICBsaW5rLmRvd25sb2FkID0gZG93bmxvYWRMaW5rO1xuICAgICAgbGluay5jbGljaygpO1xuICAgIH0pO1xuXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBIVFRQIEdFVCBhY3Rpb25cbiAgICovXG4gIGdldCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChyZXNvdXJjZVVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpLFxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIVFRQIFBPU1QgYWN0aW9uXG4gICAqL1xuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHJlc291cmNlVXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBQVVQgYWN0aW9uXG4gICAqL1xuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChyZXNvdXJjZVVybCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhUVFAgREVMRVRFIGFjdGlvblxuICAgKi9cbiAgZGVsZXRlKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlKHJlc291cmNlVXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IFVSTCB3aXRoIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgYnVpbGRVcmwodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gKHBhcmFtcyA9PT0gbnVsbCkgPyB1cmwgOiAocGFyYW1zLmxlbmd0aCA9PT0gMCkgPyB1cmwgOiBgJHt1cmx9JHtwYXJhbXMgJiYgcGFyYW1zLmxlbmd0aCA+IDAgPyAnPycrcGFyYW1zLmpvaW4oJyYnKSA6ICcnfWA7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgcmVzcG9uc2UsIGV4dHJhY3QgYW5kIHJlZnJlc2ggYWNjZXNzIHRva2VuIGFuZCByZXR1cm4gdGhlIGJvZHlcbiAgICovXG4gIHByaXZhdGUgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55Pikge1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBMb2NhbFN0b3JhZ2VVdGlsLnJlbW92ZVRva2VuKCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjY2VzcyBkZW5pZWQsIHJlc2V0IHRva2VuOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIHN0YXR1cyBlcnJvcjogJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGFjY2VzcyB0b2tlbiBmcm9tIGhlYWRlciBhbmQgdXBkYXRlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtQUNDRVNTLVRPS0VOJyk7XG5cbiAgICBpZiAoKGFjY2Vzc1Rva2VuICE9PSBudWxsKSAmJiAoYWNjZXNzVG9rZW4ubGVuZ3RoID4gMCkpIHtcbiAgICAgIExvY2FsU3RvcmFnZVV0aWwuc2V0VG9rZW4oYWNjZXNzVG9rZW4pO1xuICAgIH0gXG4gICAgXG4gICAgaWYgKHJlc3BvbnNlLmJvZHkgJiYgcmVzcG9uc2UuYm9keS5jb2RlICYmIHJlc3BvbnNlLmJvZHkuY29kZSAhPT0gMCkge1xuICAgICAgdGhyb3cgeyBjb2RlOiByZXNwb25zZS5ib2R5LmNvZGUsIG1lc3NhZ2U6IHJlc3BvbnNlLmJvZHkuZXJyb3IgfTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxpbmdcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGVycm9yLmNvZGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxufVxuIl19