import { AgentStatus } from '../entities/AgentStatus';
import { ApplianceStatus } from '../entities/ApplianceStatus';
import { SensorStatus } from '../entities/SensorStatus';
export declare class SocketHealthStatusNotification {
    op: number;
    error: string;
    sensorStatus: SensorStatus;
    agentStatus: AgentStatus;
    applianceStatus: ApplianceStatus;
    constructor(op?: number, error?: string, sensorStatus?: SensorStatus, agentStatus?: AgentStatus, applianceStatus?: ApplianceStatus);
}
