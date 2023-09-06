import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ReportGenerationRequestBody } from '../messages/ReportGenerationRequestBody';
import { JobStatusCode } from '../enums/JobStatusCode';
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
    exportSensorsReport(): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Export account sensors rules schedules as CSV report stream
     * @Return: StreamContent
     */
    exportRulesSchedulesReport(): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
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
    /**
     * Start the background creation of a report. Returns immediately with the status of the started background job.
     * @Return: EntityResponse<JobStatus>
     */
    startReportJob(body?: ReportGenerationRequestBody): import("rxjs").Observable<any>;
    /**
     * Returns a paginated list of existing background jobs for creating reports.
     * @Return: QueryResponse<JobStatus>
     */
    findJobs(page?: number, pageSize?: number, search?: string, relatedScheduledReportId?: string): import("rxjs").Observable<any>;
    /**
     * Retrieves the status of one report job.
     * @Return: EntityResponse<JobStatus>
     */
    getJob(id?: string): import("rxjs").Observable<any>;
    /**
     * Updates the status of one report job.
     * @Return: EntityResponse<JobStatus>
     */
    updateJob(id?: string, status?: JobStatusCode): import("rxjs").Observable<any>;
    /**
     * Deletes one report job. The job generation must be completed, either successfully or with an error. Returns error if the job is still running.
     * @Return: ActionResponse
     */
    deleteJob(id?: string, status?: JobStatusCode): import("rxjs").Observable<any>;
    /**
     * Retrieves the contents of one successfully generated report and returns it as a stream.
     * @Return: StreamContent
     */
    getJobFile(id?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportsService>;
}
