import { ApplianceConfigReport } from '../common/ApplianceConfigReport';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntitiesResponseOfApplianceConfigReport extends EntityResponse {
    list: ApplianceConfigReport[];
    code: number;
    error: string;
}
