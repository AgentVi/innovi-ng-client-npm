import { DistributionOfLong } from '../common/DistributionOfLong';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfDistributionOfLong extends EntitiesResponse {
    list: DistributionOfLong[];
    code: number;
    error: string;
}
