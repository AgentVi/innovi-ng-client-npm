import { EntitiesResponse } from '../messages/EntitiesResponse';
import { StringKeyValue } from '../common/StringKeyValue';
export declare class EntitiesResponseOfStringKeyValue extends EntitiesResponse {
    list: StringKeyValue[];
    code: number;
    error: string;
}
