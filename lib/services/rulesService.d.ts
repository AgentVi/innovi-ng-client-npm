import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Rule } from '../entities/Rule';
import { UpdateScheduleForRules } from '../default/UpdateScheduleForRules';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import * as i0 from "@angular/core";
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
     * Update schedule for a set of rules
     * @Return: ActionResponse
     */
    updateScheduleForRules(body?: UpdateScheduleForRules): import("rxjs").Observable<any>;
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
     * Arm (Enable analytics rules) on group of sensors or all sensors in site (folder)
     * @Return: ActionResponse
     */
    arm(folderId?: string, folderExtId?: string, sensorId?: string[], sensorExtId?: string[]): import("rxjs").Observable<any>;
    /**
     * Disarm (Disable analytics rules) on group of sensors or all sensors in site (folder)
     * @Return: ActionResponse
     */
    disarm(folderId?: string, folderExtId?: string, sensorId?: string[], sensorExtId?: string[]): import("rxjs").Observable<any>;
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
     * Export single rule as Json stream
     * @Return: Rule Json as StreamContent
     */
    exportRule(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Get rules by list of ids
     * @Return: EntitiesResponse<Rule>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Get rules Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=RuleId)
     */
    mapExternalIds(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find rules by filters
     * @Return: QueryResponse<Rule>
     */
    find(folderId?: string, physical?: boolean, applianceId?: string, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], exclude?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of rules and filter
     * @Return: StreamContent
     */
    exportFormat(folderId?: string, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find anomaly rules by filters
     * @Return: QueryResponse<Rule>
     */
    findAnomalyRules(folderId?: string, physical?: boolean, sensorId?: string, search?: string, severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get rules specifications available by account features
     * @Return: EntitiesResponse<RuleSpec>
     */
    getSpecs(): import("rxjs").Observable<any>;
    /**
     * Pause analytics detections on site (folder) for a specified time frame
     * @Return: ActionResponse
     */
    pause(folderId?: string, folderExtId?: string, from?: number, to?: number): import("rxjs").Observable<any>;
    /**
     * Resume analytics on site (folder) that was paused
     * @Return: ActionResponse
     */
    resume(folderId?: string, folderExtId?: string): import("rxjs").Observable<any>;
    /**
     * Trigger test event on rule
     * @Return: ActionResponse
     */
    triggerTestEvent(id?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RulesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RulesService>;
}
