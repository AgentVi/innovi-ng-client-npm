import { Injectable, Inject, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Schedule time frame
   Times are described in ISO 8601 format (See: https://www.w3.org/TR/NOTE-datetime).
   The format is: YYYY-MM-DDThh:mm:ssTZD where:
   <ul>
   <li>YYYY = four-digit year</li>
   <li>MM   = two-digit month (01=January, etc.)</li>
   <li>DD   = two-digit day of month (01 through 31)</li>
   <li>hh   = two digits of hour (00 through 23) (am/pm NOT allowed)</li>
   <li>mm   = two digits of minute (00 through 59)</li>
   <li>ss   = two digits of second (00 through 59)
   <li>TZD  = time zone designator (Z for UTC or +hh:mm or -hh:mm for Timezone offset)</li>
   </ul>
*/
class AbsoluteTimeFrame {
    /**
     * @param {?=} name
     * @param {?=} startTime
     * @param {?=} endTime
     * @param {?=} active
     */
    constructor(name, startTime, endTime, active) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.active = active;
    }
}
if (false) {
    /** @type {?} */
    AbsoluteTimeFrame.prototype.name;
    /** @type {?} */
    AbsoluteTimeFrame.prototype.startTime;
    /** @type {?} */
    AbsoluteTimeFrame.prototype.endTime;
    /** @type {?} */
    AbsoluteTimeFrame.prototype.active;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Account role represents the role of the user in the account
*/
class AccountRole {
    /**
     * @param {?=} accountId
     * @param {?=} role
     */
    constructor(accountId, role) {
        this.accountId = accountId;
        this.role = role;
    }
}
if (false) {
    /** @type {?} */
    AccountRole.prototype.accountId;
    /** @type {?} */
    AccountRole.prototype.role;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Account types aggregator summary
*/
class AccountTypeSummary {
    /**
     * @param {?=} type
     * @param {?=} typeName
     * @param {?=} accounts
     * @param {?=} accountsPercentage
     * @param {?=} channels
     * @param {?=} channelsPercentage
     * @param {?=} devices
     * @param {?=} devicesPercentage
     */
    constructor(type, typeName, accounts, accountsPercentage, channels, channelsPercentage, devices, devicesPercentage) {
        this.type = type;
        this.typeName = typeName;
        this.accounts = accounts;
        this.accountsPercentage = accountsPercentage;
        this.channels = channels;
        this.channelsPercentage = channelsPercentage;
        this.devices = devices;
        this.devicesPercentage = devicesPercentage;
    }
}
if (false) {
    /** @type {?} */
    AccountTypeSummary.prototype.type;
    /** @type {?} */
    AccountTypeSummary.prototype.typeName;
    /** @type {?} */
    AccountTypeSummary.prototype.accounts;
    /** @type {?} */
    AccountTypeSummary.prototype.accountsPercentage;
    /** @type {?} */
    AccountTypeSummary.prototype.channels;
    /** @type {?} */
    AccountTypeSummary.prototype.channelsPercentage;
    /** @type {?} */
    AccountTypeSummary.prototype.devices;
    /** @type {?} */
    AccountTypeSummary.prototype.devicesPercentage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor training analysis result for a single model
   This data model is used by the training process of Anomaly Detection
*/
class AnalysisResult {
    /**
     * @param {?=} modelType
     * @param {?=} resultsPath
     * @param {?=} completedOn
     */
    constructor(modelType, resultsPath, completedOn) {
        this.modelType = modelType;
        this.resultsPath = resultsPath;
        this.completedOn = completedOn;
    }
}
if (false) {
    /** @type {?} */
    AnalysisResult.prototype.modelType;
    /** @type {?} */
    AnalysisResult.prototype.resultsPath;
    /** @type {?} */
    AnalysisResult.prototype.completedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   SW Configuration for appliance
*/
class ApplianceConfiguration {
    /**
     * @param {?=} configurationId
     * @param {?=} description
     * @param {?=} currentVersion
     * @param {?=} versions
     */
    constructor(configurationId, description, currentVersion, versions) {
        this.configurationId = configurationId;
        this.description = description;
        this.currentVersion = currentVersion;
        this.versions = versions;
    }
}
if (false) {
    /** @type {?} */
    ApplianceConfiguration.prototype.configurationId;
    /** @type {?} */
    ApplianceConfiguration.prototype.description;
    /** @type {?} */
    ApplianceConfiguration.prototype.currentVersion;
    /** @type {?} */
    ApplianceConfiguration.prototype.versions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
class ApplianceRegistration {
    /**
     * @param {?=} name
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} machineId
     * @param {?=} productType
     * @param {?=} configurationId
     * @param {?=} configurationVersionId
     */
    constructor(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId) {
        this.name = name;
        this.accountId = accountId;
        this.folderId = folderId;
        this.machineId = machineId;
        this.productType = productType;
        this.configurationId = configurationId;
        this.configurationVersionId = configurationVersionId;
    }
}
if (false) {
    /** @type {?} */
    ApplianceRegistration.prototype.name;
    /** @type {?} */
    ApplianceRegistration.prototype.accountId;
    /** @type {?} */
    ApplianceRegistration.prototype.folderId;
    /** @type {?} */
    ApplianceRegistration.prototype.machineId;
    /** @type {?} */
    ApplianceRegistration.prototype.productType;
    /** @type {?} */
    ApplianceRegistration.prototype.configurationId;
    /** @type {?} */
    ApplianceRegistration.prototype.configurationVersionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance short status data point
*/
class ApplianceStatusDataPoint {
    /**
     * @param {?=} cpuAvg
     * @param {?=} cpuMax
     * @param {?=} ram
     * @param {?=} loadAvg
     */
    constructor(cpuAvg, cpuMax, ram, loadAvg) {
        this.cpuAvg = cpuAvg;
        this.cpuMax = cpuMax;
        this.ram = ram;
        this.loadAvg = loadAvg;
    }
}
if (false) {
    /** @type {?} */
    ApplianceStatusDataPoint.prototype.cpuAvg;
    /** @type {?} */
    ApplianceStatusDataPoint.prototype.cpuMax;
    /** @type {?} */
    ApplianceStatusDataPoint.prototype.ram;
    /** @type {?} */
    ApplianceStatusDataPoint.prototype.loadAvg;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance status list over time
*/
class ApplianceStatusTimeSeries {
    /**
     * @param {?=} label
     * @param {?=} data
     */
    constructor(label, data) {
        this.label = label;
        this.data = data;
    }
}
if (false) {
    /** @type {?} */
    ApplianceStatusTimeSeries.prototype.label;
    /** @type {?} */
    ApplianceStatusTimeSeries.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Data point in a series representing a sensor status value in a specific timestamp
*/
class ApplianceStatusTimestamped {
    /**
     * @param {?=} timestamp
     * @param {?=} label
     * @param {?=} value
     */
    constructor(timestamp, label, value) {
        this.timestamp = timestamp;
        this.label = label;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    ApplianceStatusTimestamped.prototype.timestamp;
    /** @type {?} */
    ApplianceStatusTimestamped.prototype.label;
    /** @type {?} */
    ApplianceStatusTimestamped.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Bounding Box of crop in a frame (inside 1000x1000 coordinate system)
*/
class BoundingBox {
    /**
     * @param {?=} maxX
     * @param {?=} maxY
     * @param {?=} minX
     * @param {?=} minY
     */
    constructor(maxX, maxY, minX, minY) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.minX = minX;
        this.minY = minY;
    }
}
if (false) {
    /** @type {?} */
    BoundingBox.prototype.maxX;
    /** @type {?} */
    BoundingBox.prototype.maxY;
    /** @type {?} */
    BoundingBox.prototype.minX;
    /** @type {?} */
    BoundingBox.prototype.minY;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Bounding Box of an area in a map (in WGS-84 coordinate system)
*/
class BoundingMap {
    /**
     * @param {?=} maxLat
     * @param {?=} maxLng
     * @param {?=} minLat
     * @param {?=} minLng
     */
    constructor(maxLat, maxLng, minLat, minLng) {
        this.maxLat = maxLat;
        this.maxLng = maxLng;
        this.minLat = minLat;
        this.minLng = minLng;
    }
}
if (false) {
    /** @type {?} */
    BoundingMap.prototype.maxLat;
    /** @type {?} */
    BoundingMap.prototype.maxLng;
    /** @type {?} */
    BoundingMap.prototype.minLat;
    /** @type {?} */
    BoundingMap.prototype.minLng;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Control point links between point on the raster (FOV) and world map
*/
class ControlPoint {
    /**
     * @param {?=} key
     * @param {?=} value
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    ControlPoint.prototype.key;
    /** @type {?} */
    ControlPoint.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Coordinate of WGS-84 grid system
   See (https://en.wikipedia.org/wiki/World_Geodetic_System)
*/
class Coordinate {
    /**
     * @param {?=} latitude
     * @param {?=} longitude
     * @param {?=} altitude
     */
    constructor(latitude, longitude, altitude) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.altitude = altitude;
    }
}
if (false) {
    /** @type {?} */
    Coordinate.prototype.latitude;
    /** @type {?} */
    Coordinate.prototype.longitude;
    /** @type {?} */
    Coordinate.prototype.altitude;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Object dimension on FOV
*/
class Dimension {
    /**
     * @param {?=} width
     * @param {?=} height
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
if (false) {
    /** @type {?} */
    Dimension.prototype.width;
    /** @type {?} */
    Dimension.prototype.height;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Disk information
*/
class DiskInfo {
    /**
     * @param {?=} name
     * @param {?=} totalBytes
     * @param {?=} usedBytes
     * @param {?=} usage
     */
    constructor(name, totalBytes, usedBytes, usage) {
        this.name = name;
        this.totalBytes = totalBytes;
        this.usedBytes = usedBytes;
        this.usage = usage;
    }
}
if (false) {
    /** @type {?} */
    DiskInfo.prototype.name;
    /** @type {?} */
    DiskInfo.prototype.totalBytes;
    /** @type {?} */
    DiskInfo.prototype.usedBytes;
    /** @type {?} */
    DiskInfo.prototype.usage;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Docker registry credentials to connect to docker
   Includes information where to access and get images
*/
class DockerCredentials {
    /**
     * @param {?=} dockerUser
     * @param {?=} dockerPwd
     */
    constructor(dockerUser, dockerPwd) {
        this.dockerUser = dockerUser;
        this.dockerPwd = dockerPwd;
    }
}
if (false) {
    /** @type {?} */
    DockerCredentials.prototype.dockerUser;
    /** @type {?} */
    DockerCredentials.prototype.dockerPwd;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Event integration action
*/
class EventAction {
    /**
     * @param {?=} protocol
     * @param {?=} operation
     * @param {?=} host
     * @param {?=} port
     * @param {?=} user
     * @param {?=} password
     * @param {?=} url
     * @param {?=} headers
     * @param {?=} recipients
     * @param {?=} subject
     * @param {?=} body
     * @param {?=} clipRequired
     */
    constructor(protocol, operation, host, port, user, password, url, headers, recipients, subject, body, clipRequired) {
        this.protocol = protocol;
        this.operation = operation;
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.url = url;
        this.headers = headers;
        this.recipients = recipients;
        this.subject = subject;
        this.body = body;
        this.clipRequired = clipRequired;
    }
}
if (false) {
    /** @type {?} */
    EventAction.prototype.protocol;
    /** @type {?} */
    EventAction.prototype.operation;
    /** @type {?} */
    EventAction.prototype.host;
    /** @type {?} */
    EventAction.prototype.port;
    /** @type {?} */
    EventAction.prototype.user;
    /** @type {?} */
    EventAction.prototype.password;
    /** @type {?} */
    EventAction.prototype.url;
    /** @type {?} */
    EventAction.prototype.headers;
    /** @type {?} */
    EventAction.prototype.recipients;
    /** @type {?} */
    EventAction.prototype.subject;
    /** @type {?} */
    EventAction.prototype.body;
    /** @type {?} */
    EventAction.prototype.clipRequired;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Event count time series data point
*/
class EventCountDataPoint {
    /**
     * @param {?=} timestamp
     * @param {?=} label
     * @param {?=} value
     */
    constructor(timestamp, label, value) {
        this.timestamp = timestamp;
        this.label = label;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    EventCountDataPoint.prototype.timestamp;
    /** @type {?} */
    EventCountDataPoint.prototype.label;
    /** @type {?} */
    EventCountDataPoint.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Event count time series result
*/
class EventCountTimeSeries {
    /**
     * @param {?=} label
     * @param {?=} data
     */
    constructor(label, data) {
        this.label = label;
        this.data = data;
    }
}
if (false) {
    /** @type {?} */
    EventCountTimeSeries.prototype.label;
    /** @type {?} */
    EventCountTimeSeries.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Event object info
   Part of the event type to encapsulate all the info about the detected object (bounding box, trajectory etc)
*/
class EventObjectInfo {
    /**
     * @param {?=} id
     * @param {?=} detection
     * @param {?=} trajectory
     */
    constructor(id, detection, trajectory) {
        this.id = id;
        this.detection = detection;
        this.trajectory = trajectory;
    }
}
if (false) {
    /** @type {?} */
    EventObjectInfo.prototype.id;
    /** @type {?} */
    EventObjectInfo.prototype.detection;
    /** @type {?} */
    EventObjectInfo.prototype.trajectory;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Object instance data of object trajectory in the scene
*/
class EventObjectInstance {
    /**
     * @param {?=} timestamp
     * @param {?=} maxX
     * @param {?=} maxY
     * @param {?=} minX
     * @param {?=} minY
     */
    constructor(timestamp, maxX, maxY, minX, minY) {
        this.timestamp = timestamp;
        this.maxX = maxX;
        this.maxY = maxY;
        this.minX = minX;
        this.minY = minY;
    }
}
if (false) {
    /** @type {?} */
    EventObjectInstance.prototype.timestamp;
    /** @type {?} */
    EventObjectInstance.prototype.maxX;
    /** @type {?} */
    EventObjectInstance.prototype.maxY;
    /** @type {?} */
    EventObjectInstance.prototype.minX;
    /** @type {?} */
    EventObjectInstance.prototype.minY;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   FOV (Sensor Field of View) Geo attributes
*/
class FovGeoAttributes {
    /**
     * @param {?=} geoArea
     * @param {?=} visibleArea
     * @param {?=} affineCoefficients
     * @param {?=} controlPoints
     */
    constructor(geoArea, visibleArea, affineCoefficients, controlPoints) {
        this.geoArea = geoArea;
        this.visibleArea = visibleArea;
        this.affineCoefficients = affineCoefficients;
        this.controlPoints = controlPoints;
    }
}
if (false) {
    /** @type {?} */
    FovGeoAttributes.prototype.geoArea;
    /** @type {?} */
    FovGeoAttributes.prototype.visibleArea;
    /** @type {?} */
    FovGeoAttributes.prototype.affineCoefficients;
    /** @type {?} */
    FovGeoAttributes.prototype.controlPoints;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Geo spatial circle
*/
class GeoCircle {
    /**
     * @param {?=} center
     * @param {?=} radius
     */
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
}
if (false) {
    /** @type {?} */
    GeoCircle.prototype.center;
    /** @type {?} */
    GeoCircle.prototype.radius;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Control point maps FOV location (1000x1000 coordinate system) to WGS-84 coordinate system
   Control points are used for FOV geo-referencing
*/
class GeoControlPoint {
    /**
     * @param {?=} point
     * @param {?=} coordinate
     */
    constructor(point, coordinate) {
        this.point = point;
        this.coordinate = coordinate;
    }
}
if (false) {
    /** @type {?} */
    GeoControlPoint.prototype.point;
    /** @type {?} */
    GeoControlPoint.prototype.coordinate;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Geo spatial polygon
*/
class GeoPolygon {
    /**
     * @param {?=} vertices
     */
    constructor(vertices) {
        this.vertices = vertices;
    }
}
if (false) {
    /** @type {?} */
    GeoPolygon.prototype.vertices;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Geo Reference data includes the contour of the raster image on the World coordinate system (WGS-84)
   and the list of transformation coefficients.
   To transform any point (x,y) on the FOV to WGS-84 coordinate, use the following functions:
   lng = (c0 * x) + (c1 * y) + c2
   lat = (c3 * y) + (c4 * x) + c5
   Where: c0..c5 are the indexed values of the coefficients vector e.g.
   c0 = coefficients[0], c1 = coefficients[1] ... c5 = coefficients[5];
*/
class GeoReferenceData {
    /**
     * @param {?=} coordinates
     * @param {?=} coefficients
     */
    constructor(coordinates, coefficients) {
        this.coordinates = coordinates;
        this.coefficients = coefficients;
    }
}
if (false) {
    /** @type {?} */
    GeoReferenceData.prototype.coordinates;
    /** @type {?} */
    GeoReferenceData.prototype.coefficients;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Login data (returned by the API after successful login)
*/
class LoginData {
    /**
     * @param {?=} accessToken
     * @param {?=} accountRole
     * @param {?=} userId
     * @param {?=} userName
     * @param {?=} userEmail
     * @param {?=} userType
     * @param {?=} userStatus
     * @param {?=} changePassword
     */
    constructor(accessToken, accountRole, userId, userName, userEmail, userType, userStatus, changePassword) {
        this.accessToken = accessToken;
        this.accountRole = accountRole;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userType = userType;
        this.userStatus = userStatus;
        this.changePassword = changePassword;
    }
}
if (false) {
    /** @type {?} */
    LoginData.prototype.accessToken;
    /** @type {?} */
    LoginData.prototype.accountRole;
    /** @type {?} */
    LoginData.prototype.userId;
    /** @type {?} */
    LoginData.prototype.userName;
    /** @type {?} */
    LoginData.prototype.userEmail;
    /** @type {?} */
    LoginData.prototype.userType;
    /** @type {?} */
    LoginData.prototype.userStatus;
    /** @type {?} */
    LoginData.prototype.changePassword;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Login parameters data model
*/
class LoginParams {
    /**
     * @param {?=} email
     * @param {?=} password
     * @param {?=} accessToken
     */
    constructor(email, password, accessToken) {
        this.email = email;
        this.password = password;
        this.accessToken = accessToken;
    }
}
if (false) {
    /** @type {?} */
    LoginParams.prototype.email;
    /** @type {?} */
    LoginParams.prototype.password;
    /** @type {?} */
    LoginParams.prototype.accessToken;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Metadata object color description
*/
class ObjectColor {
    /**
     * @param {?=} colorType
     * @param {?=} primary
     * @param {?=} primaryConf
     * @param {?=} secondaryColor
     * @param {?=} secondaryConf
     */
    constructor(colorType, primary, primaryConf, secondaryColor, secondaryConf) {
        this.colorType = colorType;
        this.primary = primary;
        this.primaryConf = primaryConf;
        this.secondaryColor = secondaryColor;
        this.secondaryConf = secondaryConf;
    }
}
if (false) {
    /** @type {?} */
    ObjectColor.prototype.colorType;
    /** @type {?} */
    ObjectColor.prototype.primary;
    /** @type {?} */
    ObjectColor.prototype.primaryConf;
    /** @type {?} */
    ObjectColor.prototype.secondaryColor;
    /** @type {?} */
    ObjectColor.prototype.secondaryConf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Metadata object info - returned as search result
*/
class ObjectInfo {
    /**
     * @param {?=} objectId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} color
     * @param {?=} location
     * @param {?=} instances
     */
    constructor(objectId, sensorId, objectType, color, location, instances) {
        this.objectId = objectId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.color = color;
        this.location = location;
        this.instances = instances;
    }
}
if (false) {
    /** @type {?} */
    ObjectInfo.prototype.objectId;
    /** @type {?} */
    ObjectInfo.prototype.sensorId;
    /** @type {?} */
    ObjectInfo.prototype.objectType;
    /** @type {?} */
    ObjectInfo.prototype.color;
    /** @type {?} */
    ObjectInfo.prototype.location;
    /** @type {?} */
    ObjectInfo.prototype.instances;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Metadata object instance info
   One instance of the object in the scene
*/
class ObjectInstance {
    /**
     * @param {?=} objectId
     * @param {?=} timestamp
     * @param {?=} objectType
     * @param {?=} colors
     * @param {?=} direction
     * @param {?=} dimension
     * @param {?=} boundingBox
     * @param {?=} speed
     * @param {?=} size
     * @param {?=} position
     * @param {?=} location
     */
    constructor(objectId, timestamp, objectType, colors, direction, dimension, boundingBox, speed, size, position, location) {
        this.objectId = objectId;
        this.timestamp = timestamp;
        this.objectType = objectType;
        this.colors = colors;
        this.direction = direction;
        this.dimension = dimension;
        this.boundingBox = boundingBox;
        this.speed = speed;
        this.size = size;
        this.position = position;
        this.location = location;
    }
}
if (false) {
    /** @type {?} */
    ObjectInstance.prototype.objectId;
    /** @type {?} */
    ObjectInstance.prototype.timestamp;
    /** @type {?} */
    ObjectInstance.prototype.objectType;
    /** @type {?} */
    ObjectInstance.prototype.colors;
    /** @type {?} */
    ObjectInstance.prototype.direction;
    /** @type {?} */
    ObjectInstance.prototype.dimension;
    /** @type {?} */
    ObjectInstance.prototype.boundingBox;
    /** @type {?} */
    ObjectInstance.prototype.speed;
    /** @type {?} */
    ObjectInstance.prototype.size;
    /** @type {?} */
    ObjectInstance.prototype.position;
    /** @type {?} */
    ObjectInstance.prototype.location;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Point (X,Y) on raster
*/
class Point {
    /**
     * @param {?=} x
     * @param {?=} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
if (false) {
    /** @type {?} */
    Point.prototype.x;
    /** @type {?} */
    Point.prototype.y;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Recurrent time frame
*/
class Recurrent {
    /**
     * @param {?=} startTime
     * @param {?=} endTime
     * @param {?=} period
     * @param {?=} daysOfWeek
     * @param {?=} action
     */
    constructor(startTime, endTime, period, daysOfWeek, action) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.period = period;
        this.daysOfWeek = daysOfWeek;
        this.action = action;
    }
}
if (false) {
    /** @type {?} */
    Recurrent.prototype.startTime;
    /** @type {?} */
    Recurrent.prototype.endTime;
    /** @type {?} */
    Recurrent.prototype.period;
    /** @type {?} */
    Recurrent.prototype.daysOfWeek;
    /** @type {?} */
    Recurrent.prototype.action;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Schedule recurrent time frame
*/
class RecurrentTimeFrame {
    /**
     * @param {?=} daysOfWeek
     * @param {?=} startTime
     * @param {?=} endTime
     */
    constructor(daysOfWeek, startTime, endTime) {
        this.daysOfWeek = daysOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
if (false) {
    /** @type {?} */
    RecurrentTimeFrame.prototype.daysOfWeek;
    /** @type {?} */
    RecurrentTimeFrame.prototype.startTime;
    /** @type {?} */
    RecurrentTimeFrame.prototype.endTime;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
   In case of a line, it is not a closed polygon (first and last points are not connected)
   In case of area description, the line crossing direction field is ignored
*/
class RulePolygon {
    /**
     * @param {?=} lineCrossDir
     * @param {?=} points
     */
    constructor(lineCrossDir, points) {
        this.lineCrossDir = lineCrossDir;
        this.points = points;
    }
}
if (false) {
    /** @type {?} */
    RulePolygon.prototype.lineCrossDir;
    /** @type {?} */
    RulePolygon.prototype.points;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Object attributes to search for
*/
class SearchObject {
    /**
     * @param {?=} type
     * @param {?=} color
     * @param {?=} identifier
     */
    constructor(type, color, identifier) {
        this.type = type;
        this.color = color;
        this.identifier = identifier;
    }
}
if (false) {
    /** @type {?} */
    SearchObject.prototype.type;
    /** @type {?} */
    SearchObject.prototype.color;
    /** @type {?} */
    SearchObject.prototype.identifier;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Anomaly sensitivity defines parameters to adjust thresholds for anomaly events
*/
class Sensitivity {
    /**
     * @param {?=} events
     * @param {?=} timeUnit
     */
    constructor(events, timeUnit) {
        this.events = events;
        this.timeUnit = timeUnit;
    }
}
if (false) {
    /** @type {?} */
    Sensitivity.prototype.events;
    /** @type {?} */
    Sensitivity.prototype.timeUnit;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor anomaly information
   This data model is used by the inference process of Anomaly Detection
*/
class SensorAnomalyInfo {
    /**
     * @param {?=} sensorId
     * @param {?=} results
     * @param {?=} sensitivity
     * @param {?=} objectTypes
     */
    constructor(sensorId, results, sensitivity, objectTypes) {
        this.sensorId = sensorId;
        this.results = results;
        this.sensitivity = sensitivity;
        this.objectTypes = objectTypes;
    }
}
if (false) {
    /** @type {?} */
    SensorAnomalyInfo.prototype.sensorId;
    /** @type {?} */
    SensorAnomalyInfo.prototype.results;
    /** @type {?} */
    SensorAnomalyInfo.prototype.sensitivity;
    /** @type {?} */
    SensorAnomalyInfo.prototype.objectTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor status list over time
*/
class SensorStatusTimeSeries {
    /**
     * @param {?=} accountId
     * @param {?=} sensorId
     * @param {?=} label
     * @param {?=} data
     */
    constructor(accountId, sensorId, label, data) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.label = label;
        this.data = data;
    }
}
if (false) {
    /** @type {?} */
    SensorStatusTimeSeries.prototype.accountId;
    /** @type {?} */
    SensorStatusTimeSeries.prototype.sensorId;
    /** @type {?} */
    SensorStatusTimeSeries.prototype.label;
    /** @type {?} */
    SensorStatusTimeSeries.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Data point in a series representing a sensor status value in a specific timestamp
*/
class SensorStatusTimestamped {
    /**
     * @param {?=} mask
     * @param {?=} timestamp
     * @param {?=} label
     */
    constructor(mask, timestamp, label) {
        this.mask = mask;
        this.timestamp = timestamp;
        this.label = label;
    }
}
if (false) {
    /** @type {?} */
    SensorStatusTimestamped.prototype.mask;
    /** @type {?} */
    SensorStatusTimestamped.prototype.timestamp;
    /** @type {?} */
    SensorStatusTimestamped.prototype.label;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Key Value string tuple
*/
class StringKeyValue {
    /**
     * @param {?=} key
     * @param {?=} value
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    StringKeyValue.prototype.key;
    /** @type {?} */
    StringKeyValue.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Time frame (for search and reports)
*/
class TimeFrame {
    /**
     * @param {?=} from
     * @param {?=} to
     */
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
if (false) {
    /** @type {?} */
    TimeFrame.prototype.from;
    /** @type {?} */
    TimeFrame.prototype.to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Tree item for account hierarchy tree
*/
class TreeItem {
    /**
     * @param {?=} itemId
     * @param {?=} type
     * @param {?=} name
     * @param {?=} typeName
     */
    constructor(itemId, type, name, typeName) {
        this.itemId = itemId;
        this.type = type;
        this.name = name;
        this.typeName = typeName;
    }
}
if (false) {
    /** @type {?} */
    TreeItem.prototype.itemId;
    /** @type {?} */
    TreeItem.prototype.type;
    /** @type {?} */
    TreeItem.prototype.name;
    /** @type {?} */
    TreeItem.prototype.typeName;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Tree node in account hierarchy tree
*/
class TreeNode {
    /**
     * @param {?=} id
     * @param {?=} parentId
     * @param {?=} name
     * @param {?=} item
     * @param {?=} children
     */
    constructor(id, parentId, name, item, children) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.item = item;
        this.children = children;
    }
}
if (false) {
    /** @type {?} */
    TreeNode.prototype.id;
    /** @type {?} */
    TreeNode.prototype.parentId;
    /** @type {?} */
    TreeNode.prototype.name;
    /** @type {?} */
    TreeNode.prototype.item;
    /** @type {?} */
    TreeNode.prototype.children;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   User Account info (for adding new user to the account)
*/
class UserAccountInfo {
    /**
     * @param {?=} accountRole
     * @param {?=} rootNode
     * @param {?=} features
     */
    constructor(accountRole, rootNode, features) {
        this.accountRole = accountRole;
        this.rootNode = rootNode;
        this.features = features;
    }
}
if (false) {
    /** @type {?} */
    UserAccountInfo.prototype.accountRole;
    /** @type {?} */
    UserAccountInfo.prototype.rootNode;
    /** @type {?} */
    UserAccountInfo.prototype.features;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   User invitation data model - used by account admin to invite user to the account
*/
class UserInvitation {
    /**
     * @param {?=} email
     * @param {?=} role
     */
    constructor(email, role) {
        this.email = email;
        this.role = role;
    }
}
if (false) {
    /** @type {?} */
    UserInvitation.prototype.email;
    /** @type {?} */
    UserInvitation.prototype.role;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   User registration data model - used by self registered users
*/
class UserRegistration {
    /**
     * @param {?=} name
     * @param {?=} email
     * @param {?=} mobile
     * @param {?=} defaultAccount
     * @param {?=} role
     * @param {?=} type
     * @param {?=} tempPassword
     * @param {?=} changePassword
     * @param {?=} verifyByEmail
     */
    constructor(name, email, mobile, defaultAccount, role, type, tempPassword, changePassword, verifyByEmail) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.defaultAccount = defaultAccount;
        this.role = role;
        this.type = type;
        this.tempPassword = tempPassword;
        this.changePassword = changePassword;
        this.verifyByEmail = verifyByEmail;
    }
}
if (false) {
    /** @type {?} */
    UserRegistration.prototype.name;
    /** @type {?} */
    UserRegistration.prototype.email;
    /** @type {?} */
    UserRegistration.prototype.mobile;
    /** @type {?} */
    UserRegistration.prototype.defaultAccount;
    /** @type {?} */
    UserRegistration.prototype.role;
    /** @type {?} */
    UserRegistration.prototype.type;
    /** @type {?} */
    UserRegistration.prototype.tempPassword;
    /** @type {?} */
    UserRegistration.prototype.changePassword;
    /** @type {?} */
    UserRegistration.prototype.verifyByEmail;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
class BaseEntity {
    /**
     * @param {?=} id
     * @param {?=} docType
     * @param {?=} createdOn
     * @param {?=} updatedOn
     */
    constructor(id, docType, createdOn, updatedOn) {
        this.id = id;
        this._type = docType;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }
}
if (false) {
    /** @type {?} */
    BaseEntity.prototype.id;
    /** @type {?} */
    BaseEntity.prototype._type;
    /** @type {?} */
    BaseEntity.prototype.createdOn;
    /** @type {?} */
    BaseEntity.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
class Account extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Account.prototype.name;
    /** @type {?} */
    Account.prototype.key;
    /** @type {?} */
    Account.prototype.type;
    /** @type {?} */
    Account.prototype.status;
    /** @type {?} */
    Account.prototype.suspendedOn;
    /** @type {?} */
    Account.prototype.groups;
    /** @type {?} */
    Account.prototype.geoArea;
    /** @type {?} */
    Account.prototype.geoLocation;
    /** @type {?} */
    Account.prototype.timezone;
    /** @type {?} */
    Account.prototype.expiredOn;
    /** @type {?} */
    Account.prototype.maxChannels;
    /** @type {?} */
    Account.prototype.id;
    /** @type {?} */
    Account.prototype._type;
    /** @type {?} */
    Account.prototype.createdOn;
    /** @type {?} */
    Account.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
   Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
   A single appliance can host multiple agents (container instances of the same Docker image)
*/
class Agent extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Agent.prototype.accountId;
    /** @type {?} */
    Agent.prototype.applianceId;
    /** @type {?} */
    Agent.prototype.status;
    /** @type {?} */
    Agent.prototype.id;
    /** @type {?} */
    Agent.prototype._type;
    /** @type {?} */
    Agent.prototype.createdOn;
    /** @type {?} */
    Agent.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   API Key is used per application (e.g. Portal, Console, Mobile App) or service (e.g. Health Service, Search Service ...) for identifying the consumer.
   The access to sets of REST endpoints is restricted according the API key.
   API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
*/
class ApiKey extends BaseEntity {
}
if (false) {
    /** @type {?} */
    ApiKey.prototype.appName;
    /** @type {?} */
    ApiKey.prototype.appKey;
    /** @type {?} */
    ApiKey.prototype.version;
    /** @type {?} */
    ApiKey.prototype.isSystemKey;
    /** @type {?} */
    ApiKey.prototype.isEnabled;
    /** @type {?} */
    ApiKey.prototype.id;
    /** @type {?} */
    ApiKey.prototype._type;
    /** @type {?} */
    ApiKey.prototype.createdOn;
    /** @type {?} */
    ApiKey.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
class Appliance extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Appliance.prototype.name;
    /** @type {?} */
    Appliance.prototype.accountId;
    /** @type {?} */
    Appliance.prototype.folderId;
    /** @type {?} */
    Appliance.prototype.status;
    /** @type {?} */
    Appliance.prototype.pairingKey;
    /** @type {?} */
    Appliance.prototype.deletedOn;
    /** @type {?} */
    Appliance.prototype.reportedOn;
    /** @type {?} */
    Appliance.prototype.machineId;
    /** @type {?} */
    Appliance.prototype.configurationId;
    /** @type {?} */
    Appliance.prototype.configurationVersionId;
    /** @type {?} */
    Appliance.prototype.capabilities;
    /** @type {?} */
    Appliance.prototype.id;
    /** @type {?} */
    Appliance.prototype._type;
    /** @type {?} */
    Appliance.prototype.createdOn;
    /** @type {?} */
    Appliance.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
class ApplianceCapabilities {
    /**
     * @param {?=} productType
     * @param {?=} serialNumber
     * @param {?=} deviceModel
     * @param {?=} cpuModel
     * @param {?=} uuid
     * @param {?=} ip
     * @param {?=} host
     * @param {?=} dockerVersion
     * @param {?=} kernelVersion
     * @param {?=} totalRam
     * @param {?=} disks
     * @param {?=} commandInterval
     * @param {?=} statusInterval
     * @param {?=} dockerCredentials
     * @param {?=} configurationVersion
     */
    constructor(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion) {
        this.productType = productType;
        this.serialNumber = serialNumber;
        this.deviceModel = deviceModel;
        this.cpuModel = cpuModel;
        this.uuid = uuid;
        this.ip = ip;
        this.host = host;
        this.dockerVersion = dockerVersion;
        this.kernelVersion = kernelVersion;
        this.totalRam = totalRam;
        this.disks = disks;
        this.commandInterval = commandInterval;
        this.statusInterval = statusInterval;
        this.dockerCredentials = dockerCredentials;
        this.configurationVersion = configurationVersion;
    }
}
if (false) {
    /** @type {?} */
    ApplianceCapabilities.prototype.productType;
    /** @type {?} */
    ApplianceCapabilities.prototype.serialNumber;
    /** @type {?} */
    ApplianceCapabilities.prototype.deviceModel;
    /** @type {?} */
    ApplianceCapabilities.prototype.cpuModel;
    /** @type {?} */
    ApplianceCapabilities.prototype.uuid;
    /** @type {?} */
    ApplianceCapabilities.prototype.ip;
    /** @type {?} */
    ApplianceCapabilities.prototype.host;
    /** @type {?} */
    ApplianceCapabilities.prototype.dockerVersion;
    /** @type {?} */
    ApplianceCapabilities.prototype.kernelVersion;
    /** @type {?} */
    ApplianceCapabilities.prototype.totalRam;
    /** @type {?} */
    ApplianceCapabilities.prototype.disks;
    /** @type {?} */
    ApplianceCapabilities.prototype.commandInterval;
    /** @type {?} */
    ApplianceCapabilities.prototype.statusInterval;
    /** @type {?} */
    ApplianceCapabilities.prototype.dockerCredentials;
    /** @type {?} */
    ApplianceCapabilities.prototype.configurationVersion;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance command - represents commands sent to the appliance
*/
class ApplianceCommand extends BaseEntity {
}
if (false) {
    /** @type {?} */
    ApplianceCommand.prototype.accountId;
    /** @type {?} */
    ApplianceCommand.prototype.applianceId;
    /** @type {?} */
    ApplianceCommand.prototype.opCode;
    /** @type {?} */
    ApplianceCommand.prototype.status;
    /** @type {?} */
    ApplianceCommand.prototype.components;
    /** @type {?} */
    ApplianceCommand.prototype.componentIds;
    /** @type {?} */
    ApplianceCommand.prototype.id;
    /** @type {?} */
    ApplianceCommand.prototype._type;
    /** @type {?} */
    ApplianceCommand.prototype.createdOn;
    /** @type {?} */
    ApplianceCommand.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Appliance status - reported periodically by the appliance
*/
class ApplianceStatus extends BaseEntity {
}
if (false) {
    /** @type {?} */
    ApplianceStatus.prototype.applianceId;
    /** @type {?} */
    ApplianceStatus.prototype.cpuAvg;
    /** @type {?} */
    ApplianceStatus.prototype.cpuMax;
    /** @type {?} */
    ApplianceStatus.prototype.ram;
    /** @type {?} */
    ApplianceStatus.prototype.loadAvg;
    /** @type {?} */
    ApplianceStatus.prototype.id;
    /** @type {?} */
    ApplianceStatus.prototype._type;
    /** @type {?} */
    ApplianceStatus.prototype.createdOn;
    /** @type {?} */
    ApplianceStatus.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Audit Log - each entry represents a single action done by user
*/
class AuditLog extends BaseEntity {
}
if (false) {
    /** @type {?} */
    AuditLog.prototype.accountId;
    /** @type {?} */
    AuditLog.prototype.userId;
    /** @type {?} */
    AuditLog.prototype.userRole;
    /** @type {?} */
    AuditLog.prototype.userName;
    /** @type {?} */
    AuditLog.prototype.action;
    /** @type {?} */
    AuditLog.prototype.itemType;
    /** @type {?} */
    AuditLog.prototype.itemId;
    /** @type {?} */
    AuditLog.prototype.itemName;
    /** @type {?} */
    AuditLog.prototype.beforeChange;
    /** @type {?} */
    AuditLog.prototype.afterChange;
    /** @type {?} */
    AuditLog.prototype.id;
    /** @type {?} */
    AuditLog.prototype._type;
    /** @type {?} */
    AuditLog.prototype.createdOn;
    /** @type {?} */
    AuditLog.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Calendar type specifies list of events or holidays
*/
class Calendar extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Calendar.prototype.accountId;
    /** @type {?} */
    Calendar.prototype.folderId;
    /** @type {?} */
    Calendar.prototype.name;
    /** @type {?} */
    Calendar.prototype.description;
    /** @type {?} */
    Calendar.prototype.enabled;
    /** @type {?} */
    Calendar.prototype.timeFrames;
    /** @type {?} */
    Calendar.prototype.id;
    /** @type {?} */
    Calendar.prototype._type;
    /** @type {?} */
    Calendar.prototype.createdOn;
    /** @type {?} */
    Calendar.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   SW Component version type
*/
class ComponentConfiguration {
    /**
     * @param {?=} id
     * @param {?=} dockerImage
     * @param {?=} variables
     */
    constructor(id, dockerImage, variables) {
        this.id = id;
        this.dockerImage = dockerImage;
        this.variables = variables;
    }
}
if (false) {
    /** @type {?} */
    ComponentConfiguration.prototype.id;
    /** @type {?} */
    ComponentConfiguration.prototype.dockerImage;
    /** @type {?} */
    ComponentConfiguration.prototype.variables;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   SW Configuration type
*/
class Configuration extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Configuration.prototype.description;
    /** @type {?} */
    Configuration.prototype.currentVersion;
    /** @type {?} */
    Configuration.prototype.targets;
    /** @type {?} */
    Configuration.prototype.id;
    /** @type {?} */
    Configuration.prototype._type;
    /** @type {?} */
    Configuration.prototype.createdOn;
    /** @type {?} */
    Configuration.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   SW Configuration version type
*/
class ConfigurationVersion extends BaseEntity {
}
if (false) {
    /** @type {?} */
    ConfigurationVersion.prototype.configurationId;
    /** @type {?} */
    ConfigurationVersion.prototype.versionNum;
    /** @type {?} */
    ConfigurationVersion.prototype.description;
    /** @type {?} */
    ConfigurationVersion.prototype.components;
    /** @type {?} */
    ConfigurationVersion.prototype.id;
    /** @type {?} */
    ConfigurationVersion.prototype._type;
    /** @type {?} */
    ConfigurationVersion.prototype.createdOn;
    /** @type {?} */
    ConfigurationVersion.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Detection event type
*/
class Event extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Event.prototype.sensorId;
    /** @type {?} */
    Event.prototype.accountId;
    /** @type {?} */
    Event.prototype.startTime;
    /** @type {?} */
    Event.prototype.ruleId;
    /** @type {?} */
    Event.prototype.description;
    /** @type {?} */
    Event.prototype.ruleType;
    /** @type {?} */
    Event.prototype.objectType;
    /** @type {?} */
    Event.prototype.behaviorType;
    /** @type {?} */
    Event.prototype.status;
    /** @type {?} */
    Event.prototype.geoLocation;
    /** @type {?} */
    Event.prototype.imagePath;
    /** @type {?} */
    Event.prototype.clipPath;
    /** @type {?} */
    Event.prototype.severity;
    /** @type {?} */
    Event.prototype.objectsInfo;
    /** @type {?} */
    Event.prototype.imageTime;
    /** @type {?} */
    Event.prototype.id;
    /** @type {?} */
    Event.prototype._type;
    /** @type {?} */
    Event.prototype.createdOn;
    /** @type {?} */
    Event.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Detection event type
*/
class EventStatistics extends BaseEntity {
}
if (false) {
    /** @type {?} */
    EventStatistics.prototype.sampleTime;
    /** @type {?} */
    EventStatistics.prototype.eventCount;
    /** @type {?} */
    EventStatistics.prototype.anomalyCount;
    /** @type {?} */
    EventStatistics.prototype.customCount;
    /** @type {?} */
    EventStatistics.prototype.id;
    /** @type {?} */
    EventStatistics.prototype._type;
    /** @type {?} */
    EventStatistics.prototype.createdOn;
    /** @type {?} */
    EventStatistics.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   System functionality (feature) description
*/
class Feature extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Feature.prototype.name;
    /** @type {?} */
    Feature.prototype.description;
    /** @type {?} */
    Feature.prototype.category;
    /** @type {?} */
    Feature.prototype.id;
    /** @type {?} */
    Feature.prototype._type;
    /** @type {?} */
    Feature.prototype.createdOn;
    /** @type {?} */
    Feature.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Group of features
*/
class FeaturesGroup extends BaseEntity {
}
if (false) {
    /** @type {?} */
    FeaturesGroup.prototype.name;
    /** @type {?} */
    FeaturesGroup.prototype.features;
    /** @type {?} */
    FeaturesGroup.prototype.id;
    /** @type {?} */
    FeaturesGroup.prototype._type;
    /** @type {?} */
    FeaturesGroup.prototype.createdOn;
    /** @type {?} */
    FeaturesGroup.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Folder (container for sensors and sub folders)
*/
class Folder extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Folder.prototype.parentId;
    /** @type {?} */
    Folder.prototype.accountId;
    /** @type {?} */
    Folder.prototype.name;
    /** @type {?} */
    Folder.prototype.depth;
    /** @type {?} */
    Folder.prototype.geoArea;
    /** @type {?} */
    Folder.prototype.geoLocation;
    /** @type {?} */
    Folder.prototype.timezone;
    /** @type {?} */
    Folder.prototype.id;
    /** @type {?} */
    Folder.prototype._type;
    /** @type {?} */
    Folder.prototype.createdOn;
    /** @type {?} */
    Folder.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Integration action describes integration protocol and details to execute
*/
class IntegrationAction extends BaseEntity {
}
if (false) {
    /** @type {?} */
    IntegrationAction.prototype.accountId;
    /** @type {?} */
    IntegrationAction.prototype.folderId;
    /** @type {?} */
    IntegrationAction.prototype.name;
    /** @type {?} */
    IntegrationAction.prototype.eventAction;
    /** @type {?} */
    IntegrationAction.prototype.id;
    /** @type {?} */
    IntegrationAction.prototype._type;
    /** @type {?} */
    IntegrationAction.prototype.createdOn;
    /** @type {?} */
    IntegrationAction.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Integration target describes connectivity details of the integrated system
   Definition of target systems is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder
*/
class IntegrationTarget extends BaseEntity {
}
if (false) {
    /** @type {?} */
    IntegrationTarget.prototype.accountId;
    /** @type {?} */
    IntegrationTarget.prototype.name;
    /** @type {?} */
    IntegrationTarget.prototype.type;
    /** @type {?} */
    IntegrationTarget.prototype.protocol;
    /** @type {?} */
    IntegrationTarget.prototype.operation;
    /** @type {?} */
    IntegrationTarget.prototype.host;
    /** @type {?} */
    IntegrationTarget.prototype.port;
    /** @type {?} */
    IntegrationTarget.prototype.user;
    /** @type {?} */
    IntegrationTarget.prototype.password;
    /** @type {?} */
    IntegrationTarget.prototype.url;
    /** @type {?} */
    IntegrationTarget.prototype.headers;
    /** @type {?} */
    IntegrationTarget.prototype.recipients;
    /** @type {?} */
    IntegrationTarget.prototype.subject;
    /** @type {?} */
    IntegrationTarget.prototype.body;
    /** @type {?} */
    IntegrationTarget.prototype.clipRequired;
    /** @type {?} */
    IntegrationTarget.prototype.id;
    /** @type {?} */
    IntegrationTarget.prototype._type;
    /** @type {?} */
    IntegrationTarget.prototype.createdOn;
    /** @type {?} */
    IntegrationTarget.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   License information includes on-premises deployment's license restrictions
*/
class License extends BaseEntity {
}
if (false) {
    /** @type {?} */
    License.prototype.customerId;
    /** @type {?} */
    License.prototype.customerName;
    /** @type {?} */
    License.prototype.deploymentName;
    /** @type {?} */
    License.prototype.expiration;
    /** @type {?} */
    License.prototype.channelsLimit;
    /** @type {?} */
    License.prototype.devicesLimit;
    /** @type {?} */
    License.prototype.features;
    /** @type {?} */
    License.prototype.id;
    /** @type {?} */
    License.prototype._type;
    /** @type {?} */
    License.prototype.createdOn;
    /** @type {?} */
    License.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor preset represent specific sensor FOV attributes.
   In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
*/
class Preset extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Preset.prototype.accountId;
    /** @type {?} */
    Preset.prototype.sensorId;
    /** @type {?} */
    Preset.prototype.presetNum;
    /** @type {?} */
    Preset.prototype.refImageUrl;
    /** @type {?} */
    Preset.prototype.calibration;
    /** @type {?} */
    Preset.prototype.id;
    /** @type {?} */
    Preset.prototype._type;
    /** @type {?} */
    Preset.prototype.createdOn;
    /** @type {?} */
    Preset.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Query definitions for report specification
*/
class ReportDefinition extends BaseEntity {
}
if (false) {
    /** @type {?} */
    ReportDefinition.prototype.accountId;
    /** @type {?} */
    ReportDefinition.prototype.userId;
    /** @type {?} */
    ReportDefinition.prototype.name;
    /** @type {?} */
    ReportDefinition.prototype.tag;
    /** @type {?} */
    ReportDefinition.prototype.privateReport;
    /** @type {?} */
    ReportDefinition.prototype.id;
    /** @type {?} */
    ReportDefinition.prototype._type;
    /** @type {?} */
    ReportDefinition.prototype.createdOn;
    /** @type {?} */
    ReportDefinition.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
class Rule extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Rule.prototype.accountId;
    /** @type {?} */
    Rule.prototype.sensorId;
    /** @type {?} */
    Rule.prototype.name;
    /** @type {?} */
    Rule.prototype.description;
    /** @type {?} */
    Rule.prototype.scheduleId;
    /** @type {?} */
    Rule.prototype.active;
    /** @type {?} */
    Rule.prototype.externalId;
    /** @type {?} */
    Rule.prototype.ruleType;
    /** @type {?} */
    Rule.prototype.behaviorType;
    /** @type {?} */
    Rule.prototype.objectTypes;
    /** @type {?} */
    Rule.prototype.severity;
    /** @type {?} */
    Rule.prototype.sensitivity;
    /** @type {?} */
    Rule.prototype.dwellTime;
    /** @type {?} */
    Rule.prototype.maxObjectsInGroup;
    /** @type {?} */
    Rule.prototype.polygons;
    /** @type {?} */
    Rule.prototype.id;
    /** @type {?} */
    Rule.prototype._type;
    /** @type {?} */
    Rule.prototype.createdOn;
    /** @type {?} */
    Rule.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Schedule is a list of recurrent time frames to specify active analytics
*/
class Schedule extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Schedule.prototype.accountId;
    /** @type {?} */
    Schedule.prototype.folderId;
    /** @type {?} */
    Schedule.prototype.name;
    /** @type {?} */
    Schedule.prototype.description;
    /** @type {?} */
    Schedule.prototype.enabled;
    /** @type {?} */
    Schedule.prototype.timezone;
    /** @type {?} */
    Schedule.prototype.timeFrames;
    /** @type {?} */
    Schedule.prototype.id;
    /** @type {?} */
    Schedule.prototype._type;
    /** @type {?} */
    Schedule.prototype.createdOn;
    /** @type {?} */
    Schedule.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Scheduled Report defines when to aut generate report and whet to do with it
*/
class ScheduledReport extends BaseEntity {
}
if (false) {
    /** @type {?} */
    ScheduledReport.prototype.accountId;
    /** @type {?} */
    ScheduledReport.prototype.reportId;
    /** @type {?} */
    ScheduledReport.prototype.name;
    /** @type {?} */
    ScheduledReport.prototype.recurrent;
    /** @type {?} */
    ScheduledReport.prototype.id;
    /** @type {?} */
    ScheduledReport.prototype._type;
    /** @type {?} */
    ScheduledReport.prototype.createdOn;
    /** @type {?} */
    ScheduledReport.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Query definitions for ad-hoc search specification
*/
class SearchDefinition extends BaseEntity {
}
if (false) {
    /** @type {?} */
    SearchDefinition.prototype.accountId;
    /** @type {?} */
    SearchDefinition.prototype.userId;
    /** @type {?} */
    SearchDefinition.prototype.name;
    /** @type {?} */
    SearchDefinition.prototype.tag;
    /** @type {?} */
    SearchDefinition.prototype.privateSearch;
    /** @type {?} */
    SearchDefinition.prototype.objects;
    /** @type {?} */
    SearchDefinition.prototype.timeScope;
    /** @type {?} */
    SearchDefinition.prototype.timeFrame;
    /** @type {?} */
    SearchDefinition.prototype.sourceScope;
    /** @type {?} */
    SearchDefinition.prototype.sensorIds;
    /** @type {?} */
    SearchDefinition.prototype.folderIds;
    /** @type {?} */
    SearchDefinition.prototype.geoCircle;
    /** @type {?} */
    SearchDefinition.prototype.geoPolygon;
    /** @type {?} */
    SearchDefinition.prototype.id;
    /** @type {?} */
    SearchDefinition.prototype._type;
    /** @type {?} */
    SearchDefinition.prototype.createdOn;
    /** @type {?} */
    SearchDefinition.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor type
*/
class Sensor extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Sensor.prototype.accountId;
    /** @type {?} */
    Sensor.prototype.folderId;
    /** @type {?} */
    Sensor.prototype.applianceId;
    /** @type {?} */
    Sensor.prototype.agentId;
    /** @type {?} */
    Sensor.prototype.name;
    /** @type {?} */
    Sensor.prototype.type;
    /** @type {?} */
    Sensor.prototype.status;
    /** @type {?} */
    Sensor.prototype.streamType;
    /** @type {?} */
    Sensor.prototype.imageResolution;
    /** @type {?} */
    Sensor.prototype.recording;
    /** @type {?} */
    Sensor.prototype.metadata;
    /** @type {?} */
    Sensor.prototype.anomalyDetection;
    /** @type {?} */
    Sensor.prototype.enabledByUser;
    /** @type {?} */
    Sensor.prototype.alarmInterval;
    /** @type {?} */
    Sensor.prototype.maxBBoxPerFrame;
    /** @type {?} */
    Sensor.prototype.maxFrameRate;
    /** @type {?} */
    Sensor.prototype.streamUri;
    /** @type {?} */
    Sensor.prototype.geoLocation;
    /** @type {?} */
    Sensor.prototype.azimuth;
    /** @type {?} */
    Sensor.prototype.fovAttributes;
    /** @type {?} */
    Sensor.prototype.optimizationEnabled;
    /** @type {?} */
    Sensor.prototype.externalId;
    /** @type {?} */
    Sensor.prototype.tags;
    /** @type {?} */
    Sensor.prototype.debugInfo;
    /** @type {?} */
    Sensor.prototype.id;
    /** @type {?} */
    Sensor.prototype._type;
    /** @type {?} */
    Sensor.prototype.createdOn;
    /** @type {?} */
    Sensor.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor training analysis results
   This data is used by the training process of Anomaly Detection
   The entity Id is the sensorId
*/
class SensorAnalysisResults extends BaseEntity {
}
if (false) {
    /** @type {?} */
    SensorAnalysisResults.prototype.results;
    /** @type {?} */
    SensorAnalysisResults.prototype.id;
    /** @type {?} */
    SensorAnalysisResults.prototype._type;
    /** @type {?} */
    SensorAnalysisResults.prototype.createdOn;
    /** @type {?} */
    SensorAnalysisResults.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor debug information
*/
class SensorDebugInfo {
    /**
     * @param {?=} saveCrops
     * @param {?=} saveFrames
     * @param {?=} saveEventImages
     */
    constructor(saveCrops, saveFrames, saveEventImages) {
        this.saveCrops = saveCrops;
        this.saveFrames = saveFrames;
        this.saveEventImages = saveEventImages;
    }
}
if (false) {
    /** @type {?} */
    SensorDebugInfo.prototype.saveCrops;
    /** @type {?} */
    SensorDebugInfo.prototype.saveFrames;
    /** @type {?} */
    SensorDebugInfo.prototype.saveEventImages;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor health status
*/
class SensorHealth extends BaseEntity {
}
if (false) {
    /** @type {?} */
    SensorHealth.prototype.sensorId;
    /** @type {?} */
    SensorHealth.prototype.mask;
    /** @type {?} */
    SensorHealth.prototype.status;
    /** @type {?} */
    SensorHealth.prototype.id;
    /** @type {?} */
    SensorHealth.prototype._type;
    /** @type {?} */
    SensorHealth.prototype.createdOn;
    /** @type {?} */
    SensorHealth.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Sensor health status
*/
class SensorStatus extends BaseEntity {
}
if (false) {
    /** @type {?} */
    SensorStatus.prototype.sensorId;
    /** @type {?} */
    SensorStatus.prototype.mask;
    /** @type {?} */
    SensorStatus.prototype.status;
    /** @type {?} */
    SensorStatus.prototype.id;
    /** @type {?} */
    SensorStatus.prototype._type;
    /** @type {?} */
    SensorStatus.prototype.createdOn;
    /** @type {?} */
    SensorStatus.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Software update status type
*/
class UpdateStatus extends BaseEntity {
}
if (false) {
    /** @type {?} */
    UpdateStatus.prototype.timestamp;
    /** @type {?} */
    UpdateStatus.prototype.accountId;
    /** @type {?} */
    UpdateStatus.prototype.applianceId;
    /** @type {?} */
    UpdateStatus.prototype.component;
    /** @type {?} */
    UpdateStatus.prototype.version;
    /** @type {?} */
    UpdateStatus.prototype.id;
    /** @type {?} */
    UpdateStatus.prototype._type;
    /** @type {?} */
    UpdateStatus.prototype.createdOn;
    /** @type {?} */
    UpdateStatus.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   User type
*/
class User extends BaseEntity {
}
if (false) {
    /** @type {?} */
    User.prototype.name;
    /** @type {?} */
    User.prototype.email;
    /** @type {?} */
    User.prototype.mobile;
    /** @type {?} */
    User.prototype.salt;
    /** @type {?} */
    User.prototype.hash;
    /** @type {?} */
    User.prototype.type;
    /** @type {?} */
    User.prototype.status;
    /** @type {?} */
    User.prototype.suspendedOn;
    /** @type {?} */
    User.prototype.signInAttempts;
    /** @type {?} */
    User.prototype.lastFailedSignIn;
    /** @type {?} */
    User.prototype.changePassword;
    /** @type {?} */
    User.prototype.passwordChangedOn;
    /** @type {?} */
    User.prototype.accountRoles;
    /** @type {?} */
    User.prototype.defaultAccount;
    /** @type {?} */
    User.prototype.id;
    /** @type {?} */
    User.prototype._type;
    /** @type {?} */
    User.prototype.createdOn;
    /** @type {?} */
    User.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Verification type used to verify user with a temporary code
*/
class Verification extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Verification.prototype.code;
    /** @type {?} */
    Verification.prototype.userId;
    /** @type {?} */
    Verification.prototype.email;
    /** @type {?} */
    Verification.prototype.mobile;
    /** @type {?} */
    Verification.prototype.sent;
    /** @type {?} */
    Verification.prototype.id;
    /** @type {?} */
    Verification.prototype._type;
    /** @type {?} */
    Verification.prototype.createdOn;
    /** @type {?} */
    Verification.prototype.updatedOn;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AccountRoleCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Account administrator can perform all operations [1] 
    ADMIN: 1,
    // Supervisor can perform all operations on folders [2] 
    SUPERVISOR: 2,
    // Account operator can perform operations on events [3] 
    OPERATOR: 3,
    // Registered account user [4] 
    USER: 4,
    // Edge config user (installer) [5 
    INSTALLER: 5,
};
AccountRoleCode[AccountRoleCode.UNDEFINED] = 'UNDEFINED';
AccountRoleCode[AccountRoleCode.ADMIN] = 'ADMIN';
AccountRoleCode[AccountRoleCode.SUPERVISOR] = 'SUPERVISOR';
AccountRoleCode[AccountRoleCode.OPERATOR] = 'OPERATOR';
AccountRoleCode[AccountRoleCode.USER] = 'USER';
AccountRoleCode[AccountRoleCode.INSTALLER] = 'INSTALLER';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AccountStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Active account [1] 
    ACTIVE: 1,
    // Suspended (non-active) account [2] 
    SUSPENDED: 2,
    // Deleted account [3] 
    DELETED: 3,
};
AccountStatusCode[AccountStatusCode.UNDEFINED] = 'UNDEFINED';
AccountStatusCode[AccountStatusCode.ACTIVE] = 'ACTIVE';
AccountStatusCode[AccountStatusCode.SUSPENDED] = 'SUSPENDED';
AccountStatusCode[AccountStatusCode.DELETED] = 'DELETED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AccountTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Demo account for Agent Vi [1] 
    DEMO: 1,
    // Trial account for pilots [2] 
    TRIAL: 2,
    // Active account for partner [3] 
    PARTNER: 3,
    // Deleted account [4] 
    CUSTOMER: 4,
};
AccountTypeCode[AccountTypeCode.UNDEFINED] = 'UNDEFINED';
AccountTypeCode[AccountTypeCode.DEMO] = 'DEMO';
AccountTypeCode[AccountTypeCode.TRIAL] = 'TRIAL';
AccountTypeCode[AccountTypeCode.PARTNER] = 'PARTNER';
AccountTypeCode[AccountTypeCode.CUSTOMER] = 'CUSTOMER';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AgentStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Agent is running [1] 
    ACTIVE: 1,
    // Agent in Warning state [2] 
    WARNING: 2,
    // Agent in Error state [3] 
    ERROR: 3,
    // Agent is not active [4] 
    INACTIVE: 4,
    // Agent was added but did not establish connection yet [5] 
    PENDING: 5,
};
AgentStatusCode[AgentStatusCode.UNDEFINED] = 'UNDEFINED';
AgentStatusCode[AgentStatusCode.ACTIVE] = 'ACTIVE';
AgentStatusCode[AgentStatusCode.WARNING] = 'WARNING';
AgentStatusCode[AgentStatusCode.ERROR] = 'ERROR';
AgentStatusCode[AgentStatusCode.INACTIVE] = 'INACTIVE';
AgentStatusCode[AgentStatusCode.PENDING] = 'PENDING';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ApplianceCommandCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Send capabilities (no payload) [1] 
    GET_CAPABILITIES: 1,
    // Set components configuration (or add it if not exists) [2] 
    SET_COMPONENTS: 2,
    // Remove components (command payload described in ApplianceCommandRemoveChannel) [3] 
    REMOVE_COMPONENTS: 3,
    // Restart component containers (currently do not implement) [4] 
    RESTART_COMPONENTS: 4,
    // Send list of all running containers (no payload) [5] 
    LIST_CONTAINERS: 5,
    // Send logs of specified component (provided in the command payload) [6] 
    SEND_LOGS: 6,
    // Send status (no payload) [7] 
    SEND_STATUS: 7,
    // Reset appliance credentials (no payload) [8] 
    RESET_CREDENTIALS: 8,
    // Reboot host (no payload) [9] 
    REBOOT_HOST: 9,
    // Reset to factory mode (remove all container except manager) [10] 
    FACTORY_RESET: 10,
    // Open SSH tunnel [11] 
    OPEN_SSH: 11,
    // Close SSH tunnel [12] 
    CLOSE_SSH: 12,
};
ApplianceCommandCode[ApplianceCommandCode.UNDEFINED] = 'UNDEFINED';
ApplianceCommandCode[ApplianceCommandCode.GET_CAPABILITIES] = 'GET_CAPABILITIES';
ApplianceCommandCode[ApplianceCommandCode.SET_COMPONENTS] = 'SET_COMPONENTS';
ApplianceCommandCode[ApplianceCommandCode.REMOVE_COMPONENTS] = 'REMOVE_COMPONENTS';
ApplianceCommandCode[ApplianceCommandCode.RESTART_COMPONENTS] = 'RESTART_COMPONENTS';
ApplianceCommandCode[ApplianceCommandCode.LIST_CONTAINERS] = 'LIST_CONTAINERS';
ApplianceCommandCode[ApplianceCommandCode.SEND_LOGS] = 'SEND_LOGS';
ApplianceCommandCode[ApplianceCommandCode.SEND_STATUS] = 'SEND_STATUS';
ApplianceCommandCode[ApplianceCommandCode.RESET_CREDENTIALS] = 'RESET_CREDENTIALS';
ApplianceCommandCode[ApplianceCommandCode.REBOOT_HOST] = 'REBOOT_HOST';
ApplianceCommandCode[ApplianceCommandCode.FACTORY_RESET] = 'FACTORY_RESET';
ApplianceCommandCode[ApplianceCommandCode.OPEN_SSH] = 'OPEN_SSH';
ApplianceCommandCode[ApplianceCommandCode.CLOSE_SSH] = 'CLOSE_SSH';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ApplianceStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Appliance is running [1] 
    ACTIVE: 1,
    // Appliance in Warning state [2] 
    WARNING: 2,
    // Appliance in Error state [3] 
    ERROR: 3,
    // Appliance is not active [4] 
    INACTIVE: 4,
    // Appliance was added but did not establish connection yet [5] 
    PENDING: 5,
    // Appliance is paired but not registered yet [6] 
    UNREGISTERED: 6,
    // Appliance deleted from the system [9] 
    DELETED: 9,
};
ApplianceStatusCode[ApplianceStatusCode.UNDEFINED] = 'UNDEFINED';
ApplianceStatusCode[ApplianceStatusCode.ACTIVE] = 'ACTIVE';
ApplianceStatusCode[ApplianceStatusCode.WARNING] = 'WARNING';
ApplianceStatusCode[ApplianceStatusCode.ERROR] = 'ERROR';
ApplianceStatusCode[ApplianceStatusCode.INACTIVE] = 'INACTIVE';
ApplianceStatusCode[ApplianceStatusCode.PENDING] = 'PENDING';
ApplianceStatusCode[ApplianceStatusCode.UNREGISTERED] = 'UNREGISTERED';
ApplianceStatusCode[ApplianceStatusCode.DELETED] = 'DELETED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const BehaviorTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Crossing a Line (innoVi) [1] 
    INNOVI_CROSSING: 1,
    // Moving in an area (innoVi) [2] 
    INNOVI_MOVING: 2,
    // Stopped vehicle (innoVi) [3] 
    INNOVI_STOPPED: 3,
    // Occupancy (innoVi) [4] 
    INNOVI_OCCUPANCY: 4,
    // Grouping (innoVi) [5] 
    INNOVI_GROUPING: 5,
    // Ignore mask (innovi 1) [100] 
    INNOVI_MASK_IGNORE: 100,
    // Shutdown mask (Currently unused) [101] 
    INNOVI_MASK_SHUTDOWN: 101,
    // General Anomaly (innoVi) [200] 
    INNOVI_ANOMALY: 200,
    // Hard hat object exists (custom: Hard Hat) [1001] 
    HARD_HAT_EXISTS: 1001,
    // Hard hat object not exists (custom: Hard Hat) [1002] 
    HARD_HAT_NOT_EXISTS: 1002,
    // Trash object exists (custom: Trash Dumping) [1101] 
    TRASH_EXISTS: 1101,
    // Trash object not exists (custom: Trash Dumping) [1102] 
    TRASH_NOT_EXISTS: 1102,
    // MCC object exists (custom: MCC) [1201] 
    MCC_EXISTS: 1201,
    // MCC object not exists (custom: MCC) [1202] 
    MCC_NOT_EXISTS: 1202,
};
BehaviorTypeCode[BehaviorTypeCode.UNDEFINED] = 'UNDEFINED';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_CROSSING] = 'INNOVI_CROSSING';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_MOVING] = 'INNOVI_MOVING';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_STOPPED] = 'INNOVI_STOPPED';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_OCCUPANCY] = 'INNOVI_OCCUPANCY';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_GROUPING] = 'INNOVI_GROUPING';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_MASK_IGNORE] = 'INNOVI_MASK_IGNORE';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_MASK_SHUTDOWN] = 'INNOVI_MASK_SHUTDOWN';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_ANOMALY] = 'INNOVI_ANOMALY';
BehaviorTypeCode[BehaviorTypeCode.HARD_HAT_EXISTS] = 'HARD_HAT_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.HARD_HAT_NOT_EXISTS] = 'HARD_HAT_NOT_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.TRASH_EXISTS] = 'TRASH_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.TRASH_NOT_EXISTS] = 'TRASH_NOT_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.MCC_EXISTS] = 'MCC_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.MCC_NOT_EXISTS] = 'MCC_NOT_EXISTS';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ColorCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // No color [1] 
    NONE: 1,
    // Unknown color [2] 
    UNKNOWN: 2,
    // Multiple colors [3] 
    MULTICOLORED: 3,
    // White [4] 
    WHITE: 4,
    // Black [5] 
    BLACK: 5,
    // Gray [6] 
    GRAY: 6,
    // Blue [7] 
    BLUE: 7,
    // Brown [8] 
    BROWN: 8,
    // Green [9] 
    GREEN: 9,
    // Yellow [10] 
    YELLOW: 10,
    // Orange [11] 
    ORANGE: 11,
    // Red [12] 
    RED: 12,
    // Pink [13] 
    PINK: 13,
    // Purple [14] 
    PURPLE: 14,
    // Cyan [15] 
    CYAN: 15,
    // Silver [16] 
    SILVER: 16,
};
ColorCode[ColorCode.UNDEFINED] = 'UNDEFINED';
ColorCode[ColorCode.NONE] = 'NONE';
ColorCode[ColorCode.UNKNOWN] = 'UNKNOWN';
ColorCode[ColorCode.MULTICOLORED] = 'MULTICOLORED';
ColorCode[ColorCode.WHITE] = 'WHITE';
ColorCode[ColorCode.BLACK] = 'BLACK';
ColorCode[ColorCode.GRAY] = 'GRAY';
ColorCode[ColorCode.BLUE] = 'BLUE';
ColorCode[ColorCode.BROWN] = 'BROWN';
ColorCode[ColorCode.GREEN] = 'GREEN';
ColorCode[ColorCode.YELLOW] = 'YELLOW';
ColorCode[ColorCode.ORANGE] = 'ORANGE';
ColorCode[ColorCode.RED] = 'RED';
ColorCode[ColorCode.PINK] = 'PINK';
ColorCode[ColorCode.PURPLE] = 'PURPLE';
ColorCode[ColorCode.CYAN] = 'CYAN';
ColorCode[ColorCode.SILVER] = 'SILVER';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ColorTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Body color (for person) [1] 
    BODY: 1,
    // Upper body color (for person) [2] 
    UPPER_BODY: 2,
    // Lower body color (for person) [3] 
    LOWER_BODY: 3,
    // Hat color (for person) [4] 
    HAT: 4,
    // Hair color (for person) [5] 
    HAIR: 5,
    // Bag color (for person) [6] 
    BAG: 6,
};
ColorTypeCode[ColorTypeCode.UNDEFINED] = 'UNDEFINED';
ColorTypeCode[ColorTypeCode.BODY] = 'BODY';
ColorTypeCode[ColorTypeCode.UPPER_BODY] = 'UPPER_BODY';
ColorTypeCode[ColorTypeCode.LOWER_BODY] = 'LOWER_BODY';
ColorTypeCode[ColorTypeCode.HAT] = 'HAT';
ColorTypeCode[ColorTypeCode.HAIR] = 'HAIR';
ColorTypeCode[ColorTypeCode.BAG] = 'BAG';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const CommandStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Pending command [1] 
    PENDING: 1,
    // Command in progress [2] 
    EXECUTING: 2,
    // Command completed successfully [3] 
    COMPLETED: 3,
    // Command failed [4] 
    FAILED: 4,
};
CommandStatusCode[CommandStatusCode.UNDEFINED] = 'UNDEFINED';
CommandStatusCode[CommandStatusCode.PENDING] = 'PENDING';
CommandStatusCode[CommandStatusCode.EXECUTING] = 'EXECUTING';
CommandStatusCode[CommandStatusCode.COMPLETED] = 'COMPLETED';
CommandStatusCode[CommandStatusCode.FAILED] = 'FAILED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DayOfWeekCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Sunday [7] 
    SUN: 7,
    // Monday [1] 
    MON: 1,
    // Tuesday [2] 
    TUE: 2,
    // Wednesday [3] 
    WED: 3,
    // Thursday [4] 
    THU: 4,
    // Friday [5] 
    FRI: 5,
    // Saturday [6] 
    SAT: 6,
};
DayOfWeekCode[DayOfWeekCode.UNDEFINED] = 'UNDEFINED';
DayOfWeekCode[DayOfWeekCode.SUN] = 'SUN';
DayOfWeekCode[DayOfWeekCode.MON] = 'MON';
DayOfWeekCode[DayOfWeekCode.TUE] = 'TUE';
DayOfWeekCode[DayOfWeekCode.WED] = 'WED';
DayOfWeekCode[DayOfWeekCode.THU] = 'THU';
DayOfWeekCode[DayOfWeekCode.FRI] = 'FRI';
DayOfWeekCode[DayOfWeekCode.SAT] = 'SAT';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const EventStatusCode = {
    // New event [0] 
    NEW: 0,
    // Open (in-progress) event [1] 
    OPEN: 1,
    // Closed event [2] 
    CLOSE: 2,
    // Irrelevant event [8] 
    IRRELEVANT: 8,
    // False event [9] 
    FALSE: 9,
};
EventStatusCode[EventStatusCode.NEW] = 'NEW';
EventStatusCode[EventStatusCode.OPEN] = 'OPEN';
EventStatusCode[EventStatusCode.CLOSE] = 'CLOSE';
EventStatusCode[EventStatusCode.IRRELEVANT] = 'IRRELEVANT';
EventStatusCode[EventStatusCode.FALSE] = 'FALSE';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const IntegrationTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // General SMTP based integration [1] 
    SMTP: 1,
    // Immix integration (based on smtp protocol) [2 
    IMMIX: 2,
    // Sentinel integration (based on smtp protocol) [3] 
    SENTINEL: 3,
    // Web-hook integration (based on http protocol) [4] 
    WEBHOOK: 4,
    // Milestone integration (based on http protocol) [5] 
    MILESTONE: 5,
    // Genetec integration (based on http protocol) [6] 
    GENETEC: 6,
};
IntegrationTypeCode[IntegrationTypeCode.UNDEFINED] = 'UNDEFINED';
IntegrationTypeCode[IntegrationTypeCode.SMTP] = 'SMTP';
IntegrationTypeCode[IntegrationTypeCode.IMMIX] = 'IMMIX';
IntegrationTypeCode[IntegrationTypeCode.SENTINEL] = 'SENTINEL';
IntegrationTypeCode[IntegrationTypeCode.WEBHOOK] = 'WEBHOOK';
IntegrationTypeCode[IntegrationTypeCode.MILESTONE] = 'MILESTONE';
IntegrationTypeCode[IntegrationTypeCode.GENETEC] = 'GENETEC';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const LineCrossDirectionCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // In direction [1] 
    IN: 1,
    // Out direction [2] 
    OUT: 2,
    // Bi-direction (both IN and Out) [3] 
    BI: 3,
};
LineCrossDirectionCode[LineCrossDirectionCode.UNDEFINED] = 'UNDEFINED';
LineCrossDirectionCode[LineCrossDirectionCode.IN] = 'IN';
LineCrossDirectionCode[LineCrossDirectionCode.OUT] = 'OUT';
LineCrossDirectionCode[LineCrossDirectionCode.BI] = 'BI';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ObjectTypeCode = {
    // Undefined 0 
    UNDEFINED: 0,
    // Unknown group of objects 16842752 
    INNOVI_UNKNOWNS: 16842752,
    // Unknown object 16843008 
    INNOVI_UNKNOWNS_UNKNOWN: 16843008,
    // Vegetation 16843264 
    INNOVI_UNKNOWNS_VEGETATION: 16843264,
    // Cloud 16843520 
    INNOVI_UNKNOWNS_CLOUD: 16843520,
    // Abstract group of people 16908288 
    INNOVI_PEOPLE: 16908288,
    // Person standing upright 16908544 
    INNOVI_PEOPLE_PERSON_STANDING: 16908544,
    // Person sitting/lying down 16908800 
    INNOVI_PEOPLE_PERSON_ON_THE_GROUND: 16908800,
    // Person from an overhead camera 16909056 
    INNOVI_PEOPLE_PERSON_OVERHEAD: 16909056,
    // Abstract group of vehicles 16973824 
    INNOVI_VEHICLE: 16973824,
    // Car 16974080 
    INNOVI_VEHICLE_CAR: 16974080,
    // Bus 16974336 
    INNOVI_VEHICLE_BUS: 16974336,
    // School Bus 16974337 
    INNOVI_VEHICLE_SCHOOL_BUS: 16974337,
    // Mini Bus 16974338 
    INNOVI_VEHICLE_MINI_BUS: 16974338,
    // Pickup Truck 16974592 
    INNOVI_VEHICLE_PICKUP_TRUCK: 16974592,
    // SUV 16974848 
    INNOVI_VEHICLE_SUV: 16974848,
    // Van 16975104 
    INNOVI_VEHICLE_VAN: 16975104,
    // Small Truck 16975360 
    INNOVI_VEHICLE_SMALL_TRUCK: 16975360,
    // Medium Truck 16975616 
    INNOVI_VEHICLE_MEDIUM_TRUCK: 16975616,
    // Big Truck 16975872 
    INNOVI_VEHICLE_BIG_TRUCK: 16975872,
    // Tractor 16976128 
    INNOVI_VEHICLE_TRACTOR: 16976128,
    // Any vehicle at night 16977920 
    INNOVI_VEHICLE_NIGHT: 16977920,
    // Abstract group of two wheelers 17039360 
    INNOVI_TWOWHEELED: 17039360,
    // Bicycle 17039616 
    INNOVI_TWOWHEELED_BICYCLE: 17039616,
    // Motorcycle 17039872 
    INNOVI_TWOWHEELED_MOTORCYCLE: 17039872,
    // Abstract group of animals 17104896 
    INNOVI_ANIMAL: 17104896,
    // Bird 17105152 
    INNOVI_ANIMAL_BIRD: 17105152,
    // Small animal (ie. Cats/Dogs) 17105408 
    INNOVI_ANIMAL_SMALL: 17105408,
    // Large animal (ie. Horses/Cows) 17105664 
    INNOVI_ANIMAL_LARGE: 17105664,
    // Abstract group of Hard Hat 33619968 
    HARD_HAT_PERSON: 33619968,
    // Person with hard hat 33620224 
    HARD_HAT_PERSON_WITH_HARDHAT: 33620224,
    // Person without hard hat 33620480 
    HARD_HAT_PERSON_WITHOUT_HARDHAT: 33620480,
    // Abstract group of trash bin 50397184 
    TRASH_BIN: 50397184,
    // Trash bin 50397440 
    TRASH_BIN_TRASH: 50397440,
    // Abstract group of MCC vehicle 67174400 
    MCC_VEHICLE: 67174400,
    // MCC Taxi 67174656 
    MCC_VEHICLE_TAXI: 67174656,
    // MCC School Bus 67174912 
    MCC_VEHICLE_SCHOOL_BUS: 67174912,
};
ObjectTypeCode[ObjectTypeCode.UNDEFINED] = 'UNDEFINED';
ObjectTypeCode[ObjectTypeCode.INNOVI_UNKNOWNS] = 'INNOVI_UNKNOWNS';
ObjectTypeCode[ObjectTypeCode.INNOVI_UNKNOWNS_UNKNOWN] = 'INNOVI_UNKNOWNS_UNKNOWN';
ObjectTypeCode[ObjectTypeCode.INNOVI_UNKNOWNS_VEGETATION] = 'INNOVI_UNKNOWNS_VEGETATION';
ObjectTypeCode[ObjectTypeCode.INNOVI_UNKNOWNS_CLOUD] = 'INNOVI_UNKNOWNS_CLOUD';
ObjectTypeCode[ObjectTypeCode.INNOVI_PEOPLE] = 'INNOVI_PEOPLE';
ObjectTypeCode[ObjectTypeCode.INNOVI_PEOPLE_PERSON_STANDING] = 'INNOVI_PEOPLE_PERSON_STANDING';
ObjectTypeCode[ObjectTypeCode.INNOVI_PEOPLE_PERSON_ON_THE_GROUND] = 'INNOVI_PEOPLE_PERSON_ON_THE_GROUND';
ObjectTypeCode[ObjectTypeCode.INNOVI_PEOPLE_PERSON_OVERHEAD] = 'INNOVI_PEOPLE_PERSON_OVERHEAD';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE] = 'INNOVI_VEHICLE';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_CAR] = 'INNOVI_VEHICLE_CAR';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_BUS] = 'INNOVI_VEHICLE_BUS';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_SCHOOL_BUS] = 'INNOVI_VEHICLE_SCHOOL_BUS';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_MINI_BUS] = 'INNOVI_VEHICLE_MINI_BUS';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_PICKUP_TRUCK] = 'INNOVI_VEHICLE_PICKUP_TRUCK';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_SUV] = 'INNOVI_VEHICLE_SUV';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_VAN] = 'INNOVI_VEHICLE_VAN';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_SMALL_TRUCK] = 'INNOVI_VEHICLE_SMALL_TRUCK';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_MEDIUM_TRUCK] = 'INNOVI_VEHICLE_MEDIUM_TRUCK';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_BIG_TRUCK] = 'INNOVI_VEHICLE_BIG_TRUCK';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_TRACTOR] = 'INNOVI_VEHICLE_TRACTOR';
ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_NIGHT] = 'INNOVI_VEHICLE_NIGHT';
ObjectTypeCode[ObjectTypeCode.INNOVI_TWOWHEELED] = 'INNOVI_TWOWHEELED';
ObjectTypeCode[ObjectTypeCode.INNOVI_TWOWHEELED_BICYCLE] = 'INNOVI_TWOWHEELED_BICYCLE';
ObjectTypeCode[ObjectTypeCode.INNOVI_TWOWHEELED_MOTORCYCLE] = 'INNOVI_TWOWHEELED_MOTORCYCLE';
ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL] = 'INNOVI_ANIMAL';
ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL_BIRD] = 'INNOVI_ANIMAL_BIRD';
ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL_SMALL] = 'INNOVI_ANIMAL_SMALL';
ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL_LARGE] = 'INNOVI_ANIMAL_LARGE';
ObjectTypeCode[ObjectTypeCode.HARD_HAT_PERSON] = 'HARD_HAT_PERSON';
ObjectTypeCode[ObjectTypeCode.HARD_HAT_PERSON_WITH_HARDHAT] = 'HARD_HAT_PERSON_WITH_HARDHAT';
ObjectTypeCode[ObjectTypeCode.HARD_HAT_PERSON_WITHOUT_HARDHAT] = 'HARD_HAT_PERSON_WITHOUT_HARDHAT';
ObjectTypeCode[ObjectTypeCode.TRASH_BIN] = 'TRASH_BIN';
ObjectTypeCode[ObjectTypeCode.TRASH_BIN_TRASH] = 'TRASH_BIN_TRASH';
ObjectTypeCode[ObjectTypeCode.MCC_VEHICLE] = 'MCC_VEHICLE';
ObjectTypeCode[ObjectTypeCode.MCC_VEHICLE_TAXI] = 'MCC_VEHICLE_TAXI';
ObjectTypeCode[ObjectTypeCode.MCC_VEHICLE_SCHOOL_BUS] = 'MCC_VEHICLE_SCHOOL_BUS';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ProductTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Edge 200 [200] 
    EDGE_200: 200,
    // Edge 220 [220] 
    EDGE_220: 220,
    // Edge 250 [250] 
    EDGE_250: 250,
    // Edge 500 [500] 
    EDGE_500: 500,
    // Virtual Edge [1] 
    VIRTUAL: 1,
};
ProductTypeCode[ProductTypeCode.UNDEFINED] = 'UNDEFINED';
ProductTypeCode[ProductTypeCode.EDGE_200] = 'EDGE_200';
ProductTypeCode[ProductTypeCode.EDGE_220] = 'EDGE_220';
ProductTypeCode[ProductTypeCode.EDGE_250] = 'EDGE_250';
ProductTypeCode[ProductTypeCode.EDGE_500] = 'EDGE_500';
ProductTypeCode[ProductTypeCode.VIRTUAL] = 'VIRTUAL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const RuleTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Crossing a Line (innoVi) [1] 
    INNOVI_RULE_CROSSING: 1,
    // Moving in an area (innoVi) [2] 
    INNOVI_RULE_MOVING: 2,
    // Stopped vehicle (innoVi) [4] 
    INNOVI_RULE_STOPPED: 4,
    // Occupancy (innoVi) [8] 
    INNOVI_RULE_OCCUPANCY: 8,
    // Grouping (innoVi) [16] 
    INNOVI_RULE_GROPPING: 16,
    // Anomaly (innoVi) [2048] 
    INNOVI_ANOMALY: 2048,
    // Hard hat custom rule (custom: Hard Hat) [4096] 
    CUSTOM_HARD_HAT: 4096,
    // Trash dumping custom rule (custom: Trash Dumping) [8192] 
    CUSTOM_TRASH: 8192,
    // MCC custom rules (custom: MCC) [16384] 
    CUSTOM_MCC: 16384,
};
RuleTypeCode[RuleTypeCode.UNDEFINED] = 'UNDEFINED';
RuleTypeCode[RuleTypeCode.INNOVI_RULE_CROSSING] = 'INNOVI_RULE_CROSSING';
RuleTypeCode[RuleTypeCode.INNOVI_RULE_MOVING] = 'INNOVI_RULE_MOVING';
RuleTypeCode[RuleTypeCode.INNOVI_RULE_STOPPED] = 'INNOVI_RULE_STOPPED';
RuleTypeCode[RuleTypeCode.INNOVI_RULE_OCCUPANCY] = 'INNOVI_RULE_OCCUPANCY';
RuleTypeCode[RuleTypeCode.INNOVI_RULE_GROPPING] = 'INNOVI_RULE_GROPPING';
RuleTypeCode[RuleTypeCode.INNOVI_ANOMALY] = 'INNOVI_ANOMALY';
RuleTypeCode[RuleTypeCode.CUSTOM_HARD_HAT] = 'CUSTOM_HARD_HAT';
RuleTypeCode[RuleTypeCode.CUSTOM_TRASH] = 'CUSTOM_TRASH';
RuleTypeCode[RuleTypeCode.CUSTOM_MCC] = 'CUSTOM_MCC';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SearchScopeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Search by sensors [1] 
    SENSORS: 1,
    // Search by folders [2] 
    FOLDERS: 2,
    // Search by circle on map [3] 
    GEO_CIRCLE: 3,
    // Search by polygon on map [4] 
    GEO_POLYGON: 4,
};
SearchScopeCode[SearchScopeCode.UNDEFINED] = 'UNDEFINED';
SearchScopeCode[SearchScopeCode.SENSORS] = 'SENSORS';
SearchScopeCode[SearchScopeCode.FOLDERS] = 'FOLDERS';
SearchScopeCode[SearchScopeCode.GEO_CIRCLE] = 'GEO_CIRCLE';
SearchScopeCode[SearchScopeCode.GEO_POLYGON] = 'GEO_POLYGON';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SearchTimeCode = {
    // Custom time frame [0] 
    CUSTOM: 0,
    // Last hour [1] 
    LAST_1H: 1,
    // Last 3 hours [3] 
    LAST_3H: 3,
    // Last 6 hours [6] 
    LAST_6H: 6,
    // Last 12 hours [12] 
    LAST_12H: 12,
    // Last 24 hours [24] 
    LAST_24H: 24,
    // Last 48 hours [48] 
    LAST_48H: 48,
};
SearchTimeCode[SearchTimeCode.CUSTOM] = 'CUSTOM';
SearchTimeCode[SearchTimeCode.LAST_1H] = 'LAST_1H';
SearchTimeCode[SearchTimeCode.LAST_3H] = 'LAST_3H';
SearchTimeCode[SearchTimeCode.LAST_6H] = 'LAST_6H';
SearchTimeCode[SearchTimeCode.LAST_12H] = 'LAST_12H';
SearchTimeCode[SearchTimeCode.LAST_24H] = 'LAST_24H';
SearchTimeCode[SearchTimeCode.LAST_48H] = 'LAST_48H';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SensorResolutionCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Low resolution [1] 
    LOW: 1,
    // Medium resolution [2] 
    MEDIUM: 2,
    // High resolution [3] 
    HIGH: 3,
};
SensorResolutionCode[SensorResolutionCode.UNDEFINED] = 'UNDEFINED';
SensorResolutionCode[SensorResolutionCode.LOW] = 'LOW';
SensorResolutionCode[SensorResolutionCode.MEDIUM] = 'MEDIUM';
SensorResolutionCode[SensorResolutionCode.HIGH] = 'HIGH';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SensorStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Sensor is running [1] 
    ACTIVE: 1,
    // Sensor in Warning state [2] 
    WARNING: 2,
    // Sensor in Error state [3] 
    ERROR: 3,
    // Sensor is not active [4] 
    INACTIVE: 4,
    // Suspended (banned) sensor [5] 
    SUSPENDED: 5,
    // Sensor was added but did not establish connection yet [6] 
    PENDING: 6,
};
SensorStatusCode[SensorStatusCode.UNDEFINED] = 'UNDEFINED';
SensorStatusCode[SensorStatusCode.ACTIVE] = 'ACTIVE';
SensorStatusCode[SensorStatusCode.WARNING] = 'WARNING';
SensorStatusCode[SensorStatusCode.ERROR] = 'ERROR';
SensorStatusCode[SensorStatusCode.INACTIVE] = 'INACTIVE';
SensorStatusCode[SensorStatusCode.SUSPENDED] = 'SUSPENDED';
SensorStatusCode[SensorStatusCode.PENDING] = 'PENDING';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SensorStatusMask = {
    // [ERROR] No Communication [0x0] 
    STATUS_NO_COMM: 0,
    // [OK] Active [0x00000001] 
    STATUS_ACTIVE: 1,
    // [ERROR] No video [0x00000004] 
    STATUS_NO_VIDEO: 4,
    // [ERROR] AS service not available. set from health-service [0x00000008] 
    STATUS_NO_AS: 8,
    // [ERROR] Failed to add detector to sensor or feature timeout [0x00000020] 
    STATUS_DETECTION_MALFUNCTION: 32,
    // [ERROR] 70% of the image is FG for 4 second. Maximum blocked time is 10 minutes [0x00000040] 
    STATUS_IMAGE_BLOCKED: 64,
    // [WARNING] 75% of the ROI (overlapping rules - if no rules whole image) has greyscale levels above 245 for 10 seconds [0x00000080] 
    STATUS_IMAGE_SATURATED: 128,
    // [WARNING] 60% of the ROI (overlapping rules - if no rules whole image) has greyscale levels below 16 for 10 seconds [0x00000100] 
    STATUS_IMAGE_DARK: 256,
    // [ERROR] No feature some time (5 sec). for active sensor [0x00001000] 
    STATUS_FEATURE_TIMEOUT: 4096,
    // [WARNING] Feature processing is low (depends: threshold and duration) [0x00100000] 
    STATUS_LOW_FRAME_RATE: 1048576,
    // [ERROR] No Agent [0x00400000] 
    STATUS_NO_AGENT: 4194304,
    // [DISABLED] Sensor in disable mode (feature sending disabled) [0x00800000] 
    STATUS_DISABLED: 8388608,
    // [ERROR] Sensor first connection [0x01000000] 
    STATUS_STREAM_NOT_CONFIGURED: 16777216,
    // [DISABLED] Video source disabled (no streaming video from video source) [0x02000000] 
    STATUS_STREAM_DISABLED: 33554432,
    // [WARNING] Network latency [0x04000000] 
    STATUS_HIGH_LATENCY: 67108864,
    // [WARNING] Video source low frame rate [0x08000000] 
    STATUS_LOW_FR: 134217728,
    // [ERROR] Ping failed or file not exist [0x0000000010000000] 
    STATUS_STREAM_RESOURCE_NOT_EXIST: 268435456,
    // [ERROR] RTSP authorization error [0x0000000020000000] 
    STATUS_STREAM_AUTH_ERROR: 536870912,
    // [ERROR] ONVIF Error [0x0000000040000000] 
    STATUS_ONVIF_UNKNOWN_ERROR: 1073741824,
};
SensorStatusMask[SensorStatusMask.STATUS_NO_COMM] = 'STATUS_NO_COMM';
SensorStatusMask[SensorStatusMask.STATUS_ACTIVE] = 'STATUS_ACTIVE';
SensorStatusMask[SensorStatusMask.STATUS_NO_VIDEO] = 'STATUS_NO_VIDEO';
SensorStatusMask[SensorStatusMask.STATUS_NO_AS] = 'STATUS_NO_AS';
SensorStatusMask[SensorStatusMask.STATUS_DETECTION_MALFUNCTION] = 'STATUS_DETECTION_MALFUNCTION';
SensorStatusMask[SensorStatusMask.STATUS_IMAGE_BLOCKED] = 'STATUS_IMAGE_BLOCKED';
SensorStatusMask[SensorStatusMask.STATUS_IMAGE_SATURATED] = 'STATUS_IMAGE_SATURATED';
SensorStatusMask[SensorStatusMask.STATUS_IMAGE_DARK] = 'STATUS_IMAGE_DARK';
SensorStatusMask[SensorStatusMask.STATUS_FEATURE_TIMEOUT] = 'STATUS_FEATURE_TIMEOUT';
SensorStatusMask[SensorStatusMask.STATUS_LOW_FRAME_RATE] = 'STATUS_LOW_FRAME_RATE';
SensorStatusMask[SensorStatusMask.STATUS_NO_AGENT] = 'STATUS_NO_AGENT';
SensorStatusMask[SensorStatusMask.STATUS_DISABLED] = 'STATUS_DISABLED';
SensorStatusMask[SensorStatusMask.STATUS_STREAM_NOT_CONFIGURED] = 'STATUS_STREAM_NOT_CONFIGURED';
SensorStatusMask[SensorStatusMask.STATUS_STREAM_DISABLED] = 'STATUS_STREAM_DISABLED';
SensorStatusMask[SensorStatusMask.STATUS_HIGH_LATENCY] = 'STATUS_HIGH_LATENCY';
SensorStatusMask[SensorStatusMask.STATUS_LOW_FR] = 'STATUS_LOW_FR';
SensorStatusMask[SensorStatusMask.STATUS_STREAM_RESOURCE_NOT_EXIST] = 'STATUS_STREAM_RESOURCE_NOT_EXIST';
SensorStatusMask[SensorStatusMask.STATUS_STREAM_AUTH_ERROR] = 'STATUS_STREAM_AUTH_ERROR';
SensorStatusMask[SensorStatusMask.STATUS_ONVIF_UNKNOWN_ERROR] = 'STATUS_ONVIF_UNKNOWN_ERROR';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SensorTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // CCD color camera [1] 
    CCD: 1,
    // Thermal camera [2] 
    THERMAL: 2,
};
SensorTypeCode[SensorTypeCode.UNDEFINED] = 'UNDEFINED';
SensorTypeCode[SensorTypeCode.CCD] = 'CCD';
SensorTypeCode[SensorTypeCode.THERMAL] = 'THERMAL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const SeverityTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Low severity [1] 
    LOW: 1,
    // Medium severity [2] 
    MEDIUM: 2,
    // High severity [3] 
    HIGH: 3,
    // Critical severity [4] 
    CRITICAL: 4,
};
SeverityTypeCode[SeverityTypeCode.UNDEFINED] = 'UNDEFINED';
SeverityTypeCode[SeverityTypeCode.LOW] = 'LOW';
SeverityTypeCode[SeverityTypeCode.MEDIUM] = 'MEDIUM';
SeverityTypeCode[SeverityTypeCode.HIGH] = 'HIGH';
SeverityTypeCode[SeverityTypeCode.CRITICAL] = 'CRITICAL';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const StreamTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // RTSP stream [1] 
    RTSP: 1,
    // ONVIF stream [2] 
    ONVIF: 2,
    // Video clip from file [3] 
    CLIP: 3,
    // RTP stream [4] 
    RTP: 4,
    // MULTICAST stream [5] 
    MULTICAST: 5,
    // AWS KINESIS stream [6] 
    KINESIS: 6,
};
StreamTypeCode[StreamTypeCode.UNDEFINED] = 'UNDEFINED';
StreamTypeCode[StreamTypeCode.RTSP] = 'RTSP';
StreamTypeCode[StreamTypeCode.ONVIF] = 'ONVIF';
StreamTypeCode[StreamTypeCode.CLIP] = 'CLIP';
StreamTypeCode[StreamTypeCode.RTP] = 'RTP';
StreamTypeCode[StreamTypeCode.MULTICAST] = 'MULTICAST';
StreamTypeCode[StreamTypeCode.KINESIS] = 'KINESIS';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const TimeUnitCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Second interval [1] 
    SECOND: 1,
    // Minute interval [2] 
    MINUTE: 2,
    // Hour interval [3] 
    HOUR: 3,
    // Day interval [4] 
    DAY: 4,
    // Week interval [5] 
    WEEK: 5,
    // Month interval [6] 
    MONTH: 6,
};
TimeUnitCode[TimeUnitCode.UNDEFINED] = 'UNDEFINED';
TimeUnitCode[TimeUnitCode.SECOND] = 'SECOND';
TimeUnitCode[TimeUnitCode.MINUTE] = 'MINUTE';
TimeUnitCode[TimeUnitCode.HOUR] = 'HOUR';
TimeUnitCode[TimeUnitCode.DAY] = 'DAY';
TimeUnitCode[TimeUnitCode.WEEK] = 'WEEK';
TimeUnitCode[TimeUnitCode.MONTH] = 'MONTH';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const UserStatusCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // User is registered and pending verification [1] 
    PENDING: 1,
    // Active user in the system [2] 
    ACTIVE: 2,
    // Blocked user (only account system can unblock the user) [4] 
    BLOCKED: 4,
    // Suspended user (about to be deleted) [8] 
    SUSPENDED: 8,
};
UserStatusCode[UserStatusCode.UNDEFINED] = 'UNDEFINED';
UserStatusCode[UserStatusCode.PENDING] = 'PENDING';
UserStatusCode[UserStatusCode.ACTIVE] = 'ACTIVE';
UserStatusCode[UserStatusCode.BLOCKED] = 'BLOCKED';
UserStatusCode[UserStatusCode.SUSPENDED] = 'SUSPENDED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const UserTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    SYSADMIN: 1,
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    SUPPORT: 2,
    // System user - has access to specific accounts with role based access control [4] 
    USER: 4,
};
UserTypeCode[UserTypeCode.UNDEFINED] = 'UNDEFINED';
UserTypeCode[UserTypeCode.SYSADMIN] = 'SYSADMIN';
UserTypeCode[UserTypeCode.SUPPORT] = 'SUPPORT';
UserTypeCode[UserTypeCode.USER] = 'USER';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const VisualQualityCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Low visual quality [1] 
    LOW: 1,
    // Medium visual quality [2] 
    MEDIUM: 2,
    // High visual quality [3] 
    HIGH: 3,
};
VisualQualityCode[VisualQualityCode.UNDEFINED] = 'UNDEFINED';
VisualQualityCode[VisualQualityCode.LOW] = 'LOW';
VisualQualityCode[VisualQualityCode.MEDIUM] = 'MEDIUM';
VisualQualityCode[VisualQualityCode.HIGH] = 'HIGH';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ZoneTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Area of interest [1] 
    AOI: 1,
    // Masked area [2] 
    MASK: 2,
    // Block [3] 
    BLOCK: 3,
    // Shutdown mask [4] 
    SHUTDOWN: 4,
};
ZoneTypeCode[ZoneTypeCode.UNDEFINED] = 'UNDEFINED';
ZoneTypeCode[ZoneTypeCode.AOI] = 'AOI';
ZoneTypeCode[ZoneTypeCode.MASK] = 'MASK';
ZoneTypeCode[ZoneTypeCode.BLOCK] = 'BLOCK';
ZoneTypeCode[ZoneTypeCode.SHUTDOWN] = 'SHUTDOWN';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    AccountIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    AccountIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountsServiceChangeGroupsRequest {
    /**
     * @param {?=} id
     * @param {?=} groupId
     */
    constructor(id, groupId) {
        this.id = id;
        this.groupId = groupId;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceChangeGroupsRequest.prototype.id;
    /** @type {?} */
    AccountsServiceChangeGroupsRequest.prototype.groupId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountsServiceChangeNameRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceChangeNameRequest.prototype.id;
    /** @type {?} */
    AccountsServiceChangeNameRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountsServiceChangeStatusRequest {
    /**
     * @param {?=} id
     * @param {?=} status
     */
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceChangeStatusRequest.prototype.id;
    /** @type {?} */
    AccountsServiceChangeStatusRequest.prototype.status;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountsServiceChangeTypeRequest {
    /**
     * @param {?=} id
     * @param {?=} type
     */
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceChangeTypeRequest.prototype.id;
    /** @type {?} */
    AccountsServiceChangeTypeRequest.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountsServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(search, type, status, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceFindRequest.prototype.search;
    /** @type {?} */
    AccountsServiceFindRequest.prototype.type;
    /** @type {?} */
    AccountsServiceFindRequest.prototype.status;
    /** @type {?} */
    AccountsServiceFindRequest.prototype.sort;
    /** @type {?} */
    AccountsServiceFindRequest.prototype.page;
    /** @type {?} */
    AccountsServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AccountsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    AccountsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    AccountsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Entity action response message returned for any create/update action on entity
*/
class ActionResponse {
    /**
     * @param {?=} code
     * @param {?=} error
     * @param {?=} key
     * @param {?=} data
     */
    constructor(code, error, key, data) {
        this.code = code;
        this.error = error;
        this.key = key;
        this.data = data;
    }
}
if (false) {
    /** @type {?} */
    ActionResponse.prototype.code;
    /** @type {?} */
    ActionResponse.prototype.error;
    /** @type {?} */
    ActionResponse.prototype.key;
    /** @type {?} */
    ActionResponse.prototype.data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ApiKeyIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ApiKeyIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ApplianceCommandIdRequest {
    /**
     * @param {?=} commandId
     */
    constructor(commandId) {
        this.commandId = commandId;
    }
}
if (false) {
    /** @type {?} */
    ApplianceCommandIdRequest.prototype.commandId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ApplianceIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ApplianceIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceAddSensorRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceAddSensorRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceAddSensorRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceChangeConfigurationRequest {
    /**
     * @param {?=} id
     * @param {?=} configId
     * @param {?=} versionId
     */
    constructor(id, configId, versionId) {
        this.id = id;
        this.configId = configId;
        this.versionId = versionId;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceChangeConfigurationRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceChangeConfigurationRequest.prototype.configId;
    /** @type {?} */
    AppliancesServiceChangeConfigurationRequest.prototype.versionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceChangeFolderRequest {
    /**
     * @param {?=} id
     * @param {?=} folderId
     */
    constructor(id, folderId) {
        this.id = id;
        this.folderId = folderId;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceChangeFolderRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceChangeFolderRequest.prototype.folderId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceChangeMachineIdRequest {
    /**
     * @param {?=} id
     * @param {?=} machineId
     */
    constructor(id, machineId) {
        this.id = id;
        this.machineId = machineId;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceChangeMachineIdRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceChangeMachineIdRequest.prototype.machineId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceChangeNameRequest {
    /**
     * @param {?=} id
     * @param {?=} name
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceChangeNameRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceChangeNameRequest.prototype.name;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceFindRequest {
    /**
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(folderId, subFolders, search, status, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceFindRequest.prototype.folderId;
    /** @type {?} */
    AppliancesServiceFindRequest.prototype.subFolders;
    /** @type {?} */
    AppliancesServiceFindRequest.prototype.search;
    /** @type {?} */
    AppliancesServiceFindRequest.prototype.status;
    /** @type {?} */
    AppliancesServiceFindRequest.prototype.sort;
    /** @type {?} */
    AppliancesServiceFindRequest.prototype.page;
    /** @type {?} */
    AppliancesServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceFindSensorsRequest {
    /**
     * @param {?=} id
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(id, search, type, status, stream, sort, page, pageSize) {
        this.id = id;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.search;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.type;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.status;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.stream;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.sort;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.page;
    /** @type {?} */
    AppliancesServiceFindSensorsRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceGetCommandsRequest {
    /**
     * @param {?=} accountId
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(accountId, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.accountId;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.status;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.sort;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.page;
    /** @type {?} */
    AppliancesServiceGetCommandsRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceRegisterApplianceRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceRegisterApplianceRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceRegisterApplianceRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceSetCommandRequest {
    /**
     * @param {?=} commandId
     * @param {?=} status
     */
    constructor(commandId, status) {
        this.commandId = commandId;
        this.status = status;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceSetCommandRequest.prototype.commandId;
    /** @type {?} */
    AppliancesServiceSetCommandRequest.prototype.status;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AppliancesServiceStatusOvertimeRequest {
    /**
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     */
    constructor(id, from, to) {
        this.id = id;
        this.from = from;
        this.to = to;
    }
}
if (false) {
    /** @type {?} */
    AppliancesServiceStatusOvertimeRequest.prototype.id;
    /** @type {?} */
    AppliancesServiceStatusOvertimeRequest.prototype.from;
    /** @type {?} */
    AppliancesServiceStatusOvertimeRequest.prototype.to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AuditLogIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    AuditLogIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class AuditLogServiceFindRequest {
    /**
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(userId, from, to, itemType, sort, page, pageSize) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.itemType = itemType;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.userId;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.from;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.to;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.itemType;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.sort;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.page;
    /** @type {?} */
    AuditLogServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class CalendarIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    CalendarIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class CalendarIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    CalendarIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class CalendarsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    CalendarsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class CalendarsServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} folderId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(search, folderId, sort, page, pageSize) {
        this.search = search;
        this.folderId = folderId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    CalendarsServiceFindRequest.prototype.search;
    /** @type {?} */
    CalendarsServiceFindRequest.prototype.folderId;
    /** @type {?} */
    CalendarsServiceFindRequest.prototype.sort;
    /** @type {?} */
    CalendarsServiceFindRequest.prototype.page;
    /** @type {?} */
    CalendarsServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class CalendarsServiceFolderIdRequest {
    /**
     * @param {?=} folderId
     */
    constructor(folderId) {
        this.folderId = folderId;
    }
}
if (false) {
    /** @type {?} */
    CalendarsServiceFolderIdRequest.prototype.folderId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class CalendarsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    CalendarsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    CalendarsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ChangeGeoAreaRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    ChangeGeoAreaRequest.prototype.id;
    /** @type {?} */
    ChangeGeoAreaRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ChangeGeoLocationRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    ChangeGeoLocationRequest.prototype.id;
    /** @type {?} */
    ChangeGeoLocationRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Change Password request message
*/
class ChangePasswordRequest {
    /**
     * @param {?=} userId
     * @param {?=} oldPassword
     * @param {?=} newPassword
     */
    constructor(userId, oldPassword, newPassword) {
        this.userId = userId;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}
if (false) {
    /** @type {?} */
    ChangePasswordRequest.prototype.userId;
    /** @type {?} */
    ChangePasswordRequest.prototype.oldPassword;
    /** @type {?} */
    ChangePasswordRequest.prototype.newPassword;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ConfigurationIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ConfigurationIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ConfigurationTargetRequest {
    /**
     * @param {?=} target
     */
    constructor(target) {
        this.target = target;
    }
}
if (false) {
    /** @type {?} */
    ConfigurationTargetRequest.prototype.target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ConfigurationVersionIdRequest {
    /**
     * @param {?=} id
     * @param {?=} versionId
     */
    constructor(id, versionId) {
        this.id = id;
        this.versionId = versionId;
    }
}
if (false) {
    /** @type {?} */
    ConfigurationVersionIdRequest.prototype.id;
    /** @type {?} */
    ConfigurationVersionIdRequest.prototype.versionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EmptyRequest {
    constructor() {
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Entities response message returned for read operation on multiple entities
*/
class EntitiesResponse {
    /**
     * @param {?=} code
     * @param {?=} error
     */
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}
if (false) {
    /** @type {?} */
    EntitiesResponse.prototype.code;
    /** @type {?} */
    EntitiesResponse.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfAccount extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfAccount.prototype.list;
    /** @type {?} */
    EntitiesResponseOfAccount.prototype.code;
    /** @type {?} */
    EntitiesResponseOfAccount.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfAccountTypeSummary extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfAccountTypeSummary.prototype.list;
    /** @type {?} */
    EntitiesResponseOfAccountTypeSummary.prototype.code;
    /** @type {?} */
    EntitiesResponseOfAccountTypeSummary.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfApiKey extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfApiKey.prototype.list;
    /** @type {?} */
    EntitiesResponseOfApiKey.prototype.code;
    /** @type {?} */
    EntitiesResponseOfApiKey.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfAppliance extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfAppliance.prototype.list;
    /** @type {?} */
    EntitiesResponseOfAppliance.prototype.code;
    /** @type {?} */
    EntitiesResponseOfAppliance.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfApplianceCommand extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfApplianceCommand.prototype.list;
    /** @type {?} */
    EntitiesResponseOfApplianceCommand.prototype.code;
    /** @type {?} */
    EntitiesResponseOfApplianceCommand.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfApplianceConfiguration extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfApplianceConfiguration.prototype.list;
    /** @type {?} */
    EntitiesResponseOfApplianceConfiguration.prototype.code;
    /** @type {?} */
    EntitiesResponseOfApplianceConfiguration.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfAuditLog extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfAuditLog.prototype.list;
    /** @type {?} */
    EntitiesResponseOfAuditLog.prototype.code;
    /** @type {?} */
    EntitiesResponseOfAuditLog.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfCalendar extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfCalendar.prototype.list;
    /** @type {?} */
    EntitiesResponseOfCalendar.prototype.code;
    /** @type {?} */
    EntitiesResponseOfCalendar.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfComponentConfiguration extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfComponentConfiguration.prototype.list;
    /** @type {?} */
    EntitiesResponseOfComponentConfiguration.prototype.code;
    /** @type {?} */
    EntitiesResponseOfComponentConfiguration.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfConfiguration extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfConfiguration.prototype.list;
    /** @type {?} */
    EntitiesResponseOfConfiguration.prototype.code;
    /** @type {?} */
    EntitiesResponseOfConfiguration.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfEvent extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfEvent.prototype.list;
    /** @type {?} */
    EntitiesResponseOfEvent.prototype.code;
    /** @type {?} */
    EntitiesResponseOfEvent.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfFeature extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfFeature.prototype.list;
    /** @type {?} */
    EntitiesResponseOfFeature.prototype.code;
    /** @type {?} */
    EntitiesResponseOfFeature.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfFeaturesGroup extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfFeaturesGroup.prototype.list;
    /** @type {?} */
    EntitiesResponseOfFeaturesGroup.prototype.code;
    /** @type {?} */
    EntitiesResponseOfFeaturesGroup.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfFolder extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfFolder.prototype.list;
    /** @type {?} */
    EntitiesResponseOfFolder.prototype.code;
    /** @type {?} */
    EntitiesResponseOfFolder.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfIntegration extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfIntegration.prototype.list;
    /** @type {?} */
    EntitiesResponseOfIntegration.prototype.code;
    /** @type {?} */
    EntitiesResponseOfIntegration.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfReportDefinition extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfReportDefinition.prototype.list;
    /** @type {?} */
    EntitiesResponseOfReportDefinition.prototype.code;
    /** @type {?} */
    EntitiesResponseOfReportDefinition.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfRule extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfRule.prototype.list;
    /** @type {?} */
    EntitiesResponseOfRule.prototype.code;
    /** @type {?} */
    EntitiesResponseOfRule.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfSchedule extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfSchedule.prototype.list;
    /** @type {?} */
    EntitiesResponseOfSchedule.prototype.code;
    /** @type {?} */
    EntitiesResponseOfSchedule.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfScheduledReport extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfScheduledReport.prototype.list;
    /** @type {?} */
    EntitiesResponseOfScheduledReport.prototype.code;
    /** @type {?} */
    EntitiesResponseOfScheduledReport.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfSearchDefinition extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfSearchDefinition.prototype.list;
    /** @type {?} */
    EntitiesResponseOfSearchDefinition.prototype.code;
    /** @type {?} */
    EntitiesResponseOfSearchDefinition.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfSensor extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfSensor.prototype.list;
    /** @type {?} */
    EntitiesResponseOfSensor.prototype.code;
    /** @type {?} */
    EntitiesResponseOfSensor.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntitiesResponseOfSensorHealth extends EntitiesResponse {
}
if (false) {
    /** @type {?} */
    EntitiesResponseOfSensorHealth.prototype.list;
    /** @type {?} */
    EntitiesResponseOfSensorHealth.prototype.code;
    /** @type {?} */
    EntitiesResponseOfSensorHealth.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Entity response message returned for read operation on a single entity
*/
class EntityResponse {
    /**
     * @param {?=} code
     * @param {?=} error
     */
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}
if (false) {
    /** @type {?} */
    EntityResponse.prototype.code;
    /** @type {?} */
    EntityResponse.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfAccount extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfAccount.prototype.entity;
    /** @type {?} */
    EntityResponseOfAccount.prototype.code;
    /** @type {?} */
    EntityResponseOfAccount.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfApiKey extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfApiKey.prototype.entity;
    /** @type {?} */
    EntityResponseOfApiKey.prototype.code;
    /** @type {?} */
    EntityResponseOfApiKey.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfAppliance extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfAppliance.prototype.entity;
    /** @type {?} */
    EntityResponseOfAppliance.prototype.code;
    /** @type {?} */
    EntityResponseOfAppliance.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfApplianceStatusTimeSeries extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfApplianceStatusTimeSeries.prototype.entity;
    /** @type {?} */
    EntityResponseOfApplianceStatusTimeSeries.prototype.code;
    /** @type {?} */
    EntityResponseOfApplianceStatusTimeSeries.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfAuditLog extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfAuditLog.prototype.entity;
    /** @type {?} */
    EntityResponseOfAuditLog.prototype.code;
    /** @type {?} */
    EntityResponseOfAuditLog.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfCalendar extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfCalendar.prototype.entity;
    /** @type {?} */
    EntityResponseOfCalendar.prototype.code;
    /** @type {?} */
    EntityResponseOfCalendar.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfComponentConfiguration extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfComponentConfiguration.prototype.entity;
    /** @type {?} */
    EntityResponseOfComponentConfiguration.prototype.code;
    /** @type {?} */
    EntityResponseOfComponentConfiguration.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfConfiguration extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfConfiguration.prototype.entity;
    /** @type {?} */
    EntityResponseOfConfiguration.prototype.code;
    /** @type {?} */
    EntityResponseOfConfiguration.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfConfigurationVersion extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfConfigurationVersion.prototype.entity;
    /** @type {?} */
    EntityResponseOfConfigurationVersion.prototype.code;
    /** @type {?} */
    EntityResponseOfConfigurationVersion.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfCoordinate extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfCoordinate.prototype.entity;
    /** @type {?} */
    EntityResponseOfCoordinate.prototype.code;
    /** @type {?} */
    EntityResponseOfCoordinate.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfEvent extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfEvent.prototype.entity;
    /** @type {?} */
    EntityResponseOfEvent.prototype.code;
    /** @type {?} */
    EntityResponseOfEvent.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfEventCountTimeSeries extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfEventCountTimeSeries.prototype.entity;
    /** @type {?} */
    EntityResponseOfEventCountTimeSeries.prototype.code;
    /** @type {?} */
    EntityResponseOfEventCountTimeSeries.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfFeature extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfFeature.prototype.entity;
    /** @type {?} */
    EntityResponseOfFeature.prototype.code;
    /** @type {?} */
    EntityResponseOfFeature.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfFeaturesGroup extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfFeaturesGroup.prototype.entity;
    /** @type {?} */
    EntityResponseOfFeaturesGroup.prototype.code;
    /** @type {?} */
    EntityResponseOfFeaturesGroup.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfFolder extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfFolder.prototype.entity;
    /** @type {?} */
    EntityResponseOfFolder.prototype.code;
    /** @type {?} */
    EntityResponseOfFolder.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfGeoReferenceData extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfGeoReferenceData.prototype.entity;
    /** @type {?} */
    EntityResponseOfGeoReferenceData.prototype.code;
    /** @type {?} */
    EntityResponseOfGeoReferenceData.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfIntegration extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfIntegration.prototype.entity;
    /** @type {?} */
    EntityResponseOfIntegration.prototype.code;
    /** @type {?} */
    EntityResponseOfIntegration.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfLicense extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfLicense.prototype.entity;
    /** @type {?} */
    EntityResponseOfLicense.prototype.code;
    /** @type {?} */
    EntityResponseOfLicense.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfLoginData extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfLoginData.prototype.entity;
    /** @type {?} */
    EntityResponseOfLoginData.prototype.code;
    /** @type {?} */
    EntityResponseOfLoginData.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfReportDefinition extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfReportDefinition.prototype.entity;
    /** @type {?} */
    EntityResponseOfReportDefinition.prototype.code;
    /** @type {?} */
    EntityResponseOfReportDefinition.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfRule extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfRule.prototype.entity;
    /** @type {?} */
    EntityResponseOfRule.prototype.code;
    /** @type {?} */
    EntityResponseOfRule.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfSchedule extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfSchedule.prototype.entity;
    /** @type {?} */
    EntityResponseOfSchedule.prototype.code;
    /** @type {?} */
    EntityResponseOfSchedule.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfScheduledReport extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfScheduledReport.prototype.entity;
    /** @type {?} */
    EntityResponseOfScheduledReport.prototype.code;
    /** @type {?} */
    EntityResponseOfScheduledReport.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfSearchDefinition extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfSearchDefinition.prototype.entity;
    /** @type {?} */
    EntityResponseOfSearchDefinition.prototype.code;
    /** @type {?} */
    EntityResponseOfSearchDefinition.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfSensor extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfSensor.prototype.entity;
    /** @type {?} */
    EntityResponseOfSensor.prototype.code;
    /** @type {?} */
    EntityResponseOfSensor.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfSensorHealth extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfSensorHealth.prototype.entity;
    /** @type {?} */
    EntityResponseOfSensorHealth.prototype.code;
    /** @type {?} */
    EntityResponseOfSensorHealth.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfSensorStatusTimeSeries extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfSensorStatusTimeSeries.prototype.entity;
    /** @type {?} */
    EntityResponseOfSensorStatusTimeSeries.prototype.code;
    /** @type {?} */
    EntityResponseOfSensorStatusTimeSeries.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfTreeNode extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfTreeNode.prototype.entity;
    /** @type {?} */
    EntityResponseOfTreeNode.prototype.code;
    /** @type {?} */
    EntityResponseOfTreeNode.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfUser extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfUser.prototype.entity;
    /** @type {?} */
    EntityResponseOfUser.prototype.code;
    /** @type {?} */
    EntityResponseOfUser.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EntityResponseOfUserAccountInfo extends EntityResponse {
}
if (false) {
    /** @type {?} */
    EntityResponseOfUserAccountInfo.prototype.entity;
    /** @type {?} */
    EntityResponseOfUserAccountInfo.prototype.code;
    /** @type {?} */
    EntityResponseOfUserAccountInfo.prototype.error;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    EventIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    EventIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventsServiceFindInAreaRequest {
    /**
     * @param {?=} folderId
     * @param {?=} searchArea
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(folderId, searchArea, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        this.folderId = folderId;
        this.searchArea = searchArea;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.folderId;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.searchArea;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.sensorId;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.objectType;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.behaviorType;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.severity;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.from;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.to;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.sort;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.page;
    /** @type {?} */
    EventsServiceFindInAreaRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventsServiceFindRequest {
    /**
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(folderId, subFolders, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceFindRequest.prototype.folderId;
    /** @type {?} */
    EventsServiceFindRequest.prototype.subFolders;
    /** @type {?} */
    EventsServiceFindRequest.prototype.sensorId;
    /** @type {?} */
    EventsServiceFindRequest.prototype.objectType;
    /** @type {?} */
    EventsServiceFindRequest.prototype.behaviorType;
    /** @type {?} */
    EventsServiceFindRequest.prototype.severity;
    /** @type {?} */
    EventsServiceFindRequest.prototype.from;
    /** @type {?} */
    EventsServiceFindRequest.prototype.to;
    /** @type {?} */
    EventsServiceFindRequest.prototype.sort;
    /** @type {?} */
    EventsServiceFindRequest.prototype.page;
    /** @type {?} */
    EventsServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventsServiceSetClipPathRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceSetClipPathRequest.prototype.id;
    /** @type {?} */
    EventsServiceSetClipPathRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventsServiceSetImagePathRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceSetImagePathRequest.prototype.id;
    /** @type {?} */
    EventsServiceSetImagePathRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventsServiceSetStatusRequest {
    /**
     * @param {?=} id
     * @param {?=} status
     */
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceSetStatusRequest.prototype.id;
    /** @type {?} */
    EventsServiceSetStatusRequest.prototype.status;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class EventsServiceStatisticsRequest {
    /**
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} format
     */
    constructor(folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.format = format;
    }
}
if (false) {
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.folderId;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.sensorId;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.objectType;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.behaviorType;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.severity;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.from;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.to;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.interval;
    /** @type {?} */
    EventsServiceStatisticsRequest.prototype.format;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeatureIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    FeatureIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeatureIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    FeatureIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesGroupIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    FeaturesGroupIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesGroupIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    FeaturesGroupIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesGroupsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FeaturesGroupsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesGroupsServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} sort
     */
    constructor(search, sort) {
        this.search = search;
        this.sort = sort;
    }
}
if (false) {
    /** @type {?} */
    FeaturesGroupsServiceFindRequest.prototype.search;
    /** @type {?} */
    FeaturesGroupsServiceFindRequest.prototype.sort;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesGroupsServiceSetFeaturesRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FeaturesGroupsServiceSetFeaturesRequest.prototype.id;
    /** @type {?} */
    FeaturesGroupsServiceSetFeaturesRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesGroupsServiceSetNameRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FeaturesGroupsServiceSetNameRequest.prototype.id;
    /** @type {?} */
    FeaturesGroupsServiceSetNameRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesGroupsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FeaturesGroupsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    FeaturesGroupsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FeaturesServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} category
     * @param {?=} sort
     */
    constructor(search, category, sort) {
        this.search = search;
        this.category = category;
        this.sort = sort;
    }
}
if (false) {
    /** @type {?} */
    FeaturesServiceFindRequest.prototype.search;
    /** @type {?} */
    FeaturesServiceFindRequest.prototype.category;
    /** @type {?} */
    FeaturesServiceFindRequest.prototype.sort;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FeaturesServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FeaturesServiceUpdateRequest.prototype.id;
    /** @type {?} */
    FeaturesServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FolderIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    FolderIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FolderIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    FolderIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceChangeGeoAreaRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceChangeGeoAreaRequest.prototype.id;
    /** @type {?} */
    FoldersServiceChangeGeoAreaRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceChangeGeoLocationRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceChangeGeoLocationRequest.prototype.id;
    /** @type {?} */
    FoldersServiceChangeGeoLocationRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceChangeNameRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceChangeNameRequest.prototype.id;
    /** @type {?} */
    FoldersServiceChangeNameRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceChangeParentRequest {
    /**
     * @param {?=} id
     * @param {?=} parentId
     */
    constructor(id, parentId) {
        this.id = id;
        this.parentId = parentId;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceChangeParentRequest.prototype.id;
    /** @type {?} */
    FoldersServiceChangeParentRequest.prototype.parentId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceChangeTimezoneRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceChangeTimezoneRequest.prototype.id;
    /** @type {?} */
    FoldersServiceChangeTimezoneRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceFindRequest {
    /**
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(id, search, parentId, sort, page, pageSize) {
        this.id = id;
        this.search = search;
        this.parentId = parentId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceFindRequest.prototype.id;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.search;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.parentId;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.sort;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.page;
    /** @type {?} */
    FoldersServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class FoldersServiceGetHierarchyRequest {
    /**
     * @param {?=} includeSensors
     */
    constructor(includeSensors) {
        this.includeSensors = includeSensors;
    }
}
if (false) {
    /** @type {?} */
    FoldersServiceGetHierarchyRequest.prototype.includeSensors;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class GeoServicesReferenceRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    GeoServicesReferenceRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class IntegrationIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    IntegrationIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class IntegrationIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    IntegrationIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class IntegrationsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    IntegrationsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class IntegrationsServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} type
     */
    constructor(search, type) {
        this.search = search;
        this.type = type;
    }
}
if (false) {
    /** @type {?} */
    IntegrationsServiceFindRequest.prototype.search;
    /** @type {?} */
    IntegrationsServiceFindRequest.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class IntegrationsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    IntegrationsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    IntegrationsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Query response message returned for find operation (with pagination) on multiple entities
*/
class QueryResponse {
    /**
     * @param {?=} code
     * @param {?=} error
     * @param {?=} page
     * @param {?=} pageSize
     * @param {?=} pages
     * @param {?=} total
     * @param {?=} queryDef
     * @param {?=} docType
     */
    constructor(code, error, page, pageSize, pages, total, queryDef, docType) {
        this.code = code;
        this.error = error;
        this.page = page;
        this.pageSize = pageSize;
        this.pages = pages;
        this.total = total;
        this.queryDef = queryDef;
        this.docType = docType;
    }
}
if (false) {
    /** @type {?} */
    QueryResponse.prototype.code;
    /** @type {?} */
    QueryResponse.prototype.error;
    /** @type {?} */
    QueryResponse.prototype.page;
    /** @type {?} */
    QueryResponse.prototype.pageSize;
    /** @type {?} */
    QueryResponse.prototype.pages;
    /** @type {?} */
    QueryResponse.prototype.total;
    /** @type {?} */
    QueryResponse.prototype.queryDef;
    /** @type {?} */
    QueryResponse.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfAccount extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfAccount.prototype.list;
    /** @type {?} */
    QueryResponseOfAccount.prototype.code;
    /** @type {?} */
    QueryResponseOfAccount.prototype.error;
    /** @type {?} */
    QueryResponseOfAccount.prototype.page;
    /** @type {?} */
    QueryResponseOfAccount.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfAccount.prototype.pages;
    /** @type {?} */
    QueryResponseOfAccount.prototype.total;
    /** @type {?} */
    QueryResponseOfAccount.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfAccount.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfAppliance extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfAppliance.prototype.list;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.code;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.error;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.page;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.pages;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.total;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfAppliance.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfAuditLog extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.list;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.code;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.error;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.page;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.pages;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.total;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfAuditLog.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfCalendar extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfCalendar.prototype.list;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.code;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.error;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.page;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.pages;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.total;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfCalendar.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfComponentConfiguration extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.list;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.code;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.error;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.page;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.pages;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.total;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfComponentConfiguration.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfConfiguration extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.list;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.code;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.error;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.page;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.pages;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.total;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfConfiguration.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfConfigurationVersion extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.list;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.code;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.error;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.page;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.pages;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.total;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfConfigurationVersion.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfEvent extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfEvent.prototype.list;
    /** @type {?} */
    QueryResponseOfEvent.prototype.code;
    /** @type {?} */
    QueryResponseOfEvent.prototype.error;
    /** @type {?} */
    QueryResponseOfEvent.prototype.page;
    /** @type {?} */
    QueryResponseOfEvent.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfEvent.prototype.pages;
    /** @type {?} */
    QueryResponseOfEvent.prototype.total;
    /** @type {?} */
    QueryResponseOfEvent.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfEvent.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfFolder extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfFolder.prototype.list;
    /** @type {?} */
    QueryResponseOfFolder.prototype.code;
    /** @type {?} */
    QueryResponseOfFolder.prototype.error;
    /** @type {?} */
    QueryResponseOfFolder.prototype.page;
    /** @type {?} */
    QueryResponseOfFolder.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfFolder.prototype.pages;
    /** @type {?} */
    QueryResponseOfFolder.prototype.total;
    /** @type {?} */
    QueryResponseOfFolder.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfFolder.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfIntegrationTarget extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.list;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.code;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.error;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.page;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.pages;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.total;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfIntegrationTarget.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfObjectInfo extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.list;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.code;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.error;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.page;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.pages;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.total;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfObjectInfo.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfReportDefinition extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.list;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.code;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.error;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.page;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.pages;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.total;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfReportDefinition.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfRule extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfRule.prototype.list;
    /** @type {?} */
    QueryResponseOfRule.prototype.code;
    /** @type {?} */
    QueryResponseOfRule.prototype.error;
    /** @type {?} */
    QueryResponseOfRule.prototype.page;
    /** @type {?} */
    QueryResponseOfRule.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfRule.prototype.pages;
    /** @type {?} */
    QueryResponseOfRule.prototype.total;
    /** @type {?} */
    QueryResponseOfRule.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfRule.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfSchedule extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfSchedule.prototype.list;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.code;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.error;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.page;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.pages;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.total;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfSchedule.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfSearchDefinition extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.list;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.code;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.error;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.page;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.pages;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.total;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfSearchDefinition.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfSensor extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfSensor.prototype.list;
    /** @type {?} */
    QueryResponseOfSensor.prototype.code;
    /** @type {?} */
    QueryResponseOfSensor.prototype.error;
    /** @type {?} */
    QueryResponseOfSensor.prototype.page;
    /** @type {?} */
    QueryResponseOfSensor.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfSensor.prototype.pages;
    /** @type {?} */
    QueryResponseOfSensor.prototype.total;
    /** @type {?} */
    QueryResponseOfSensor.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfSensor.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfTreeItem extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.list;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.code;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.error;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.page;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.pages;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.total;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfTreeItem.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class QueryResponseOfUser extends QueryResponse {
}
if (false) {
    /** @type {?} */
    QueryResponseOfUser.prototype.list;
    /** @type {?} */
    QueryResponseOfUser.prototype.code;
    /** @type {?} */
    QueryResponseOfUser.prototype.error;
    /** @type {?} */
    QueryResponseOfUser.prototype.page;
    /** @type {?} */
    QueryResponseOfUser.prototype.pageSize;
    /** @type {?} */
    QueryResponseOfUser.prototype.pages;
    /** @type {?} */
    QueryResponseOfUser.prototype.total;
    /** @type {?} */
    QueryResponseOfUser.prototype.queryDef;
    /** @type {?} */
    QueryResponseOfUser.prototype.docType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ReportIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ReportIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ReportIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ReportIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ReportsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    ReportsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ReportsServiceFindRequest {
    /**
     * @param {?=} search
     */
    constructor(search) {
        this.search = search;
    }
}
if (false) {
    /** @type {?} */
    ReportsServiceFindRequest.prototype.search;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ReportsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    ReportsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    ReportsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class RuleIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    RuleIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class RuleIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    RuleIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class RulesServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    RulesServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class RulesServiceFindRequest {
    /**
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} search
     * @param {?=} ruleType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(folderId, sensorId, search, ruleType, behaviorType, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.ruleType = ruleType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    RulesServiceFindRequest.prototype.folderId;
    /** @type {?} */
    RulesServiceFindRequest.prototype.sensorId;
    /** @type {?} */
    RulesServiceFindRequest.prototype.search;
    /** @type {?} */
    RulesServiceFindRequest.prototype.ruleType;
    /** @type {?} */
    RulesServiceFindRequest.prototype.behaviorType;
    /** @type {?} */
    RulesServiceFindRequest.prototype.severity;
    /** @type {?} */
    RulesServiceFindRequest.prototype.sort;
    /** @type {?} */
    RulesServiceFindRequest.prototype.page;
    /** @type {?} */
    RulesServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class RulesServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    RulesServiceUpdateRequest.prototype.id;
    /** @type {?} */
    RulesServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ScheduleIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ScheduleIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ScheduleIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ScheduleIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ScheduledReportIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ScheduledReportIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ScheduledReportIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    ScheduledReportIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ScheduledReportsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    ScheduledReportsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ScheduledReportsServiceFindRequest {
    /**
     * @param {?=} search
     */
    constructor(search) {
        this.search = search;
    }
}
if (false) {
    /** @type {?} */
    ScheduledReportsServiceFindRequest.prototype.search;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class ScheduledReportsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    ScheduledReportsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    ScheduledReportsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SchedulesServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SchedulesServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SchedulesServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} folderId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(search, folderId, sort, page, pageSize) {
        this.search = search;
        this.folderId = folderId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SchedulesServiceFindRequest.prototype.search;
    /** @type {?} */
    SchedulesServiceFindRequest.prototype.folderId;
    /** @type {?} */
    SchedulesServiceFindRequest.prototype.sort;
    /** @type {?} */
    SchedulesServiceFindRequest.prototype.page;
    /** @type {?} */
    SchedulesServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SchedulesServiceFolderIdRequest {
    /**
     * @param {?=} folderId
     */
    constructor(folderId) {
        this.folderId = folderId;
    }
}
if (false) {
    /** @type {?} */
    SchedulesServiceFolderIdRequest.prototype.folderId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SchedulesServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SchedulesServiceUpdateRequest.prototype.id;
    /** @type {?} */
    SchedulesServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SearchIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    SearchIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SearchIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    SearchIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SearchServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SearchServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SearchServiceExecuteRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SearchServiceExecuteRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SearchServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(search, sort, page, pageSize) {
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SearchServiceFindRequest.prototype.search;
    /** @type {?} */
    SearchServiceFindRequest.prototype.sort;
    /** @type {?} */
    SearchServiceFindRequest.prototype.page;
    /** @type {?} */
    SearchServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SearchServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SearchServiceUpdateRequest.prototype.id;
    /** @type {?} */
    SearchServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    SensorIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    SensorIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceChangeFolderRequest {
    /**
     * @param {?=} id
     * @param {?=} folderId
     */
    constructor(id, folderId) {
        this.id = id;
        this.folderId = folderId;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceChangeFolderRequest.prototype.id;
    /** @type {?} */
    SensorsServiceChangeFolderRequest.prototype.folderId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceChangeFovRequest {
    /**
     * @param {?=} id
     * @param {?=} azimuth
     * @param {?=} body
     */
    constructor(id, azimuth, body) {
        this.id = id;
        this.azimuth = azimuth;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceChangeFovRequest.prototype.id;
    /** @type {?} */
    SensorsServiceChangeFovRequest.prototype.azimuth;
    /** @type {?} */
    SensorsServiceChangeFovRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceChangeGeoLocationRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceChangeGeoLocationRequest.prototype.id;
    /** @type {?} */
    SensorsServiceChangeGeoLocationRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceChangeNameRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceChangeNameRequest.prototype.id;
    /** @type {?} */
    SensorsServiceChangeNameRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceChangeStatusRequest {
    /**
     * @param {?=} id
     * @param {?=} status
     */
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceChangeStatusRequest.prototype.id;
    /** @type {?} */
    SensorsServiceChangeStatusRequest.prototype.status;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceFindRequest {
    /**
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceFindRequest.prototype.folderId;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.subFolders;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.search;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.type;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.status;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.stream;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.sort;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.page;
    /** @type {?} */
    SensorsServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceStatusOvertimeRequest {
    /**
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     */
    constructor(id, from, to) {
        this.id = id;
        this.from = from;
        this.to = to;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceStatusOvertimeRequest.prototype.id;
    /** @type {?} */
    SensorsServiceStatusOvertimeRequest.prototype.from;
    /** @type {?} */
    SensorsServiceStatusOvertimeRequest.prototype.to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SensorsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SensorsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    SensorsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Response of byte array
*/
class StreamResponse {
    /**
     * @param {?=} content
     */
    constructor(content) {
        this.content = content;
    }
}
if (false) {
    /** @type {?} */
    StreamResponse.prototype.content;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysAppliancesServiceFindRequest {
    /**
     * @param {?=} accountId
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(accountId, search, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.accountId;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.search;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.status;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.sort;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.page;
    /** @type {?} */
    SysAppliancesServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysAppliancesServiceGetCommandsRequest {
    /**
     * @param {?=} accountId
     * @param {?=} applianceId
     * @param {?=} status
     */
    constructor(accountId, applianceId, status) {
        this.accountId = accountId;
        this.applianceId = applianceId;
        this.status = status;
    }
}
if (false) {
    /** @type {?} */
    SysAppliancesServiceGetCommandsRequest.prototype.accountId;
    /** @type {?} */
    SysAppliancesServiceGetCommandsRequest.prototype.applianceId;
    /** @type {?} */
    SysAppliancesServiceGetCommandsRequest.prototype.status;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysConfigurationsServiceCreateRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SysConfigurationsServiceCreateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysConfigurationsServiceCreateVersionRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SysConfigurationsServiceCreateVersionRequest.prototype.id;
    /** @type {?} */
    SysConfigurationsServiceCreateVersionRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysConfigurationsServiceDeleteVersionRequest {
    /**
     * @param {?=} id
     * @param {?=} versionId
     */
    constructor(id, versionId) {
        this.id = id;
        this.versionId = versionId;
    }
}
if (false) {
    /** @type {?} */
    SysConfigurationsServiceDeleteVersionRequest.prototype.id;
    /** @type {?} */
    SysConfigurationsServiceDeleteVersionRequest.prototype.versionId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysConfigurationsServiceFindRequest {
    /**
     * @param {?=} target
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(target, search, sort, page, pageSize) {
        this.target = target;
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SysConfigurationsServiceFindRequest.prototype.target;
    /** @type {?} */
    SysConfigurationsServiceFindRequest.prototype.search;
    /** @type {?} */
    SysConfigurationsServiceFindRequest.prototype.sort;
    /** @type {?} */
    SysConfigurationsServiceFindRequest.prototype.page;
    /** @type {?} */
    SysConfigurationsServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysConfigurationsServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SysConfigurationsServiceUpdateRequest.prototype.id;
    /** @type {?} */
    SysConfigurationsServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysConfigurationsServiceUpdateVersionRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SysConfigurationsServiceUpdateVersionRequest.prototype.id;
    /** @type {?} */
    SysConfigurationsServiceUpdateVersionRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysEventIdRequest {
    /**
     * @param {?=} id
     * @param {?=} accountId
     */
    constructor(id, accountId) {
        this.id = id;
        this.accountId = accountId;
    }
}
if (false) {
    /** @type {?} */
    SysEventIdRequest.prototype.id;
    /** @type {?} */
    SysEventIdRequest.prototype.accountId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysEventsServiceFindInAreaRequest {
    /**
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.accountId;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.folderId;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.sensorId;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.objectType;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.behaviorType;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.severity;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.from;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.to;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.sort;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.page;
    /** @type {?} */
    SysEventsServiceFindInAreaRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysEventsServiceStatisticsRequest {
    /**
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} format
     */
    constructor(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.format = format;
    }
}
if (false) {
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.accountId;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.folderId;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.sensorId;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.objectType;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.behaviorType;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.severity;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.from;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.to;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.interval;
    /** @type {?} */
    SysEventsServiceStatisticsRequest.prototype.format;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysKeysServiceCreateApiKeyRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    SysKeysServiceCreateApiKeyRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class SysSensorsServiceFindRequest {
    /**
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(accountId, folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.accountId;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.folderId;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.subFolders;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.search;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.type;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.status;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.stream;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.sort;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.page;
    /** @type {?} */
    SysSensorsServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Token request message
*/
class TokenRequest {
    /**
     * @param {?=} code
     * @param {?=} error
     * @param {?=} accountId
     */
    constructor(code, error, accountId) {
        this.code = code;
        this.error = error;
        this.accountId = accountId;
    }
}
if (false) {
    /** @type {?} */
    TokenRequest.prototype.code;
    /** @type {?} */
    TokenRequest.prototype.error;
    /** @type {?} */
    TokenRequest.prototype.accountId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserByEmailRequest {
    /**
     * @param {?=} email
     */
    constructor(email) {
        this.email = email;
    }
}
if (false) {
    /** @type {?} */
    UserByEmailRequest.prototype.email;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserIdRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    UserIdRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserIdsRequest {
    /**
     * @param {?=} id
     */
    constructor(id) {
        this.id = id;
    }
}
if (false) {
    /** @type {?} */
    UserIdsRequest.prototype.id;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceChangeMobileRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UserServiceChangeMobileRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceChangeNameRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UserServiceChangeNameRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceChangePasswordRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UserServiceChangePasswordRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceCheckPasswordRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UserServiceCheckPasswordRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceLoginRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UserServiceLoginRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceResetPasswordRequest {
    /**
     * @param {?=} code
     */
    constructor(code) {
        this.code = code;
    }
}
if (false) {
    /** @type {?} */
    UserServiceResetPasswordRequest.prototype.code;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceSendVerificationRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UserServiceSendVerificationRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceSwitchAccountRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UserServiceSwitchAccountRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UserServiceVerifyLoginRequest {
    /**
     * @param {?=} key
     */
    constructor(key) {
        this.key = key;
    }
}
if (false) {
    /** @type {?} */
    UserServiceVerifyLoginRequest.prototype.key;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceChangeDefaultAccountRequest {
    /**
     * @param {?=} id
     * @param {?=} accountId
     */
    constructor(id, accountId) {
        this.id = id;
        this.accountId = accountId;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceChangeDefaultAccountRequest.prototype.id;
    /** @type {?} */
    UsersServiceChangeDefaultAccountRequest.prototype.accountId;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceChangeMobileRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceChangeMobileRequest.prototype.id;
    /** @type {?} */
    UsersServiceChangeMobileRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceChangeNameRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceChangeNameRequest.prototype.id;
    /** @type {?} */
    UsersServiceChangeNameRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceChangeRoleRequest {
    /**
     * @param {?=} id
     * @param {?=} role
     */
    constructor(id, role) {
        this.id = id;
        this.role = role;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceChangeRoleRequest.prototype.id;
    /** @type {?} */
    UsersServiceChangeRoleRequest.prototype.role;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceChangeStatusRequest {
    /**
     * @param {?=} id
     * @param {?=} status
     */
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceChangeStatusRequest.prototype.id;
    /** @type {?} */
    UsersServiceChangeStatusRequest.prototype.status;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceChangeTypeRequest {
    /**
     * @param {?=} id
     * @param {?=} type
     */
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceChangeTypeRequest.prototype.id;
    /** @type {?} */
    UsersServiceChangeTypeRequest.prototype.type;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceFindRequest {
    /**
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     */
    constructor(search, type, status, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceFindRequest.prototype.search;
    /** @type {?} */
    UsersServiceFindRequest.prototype.type;
    /** @type {?} */
    UsersServiceFindRequest.prototype.status;
    /** @type {?} */
    UsersServiceFindRequest.prototype.sort;
    /** @type {?} */
    UsersServiceFindRequest.prototype.page;
    /** @type {?} */
    UsersServiceFindRequest.prototype.pageSize;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceInviteRequest {
    /**
     * @param {?=} body
     */
    constructor(body) {
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceInviteRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceSetRolesRequest {
    /**
     * @param {?=} id
     * @param {?=} roles
     */
    constructor(id, roles) {
        this.id = id;
        this.roles = roles;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceSetRolesRequest.prototype.id;
    /** @type {?} */
    UsersServiceSetRolesRequest.prototype.roles;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
class UsersServiceUpdateRequest {
    /**
     * @param {?=} id
     * @param {?=} body
     */
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}
if (false) {
    /** @type {?} */
    UsersServiceUpdateRequest.prototype.id;
    /** @type {?} */
    UsersServiceUpdateRequest.prototype.body;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Access token key in the local storage
/** @type {?} */
const tokenKey = 'portalAccessToken';
/** @type {?} */
const loginKey = 'portalLoginData';
/**
 * @return {?}
 */
function getToken() {
    return localStorage.getItem(tokenKey);
}
/**
 * @param {?} token
 * @return {?}
 */
function setToken(token) {
    localStorage.setItem(tokenKey, token);
}
/**
 * @return {?}
 */
function removeToken() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(loginKey);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Utility class for all REST services with common functions
 */
class RestUtil {
    /**
     * Constructor with injected authentication service
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * HTTP GET action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    get(url, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * HTTP POST action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    post(url, body, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * HTTP PUT action
     * @param {?} url
     * @param {?} body
     * @param {...?} params
     * @return {?}
     */
    put(url, body, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * HTTP DELETE action
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    delete(url, ...params) {
        /** @type {?} */
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.processResponse(res))), catchError(this.handleError));
    }
    /**
     * Construct URL with parameters
     * @private
     * @param {?} url
     * @param {...?} params
     * @return {?}
     */
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    /**
     * Process the response, extract and refresh access token and return the body
     * @private
     * @param {?} response
     * @return {?}
     */
    processResponse(response) {
        if (response.status === 401) {
            removeToken();
            throw new Error('Access denied, reset token: ' + response.status);
        }
        else if (response.status > 400) {
            throw new Error('HTTP status error: ' + response.status);
        }
        // Get access token from header and update authentication service
        /** @type {?} */
        const accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            setToken(accessToken);
        }
        else {
            removeToken();
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    }
    /**
     * Error handling
     * @private
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    }
}
RestUtil.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RestUtil.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RestUtil.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    RestUtil.prototype.http;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of account related actions
 */
class AccountsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/accounts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of accounts and filter
     * \@Return: QueryResponse<Account>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, type, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Get single account by id
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Change account geo-area (polygon)
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeGeoArea(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoArea`, JSON.stringify(body));
    }
    /**
     * Change account geo-location (center)
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeGeoLocation(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoLocation`, JSON.stringify(body));
    }
    /**
     * Get default geo location
     * \@Return: EntityResponse<Coordinate> The account location
     * @param {?=} id
     * @return {?}
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
}
AccountsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AccountsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    AccountsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AccountsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of appliance related actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class AppliancesService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/appliances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of appliances and filter
     * \@Return: QueryResponse<Appliance>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(folderId, subFolders, search, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Get single appliance by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * \@Return: QueryResponse<Sensor>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    findApplianceSensors(id, search, type, status, stream, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (stream != null) {
            params.push(`stream=${stream}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/sensors`, null, ...params);
    }
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * \@Return: EntityResponse<Sensor> The updated sensor
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    addApplianceSensor(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/sensors`, JSON.stringify(body));
    }
    /**
     * Register new appliance in the system
     * \@Return: EntityResponse<Appliance> The registered appliance
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    registerAppliance(id, body) {
        return this.rest.post(`${this.baseUrl}/register`, JSON.stringify(body));
    }
    /**
     * Get appliance runtime configuration components
     * \@Return: EntitiesResponse<ComponentConfiguration>
     * @param {?=} id
     * @return {?}
     */
    getRuntimeConfiguration(id) {
        return this.rest.get(`${this.baseUrl}/${id}/components`);
    }
    /**
     * Get list of appliance configurations for the specific product
     * \@Return: EntitiesResponse<ApplianceConfiguration>
     * @param {?=} target
     * @return {?}
     */
    getConfigurations(target) {
        return this.rest.get(`${this.baseUrl}/configurations/${target}`);
    }
    /**
     * Change appliance name
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @param {?=} name
     * @return {?}
     */
    changeName(id, name) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, null);
    }
    /**
     * Change appliance folder
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @param {?=} folderId
     * @return {?}
     */
    changeFolder(id, folderId) {
        return this.rest.put(`${this.baseUrl}/${id}/folder/${folderId}`, null);
    }
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} machineId
     * @return {?}
     */
    changeMachineId(id, machineId) {
        return this.rest.put(`${this.baseUrl}/${id}/machine/${machineId}`, null);
    }
    /**
     * Change appliance configuration
     * \@Return: EntityResponse<Appliance> - Updated appliance
     * @param {?=} id
     * @param {?=} configId
     * @param {?=} versionId
     * @return {?}
     */
    changeConfiguration(id, configId, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/config/${configId}/${versionId}`, null);
    }
    /**
     * Delete appliance from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of appliance commands and filter
     * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     * @param {?=} accountId
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getCommands(accountId, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/commands`, ...params);
    }
    /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @return {?}
     */
    deleteCommand(commandId) {
        return this.rest.delete(`${this.baseUrl}/commands/${commandId}`);
    }
    /**
     * Get appliance status history over time
     * \@Return: EntityResponse<ApplianceStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    getStatusOverTime(id, from, to) {
        /** @type {?} */
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
}
AppliancesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AppliancesService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AppliancesService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    AppliancesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AppliancesService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Audit log queries for account administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup Admin
 */
class AuditLogService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/auditlog';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of audit log entries and filter
     * \@Return: QueryResponse<AuditLog>
     * @param {?=} userId
     * @param {?=} from
     * @param {?=} to
     * @param {?=} itemType
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(userId, from, to, itemType, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (itemType != null) {
            params.push(`itemType=${itemType}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Get single audit log entry by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
}
AuditLogService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuditLogService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuditLogService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    AuditLogService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    AuditLogService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for calendars (holidays) actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class CalendarsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/calendars';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new calendar
     * \@Return: EntityResponse<Calendar>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update calendar
     * \@Return: EntityResponse<Calendar>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete calendar from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single calendar by id
     * \@Return: EntityResponse<Calendar>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get calendars by list of ids
     * \@Return: EntitiesResponse<Calendar>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find calendars by filters
     * \@Return: QueryResponse<Calendar>
     * @param {?=} search
     * @param {?=} folderId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, folderId, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Find all calendars for a specified level in the folder hierarchy
     * This method returns all the calendars of the current folder and all parent folders
     * \@Return: EntitiesResponse<Calendar>
     * @param {?=} folderId
     * @return {?}
     */
    getFolderCalendars(folderId) {
        return this.rest.get(`${this.baseUrl}/folder/${folderId}`);
    }
}
CalendarsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CalendarsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CalendarsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    CalendarsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CalendarsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for events actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class EventsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/events';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new event
     * \@Return: EntityResponse<Event>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Change event workflow status
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Set event image path
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    setImagePath(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/imagePath`, JSON.stringify(body));
    }
    /**
     * Set event clip path
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    setClipPath(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/clipPath`, JSON.stringify(body));
    }
    /**
     * Get single event by id
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get events by list of ids
     * \@Return: EntitiesResponse<Event>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find events by filters
     * \@Return: QueryResponse<Event>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(folderId, subFolders, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Find events generated in area using spatial query
     * \@Return: QueryResponse<Event>
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    findInArea(folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.post(`${this.baseUrl}/area`, null, ...params);
    }
    /**
     * Get event image [response content type: image/jpeg]
     * \@Return: StreamingOutput of the image
     * @param {?=} id
     * @return {?}
     */
    getEventImage(id) {
        return this.rest.get(`${this.baseUrl}/${id}/image`);
    }
    /**
     * Get event clip [response content type: video/mp4]
     * \@Return: StreamingOutput of the clip
     * @param {?=} id
     * @return {?}
     */
    getEventClip(id) {
        return this.rest.get(`${this.baseUrl}/${id}/clip`);
    }
    /**
     * Get events count overtime for all events in the system
     * \@Return: EntityResponse<EventCountTimeSeries>
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} format
     * @return {?}
     */
    getEventsCountOvertime(folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (interval != null) {
            params.push(`interval=${interval}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        return this.rest.get(`${this.baseUrl}/overtime`, ...params);
    }
}
EventsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
EventsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    EventsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for folders actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class FoldersService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/folders';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new folder in the account hierarchy
     * \@Return: EntityResponse<Folder>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/folders`, JSON.stringify(body));
    }
    /**
     * Change folder name
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, JSON.stringify(body));
    }
    /**
     * Change folder parent id
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} parentId
     * @return {?}
     */
    changeParent(id, parentId) {
        return this.rest.put(`${this.baseUrl}/${id}/parent/${parentId}`, null);
    }
    /**
     * Change folder geo-area (polygon)
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeGeoArea(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoArea`, JSON.stringify(body));
    }
    /**
     * Change folder geo-location (center)
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeGeoLocation(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoLocation`, JSON.stringify(body));
    }
    /**
     * Change folder timezone
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeTimezone(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/timezone`, JSON.stringify(body));
    }
    /**
     * Delete folder from the system (only if it is empty)
     * \@Return: ActionResponse error will be returned if the folder is not empty
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single folder by id
     * \@Return: EntityResponse<Folder>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get folders by list of ids
     * \@Return: EntitiesResponse<Folder>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find events by filters
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(id, search, parentId, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (parentId != null) {
            params.push(`parentId=${parentId}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Find and filter list of folders
     * \@Return: QueryResponse<Folder>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getSubFolders(id, search, parentId, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (parentId != null) {
            params.push(`parentId=${parentId}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/folders`, ...params);
    }
    /**
     * Get items (folders and sensors) by parent folder id
     * \@Return: QueryResponse<TreeItem>
     * @param {?=} id
     * @param {?=} search
     * @param {?=} parentId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getSubItems(id, search, parentId, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (parentId != null) {
            params.push(`parentId=${parentId}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/items`, ...params);
    }
    /**
     * Get account tree hierarchy (folders and sensors) - starting from the account level as root
     * \@Return: EntityResponse<TreeNode>
     * @param {?=} includeSensors
     * @return {?}
     */
    getHierarchy(includeSensors) {
        /** @type {?} */
        const params = new Array();
        if (includeSensors != null) {
            params.push(`includeSensors=${includeSensors}`);
        }
        return this.rest.get(`${this.baseUrl}/tree`, ...params);
    }
    /**
     * Get default geo bounds
     * \@Return: EntityResponse<Coordinate> The folder location
     * @param {?=} id
     * @return {?}
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
}
FoldersService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FoldersService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FoldersService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    FoldersService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    FoldersService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of Geo-spatial utilities
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class GeoService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/geo';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Digitize sensor FOV on WGS-84 coordinate system
     * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
     * The point represents the x,y values a normalized scale (each axis is 0 - 1000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * \@Return: EntityResponse<GeoReferenceData>
     * @param {?=} body
     * @return {?}
     */
    geoReference(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
}
GeoService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GeoService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    GeoService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    GeoService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    GeoService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
 */
class HealthCheckService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/health';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Health check to test service availability
     * \@Return: ActionResponse - with version info
     * @return {?}
     */
    health() {
        return this.rest.get(`${this.baseUrl}/`);
    }
}
HealthCheckService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HealthCheckService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HealthCheckService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    HealthCheckService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    HealthCheckService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for integrations targets (templates)
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class IntegrationsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/integrations';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update integration target
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete integration target from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single integration target by id
     * \@Return: EntityResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get integration targets by list of ids
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find integration targets by filters
     * \@Return: EntitiesResponse<IntegrationTarget>
     * @param {?=} search
     * @param {?=} type
     * @return {?}
     */
    find(search, type) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
IntegrationsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
IntegrationsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    IntegrationsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for reports definition actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class ReportsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new report definition
     * \@Return: EntityResponse<ReportDefinition>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update report definition
     * \@Return: EntityResponse<ReportDefinition>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete report definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single report definition by id
     * \@Return: EntityResponse<ReportDefinition>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple report definitions by list of ids
     * \@Return: EntitiesResponse<ReportDefinition>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find report definitions by filters
     * \@Return: QueryResponse<ReportDefinition>
     * @param {?=} search
     * @return {?}
     */
    find(search) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
ReportsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReportsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReportsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    ReportsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ReportsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for rules actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class RulesService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/rules';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new rule
     * \@Return: EntityResponse<Rule>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update rule
     * \@Return: EntityResponse<Rule>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete rule from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single rule by id
     * \@Return: EntityResponse<Rule>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get rules by list of ids
     * \@Return: EntitiesResponse<Rule>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find rules by filters
     * \@Return: QueryResponse<Rule>
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} search
     * @param {?=} ruleType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(folderId, sensorId, search, ruleType, behaviorType, severity, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (ruleType != null) {
            params.push(`ruleType=${ruleType}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
RulesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RulesService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RulesService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    RulesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    RulesService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for scheduled reports definition actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class ScheduledReportsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/scheduled-reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new scheduled report definition
     * \@Return: EntityResponse<ScheduledReport>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update scheduled report definition
     * \@Return: EntityResponse<ScheduledReport>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete scheduled report definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single scheduled report definition by id
     * \@Return: EntityResponse<ScheduledReport>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple scheduled report definitions by list of ids
     * \@Return: EntitiesResponse<ScheduledReport>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find scheduled report definitions by filters
     * \@Return: QueryResponse<ScheduledReport>
     * @param {?=} search
     * @return {?}
     */
    find(search) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
ScheduledReportsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScheduledReportsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScheduledReportsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    ScheduledReportsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ScheduledReportsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for schedules actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class SchedulesService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/schedules';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new schedule
     * \@Return: EntityResponse<Schedule>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update schedule
     * \@Return: EntityResponse<Schedule>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete schedule from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single schedule by id
     * \@Return: EntityResponse<Schedule>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get schedules by list of ids
     * \@Return: EntitiesResponse<Schedule>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find schedule by filters
     * \@Return: QueryResponse<Schedule>
     * @param {?=} search
     * @param {?=} folderId
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, folderId, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Find all schedules for a specified level in the folder hierarchy
     * This method returns all the schedules of the current folder and all parent folders
     * \@Return: EntitiesResponse<Schedule>
     * @param {?=} folderId
     * @return {?}
     */
    getFolderSchedules(folderId) {
        return this.rest.get(`${this.baseUrl}/folder/${folderId}`);
    }
}
SchedulesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchedulesService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchedulesService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SchedulesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SchedulesService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for metadata search actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class SearchService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/search';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update search definition
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete search definition from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single search definition by id
     * \@Return: EntityResponse<SearchDefinition>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple search definitions by list of ids
     * \@Return: EntitiesResponse<SearchDefinition>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find search definitions by filters
     * \@Return: QueryResponse<SearchDefinition>
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Perform metadata search by the search definition
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     * @param {?=} body
     * @return {?}
     */
    execute(body) {
        return this.rest.post(`${this.baseUrl}/execute`, JSON.stringify(body));
    }
    /**
     * Perform metadata saved search by the search id
     * \@Return: QueryResponse<ObjectInfo> - list of detected objects
     * @param {?=} id
     * @return {?}
     */
    executeById(id) {
        return this.rest.get(`${this.baseUrl}/execute/${id}`);
    }
}
SearchService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SearchService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for sensor actions
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup User Actions
 */
class SensorsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sensors';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new sensor
     * \@Return: EntityResponse<Sensor>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update sensor parameters
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Change sensor name
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, JSON.stringify(body));
    }
    /**
     * Change sensor parent folder id
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} folderId
     * @return {?}
     */
    changeFolder(id, folderId) {
        return this.rest.put(`${this.baseUrl}/${id}/folder/${folderId}`, null);
    }
    /**
     * Change sensor geo-location
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeGeoLocation(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoLocation`, JSON.stringify(body));
    }
    /**
     * Change sensor field of view transformation attributes
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} azimuth
     * @param {?=} body
     * @return {?}
     */
    changeFovAttributes(id, azimuth, body) {
        /** @type {?} */
        const params = new Array();
        if (azimuth != null) {
            params.push(`azimuth=${azimuth}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/fov`, JSON.stringify(body), ...params);
    }
    /**
     * Change sensor status
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Delete sensor from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single sensor by id
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get sensors by list of ids
     * \@Return: EntitiesResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find sensors by filters
     * \@Return: QueryResponse<Sensor>
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (stream != null) {
            params.push(`stream=${stream}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * \@Return: StreamingOutput of the reference image
     * @param {?=} id
     * @return {?}
     */
    getRefImage(id) {
        return this.rest.get(`${this.baseUrl}/${id}/ref-image`);
    }
    /**
     * Get default geo location
     * \@Return: EntityResponse<Coordinate>
     * @param {?=} id
     * @return {?}
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
    /**
     * Get single sensor health by sensor id
     * \@Return: EntityResponse<SensorHealth>
     * @param {?=} id
     * @return {?}
     */
    getSensorHealthStatus(id) {
        return this.rest.get(`${this.baseUrl}/${id}/health`);
    }
    /**
     * Get all sensors health status
     * \@Return: EntitiesResponse<SensorHealth>
     * @return {?}
     */
    getSensorsHealthStatus() {
        return this.rest.get(`${this.baseUrl}/health`);
    }
    /**
     * Get sensor status history over time
     * \@Return: EntityResponse<SensorStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    getStatusOverTime(id, from, to) {
        /** @type {?} */
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
}
SensorsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SensorsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SensorsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SensorsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SensorsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of account related actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysAccountsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/accounts';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new account
     * \@Return: EntityResponse<Account>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update existing account in the system
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Update account name
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, JSON.stringify(body));
    }
    /**
     * Change account type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change account status
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change account groups
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @param {?=} groupId
     * @return {?}
     */
    changeGroups(id, groupId) {
        /** @type {?} */
        const params = new Array();
        if (groupId != null) {
            params.push(`groupId=${groupId}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/groups/{groups}`, null, ...params);
    }
    /**
     * Change account geo-location (center)
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeGeoLocation(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoLocation`, JSON.stringify(body));
    }
    /**
     * Change account geo area
     * \@Return: EntityResponse<Account> The changed account
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeGeoArea(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoArea`, JSON.stringify(body));
    }
    /**
     * Get default geo location
     * \@Return: EntityResponse<Coordinate> The account location
     * @param {?=} id
     * @return {?}
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Delete account immediately without account status restrictions
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    purge(id) {
        return this.rest.delete(`${this.baseUrl}/purge/${id}`);
    }
    /**
     * Get single account by id
     * \@Return: EntityResponse<Account>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get accounts by list of ids
     * \@Return: EntitiesResponse<Account>
     * @param {?=} id
     * @return {?}
     */
    list(id) {
        /** @type {?} */
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find list of accounts and filter
     * \@Return: QueryResponse<Account>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, type, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Get account types statistics for all accounts in the system
     * \@Return: EntitiesResponse<AccountTypeSummary>
     * @return {?}
     */
    getAccountTypeStatistics() {
        return this.rest.get(`${this.baseUrl}/statistics/type`);
    }
}
SysAccountsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysAccountsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysAccountsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysAccountsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysAccountsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of appliance queries for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysAppliancesService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/appliances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single appliance by id
     * \@Return: EntityResponse<Appliance>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of appliances and filter
     * \@Return: QueryResponse<Appliance>
     * @param {?=} accountId
     * @param {?=} search
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(accountId, search, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Delete appliance from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of appliance commands and filter
     * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     * @param {?=} accountId
     * @param {?=} applianceId
     * @param {?=} status
     * @return {?}
     */
    getCommands(accountId, applianceId, status) {
        /** @type {?} */
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        return this.rest.get(`${this.baseUrl}/commands`, ...params);
    }
    /**
     * Update command status
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @param {?=} status
     * @return {?}
     */
    setCommandStatus(commandId, status) {
        return this.rest.put(`${this.baseUrl}/commands/${commandId}/${status}`, null);
    }
    /**
     * Delete command
     * \@Return: ActionResponse
     * @param {?=} commandId
     * @return {?}
     */
    deleteCommand(commandId) {
        return this.rest.delete(`${this.baseUrl}/commands/${commandId}`);
    }
}
SysAppliancesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysAppliancesService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysAppliancesService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysAppliancesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysAppliancesService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of configurations related actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
class SysConfigurationsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/configurations';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new configuration in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<Configuration>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update configuration in the system
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete configuration by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Set default version for configuration
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    setDefaultVersion(id, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/default-version/${versionId}`, null);
    }
    /**
     * Get configuration by id
     * \@Return: EntityResponse<Configuration>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get list of configurations by filter
     * \@Return: QueryResponse<Configuration>
     * @param {?=} target
     * @param {?=} search
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(target, search, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (target != null) {
            params.push(`target=${target}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Create new configuration version in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    createVersion(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/versions`, JSON.stringify(body));
    }
    /**
     * Update configuration version in the system
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    updateVersion(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/versions`, JSON.stringify(body));
    }
    /**
     * Delete configuration version by id
     * \@Return: ActionResponse
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    deleteVersion(id, versionId) {
        return this.rest.delete(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get specific configuration version
     * \@Return: EntityResponse<ConfigurationVersion>
     * @param {?=} id
     * @param {?=} versionId
     * @return {?}
     */
    getVersion(id, versionId) {
        return this.rest.get(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get all versions of specific configuration
     * \@Return: EntitiesResponse<ConfigurationVersion>
     * @param {?=} id
     * @return {?}
     */
    getVersions(id) {
        return this.rest.get(`${this.baseUrl}/${id}/versions`);
    }
}
SysConfigurationsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysConfigurationsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysConfigurationsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysConfigurationsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysConfigurationsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for event queries for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
class SysEventsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/events';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single event by id
     * \@Return: EntityResponse<Event>
     * @param {?=} id
     * @param {?=} accountId
     * @return {?}
     */
    get(id, accountId) {
        return this.rest.get(`${this.baseUrl}/${accountId}/${id}`);
    }
    /**
     * Find events by filters
     * \@Return: QueryResponse<Event>
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/${accountId}/`, ...params);
    }
    /**
     * Get events count overtime for all events in the system
     * \@Return: EntityResponse<EventCountTimeSeries>
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} sensorId
     * @param {?=} objectType
     * @param {?=} behaviorType
     * @param {?=} severity
     * @param {?=} from
     * @param {?=} to
     * @param {?=} interval
     * @param {?=} format
     * @return {?}
     */
    getEventsCountOvertime(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
        /** @type {?} */
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (interval != null) {
            params.push(`interval=${interval}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        return this.rest.get(`${this.baseUrl}/${accountId}/overtime`, ...params);
    }
}
SysEventsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysEventsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysEventsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysEventsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysEventsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Features groups services for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
class SysFeaturesGroupsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/features/groups';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new features group
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update features group
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Change features group name
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    setName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, JSON.stringify(body));
    }
    /**
     * Change features group features list
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    setFeatures(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/features`, JSON.stringify(body));
    }
    /**
     * Delete Feature from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single features group by id
     * \@Return: EntityResponse<FeaturesGroup>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find features groups by filters
     * \@Return: QueryResponse<FeaturesGroup>
     * @param {?=} search
     * @param {?=} sort
     * @return {?}
     */
    find(search, sort) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
SysFeaturesGroupsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysFeaturesGroupsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysFeaturesGroupsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysFeaturesGroupsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysFeaturesGroupsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Features services for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
class SysFeaturesService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/features';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new Feature
     * \@Return: EntityResponse<Feature>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/`, JSON.stringify(body));
    }
    /**
     * Update Feature
     * \@Return: EntityResponse<Feature>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Delete Feature from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single feature by id
     * \@Return: EntityResponse<Feature>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find features by filters
     * \@Return: QueryResponse<Feature>
     * @param {?=} search
     * @param {?=} category
     * @param {?=} sort
     * @return {?}
     */
    find(search, category, sort) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (category != null) {
            params.push(`category=${category}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
SysFeaturesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysFeaturesService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysFeaturesService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysFeaturesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysFeaturesService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of all key (API key + User token) related actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
class SysKeysService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/keys';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new API key for specific application name
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/api-keys`, JSON.stringify(body));
    }
    /**
     * Change API Key version (rotate key)
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    rotate(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/rotate`, null);
    }
    /**
     * Delete API Key
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/api-keys/${id}`);
    }
    /**
     * Get single API Key by id
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/api-keys/${id}`);
    }
    /**
     * Get list of all keys
     * \@Return: EntitiesResponse<ApiKey>
     * @return {?}
     */
    getAll() {
        return this.rest.get(`${this.baseUrl}/api-keys`);
    }
    /**
     * Enable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    enable(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/enable`, null);
    }
    /**
     * Disable key
     * \@Return: EntityResponse<ApiKey>
     * @param {?=} id
     * @return {?}
     */
    disable(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/disable`, null);
    }
}
SysKeysService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysKeysService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysKeysService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysKeysService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysKeysService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for sensor actions for system administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (portal)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 * \@ResourceGroup System Administrator
 */
class SysSensorsService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/sensors';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single sensor by id
     * \@Return: EntityResponse<Sensor>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find sensors by filters
     * \@Return: QueryResponse<Sensor>
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} stream
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(accountId, folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (stream != null) {
            params.push(`stream=${stream}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
    /**
     * Get single sensor health by sensor id
     * \@Return: EntityResponse<SensorHealth>
     * @param {?=} id
     * @return {?}
     */
    getSensorHealthStatus(id) {
        return this.rest.get(`${this.baseUrl}/${id}/health`);
    }
    /**
     * Get all sensors health status
     * \@Return: EntitiesResponse<SensorHealth>
     * @return {?}
     */
    getSensorsHealthStatus() {
        return this.rest.get(`${this.baseUrl}/health`);
    }
    /**
     * Get sensor status history over time
     * \@Return: EntityResponse<SensorStatusTimeSeries>
     * @param {?=} id
     * @param {?=} from
     * @param {?=} to
     * @return {?}
     */
    getStatusOverTime(id, from, to) {
        /** @type {?} */
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
}
SysSensorsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysSensorsService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysSensorsService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysSensorsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysSensorsService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of general system configuration actions for system administrator only
 */
class SysSystemService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/system';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get system license
     * \@Return: EntityResponse<License>
     * @return {?}
     */
    getLicense() {
        return this.rest.get(`${this.baseUrl}/license`);
    }
    /**
     * Import license data from file
     * \@Return: ActionResponse
     * @return {?}
     */
    importLicense() {
        return this.rest.post(`${this.baseUrl}/license`, null);
    }
    /**
     * Get system version
     * \@Return: ActionResponse
     * @return {?}
     */
    getSystemVersion() {
        return this.rest.get(`${this.baseUrl}/license`);
    }
    /**
     * Export account configuration data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    exportAccountData(id) {
        return this.rest.get(`${this.baseUrl}/export`);
    }
    /**
     * Import account configuration data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    importAccountData() {
        return this.rest.post(`${this.baseUrl}/import`, null);
    }
    /**
     * Export SW package configurations data
     * \@Return: StreamingOutput of the content (gzip)
     * @param {?=} id
     * @return {?}
     */
    exportConfigurations(id) {
        return this.rest.get(`${this.baseUrl}/configurations/export`);
    }
    /**
     * Import SW package configurations data from byte array (zip content)
     * \@Return: ActionResponse
     * @return {?}
     */
    importConfigurations() {
        return this.rest.post(`${this.baseUrl}/configurations/import`, null);
    }
}
SysSystemService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysSystemService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysSystemService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysSystemService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysSystemService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of all user related actions for account administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysUsersService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Send invitation to a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/sys/users/invite`, JSON.stringify(body));
    }
    /**
     * Update user
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Change user name
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, JSON.stringify(body));
    }
    /**
     * Change user mobile
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeMobile(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/mobile`, JSON.stringify(body));
    }
    /**
     * Change user type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change user status
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change user default account
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} accountId
     * @return {?}
     */
    changeDefaultAccount(id, accountId) {
        return this.rest.put(`${this.baseUrl}/${id}/defaultAccount/${accountId}`, null);
    }
    /**
     * Set user roles in his accounts (override previous roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    setRoles(id, roles) {
        return this.rest.post(`${this.baseUrl}/${id}/roles/`, JSON.stringify(roles));
    }
    /**
     * Update user roles in his accounts (merge with existing roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    mergeRoles(id, roles) {
        return this.rest.put(`${this.baseUrl}/${id}/roles/`, JSON.stringify(roles));
    }
    /**
     * Delete user from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by Id
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of users by filter
     * \@Return: QueryResponse<User>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, type, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
SysUsersService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysUsersService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Services for user registration and login
 */
class UserService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/user';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Login to the system with user email and password
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: EntityResponse<LoginData>
     * @param {?=} body
     * @return {?}
     */
    login(body) {
        return this.rest.post(`${this.baseUrl}/login`, JSON.stringify(body));
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<LoginData>
     * @return {?}
     */
    refreshToken() {
        return this.rest.post(`${this.baseUrl}/refresh-token`, null);
    }
    /**
     * Verify user by temporary login key
     * \@Return: EntityResponse<User>
     * @param {?=} key
     * @return {?}
     */
    verifyLoginKey(key) {
        /** @type {?} */
        const params = new Array();
        if (key != null) {
            params.push(`key=${key}`);
        }
        return this.rest.get(`${this.baseUrl}/login/verify`, ...params);
    }
    /**
     * Send verification code by email
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    sendVerificationCode(body) {
        return this.rest.post(`${this.baseUrl}/verify`, JSON.stringify(body));
    }
    /**
     * Validate verification code and reset password
     * \@Return: ActionResponse
     * @param {?=} code
     * @return {?}
     */
    resetPassword(code) {
        return this.rest.post(`${this.baseUrl}/reset-password`, JSON.stringify(code));
    }
    /**
     * Change password
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    changePassword(body) {
        return this.rest.post(`${this.baseUrl}/change-password`, JSON.stringify(body));
    }
    /**
     * Check if password was used before (according to password policy)
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    checkUnusedPassword(body) {
        return this.rest.post(`${this.baseUrl}/check-password`, JSON.stringify(body));
    }
    /**
     * Change current user name
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    changeName(body) {
        return this.rest.put(`${this.baseUrl}/name`, JSON.stringify(body));
    }
    /**
     * Change current user mobile
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    changeMobile(body) {
        return this.rest.put(`${this.baseUrl}/mobile`, JSON.stringify(body));
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * \@Return: EntityResponse<UserAccountInfo>
     * @param {?=} body
     * @return {?}
     */
    switchAccount(body) {
        return this.rest.post(`${this.baseUrl}/switch-account`, JSON.stringify(body));
    }
}
UserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    UserService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of all user related actions for account administrator only
 */
class UsersService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Send invitation to a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    invite(body) {
        return this.rest.post(`${this.baseUrl}/invite`, JSON.stringify(body));
    }
    /**
     * Update user
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Change user name
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, JSON.stringify(body));
    }
    /**
     * Change user mobile
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeMobile(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/mobile`, JSON.stringify(body));
    }
    /**
     * Change user type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change user role
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} role
     * @return {?}
     */
    changeRole(id, role) {
        return this.rest.put(`${this.baseUrl}/${id}/role/${role}`, null);
    }
    /**
     * Delete user from the system
     * The user will be removed from the account, if no accounts associated with the user, it will be deleted
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by id
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by email
     * \@Return: EntityResponse<User>
     * @param {?=} email
     * @return {?}
     */
    getByEmail(email) {
        return this.rest.get(`${this.baseUrl}/byEmail/${email}`);
    }
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * \@Return: QueryResponse<User>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, type, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
UsersService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UsersService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UsersService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    UsersService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    UsersService.prototype.rest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const Services = [
    HealthCheckService,
    SysAccountsService,
    SysAppliancesService,
    SysConfigurationsService,
    SysEventsService,
    SysFeaturesGroupsService,
    SysFeaturesService,
    SysKeysService,
    SysSensorsService,
    SysSystemService,
    SysUsersService,
    AccountsService,
    AppliancesService,
    AuditLogService,
    CalendarsService,
    EventsService,
    FoldersService,
    GeoService,
    IntegrationsService,
    ReportsService,
    RulesService,
    ScheduledReportsService,
    SchedulesService,
    SearchService,
    SensorsService,
    UserService,
    UsersService,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CoreConfig() { }
if (false) {
    /** @type {?} */
    CoreConfig.prototype.api;
}
class CoreLibModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        // console.log(config);
        return {
            ngModule: CoreLibModule,
            providers: [
                { provide: 'config', useValue: config },
                RestUtil,
                ...Services
            ]
        };
    }
}
CoreLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AbsoluteTimeFrame, Account, AccountIdRequest, AccountIdsRequest, AccountRole, AccountRoleCode, AccountStatusCode, AccountTypeCode, AccountTypeSummary, AccountsService, AccountsServiceChangeGroupsRequest, AccountsServiceChangeNameRequest, AccountsServiceChangeStatusRequest, AccountsServiceChangeTypeRequest, AccountsServiceCreateRequest, AccountsServiceFindRequest, AccountsServiceUpdateRequest, ActionResponse, Agent, AgentStatusCode, AnalysisResult, ApiKey, ApiKeyIdRequest, Appliance, ApplianceCapabilities, ApplianceCommand, ApplianceCommandCode, ApplianceCommandIdRequest, ApplianceConfiguration, ApplianceIdRequest, ApplianceRegistration, ApplianceStatus, ApplianceStatusCode, ApplianceStatusDataPoint, ApplianceStatusTimeSeries, ApplianceStatusTimestamped, AppliancesService, AppliancesServiceAddSensorRequest, AppliancesServiceChangeConfigurationRequest, AppliancesServiceChangeFolderRequest, AppliancesServiceChangeMachineIdRequest, AppliancesServiceChangeNameRequest, AppliancesServiceFindRequest, AppliancesServiceFindSensorsRequest, AppliancesServiceGetCommandsRequest, AppliancesServiceRegisterApplianceRequest, AppliancesServiceSetCommandRequest, AppliancesServiceStatusOvertimeRequest, AuditLog, AuditLogIdRequest, AuditLogService, AuditLogServiceFindRequest, BaseEntity, BehaviorTypeCode, BoundingBox, BoundingMap, Calendar, CalendarIdRequest, CalendarIdsRequest, CalendarsService, CalendarsServiceCreateRequest, CalendarsServiceFindRequest, CalendarsServiceFolderIdRequest, CalendarsServiceUpdateRequest, ChangeGeoAreaRequest, ChangeGeoLocationRequest, ChangePasswordRequest, ColorCode, ColorTypeCode, CommandStatusCode, ComponentConfiguration, Configuration, ConfigurationIdRequest, ConfigurationTargetRequest, ConfigurationVersion, ConfigurationVersionIdRequest, ControlPoint, Coordinate, CoreLibModule, DayOfWeekCode, Dimension, DiskInfo, DockerCredentials, EmptyRequest, EntitiesResponse, EntitiesResponseOfAccount, EntitiesResponseOfAccountTypeSummary, EntitiesResponseOfApiKey, EntitiesResponseOfAppliance, EntitiesResponseOfApplianceCommand, EntitiesResponseOfApplianceConfiguration, EntitiesResponseOfAuditLog, EntitiesResponseOfCalendar, EntitiesResponseOfComponentConfiguration, EntitiesResponseOfConfiguration, EntitiesResponseOfEvent, EntitiesResponseOfFeature, EntitiesResponseOfFeaturesGroup, EntitiesResponseOfFolder, EntitiesResponseOfIntegration, EntitiesResponseOfReportDefinition, EntitiesResponseOfRule, EntitiesResponseOfSchedule, EntitiesResponseOfScheduledReport, EntitiesResponseOfSearchDefinition, EntitiesResponseOfSensor, EntitiesResponseOfSensorHealth, EntityResponse, EntityResponseOfAccount, EntityResponseOfApiKey, EntityResponseOfAppliance, EntityResponseOfApplianceStatusTimeSeries, EntityResponseOfAuditLog, EntityResponseOfCalendar, EntityResponseOfComponentConfiguration, EntityResponseOfConfiguration, EntityResponseOfConfigurationVersion, EntityResponseOfCoordinate, EntityResponseOfEvent, EntityResponseOfEventCountTimeSeries, EntityResponseOfFeature, EntityResponseOfFeaturesGroup, EntityResponseOfFolder, EntityResponseOfGeoReferenceData, EntityResponseOfIntegration, EntityResponseOfLicense, EntityResponseOfLoginData, EntityResponseOfReportDefinition, EntityResponseOfRule, EntityResponseOfSchedule, EntityResponseOfScheduledReport, EntityResponseOfSearchDefinition, EntityResponseOfSensor, EntityResponseOfSensorHealth, EntityResponseOfSensorStatusTimeSeries, EntityResponseOfTreeNode, EntityResponseOfUser, EntityResponseOfUserAccountInfo, Event, EventAction, EventCountDataPoint, EventCountTimeSeries, EventIdRequest, EventIdsRequest, EventObjectInfo, EventObjectInstance, EventStatistics, EventStatusCode, EventsService, EventsServiceCreateRequest, EventsServiceFindInAreaRequest, EventsServiceFindRequest, EventsServiceSetClipPathRequest, EventsServiceSetImagePathRequest, EventsServiceSetStatusRequest, EventsServiceStatisticsRequest, Feature, FeatureIdRequest, FeatureIdsRequest, FeaturesGroup, FeaturesGroupIdRequest, FeaturesGroupIdsRequest, FeaturesGroupsServiceCreateRequest, FeaturesGroupsServiceFindRequest, FeaturesGroupsServiceSetFeaturesRequest, FeaturesGroupsServiceSetNameRequest, FeaturesGroupsServiceUpdateRequest, FeaturesServiceCreateRequest, FeaturesServiceFindRequest, FeaturesServiceUpdateRequest, Folder, FolderIdRequest, FolderIdsRequest, FoldersService, FoldersServiceChangeGeoAreaRequest, FoldersServiceChangeGeoLocationRequest, FoldersServiceChangeNameRequest, FoldersServiceChangeParentRequest, FoldersServiceChangeTimezoneRequest, FoldersServiceCreateRequest, FoldersServiceFindRequest, FoldersServiceGetHierarchyRequest, FovGeoAttributes, GeoCircle, GeoControlPoint, GeoPolygon, GeoReferenceData, GeoService, GeoServicesReferenceRequest, HealthCheckService, IntegrationAction, IntegrationIdRequest, IntegrationIdsRequest, IntegrationTarget, IntegrationTypeCode, IntegrationsService, IntegrationsServiceCreateRequest, IntegrationsServiceFindRequest, IntegrationsServiceUpdateRequest, License, LineCrossDirectionCode, LoginData, LoginParams, ObjectColor, ObjectInfo, ObjectInstance, ObjectTypeCode, Point, Preset, ProductTypeCode, QueryResponse, QueryResponseOfAccount, QueryResponseOfAppliance, QueryResponseOfAuditLog, QueryResponseOfCalendar, QueryResponseOfComponentConfiguration, QueryResponseOfConfiguration, QueryResponseOfConfigurationVersion, QueryResponseOfEvent, QueryResponseOfFolder, QueryResponseOfIntegrationTarget, QueryResponseOfObjectInfo, QueryResponseOfReportDefinition, QueryResponseOfRule, QueryResponseOfSchedule, QueryResponseOfSearchDefinition, QueryResponseOfSensor, QueryResponseOfTreeItem, QueryResponseOfUser, Recurrent, RecurrentTimeFrame, ReportDefinition, ReportIdRequest, ReportIdsRequest, ReportsService, ReportsServiceCreateRequest, ReportsServiceFindRequest, ReportsServiceUpdateRequest, RestUtil, Rule, RuleIdRequest, RuleIdsRequest, RulePolygon, RuleTypeCode, RulesService, RulesServiceCreateRequest, RulesServiceFindRequest, RulesServiceUpdateRequest, Schedule, ScheduleIdRequest, ScheduleIdsRequest, ScheduledReport, ScheduledReportIdRequest, ScheduledReportIdsRequest, ScheduledReportsService, ScheduledReportsServiceCreateRequest, ScheduledReportsServiceFindRequest, ScheduledReportsServiceUpdateRequest, SchedulesService, SchedulesServiceCreateRequest, SchedulesServiceFindRequest, SchedulesServiceFolderIdRequest, SchedulesServiceUpdateRequest, SearchDefinition, SearchIdRequest, SearchIdsRequest, SearchObject, SearchScopeCode, SearchService, SearchServiceCreateRequest, SearchServiceExecuteRequest, SearchServiceFindRequest, SearchServiceUpdateRequest, SearchTimeCode, Sensitivity, Sensor, SensorAnalysisResults, SensorAnomalyInfo, SensorDebugInfo, SensorHealth, SensorIdRequest, SensorIdsRequest, SensorResolutionCode, SensorStatus, SensorStatusCode, SensorStatusMask, SensorStatusTimeSeries, SensorStatusTimestamped, SensorTypeCode, SensorsService, SensorsServiceChangeFolderRequest, SensorsServiceChangeFovRequest, SensorsServiceChangeGeoLocationRequest, SensorsServiceChangeNameRequest, SensorsServiceChangeStatusRequest, SensorsServiceCreateRequest, SensorsServiceFindRequest, SensorsServiceStatusOvertimeRequest, SensorsServiceUpdateRequest, Services, SeverityTypeCode, StreamResponse, StreamTypeCode, StringKeyValue, SysAccountsService, SysAppliancesService, SysAppliancesServiceFindRequest, SysAppliancesServiceGetCommandsRequest, SysConfigurationsService, SysConfigurationsServiceCreateRequest, SysConfigurationsServiceCreateVersionRequest, SysConfigurationsServiceDeleteVersionRequest, SysConfigurationsServiceFindRequest, SysConfigurationsServiceUpdateRequest, SysConfigurationsServiceUpdateVersionRequest, SysEventIdRequest, SysEventsService, SysEventsServiceFindInAreaRequest, SysEventsServiceStatisticsRequest, SysFeaturesGroupsService, SysFeaturesService, SysKeysService, SysKeysServiceCreateApiKeyRequest, SysSensorsService, SysSensorsServiceFindRequest, SysSystemService, SysUsersService, TimeFrame, TimeUnitCode, TokenRequest, TreeItem, TreeNode, UpdateStatus, User, UserAccountInfo, UserByEmailRequest, UserIdRequest, UserIdsRequest, UserInvitation, UserRegistration, UserService, UserServiceChangeMobileRequest, UserServiceChangeNameRequest, UserServiceChangePasswordRequest, UserServiceCheckPasswordRequest, UserServiceLoginRequest, UserServiceResetPasswordRequest, UserServiceSendVerificationRequest, UserServiceSwitchAccountRequest, UserServiceVerifyLoginRequest, UserStatusCode, UserTypeCode, UsersService, UsersServiceChangeDefaultAccountRequest, UsersServiceChangeMobileRequest, UsersServiceChangeNameRequest, UsersServiceChangeRoleRequest, UsersServiceChangeStatusRequest, UsersServiceChangeTypeRequest, UsersServiceFindRequest, UsersServiceInviteRequest, UsersServiceSetRolesRequest, UsersServiceUpdateRequest, Verification, VisualQualityCode, ZoneTypeCode, getToken, removeToken, setToken, RestUtil as ɵa, Services as ɵb, SearchService as ɵba, SensorsService as ɵbb, UserService as ɵbc, UsersService as ɵbd, HealthCheckService as ɵc, RestUtil as ɵd, SysAccountsService as ɵe, SysAppliancesService as ɵf, SysConfigurationsService as ɵg, SysEventsService as ɵh, SysFeaturesGroupsService as ɵi, SysFeaturesService as ɵj, SysKeysService as ɵk, SysSensorsService as ɵl, SysSystemService as ɵm, SysUsersService as ɵn, AccountsService as ɵo, AppliancesService as ɵp, AuditLogService as ɵq, CalendarsService as ɵr, EventsService as ɵs, FoldersService as ɵt, GeoService as ɵu, IntegrationsService as ɵv, ReportsService as ɵw, RulesService as ɵx, ScheduledReportsService as ɵy, SchedulesService as ɵz };
//# sourceMappingURL=agentvi-ng-core-lib.js.map
