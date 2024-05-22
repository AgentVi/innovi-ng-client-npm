import { LoginData } from '../common/LoginData';
import { UserAccountInfoAccount } from '../common/UserAccountInfoAccount';
export declare class UserAccountInfo {
    account: UserAccountInfoAccount;
    loginData: LoginData;
    features: string[];
    licenseExpiresOn: number;
    constructor(account?: UserAccountInfoAccount, loginData?: LoginData, features?: string[], licenseExpiresOn?: number);
}
