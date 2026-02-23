import { StringKeyValue } from '../common/StringKeyValue';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfStringKeyValue extends EntitiesResponse {
    list: StringKeyValue[];
    code: number;
    error: string;
}
