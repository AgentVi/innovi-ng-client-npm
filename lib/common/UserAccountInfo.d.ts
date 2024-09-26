import { UserAccountInfoAccount } from '../common/UserAccountInfoAccount';
import { LoginData } from '../common/LoginData';
import { FeatureCode } from '../enums/FeatureCode';
export declare class UserAccountInfo {
    account: UserAccountInfoAccount;
    loginData: LoginData;
    features: FeatureCode[];
    licenseExpiresOn: number;
    constructor(account?: UserAccountInfoAccount, loginData?: LoginData, features?: FeatureCode[], licenseExpiresOn?: number);
}
