import { BaseEntity } from '../entities/BaseEntity';
import { EventAction } from '../common/EventAction';
export declare class IntegrationAction extends BaseEntity {
    accountId: string;
    folderId: string;
    name: string;
    eventAction: EventAction;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
