import { StringKeyValue } from '../common/StringKeyValue';
export declare class IntegrationSpec {
    protocol: string;
    operation: string;
    host: string;
    port: number;
    user: string;
    password: string;
    url: string;
    headers: StringKeyValue[];
    recipients: string[];
    subject: string;
    body: string;
    clipRequired: boolean;
    constructor(protocol?: string, operation?: string, host?: string, port?: number, user?: string, password?: string, url?: string, headers?: StringKeyValue[], recipients?: string[], subject?: string, body?: string, clipRequired?: boolean);
}
