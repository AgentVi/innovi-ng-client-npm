import { SensorTypeCode } from '../enums/SensorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { SensorResolutionCode } from '../enums/SensorResolutionCode';
import { BaseEntity } from '../entities/BaseEntity';
import { StreamTypeCode } from '../enums/StreamTypeCode';
import { Coordinate } from '../common/Coordinate';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { StringKeyValue } from '../common/StringKeyValue';
import { SensorDebugInfo } from '../entities/SensorDebugInfo';
export declare class Sensor extends BaseEntity {
    accountId: string;
    folderId: string;
    applianceId: string;
    agentId: string;
    name: string;
    type: SensorTypeCode;
    status: SensorStatusCode;
    streamType: StreamTypeCode;
    imageResolution: SensorResolutionCode;
    recording: boolean;
    metadata: boolean;
    anomalyDetection: boolean;
    enabledByUser: boolean;
    alarmInterval: number;
    maxBBoxPerFrame: number;
    maxFrameRate: number;
    streamUri: string;
    geoLocation: Coordinate;
    azimuth: number;
    fovAttributes: FovGeoAttributes;
    externalId: string;
    tags: StringKeyValue[];
    debugInfo: SensorDebugInfo;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
