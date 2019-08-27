import { RuleTypeCode } from '../enums/RuleTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class RulesServiceFindRequest {
    folderId: string;
    sensorId: string;
    search: string;
    ruleType: RuleTypeCode;
    behaviorType: BehaviorTypeCode;
    severity: SeverityTypeCode;
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, sensorId?: string, search?: string, ruleType?: RuleTypeCode, behaviorType?: BehaviorTypeCode, severity?: SeverityTypeCode, sort?: string, page?: number, pageSize?: number);
}
