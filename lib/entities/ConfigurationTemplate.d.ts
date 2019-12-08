import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ConfigurationTemplate extends BaseEntity {
    name: string;
    dockerImage: string;
    variables: StringKeyValue[];
    mounts: StringKeyValue[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
