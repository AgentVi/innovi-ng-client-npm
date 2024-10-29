import { EntitiesResponse } from '../messages/EntitiesResponse';
import { CaseInfo } from '../entities/CaseInfo';
export declare class EntitiesResponseOfCaseInfo extends EntitiesResponse {
    list: CaseInfo[];
    code: number;
    error: string;
}
