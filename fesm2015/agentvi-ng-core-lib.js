import * as i0 from '@angular/core';
import { Injectable, Inject, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpRequest, HttpClientModule } from '@angular/common/http';
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
    constructor(retentionDays, objectColors, ruleColor, maskColor, enableAnomalyByDefault, dateFormat, dateTimeFormat, playerSourceUri, eventClipLengthSec) {
        this.retentionDays = retentionDays;
        this.objectColors = objectColors;
        this.ruleColor = ruleColor;
        this.maskColor = maskColor;
        this.enableAnomalyByDefault = enableAnomalyByDefault;
        this.dateFormat = dateFormat;
        this.dateTimeFormat = dateTimeFormat;
        this.playerSourceUri = playerSourceUri;
        this.eventClipLengthSec = eventClipLengthSec;
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
   A single entry in appliance configuration report that lists all the devices in the system with their desired vs. actual configuration
*/
class ApplianceConfigReport {
    constructor(accountId, accountName, accountType, applianceId, applianceName, machineId, groups, configId, versionId, actualConfigId, actualVersionId) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.accountType = accountType;
        this.applianceId = applianceId;
        this.applianceName = applianceName;
        this.machineId = machineId;
        this.groups = groups;
        this.configId = configId;
        this.versionId = versionId;
        this.actualConfigId = actualConfigId;
        this.actualVersionId = actualVersionId;
    }
}

/*
   Appliance configuration version
*/
class ApplianceConfigVersion {
    constructor(versionId, description) {
        this.versionId = versionId;
        this.description = description;
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
    constructor(cpuAvg, cpuMax, ram, loadAvg, uploadSpeed, downloadSpeed) {
        this.cpuAvg = cpuAvg;
        this.cpuMax = cpuMax;
        this.ram = ram;
        this.loadAvg = loadAvg;
        this.uploadSpeed = uploadSpeed;
        this.downloadSpeed = downloadSpeed;
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
   Appliance log entries batch sent by the device manager
*/
class ApplianceLogBatch {
    constructor(containerId, containerName, containerTag, versionId, logs) {
        this.containerId = containerId;
        this.containerName = containerName;
        this.containerTag = containerTag;
        this.versionId = versionId;
        this.logs = logs;
    }
}

/*
   Flatten appliance log entry to store as a single document in the elastic search
*/
class ApplianceLogEntry {
    constructor(id, accountId, applianceId, containerId, containerName, containerTag, versionId, severity, timestamp, textPayload) {
        this.id = id;
        this.accountId = accountId;
        this.applianceId = applianceId;
        this.containerId = containerId;
        this.containerName = containerName;
        this.containerTag = containerTag;
        this.versionId = versionId;
        this.severity = severity;
        this.timestamp = timestamp;
        this.textPayload = textPayload;
    }
}

/*
   Appliance registration info
   This model is used when a user registers new appliance in the system
*/
class ApplianceRegistration {
    constructor(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId, deviceProfileId) {
        this.name = name;
        this.accountId = accountId;
        this.folderId = folderId;
        this.machineId = machineId;
        this.productType = productType;
        this.configurationId = configurationId;
        this.configurationVersionId = configurationVersionId;
        this.deviceProfileId = deviceProfileId;
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
   Attribute
*/
class Attribute {
    constructor(name, type, valueString, valueInt, valueBool) {
        this.name = name;
        this.type = type;
        this.valueString = valueString;
        this.valueInt = valueInt;
        this.valueBool = valueBool;
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
   Edge Event Image
*/
class EdgeEventImage {
    constructor(jpg, ts) {
        this.jpg = jpg;
        this.ts = ts;
    }
}

/*
   Edge Event Info
*/
class EdgeEventInfo {
    constructor(behaviorType, clipPeriod, description, eventBboxes, eventId, eventImageTime, eventObjects, eventTime, eventType, externalId, jpegBuffers, objectType, ruleId, sensorId, severity) {
        this.behaviorType = behaviorType;
        this.clipPeriod = clipPeriod;
        this.description = description;
        this.eventBboxes = eventBboxes;
        this.eventId = eventId;
        this.eventImageTime = eventImageTime;
        this.eventObjects = eventObjects;
        this.eventTime = eventTime;
        this.eventType = eventType;
        this.externalId = externalId;
        this.jpegBuffers = jpegBuffers;
        this.objectType = objectType;
        this.ruleId = ruleId;
        this.sensorId = sensorId;
        this.severity = severity;
    }
}

/*
   Edge Event Info message body
*/
class EdgeEventInfoBody {
    constructor(eventInfo) {
        this.eventInfo = eventInfo;
    }
}

/*
   Edge Raw event info message
*/
class EdgeEventInfoMessage {
    constructor(id, op, ver, body) {
        this.id = id;
        this.op = op;
        this.ver = ver;
        this.body = body;
    }
}

/*
   Edge Event Object
*/
class EdgeEventObject {
    constructor(objectId, objectHistory) {
        this.objectId = objectId;
        this.objectHistory = objectHistory;
    }
}

/*
   Edge Metadata
*/
class EdgeMetadata {
    constructor(accountId, sensorId, objects) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.objects = objects;
    }
}

/*
   Edge Metadata message body
*/
class EdgeMetadataBody {
    constructor(md) {
        this.md = md;
    }
}

/*
   Edge Metadata message
*/
class EdgeMetadataMessage {
    constructor(id, op, ver, body) {
        this.id = id;
        this.op = op;
        this.ver = ver;
        this.body = body;
    }
}

/*
   Metadata object color description
*/
class Embedding {
    constructor(version, data) {
        this.version = version;
        this.data = data;
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
   Extended custom model results
*/
class ExternalModelResults {
    constructor(modelName, attributes, boundingBox, embedding, keypoints) {
        this.modelName = modelName;
        this.attributes = attributes;
        this.boundingBox = boundingBox;
        this.embedding = embedding;
        this.keypoints = keypoints;
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
   Health thresholds specifications for sensor and appliances
*/
class HealthThresholds {
    constructor(isActive, sensorsThresholds, applianceThresholds) {
        this.isActive = isActive;
        this.sensorsThresholds = sensorsThresholds;
        this.applianceThresholds = applianceThresholds;
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
    constructor(accessToken, accountRole, permissions, userId, userName, userEmail, userType, userStatus, changePassword, acceptedEula, platformType) {
        this.accessToken = accessToken;
        this.accountRole = accountRole;
        this.permissions = permissions;
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userType = userType;
        this.userStatus = userStatus;
        this.changePassword = changePassword;
        this.acceptedEula = acceptedEula;
        this.platformType = platformType;
    }
}

/*
   Login parameters data model
*/
class LoginParams {
    constructor(email, password, accessToken, platformType) {
        this.email = email;
        this.password = password;
        this.accessToken = accessToken;
        this.platformType = platformType;
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
   Account member registration data model - used by self registered users
*/
class MemberRegistration {
    constructor(accountId, name, email, mobile, role, groups, tempPassword, changePassword, verifyByEmail, description) {
        this.accountId = accountId;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        this.groups = groups;
        this.tempPassword = tempPassword;
        this.changePassword = changePassword;
        this.verifyByEmail = verifyByEmail;
        this.description = description;
    }
}

/*
   Referenced object data for similarity search
*/
class ModelAttributes {
    constructor(modelName, attributes) {
        this.modelName = modelName;
        this.attributes = attributes;
    }
}

/*
   Metadata object color description
*/
class ObjectColor {
    constructor(colorType, primaryColor, primaryConf, secondaryColor, secondaryConf) {
        this.colorType = colorType;
        this.primaryColor = primaryColor;
        this.primaryConf = primaryConf;
        this.secondaryColor = secondaryColor;
        this.secondaryConf = secondaryConf;
    }
}

/*
   Referenced object data for similarity search
*/
class ObjectData {
    constructor(objectId, sensorId, timestamp) {
        this.objectId = objectId;
        this.sensorId = sensorId;
        this.timestamp = timestamp;
    }
}

/*
   Object Metadata info
*/
class ObjectInfo {
    constructor(objectId, sensorId, accountId, birthTime, objectHistory) {
        this.objectId = objectId;
        this.sensorId = sensorId;
        this.accountId = accountId;
        this.birthTime = birthTime;
        this.objectHistory = objectHistory;
    }
}

/*
   Metadata object instance info
   One instance of the object in the scene
*/
class ObjectInstance {
    constructor(timestamp, objectType, confidence, isStopped, colors, direction, dimension, boundingBox, speed, size, position, location, externalModelResults) {
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
        this.externalModelResults = externalModelResults;
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
   Specific report by object typeis generated by statistic rule
*/
class ObjectTypeReport {
    constructor(objectType, crossingDir, count, avgSpeed) {
        this.objectType = objectType;
        this.crossingDir = crossingDir;
        this.count = count;
        this.avgSpeed = avgSpeed;
    }
}

/*
   Set of actions allowed on folder path
*/
class Permission {
    constructor(path, perm) {
        this.path = path;
        this.perm = perm;
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
   Rule default encapsulates boundaries and default values for the Sensitivity Rule parameter
*/
class RuleDefaultSensitivity {
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
    constructor(lineCrossDir, points, color) {
        this.lineCrossDir = lineCrossDir;
        this.points = points;
        this.color = color;
    }
}

/*
   Rule specification describe rule parameters
*/
class RuleSpec {
    constructor(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, minSpeed, peopleInGroup, clusterDistance, intervalTime, referenceCrop, objectHierarchy, sensorTypes, externalModel, viewTypes, excludeObjectTypes, autoSensitivity, sensitivity) {
        this.behaviorType = behaviorType;
        this.ruleTypeName = ruleTypeName;
        this.objectTypes = objectTypes;
        this.isLineDrawing = isLineDrawing;
        this.dwellTime = dwellTime;
        this.minSpeed = minSpeed;
        this.peopleInGroup = peopleInGroup;
        this.clusterDistance = clusterDistance;
        this.intervalTime = intervalTime;
        this.referenceCrop = referenceCrop;
        this.objectHierarchy = objectHierarchy;
        this.sensorTypes = sensorTypes;
        this.externalModel = externalModel;
        this.viewTypes = viewTypes;
        this.excludeObjectTypes = excludeObjectTypes;
        this.autoSensitivity = autoSensitivity;
        this.sensitivity = sensitivity;
    }
}

/*
   Search behavior description
*/
class SearchBehavior {
    constructor(behaviorType, dwellTime, minSpeed, minObjectsInGroup, clusterDistance, shapes) {
        this.behaviorType = behaviorType;
        this.dwellTime = dwellTime;
        this.minSpeed = minSpeed;
        this.minObjectsInGroup = minObjectsInGroup;
        this.clusterDistance = clusterDistance;
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
   Object attributes to search for
*/
class SearchObject {
    constructor(type, colors, objectData, externalModelResults) {
        this.type = type;
        this.colors = colors;
        this.objectData = objectData;
        this.externalModelResults = externalModelResults;
    }
}

/*
   Search shape definition for Sensors or GEO search
*/
class SearchShape extends RulePolygon {
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
    constructor(active, sensitivity, objectTypes, createImage, createClip) {
        this.active = active;
        this.sensitivity = sensitivity;
        this.objectTypes = objectTypes;
        this.createImage = createImage;
        this.createClip = createClip;
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
    constructor(name, type, streamType, imageResolution, recording, metadata, anomalyDetection, alarmInterval, maxBBoxPerFrame, maxFrameRate, streamUri, geoLocation, azimuth, fovAttributes, externalId, tags, debugInfo, viewType) {
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
        this.viewType = viewType;
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
   An item in the sensors usage report's sensors list
*/
class SensorUsageReport {
    constructor(key, minutes, billable) {
        this.key = key;
        this.minutes = minutes;
        this.billable = billable;
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
   Statistic report record (generated by statistic rule periodically)
*/
class StatisticReport {
    constructor(accountId, sensorId, ruleId, behaviorType, reportIntervalStart, reportIntervalEnd, totalCount, avgTimeBetween, avgSpeed, reportDetails) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.ruleId = ruleId;
        this.behaviorType = behaviorType;
        this.reportIntervalStart = reportIntervalStart;
        this.reportIntervalEnd = reportIntervalEnd;
        this.totalCount = totalCount;
        this.avgTimeBetween = avgTimeBetween;
        this.avgSpeed = avgSpeed;
        this.reportDetails = reportDetails;
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
   Threshold defines how long [in minutes] a sensor/device should be in a state (other than OK) before generating health alert
   and how much time [in hours] to re-generate health alert (after the previous one) if the status was not changed
*/
class Threshold {
    constructor(notification, repeatInterval) {
        this.notification = notification;
        this.repeatInterval = repeatInterval;
    }
}

/*
   Thresholds list warning state (yellow) and error state (red) health thresholds
*/
class Thresholds {
    constructor(warningThreshold, errorThreshold) {
        this.warningThreshold = warningThreshold;
        this.errorThreshold = errorThreshold;
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
   Time slot (for rule scheduling)
*/
class TimeSlot {
    constructor(from, to, inactive) {
        this.from = from;
        this.to = to;
        this.inactive = inactive;
    }
}

/*
   Timeline (for sensor rule scheduling)
*/
class Timeline {
    constructor(from, to, slots) {
        this.from = from;
        this.to = to;
        this.slots = slots;
    }
}

/*
   Cropped object image with timestamp and bounding box
*/
class TimestampedCrop {
    constructor(objectId, timestamp, boundingBox, jpeg) {
        this.objectId = objectId;
        this.timestamp = timestamp;
        this.boundingBox = boundingBox;
        this.jpeg = jpeg;
    }
}

/*
   List of timestamped crops with background image
*/
class TimestampedCropsData {
    constructor(sensorId, bg, crops) {
        this.sensorId = sensorId;
        this.bg = bg;
        this.crops = crops;
    }
}

/*
   Image of frame or crop with timestamp
*/
class TimestampedImage {
    constructor(timestamp, jpeg) {
        this.timestamp = timestamp;
        this.jpeg = jpeg;
    }
}

/*
   Tree item for account hierarchy tree
*/
class TreeItem {
    constructor(itemId, type, name, typeName, status, shunt, scheduleId, active, behaviorType) {
        this.itemId = itemId;
        this.type = type;
        this.name = name;
        this.typeName = typeName;
        this.status = status;
        this.shunt = shunt;
        this.scheduleId = scheduleId;
        this.active = active;
        this.behaviorType = behaviorType;
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
    constructor(account, loginData, features, licenseExpiresOn) {
        this.account = account;
        this.loginData = loginData;
        this.features = features;
        this.licenseExpiresOn = licenseExpiresOn;
    }
}

/*
   User invitation data model - used by account admin to invite user to the account
*/
class UserInvitation {
    constructor(email, role, groups) {
        this.email = email;
        this.role = role;
        this.groups = groups;
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
*/
class UpdateScheduleForRules {
    constructor(ids, scheduleId) {
        this.ids = ids;
        this.scheduleId = scheduleId;
    }
}

/*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
class BaseEntity {
    constructor(id, docType, createdOn, updatedOn, path) {
        this.id = id;
        this._type = docType;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.path = path;
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
   Agent status - reported periodically by the agent
*/
class AgentStatus extends BaseEntity {
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
    constructor(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion, profileId, errors, uploadSpeed, downloadSpeed, speedTestedOn, endpoints) {
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
        this.profileId = profileId;
        this.errors = errors;
        this.uploadSpeed = uploadSpeed;
        this.downloadSpeed = downloadSpeed;
        this.speedTestedOn = speedTestedOn;
        this.endpoints = endpoints;
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
   Appliance Profile entity describes custom device profile to override package configuration variables for specific use cases
*/
class ApplianceProfile extends BaseEntity {
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
   Case event objects is extended Search Event with the list of all the event objects timestamped crops
*/
class CaseEventObjects extends BaseEntity {
}

/*
   Case entity represents investigation case to collect related search events
*/
class CaseInfo extends BaseEntity {
}

/*
   SW Component version type
*/
class ComponentConfiguration {
    constructor(id, component, dockerImage, variables, mounts, labels, status) {
        this.id = id;
        this.component = component;
        this.dockerImage = dockerImage;
        this.variables = variables;
        this.mounts = mounts;
        this.labels = labels;
        this.status = status;
    }
}

/*
   SW Component variables
*/
class ComponentVariables {
    constructor(component, variables, mounts) {
        this.component = component;
        this.variables = variables;
        this.mounts = mounts;
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
   Detection model configuration
*/
class DetectionModel extends BaseEntity {
}

/*
   Digital IO type
   Digital IO connection URI should be in the RFC-6570 format which includes schema, credentials, host, port and additional parameters as query string params
*/
class DigitalIO extends BaseEntity {
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
*/
class FindUser {
    constructor(id, name, email, mobile, type, status, lastSignIn, accountRoles, defaultAccount, description) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.type = type;
        this.status = status;
        this.lastSignIn = lastSignIn;
        this.accountRoles = accountRoles;
        this.defaultAccount = defaultAccount;
        this.description = description;
    }
}

/*
*/
class FindUserAccountRole {
    constructor(accountId, accountName, role) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.role = role;
    }
}

/*
   Folder (container for sensors and sub folders)
*/
class Folder extends BaseEntity {
}

/*
   Group is set of folders permissions
*/
class Group extends BaseEntity {
}

/*
   Health event type (combines multiple health events: sensor health event, appliance health event...)
*/
class HealthEvent extends BaseEntity {
}

/*
*/
class HeatmapCell {
    constructor(col, objectsCount) {
        this.col = col;
        this.objectsCount = objectsCount;
    }
}

/*
*/
class HeatmapRow {
    constructor(row, cells) {
        this.row = row;
        this.cells = cells;
    }
}

/*
   Integration action describes content details to use for a specific integration target
*/
class IntegrationAction extends BaseEntity {
}

/*
   List of filter criteria for conditional integration action
*/
class IntegrationActionFilter {
    constructor(sensorIds, ruleIds, objectTypes, behaviorTypes, severity, subjectType, subjectStatus, subjectState) {
        this.sensorIds = sensorIds;
        this.ruleIds = ruleIds;
        this.objectTypes = objectTypes;
        this.behaviorTypes = behaviorTypes;
        this.severity = severity;
        this.subjectType = subjectType;
        this.subjectStatus = subjectStatus;
        this.subjectState = subjectState;
    }
}

/*
   Describes status of integration attempt (for events and health integrations)
*/
class IntegrationStatus extends BaseEntity {
}

/*
   Integration target describes connectivity attributes of the integrated system
*/
class IntegrationTarget extends BaseEntity {
}

/*
   JobStatus represents the status of an background creation job (background reports).
*/
class JobStatus extends BaseEntity {
}

/*
   License information includes on-premises deployment's license restrictions
*/
class License extends BaseEntity {
}

/*
   Map one value to another - user for internal-external id mapping
*/
class Mapping extends BaseEntity {
}

/*
   Member combined type (user and user-account)
*/
class Member extends BaseEntity {
}

/*
*/
class ObjectCount {
    constructor(objectType, count) {
        this.objectType = objectType;
        this.count = count;
    }
}

/*
   Represents object type count distribution
*/
class ObjectTypeCount {
    constructor(objectType, count) {
        this.objectType = objectType;
        this.count = count;
    }
}

/*
   Represents a single aggregated path for multiple objects
*/
class ObjectsPath {
    constructor(id, count, path, countPerObjectType, parentClass) {
        this.id = id;
        this.count = count;
        this.path = path;
        this.countPerObjectType = countPerObjectType;
        this.parentClass = parentClass;
    }
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
   Mapping description of digital IO port
*/
class PortMapping {
    constructor(port, isOutput, entityType, entityId, onHigh, onLow, status) {
        this.port = port;
        this.isOutput = isOutput;
        this.entityType = entityType;
        this.entityId = entityId;
        this.onHigh = onHigh;
        this.onLow = onLow;
        this.status = status;
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
   SSH Information for OPEN_SSH command
*/
class SSHInfo {
    constructor(targetUri, privateKey) {
        this.targetUri = targetUri;
        this.privateKey = privateKey;
    }
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
   Search sessions tracking
*/
class SearchSession extends BaseEntity {
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
   Relation table to map list of detection models per sensor
*/
class SensorDetectionModels extends BaseEntity {
}

/*
   Group of object counts in cells of the sensor's field of view
*/
class SensorHeatmap extends BaseEntity {
}

/*
   Group of objects' path aggregations for sensor's field of view
*/
class SensorPaths extends BaseEntity {
}

/*
   Sensor health status
*/
class SensorStatus extends BaseEntity {
}

/*
   Sensor usage type describes the total time (in minutes) per day that the sensor was active (including warning and error) for billing
*/
class SensorUsage extends BaseEntity {
}

/*
   Software update status type
*/
class UpdateStatus extends BaseEntity {
}

/*
   Sensor usage report type for billing
*/
class UsageReport extends BaseEntity {
}

/*
   User type
*/
class User extends BaseEntity {
}

/*
   User-Account relation type
*/
class UserAccount extends BaseEntity {
}

/*
   VMS Gateway type
   VMS connection URI should be in the RFC-6570 format which includes schema, credentials, host, port and additional parameters as query string params
*/
class VMSGateway extends BaseEntity {
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
    // Viewer has read-only permissions [32] 
    AccountRoleCode[AccountRoleCode["VIEWER"] = 32] = "VIEWER";
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
    // Active account for paying customers [4] 
    AccountTypeCode[AccountTypeCode["CUSTOMER"] = 4] = "CUSTOMER";
})(AccountTypeCode || (AccountTypeCode = {}));

/*
   Action Mode code
*/
var ActionModeCode;
(function (ActionModeCode) {
    // Undefined - similar to disabled [0] 
    ActionModeCode[ActionModeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Manual mode [1] 
    ActionModeCode[ActionModeCode["MANUAL"] = 1] = "MANUAL";
    // Auto mode  [2] 
    ActionModeCode[ActionModeCode["AUTO"] = 2] = "AUTO";
})(ActionModeCode || (ActionModeCode = {}));

/*
   Active code
*/
var ActiveCode;
(function (ActiveCode) {
    // Undefined [0] 
    ActiveCode[ActiveCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Active | True | High signal [1] 
    ActiveCode[ActiveCode["ACTIVE"] = 1] = "ACTIVE";
    // Inactive | False |  Low signal  [2] 
    ActiveCode[ActiveCode["INACTIVE"] = 2] = "INACTIVE";
})(ActiveCode || (ActiveCode = {}));

/*
   Agent state mask - the bit mask represents the actual state of the agent as reported by the agent proxy
   Bit mask range:
   OK:		0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
var AgentStateMask;
(function (AgentStateMask) {
    // [OK] Agent is connected and active [0x0] 
    AgentStateMask[AgentStateMask["AGENT_OK"] = 0] = "AGENT_OK";
    // [WARNING] Network high latency (over 2000 ms) for 1 minute or more [0x00000001] 
    AgentStateMask[AgentStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
    // [ERROR] Communication error [0x00010000] 
    AgentStateMask[AgentStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
})(AgentStateMask || (AgentStateMask = {}));

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
    // Start network bandwidth speed test 
    ApplianceCommandCode[ApplianceCommandCode["SPEED_TEST"] = 14] = "SPEED_TEST";
})(ApplianceCommandCode || (ApplianceCommandCode = {}));

/*
   Appliance (device) state mask - the bit mask represents the actual state of the appliance as reported by the device proxy
   Bit mask range:
   OK:		0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
var ApplianceStateMask;
(function (ApplianceStateMask) {
    // [OK] No error [0x0] 
    ApplianceStateMask[ApplianceStateMask["APPLIANCE_OK"] = 0] = "APPLIANCE_OK";
    // [WARNING] Network high latency (over 2000 ms) for 1 minute or more [0x00000001] 
    ApplianceStateMask[ApplianceStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
    // [WARNING] CPU is over 85% for 5 minutes or more [0x00000002] 
    ApplianceStateMask[ApplianceStateMask["HIGH_CPU_WARN"] = 2] = "HIGH_CPU_WARN";
    // [WARNING] RAM consumption is over 85% for 5 minutes or more [0x00000004] 
    ApplianceStateMask[ApplianceStateMask["HIGH_RAM_WARN"] = 4] = "HIGH_RAM_WARN";
    // [ERROR] Communication error [0x00010000] 
    ApplianceStateMask[ApplianceStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
})(ApplianceStateMask || (ApplianceStateMask = {}));

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
   Attributes mask - the bit mask represents the combination of object's attributes
*/
var AttributesMask;
(function (AttributesMask) {
    // Undefined [0] 
    AttributesMask[AttributesMask["UNDEFINED"] = 0] = "UNDEFINED";
    // Unknown Face [65536] 
    AttributesMask[AttributesMask["ATTR_FACE_UNKNOWN"] = 65536] = "ATTR_FACE_UNKNOWN";
    // Face with mask [65792] 
    AttributesMask[AttributesMask["ATTR_FACE_MASK"] = 65792] = "ATTR_FACE_MASK";
    // Unknown gender [131072] 
    AttributesMask[AttributesMask["ATTR_GENDER_UNKNOWN"] = 131072] = "ATTR_GENDER_UNKNOWN";
    // Male [131328] 
    AttributesMask[AttributesMask["ATTR_GENDER_MALE"] = 131328] = "ATTR_GENDER_MALE";
    // Female [131584] 
    AttributesMask[AttributesMask["ATTR_GENDER_FEMALE"] = 131584] = "ATTR_GENDER_FEMALE";
    // Unknown age [196608] 
    AttributesMask[AttributesMask["ATTR_AGE_UNKNOWN"] = 262144] = "ATTR_AGE_UNKNOWN";
    // Age of 0-4 [196864] 
    AttributesMask[AttributesMask["ATTR_AGE_0_4"] = 262400] = "ATTR_AGE_0_4";
    // Age of 4-8 [197120] 
    AttributesMask[AttributesMask["ATTR_AGE_4_8"] = 262656] = "ATTR_AGE_4_8";
    // Age of 8-15 [197632] 
    AttributesMask[AttributesMask["ATTR_AGE_8_15"] = 263168] = "ATTR_AGE_8_15";
    // Age of 15-25 [198656] 
    AttributesMask[AttributesMask["ATTR_AGE_15_25"] = 264192] = "ATTR_AGE_15_25";
    // Age of 25-35 [200704] 
    AttributesMask[AttributesMask["ATTR_AGE_25_35"] = 266240] = "ATTR_AGE_25_35";
    // Age of 35-45 [204800] 
    AttributesMask[AttributesMask["ATTR_AGE_35_45"] = 270336] = "ATTR_AGE_35_45";
    // Age of 45-60 [212992] 
    AttributesMask[AttributesMask["ATTR_AGE_45_60"] = 278528] = "ATTR_AGE_45_60";
    // Age of 60 or more [229376] 
    AttributesMask[AttributesMask["ATTR_AGE_60_PLUS"] = 294912] = "ATTR_AGE_60_PLUS";
})(AttributesMask || (AttributesMask = {}));

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
    // Asset protection 65856 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_ASSET_PROTECTION"] = 65856] = "INNOVI_ASSET_PROTECTION";
    // Traffic statistics report 65857 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_TRAFFIC_STATISTICS"] = 65857] = "INNOVI_TRAFFIC_STATISTICS";
    // Count statistics report 65858 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_COUNT_STATISTICS"] = 65858] = "INNOVI_COUNT_STATISTICS";
    // Counter flow 65859 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_COUNTER_FLOW"] = 65859] = "INNOVI_COUNTER_FLOW";
    // Ignore Mask 66049 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_IGNORE"] = 66049] = "INNOVI_MASK_IGNORE";
    // Shutdown Mask 66050 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_SHUTDOWN"] = 66050] = "INNOVI_MASK_SHUTDOWN";
    // General Anomaly 66560 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_ANOMALY"] = 66560] = "INNOVI_ANOMALY";
    // Similar Object 67584 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_SIMILARITY"] = 67584] = "INNOVI_SIMILARITY";
    // Smoke and Fire 67585 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_SMOKEANDFIRE"] = 67585] = "INNOVI_SMOKEANDFIRE";
    // 65860 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_SLIP_AND_FALL"] = 65860] = "INNOVI_SLIP_AND_FALL";
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
    // Command is pending in the device command list  [1] 
    CommandStatusCode[CommandStatusCode["PENDING"] = 1] = "PENDING";
    // Command was accepted by the device manager [2] 
    CommandStatusCode[CommandStatusCode["EXECUTING"] = 2] = "EXECUTING";
    // Command executed successfully [3] 
    CommandStatusCode[CommandStatusCode["COMPLETED"] = 3] = "COMPLETED";
    // Command execution failed [4] 
    CommandStatusCode[CommandStatusCode["FAILED"] = 4] = "FAILED";
    // Command was sent from the command queue to the device manager [5] 
    CommandStatusCode[CommandStatusCode["SENT"] = 5] = "SENT";
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
   Digital IO state mask - the bit mask represents the actual state of the device as reported by the device proxy
   Bit mask range:
   OK:			0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
var DigitalIOStateMask;
(function (DigitalIOStateMask) {
    // [OK] Digital IO device is connected and active' [0x0] 
    DigitalIOStateMask[DigitalIOStateMask["DEVICE_OK"] = 0] = "DEVICE_OK";
    // [WARNING] Network high latency [0x00000001] 
    DigitalIOStateMask[DigitalIOStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
    // [ERROR] DigitalIO device gateway not connected [0x00010000] 
    DigitalIOStateMask[DigitalIOStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
    // [ERROR] DigitalIO device gateway has no connection to the physical device [0x00011000] 
    DigitalIOStateMask[DigitalIOStateMask["NO_DEVICE_ERROR"] = 69632] = "NO_DEVICE_ERROR";
    // [ERROR] DigitalIO device configuration error [0x00011100] 
    DigitalIOStateMask[DigitalIOStateMask["DEVICE_CONFIG_ERROR"] = 69888] = "DEVICE_CONFIG_ERROR";
})(DigitalIOStateMask || (DigitalIOStateMask = {}));

/*
   DigitalIO device status code
*/
var DigitalIOStatusCode;
(function (DigitalIOStatusCode) {
    // Undefined [0] 
    DigitalIOStatusCode[DigitalIOStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // DigitalIO device gateway is configured but not yet connected [1] 
    DigitalIOStatusCode[DigitalIOStatusCode["PENDING"] = 1] = "PENDING";
    // DigitalIO device gateway is connected to the proxy and to the device [2] 
    DigitalIOStatusCode[DigitalIOStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // DigitalIO device gateway in warning state (high latency) [3] 
    DigitalIOStatusCode[DigitalIOStatusCode["WARNING"] = 3] = "WARNING";
    // DigitalIO device gateway in error state [4] 
    DigitalIOStatusCode[DigitalIOStatusCode["ERROR"] = 4] = "ERROR";
})(DigitalIOStatusCode || (DigitalIOStatusCode = {}));

/*
   Entity type code (represent entity type in the system)
*/
var EntityTypeCode;
(function (EntityTypeCode) {
    // Undefined [0] 
    EntityTypeCode[EntityTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Account [1] 
    EntityTypeCode[EntityTypeCode["ACCOUNT"] = 1] = "ACCOUNT";
    // Agent [10] 
    EntityTypeCode[EntityTypeCode["AGENT"] = 10] = "AGENT";
    // Agent Status [11] 
    EntityTypeCode[EntityTypeCode["AGENT_STATUE"] = 11] = "AGENT_STATUE";
    // API Key [20] 
    EntityTypeCode[EntityTypeCode["API_KEY"] = 20] = "API_KEY";
    // Appliance / Edge device [30] 
    EntityTypeCode[EntityTypeCode["APPLIANCE"] = 30] = "APPLIANCE";
    // Appliance Status [31] 
    EntityTypeCode[EntityTypeCode["APPLIANCE_COMMAND"] = 31] = "APPLIANCE_COMMAND";
    // Appliance Status [32] 
    EntityTypeCode[EntityTypeCode["APPLIANCE_PROFILE"] = 32] = "APPLIANCE_PROFILE";
    // Appliance Status [33] 
    EntityTypeCode[EntityTypeCode["APPLIANCE_STATUS"] = 33] = "APPLIANCE_STATUS";
    // Calendar [40] 
    EntityTypeCode[EntityTypeCode["CALENDAR"] = 40] = "CALENDAR";
    // Case [45] 
    EntityTypeCode[EntityTypeCode["CASE"] = 45] = "CASE";
    // Configuration [50] 
    EntityTypeCode[EntityTypeCode["CONFIGURATION"] = 50] = "CONFIGURATION";
    // Configuration Template [51] 
    EntityTypeCode[EntityTypeCode["CONFIGURATION_TEMPLATE"] = 51] = "CONFIGURATION_TEMPLATE";
    // Configuration Version [52] 
    EntityTypeCode[EntityTypeCode["CONFIGURATION_VERSION"] = 52] = "CONFIGURATION_VERSION";
    // Detection Model [55] 
    EntityTypeCode[EntityTypeCode["DETECTION_MODEL"] = 55] = "DETECTION_MODEL";
    // Digital IO device [60] 
    EntityTypeCode[EntityTypeCode["DIGITAL_IO"] = 60] = "DIGITAL_IO";
    // Detection Event [65] 
    EntityTypeCode[EntityTypeCode["EVENT"] = 65] = "EVENT";
    // Feature [70] 
    EntityTypeCode[EntityTypeCode["FEATURE"] = 70] = "FEATURE";
    // Features Group [71] 
    EntityTypeCode[EntityTypeCode["FEATURES_GROUP"] = 71] = "FEATURES_GROUP";
    // Folder [80] 
    EntityTypeCode[EntityTypeCode["FOLDER"] = 80] = "FOLDER";
    // Security Group [85] 
    EntityTypeCode[EntityTypeCode["GROUP"] = 85] = "GROUP";
    // Health Event [90] 
    EntityTypeCode[EntityTypeCode["HEALTH_EVENT"] = 90] = "HEALTH_EVENT";
    // Integration Action [100] 
    EntityTypeCode[EntityTypeCode["INTEGRATION_ACTION"] = 100] = "INTEGRATION_ACTION";
    // Integration Action [101] 
    EntityTypeCode[EntityTypeCode["INTEGRATION_TARGET"] = 101] = "INTEGRATION_TARGET";
    // Integration Status [102] 
    EntityTypeCode[EntityTypeCode["INTEGRATION_STATUS"] = 102] = "INTEGRATION_STATUS";
    // License [110] 
    EntityTypeCode[EntityTypeCode["LICENSE"] = 110] = "LICENSE";
    // Report Definition [120] 
    EntityTypeCode[EntityTypeCode["REPORT_DEFINITION"] = 120] = "REPORT_DEFINITION";
    // Rule [130] 
    EntityTypeCode[EntityTypeCode["RULE"] = 130] = "RULE";
    // Schedule [140] 
    EntityTypeCode[EntityTypeCode["SCHEDULE"] = 140] = "SCHEDULE";
    // Scheduled Report [141] 
    EntityTypeCode[EntityTypeCode["SCHEDULED_REPORT"] = 141] = "SCHEDULED_REPORT";
    // Search Definition [150] 
    EntityTypeCode[EntityTypeCode["SEARCH_DEFINITION"] = 150] = "SEARCH_DEFINITION";
    // Search Event [155] 
    EntityTypeCode[EntityTypeCode["SEARCH_EVENT"] = 155] = "SEARCH_EVENT";
    // Sensor [160] 
    EntityTypeCode[EntityTypeCode["SENSOR"] = 160] = "SENSOR";
    // Sensor Status [161] 
    EntityTypeCode[EntityTypeCode["SENSOR_STATUS"] = 161] = "SENSOR_STATUS";
    // User [170] 
    EntityTypeCode[EntityTypeCode["USER"] = 170] = "USER";
    // VMS Gateway service [180] 
    EntityTypeCode[EntityTypeCode["VMS_GATEWAY"] = 180] = "VMS_GATEWAY";
})(EntityTypeCode || (EntityTypeCode = {}));

/*
   List of system error codes
*/
var ErrorCode;
(function (ErrorCode) {
    // Success (No Error) 
    ErrorCode[ErrorCode["SUCCESS"] = 0] = "SUCCESS";
    // Unexpected general error 
    ErrorCode[ErrorCode["UnexpectedError"] = 1] = "UnexpectedError";
    // Not Implemented 
    ErrorCode[ErrorCode["NotImplementedError"] = 2] = "NotImplementedError";
    // Database connection failed 
    ErrorCode[ErrorCode["DbErrConnectionFailed"] = 105] = "DbErrConnectionFailed";
    // Database general error 
    ErrorCode[ErrorCode["DbErr"] = 100] = "DbErr";
    // No records fetched 
    ErrorCode[ErrorCode["DbErrNoRowsFetched"] = 101] = "DbErrNoRowsFetched";
    // No records affected 
    ErrorCode[ErrorCode["DbErrNoRowsAffected"] = 102] = "DbErrNoRowsAffected";
    // Trying to insert record with duplicate key 
    ErrorCode[ErrorCode["DbErrDuplicateKey"] = 103] = "DbErrDuplicateKey";
    // Trying to save entity with empty Id 
    ErrorCode[ErrorCode["DbAppErrEmptyEntityIdPassed"] = 104] = "DbAppErrEmptyEntityIdPassed";
    // Elasticsearch connection failed 
    ErrorCode[ErrorCode["ElasticConnectionFailed"] = 120] = "ElasticConnectionFailed";
    // Elasticsearch general error 
    ErrorCode[ErrorCode["ElasticErr"] = 121] = "ElasticErr";
    // Redis general error 
    ErrorCode[ErrorCode["RedisErr"] = 200] = "RedisErr";
    // Redis connection failed 
    ErrorCode[ErrorCode["RedisErrConnectionFailed"] = 201] = "RedisErrConnectionFailed";
    // HSet key operation error 
    ErrorCode[ErrorCode["RedisErrHSet"] = 202] = "RedisErrHSet";
    // HGet key operation error 
    ErrorCode[ErrorCode["RedisErrHGet"] = 203] = "RedisErrHGet";
    // No ping to Redis 
    ErrorCode[ErrorCode["RedisErrPing"] = 204] = "RedisErrPing";
    // HSet with expiration error 
    ErrorCode[ErrorCode["RedisErrHSetWithExp"] = 205] = "RedisErrHSetWithExp";
    // HDel operation error 
    ErrorCode[ErrorCode["RedisErrHDel"] = 206] = "RedisErrHDel";
    // RPop operation error 
    ErrorCode[ErrorCode["RedisErrRPop"] = 207] = "RedisErrRPop";
    // RPush operation error 
    ErrorCode[ErrorCode["RedisErrRPush"] = 208] = "RedisErrRPush";
    // Publish operation error 
    ErrorCode[ErrorCode["RedisErrPublish"] = 209] = "RedisErrPublish";
    // Get All operation error 
    ErrorCode[ErrorCode["RedisErrHGetAll"] = 210] = "RedisErrHGetAll";
    // Flush All operation error 
    ErrorCode[ErrorCode["RedisErrFlushAll"] = 211] = "RedisErrFlushAll";
    // BRPop operation error 
    ErrorCode[ErrorCode["RedisErrBRPop"] = 212] = "RedisErrBRPop";
    // Set Key operation error 
    ErrorCode[ErrorCode["RedisErrSetKey"] = 213] = "RedisErrSetKey";
    // Get key operation error 
    ErrorCode[ErrorCode["RedisErrGetKey"] = 214] = "RedisErrGetKey";
    // Del key operation error 
    ErrorCode[ErrorCode["RedisErrDelKey"] = 215] = "RedisErrDelKey";
    // MGet Key operation error 
    ErrorCode[ErrorCode["RedisErrMGetKey"] = 216] = "RedisErrMGetKey";
    // Key already exists 
    ErrorCode[ErrorCode["RedisErrExistsKey"] = 217] = "RedisErrExistsKey";
    // HKey already exists 
    ErrorCode[ErrorCode["RedisErrHExistsKey"] = 218] = "RedisErrHExistsKey";
    // HSet NX operation error 
    ErrorCode[ErrorCode["RedisErrHSetNXKey"] = 219] = "RedisErrHSetNXKey";
    // HKeys operation error 
    ErrorCode[ErrorCode["RedisErrHKeysKey"] = 220] = "RedisErrHKeysKey";
    // Mail URI error 
    ErrorCode[ErrorCode["MailUriError"] = 230] = "MailUriError";
    // Rest mail client error 
    ErrorCode[ErrorCode["MailRestSendError"] = 238] = "MailRestSendError";
    // SMTP mail client error 
    ErrorCode[ErrorCode["MailSmtpSendError"] = 239] = "MailSmtpSendError";
    // Web socket error 
    ErrorCode[ErrorCode["WebSocketError"] = 240] = "WebSocketError";
    // Export format error (not supported) 
    ErrorCode[ErrorCode["ExportFormatError"] = 250] = "ExportFormatError";
    // Export to JSON error 
    ErrorCode[ErrorCode["ExportJsonError"] = 251] = "ExportJsonError";
    // Export to CSV error 
    ErrorCode[ErrorCode["ExportCsvError"] = 252] = "ExportCsvError";
    // Export to XML error 
    ErrorCode[ErrorCode["ExportXmlError"] = 253] = "ExportXmlError";
    // AWS S3 connection error 
    ErrorCode[ErrorCode["AwsS3NotInitialized"] = 400] = "AwsS3NotInitialized";
    // AWS failed to create session 
    ErrorCode[ErrorCode["AwsCreateSessionErr"] = 401] = "AwsCreateSessionErr";
    // AWS S3 general error 
    ErrorCode[ErrorCode["AwsS3Err"] = 410] = "AwsS3Err";
    // AWS S3 bucket name not provided 
    ErrorCode[ErrorCode["AwsS3NoNameProvidedErr"] = 411] = "AwsS3NoNameProvidedErr";
    // AWS S3 region not provided 
    ErrorCode[ErrorCode["AwsS3NoRegionProvidedErr"] = 412] = "AwsS3NoRegionProvidedErr";
    // AWS S3 wrong credentials 
    ErrorCode[ErrorCode["AwsS3CredentialsErr"] = 413] = "AwsS3CredentialsErr";
    // AWS fail to create pre-signed URL 
    ErrorCode[ErrorCode["AwsFailToPresignUrlError"] = 414] = "AwsFailToPresignUrlError";
    // General Json marshal error 
    ErrorCode[ErrorCode["JsonErr"] = 500] = "JsonErr";
    // General XML error 
    ErrorCode[ErrorCode["XmlErr"] = 501] = "XmlErr";
    // Input parameters error 
    ErrorCode[ErrorCode["BadInput"] = 509] = "BadInput";
    // Error encoding to Base64 
    ErrorCode[ErrorCode["Base64ECodecErr"] = 510] = "Base64ECodecErr";
    // Zlib error 
    ErrorCode[ErrorCode["ZlibErr"] = 520] = "ZlibErr";
    // General IO error 
    ErrorCode[ErrorCode["IoErr"] = 530] = "IoErr";
    // Can't parse URL 
    ErrorCode[ErrorCode["UrlParseErr"] = 540] = "UrlParseErr";
    // AES encryption error 
    ErrorCode[ErrorCode["AESEncryptErr"] = 541] = "AESEncryptErr";
    // No message factory provided 
    ErrorCode[ErrorCode["WsNoMessageFactoryFound"] = 542] = "WsNoMessageFactoryFound";
    // General OS file system error 
    ErrorCode[ErrorCode["OsFileSystemErr"] = 600] = "OsFileSystemErr";
    // Unknown (unsupported) storage type 
    ErrorCode[ErrorCode["UnknownStorageSpecified"] = 601] = "UnknownStorageSpecified";
    // Unknown (unsupported) object storage type 
    ErrorCode[ErrorCode["NoObjectStorageSpecified"] = 602] = "NoObjectStorageSpecified";
    // Can't open temp file 
    ErrorCode[ErrorCode["OpenTempFileForEventImageError"] = 603] = "OpenTempFileForEventImageError";
    // Can't write temp file 
    ErrorCode[ErrorCode["WriteTempFileForEventImageError"] = 604] = "WriteTempFileForEventImageError";
    // File not found 
    ErrorCode[ErrorCode["FileNotFound"] = 605] = "FileNotFound";
    // Can't open file 
    ErrorCode[ErrorCode["OpenFileError"] = 606] = "OpenFileError";
    // Can't write file 
    ErrorCode[ErrorCode["WriteFileError"] = 607] = "WriteFileError";
    // Security token error 
    ErrorCode[ErrorCode["SecurityTokenError"] = 700] = "SecurityTokenError";
    // Security token not provided 
    ErrorCode[ErrorCode["NoSecurityTokenFound"] = 701] = "NoSecurityTokenFound";
    // Empty security token 
    ErrorCode[ErrorCode["EmptySecurityToken"] = 702] = "EmptySecurityToken";
    // Error creating API key 
    ErrorCode[ErrorCode["ErrorCreateApiKey"] = 710] = "ErrorCreateApiKey";
    // Pairing key (for device) not verified 
    ErrorCode[ErrorCode["InvalidPairingKeyVerification"] = -102] = "InvalidPairingKeyVerification";
    // Invalid device pairing key 
    ErrorCode[ErrorCode["InvalidDevicePairingKey"] = 750] = "InvalidDevicePairingKey";
    // Pairing device in progress 
    ErrorCode[ErrorCode["DevicePairingInProgress"] = -701] = "DevicePairingInProgress";
    // Pairing key rejected 
    ErrorCode[ErrorCode["DevicePairingRejected"] = -702] = "DevicePairingRejected";
    // Not a virtual device 
    ErrorCode[ErrorCode["NotVirtualDevice"] = 753] = "NotVirtualDevice";
    // Device has attached sensors 
    ErrorCode[ErrorCode["DeviceHasAssociatedSensors"] = 754] = "DeviceHasAssociatedSensors";
    // Streaming connection error 
    ErrorCode[ErrorCode["StreamConnectError"] = 800] = "StreamConnectError";
    // Streaming topic error 
    ErrorCode[ErrorCode["StreamTopicError"] = 801] = "StreamTopicError";
    // Streaming subscriber error 
    ErrorCode[ErrorCode["StreamSubscriberError"] = 802] = "StreamSubscriberError";
    // Streaming URI not provided 
    ErrorCode[ErrorCode["StreamNoProviderUriSpecified"] = 803] = "StreamNoProviderUriSpecified";
    // Stream PUT error 
    ErrorCode[ErrorCode["StreamPutDataError"] = 850] = "StreamPutDataError";
    // Kafka create producer error 
    ErrorCode[ErrorCode["KafkaCreateProducerError"] = 880] = "KafkaCreateProducerError";
    // Kafka create consumer error 
    ErrorCode[ErrorCode["KafkaCreateConsumerError"] = 881] = "KafkaCreateConsumerError";
    // Kafka get metadata error 
    ErrorCode[ErrorCode["KafkaGetMetadataError"] = 882] = "KafkaGetMetadataError";
    // Kafka read message error 
    ErrorCode[ErrorCode["KafkaReadMessageError"] = 883] = "KafkaReadMessageError";
    // Kafka read message timeout 
    ErrorCode[ErrorCode["KafkaReadMessageTimeout"] = 884] = "KafkaReadMessageTimeout";
    // Decode to JPEG YUV failed 
    ErrorCode[ErrorCode["ImagingDecodeToJpegYUVError"] = 900] = "ImagingDecodeToJpegYUVError";
    // Create image file error 
    ErrorCode[ErrorCode["ImagingCreateImageFileError"] = 901] = "ImagingCreateImageFileError";
    // Encode JPEG error 
    ErrorCode[ErrorCode["ImagingEncodeJpegError"] = 902] = "ImagingEncodeJpegError";
    // Bounding boxes missing 
    ErrorCode[ErrorCode["ImagingNoBoundingBoxes"] = 903] = "ImagingNoBoundingBoxes";
    // Prepare frame for clip error 
    ErrorCode[ErrorCode["ClipErrPrepareFrames"] = 904] = "ClipErrPrepareFrames";
    // Event has no frames 
    ErrorCode[ErrorCode["ClipErrEventHasNoFrames"] = 905] = "ClipErrEventHasNoFrames";
    // Horizontal line error 
    ErrorCode[ErrorCode["ImagingHorizontalLineError"] = 906] = "ImagingHorizontalLineError";
    // Vertical line error 
    ErrorCode[ErrorCode["ImagingVerticalineError"] = 907] = "ImagingVerticalineError";
    // Post web-hook integration error 
    ErrorCode[ErrorCode["PostWebhookError"] = 921] = "PostWebhookError";
    // Create HTTP request failed 
    ErrorCode[ErrorCode["CreateHttpRequestError"] = 922] = "CreateHttpRequestError";
    // Send HTTP request failed 
    ErrorCode[ErrorCode["SendHttpRequestError"] = 923] = "SendHttpRequestError";
    // Retry integration error 
    ErrorCode[ErrorCode["CanRetryIntegrationError"] = 924] = "CanRetryIntegrationError";
    // Illegal event message 
    ErrorCode[ErrorCode["IllegalEventMessageError"] = 925] = "IllegalEventMessageError";
    // Fail to send SMTP message 
    ErrorCode[ErrorCode["SmtpSendMailError"] = 930] = "SmtpSendMailError";
    // Invalid agent login key 
    ErrorCode[ErrorCode["AppErrInvalidLoginKey"] = 20111] = "AppErrInvalidLoginKey";
    // Agent does not exist 
    ErrorCode[ErrorCode["AppErrAgentDoesntExist"] = 20112] = "AppErrAgentDoesntExist";
    // Empty agent login key 
    ErrorCode[ErrorCode["AppErrEmptyLoginKey"] = 20113] = "AppErrEmptyLoginKey";
    // Empty agent Id 
    ErrorCode[ErrorCode["AppErrEmptyAgentId"] = 20114] = "AppErrEmptyAgentId";
    // Empty account Id 
    ErrorCode[ErrorCode["AppErrEmptyAccountId"] = 20115] = "AppErrEmptyAccountId";
    // Empty sensor Id 
    ErrorCode[ErrorCode["AppErrEmptySensorId"] = 20116] = "AppErrEmptySensorId";
    // Get sensor info failed 
    ErrorCode[ErrorCode["AppErrGetSensorInfo"] = 20117] = "AppErrGetSensorInfo";
    // Get account info failed 
    ErrorCode[ErrorCode["AppErrGetAccountInfo"] = 20118] = "AppErrGetAccountInfo";
    // Get folder Info failed 
    ErrorCode[ErrorCode["AppErrGetFolderInfo"] = 20119] = "AppErrGetFolderInfo";
    // Get rule info failed 
    ErrorCode[ErrorCode["AppErrGetRuleInfo"] = 20120] = "AppErrGetRuleInfo";
    // Entity not found 
    ErrorCode[ErrorCode["EntityNotFound"] = 10000] = "EntityNotFound";
    // Login error (invalid user Identity) 
    ErrorCode[ErrorCode["LoginErrInvalidUid"] = 10001] = "LoginErrInvalidUid";
    // Login error (invalid device identity) 
    ErrorCode[ErrorCode["LoginErrInvalidAid"] = 10002] = "LoginErrInvalidAid";
    // Login key expired 
    ErrorCode[ErrorCode["LoginKeyExpired"] = 10003] = "LoginKeyExpired";
    // Invalid verification 
    ErrorCode[ErrorCode["InvalidVerification"] = 10004] = "InvalidVerification";
    // Invalid email address 
    ErrorCode[ErrorCode["InvalidEmailAddress"] = 10005] = "InvalidEmailAddress";
    // User is suspended 
    ErrorCode[ErrorCode["SuspendedUser"] = 10006] = "SuspendedUser";
    // User is blocked 
    ErrorCode[ErrorCode["BlockedUser"] = 10007] = "BlockedUser";
    // Can't delete System Administrator 
    ErrorCode[ErrorCode["DeleteSysAdmin"] = 10008] = "DeleteSysAdmin";
    // Access denied 
    ErrorCode[ErrorCode["AccessDenied"] = 10009] = "AccessDenied";
    // Email address already exists 
    ErrorCode[ErrorCode["EmailAddressExists"] = 10010] = "EmailAddressExists";
    // Invalid access token 
    ErrorCode[ErrorCode["InvalidAccessToken"] = 10011] = "InvalidAccessToken";
    // General token error 
    ErrorCode[ErrorCode["TokenError"] = 10020] = "TokenError";
    // Generate deployment Id error 
    ErrorCode[ErrorCode["DeploymentIdError"] = 10021] = "DeploymentIdError";
    // License does not match the current deployment 
    ErrorCode[ErrorCode["WrongDeploymentId"] = 10022] = "WrongDeploymentId";
    // License expired 
    ErrorCode[ErrorCode["LicenseExpired"] = 10030] = "LicenseExpired";
    // Import license operation failed 
    ErrorCode[ErrorCode["ImportLicenseFailed"] = 10031] = "ImportLicenseFailed";
    // Verify license failed 
    ErrorCode[ErrorCode["VerifyLicenseFailed"] = 10032] = "VerifyLicenseFailed";
    // Verify deployment Id failed 
    ErrorCode[ErrorCode["VerifyDeploymentFailed"] = 10033] = "VerifyDeploymentFailed";
    // License not found 
    ErrorCode[ErrorCode["LicenseNotFound"] = 10034] = "LicenseNotFound";
    // Encode license failed 
    ErrorCode[ErrorCode["EncodeLicenseFailed"] = 10035] = "EncodeLicenseFailed";
    // License search failed 
    ErrorCode[ErrorCode["LicenseSearchFailed"] = 10036] = "LicenseSearchFailed";
    // License delete failed 
    ErrorCode[ErrorCode["LicenseNotDeleted"] = 10037] = "LicenseNotDeleted";
    // User not found 
    ErrorCode[ErrorCode["UserNotFound"] = 10040] = "UserNotFound";
    // User create failed 
    ErrorCode[ErrorCode["UserNotCreated"] = 10041] = "UserNotCreated";
    // User update failed 
    ErrorCode[ErrorCode["UserNotUpdated"] = 10042] = "UserNotUpdated";
    // User delete failed 
    ErrorCode[ErrorCode["UserNotDeleted"] = 10043] = "UserNotDeleted";
    // User search failed 
    ErrorCode[ErrorCode["UserSearchFailed"] = 10044] = "UserSearchFailed";
    // User without role 
    ErrorCode[ErrorCode["UserWithoutRole"] = 10045] = "UserWithoutRole";
    // User invitation failed 
    ErrorCode[ErrorCode["UserInvitationFailed"] = 10046] = "UserInvitationFailed";
    // Service Account create failed 
    ErrorCode[ErrorCode["ServiceAccountNotCreated"] = 10051] = "ServiceAccountNotCreated";
    // Account not found 
    ErrorCode[ErrorCode["AccountNotFound"] = 10100] = "AccountNotFound";
    // Account create failed 
    ErrorCode[ErrorCode["AccountNotCreated"] = 10101] = "AccountNotCreated";
    // Account update failed 
    ErrorCode[ErrorCode["AccountNotUpdated"] = 10102] = "AccountNotUpdated";
    // Account delete failed 
    ErrorCode[ErrorCode["AccountNotDeleted"] = 10103] = "AccountNotDeleted";
    // Wrong Account name 
    ErrorCode[ErrorCode["WrongAccountName"] = 10104] = "WrongAccountName";
    // Wrong Account type 
    ErrorCode[ErrorCode["WrongAccountType"] = 10105] = "WrongAccountType";
    // Wrong Account status 
    ErrorCode[ErrorCode["WrongAccountStatus"] = 10106] = "WrongAccountStatus";
    // Account search failed 
    ErrorCode[ErrorCode["AccountSearchFailed"] = 10109] = "AccountSearchFailed";
    // Account not accessible 
    ErrorCode[ErrorCode["InaccessibleAccount"] = 10110] = "InaccessibleAccount";
    // Wrong Account 
    ErrorCode[ErrorCode["UnmatchingAccount"] = 10111] = "UnmatchingAccount";
    // Account license expired 
    ErrorCode[ErrorCode["ExpiredAccount"] = 10112] = "ExpiredAccount";
    // Account already exists 
    ErrorCode[ErrorCode["AccountExists"] = 10113] = "AccountExists";
    // Account name is empty 
    ErrorCode[ErrorCode["EmptyAccountName"] = 10114] = "EmptyAccountName";
    // Can't delete SUSPENDED account 
    ErrorCode[ErrorCode["DeleteSuspendedAccount"] = 10115] = "DeleteSuspendedAccount";
    // Can't delete account  with content 
    ErrorCode[ErrorCode["DeleteAccountWithContent"] = 10116] = "DeleteAccountWithContent";
    // Can't delete PENDING account 
    ErrorCode[ErrorCode["PendingDeletedAccount"] = 10117] = "PendingDeletedAccount";
    // Account is suspended 
    ErrorCode[ErrorCode["SuspendedAccount"] = 10118] = "SuspendedAccount";
    // Account belongs to another platform (IRIS+ vs INNOVI) 
    ErrorCode[ErrorCode["WrongPlatformType"] = 10119] = "WrongPlatformType";
    // Folder not found 
    ErrorCode[ErrorCode["FolderNotFound"] = 10120] = "FolderNotFound";
    // Folder create failed 
    ErrorCode[ErrorCode["FolderNotCreated"] = 10121] = "FolderNotCreated";
    // Folder update failed 
    ErrorCode[ErrorCode["FolderNotUpdated"] = 10122] = "FolderNotUpdated";
    // Folder delete failed 
    ErrorCode[ErrorCode["FolderNotDeleted"] = 10123] = "FolderNotDeleted";
    // Folder search failed 
    ErrorCode[ErrorCode["FolderSearchFailed"] = 10124] = "FolderSearchFailed";
    // Can't delete folder with content 
    ErrorCode[ErrorCode["DeleteFolderWithContent"] = 10125] = "DeleteFolderWithContent";
    // Geo-transformation error 
    ErrorCode[ErrorCode["GeoTransformationError"] = 10128] = "GeoTransformationError";
    // Load geo-transformation failed 
    ErrorCode[ErrorCode["LoadTransformationError"] = 10129] = "LoadTransformationError";
    // Features group not found 
    ErrorCode[ErrorCode["GroupNotFound"] = 10140] = "GroupNotFound";
    // Features group create failed 
    ErrorCode[ErrorCode["GroupNotCreated"] = 10141] = "GroupNotCreated";
    // Features group update failed 
    ErrorCode[ErrorCode["GroupNotUpdated"] = 10142] = "GroupNotUpdated";
    // Features group delete failed 
    ErrorCode[ErrorCode["GroupNotDeleted"] = 10143] = "GroupNotDeleted";
    // Features group search failed 
    ErrorCode[ErrorCode["GroupSearchFailed"] = 10144] = "GroupSearchFailed";
    // Features group already in use and can't be deleted 
    ErrorCode[ErrorCode["GroupInUseByAccount"] = 10145] = "GroupInUseByAccount";
    // Feature not found 
    ErrorCode[ErrorCode["FeatureNotFound"] = 10146] = "FeatureNotFound";
    // Device not found 
    ErrorCode[ErrorCode["DeviceNotFound"] = 10160] = "DeviceNotFound";
    // Device create failed 
    ErrorCode[ErrorCode["DeviceNotCreated"] = 10161] = "DeviceNotCreated";
    // Device update failed 
    ErrorCode[ErrorCode["DeviceNotUpdated"] = 10162] = "DeviceNotUpdated";
    // Device delete failed 
    ErrorCode[ErrorCode["DeviceNotDeleted"] = 10163] = "DeviceNotDeleted";
    // Device search failed 
    ErrorCode[ErrorCode["DeviceSearchFailed"] = 10164] = "DeviceSearchFailed";
    // No device manager 
    ErrorCode[ErrorCode["MissingDeviceManager"] = 10167] = "MissingDeviceManager";
    // More than one device manager 
    ErrorCode[ErrorCode["MoreThanOneDeviceManager"] = 10168] = "MoreThanOneDeviceManager";
    // Virtual device reboot is not allowed 
    ErrorCode[ErrorCode["VirtualDeviceReboot"] = 10169] = "VirtualDeviceReboot";
    // Virtual device redeploy is not allowed 
    ErrorCode[ErrorCode["VirtualDeviceRedeploy"] = 10170] = "VirtualDeviceRedeploy";
    // Command not found 
    ErrorCode[ErrorCode["CommandNotFound"] = 10175] = "CommandNotFound";
    // Command failed 
    ErrorCode[ErrorCode["CommandFailed"] = 10176] = "CommandFailed";
    // Agent not found 
    ErrorCode[ErrorCode["AgentNotFound"] = 10180] = "AgentNotFound";
    // Agent create failed 
    ErrorCode[ErrorCode["AgentNotCreated"] = 10181] = "AgentNotCreated";
    // Agent update failed 
    ErrorCode[ErrorCode["AgentNotUpdated"] = 10182] = "AgentNotUpdated";
    // Agent delete failed 
    ErrorCode[ErrorCode["AgentNotDeleted"] = 10183] = "AgentNotDeleted";
    // Agent search failed 
    ErrorCode[ErrorCode["AgentFindFailed"] = 10184] = "AgentFindFailed";
    // Digital IO device not found 
    ErrorCode[ErrorCode["DigitalIONotFound"] = 10190] = "DigitalIONotFound";
    // Digital IO device create failed 
    ErrorCode[ErrorCode["DigitalIONotCreated"] = 10191] = "DigitalIONotCreated";
    // Digital IO device update failed 
    ErrorCode[ErrorCode["DigitalIONotUpdated"] = 10192] = "DigitalIONotUpdated";
    // Digital IO device delete failed 
    ErrorCode[ErrorCode["DigitalIONotDeleted"] = 10193] = "DigitalIONotDeleted";
    // Digital IO device search failed 
    ErrorCode[ErrorCode["DigitalIOSearchFailed"] = 10194] = "DigitalIOSearchFailed";
    // Sensor not found 
    ErrorCode[ErrorCode["SensorNotFound"] = 10200] = "SensorNotFound";
    // Sensor create failed 
    ErrorCode[ErrorCode["SensorNotCreated"] = 10201] = "SensorNotCreated";
    // Sensor update failed 
    ErrorCode[ErrorCode["SensorNotUpdated"] = 10202] = "SensorNotUpdated";
    // Sensor delete failed 
    ErrorCode[ErrorCode["SensorNotDeleted"] = 10203] = "SensorNotDeleted";
    // Sensor search failed 
    ErrorCode[ErrorCode["SensorSearchFailed"] = 10204] = "SensorSearchFailed";
    // Can't delete sensor not in PENDING DELETE state 
    ErrorCode[ErrorCode["DeleteNonPendingSensor"] = 10205] = "DeleteNonPendingSensor";
    // Sensors exceeded license limit 
    ErrorCode[ErrorCode["ExceedMaxLicenseChannels"] = 10207] = "ExceedMaxLicenseChannels";
    // Sensors exceeded account limit 
    ErrorCode[ErrorCode["ExceedMaxAccountChannels"] = 10208] = "ExceedMaxAccountChannels";
    // Sensor already attached to a device 
    ErrorCode[ErrorCode["SensorAlreadyAttached"] = 10209] = "SensorAlreadyAttached";
    // Sensor is not in suspended state 
    ErrorCode[ErrorCode["SensorIsNotSuspended"] = 10210] = "SensorIsNotSuspended";
    // Sensor is not recording 
    ErrorCode[ErrorCode["SensorIsNotRecording"] = 10211] = "SensorIsNotRecording";
    // Rule not found 
    ErrorCode[ErrorCode["RuleNotFound"] = 10220] = "RuleNotFound";
    // Rule create failed 
    ErrorCode[ErrorCode["RuleNotCreated"] = 10221] = "RuleNotCreated";
    // Rule update failed 
    ErrorCode[ErrorCode["RuleNotUpdated"] = 10222] = "RuleNotUpdated";
    // Rule delete failed 
    ErrorCode[ErrorCode["RuleNotDeleted"] = 10223] = "RuleNotDeleted";
    // Rule search failed 
    ErrorCode[ErrorCode["RuleSearchFailed"] = 10224] = "RuleSearchFailed";
    // Rule enable/disable operation failed 
    ErrorCode[ErrorCode["RuleEnableFailed"] = 10225] = "RuleEnableFailed";
    // Rule pause analytics operation failed 
    ErrorCode[ErrorCode["RulePauseFailed"] = 10226] = "RulePauseFailed";
    // Rule resume analytics operation failed 
    ErrorCode[ErrorCode["RuleResumeFailed"] = 10227] = "RuleResumeFailed";
    // Calendar not found 
    ErrorCode[ErrorCode["CalendarNotFound"] = 10300] = "CalendarNotFound";
    // Calendar create failed 
    ErrorCode[ErrorCode["CalendarNotCreated"] = 10301] = "CalendarNotCreated";
    // Calendar update failed 
    ErrorCode[ErrorCode["CalendarNotUpdated"] = 10302] = "CalendarNotUpdated";
    // Calendar delete failed 
    ErrorCode[ErrorCode["CalendarNotDeleted"] = 10303] = "CalendarNotDeleted";
    // Calendar search failed 
    ErrorCode[ErrorCode["CalendarSearchFailed"] = 10304] = "CalendarSearchFailed";
    // Calendar import operation failed 
    ErrorCode[ErrorCode["ImportCalendarFailed"] = 10305] = "ImportCalendarFailed";
    // Schedule not found 
    ErrorCode[ErrorCode["ScheduleNotFound"] = 10320] = "ScheduleNotFound";
    // Schedule create failed 
    ErrorCode[ErrorCode["ScheduleNotCreated"] = 10321] = "ScheduleNotCreated";
    // Schedule update failed 
    ErrorCode[ErrorCode["ScheduleNotUpdated"] = 10322] = "ScheduleNotUpdated";
    // Schedule delete failed 
    ErrorCode[ErrorCode["ScheduleNotDeleted"] = 10323] = "ScheduleNotDeleted";
    // Schedule search failed 
    ErrorCode[ErrorCode["ScheduleSearchFailed"] = 10324] = "ScheduleSearchFailed";
    // Schedule linked to existing rules and can't be deleted 
    ErrorCode[ErrorCode["ScheduleLinkedToRules"] = 10325] = "ScheduleLinkedToRules";
    // Report not found 
    ErrorCode[ErrorCode["ReportNotFound"] = 10330] = "ReportNotFound";
    // Report create failed 
    ErrorCode[ErrorCode["ReportNotCreated"] = 10331] = "ReportNotCreated";
    // Report update failed 
    ErrorCode[ErrorCode["ReportNotUpdated"] = 10332] = "ReportNotUpdated";
    // Report delete failed 
    ErrorCode[ErrorCode["ReportNotDeleted"] = 10333] = "ReportNotDeleted";
    // Report search failed 
    ErrorCode[ErrorCode["ReportSearchFailed"] = 10334] = "ReportSearchFailed";
    // People counting report failed 
    ErrorCode[ErrorCode["ReportPeopleCountingFailed"] = 10335] = "ReportPeopleCountingFailed";
    // Traffic analysis report failed 
    ErrorCode[ErrorCode["ReportTrafficAnalysisFailed"] = 10336] = "ReportTrafficAnalysisFailed";
    // Scheduled Report not found 
    ErrorCode[ErrorCode["ScheduledReportNotFound"] = 10340] = "ScheduledReportNotFound";
    // Scheduled Report create failed 
    ErrorCode[ErrorCode["ScheduledReportNotCreated"] = 10341] = "ScheduledReportNotCreated";
    // Scheduled Report update failed 
    ErrorCode[ErrorCode["ScheduledReportNotUpdated"] = 10342] = "ScheduledReportNotUpdated";
    // Scheduled Report delete failed 
    ErrorCode[ErrorCode["ScheduledReportNotDeleted"] = 10343] = "ScheduledReportNotDeleted";
    // Scheduled Report search failed 
    ErrorCode[ErrorCode["ScheduledReportSearchFailed"] = 10344] = "ScheduledReportSearchFailed";
    // Configuration not found 
    ErrorCode[ErrorCode["ConfigurationNotFound"] = 10360] = "ConfigurationNotFound";
    // Configuration create failed 
    ErrorCode[ErrorCode["ConfigurationNotCreated"] = 10361] = "ConfigurationNotCreated";
    // Configuration update failed 
    ErrorCode[ErrorCode["ConfigurationNotUpdated"] = 10362] = "ConfigurationNotUpdated";
    // Configuration delete failed 
    ErrorCode[ErrorCode["ConfigurationNotDeleted"] = 10363] = "ConfigurationNotDeleted";
    // Configuration search failed 
    ErrorCode[ErrorCode["ConfigurationSearchFailed"] = 10364] = "ConfigurationSearchFailed";
    // Configuration version not found 
    ErrorCode[ErrorCode["ConfigVersionNotFound"] = 10370] = "ConfigVersionNotFound";
    // Configuration version create failed 
    ErrorCode[ErrorCode["ConfigVersionNotCreated"] = 10371] = "ConfigVersionNotCreated";
    // Configuration version update failed 
    ErrorCode[ErrorCode["ConfigVersionNotUpdated"] = 10372] = "ConfigVersionNotUpdated";
    // Configuration version delete failed 
    ErrorCode[ErrorCode["ConfigVersionNotDeleted"] = 10373] = "ConfigVersionNotDeleted";
    // Configuration version search failed 
    ErrorCode[ErrorCode["ConfigVersionSearchFailed"] = 10374] = "ConfigVersionSearchFailed";
    // Configuration template not found 
    ErrorCode[ErrorCode["ConfigTemplateNotFound"] = 10380] = "ConfigTemplateNotFound";
    // Configuration template create failed 
    ErrorCode[ErrorCode["ConfigTemplateNotCreated"] = 10381] = "ConfigTemplateNotCreated";
    // Configuration template update failed 
    ErrorCode[ErrorCode["ConfigTemplateNotUpdated"] = 10382] = "ConfigTemplateNotUpdated";
    // Configuration template delete failed 
    ErrorCode[ErrorCode["ConfigTemplateNotDeleted"] = 10383] = "ConfigTemplateNotDeleted";
    // Configuration template search failed 
    ErrorCode[ErrorCode["ConfigTemplateSearchFailed"] = 10384] = "ConfigTemplateSearchFailed";
    // Event not found 
    ErrorCode[ErrorCode["EventNotFound"] = 10400] = "EventNotFound";
    // Event create failed 
    ErrorCode[ErrorCode["EventNotCreated"] = 10401] = "EventNotCreated";
    // Event update failed 
    ErrorCode[ErrorCode["EventNotUpdated"] = 10402] = "EventNotUpdated";
    // Event delete failed 
    ErrorCode[ErrorCode["EventNotDeleted"] = 10403] = "EventNotDeleted";
    // Event search failed 
    ErrorCode[ErrorCode["EventSearchFailed"] = 10404] = "EventSearchFailed";
    // Event status update failed 
    ErrorCode[ErrorCode["EventStatusNotUpdated"] = 10405] = "EventStatusNotUpdated";
    // Event image path update failed 
    ErrorCode[ErrorCode["EventImagePathNotUpdated"] = 10406] = "EventImagePathNotUpdated";
    // Event clip path update failed 
    ErrorCode[ErrorCode["EventClipPathNotUpdated"] = 10407] = "EventClipPathNotUpdated";
    // Event image open failed 
    ErrorCode[ErrorCode["EventOpenImageError"] = 10408] = "EventOpenImageError";
    // Event clip open failed 
    ErrorCode[ErrorCode["EventOpenClipError"] = 10409] = "EventOpenClipError";
    // Event count error 
    ErrorCode[ErrorCode["EventCountError"] = 10410] = "EventCountError";
    // Health event not found 
    ErrorCode[ErrorCode["HealthEventNotFound"] = 10420] = "HealthEventNotFound";
    // Health event create failed 
    ErrorCode[ErrorCode["HealthEventNotCreated"] = 10421] = "HealthEventNotCreated";
    // Health event update failed 
    ErrorCode[ErrorCode["HealthEventNotUpdated"] = 10422] = "HealthEventNotUpdated";
    // Health event delete failed 
    ErrorCode[ErrorCode["HealthEventNotDeleted"] = 10423] = "HealthEventNotDeleted";
    // Health event search failed 
    ErrorCode[ErrorCode["HealthEventSearchFailed"] = 10424] = "HealthEventSearchFailed";
    // Sensor status not found 
    ErrorCode[ErrorCode["SensorStatusNotFound"] = 10430] = "SensorStatusNotFound";
    // Sensor status create failed 
    ErrorCode[ErrorCode["SensorStatusNotCreated"] = 10431] = "SensorStatusNotCreated";
    // Sensor status search failed 
    ErrorCode[ErrorCode["SensorStatusSearchFailed"] = 10433] = "SensorStatusSearchFailed";
    // Integration target not found 
    ErrorCode[ErrorCode["IntegrationTargetNotFound"] = 10500] = "IntegrationTargetNotFound";
    // Integration target create failed 
    ErrorCode[ErrorCode["IntegrationTargetNotCreated"] = 10501] = "IntegrationTargetNotCreated";
    // Integration target update failed 
    ErrorCode[ErrorCode["IntegrationTargetNotUpdated"] = 10502] = "IntegrationTargetNotUpdated";
    // Integration target delete failed 
    ErrorCode[ErrorCode["IntegrationTargetNotDeleted"] = 10503] = "IntegrationTargetNotDeleted";
    // Integration target search failed 
    ErrorCode[ErrorCode["IntegrationTargetSearchFailed"] = 10504] = "IntegrationTargetSearchFailed";
    // Integration target has actions 
    ErrorCode[ErrorCode["IntegrationTargetHasActions"] = 10505] = "IntegrationTargetHasActions";
    // Integration target type not supported 
    ErrorCode[ErrorCode["IntegrationTargetNotSupported"] = 10506] = "IntegrationTargetNotSupported";
    // An attempt was made to create two targets where only one is allowed (Email integration target) 
    ErrorCode[ErrorCode["IntegrationTargetDuplicationsNotAllowed"] = 10507] = "IntegrationTargetDuplicationsNotAllowed";
    // Integration action not found 
    ErrorCode[ErrorCode["IntegrationActionNotFound"] = 10510] = "IntegrationActionNotFound";
    // Integration action create failed 
    ErrorCode[ErrorCode["IntegrationActionNotCreated"] = 10511] = "IntegrationActionNotCreated";
    // Integration action update failed 
    ErrorCode[ErrorCode["IntegrationActionNotUpdated"] = 10512] = "IntegrationActionNotUpdated";
    // Integration action delete failed 
    ErrorCode[ErrorCode["IntegrationActionNotDeleted"] = 10513] = "IntegrationActionNotDeleted";
    // Integration action search failed 
    ErrorCode[ErrorCode["IntegrationActionSearchFailed"] = 10514] = "IntegrationActionSearchFailed";
    // API Key not found 
    ErrorCode[ErrorCode["ApiKeyNotFound"] = 10520] = "ApiKeyNotFound";
    // API Key create failed 
    ErrorCode[ErrorCode["ApiKeyNotCreated"] = 10521] = "ApiKeyNotCreated";
    // API Key update failed 
    ErrorCode[ErrorCode["ApiKeyNotUpdated"] = 10522] = "ApiKeyNotUpdated";
    // API Key delete failed 
    ErrorCode[ErrorCode["ApiKeyNotDeleted"] = 10523] = "ApiKeyNotDeleted";
    // API Key search failed 
    ErrorCode[ErrorCode["ApiKeySearchFailed"] = 10524] = "ApiKeySearchFailed";
    // Search fetch process not started 
    ErrorCode[ErrorCode["SearchServiceFetchNotStarted"] = 10600] = "SearchServiceFetchNotStarted";
    // Search fetch process in progress 
    ErrorCode[ErrorCode["SearchServiceFetchInProgress"] = 10601] = "SearchServiceFetchInProgress";
    // Search image not found 
    ErrorCode[ErrorCode["SearchServiceImageNotFound"] = 10602] = "SearchServiceImageNotFound";
    // Search service disconnected 
    ErrorCode[ErrorCode["SearchServiceDisconnected"] = 10603] = "SearchServiceDisconnected";
    // Search service request error 
    ErrorCode[ErrorCode["SearchServiceRequestError"] = 10604] = "SearchServiceRequestError";
    // Search service response error 
    ErrorCode[ErrorCode["SearchServiceResponseError"] = 10605] = "SearchServiceResponseError";
})(ErrorCode || (ErrorCode = {}));

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
    // Record sensor metadata feature [10] 
    FeatureCode[FeatureCode["FEATURE_SENSOR_METADATA"] = 10] = "FEATURE_SENSOR_METADATA";
    // Record sensor frames feature [11] 
    FeatureCode[FeatureCode["FEATURE_SENSOR_RECORDING"] = 11] = "FEATURE_SENSOR_RECORDING";
    // Face Recognition lite feature (Free Version) [20] 
    FeatureCode[FeatureCode["FEATURE_FR_LITE"] = 20] = "FEATURE_FR_LITE";
    // Face Recognition full feature (Paid Version) [21] 
    FeatureCode[FeatureCode["FEATURE_FR_FULL"] = 21] = "FEATURE_FR_FULL";
    // Rail Trespassing [22] 
    FeatureCode[FeatureCode["FEATURE_RAIL_TRESPASSING"] = 22] = "FEATURE_RAIL_TRESPASSING";
    // Expanded reporting capabilities [23] 
    FeatureCode[FeatureCode["FEATURE_REPORTING_FULL"] = 23] = "FEATURE_REPORTING_FULL";
    // Action analysis [24] 
    FeatureCode[FeatureCode["FEATURE_ACTION_ANALYSIS"] = 24] = "FEATURE_ACTION_ANALYSIS";
    // Alarm filtering [25] 
    FeatureCode[FeatureCode["FEATURE_ALARM_FILTERING"] = 25] = "FEATURE_ALARM_FILTERING";
    // Person recognition [26] 
    FeatureCode[FeatureCode["FEATURE_PERSON_RECOGNITION"] = 26] = "FEATURE_PERSON_RECOGNITION";
    // View pose keypoints in Investigation [27] 
    FeatureCode[FeatureCode["FEATURE_VIEW_POSE_KEYPOINTS"] = 27] = "FEATURE_VIEW_POSE_KEYPOINTS";
    // Account administrator module [2048] 
    FeatureCode[FeatureCode["MODULE_ADMIN"] = 2048] = "MODULE_ADMIN";
    // Crossing a line rule [2049] 
    FeatureCode[FeatureCode["RULE_CROSSING"] = 2049] = "RULE_CROSSING";
    // Counter flow rule [2050] 
    FeatureCode[FeatureCode["RULE_COUNTER_FLOW"] = 2050] = "RULE_COUNTER_FLOW";
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
    // Asset protection (missing object detection) rule [2304] 
    FeatureCode[FeatureCode["RULE_ASSET_PROTECTION"] = 2304] = "RULE_ASSET_PROTECTION";
    // Smoke and Fire rule [2305] 
    FeatureCode[FeatureCode["RULE_SMOKEANDFIRE"] = 2305] = "RULE_SMOKEANDFIRE";
    // Traffic statistics rule [2560] 
    FeatureCode[FeatureCode["RULE_TRAFFIC_STATISTICS"] = 2560] = "RULE_TRAFFIC_STATISTICS";
    // Count statistics rule [3072] 
    FeatureCode[FeatureCode["RULE_COUNT_STATISTICS"] = 3072] = "RULE_COUNT_STATISTICS";
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
    // Slip and Fall rule [34816] 
    FeatureCode[FeatureCode["RULE_SLIP_AND_FALL"] = 34816] = "RULE_SLIP_AND_FALL";
})(FeatureCode || (FeatureCode = {}));

/*
   Integration status code
*/
var IntegrationStatusCode;
(function (IntegrationStatusCode) {
    // Undefined [0] 
    IntegrationStatusCode[IntegrationStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // None of the integration actions invoked [1] 
    IntegrationStatusCode[IntegrationStatusCode["PENDING"] = 1] = "PENDING";
    // Some of the integrations succeeded but not all [2] 
    IntegrationStatusCode[IntegrationStatusCode["PARTIAL"] = 2] = "PARTIAL";
    // All the integrations succeeded [3] 
    IntegrationStatusCode[IntegrationStatusCode["SUCCESS"] = 3] = "SUCCESS";
    // All the integrations failed [4] 
    IntegrationStatusCode[IntegrationStatusCode["FAILED"] = 4] = "FAILED";
})(IntegrationStatusCode || (IntegrationStatusCode = {}));

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
    // Milestone integration (based on http protocol) [13] 
    IntegrationTypeCode[IntegrationTypeCode["MILESTONE"] = 13] = "MILESTONE";
    // Genetec integration (based on http protocol) [14] 
    IntegrationTypeCode[IntegrationTypeCode["GENETEC"] = 14] = "GENETEC";
})(IntegrationTypeCode || (IntegrationTypeCode = {}));

/*
   Job status code
*/
var JobStatusCode;
(function (JobStatusCode) {
    // Undefined [0] 
    JobStatusCode[JobStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Job is still running [1] 
    JobStatusCode[JobStatusCode["RUNNING"] = 1] = "RUNNING";
    // Job has completed successfully and is ready for download [2] 
    JobStatusCode[JobStatusCode["COMPLETED"] = 2] = "COMPLETED";
    // Job has completed with an error [3] 
    JobStatusCode[JobStatusCode["ERROR"] = 3] = "ERROR";
    // Job has completed successfully and report has been downloaded by the user [4] 
    JobStatusCode[JobStatusCode["DOWNLOADED"] = 4] = "DOWNLOADED";
})(JobStatusCode || (JobStatusCode = {}));

/*
   Level type code
*/
var LevelTypeCode;
(function (LevelTypeCode) {
    // Undefined [0] 
    LevelTypeCode[LevelTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Low [1] 
    LevelTypeCode[LevelTypeCode["LOW"] = 1] = "LOW";
    // Medium [2] 
    LevelTypeCode[LevelTypeCode["MEDIUM"] = 2] = "MEDIUM";
    // High [3] 
    LevelTypeCode[LevelTypeCode["HIGH"] = 3] = "HIGH";
})(LevelTypeCode || (LevelTypeCode = {}));

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
    // Backpack 16844801 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_BACKPACK"] = 16844801] = "INNOVI_UNKNOWNS_OBJECT_BACKPACK";
    // Handbag 16844802 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_HANDBAG"] = 16844802] = "INNOVI_UNKNOWNS_OBJECT_HANDBAG";
    // Suitcase 16844804 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_SUITCASE"] = 16844804] = "INNOVI_UNKNOWNS_OBJECT_SUITCASE";
    // Other 16844808 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_OTHER"] = 16844808] = "INNOVI_UNKNOWNS_OBJECT_OTHER";
    // Box 16844816 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_BOX"] = 16844816] = "INNOVI_UNKNOWNS_OBJECT_BOX";
    // Bag 16844832 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_BAG"] = 16844832] = "INNOVI_UNKNOWNS_OBJECT_BAG";
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
    // Train 17047552 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRAIN"] = 17047552] = "INNOVI_VEHICLE_TRAIN";
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
    // Fire 33620224 
    ObjectTypeCode[ObjectTypeCode["INNOVI_SMOKEANDFIRE_FIRE"] = 33620224] = "INNOVI_SMOKEANDFIRE_FIRE";
    // Smoke 33620480 
    ObjectTypeCode[ObjectTypeCode["INNOVI_SMOKEANDFIRE_SMOKE"] = 33620480] = "INNOVI_SMOKEANDFIRE_SMOKE";
})(ObjectTypeCode || (ObjectTypeCode = {}));

/*
   OpenClosedStatusCode represents if a HealthEvent is in the opened state or closed state
*/
var OpenClosedStatusCode;
(function (OpenClosedStatusCode) {
    // Undefined [0] 
    OpenClosedStatusCode[OpenClosedStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Open [1] 
    OpenClosedStatusCode[OpenClosedStatusCode["OPEN"] = 1] = "OPEN";
    // Closed (i.e. resolved) [2] 
    OpenClosedStatusCode[OpenClosedStatusCode["CLOSED"] = 2] = "CLOSED";
})(OpenClosedStatusCode || (OpenClosedStatusCode = {}));

/*
   Permission Mask
*/
var PermissionMask;
(function (PermissionMask) {
    // Undefined [0] 
    PermissionMask[PermissionMask["UNDEFINED"] = 0] = "UNDEFINED";
    // Read [1] 
    PermissionMask[PermissionMask["R"] = 1] = "R";
    // Create [2] 
    PermissionMask[PermissionMask["C"] = 2] = "C";
    // Update [4] 
    PermissionMask[PermissionMask["U"] = 4] = "U";
    // Delete [8] 
    PermissionMask[PermissionMask["D"] = 8] = "D";
})(PermissionMask || (PermissionMask = {}));

/*
   Platform type code
*/
var PlatformTypeCode;
(function (PlatformTypeCode) {
    // innovi [0] 
    PlatformTypeCode[PlatformTypeCode["INNOVI"] = 0] = "INNOVI";
    // Irisity [1] 
    PlatformTypeCode[PlatformTypeCode["IRISITY"] = 1] = "IRISITY";
})(PlatformTypeCode || (PlatformTypeCode = {}));

/*
   Product type code
*/
var ProductTypeCode;
(function (ProductTypeCode) {
    // Undefined [0] 
    ProductTypeCode[ProductTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Virtual Edge (Pipeline running as Kubernetes deployment with no actual edge device) [1] 
    ProductTypeCode[ProductTypeCode["VIRTUAL"] = 1] = "VIRTUAL";
    // Custom Device (Customer provides it's own hardware) [2] 
    ProductTypeCode[ProductTypeCode["CUSTOM"] = 2] = "CUSTOM";
    // Edge 10 [10] 
    ProductTypeCode[ProductTypeCode["EDGE_10"] = 10] = "EDGE_10";
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
    // Edge 550 [550] 
    ProductTypeCode[ProductTypeCode["EDGE_550"] = 550] = "EDGE_550";
})(ProductTypeCode || (ProductTypeCode = {}));

/*
   Report data type code (defining what columns should be included in a report)
*/
var ReportDataTypeCode;
(function (ReportDataTypeCode) {
    // Undefined [0] 
    ReportDataTypeCode[ReportDataTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Minimum amount of data, only the essentials [1] 
    ReportDataTypeCode[ReportDataTypeCode["ESSENTIAL"] = 1] = "ESSENTIAL";
    // Often used data [2] 
    ReportDataTypeCode[ReportDataTypeCode["OFTEN_USED"] = 2] = "OFTEN_USED";
    // All exportable data [3] 
    ReportDataTypeCode[ReportDataTypeCode["ALL"] = 3] = "ALL";
})(ReportDataTypeCode || (ReportDataTypeCode = {}));

/*
   Report format code (defining the file format of a report)
*/
var ReportFormatCode;
(function (ReportFormatCode) {
    // Undefined [0] 
    ReportFormatCode[ReportFormatCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Comma Separated Values (.csv) [1] 
    ReportFormatCode[ReportFormatCode["CSV"] = 1] = "CSV";
    // Excel format (.xlsx) [2] 
    ReportFormatCode[ReportFormatCode["EXCEL"] = 2] = "EXCEL";
})(ReportFormatCode || (ReportFormatCode = {}));

/*
   Report type code
*/
var ReportTypeCode;
(function (ReportTypeCode) {
    // Undefined [0] 
    ReportTypeCode[ReportTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Alarm Events [1] 
    ReportTypeCode[ReportTypeCode["ALARM_EVENTS"] = 1] = "ALARM_EVENTS";
    // Health Events [2] 
    ReportTypeCode[ReportTypeCode["HEALTH_EVENTS"] = 2] = "HEALTH_EVENTS";
    // People counting analysis [3] 
    ReportTypeCode[ReportTypeCode["PEOPLE_COUNTING_ANALYSIS"] = 3] = "PEOPLE_COUNTING_ANALYSIS";
    // Traffic analysis [4] 
    ReportTypeCode[ReportTypeCode["TRAFFIC_ANALYSIS"] = 4] = "TRAFFIC_ANALYSIS";
})(ReportTypeCode || (ReportTypeCode = {}));

/*
   Rule Auto Sensitivity Code
*/
var RuleAutoSensitivityCode;
(function (RuleAutoSensitivityCode) {
    // High sensitivity [0] 
    RuleAutoSensitivityCode[RuleAutoSensitivityCode["HIGH_SENSITIVITY"] = 0] = "HIGH_SENSITIVITY";
    // High sensitivity [1] 
    RuleAutoSensitivityCode[RuleAutoSensitivityCode["NORMAL_SENSITIVITY"] = 1] = "NORMAL_SENSITIVITY";
    // Low sensitivity [2] 
    RuleAutoSensitivityCode[RuleAutoSensitivityCode["LOW_SENSITIVITY"] = 2] = "LOW_SENSITIVITY";
})(RuleAutoSensitivityCode || (RuleAutoSensitivityCode = {}));

/*
   User interface color of a rule polygon
*/
var RuleColorCode;
(function (RuleColorCode) {
    // Undefined [0] 
    RuleColorCode[RuleColorCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Same color as used for severity [1] 
    RuleColorCode[RuleColorCode["SEVERITY"] = 1] = "SEVERITY";
    // Color Beige [2] 
    RuleColorCode[RuleColorCode["BEIGE"] = 2] = "BEIGE";
    // Color Yellow [3] 
    RuleColorCode[RuleColorCode["YELLOW"] = 3] = "YELLOW";
    // Color Amber [4] 
    RuleColorCode[RuleColorCode["AMBER"] = 4] = "AMBER";
    // Color Orange [5] 
    RuleColorCode[RuleColorCode["ORANGE"] = 5] = "ORANGE";
    // Color Vermillion [6] 
    RuleColorCode[RuleColorCode["VERMILLION"] = 6] = "VERMILLION";
    // Color Red [7] 
    RuleColorCode[RuleColorCode["RED"] = 7] = "RED";
    // Color Burgundy [8] 
    RuleColorCode[RuleColorCode["BURGUNDY"] = 8] = "BURGUNDY";
    // Color Purple [9] 
    RuleColorCode[RuleColorCode["PURPLE"] = 9] = "PURPLE";
    // Color Violet [10] 
    RuleColorCode[RuleColorCode["VIOLET"] = 10] = "VIOLET";
    // Color Blue [11] 
    RuleColorCode[RuleColorCode["BLUE"] = 11] = "BLUE";
    // Color Iris [12] 
    RuleColorCode[RuleColorCode["IRIS"] = 12] = "IRIS";
    // Color Sky [13] 
    RuleColorCode[RuleColorCode["SKY"] = 13] = "SKY";
    // Color Turquoise [14] 
    RuleColorCode[RuleColorCode["TURQUOISE"] = 14] = "TURQUOISE";
    // Color Green [15] 
    RuleColorCode[RuleColorCode["GREEN"] = 15] = "GREEN";
    // Color Lime [16] 
    RuleColorCode[RuleColorCode["LIME"] = 16] = "LIME";
})(RuleColorCode || (RuleColorCode = {}));

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
    // [WARNING] Downloading clip, this may take a few minutes depending on file size 
    SensorStateMask[SensorStateMask["SOURCE_DOWNLOADING_CLIP_WARN"] = 32] = "SOURCE_DOWNLOADING_CLIP_WARN";
    // [WARNING] Initializing stream from camera 
    SensorStateMask[SensorStateMask["SOURCE_INITIALIZING_STREAM_WARN"] = 64] = "SOURCE_INITIALIZING_STREAM_WARN";
    // [WARNING] Insufficient auto-calibration 
    SensorStateMask[SensorStateMask["INSUFFICIENT_AUTO_CALIBRATION_WARN"] = 128] = "INSUFFICIENT_AUTO_CALIBRATION_WARN";
    // [INACTIVE] Sensor is not active due to user action (enable/disable, attach/detach) 
    SensorStateMask[SensorStateMask["SENSOR_INACTIVE"] = 4096] = "SENSOR_INACTIVE";
    // [ERROR] Communication error [0x00010000] 
    SensorStateMask[SensorStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
    // [ERROR] Internal sensor error, contact Agent Vi support [0x00020000] 
    SensorStateMask[SensorStateMask["SENSOR_ERROR"] = 131072] = "SENSOR_ERROR";
    // [ERROR] Internal stream error, contact Agent Vi support [0x00040000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR"] = 262144] = "SOURCE_ERROR";
    // [ERROR] Unsupported video codec, change the source stream configuration [0x00080000] 
    SensorStateMask[SensorStateMask["FORMAT_ERROR"] = 524288] = "FORMAT_ERROR";
    // [ERROR] Unsupported video resolution, change the source stream configuration [0x00100000] 
    SensorStateMask[SensorStateMask["RESOLUTION_ERROR"] = 1048576] = "RESOLUTION_ERROR";
    // [ERROR] Framerate is 0 for 1 min [0x0000000000000400] 
    SensorStateMask[SensorStateMask["CRITICAL_FRAMERATE_ERROR"] = 2097152] = "CRITICAL_FRAMERATE_ERROR";
    // [ERROR] RTSP timeout, try toggling the multicast support setting [0x00400000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_RTSP_TIMEOUT"] = 4194304] = "SOURCE_ERROR_RTSP_TIMEOUT";
    // RTSP stream issue, try opening with VLC player 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_RTSP_NOT_SUPPORTED"] = 8388608] = "SOURCE_ERROR_RTSP_NOT_SUPPORTED";
    // [ERROR] Failed to download clip, check the path [0x01000000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_CANT_DOWNLOAD_CLIP"] = 16777216] = "SOURCE_ERROR_CANT_DOWNLOAD_CLIP";
    // [ERROR] RTSP host not reachable, check the host and port address, try toggling the multicast support setting [0x02000000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_RTSP_HOST_NOT_REACHABLE"] = 33554432] = "SOURCE_ERROR_RTSP_HOST_NOT_REACHABLE";
    // [ERROR] RTSP authentication error, check the user and password [0x04000000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_AUTHENTICATION"] = 67108864] = "SOURCE_ERROR_AUTHENTICATION";
    // [ERROR] ONVIF host not reachable, check the address and user\password [0x08000000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_ONVIF_NO_RTSP_URL"] = 134217728] = "SOURCE_ERROR_ONVIF_NO_RTSP_URL";
    // [ERROR] ONVIF error, contact Agent Vi support [0x10000000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_ONVIF_INVALID_RTSP_URL"] = 268435456] = "SOURCE_ERROR_ONVIF_INVALID_RTSP_URL";
    // [ERROR] Unsupported URI, contact Agent Vi support [0x20000000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_BAD_URI"] = 536870912] = "SOURCE_ERROR_BAD_URI";
    // [ERROR] Large time gap in stream, check the source stream [0x40000000] 
    SensorStateMask[SensorStateMask["SOURCE_ERROR_LARGE_FRAME_GAP"] = 1073741824] = "SOURCE_ERROR_LARGE_FRAME_GAP";
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
   Websocket client op codes
*/
var SocketOpCode;
(function (SocketOpCode) {
    // Undefined [0] 
    SocketOpCode[SocketOpCode["Undefined"] = 0] = "Undefined";
    // Entity change notification on add [1] 
    SocketOpCode[SocketOpCode["EntitiesAdd"] = 1] = "EntitiesAdd";
    // Entity change notification on update [2] 
    SocketOpCode[SocketOpCode["EntitiesUpdate"] = 2] = "EntitiesUpdate";
    // Entity change notification on delete [3] 
    SocketOpCode[SocketOpCode["EntitiesDelete"] = 3] = "EntitiesDelete";
    // Request entities change notification for account [100] 
    SocketOpCode[SocketOpCode["EntitiesRequest"] = 100] = "EntitiesRequest";
    // Request live video streaming [1010] 
    SocketOpCode[SocketOpCode["LiveRequest"] = 1010] = "LiveRequest";
    // Request playback video frames [1020] 
    SocketOpCode[SocketOpCode["PlaybackRequest"] = 1020] = "PlaybackRequest";
    // Request pause video frame (renew session) [1021] 
    SocketOpCode[SocketOpCode["PauseRequest"] = 1021] = "PauseRequest";
    // Request for events stream (including filters) [1030] 
    SocketOpCode[SocketOpCode["EventsRequest"] = 1030] = "EventsRequest";
    // Event notification [1031] 
    SocketOpCode[SocketOpCode["EventNotification"] = 1031] = "EventNotification";
    // Health event notification [1032] 
    SocketOpCode[SocketOpCode["HealthEventNotification"] = 1032] = "HealthEventNotification";
    // Closed health event notification [1033] 
    SocketOpCode[SocketOpCode["ClosedHealthEventNotification"] = 1033] = "ClosedHealthEventNotification";
    // Request for health status stream [1040] 
    SocketOpCode[SocketOpCode["HealthRequest"] = 1040] = "HealthRequest";
    // Health status notification [1041] 
    SocketOpCode[SocketOpCode["HealthNotification"] = 1041] = "HealthNotification";
    // SSH open connection request [1101] 
    SocketOpCode[SocketOpCode["SSHOpen"] = 1101] = "SSHOpen";
    // SSH close connection request [1102] 
    SocketOpCode[SocketOpCode["SSHClose"] = 1102] = "SSHClose";
    // SSH send input request [1103] 
    SocketOpCode[SocketOpCode["SSHInput"] = 1103] = "SSHInput";
    // SSH output response [1104] 
    SocketOpCode[SocketOpCode["SSHOutput"] = 1104] = "SSHOutput";
})(SocketOpCode || (SocketOpCode = {}));

/*
   Video stream type (source) code
*/
var StreamTypeCode;
(function (StreamTypeCode) {
    // Undefined [0] 
    StreamTypeCode[StreamTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // RTSP stream [1] (streamUrl schema: rtsp://) 
    StreamTypeCode[StreamTypeCode["RTSP"] = 1] = "RTSP";
    // ONVIF stream [2] (streamUrl schema: onvif://) 
    StreamTypeCode[StreamTypeCode["ONVIF"] = 2] = "ONVIF";
    // Video clip from file [3] (streamUrl schema: file:///) 
    StreamTypeCode[StreamTypeCode["CLIP"] = 3] = "CLIP";
    // RTP stream [4] (streamUrl schema: rtp://) 
    StreamTypeCode[StreamTypeCode["RTP"] = 4] = "RTP";
    // MULTICAST stream [5] (streamUrl schema: mcast://) 
    StreamTypeCode[StreamTypeCode["MULTICAST"] = 5] = "MULTICAST";
    // Download clip from http(s) [6] (streamUrl schema: http://  or https://) 
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
    // Account user - has access to specific accounts with role based access control [4] 
    UserTypeCode[UserTypeCode["ACCOUNT_USER"] = 4] = "ACCOUNT_USER";
    // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
    UserTypeCode[UserTypeCode["ACCOUNT_SERVICE"] = 5] = "ACCOUNT_SERVICE";
})(UserTypeCode || (UserTypeCode = {}));

/*
   VMS Gateway state mask - the bit mask represents the actual state of the service as reported by the core-api
   Bit mask range:
   OK:			0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
var VMSGatewayStateMask;
(function (VMSGatewayStateMask) {
    // [OK] VMS Gateway is connected and active [0x0] 
    VMSGatewayStateMask[VMSGatewayStateMask["VMS_OK"] = 0] = "VMS_OK";
    // [WARNING] Network high latency [0x00000001] 
    VMSGatewayStateMask[VMSGatewayStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
    // [ERROR] VMS Gateway not connected to the core [0x00010000] 
    VMSGatewayStateMask[VMSGatewayStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
    // [ERROR] VMS Gateway has no connection to the VMS [0x00011000] 
    VMSGatewayStateMask[VMSGatewayStateMask["NO_VMS_ERROR"] = 69632] = "NO_VMS_ERROR";
})(VMSGatewayStateMask || (VMSGatewayStateMask = {}));

/*
   VMS Gateway status code
*/
var VMSGatewayStatusCode;
(function (VMSGatewayStatusCode) {
    // Undefined [0] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // VMS gateway is configured but not yet connected [1] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["PENDING"] = 1] = "PENDING";
    // VMS gateway is connected to the system and to the VMS [2] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["ACTIVE"] = 2] = "ACTIVE";
    // VMS gateway in warning state (high latency) [3] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["WARNING"] = 3] = "WARNING";
    // VMS gateway in error state [4] 
    VMSGatewayStatusCode[VMSGatewayStatusCode["ERROR"] = 4] = "ERROR";
})(VMSGatewayStatusCode || (VMSGatewayStatusCode = {}));

/*
   View type code
*/
var ViewTypeCode;
(function (ViewTypeCode) {
    // Normal [0] 
    ViewTypeCode[ViewTypeCode["NORMAL"] = 0] = "NORMAL";
    // Fisheye overhead [1] 
    ViewTypeCode[ViewTypeCode["FISHEYE_OVERHEAD"] = 1] = "FISHEYE_OVERHEAD";
})(ViewTypeCode || (ViewTypeCode = {}));

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
    constructor(name, type, status, sort, format, fields, fileName) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
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
class AccountsServiceLogicalTreeRequest {
    constructor(status, behaviorType, includeSensors, includeRules, includeNonRecordingSensors, search) {
        this.status = status;
        this.behaviorType = behaviorType;
        this.includeSensors = includeSensors;
        this.includeRules = includeRules;
        this.includeNonRecordingSensors = includeNonRecordingSensors;
        this.search = search;
    }
}

/*
*/
class AccountsServicePhysicalTreeRequest {
    constructor(search) {
        this.search = search;
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
    constructor(id, includeSensors, status, behaviorType) {
        this.id = id;
        this.includeSensors = includeSensors;
        this.status = status;
        this.behaviorType = behaviorType;
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
class AddSensorModelRequest {
    constructor(id, modelId) {
        this.id = id;
        this.modelId = modelId;
    }
}

/*
*/
class AddSensorModelsRequest {
    constructor(sensorId, id) {
        this.sensorId = sensorId;
        this.id = id;
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
class AnomalyServiceSensorPresetRequest {
    constructor(sensorId, presetNum) {
        this.sensorId = sensorId;
        this.presetNum = presetNum;
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
class ApplianceProfileCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ApplianceProfileFindRequest {
    constructor(search) {
        this.search = search;
    }
}

/*
*/
class ApplianceProfileIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ApplianceProfileIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class ApplianceProfileUpdateBulkRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ApplianceProfileUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
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
class AppliancesServiceBulkAttachRequest {
    constructor(id, sensorId) {
        this.id = id;
        this.sensorId = sensorId;
    }
}

/*
*/
class AppliancesServiceBulkDetachRequest {
    constructor(id, sensorId) {
        this.id = id;
        this.sensorId = sensorId;
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
    constructor(folderId, subFolders, search, status, agentStatus, sort, format, fields) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.status = status;
        this.agentStatus = agentStatus;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}

/*
*/
class AppliancesServiceExportSensorsRequest {
    constructor(id, format, fileName) {
        this.id = id;
        this.format = format;
        this.fileName = fileName;
    }
}

/*
*/
class AppliancesServiceFindRequest {
    constructor(folderId, subFolders, search, status, agentStatus, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.status = status;
        this.agentStatus = agentStatus;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class AppliancesServiceFindSensorsRequest {
    constructor(id, search, type, status, stream, sort, page, pageSize, format, fields, fileName) {
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
        this.fileName = fileName;
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
class AppliancesServiceGetLogsRequest {
    constructor(id, from, to, component) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.component = component;
    }
}

/*
*/
class AppliancesServiceImportSensorsRequest {
    constructor(id, csvFile) {
        this.id = id;
        this.csvFile = csvFile;
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
    constructor(userId, from, to, item, itemType, sort, format, fields, fileName) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.item = item;
        this.itemType = itemType;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
    }
}

/*
*/
class AuditLogServiceFindRequest {
    constructor(userId, from, to, item, itemType, sort, page, pageSize) {
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.item = item;
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
class CalendarsServiceFolderRequest {
    constructor(folderId, sort, page, pageSize) {
        this.folderId = folderId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class CalendarsServiceImportRequest {
    constructor(icsFile, folderId) {
        this.icsFile = icsFile;
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
class CaseIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class CasesServiceAddEventsRequest {
    constructor(id, sessionId, eventId, description) {
        this.id = id;
        this.sessionId = sessionId;
        this.eventId = eventId;
        this.description = description;
    }
}

/*
*/
class CasesServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class CasesServiceDeleteEventsRequest {
    constructor(id, eventId) {
        this.id = id;
        this.eventId = eventId;
    }
}

/*
*/
class CasesServiceFindRequest {
    constructor(search, sort, page, pageSize) {
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class CasesServiceGetEventCropsRequest {
    constructor(id, eventId) {
        this.id = id;
        this.eventId = eventId;
    }
}

/*
*/
class CasesServiceUpdateEventDescriptionRequest {
    constructor(id, eventId, description) {
        this.id = id;
        this.eventId = eventId;
        this.description = description;
    }
}

/*
*/
class CasesServiceUpdateRequest {
    constructor(body) {
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
*/
class ChangeHealthThresholdsRequest {
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
class ChangeTimezoneRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ClusterIdRequest {
    constructor(id) {
        this.id = id;
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
class DetectionModelIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class DigitalIOCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class DigitalIOFindRequest {
    constructor(applianceId, search) {
        this.applianceId = applianceId;
        this.search = search;
    }
}

/*
*/
class DigitalIOIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class DigitalIOUpdateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class EmptyRequest {
    constructor() {
    }
}

/*
*/
class EmptyResponse {
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
class EntitiesResponseOfApplianceProfile extends EntitiesResponse {
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
class EntitiesResponseOfCaseInfo extends EntitiesResponse {
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
class EntitiesResponseOfDetectionModel extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfDigitalIO extends EntitiesResponse {
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
class EntitiesResponseOfGroup extends EntitiesResponse {
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
class EntitiesResponseOfIntegrationStatus extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfLicense extends EntitiesResponse {
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
class EntitiesResponseOfStringIntValue extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfStringKeyValue extends EntitiesResponse {
}

/*
*/
class EntitiesResponseOfTimestampedCrop extends EntitiesResponse {
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
class EntitiesResponseOfUpdateStatus extends EntityResponse {
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
class EntityResponseOfApplianceProfile extends EntityResponse {
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
class EntityResponseOfCaseInfo extends EntityResponse {
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
class EntityResponseOfDetectionModel extends EntityResponse {
}

/*
*/
class EntityResponseOfDigitalIO extends EntityResponse {
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
class EntityResponseOfGroup extends EntityResponse {
}

/*
*/
class EntityResponseOfHealthEvent extends EntityResponse {
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
class EntityResponseOfJobStatus extends EntityResponse {
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
class EntityResponseOfMember extends EntityResponse {
}

/*
*/
class EntityResponseOfPreset extends EntityResponse {
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
class EntityResponseOfSensorHeatmap extends EntityResponse {
}

/*
*/
class EntityResponseOfSensorPaths extends EntityResponse {
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
class EntityResponseOfTimeline extends EntityResponse {
}

/*
*/
class EntityResponseOfTimestampedCrop extends EntityResponse {
}

/*
*/
class EntityResponseOfTimestampedCropsData extends EntitiesResponse {
}

/*
*/
class EntityResponseOfTimestampedImage extends EntitiesResponse {
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
class EntityResponseUsageReport extends EntityResponse {
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
class EventTokenRequest {
    constructor(imageToken) {
        this.imageToken = imageToken;
    }
}

/*
*/
class EventsCountByBehaviorRequest {
    constructor(folderId, sensorId, objectType, severity, status, rule, from, to) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.severity = severity;
        this.status = status;
        this.rule = rule;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class EventsCountByObjectRequest {
    constructor(folderId, sensorId, behaviorType, severity, status, rule, from, to) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.status = status;
        this.rule = rule;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class EventsCountByStatusRequest {
    constructor(folderId, sensorId, objectType, behaviorType, severity, rule, from, to) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.objectType = objectType;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.rule = rule;
        this.from = from;
        this.to = to;
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
    constructor(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields, fileName) {
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
        this.fileName = fileName;
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
    constructor(folderId, subFolders, sensorId, applianceId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorId = sensorId;
        this.applianceId = applianceId;
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
class EventsServiceGetIntegrationsRequestRequest {
    constructor(id, sensorId, folderId) {
        this.id = id;
        this.sensorId = sensorId;
        this.folderId = folderId;
    }
}

/*
*/
class EventsServiceSetBulkStatusRequest {
    constructor(id, status) {
        this.id = id;
        this.status = status;
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
class ExportUsageReportRequest {
    constructor(year, month, format, fileName) {
        this.year = year;
        this.month = month;
        this.format = format;
        this.fileName = fileName;
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
class FolderExtIdsRequest {
    constructor(id) {
        this.id = id;
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
class FoldersServiceChangeParentRequest {
    constructor(id, parentId) {
        this.id = id;
        this.parentId = parentId;
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
    constructor(id, search, parentId, sort, format, fields, fileName) {
        this.id = id;
        this.search = search;
        this.parentId = parentId;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
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
class GroupIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class GroupIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class GroupServiceFindRequest {
    constructor(search, sort, page, pageSize) {
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class GroupsServiceCreateRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class GroupsServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class HealthEventFindRequest {
    constructor(folderId, from, to, source, openClosed, entityId, sort, page, pageSize) {
        this.folderId = folderId;
        this.from = from;
        this.to = to;
        this.source = source;
        this.openClosed = openClosed;
        this.entityId = entityId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class HealthEventIdRequest {
    constructor(id) {
        this.id = id;
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
    constructor(search, sort, page, pageSize) {
        this.search = search;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
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
class IntegrationStatusFindRequest {
    constructor(source, entityId, integrationTargetId, integrationActionId, from, to, sort, resolveNames, page, pageSize) {
        this.source = source;
        this.entityId = entityId;
        this.integrationTargetId = integrationTargetId;
        this.integrationActionId = integrationActionId;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.resolveNames = resolveNames;
        this.page = page;
        this.pageSize = pageSize;
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
    constructor(search, type, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
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
*/
class LicenseIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class LicenseImportRequest {
    constructor(licenseFile) {
        this.licenseFile = licenseFile;
    }
}

/*
*/
class MachineIdRequest {
    constructor(machineId) {
        this.machineId = machineId;
    }
}

/*
*/
class MemberByEmailRequest {
    constructor(email) {
        this.email = email;
    }
}

/*
*/
class MemberIdRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class MemberTokenRequest {
    constructor(id, exp) {
        this.id = id;
        this.exp = exp;
    }
}

/*
*/
class MembersServiceExportRequest {
    constructor(search, type, status, sort, format, fields, fileName) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
    }
}

/*
*/
class MembersServiceFindRequest {
    constructor(search, type, status, group, sort, page, pageSize) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.group = group;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class MembersServiceInviteRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class MembersServiceRegisterRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class MembersServiceUpdateRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class PeopleCountingReportRequest {
    constructor(sensorId, folderId, from, to) {
        this.sensorId = sensorId;
        this.folderId = folderId;
        this.from = from;
        this.to = to;
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
class QueryResponseOfApplianceConfigReport extends QueryResponse {
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
class QueryResponseOfCaseInfo extends QueryResponse {
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
class QueryResponseOfFindUser extends QueryResponse {
}

/*
*/
class QueryResponseOfFolder extends QueryResponse {
}

/*
*/
class QueryResponseOfGroup extends QueryResponse {
}

/*
*/
class QueryResponseOfHealthEvent extends QueryResponse {
}

/*
*/
class QueryResponseOfIntegrationAction extends QueryResponse {
}

/*
*/
class QueryResponseOfIntegrationStatus extends QueryResponse {
}

/*
*/
class QueryResponseOfIntegrationStatusResponse extends QueryResponse {
}

/*
*/
class QueryResponseOfIntegrationTarget extends QueryResponse {
}

/*
*/
class QueryResponseOfJobStatus extends QueryResponse {
}

/*
*/
class QueryResponseOfMember extends QueryResponse {
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
class QueryResponseOfScheduledReport extends QueryResponse {
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
class QueryResponseOfUpdateStatus extends QueryResponse {
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
class RemoveSensorModelRequest {
    constructor(id, modelId) {
        this.id = id;
        this.modelId = modelId;
    }
}

/*
*/
class RemoveSensorModelsRequest {
    constructor(sensorId, id) {
        this.sensorId = sensorId;
        this.id = id;
    }
}

/*
*/
class ReportFindRequest {
    constructor(page, pageSize, search, relatedScheduledReportId) {
        this.page = page;
        this.pageSize = pageSize;
        this.search = search;
        this.relatedScheduledReportId = relatedScheduledReportId;
    }
}

/*
*/
class ReportGenerationRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class ReportGenerationRequestBody {
    constructor(sensorIds, folderIds, from, to, reportType, aggregationType, dataType, reportFormat, surveillanceStartHour) {
        this.sensorIds = sensorIds;
        this.folderIds = folderIds;
        this.from = from;
        this.to = to;
        this.reportType = reportType;
        this.aggregationType = aggregationType;
        this.dataType = dataType;
        this.reportFormat = reportFormat;
        this.surveillanceStartHour = surveillanceStartHour;
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
class ReportUpdateRequest {
    constructor(id, status) {
        this.id = id;
        this.status = status;
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
class ReportsServiceRulesSchedulesRequest {
    constructor() {
    }
}

/*
*/
class ReportsServiceSensorsRequest {
    constructor() {
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
class RuleExtIdsRequest {
    constructor(id) {
        this.id = id;
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
class RulesServiceArmDisarmRequest {
    constructor(folderId, folderExtId, sensorId, sensorExtId) {
        this.folderId = folderId;
        this.folderExtId = folderExtId;
        this.sensorId = sensorId;
        this.sensorExtId = sensorExtId;
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
    constructor(folderId, sensorId, search, behaviorType, severity, sort, format, fields, fileName) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
    }
}

/*
*/
class RulesServiceFindAnomalyRequest {
    constructor(folderId, physical, sensorId, search, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.physical = physical;
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
    constructor(folderId, physical, applianceId, sensorId, search, behaviorType, exclude, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.physical = physical;
        this.applianceId = applianceId;
        this.sensorId = sensorId;
        this.search = search;
        this.behaviorType = behaviorType;
        this.exclude = exclude;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class RulesServicePauseRequest {
    constructor(folderId, folderExtId, from, to) {
        this.folderId = folderId;
        this.folderExtId = folderExtId;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class RulesServiceResumeRequest {
    constructor(folderId, folderExtId) {
        this.folderId = folderId;
        this.folderExtId = folderExtId;
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
class RulesServiceUpdateScheduleForRulesRequest {
    constructor(body) {
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
    constructor(page, pageSize) {
        this.page = page;
        this.pageSize = pageSize;
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
class SchedulesServiceFolderParamsRequest {
    constructor(folderId, sort, page, pageSize) {
        this.folderId = folderId;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
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
    constructor(sessionId, sensorId, objectType, from, to, interval, labelFormat) {
        this.sessionId = sessionId;
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
class SearchEventCropsRequest {
    constructor(sessionId, eventId) {
        this.sessionId = sessionId;
        this.eventId = eventId;
    }
}

/*
*/
class SearchEventExportRequest {
    constructor(sessionId, body, format, fields, fileName) {
        this.sessionId = sessionId;
        this.body = body;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
    }
}

/*
*/
class SearchEventFindRequest {
    constructor(sessionId, body) {
        this.sessionId = sessionId;
        this.body = body;
    }
}

/*
*/
class SearchEventFindRequestBody {
    constructor(sensorIds, objectType, tolerance, from, to, sort, page, pageSize) {
        this.sensorIds = sensorIds;
        this.objectType = objectType;
        this.tolerance = tolerance;
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
    constructor(sessionId, eventId) {
        this.sessionId = sessionId;
        this.eventId = eventId;
    }
}

/*
*/
class SearchEventListRequest {
    constructor(sessionId, eventId) {
        this.sessionId = sessionId;
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
class SearchServiceSimilarRequest {
    constructor(objectId, sensorId, timestamp, from, to, similarity) {
        this.objectId = objectId;
        this.sensorId = sensorId;
        this.timestamp = timestamp;
        this.from = from;
        this.to = to;
        this.similarity = similarity;
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
    constructor(sessionId) {
        this.sessionId = sessionId;
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
class SensorDetectionModelsIdRequest {
    constructor(sensorId) {
        this.sensorId = sensorId;
    }
}

/*
*/
class SensorExtIdsRequest {
    constructor(id) {
        this.id = id;
    }
}

/*
*/
class SensorHeatmapEventsRequest {
    constructor(sessionId, sensorId, row, col, page, pageSize) {
        this.sessionId = sessionId;
        this.sensorId = sensorId;
        this.row = row;
        this.col = col;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SensorHeatmapRequest {
    constructor(sessionId, sensorId, from, to, objectType, dim) {
        this.sessionId = sessionId;
        this.sensorId = sensorId;
        this.from = from;
        this.to = to;
        this.objectType = objectType;
        this.dim = dim;
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
class SensorPathEventsRequest {
    constructor(sessionId, sensorId, pathId, page, pageSize) {
        this.sessionId = sessionId;
        this.sensorId = sensorId;
        this.pathId = pathId;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SensorPathsRequest {
    constructor(sessionId, sensorId, from, to, objectType, points) {
        this.sessionId = sessionId;
        this.sensorId = sensorId;
        this.from = from;
        this.to = to;
        this.objectType = objectType;
        this.points = points;
    }
}

/*
*/
class SensorUsageReportRequest {
    constructor(sensorId, year, month) {
        this.sensorId = sensorId;
        this.year = year;
        this.month = month;
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
class SensorsServiceCropImageRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
    }
}

/*
*/
class SensorsServiceExportRequest {
    constructor(folderId, subFolders, search, type, status, stream, sort, format, fields, fileName) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.search = search;
        this.type = type;
        this.status = status;
        this.stream = stream;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
    }
}

/*
*/
class SensorsServiceFindRequest {
    constructor(folderId, subFolders, applianceId, physical, search, type, status, stream, sort, page, pageSize) {
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.applianceId = applianceId;
        this.physical = physical;
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
class SensorsServiceGetRefImageRequest {
    constructor(id, timestamp) {
        this.id = id;
        this.timestamp = timestamp;
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
class SensorsServiceUpdatePresetRequest {
    constructor(id, body) {
        this.id = id;
        this.body = body;
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
   Switch account request message
*/
class SwitchAccountRequest {
    constructor(accountId, platformType) {
        this.accountId = accountId;
        this.platformType = platformType;
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
    constructor(zipFile, password) {
        this.zipFile = zipFile;
        this.password = password;
    }
}

/*
*/
class SysApplianceBatchUpgradeFindRequest {
    constructor(accountId, applianceId, userId, commandId, batchId, from, to, sort, page, pageSize) {
        this.accountId = accountId;
        this.applianceId = applianceId;
        this.userId = userId;
        this.commandId = commandId;
        this.batchId = batchId;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SysApplianceBatchUpgradeRequest {
    constructor(configId, versionId, id) {
        this.configId = configId;
        this.versionId = versionId;
        this.id = id;
    }
}

/*
*/
class SysApplianceConfigExportRequest {
    constructor(accountId, search, configId, versionId, unmatched, format, fileName) {
        this.accountId = accountId;
        this.search = search;
        this.configId = configId;
        this.versionId = versionId;
        this.unmatched = unmatched;
        this.format = format;
        this.fileName = fileName;
    }
}

/*
*/
class SysApplianceConfigReportRequest {
    constructor(accountId, search, configId, versionId, unmatched, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.configId = configId;
        this.versionId = versionId;
        this.unmatched = unmatched;
        this.page = page;
        this.pageSize = pageSize;
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
    constructor(accountId, search, status, agentStatus, sort, page, pageSize) {
        this.accountId = accountId;
        this.search = search;
        this.status = status;
        this.agentStatus = agentStatus;
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
class SysAuditLogServiceExportRequest {
    constructor(accountId, userId, from, to, item, itemType, sort, format, fields, fileName) {
        this.accountId = accountId;
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.item = item;
        this.itemType = itemType;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
    }
}

/*
*/
class SysAuditLogServiceFindRequest {
    constructor(accountId, userId, from, to, item, itemType, sort, page, pageSize) {
        this.accountId = accountId;
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.item = item;
        this.itemType = itemType;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}

/*
*/
class SysConfigImportRequest {
    constructor(zipFile) {
        this.zipFile = zipFile;
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
class SysExportAllAccountsUsageReportRequest {
    constructor(year, month) {
        this.year = year;
        this.month = month;
    }
}

/*
*/
class SysExportUsageReportRequest {
    constructor(id, year, month, format, fileName) {
        this.id = id;
        this.year = year;
        this.month = month;
        this.format = format;
        this.fileName = fileName;
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
class SysKeysServiceUpdateBulkRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysModelsServiceCreateModelRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysModelsServiceUpdateModelRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
*/
class SysSensorUsageReportRequest {
    constructor(id, sensorId, year, month) {
        this.id = id;
        this.sensorId = sensorId;
        this.year = year;
        this.month = month;
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
class SysSensorsFetchObjectsCropsRequest {
    constructor(accountId, sensorId, ts, objectId, bucketFolder) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.ts = ts;
        this.objectId = objectId;
        this.bucketFolder = bucketFolder;
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
*/
class SysSetLogLevelRequest {
    constructor(level) {
        this.level = level;
    }
}

/*
*/
class SysSystemBackupRequest {
    constructor(filter, fileName) {
        this.filter = filter;
        this.fileName = fileName;
    }
}

/*
*/
class SysSystemRestoreRequest {
    constructor(zipFile) {
        this.zipFile = zipFile;
    }
}

/*
*/
class SysUsageReportRequest {
    constructor(id, year, month) {
        this.id = id;
        this.year = year;
        this.month = month;
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
class TrafficAnalysisReportRequest {
    constructor(sensorId, folderId, from, to) {
        this.sensorId = sensorId;
        this.folderId = folderId;
        this.from = from;
        this.to = to;
    }
}

/*
*/
class TriggerTestHealthEventRequest {
    constructor(body) {
        this.body = body;
    }
}

/*
   Request body for TriggerTestHealthEventRequest
*/
class TriggerTestHealthEventRequestBody {
    constructor(entityId, entityType, entityState) {
        this.entityId = entityId;
        this.entityType = entityType;
        this.entityState = entityState;
    }
}

/*
*/
class UsageReportRequest {
    constructor(year, month) {
        this.year = year;
        this.month = month;
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
class UserTokenRequest {
    constructor(id, exp) {
        this.id = id;
        this.exp = exp;
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
    constructor(search, type, status, sort, format, fields, fileName) {
        this.search = search;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
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
class UsersServiceRegisterRequest {
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

/*
   Describes status of an integration attempt (for events and health integrations) - was the integration successfully triggered or not.
   This contains information on what type of event the integration was triggered by (even or health event),
   the name and id of the integration target, the t
*/
class IntegrationStatusResponse extends BaseEntity {
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
     * Upload is HTTP POST action but the body is File object
     */
    upload(file, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        const formData = new FormData();
        formData.append('fileKey', file, file.name);
        const req = new HttpRequest('POST', resourceUrl, formData, {
            reportProgress: false,
            responseType: 'json',
        });
        return this.http.request(req);
    }
    /**
     * Download is HTTP GET action but the content is blob
     */
    download(fileName, url, ...params) {
        const resourceUrl = this.buildUrl(url, ...params);
        let downloadLink = fileName;
        // extract file name
        params.forEach(p => {
            let arr = p.split('=');
            if (arr.length > 1) {
                if (arr[0].toLowerCase() === 'filename') {
                    downloadLink = arr[1];
                }
            }
        });
        // return this.http.get(resourceUrl, {responseType: 'blob'}).subscribe((data) => {
        //   const downloadURL = window.URL.createObjectURL(data);
        //   const link = document.createElement('a');
        //   link.href = downloadURL;
        //   link.download = downloadLink;
        //
        //   link.click();
        // });
        // Set content type for: json / csv / xml / pdf
        let contentType = 'application/json';
        if (downloadLink.toLowerCase().endsWith('csv')) {
            contentType = 'text/csv';
        }
        else if (downloadLink.toLowerCase().endsWith('xml')) {
            contentType = 'text/xml';
        }
        else if (downloadLink.toLowerCase().endsWith('pdf')) {
            contentType = 'application/pdf';
        }
        return this.http.get(resourceUrl, {
            responseType: 'blob',
            reportProgress: true,
            observe: 'events',
            headers: new HttpHeaders({ 'Content-Type': contentType })
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
/** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(i0.ɵɵinject(i1.HttpClient)); };
/** @nocollapse */ RestUtil.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestUtil, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();

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
    exportFormat(name, type, status, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
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
     * Update existing account in the system (only with user-enabled fields)
     * @Return: EntityResponse<Account>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
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
     * @Return: EntityResponse<Account>
     */
    changeGeoLocation(body) {
        return this.rest.put(`${this.baseUrl}/geoLocation`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change account health thresholds
     * @Return: EntityResponse<Account>
     */
    changeHealthThresholds(body) {
        return this.rest.put(`${this.baseUrl}/health-thresholds`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change account timezone
     * @Return: EntityResponse<Account>
     */
    changeTimezone(body) {
        return this.rest.put(`${this.baseUrl}/timezone`, typeof body === 'object' ? JSON.stringify(body) : body);
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
    /**
     * Get account logical tree hierarchy (account -> folders -> sensors) - starting from the account level as root
     * A logical tree is a representation of cameras-folders hierarchy as defined by the user
     * @Return: EntityResponse<TreeNode>
     */
    getLogicalTree(status, behaviorType, includeSensors, includeRules, includeNonRecordingSensors, search) {
        const params = new Array();
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
        }
        if (includeSensors != null) {
            params.push(`includeSensors=${includeSensors}`);
        }
        if (includeRules != null) {
            params.push(`includeRules=${includeRules}`);
        }
        if (includeNonRecordingSensors != null) {
            params.push(`includeNonRecordingSensors=${includeNonRecordingSensors}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}/logical-tree`, ...params);
    }
    /**
     * Get account physical tree hierarchy (account -> folders -> devices -> sensors) - starting from the account level as root
     * A Physical tree is a representation of cameras-devices-folders hierarchy as defined by the network topology
     * @Return: EntityResponse<TreeNode>
     */
    getPhysicalTree(search) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}/physical-tree`, ...params);
    }
    /**
     * Get account usage report (for billing)
     * List of sensor with total active time (minutes) and total of billable sensors
     * @Return: EntityResponse<UsageReport>
     */
    getUsageReport(year, month) {
        return this.rest.get(`${this.baseUrl}/usage-report/${year}/${month}`);
    }
    /**
     * Get sensor usage report (for billing)
     * @Return: EntityResponse<TimeDataSeries<SensorStatusCode>>
     */
    getSensorUsageReport(sensorId, year, month) {
        return this.rest.get(`${this.baseUrl}/sensor-usage-report/${sensorId}/${year}/${month}`);
    }
    /**
     * Export account usage report to a file (for billing)
     * @Return: StreamContent
     */
    exportUsageReport(year, month, format, fileName) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`accounts`, `${this.baseUrl}/export-usage-report/${year}/${month}`, ...params);
    }
}
/** @nocollapse */ AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ AccountsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: AccountsService, factory: AccountsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountsService, [{
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
    /**
     * Get single sensor preset
     * @return EntityResponse<Preset>
     */
    getSensorPreset(sensorId, presetNum) {
        return this.rest.get(`${this.baseUrl}/sensor/${sensorId}/preset/${presetNum}`);
    }
    /**
     * Get single sensor schedule for the next hour
     * @return EntityResponse<Timeline>
     */
    getSensorSchedule(sensorId) {
        return this.rest.get(`${this.baseUrl}/sensor/${sensorId}/schedule`);
    }
}
/** @nocollapse */ AnomalyService.ɵfac = function AnomalyService_Factory(t) { return new (t || AnomalyService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ AnomalyService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: AnomalyService, factory: AnomalyService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnomalyService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for digital IO actions actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class ApplianceDigitalIOService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/appliance-dio';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create digital IO device configuration
     * @Return: EntityResponse<DigitalIO>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update digital IO device configuration
     * @Return: EntityResponse<DigitalIO>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete digital IO device configuration
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single digital IO device configuration
     * @Return: EntityResponse<DigitalIO>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find digital IO device configurations
     * @Return: EntitiesResponse<DigitalIO>
     */
    find(applianceId, search) {
        const params = new Array();
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ ApplianceDigitalIOService.ɵfac = function ApplianceDigitalIOService_Factory(t) { return new (t || ApplianceDigitalIOService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ ApplianceDigitalIOService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: ApplianceDigitalIOService, factory: ApplianceDigitalIOService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplianceDigitalIOService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for custom appliance profiles actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class ApplianceProfilesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/appliance-profiles';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new custom appliance profile
     * @Return: EntityResponse<ApplianceProfile>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update custom appliance profile
     * @Return: EntityResponse<ApplianceProfile>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update Bulk of custom appliance profiles
     * @Return: ActionResponse
     */
    updateBulk(body) {
        return this.rest.put(`${this.baseUrl}/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete custom appliance profile from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single profile by id
     * @Return: EntityResponse<ApplianceProfile>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find profiles by filters
     * @Return: EntitiesResponse<ApplianceProfile>
     */
    find(search) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ ApplianceProfilesService.ɵfac = function ApplianceProfilesService_Factory(t) { return new (t || ApplianceProfilesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ ApplianceProfilesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: ApplianceProfilesService, factory: ApplianceProfilesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplianceProfilesService, [{
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
    find(folderId, subFolders, search, status, agentStatus, sort, page, pageSize) {
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
        if (agentStatus != null) {
            params.push(`agentStatus=${agentStatus}`);
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
    exportFormat(folderId, subFolders, search, status, agentStatus, sort, format, fields) {
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
        if (agentStatus != null) {
            params.push(`agentStatus=${agentStatus}`);
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
     * Get single appliance by machine id (across all system accounts)
     * @Return: EntityResponse<Appliance>
     */
    getByMachineId(machineId) {
        return this.rest.get(`${this.baseUrl}/machine/${machineId}`);
    }
    /**
     * Get all sensors assigned to the appliance (getSensors)
     * @Return: QueryResponse<Sensor>
     */
    findApplianceSensors(id, search, type, status, stream, sort, page, pageSize, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/sensors`, ...params);
    }
    /**
     * Import sensors from CSV file
     * The file must include header with the columns:
     * @return ActionResponse
     */
    importSensors(id, csvFile) {
        return this.rest.upload(csvFile, `${this.baseUrl}/${id}/sensors/import`);
    }
    /**
     * Export appliance sensors to CSV file
     * @return StreamContent
     */
    exportSensors(id, format, fileName) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`appliances`, `${this.baseUrl}/${id}/sensors/export`, ...params);
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
     * Send get network bandwidth speed test command to the appliance
     * @Return:  EntityResponse<Appliance>
     */
    getSpeedTest(id) {
        return this.rest.post(`${this.baseUrl}/${id}/speed-test`, null);
    }
    /**
     * Send reset credentials command to the appliance (reset to the factory default password)
     * @Return:  ActionResponse
     */
    resetPassword(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reset-password`, null);
    }
    /**
     * Reboot appliance host
     * @Return: ActionResponse
     */
    reboot(id) {
        return this.rest.post(`${this.baseUrl}/${id}/reboot`, null);
    }
    /**
     * Rebuild appliance configuration and deploy the configuration to the device manager
     * @Return: ActionResponse
     */
    redeploy(id) {
        return this.rest.post(`${this.baseUrl}/${id}/redeploy`, null);
    }
    /**
     * Get container logs appliance host
     * @Return: ActionResponse
     */
    getLogs(id, from, to, component) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (component != null) {
            params.push(`component=${component}`);
        }
        return this.rest.post(`${this.baseUrl}/${id}/logs`, null, ...params);
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
     * Get appliance status distribution over time (for pie chart)
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getStatusDistribution(id, from, to) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/status/distribution`, ...params);
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
     * Aggregate appliances count distribution by state
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByState(folderId, subFolders) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-state`, ...params);
    }
    /**
     * Aggregate appliances count distribution by agent status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByAgentStatus(folderId, subFolders) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-agent-status`, ...params);
    }
    /**
     * Aggregate appliances count distribution by agent state
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByAgentState(folderId, subFolders) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-agent-state`, ...params);
    }
    /**
     * Attach multiple sensors to the device
     * @Return: ActionResponse
     */
    bulkAttach(id, sensorId) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/attach`, null, ...params);
    }
    /**
     * Detach multiple sensors from the device
     * @Return: ActionResponse
     */
    bulkDetach(id, sensorId) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        return this.rest.put(`${this.baseUrl}/${id}/detach`, null, ...params);
    }
}
/** @nocollapse */ AppliancesService.ɵfac = function AppliancesService_Factory(t) { return new (t || AppliancesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ AppliancesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: AppliancesService, factory: AppliancesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppliancesService, [{
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
    find(userId, from, to, item, itemType, sort, page, pageSize) {
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
        if (item != null) {
            params.push(`item=${item}`);
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
    exportFormat(userId, from, to, item, itemType, sort, format, fields, fileName) {
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
        if (item != null) {
            params.push(`item=${item}`);
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
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
/** @nocollapse */ AuditLogService.ɵfac = function AuditLogService_Factory(t) { return new (t || AuditLogService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ AuditLogService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: AuditLogService, factory: AuditLogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuditLogService, [{
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
     * @Return: QueryResponse<Calendar>
     */
    getFolderCalendars(folderId, sort, page, pageSize) {
        const params = new Array();
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
        return this.rest.get(`${this.baseUrl}/folder`, ...params);
    }
    /**
     * Import calendar from outlook CSV, ICS or iCal file
     * @Return: ActionResponse
     */
    import(folderId, icsFile) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        return this.rest.upload(icsFile, `${this.baseUrl}/import`, ...params);
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
/** @nocollapse */ CalendarsService.ɵfac = function CalendarsService_Factory(t) { return new (t || CalendarsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ CalendarsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: CalendarsService, factory: CalendarsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CalendarsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for case management actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class CasesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/cases';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new case
     * @Return: EntityResponse<CaseInfo>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update case
     * @Return: EntityResponse<CaseInfo>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete case from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single case by id
     * @Return: EntityResponse<CaseInfo>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of all public cases and user owned private cases
     * @Return: QueryResponse<CaseInfo>
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
     * Add bulk of search events to the case
     * @Return: EntityResponse<CaseInfo>
     */
    addSearchEvents(id, sessionId, eventId, description) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.post(`${this.baseUrl}/${id}/sessions/${sessionId}/events`, typeof description === 'object' ? JSON.stringify(description) : description, ...params);
    }
    /**
     * Update event description
     * @Return: EntityResponse<CaseInfo>
     */
    updateEventDescription(id, eventId, description) {
        return this.rest.put(`${this.baseUrl}/${id}/events/${eventId}/description`, typeof description === 'object' ? JSON.stringify(description) : description);
    }
    /**
     * Remove bulk of search events from the case
     * @Return: EntityResponse<CaseInfo>
     */
    removeSearchEvents(id, eventId) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.delete(`${this.baseUrl}/${id}/events`, ...params);
    }
    /**
     * Get all timestamped objects of the provided case event
     * @Return: EntityResponse<TimestampedCropsData>
     */
    getEventObjectCropsData(id, eventId) {
        return this.rest.get(`${this.baseUrl}/${id}/events/${eventId}`);
    }
    /**
     * Get single timestamped object of the provided case event
     * @Return: EntityResponse<TimestampedCrop>
     */
    getMainEventObjectCrop(id, eventId) {
        return this.rest.get(`${this.baseUrl}/${id}/event/${eventId}`);
    }
}
/** @nocollapse */ CasesService.ɵfac = function CasesService_Factory(t) { return new (t || CasesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ CasesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: CasesService, factory: CasesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CasesService, [{
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
     * Get a list of integration targets applicable for this event
     * @Return: EntitiesResponse<IntegrationAction>
     */
    getIntegrations(id, sensorId, folderId) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        return this.rest.get(`${this.baseUrl}/${id}/integrations`, ...params);
    }
    /**
     * Force manual event integrations
     * @Return: ActionResponse
     */
    invokeIntegrations(id) {
        return this.rest.post(`${this.baseUrl}/${id}/integrations`, null);
    }
    /**
     * Change event workflow status
     * @Return: ActionResponse
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change multiple events workflow status
     * @Return: ActionResponse
     */
    changeBulkStatuses(id, status) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        return this.rest.put(`${this.baseUrl}/bulk-status`, null, ...params);
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
    find(folderId, subFolders, sensorId, applianceId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
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
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
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
    exportFormat(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
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
    /**
     * Get events distribution by status
     * @Return: EntityResponse<DistributionOfLong>
     */
    getEventsCountByStatus(folderId, sensorId, objectType, behaviorType, severity, rule, from, to) {
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
        if (rule != null) {
            params.push(`rule=${rule}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
    /**
     * Get events distribution by object type
     * @Return: EntityResponse<DistributionOfLong>
     */
    getEventsCountByObject(folderId, sensorId, behaviorType, severity, status, rule, from, to) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
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
        return this.rest.get(`${this.baseUrl}/count/by-object`, ...params);
    }
    /**
     * Get events distribution by behavior
     * @Return: EntityResponse<DistributionOfLong>
     */
    getEventsCountByBehavior(folderId, sensorId, objectType, severity, status, rule, from, to) {
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
        return this.rest.get(`${this.baseUrl}/count/by-behavior`, ...params);
    }
    /**
     * Direct link to download event image [response content type: image/jpeg]
     * This link is injected dynamically by the system to the ImagePath property of the event, the link includes time-limited token (valid for 12 hours) to identify the account and event
     * @Return: StreamingOutput of the image
     */
    downloadEventImage(imageToken) {
        const params = new Array();
        if (imageToken != null) {
            params.push(`imageToken=${imageToken}`);
        }
        return this.rest.download(`events`, `${this.baseUrl}Image`, ...params);
    }
    /**
     * Direct link to download event clip [response content type: video/mp4]
     * This link is injected dynamically by the system to the ClipPath property of the event, the link includes time-limited token (valid for 12 hours) to identify the account and event
     * @Return: StreamingOutput of the clip
     */
    downloadEventClip(imageToken) {
        const params = new Array();
        if (imageToken != null) {
            params.push(`imageToken=${imageToken}`);
        }
        return this.rest.download(`events`, `${this.baseUrl}Clip`, ...params);
    }
}
/** @nocollapse */ EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ EventsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: EventsService, factory: EventsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EventsService, [{
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
     * Update folder info
     * @Return: EntityResponse<Folder>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Change folder parent id
     * @Return: EntityResponse<Folder>
     */
    changeParent(id, parentId) {
        return this.rest.put(`${this.baseUrl}/${id}/parent/${parentId}`, null);
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
     * Get folders Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=FolderId)
     */
    mapExternalIds(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/map-external-ids`, ...params);
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
    exportFormat(id, search, parentId, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
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
/** @nocollapse */ FoldersService.ɵfac = function FoldersService_Factory(t) { return new (t || FoldersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ FoldersService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: FoldersService, factory: FoldersService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FoldersService, [{
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
/** @nocollapse */ GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ GeoService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: GeoService, factory: GeoService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GeoService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for security groups actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class GroupsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/groups';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new group
     * @Return: EntityResponse<Group>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update group
     * @Return: EntityResponse<Group>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete group from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single group by id
     * @Return: EntityResponse<Group>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get groups by list of ids
     * @Return: EntitiesResponse<Group>
     */
    list(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/list`, ...params);
    }
    /**
     * Find groups by filters
     * @Return: QueryResponse<Group>
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
}
/** @nocollapse */ GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ GroupsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: GroupsService, factory: GroupsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GroupsService, [{
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
/** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ HealthCheckService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HealthCheckService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Services for health events queries
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class HealthEventsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/health-events';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get single health event by id
     * @Return: EntityResponse<HealthEvent>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find health events by filters
     * @Return: QueryResponse<HealthEvent>
     */
    find(folderId, from, to, source, openClosed, entityId, sort, page, pageSize) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (source != null) {
            params.push(`source=${source}`);
        }
        if (openClosed != null) {
            params.push(`openClosed=${openClosed}`);
        }
        if (entityId != null) {
            params.push(`entityId=${entityId}`);
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
     * Trigger a test health event
     * @Return: ActionResponse
     */
    triggerTestHealthEvent(body) {
        return this.rest.post(`${this.baseUrl}/trigger-test-event`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
}
/** @nocollapse */ HealthEventsService.ɵfac = function HealthEventsService_Factory(t) { return new (t || HealthEventsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ HealthEventsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: HealthEventsService, factory: HealthEventsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HealthEventsService, [{
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
     * Create new integration target. Notice that only one target of type Email is allowed per account.
     * Returns IntegrationTargetDuplicationsNotAllowed if an attempt is made to create two Email integration targets.
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
    find(search, type, sort, page, pageSize) {
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
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
     * Find all integration status
     * @Return: QueryResponse<IntegrationStatusResponse>
     */
    findStatus(source, entityId, integrationTargetId, integrationActionId, from, to, sort, resolveNames, page, pageSize) {
        const params = new Array();
        if (source != null) {
            params.push(`source=${source}`);
        }
        if (entityId != null) {
            params.push(`entityId=${entityId}`);
        }
        if (integrationTargetId != null) {
            params.push(`integrationTargetId=${integrationTargetId}`);
        }
        if (integrationActionId != null) {
            params.push(`integrationActionId=${integrationActionId}`);
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
        if (resolveNames != null) {
            params.push(`resolveNames=${resolveNames}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/status`, ...params);
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
    findActions(search, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}/actions`, ...params);
    }
    /**
     * Find all integration actions for a specified level in the folder hierarchy
     * @Return: EntitiesResponse<IntegrationAction>
     */
    getFolderActions(folderId) {
        return this.rest.get(`${this.baseUrl}/actions/folder/${folderId}`);
    }
    /**
     * Test integration action with data (limited to HTTP)
     * @Return: EntityResponse<IntegrationAction>
     */
    testAction(body) {
        return this.rest.post(`${this.baseUrl}/actions/test`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Test integration action
     * @Return: ActionResponse
     */
    testIntegrationAction(id) {
        return this.rest.post(`${this.baseUrl}/actions/${id}/test`, null);
    }
}
/** @nocollapse */ IntegrationsService.ɵfac = function IntegrationsService_Factory(t) { return new (t || IntegrationsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ IntegrationsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: IntegrationsService, factory: IntegrationsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(IntegrationsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all account members related actions for account administrator only
 */
class MembersService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/members';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Send invitation to a new member for the current account
     * @Return: ActionResponse
     */
    invite(body) {
        return this.rest.post(`${this.baseUrl}/invite`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Register user for the account, it a user already exists, an invitation to the new account will be sent
     * @Return: EntityResponse<Member>
     */
    register(body) {
        return this.rest.post(`${this.baseUrl}/register`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create service account
     * @Return: ActionResponse
     */
    registerServiceAccount(body) {
        return this.rest.post(`${this.baseUrl}/service-account`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Resend invitation to an existing user for the current account
     * @Return: ActionResponse
     */
    reInvite(id) {
        return this.rest.post(`${this.baseUrl}/re-invite/${id}`, null);
    }
    /**
     * Update member
     * @Return: EntityResponse<Member>
     */
    update(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete member from the account
     * The user will be removed from the account, if no accounts associated with the member, it will be deleted
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single member by id
     * @Return: EntityResponse<Member>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single member by email
     * @Return: EntityResponse<Member>
     */
    getByEmail(email) {
        return this.rest.get(`${this.baseUrl}/byEmail/${email}`);
    }
    /**
     * Find list of members and filter the list
     * System user will see all users, Account system will see all users of the account, registered user will get an error.
     * @Return: QueryResponse<Member>
     */
    find(search, type, status, group, sort, page, pageSize) {
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
        if (group != null) {
            params.push(`group=${group}`);
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
     * Export list of members and filter
     * @Return: StreamContent
     */
    exportFormat(search, type, status, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`members`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get access token for member
     * @Return: ActionResponse
     */
    getUserToken(id, exp) {
        return this.rest.get(`${this.baseUrl}/${id}/token/${exp}`);
    }
}
/** @nocollapse */ MembersService.ɵfac = function MembersService_Factory(t) { return new (t || MembersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ MembersService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: MembersService, factory: MembersService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MembersService, [{
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
    /**
     * Export account sensors as CSV report stream
     * @Return: StreamContent
     */
    exportSensorsReport() {
        return this.rest.download(`reports`, `${this.baseUrl}/sensors`);
    }
    /**
     * Export account sensors rules schedules as CSV report stream
     * @Return: StreamContent
     */
    exportRulesSchedulesReport() {
        return this.rest.download(`reports`, `${this.baseUrl}/rule-schedules`);
    }
    /**
     * Generate people counting report and stream it as CSV
     * @Return: StreamContent
     */
    getPeopleCountingReport(sensorId, folderId, from, to) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.download(`reports`, `${this.baseUrl}/statistics/people-counting`, ...params);
    }
    /**
     * Generate traffic analysis report and stream it as CSV
     * @Return: StreamContent
     */
    getTrafficAnalysisReport(sensorId, folderId, from, to) {
        const params = new Array();
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.download(`reports`, `${this.baseUrl}/statistics/traffic-analysis`, ...params);
    }
    /**
     * Start the background creation of a report. Returns immediately with the status of the started background job.
     * @Return: EntityResponse<JobStatus>
     */
    startReportJob(body) {
        return this.rest.post(`${this.baseUrl}/statistics/job`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Returns a paginated list of existing background jobs for creating reports.
     * @Return: QueryResponse<JobStatus>
     */
    findJobs(page, pageSize, search, relatedScheduledReportId) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (relatedScheduledReportId != null) {
            params.push(`relatedScheduledReportId=${relatedScheduledReportId}`);
        }
        return this.rest.get(`${this.baseUrl}/statistics/jobs`, ...params);
    }
    /**
     * Retrieves the status of one report job.
     * @Return: EntityResponse<JobStatus>
     */
    getJob(id) {
        return this.rest.get(`${this.baseUrl}/statistics/job/${id}`);
    }
    /**
     * Updates the status of one report job.
     * @Return: EntityResponse<JobStatus>
     */
    updateJob(id, status) {
        const params = new Array();
        if (status != null) {
            params.push(`status=${status}`);
        }
        return this.rest.put(`${this.baseUrl}/statistics/job/${id}`, null, ...params);
    }
    /**
     * Deletes one report job. The job generation must be completed, either successfully or with an error. Returns error if the job is still running.
     * @Return: ActionResponse
     */
    deleteJob(id, status) {
        const params = new Array();
        if (status != null) {
            params.push(`status=${status}`);
        }
        return this.rest.delete(`${this.baseUrl}/statistics/job/${id}`, ...params);
    }
    /**
     * Retrieves the contents of one successfully generated report and returns it as a stream.
     * @Return: StreamContent
     */
    getJobFile(id) {
        return this.rest.download(`reports`, `${this.baseUrl}/statistics/job/${id}/file`);
    }
}
/** @nocollapse */ ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ ReportsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: ReportsService, factory: ReportsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReportsService, [{
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
     * Update schedule for a set of rules
     * @Return: ActionResponse
     */
    updateScheduleForRules(body) {
        return this.rest.put(`${this.baseUrl}/schedule`, typeof body === 'object' ? JSON.stringify(body) : body);
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
     * Arm (Enable analytics rules) on group of sensors or all sensors in site (folder)
     * @Return: ActionResponse
     */
    arm(folderId, folderExtId, sensorId, sensorExtId) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (sensorExtId != null) {
            params.push(`sensorExtId=${sensorExtId}`);
        }
        return this.rest.post(`${this.baseUrl}/arm`, null, ...params);
    }
    /**
     * Disarm (Disable analytics rules) on group of sensors or all sensors in site (folder)
     * @Return: ActionResponse
     */
    disarm(folderId, folderExtId, sensorId, sensorExtId) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (sensorExtId != null) {
            params.push(`sensorExtId=${sensorExtId}`);
        }
        return this.rest.post(`${this.baseUrl}/disarm`, null, ...params);
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
     * Export single rule as Json stream
     * @Return: Rule Json as StreamContent
     */
    exportRule(id) {
        return this.rest.download(`rules`, `${this.baseUrl}/${id}/export`);
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
     * Get rules Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=RuleId)
     */
    mapExternalIds(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/map-external-ids`, ...params);
    }
    /**
     * Find rules by filters
     * @Return: QueryResponse<Rule>
     */
    find(folderId, physical, applianceId, sensorId, search, behaviorType, exclude, severity, sort, page, pageSize) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (physical != null) {
            params.push(`physical=${physical}`);
        }
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
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
        if (exclude != null) {
            params.push(`exclude=${exclude}`);
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
    exportFormat(folderId, sensorId, search, behaviorType, severity, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`rules`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Find anomaly rules by filters
     * @Return: QueryResponse<Rule>
     */
    findAnomalyRules(folderId, physical, sensorId, search, severity, sort, page, pageSize) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (physical != null) {
            params.push(`physical=${physical}`);
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
    /**
     * Pause analytics detections on site (folder) for a specified time frame
     * @Return: ActionResponse
     */
    pause(folderId, folderExtId, from, to) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        return this.rest.post(`${this.baseUrl}/pause`, null, ...params);
    }
    /**
     * Resume analytics on site (folder) that was paused
     * @Return: ActionResponse
     */
    resume(folderId, folderExtId) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (folderExtId != null) {
            params.push(`folderExtId=${folderExtId}`);
        }
        return this.rest.post(`${this.baseUrl}/resume`, null, ...params);
    }
    /**
     * Trigger test event on rule
     * @Return: ActionResponse
     */
    triggerTestEvent(id) {
        return this.rest.post(`${this.baseUrl}/${id}/trigger-test-event`, null);
    }
}
/** @nocollapse */ RulesService.ɵfac = function RulesService_Factory(t) { return new (t || RulesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ RulesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: RulesService, factory: RulesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RulesService, [{
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
    find(page, pageSize) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}`, ...params);
    }
}
/** @nocollapse */ ScheduledReportsService.ɵfac = function ScheduledReportsService_Factory(t) { return new (t || ScheduledReportsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ ScheduledReportsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: ScheduledReportsService, factory: ScheduledReportsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScheduledReportsService, [{
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
     * @Return: QueryResponse<Schedule>
     */
    getFolderSchedules(folderId, sort, page, pageSize) {
        const params = new Array();
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
        return this.rest.get(`${this.baseUrl}/folder`, ...params);
    }
}
/** @nocollapse */ SchedulesService.ɵfac = function SchedulesService_Factory(t) { return new (t || SchedulesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SchedulesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SchedulesService, factory: SchedulesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SchedulesService, [{
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
     * Perform metadata search by the similarity for another object
     * @Return: EntityResponse<SearchStatus>
     */
    searchForSimilar(body) {
        return this.rest.post(`${this.baseUrl}/similar`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Get search session status
     * @Return: EntityResponse<SearchStatus>
     */
    getSearchStatus(sessionId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/status`);
    }
    /**
     * Cancel search session and drop results
     * @Return: ActionResponse
     */
    cancelSearchSession(sessionId) {
        return this.rest.delete(`${this.baseUrl}/sessions/${sessionId}`);
    }
    /**
     * Stop search session
     * @Return: ActionResponse
     */
    stopSearchSession(sessionId) {
        return this.rest.post(`${this.baseUrl}/sessions/${sessionId}/stop`, null);
    }
    /**
     * Get single search event item by id and sessionId
     * @Return: EntityResponse<SearchDefinition>
     */
    getEvent(sessionId, eventId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/event/${eventId}`);
    }
    /**
     * Get search event image [response content type: image/jpeg]
     * @Return: StreamingOutput of the image
     */
    getEventImage(sessionId, eventId) {
        return this.rest.download(`search`, `${this.baseUrl}/sessions/${sessionId}/image/${eventId}`);
    }
    /**
     * Get multiple search events by list of ids
     * @Return: EntitiesResponse<SearchDefinition>
     */
    listEvents(sessionId, eventId) {
        const params = new Array();
        if (eventId != null) {
            params.push(`eventId=${eventId}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/list`, ...params);
    }
    /**
     * Find list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: QueryResponse<SearchDefinition>
     */
    findEvents(sessionId, body) {
        return this.rest.post(`${this.baseUrl}/sessions/${sessionId}/find`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Find list of sensor Ids related to the search results
     * @Return: EntitiesResponse<StringIntValue>
     */
    findSensorsIds(sessionId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensorsIds`);
    }
    /**
     * Get total search events count by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: QueryResponse<SearchDefinition> entities list is null
     */
    totalEvents(sessionId, body) {
        return this.rest.post(`${this.baseUrl}/sessions/${sessionId}/total`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Export list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
     * @Return: StreamContent
     */
    exportEvents(sessionId, format, fields, fileName, body) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fields != null) {
            params.push(`fields=${fields}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`search`, `${this.baseUrl}/sessions/${sessionId}/export`, typeof body === 'object' ? JSON.stringify(body) : body, ...params);
    }
    /**
     * Get events count overtime for all events in the system
     * @Return: EntityResponse<EventCountTimeSeries>
     */
    getEventsCountOvertime(sessionId, sensorId, objectType, from, to, interval, labelFormat) {
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
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/overtime`, ...params);
    }
    /**
     * Get search event object crops (for animation)
     * @Return: EntityResponse<TimestampedCropsData>
     */
    getEventObjectCropsData(sessionId, eventId) {
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/events/${eventId}/crops`);
    }
    /**
     * Find objects paths aggregation for sensor FOV (for path visualizer)
     * @Return: EntityResponse<SensorPaths>
     */
    getSensorPaths(sessionId, sensorId, from, to, objectType, points) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (points != null) {
            params.push(`points=${points}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-paths/${sensorId}`, ...params);
    }
    /**
     * Get all search events related to the path
     * @Return: QueryResponse<SearchEvent>
     */
    getSensorPathEvents(sessionId, sensorId, pathId, page, pageSize) {
        const params = new Array();
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-paths/${sensorId}/${pathId}/events`, ...params);
    }
    /**
     * Find objects heatmap for sensor FOV (for path visualizer)
     * @Return: EntityResponse<SensorPaths>
     */
    getSensorHeatmap(sessionId, sensorId, from, to, objectType, dim) {
        const params = new Array();
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (objectType != null) {
            params.push(`objectType=${objectType}`);
        }
        if (dim != null) {
            params.push(`dim=${dim}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-heatmap/${sensorId}`, ...params);
    }
    /**
     * Get all search events related to the heatmap
     * @Return: QueryResponse<SearchEvent>
     */
    getSensorHeatmapEvents(sessionId, sensorId, row, col, page, pageSize) {
        const params = new Array();
        if (row != null) {
            params.push(`row=${row}`);
        }
        if (col != null) {
            params.push(`col=${col}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/sessions/${sessionId}/sensor-heatmap/${sensorId}/events`, ...params);
    }
}
/** @nocollapse */ SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SearchService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SearchService, [{
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
     * Get sensors Ids by list of external ids
     * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=SensorId)
     */
    mapExternalIds(id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.get(`${this.baseUrl}/map-external-ids`, ...params);
    }
    /**
     * Find sensors by filters
     * @Return: QueryResponse<Sensor>
     */
    find(folderId, subFolders, applianceId, physical, search, type, status, stream, sort, page, pageSize) {
        const params = new Array();
        if (folderId != null) {
            params.push(`folderId=${folderId}`);
        }
        if (subFolders != null) {
            params.push(`subFolders=${subFolders}`);
        }
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
        }
        if (physical != null) {
            params.push(`physical=${physical}`);
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
    exportFormat(folderId, subFolders, search, type, status, stream, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sensors`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get single sensor preset data by id
     * @Return: EntityResponse<Preset>
     */
    getPreset(id) {
        return this.rest.get(`${this.baseUrl}/${id}/preset`);
    }
    /**
     * Set single sensor preset data
     * @Return: EntityResponse<Preset>
     */
    setPreset(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/preset`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Reset single sensor preset back to the default
     * @Return: EntityResponse<Preset>
     */
    resetPreset(id, body) {
        return this.rest.delete(`${this.baseUrl}/${id}/preset/reset`);
    }
    /**
     * Export single sensor preset (including calibration) as Json stream
     * @Return: Sensor preset Json as StreamContent
     */
    exportPreset(id) {
        return this.rest.download(`sensors`, `${this.baseUrl}/${id}/preset/export`);
    }
    /**
     * Get sensor reference image [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImage(id) {
        return this.rest.download(`sensors`, `${this.baseUrl}/${id}/ref-image`);
    }
    /**
     * Clear sensor reference image
     * @Return: ActionResponse
     */
    clearRefImage(id) {
        return this.rest.delete(`${this.baseUrl}/${id}/ref-image`);
    }
    /**
     * Get sensor reference image for a specific timestamp [response content type: image/jpeg]
     * @Return: StreamingOutput of the reference image
     */
    getRefImageAt(id, timestamp) {
        return this.rest.download(`sensors`, `${this.baseUrl}/${id}/ref-image-at/${timestamp}`);
    }
    /**
     * Get sensor reference image Url suffix
     * @Return: ActionResponse key is sensor Id and data is the URL suffix
     */
    getRefImageUrl(id) {
        return this.rest.get(`${this.baseUrl}/${id}/ref-image-url`);
    }
    /**
     * Set sensor reference image [put binary image in body with content type: image/jpeg]
     * @Return: ActionResponse
     */
    setRefImage(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/ref-image`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Return a cropped Jpeg image out of sensor reference image for Asset Protection rule
     * @Return: ActionResponse - the encoded jpeg as base64 is in the data key
     */
    cropImage(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}/crop`, typeof body === 'object' ? JSON.stringify(body) : body);
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
    /**
     * Get list of all detection models available for the account
     * @Return: EntitiesResponse<DetectionModel>
     */
    getAllModels() {
        return this.rest.get(`${this.baseUrl}/models`);
    }
    /**
     * Get list of all detection models per sensor
     * @Return: EntitiesResponse<DetectionModel>
     */
    getSensorModels(id) {
        return this.rest.get(`${this.baseUrl}/${id}/models`);
    }
    /**
     * Add detection model to sensor
     * @Return: ActionResponse
     */
    addSensorModel(id, modelId) {
        return this.rest.post(`${this.baseUrl}/${id}/models/${modelId}`, null);
    }
    /**
     * Remove detection model from sensor
     * @Return: ActionResponse
     */
    removeSensorModel(id, modelId) {
        return this.rest.delete(`${this.baseUrl}/${id}/models/${modelId}`);
    }
}
/** @nocollapse */ SensorsService.ɵfac = function SensorsService_Factory(t) { return new (t || SensorsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SensorsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SensorsService, factory: SensorsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SensorsService, [{
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
     * Find list of accounts and filter but replace group Ids with group names
     * @Return: QueryResponse<Account>
     */
    report(search, type, status, sort, page, pageSize) {
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
        return this.rest.get(`${this.baseUrl}/report`, ...params);
    }
    /**
     * Get account hierarchy
     * @Return: EntityResponse<TreeNode>
     */
    tree(id, includeSensors, status, behaviorType) {
        const params = new Array();
        if (includeSensors != null) {
            params.push(`includeSensors=${includeSensors}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (behaviorType != null) {
            params.push(`behaviorType=${behaviorType}`);
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
    exportFormat(name, type, status, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
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
    /**
     * Get default geo location
     * @Return: EntityResponse<Coordinate> The account location
     */
    getDefaultLocation(id) {
        return this.rest.get(`${this.baseUrl}/${id}/geoLocation`);
    }
    /**
     * Get account usage report (for billing)
     * List of sensor with total active time (minutes) and total of billable sensors
     * @Return: EntityResponse<UsageReport>
     */
    getUsageReport(id, year, month) {
        return this.rest.get(`${this.baseUrl}/${id}/usage-report/${year}/${month}`);
    }
    /**
     * Get sensor usage report (for billing)
     * @Return: EntityResponse<TimeDataSeries<SensorStatusCode>>
     */
    getSensorUsageReport(id, sensorId, year, month) {
        return this.rest.get(`${this.baseUrl}/${id}/sensor-usage-report/${sensorId}/${year}/${month}`);
    }
    /**
     * Export account usage report to a file (for billing)
     * @Return: StreamContent
     */
    exportUsageReport(id, year, month, format, fileName) {
        const params = new Array();
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sys-accounts`, `${this.baseUrl}/${id}/export-usage-report/${year}/${month}`, ...params);
    }
    /**
     * Export all accounts usage report to a file (for operations)
     * @Return: StreamContent
     */
    exportAllAccountsUsageReport(year, month) {
        return this.rest.download(`sys-accounts`, `${this.baseUrl}/export-usage-report/${year}/${month}`);
    }
}
/** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysAccountsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysAccountsService, [{
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
    find(accountId, search, status, agentStatus, sort, page, pageSize) {
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
        if (agentStatus != null) {
            params.push(`agentStatus=${agentStatus}`);
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
    exportFormat(folderId, subFolders, search, status, agentStatus, sort, format, fields) {
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
        if (agentStatus != null) {
            params.push(`agentStatus=${agentStatus}`);
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
     * Open reverse SSH tunnel (for 60 minutes)
     * @Return: ActionResponse
     */
    openSsh(id) {
        return this.rest.post(`${this.baseUrl}/${id}/open-ssh`, null);
    }
    /**
     * Close reverse SSH tunnel
     * @Return: ActionResponse
     */
    closeSsh(id) {
        return this.rest.post(`${this.baseUrl}/${id}/close-ssh`, null);
    }
    /**
     * Rebuild appliance configuration and deploy the configuration to the device manager
     * @Return: ActionResponse
     */
    redeploy(id) {
        return this.rest.post(`${this.baseUrl}/${id}/redeploy`, null);
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
    getAppliancesCountByStatus(accountId, folderId, subFolders) {
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
        return this.rest.get(`${this.baseUrl}/count/by-status`, ...params);
    }
    /**
     * Aggregate appliances count distribution by state
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByState(accountId, folderId, subFolders) {
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
        return this.rest.get(`${this.baseUrl}/count/by-state`, ...params);
    }
    /**
     * Aggregate appliances count distribution by agent status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByAgentStatus(accountId, folderId, subFolders) {
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
        return this.rest.get(`${this.baseUrl}/count/by-agent-status`, ...params);
    }
    /**
     * Aggregate appliances count distribution by agent state
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getAppliancesCountByAgentState(accountId, folderId, subFolders) {
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
        return this.rest.get(`${this.baseUrl}/count/by-agent-state`, ...params);
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
    /**
     * Upgrade batch of appliances
     * @Return:  EntitiesResponse<UpdateStatus>
     */
    batchUpgrade(configId, versionId, id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.post(`${this.baseUrl}/config/${configId}/${versionId}/batch-upgrade`, null, ...params);
    }
    /**
     * Find list of device update status entries by filter
     * @Return:  QueryResponse<UpdateStatus>
     */
    findUpgradeStatus(accountId, applianceId, userId, commandId, batchId, from, to, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (applianceId != null) {
            params.push(`applianceId=${applianceId}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (commandId != null) {
            params.push(`commandId=${commandId}`);
        }
        if (batchId != null) {
            params.push(`batchId=${batchId}`);
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
        return this.rest.get(`${this.baseUrl}/batch-upgrade`, ...params);
    }
    /**
     * Find list of devices configurations (configured vs. actual)
     * @Return:  EntityResponse<ApplianceConfigReport>
     */
    findDevicesConfigurations(accountId, search, configId, versionId, unmatched, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (configId != null) {
            params.push(`configId=${configId}`);
        }
        if (versionId != null) {
            params.push(`versionId=${versionId}`);
        }
        if (unmatched != null) {
            params.push(`unmatched=${unmatched}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/actual-config`, ...params);
    }
    /**
     * Export list of devices configurations (configured vs. actual)
     * @Return:  StreamingOutput of the report file
     */
    exportDevicesConfigurations(accountId, search, configId, versionId, unmatched, format, fileName) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (configId != null) {
            params.push(`configId=${configId}`);
        }
        if (versionId != null) {
            params.push(`versionId=${versionId}`);
        }
        if (unmatched != null) {
            params.push(`unmatched=${unmatched}`);
        }
        if (format != null) {
            params.push(`format=${format}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sys-appliances`, `${this.baseUrl}/actual-config/export`, ...params);
    }
}
/** @nocollapse */ SysAppliancesService.ɵfac = function SysAppliancesService_Factory(t) { return new (t || SysAppliancesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysAppliancesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysAppliancesService, factory: SysAppliancesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysAppliancesService, [{
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
/** @nocollapse */ SysConfigurationsService.ɵfac = function SysConfigurationsService_Factory(t) { return new (t || SysConfigurationsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysConfigurationsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysConfigurationsService, factory: SysConfigurationsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysConfigurationsService, [{
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
        return this.rest.get(`${this.baseUrl}/${accountId}`, ...params);
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
/** @nocollapse */ SysEventsService.ɵfac = function SysEventsService_Factory(t) { return new (t || SysEventsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysEventsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysEventsService, factory: SysEventsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysEventsService, [{
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
/** @nocollapse */ SysFeaturesGroupsService.ɵfac = function SysFeaturesGroupsService_Factory(t) { return new (t || SysFeaturesGroupsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysFeaturesGroupsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysFeaturesGroupsService, factory: SysFeaturesGroupsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysFeaturesGroupsService, [{
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
/** @nocollapse */ SysFeaturesService.ɵfac = function SysFeaturesService_Factory(t) { return new (t || SysFeaturesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysFeaturesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysFeaturesService, factory: SysFeaturesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysFeaturesService, [{
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
     * Update Bulk of API keys
     * @Return: ActionResponse
     */
    updateBulk(body) {
        return this.rest.put(`${this.baseUrl}/api-keys/bulk`, typeof body === 'object' ? JSON.stringify(body) : body);
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
/** @nocollapse */ SysKeysService.ɵfac = function SysKeysService_Factory(t) { return new (t || SysKeysService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysKeysService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysKeysService, factory: SysKeysService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysKeysService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of all detection models related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysModelsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/models';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Create new Detection Model
     * @Return: EntityResponse<DetectionModel>
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Update new Detection Model
     * @Return: EntityResponse<DetectionModel>
     */
    update(body) {
        return this.rest.put(`${this.baseUrl}`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Delete Detection Model
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single Detection Model by id
     * @Return: EntityResponse<DetectionModel>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Get list of all detection models
     * @Return: EntitiesResponse<DetectionModel>
     */
    find() {
        return this.rest.get(`${this.baseUrl}`);
    }
    /**
     * Get list of all detection models per sensor
     * @Return: EntitiesResponse<DetectionModel>
     */
    getSensorModels(sensorId) {
        return this.rest.get(`${this.baseUrl}/sensors/${sensorId}`);
    }
    /**
     * Add detection model to sensor
     * @Return: ActionResponse
     */
    addSensorModels(sensorId, id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.put(`${this.baseUrl}/sensors/${sensorId}`, null, ...params);
    }
    /**
     * Remove detection model from sensor
     * @Return: ActionResponse
     */
    removeSensorModels(sensorId, id) {
        const params = new Array();
        if (id != null) {
            params.push(`id=${id}`);
        }
        return this.rest.delete(`${this.baseUrl}/sensors/${sensorId}`, ...params);
    }
}
/** @nocollapse */ SysModelsService.ɵfac = function SysModelsService_Factory(t) { return new (t || SysModelsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysModelsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysModelsService, factory: SysModelsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysModelsService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * Reports related actions for system administrator only
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysReportsService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/reports';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Export all system sensors as CSV report stream
     * @Return: StreamContent
     */
    exportSensorsReport() {
        return this.rest.download(`sys-reports`, `${this.baseUrl}/sensors`);
    }
}
/** @nocollapse */ SysReportsService.ɵfac = function SysReportsService_Factory(t) { return new (t || SysReportsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysReportsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysReportsService, factory: SysReportsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysReportsService, [{
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
    /**
     * Collect object crops from agents based on the query parameters
     * @Return:  ActionResponse
     */
    fetchObjectsCrops(accountId, sensorId, ts, objectId, bucketFolder) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (sensorId != null) {
            params.push(`sensorId=${sensorId}`);
        }
        if (ts != null) {
            params.push(`ts=${ts}`);
        }
        if (objectId != null) {
            params.push(`objectId=${objectId}`);
        }
        if (bucketFolder != null) {
            params.push(`bucketFolder=${bucketFolder}`);
        }
        return this.rest.post(`${this.baseUrl}/fetch-objects-crops`, null, ...params);
    }
}
/** @nocollapse */ SysSensorsService.ɵfac = function SysSensorsService_Factory(t) { return new (t || SysSensorsService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysSensorsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysSensorsService, factory: SysSensorsService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysSensorsService, [{
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
    importAccountData(password, zipFile) {
        const params = new Array();
        if (password != null) {
            params.push(`password=${password}`);
        }
        return this.rest.upload(zipFile, `${this.baseUrl}/accounts/import`, ...params);
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
    importConfigurations(zipFile) {
        return this.rest.upload(zipFile, `${this.baseUrl}/configurations/import`);
    }
    /**
     * Backup entire system (configurations, users and accounts)
     * Filter parameter values: empty = backup all, config = backup configuration only, users = backup users only, <accountId> = backup account data
     * @Return: StreamContent
     */
    backupSystem(filter, fileName) {
        const params = new Array();
        if (filter != null) {
            params.push(`filter=${filter}`);
        }
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sys-system`, `${this.baseUrl}/backup`, ...params);
    }
    /**
     * Restore entire system (zip content)
     * @Return: ActionResponse
     */
    restoreSystem(zipFile) {
        return this.rest.upload(zipFile, `${this.baseUrl}/restore`);
    }
    /**
     * Publish message to all services to change their log level
     * @Return: ActionResponse
     */
    setLogLevel(level) {
        return this.rest.put(`${this.baseUrl}/log-level`, null);
    }
}
/** @nocollapse */ SysSystemService.ɵfac = function SysSystemService_Factory(t) { return new (t || SysSystemService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysSystemService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysSystemService, factory: SysSystemService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysSystemService, [{
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
        return this.rest.post(`${this.baseUrl}/${id}/roles`, typeof roles === 'object' ? JSON.stringify(roles) : roles);
    }
    /**
     * Update user roles in his accounts (merge with existing roles)
     * @Return: EntityResponse<User>
     */
    mergeRoles(id, roles) {
        return this.rest.put(`${this.baseUrl}/${id}/roles`, typeof roles === 'object' ? JSON.stringify(roles) : roles);
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
    exportFormat(search, type, status, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`sys-users`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Aggregate users count distribution by type
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getUsersCountByType() {
        return this.rest.get(`${this.baseUrl}/count/by-type`);
    }
    /**
     * Aggregate users count distribution by status
     * @Return:  EntityResponse<DistributionOfLong>
     */
    getUsersCountByStatus() {
        return this.rest.get(`${this.baseUrl}/count/by-status`);
    }
    /**
     * Get access token for user
     * @Return: ActionResponse
     */
    getUserToken(id, exp) {
        return this.rest.get(`${this.baseUrl}/${id}/token/${exp}`);
    }
}
/** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysUsersService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysUsersService, [{
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
class SysAuditLogService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/auditlog';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Find list of audit log entries and filter
     * @Return: QueryResponse<AuditLog>
     */
    find(accountId, userId, from, to, item, itemType, sort, page, pageSize) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (item != null) {
            params.push(`item=${item}`);
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
    exportFormat(accountId, userId, from, to, item, itemType, sort, format, fields, fileName) {
        const params = new Array();
        if (accountId != null) {
            params.push(`accountId=${accountId}`);
        }
        if (userId != null) {
            params.push(`userId=${userId}`);
        }
        if (from != null) {
            params.push(`from=${from}`);
        }
        if (to != null) {
            params.push(`to=${to}`);
        }
        if (item != null) {
            params.push(`item=${item}`);
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
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
/** @nocollapse */ SysAuditLogService.ɵfac = function SysAuditLogService_Factory(t) { return new (t || SysAuditLogService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysAuditLogService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysAuditLogService, factory: SysAuditLogService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysAuditLogService, [{
        type: Injectable
    }], function () { return [{ type: CoreConfig, decorators: [{
                type: Inject,
                args: ['config']
            }] }, { type: RestUtil }]; }, null); })();

/**
 * List of license related actions
 * @RequestHeader X-API-KEY The key to identify the application (portal)
 * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
class SysLicensesService {
    /**
     * Class constructor
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/licenses';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Get cluster id
     * @Return: ActionResponse
     */
    getClusterId() {
        return this.rest.get(`${this.baseUrl}/cluster/id`);
    }
    /**
     * Get deployment Id (for licensing)
     * @Return: ActionResponse
     */
    getDeploymentId() {
        return this.rest.get(`${this.baseUrl}/deployment/id`);
    }
    /**
     * Get active license (combined license from all licenses)
     * @Return: EntityResponse<License>
     */
    getActive() {
        return this.rest.get(`${this.baseUrl}/active`);
    }
    /**
     * Get single license by Id
     * @Return: EntityResponse<License>
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Delete license from the system
     * @Return: ActionResponse
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get all licenses
     * @Return: EntitiesResponse<License>
     */
    getAll() {
        return this.rest.get(`${this.baseUrl}`);
    }
    /**
     * Import license data from file
     * @Return: ActionResponse
     */
    import(licenseFile) {
        return this.rest.upload(licenseFile, `${this.baseUrl}/import`);
    }
}
/** @nocollapse */ SysLicensesService.ɵfac = function SysLicensesService_Factory(t) { return new (t || SysLicensesService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ SysLicensesService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: SysLicensesService, factory: SysLicensesService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SysLicensesService, [{
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
    /**
     * Mark the user who accepted the EULA agreement
     * @Return: ActionResponse
     */
    acceptEula() {
        return this.rest.put(`${this.baseUrl}/accept-eula`, null);
    }
}
/** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ UserService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
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
     * Send invitation to a new user for the current account
     * @Return: ActionResponse
     */
    invite(body) {
        return this.rest.post(`${this.baseUrl}/invite`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Register user for the account, it a user already exists, an invitation to the new account will be sent
     * @Return: EntityResponse<User>
     */
    register(body) {
        return this.rest.post(`${this.baseUrl}/register`, typeof body === 'object' ? JSON.stringify(body) : body);
    }
    /**
     * Create service account
     * @Return: ActionResponse
     */
    registerServiceAccount(body) {
        return this.rest.post(`${this.baseUrl}/service-account`, typeof body === 'object' ? JSON.stringify(body) : body);
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
    exportFormat(search, type, status, sort, format, fields, fileName) {
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
        if (fileName != null) {
            params.push(`fileName=${fileName}`);
        }
        return this.rest.download(`users`, `${this.baseUrl}/export`, ...params);
    }
    /**
     * Get access token for user
     * @Return: ActionResponse
     */
    getUserToken(id, exp) {
        return this.rest.get(`${this.baseUrl}/${id}/token/${exp}`);
    }
}
/** @nocollapse */ UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0.ɵɵinject('config'), i0.ɵɵinject(RestUtil)); };
/** @nocollapse */ UsersService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UsersService, [{
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
    SysModelsService,
    SysReportsService,
    SysSensorsService,
    SysSystemService,
    SysUsersService,
    SysAuditLogService,
    SysLicensesService,
    AccountsService,
    ApplianceDigitalIOService,
    ApplianceProfilesService,
    AppliancesService,
    AuditLogService,
    CalendarsService,
    CasesService,
    EventsService,
    FoldersService,
    GeoService,
    GroupsService,
    HealthEventsService,
    IntegrationsService,
    MembersService,
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
class EntityChangeSocketServiceOpen {
    constructor(token) {
        this.token = token;
    }
}

/*
   @WebSocketMessage
*/
class EventsSocketServiceOpen {
    constructor(token) {
        this.token = token;
    }
}

/*
   @WebSocketMessage
*/
class HealthSocketServiceOpen {
    constructor(token) {
        this.token = token;
    }
}

/*
   @WebSocketMessage
   This message is sent from the client to close ssh session using the ssh uri provided in the payload
*/
class SSHSocketCloseRequest {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
   This message is sent from the client to send the command in the payload to the remote message
*/
class SSHSocketInputRequest {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
   This message is sent from the client to open ssh session using the ssh uri provided in the payload
*/
class SSHSocketOpenRequest {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
   This message is pushed to the client upon any new output text from remote SSH
*/
class SSHSocketOutputResponse {
    constructor(op, error, payload) {
        this.op = op;
        this.error = error;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
*/
class SSHSocketServiceOpen {
    constructor(token) {
        this.token = token;
    }
}

/*
   @WebSocketMessage
   This message is sent to the server to set filter criteria for the entity type
*/
class SocketEntityChangeFilter {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
   Payload for entity change filter socket message
*/
class SocketEntityChangeFilterPayload {
    constructor(entityTypes) {
        this.entityTypes = entityTypes;
    }
}

/*
   @WebSocketMessage
   This message is pushed to the client upon any new entity change in the registered account
*/
class SocketEntityChangeNotification {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
   Payload for entity change notification socket message
*/
class SocketEntityChangePayload {
    constructor(op, sid, entity) {
        this.op = op;
        this.sid = sid;
        this.entity = entity;
    }
}

/*
   @WebSocketMessage
   This message is pushed to the client upon any new event in the registered account
*/
class SocketEventNotification {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
   Payload for event notification socket message
*/
class SocketEventNotificationPayload {
    constructor(code, error, event) {
        this.code = code;
        this.error = error;
        this.event = event;
    }
}

/*
   @WebSocketMessage
   This message is sent to the server to set filter criteria for the events
*/
class SocketEventsFilter {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}

/*
   @WebSocketMessage
   Payload for events filter socket message
*/
class SocketEventsFilterPayload {
    constructor(sensorIds, extSensorIds, ruleIds, extRuleIds, objectTypes, behaviorTypes, severityTypes, eventStatusCodes) {
        this.sensorIds = sensorIds;
        this.extSensorIds = extSensorIds;
        this.ruleIds = ruleIds;
        this.extRuleIds = extRuleIds;
        this.objectTypes = objectTypes;
        this.behaviorTypes = behaviorTypes;
        this.severityTypes = severityTypes;
        this.eventStatusCodes = eventStatusCodes;
    }
}

/*
   @WebSocketMessage
   This message is pushed to the client upon any new event in the registered account
*/
class SocketHealthStatusNotification {
    constructor(op, error, sensorStatus, agentStatus, applianceStatus) {
        this.op = op;
        this.error = error;
        this.sensorStatus = sensorStatus;
        this.agentStatus = agentStatus;
        this.applianceStatus = applianceStatus;
    }
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
/** @nocollapse */ CoreLibModule.ɵfac = function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); };
/** @nocollapse */ CoreLibModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: CoreLibModule });
/** @nocollapse */ CoreLibModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[CommonModule, HttpClientModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, HttpClientModule]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreLibModule, { imports: [CommonModule, HttpClientModule] }); })();

/* Public API Surface of ng-core-lib */

/**
 * Generated bundle index. Do not edit.
 */

export { AbsoluteTimeFrame, Account, AccountIdRequest, AccountIdsRequest, AccountRole, AccountRoleCode, AccountSettings, AccountStatSummary, AccountStatistics, AccountStatusCode, AccountTypeCode, AccountTypeSummary, AccountsMonthStatisticsRequest, AccountsService, AccountsServiceChangeGroupsRequest, AccountsServiceChangeNameRequest, AccountsServiceChangeStatusRequest, AccountsServiceChangeTypeRequest, AccountsServiceCreateRequest, AccountsServiceExportRequest, AccountsServiceFindFoldersRequest, AccountsServiceFindRequest, AccountsServiceLogicalTreeRequest, AccountsServicePhysicalTreeRequest, AccountsServiceResetRequest, AccountsServiceTreeRequest, AccountsServiceUpdateRequest, ActionModeCode, ActionResponse, ActiveCode, AddSensorModelRequest, AddSensorModelsRequest, Agent, AgentStateMask, AgentStatus, AgentStatusCode, AnalysisResult, AnomalyEventInfo, AnomalyService, AnomalyServiceFindEventsRequest, AnomalyServiceFindRequest, AnomalyServiceSensorPresetRequest, AnomalyServiceUpdateRequest, AnomalyServiceUpdateRuleRequest, ApiKey, ApiKeyIdRequest, Appliance, ApplianceCapabilities, ApplianceCommand, ApplianceCommandCode, ApplianceCommandIdRequest, ApplianceConfigReport, ApplianceConfigVersion, ApplianceConfiguration, ApplianceDigitalIOService, ApplianceDiscovery, ApplianceIdAgentIdRequest, ApplianceIdRequest, ApplianceKpiDataPoint, ApplianceKpiTimeSeries, ApplianceKpiTimestamped, ApplianceLogBatch, ApplianceLogEntry, ApplianceProfile, ApplianceProfileCreateRequest, ApplianceProfileFindRequest, ApplianceProfileIdRequest, ApplianceProfileIdsRequest, ApplianceProfileUpdateBulkRequest, ApplianceProfileUpdateRequest, ApplianceProfilesService, ApplianceRegistration, ApplianceServiceDeleteCommandRequest, ApplianceStateMask, ApplianceStatus, ApplianceStatusCode, ApplianceStatusTimeSeries, ApplianceStatusTimestamped, AppliancesCountRequest, AppliancesService, AppliancesServiceAddSensorRequest, AppliancesServiceBulkAttachRequest, AppliancesServiceBulkDetachRequest, AppliancesServiceChangeConfigurationRequest, AppliancesServiceChangeFolderRequest, AppliancesServiceChangeMachineIdRequest, AppliancesServiceChangeNameRequest, AppliancesServiceExportRequest, AppliancesServiceExportSensorsRequest, AppliancesServiceFindRequest, AppliancesServiceFindSensorsRequest, AppliancesServiceGetCommandsRequest, AppliancesServiceGetLogsRequest, AppliancesServiceImportSensorsRequest, AppliancesServiceRegisterApplianceRequest, AppliancesServiceSetCommandRequest, AppliancesServiceStatusOvertimeRequest, AppliancesServiceUpdateApplianceRequest, Attribute, AttributesMask, AuditLog, AuditLogIdRequest, AuditLogService, AuditLogServiceExportRequest, AuditLogServiceFindRequest, BaseEntity, BehaviorTypeCode, BoundingBox, BoundingMap, Calendar, CalendarIdRequest, CalendarIdsRequest, CalendarsService, CalendarsServiceCreateRequest, CalendarsServiceFindRequest, CalendarsServiceFolderRequest, CalendarsServiceImportRequest, CalendarsServiceImportUrlRequest, CalendarsServiceUpdateRequest, CaseEventObjects, CaseIdRequest, CaseInfo, CasesService, CasesServiceAddEventsRequest, CasesServiceCreateRequest, CasesServiceDeleteEventsRequest, CasesServiceFindRequest, CasesServiceGetEventCropsRequest, CasesServiceUpdateEventDescriptionRequest, CasesServiceUpdateRequest, ChangeGeoAreaRequest, ChangeGeoLocationRequest, ChangeHealthThresholdsRequest, ChangePasswordRequest, ChangeTimezoneRequest, ClusterIdRequest, ColorCode, ColorTypeCode, CommandStatusCode, ComponentConfiguration, ComponentVariables, Configuration, ConfigurationIdRequest, ConfigurationModelRequest, ConfigurationTargetRequest, ConfigurationTemplate, ConfigurationTemplateIdRequest, ConfigurationVersion, ConfigurationVersionIdRequest, Coordinate, CoreConfig, CoreLibModule, DayOfWeekCode, DetectionModel, DetectionModelIdRequest, DigitalIO, DigitalIOCreateRequest, DigitalIOFindRequest, DigitalIOIdRequest, DigitalIOStateMask, DigitalIOStatusCode, DigitalIOUpdateRequest, Dimension, DiskInfo, DistributionOfLong, DistributionOfString, DockerCredentials, EdgeEventImage, EdgeEventInfo, EdgeEventInfoBody, EdgeEventInfoMessage, EdgeEventObject, EdgeMetadata, EdgeMetadataBody, EdgeMetadataMessage, Embedding, EmptyRequest, EmptyResponse, EntitiesResponse, EntitiesResponseOfAccount, EntitiesResponseOfAccountStatSummary, EntitiesResponseOfAccountStatistics, EntitiesResponseOfAccountTypeSummary, EntitiesResponseOfApiKey, EntitiesResponseOfAppliance, EntitiesResponseOfApplianceAgents, EntitiesResponseOfApplianceCommand, EntitiesResponseOfApplianceConfiguration, EntitiesResponseOfApplianceProfile, EntitiesResponseOfAuditLog, EntitiesResponseOfCalendar, EntitiesResponseOfCaseInfo, EntitiesResponseOfComponentConfiguration, EntitiesResponseOfConfiguration, EntitiesResponseOfDetectionModel, EntitiesResponseOfDigitalIO, EntitiesResponseOfDistributionOfLong, EntitiesResponseOfEvent, EntitiesResponseOfFeature, EntitiesResponseOfFeaturesGroup, EntitiesResponseOfFolder, EntitiesResponseOfGroup, EntitiesResponseOfIntegration, EntitiesResponseOfIntegrationAction, EntitiesResponseOfIntegrationStatus, EntitiesResponseOfLicense, EntitiesResponseOfReportDefinition, EntitiesResponseOfRule, EntitiesResponseOfRuleSpec, EntitiesResponseOfSchedule, EntitiesResponseOfScheduledReport, EntitiesResponseOfSearchDefinition, EntitiesResponseOfSearchEvent, EntitiesResponseOfSensor, EntitiesResponseOfSensorStatus, EntitiesResponseOfStringIntValue, EntitiesResponseOfStringKeyValue, EntitiesResponseOfTimestampedCrop, EntitiesResponseOfUpdateStatus, EntityChangeSocketServiceOpen, EntityResponse, EntityResponseOfAccount, EntityResponseOfApiKey, EntityResponseOfAppliance, EntityResponseOfApplianceAgents, EntityResponseOfApplianceConfiguration, EntityResponseOfApplianceDiscovery, EntityResponseOfApplianceKpiTimeSeries, EntityResponseOfApplianceProfile, EntityResponseOfApplianceStatusTimeSeries, EntityResponseOfAuditLog, EntityResponseOfCalendar, EntityResponseOfCaseInfo, EntityResponseOfComponentConfiguration, EntityResponseOfConfiguration, EntityResponseOfConfigurationTemplate, EntityResponseOfConfigurationVersion, EntityResponseOfCoordinate, EntityResponseOfDetectionModel, EntityResponseOfDigitalIO, EntityResponseOfDistributionOfLong, EntityResponseOfEvent, EntityResponseOfEventCountTimeSeries, EntityResponseOfFeature, EntityResponseOfFeaturesGroup, EntityResponseOfFolder, EntityResponseOfGeoReferenceData, EntityResponseOfGroup, EntityResponseOfHealthEvent, EntityResponseOfIntegration, EntityResponseOfIntegrationAction, EntityResponseOfJobStatus, EntityResponseOfLicense, EntityResponseOfLoginData, EntityResponseOfMember, EntityResponseOfPreset, EntityResponseOfReportDefinition, EntityResponseOfRule, EntityResponseOfSchedule, EntityResponseOfScheduledReport, EntityResponseOfSearchDefinition, EntityResponseOfSearchEvent, EntityResponseOfSearchStatus, EntityResponseOfSensor, EntityResponseOfSensorAnalysisResults, EntityResponseOfSensorAnomalyInfo, EntityResponseOfSensorHeatmap, EntityResponseOfSensorPaths, EntityResponseOfSensorStatus, EntityResponseOfSensorStatusTimeSeries, EntityResponseOfTimeline, EntityResponseOfTimestampedCrop, EntityResponseOfTimestampedCropsData, EntityResponseOfTimestampedImage, EntityResponseOfTreeNode, EntityResponseOfUser, EntityResponseOfUserAccountInfo, EntityResponseUsageReport, EntityTypeCode, ErrorCode, Event, EventCountDataPoint, EventCountTimeSeries, EventIdRequest, EventIdsRequest, EventStatistics, EventStatusCode, EventTokenRequest, EventsCountByBehaviorRequest, EventsCountByObjectRequest, EventsCountByStatusRequest, EventsService, EventsServiceCreateRequest, EventsServiceExportRequest, EventsServiceFindInAreaRequest, EventsServiceFindRequest, EventsServiceGetIntegrationsRequestRequest, EventsServiceSetBulkStatusRequest, EventsServiceSetClipPathRequest, EventsServiceSetImagePathRequest, EventsServiceSetStatusRequest, EventsServiceStatisticsRequest, EventsSocketServiceOpen, ExportUsageReportRequest, ExternalModelResults, Feature, FeatureCode, FeatureIdRequest, FeatureIdsRequest, FeaturesGroup, FeaturesGroupIdRequest, FeaturesGroupIdsRequest, FeaturesGroupsServiceCreateRequest, FeaturesGroupsServiceFindRequest, FeaturesGroupsServiceSetFeaturesRequest, FeaturesGroupsServiceSetNameRequest, FeaturesGroupsServiceUpdateRequest, FeaturesServiceCreateRequest, FeaturesServiceFindRequest, FeaturesServiceUpdateRequest, FindUser, FindUserAccountRole, Folder, FolderExtIdsRequest, FolderIdRequest, FolderIdsRequest, FoldersService, FoldersServiceChangeParentRequest, FoldersServiceCreateRequest, FoldersServiceExportRequest, FoldersServiceFindRequest, FoldersServiceGetHierarchyRequest, FovGeoAttributes, GeoCircle, GeoControlPoint, GeoControlPoints, GeoPolygon, GeoReferenceData, GeoReferenceTest, GeoService, GeoServicesReferenceRequest, GeoServicesTransformRequest, Group, GroupIdRequest, GroupIdsRequest, GroupServiceFindRequest, GroupsService, GroupsServiceCreateRequest, GroupsServiceUpdateRequest, HealthCheckService, HealthEvent, HealthEventFindRequest, HealthEventIdRequest, HealthEventsService, HealthSocketServiceOpen, HealthThresholds, HeatmapCell, HeatmapRow, IntegrationAction, IntegrationActionCreateRequest, IntegrationActionFilter, IntegrationActionIdRequest, IntegrationActionIdsRequest, IntegrationActionUpdateRequest, IntegrationActionsFindRequest, IntegrationActionsFolderRequest, IntegrationIdRequest, IntegrationIdsRequest, IntegrationSpec, IntegrationStatus, IntegrationStatusCode, IntegrationStatusFindRequest, IntegrationStatusResponse, IntegrationTarget, IntegrationTypeCode, IntegrationsService, IntegrationsServiceCreateRequest, IntegrationsServiceFindRequest, IntegrationsServiceUpdateRequest, JobStatus, JobStatusCode, LevelTypeCode, License, LicenseIdRequest, LicenseImportRequest, LineCrossDirectionCode, LoginData, LoginParams, LongTuple, MachineIdRequest, MapClientCode, Mapping, Member, MemberByEmailRequest, MemberIdRequest, MemberRegistration, MemberTokenRequest, MembersService, MembersServiceExportRequest, MembersServiceFindRequest, MembersServiceInviteRequest, MembersServiceRegisterRequest, MembersServiceUpdateRequest, ModelAttributes, ObjectColor, ObjectCount, ObjectData, ObjectInfo, ObjectInstance, ObjectTypeCode, ObjectTypeCount, ObjectTypeNode, ObjectTypeReport, ObjectsPath, OnvifChannel, OpenClosedStatusCode, PeopleCountingReportRequest, Permission, PermissionMask, PlatformTypeCode, Point, PortMapping, Preset, ProductTypeCode, QueryResponse, QueryResponseOfAccount, QueryResponseOfAnomalyEventInfo, QueryResponseOfAppliance, QueryResponseOfApplianceConfigReport, QueryResponseOfAuditLog, QueryResponseOfCalendar, QueryResponseOfCaseInfo, QueryResponseOfComponentConfiguration, QueryResponseOfConfiguration, QueryResponseOfConfigurationTemplate, QueryResponseOfConfigurationVersion, QueryResponseOfEvent, QueryResponseOfFindUser, QueryResponseOfFolder, QueryResponseOfGroup, QueryResponseOfHealthEvent, QueryResponseOfIntegrationAction, QueryResponseOfIntegrationStatus, QueryResponseOfIntegrationStatusResponse, QueryResponseOfIntegrationTarget, QueryResponseOfJobStatus, QueryResponseOfMember, QueryResponseOfReportDefinition, QueryResponseOfRule, QueryResponseOfSchedule, QueryResponseOfScheduledReport, QueryResponseOfSearchDefinition, QueryResponseOfSearchEvent, QueryResponseOfSensor, QueryResponseOfSensorAnalysisResults, QueryResponseOfTreeItem, QueryResponseOfUpdateStatus, QueryResponseOfUser, Recurrent, RecurrentTimeFrame, RegisterServiceAccountRequest, RemoveSensorModelRequest, RemoveSensorModelsRequest, ReportDataTypeCode, ReportDefinition, ReportFindRequest, ReportFormatCode, ReportGenerationRequest, ReportGenerationRequestBody, ReportIdRequest, ReportIdsRequest, ReportTypeCode, ReportUpdateRequest, ReportsService, ReportsServiceCreateRequest, ReportsServiceFindRequest, ReportsServiceRulesSchedulesRequest, ReportsServiceSensorsRequest, ReportsServiceUpdateRequest, RestUtil, Rule, RuleAutoSensitivityCode, RuleColorCode, RuleDefault, RuleDefaultSensitivity, RuleExtIdsRequest, RuleIdRequest, RuleIdsRequest, RulePolygon, RuleSpec, RulesService, RulesServiceArmDisarmRequest, RulesServiceCreateRequest, RulesServiceExportRequest, RulesServiceFindAnomalyRequest, RulesServiceFindRequest, RulesServicePauseRequest, RulesServiceResumeRequest, RulesServiceUpdateRequest, RulesServiceUpdateScheduleForRulesRequest, RuntimeStatusCode, SSHInfo, SSHSocketCloseRequest, SSHSocketInputRequest, SSHSocketOpenRequest, SSHSocketOutputResponse, SSHSocketServiceOpen, Schedule, ScheduleIdRequest, ScheduleIdsRequest, ScheduledReport, ScheduledReportIdRequest, ScheduledReportIdsRequest, ScheduledReportsService, ScheduledReportsServiceCreateRequest, ScheduledReportsServiceFindRequest, ScheduledReportsServiceUpdateRequest, SchedulesService, SchedulesServiceCreateRequest, SchedulesServiceFindRequest, SchedulesServiceFolderParamsRequest, SchedulesServiceUpdateRequest, SearchBehavior, SearchColor, SearchDefinition, SearchEvent, SearchEventCountRequest, SearchEventCropsRequest, SearchEventExportRequest, SearchEventFindRequest, SearchEventFindRequestBody, SearchEventIdRequest, SearchEventListRequest, SearchIdRequest, SearchIdsRequest, SearchObject, SearchScopeCode, SearchService, SearchServiceCreateRequest, SearchServiceExecuteRequest, SearchServiceFindRequest, SearchServiceSimilarRequest, SearchServiceUpdateRequest, SearchSession, SearchSessionIdRequest, SearchShape, SearchStatus, SearchTimeCode, Sensitivity, Sensor, SensorAnalysisIdRequest, SensorAnalysisResults, SensorAnomalyInfo, SensorAnomalyRuleInfo, SensorConfigChangeMask, SensorDebugInfo, SensorDetectionModels, SensorDetectionModelsIdRequest, SensorExtIdsRequest, SensorHeatmap, SensorHeatmapEventsRequest, SensorHeatmapRequest, SensorIdRequest, SensorIdsRequest, SensorInfo, SensorPathEventsRequest, SensorPaths, SensorPathsRequest, SensorResolutionCode, SensorStateMask, SensorStatus, SensorStatusCode, SensorStatusTimeSeries, SensorStatusTimestamped, SensorTypeCode, SensorUsage, SensorUsageReport, SensorUsageReportRequest, SensorsCountRequest, SensorsGroup, SensorsService, SensorsServiceAttachRequest, SensorsServiceBulkCreateRequest, SensorsServiceChangeFolderRequest, SensorsServiceChangeFovRequest, SensorsServiceChangeGeoLocationRequest, SensorsServiceChangeNameRequest, SensorsServiceChangeStatusRequest, SensorsServiceCreateRequest, SensorsServiceCropImageRequest, SensorsServiceExportRequest, SensorsServiceFindRequest, SensorsServiceGetRefImageRequest, SensorsServiceSetRefImageRequest, SensorsServiceStatusOvertimeRequest, SensorsServiceUpdatePresetRequest, SensorsServiceUpdateRequest, ServiceAccountRegistration, Services, SeverityTypeCode, SocketEntityChangeFilter, SocketEntityChangeFilterPayload, SocketEntityChangeNotification, SocketEntityChangePayload, SocketEventNotification, SocketEventNotificationPayload, SocketEventsFilter, SocketEventsFilterPayload, SocketHealthStatusNotification, SocketOpCode, StatisticReport, StreamResponse, StreamTypeCode, StringIntValue, StringKeyValue, SwitchAccountRequest, SysAccountExportRequest, SysAccountImportRequest, SysAccountsService, SysApplianceBatchUpgradeFindRequest, SysApplianceBatchUpgradeRequest, SysApplianceConfigExportRequest, SysApplianceConfigReportRequest, SysApplianceGetLogsRequest, SysAppliancesCountRequest, SysAppliancesService, SysAppliancesServiceFindRequest, SysAppliancesServiceGetCommandsRequest, SysAuditLogService, SysAuditLogServiceExportRequest, SysAuditLogServiceFindRequest, SysConfigImportRequest, SysConfigurationsService, SysConfigurationsServiceCreateRequest, SysConfigurationsServiceCreateTemplateRequest, SysConfigurationsServiceCreateVersionRequest, SysConfigurationsServiceDeleteVersionRequest, SysConfigurationsServiceFindRequest, SysConfigurationsServiceFindTemplateRequest, SysConfigurationsServiceUpdateRequest, SysConfigurationsServiceUpdateTemplateRequest, SysConfigurationsServiceUpdateVersionRequest, SysEventIdRequest, SysEventsService, SysEventsServiceFindInAreaRequest, SysEventsServiceStatisticsRequest, SysExportAllAccountsUsageReportRequest, SysExportUsageReportRequest, SysFeaturesGroupsService, SysFeaturesService, SysKeysService, SysKeysServiceCreateApiKeyRequest, SysKeysServiceCreatePasswordRequest, SysKeysServiceCreateTokenRequest, SysKeysServiceUpdateBulkRequest, SysLicensesService, SysModelsService, SysModelsServiceCreateModelRequest, SysModelsServiceUpdateModelRequest, SysReportsService, SysSensorUsageReportRequest, SysSensorsCountRequest, SysSensorsFetchObjectsCropsRequest, SysSensorsService, SysSensorsServiceFindRequest, SysSetLogLevelRequest, SysSystemBackupRequest, SysSystemRestoreRequest, SysSystemService, SysUsageReportRequest, SysUsersService, Threshold, Thresholds, TimeFrame, TimeSlot, TimeUnitCode, Timeline, TimestampedCrop, TimestampedCropsData, TimestampedImage, TokenRequest, TrafficAnalysisReportRequest, TransformationTypeCode, TreeItem, TreeNode, TriggerTestHealthEventRequest, TriggerTestHealthEventRequestBody, UpdateScheduleForRules, UpdateStatus, UsageReport, UsageReportRequest, User, UserAccount, UserAccountInfo, UserByEmailRequest, UserIdRequest, UserIdsRequest, UserInvitation, UserRegistration, UserService, UserServiceChangeMobileRequest, UserServiceChangeNameRequest, UserServiceChangePasswordRequest, UserServiceCheckPasswordRequest, UserServiceLoginRequest, UserServiceResetPasswordRequest, UserServiceSendVerificationRequest, UserServiceSwitchAccountRequest, UserServiceVerifyLoginRequest, UserStatusCode, UserTokenRequest, UserTypeCode, UsersService, UsersServiceChangeDefaultAccountRequest, UsersServiceChangeMobileRequest, UsersServiceChangeNameRequest, UsersServiceChangeRoleRequest, UsersServiceChangeStatusRequest, UsersServiceChangeTypeRequest, UsersServiceCreateRequest, UsersServiceExportRequest, UsersServiceFindRequest, UsersServiceInviteRequest, UsersServiceRegisterRequest, UsersServiceSetRolesRequest, UsersServiceUpdateRequest, VMSGateway, VMSGatewayStateMask, VMSGatewayStatusCode, Verification, ViewTypeCode, VisualQualityCode, WebSocketMessageHeader, ZoneTypeCode, getToken, removeToken, setToken };
//# sourceMappingURL=agentvi-ng-core-lib.js.map
