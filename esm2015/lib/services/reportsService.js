import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import * as i0 from "@angular/core";
import * as i1 from "../../utils/rest-util";
import * as i2 from "../../config";
/**
 * Services for reports definition actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class ReportsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new report definition
     * @Return: EntityResponse<ReportDefinition>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update report definition
     * @Return: EntityResponse<ReportDefinition>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete report definition from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single report definition by id
     * @Return: EntityResponse<ReportDefinition>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple report definitions by list of ids
     * @Return: EntitiesResponse<ReportDefinition>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find report definitions by filters
     * @Return: QueryResponse<ReportDefinition>
     */
    find(search) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export account sensors as CSV report stream
     * @Return: StreamContent
     */
    exportSensorsReport() {
        return this.rest.download(`reports`, `${this.baseUrl}/sensors`);
    }
    /**
     * Export account sensors rules schedules as CSV report stream
     * @Return: StreamContent
     */
    exportRulesSchedulesReport() {
        return this.rest.download(`reports`, `${this.baseUrl}/rule-schedules`);
    }
    /**
     * Generate people counting report and stream it as CSV
     * @Return: StreamContent
     */
    getPeopleCountingReport(sensorId, folderId, from, to) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.download(`reports`, `${this.baseUrl}/statistics/people-counting`, ...params);
    }
    /**
     * Generate traffic analysis report and stream it as CSV
     * @Return: StreamContent
     */
    getTrafficAnalysisReport(sensorId, folderId, from, to) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.download(`reports`, `${this.baseUrl}/statistics/traffic-analysis`, ...params);
    }
    /**
     * Start the background creation of a report. Returns immediately with the status of the started background job.
     * @Return: EntityResponse<JobStatus>
     */
    startReportJob(sensorId, folderId, from, to, reportType, aggregationType, dataType, reportFormat) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (reportType != null) {
            params.push(`reportType=${reportType}`);
        }
        if (aggregationType != null) {
            params.push(`aggregationType=${aggregationType}`);
        }
        if (dataType != null) {
            params.push(`dataType=${dataType}`);
        }
        if (reportFormat != null) {
            params.push(`reportFormat=${reportFormat}`);
        }
        return this.rest.post(`${this.baseUrl}/statistics/job`, null, ...params);
    }
    /**
     * Returns a paginated list of existing background jobs for creating reports.
     * @Return: QueryResponse<JobStatus>
     */
    findJobs(page, pageSize, search, relatedScheduledReportId) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (relatedScheduledReportId != null) {
            params.push(`relatedScheduledReportId=${relatedScheduledReportId}`);
        }
        return this.rest.get(`${this.baseUrl}/statistics/jobs`, ...params);
    }
    /**
     * Retrieves the status of one report job.
     * @Return: EntityResponse<JobStatus>
     */
    getJob(id) {
        return this.rest.get(`${this.baseUrl}/statistics/job/${id}`);
    }
    /**
     * Updates the status of one report job.
     * @Return: EntityResponse<JobStatus>
     */
    updateJob(id, status) {
        const params = new Array();
        if (status != null) {
            params.push(`status=${status}`);
        }
        return this.rest.put(`${this.baseUrl}/statistics/job/${id}`, null, ...params);
    }
    /**
     * Deletes one report job. The job generation must be completed, either successfully or with an error. Returns error if the job is still running.
     * @Return: ActionResponse
     */
    deleteJob(id, status) {
        const params = new Array();
        if (status != null) {
            params.push(`status=${status}`);
        }
        return this.rest.delete(`${this.baseUrl}/statistics/job/${id}`, ...params);
    }
    /**
     * Retrieves the contents of one successfully generated report and returns it as a stream.
     * @Return: StreamContent
     */
    getJobFile(id) {
        return this.rest.download(`reports`, `${this.baseUrl}/statistics/job/${id}/file`);
    }
}
/** @nocollapse */ ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(i0.ɵɵinject('config'), i0.ɵɵinject(i1.RestUtil)); };
/** @nocollapse */ ReportsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: ReportsService, factory: ReportsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportsService, [{
        type: Injectable
    }], function () { return [{ type: i2.CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: i1.RestUtil }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0c1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL3NlcnZpY2VzL3JlcG9ydHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBVTFDOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sY0FBYztJQUt6Qjs7T0FFRztJQUNILFlBQXNDLE1BQWtCLEVBQVUsSUFBYztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQU5oRixpQkFBaUI7UUFDVCxZQUFPLEdBQUcsVUFBVSxDQUFDO1FBTTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRCxDQUFDO0lBR0Q7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLElBQXVCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLEVBQVcsRUFBRSxJQUF1QjtRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksS0FBSyxR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QUNwQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxHQUFHLElBQUksQ0FBQyxPQUFPLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25GLENBQUM7OytGQW5MVSxjQUFjLGNBUUwsUUFBUTttR0FSakIsY0FBYyxXQUFkLGNBQWM7dUZBQWQsY0FBYztjQUQxQixVQUFVOztzQkFTSSxNQUFNO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVzdC11dGlsJztcbmltcG9ydCB7IENvcmVDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5pbXBvcnQgeyBSZXBvcnREZWZpbml0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvUmVwb3J0RGVmaW5pdGlvbic7XG5pbXBvcnQgeyBSZXBvcnRUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1JlcG9ydFR5cGVDb2RlJztcbmltcG9ydCB7IFRpbWVVbml0Q29kZSB9IGZyb20gJy4uL2VudW1zL1RpbWVVbml0Q29kZSc7XG5pbXBvcnQgeyBSZXBvcnREYXRhVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9SZXBvcnREYXRhVHlwZUNvZGUnO1xuaW1wb3J0IHsgUmVwb3J0Rm9ybWF0Q29kZSB9IGZyb20gJy4uL2VudW1zL1JlcG9ydEZvcm1hdENvZGUnO1xuaW1wb3J0IHsgSm9iU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0pvYlN0YXR1c0NvZGUnO1xuXG5cbi8qKlxuICogU2VydmljZXMgZm9yIHJlcG9ydHMgZGVmaW5pdGlvbiBhY3Rpb25zXG4gKiBAUmVxdWVzdEhlYWRlciBYLUFQSS1LRVkgVGhlIGtleSB0byBpZGVudGlmeSB0aGUgYXBwbGljYXRpb24gKHBvcnRhbClcbiAqIEBSZXF1ZXN0SGVhZGVyIFgtQUNDRVNTLVRPS0VOIFRoZSB0b2tlbiB0byBpZGVudGlmeSB0aGUgbG9nZ2VkLWluIHVzZXIgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXBvcnRzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9yZXBvcnRzJztcblxuICAvKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ2NvbmZpZycpIHByaXZhdGUgY29uZmlnOiBDb3JlQ29uZmlnLCBwcml2YXRlIHJlc3Q6IFJlc3RVdGlsKSB7XG4gICAgdGhpcy5iYXNlVXJsID0gdGhpcy5jb25maWcuYXBpICsgdGhpcy5iYXNlVXJsO1xuICB9XG5cblxuICAvKipcbiAgICogQ3JlYXRlIG5ldyByZXBvcnQgZGVmaW5pdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxSZXBvcnREZWZpbml0aW9uPlxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBSZXBvcnREZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSByZXBvcnQgZGVmaW5pdGlvblxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxSZXBvcnREZWZpbml0aW9uPlxuICAgKi9cbiAgdXBkYXRlKGlkPzogc3RyaW5nLCBib2R5PzogUmVwb3J0RGVmaW5pdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH1gLCB0eXBlb2YgYm9keSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeShib2R5KSA6IGJvZHkpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSByZXBvcnQgZGVmaW5pdGlvbiBmcm9tIHRoZSBzeXN0ZW1cbiAgICogQFJldHVybjogQWN0aW9uUmVzcG9uc2VcbiAgICovXG4gIGRlbGV0ZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZGVsZXRlKGAke3RoaXMuYmFzZVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2luZ2xlIHJlcG9ydCBkZWZpbml0aW9uIGJ5IGlkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFJlcG9ydERlZmluaXRpb24+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IG11bHRpcGxlIHJlcG9ydCBkZWZpbml0aW9ucyBieSBsaXN0IG9mIGlkc1xuICAgKiBAUmV0dXJuOiBFbnRpdGllc1Jlc3BvbnNlPFJlcG9ydERlZmluaXRpb24+XG4gICAqL1xuICBsaXN0KGlkPzogc3RyaW5nW10pIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKGlkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGlkPSR7aWR9YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vbGlzdGAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCByZXBvcnQgZGVmaW5pdGlvbnMgYnkgZmlsdGVyc1xuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFJlcG9ydERlZmluaXRpb24+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfWAsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRXhwb3J0IGFjY291bnQgc2Vuc29ycyBhcyBDU1YgcmVwb3J0IHN0cmVhbVxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBleHBvcnRTZW5zb3JzUmVwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHJlcG9ydHNgLGAke3RoaXMuYmFzZVVybH0vc2Vuc29yc2ApO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9ydCBhY2NvdW50IHNlbnNvcnMgcnVsZXMgc2NoZWR1bGVzIGFzIENTViByZXBvcnQgc3RyZWFtXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGV4cG9ydFJ1bGVzU2NoZWR1bGVzUmVwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHJlcG9ydHNgLGAke3RoaXMuYmFzZVVybH0vcnVsZS1zY2hlZHVsZXNgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBwZW9wbGUgY291bnRpbmcgcmVwb3J0IGFuZCBzdHJlYW0gaXQgYXMgQ1NWXG4gICAqIEBSZXR1cm46IFN0cmVhbUNvbnRlbnRcbiAgICovXG4gIGdldFBlb3BsZUNvdW50aW5nUmVwb3J0KHNlbnNvcklkPzogc3RyaW5nW10sIGZvbGRlcklkPzogc3RyaW5nW10sIGZyb20/OiBzdHJpbmcsIHRvPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZW5zb3JJZCAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBzZW5zb3JJZD0ke3NlbnNvcklkfWApOyB9XG4gICAgaWYgKGZvbGRlcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZvbGRlcklkPSR7Zm9sZGVySWR9YCk7IH1cbiAgICBpZiAoZnJvbSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGBmcm9tPSR7ZnJvbX1gKTsgfVxuICAgIGlmICh0byAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGB0bz0ke3RvfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRvd25sb2FkKGByZXBvcnRzYCxgJHt0aGlzLmJhc2VVcmx9L3N0YXRpc3RpY3MvcGVvcGxlLWNvdW50aW5nYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSB0cmFmZmljIGFuYWx5c2lzIHJlcG9ydCBhbmQgc3RyZWFtIGl0IGFzIENTVlxuICAgKiBAUmV0dXJuOiBTdHJlYW1Db250ZW50XG4gICAqL1xuICBnZXRUcmFmZmljQW5hbHlzaXNSZXBvcnQoc2Vuc29ySWQ/OiBzdHJpbmdbXSwgZm9sZGVySWQ/OiBzdHJpbmdbXSwgZnJvbT86IHN0cmluZywgdG8/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cblxuXHRcdHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHJlcG9ydHNgLGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy90cmFmZmljLWFuYWx5c2lzYCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgYmFja2dyb3VuZCBjcmVhdGlvbiBvZiBhIHJlcG9ydC4gUmV0dXJucyBpbW1lZGlhdGVseSB3aXRoIHRoZSBzdGF0dXMgb2YgdGhlIHN0YXJ0ZWQgYmFja2dyb3VuZCBqb2IuXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEpvYlN0YXR1cz5cbiAgICovXG4gIHN0YXJ0UmVwb3J0Sm9iKHNlbnNvcklkPzogc3RyaW5nW10sIGZvbGRlcklkPzogc3RyaW5nW10sIGZyb20/OiBzdHJpbmcsIHRvPzogc3RyaW5nLCByZXBvcnRUeXBlPzogUmVwb3J0VHlwZUNvZGUsIGFnZ3JlZ2F0aW9uVHlwZT86IFRpbWVVbml0Q29kZSwgZGF0YVR5cGU/OiBSZXBvcnREYXRhVHlwZUNvZGUsIHJlcG9ydEZvcm1hdD86IFJlcG9ydEZvcm1hdENvZGUpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgQXJyYXkoKTtcdFx0XG4gICAgaWYgKHNlbnNvcklkICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlbnNvcklkPSR7c2Vuc29ySWR9YCk7IH1cbiAgICBpZiAoZm9sZGVySWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgZm9sZGVySWQ9JHtmb2xkZXJJZH1gKTsgfVxuICAgIGlmIChmcm9tICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGZyb209JHtmcm9tfWApOyB9XG4gICAgaWYgKHRvICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHRvPSR7dG99YCk7IH1cbiAgICBpZiAocmVwb3J0VHlwZSAhPSBudWxsKSB7IHBhcmFtcy5wdXNoKGByZXBvcnRUeXBlPSR7cmVwb3J0VHlwZX1gKTsgfVxuICAgIGlmIChhZ2dyZWdhdGlvblR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgYWdncmVnYXRpb25UeXBlPSR7YWdncmVnYXRpb25UeXBlfWApOyB9XG4gICAgaWYgKGRhdGFUeXBlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYGRhdGFUeXBlPSR7ZGF0YVR5cGV9YCk7IH1cbiAgICBpZiAocmVwb3J0Rm9ybWF0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHJlcG9ydEZvcm1hdD0ke3JlcG9ydEZvcm1hdH1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wb3N0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9qb2JgLCBudWxsLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwYWdpbmF0ZWQgbGlzdCBvZiBleGlzdGluZyBiYWNrZ3JvdW5kIGpvYnMgZm9yIGNyZWF0aW5nIHJlcG9ydHMuXG4gICAqIEBSZXR1cm46IFF1ZXJ5UmVzcG9uc2U8Sm9iU3RhdHVzPlxuICAgKi9cbiAgZmluZEpvYnMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIsIHNlYXJjaD86IHN0cmluZywgcmVsYXRlZFNjaGVkdWxlZFJlcG9ydElkPzogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChwYWdlICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2U9JHtwYWdlfWApOyB9XG4gICAgaWYgKHBhZ2VTaXplICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHBhZ2VTaXplPSR7cGFnZVNpemV9YCk7IH1cbiAgICBpZiAoc2VhcmNoICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNlYXJjaD0ke3NlYXJjaH1gKTsgfVxuICAgIGlmIChyZWxhdGVkU2NoZWR1bGVkUmVwb3J0SWQgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcmVsYXRlZFNjaGVkdWxlZFJlcG9ydElkPSR7cmVsYXRlZFNjaGVkdWxlZFJlcG9ydElkfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9L3N0YXRpc3RpY3Mvam9ic2AsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBzdGF0dXMgb2Ygb25lIHJlcG9ydCBqb2IuXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEpvYlN0YXR1cz5cbiAgICovXG4gIGdldEpvYihpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZ2V0KGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9qb2IvJHtpZH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzdGF0dXMgb2Ygb25lIHJlcG9ydCBqb2IuXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPEpvYlN0YXR1cz5cbiAgICovXG4gIHVwZGF0ZUpvYihpZD86IHN0cmluZywgc3RhdHVzPzogSm9iU3RhdHVzQ29kZSkge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBBcnJheSgpO1x0XHRcbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS9zdGF0aXN0aWNzL2pvYi8ke2lkfWAsIG51bGwsIC4uLnBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBvbmUgcmVwb3J0IGpvYi4gVGhlIGpvYiBnZW5lcmF0aW9uIG11c3QgYmUgY29tcGxldGVkLCBlaXRoZXIgc3VjY2Vzc2Z1bGx5IG9yIHdpdGggYW4gZXJyb3IuIFJldHVybnMgZXJyb3IgaWYgdGhlIGpvYiBpcyBzdGlsbCBydW5uaW5nLlxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgZGVsZXRlSm9iKGlkPzogc3RyaW5nLCBzdGF0dXM/OiBKb2JTdGF0dXNDb2RlKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc3RhdHVzPSR7c3RhdHVzfWApOyB9XG5cblx0XHRyZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9L3N0YXRpc3RpY3Mvam9iLyR7aWR9YCwgLi4ucGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdGhlIGNvbnRlbnRzIG9mIG9uZSBzdWNjZXNzZnVsbHkgZ2VuZXJhdGVkIHJlcG9ydCBhbmQgcmV0dXJucyBpdCBhcyBhIHN0cmVhbS5cbiAgICogQFJldHVybjogU3RyZWFtQ29udGVudFxuICAgKi9cbiAgZ2V0Sm9iRmlsZShpZD86IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnJlc3QuZG93bmxvYWQoYHJlcG9ydHNgLGAke3RoaXMuYmFzZVVybH0vc3RhdGlzdGljcy9qb2IvJHtpZH0vZmlsZWApO1xuICB9XG5cbn1cbiJdfQ==