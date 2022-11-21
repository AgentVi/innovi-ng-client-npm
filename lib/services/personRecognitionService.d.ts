import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
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
     * List static watchlists
     * @Return: ResponseOfStaticWatchlist
     */
    watchlist(id?: string): import("rxjs").Observable<any>;
    /**
     * Add provided image of a person as a new POI to the system-internal dynamic watchlist
     * @Return: ResponseOfPoi
     */
    poi(name?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PersonRecognitionService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PersonRecognitionService>;
}
