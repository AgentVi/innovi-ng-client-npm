import { EntitiesResponse } from '../messages/EntitiesResponse';
import { RuleSpec } from '../common/RuleSpec';
export declare class EntitiesResponseOfRuleSpec extends EntitiesResponse {
    list: RuleSpec[];
    code: number;
    error: string;
}
