import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
/**
 * Utility class for all REST services with common functions
 */
export declare class RestUtil {
    private http;
    private headers;
    /**
     * Constructor with injected authentication service
     */
    constructor(http: HttpClient);
    /**
     * Upload is HTTP POST action but the body is File object
     */
    upload(file: File, url: string, ...params: string[]): import("rxjs").Observable<import("@angular/common/http").HttpEvent<unknown>>;
    /**
     * Download is HTTP GET action but the content is blob
     */
    download(fileName: string, url: string, ...params: string[]): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * HTTP GET action
     */
    get(url: string, ...params: string[]): import("rxjs").Observable<any>;
    /**
     * HTTP POST action
     */
    post(url: string, body: string, ...params: string[]): import("rxjs").Observable<any>;
    /**
     * HTTP PUT action
     */
    put(url: string, body: string, ...params: string[]): import("rxjs").Observable<any>;
    /**
     * HTTP DELETE action
     */
    delete(url: string, ...params: string[]): import("rxjs").Observable<any>;
    /**
     * Construct URL with parameters
     */
    private buildUrl;
    /**
     * Process the response, extract and refresh access token and return the body
     */
    private processResponse;
    /**
     * Error handling
     */
    private handleError;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestUtil>;
}
