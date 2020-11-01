import { ComponentConfiguration } from '../entities/ComponentConfiguration';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ConfigurationVersion extends BaseEntity {
    configurationId: string;
    versionNum: number;
    description: string;
    components: ComponentConfiguration[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
