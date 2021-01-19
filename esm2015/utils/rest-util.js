import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'; // replaces previous Http service
import { map, catchError } from 'rxjs/operators';
import * as LocalStorageUtil from './localStorage-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * Utility class for all REST services with common functions
 */
export class RestUtil {
    /**
     * Constructor with injected authentication service
     */
    constructor(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Upload is HTTP POST action but the body is File object
     */
    upload(file, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        const formData = new FormData();
        formData.append('fileKey', file, file.name);
        const req = new HttpRequest('POST', resourceUrl, formData, {
            reportProgress: false,
            responseType: 'json',
        });
        return this.http.request(req);
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        if (!fileName) {
            fileName = 'download';
        }
        let downloadLink = fileName;
        console.log('download', fileName, params);
        // extract format and file name
        /*
        if (fileName.indexOf('.') > 0) {
          downloadLink = fileName;
        } else {
          let ext = 'json';
          let fn = fileName;
          params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
              if (arr[0].toLowerCase() === 'format') {
                ext = arr[1];
              }
              if (arr[0].toLowerCase() === 'filename') {
                fn = arr[1];
              }
            }
          });
          downloadLink = fn + '.' + ext;
        }
        */
        return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe((data) => {
            const downloadURL = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = downloadLink;
            console.log('downloadURL', downloadURL);
            console.log('downloadLink', downloadLink);
            link.click();
        });
    }
    /**
     * HTTP GET action
     */
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP POST action
     */
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP PUT action
     */
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP DELETE action
     */
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * Construct URL with parameters
     */
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    /**
     * Process the response, extract and refresh access token and return the body
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
     */
    handleError(error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    }
}
/** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(i0.ɵɵinject(i1.HttpClient)); };
/** @nocollapse */ RestUtil.ɵprov = i0.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RestUtil, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC11dGlsLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbInV0aWxzL3Jlc3QtdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxzQkFBc0IsQ0FBQyxDQUFFLGlDQUFpQztBQUM3SCxPQUFPLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sS0FBSyxnQkFBZ0IsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXhEOztHQUVHO0FBRUgsTUFBTSxPQUFPLFFBQVE7SUFLbkI7O09BRUc7SUFDSCxZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBTnBDLGNBQWM7UUFDTixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFLcEMsQ0FBQztJQUV6Qzs7T0FFRztJQUNILE1BQU0sQ0FBQyxJQUFVLEVBQUUsR0FBVyxFQUFFLEdBQUcsTUFBZ0I7UUFFakQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUVsRCxNQUFNLFFBQVEsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUU7WUFDekQsY0FBYyxFQUFFLEtBQUs7WUFDckIsWUFBWSxFQUFFLE1BQU07U0FDckIsQ0FBQyxDQUFDO1FB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TSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7bUZBektVLFFBQVE7bUVBQVIsUUFBUSxXQUFSLFFBQVE7a0RBQVIsUUFBUTtjQURwQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXF1ZXN0LCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7ICAvLyByZXBsYWNlcyBwcmV2aW91cyBIdHRwIHNlcnZpY2VcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIExvY2FsU3RvcmFnZVV0aWwgZnJvbSAnLi9sb2NhbFN0b3JhZ2UtdXRpbCc7XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyBmb3IgYWxsIFJFU1Qgc2VydmljZXMgd2l0aCBjb21tb24gZnVuY3Rpb25zXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0VXRpbCB7XG5cbiAgLy8gU2V0IGhlYWRlcnNcbiAgcHJpdmF0ZSBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciB3aXRoIGluamVjdGVkIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgLyoqXG4gICAqIFVwbG9hZCBpcyBIVFRQIFBPU1QgYWN0aW9uIGJ1dCB0aGUgYm9keSBpcyBGaWxlIG9iamVjdFxuICAgKi9cbiAgdXBsb2FkKGZpbGU6IEZpbGUsIHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG5cbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuXG4gICAgY29uc3QgZm9ybURhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlS2V5JywgZmlsZSwgZmlsZS5uYW1lKTtcblxuICAgIGNvbnN0IHJlcSA9IG5ldyBIdHRwUmVxdWVzdCgnUE9TVCcsIHJlc291cmNlVXJsLCBmb3JtRGF0YSwge1xuICAgICAgcmVwb3J0UHJvZ3Jlc3M6IGZhbHNlLFxuICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5yZXF1ZXN0KHJlcSk7XG4gIH1cblxuICAvKipcbiAgICogRG93bmxvYWQgaXMgSFRUUCBHRVQgYWN0aW9uIGJ1dCB0aGUgY29udGVudCBpcyBibG9iXG4gICAqL1xuICBkb3dubG9hZChmaWxlTmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG5cbiAgICBpZiAoIWZpbGVOYW1lKSB7XG4gICAgICBmaWxlTmFtZSA9ICdkb3dubG9hZCc7XG4gICAgfVxuICAgIGxldCBkb3dubG9hZExpbmsgPSBmaWxlTmFtZVxuXG4gICAgY29uc29sZS5sb2coJ2Rvd25sb2FkJywgZmlsZU5hbWUsIHBhcmFtcyk7XG5cbiAgICAvLyBleHRyYWN0IGZvcm1hdCBhbmQgZmlsZSBuYW1lXG4gICAgLypcbiAgICBpZiAoZmlsZU5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgZG93bmxvYWRMaW5rID0gZmlsZU5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBleHQgPSAnanNvbic7XG4gICAgICBsZXQgZm4gPSBmaWxlTmFtZTtcbiAgICAgIHBhcmFtcy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICBsZXQgYXJyID0gcC5zcGxpdCgnPScpO1xuICAgICAgICBpZiAoYXJyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBpZiAoYXJyWzBdLnRvTG93ZXJDYXNlKCkgPT09ICdmb3JtYXQnKSB7XG4gICAgICAgICAgICBleHQgPSBhcnJbMV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhcnJbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2ZpbGVuYW1lJykge1xuICAgICAgICAgICAgZm4gPSBhcnJbMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvd25sb2FkTGluayA9IGZuICsgJy4nICsgZXh0O1xuICAgIH1cbiAgICAqL1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocmVzb3VyY2VVcmwsIHtyZXNwb25zZVR5cGU6ICdibG9iJ30pLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgZG93bmxvYWRVUkwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChkYXRhKTtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICBsaW5rLmhyZWYgPSBkb3dubG9hZFVSTDtcbiAgICAgIGxpbmsuZG93bmxvYWQgPSBkb3dubG9hZExpbms7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZFVSTCcsIGRvd25sb2FkVVJMKTtcbiAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZExpbmsnLCBkb3dubG9hZExpbmspO1xuXG4gICAgICBsaW5rLmNsaWNrKCk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBIVFRQIEdFVCBhY3Rpb25cbiAgICovXG4gIGdldCh1cmw6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChyZXNvdXJjZVVybCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpLFxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIVFRQIFBPU1QgYWN0aW9uXG4gICAqL1xuICBwb3N0KHVybDogc3RyaW5nLCBib2R5OiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICBjb25zdCByZXNvdXJjZVVybCA9IHRoaXMuYnVpbGRVcmwodXJsLCAuLi5wYXJhbXMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHJlc291cmNlVXJsLCBib2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSFRUUCBQVVQgYWN0aW9uXG4gICAqL1xuICBwdXQodXJsOiBzdHJpbmcsIGJvZHk6IHN0cmluZywgLi4ucGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gdGhpcy5idWlsZFVybCh1cmwsIC4uLnBhcmFtcyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChyZXNvdXJjZVVybCwgYm9keSwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlcykpLFxuICAgICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEhUVFAgREVMRVRFIGFjdGlvblxuICAgKi9cbiAgZGVsZXRlKHVybDogc3RyaW5nLCAuLi5wYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSB0aGlzLmJ1aWxkVXJsKHVybCwgLi4ucGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlKHJlc291cmNlVXJsLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8YW55PikgPT4gdGhpcy5wcm9jZXNzUmVzcG9uc2UocmVzKSksXG4gICAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcilcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uc3RydWN0IFVSTCB3aXRoIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgYnVpbGRVcmwodXJsOiBzdHJpbmcsIC4uLnBhcmFtczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gKHBhcmFtcyA9PT0gbnVsbCkgPyB1cmwgOiAocGFyYW1zLmxlbmd0aCA9PT0gMCkgPyB1cmwgOiBgJHt1cmx9JHtwYXJhbXMgJiYgcGFyYW1zLmxlbmd0aCA+IDAgPyAnPycrcGFyYW1zLmpvaW4oJyYnKSA6ICcnfWA7XG4gIH1cblxuICAvKipcbiAgICogUHJvY2VzcyB0aGUgcmVzcG9uc2UsIGV4dHJhY3QgYW5kIHJlZnJlc2ggYWNjZXNzIHRva2VuIGFuZCByZXR1cm4gdGhlIGJvZHlcbiAgICovXG4gIHByaXZhdGUgcHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55Pikge1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICBMb2NhbFN0b3JhZ2VVdGlsLnJlbW92ZVRva2VuKCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjY2VzcyBkZW5pZWQsIHJlc2V0IHRva2VuOiAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA+IDQwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIHN0YXR1cyBlcnJvcjogJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuXG4gICAgLy8gR2V0IGFjY2VzcyB0b2tlbiBmcm9tIGhlYWRlciBhbmQgdXBkYXRlIGF1dGhlbnRpY2F0aW9uIHNlcnZpY2VcblxuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtQUNDRVNTLVRPS0VOJyk7XG5cbiAgICBpZiAoKGFjY2Vzc1Rva2VuICE9PSBudWxsKSAmJiAoYWNjZXNzVG9rZW4ubGVuZ3RoID4gMCkpIHtcbiAgICAgIExvY2FsU3RvcmFnZVV0aWwuc2V0VG9rZW4oYWNjZXNzVG9rZW4pO1xuICAgIH0gXG4gICAgXG4gICAgaWYgKHJlc3BvbnNlLmJvZHkgJiYgcmVzcG9uc2UuYm9keS5jb2RlICYmIHJlc3BvbnNlLmJvZHkuY29kZSAhPT0gMCkge1xuICAgICAgdGhyb3cgeyBjb2RlOiByZXNwb25zZS5ib2R5LmNvZGUsIG1lc3NhZ2U6IHJlc3BvbnNlLmJvZHkuZXJyb3IgfTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlLmJvZHk7XG4gIH1cblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxpbmdcbiAgICovXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGVycm9yLmNvZGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcbiAgfVxufVxuIl19