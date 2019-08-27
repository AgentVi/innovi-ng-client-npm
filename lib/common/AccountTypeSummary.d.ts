import { AccountTypeCode } from '../enums/AccountTypeCode';
export declare class AccountTypeSummary {
    type: AccountTypeCode;
    typeName: string;
    accounts: number;
    accountsPercentage: number;
    channels: number;
    channelsPercentage: number;
    devices: number;
    devicesPercentage: number;
    constructor(type?: AccountTypeCode, typeName?: string, accounts?: number, accountsPercentage?: number, channels?: number, channelsPercentage?: number, devices?: number, devicesPercentage?: number);
}
