import { EngineInformation } from '../messages/EngineInformation';
export declare class EngineInformationResponse {
    code: number;
    engineInformation: EngineInformation;
    constructor(code?: number, engineInformation?: EngineInformation);
}
