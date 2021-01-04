import { ConfigurationVersion } from '../entities/ConfigurationVersion';
import { ProductTypeCode } from '../enums/ProductTypeCode';
import { DiskInfo } from '../common/DiskInfo';
import { DockerCredentials } from '../common/DockerCredentials';
export declare class ApplianceCapabilities {
    productType: ProductTypeCode;
    serialNumber: string;
    deviceModel: string;
    cpuModel: string;
    uuid: string;
    ip: string;
    host: string;
    dockerVersion: string;
    kernelVersion: string;
    totalRam: number;
    disks: DiskInfo[];
    commandInterval: number;
    statusInterval: number;
    dockerCredentials: DockerCredentials;
    configurationVersion: ConfigurationVersion;
    profileId: string;
    errors: string;
    uploadSpeed: string;
    downloadSpeed: string;
    speedTestedOn: number;
    constructor(productType?: ProductTypeCode, serialNumber?: string, deviceModel?: string, cpuModel?: string, uuid?: string, ip?: string, host?: string, dockerVersion?: string, kernelVersion?: string, totalRam?: number, disks?: DiskInfo[], commandInterval?: number, statusInterval?: number, dockerCredentials?: DockerCredentials, configurationVersion?: ConfigurationVersion, profileId?: string, errors?: string, uploadSpeed?: string, downloadSpeed?: string, speedTestedOn?: number);
}
