import { PermissionMask } from '../enums/PermissionMask';
export declare class Permission {
    path: string;
    perm: PermissionMask;
    constructor(path?: string, perm?: PermissionMask);
}
