import { Account } from '../entities/Account';
import { LoginData } from '../common/LoginData';
import { FeatureCode } from '../enums/FeatureCode';
export declare class UserAccountInfo {
    account: Account;
    loginData: LoginData;
    features: FeatureCode[];
    constructor(account?: Account, loginData?: LoginData, features?: FeatureCode[]);
}
