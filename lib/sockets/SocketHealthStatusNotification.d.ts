import { ApplianceStatus } from '../entities/ApplianceStatus';
import { SensorStatus } from '../entities/SensorStatus';
import { AgentStatus } from '../entities/AgentStatus';
export declare class SocketHealthStatusNotification {
    op: number;
    error: string;
    sensorStatus: SensorStatus;
    agentStatus: AgentStatus;
    applianceStatus: ApplianceStatus;
    constructor(op?: number, error?: string, sensorStatus?: SensorStatus, agentStatus?: AgentStatus, applianceStatus?: ApplianceStatus);
}
