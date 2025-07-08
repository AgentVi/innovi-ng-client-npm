import { BaseEntity } from '../entities/BaseEntity';
import { Permission } from '../common/Permission';
export declare class Group extends BaseEntity {
    accountId: string;
    name: string;
    description: string;
    depth: number;
    permissions: Permission[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
