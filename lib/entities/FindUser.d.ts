import { FindUserAccountRole } from '../entities/FindUserAccountRole';
import { UserTypeCode } from '../enums/UserTypeCode';
import { UserStatusCode } from '../enums/UserStatusCode';
export declare class FindUser {
    id: string;
    name: string;
    email: string;
    mobile: string;
    type: UserTypeCode;
    status: UserStatusCode;
    lastSignIn: number;
    accountRoles: FindUserAccountRole[];
    defaultAccount: string;
    description: string;
    constructor(id?: string, name?: string, email?: string, mobile?: string, type?: UserTypeCode, status?: UserStatusCode, lastSignIn?: number, accountRoles?: FindUserAccountRole[], defaultAccount?: string, description?: string);
}
