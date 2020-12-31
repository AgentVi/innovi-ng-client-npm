import { Recurrent } from '../common/Recurrent';
import { BaseEntity } from '../entities/BaseEntity';
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
