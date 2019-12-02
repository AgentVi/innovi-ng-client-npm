import { BaseEntity } from '../entities/BaseEntity';
import { StringKeyValue } from '../common/StringKeyValue';
export declare class ConfigurationTemplate extends BaseEntity {
    name: string;
    dockerImage: string;
    variables: StringKeyValue[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
