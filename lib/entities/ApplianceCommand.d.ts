import { BaseEntity } from '../entities/BaseEntity';
import { ApplianceCommandCode } from '../enums/ApplianceCommandCode';
import { CommandStatusCode } from '../enums/CommandStatusCode';
import { ComponentConfiguration } from '../entities/ComponentConfiguration';
import { TimeFrame } from '../common/TimeFrame';
import { SSHInfo } from '../entities/SSHInfo';
export declare class ApplianceCommand extends BaseEntity {
    accountId: string;
    applianceId: string;
    opCode: ApplianceCommandCode;
    status: CommandStatusCode;
    reason: string;
    components: ComponentConfiguration[];
    componentIds: string[];
    timeFrame: TimeFrame;
    logLevel: string;
    configurationId: string;
    versionId: string;
    profileId: string;
    sshInfo: SSHInfo;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
