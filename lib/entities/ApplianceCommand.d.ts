import { CommandStatusCode } from '../enums/CommandStatusCode';
import { ComponentConfiguration } from '../entities/ComponentConfiguration';
import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceCommandCode } from '../enums/ApplianceCommandCode';
export declare class ApplianceCommand extends BaseEntity {
    accountId: string;
    applianceId: string;
    opCode: ApplianceCommandCode;
    status: CommandStatusCode;
    reason: string;
    components: ComponentConfiguration[];
    componentIds: string[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
