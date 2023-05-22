import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { AddPoiToStaticWatchListsRequestBody } from '../messages/AddPoiToStaticWatchListsRequestBody';
import { RemovePoiFromSystemWatchListRequestBody } from '../messages/RemovePoiFromSystemWatchListRequestBody';
import { CreateStaticWatchlistRequestBody } from '../messages/CreateStaticWatchlistRequestBody';
import { UpdateStaticWatchlistRequestBody } from '../messages/UpdateStaticWatchlistRequestBody';
import { AddPoiRequestBody } from '../messages/AddPoiRequestBody';
import { UpdateDynamicPoiRequestBody } from '../messages/UpdateDynamicPoiRequestBody';
import { UpdateStaticPoiRequestBody } from '../messages/UpdateStaticPoiRequestBody';
import { GetPoiFromImageRequestBody } from '../messages/GetPoiFromImageRequestBody';
import * as i0 from "@angular/core";
/**
 * List of Person Recognition Services
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class PersonRecognitionService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get watchlist
     * @Return: ResponseOfStaticWatchlist
     */
    getWatchlist(id?: string): import("rxjs").Observable<any>;
    /**
     * List system watchlists
     * @Return: ResponseOfStaticWatchlists
     */
    getWatchlists(id?: string): import("rxjs").Observable<any>;
    /**
     * Create static watchlist
     * @Return: ResponseOfStaticWatchlist
     */
    createStaticWatchList(body?: CreateStaticWatchlistRequestBody): import("rxjs").Observable<any>;
    /**
     * Update static watchlist
     * @Return: ResponseOfStaticWatchlist
     */
    updateStaticWatchList(body?: UpdateStaticWatchlistRequestBody): import("rxjs").Observable<any>;
    /**
     * Delete static watchlist
     * @Return: ResponseDeleteStaticWatchlist
     */
    deleteStaticWatchList(id?: string): import("rxjs").Observable<any>;
    /**
     * Add provided image of a person as a new POI to the system-internal dynamic watchlist.
     * The POI can be an already existing POI, identified by the PoiId, or created anew (if the PoiId is empty)
     * If PoiId is not empty, then it must match the ID of an already existing POI.
     * @Return: ResponseOfPoi
     */
    dynamicPoi(body?: AddPoiRequestBody): import("rxjs").Observable<any>;
    /**
     * Update a POI that's included in a system-internal dynamic watchlist
     * @Return: ResponseUpdatePoi
     */
    updateDynamicPoi(body?: UpdateDynamicPoiRequestBody): import("rxjs").Observable<any>;
    /**
     * Get a POI
     * @Return: ResponseGetPoi
     */
    getPoi(id?: string): import("rxjs").Observable<any>;
    /**
     * Update a POI that own one or more static watchlist(s)
     * @Return: ResponseUpdatePoi
     */
    updateStaticPoi(body?: UpdateStaticPoiRequestBody): import("rxjs").Observable<any>;
    /**
     * Searches the system for POIs matching the provided image in _all_ watchlists.
     * @Return: ResponseOfPoi
     */
    searchForPoiFromImage(body?: GetPoiFromImageRequestBody): import("rxjs").Observable<any>;
    /**
     * Add Poi to static watchlist.
     * @Return: AddPoiToStaticWatchListResponse
     */
    addPoiToStaticWatchlists(body?: AddPoiToStaticWatchListsRequestBody): import("rxjs").Observable<any>;
    /**
     * Remove Poi from a system watchlist. If Poi is not associated to no other watchlist the Poi will be permanently deleted.
     * @Return: RemovePoiFromStaticWatchListResponse
     */
    removePoiFromSystemWatchlist(body?: RemovePoiFromSystemWatchListRequestBody): import("rxjs").Observable<any>;
    /**
     * Export watchlist
     * @Return: StreamContent
     */
    exportWatchlist(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PersonRecognitionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PersonRecognitionService>;
}
