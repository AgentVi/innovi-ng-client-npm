import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

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
    constructor(name, startTime, endTime, active) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.active = active;
    }
}

/*
   Account role represents the role of the user in the account
*/
class AccountRole {
    constructor(accountId, role) {
        this.accountId = accountId;
        this.role = role;
    }
}

/*
   Account specific settings
*/
class AccountSettings {
    constructor(retentionDays, objectColors, ruleColor, maskColor) {
        this.retentionDays = retentionDays;
        this.objectColors = objectColors;
        this.ruleColor = ruleColor;
        this.maskColor = maskColor;
    }
}

/*
   Account statistic summary (provide info about account sensors and devices number compared to previous month)
*/
class AccountStatSummary {
    constructor(accountId, accountName, monthId, channels, channelsPercentage, devices, devicesPercentage) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.monthId = monthId;
        this.channels = channels;
        this.channelsPercentage = channelsPercentage;
        this.devices = devices;
        this.devicesPercentage = devicesPercentage;
    }
}

/*
   Account types aggregator summary
*/
class AccountTypeSummary {
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

/*
   Sensor training analysis result for a single model
   This data model is used by the training process of Anomaly Detection
*/
class AnalysisResult {
    constructor(modelType, resultsPath, completedOn) {
        this.modelType = modelType;
        this.resultsPath = resultsPath;
        this.completedOn = completedOn;
    }
}

/*
   Subset of event info required by the anomaly service
*/
class AnomalyEventInfo {
    constructor(eventId, objectIds, status) {
        this.eventId = eventId;
        this.objectIds = objectIds;
        this.status = status;
    }
}

/*
   SW Configuration for appliance
*/
class ApplianceConfiguration {
    constructor(configurationId, description, currentVersion, versions) {
        this.configurationId = configurationId;
        this.description = description;
        this.currentVersion = currentVersion;
        this.versions = versions;
    }
}

/*
   Appliance KPIs data point
*/
class ApplianceKpiDataPoint {
    constructor(cpuAvg, cpuMax, ram, loadAvg) {
        this.cpuAvg = cpuAvg;
        this.cpuMax = cpuMax;
        this.ram = ram;
        this.loadAvg = loadAvg;
    }
}

/*
   Appliance KPIs list over time (CPU, RAM, LOAD)
*/
class ApplianceKpiTimeSeries {
    constructor(label, interval, data) {
        this.label = label;
        this.interval = interval;
        this.data = data;
    }
}

/*
   Data point in a series representing appliance KPI values in a specific timestamp
*/
class ApplianceKpiTimestamped {
    constructor(timestamp, label, value) {
        this.timestamp = timestamp;
        this.label = label;
        this.value = value;
    }
}

/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
class ApplianceRegistration {
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

/*
   Appliance status list over time
*/
class ApplianceStatusTimeSeries {
    constructor(label, interval, data) {
        this.label = label;
        this.interval = interval;
        this.data = data;
    }
}

/*
   Data point in a series representing appliance status values in a specific timestamp
*/
class ApplianceStatusTimestamped {
    constructor(timestamp, label, value) {
        this.timestamp = timestamp;
        this.label = label;
        this.value = value;
    }
}

/*
   Bounding Box of crop in a frame (inside 10000 x 10000 coordinate system)
*/
class BoundingBox {
    constructor(maxX, maxY, minX, minY) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.minX = minX;
        this.minY = minY;
    }
}

/*
   Bounding Box of an area in a map (in WGS-84 coordinate system)
*/
class BoundingMap {
    constructor(maxLat, maxLng, minLat, minLng) {
        this.maxLat = maxLat;
        this.maxLng = maxLng;
        this.minLat = minLat;
        this.minLng = minLng;
    }
}

/*
   Coordinate of WGS-84 grid system
   See (https://en.wikipedia.org/wiki/World_Geodetic_System)
*/
class Coordinate {
    constructor(latitude, longitude, altitude) {
        this.lat = latitude;
        this.lon = longitude;
        this.alt = altitude;
    }
}

/*
   Object dimension on FOV
*/
class Dimension {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

/*
   Disk information
*/
class DiskInfo {
    constructor(name, totalBytes, usedBytes, usage) {
        this.name = name;
        this.totalBytes = totalBytes;
        this.usedBytes = usedBytes;
        this.usage = usage;
    }
}

/*
   Distribution series result - keys are long values
*/
class DistributionOfLong {
    constructor(label, data) {
        this.label = label;
        this.data = data;
    }
}

/*
   Distribution series result - keys are long values
*/
class DistributionOfString {
    constructor(label, data) {
        this.label = label;
        this.data = data;
    }
}

/*
   Docker registry credentials to connect to docker
   Includes information where to access and get images
*/
class DockerCredentials {
    constructor(dockerUser, dockerPwd) {
        this.dockerUser = dockerUser;
        this.dockerPwd = dockerPwd;
    }
}

/*
   Event count time series data point
*/
class EventCountDataPoint {
    constructor(timestamp, label, value) {
        this.timestamp = timestamp;
        this.label = label;
        this.value = value;
    }
}

/*
   Event count time series result
*/
class EventCountTimeSeries {
    constructor(label, interval, data) {
        this.label = label;
        this.interval = interval;
        this.data = data;
    }
}

/*
   FOV (Sensor Field of View) Geo attributes
*/
class FovGeoAttributes {
    constructor(geoArea, visibleArea, transformType, coefficients, controlPoints) {
        this.geoArea = geoArea;
        this.visibleArea = visibleArea;
        this.transformType = transformType;
        this.coefficients = coefficients;
        this.controlPoints = controlPoints;
    }
}

/*
   Geo spatial circle
*/
class GeoCircle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
}

/*
   Control point maps FOV location (10000 x 10000 coordinate system) to WGS-84 coordinate system
   Control points are used for FOV geo-referencing
*/
class GeoControlPoint {
    constructor(point, coordinate) {
        this.point = point;
        this.coordinate = coordinate;
    }
}

/*
   List of Geo control points
*/
class GeoControlPoints {
    constructor(points) {
        this.points = points;
    }
}

/*
   Geo spatial polygon
*/
class GeoPolygon {
    constructor(vertices) {
        this.vertices = vertices;
    }
}

/*
   Geo Reference data includes the contour of the raster image on the World coordinate system (WGS-84)
   and the list of transformation coefficients.
*/
class GeoReferenceData {
    constructor(coordinates, coefficients) {
        this.coordinates = coordinates;
        this.coefficients = coefficients;
    }
}

/*
   Geo Reference test used to test geo-referencing algorithm. The structure includes arbitrary list of points
   and the list of transformation coefficients.
*/
class GeoReferenceTest {
    constructor(points, coefficients) {
        this.points = points;
        this.coefficients = coefficients;
    }
}

/*
   Technical integration specification
*/
class IntegrationSpec {
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

/*
   Login data (returned by the API after successful login)
*/
class LoginData {
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

/*
   Login parameters data model
*/
class LoginParams {
    constructor(email, password, accessToken) {
        this.email = email;
        this.password = password;
        this.accessToken = accessToken;
    }
}

/*
   Key Value long tuple
*/
class LongTuple {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

/*
   Metadata object color description
*/
class ObjectColor {
    constructor(colorType, primary, primaryConf, secondaryColor, secondaryConf) {
        this.colorType = colorType;
        this.primary = primary;
        this.primaryConf = primaryConf;
        this.secondaryColor = secondaryColor;
        this.secondaryConf = secondaryConf;
    }
}

/*
   Object Metadata info
*/
class ObjectInfo {
    constructor(objectId, sensorId, birthTime, instances) {
        this.objectId = objectId;
        this.sensorId = sensorId;
        this.birthTime = birthTime;
        this.instances = instances;
    }
}

/*
   Metadata object instance info
   One instance of the object in the scene
*/
class ObjectInstance {
    constructor(timestamp, objectType, confidence, isStopped, colors, direction, dimension, boundingBox, speed, size, position, location) {
        this.timestamp = timestamp;
        this.objectType = objectType;
        this.confidence = confidence;
        this.isStopped = isStopped;
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

/*
   Used to reflect object type hierarchy
*/
class ObjectTypeNode {
    constructor(name, objectTypeCode, children) {
        this.name = name;
        this.objectTypeCode = objectTypeCode;
        this.children = children;
    }
}

/*
   Point (X,Y) on raster
*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

/*
   Recurrent time frame
*/
class Recurrent {
    constructor(startTime, endTime, period, daysOfWeek, targetId, recipients, subject, body, mimeType) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.period = period;
        this.daysOfWeek = daysOfWeek;
        this.targetId = targetId;
        this.recipients = recipients;
        this.subject = subject;
        this.body = body;
        this.mimeType = mimeType;
    }
}

/*
   Schedule recurrent time frame
*/
class RecurrentTimeFrame {
    constructor(dayOfWeek, startTime, endTime) {
        this.dayOfWeek = dayOfWeek;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}

/*
   Rule default encapsulates boundaries and default values of rule parameter
*/
class RuleDefault {
    constructor(min, max, defaultValue) {
        this.min = min;
        this.max = max;
        this.defaultValue = defaultValue;
    }
}

/*
   Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
   In case of a line, it is not a closed polygon (first and last points are not connected)
   In case of area description, the line crossing direction field is ignored
*/
class RulePolygon {
    constructor(lineCrossDir, points) {
        this.lineCrossDir = lineCrossDir;
        this.points = points;
    }
}

/*
   Rule specification describe rule parameters
*/
class RuleSpec {
    constructor(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, peopleInGroup, objectHierarchy) {
        this.behaviorType = behaviorType;
        this.ruleTypeName = ruleTypeName;
        this.objectTypes = objectTypes;
        this.isLineDrawing = isLineDrawing;
        this.dwellTime = dwellTime;
        this.peopleInGroup = peopleInGroup;
        this.objectHierarchy = objectHierarchy;
    }
}

/*
   Status of a search session
*/
class SearchStatus {
    constructor(sessionId, isFinished, total, progress) {
        this.sessionId = sessionId;
        this.isFinished = isFinished;
        this.total = total;
        this.progress = progress;
    }
}

/*
   Anomaly sensitivity defines parameters to adjust thresholds for anomaly events
*/
class Sensitivity {
    constructor(events, timeUnit) {
        this.events = events;
        this.timeUnit = timeUnit;
    }
}

/*
   Sensor anomaly information
   This data model is used by the inference process of Anomaly Detection
*/
class SensorAnomalyInfo {
    constructor(sensorId, results, ruleInfo) {
        this.sensorId = sensorId;
        this.results = results;
        this.ruleInfo = ruleInfo;
    }
}

/*
   Sensor anomaly rule information
*/
class SensorAnomalyRuleInfo {
    constructor(active, sensitivity, objectTypes) {
        this.active = active;
        this.sensitivity = sensitivity;
        this.objectTypes = objectTypes;
    }
}

/*
   Sensor debug information
*/
class SensorDebugInfo {
    constructor(saveCrops, saveFrames, saveEventImages) {
        this.saveCrops = saveCrops;
        this.saveFrames = saveFrames;
        this.saveEventImages = saveEventImages;
    }
}

/*
   Sensor configuration info
*/
class SensorInfo {
    constructor(name, type, streamType, imageResolution, recording, metadata, anomalyDetection, alarmInterval, maxBBoxPerFrame, maxFrameRate, streamUri, geoLocation, azimuth, fovAttributes, externalId, tags, debugInfo) {
        this.name = name;
        this.type = type;
        this.streamType = streamType;
        this.imageResolution = imageResolution;
        this.recording = recording;
        this.metadata = metadata;
        this.anomalyDetection = anomalyDetection;
        this.alarmInterval = alarmInterval;
        this.maxBBoxPerFrame = maxBBoxPerFrame;
        this.maxFrameRate = maxFrameRate;
        this.streamUri = streamUri;
        this.geoLocation = geoLocation;
        this.azimuth = azimuth;
        this.fovAttributes = fovAttributes;
        this.externalId = externalId;
        this.tags = tags;
        this.debugInfo = debugInfo;
    }
}

/*
   Sensor status list over time
*/
class SensorStatusTimeSeries {
    constructor(accountId, sensorId, label, interval, data) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.label = label;
        this.interval = interval;
        this.data = data;
    }
}

/*
   Data point in a series representing a sensor status value in a specific timestamp
*/
class SensorStatusTimestamped {
    constructor(state, timestamp, label) {
        this.state = state;
        this.timestamp = timestamp;
        this.label = label;
    }
}

/*
   Group of sensor data with common attributes
*/
class SensorsGroup {
    constructor(accountId, folderId, applianceId, agentId, sensors) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.applianceId = applianceId;
        this.agentId = agentId;
        this.sensors = sensors;
    }
}

/*
   Service Account registration data model
*/
class ServiceAccountRegistration {
    constructor(name, email, description) {
        this.name = name;
        this.email = email;
        this.description = description;
    }
}

/*
   String Int Value tuple
*/
class StringIntValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

/*
   Key Value string tuple
*/
class StringKeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

/*
   Time frame (for search and reports)
*/
class TimeFrame {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}

/*
   Tree item for account hierarchy tree
*/
class TreeItem {
    constructor(itemId, type, name, typeName) {
        this.itemId = itemId;
        this.type = type;
        this.name = name;
        this.typeName = typeName;
    }
}

/*
   Tree node in account hierarchy tree
*/
class TreeNode {
    constructor(id, parentId, name, item, children) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.item = item;
        this.children = children;
    }
}

/*
   User Account info (returned by switch-account method)
*/
class UserAccountInfo {
    constructor(account, loginData, features) {
        this.account = account;
        this.loginData = loginData;
        this.features = features;
    }
}

/*
   User invitation data model - used by account admin to invite user to the account
*/
class UserInvitation {
    constructor(email, role) {
        this.email = email;
        this.role = role;
    }
}

/*
   User registration data model - used by self registered users
*/
class UserRegistration {
    constructor(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail, description) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.defaultAccount = defaultAccount;
        this.accountRoles = accountRoles;
        this.type = type;
        this.tempPassword = tempPassword;
        this.changePassword = changePassword;
        this.verifyByEmail = verifyByEmail;
        this.description = description;
    }
}

/*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
class BaseEntity {
    constructor(id, docType, createdOn, updatedOn) {
        this.id = id;
        this._type = docType;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }
}

/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
class Account extends BaseEntity {
}

/*
   Account statistics collect monthly statistics (e.g. number of cameras)
*/
class AccountStatistics extends BaseEntity {
}

/*
   Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
   Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
   A single appliance can host multiple agents (container instances of the same Docker image)
*/
class Agent extends BaseEntity {
}

/*
   API Key is used per application (e.g. Portal, Console, Mobile App) or service to identify the consumer.
   The access to sets of REST endpoints is restricted according the API key.
   API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
   The application/system name is the Entity Id, the API key itself is not stored in the DB but generated on the fly.
*/
class ApiKey extends BaseEntity {
}

/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
class Appliance extends BaseEntity {
}

/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
class ApplianceCapabilities {
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

/*
   Appliance command - represents commands sent to the appliance
*/
class ApplianceCommand extends BaseEntity {
}

/*
   Edge appliance ONVIF discovery full report <br>
   This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
*/
class ApplianceDiscovery {
    constructor(channels) {
        this.channels = channels;
    }
}

/*
   Appliance status - reported periodically by the appliance
*/
class ApplianceStatus extends BaseEntity {
}

/*
   Audit Log - each entry represents a single action done by user
*/
class AuditLog extends BaseEntity {
}

/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
class Calendar extends BaseEntity {
}

/*
   SW Component version type
*/
class ComponentConfiguration {
    constructor(id, component, dockerImage, variables, mounts, status) {
        this.id = id;
        this.component = component;
        this.dockerImage = dockerImage;
        this.variables = variables;
        this.mounts = mounts;
        this.status = status;
    }
}

/*
   SW Configuration type
*/
class Configuration extends BaseEntity {
}

/*
   SW Configuration template type
*/
class ConfigurationTemplate extends BaseEntity {
}

/*
   SW Configuration version type
*/
class ConfigurationVersion extends BaseEntity {
}

/*
   Detection event type
*/
class Event extends BaseEntity {
}

/*
   Detection event type
*/
class EventStatistics extends BaseEntity {
}

/*
   System functionality (feature) description
*/
class Feature extends BaseEntity {
}

/*
   Group of features
*/
class FeaturesGroup extends BaseEntity {
}

/*
   Folder (container for sensors and sub folders)
*/
class Folder extends BaseEntity {
}

/*
   Integration action describes content details to use for a specific integration target
*/
class IntegrationAction extends BaseEntity {
}

/*
   Integration target describes connectivity attributes of the integrated system
*/
class IntegrationTarget extends BaseEntity {
}

/*
   License information includes on-premises deployment's license restrictions
*/
class License extends BaseEntity {
}

/*
   ONVIF channel description
   This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
*/
class OnvifChannel {
    constructor(uUID, name, address, sensorId) {
        this.uUID = uUID;
        this.name = name;
        this.address = address;
        this.sensorId = sensorId;
    }
}

/*
   Sensor preset represent specific sensor FOV attributes.
   In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
*/
class Preset extends BaseEntity {
}

/*
   Query definitions for report specification
*/
class ReportDefinition extends BaseEntity {
}

/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
class Rule extends BaseEntity {
}

/*
   Schedule is a list of recurrent time frames to specify active analytics
   Schedule is associated with account and optionally with folder and multiple schedules can be specified.
   When defining a rule, it can be scheduled by one of the schedules associated with the sensor's folder, it's parent folder, it's parent's parent folder and so on up to the account
*/
class Schedule extends BaseEntity {
}

/*
   Scheduled Report defines when to aut generate report and whet to do with it
*/
class ScheduledReport extends BaseEntity {
}

/*
   Search behavior description
*/
class SearchBehavior {
    constructor(behaviorType, dwellTime, minObjectsInGroup, shapes) {
        this.behaviorType = behaviorType;
        this.dwellTime = dwellTime;
        this.minObjectsInGroup = minObjectsInGroup;
        this.shapes = shapes;
    }
}

/*
   Color definitions to search for
*/
class SearchColor {
    constructor(conf, color, type) {
        this.conf = conf;
        this.color = color;
        this.type = type;
    }
}

/*
   Query definitions for ad-hoc search specification
*/
class SearchDefinition extends BaseEntity {
}

/*
   Search result item of search operation. The data structure is identical to an Event
*/
class SearchEvent extends BaseEntity {
}

/*
   Object attributes to search for
*/
class SearchObject {
    constructor(type, colors) {
        this.type = type;
        this.colors = colors;
    }
}

/*
   Search sessions tracking
*/
class SearchSession extends BaseEntity {
}

/*
   Search shape definition for Sensors or GEO search
*/
class SearchShape extends RulePolygon {
}

/*
   Sensor type
*/
class Sensor extends BaseEntity {
}

/*
   Sensor training analysis results
   This data is used by the training process of Anomaly Detection
   The entity Id is the sensorId
*/
class SensorAnalysisResults extends BaseEntity {
}

/*
   Sensor health status
*/
class SensorStatus extends BaseEntity {
}

/*
   Software update status type
*/
class UpdateStatus extends BaseEntity {
}

/*
   User type
*/
class User extends BaseEntity {
}

/*
   Verification type used to verify user with a temporary code
*/
class Verification extends BaseEntity {
}

/*
   Account role code (represent role of user in the account)
*/
var AccountRoleCode;
(function (AccountRoleCode) {
    // Undefined [0] 
    AccountRoleCode[AccountRoleCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Account administrator can perform all operations [1] 
    AccountRoleCode[AccountRoleCode["ADMIN"] = 1] = "ADMIN";
    // Supervisor can perform all operations on specific folder(s)and can see all modules except Settings [2] 
    AccountRoleCode[AccountRoleCode["SUPERVISOR"] = 2] = "SUPERVISOR";
    // Account operator can perform operations on events only, this user can see administrator and monitor modules but has write permissions on events status only [4] 
    AccountRoleCode[AccountRoleCode["OPERATOR"] = 4] = "OPERATOR";
    // User can see Administrator, Monitor, Investigation and Analytics modules but has write permissions on Reports and investigation modules only [8] 
    AccountRoleCode[AccountRoleCode["USER"] = 8] = "USER";
    // Installer can only connect device to the system and configure cameras, it can see Administrator and Monitor modules only) [16] 
    AccountRoleCode[AccountRoleCode["INSTALLER"] = 16] = "INSTALLER";
    // Identical to USER with no ability to view INVESTIGATION or ANALYTICS module [32] 
    AccountRoleCode[AccountRoleCode["DEMO"] = 32] = "DEMO";
})(AccountRoleCode || (AccountRoleCode = {}));

/*
   Account status code
*/
var AccountStatusCode;
(function (AccountStatusCode) {
    // Undefined [0] 
    AccountStatusCode[AccountStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Active account [1] 
    AccountStatusCode[AccountStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Suspended (non-active) account [2] 
    AccountStatusCode[AccountStatusCode["SUSPENDED"] = 2] = "SUSPENDED";
    // Deleted account [3] 
    AccountStatusCode[AccountStatusCode["DELETED"] = 3] = "DELETED";
})(AccountStatusCode || (AccountStatusCode = {}));

/*
   Account type code
*/
var AccountTypeCode;
(function (AccountTypeCode) {
    // Undefined [0] 
    AccountTypeCode[AccountTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Demo account for Agent Vi [1] 
    AccountTypeCode[AccountTypeCode["DEMO"] = 1] = "DEMO";
    // Trial account for pilots [2] 
    AccountTypeCode[AccountTypeCode["TRIAL"] = 2] = "TRIAL";
    // Active account for partner [3] 
    AccountTypeCode[AccountTypeCode["PARTNER"] = 3] = "PARTNER";
    // Deleted account [4] 
    AccountTypeCode[AccountTypeCode["CUSTOMER"] = 4] = "CUSTOMER";
})(AccountTypeCode || (AccountTypeCode = {}));

/*
   Agent (New Pipeline) status code
*/
var AgentStatusCode;
(function (AgentStatusCode) {
    // Undefined [0] 
    AgentStatusCode[AgentStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Agent is running [1] 
    AgentStatusCode[AgentStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Agent in Warning state [2] 
    AgentStatusCode[AgentStatusCode["WARNING"] = 2] = "WARNING";
    // Agent in Error state [3] 
    AgentStatusCode[AgentStatusCode["ERROR"] = 3] = "ERROR";
    // Agent is not active [4] 
    AgentStatusCode[AgentStatusCode["INACTIVE"] = 4] = "INACTIVE";
    // Agent was added but did not establish connection yet [5] 
    AgentStatusCode[AgentStatusCode["PENDING"] = 5] = "PENDING";
})(AgentStatusCode || (AgentStatusCode = {}));

/*
   Appliance command code.
   Message payload includes command specific data
*/
var ApplianceCommandCode;
(function (ApplianceCommandCode) {
    // Undefined [0] 
    ApplianceCommandCode[ApplianceCommandCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Send capabilities (no payload) [1] 
    ApplianceCommandCode[ApplianceCommandCode["GET_CAPABILITIES"] = 1] = "GET_CAPABILITIES";
    // Set components configuration (or add it if not exists) [2] 
    ApplianceCommandCode[ApplianceCommandCode["SET_COMPONENTS"] = 2] = "SET_COMPONENTS";
    // Remove components (command payload described in ApplianceCommandRemoveChannel) [3] 
    ApplianceCommandCode[ApplianceCommandCode["REMOVE_COMPONENTS"] = 3] = "REMOVE_COMPONENTS";
    // Restart component containers (currently do not implement) [4] 
    ApplianceCommandCode[ApplianceCommandCode["RESTART_COMPONENTS"] = 4] = "RESTART_COMPONENTS";
    // Send list of all running containers (no payload) [5] 
    ApplianceCommandCode[ApplianceCommandCode["LIST_CONTAINERS"] = 5] = "LIST_CONTAINERS";
    // Send logs of specified component (provided in the command payload) [6] 
    ApplianceCommandCode[ApplianceCommandCode["SEND_LOGS"] = 6] = "SEND_LOGS";
    // Send status (no payload) [7] 
    ApplianceCommandCode[ApplianceCommandCode["SEND_STATUS"] = 7] = "SEND_STATUS";
    // Reset appliance credentials (no payload) [8] 
    ApplianceCommandCode[ApplianceCommandCode["RESET_CREDENTIALS"] = 8] = "RESET_CREDENTIALS";
    // Reboot host (no payload) [9] 
    ApplianceCommandCode[ApplianceCommandCode["REBOOT_HOST"] = 9] = "REBOOT_HOST";
    // Open SSH tunnel [10] 
    ApplianceCommandCode[ApplianceCommandCode["OPEN_SSH"] = 10] = "OPEN_SSH";
    // Close SSH tunnel [11] 
    ApplianceCommandCode[ApplianceCommandCode["CLOSE_SSH"] = 11] = "CLOSE_SSH";
    // Reset to factory mode (remove pairing key and all containers except manager) [12] 
    ApplianceCommandCode[ApplianceCommandCode["RESET_DEVICE"] = 12] = "RESET_DEVICE";
    // Discovery - discover all network cameras using ONVIF discovery protocol [13] 
    ApplianceCommandCode[ApplianceCommandCode["ONVIF_DISCOVERY"] = 13] = "ONVIF_DISCOVERY";
})(ApplianceCommandCode || (ApplianceCommandCode = {}));

/*
   Appliance status code
*/
var ApplianceStatusCode;
(function (ApplianceStatusCode) {
    // Undefined [0] 
    ApplianceStatusCode[ApplianceStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Appliance was added but did not establish connection yet [1] 
    ApplianceStatusCode[ApplianceStatusCode["PENDING"] = 1] = "PENDING";
    // Appliance deleted by the user from the system but not confirmation accepted yet [2] 
    ApplianceStatusCode[ApplianceStatusCode["PENDING_DELETE"] = 2] = "PENDING_DELETE";
    // Appliance is paired but not registered yet [3] 
    ApplianceStatusCode[ApplianceStatusCode["UNREGISTERED"] = 3] = "UNREGISTERED";
    // Appliance is not active [4] 
    ApplianceStatusCode[ApplianceStatusCode["INACTIVE"] = 4] = "INACTIVE";
    // Appliance is running [5] 
    ApplianceStatusCode[ApplianceStatusCode["ACTIVE"] = 5] = "ACTIVE";
    // Appliance is running and in warning state [6] 
    ApplianceStatusCode[ApplianceStatusCode["ACTIVE_WARNING"] = 6] = "ACTIVE_WARNING";
    // Appliance is running and in error state [7] 
    ApplianceStatusCode[ApplianceStatusCode["ACTIVE_ERROR"] = 7] = "ACTIVE_ERROR";
})(ApplianceStatusCode || (ApplianceStatusCode = {}));

/*
   Detected object behavior type code
   Values with INNOVI prefix represents standard innoVi model behaviour, all other values represent custom models behaviour
*/
var BehaviorTypeCode;
(function (BehaviorTypeCode) {
    // Undefined 0 
    BehaviorTypeCode[BehaviorTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Crossing a Line 65793 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_CROSSING"] = 65793] = "INNOVI_CROSSING";
    // Moving in an area 65794 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MOVING"] = 65794] = "INNOVI_MOVING";
    // Stopped vehicle 65796 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_STOPPED"] = 65796] = "INNOVI_STOPPED";
    // Occupancy 65800 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_OCCUPANCY"] = 65800] = "INNOVI_OCCUPANCY";
    // Grouping 65808 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_GROUPING"] = 65808] = "INNOVI_GROUPING";
    // Unattended Object 65824 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_UNATTENDED_OBJECT"] = 65824] = "INNOVI_UNATTENDED_OBJECT";
    // Ignore Mask 66049 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_IGNORE"] = 66049] = "INNOVI_MASK_IGNORE";
    // Shutdown Mask 66050 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_SHUTDOWN"] = 66050] = "INNOVI_MASK_SHUTDOWN";
    // General Anomaly 66560 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_ANOMALY"] = 66560] = "INNOVI_ANOMALY";
})(BehaviorTypeCode || (BehaviorTypeCode = {}));

/*
   Detected color of object (or partial object)
*/
var ColorCode;
(function (ColorCode) {
    // Undefined [0] 
    ColorCode[ColorCode["UNDEFINED"] = 0] = "UNDEFINED";
    // No color [1] 
    ColorCode[ColorCode["NONE"] = 1] = "NONE";
    // Unknown color [2] 
    ColorCode[ColorCode["UNKNOWN"] = 2] = "UNKNOWN";
    // Multiple colors [4] 
    ColorCode[ColorCode["MULTICOLORED"] = 4] = "MULTICOLORED";
    // White [8] 
    ColorCode[ColorCode["WHITE"] = 8] = "WHITE";
    // Black [16] 
    ColorCode[ColorCode["BLACK"] = 16] = "BLACK";
    // Gray [32] 
    ColorCode[ColorCode["GRAY"] = 32] = "GRAY";
    // Blue [64] 
    ColorCode[ColorCode["BLUE"] = 64] = "BLUE";
    // Brown [128] 
    ColorCode[ColorCode["BROWN"] = 128] = "BROWN";
    // Green [256] 
    ColorCode[ColorCode["GREEN"] = 256] = "GREEN";
    // Yellow [512] 
    ColorCode[ColorCode["YELLOW"] = 512] = "YELLOW";
    // Orange [1024] 
    ColorCode[ColorCode["ORANGE"] = 1024] = "ORANGE";
    // Red [2048] 
    ColorCode[ColorCode["RED"] = 2048] = "RED";
    // Pink [4096] 
    ColorCode[ColorCode["PINK"] = 4096] = "PINK";
    // Purple [8192] 
    ColorCode[ColorCode["PURPLE"] = 8192] = "PURPLE";
    // Cyan [16384] 
    ColorCode[ColorCode["CYAN"] = 16384] = "CYAN";
    // Silver [32768] 
    ColorCode[ColorCode["SILVER"] = 32768] = "SILVER";
})(ColorCode || (ColorCode = {}));

/*
   Detected color type (colored location of object)
*/
var ColorTypeCode;
(function (ColorTypeCode) {
    // Undefined [0] 
    ColorTypeCode[ColorTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Body color (for person) [1] 
    ColorTypeCode[ColorTypeCode["BODY"] = 1] = "BODY";
    // Upper body color (for person) [2] 
    ColorTypeCode[ColorTypeCode["UPPER_BODY"] = 2] = "UPPER_BODY";
    // Lower body color (for person) [4] 
    ColorTypeCode[ColorTypeCode["LOWER_BODY"] = 4] = "LOWER_BODY";
    // Hat color (for person) [8] 
    ColorTypeCode[ColorTypeCode["HAT"] = 8] = "HAT";
    // Hair color (for person) [16] 
    ColorTypeCode[ColorTypeCode["HAIR"] = 16] = "HAIR";
    // Bag color (for person) [32] 
    ColorTypeCode[ColorTypeCode["BAG"] = 32] = "BAG";
})(ColorTypeCode || (ColorTypeCode = {}));

/*
   Appliance command status
*/
var CommandStatusCode;
(function (CommandStatusCode) {
    // Undefined [0] 
    CommandStatusCode[CommandStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Pending command [1] 
    CommandStatusCode[CommandStatusCode["PENDING"] = 1] = "PENDING";
    // Command in progress [2] 
    CommandStatusCode[CommandStatusCode["EXECUTING"] = 2] = "EXECUTING";
    // Command completed successfully [3] 
    CommandStatusCode[CommandStatusCode["COMPLETED"] = 3] = "COMPLETED";
    // Command failed [4] 
    CommandStatusCode[CommandStatusCode["FAILED"] = 4] = "FAILED";
})(CommandStatusCode || (CommandStatusCode = {}));

/*
   Day of week code
*/
var DayOfWeekCode;
(function (DayOfWeekCode) {
    // Sunday [0] 
    DayOfWeekCode[DayOfWeekCode["SUN"] = 0] = "SUN";
    // Monday [1] 
    DayOfWeekCode[DayOfWeekCode["MON"] = 1] = "MON";
    // Tuesday [2] 
    DayOfWeekCode[DayOfWeekCode["TUE"] = 2] = "TUE";
    // Wednesday [3] 
    DayOfWeekCode[DayOfWeekCode["WED"] = 3] = "WED";
    // Thursday [4] 
    DayOfWeekCode[DayOfWeekCode["THU"] = 4] = "THU";
    // Friday [5] 
    DayOfWeekCode[DayOfWeekCode["FRI"] = 5] = "FRI";
    // Saturday [6] 
    DayOfWeekCode[DayOfWeekCode["SAT"] = 6] = "SAT";
})(DayOfWeekCode || (DayOfWeekCode = {}));

/*
   Event status code
*/
var EventStatusCode;
(function (EventStatusCode) {
    // Undefined [0] 
    EventStatusCode[EventStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // New event [1] 
    EventStatusCode[EventStatusCode["NEW"] = 1] = "NEW";
    // Open (in-progress) event [2] 
    EventStatusCode[EventStatusCode["OPEN"] = 2] = "OPEN";
    // Closed event (tagged as True event) [6] 
    EventStatusCode[EventStatusCode["CLOSED_TRUE"] = 6] = "CLOSED_TRUE";
    // Closed event (tagged as False event) [7] 
    EventStatusCode[EventStatusCode["CLOSED_FALSE"] = 7] = "CLOSED_FALSE";
    // Relevant anomaly event [8] 
    EventStatusCode[EventStatusCode["CLOSED_RELEVANT"] = 8] = "CLOSED_RELEVANT";
    // Irrelevant anomaly event [9] 
    EventStatusCode[EventStatusCode["CLOSED_IRRELEVANT"] = 9] = "CLOSED_IRRELEVANT";
})(EventStatusCode || (EventStatusCode = {}));

/*
   Feature codes
*/
var FeatureCode;
(function (FeatureCode) {
    // Undefined [0] 
    FeatureCode[FeatureCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Account administrator module [2048] 
    FeatureCode[FeatureCode["MODULE_ADMIN"] = 2048] = "MODULE_ADMIN";
    // Crossing a line rule [2049] 
    FeatureCode[FeatureCode["RULE_CROSSING"] = 2049] = "RULE_CROSSING";
    // Moving in an area rule [2051] 
    FeatureCode[FeatureCode["RULE_MOVING"] = 2051] = "RULE_MOVING";
    // Stopped vehicle rule only [2052] 
    FeatureCode[FeatureCode["RULE_STOPPED"] = 2052] = "RULE_STOPPED";
    // Occupancy rule [2056] 
    FeatureCode[FeatureCode["RULE_OCCUPANCY"] = 2056] = "RULE_OCCUPANCY";
    // Grouping rule [2064] 
    FeatureCode[FeatureCode["RULE_GROUPING"] = 2064] = "RULE_GROUPING";
    // Ignore (yellow) mask rule [2080] 
    FeatureCode[FeatureCode["RULE_IGNORE_MASK"] = 2080] = "RULE_IGNORE_MASK";
    // Anomaly detection rule [2112] 
    FeatureCode[FeatureCode["RULE_ANOMALY"] = 2112] = "RULE_ANOMALY";
    // Unattended object detection rule [2176] 
    FeatureCode[FeatureCode["RULE_UNATTENDED_OBJECT"] = 2176] = "RULE_UNATTENDED_OBJECT";
    // Monitor (real time events) module [4096] 
    FeatureCode[FeatureCode["MODULE_MONITOR"] = 4096] = "MODULE_MONITOR";
    // Google maps support module [4097] 
    FeatureCode[FeatureCode["MAP_GOOGLE"] = 4097] = "MAP_GOOGLE";
    // Leaflet maps support module [4098] 
    FeatureCode[FeatureCode["MAP_LEAFLET"] = 4098] = "MAP_LEAFLET";
    // Investigation (search) module [8192] 
    FeatureCode[FeatureCode["MODULE_INVESTIGATION"] = 8192] = "MODULE_INVESTIGATION";
    // Analytics (BI) module [8192] 
    FeatureCode[FeatureCode["MODULE_ANALYTICS"] = 16384] = "MODULE_ANALYTICS";
})(FeatureCode || (FeatureCode = {}));

/*
   Integration type code
*/
var IntegrationTypeCode;
(function (IntegrationTypeCode) {
    // Undefined [0] 
    IntegrationTypeCode[IntegrationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // General HTTP/HTTPS based integration [1] 
    IntegrationTypeCode[IntegrationTypeCode["HTTP"] = 1] = "HTTP";
    // General Web Socket WS/WSS based integration [2] 
    IntegrationTypeCode[IntegrationTypeCode["WS"] = 2] = "WS";
    // General SMTP based integration [3] 
    IntegrationTypeCode[IntegrationTypeCode["SMTP"] = 3] = "SMTP";
    // Internal email service integration [4] 
    IntegrationTypeCode[IntegrationTypeCode["EMAIL"] = 4] = "EMAIL";
    // Internal SMS service integration [5] 
    IntegrationTypeCode[IntegrationTypeCode["SMS"] = 5] = "SMS";
    // Immix specific integration (based on smtp protocol) [11] 
    IntegrationTypeCode[IntegrationTypeCode["IMMIX"] = 11] = "IMMIX";
    // Sentinel specific integration (based on smtp protocol) [12] 
    IntegrationTypeCode[IntegrationTypeCode["SENTINEL"] = 12] = "SENTINEL";
})(IntegrationTypeCode || (IntegrationTypeCode = {}));

/*
   Line crossing direction (used by rule definition)
*/
var LineCrossDirectionCode;
(function (LineCrossDirectionCode) {
    // Undefined [0] 
    LineCrossDirectionCode[LineCrossDirectionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // In direction [1] 
    LineCrossDirectionCode[LineCrossDirectionCode["IN"] = 1] = "IN";
    // Out direction [2] 
    LineCrossDirectionCode[LineCrossDirectionCode["OUT"] = 2] = "OUT";
    // Bi-direction (both IN and Out) [3] 
    LineCrossDirectionCode[LineCrossDirectionCode["BI"] = 3] = "BI";
})(LineCrossDirectionCode || (LineCrossDirectionCode = {}));

/*
   Map client code (represent which map client library to use in the UI)
*/
var MapClientCode;
(function (MapClientCode) {
    // Undefined [0] 
    MapClientCode[MapClientCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Google maps client [1] 
    MapClientCode[MapClientCode["GOOGLE"] = 1] = "GOOGLE";
    // LeafLet map client [2] 
    MapClientCode[MapClientCode["LEAFLET"] = 2] = "LEAFLET";
    // ESRI client (not implemented) [3] 
    MapClientCode[MapClientCode["ESRI"] = 3] = "ESRI";
    // MapInfo client (not implemented) [4] 
    MapClientCode[MapClientCode["MAPINFO"] = 4] = "MAPINFO";
})(MapClientCode || (MapClientCode = {}));

/*
   Detected object type code
   Values with INNOVI prefix represents standard innoVi model objects, all other values represent custom models objects
*/
var ObjectTypeCode;
(function (ObjectTypeCode) {
    // Undefined 0 
    ObjectTypeCode[ObjectTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Unknown group of objects 16842752 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS"] = 16842752] = "INNOVI_UNKNOWNS";
    // Unknown object 16843008 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_UNKNOWN"] = 16843008] = "INNOVI_UNKNOWNS_UNKNOWN";
    // Vegetation 16843264 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_VEGETATION"] = 16843264] = "INNOVI_UNKNOWNS_VEGETATION";
    // Cloud 16843776 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_CLOUD"] = 16843776] = "INNOVI_UNKNOWNS_CLOUD";
    // Object 16844800 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT"] = 16844800] = "INNOVI_UNKNOWNS_OBJECT";
    // Abstract group of people 16908288 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE"] = 16908288] = "INNOVI_PEOPLE";
    // Person standing upright 16908544 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE_PERSON_STANDING"] = 16908544] = "INNOVI_PEOPLE_PERSON_STANDING";
    // Person sitting/lying down 16908800 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE_PERSON_ON_THE_GROUND"] = 16908800] = "INNOVI_PEOPLE_PERSON_ON_THE_GROUND";
    // Person from an overhead camera 16909312 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE_PERSON_OVERHEAD"] = 16909312] = "INNOVI_PEOPLE_PERSON_OVERHEAD";
    // Abstract group of vehicles 17039360 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE"] = 17039360] = "INNOVI_VEHICLE";
    // Car (class group) 17039616 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CAR"] = 17039616] = "INNOVI_VEHICLE_CAR";
    // Compact car 17039617 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CAR_COMPACT"] = 17039617] = "INNOVI_VEHICLE_CAR_COMPACT";
    // SUV 17039618 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CAR_SUV"] = 17039618] = "INNOVI_VEHICLE_CAR_SUV";
    // Bus 17039872 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_BUS"] = 17039872] = "INNOVI_VEHICLE_BUS";
    // School Bus 17039873 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_SCHOOL_BUS"] = 17039873] = "INNOVI_VEHICLE_SCHOOL_BUS";
    // Mini Bus 17039874 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_MINI_BUS"] = 17039874] = "INNOVI_VEHICLE_MINI_BUS";
    // Mini Bus 17039876 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CITY_BUS"] = 17039876] = "INNOVI_VEHICLE_CITY_BUS";
    // Pickup Truck 17040384 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_PICKUP_TRUCK"] = 17040384] = "INNOVI_VEHICLE_PICKUP_TRUCK";
    // Van 17041408 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_VAN"] = 17041408] = "INNOVI_VEHICLE_VAN";
    // Truck (class group) 17043456 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK"] = 17043456] = "INNOVI_VEHICLE_TRUCK";
    // Small Truck 17043457 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK_SMALL"] = 17043457] = "INNOVI_VEHICLE_TRUCK_SMALL";
    // Medium Truck 17043458 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK_MEDIUM"] = 17043458] = "INNOVI_VEHICLE_TRUCK_MEDIUM";
    // Big Truck (semi-trailer) 17043460 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK_SEMITRAILER"] = 17043460] = "INNOVI_VEHICLE_TRUCK_SEMITRAILER";
    // Tractor 17043464 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRACTOR"] = 17043464] = "INNOVI_VEHICLE_TRACTOR";
    // Any vehicle at night 17047552 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_NIGHT"] = 17047552] = "INNOVI_VEHICLE_NIGHT";
    // Abstract group of two wheelers 17301504 
    ObjectTypeCode[ObjectTypeCode["INNOVI_TWOWHEELED"] = 17301504] = "INNOVI_TWOWHEELED";
    // Bicycle 17301760 
    ObjectTypeCode[ObjectTypeCode["INNOVI_TWOWHEELED_BICYCLE"] = 17301760] = "INNOVI_TWOWHEELED_BICYCLE";
    // Motorcycle 17302016 
    ObjectTypeCode[ObjectTypeCode["INNOVI_TWOWHEELED_MOTORCYCLE"] = 17302016] = "INNOVI_TWOWHEELED_MOTORCYCLE";
    // Abstract group of animals 17825792 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL"] = 17825792] = "INNOVI_ANIMAL";
    // Bird 17826048 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL_BIRD"] = 17826048] = "INNOVI_ANIMAL_BIRD";
    // Small animal (ie. Cats/Dogs) 17826304 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL_SMALL"] = 17826304] = "INNOVI_ANIMAL_SMALL";
    // Large animal (ie. Horses/Cows) 17826816 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL_LARGE"] = 17826816] = "INNOVI_ANIMAL_LARGE";
})(ObjectTypeCode || (ObjectTypeCode = {}));

/*
   Product type code
*/
var ProductTypeCode;
(function (ProductTypeCode) {
    // Undefined [0] 
    ProductTypeCode[ProductTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Virtual Edge (Pipeline running as Kubernetes deployment with no actual edge device) [1] 
    ProductTypeCode[ProductTypeCode["VIRTUAL"] = 1] = "VIRTUAL";
    // Custom Device (Customer provides it's own hardware) [100] 
    ProductTypeCode[ProductTypeCode["CUSTOM"] = 100] = "CUSTOM";
    // Edge 200 [200] 
    ProductTypeCode[ProductTypeCode["EDGE_200"] = 200] = "EDGE_200";
    // Edge 220 [220] 
    ProductTypeCode[ProductTypeCode["EDGE_220"] = 220] = "EDGE_220";
    // Edge 250 [250] 
    ProductTypeCode[ProductTypeCode["EDGE_250"] = 250] = "EDGE_250";
    // Edge 320 [320] 
    ProductTypeCode[ProductTypeCode["EDGE_320"] = 320] = "EDGE_320";
    // Edge 325 [325] 
    ProductTypeCode[ProductTypeCode["EDGE_325"] = 325] = "EDGE_325";
    // Edge 500 [500] 
    ProductTypeCode[ProductTypeCode["EDGE_500"] = 500] = "EDGE_500";
})(ProductTypeCode || (ProductTypeCode = {}));

/*
   Runtime status code represents the status of component in the host
*/
var RuntimeStatusCode;
(function (RuntimeStatusCode) {
    // Undefined [0] 
    RuntimeStatusCode[RuntimeStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Component is defined in the configuration but not running [1] 
    RuntimeStatusCode[RuntimeStatusCode["CONFIGURED"] = 1] = "CONFIGURED";
    // Component is running on the device [2] 
    RuntimeStatusCode[RuntimeStatusCode["RUNNING"] = 2] = "RUNNING";
    // Component is defined in the configuration and running on the device [3] 
    RuntimeStatusCode[RuntimeStatusCode["CONFIGURED_AND_RUNNING"] = 3] = "CONFIGURED_AND_RUNNING";
})(RuntimeStatusCode || (RuntimeStatusCode = {}));

/*
   Search scope
*/
var SearchScopeCode;
(function (SearchScopeCode) {
    // Undefined [0] 
    SearchScopeCode[SearchScopeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Search by sensors [1] 
    SearchScopeCode[SearchScopeCode["SENSORS"] = 1] = "SENSORS";
    // Search by geo area [2] 
    SearchScopeCode[SearchScopeCode["GEO"] = 2] = "GEO";
})(SearchScopeCode || (SearchScopeCode = {}));

/*
   Search time
*/
var SearchTimeCode;
(function (SearchTimeCode) {
    // Custom time frame [0] 
    SearchTimeCode[SearchTimeCode["CUSTOM"] = 0] = "CUSTOM";
    // Last hour [1] 
    SearchTimeCode[SearchTimeCode["LAST_1H"] = 1] = "LAST_1H";
    // Last 3 hours [3] 
    SearchTimeCode[SearchTimeCode["LAST_3H"] = 3] = "LAST_3H";
    // Last 6 hours [6] 
    SearchTimeCode[SearchTimeCode["LAST_6H"] = 6] = "LAST_6H";
    // Last 12 hours [12] 
    SearchTimeCode[SearchTimeCode["LAST_12H"] = 12] = "LAST_12H";
    // Last 24 hours [24] 
    SearchTimeCode[SearchTimeCode["LAST_24H"] = 24] = "LAST_24H";
    // Last 48 hours [48] 
    SearchTimeCode[SearchTimeCode["LAST_48H"] = 48] = "LAST_48H";
})(SearchTimeCode || (SearchTimeCode = {}));

/*
   Bit mask to indicate sensor configuration changes (what part of the sensor configuration has changed)
   Since it is a bit mask, the actual value can be a combination of the listed enum values
*/
var SensorConfigChangeMask;
(function (SensorConfigChangeMask) {
    // Sensor has been removed from the system 
    SensorConfigChangeMask[SensorConfigChangeMask["DELETED"] = 0] = "DELETED";
    // Sensor data has changed in the sensor configuration (requires agent reload) 
    SensorConfigChangeMask[SensorConfigChangeMask["SENSOR"] = 1] = "SENSOR";
    // Rules attributes changed in the sensor configuration 
    SensorConfigChangeMask[SensorConfigChangeMask["RULES"] = 2] = "RULES";
    // Sensor calibration has changed in the sensor configuration 
    SensorConfigChangeMask[SensorConfigChangeMask["CALIBRATION"] = 4] = "CALIBRATION";
})(SensorConfigChangeMask || (SensorConfigChangeMask = {}));

/*
   Sensor resolution (image quality) code
*/
var SensorResolutionCode;
(function (SensorResolutionCode) {
    // Undefined [0] 
    SensorResolutionCode[SensorResolutionCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Low resolution [1] 
    SensorResolutionCode[SensorResolutionCode["LOW"] = 1] = "LOW";
    // Medium resolution [2] 
    SensorResolutionCode[SensorResolutionCode["MEDIUM"] = 2] = "MEDIUM";
    // High resolution [3] 
    SensorResolutionCode[SensorResolutionCode["HIGH"] = 3] = "HIGH";
})(SensorResolutionCode || (SensorResolutionCode = {}));

/*
   Sensor state mask - the bit mask represents the actual state of the sensor as reported by the agent / agent proxy
   Bit mask range:
   OK:		0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
var SensorStateMask;
(function (SensorStateMask) {
    // [OK] No error [0x0] 
    SensorStateMask[SensorStateMask["SENSOR_OK"] = 0] = "SENSOR_OK";
    // [WARNING] Video stream FPS is less than 6 for one minute [0x00000001] 
    SensorStateMask[SensorStateMask["LOW_FRAMERATE_WARN"] = 1] = "LOW_FRAMERATE_WARN";
    // [WARNING] Video stream FPS is more than 30 for one minute [0x00000002] 
    SensorStateMask[SensorStateMask["HIGH_FRAMERATE_WARN"] = 2] = "HIGH_FRAMERATE_WARN";
    // [WARNING] Image from video source is blocked [0x00000004] 
    SensorStateMask[SensorStateMask["IMAGE_BLOCKED_WARN"] = 4] = "IMAGE_BLOCKED_WARN";
    // [WARNING] Image from video source is saturated [0x00000008] 
    SensorStateMask[SensorStateMask["IMAGE_SATURATED_WARN"] = 8] = "IMAGE_SATURATED_WARN";
    // [WARNING] Image from video source is dark [0x00000010] 
    SensorStateMask[SensorStateMask["IMAGE_DARK_WARN"] = 16] = "IMAGE_DARK_WARN";
    // [ERROR] Communication error [0x00010000] 
    SensorStateMask[SensorStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
    // [ERROR] General sensor error [0x00020000] 
    SensorStateMask[SensorStateMask["SENSOR_ERROR"] = 131072] = "SENSOR_ERROR";
    // [ERROR] Sensor can't read video stream or stream is not valid [0x00040000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR"] = 262144] = "SOURCE_ERROR";
    // [ERROR] Video stream format is not supported [0x00080000] 
    SensorStateMask[SensorStateMask["FORMAT_ERROR"] = 524288] = "FORMAT_ERROR";
    // [ERROR] Video stream resolution is not supported [0x00100000] 
    SensorStateMask[SensorStateMask["RESOLUTION_ERROR"] = 1048576] = "RESOLUTION_ERROR";
    // [ERROR] Video stream FPS is 0 for one minute [0x0000000000000400] 
    SensorStateMask[SensorStateMask["CRITICAL_FRAMERATE_ERROR"] = 2097152] = "CRITICAL_FRAMERATE_ERROR";
})(SensorStateMask || (SensorStateMask = {}));

/*
   Sensor configuration status code (represents the status due to user actions)
*/
var SensorStatusCode;
(function (SensorStatusCode) {
    // Undefined [0] 
    SensorStatusCode[SensorStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Sensor was added but did not establish connection yet [1] 
    SensorStatusCode[SensorStatusCode["PENDING"] = 1] = "PENDING";
    // Delete sensor command sent to the appliance but it was not confirmed by the agent [2] 
    SensorStatusCode[SensorStatusCode["PENDING_DELETE"] = 2] = "PENDING_DELETE";
    // Suspended (banned) sensor - when it is detached from appliance, the sensor configuration and rules still exists but no real sensor connected to any appliance [3] 
    SensorStatusCode[SensorStatusCode["SUSPENDED"] = 3] = "SUSPENDED";
    // Sensor is disabled by user (or by Arm/Disarm command) [4] 
    SensorStatusCode[SensorStatusCode["INACTIVE"] = 4] = "INACTIVE";
    // Sensor is enabled by user and running [5] 
    SensorStatusCode[SensorStatusCode["ACTIVE"] = 5] = "ACTIVE";
    // Sensor is enabled by user and running and in warning state [6] 
    SensorStatusCode[SensorStatusCode["ACTIVE_WARNING"] = 6] = "ACTIVE_WARNING";
    // Sensor is enabled by user and running and in error state [7] 
    SensorStatusCode[SensorStatusCode["ACTIVE_ERROR"] = 7] = "ACTIVE_ERROR";
})(SensorStatusCode || (SensorStatusCode = {}));

/*
   Sensor type code
*/
var SensorTypeCode;
(function (SensorTypeCode) {
    // Undefined [0] 
    SensorTypeCode[SensorTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // CCD color camera [1] 
    SensorTypeCode[SensorTypeCode["CCD"] = 1] = "CCD";
    // Thermal camera [2] 
    SensorTypeCode[SensorTypeCode["THERMAL"] = 2] = "THERMAL";
})(SensorTypeCode || (SensorTypeCode = {}));

/*
   Severity type (level) code
*/
var SeverityTypeCode;
(function (SeverityTypeCode) {
    // Undefined [0] 
    SeverityTypeCode[SeverityTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // No effect [1] 
    SeverityTypeCode[SeverityTypeCode["NO_EFFECT"] = 1] = "NO_EFFECT";
    // Notification only [2] 
    SeverityTypeCode[SeverityTypeCode["NOTIFICATION"] = 2] = "NOTIFICATION";
    // Lowest severity [3] 
    SeverityTypeCode[SeverityTypeCode["LOWEST"] = 3] = "LOWEST";
    // Low severity [4] 
    SeverityTypeCode[SeverityTypeCode["LOW"] = 4] = "LOW";
    // Medium severity [5] 
    SeverityTypeCode[SeverityTypeCode["MEDIUM"] = 5] = "MEDIUM";
    // High severity [6] 
    SeverityTypeCode[SeverityTypeCode["HIGH"] = 6] = "HIGH";
    // Highest severity [7] 
    SeverityTypeCode[SeverityTypeCode["HIGHEST"] = 7] = "HIGHEST";
    // Critical severity [8] 
    SeverityTypeCode[SeverityTypeCode["CRITICAL"] = 8] = "CRITICAL";
})(SeverityTypeCode || (SeverityTypeCode = {}));

/*
   Video stream type (source) code
*/
var StreamTypeCode;
(function (StreamTypeCode) {
    // Undefined [0] 
    StreamTypeCode[StreamTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // RTSP stream [1] 
    StreamTypeCode[StreamTypeCode["RTSP"] = 1] = "RTSP";
    // ONVIF stream [2] 
    StreamTypeCode[StreamTypeCode["ONVIF"] = 2] = "ONVIF";
    // Video clip from file [3] 
    StreamTypeCode[StreamTypeCode["CLIP"] = 3] = "CLIP";
    // RTP stream [4] 
    StreamTypeCode[StreamTypeCode["RTP"] = 4] = "RTP";
    // MULTICAST stream [5] 
    StreamTypeCode[StreamTypeCode["MULTICAST"] = 5] = "MULTICAST";
    // Download clip from http(s) [6] 
    StreamTypeCode[StreamTypeCode["HTTP"] = 6] = "HTTP";
})(StreamTypeCode || (StreamTypeCode = {}));

/*
   Time unit interval
*/
var TimeUnitCode;
(function (TimeUnitCode) {
    // Undefined [0] 
    TimeUnitCode[TimeUnitCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Second interval [1] 
    TimeUnitCode[TimeUnitCode["SECOND"] = 1] = "SECOND";
    // Minute interval [2] 
    TimeUnitCode[TimeUnitCode["MINUTE"] = 2] = "MINUTE";
    // Hour interval [3] 
    TimeUnitCode[TimeUnitCode["HOUR"] = 3] = "HOUR";
    // Day interval [4] 
    TimeUnitCode[TimeUnitCode["DAY"] = 4] = "DAY";
    // Week interval [5] 
    TimeUnitCode[TimeUnitCode["WEEK"] = 5] = "WEEK";
    // Month interval [6] 
    TimeUnitCode[TimeUnitCode["MONTH"] = 6] = "MONTH";
})(TimeUnitCode || (TimeUnitCode = {}));

/*
   Geo referencing transformation algorithm
*/
var TransformationTypeCode;
(function (TransformationTypeCode) {
    // Transformation type not specified [0] 
    TransformationTypeCode[TransformationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Location and azimuth based transformation [1] 
    TransformationTypeCode[TransformationTypeCode["AZIMUTH"] = 1] = "AZIMUTH";
    // Projective transformation based on 4 reference points [2] 
    TransformationTypeCode[TransformationTypeCode["PT4"] = 2] = "PT4";
    // Polynomial transformation based on 6 reference points [3] 
    TransformationTypeCode[TransformationTypeCode["PT6"] = 3] = "PT6";
})(TransformationTypeCode || (TransformationTypeCode = {}));

/*
   User status code
*/
var UserStatusCode;
(function (UserStatusCode) {
    // Undefined [0] 
    UserStatusCode[UserStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // User is registered and pending verification [1] 
    UserStatusCode[UserStatusCode["PENDING"] = 1] = "PENDING";
    // Active user in the system [2] 
    UserStatusCode[UserStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // Blocked user (only account system can unblock the user) [4] 
    UserStatusCode[UserStatusCode["BLOCKED"] = 3] = "BLOCKED";
    // Suspended user (about to be deleted) [8] 
    UserStatusCode[UserStatusCode["SUSPENDED"] = 4] = "SUSPENDED";
})(UserStatusCode || (UserStatusCode = {}));

/*
   User type code
*/
var UserTypeCode;
(function (UserTypeCode) {
    // Undefined [0] 
    UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // System administrator has access to all accounts and permissions to perform all actions [1] 
    UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
    // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
    UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
    // Presale user has access to all accounts of type DEMO and TRAIL and permissions to perform all actions on these accounts [3] 
    UserTypeCode[UserTypeCode["PRESALE"] = 3] = "PRESALE";
    // Account user - has access to specific accounts with role based access control [4] 
    UserTypeCode[UserTypeCode["ACCOUNT_USER"] = 4] = "ACCOUNT_USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    UserTypeCode[UserTypeCode["ACCOUNT_SERVICE"] = 5] = "ACCOUNT_SERVICE";
})(UserTypeCode || (UserTypeCode = {}));

/*
   Sensor visual quality code
*/
var VisualQualityCode;
(function (VisualQualityCode) {
    // Undefined [0] 
    VisualQualityCode[VisualQualityCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Low visual quality [1] 
    VisualQualityCode[VisualQualityCode["LOW"] = 1] = "LOW";
    // Medium visual quality [2] 
    VisualQualityCode[VisualQualityCode["MEDIUM"] = 2] = "MEDIUM";
    // High visual quality [3] 
    VisualQualityCode[VisualQualityCode["HIGH"] = 3] = "HIGH";
})(VisualQualityCode || (VisualQualityCode = {}));

/*
   Zone type code (used by rule definition)
*/
var ZoneTypeCode;
(function (ZoneTypeCode) {
    // Undefined [0] 
    ZoneTypeCode[ZoneTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Area of interest [1] 
    ZoneTypeCode[ZoneTypeCode["AOI"] = 1] = "AOI";
    // Masked area [2] 
    ZoneTypeCode[ZoneTypeCode["MASK"] = 2] = "MASK";
    // Block [3] 
    ZoneTypeCode[ZoneTypeCode["BLOCK"] = 3] = "BLOCK";
    // Shutdown mask [4] 
    ZoneTypeCode[ZoneTypeCode["SHUTDOWN"] = 4] = "SHUTDOWN";
})(ZoneTypeCode || (ZoneTypeCode = {}));

/*
*/
class AccountIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class AccountIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class AccountsMonthStatisticsRequest {
    constructor(accountId, from, to) {
        this.accountId = accountId;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class AccountsServiceChangeGroupsRequest {
    constructor(id, groupId) {
        this.id = id;
        this.groupId = groupId;
    }
}

/*
*/
class AccountsServiceChangeNameRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class AccountsServiceChangeStatusRequest {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}

/*
*/
class AccountsServiceChangeTypeRequest {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}

/*
*/
class AccountsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class AccountsServiceExportRequest {
    constructor(name, type, status, sort, format, fields) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class AccountsServiceFindFoldersRequest {
    constructor(id, parentId, search, sort, page, pageSize) {
        this.id = id;
        this.parentId = parentId;
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class AccountsServiceFindRequest {
    constructor(search, type, status, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class AccountsServiceResetRequest {
    constructor(id, days) {
        this.id = id;
        this.days = days;
    }
}

/*
*/
class AccountsServiceTreeRequest {
    constructor(id, sensors) {
        this.id = id;
        this.sensors = sensors;
    }
}

/*
*/
class AccountsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
   Entity action response message returned for any create/update action on entity
*/
class ActionResponse {
    constructor(code, error, key, data) {
        this.code = code;
        this.error = error;
        this.key = key;
        this.data = data;
    }
}

/*
*/
class AnomalyServiceFindEventsRequest {
    constructor(accountId, sensorId, status, from, to, sort, page, pageSize) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.status = status;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class AnomalyServiceFindRequest {
    constructor(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class AnomalyServiceUpdateRequest {
    constructor(sensorId, body) {
        this.sensorId = sensorId;
        this.body = body;
    }
}

/*
*/
class AnomalyServiceUpdateRuleRequest {
    constructor(sensorId, body) {
        this.sensorId = sensorId;
        this.body = body;
    }
}

/*
*/
class ApiKeyIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ApplianceCommandIdRequest {
    constructor(commandId) {
        this.commandId = commandId;
    }
}

/*
*/
class ApplianceIdAgentIdRequest {
    constructor(id, agentId) {
        this.id = id;
        this.agentId = agentId;
    }
}

/*
*/
class ApplianceIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ApplianceServiceDeleteCommandRequest {
    constructor(id, commandId) {
        this.id = id;
        this.commandId = commandId;
    }
}

/*
*/
class AppliancesCountRequest {
    constructor(folderId, subFolders) {
        this.folderId = folderId;
        this.subFolders = subFolders;
    }
}

/*
*/
class AppliancesServiceAddSensorRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class AppliancesServiceChangeConfigurationRequest {
    constructor(id, configId, versionId) {
        this.id = id;
        this.configId = configId;
        this.versionId = versionId;
    }
}

/*
*/
class AppliancesServiceChangeFolderRequest {
    constructor(id, folderId) {
        this.id = id;
        this.folderId = folderId;
    }
}

/*
*/
class AppliancesServiceChangeMachineIdRequest {
    constructor(id, machineId) {
        this.id = id;
        this.machineId = machineId;
    }
}

/*
*/
class AppliancesServiceChangeNameRequest {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

/*
*/
class AppliancesServiceExportRequest {
    constructor(folderId, subFolders, search, status, sort, format, fields) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class AppliancesServiceFindRequest {
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

/*
*/
class AppliancesServiceFindSensorsRequest {
    constructor(id, search, type, status, stream, sort, page, pageSize, format, fields) {
        this.id = id;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class AppliancesServiceGetCommandsRequest {
    constructor(id, status, sort, page, pageSize) {
        this.id = id;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class AppliancesServiceRegisterApplianceRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class AppliancesServiceSetCommandRequest {
    constructor(commandId, status) {
        this.commandId = commandId;
        this.status = status;
    }
}

/*
*/
class AppliancesServiceStatusOvertimeRequest {
    constructor(id, from, to) {
        this.id = id;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class AppliancesServiceUpdateApplianceRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class AuditLogIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class AuditLogServiceExportRequest {
    constructor(userId, from, to, itemType, sort, format, fields) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.itemType = itemType;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class AuditLogServiceFindRequest {
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

/*
*/
class CalendarIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class CalendarIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class CalendarsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class CalendarsServiceFindRequest {
    constructor(search, folderId, sort, page, pageSize) {
        this.search = search;
        this.folderId = folderId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class CalendarsServiceFolderIdRequest {
    constructor(folderId) {
        this.folderId = folderId;
    }
}

/*
*/
class CalendarsServiceImportRequest {
    constructor(content, folderId) {
        this.content = content;
        this.folderId = folderId;
    }
}

/*
*/
class CalendarsServiceImportUrlRequest {
    constructor(folderId, body) {
        this.folderId = folderId;
        this.body = body;
    }
}

/*
*/
class CalendarsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class ChangeGeoAreaRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ChangeGeoLocationRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
   Change Password request message
*/
class ChangePasswordRequest {
    constructor(userId, oldPassword, newPassword) {
        this.userId = userId;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}

/*
*/
class ConfigurationIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ConfigurationModelRequest {
    constructor(model) {
        this.model = model;
    }
}

/*
*/
class ConfigurationTargetRequest {
    constructor(target) {
        this.target = target;
    }
}

/*
*/
class ConfigurationTemplateIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ConfigurationVersionIdRequest {
    constructor(id, versionId) {
        this.id = id;
        this.versionId = versionId;
    }
}

/*
*/
class EmptyRequest {
    constructor() {
    }
}

/*
   Entities response message returned for read operation on multiple entities
*/
class EntitiesResponse {
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}

/*
*/
class EntitiesResponseOfAccount extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfAccountStatSummary extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfAccountStatistics extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfAccountTypeSummary extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfApiKey extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfAppliance extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfApplianceAgents extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfApplianceCommand extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfApplianceConfiguration extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfAuditLog extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfCalendar extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfComponentConfiguration extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfConfiguration extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfDistributionOfLong extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfEvent extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfFeature extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfFeaturesGroup extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfFolder extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfIntegration extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfIntegrationAction extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfReportDefinition extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfRule extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfRuleSpec extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfSchedule extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfScheduledReport extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfSearchDefinition extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfSearchEvent extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfSensor extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfSensorStatus extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfStringKeyValue extends EntitiesResponse {
}

/*
   Entity response message returned for read operation on a single entity
*/
class EntityResponse {
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}

/*
*/
class EntityResponseOfAccount extends EntityResponse {
}

/*
*/
class EntityResponseOfApiKey extends EntityResponse {
}

/*
*/
class EntityResponseOfAppliance extends EntityResponse {
}

/*
*/
class EntityResponseOfApplianceAgents extends EntityResponse {
}

/*
*/
class EntityResponseOfApplianceConfiguration extends EntitiesResponse {
}

/*
*/
class EntityResponseOfApplianceDiscovery extends EntityResponse {
}

/*
*/
class EntityResponseOfApplianceKpiTimeSeries extends EntityResponse {
}

/*
*/
class EntityResponseOfApplianceStatusTimeSeries extends EntityResponse {
}

/*
*/
class EntityResponseOfAuditLog extends EntityResponse {
}

/*
*/
class EntityResponseOfCalendar extends EntityResponse {
}

/*
*/
class EntityResponseOfComponentConfiguration extends EntityResponse {
}

/*
*/
class EntityResponseOfConfiguration extends EntityResponse {
}

/*
*/
class EntityResponseOfConfigurationTemplate extends EntityResponse {
}

/*
*/
class EntityResponseOfConfigurationVersion extends EntityResponse {
}

/*
*/
class EntityResponseOfCoordinate extends EntityResponse {
}

/*
*/
class EntityResponseOfDistributionOfLong extends EntityResponse {
}

/*
*/
class EntityResponseOfEvent extends EntityResponse {
}

/*
*/
class EntityResponseOfEventCountTimeSeries extends EntityResponse {
}

/*
*/
class EntityResponseOfFeature extends EntityResponse {
}

/*
*/
class EntityResponseOfFeaturesGroup extends EntityResponse {
}

/*
*/
class EntityResponseOfFolder extends EntityResponse {
}

/*
*/
class EntityResponseOfGeoReferenceData extends EntityResponse {
}

/*
*/
class EntityResponseOfIntegration extends EntityResponse {
}

/*
*/
class EntityResponseOfIntegrationAction extends EntityResponse {
}

/*
*/
class EntityResponseOfLicense extends EntityResponse {
}

/*
*/
class EntityResponseOfLoginData extends EntityResponse {
}

/*
*/
class EntityResponseOfReportDefinition extends EntityResponse {
}

/*
*/
class EntityResponseOfRule extends EntityResponse {
}

/*
*/
class EntityResponseOfSchedule extends EntityResponse {
}

/*
*/
class EntityResponseOfScheduledReport extends EntityResponse {
}

/*
*/
class EntityResponseOfSearchDefinition extends EntityResponse {
}

/*
*/
class EntityResponseOfSearchEvent extends EntityResponse {
}

/*
*/
class EntityResponseOfSearchStatus extends EntityResponse {
}

/*
*/
class EntityResponseOfSensor extends EntityResponse {
}

/*
*/
class EntityResponseOfSensorAnalysisResults extends EntityResponse {
}

/*
*/
class EntityResponseOfSensorAnomalyInfo extends EntityResponse {
}

/*
*/
class EntityResponseOfSensorStatus extends EntityResponse {
}

/*
*/
class EntityResponseOfSensorStatusTimeSeries extends EntityResponse {
}

/*
*/
class EntityResponseOfTreeNode extends EntityResponse {
}

/*
*/
class EntityResponseOfUser extends EntityResponse {
}

/*
*/
class EntityResponseOfUserAccountInfo extends EntityResponse {
}

/*
*/
class EventIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class EventIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class EventsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class EventsServiceExportRequest {
    constructor(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.status = status;
        this.rule = rule;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class EventsServiceFindInAreaRequest {
    constructor(folderId, searchArea, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
        this.folderId = folderId;
        this.searchArea = searchArea;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.status = status;
        this.rule = rule;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class EventsServiceFindRequest {
    constructor(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.status = status;
        this.rule = rule;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class EventsServiceSetClipPathRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class EventsServiceSetImagePathRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class EventsServiceSetStatusRequest {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}

/*
*/
class EventsServiceStatisticsRequest {
    constructor(folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, interval, labelFormat) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.status = status;
        this.rule = rule;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.labelFormat = labelFormat;
    }
}

/*
*/
class FeatureIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class FeatureIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class FeaturesGroupIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class FeaturesGroupIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class FeaturesGroupsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class FeaturesGroupsServiceFindRequest {
    constructor(search, sort) {
        this.search = search;
        this.sort = sort;
    }
}

/*
*/
class FeaturesGroupsServiceSetFeaturesRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FeaturesGroupsServiceSetNameRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FeaturesGroupsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FeaturesServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class FeaturesServiceFindRequest {
    constructor(search, category, sort) {
        this.search = search;
        this.category = category;
        this.sort = sort;
    }
}

/*
*/
class FeaturesServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FolderIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class FolderIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class FoldersServiceChangeGeoAreaRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FoldersServiceChangeGeoLocationRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FoldersServiceChangeNameRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FoldersServiceChangeParentRequest {
    constructor(id, parentId) {
        this.id = id;
        this.parentId = parentId;
    }
}

/*
*/
class FoldersServiceChangeTimezoneRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class FoldersServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class FoldersServiceExportRequest {
    constructor(id, search, parentId, sort, format, fields) {
        this.id = id;
        this.search = search;
        this.parentId = parentId;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class FoldersServiceFindRequest {
    constructor(id, search, parentId, sort, page, pageSize) {
        this.id = id;
        this.search = search;
        this.parentId = parentId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class FoldersServiceGetHierarchyRequest {
    constructor(includeSensors) {
        this.includeSensors = includeSensors;
    }
}

/*
*/
class GeoServicesReferenceRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class GeoServicesTransformRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class IntegrationActionCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class IntegrationActionIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class IntegrationActionIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class IntegrationActionUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class IntegrationActionsFindRequest {
    constructor(search) {
        this.search = search;
    }
}

/*
*/
class IntegrationActionsFolderRequest {
    constructor(folderId) {
        this.folderId = folderId;
    }
}

/*
*/
class IntegrationIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class IntegrationIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class IntegrationsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class IntegrationsServiceFindRequest {
    constructor(search, type) {
        this.search = search;
        this.type = type;
    }
}

/*
*/
class IntegrationsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
   Query response message returned for find operation (with pagination) on multiple entities
*/
class QueryResponse {
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

/*
*/
class QueryResponseOfAccount extends QueryResponse {
}

/*
*/
class QueryResponseOfAnomalyEventInfo extends QueryResponse {
}

/*
*/
class QueryResponseOfAppliance extends QueryResponse {
}

/*
*/
class QueryResponseOfAuditLog extends QueryResponse {
}

/*
*/
class QueryResponseOfCalendar extends QueryResponse {
}

/*
*/
class QueryResponseOfComponentConfiguration extends QueryResponse {
}

/*
*/
class QueryResponseOfConfiguration extends QueryResponse {
}

/*
*/
class QueryResponseOfConfigurationTemplate extends QueryResponse {
}

/*
*/
class QueryResponseOfConfigurationVersion extends QueryResponse {
}

/*
*/
class QueryResponseOfEvent extends QueryResponse {
}

/*
*/
class QueryResponseOfFolder extends QueryResponse {
}

/*
*/
class QueryResponseOfIntegrationAction extends QueryResponse {
}

/*
*/
class QueryResponseOfIntegrationTarget extends QueryResponse {
}

/*
*/
class QueryResponseOfReportDefinition extends QueryResponse {
}

/*
*/
class QueryResponseOfRule extends QueryResponse {
}

/*
*/
class QueryResponseOfSchedule extends QueryResponse {
}

/*
*/
class QueryResponseOfSearchDefinition extends QueryResponse {
}

/*
*/
class QueryResponseOfSearchEvent extends QueryResponse {
}

/*
*/
class QueryResponseOfSensor extends QueryResponse {
}

/*
*/
class QueryResponseOfSensorAnalysisResults extends QueryResponse {
}

/*
*/
class QueryResponseOfTreeItem extends QueryResponse {
}

/*
*/
class QueryResponseOfUser extends QueryResponse {
}

/*
*/
class RegisterServiceAccountRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ReportIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ReportIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ReportsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ReportsServiceFindRequest {
    constructor(search) {
        this.search = search;
    }
}

/*
*/
class ReportsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class RuleIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class RuleIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class RulesServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class RulesServiceExportRequest {
    constructor(folderId, sensorId, search, behaviorType, severity, sort, format, fields) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class RulesServiceFindAnomalyRequest {
    constructor(folderId, sensorId, search, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class RulesServiceFindRequest {
    constructor(folderId, sensorId, search, behaviorType, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class RulesServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class ScheduleIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ScheduleIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ScheduledReportIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ScheduledReportIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ScheduledReportsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ScheduledReportsServiceFindRequest {
    constructor(search) {
        this.search = search;
    }
}

/*
*/
class ScheduledReportsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SchedulesServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SchedulesServiceFindRequest {
    constructor(search, folderId, sort, page, pageSize) {
        this.search = search;
        this.folderId = folderId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SchedulesServiceFolderIdRequest {
    constructor(folderId) {
        this.folderId = folderId;
    }
}

/*
*/
class SchedulesServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SearchEventCountRequest {
    constructor(id, sensorId, objectType, from, to, interval, labelFormat) {
        this.id = id;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.from = from;
        this.to = to;
        this.interval = interval;
        this.labelFormat = labelFormat;
    }
}

/*
*/
class SearchEventExportRequest {
    constructor(id, sensorId, objectType, from, to, sort, format, fields) {
        this.id = id;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class SearchEventFindRequest {
    constructor(id, sensorId, objectType, from, to, sort, page, pageSize) {
        this.id = id;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SearchEventIdRequest {
    constructor(id, eventId) {
        this.id = id;
        this.eventId = eventId;
    }
}

/*
*/
class SearchIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class SearchIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class SearchServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SearchServiceExecuteRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SearchServiceFindRequest {
    constructor(search, sort, page, pageSize) {
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SearchServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SearchSessionIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class SensorAnalysisIdRequest {
    constructor(sensorId) {
        this.sensorId = sensorId;
    }
}

/*
*/
class SensorIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class SensorIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class SensorsCountRequest {
    constructor(folderId, subFolders, sensorType, status, streamType) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorType = sensorType;
        this.status = status;
        this.streamType = streamType;
    }
}

/*
*/
class SensorsServiceAttachRequest {
    constructor(id, applianceId) {
        this.id = id;
        this.applianceId = applianceId;
    }
}

/*
*/
class SensorsServiceBulkCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SensorsServiceChangeFolderRequest {
    constructor(id, folderId) {
        this.id = id;
        this.folderId = folderId;
    }
}

/*
*/
class SensorsServiceChangeFovRequest {
    constructor(id, azimuth, body) {
        this.id = id;
        this.azimuth = azimuth;
        this.body = body;
    }
}

/*
*/
class SensorsServiceChangeGeoLocationRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SensorsServiceChangeNameRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SensorsServiceChangeStatusRequest {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}

/*
*/
class SensorsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SensorsServiceExportRequest {
    constructor(folderId, subFolders, search, type, status, stream, sort, format, fields) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class SensorsServiceFindRequest {
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

/*
*/
class SensorsServiceSetRefImageRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SensorsServiceStatusOvertimeRequest {
    constructor(id, from, to) {
        this.id = id;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class SensorsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
   Response of byte array
*/
class StreamResponse {
    constructor(content) {
        this.content = content;
    }
}

/*
*/
class SysAccountExportRequest {
    constructor(accountId, password) {
        this.accountId = accountId;
        this.password = password;
    }
}

/*
*/
class SysAccountImportRequest {
    constructor(password) {
        this.password = password;
    }
}

/*
*/
class SysApplianceGetLogsRequest {
    constructor(id, componentId, from, to) {
        this.id = id;
        this.componentId = componentId;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class SysAppliancesCountRequest {
    constructor(accountId, folderId, subFolders) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.subFolders = subFolders;
    }
}

/*
*/
class SysAppliancesServiceFindRequest {
    constructor(accountId, search, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SysAppliancesServiceGetCommandsRequest {
    constructor(accountId, applianceId, status) {
        this.accountId = accountId;
        this.applianceId = applianceId;
        this.status = status;
    }
}

/*
*/
class SysConfigurationsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysConfigurationsServiceCreateTemplateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysConfigurationsServiceCreateVersionRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SysConfigurationsServiceDeleteVersionRequest {
    constructor(id, versionId) {
        this.id = id;
        this.versionId = versionId;
    }
}

/*
*/
class SysConfigurationsServiceFindRequest {
    constructor(target, search, sort, page, pageSize) {
        this.target = target;
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SysConfigurationsServiceFindTemplateRequest {
    constructor(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SysConfigurationsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SysConfigurationsServiceUpdateTemplateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SysConfigurationsServiceUpdateVersionRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SysEventIdRequest {
    constructor(id, accountId) {
        this.id = id;
        this.accountId = accountId;
    }
}

/*
*/
class SysEventsServiceFindInAreaRequest {
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

/*
*/
class SysEventsServiceStatisticsRequest {
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

/*
*/
class SysKeysServiceCreateApiKeyRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysKeysServiceCreatePasswordRequest {
    constructor(days, user) {
        this.days = days;
        this.user = user;
    }
}

/*
*/
class SysKeysServiceCreateTokenRequest {
    constructor(accountId, userId, ttl) {
        this.accountId = accountId;
        this.userId = userId;
        this.ttl = ttl;
    }
}

/*
*/
class SysSensorsCountRequest {
    constructor(accountId, folderId, subFolders, sensorType, status, streamType) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorType = sensorType;
        this.status = status;
        this.streamType = streamType;
    }
}

/*
*/
class SysSensorsServiceFindRequest {
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

/*
   Token request message
*/
class TokenRequest {
    constructor(code, error, accountId) {
        this.code = code;
        this.error = error;
        this.accountId = accountId;
    }
}

/*
*/
class UserByEmailRequest {
    constructor(email) {
        this.email = email;
    }
}

/*
*/
class UserIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class UserIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class UserServiceChangeMobileRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceChangeNameRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceChangePasswordRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceCheckPasswordRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceLoginRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceResetPasswordRequest {
    constructor(code) {
        this.code = code;
    }
}

/*
*/
class UserServiceSendVerificationRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceSwitchAccountRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UserServiceVerifyLoginRequest {
    constructor(key) {
        this.key = key;
    }
}

/*
*/
class UsersServiceChangeDefaultAccountRequest {
    constructor(id, accountId) {
        this.id = id;
        this.accountId = accountId;
    }
}

/*
*/
class UsersServiceChangeMobileRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class UsersServiceChangeNameRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class UsersServiceChangeRoleRequest {
    constructor(id, role) {
        this.id = id;
        this.role = role;
    }
}

/*
*/
class UsersServiceChangeStatusRequest {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }
}

/*
*/
class UsersServiceChangeTypeRequest {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}

/*
*/
class UsersServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UsersServiceExportRequest {
    constructor(search, type, status, sort, format, fields) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class UsersServiceFindRequest {
    constructor(accountId, search, type, status, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class UsersServiceInviteRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class UsersServiceSetRolesRequest {
    constructor(id, roles) {
        this.id = id;
        this.roles = roles;
    }
}

/*
*/
class UsersServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
   @WebSocketMessage Message header for all web socket messages
*/
class WebSocketMessageHeader {
    constructor(opcode, version, messageId, correlationId, sessionId) {
        this.op = opcode;
        this.ver = version;
        this.id = messageId;
        this.cid = correlationId;
        this.sid = sessionId;
    }
}

// Access token key in the local storage
const tokenKey = 'portalAccessToken';
const loginKey = 'portalLoginData';
function getToken() {
    return localStorage.getItem(tokenKey);
}
function setToken(token) {
    localStorage.setItem(tokenKey, token);
}
function removeToken() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(loginKey);
}

/**
 * Utility class for all REST services with common functions
 */
class RestUtil {
    /**
     * Constructor with injected authentication service
     */
    constructor(http) {
        this.http = http;
        // Set headers
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        let ext = 'json';
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'format') {
                    ext = arr[1];
                }
            }
        });
        const downloadLink = fileName + '.' + ext;
        return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe((data) => {
            const downloadURL = window.URL.createObjectURL(data);
            const link = document.createElement('a');
            link.href = downloadURL;
            link.download = downloadLink;
            link.click();
        });
    }
    /**
     * HTTP GET action
     */
    get(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .get(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP POST action
     */
    post(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP PUT action
     */
    put(url, body, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * HTTP DELETE action
     */
    delete(url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        return this.http
            .delete(resourceUrl, { headers: this.headers, observe: 'response' })
            .pipe(map((res) => this.processResponse(res)), catchError(this.handleError));
    }
    /**
     * Construct URL with parameters
     */
    buildUrl(url, ...params) {
        return (params === null) ? url : (params.length === 0) ? url : `${url}${params && params.length > 0 ? '?' + params.join('&') : ''}`;
    }
    /**
     * Process the response, extract and refresh access token and return the body
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
        const accessToken = response.headers.get('X-ACCESS-TOKEN');
        if ((accessToken !== null) && (accessToken.length > 0)) {
            setToken(accessToken);
        }
        if (response.body && response.body.code && response.body.code !== 0) {
            throw { code: response.body.code, message: response.body.error };
        }
        return response.body;
    }
    /**
     * Error handling
     */
    handleError(error) {
        if (error.code) {
            return Promise.reject(error);
        }
        return Promise.reject(error.message || error);
    }
}
/** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(ɵɵinject(HttpClient)); };
/** @nocollapse */ RestUtil.ɵprov = ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RestUtil, [{
        type: Injectable
    }], function () { return [{ type: HttpClient }]; }, null); })();

class CoreConfig {
}

/**
 * List of account related actions
 */
class AccountsService {
    /**
     * Class constructor
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
     * @Return: QueryResponse<Account>
     */
    find(search, type, status, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    exportFormat(name, type, status, sort, format, fields) {
        const params = new Array();
        if (name != null) {
            params.push(`name=${name}`);
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`accounts`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Change account geo-area (polygon)
     * @Return: EntityResponse<Account>
     */
    changeGeoArea(body) {
        return this.rest.put(`${this.baseUrl}/geoArea`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoLocation(body) {
        return this.rest.put(`${this.baseUrl}/geoLocation`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    getDefaultLocation() {
        return this.rest.get(`${this.baseUrl}/geoLocation`);
    }
    /**
     * Get aggregated summary report of total number of sensors and devices with error / warning status
     * @Return: EntitiesResponse<DistributionOfLong> The list of health status distribution
     */
    getAccountHealthSummary() {
        return this.rest.get(`${this.baseUrl}/health`);
    }
}
/** @nocollapse */ AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AccountsService.ɵprov = ɵɵdefineInjectable({ token: AccountsService, factory: AccountsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AccountsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of anomaly related actions for the anomaly detection service
 * @RequestHeader X-API-KEY The key to identify the application (console)
 */
class AnomalyService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/anomaly';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get training results of all sensors with anomaly enabled flag ordered by the last training time
     * @Return: QueryResponse<SensorAnalysisResults>
     */
    getSensorsAnalysisResults(page, pageSize) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/results`, ...params);
    }
    /**
     * Update sensor analysis results bach for a specific sensors
     * @Return: EntityResponse<SensorAnalysisResults>
     */
    update(sensorId, body) {
        return this.rest.put(`${this.baseUrl}/sensor/${sensorId}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete all analysis results for a specific sensors
     * @Return: ActionResponse
     */
    delete(sensorId) {
        return this.rest.delete(`${this.baseUrl}/sensor/${sensorId}`);
    }
    /**
     * Get sensor info for anomaly
     * @Return: EntityResponse<SensorAnomalyInfo>
     */
    getSensorAnomalyInfo(sensorId) {
        return this.rest.get(`${this.baseUrl}/sensor/${sensorId}/info`);
    }
    /**
     * Find list of anomaly event info objects per sensor in a given time period
     * @return QueryResponse<AnomalyEventInfo> List of anomaly event info objects
     */
    findAnomalyEventInfo(accountId, sensorId, status, from, to, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
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
        return this.rest.get(`${this.baseUrl}/events`, ...params);
    }
    /**
     * Update sensor anomaly rule attributed
     * @return ActionResponse
     */
    updateAnomalyRule(sensorId, body) {
        return this.rest.put(`${this.baseUrl}/rule/${sensorId}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create dummy event (for anomaly tests only)
     * This method is used for testing only, the only service generates events in the system is the event service
     * @param event Event data to create
     * Some of the event fields are mandatory: (the other are optional)
     * <ul>
     * <li><b>id:</b> Unique event id (e.g. GUID string)</li>
     * <li><b>accountId</b> Account Id</li>
     * <li><b>sensorId</b> Sensor Id</li>
     * <li><b>objectType</b> Detected object type</li>
     * <li><b>behaviorType</b> Behavior</li>
     * <li><b>ruleId</b> Rule Id</li>
     * <li><b>startTime:</b> If set to 0, server time will be set</li>
     * </ul>
     * @return EntityResponse<Event>
     */
    createDummyEvent(body) {
        return this.rest.post(`${this.baseUrl}/event`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ AnomalyService.ɵfac = function AnomalyService_Factory(t) { return new (t || AnomalyService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AnomalyService.ɵprov = ɵɵdefineInjectable({ token: AnomalyService, factory: AnomalyService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AnomalyService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of appliance related actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class AppliancesService {
    /**
     * Class constructor
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
     * @Return: QueryResponse<Appliance>
     */
    find(folderId, subFolders, search, status, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of appliances and filter
     * @Return: StreamContent
     */
    exportFormat(folderId, subFolders, search, status, sort, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`appliances`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    findApplianceSensors(id, search, type, status, stream, sort, page, pageSize, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/sensors`, ...params);
    }
    /**
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    getApplianceAgents(id) {
        return this.rest.get(`${this.baseUrl}/${id}/agents`);
    }
    /**
     * Add new sensor and assigned it to a specific appliance
     * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
     * @Return: EntityResponse<Sensor> The updated sensor
     */
    addApplianceSensor(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/sensors`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    registerAppliance(id, body) {
        return this.rest.post(`${this.baseUrl}/register`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get appliance runtime configuration components
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    getRuntimeConfiguration(id) {
        return this.rest.get(`${this.baseUrl}/${id}/components`);
    }
    /**
     * Get list of appliance configurations for the specific product
     * @Return: EntitiesResponse<ApplianceConfiguration>
     */
    getConfigurations(target) {
        return this.rest.get(`${this.baseUrl}/configurations/${target}`);
    }
    /**
     * Get appliance configuration for the specific edge model
     * @Return: EntityResponse<ApplianceConfiguration>
     */
    getConfiguration(model) {
        return this.rest.get(`${this.baseUrl}/configuration/${model}`);
    }
    /**
     * Get network channels using ONVIF discovery protocol
     * @Return: EntitiesResponse<ComponentConfiguration>
     */
    getOnvifDiscoveryList(id) {
        return this.rest.get(`${this.baseUrl}/${id}/discovery`);
    }
    /**
     * Change appliance name
     * @Return: EntityResponse<Appliance>
     */
    changeName(id, name) {
        return this.rest.put(`${this.baseUrl}/${id}/name/${name}`, null);
    }
    /**
     * Update some appliance attributes (name, folder, configuration, integration)
     * @Return: EntityResponse<Appliance>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change appliance folder
     * @Return: EntityResponse<Appliance>
     */
    changeFolder(id, folderId) {
        return this.rest.put(`${this.baseUrl}/${id}/folder/${folderId}`, null);
    }
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeMachineId(id, machineId) {
        return this.rest.put(`${this.baseUrl}/${id}/machine/${machineId}`, null);
    }
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeConfiguration(id, configId, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/config/${configId}/${versionId}`, null);
    }
    /**
     * Send get capabilities command to the appliance and wait for response up to 60 seconds
     * @Return:  EntityResponse<Appliance>
     */
    getCapabilities(id) {
        return this.rest.post(`${this.baseUrl}/${id}/capabilities`, null);
    }
    /**
     * Send reset credentials command to the appliance (reset to the factory default password)
     * @Return:  ActionResponse
     */
    resetPassword(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reset-password`, null);
    }
    /**
     * Delete appliance from the system and detach all it's related sensors
     * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is SUSPENDED
     * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Delete appliance from the system including all it's related sensors and sensor data (rules, presets, analysis ...)
     * @Return: ActionResponse
     */
    purge(id) {
        return this.rest.delete(`${this.baseUrl}/purge/${id}`);
    }
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    getCommands(id, status, sort, page, pageSize) {
        const params = new Array();
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
        return this.rest.get(`${this.baseUrl}/${id}/commands`, ...params);
    }
    /**
     * Delete command
     * @Return: ActionResponse
     */
    deleteCommand(commandId) {
        return this.rest.delete(`${this.baseUrl}/commands/${commandId}`);
    }
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    getStatusOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
     */
    getKpiOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/kpi/overtime`, ...params);
    }
    /**
     * Aggregate appliances count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByStatus(folderId, subFolders) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
}
/** @nocollapse */ AppliancesService.ɵfac = function AppliancesService_Factory(t) { return new (t || AppliancesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AppliancesService.ɵprov = ɵɵdefineInjectable({ token: AppliancesService, factory: AppliancesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AppliancesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Audit log queries for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class AuditLogService {
    /**
     * Class constructor
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
     * @Return: QueryResponse<AuditLog>
     */
    find(userId, from, to, itemType, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of audit log entries and filter
     * @Return: StreamContent
     */
    exportFormat(userId, from, to, itemType, sort, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`auditlog`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get single audit log entry by id
     * @Return: EntityResponse<Appliance>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
}
/** @nocollapse */ AuditLogService.ɵfac = function AuditLogService_Factory(t) { return new (t || AuditLogService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ AuditLogService.ɵprov = ɵɵdefineInjectable({ token: AuditLogService, factory: AuditLogService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AuditLogService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for calendars (holidays) actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class CalendarsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Calendar>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update calendar
     * @Return: EntityResponse<Calendar>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete calendar from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single calendar by id
     * @Return: EntityResponse<Calendar>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get calendars by list of ids
     * @Return: EntitiesResponse<Calendar>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find calendars by filters
     * @Return: QueryResponse<Calendar>
     */
    find(search, folderId, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find all calendars for a specified level in the folder hierarchy
     * This method returns all the calendars of the current folder and all parent folders
     * @Return: EntitiesResponse<Calendar>
     */
    getFolderCalendars(folderId) {
        return this.rest.get(`${this.baseUrl}/folder/${folderId}`);
    }
    /**
     * Import calendar from outlook CSV, ICS or iCal file
     * @Return: ActionResponse
     */
    import(folderId) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        return this.rest.post(`${this.baseUrl}/import`, null, ...params);
    }
    /**
     * Import calendar from Url (ICS or iCal formats)
     * @Return: ActionResponse
     */
    importUrl(folderId, body) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        return this.rest.post(`${this.baseUrl}/importUrl`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
}
/** @nocollapse */ CalendarsService.ɵfac = function CalendarsService_Factory(t) { return new (t || CalendarsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ CalendarsService.ɵprov = ɵɵdefineInjectable({ token: CalendarsService, factory: CalendarsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CalendarsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for events actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class EventsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Event>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change event workflow status
     * @Return: EntityResponse<Event>
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Set event image path
     * @Return: EntityResponse<Event>
     */
    setImagePath(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/imagePath`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Set event clip path
     * @Return: EntityResponse<Event>
     */
    setClipPath(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/clipPath`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get single event by id
     * @Return: EntityResponse<Event>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get events by list of ids
     * @Return: EntitiesResponse<Event>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find events by filters
     * @Return: QueryResponse<Event>
     */
    find(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (rule != null) {
            params.push(`rule=${rule}`);
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of events and filter
     * @Return: StreamContent
     */
    exportFormat(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (rule != null) {
            params.push(`rule=${rule}`);
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`events`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Find events generated in area using spatial query
     * @Return: QueryResponse<Event>
     */
    findInArea(folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (rule != null) {
            params.push(`rule=${rule}`);
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
     * @Return: StreamingOutput of the image
     */
    getEventImage(id) {
        return this.rest.download(`events`, `${this.baseUrl}/${id}/image`);
    }
    /**
     * Get event clip [response content type: video/mp4]
     * @Return: StreamingOutput of the clip
     */
    getEventClip(id) {
        return this.rest.download(`events`, `${this.baseUrl}/${id}/clip`);
    }
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, interval, labelFormat) {
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
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (rule != null) {
            params.push(`rule=${rule}`);
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
        if (labelFormat != null) {
            params.push(`labelFormat=${labelFormat}`);
        }
        return this.rest.get(`${this.baseUrl}/overtime`, ...params);
    }
}
/** @nocollapse */ EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ EventsService.ɵprov = ɵɵdefineInjectable({ token: EventsService, factory: EventsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EventsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for folders actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class FoldersService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Folder>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change folder name
     * @Return: EntityResponse<Folder>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change folder parent id
     * @Return: EntityResponse<Folder>
     */
    changeParent(id, parentId) {
        return this.rest.put(`${this.baseUrl}/${id}/parent/${parentId}`, null);
    }
    /**
     * Change folder geo-area (polygon)
     * @Return: EntityResponse<Folder>
     */
    changeGeoArea(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoArea`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change folder geo-location (center)
     * @Return: EntityResponse<Folder>
     */
    changeGeoLocation(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoLocation`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change folder timezone
     * @Return: EntityResponse<Folder>
     */
    changeTimezone(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/timezone`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete folder from the system (only if it is empty)
     * @Return: ActionResponse error will be returned if the folder is not empty
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single folder by id
     * @Return: EntityResponse<Folder>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get folders by list of ids
     * @Return: EntitiesResponse<Folder>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find folders by filters
     * @Return: QueryResponse<Folder>
     */
    find(id, search, parentId, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of folders and filter
     * @Return: StreamContent
     */
    exportFormat(id, search, parentId, sort, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`folders`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Find and filter list of folders
     * @Return: QueryResponse<Folder>
     */
    getSubFolders(id, search, parentId, sort, page, pageSize) {
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
     * @Return: QueryResponse<TreeItem>
     */
    getSubItems(id, search, parentId, sort, page, pageSize) {
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
     * @Return: EntityResponse<TreeNode>
     */
    getHierarchy(includeSensors) {
        const params = new Array();
        if (includeSensors != null) {
            params.push(`includeSensors=${includeSensors}`);
        }
        return this.rest.get(`${this.baseUrl}/tree`, ...params);
    }
    /**
     * Get default geo bounds
     * @Return: EntityResponse<Coordinate> The folder location
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
}
/** @nocollapse */ FoldersService.ɵfac = function FoldersService_Factory(t) { return new (t || FoldersService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ FoldersService.ɵprov = ɵɵdefineInjectable({ token: FoldersService, factory: FoldersService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FoldersService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of Geo-spatial utilities
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class GeoService {
    /**
     * Class constructor
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
     * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
     * The returned value is a GeoReference data structure describes the contours of the
     * FOV on the image and the map and X,Y factors and offsets for transformation
     * @Return: EntityResponse<GeoReferenceData>
     */
    geoReference(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
     * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
     * @Return: EntityResponse<GeoReferenceData>
     */
    transform(body) {
        return this.rest.post(`${this.baseUrl}/transform`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ GeoService.ɵprov = ɵɵdefineInjectable({ token: GeoService, factory: GeoService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GeoService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
 */
class HealthCheckService {
    /**
     * Class constructor
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
     * @Return: ActionResponse - with version info
     */
    health() {
        return this.rest.get(`${this.baseUrl}`);
    }
}
/** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ HealthCheckService.ɵprov = ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(HealthCheckService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for integrations targets (templates)
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class IntegrationsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<IntegrationTarget>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update integration target
     * @Return: EntityResponse<IntegrationTarget>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete integration target from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single integration target by id
     * @Return: EntityResponse<IntegrationTarget>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get integration targets by list of ids
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find integration targets by filters
     * @Return: EntitiesResponse<IntegrationTarget>
     */
    find(search, type) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Create new integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    createAction(body) {
        return this.rest.post(`${this.baseUrl}/actions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update integration action
     * @Return: EntityResponse<IntegrationAction>
     */
    updateAction(id, body) {
        return this.rest.put(`${this.baseUrl}/actions/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete integration action from the system
     * @Return: ActionResponse
     */
    deleteAction(id) {
        return this.rest.delete(`${this.baseUrl}/actions/${id}`);
    }
    /**
     * Get single integration action by id
     * @Return: EntityResponse<IntegrationAction>
     */
    getAction(id) {
        return this.rest.get(`${this.baseUrl}/actions/${id}`);
    }
    /**
     * Get integration actions by list of ids
     * @Return: EntitiesResponse<IntegrationAction>
     */
    listActions(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/actions/list`, ...params);
    }
    /**
     * Find integration actions by filters
     * @Return: EntitiesResponse<IntegrationAction>
     */
    findActions(search) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}/actions`, ...params);
    }
    /**
     * Find all integration actions for a specified level in the folder hierarchy
     * @Return: EntitiesResponse<IntegrationAction>
     */
    getFolderActions(folderId) {
        return this.rest.get(`${this.baseUrl}/actions/folder/${folderId}`);
    }
}
/** @nocollapse */ IntegrationsService.ɵfac = function IntegrationsService_Factory(t) { return new (t || IntegrationsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ IntegrationsService.ɵprov = ɵɵdefineInjectable({ token: IntegrationsService, factory: IntegrationsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IntegrationsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for reports definition actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class ReportsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<ReportDefinition>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update report definition
     * @Return: EntityResponse<ReportDefinition>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete report definition from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single report definition by id
     * @Return: EntityResponse<ReportDefinition>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple report definitions by list of ids
     * @Return: EntitiesResponse<ReportDefinition>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find report definitions by filters
     * @Return: QueryResponse<ReportDefinition>
     */
    find(search) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ ReportsService.ɵprov = ɵɵdefineInjectable({ token: ReportsService, factory: ReportsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReportsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for rules actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class RulesService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Rule>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update rule
     * @Return: EntityResponse<Rule>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Enable list of rules
     * @Return: ActionResponse
     */
    enable(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.put(`${this.baseUrl}/enable`, null, ...params);
    }
    /**
     * Disable list of rules
     * @Return: ActionResponse
     */
    disable(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.put(`${this.baseUrl}/disable`, null, ...params);
    }
    /**
     * Delete rule from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single rule by id
     * @Return: EntityResponse<Rule>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get rules by list of ids
     * @Return: EntitiesResponse<Rule>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find rules by filters
     * @Return: QueryResponse<Rule>
     */
    find(folderId, sensorId, search, behaviorType, severity, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of rules and filter
     * @Return: StreamContent
     */
    exportFormat(folderId, sensorId, search, behaviorType, severity, sort, format, fields) {
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
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (severity != null) {
            params.push(`severity=${severity}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`rules`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Find anomaly rules by filters
     * @Return: QueryResponse<Rule>
     */
    findAnomalyRules(folderId, sensorId, search, severity, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}/anomaly`, ...params);
    }
    /**
     * Get rules specifications available by account features
     * @Return: EntitiesResponse<RuleSpec>
     */
    getSpecs() {
        return this.rest.get(`${this.baseUrl}/spec`);
    }
}
/** @nocollapse */ RulesService.ɵfac = function RulesService_Factory(t) { return new (t || RulesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ RulesService.ɵprov = ɵɵdefineInjectable({ token: RulesService, factory: RulesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RulesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for scheduled reports definition actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class ScheduledReportsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<ScheduledReport>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update scheduled report definition
     * @Return: EntityResponse<ScheduledReport>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete scheduled report definition from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single scheduled report definition by id
     * @Return: EntityResponse<ScheduledReport>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple scheduled report definitions by list of ids
     * @Return: EntitiesResponse<ScheduledReport>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find scheduled report definitions by filters
     * @Return: QueryResponse<ScheduledReport>
     */
    find(search) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ ScheduledReportsService.ɵfac = function ScheduledReportsService_Factory(t) { return new (t || ScheduledReportsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ ScheduledReportsService.ɵprov = ɵɵdefineInjectable({ token: ScheduledReportsService, factory: ScheduledReportsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ScheduledReportsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for schedules actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SchedulesService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Schedule>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update schedule
     * @Return: EntityResponse<Schedule>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete schedule from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single schedule by id
     * @Return: EntityResponse<Schedule>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get schedules by list of ids
     * @Return: EntitiesResponse<Schedule>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find schedule by filters
     * @Return: QueryResponse<Schedule>
     */
    find(search, folderId, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Find all schedules for a specified level in the folder hierarchy
     * This method returns all the schedules of the current folder and all parent folders
     * @Return: EntitiesResponse<Schedule>
     */
    getFolderSchedules(folderId) {
        return this.rest.get(`${this.baseUrl}/folder/${folderId}`);
    }
}
/** @nocollapse */ SchedulesService.ɵfac = function SchedulesService_Factory(t) { return new (t || SchedulesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SchedulesService.ɵprov = ɵɵdefineInjectable({ token: SchedulesService, factory: SchedulesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SchedulesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for metadata search actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SearchService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<SearchDefinition>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update search definition
     * @Return: EntityResponse<SearchDefinition>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete search definition from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single search definition by id
     * @Return: EntityResponse<SearchDefinition>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get multiple search definitions by list of ids
     * @Return: EntitiesResponse<SearchDefinition>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find search definitions by filters
     * @Return: QueryResponse<SearchDefinition>
     */
    find(search, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Perform metadata search by the search definition
     * @Return: EntityResponse<SearchStatus>
     * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
     * Please provide search id to query definition and use the same id for the web socket
     */
    execute(body) {
        return this.rest.post(`${this.baseUrl}/execute`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Perform metadata saved search by the search id
     * @Return: EntityResponse<SearchStatus>
     */
    executeById(id) {
        return this.rest.get(`${this.baseUrl}/execute/${id}`);
    }
    /**
     * Get search session status
     * @Return: EntityResponse<SearchStatus>
     */
    getSearchStatus(id) {
        return this.rest.get(`${this.baseUrl}/sessions/${id}/status`);
    }
    /**
     * Cancel search session
     * @Return: ActionResponse
     */
    cancelSearchSession(id) {
        return this.rest.delete(`${this.baseUrl}/sessions/${id}`);
    }
    /**
     * Get single search event item by id and sessionId
     * @Return: EntityResponse<SearchDefinition>
     */
    getEvent(id, eventId) {
        return this.rest.get(`${this.baseUrl}/sessions/${id}/event/${eventId}`);
    }
    /**
     * Get search event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    getEventImage(id, eventId) {
        return this.rest.download(`search`, `${this.baseUrl}/sessions/${id}/image/${eventId}`);
    }
    /**
     * Find list of search events by filter
     * @Return: EntitiesResponse<SearchDefinition>
     */
    findEvents(id, sensorId, objectType, from, to, sort, page, pageSize) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
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
        return this.rest.get(`${this.baseUrl}/sessions/${id}/find`, ...params);
    }
    /**
     * Export list of search events by filter
     * @Return: StreamContent
     */
    exportEvents(id, sensorId, objectType, from, to, sort, format, fields) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`search`, `${this.baseUrl}/sessions/${id}/export`, ...params);
    }
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(id, sensorId, objectType, from, to, interval, labelFormat) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
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
        if (labelFormat != null) {
            params.push(`labelFormat=${labelFormat}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${id}/overtime`, ...params);
    }
}
/** @nocollapse */ SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SearchService.ɵprov = ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SearchService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for sensor actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SensorsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Sensor>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create bulk of sensors with the same account Id, appliance Id and agent Id
     * @Return: EntitiesResponse<Sensor>
     */
    createBulk(body) {
        return this.rest.post(`${this.baseUrl}/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update sensor parameters
     * @Return: EntityResponse<Sensor>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change sensor name
     * @Return: EntityResponse<Sensor>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change sensor parent folder id
     * @Return: EntityResponse<Sensor>
     */
    changeFolder(id, folderId) {
        return this.rest.put(`${this.baseUrl}/${id}/folder/${folderId}`, null);
    }
    /**
     * Change sensor geo-location
     * @Return: EntityResponse<Sensor>
     */
    changeGeoLocation(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/geoLocation`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change sensor field of view transformation attributes
     * @Return: EntityResponse<Sensor>
     */
    changeFovAttributes(id, azimuth, body) {
        const params = new Array();
        if (azimuth != null) {
            params.push(`azimuth=${azimuth}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/fov`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Enable (activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    enable(id) {
        return this.rest.put(`${this.baseUrl}/${id}/enable`, null);
    }
    /**
     * Disable (de-activate) sensor
     * @Return: EntityResponse<Sensor>
     */
    disable(id) {
        return this.rest.put(`${this.baseUrl}/${id}/disable`, null);
    }
    /**
     * Attach sensor to a device with the given appliance Id
     * This action enabled on already detached and SUSPENDED sensor
     * @Return: EntityResponse<Sensor>
     */
    attach(id, applianceId) {
        return this.rest.put(`${this.baseUrl}/${id}/attach/${applianceId}`, null);
    }
    /**
     * Detach sensor from a device and change it's status to SUSPENDED
     * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
     * The sensor can be attached later to any other device in the system
     * @Return: EntityResponse<Sensor>
     */
    detach(id) {
        return this.rest.put(`${this.baseUrl}/${id}/detach`, null);
    }
    /**
     * Delete sensor from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single sensor by id
     * @Return: EntityResponse<Sensor>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get sensors by list of ids
     * @Return: EntitiesResponse<Sensor>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    find(folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of sensors and filter
     * @Return: StreamContent
     */
    exportFormat(folderId, subFolders, search, type, status, stream, sort, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`sensors`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImage(id) {
        return this.rest.download(`sensors`, `${this.baseUrl}/${id}/ref-image`);
    }
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * @Return: ActionResponse
     */
    setRefImage(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/ref-image`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate>
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
    /**
     * Get single sensor health by sensor id
     * @Return: EntityResponse<SensorStatus>
     */
    getSensorHealthStatus(id) {
        return this.rest.get(`${this.baseUrl}/${id}/health`);
    }
    /**
     * Get all sensors health status
     * @Return: EntitiesResponse<SensorStatus>
     */
    getSensorsHealthStatus() {
        return this.rest.get(`${this.baseUrl}/health`);
    }
    /**
     * Get sensor status history over time
     * @Return:  EntityResponse<SensorStatusTimeSeries>
     */
    getStatusOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
    /**
     * Aggregate sensors count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByType(folderId, subFolders, sensorType, status, streamType) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-type`, ...params);
    }
    /**
     * Aggregate sensors count distribution by stream type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStream(folderId, subFolders, sensorType, status, streamType) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-stream`, ...params);
    }
    /**
     * Aggregate sensors count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStatus(folderId, subFolders, sensorType, status, streamType) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
}
/** @nocollapse */ SensorsService.ɵfac = function SensorsService_Factory(t) { return new (t || SensorsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SensorsService.ɵprov = ɵɵdefineInjectable({ token: SensorsService, factory: SensorsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SensorsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of account related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysAccountsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Account>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update existing account in the system
     * @Return: EntityResponse<Account>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update account name
     * @Return: EntityResponse<Account>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change account type
     * @Return: EntityResponse<User>
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change account status
     * @Return: EntityResponse<Account>
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change account groups
     * @Return: EntityResponse<Account>
     */
    changeGroups(id, groupId) {
        const params = new Array();
        if (groupId != null) {
            params.push(`groupId=${groupId}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/groups/{groups}`, null, ...params);
    }
    /**
     * Change account geo-location (center)
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoLocation(body) {
        return this.rest.put(`${this.baseUrl}/{id}/geoLocation`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change account geo area
     * @Return: EntityResponse<Account> The changed account
     */
    changeGeoArea(body) {
        return this.rest.put(`${this.baseUrl}/{id}/geoArea`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete account from the system
     * The account is moved to DELETED mode and will be deleted after 90 days
     * Only account marked as SUSPENDED can be deleted
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Delete account immediately without account status restrictions
     * @Return: ActionResponse
     */
    purge(id) {
        return this.rest.delete(`${this.baseUrl}/purge/${id}`);
    }
    /**
     * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
     * @Return: ActionResponse
     */
    reset(id, days) {
        return this.rest.delete(`${this.baseUrl}/reset/${id}/days/${days}`);
    }
    /**
     * Get single account by id
     * @Return: EntityResponse<Account>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get accounts by list of ids
     * @Return: EntitiesResponse<Account>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find list of accounts and filter
     * @Return: QueryResponse<Account>
     */
    find(search, type, status, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Get account hierarchy
     * @Return: EntityResponse<TreeNode>
     */
    tree(id, sensors) {
        const params = new Array();
        if (sensors != null) {
            params.push(`sensors=${sensors}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/tree`, ...params);
    }
    /**
     * Find account folders
     * @Return: QueryResponse<Folder>
     */
    findFolders(id, parentId, search, sort, page, pageSize) {
        const params = new Array();
        if (parentId != null) {
            params.push(`parentId=${parentId}`);
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
        return this.rest.get(`${this.baseUrl}/${id}/folders`, ...params);
    }
    /**
     * Export list of accounts and filter
     * @Return: StreamContent
     */
    exportFormat(name, type, status, sort, format, fields) {
        const params = new Array();
        if (name != null) {
            params.push(`name=${name}`);
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`sys-accounts`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get account types statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountTypeSummary>
     */
    getAccountTypeStatistics() {
        return this.rest.get(`${this.baseUrl}/statistics/type`);
    }
    /**
     * Get account monthly statistics for all accounts in the system
     * @Return: EntitiesResponse<AccountStatistics>
     */
    getAccountMonthStatistics(accountId, from, to) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/statistics/month`, ...params);
    }
    /**
     * Get accounts month report - current channels and devices per account compared to previous month
     * @Return: EntitiesResponse<AccountStatSummary>
     */
    getAccountsMonthReport() {
        return this.rest.get(`${this.baseUrl}/statistics/month/report`);
    }
}
/** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysAccountsService.ɵprov = ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysAccountsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of appliance queries for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysAppliancesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/appliances';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Register new appliance in the system
     * @Return: EntityResponse<Appliance> The registered appliance
     */
    registerAppliance(id, body) {
        return this.rest.post(`${this.baseUrl}/register`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get single appliance by id
     * @Return: EntityResponse<Appliance>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of appliances and filter
     * @Return: QueryResponse<Appliance>
     */
    find(accountId, search, status, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of appliances and filter
     * @Return: StreamContent
     */
    exportFormat(folderId, subFolders, search, status, sort, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`sys-appliances`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Delete appliance from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Reboot appliance host
     * @Return: ActionResponse
     */
    reboot(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reboot`, null);
    }
    /**
     * Change appliance machine Id (for VIRTUAL device only)
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeMachineId(id, machineId) {
        return this.rest.put(`${this.baseUrl}/${id}/machine/${machineId}`, null);
    }
    /**
     * Change appliance configuration
     * @Return: EntityResponse<Appliance> - Updated appliance
     */
    changeConfiguration(id, configId, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/config/${configId}/${versionId}`, null);
    }
    /**
     * Get all appliance agents
     * @Return: EntitiesResponse<Agent>
     */
    getApplianceAgents(id) {
        return this.rest.get(`${this.baseUrl}/${id}/agents`);
    }
    /**
     * Add agent to appliance
     * Agent can be added to virtual appliance only
     * @Return: EntityResponse<Agent>
     */
    addApplianceAgent(id) {
        return this.rest.post(`${this.baseUrl}/${id}/agents`, null);
    }
    /**
     * Delete agent from the system
     * Only virtual device agent can be deleted
     * @Return: ActionResponse
     */
    deleteApplianceAgent(id, agentId) {
        return this.rest.delete(`${this.baseUrl}/${id}/agents/${agentId}`);
    }
    /**
     * Find list of appliance commands and filter
     * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
     */
    getCommands(accountId, applianceId, status) {
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
     * @Return: ActionResponse
     */
    setCommandStatus(commandId, status) {
        return this.rest.put(`${this.baseUrl}/commands/${commandId}/${status}`, null);
    }
    /**
     * Delete command
     * @Return: ActionResponse
     */
    deleteCommand(id, commandId) {
        return this.rest.delete(`${this.baseUrl}/${id}/commands/${commandId}`);
    }
    /**
     * Delete all appliance commands
     * @Return: ActionResponse
     */
    deleteAllCommands(id, agentId) {
        return this.rest.delete(`${this.baseUrl}/${id}/commands`);
    }
    /**
     * Get appliance status history over time
     * @Return:  EntityResponse<ApplianceStatusTimeSeries>
     */
    getStatusOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
    /**
     * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
     * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
     */
    getKpiOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/kpi/overtime`, ...params);
    }
    /**
     * Aggregate appliances count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByStatus(folderId, subFolders) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
    /**
     * Send get capabilities command to the appliance and wait for response up to 60 seconds
     * @Return:  EntityResponse<Appliance>
     */
    getCapabilities(id) {
        return this.rest.post(`${this.baseUrl}/${id}/capabilities`, null);
    }
    /**
     * Send get logs command to the appliance
     * @Return:  ActionResponse
     */
    getLogs(id, componentId, from, to) {
        const params = new Array();
        if (componentId != null) {
            params.push(`componentId=${componentId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.post(`${this.baseUrl}/${id}/logs`, null, ...params);
    }
}
/** @nocollapse */ SysAppliancesService.ɵfac = function SysAppliancesService_Factory(t) { return new (t || SysAppliancesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysAppliancesService.ɵprov = ɵɵdefineInjectable({ token: SysAppliancesService, factory: SysAppliancesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysAppliancesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of configurations related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysConfigurationsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Configuration>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration in the system
     * @Return: EntityResponse<Configuration>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete configuration by id
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Set default version for configuration
     * @Return: ActionResponse
     */
    setDefaultVersion(id, versionId) {
        return this.rest.put(`${this.baseUrl}/${id}/default-version/${versionId}`, null);
    }
    /**
     * Get configuration by id
     * @Return: EntityResponse<Configuration>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get list of configurations by filter
     * @Return: QueryResponse<Configuration>
     */
    find(target, search, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Create new configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    createVersion(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/versions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration version in the system
     * @Return: EntityResponse<ConfigurationVersion>
     */
    updateVersion(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/versions`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Duplicate configuration version from existing one
     * @Return: EntityResponse<ConfigurationVersion>
     */
    duplicateVersion(id, versionId) {
        return this.rest.post(`${this.baseUrl}/${id}/versions/${versionId}`, null);
    }
    /**
     * Delete configuration version by id
     * @Return: ActionResponse
     */
    deleteVersion(id, versionId) {
        return this.rest.delete(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get specific configuration version
     * @Return: EntityResponse<ConfigurationVersion>
     */
    getVersion(id, versionId) {
        return this.rest.get(`${this.baseUrl}/${id}/versions/${versionId}`);
    }
    /**
     * Get all versions of specific configuration
     * @Return: EntitiesResponse<ConfigurationVersion>
     */
    getVersions(id) {
        return this.rest.get(`${this.baseUrl}/${id}/versions`);
    }
    /**
     * Create new configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    createTemplate(body) {
        return this.rest.post(`${this.baseUrl}/templates`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update configuration template in the system
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    updateTemplate(id, body) {
        return this.rest.put(`${this.baseUrl}/templates/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete configuration template by id
     * @Return: ActionResponse
     */
    deleteTemplate(id) {
        return this.rest.delete(`${this.baseUrl}/templates/${id}`);
    }
    /**
     * Get configuration template by id
     * @Return: EntityResponse<ConfigurationTemplate>
     */
    getTemplate(id) {
        return this.rest.get(`${this.baseUrl}/templates/${id}`);
    }
    /**
     * Get list of configuration templates
     * @Return: QueryResponse<ConfigurationTemplate>
     */
    findTemplates(page, pageSize) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/templates`, ...params);
    }
}
/** @nocollapse */ SysConfigurationsService.ɵfac = function SysConfigurationsService_Factory(t) { return new (t || SysConfigurationsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysConfigurationsService.ɵprov = ɵɵdefineInjectable({ token: SysConfigurationsService, factory: SysConfigurationsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysConfigurationsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for event queries for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysEventsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Event>
     */
    get(id, accountId) {
        return this.rest.get(`${this.baseUrl}/${accountId}/${id}`);
    }
    /**
     * Find events by filters
     * @Return: QueryResponse<Event>
     */
    find(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
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
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
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
/** @nocollapse */ SysEventsService.ɵfac = function SysEventsService_Factory(t) { return new (t || SysEventsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysEventsService.ɵprov = ɵɵdefineInjectable({ token: SysEventsService, factory: SysEventsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysEventsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Features groups services for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysFeaturesGroupsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<FeaturesGroup>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update features group
     * @Return: EntityResponse<FeaturesGroup>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete Feature from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single features group by id
     * @Return: EntityResponse<FeaturesGroup>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find features groups by filters
     * @Return: QueryResponse<FeaturesGroup>
     */
    find(search, sort) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ SysFeaturesGroupsService.ɵfac = function SysFeaturesGroupsService_Factory(t) { return new (t || SysFeaturesGroupsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysFeaturesGroupsService.ɵprov = ɵɵdefineInjectable({ token: SysFeaturesGroupsService, factory: SysFeaturesGroupsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysFeaturesGroupsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Features services for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysFeaturesService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Feature>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update Feature
     * @Return: EntityResponse<Feature>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete Feature from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single feature by id
     * @Return: EntityResponse<Feature>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find features by filters
     * @Return: QueryResponse<Feature>
     */
    find(search, category, sort) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ SysFeaturesService.ɵfac = function SysFeaturesService_Factory(t) { return new (t || SysFeaturesService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysFeaturesService.ɵprov = ɵɵdefineInjectable({ token: SysFeaturesService, factory: SysFeaturesService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysFeaturesService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all key (API key + User token) related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysKeysService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<ApiKey>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/api-keys`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update API key for specific application name
     * @Return: EntityResponse<ApiKey>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}/api-keys`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change API Key version (rotate key)
     * @Return: EntityResponse<ApiKey>
     */
    rotate(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/rotate`, null);
    }
    /**
     * Delete API Key
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/api-keys/${id}`);
    }
    /**
     * Get single API Key by id
     * @Return: EntityResponse<ApiKey>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/api-keys/${id}`);
    }
    /**
     * Get list of all keys
     * @Return: EntitiesResponse<ApiKey>
     */
    getAll() {
        return this.rest.get(`${this.baseUrl}/api-keys`);
    }
    /**
     * Enable key
     * @Return: EntityResponse<ApiKey>
     */
    enable(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/enable`, null);
    }
    /**
     * Disable key
     * @Return: EntityResponse<ApiKey>
     */
    disable(id) {
        return this.rest.put(`${this.baseUrl}/api-keys/${id}/disable`, null);
    }
    /**
     * Create access token for the user in the specified account
     * @Return: ActionResponse
     */
    createAccessToken(accountId, userId, ttl) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (ttl != null) {
            params.push(`ttl=${ttl}`);
        }
        return this.rest.post(`${this.baseUrl}/token`, null, ...params);
    }
    /**
     * Create time limited password for user to access the API documentation
     * @Return: ActionResponse
     */
    createTimedPassword(days, user) {
        const params = new Array();
        if (days != null) {
            params.push(`days=${days}`);
        }
        if (user != null) {
            params.push(`user=${user}`);
        }
        return this.rest.post(`${this.baseUrl}/password`, null, ...params);
    }
    /**
     * Get list of all resources
     * @Return: EntitiesResponse<StringKeyValue>
     */
    getResources() {
        return this.rest.get(`${this.baseUrl}/api-keys/resources`);
    }
}
/** @nocollapse */ SysKeysService.ɵfac = function SysKeysService_Factory(t) { return new (t || SysKeysService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysKeysService.ɵprov = ɵɵdefineInjectable({ token: SysKeysService, factory: SysKeysService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysKeysService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for sensor actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysSensorsService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<Sensor>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    find(accountId, folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Get single sensor health by sensor id
     * @Return: EntityResponse<SensorStatus>
     */
    getSensorHealthStatus(id) {
        return this.rest.get(`${this.baseUrl}/${id}/health`);
    }
    /**
     * Get all sensors health status
     * @Return: EntitiesResponse<SensorStatus>
     */
    getSensorsHealthStatus() {
        return this.rest.get(`${this.baseUrl}/health`);
    }
    /**
     * Get sensor status history over time
     * @Return:  EntityResponse<SensorStatusTimeSeries>
     */
    getStatusOverTime(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/overtime`, ...params);
    }
    /**
     * Aggregate sensors count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByType(accountId, folderId, subFolders, sensorType, status, streamType) {
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
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-type`, ...params);
    }
    /**
     * Aggregate sensors count distribution by stream type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStream(accountId, folderId, subFolders, sensorType, status, streamType) {
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
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-stream`, ...params);
    }
    /**
     * Aggregate sensors count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getSensorsCountByStatus(accountId, folderId, subFolders, sensorType, status, streamType) {
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
        if (sensorType != null) {
            params.push(`sensorType=${sensorType}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (streamType != null) {
            params.push(`streamType=${streamType}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
}
/** @nocollapse */ SysSensorsService.ɵfac = function SysSensorsService_Factory(t) { return new (t || SysSensorsService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysSensorsService.ɵprov = ɵɵdefineInjectable({ token: SysSensorsService, factory: SysSensorsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysSensorsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of general system configuration actions for system administrator only
 */
class SysSystemService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<License>
     */
    getLicense() {
        return this.rest.get(`${this.baseUrl}/license`);
    }
    /**
     * Import license data from file
     * @Return: ActionResponse
     */
    importLicense() {
        return this.rest.post(`${this.baseUrl}/license`, null);
    }
    /**
     * Get system version
     * @Return: ActionResponse
     */
    getSystemVersion() {
        return this.rest.get(`${this.baseUrl}/license`);
    }
    /**
     * Export account configuration data
     * @Return: StreamingOutput of the content (gzip)
     */
    exportAccountData(accountId, password) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (password != null) {
            params.push(`password=${password}`);
        }
        return this.rest.download(`sys-system`, `${this.baseUrl}/accounts/export`, ...params);
    }
    /**
     * Import account configuration data from byte array (zip content)
     * @Return: ActionResponse
     */
    importAccountData() {
        return this.rest.post(`${this.baseUrl}/accounts/import`, null);
    }
    /**
     * Export SW package configurations data
     * @Return: StreamingOutput of the content (zip)
     */
    exportConfigurations() {
        return this.rest.download(`sys-system`, `${this.baseUrl}/configurations/export`);
    }
    /**
     * Import SW package configurations data from byte array (zip content)
     * @Return: ActionResponse
     */
    importConfigurations() {
        return this.rest.post(`${this.baseUrl}/configurations/import`, null);
    }
    /**
     * Backup entire system (configurations, users and accounts)
     * @Return: StreamingOutput of the content (zip)
     */
    backupSystem() {
        return this.rest.download(`sys-system`, `${this.baseUrl}/backup`);
    }
    /**
     * Restore entire system (zip content)
     * @Return: ActionResponse
     */
    restoreSystem() {
        return this.rest.post(`${this.baseUrl}/restore`, null);
    }
}
/** @nocollapse */ SysSystemService.ɵfac = function SysSystemService_Factory(t) { return new (t || SysSystemService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysSystemService.ɵprov = ɵɵdefineInjectable({ token: SysSystemService, factory: SysSystemService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysSystemService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all user related actions for account administrator only
 * @RequestHeader X-API-KEY The key to identify the application (console)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysUsersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * @Return: ActionResponse
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update user
     * @Return: EntityResponse<User>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user name
     * @Return: EntityResponse<User>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user mobile
     * @Return: EntityResponse<User>
     */
    changeMobile(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/mobile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user type
     * @Return: EntityResponse<User>
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change user status
     * @Return: EntityResponse<User>
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change user default account
     * @Return: EntityResponse<User>
     */
    changeDefaultAccount(id, accountId) {
        return this.rest.put(`${this.baseUrl}/${id}/defaultAccount/${accountId}`, null);
    }
    /**
     * Reset password for user, generate one-time temporary password
     * @Return: ActionResponse
     */
    resetPassword(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reset-password`, null);
    }
    /**
     * Set user roles in his accounts (override previous roles)
     * @Return: EntityResponse<User>
     */
    setRoles(id, roles) {
        return this.rest.post(`${this.baseUrl}/${id}/roles/`, typeof roles === 'object' ? JSON.stringify(roles) : roles);
    }
    /**
     * Update user roles in his accounts (merge with existing roles)
     * @Return: EntityResponse<User>
     */
    mergeRoles(id, roles) {
        return this.rest.put(`${this.baseUrl}/${id}/roles/`, typeof roles === 'object' ? JSON.stringify(roles) : roles);
    }
    /**
     * Delete user from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by Id
     * @Return: EntityResponse<User>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of users by filter
     * @Return: QueryResponse<User>
     */
    find(accountId, search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
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
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of users and filter
     * @Return: StreamContent
     */
    exportFormat(search, type, status, sort, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`sys-users`, `${this.baseUrl}/export`, ...params);
    }
}
/** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ SysUsersService.ɵprov = ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SysUsersService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for user registration and login
 */
class UserService {
    /**
     * Class constructor
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
     * @Return: EntityResponse<LoginData>
     */
    login(body) {
        return this.rest.post(`${this.baseUrl}/login`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<LoginData>
     */
    refreshToken() {
        return this.rest.post(`${this.baseUrl}/refresh-token`, null);
    }
    /**
     * Verify user by temporary login key
     * @Return: EntityResponse<User>
     */
    verifyLoginKey(key) {
        const params = new Array();
        if (key != null) {
            params.push(`key=${key}`);
        }
        return this.rest.get(`${this.baseUrl}/login/verify`, ...params);
    }
    /**
     * Send verification code by email
     * @Return: ActionResponse
     */
    sendVerificationCode(body) {
        return this.rest.post(`${this.baseUrl}/verify`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Validate verification code and reset password
     * @Return: ActionResponse
     */
    resetPassword(code) {
        return this.rest.post(`${this.baseUrl}/reset-password`, typeof code === 'object' ? JSON.stringify(code) : code);
    }
    /**
     * Change password
     * @Return: ActionResponse
     */
    changePassword(body) {
        return this.rest.post(`${this.baseUrl}/change-password`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Check if password was used before (according to password policy)
     * @Return: ActionResponse
     */
    checkUnusedPassword(body) {
        return this.rest.post(`${this.baseUrl}/check-password`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change current user name
     * @Return: ActionResponse
     */
    changeName(body) {
        return this.rest.put(`${this.baseUrl}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change current user mobile
     * @Return: ActionResponse
     */
    changeMobile(body) {
        return this.rest.put(`${this.baseUrl}/mobile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Refresh token (set new expiration time) and associate with new account if required
     * @Return: EntityResponse<UserAccountInfo>
     */
    switchAccount(body) {
        return this.rest.post(`${this.baseUrl}/switch-account`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UserService.ɵprov = ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all user related actions for account administrator only
 */
class UsersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create service account
     * @Return: ActionResponse
     */
    registerServiceAccount(body) {
        return this.rest.post(`${this.baseUrl}/service-account`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Send invitation to a new user for the current account
     * @Return: ActionResponse
     */
    invite(body) {
        return this.rest.post(`${this.baseUrl}/invite`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Resend invitation to an existing user for the current account
     * @Return: ActionResponse
     */
    reInvite(id) {
        return this.rest.post(`${this.baseUrl}/re-invite/${id}`, null);
    }
    /**
     * Update user
     * @Return: EntityResponse<User>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user name
     * @Return: EntityResponse<User>
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user mobile
     * @Return: EntityResponse<User>
     */
    changeMobile(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/mobile`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change user type
     * @Return: EntityResponse<User>
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Delete user from the system
     * The user will be removed from the account, if no accounts associated with the user, it will be deleted
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by id
     * @Return: EntityResponse<User>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by email
     * @Return: EntityResponse<User>
     */
    getByEmail(email) {
        return this.rest.get(`${this.baseUrl}/byEmail/${email}`);
    }
    /**
     * Find list of users and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<User>
     */
    find(accountId, search, type, status, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
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
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
    /**
     * Export list of users and filter
     * @Return: StreamContent
     */
    exportFormat(search, type, status, sort, format, fields) {
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
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        return this.rest.download(`users`, `${this.baseUrl}/export`, ...params);
    }
}
/** @nocollapse */ UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(ɵɵinject('config'), ɵɵinject(RestUtil)); };
/** @nocollapse */ UsersService.ɵprov = ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UsersService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

const Services = [
    AnomalyService,
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

/*
   @WebSocketMessage
*/
class EventsSocketServiceOpen {
    constructor(accountId) {
        this.accountId = accountId;
    }
}

/*
   @WebSocketMessage
*/
class FilteredEventsSocketServiceOpen {
    constructor(accountId, sensorId, extSensorId) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.extSensorId = extSensorId;
    }
}

/*
   @WebSocketMessage
*/
class HealthSocketServiceOpen {
    constructor(accountId) {
        this.accountId = accountId;
    }
}

/*
   @WebSocketMessage
   This message is pushed to the client upon any new event in the registered account
*/
class SocketEventNotification extends WebSocketMessageHeader {
}

/*
   @WebSocketMessage
   This message is pushed to the client upon any sensor health status change in the registered account
*/
class SocketHealthStatusNotification extends WebSocketMessageHeader {
}

class CoreLibModule {
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
/** @nocollapse */ CoreLibModule.ɵmod = ɵɵdefineNgModule({ type: CoreLibModule });
/** @nocollapse */ CoreLibModule.ɵinj = ɵɵdefineInjector({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[CommonModule, HttpClientModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CoreLibModule, { imports: [CommonModule, HttpClientModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CoreLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, HttpClientModule]
            }]
    }], null, null); })();

/* Public API Surface of ng-core-lib */

/**
 * Generated bundle index. Do not edit.
 */

export { AbsoluteTimeFrame, Account, AccountIdRequest, AccountIdsRequest, AccountRole, AccountRoleCode, AccountSettings, AccountStatSummary, AccountStatistics, AccountStatusCode, AccountTypeCode, AccountTypeSummary, AccountsMonthStatisticsRequest, AccountsService, AccountsServiceChangeGroupsRequest, AccountsServiceChangeNameRequest, AccountsServiceChangeStatusRequest, AccountsServiceChangeTypeRequest, AccountsServiceCreateRequest, AccountsServiceExportRequest, AccountsServiceFindFoldersRequest, AccountsServiceFindRequest, AccountsServiceResetRequest, AccountsServiceTreeRequest, AccountsServiceUpdateRequest, ActionResponse, Agent, AgentStatusCode, AnalysisResult, AnomalyEventInfo, AnomalyService, AnomalyServiceFindEventsRequest, AnomalyServiceFindRequest, AnomalyServiceUpdateRequest, AnomalyServiceUpdateRuleRequest, ApiKey, ApiKeyIdRequest, Appliance, ApplianceCapabilities, ApplianceCommand, ApplianceCommandCode, ApplianceCommandIdRequest, ApplianceConfiguration, ApplianceDiscovery, ApplianceIdAgentIdRequest, ApplianceIdRequest, ApplianceKpiDataPoint, ApplianceKpiTimeSeries, ApplianceKpiTimestamped, ApplianceRegistration, ApplianceServiceDeleteCommandRequest, ApplianceStatus, ApplianceStatusCode, ApplianceStatusTimeSeries, ApplianceStatusTimestamped, AppliancesCountRequest, AppliancesService, AppliancesServiceAddSensorRequest, AppliancesServiceChangeConfigurationRequest, AppliancesServiceChangeFolderRequest, AppliancesServiceChangeMachineIdRequest, AppliancesServiceChangeNameRequest, AppliancesServiceExportRequest, AppliancesServiceFindRequest, AppliancesServiceFindSensorsRequest, AppliancesServiceGetCommandsRequest, AppliancesServiceRegisterApplianceRequest, AppliancesServiceSetCommandRequest, AppliancesServiceStatusOvertimeRequest, AppliancesServiceUpdateApplianceRequest, AuditLog, AuditLogIdRequest, AuditLogService, AuditLogServiceExportRequest, AuditLogServiceFindRequest, BaseEntity, BehaviorTypeCode, BoundingBox, BoundingMap, Calendar, CalendarIdRequest, CalendarIdsRequest, CalendarsService, CalendarsServiceCreateRequest, CalendarsServiceFindRequest, CalendarsServiceFolderIdRequest, CalendarsServiceImportRequest, CalendarsServiceImportUrlRequest, CalendarsServiceUpdateRequest, ChangeGeoAreaRequest, ChangeGeoLocationRequest, ChangePasswordRequest, ColorCode, ColorTypeCode, CommandStatusCode, ComponentConfiguration, Configuration, ConfigurationIdRequest, ConfigurationModelRequest, ConfigurationTargetRequest, ConfigurationTemplate, ConfigurationTemplateIdRequest, ConfigurationVersion, ConfigurationVersionIdRequest, Coordinate, CoreConfig, CoreLibModule, DayOfWeekCode, Dimension, DiskInfo, DistributionOfLong, DistributionOfString, DockerCredentials, EmptyRequest, EntitiesResponse, EntitiesResponseOfAccount, EntitiesResponseOfAccountStatSummary, EntitiesResponseOfAccountStatistics, EntitiesResponseOfAccountTypeSummary, EntitiesResponseOfApiKey, EntitiesResponseOfAppliance, EntitiesResponseOfApplianceAgents, EntitiesResponseOfApplianceCommand, EntitiesResponseOfApplianceConfiguration, EntitiesResponseOfAuditLog, EntitiesResponseOfCalendar, EntitiesResponseOfComponentConfiguration, EntitiesResponseOfConfiguration, EntitiesResponseOfDistributionOfLong, EntitiesResponseOfEvent, EntitiesResponseOfFeature, EntitiesResponseOfFeaturesGroup, EntitiesResponseOfFolder, EntitiesResponseOfIntegration, EntitiesResponseOfIntegrationAction, EntitiesResponseOfReportDefinition, EntitiesResponseOfRule, EntitiesResponseOfRuleSpec, EntitiesResponseOfSchedule, EntitiesResponseOfScheduledReport, EntitiesResponseOfSearchDefinition, EntitiesResponseOfSearchEvent, EntitiesResponseOfSensor, EntitiesResponseOfSensorStatus, EntitiesResponseOfStringKeyValue, EntityResponse, EntityResponseOfAccount, EntityResponseOfApiKey, EntityResponseOfAppliance, EntityResponseOfApplianceAgents, EntityResponseOfApplianceConfiguration, EntityResponseOfApplianceDiscovery, EntityResponseOfApplianceKpiTimeSeries, EntityResponseOfApplianceStatusTimeSeries, EntityResponseOfAuditLog, EntityResponseOfCalendar, EntityResponseOfComponentConfiguration, EntityResponseOfConfiguration, EntityResponseOfConfigurationTemplate, EntityResponseOfConfigurationVersion, EntityResponseOfCoordinate, EntityResponseOfDistributionOfLong, EntityResponseOfEvent, EntityResponseOfEventCountTimeSeries, EntityResponseOfFeature, EntityResponseOfFeaturesGroup, EntityResponseOfFolder, EntityResponseOfGeoReferenceData, EntityResponseOfIntegration, EntityResponseOfIntegrationAction, EntityResponseOfLicense, EntityResponseOfLoginData, EntityResponseOfReportDefinition, EntityResponseOfRule, EntityResponseOfSchedule, EntityResponseOfScheduledReport, EntityResponseOfSearchDefinition, EntityResponseOfSearchEvent, EntityResponseOfSearchStatus, EntityResponseOfSensor, EntityResponseOfSensorAnalysisResults, EntityResponseOfSensorAnomalyInfo, EntityResponseOfSensorStatus, EntityResponseOfSensorStatusTimeSeries, EntityResponseOfTreeNode, EntityResponseOfUser, EntityResponseOfUserAccountInfo, Event, EventCountDataPoint, EventCountTimeSeries, EventIdRequest, EventIdsRequest, EventStatistics, EventStatusCode, EventsService, EventsServiceCreateRequest, EventsServiceExportRequest, EventsServiceFindInAreaRequest, EventsServiceFindRequest, EventsServiceSetClipPathRequest, EventsServiceSetImagePathRequest, EventsServiceSetStatusRequest, EventsServiceStatisticsRequest, EventsSocketServiceOpen, Feature, FeatureCode, FeatureIdRequest, FeatureIdsRequest, FeaturesGroup, FeaturesGroupIdRequest, FeaturesGroupIdsRequest, FeaturesGroupsServiceCreateRequest, FeaturesGroupsServiceFindRequest, FeaturesGroupsServiceSetFeaturesRequest, FeaturesGroupsServiceSetNameRequest, FeaturesGroupsServiceUpdateRequest, FeaturesServiceCreateRequest, FeaturesServiceFindRequest, FeaturesServiceUpdateRequest, FilteredEventsSocketServiceOpen, Folder, FolderIdRequest, FolderIdsRequest, FoldersService, FoldersServiceChangeGeoAreaRequest, FoldersServiceChangeGeoLocationRequest, FoldersServiceChangeNameRequest, FoldersServiceChangeParentRequest, FoldersServiceChangeTimezoneRequest, FoldersServiceCreateRequest, FoldersServiceExportRequest, FoldersServiceFindRequest, FoldersServiceGetHierarchyRequest, FovGeoAttributes, GeoCircle, GeoControlPoint, GeoControlPoints, GeoPolygon, GeoReferenceData, GeoReferenceTest, GeoService, GeoServicesReferenceRequest, GeoServicesTransformRequest, HealthCheckService, HealthSocketServiceOpen, IntegrationAction, IntegrationActionCreateRequest, IntegrationActionIdRequest, IntegrationActionIdsRequest, IntegrationActionUpdateRequest, IntegrationActionsFindRequest, IntegrationActionsFolderRequest, IntegrationIdRequest, IntegrationIdsRequest, IntegrationSpec, IntegrationTarget, IntegrationTypeCode, IntegrationsService, IntegrationsServiceCreateRequest, IntegrationsServiceFindRequest, IntegrationsServiceUpdateRequest, License, LineCrossDirectionCode, LoginData, LoginParams, LongTuple, MapClientCode, ObjectColor, ObjectInfo, ObjectInstance, ObjectTypeCode, ObjectTypeNode, OnvifChannel, Point, Preset, ProductTypeCode, QueryResponse, QueryResponseOfAccount, QueryResponseOfAnomalyEventInfo, QueryResponseOfAppliance, QueryResponseOfAuditLog, QueryResponseOfCalendar, QueryResponseOfComponentConfiguration, QueryResponseOfConfiguration, QueryResponseOfConfigurationTemplate, QueryResponseOfConfigurationVersion, QueryResponseOfEvent, QueryResponseOfFolder, QueryResponseOfIntegrationAction, QueryResponseOfIntegrationTarget, QueryResponseOfReportDefinition, QueryResponseOfRule, QueryResponseOfSchedule, QueryResponseOfSearchDefinition, QueryResponseOfSearchEvent, QueryResponseOfSensor, QueryResponseOfSensorAnalysisResults, QueryResponseOfTreeItem, QueryResponseOfUser, Recurrent, RecurrentTimeFrame, RegisterServiceAccountRequest, ReportDefinition, ReportIdRequest, ReportIdsRequest, ReportsService, ReportsServiceCreateRequest, ReportsServiceFindRequest, ReportsServiceUpdateRequest, RestUtil, Rule, RuleDefault, RuleIdRequest, RuleIdsRequest, RulePolygon, RuleSpec, RulesService, RulesServiceCreateRequest, RulesServiceExportRequest, RulesServiceFindAnomalyRequest, RulesServiceFindRequest, RulesServiceUpdateRequest, RuntimeStatusCode, Schedule, ScheduleIdRequest, ScheduleIdsRequest, ScheduledReport, ScheduledReportIdRequest, ScheduledReportIdsRequest, ScheduledReportsService, ScheduledReportsServiceCreateRequest, ScheduledReportsServiceFindRequest, ScheduledReportsServiceUpdateRequest, SchedulesService, SchedulesServiceCreateRequest, SchedulesServiceFindRequest, SchedulesServiceFolderIdRequest, SchedulesServiceUpdateRequest, SearchBehavior, SearchColor, SearchDefinition, SearchEvent, SearchEventCountRequest, SearchEventExportRequest, SearchEventFindRequest, SearchEventIdRequest, SearchIdRequest, SearchIdsRequest, SearchObject, SearchScopeCode, SearchService, SearchServiceCreateRequest, SearchServiceExecuteRequest, SearchServiceFindRequest, SearchServiceUpdateRequest, SearchSession, SearchSessionIdRequest, SearchShape, SearchStatus, SearchTimeCode, Sensitivity, Sensor, SensorAnalysisIdRequest, SensorAnalysisResults, SensorAnomalyInfo, SensorAnomalyRuleInfo, SensorConfigChangeMask, SensorDebugInfo, SensorIdRequest, SensorIdsRequest, SensorInfo, SensorResolutionCode, SensorStateMask, SensorStatus, SensorStatusCode, SensorStatusTimeSeries, SensorStatusTimestamped, SensorTypeCode, SensorsCountRequest, SensorsGroup, SensorsService, SensorsServiceAttachRequest, SensorsServiceBulkCreateRequest, SensorsServiceChangeFolderRequest, SensorsServiceChangeFovRequest, SensorsServiceChangeGeoLocationRequest, SensorsServiceChangeNameRequest, SensorsServiceChangeStatusRequest, SensorsServiceCreateRequest, SensorsServiceExportRequest, SensorsServiceFindRequest, SensorsServiceSetRefImageRequest, SensorsServiceStatusOvertimeRequest, SensorsServiceUpdateRequest, ServiceAccountRegistration, Services, SeverityTypeCode, SocketEventNotification, SocketHealthStatusNotification, StreamResponse, StreamTypeCode, StringIntValue, StringKeyValue, SysAccountExportRequest, SysAccountImportRequest, SysAccountsService, SysApplianceGetLogsRequest, SysAppliancesCountRequest, SysAppliancesService, SysAppliancesServiceFindRequest, SysAppliancesServiceGetCommandsRequest, SysConfigurationsService, SysConfigurationsServiceCreateRequest, SysConfigurationsServiceCreateTemplateRequest, SysConfigurationsServiceCreateVersionRequest, SysConfigurationsServiceDeleteVersionRequest, SysConfigurationsServiceFindRequest, SysConfigurationsServiceFindTemplateRequest, SysConfigurationsServiceUpdateRequest, SysConfigurationsServiceUpdateTemplateRequest, SysConfigurationsServiceUpdateVersionRequest, SysEventIdRequest, SysEventsService, SysEventsServiceFindInAreaRequest, SysEventsServiceStatisticsRequest, SysFeaturesGroupsService, SysFeaturesService, SysKeysService, SysKeysServiceCreateApiKeyRequest, SysKeysServiceCreatePasswordRequest, SysKeysServiceCreateTokenRequest, SysSensorsCountRequest, SysSensorsService, SysSensorsServiceFindRequest, SysSystemService, SysUsersService, TimeFrame, TimeUnitCode, TokenRequest, TransformationTypeCode, TreeItem, TreeNode, UpdateStatus, User, UserAccountInfo, UserByEmailRequest, UserIdRequest, UserIdsRequest, UserInvitation, UserRegistration, UserService, UserServiceChangeMobileRequest, UserServiceChangeNameRequest, UserServiceChangePasswordRequest, UserServiceCheckPasswordRequest, UserServiceLoginRequest, UserServiceResetPasswordRequest, UserServiceSendVerificationRequest, UserServiceSwitchAccountRequest, UserServiceVerifyLoginRequest, UserStatusCode, UserTypeCode, UsersService, UsersServiceChangeDefaultAccountRequest, UsersServiceChangeMobileRequest, UsersServiceChangeNameRequest, UsersServiceChangeRoleRequest, UsersServiceChangeStatusRequest, UsersServiceChangeTypeRequest, UsersServiceCreateRequest, UsersServiceExportRequest, UsersServiceFindRequest, UsersServiceInviteRequest, UsersServiceSetRolesRequest, UsersServiceUpdateRequest, Verification, VisualQualityCode, WebSocketMessageHeader, ZoneTypeCode, getToken, removeToken, setToken };
//# sourceMappingURL=agentvi-ng-core-lib.js.map
