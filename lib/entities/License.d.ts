import { BaseEntity } from '../entities/BaseEntity';
export declare class License extends BaseEntity {
    customerId: string;
    customerName: string;
    deploymentId: string;
    deploymentName: string;
    importedOn: number;
    expiration: number;
    channelsLimit: number;
    devicesLimit: number;
    features: string[];
    encoded: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
