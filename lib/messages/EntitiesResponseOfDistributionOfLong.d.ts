import { EntitiesResponse } from '../messages/EntitiesResponse';
import { DistributionOfLong } from '../common/DistributionOfLong';
export declare class EntitiesResponseOfDistributionOfLong extends EntitiesResponse {
    list: DistributionOfLong[];
    code: number;
    error: string;
}
