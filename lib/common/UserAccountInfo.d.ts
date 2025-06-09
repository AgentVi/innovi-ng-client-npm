import { UserAccountInfoAccount } from '../common/UserAccountInfoAccount';
import { LoginData } from '../common/LoginData';
export declare class UserAccountInfo {
    account: UserAccountInfoAccount;
    loginData: LoginData;
    features: string[];
    licenseExpiresOn: number;
    constructor(account?: UserAccountInfoAccount, loginData?: LoginData, features?: string[], licenseExpiresOn?: number);
}
