import { BaseEntity } from '../entities/BaseEntity';
import { Recurrent } from '../common/Recurrent';
export declare class ScheduledReport extends BaseEntity {
    accountId: string;
    reportId: string;
    name: string;
    recurrent: Recurrent;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
