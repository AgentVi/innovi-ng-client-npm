import { BaseEntity } from '../entities/BaseEntity';
export declare class AccountStatistics extends BaseEntity {
    name: string;
    accountId: string;
    monthId: number;
    sensors: number;
    devices: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
