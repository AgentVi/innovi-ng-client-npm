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
        return this.rest.get(`${this.baseUrl}/watchlist`, ...params);
    }
    /**
     * Add provided image of a person as a new POI to the system-internal dynamic watchlist.
     * The POI can be an already existing POI, identified by the PoiId, or created anew (if the PoiId is empty)
     * If PoiId is not empty, then it must match the ID of an already existing POI.
     * @Return: ResponseOfPoi
     */
    dynamicPoi(body) {
        return this.rest.post(`${this.baseUrl}/dynamic-poi`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Searches the system for POIs matching the provided image in _all_ watchlists.
     * @Return: ResponseOfPoi
     */
    searchForPoiFromImage(base64EncodedJpeg) {
        return this.rest.post(`${this.baseUrl}/search-poi-from-image`, typeof base64EncodedJpeg === 'object' ? JSON.stringify(base64EncodedJpeg) : base64EncodedJpeg);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uUmVjb2duaXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9wZXJzb25SZWNvZ25pdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFLMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsU0FBUyxDQUFDLEVBQVc7UUFDbkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUFFO1FBRTlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxVQUFVLENBQUMsSUFBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9HLENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQkFBcUIsQ0FBQyxpQkFBMEI7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHdCQUF3QixFQUFFLE9BQU8saUJBQWlCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDaEssQ0FBQzs7bUhBeENVLHdCQUF3QixjQVFmLFFBQVE7NkdBUmpCLHdCQUF3QixXQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQURwQyxVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBZGRQb2lSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0FkZFBvaVJlcXVlc3RCb2R5JztcblxuXG4vKipcbiAqIExpc3Qgb2YgUGVyc29uIFJlY29nbml0aW9uIFNlcnZpY2VzXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzb25SZWNvZ25pdGlvblNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvcGVyc29uLXJlY29nbml0aW9uJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogTGlzdCBzdGF0aWMgd2F0Y2hsaXN0c1xuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mU3RhdGljV2F0Y2hsaXN0XG4gICAqL1xuICB3YXRjaGxpc3QoaWQ/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcHJvdmlkZWQgaW1hZ2Ugb2YgYSBwZXJzb24gYXMgYSBuZXcgUE9JIHRvIHRoZSBzeXN0ZW0taW50ZXJuYWwgZHluYW1pYyB3YXRjaGxpc3QuXG4gICAqIFRoZSBQT0kgY2FuIGJlIGFuIGFscmVhZHkgZXhpc3RpbmcgUE9JLCBpZGVudGlmaWVkIGJ5IHRoZSBQb2lJZCwgb3IgY3JlYXRlZCBhbmV3IChpZiB0aGUgUG9pSWQgaXMgZW1wdHkpXG4gICAqIElmIFBvaUlkIGlzIG5vdCBlbXB0eSwgdGhlbiBpdCBtdXN0IG1hdGNoIHRoZSBJRCBvZiBhbiBhbHJlYWR5IGV4aXN0aW5nIFBPSS5cbiAgICogQFJldHVybjogUmVzcG9uc2VPZlBvaVxuICAgKi9cbiAgZHluYW1pY1BvaShib2R5PzogQWRkUG9pUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9keW5hbWljLXBvaWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgdGhlIHN5c3RlbSBmb3IgUE9JcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgaW1hZ2UgaW4gX2FsbF8gd2F0Y2hsaXN0cy5cbiAgICogQFJldHVybjogUmVzcG9uc2VPZlBvaVxuICAgKi9cbiAgc2VhcmNoRm9yUG9pRnJvbUltYWdlKGJhc2U2NEVuY29kZWRKcGVnPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc2VhcmNoLXBvaS1mcm9tLWltYWdlYCwgdHlwZW9mIGJhc2U2NEVuY29kZWRKcGVnID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJhc2U2NEVuY29kZWRKcGVnKSA6IGJhc2U2NEVuY29kZWRKcGVnKTtcbiAgfVxuXG59XG4iXX0=