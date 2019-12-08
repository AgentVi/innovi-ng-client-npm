import { RuleSpec } from '../common/RuleSpec';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfRuleSpec extends EntitiesResponse {
    list: RuleSpec[];
    code: number;
    error: string;
}
