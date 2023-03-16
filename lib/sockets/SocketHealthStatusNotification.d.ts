import { AgentStatus } from '../entities/AgentStatus';
import { ApplianceStatus } from '../entities/ApplianceStatus';
import { SocketOpCode } from '../enums/SocketOpCode';
import { SensorStatus } from '../entities/SensorStatus';
export declare class SocketHealthStatusNotification {
    op: SocketOpCode;
    error: string;
    sensorStatus: SensorStatus;
    agentStatus: AgentStatus;
    applianceStatus: ApplianceStatus;
    constructor(op?: SocketOpCode, error?: string, sensorStatus?: SensorStatus, agentStatus?: AgentStatus, applianceStatus?: ApplianceStatus);
}
