import { RestUtil } from '../../utils/rest-util';
import { CoreConfig } from '../../config';
import { Folder } from '../entities/Folder';
import * as i0 from "@angular/core";
/**
 * Services for folders actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export declare class FoldersService {
    private config;
    private rest;
    private baseUrl;
    /**
     * Class constructor
     */
    constructor(config: CoreConfig, rest: RestUtil);
    /**
     * Create new folder in the account hierarchy
     * @Return: EntityResponse<Folder>
     */
    create(body?: Folder): import("rxjs").Observable<any>;
    /**
     * Update folder info
     * @Return: EntityResponse<Folder>
     */
    update(body?: Folder): import("rxjs").Observable<any>;
    /**
     * Change folder parent id
     * @Return: EntityResponse<Folder>
     */
    changeParent(id?: string, parentId?: string): import("rxjs").Observable<any>;
    /**
     * Delete folder from the system (only if it is empty)
     * @Return: ActionResponse error will be returned if the folder is not empty
     */
    delete(id?: string): import("rxjs").Observable<any>;
    /**
     * Get single folder by id
     * @Return: EntityResponse<Folder>
     */
    get(id?: string): import("rxjs").Observable<any>;
    /**
     * Get folders by list of ids
     * @Return: EntitiesResponse<Folder>
     */
    list(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Get folders Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=FolderId)
     */
    mapExternalIds(id?: string[]): import("rxjs").Observable<any>;
    /**
     * Find folders by filters
     * @Return: QueryResponse<Folder>
     */
    find(id?: string, search?: string, parentId?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Export list of folders and filter
     * @Return: StreamContent
     */
    exportFormat(id?: string, search?: string, parentId?: string, sort?: string, format?: string, fields?: string[], fileName?: string): import("rxjs").Observable<import("@angular/common/http").HttpEvent<Blob>>;
    /**
     * Find and filter list of folders
     * @Return: QueryResponse<Folder>
     */
    getSubFolders(id?: string, search?: string, parentId?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get items (folders and sensors) by parent folder id
     * @Return: QueryResponse<TreeItem>
     */
    getSubItems(id?: string, search?: string, parentId?: string, sort?: string, page?: number, pageSize?: number): import("rxjs").Observable<any>;
    /**
     * Get account tree hierarchy (folders and sensors) - starting from the account level as root
     * @Return: EntityResponse<TreeNode>
     */
    getHierarchy(includeSensors?: boolean): import("rxjs").Observable<any>;
    /**
     * Get default geo bounds
     * @Return: EntityResponse<Coordinate> The folder location
     */
    getDefaultLocation(id?: string): import("rxjs").Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FoldersService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FoldersService>;
}
