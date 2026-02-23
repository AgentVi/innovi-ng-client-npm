import { LoginData } from '../common/LoginData';
import { FeatureCode } from '../enums/FeatureCode';
import { UserAccountInfoAccount } from '../common/UserAccountInfoAccount';
export declare class UserAccountInfo {
    account: UserAccountInfoAccount;
    loginData: LoginData;
    features: FeatureCode[];
    licenseExpiresOn: number;
    constructor(account?: UserAccountInfoAccount, loginData?: LoginData, features?: FeatureCode[], licenseExpiresOn?: number);
}
