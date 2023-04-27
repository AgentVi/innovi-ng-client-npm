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
     * @Return: ResponseOfStaticWatchlist
     */
    deleteStaticWatchList(body) {
        return this.rest.delete(`${this.baseUrl}/watchlist`);
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
     * Get a POI
     * @Return: ResponseGetPoi
     */
    getPoi(id) {
        return this.rest.get(`${this.baseUrl}/poi/${id}`);
    }
    /**
     * Get a POI
     * @Return: ResponseGetPoi
     */
    updatePoi(body) {
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
    addPoiToWatchlist(body) {
        return this.rest.post(`${this.baseUrl}/watchlist/add-poi`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Remove Poi from static watchlist. If Poi is not associated to no other watchlist the Poi will be permanently deleted.
     * @Return: RemovePoiFromStaticWatchListResponse
     */
    removePoiFromWatchlist(body) {
        return this.rest.post(`${this.baseUrl}/watchlist/remove-poi`, typeof body === 'object' ? JSON.stringify(body) : body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uUmVjb2duaXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9wZXJzb25SZWNvZ25pdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFZMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLEVBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEVBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQkFBcUIsQ0FBQyxJQUF1QztRQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdB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LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBEZWxldGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0RlbGV0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5JztcbmltcG9ydCB7IEFkZFBvaVJlcXVlc3RCb2R5IH0gZnJvbSAnLi4vbWVzc2FnZXMvQWRkUG9pUmVxdWVzdEJvZHknO1xuaW1wb3J0IHsgVXBkYXRlUG9pUmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9VcGRhdGVQb2lSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBHZXRQb2lGcm9tSW1hZ2VSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0dldFBvaUZyb21JbWFnZVJlcXVlc3RCb2R5JztcbmltcG9ydCB7IEFkZFBvaVRvU3RhdGljV2F0Y2hMaXN0UmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9BZGRQb2lUb1N0YXRpY1dhdGNoTGlzdFJlcXVlc3RCb2R5JztcbmltcG9ydCB7IFJlbW92ZVBvaUZyb21TdGF0aWNXYXRjaExpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL1JlbW92ZVBvaUZyb21TdGF0aWNXYXRjaExpc3RSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBDcmVhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0NyZWF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5JztcbmltcG9ydCB7IFVwZGF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5IH0gZnJvbSAnLi4vbWVzc2FnZXMvVXBkYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHknO1xuXG5cbi8qKlxuICogTGlzdCBvZiBQZXJzb24gUmVjb2duaXRpb24gU2VydmljZXNcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQVBJLUtFWSBUaGUga2V5IHRvIGlkZW50aWZ5IHRoZSBhcHBsaWNhdGlvbiAocG9ydGFsKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBlcnNvblJlY29nbml0aW9uU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9wZXJzb24tcmVjb2duaXRpb24nO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBHZXQgd2F0Y2hsaXN0XG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZTdGF0aWNXYXRjaGxpc3RcbiAgICovXG4gIGdldFdhdGNobGlzdChpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBzeXN0ZW0gd2F0Y2hsaXN0c1xuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mU3RhdGljV2F0Y2hsaXN0c1xuICAgKi9cbiAgZ2V0V2F0Y2hsaXN0cyhpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0YCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHN0YXRpYyB3YXRjaGxpc3RcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlN0YXRpY1dhdGNobGlzdFxuICAgKi9cbiAgY3JlYXRlU3RhdGljV2F0Y2hMaXN0KGJvZHk/OiBDcmVhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0YXRpYyB3YXRjaGxpc3RcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlN0YXRpY1dhdGNobGlzdFxuICAgKi9cbiAgdXBkYXRlU3RhdGljV2F0Y2hMaXN0KGJvZHk/OiBVcGRhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGUgc3RhdGljIHdhdGNobGlzdFxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mU3RhdGljV2F0Y2hsaXN0XG4gICAqL1xuICBkZWxldGVTdGF0aWNXYXRjaExpc3QoYm9keT86IERlbGV0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kZWxldGUoYCR7dGhpcy5iYXNlVXJsfS93YXRjaGxpc3RgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgcHJvdmlkZWQgaW1hZ2Ugb2YgYSBwZXJzb24gYXMgYSBuZXcgUE9JIHRvIHRoZSBzeXN0ZW0taW50ZXJuYWwgZHluYW1pYyB3YXRjaGxpc3QuXG4gICAqIFRoZSBQT0kgY2FuIGJlIGFuIGFscmVhZHkgZXhpc3RpbmcgUE9JLCBpZGVudGlmaWVkIGJ5IHRoZSBQb2lJZCwgb3IgY3JlYXRlZCBhbmV3IChpZiB0aGUgUG9pSWQgaXMgZW1wdHkpXG4gICAqIElmIFBvaUlkIGlzIG5vdCBlbXB0eSwgdGhlbiBpdCBtdXN0IG1hdGNoIHRoZSBJRCBvZiBhbiBhbHJlYWR5IGV4aXN0aW5nIFBPSS5cbiAgICogQFJldHVybjogUmVzcG9uc2VPZlBvaVxuICAgKi9cbiAgZHluYW1pY1BvaShib2R5PzogQWRkUG9pUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9keW5hbWljLXBvaWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGEgUE9JXG4gICAqIEBSZXR1cm46IFJlc3BvbnNlR2V0UG9pXG4gICAqL1xuICBnZXRQb2koaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3BvaS8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIFBPSVxuICAgKiBAUmV0dXJuOiBSZXNwb25zZUdldFBvaVxuICAgKi9cbiAgdXBkYXRlUG9pKGJvZHk/OiBVcGRhdGVQb2lSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vcG9pYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyB0aGUgc3lzdGVtIGZvciBQT0lzIG1hdGNoaW5nIHRoZSBwcm92aWRlZCBpbWFnZSBpbiBfYWxsXyB3YXRjaGxpc3RzLlxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mUG9pXG4gICAqL1xuICBzZWFyY2hGb3JQb2lGcm9tSW1hZ2UoYm9keT86IEdldFBvaUZyb21JbWFnZVJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc2VhcmNoLXBvaS1mcm9tLWltYWdlYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgUG9pIHRvIHN0YXRpYyB3YXRjaGxpc3QuXG4gICAqIEBSZXR1cm46IEFkZFBvaVRvU3RhdGljV2F0Y2hMaXN0UmVzcG9uc2VcbiAgICovXG4gIGFkZFBvaVRvV2F0Y2hsaXN0KGJvZHk/OiBBZGRQb2lUb1N0YXRpY1dhdGNoTGlzdFJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0L2FkZC1wb2lgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBQb2kgZnJvbSBzdGF0aWMgd2F0Y2hsaXN0LiBJZiBQb2kgaXMgbm90IGFzc29jaWF0ZWQgdG8gbm8gb3RoZXIgd2F0Y2hsaXN0IHRoZSBQb2kgd2lsbCBiZSBwZXJtYW5lbnRseSBkZWxldGVkLlxuICAgKiBAUmV0dXJuOiBSZW1vdmVQb2lGcm9tU3RhdGljV2F0Y2hMaXN0UmVzcG9uc2VcbiAgICovXG4gIHJlbW92ZVBvaUZyb21XYXRjaGxpc3QoYm9keT86IFJlbW92ZVBvaUZyb21TdGF0aWNXYXRjaExpc3RSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdC9yZW1vdmUtcG9pYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG59XG4iXX0=