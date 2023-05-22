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
}
/** @nocollapse */ PersonRecognitionService.ɵfac = function PersonRecognitionService_Factory(t) { return new (t || PersonRecognitionService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ PersonRecognitionService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PersonRecognitionService, factory: PersonRecognitionService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PersonRecognitionService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uUmVjb2duaXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9wZXJzb25SZWNvZ25pdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFZMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLEVBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEVBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQkFBcUIsQ0FBQyxJQUF1QztRQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdB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LENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZSxDQUFDLEVBQVc7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7O21IQXJIVSx3QkFBd0IsY0FRZixRQUFROzZHQVJqQix3QkFBd0IsV0FBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgQWRkUG9pVG9TdGF0aWNXYXRjaExpc3RzUmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9BZGRQb2lUb1N0YXRpY1dhdGNoTGlzdHNSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBSZW1vdmVQb2lGcm9tU3lzdGVtV2F0Y2hMaXN0UmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9SZW1vdmVQb2lGcm9tU3lzdGVtV2F0Y2hMaXN0UmVxdWVzdEJvZHknO1xuaW1wb3J0IHsgQ3JlYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9DcmVhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBVcGRhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL1VwZGF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5JztcbmltcG9ydCB7IEFkZFBvaVJlcXVlc3RCb2R5IH0gZnJvbSAnLi4vbWVzc2FnZXMvQWRkUG9pUmVxdWVzdEJvZHknO1xuaW1wb3J0IHsgVXBkYXRlRHluYW1pY1BvaVJlcXVlc3RCb2R5IH0gZnJvbSAnLi4vbWVzc2FnZXMvVXBkYXRlRHluYW1pY1BvaVJlcXVlc3RCb2R5JztcbmltcG9ydCB7IFVwZGF0ZVN0YXRpY1BvaVJlcXVlc3RCb2R5IH0gZnJvbSAnLi4vbWVzc2FnZXMvVXBkYXRlU3RhdGljUG9pUmVxdWVzdEJvZHknO1xuaW1wb3J0IHsgR2V0UG9pRnJvbUltYWdlUmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9HZXRQb2lGcm9tSW1hZ2VSZXF1ZXN0Qm9keSc7XG5cblxuLyoqXG4gKiBMaXN0IG9mIFBlcnNvbiBSZWNvZ25pdGlvbiBTZXJ2aWNlc1xuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChwb3J0YWwpXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFDQ0VTUy1UT0tFTiBUaGUgdG9rZW4gdG8gaWRlbnRpZnkgdGhlIGxvZ2dlZC1pbiB1c2VyIFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGVyc29uUmVjb2duaXRpb25TZXJ2aWNlIHtcblxuICAvLyBVUkwgdG8gd2ViIGFwaVxuICBwcml2YXRlIGJhc2VVcmwgPSAnL3BlcnNvbi1yZWNvZ25pdGlvbic7XG5cbiAgLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdjb25maWcnKSBwcml2YXRlIGNvbmZpZzogQ29yZUNvbmZpZywgcHJpdmF0ZSByZXN0OiBSZXN0VXRpbCkge1xuICAgIHRoaXMuYmFzZVVybCA9IHRoaXMuY29uZmlnLmFwaSArIHRoaXMuYmFzZVVybDtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEdldCB3YXRjaGxpc3RcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlN0YXRpY1dhdGNobGlzdFxuICAgKi9cbiAgZ2V0V2F0Y2hsaXN0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS93YXRjaGxpc3QvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0IHN5c3RlbSB3YXRjaGxpc3RzXG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZTdGF0aWNXYXRjaGxpc3RzXG4gICAqL1xuICBnZXRXYXRjaGxpc3RzKGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS93YXRjaGxpc3RgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgc3RhdGljIHdhdGNobGlzdFxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mU3RhdGljV2F0Y2hsaXN0XG4gICAqL1xuICBjcmVhdGVTdGF0aWNXYXRjaExpc3QoYm9keT86IENyZWF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3RhdGljIHdhdGNobGlzdFxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mU3RhdGljV2F0Y2hsaXN0XG4gICAqL1xuICB1cGRhdGVTdGF0aWNXYXRjaExpc3QoYm9keT86IFVwZGF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS93YXRjaGxpc3RgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBzdGF0aWMgd2F0Y2hsaXN0XG4gICAqIEBSZXR1cm46IFJlc3BvbnNlRGVsZXRlU3RhdGljV2F0Y2hsaXN0XG4gICAqL1xuICBkZWxldGVTdGF0aWNXYXRjaExpc3QoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdC8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBwcm92aWRlZCBpbWFnZSBvZiBhIHBlcnNvbiBhcyBhIG5ldyBQT0kgdG8gdGhlIHN5c3RlbS1pbnRlcm5hbCBkeW5hbWljIHdhdGNobGlzdC5cbiAgICogVGhlIFBPSSBjYW4gYmUgYW4gYWxyZWFkeSBleGlzdGluZyBQT0ksIGlkZW50aWZpZWQgYnkgdGhlIFBvaUlkLCBvciBjcmVhdGVkIGFuZXcgKGlmIHRoZSBQb2lJZCBpcyBlbXB0eSlcbiAgICogSWYgUG9pSWQgaXMgbm90IGVtcHR5LCB0aGVuIGl0IG11c3QgbWF0Y2ggdGhlIElEIG9mIGFuIGFscmVhZHkgZXhpc3RpbmcgUE9JLlxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mUG9pXG4gICAqL1xuICBkeW5hbWljUG9pKGJvZHk/OiBBZGRQb2lSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L2R5bmFtaWMtcG9pYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgYSBQT0kgdGhhdCdzIGluY2x1ZGVkIGluIGEgc3lzdGVtLWludGVybmFsIGR5bmFtaWMgd2F0Y2hsaXN0XG4gICAqIEBSZXR1cm46IFJlc3BvbnNlVXBkYXRlUG9pXG4gICAqL1xuICB1cGRhdGVEeW5hbWljUG9pKGJvZHk/OiBVcGRhdGVEeW5hbWljUG9pUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L2R5bmFtaWMtcG9pYCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBQT0lcbiAgICogQFJldHVybjogUmVzcG9uc2VHZXRQb2lcbiAgICovXG4gIGdldFBvaShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vcG9pLyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGEgUE9JIHRoYXQgb3duIG9uZSBvciBtb3JlIHN0YXRpYyB3YXRjaGxpc3QocylcbiAgICogQFJldHVybjogUmVzcG9uc2VVcGRhdGVQb2lcbiAgICovXG4gIHVwZGF0ZVN0YXRpY1BvaShib2R5PzogVXBkYXRlU3RhdGljUG9pUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3BvaWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgdGhlIHN5c3RlbSBmb3IgUE9JcyBtYXRjaGluZyB0aGUgcHJvdmlkZWQgaW1hZ2UgaW4gX2FsbF8gd2F0Y2hsaXN0cy5cbiAgICogQFJldHVybjogUmVzcG9uc2VPZlBvaVxuICAgKi9cbiAgc2VhcmNoRm9yUG9pRnJvbUltYWdlKGJvZHk/OiBHZXRQb2lGcm9tSW1hZ2VSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3NlYXJjaC1wb2ktZnJvbS1pbWFnZWAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIFBvaSB0byBzdGF0aWMgd2F0Y2hsaXN0LlxuICAgKiBAUmV0dXJuOiBBZGRQb2lUb1N0YXRpY1dhdGNoTGlzdFJlc3BvbnNlXG4gICAqL1xuICBhZGRQb2lUb1N0YXRpY1dhdGNobGlzdHMoYm9keT86IEFkZFBvaVRvU3RhdGljV2F0Y2hMaXN0c1JlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vcG9pL2FkZC10by1zdGF0aWMtd2F0Y2hsaXN0YCwgdHlwZW9mIGJvZHkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiBib2R5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgUG9pIGZyb20gYSBzeXN0ZW0gd2F0Y2hsaXN0LiBJZiBQb2kgaXMgbm90IGFzc29jaWF0ZWQgdG8gbm8gb3RoZXIgd2F0Y2hsaXN0IHRoZSBQb2kgd2lsbCBiZSBwZXJtYW5lbnRseSBkZWxldGVkLlxuICAgKiBAUmV0dXJuOiBSZW1vdmVQb2lGcm9tU3RhdGljV2F0Y2hMaXN0UmVzcG9uc2VcbiAgICovXG4gIHJlbW92ZVBvaUZyb21TeXN0ZW1XYXRjaGxpc3QoYm9keT86IFJlbW92ZVBvaUZyb21TeXN0ZW1XYXRjaExpc3RSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3BvaS9yZW1vdmUtZnJvbS13YXRjaGxpc3RgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCB3YXRjaGxpc3RcbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZXhwb3J0V2F0Y2hsaXN0KGlkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5kb3dubG9hZChgcGVyc29uLXJlY29nbml0aW9uYCxgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdC9leHBvcnQvJHtpZH1gKTtcbiAgfVxuXG59XG4iXX0=