import { ComponentVariables } from '../entities/ComponentVariables';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ApplianceProfile extends BaseEntity {
    name: string;
    accountId: string;
    enabled: boolean;
    overrides: ComponentVariables[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
