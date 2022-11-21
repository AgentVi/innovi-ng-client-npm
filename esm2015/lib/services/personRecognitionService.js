import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * List of Person Recognition Services
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class PersonRecognitionService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/person-recognition';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * List static watchlists
     * @Return: ResponseOfStaticWatchlist
     */
    watchlist(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}watchlist`, ...params);
    }
    /**
     * Add provided image of a person as a new POI to the system-internal dynamic watchlist
     * @Return: ResponseOfPoi
     */
    poi(name) {
        return this.rest.post(`${this.baseUrl}poi`, typeof name === 'object' ? JSON.stringify(name) : name);
    }
}
/** @nocollapse */ PersonRecognitionService.ɵfac = function PersonRecognitionService_Factory(t) { return new (t || PersonRecognitionService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ PersonRecognitionService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PersonRecognitionService, factory: PersonRecognitionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PersonRecognitionService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uUmVjb2duaXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9wZXJzb25SZWNvZ25pdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFJMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLEVBQVc7UUFDbkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsR0FBRyxDQUFDLElBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEcsQ0FBQzs7bUhBOUJVLHdCQUF3QixjQVFmLFFBQVE7NkdBUmpCLHdCQUF3QixXQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQURwQyxVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5cblxuLyoqXG4gKiBMaXN0IG9mIFBlcnNvbiBSZWNvZ25pdGlvbiBTZXJ2aWNlc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGVyc29uUmVjb2duaXRpb25TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3BlcnNvbi1yZWNvZ25pdGlvbic7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIExpc3Qgc3RhdGljIHdhdGNobGlzdHNcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlN0YXRpY1dhdGNobGlzdFxuICAgKi9cbiAgd2F0Y2hsaXN0KGlkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChpZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBpZD0ke2lkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9d2F0Y2hsaXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcHJvdmlkZWQgaW1hZ2Ugb2YgYSBwZXJzb24gYXMgYSBuZXcgUE9JIHRvIHRoZSBzeXN0ZW0taW50ZXJuYWwgZHluYW1pYyB3YXRjaGxpc3RcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlBvaVxuICAgKi9cbiAgcG9pKG5hbWU/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfXBvaWAsIHR5cGVvZiBuYW1lID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KG5hbWUpIDogbmFtZSk7XG4gIH1cblxufVxuIl19