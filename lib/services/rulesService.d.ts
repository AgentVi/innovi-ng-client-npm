import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { Rule } from '../entities/Rule';
/**
 * Services for rules actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class RulesService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new rule
     * @Return: EntityResponse<Rule>
     */
    create(body?: Rule): import("rxjs").Observable<any>;
    /**
     * Update rule
     * @Return: EntityResponse<Rule>
     */
    update(id?: string, body?: Rule): import("rxjs").Observable<any>;
    /**
     * Enable list of rules
     * @Return: ActionResponse
     */
    enable(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Disable list of rules
     * @Return: ActionResponse
     */
    disable(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Delete rule from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single rule by id
     * @Return: EntityResponse<Rule>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get rules by list of ids
     * @Return: EntitiesResponse<Rule>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find rules by filters
     * @Return: QueryResponse<Rule>
     */
    find(folderId?: string, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of rules and filter
     * @Return: StreamContent
     */
    exportFormat(folderId?: string, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, format?: string, fields?: string[]): import("rxjs").Subscription;
    /**
     * Find anomaly rules by filters
     * @Return: QueryResponse<Rule>
     */
    findAnomalyRules(folderId?: string, sensorId?: string, search?: string, severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get rules specifications available by account features
     * @Return: EntitiesResponse<RuleSpec>
     */
    getSpecs(): import("rxjs").Observable<any>;
}
