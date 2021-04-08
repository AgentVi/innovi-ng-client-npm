import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Group } from '../entities/Group';
import * as i0 from "@angular/core";
/**
 * Services for security groups actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class GroupsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new group
     * @Return: EntityResponse<Group>
     */
    create(body?: Group): import("rxjs").Observable<any>;
    /**
     * Update group
     * @Return: EntityResponse<Group>
     */
    update(id?: string, body?: Group): import("rxjs").Observable<any>;
    /**
     * Delete group from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single group by id
     * @Return: EntityResponse<Group>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get groups by list of ids
     * @Return: EntitiesResponse<Group>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find groups by filters
     * @Return: QueryResponse<Group>
     */
    find(search?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDef<GroupsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<GroupsService>;
}
