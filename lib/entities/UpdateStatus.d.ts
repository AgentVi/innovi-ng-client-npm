import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceCommand } from '../entities/ApplianceCommand';
export declare class UpdateStatus extends BaseEntity {
    timestamp: number;
    batchId: string;
    userId: string;
    accountId: string;
    applianceId: string;
    commandId: string;
    command: ApplianceCommand;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
