import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { EntityTypeCode } from '../enums/EntityTypeCode';
import { OpenClosedStatusCode } from '../enums/OpenClosedStatusCode';
import * as i0 from "@angular/core";
/**
 * Services for health events queries
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class HealthEventsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Get single health event by id
     * @Return: EntityResponse<HealthEvent>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Find health events by filters
     * @Return: QueryResponse<HealthEvent>
     */
    find(folderId?: string, from?: number, to?: number, source?: EntityTypeCode, openClosed?: OpenClosedStatusCode, entityId?: string[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HealthEventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HealthEventsService>;
}
