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
     * Searches the system for POIs matching the provided image in _all_ watchlists.
     * @Return: ResponseOfPoi
     */
    searchForPoiFromImage(body) {
        return this.rest.post(`${this.baseUrl}/search-poi-from-image`, typeof body === 'object' ? JSON.stringify(body) : body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uUmVjb2duaXRpb25TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zZXJ2aWNlcy9wZXJzb25SZWNvZ25pdGlvblNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFTMUM7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7O09BRUc7SUFDSCxZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7UUFOaEYsaUJBQWlCO1FBQ1QsWUFBTyxHQUFHLHFCQUFxQixDQUFDO1FBTXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLEVBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEVBQVc7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQkFBcUIsQ0FBQyxJQUF1QztRQUMzRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sWUFBWSxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVEOzs7T0FHRztJQUNILHFCQUFxQixDQUFDLElBQXVDO1FBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUJBQXFCLENBQUMsSUFBdUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFVBQVUsQ0FBQyxJQUF3QjtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sY0FBYyxFQUFFLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVEOzs7T0FHRztJQUNILHFCQUFxQixDQUFDLElBQWlDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyx3QkFBd0IsRUFBRSxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pILENBQUM7O21IQXJFVSx3QkFBd0IsY0FRZixRQUFROzZHQVJqQix3QkFBd0IsV0FBeEIsd0JBQXdCO3VGQUF4Qix3QkFBd0I7Y0FEcEMsVUFBVTs7c0JBU0ksTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuaW1wb3J0IHsgVXBkYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9VcGRhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBEZWxldGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0RlbGV0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5JztcbmltcG9ydCB7IEFkZFBvaVJlcXVlc3RCb2R5IH0gZnJvbSAnLi4vbWVzc2FnZXMvQWRkUG9pUmVxdWVzdEJvZHknO1xuaW1wb3J0IHsgR2V0UG9pRnJvbUltYWdlUmVxdWVzdEJvZHkgfSBmcm9tICcuLi9tZXNzYWdlcy9HZXRQb2lGcm9tSW1hZ2VSZXF1ZXN0Qm9keSc7XG5pbXBvcnQgeyBDcmVhdGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSB9IGZyb20gJy4uL21lc3NhZ2VzL0NyZWF0ZVN0YXRpY1dhdGNobGlzdFJlcXVlc3RCb2R5JztcblxuXG4vKipcbiAqIExpc3Qgb2YgUGVyc29uIFJlY29nbml0aW9uIFNlcnZpY2VzXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJzb25SZWNvZ25pdGlvblNlcnZpY2Uge1xuXG4gIC8vIFVSTCB0byB3ZWIgYXBpXG4gIHByaXZhdGUgYmFzZVVybCA9ICcvcGVyc29uLXJlY29nbml0aW9uJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogR2V0IHdhdGNobGlzdFxuICAgKiBAUmV0dXJuOiBSZXNwb25zZU9mU3RhdGljV2F0Y2hsaXN0XG4gICAqL1xuICBnZXRXYXRjaGxpc3QoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdC8ke2lkfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIExpc3Qgc3lzdGVtIHdhdGNobGlzdHNcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlN0YXRpY1dhdGNobGlzdHNcbiAgICovXG4gIGdldFdhdGNobGlzdHMoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdGApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBzdGF0aWMgd2F0Y2hsaXN0XG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZTdGF0aWNXYXRjaGxpc3RcbiAgICovXG4gIGNyZWF0ZVN0YXRpY1dhdGNoTGlzdChib2R5PzogQ3JlYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS93YXRjaGxpc3RgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdGF0aWMgd2F0Y2hsaXN0XG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZTdGF0aWNXYXRjaGxpc3RcbiAgICovXG4gIHVwZGF0ZVN0YXRpY1dhdGNoTGlzdChib2R5PzogVXBkYXRlU3RhdGljV2F0Y2hsaXN0UmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9L3dhdGNobGlzdGAsIHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KGJvZHkpIDogYm9keSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHN0YXRpYyB3YXRjaGxpc3RcbiAgICogQFJldHVybjogUmVzcG9uc2VPZlN0YXRpY1dhdGNobGlzdFxuICAgKi9cbiAgZGVsZXRlU3RhdGljV2F0Y2hMaXN0KGJvZHk/OiBEZWxldGVTdGF0aWNXYXRjaGxpc3RSZXF1ZXN0Qm9keSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vd2F0Y2hsaXN0YCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHByb3ZpZGVkIGltYWdlIG9mIGEgcGVyc29uIGFzIGEgbmV3IFBPSSB0byB0aGUgc3lzdGVtLWludGVybmFsIGR5bmFtaWMgd2F0Y2hsaXN0LlxuICAgKiBUaGUgUE9JIGNhbiBiZSBhbiBhbHJlYWR5IGV4aXN0aW5nIFBPSSwgaWRlbnRpZmllZCBieSB0aGUgUG9pSWQsIG9yIGNyZWF0ZWQgYW5ldyAoaWYgdGhlIFBvaUlkIGlzIGVtcHR5KVxuICAgKiBJZiBQb2lJZCBpcyBub3QgZW1wdHksIHRoZW4gaXQgbXVzdCBtYXRjaCB0aGUgSUQgb2YgYW4gYWxyZWFkeSBleGlzdGluZyBQT0kuXG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZQb2lcbiAgICovXG4gIGR5bmFtaWNQb2koYm9keT86IEFkZFBvaVJlcXVlc3RCb2R5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vZHluYW1pYy1wb2lgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIHRoZSBzeXN0ZW0gZm9yIFBPSXMgbWF0Y2hpbmcgdGhlIHByb3ZpZGVkIGltYWdlIGluIF9hbGxfIHdhdGNobGlzdHMuXG4gICAqIEBSZXR1cm46IFJlc3BvbnNlT2ZQb2lcbiAgICovXG4gIHNlYXJjaEZvclBvaUZyb21JbWFnZShib2R5PzogR2V0UG9pRnJvbUltYWdlUmVxdWVzdEJvZHkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS9zZWFyY2gtcG9pLWZyb20taW1hZ2VgLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbn1cbiJdfQ==