import { PlatformTypeCode } from '../enums/PlatformTypeCode';
export declare class LoginParams {
    email: string;
    password: string;
    accessToken: string;
    platformType: PlatformTypeCode;
    constructor(email?: string, password?: string, accessToken?: string, platformType?: PlatformTypeCode);
}
