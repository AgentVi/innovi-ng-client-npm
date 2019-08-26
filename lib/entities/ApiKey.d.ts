import { BaseEntity } from '../entities/BaseEntity';
export declare class ApiKey extends BaseEntity {
    appName: string;
    appKey: string;
    version: number;
    isSystemKey: boolean;
    isEnabled: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
