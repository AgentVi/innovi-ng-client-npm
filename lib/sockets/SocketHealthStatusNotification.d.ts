import { SocketOpCode } from '../enums/SocketOpCode';
import { SensorStatus } from '../entities/SensorStatus';
import { AgentStatus } from '../entities/AgentStatus';
import { ApplianceStatus } from '../entities/ApplianceStatus';
export declare class SocketHealthStatusNotification {
    op: SocketOpCode;
    error: string;
    sensorStatus: SensorStatus;
    agentStatus: AgentStatus;
    applianceStatus: ApplianceStatus;
    constructor(op?: SocketOpCode, error?: string, sensorStatus?: SensorStatus, agentStatus?: AgentStatus, applianceStatus?: ApplianceStatus);
}
