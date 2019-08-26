import { BaseEntity } from '../entities/BaseEntity';
export declare class UpdateStatus extends BaseEntity {
    timestamp: number;
    accountId: string;
    applianceId: string;
    component: string;
    version: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
