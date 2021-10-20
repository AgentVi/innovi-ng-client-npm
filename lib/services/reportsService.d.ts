import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ReportDefinition } from '../entities/ReportDefinition';
import * as i0 from "@angular/core";
/**
 * Services for reports definition actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class ReportsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new report definition
     * @Return: EntityResponse<ReportDefinition>
     */
    create(body?: ReportDefinition): import("rxjs").Observable<any>;
    /**
     * Update report definition
     * @Return: EntityResponse<ReportDefinition>
     */
    update(id?: string, body?: ReportDefinition): import("rxjs").Observable<any>;
    /**
     * Delete report definition from the system
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single report definition by id
     * @Return: EntityResponse<ReportDefinition>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get multiple report definitions by list of ids
     * @Return: EntitiesResponse<ReportDefinition>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find report definitions by filters
     * @Return: QueryResponse<ReportDefinition>
     */
    find(search?: string): import("rxjs").Observable<any>;
    /**
     * Export account sensors as CSV report stream
     * @Return: StreamContent
     */
    exportSensorsReport(accountId?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Export account sensors rules schedules as CSV report stream
     * @Return: StreamContent
     */
    exportRulesSchedulesReport(accountId?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Generate people counting report and stream it as CSV
     * @Return: StreamContent
     */
    getPeopleCountingReport(sensorId?: string[], folderId?: string[], from?: string, to?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Generate traffic analysis report and stream it as CSV
     * @Return: StreamContent
     */
    getTrafficAnalysisReport(sensorId?: string[], folderId?: string[], from?: string, to?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDef<ReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<ReportsService>;
}
