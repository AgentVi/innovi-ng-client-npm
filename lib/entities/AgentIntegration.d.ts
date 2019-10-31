import { StringKeyValue } from '../common/StringKeyValue';
export declare class AgentIntegration {
    content: number;
    endpoint: string;
    operation: string;
    headers: StringKeyValue[];
    constructor(content?: number, endpoint?: string, operation?: string, headers?: StringKeyValue[]);
}
