import { CaseInfo } from '../entities/CaseInfo';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfCaseInfo extends EntitiesResponse {
    list: CaseInfo[];
    code: number;
    error: string;
}
