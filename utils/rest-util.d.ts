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
     * Download is HTTP GET action but the content is blob
     */
    download(fileName: string, url: string, ...params: string[]): import("rxjs").Subscription;
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
    static ɵfac: i0.ɵɵFactoryDef<RestUtil, never>;
    static ɵprov: i0.ɵɵInjectableDef<RestUtil>;
}
