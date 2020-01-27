import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { ConfigurationTemplate } from '../entities/ConfigurationTemplate';
import { Configuration } from '../entities/Configuration';
import { ProductTypeCode } from '../enums/ProductTypeCode';
import { ConfigurationVersion } from '../entities/ConfigurationVersion';
/**
 * List of configurations related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class SysConfigurationsService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new configuration in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: EntityResponse<Configuration>
     */
    create(body?: Configuration): import("rxjs").Observable<any>;
    /**
     * Update configuration in the system
     * @Return: EntityResponse<Configuration>
     */
    update(id?: string, body?: Configuration): import("rxjs").Observable<any>;
    /**
     * Delete configuration by id
     * @Return: ActionResponse
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Set default version for configuration
     * @Return: ActionResponse
     */
    setDefaultVersion(id?: string, versionId?: string): import("rxjs").Observable<any>;
    /**
     * Get configuration by id
     * @Return: EntityResponse<Configuration>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get list of configurations by filter
     * @Return: QueryResponse<Configuration>
     */
    find(target?: ProductTypeCode[], search?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Create new configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    createVersion(id?: string, body?: ConfigurationVersion): import("rxjs").Observable<any>;
    /**
     * Update configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    updateVersion(id?: string, body?: ConfigurationVersion): import("rxjs").Observable<any>;
    /**
     * Duplicate configuration version from existing one
     * @Return: EntityResponse<ConfigurationVersion>
     */
    duplicateVersion(id?: string, versionId?: string): import("rxjs").Observable<any>;
    /**
     * Delete configuration version by id
     * @Return: ActionResponse
     */
    deleteVersion(id?: string, versionId?: string): import("rxjs").Observable<any>;
    /**
     * Get specific configuration version
     * @Return: EntityResponse<ConfigurationVersion>
     */
    getVersion(id?: string, versionId?: string): import("rxjs").Observable<any>;
    /**
     * Get all versions of specific configuration
     * @Return: EntitiesResponse<ConfigurationVersion>
     */
    getVersions(id?: string): import("rxjs").Observable<any>;
    /**
     * Create new configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    createTemplate(body?: ConfigurationTemplate): import("rxjs").Observable<any>;
    /**
     * Update configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    updateTemplate(id?: string, body?: ConfigurationTemplate): import("rxjs").Observable<any>;
    /**
     * Delete configuration template by id
     * @Return: ActionResponse
     */
    deleteTemplate(id?: string): import("rxjs").Observable<any>;
    /**
     * Get configuration template by id
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    getTemplate(id?: string): import("rxjs").Observable<any>;
    /**
     * Get list of configuration templates
     * @Return: QueryResponse<ConfigurationTemplate>
     */
    findTemplates(page?: number, pageSize?: number): import("rxjs").Observable<any>;
}
