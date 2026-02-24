import { EntitiesResponse } from '../messages/EntitiesResponse';
import { StringIntValue } from '../common/StringIntValue';
export declare class EntitiesResponseOfStringIntValue extends EntitiesResponse {
    list: StringIntValue[];
    code: number;
    error: string;
}
