import { ApplianceConfigVersion } from '../common/ApplianceConfigVersion';
export declare class ApplianceConfiguration {
    configurationId: string;
    description: string;
    currentVersion: string;
    versions: ApplianceConfigVersion[];
    constructor(configurationId?: string, description?: string, currentVersion?: string, versions?: ApplianceConfigVersion[]);
}
