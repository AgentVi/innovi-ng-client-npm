import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ConfigurationTemplate extends BaseEntity {
    dockerImage: string;
    variables: StringKeyValue[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
