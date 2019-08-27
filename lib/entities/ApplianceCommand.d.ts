import { ComponentConfiguration } from '../entities/ComponentConfiguration';
import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceCommandCode } from '../enums/ApplianceCommandCode';
import { CommandStatusCode } from '../enums/CommandStatusCode';
export declare class ApplianceCommand extends BaseEntity {
    accountId: string;
    applianceId: string;
    opCode: ApplianceCommandCode;
    status: CommandStatusCode;
    components: ComponentConfiguration[];
    componentIds: string[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
