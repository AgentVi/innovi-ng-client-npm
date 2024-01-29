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
     * Get watchlist
     * @Return: ResponseOfStaticWatchlist
     */
    getWatchlist(id) {
        return this.rest.get(`${this.baseUrl}/watchlist/${id}`);
    }
    /**
     * List system watchlists
     * @Return: ResponseOfStaticWatchlists
     */
    getWatchlists(id) {
        return this.rest.get(`${this.baseUrl}/watchlist`);
    }
    /**
     * Create static watchlist
     * @Return: ResponseOfStaticWatchlist
     */
    createStaticWatchList(body) {
        return this.rest.post(`${this.baseUrl}/watchlist`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update static watchlist
     * @Return: ResponseOfStaticWatchlist
     */
    updateStaticWatchList(body) {
        return this.rest.put(`${this.baseUrl}/watchlist`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete static watchlist
     * @Return: ResponseDeleteStaticWatchlist
     */
    deleteStaticWatchList(id) {
        return this.rest.delete(`${this.baseUrl}/watchlist/${id}`);
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
     * Update a POI that's included in a system-internal dynamic watchlist
     * @Return: ResponseUpdatePoi
     */
    updateDynamicPoi(body) {
        return this.rest.put(`${this.baseUrl}/dynamic-poi`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get a POI
     * @Return: ResponseGetPoi
     */
    getPoi(id) {
        return this.rest.get(`${this.baseUrl}/poi/${id}`);
    }
    /**
     * Update a POI that own one or more static watchlist(s)
     * @Return: ResponseUpdatePoi
     */
    updateStaticPoi(body) {
        return this.rest.put(`${this.baseUrl}/poi`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Searches the system for POIs matching the provided image in _all_ watchlists.
     * @Return: ResponseOfPoi
     */
    searchForPoiFromImage(body) {
        return this.rest.post(`${this.baseUrl}/search-poi-from-image`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Add Poi to static watchlist.
     * @Return: AddPoiToStaticWatchListResponse
     */
    addPoiToStaticWatchlists(body) {
        return this.rest.post(`${this.baseUrl}/poi/add-to-static-watchlist`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Remove Poi from a system watchlist. If Poi is not associated to no other watchlist the Poi will be permanently deleted.
     * @Return: RemovePoiFromStaticWatchListResponse
     */
    removePoiFromSystemWatchlist(body) {
        return this.rest.post(`${this.baseUrl}/poi/remove-from-watchlist`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Export watchlist
     * @Return: StreamContent
     */
    exportWatchlist(id) {
        return this.rest.download(`person-recognition`, `${this.baseUrl}/watchlist/export/${id}`);
    }
    /**
     * Get engine information
     * @Return: EngineInformationResponse
     */
    getEngineInformation() {
        return this.rest.get(`${this.baseUrl}/engine-information`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uUmVjb2duaXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9wZXJzb25SZWNvZ25pdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFZMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLEVBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEVBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQkFBcUIsQ0FBQyxJQUF1QztRQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdB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LENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZSxDQUFDLEVBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixDQUFDLENBQUM7SUFDN0QsQ0FBQzs7bUhBN0hVLHdCQUF3QixjQVFmLFFBQVE7NkdBUmpCLHdCQUF3QixXQUF4Qix3QkFBd0I7dUZBQXhCLHdCQUF3QjtjQURwQyxVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBBZGRQb2lUb1N0YXRpY1dhdGNoTGlzdHNSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0FkZFBvaVRvU3RhdGljV2F0Y2hMaXN0c1JlcXVlc3RCb2R5JztcbmltcG9ydCB7IFJlbW92ZVBvaUZyb21TeXN0ZW1XYXRjaExpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL1JlbW92ZVBvaUZyb21TeXN0ZW1XYXRjaExpc3RSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBDcmVhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0NyZWF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5JztcbmltcG9ydCB7IFVwZGF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5IH0gZnJvbSAnLi4vbWVzc2FnZXMvVXBkYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHknO1xuaW1wb3J0IHsgQWRkUG9pUmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9BZGRQb2lSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBVcGRhdGVEeW5hbWljUG9pUmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9VcGRhdGVEeW5hbWljUG9pUmVxdWVzdEJvZHknO1xuaW1wb3J0IHsgVXBkYXRlU3RhdGljUG9pUmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9VcGRhdGVTdGF0aWNQb2lSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBHZXRQb2lGcm9tSW1hZ2VSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0dldFBvaUZyb21JbWFnZVJlcXVlc3RCb2R5JztcblxuXG4vKipcbiAqIExpc3Qgb2YgUGVyc29uIFJlY29nbml0aW9uIFNlcnZpY2VzXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzb25SZWNvZ25pdGlvblNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvcGVyc29uLXJlY29nbml0aW9uJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHdhdGNobGlzdFxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mU3RhdGljV2F0Y2hsaXN0XG4gICAqL1xuICBnZXRXYXRjaGxpc3QoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdC8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgc3lzdGVtIHdhdGNobGlzdHNcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlN0YXRpY1dhdGNobGlzdHNcbiAgICovXG4gIGdldFdhdGNobGlzdHMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdGApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBzdGF0aWMgd2F0Y2hsaXN0XG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZTdGF0aWNXYXRjaGxpc3RcbiAgICovXG4gIGNyZWF0ZVN0YXRpY1dhdGNoTGlzdChib2R5PzogQ3JlYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS93YXRjaGxpc3RgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdGF0aWMgd2F0Y2hsaXN0XG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZTdGF0aWNXYXRjaGxpc3RcbiAgICovXG4gIHVwZGF0ZVN0YXRpY1dhdGNoTGlzdChib2R5PzogVXBkYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHN0YXRpYyB3YXRjaGxpc3RcbiAgICogQFJldHVybjogUmVzcG9uc2VEZWxldGVTdGF0aWNXYXRjaGxpc3RcbiAgICovXG4gIGRlbGV0ZVN0YXRpY1dhdGNoTGlzdChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHByb3ZpZGVkIGltYWdlIG9mIGEgcGVyc29uIGFzIGEgbmV3IFBPSSB0byB0aGUgc3lzdGVtLWludGVybmFsIGR5bmFtaWMgd2F0Y2hsaXN0LlxuICAgKiBUaGUgUE9JIGNhbiBiZSBhbiBhbHJlYWR5IGV4aXN0aW5nIFBPSSwgaWRlbnRpZmllZCBieSB0aGUgUG9pSWQsIG9yIGNyZWF0ZWQgYW5ldyAoaWYgdGhlIFBvaUlkIGlzIGVtcHR5KVxuICAgKiBJZiBQb2lJZCBpcyBub3QgZW1wdHksIHRoZW4gaXQgbXVzdCBtYXRjaCB0aGUgSUQgb2YgYW4gYWxyZWFkeSBleGlzdGluZyBQT0kuXG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZQb2lcbiAgICovXG4gIGR5bmFtaWNQb2koYm9keT86IEFkZFBvaVJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZHluYW1pYy1wb2lgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBhIFBPSSB0aGF0J3MgaW5jbHVkZWQgaW4gYSBzeXN0ZW0taW50ZXJuYWwgZHluYW1pYyB3YXRjaGxpc3RcbiAgICogQFJldHVybjogUmVzcG9uc2VVcGRhdGVQb2lcbiAgICovXG4gIHVwZGF0ZUR5bmFtaWNQb2koYm9keT86IFVwZGF0ZUR5bmFtaWNQb2lSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vZHluYW1pYy1wb2lgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIFBPSVxuICAgKiBAUmV0dXJuOiBSZXNwb25zZUdldFBvaVxuICAgKi9cbiAgZ2V0UG9pKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9wb2kvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYSBQT0kgdGhhdCBvd24gb25lIG9yIG1vcmUgc3RhdGljIHdhdGNobGlzdChzKVxuICAgKiBAUmV0dXJuOiBSZXNwb25zZVVwZGF0ZVBvaVxuICAgKi9cbiAgdXBkYXRlU3RhdGljUG9pKGJvZHk/OiBVcGRhdGVTdGF0aWNQb2lSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vcG9pYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyB0aGUgc3lzdGVtIGZvciBQT0lzIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBpbWFnZSBpbiBfYWxsXyB3YXRjaGxpc3RzLlxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mUG9pXG4gICAqL1xuICBzZWFyY2hGb3JQb2lGcm9tSW1hZ2UoYm9keT86IEdldFBvaUZyb21JbWFnZVJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc2VhcmNoLXBvaS1mcm9tLWltYWdlYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgUG9pIHRvIHN0YXRpYyB3YXRjaGxpc3QuXG4gICAqIEBSZXR1cm46IEFkZFBvaVRvU3RhdGljV2F0Y2hMaXN0UmVzcG9uc2VcbiAgICovXG4gIGFkZFBvaVRvU3RhdGljV2F0Y2hsaXN0cyhib2R5PzogQWRkUG9pVG9TdGF0aWNXYXRjaExpc3RzUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9wb2kvYWRkLXRvLXN0YXRpYy13YXRjaGxpc3RgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBQb2kgZnJvbSBhIHN5c3RlbSB3YXRjaGxpc3QuIElmIFBvaSBpcyBub3QgYXNzb2NpYXRlZCB0byBubyBvdGhlciB3YXRjaGxpc3QgdGhlIFBvaSB3aWxsIGJlIHBlcm1hbmVudGx5IGRlbGV0ZWQuXG4gICAqIEBSZXR1cm46IFJlbW92ZVBvaUZyb21TdGF0aWNXYXRjaExpc3RSZXNwb25zZVxuICAgKi9cbiAgcmVtb3ZlUG9pRnJvbVN5c3RlbVdhdGNobGlzdChib2R5PzogUmVtb3ZlUG9pRnJvbVN5c3RlbVdhdGNoTGlzdFJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcG9pL3JlbW92ZS1mcm9tLXdhdGNobGlzdGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IHdhdGNobGlzdFxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRXYXRjaGxpc3QoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGBwZXJzb24tcmVjb2duaXRpb25gLGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0L2V4cG9ydC8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbmdpbmUgaW5mb3JtYXRpb25cbiAgICogQFJldHVybjogRW5naW5lSW5mb3JtYXRpb25SZXNwb25zZVxuICAgKi9cbiAgZ2V0RW5naW5lSW5mb3JtYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9lbmdpbmUtaW5mb3JtYXRpb25gKTtcbiAgfVxuXG59XG4iXX0=