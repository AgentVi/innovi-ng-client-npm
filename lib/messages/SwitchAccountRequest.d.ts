import { PlatformTypeCode } from '../enums/PlatformTypeCode';
export declare class SwitchAccountRequest {
    accountId: string;
    platformType: PlatformTypeCode;
    constructor(accountId?: string, platformType?: PlatformTypeCode);
}
