import { BaseEntity } from '../entities/BaseEntity';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { FovGeoAttributes } from '../common/FovGeoAttributes';
import { SensorResolutionCode } from '../enums/SensorResolutionCode';
import { Coordinate } from '../common/Coordinate';
import { StringKeyValue } from '../common/StringKeyValue';
import { SensorDebugInfo } from '../common/SensorDebugInfo';
import { SensorTypeCode } from '../enums/SensorTypeCode';
import { StreamTypeCode } from '../enums/StreamTypeCode';
export declare class Sensor extends BaseEntity {
    accountId: string;
    folderId: string;
    applianceId: string;
    agentId: string;
    name: string;
    type: SensorTypeCode;
    status: SensorStatusCode;
    state: number;
    stateReportedOn: number;
    streamType: StreamTypeCode;
    imageResolution: SensorResolutionCode;
    recording: boolean;
    metadata: boolean;
    anomalyDetection: boolean;
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
