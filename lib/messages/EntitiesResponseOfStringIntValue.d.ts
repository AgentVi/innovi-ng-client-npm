import { StringIntValue } from '../common/StringIntValue';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfStringIntValue extends EntitiesResponse {
    list: StringIntValue[];
    code: number;
    error: string;
}
