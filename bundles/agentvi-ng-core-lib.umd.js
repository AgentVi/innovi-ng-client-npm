(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
   typeof define === 'function' && define.amd ? define('@agentvi/ng-core-lib', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
   (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.agentvi = global.agentvi || {}, global.agentvi["ng-core-lib"] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
})(this, (function (exports, i0, i1, operators, common) { 'use strict';

   function _interopNamespace(e) {
      if (e && e.__esModule) return e;
      var n = Object.create(null);
      if (e) {
         Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
               var d = Object.getOwnPropertyDescriptor(e, k);
               Object.defineProperty(n, k, d.get ? d : {
                  enumerable: true,
                  get: function () { return e[k]; }
               });
            }
         });
      }
      n["default"] = e;
      return Object.freeze(n);
   }

   var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
   var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

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
   var AbsoluteTimeFrame = /** @class */ (function () {
       function AbsoluteTimeFrame(name, startTime, endTime, active) {
           this.name = name;
           this.startTime = startTime;
           this.endTime = endTime;
           this.active = active;
       }
       return AbsoluteTimeFrame;
   }());

   /*
      Account role represents the role of the user in the account
   */
   var AccountRole = /** @class */ (function () {
       function AccountRole(accountId, role) {
           this.accountId = accountId;
           this.role = role;
       }
       return AccountRole;
   }());

   /*
      Account specific settings
   */
   var AccountSettings = /** @class */ (function () {
       function AccountSettings(retentionDays, objectColors, ruleColor, maskColor, enableAnomalyByDefault, dateFormat, dateTimeFormat, playerSourceUri, eventClipLengthSec) {
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
       return AccountSettings;
   }());

   /*
      Account statistic summary (provide info about account sensors and devices number compared to previous month)
   */
   var AccountStatSummary = /** @class */ (function () {
       function AccountStatSummary(accountId, accountName, monthId, channels, channelsPercentage, devices, devicesPercentage) {
           this.accountId = accountId;
           this.accountName = accountName;
           this.monthId = monthId;
           this.channels = channels;
           this.channelsPercentage = channelsPercentage;
           this.devices = devices;
           this.devicesPercentage = devicesPercentage;
       }
       return AccountStatSummary;
   }());

   /*
      Account types aggregator summary
   */
   var AccountTypeSummary = /** @class */ (function () {
       function AccountTypeSummary(type, typeName, accounts, accountsPercentage, channels, channelsPercentage, devices, devicesPercentage) {
           this.type = type;
           this.typeName = typeName;
           this.accounts = accounts;
           this.accountsPercentage = accountsPercentage;
           this.channels = channels;
           this.channelsPercentage = channelsPercentage;
           this.devices = devices;
           this.devicesPercentage = devicesPercentage;
       }
       return AccountTypeSummary;
   }());

   /*
      Sensor training analysis result for a single model
      This data model is used by the training process of Anomaly Detection
   */
   var AnalysisResult = /** @class */ (function () {
       function AnalysisResult(modelType, resultsPath, completedOn) {
           this.modelType = modelType;
           this.resultsPath = resultsPath;
           this.completedOn = completedOn;
       }
       return AnalysisResult;
   }());

   /*
      Subset of event info required by the anomaly service
   */
   var AnomalyEventInfo = /** @class */ (function () {
       function AnomalyEventInfo(eventId, objectIds, status) {
           this.eventId = eventId;
           this.objectIds = objectIds;
           this.status = status;
       }
       return AnomalyEventInfo;
   }());

   /*
      A single entry in appliance configuration report that lists all the devices in the system with their desired vs. actual configuration
   */
   var ApplianceConfigReport = /** @class */ (function () {
       function ApplianceConfigReport(accountId, accountName, accountType, applianceId, applianceName, machineId, groups, configId, versionId, actualConfigId, actualVersionId) {
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
       return ApplianceConfigReport;
   }());

   /*
      Appliance configuration version
   */
   var ApplianceConfigVersion = /** @class */ (function () {
       function ApplianceConfigVersion(versionId, description) {
           this.versionId = versionId;
           this.description = description;
       }
       return ApplianceConfigVersion;
   }());

   /*
      SW Configuration for appliance
   */
   var ApplianceConfiguration = /** @class */ (function () {
       function ApplianceConfiguration(configurationId, description, currentVersion, versions) {
           this.configurationId = configurationId;
           this.description = description;
           this.currentVersion = currentVersion;
           this.versions = versions;
       }
       return ApplianceConfiguration;
   }());

   /*
      Appliance KPIs data point
   */
   var ApplianceKpiDataPoint = /** @class */ (function () {
       function ApplianceKpiDataPoint(cpuAvg, cpuMax, ram, loadAvg, uploadSpeed, downloadSpeed) {
           this.cpuAvg = cpuAvg;
           this.cpuMax = cpuMax;
           this.ram = ram;
           this.loadAvg = loadAvg;
           this.uploadSpeed = uploadSpeed;
           this.downloadSpeed = downloadSpeed;
       }
       return ApplianceKpiDataPoint;
   }());

   /*
      Appliance KPIs list over time (CPU, RAM, LOAD)
   */
   var ApplianceKpiTimeSeries = /** @class */ (function () {
       function ApplianceKpiTimeSeries(label, interval, data) {
           this.label = label;
           this.interval = interval;
           this.data = data;
       }
       return ApplianceKpiTimeSeries;
   }());

   /*
      Data point in a series representing appliance KPI values in a specific timestamp
   */
   var ApplianceKpiTimestamped = /** @class */ (function () {
       function ApplianceKpiTimestamped(timestamp, label, value) {
           this.timestamp = timestamp;
           this.label = label;
           this.value = value;
       }
       return ApplianceKpiTimestamped;
   }());

   /*
      Appliance log entries batch sent by the device manager
   */
   var ApplianceLogBatch = /** @class */ (function () {
       function ApplianceLogBatch(containerId, containerName, containerTag, versionId, logs) {
           this.containerId = containerId;
           this.containerName = containerName;
           this.containerTag = containerTag;
           this.versionId = versionId;
           this.logs = logs;
       }
       return ApplianceLogBatch;
   }());

   /*
      Flatten appliance log entry to store as a single document in the elastic search
   */
   var ApplianceLogEntry = /** @class */ (function () {
       function ApplianceLogEntry(id, accountId, applianceId, containerId, containerName, containerTag, versionId, severity, timestamp, textPayload) {
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
       return ApplianceLogEntry;
   }());

   /*
      Appliance registration info
      This model is used when a user registers new appliance in the system
   */
   var ApplianceRegistration = /** @class */ (function () {
       function ApplianceRegistration(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId, deviceProfileId) {
           this.name = name;
           this.accountId = accountId;
           this.folderId = folderId;
           this.machineId = machineId;
           this.productType = productType;
           this.configurationId = configurationId;
           this.configurationVersionId = configurationVersionId;
           this.deviceProfileId = deviceProfileId;
       }
       return ApplianceRegistration;
   }());

   /*
      Appliance status list over time
   */
   var ApplianceStatusTimeSeries = /** @class */ (function () {
       function ApplianceStatusTimeSeries(label, interval, data) {
           this.label = label;
           this.interval = interval;
           this.data = data;
       }
       return ApplianceStatusTimeSeries;
   }());

   /*
      Data point in a series representing appliance status values in a specific timestamp
   */
   var ApplianceStatusTimestamped = /** @class */ (function () {
       function ApplianceStatusTimestamped(timestamp, label, value) {
           this.timestamp = timestamp;
           this.label = label;
           this.value = value;
       }
       return ApplianceStatusTimestamped;
   }());

   /*
      Attribute
   */
   var Attribute = /** @class */ (function () {
       function Attribute(name, type, valueString, valueInt, valueBool) {
           this.name = name;
           this.type = type;
           this.valueString = valueString;
           this.valueInt = valueInt;
           this.valueBool = valueBool;
       }
       return Attribute;
   }());

   /*
      Bounding Box of crop in a frame (inside 10000 x 10000 coordinate system)
   */
   var BoundingBox = /** @class */ (function () {
       function BoundingBox(maxX, maxY, minX, minY) {
           this.maxX = maxX;
           this.maxY = maxY;
           this.minX = minX;
           this.minY = minY;
       }
       return BoundingBox;
   }());

   /*
      Bounding Box of an area in a map (in WGS-84 coordinate system)
   */
   var BoundingMap = /** @class */ (function () {
       function BoundingMap(maxLat, maxLng, minLat, minLng) {
           this.maxLat = maxLat;
           this.maxLng = maxLng;
           this.minLat = minLat;
           this.minLng = minLng;
       }
       return BoundingMap;
   }());

   /*
      Coordinate of WGS-84 grid system
      See (https://en.wikipedia.org/wiki/World_Geodetic_System)
   */
   var Coordinate = /** @class */ (function () {
       function Coordinate(latitude, longitude, altitude) {
           this.lat = latitude;
           this.lon = longitude;
           this.alt = altitude;
       }
       return Coordinate;
   }());

   /*
      Object dimension on FOV
   */
   var Dimension = /** @class */ (function () {
       function Dimension(width, height) {
           this.width = width;
           this.height = height;
       }
       return Dimension;
   }());

   /*
      Disk information
   */
   var DiskInfo = /** @class */ (function () {
       function DiskInfo(name, totalBytes, usedBytes, usage) {
           this.name = name;
           this.totalBytes = totalBytes;
           this.usedBytes = usedBytes;
           this.usage = usage;
       }
       return DiskInfo;
   }());

   /*
      Distribution series result - keys are long values
   */
   var DistributionOfLong = /** @class */ (function () {
       function DistributionOfLong(label, data) {
           this.label = label;
           this.data = data;
       }
       return DistributionOfLong;
   }());

   /*
      Distribution series result - keys are long values
   */
   var DistributionOfString = /** @class */ (function () {
       function DistributionOfString(label, data) {
           this.label = label;
           this.data = data;
       }
       return DistributionOfString;
   }());

   /*
      Docker registry credentials to connect to docker
      Includes information where to access and get images
   */
   var DockerCredentials = /** @class */ (function () {
       function DockerCredentials(dockerUser, dockerPwd) {
           this.dockerUser = dockerUser;
           this.dockerPwd = dockerPwd;
       }
       return DockerCredentials;
   }());

   /*
      Edge Event Image
   */
   var EdgeEventImage = /** @class */ (function () {
       function EdgeEventImage(jpg, ts) {
           this.jpg = jpg;
           this.ts = ts;
       }
       return EdgeEventImage;
   }());

   /*
      Edge Event Info
   */
   var EdgeEventInfo = /** @class */ (function () {
       function EdgeEventInfo(behaviorType, clipPeriod, description, eventBboxes, eventId, eventImageTime, eventObjects, eventTime, eventType, externalId, jpegBuffers, objectType, ruleId, sensorId, severity) {
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
       return EdgeEventInfo;
   }());

   /*
      Edge Event Info message body
   */
   var EdgeEventInfoBody = /** @class */ (function () {
       function EdgeEventInfoBody(eventInfo) {
           this.eventInfo = eventInfo;
       }
       return EdgeEventInfoBody;
   }());

   /*
      Edge Raw event info message
   */
   var EdgeEventInfoMessage = /** @class */ (function () {
       function EdgeEventInfoMessage(id, op, ver, body) {
           this.id = id;
           this.op = op;
           this.ver = ver;
           this.body = body;
       }
       return EdgeEventInfoMessage;
   }());

   /*
      Edge Event Object
   */
   var EdgeEventObject = /** @class */ (function () {
       function EdgeEventObject(objectId, objectHistory) {
           this.objectId = objectId;
           this.objectHistory = objectHistory;
       }
       return EdgeEventObject;
   }());

   /*
      Edge Metadata
   */
   var EdgeMetadata = /** @class */ (function () {
       function EdgeMetadata(accountId, sensorId, objects) {
           this.accountId = accountId;
           this.sensorId = sensorId;
           this.objects = objects;
       }
       return EdgeMetadata;
   }());

   /*
      Edge Metadata message body
   */
   var EdgeMetadataBody = /** @class */ (function () {
       function EdgeMetadataBody(md) {
           this.md = md;
       }
       return EdgeMetadataBody;
   }());

   /*
      Edge Metadata message
   */
   var EdgeMetadataMessage = /** @class */ (function () {
       function EdgeMetadataMessage(id, op, ver, body) {
           this.id = id;
           this.op = op;
           this.ver = ver;
           this.body = body;
       }
       return EdgeMetadataMessage;
   }());

   /*
      Metadata object color description
   */
   var Embedding = /** @class */ (function () {
       function Embedding(version, data) {
           this.version = version;
           this.data = data;
       }
       return Embedding;
   }());

   /*
      Event count time series data point
   */
   var EventCountDataPoint = /** @class */ (function () {
       function EventCountDataPoint(timestamp, label, value) {
           this.timestamp = timestamp;
           this.label = label;
           this.value = value;
       }
       return EventCountDataPoint;
   }());

   /*
      Event count time series result
   */
   var EventCountTimeSeries = /** @class */ (function () {
       function EventCountTimeSeries(label, interval, data) {
           this.label = label;
           this.interval = interval;
           this.data = data;
       }
       return EventCountTimeSeries;
   }());

   /*
      Extended custom model results
   */
   var ExternalModelResults = /** @class */ (function () {
       function ExternalModelResults(modelName, attributes, boundingBox, embedding, keypoints) {
           this.modelName = modelName;
           this.attributes = attributes;
           this.boundingBox = boundingBox;
           this.embedding = embedding;
           this.keypoints = keypoints;
       }
       return ExternalModelResults;
   }());

   /*
      FOV (Sensor Field of View) Geo attributes
   */
   var FovGeoAttributes = /** @class */ (function () {
       function FovGeoAttributes(geoArea, visibleArea, transformType, coefficients, controlPoints) {
           this.geoArea = geoArea;
           this.visibleArea = visibleArea;
           this.transformType = transformType;
           this.coefficients = coefficients;
           this.controlPoints = controlPoints;
       }
       return FovGeoAttributes;
   }());

   /*
      Geo spatial circle
   */
   var GeoCircle = /** @class */ (function () {
       function GeoCircle(center, radius) {
           this.center = center;
           this.radius = radius;
       }
       return GeoCircle;
   }());

   /*
      Control point maps FOV location (10000 x 10000 coordinate system) to WGS-84 coordinate system
      Control points are used for FOV geo-referencing
   */
   var GeoControlPoint = /** @class */ (function () {
       function GeoControlPoint(point, coordinate) {
           this.point = point;
           this.coordinate = coordinate;
       }
       return GeoControlPoint;
   }());

   /*
      List of Geo control points
   */
   var GeoControlPoints = /** @class */ (function () {
       function GeoControlPoints(points) {
           this.points = points;
       }
       return GeoControlPoints;
   }());

   /*
      Geo spatial polygon
   */
   var GeoPolygon = /** @class */ (function () {
       function GeoPolygon(vertices) {
           this.vertices = vertices;
       }
       return GeoPolygon;
   }());

   /*
      Geo Reference data includes the contour of the raster image on the World coordinate system (WGS-84)
      and the list of transformation coefficients.
   */
   var GeoReferenceData = /** @class */ (function () {
       function GeoReferenceData(coordinates, coefficients) {
           this.coordinates = coordinates;
           this.coefficients = coefficients;
       }
       return GeoReferenceData;
   }());

   /*
      Geo Reference test used to test geo-referencing algorithm. The structure includes arbitrary list of points
      and the list of transformation coefficients.
   */
   var GeoReferenceTest = /** @class */ (function () {
       function GeoReferenceTest(points, coefficients) {
           this.points = points;
           this.coefficients = coefficients;
       }
       return GeoReferenceTest;
   }());

   /*
      Health thresholds specifications for sensor and appliances
   */
   var HealthThresholds = /** @class */ (function () {
       function HealthThresholds(isActive, sensorsThresholds, applianceThresholds) {
           this.isActive = isActive;
           this.sensorsThresholds = sensorsThresholds;
           this.applianceThresholds = applianceThresholds;
       }
       return HealthThresholds;
   }());

   /*
      Technical integration specification
   */
   var IntegrationSpec = /** @class */ (function () {
       function IntegrationSpec(protocol, operation, host, port, user, password, url, headers, recipients, subject, body, clipRequired) {
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
       return IntegrationSpec;
   }());

   /*
      Login data (returned by the API after successful login)
   */
   var LoginData = /** @class */ (function () {
       function LoginData(accessToken, accountRole, permissions, userId, userName, userEmail, userType, userStatus, changePassword, acceptedEula, platformType) {
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
       return LoginData;
   }());

   /*
      Login parameters data model
   */
   var LoginParams = /** @class */ (function () {
       function LoginParams(email, password, accessToken, platformType) {
           this.email = email;
           this.password = password;
           this.accessToken = accessToken;
           this.platformType = platformType;
       }
       return LoginParams;
   }());

   /*
      Key Value long tuple
   */
   var LongTuple = /** @class */ (function () {
       function LongTuple(key, value) {
           this.key = key;
           this.value = value;
       }
       return LongTuple;
   }());

   /*
      Account member registration data model - used by self registered users
   */
   var MemberRegistration = /** @class */ (function () {
       function MemberRegistration(accountId, name, email, mobile, role, groups, tempPassword, changePassword, verifyByEmail, description) {
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
       return MemberRegistration;
   }());

   /*
      Referenced object data for similarity search
   */
   var ModelAttributes = /** @class */ (function () {
       function ModelAttributes(modelName, attributes) {
           this.modelName = modelName;
           this.attributes = attributes;
       }
       return ModelAttributes;
   }());

   /*
      Metadata object color description
   */
   var ObjectColor = /** @class */ (function () {
       function ObjectColor(colorType, primaryColor, primaryConf, secondaryColor, secondaryConf) {
           this.colorType = colorType;
           this.primaryColor = primaryColor;
           this.primaryConf = primaryConf;
           this.secondaryColor = secondaryColor;
           this.secondaryConf = secondaryConf;
       }
       return ObjectColor;
   }());

   /*
      Referenced object data for similarity search
   */
   var ObjectData = /** @class */ (function () {
       function ObjectData(objectId, sensorId, timestamp) {
           this.objectId = objectId;
           this.sensorId = sensorId;
           this.timestamp = timestamp;
       }
       return ObjectData;
   }());

   /*
      Object Metadata info
   */
   var ObjectInfo = /** @class */ (function () {
       function ObjectInfo(objectId, sensorId, accountId, birthTime, objectHistory) {
           this.objectId = objectId;
           this.sensorId = sensorId;
           this.accountId = accountId;
           this.birthTime = birthTime;
           this.objectHistory = objectHistory;
       }
       return ObjectInfo;
   }());

   /*
      Metadata object instance info
      One instance of the object in the scene
   */
   var ObjectInstance = /** @class */ (function () {
       function ObjectInstance(timestamp, objectType, confidence, isStopped, colors, direction, dimension, boundingBox, speed, size, position, location, externalModelResults) {
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
       return ObjectInstance;
   }());

   /*
      Used to reflect object type hierarchy
   */
   var ObjectTypeNode = /** @class */ (function () {
       function ObjectTypeNode(name, objectTypeCode, children) {
           this.name = name;
           this.objectTypeCode = objectTypeCode;
           this.children = children;
       }
       return ObjectTypeNode;
   }());

   /*
      Specific report by object typeis generated by statistic rule
   */
   var ObjectTypeReport = /** @class */ (function () {
       function ObjectTypeReport(objectType, crossingDir, count, avgSpeed) {
           this.objectType = objectType;
           this.crossingDir = crossingDir;
           this.count = count;
           this.avgSpeed = avgSpeed;
       }
       return ObjectTypeReport;
   }());

   /*
      Set of actions allowed on folder path
   */
   var Permission = /** @class */ (function () {
       function Permission(path, perm) {
           this.path = path;
           this.perm = perm;
       }
       return Permission;
   }());

   /*
      Point (X,Y) on raster
   */
   var Point = /** @class */ (function () {
       function Point(x, y) {
           this.x = x;
           this.y = y;
       }
       return Point;
   }());

   /*
      Recurrent time frame
   */
   var Recurrent = /** @class */ (function () {
       function Recurrent(startTime, endTime, period, daysOfWeek, targetId, recipients, subject, body, mimeType) {
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
       return Recurrent;
   }());

   /*
      Schedule recurrent time frame
   */
   var RecurrentTimeFrame = /** @class */ (function () {
       function RecurrentTimeFrame(dayOfWeek, startTime, endTime) {
           this.dayOfWeek = dayOfWeek;
           this.startTime = startTime;
           this.endTime = endTime;
       }
       return RecurrentTimeFrame;
   }());

   /*
      Rule default encapsulates boundaries and default values of rule parameter
   */
   var RuleDefault = /** @class */ (function () {
       function RuleDefault(min, max, defaultValue) {
           this.min = min;
           this.max = max;
           this.defaultValue = defaultValue;
       }
       return RuleDefault;
   }());

   /*
      Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
      In case of a line, it is not a closed polygon (first and last points are not connected)
      In case of area description, the line crossing direction field is ignored
   */
   var RulePolygon = /** @class */ (function () {
       function RulePolygon(lineCrossDir, points, color) {
           this.lineCrossDir = lineCrossDir;
           this.points = points;
           this.color = color;
       }
       return RulePolygon;
   }());

   /*
      Rule specification describe rule parameters
   */
   var RuleSpec = /** @class */ (function () {
       function RuleSpec(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, minSpeed, peopleInGroup, clusterDistance, intervalTime, referenceCrop, objectHierarchy, sensorTypes, externalModel, viewTypes, excludeObjectTypes, autoSensitivity) {
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
       }
       return RuleSpec;
   }());

   /*
      Search behavior description
   */
   var SearchBehavior = /** @class */ (function () {
       function SearchBehavior(behaviorType, dwellTime, minSpeed, minObjectsInGroup, clusterDistance, shapes) {
           this.behaviorType = behaviorType;
           this.dwellTime = dwellTime;
           this.minSpeed = minSpeed;
           this.minObjectsInGroup = minObjectsInGroup;
           this.clusterDistance = clusterDistance;
           this.shapes = shapes;
       }
       return SearchBehavior;
   }());

   /*
      Color definitions to search for
   */
   var SearchColor = /** @class */ (function () {
       function SearchColor(conf, color, type) {
           this.conf = conf;
           this.color = color;
           this.type = type;
       }
       return SearchColor;
   }());

   /*
      Object attributes to search for
   */
   var SearchObject = /** @class */ (function () {
       function SearchObject(type, colors, objectData, externalModelResults) {
           this.type = type;
           this.colors = colors;
           this.objectData = objectData;
           this.externalModelResults = externalModelResults;
       }
       return SearchObject;
   }());

   /*! *****************************************************************************
   Copyright (c) Microsoft Corporation.

   Permission to use, copy, modify, and/or distribute this software for any
   purpose with or without fee is hereby granted.

   THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
   REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
   AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
   INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
   LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
   OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
   PERFORMANCE OF THIS SOFTWARE.
   ***************************************************************************** */
   /* global Reflect, Promise */
   var extendStatics = function (d, b) {
       extendStatics = Object.setPrototypeOf ||
           ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
           function (d, b) { for (var p in b)
               if (Object.prototype.hasOwnProperty.call(b, p))
                   d[p] = b[p]; };
       return extendStatics(d, b);
   };
   function __extends(d, b) {
       if (typeof b !== "function" && b !== null)
           throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
       extendStatics(d, b);
       function __() { this.constructor = d; }
       d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
   }
   var __assign = function () {
       __assign = Object.assign || function __assign(t) {
           for (var s, i = 1, n = arguments.length; i < n; i++) {
               s = arguments[i];
               for (var p in s)
                   if (Object.prototype.hasOwnProperty.call(s, p))
                       t[p] = s[p];
           }
           return t;
       };
       return __assign.apply(this, arguments);
   };
   function __rest(s, e) {
       var t = {};
       for (var p in s)
           if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
               t[p] = s[p];
       if (s != null && typeof Object.getOwnPropertySymbols === "function")
           for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
               if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                   t[p[i]] = s[p[i]];
           }
       return t;
   }
   function __decorate(decorators, target, key, desc) {
       var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
       if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
           r = Reflect.decorate(decorators, target, key, desc);
       else
           for (var i = decorators.length - 1; i >= 0; i--)
               if (d = decorators[i])
                   r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
       return c > 3 && r && Object.defineProperty(target, key, r), r;
   }
   function __param(paramIndex, decorator) {
       return function (target, key) { decorator(target, key, paramIndex); };
   }
   function __metadata(metadataKey, metadataValue) {
       if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
           return Reflect.metadata(metadataKey, metadataValue);
   }
   function __awaiter(thisArg, _arguments, P, generator) {
       function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
       return new (P || (P = Promise))(function (resolve, reject) {
           function fulfilled(value) { try {
               step(generator.next(value));
           }
           catch (e) {
               reject(e);
           } }
           function rejected(value) { try {
               step(generator["throw"](value));
           }
           catch (e) {
               reject(e);
           } }
           function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
           step((generator = generator.apply(thisArg, _arguments || [])).next());
       });
   }
   function __generator(thisArg, body) {
       var _ = { label: 0, sent: function () { if (t[0] & 1)
               throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
       return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
       function verb(n) { return function (v) { return step([n, v]); }; }
       function step(op) {
           if (f)
               throw new TypeError("Generator is already executing.");
           while (_)
               try {
                   if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                       return t;
                   if (y = 0, t)
                       op = [op[0] & 2, t.value];
                   switch (op[0]) {
                       case 0:
                       case 1:
                           t = op;
                           break;
                       case 4:
                           _.label++;
                           return { value: op[1], done: false };
                       case 5:
                           _.label++;
                           y = op[1];
                           op = [0];
                           continue;
                       case 7:
                           op = _.ops.pop();
                           _.trys.pop();
                           continue;
                       default:
                           if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                               _ = 0;
                               continue;
                           }
                           if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                               _.label = op[1];
                               break;
                           }
                           if (op[0] === 6 && _.label < t[1]) {
                               _.label = t[1];
                               t = op;
                               break;
                           }
                           if (t && _.label < t[2]) {
                               _.label = t[2];
                               _.ops.push(op);
                               break;
                           }
                           if (t[2])
                               _.ops.pop();
                           _.trys.pop();
                           continue;
                   }
                   op = body.call(thisArg, _);
               }
               catch (e) {
                   op = [6, e];
                   y = 0;
               }
               finally {
                   f = t = 0;
               }
           if (op[0] & 5)
               throw op[1];
           return { value: op[0] ? op[1] : void 0, done: true };
       }
   }
   var __createBinding = Object.create ? (function (o, m, k, k2) {
       if (k2 === undefined)
           k2 = k;
       Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
   }) : (function (o, m, k, k2) {
       if (k2 === undefined)
           k2 = k;
       o[k2] = m[k];
   });
   function __exportStar(m, o) {
       for (var p in m)
           if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
               __createBinding(o, m, p);
   }
   function __values(o) {
       var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
       if (m)
           return m.call(o);
       if (o && typeof o.length === "number")
           return {
               next: function () {
                   if (o && i >= o.length)
                       o = void 0;
                   return { value: o && o[i++], done: !o };
               }
           };
       throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
   }
   function __read(o, n) {
       var m = typeof Symbol === "function" && o[Symbol.iterator];
       if (!m)
           return o;
       var i = m.call(o), r, ar = [], e;
       try {
           while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
               ar.push(r.value);
       }
       catch (error) {
           e = { error: error };
       }
       finally {
           try {
               if (r && !r.done && (m = i["return"]))
                   m.call(i);
           }
           finally {
               if (e)
                   throw e.error;
           }
       }
       return ar;
   }
   /** @deprecated */
   function __spread() {
       for (var ar = [], i = 0; i < arguments.length; i++)
           ar = ar.concat(__read(arguments[i]));
       return ar;
   }
   /** @deprecated */
   function __spreadArrays() {
       for (var s = 0, i = 0, il = arguments.length; i < il; i++)
           s += arguments[i].length;
       for (var r = Array(s), k = 0, i = 0; i < il; i++)
           for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
               r[k] = a[j];
       return r;
   }
   function __spreadArray(to, from) {
       for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
           to[j] = from[i];
       return to;
   }
   function __await(v) {
       return this instanceof __await ? (this.v = v, this) : new __await(v);
   }
   function __asyncGenerator(thisArg, _arguments, generator) {
       if (!Symbol.asyncIterator)
           throw new TypeError("Symbol.asyncIterator is not defined.");
       var g = generator.apply(thisArg, _arguments || []), i, q = [];
       return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
       function verb(n) { if (g[n])
           i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
       function resume(n, v) { try {
           step(g[n](v));
       }
       catch (e) {
           settle(q[0][3], e);
       } }
       function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
       function fulfill(value) { resume("next", value); }
       function reject(value) { resume("throw", value); }
       function settle(f, v) { if (f(v), q.shift(), q.length)
           resume(q[0][0], q[0][1]); }
   }
   function __asyncDelegator(o) {
       var i, p;
       return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
       function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
   }
   function __asyncValues(o) {
       if (!Symbol.asyncIterator)
           throw new TypeError("Symbol.asyncIterator is not defined.");
       var m = o[Symbol.asyncIterator], i;
       return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
       function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
       function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
   }
   function __makeTemplateObject(cooked, raw) {
       if (Object.defineProperty) {
           Object.defineProperty(cooked, "raw", { value: raw });
       }
       else {
           cooked.raw = raw;
       }
       return cooked;
   }
   ;
   var __setModuleDefault = Object.create ? (function (o, v) {
       Object.defineProperty(o, "default", { enumerable: true, value: v });
   }) : function (o, v) {
       o["default"] = v;
   };
   function __importStar(mod) {
       if (mod && mod.__esModule)
           return mod;
       var result = {};
       if (mod != null)
           for (var k in mod)
               if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                   __createBinding(result, mod, k);
       __setModuleDefault(result, mod);
       return result;
   }
   function __importDefault(mod) {
       return (mod && mod.__esModule) ? mod : { default: mod };
   }
   function __classPrivateFieldGet(receiver, privateMap) {
       if (!privateMap.has(receiver)) {
           throw new TypeError("attempted to get private field on non-instance");
       }
       return privateMap.get(receiver);
   }
   function __classPrivateFieldSet(receiver, privateMap, value) {
       if (!privateMap.has(receiver)) {
           throw new TypeError("attempted to set private field on non-instance");
       }
       privateMap.set(receiver, value);
       return value;
   }

   /*
      Search shape definition for Sensors or GEO search
   */
   var SearchShape = /** @class */ (function (_super) {
       __extends(SearchShape, _super);
       function SearchShape() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SearchShape;
   }(RulePolygon));

   /*
      Status of a search session
   */
   var SearchStatus = /** @class */ (function () {
       function SearchStatus(sessionId, isFinished, total, progress) {
           this.sessionId = sessionId;
           this.isFinished = isFinished;
           this.total = total;
           this.progress = progress;
       }
       return SearchStatus;
   }());

   /*
      Anomaly sensitivity defines parameters to adjust thresholds for anomaly events
   */
   var Sensitivity = /** @class */ (function () {
       function Sensitivity(events, timeUnit) {
           this.events = events;
           this.timeUnit = timeUnit;
       }
       return Sensitivity;
   }());

   /*
      Sensor anomaly information
      This data model is used by the inference process of Anomaly Detection
   */
   var SensorAnomalyInfo = /** @class */ (function () {
       function SensorAnomalyInfo(sensorId, results, ruleInfo) {
           this.sensorId = sensorId;
           this.results = results;
           this.ruleInfo = ruleInfo;
       }
       return SensorAnomalyInfo;
   }());

   /*
      Sensor anomaly rule information
   */
   var SensorAnomalyRuleInfo = /** @class */ (function () {
       function SensorAnomalyRuleInfo(active, sensitivity, objectTypes) {
           this.active = active;
           this.sensitivity = sensitivity;
           this.objectTypes = objectTypes;
       }
       return SensorAnomalyRuleInfo;
   }());

   /*
      Sensor debug information
   */
   var SensorDebugInfo = /** @class */ (function () {
       function SensorDebugInfo(saveCrops, saveFrames, saveEventImages) {
           this.saveCrops = saveCrops;
           this.saveFrames = saveFrames;
           this.saveEventImages = saveEventImages;
       }
       return SensorDebugInfo;
   }());

   /*
      Sensor configuration info
   */
   var SensorInfo = /** @class */ (function () {
       function SensorInfo(name, type, streamType, imageResolution, recording, metadata, anomalyDetection, alarmInterval, maxBBoxPerFrame, maxFrameRate, streamUri, geoLocation, azimuth, fovAttributes, externalId, tags, debugInfo, viewType) {
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
       return SensorInfo;
   }());

   /*
      Sensor status list over time
   */
   var SensorStatusTimeSeries = /** @class */ (function () {
       function SensorStatusTimeSeries(accountId, sensorId, label, interval, data) {
           this.accountId = accountId;
           this.sensorId = sensorId;
           this.label = label;
           this.interval = interval;
           this.data = data;
       }
       return SensorStatusTimeSeries;
   }());

   /*
      Data point in a series representing a sensor status value in a specific timestamp
   */
   var SensorStatusTimestamped = /** @class */ (function () {
       function SensorStatusTimestamped(state, timestamp, label) {
           this.state = state;
           this.timestamp = timestamp;
           this.label = label;
       }
       return SensorStatusTimestamped;
   }());

   /*
      An item in the sensors usage report's sensors list
   */
   var SensorUsageReport = /** @class */ (function () {
       function SensorUsageReport(key, minutes, billable) {
           this.key = key;
           this.minutes = minutes;
           this.billable = billable;
       }
       return SensorUsageReport;
   }());

   /*
      Group of sensor data with common attributes
   */
   var SensorsGroup = /** @class */ (function () {
       function SensorsGroup(accountId, folderId, applianceId, agentId, sensors) {
           this.accountId = accountId;
           this.folderId = folderId;
           this.applianceId = applianceId;
           this.agentId = agentId;
           this.sensors = sensors;
       }
       return SensorsGroup;
   }());

   /*
      Service Account registration data model
   */
   var ServiceAccountRegistration = /** @class */ (function () {
       function ServiceAccountRegistration(name, email, description) {
           this.name = name;
           this.email = email;
           this.description = description;
       }
       return ServiceAccountRegistration;
   }());

   /*
      Statistic report record (generated by statistic rule periodically)
   */
   var StatisticReport = /** @class */ (function () {
       function StatisticReport(accountId, sensorId, ruleId, behaviorType, reportIntervalStart, reportIntervalEnd, totalCount, avgTimeBetween, avgSpeed, reportDetails) {
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
       return StatisticReport;
   }());

   /*
      String Int Value tuple
   */
   var StringIntValue = /** @class */ (function () {
       function StringIntValue(key, value) {
           this.key = key;
           this.value = value;
       }
       return StringIntValue;
   }());

   /*
      Key Value string tuple
   */
   var StringKeyValue = /** @class */ (function () {
       function StringKeyValue(key, value) {
           this.key = key;
           this.value = value;
       }
       return StringKeyValue;
   }());

   /*
      Threshold defines how long [in minutes] a sensor/device should be in a state (other than OK) before generating health alert
      and how much time [in hours] to re-generate health alert (after the previous one) if the status was not changed
   */
   var Threshold = /** @class */ (function () {
       function Threshold(notification, repeatInterval) {
           this.notification = notification;
           this.repeatInterval = repeatInterval;
       }
       return Threshold;
   }());

   /*
      Thresholds list warning state (yellow) and error state (red) health thresholds
   */
   var Thresholds = /** @class */ (function () {
       function Thresholds(warningThreshold, errorThreshold) {
           this.warningThreshold = warningThreshold;
           this.errorThreshold = errorThreshold;
       }
       return Thresholds;
   }());

   /*
      Time frame (for search and reports)
   */
   var TimeFrame = /** @class */ (function () {
       function TimeFrame(from, to) {
           this.from = from;
           this.to = to;
       }
       return TimeFrame;
   }());

   /*
      Time slot (for rule scheduling)
   */
   var TimeSlot = /** @class */ (function () {
       function TimeSlot(from, to, inactive) {
           this.from = from;
           this.to = to;
           this.inactive = inactive;
       }
       return TimeSlot;
   }());

   /*
      Timeline (for sensor rule scheduling)
   */
   var Timeline = /** @class */ (function () {
       function Timeline(from, to, slots) {
           this.from = from;
           this.to = to;
           this.slots = slots;
       }
       return Timeline;
   }());

   /*
      Cropped object image with timestamp and bounding box
   */
   var TimestampedCrop = /** @class */ (function () {
       function TimestampedCrop(objectId, timestamp, boundingBox, jpeg) {
           this.objectId = objectId;
           this.timestamp = timestamp;
           this.boundingBox = boundingBox;
           this.jpeg = jpeg;
       }
       return TimestampedCrop;
   }());

   /*
      List of timestamped crops with background image
   */
   var TimestampedCropsData = /** @class */ (function () {
       function TimestampedCropsData(sensorId, bg, crops) {
           this.sensorId = sensorId;
           this.bg = bg;
           this.crops = crops;
       }
       return TimestampedCropsData;
   }());

   /*
      Image of frame or crop with timestamp
   */
   var TimestampedImage = /** @class */ (function () {
       function TimestampedImage(timestamp, jpeg) {
           this.timestamp = timestamp;
           this.jpeg = jpeg;
       }
       return TimestampedImage;
   }());

   /*
      Tree item for account hierarchy tree
   */
   var TreeItem = /** @class */ (function () {
       function TreeItem(itemId, type, name, typeName, status, shunt) {
           this.itemId = itemId;
           this.type = type;
           this.name = name;
           this.typeName = typeName;
           this.status = status;
           this.shunt = shunt;
       }
       return TreeItem;
   }());

   /*
      Tree node in account hierarchy tree
   */
   var TreeNode = /** @class */ (function () {
       function TreeNode(id, parentId, name, item, children) {
           this.id = id;
           this.parentId = parentId;
           this.name = name;
           this.item = item;
           this.children = children;
       }
       return TreeNode;
   }());

   /*
      User Account info (returned by switch-account method)
   */
   var UserAccountInfo = /** @class */ (function () {
       function UserAccountInfo(account, loginData, features, licenseExpiresOn) {
           this.account = account;
           this.loginData = loginData;
           this.features = features;
           this.licenseExpiresOn = licenseExpiresOn;
       }
       return UserAccountInfo;
   }());

   /*
      User invitation data model - used by account admin to invite user to the account
   */
   var UserInvitation = /** @class */ (function () {
       function UserInvitation(email, role, groups) {
           this.email = email;
           this.role = role;
           this.groups = groups;
       }
       return UserInvitation;
   }());

   /*
      User registration data model - used by self registered users
   */
   var UserRegistration = /** @class */ (function () {
       function UserRegistration(name, email, mobile, defaultAccount, accountRoles, type, tempPassword, changePassword, verifyByEmail, description) {
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
       return UserRegistration;
   }());

   /*
      Base entity includes common fields for all entities (persistence objects) in the system
   */
   var BaseEntity = /** @class */ (function () {
       function BaseEntity(id, docType, createdOn, updatedOn, path) {
           this.id = id;
           this._type = docType;
           this.createdOn = createdOn;
           this.updatedOn = updatedOn;
           this.path = path;
       }
       return BaseEntity;
   }());

   /*
      Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
   */
   var Account = /** @class */ (function (_super) {
       __extends(Account, _super);
       function Account() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Account;
   }(BaseEntity));

   /*
      Account statistics collect monthly statistics (e.g. number of cameras)
   */
   var AccountStatistics = /** @class */ (function (_super) {
       __extends(AccountStatistics, _super);
       function AccountStatistics() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return AccountStatistics;
   }(BaseEntity));

   /*
      Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
      Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
      A single appliance can host multiple agents (container instances of the same Docker image)
   */
   var Agent = /** @class */ (function (_super) {
       __extends(Agent, _super);
       function Agent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Agent;
   }(BaseEntity));

   /*
      Agent status - reported periodically by the agent
   */
   var AgentStatus = /** @class */ (function (_super) {
       __extends(AgentStatus, _super);
       function AgentStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return AgentStatus;
   }(BaseEntity));

   /*
      API Key is used per application (e.g. Portal, Console, Mobile App) or service to identify the consumer.
      The access to sets of REST endpoints is restricted according the API key.
      API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
      The application/system name is the Entity Id, the API key itself is not stored in the DB but generated on the fly.
   */
   var ApiKey = /** @class */ (function (_super) {
       __extends(ApiKey, _super);
       function ApiKey() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ApiKey;
   }(BaseEntity));

   /*
      Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
   */
   var Appliance = /** @class */ (function (_super) {
       __extends(Appliance, _super);
       function Appliance() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Appliance;
   }(BaseEntity));

   /*
      Edge appliance capabilities full report <br>
      This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
      Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
   */
   var ApplianceCapabilities = /** @class */ (function () {
       function ApplianceCapabilities(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion, profileId, errors, uploadSpeed, downloadSpeed, speedTestedOn, endpoints) {
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
       return ApplianceCapabilities;
   }());

   /*
      Appliance command - represents commands sent to the appliance
   */
   var ApplianceCommand = /** @class */ (function (_super) {
       __extends(ApplianceCommand, _super);
       function ApplianceCommand() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ApplianceCommand;
   }(BaseEntity));

   /*
      Edge appliance ONVIF discovery full report <br>
      This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
   */
   var ApplianceDiscovery = /** @class */ (function () {
       function ApplianceDiscovery(channels) {
           this.channels = channels;
       }
       return ApplianceDiscovery;
   }());

   /*
      Appliance Profile entity describes custom device profile to override package configuration variables for specific use cases
   */
   var ApplianceProfile = /** @class */ (function (_super) {
       __extends(ApplianceProfile, _super);
       function ApplianceProfile() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ApplianceProfile;
   }(BaseEntity));

   /*
      Appliance status - reported periodically by the appliance
   */
   var ApplianceStatus = /** @class */ (function (_super) {
       __extends(ApplianceStatus, _super);
       function ApplianceStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ApplianceStatus;
   }(BaseEntity));

   /*
      Audit Log - each entry represents a single action done by user
   */
   var AuditLog = /** @class */ (function (_super) {
       __extends(AuditLog, _super);
       function AuditLog() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return AuditLog;
   }(BaseEntity));

   /*
      Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
      Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
   */
   var Calendar = /** @class */ (function (_super) {
       __extends(Calendar, _super);
       function Calendar() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Calendar;
   }(BaseEntity));

   /*
      Case event objects is extended Search Event with the list of all the event objects timestamped crops
   */
   var CaseEventObjects = /** @class */ (function (_super) {
       __extends(CaseEventObjects, _super);
       function CaseEventObjects() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return CaseEventObjects;
   }(BaseEntity));

   /*
      Case entity represents investigation case to collect related search events
   */
   var CaseInfo = /** @class */ (function (_super) {
       __extends(CaseInfo, _super);
       function CaseInfo() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return CaseInfo;
   }(BaseEntity));

   /*
      SW Component version type
   */
   var ComponentConfiguration = /** @class */ (function () {
       function ComponentConfiguration(id, component, dockerImage, variables, mounts, labels, status) {
           this.id = id;
           this.component = component;
           this.dockerImage = dockerImage;
           this.variables = variables;
           this.mounts = mounts;
           this.labels = labels;
           this.status = status;
       }
       return ComponentConfiguration;
   }());

   /*
      SW Component variables
   */
   var ComponentVariables = /** @class */ (function () {
       function ComponentVariables(component, variables, mounts) {
           this.component = component;
           this.variables = variables;
           this.mounts = mounts;
       }
       return ComponentVariables;
   }());

   /*
      SW Configuration type
   */
   var Configuration = /** @class */ (function (_super) {
       __extends(Configuration, _super);
       function Configuration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Configuration;
   }(BaseEntity));

   /*
      SW Configuration template type
   */
   var ConfigurationTemplate = /** @class */ (function (_super) {
       __extends(ConfigurationTemplate, _super);
       function ConfigurationTemplate() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ConfigurationTemplate;
   }(BaseEntity));

   /*
      SW Configuration version type
   */
   var ConfigurationVersion = /** @class */ (function (_super) {
       __extends(ConfigurationVersion, _super);
       function ConfigurationVersion() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ConfigurationVersion;
   }(BaseEntity));

   /*
      Detection model configuration
   */
   var DetectionModel = /** @class */ (function (_super) {
       __extends(DetectionModel, _super);
       function DetectionModel() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return DetectionModel;
   }(BaseEntity));

   /*
      Digital IO type
      Digital IO connection URI should be in the RFC-6570 format which includes schema, credentials, host, port and additional parameters as query string params
   */
   var DigitalIO = /** @class */ (function (_super) {
       __extends(DigitalIO, _super);
       function DigitalIO() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return DigitalIO;
   }(BaseEntity));

   /*
      Detection event type
   */
   var Event = /** @class */ (function (_super) {
       __extends(Event, _super);
       function Event() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Event;
   }(BaseEntity));

   /*
      Detection event type
   */
   var EventStatistics = /** @class */ (function (_super) {
       __extends(EventStatistics, _super);
       function EventStatistics() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EventStatistics;
   }(BaseEntity));

   /*
      System functionality (feature) description
   */
   var Feature = /** @class */ (function (_super) {
       __extends(Feature, _super);
       function Feature() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Feature;
   }(BaseEntity));

   /*
      Group of features
   */
   var FeaturesGroup = /** @class */ (function (_super) {
       __extends(FeaturesGroup, _super);
       function FeaturesGroup() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return FeaturesGroup;
   }(BaseEntity));

   /*
   */
   var FindUser = /** @class */ (function () {
       function FindUser(id, name, email, mobile, type, status, lastSignIn, accountRoles, defaultAccount, description) {
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
       return FindUser;
   }());

   /*
   */
   var FindUserAccountRole = /** @class */ (function () {
       function FindUserAccountRole(accountId, accountName, role) {
           this.accountId = accountId;
           this.accountName = accountName;
           this.role = role;
       }
       return FindUserAccountRole;
   }());

   /*
      Folder (container for sensors and sub folders)
   */
   var Folder = /** @class */ (function (_super) {
       __extends(Folder, _super);
       function Folder() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Folder;
   }(BaseEntity));

   /*
      Group is set of folders permissions
   */
   var Group = /** @class */ (function (_super) {
       __extends(Group, _super);
       function Group() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Group;
   }(BaseEntity));

   /*
      Health event type (combines multiple health events: sensor health event, appliance health event...)
   */
   var HealthEvent = /** @class */ (function (_super) {
       __extends(HealthEvent, _super);
       function HealthEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return HealthEvent;
   }(BaseEntity));

   /*
   */
   var HeatmapCell = /** @class */ (function () {
       function HeatmapCell(col, objectsCount) {
           this.col = col;
           this.objectsCount = objectsCount;
       }
       return HeatmapCell;
   }());

   /*
   */
   var HeatmapRow = /** @class */ (function () {
       function HeatmapRow(row, cells) {
           this.row = row;
           this.cells = cells;
       }
       return HeatmapRow;
   }());

   /*
      Integration action describes content details to use for a specific integration target
   */
   var IntegrationAction = /** @class */ (function (_super) {
       __extends(IntegrationAction, _super);
       function IntegrationAction() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return IntegrationAction;
   }(BaseEntity));

   /*
      List of filter criteria for conditional integration action
   */
   var IntegrationActionFilter = /** @class */ (function () {
       function IntegrationActionFilter(sensorIds, ruleIds, objectTypes, behaviorTypes, severity, subjectType, subjectStatus, subjectState) {
           this.sensorIds = sensorIds;
           this.ruleIds = ruleIds;
           this.objectTypes = objectTypes;
           this.behaviorTypes = behaviorTypes;
           this.severity = severity;
           this.subjectType = subjectType;
           this.subjectStatus = subjectStatus;
           this.subjectState = subjectState;
       }
       return IntegrationActionFilter;
   }());

   /*
      Describes status of integration attempt (for events and health integrations)
   */
   var IntegrationStatus = /** @class */ (function (_super) {
       __extends(IntegrationStatus, _super);
       function IntegrationStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return IntegrationStatus;
   }(BaseEntity));

   /*
      Integration target describes connectivity attributes of the integrated system
   */
   var IntegrationTarget = /** @class */ (function (_super) {
       __extends(IntegrationTarget, _super);
       function IntegrationTarget() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return IntegrationTarget;
   }(BaseEntity));

   /*
      JobStatus represents the status of an background creation job (background reports).
   */
   var JobStatus = /** @class */ (function (_super) {
       __extends(JobStatus, _super);
       function JobStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return JobStatus;
   }(BaseEntity));

   /*
      License information includes on-premises deployment's license restrictions
   */
   var License = /** @class */ (function (_super) {
       __extends(License, _super);
       function License() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return License;
   }(BaseEntity));

   /*
      Map one value to another - user for internal-external id mapping
   */
   var Mapping = /** @class */ (function (_super) {
       __extends(Mapping, _super);
       function Mapping() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Mapping;
   }(BaseEntity));

   /*
      Member combined type (user and user-account)
   */
   var Member = /** @class */ (function (_super) {
       __extends(Member, _super);
       function Member() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Member;
   }(BaseEntity));

   /*
   */
   var ObjectCount = /** @class */ (function () {
       function ObjectCount(objectType, count) {
           this.objectType = objectType;
           this.count = count;
       }
       return ObjectCount;
   }());

   /*
      Represents object type count distribution
   */
   var ObjectTypeCount = /** @class */ (function () {
       function ObjectTypeCount(objectType, count) {
           this.objectType = objectType;
           this.count = count;
       }
       return ObjectTypeCount;
   }());

   /*
      Represents a single aggregated path for multiple objects
   */
   var ObjectsPath = /** @class */ (function () {
       function ObjectsPath(id, count, path, countPerObjectType, parentClass) {
           this.id = id;
           this.count = count;
           this.path = path;
           this.countPerObjectType = countPerObjectType;
           this.parentClass = parentClass;
       }
       return ObjectsPath;
   }());

   /*
      ONVIF channel description
      This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
   */
   var OnvifChannel = /** @class */ (function () {
       function OnvifChannel(uUID, name, address, sensorId) {
           this.uUID = uUID;
           this.name = name;
           this.address = address;
           this.sensorId = sensorId;
       }
       return OnvifChannel;
   }());

   /*
      Mapping description of digital IO port
   */
   var PortMapping = /** @class */ (function () {
       function PortMapping(port, isOutput, entityType, entityId, onHigh, onLow, status) {
           this.port = port;
           this.isOutput = isOutput;
           this.entityType = entityType;
           this.entityId = entityId;
           this.onHigh = onHigh;
           this.onLow = onLow;
           this.status = status;
       }
       return PortMapping;
   }());

   /*
      Sensor preset represent specific sensor FOV attributes.
      In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
   */
   var Preset = /** @class */ (function (_super) {
       __extends(Preset, _super);
       function Preset() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Preset;
   }(BaseEntity));

   /*
      Query definitions for report specification
   */
   var ReportDefinition = /** @class */ (function (_super) {
       __extends(ReportDefinition, _super);
       function ReportDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ReportDefinition;
   }(BaseEntity));

   /*
      Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
      real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
   */
   var Rule = /** @class */ (function (_super) {
       __extends(Rule, _super);
       function Rule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Rule;
   }(BaseEntity));

   /*
      SSH Information for OPEN_SSH command
   */
   var SSHInfo = /** @class */ (function () {
       function SSHInfo(targetUri, privateKey) {
           this.targetUri = targetUri;
           this.privateKey = privateKey;
       }
       return SSHInfo;
   }());

   /*
      Schedule is a list of recurrent time frames to specify active analytics
      Schedule is associated with account and optionally with folder and multiple schedules can be specified.
      When defining a rule, it can be scheduled by one of the schedules associated with the sensor's folder, it's parent folder, it's parent's parent folder and so on up to the account
   */
   var Schedule = /** @class */ (function (_super) {
       __extends(Schedule, _super);
       function Schedule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Schedule;
   }(BaseEntity));

   /*
      Scheduled Report defines when to aut generate report and whet to do with it
   */
   var ScheduledReport = /** @class */ (function (_super) {
       __extends(ScheduledReport, _super);
       function ScheduledReport() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return ScheduledReport;
   }(BaseEntity));

   /*
      Query definitions for ad-hoc search specification
   */
   var SearchDefinition = /** @class */ (function (_super) {
       __extends(SearchDefinition, _super);
       function SearchDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SearchDefinition;
   }(BaseEntity));

   /*
      Search result item of search operation. The data structure is identical to an Event
   */
   var SearchEvent = /** @class */ (function (_super) {
       __extends(SearchEvent, _super);
       function SearchEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SearchEvent;
   }(BaseEntity));

   /*
      Search sessions tracking
   */
   var SearchSession = /** @class */ (function (_super) {
       __extends(SearchSession, _super);
       function SearchSession() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SearchSession;
   }(BaseEntity));

   /*
      Sensor type
   */
   var Sensor = /** @class */ (function (_super) {
       __extends(Sensor, _super);
       function Sensor() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Sensor;
   }(BaseEntity));

   /*
      Sensor training analysis results
      This data is used by the training process of Anomaly Detection
      The entity Id is the sensorId
   */
   var SensorAnalysisResults = /** @class */ (function (_super) {
       __extends(SensorAnalysisResults, _super);
       function SensorAnalysisResults() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SensorAnalysisResults;
   }(BaseEntity));

   /*
      Relation table to map list of detection models per sensor
   */
   var SensorDetectionModels = /** @class */ (function (_super) {
       __extends(SensorDetectionModels, _super);
       function SensorDetectionModels() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SensorDetectionModels;
   }(BaseEntity));

   /*
      Group of object counts in cells of the sensor's field of view
   */
   var SensorHeatmap = /** @class */ (function (_super) {
       __extends(SensorHeatmap, _super);
       function SensorHeatmap() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SensorHeatmap;
   }(BaseEntity));

   /*
      Group of objects' path aggregations for sensor's field of view
   */
   var SensorPaths = /** @class */ (function (_super) {
       __extends(SensorPaths, _super);
       function SensorPaths() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SensorPaths;
   }(BaseEntity));

   /*
      Sensor health status
   */
   var SensorStatus = /** @class */ (function (_super) {
       __extends(SensorStatus, _super);
       function SensorStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SensorStatus;
   }(BaseEntity));

   /*
      Sensor usage type describes the total time (in minutes) per day that the sensor was active (including warning and error) for billing
   */
   var SensorUsage = /** @class */ (function (_super) {
       __extends(SensorUsage, _super);
       function SensorUsage() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return SensorUsage;
   }(BaseEntity));

   /*
      Software update status type
   */
   var UpdateStatus = /** @class */ (function (_super) {
       __extends(UpdateStatus, _super);
       function UpdateStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return UpdateStatus;
   }(BaseEntity));

   /*
      Sensor usage report type for billing
   */
   var UsageReport = /** @class */ (function (_super) {
       __extends(UsageReport, _super);
       function UsageReport() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return UsageReport;
   }(BaseEntity));

   /*
      User type
   */
   var User = /** @class */ (function (_super) {
       __extends(User, _super);
       function User() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return User;
   }(BaseEntity));

   /*
      User-Account relation type
   */
   var UserAccount = /** @class */ (function (_super) {
       __extends(UserAccount, _super);
       function UserAccount() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return UserAccount;
   }(BaseEntity));

   /*
      VMS Gateway type
      VMS connection URI should be in the RFC-6570 format which includes schema, credentials, host, port and additional parameters as query string params
   */
   var VMSGateway = /** @class */ (function (_super) {
       __extends(VMSGateway, _super);
       function VMSGateway() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return VMSGateway;
   }(BaseEntity));

   /*
      Verification type used to verify user with a temporary code
   */
   var Verification = /** @class */ (function (_super) {
       __extends(Verification, _super);
       function Verification() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return Verification;
   }(BaseEntity));

   /*
      Account role code (represent role of user in the account)
   */
   exports.AccountRoleCode = void 0;
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
   })(exports.AccountRoleCode || (exports.AccountRoleCode = {}));

   /*
      Account status code
   */
   exports.AccountStatusCode = void 0;
   (function (AccountStatusCode) {
       // Undefined [0] 
       AccountStatusCode[AccountStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Active account [1] 
       AccountStatusCode[AccountStatusCode["ACTIVE"] = 1] = "ACTIVE";
       // Suspended (non-active) account [2] 
       AccountStatusCode[AccountStatusCode["SUSPENDED"] = 2] = "SUSPENDED";
       // Deleted account [3] 
       AccountStatusCode[AccountStatusCode["DELETED"] = 3] = "DELETED";
   })(exports.AccountStatusCode || (exports.AccountStatusCode = {}));

   /*
      Account type code
   */
   exports.AccountTypeCode = void 0;
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
   })(exports.AccountTypeCode || (exports.AccountTypeCode = {}));

   /*
      Action Mode code
   */
   exports.ActionModeCode = void 0;
   (function (ActionModeCode) {
       // Undefined - similar to disabled [0] 
       ActionModeCode[ActionModeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Manual mode [1] 
       ActionModeCode[ActionModeCode["MANUAL"] = 1] = "MANUAL";
       // Auto mode  [2] 
       ActionModeCode[ActionModeCode["AUTO"] = 2] = "AUTO";
   })(exports.ActionModeCode || (exports.ActionModeCode = {}));

   /*
      Active code
   */
   exports.ActiveCode = void 0;
   (function (ActiveCode) {
       // Undefined [0] 
       ActiveCode[ActiveCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Active | True | High signal [1] 
       ActiveCode[ActiveCode["ACTIVE"] = 1] = "ACTIVE";
       // Inactive | False |  Low signal  [2] 
       ActiveCode[ActiveCode["INACTIVE"] = 2] = "INACTIVE";
   })(exports.ActiveCode || (exports.ActiveCode = {}));

   /*
      Agent state mask - the bit mask represents the actual state of the agent as reported by the agent proxy
      Bit mask range:
      OK:		0
      WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
      ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
   */
   exports.AgentStateMask = void 0;
   (function (AgentStateMask) {
       // [OK] Agent is connected and active [0x0] 
       AgentStateMask[AgentStateMask["AGENT_OK"] = 0] = "AGENT_OK";
       // [WARNING] Network high latency (over 2000 ms) for 1 minute or more [0x00000001] 
       AgentStateMask[AgentStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
       // [ERROR] Communication error [0x00010000] 
       AgentStateMask[AgentStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
   })(exports.AgentStateMask || (exports.AgentStateMask = {}));

   /*
      Agent (New Pipeline) status code
   */
   exports.AgentStatusCode = void 0;
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
   })(exports.AgentStatusCode || (exports.AgentStatusCode = {}));

   /*
      Appliance command code.
      Message payload includes command specific data
   */
   exports.ApplianceCommandCode = void 0;
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
   })(exports.ApplianceCommandCode || (exports.ApplianceCommandCode = {}));

   /*
      Appliance (device) state mask - the bit mask represents the actual state of the appliance as reported by the device proxy
      Bit mask range:
      OK:		0
      WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
      ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
   */
   exports.ApplianceStateMask = void 0;
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
   })(exports.ApplianceStateMask || (exports.ApplianceStateMask = {}));

   /*
      Appliance status code
   */
   exports.ApplianceStatusCode = void 0;
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
   })(exports.ApplianceStatusCode || (exports.ApplianceStatusCode = {}));

   /*
      Attributes mask - the bit mask represents the combination of object's attributes
   */
   exports.AttributesMask = void 0;
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
   })(exports.AttributesMask || (exports.AttributesMask = {}));

   /*
      Detected object behavior type code
      Values with INNOVI prefix represents standard innoVi model behaviour, all other values represent custom models behaviour
   */
   exports.BehaviorTypeCode = void 0;
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
       // Face Present 67586 
       BehaviorTypeCode[BehaviorTypeCode["INNOVI_FACE"] = 67586] = "INNOVI_FACE";
       // Slip and Fall 65860 
       BehaviorTypeCode[BehaviorTypeCode["INNOVI_SLIP_AND_FALL"] = 65860] = "INNOVI_SLIP_AND_FALL";
   })(exports.BehaviorTypeCode || (exports.BehaviorTypeCode = {}));

   /*
      Detected color of object (or partial object)
   */
   exports.ColorCode = void 0;
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
   })(exports.ColorCode || (exports.ColorCode = {}));

   /*
      Detected color type (colored location of object)
   */
   exports.ColorTypeCode = void 0;
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
   })(exports.ColorTypeCode || (exports.ColorTypeCode = {}));

   /*
      Appliance command status
   */
   exports.CommandStatusCode = void 0;
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
   })(exports.CommandStatusCode || (exports.CommandStatusCode = {}));

   /*
      Day of week code
   */
   exports.DayOfWeekCode = void 0;
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
   })(exports.DayOfWeekCode || (exports.DayOfWeekCode = {}));

   /*
      Digital IO state mask - the bit mask represents the actual state of the device as reported by the device proxy
      Bit mask range:
      OK:			0
      WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
      ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
   */
   exports.DigitalIOStateMask = void 0;
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
   })(exports.DigitalIOStateMask || (exports.DigitalIOStateMask = {}));

   /*
      DigitalIO device status code
   */
   exports.DigitalIOStatusCode = void 0;
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
   })(exports.DigitalIOStatusCode || (exports.DigitalIOStatusCode = {}));

   /*
      Entity type code (represent entity type in the system)
   */
   exports.EntityTypeCode = void 0;
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
   })(exports.EntityTypeCode || (exports.EntityTypeCode = {}));

   /*
      List of system error codes
   */
   exports.ErrorCode = void 0;
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
       // General error when a request to Corsight failed 
       ErrorCode[ErrorCode["CorsightRequestFailed"] = 30100] = "CorsightRequestFailed";
       // Corsight DetectFaces call failed 
       ErrorCode[ErrorCode["CorsightDetectFacesFailed"] = 30110] = "CorsightDetectFacesFailed";
       // Corsight DetectFaces did not find any faces 
       ErrorCode[ErrorCode["CorsightNoFacesDetected"] = 30111] = "CorsightNoFacesDetected";
       // Corsight AnalyzeFace failed 
       ErrorCode[ErrorCode["CorsightAnalyzeFaceFailed"] = 30120] = "CorsightAnalyzeFaceFailed";
       // Corsight failed to create a new POI 
       ErrorCode[ErrorCode["CorsightCreatePoiFailed"] = 30130] = "CorsightCreatePoiFailed";
       // Corsight failed to find a specific POI, or a POI matching an image 
       ErrorCode[ErrorCode["CorsightNoPoiFound"] = 30131] = "CorsightNoPoiFound";
   })(exports.ErrorCode || (exports.ErrorCode = {}));

   /*
      Event status code
   */
   exports.EventStatusCode = void 0;
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
   })(exports.EventStatusCode || (exports.EventStatusCode = {}));

   /*
      Feature codes
   */
   exports.FeatureCode = void 0;
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
   })(exports.FeatureCode || (exports.FeatureCode = {}));

   /*
      Integration status code
   */
   exports.IntegrationStatusCode = void 0;
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
   })(exports.IntegrationStatusCode || (exports.IntegrationStatusCode = {}));

   /*
      Integration type code
   */
   exports.IntegrationTypeCode = void 0;
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
   })(exports.IntegrationTypeCode || (exports.IntegrationTypeCode = {}));

   /*
      Job status code
   */
   exports.JobStatusCode = void 0;
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
   })(exports.JobStatusCode || (exports.JobStatusCode = {}));

   /*
      Level type code
   */
   exports.LevelTypeCode = void 0;
   (function (LevelTypeCode) {
       // Undefined [0] 
       LevelTypeCode[LevelTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Low [1] 
       LevelTypeCode[LevelTypeCode["LOW"] = 1] = "LOW";
       // Medium [2] 
       LevelTypeCode[LevelTypeCode["MEDIUM"] = 2] = "MEDIUM";
       // High [3] 
       LevelTypeCode[LevelTypeCode["HIGH"] = 3] = "HIGH";
   })(exports.LevelTypeCode || (exports.LevelTypeCode = {}));

   /*
      Line crossing direction (used by rule definition)
   */
   exports.LineCrossDirectionCode = void 0;
   (function (LineCrossDirectionCode) {
       // Undefined [0] 
       LineCrossDirectionCode[LineCrossDirectionCode["UNDEFINED"] = 0] = "UNDEFINED";
       // In direction [1] 
       LineCrossDirectionCode[LineCrossDirectionCode["IN"] = 1] = "IN";
       // Out direction [2] 
       LineCrossDirectionCode[LineCrossDirectionCode["OUT"] = 2] = "OUT";
       // Bi-direction (both IN and Out) [3] 
       LineCrossDirectionCode[LineCrossDirectionCode["BI"] = 3] = "BI";
   })(exports.LineCrossDirectionCode || (exports.LineCrossDirectionCode = {}));

   /*
      Map client code (represent which map client library to use in the UI)
   */
   exports.MapClientCode = void 0;
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
   })(exports.MapClientCode || (exports.MapClientCode = {}));

   /*
      Detected object type code
      Values with INNOVI prefix represents standard innoVi model objects, all other values represent custom models objects
   */
   exports.ObjectTypeCode = void 0;
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
   })(exports.ObjectTypeCode || (exports.ObjectTypeCode = {}));

   /*
      OpenClosedStatusCode represents if a HealthEvent is in the opened state or closed state
   */
   exports.OpenClosedStatusCode = void 0;
   (function (OpenClosedStatusCode) {
       // Undefined [0] 
       OpenClosedStatusCode[OpenClosedStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Open [1] 
       OpenClosedStatusCode[OpenClosedStatusCode["OPEN"] = 1] = "OPEN";
       // Closed (i.e. resolved) [2] 
       OpenClosedStatusCode[OpenClosedStatusCode["CLOSED"] = 2] = "CLOSED";
   })(exports.OpenClosedStatusCode || (exports.OpenClosedStatusCode = {}));

   /*
      Permission Mask
   */
   exports.PermissionMask = void 0;
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
   })(exports.PermissionMask || (exports.PermissionMask = {}));

   /*
      Platform type code
   */
   exports.PlatformTypeCode = void 0;
   (function (PlatformTypeCode) {
       // innovi [0] 
       PlatformTypeCode[PlatformTypeCode["INNOVI"] = 0] = "INNOVI";
       // Irisity [1] 
       PlatformTypeCode[PlatformTypeCode["IRISITY"] = 1] = "IRISITY";
   })(exports.PlatformTypeCode || (exports.PlatformTypeCode = {}));

   /*
      Product type code
   */
   exports.ProductTypeCode = void 0;
   (function (ProductTypeCode) {
       // Undefined [0] 
       ProductTypeCode[ProductTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Virtual Edge (Pipeline running as Kubernetes deployment with no actual edge device) [1] 
       ProductTypeCode[ProductTypeCode["VIRTUAL"] = 1] = "VIRTUAL";
       // Custom Device (Customer provides it's own hardware) [2] 
       ProductTypeCode[ProductTypeCode["CUSTOM"] = 2] = "CUSTOM";
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
   })(exports.ProductTypeCode || (exports.ProductTypeCode = {}));

   /*
      Report data type code (defining what columns should be included in a report)
   */
   exports.ReportDataTypeCode = void 0;
   (function (ReportDataTypeCode) {
       // Undefined [0] 
       ReportDataTypeCode[ReportDataTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Minimum amount of data, only the essentials [1] 
       ReportDataTypeCode[ReportDataTypeCode["ESSENTIAL"] = 1] = "ESSENTIAL";
       // Often used data [2] 
       ReportDataTypeCode[ReportDataTypeCode["OFTEN_USED"] = 2] = "OFTEN_USED";
       // All exportable data [3] 
       ReportDataTypeCode[ReportDataTypeCode["ALL"] = 3] = "ALL";
   })(exports.ReportDataTypeCode || (exports.ReportDataTypeCode = {}));

   /*
      Report format code (defining the file format of a report)
   */
   exports.ReportFormatCode = void 0;
   (function (ReportFormatCode) {
       // Undefined [0] 
       ReportFormatCode[ReportFormatCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Comma Separated Values (.csv) [1] 
       ReportFormatCode[ReportFormatCode["CSV"] = 1] = "CSV";
       // Excel format (.xlsx) [2] 
       ReportFormatCode[ReportFormatCode["EXCEL"] = 2] = "EXCEL";
   })(exports.ReportFormatCode || (exports.ReportFormatCode = {}));

   /*
      Report type code
   */
   exports.ReportTypeCode = void 0;
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
   })(exports.ReportTypeCode || (exports.ReportTypeCode = {}));

   /*
      Rule Auto Sensitivity Code
   */
   exports.RuleAutoSensitivityCode = void 0;
   (function (RuleAutoSensitivityCode) {
       // High sensitivity [0] 
       RuleAutoSensitivityCode[RuleAutoSensitivityCode["HIGH_SENSITIVITY"] = 0] = "HIGH_SENSITIVITY";
       // High sensitivity [1] 
       RuleAutoSensitivityCode[RuleAutoSensitivityCode["NORMAL_SENSITIVITY"] = 1] = "NORMAL_SENSITIVITY";
       // Low sensitivity [2] 
       RuleAutoSensitivityCode[RuleAutoSensitivityCode["LOW_SENSITIVITY"] = 2] = "LOW_SENSITIVITY";
   })(exports.RuleAutoSensitivityCode || (exports.RuleAutoSensitivityCode = {}));

   /*
      User interface color of a rule polygon
   */
   exports.RuleColorCode = void 0;
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
   })(exports.RuleColorCode || (exports.RuleColorCode = {}));

   /*
      Runtime status code represents the status of component in the host
   */
   exports.RuntimeStatusCode = void 0;
   (function (RuntimeStatusCode) {
       // Undefined [0] 
       RuntimeStatusCode[RuntimeStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Component is defined in the configuration but not running [1] 
       RuntimeStatusCode[RuntimeStatusCode["CONFIGURED"] = 1] = "CONFIGURED";
       // Component is running on the device [2] 
       RuntimeStatusCode[RuntimeStatusCode["RUNNING"] = 2] = "RUNNING";
       // Component is defined in the configuration and running on the device [3] 
       RuntimeStatusCode[RuntimeStatusCode["CONFIGURED_AND_RUNNING"] = 3] = "CONFIGURED_AND_RUNNING";
   })(exports.RuntimeStatusCode || (exports.RuntimeStatusCode = {}));

   /*
      Search scope
   */
   exports.SearchScopeCode = void 0;
   (function (SearchScopeCode) {
       // Undefined [0] 
       SearchScopeCode[SearchScopeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Search by sensors [1] 
       SearchScopeCode[SearchScopeCode["SENSORS"] = 1] = "SENSORS";
       // Search by geo area [2] 
       SearchScopeCode[SearchScopeCode["GEO"] = 2] = "GEO";
   })(exports.SearchScopeCode || (exports.SearchScopeCode = {}));

   /*
      Search time
   */
   exports.SearchTimeCode = void 0;
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
   })(exports.SearchTimeCode || (exports.SearchTimeCode = {}));

   /*
      Bit mask to indicate sensor configuration changes (what part of the sensor configuration has changed)
      Since it is a bit mask, the actual value can be a combination of the listed enum values
   */
   exports.SensorConfigChangeMask = void 0;
   (function (SensorConfigChangeMask) {
       // Sensor has been removed from the system 
       SensorConfigChangeMask[SensorConfigChangeMask["DELETED"] = 0] = "DELETED";
       // Sensor data has changed in the sensor configuration (requires agent reload) 
       SensorConfigChangeMask[SensorConfigChangeMask["SENSOR"] = 1] = "SENSOR";
       // Rules attributes changed in the sensor configuration 
       SensorConfigChangeMask[SensorConfigChangeMask["RULES"] = 2] = "RULES";
       // Sensor calibration has changed in the sensor configuration 
       SensorConfigChangeMask[SensorConfigChangeMask["CALIBRATION"] = 4] = "CALIBRATION";
   })(exports.SensorConfigChangeMask || (exports.SensorConfigChangeMask = {}));

   /*
      Sensor resolution (image quality) code
   */
   exports.SensorResolutionCode = void 0;
   (function (SensorResolutionCode) {
       // Undefined [0] 
       SensorResolutionCode[SensorResolutionCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Low resolution [1] 
       SensorResolutionCode[SensorResolutionCode["LOW"] = 1] = "LOW";
       // Medium resolution [2] 
       SensorResolutionCode[SensorResolutionCode["MEDIUM"] = 2] = "MEDIUM";
       // High resolution [3] 
       SensorResolutionCode[SensorResolutionCode["HIGH"] = 3] = "HIGH";
   })(exports.SensorResolutionCode || (exports.SensorResolutionCode = {}));

   /*
      Sensor state mask - the bit mask represents the actual state of the sensor as reported by the agent / agent proxy
      Bit mask range:
      OK:		0
      WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
      ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
   */
   exports.SensorStateMask = void 0;
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
   })(exports.SensorStateMask || (exports.SensorStateMask = {}));

   /*
      Sensor configuration status code (represents the status due to user actions)
   */
   exports.SensorStatusCode = void 0;
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
   })(exports.SensorStatusCode || (exports.SensorStatusCode = {}));

   /*
      Sensor type code
   */
   exports.SensorTypeCode = void 0;
   (function (SensorTypeCode) {
       // Undefined [0] 
       SensorTypeCode[SensorTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // CCD color camera [1] 
       SensorTypeCode[SensorTypeCode["CCD"] = 1] = "CCD";
       // Thermal camera [2] 
       SensorTypeCode[SensorTypeCode["THERMAL"] = 2] = "THERMAL";
   })(exports.SensorTypeCode || (exports.SensorTypeCode = {}));

   /*
      Severity type (level) code
   */
   exports.SeverityTypeCode = void 0;
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
   })(exports.SeverityTypeCode || (exports.SeverityTypeCode = {}));

   /*
      Video stream type (source) code
   */
   exports.StreamTypeCode = void 0;
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
   })(exports.StreamTypeCode || (exports.StreamTypeCode = {}));

   /*
      Time unit interval
   */
   exports.TimeUnitCode = void 0;
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
   })(exports.TimeUnitCode || (exports.TimeUnitCode = {}));

   /*
      Geo referencing transformation algorithm
   */
   exports.TransformationTypeCode = void 0;
   (function (TransformationTypeCode) {
       // Transformation type not specified [0] 
       TransformationTypeCode[TransformationTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Location and azimuth based transformation [1] 
       TransformationTypeCode[TransformationTypeCode["AZIMUTH"] = 1] = "AZIMUTH";
       // Projective transformation based on 4 reference points [2] 
       TransformationTypeCode[TransformationTypeCode["PT4"] = 2] = "PT4";
       // Polynomial transformation based on 6 reference points [3] 
       TransformationTypeCode[TransformationTypeCode["PT6"] = 3] = "PT6";
   })(exports.TransformationTypeCode || (exports.TransformationTypeCode = {}));

   /*
      User status code
   */
   exports.UserStatusCode = void 0;
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
   })(exports.UserStatusCode || (exports.UserStatusCode = {}));

   /*
      User type code
   */
   exports.UserTypeCode = void 0;
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
   })(exports.UserTypeCode || (exports.UserTypeCode = {}));

   /*
      VMS Gateway state mask - the bit mask represents the actual state of the service as reported by the core-api
      Bit mask range:
      OK:			0
      WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
      ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
   */
   exports.VMSGatewayStateMask = void 0;
   (function (VMSGatewayStateMask) {
       // [OK] VMS Gateway is connected and active [0x0] 
       VMSGatewayStateMask[VMSGatewayStateMask["VMS_OK"] = 0] = "VMS_OK";
       // [WARNING] Network high latency [0x00000001] 
       VMSGatewayStateMask[VMSGatewayStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
       // [ERROR] VMS Gateway not connected to the core [0x00010000] 
       VMSGatewayStateMask[VMSGatewayStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
       // [ERROR] VMS Gateway has no connection to the VMS [0x00011000] 
       VMSGatewayStateMask[VMSGatewayStateMask["NO_VMS_ERROR"] = 69632] = "NO_VMS_ERROR";
   })(exports.VMSGatewayStateMask || (exports.VMSGatewayStateMask = {}));

   /*
      VMS Gateway status code
   */
   exports.VMSGatewayStatusCode = void 0;
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
   })(exports.VMSGatewayStatusCode || (exports.VMSGatewayStatusCode = {}));

   /*
      View type code
   */
   exports.ViewTypeCode = void 0;
   (function (ViewTypeCode) {
       // Normal [0] 
       ViewTypeCode[ViewTypeCode["NORMAL"] = 0] = "NORMAL";
       // Fisheye overhead [1] 
       ViewTypeCode[ViewTypeCode["FISHEYE_OVERHEAD"] = 1] = "FISHEYE_OVERHEAD";
   })(exports.ViewTypeCode || (exports.ViewTypeCode = {}));

   /*
      Sensor visual quality code
   */
   exports.VisualQualityCode = void 0;
   (function (VisualQualityCode) {
       // Undefined [0] 
       VisualQualityCode[VisualQualityCode["UNDEFINED"] = 0] = "UNDEFINED";
       // Low visual quality [1] 
       VisualQualityCode[VisualQualityCode["LOW"] = 1] = "LOW";
       // Medium visual quality [2] 
       VisualQualityCode[VisualQualityCode["MEDIUM"] = 2] = "MEDIUM";
       // High visual quality [3] 
       VisualQualityCode[VisualQualityCode["HIGH"] = 3] = "HIGH";
   })(exports.VisualQualityCode || (exports.VisualQualityCode = {}));

   /*
      Zone type code (used by rule definition)
   */
   exports.ZoneTypeCode = void 0;
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
   })(exports.ZoneTypeCode || (exports.ZoneTypeCode = {}));

   /*
   */
   var AccountIdRequest = /** @class */ (function () {
       function AccountIdRequest(id) {
           this.id = id;
       }
       return AccountIdRequest;
   }());

   /*
   */
   var AccountIdsRequest = /** @class */ (function () {
       function AccountIdsRequest(id) {
           this.id = id;
       }
       return AccountIdsRequest;
   }());

   /*
   */
   var AccountsMonthStatisticsRequest = /** @class */ (function () {
       function AccountsMonthStatisticsRequest(accountId, from, to) {
           this.accountId = accountId;
           this.from = from;
           this.to = to;
       }
       return AccountsMonthStatisticsRequest;
   }());

   /*
   */
   var AccountsServiceChangeGroupsRequest = /** @class */ (function () {
       function AccountsServiceChangeGroupsRequest(id, groupId) {
           this.id = id;
           this.groupId = groupId;
       }
       return AccountsServiceChangeGroupsRequest;
   }());

   /*
   */
   var AccountsServiceChangeNameRequest = /** @class */ (function () {
       function AccountsServiceChangeNameRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return AccountsServiceChangeNameRequest;
   }());

   /*
   */
   var AccountsServiceChangeStatusRequest = /** @class */ (function () {
       function AccountsServiceChangeStatusRequest(id, status) {
           this.id = id;
           this.status = status;
       }
       return AccountsServiceChangeStatusRequest;
   }());

   /*
   */
   var AccountsServiceChangeTypeRequest = /** @class */ (function () {
       function AccountsServiceChangeTypeRequest(id, type) {
           this.id = id;
           this.type = type;
       }
       return AccountsServiceChangeTypeRequest;
   }());

   /*
   */
   var AccountsServiceCreateRequest = /** @class */ (function () {
       function AccountsServiceCreateRequest(body) {
           this.body = body;
       }
       return AccountsServiceCreateRequest;
   }());

   /*
   */
   var AccountsServiceExportRequest = /** @class */ (function () {
       function AccountsServiceExportRequest(name, type, status, sort, format, fields, fileName) {
           this.name = name;
           this.type = type;
           this.status = status;
           this.sort = sort;
           this.format = format;
           this.fields = fields;
           this.fileName = fileName;
       }
       return AccountsServiceExportRequest;
   }());

   /*
   */
   var AccountsServiceFindFoldersRequest = /** @class */ (function () {
       function AccountsServiceFindFoldersRequest(id, parentId, search, sort, page, pageSize) {
           this.id = id;
           this.parentId = parentId;
           this.search = search;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return AccountsServiceFindFoldersRequest;
   }());

   /*
   */
   var AccountsServiceFindRequest = /** @class */ (function () {
       function AccountsServiceFindRequest(search, type, status, sort, page, pageSize) {
           this.search = search;
           this.type = type;
           this.status = status;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return AccountsServiceFindRequest;
   }());

   /*
   */
   var AccountsServiceLogicalTreeRequest = /** @class */ (function () {
       function AccountsServiceLogicalTreeRequest(status, behaviorType, includeSensors, includeNonRecordingSensors, search) {
           this.status = status;
           this.behaviorType = behaviorType;
           this.includeSensors = includeSensors;
           this.includeNonRecordingSensors = includeNonRecordingSensors;
           this.search = search;
       }
       return AccountsServiceLogicalTreeRequest;
   }());

   /*
   */
   var AccountsServicePhysicalTreeRequest = /** @class */ (function () {
       function AccountsServicePhysicalTreeRequest(search) {
           this.search = search;
       }
       return AccountsServicePhysicalTreeRequest;
   }());

   /*
   */
   var AccountsServiceResetRequest = /** @class */ (function () {
       function AccountsServiceResetRequest(id, days) {
           this.id = id;
           this.days = days;
       }
       return AccountsServiceResetRequest;
   }());

   /*
   */
   var AccountsServiceTreeRequest = /** @class */ (function () {
       function AccountsServiceTreeRequest(id, includeSensors, status, behaviorType) {
           this.id = id;
           this.includeSensors = includeSensors;
           this.status = status;
           this.behaviorType = behaviorType;
       }
       return AccountsServiceTreeRequest;
   }());

   /*
   */
   var AccountsServiceUpdateRequest = /** @class */ (function () {
       function AccountsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return AccountsServiceUpdateRequest;
   }());

   /*
      Entity action response message returned for any create/update action on entity
   */
   var ActionResponse = /** @class */ (function () {
       function ActionResponse(code, error, key, data) {
           this.code = code;
           this.error = error;
           this.key = key;
           this.data = data;
       }
       return ActionResponse;
   }());

   /*
   */
   var AddPoiRequest = /** @class */ (function () {
       function AddPoiRequest(body) {
           this.body = body;
       }
       return AddPoiRequest;
   }());

   /*
   */
   var AddPoiRequestBody = /** @class */ (function () {
       function AddPoiRequestBody(base64EncodedJpeg, name, ttl, poiId) {
           this.base64EncodedJpeg = base64EncodedJpeg;
           this.name = name;
           this.ttl = ttl;
           this.poiId = poiId;
       }
       return AddPoiRequestBody;
   }());

   /*
   */
   var AddSensorModelRequest = /** @class */ (function () {
       function AddSensorModelRequest(id, modelId) {
           this.id = id;
           this.modelId = modelId;
       }
       return AddSensorModelRequest;
   }());

   /*
   */
   var AddSensorModelsRequest = /** @class */ (function () {
       function AddSensorModelsRequest(sensorId, id) {
           this.sensorId = sensorId;
           this.id = id;
       }
       return AddSensorModelsRequest;
   }());

   /*
   */
   var AnomalyServiceFindEventsRequest = /** @class */ (function () {
       function AnomalyServiceFindEventsRequest(accountId, sensorId, status, from, to, sort, page, pageSize) {
           this.accountId = accountId;
           this.sensorId = sensorId;
           this.status = status;
           this.from = from;
           this.to = to;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return AnomalyServiceFindEventsRequest;
   }());

   /*
   */
   var AnomalyServiceFindRequest = /** @class */ (function () {
       function AnomalyServiceFindRequest(page, pageSize) {
           this.page = page;
           this.pageSize = pageSize;
       }
       return AnomalyServiceFindRequest;
   }());

   /*
   */
   var AnomalyServiceSensorPresetRequest = /** @class */ (function () {
       function AnomalyServiceSensorPresetRequest(sensorId, presetNum) {
           this.sensorId = sensorId;
           this.presetNum = presetNum;
       }
       return AnomalyServiceSensorPresetRequest;
   }());

   /*
   */
   var AnomalyServiceUpdateRequest = /** @class */ (function () {
       function AnomalyServiceUpdateRequest(sensorId, body) {
           this.sensorId = sensorId;
           this.body = body;
       }
       return AnomalyServiceUpdateRequest;
   }());

   /*
   */
   var AnomalyServiceUpdateRuleRequest = /** @class */ (function () {
       function AnomalyServiceUpdateRuleRequest(sensorId, body) {
           this.sensorId = sensorId;
           this.body = body;
       }
       return AnomalyServiceUpdateRuleRequest;
   }());

   /*
   */
   var ApiKeyIdRequest = /** @class */ (function () {
       function ApiKeyIdRequest(id) {
           this.id = id;
       }
       return ApiKeyIdRequest;
   }());

   /*
   */
   var ApplianceCommandIdRequest = /** @class */ (function () {
       function ApplianceCommandIdRequest(commandId) {
           this.commandId = commandId;
       }
       return ApplianceCommandIdRequest;
   }());

   /*
   */
   var ApplianceIdAgentIdRequest = /** @class */ (function () {
       function ApplianceIdAgentIdRequest(id, agentId) {
           this.id = id;
           this.agentId = agentId;
       }
       return ApplianceIdAgentIdRequest;
   }());

   /*
   */
   var ApplianceIdRequest = /** @class */ (function () {
       function ApplianceIdRequest(id) {
           this.id = id;
       }
       return ApplianceIdRequest;
   }());

   /*
   */
   var ApplianceProfileCreateRequest = /** @class */ (function () {
       function ApplianceProfileCreateRequest(body) {
           this.body = body;
       }
       return ApplianceProfileCreateRequest;
   }());

   /*
   */
   var ApplianceProfileFindRequest = /** @class */ (function () {
       function ApplianceProfileFindRequest(search) {
           this.search = search;
       }
       return ApplianceProfileFindRequest;
   }());

   /*
   */
   var ApplianceProfileIdRequest = /** @class */ (function () {
       function ApplianceProfileIdRequest(id) {
           this.id = id;
       }
       return ApplianceProfileIdRequest;
   }());

   /*
   */
   var ApplianceProfileIdsRequest = /** @class */ (function () {
       function ApplianceProfileIdsRequest(id) {
           this.id = id;
       }
       return ApplianceProfileIdsRequest;
   }());

   /*
   */
   var ApplianceProfileUpdateBulkRequest = /** @class */ (function () {
       function ApplianceProfileUpdateBulkRequest(body) {
           this.body = body;
       }
       return ApplianceProfileUpdateBulkRequest;
   }());

   /*
   */
   var ApplianceProfileUpdateRequest = /** @class */ (function () {
       function ApplianceProfileUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return ApplianceProfileUpdateRequest;
   }());

   /*
   */
   var ApplianceServiceDeleteCommandRequest = /** @class */ (function () {
       function ApplianceServiceDeleteCommandRequest(id, commandId) {
           this.id = id;
           this.commandId = commandId;
       }
       return ApplianceServiceDeleteCommandRequest;
   }());

   /*
   */
   var AppliancesCountRequest = /** @class */ (function () {
       function AppliancesCountRequest(folderId, subFolders) {
           this.folderId = folderId;
           this.subFolders = subFolders;
       }
       return AppliancesCountRequest;
   }());

   /*
   */
   var AppliancesServiceAddSensorRequest = /** @class */ (function () {
       function AppliancesServiceAddSensorRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return AppliancesServiceAddSensorRequest;
   }());

   /*
   */
   var AppliancesServiceBulkAttachRequest = /** @class */ (function () {
       function AppliancesServiceBulkAttachRequest(id, sensorId) {
           this.id = id;
           this.sensorId = sensorId;
       }
       return AppliancesServiceBulkAttachRequest;
   }());

   /*
   */
   var AppliancesServiceBulkDetachRequest = /** @class */ (function () {
       function AppliancesServiceBulkDetachRequest(id, sensorId) {
           this.id = id;
           this.sensorId = sensorId;
       }
       return AppliancesServiceBulkDetachRequest;
   }());

   /*
   */
   var AppliancesServiceChangeConfigurationRequest = /** @class */ (function () {
       function AppliancesServiceChangeConfigurationRequest(id, configId, versionId) {
           this.id = id;
           this.configId = configId;
           this.versionId = versionId;
       }
       return AppliancesServiceChangeConfigurationRequest;
   }());

   /*
   */
   var AppliancesServiceChangeFolderRequest = /** @class */ (function () {
       function AppliancesServiceChangeFolderRequest(id, folderId) {
           this.id = id;
           this.folderId = folderId;
       }
       return AppliancesServiceChangeFolderRequest;
   }());

   /*
   */
   var AppliancesServiceChangeMachineIdRequest = /** @class */ (function () {
       function AppliancesServiceChangeMachineIdRequest(id, machineId) {
           this.id = id;
           this.machineId = machineId;
       }
       return AppliancesServiceChangeMachineIdRequest;
   }());

   /*
   */
   var AppliancesServiceChangeNameRequest = /** @class */ (function () {
       function AppliancesServiceChangeNameRequest(id, name) {
           this.id = id;
           this.name = name;
       }
       return AppliancesServiceChangeNameRequest;
   }());

   /*
   */
   var AppliancesServiceExportRequest = /** @class */ (function () {
       function AppliancesServiceExportRequest(folderId, subFolders, search, status, agentStatus, sort, format, fields) {
           this.folderId = folderId;
           this.subFolders = subFolders;
           this.search = search;
           this.status = status;
           this.agentStatus = agentStatus;
           this.sort = sort;
           this.format = format;
           this.fields = fields;
       }
       return AppliancesServiceExportRequest;
   }());

   /*
   */
   var AppliancesServiceExportSensorsRequest = /** @class */ (function () {
       function AppliancesServiceExportSensorsRequest(id, format, fileName) {
           this.id = id;
           this.format = format;
           this.fileName = fileName;
       }
       return AppliancesServiceExportSensorsRequest;
   }());

   /*
   */
   var AppliancesServiceFindRequest = /** @class */ (function () {
       function AppliancesServiceFindRequest(folderId, subFolders, search, status, agentStatus, sort, page, pageSize) {
           this.folderId = folderId;
           this.subFolders = subFolders;
           this.search = search;
           this.status = status;
           this.agentStatus = agentStatus;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return AppliancesServiceFindRequest;
   }());

   /*
   */
   var AppliancesServiceFindSensorsRequest = /** @class */ (function () {
       function AppliancesServiceFindSensorsRequest(id, search, type, status, stream, sort, page, pageSize, format, fields, fileName) {
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
       return AppliancesServiceFindSensorsRequest;
   }());

   /*
   */
   var AppliancesServiceGetCommandsRequest = /** @class */ (function () {
       function AppliancesServiceGetCommandsRequest(id, status, sort, page, pageSize) {
           this.id = id;
           this.status = status;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return AppliancesServiceGetCommandsRequest;
   }());

   /*
   */
   var AppliancesServiceGetLogsRequest = /** @class */ (function () {
       function AppliancesServiceGetLogsRequest(id, from, to, component) {
           this.id = id;
           this.from = from;
           this.to = to;
           this.component = component;
       }
       return AppliancesServiceGetLogsRequest;
   }());

   /*
   */
   var AppliancesServiceImportSensorsRequest = /** @class */ (function () {
       function AppliancesServiceImportSensorsRequest(id, csvFile) {
           this.id = id;
           this.csvFile = csvFile;
       }
       return AppliancesServiceImportSensorsRequest;
   }());

   /*
   */
   var AppliancesServiceRegisterApplianceRequest = /** @class */ (function () {
       function AppliancesServiceRegisterApplianceRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return AppliancesServiceRegisterApplianceRequest;
   }());

   /*
   */
   var AppliancesServiceSetCommandRequest = /** @class */ (function () {
       function AppliancesServiceSetCommandRequest(commandId, status) {
           this.commandId = commandId;
           this.status = status;
       }
       return AppliancesServiceSetCommandRequest;
   }());

   /*
   */
   var AppliancesServiceStatusOvertimeRequest = /** @class */ (function () {
       function AppliancesServiceStatusOvertimeRequest(id, from, to) {
           this.id = id;
           this.from = from;
           this.to = to;
       }
       return AppliancesServiceStatusOvertimeRequest;
   }());

   /*
   */
   var AppliancesServiceUpdateApplianceRequest = /** @class */ (function () {
       function AppliancesServiceUpdateApplianceRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return AppliancesServiceUpdateApplianceRequest;
   }());

   /*
   */
   var AuditLogIdRequest = /** @class */ (function () {
       function AuditLogIdRequest(id) {
           this.id = id;
       }
       return AuditLogIdRequest;
   }());

   /*
   */
   var AuditLogServiceExportRequest = /** @class */ (function () {
       function AuditLogServiceExportRequest(userId, from, to, item, itemType, sort, format, fields, fileName) {
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
       return AuditLogServiceExportRequest;
   }());

   /*
   */
   var AuditLogServiceFindRequest = /** @class */ (function () {
       function AuditLogServiceFindRequest(userId, from, to, item, itemType, sort, page, pageSize) {
           this.userId = userId;
           this.from = from;
           this.to = to;
           this.item = item;
           this.itemType = itemType;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return AuditLogServiceFindRequest;
   }());

   /*
   */
   var CalendarIdRequest = /** @class */ (function () {
       function CalendarIdRequest(id) {
           this.id = id;
       }
       return CalendarIdRequest;
   }());

   /*
   */
   var CalendarIdsRequest = /** @class */ (function () {
       function CalendarIdsRequest(id) {
           this.id = id;
       }
       return CalendarIdsRequest;
   }());

   /*
   */
   var CalendarsServiceCreateRequest = /** @class */ (function () {
       function CalendarsServiceCreateRequest(body) {
           this.body = body;
       }
       return CalendarsServiceCreateRequest;
   }());

   /*
   */
   var CalendarsServiceFindRequest = /** @class */ (function () {
       function CalendarsServiceFindRequest(search, folderId, sort, page, pageSize) {
           this.search = search;
           this.folderId = folderId;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return CalendarsServiceFindRequest;
   }());

   /*
   */
   var CalendarsServiceFolderRequest = /** @class */ (function () {
       function CalendarsServiceFolderRequest(folderId, sort, page, pageSize) {
           this.folderId = folderId;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return CalendarsServiceFolderRequest;
   }());

   /*
   */
   var CalendarsServiceImportRequest = /** @class */ (function () {
       function CalendarsServiceImportRequest(icsFile, folderId) {
           this.icsFile = icsFile;
           this.folderId = folderId;
       }
       return CalendarsServiceImportRequest;
   }());

   /*
   */
   var CalendarsServiceImportUrlRequest = /** @class */ (function () {
       function CalendarsServiceImportUrlRequest(folderId, body) {
           this.folderId = folderId;
           this.body = body;
       }
       return CalendarsServiceImportUrlRequest;
   }());

   /*
   */
   var CalendarsServiceUpdateRequest = /** @class */ (function () {
       function CalendarsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return CalendarsServiceUpdateRequest;
   }());

   /*
   */
   var CaseIdRequest = /** @class */ (function () {
       function CaseIdRequest(id) {
           this.id = id;
       }
       return CaseIdRequest;
   }());

   /*
   */
   var CasesServiceAddEventsRequest = /** @class */ (function () {
       function CasesServiceAddEventsRequest(id, sessionId, eventId, description) {
           this.id = id;
           this.sessionId = sessionId;
           this.eventId = eventId;
           this.description = description;
       }
       return CasesServiceAddEventsRequest;
   }());

   /*
   */
   var CasesServiceCreateRequest = /** @class */ (function () {
       function CasesServiceCreateRequest(body) {
           this.body = body;
       }
       return CasesServiceCreateRequest;
   }());

   /*
   */
   var CasesServiceDeleteEventsRequest = /** @class */ (function () {
       function CasesServiceDeleteEventsRequest(id, eventId) {
           this.id = id;
           this.eventId = eventId;
       }
       return CasesServiceDeleteEventsRequest;
   }());

   /*
   */
   var CasesServiceFindRequest = /** @class */ (function () {
       function CasesServiceFindRequest(search, sort, page, pageSize) {
           this.search = search;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return CasesServiceFindRequest;
   }());

   /*
   */
   var CasesServiceGetEventCropsRequest = /** @class */ (function () {
       function CasesServiceGetEventCropsRequest(id, eventId) {
           this.id = id;
           this.eventId = eventId;
       }
       return CasesServiceGetEventCropsRequest;
   }());

   /*
   */
   var CasesServiceUpdateEventDescriptionRequest = /** @class */ (function () {
       function CasesServiceUpdateEventDescriptionRequest(id, eventId, description) {
           this.id = id;
           this.eventId = eventId;
           this.description = description;
       }
       return CasesServiceUpdateEventDescriptionRequest;
   }());

   /*
   */
   var CasesServiceUpdateRequest = /** @class */ (function () {
       function CasesServiceUpdateRequest(body) {
           this.body = body;
       }
       return CasesServiceUpdateRequest;
   }());

   /*
   */
   var ChangeGeoAreaRequest = /** @class */ (function () {
       function ChangeGeoAreaRequest(body) {
           this.body = body;
       }
       return ChangeGeoAreaRequest;
   }());

   /*
   */
   var ChangeGeoLocationRequest = /** @class */ (function () {
       function ChangeGeoLocationRequest(body) {
           this.body = body;
       }
       return ChangeGeoLocationRequest;
   }());

   /*
   */
   var ChangeHealthThresholdsRequest = /** @class */ (function () {
       function ChangeHealthThresholdsRequest(body) {
           this.body = body;
       }
       return ChangeHealthThresholdsRequest;
   }());

   /*
      Change Password request message
   */
   var ChangePasswordRequest = /** @class */ (function () {
       function ChangePasswordRequest(userId, oldPassword, newPassword) {
           this.userId = userId;
           this.oldPassword = oldPassword;
           this.newPassword = newPassword;
       }
       return ChangePasswordRequest;
   }());

   /*
   */
   var ChangeTimezoneRequest = /** @class */ (function () {
       function ChangeTimezoneRequest(body) {
           this.body = body;
       }
       return ChangeTimezoneRequest;
   }());

   /*
   */
   var ClusterIdRequest = /** @class */ (function () {
       function ClusterIdRequest(id) {
           this.id = id;
       }
       return ClusterIdRequest;
   }());

   /*
   */
   var ConfigurationIdRequest = /** @class */ (function () {
       function ConfigurationIdRequest(id) {
           this.id = id;
       }
       return ConfigurationIdRequest;
   }());

   /*
   */
   var ConfigurationModelRequest = /** @class */ (function () {
       function ConfigurationModelRequest(model) {
           this.model = model;
       }
       return ConfigurationModelRequest;
   }());

   /*
   */
   var ConfigurationTargetRequest = /** @class */ (function () {
       function ConfigurationTargetRequest(target) {
           this.target = target;
       }
       return ConfigurationTargetRequest;
   }());

   /*
   */
   var ConfigurationTemplateIdRequest = /** @class */ (function () {
       function ConfigurationTemplateIdRequest(id) {
           this.id = id;
       }
       return ConfigurationTemplateIdRequest;
   }());

   /*
   */
   var ConfigurationVersionIdRequest = /** @class */ (function () {
       function ConfigurationVersionIdRequest(id, versionId) {
           this.id = id;
           this.versionId = versionId;
       }
       return ConfigurationVersionIdRequest;
   }());

   /*
   */
   var DetectionModelIdRequest = /** @class */ (function () {
       function DetectionModelIdRequest(id) {
           this.id = id;
       }
       return DetectionModelIdRequest;
   }());

   /*
   */
   var DigitalIOCreateRequest = /** @class */ (function () {
       function DigitalIOCreateRequest(body) {
           this.body = body;
       }
       return DigitalIOCreateRequest;
   }());

   /*
   */
   var DigitalIOFindRequest = /** @class */ (function () {
       function DigitalIOFindRequest(applianceId, search) {
           this.applianceId = applianceId;
           this.search = search;
       }
       return DigitalIOFindRequest;
   }());

   /*
   */
   var DigitalIOIdRequest = /** @class */ (function () {
       function DigitalIOIdRequest(id) {
           this.id = id;
       }
       return DigitalIOIdRequest;
   }());

   /*
   */
   var DigitalIOUpdateRequest = /** @class */ (function () {
       function DigitalIOUpdateRequest(body) {
           this.body = body;
       }
       return DigitalIOUpdateRequest;
   }());

   /*
   */
   var EmptyRequest = /** @class */ (function () {
       function EmptyRequest() {
       }
       return EmptyRequest;
   }());

   /*
   */
   var EmptyResponse = /** @class */ (function () {
       function EmptyResponse() {
       }
       return EmptyResponse;
   }());

   /*
      Entities response message returned for read operation on multiple entities
   */
   var EntitiesResponse = /** @class */ (function () {
       function EntitiesResponse(code, error) {
           this.code = code;
           this.error = error;
       }
       return EntitiesResponse;
   }());

   /*
   */
   var EntitiesResponseOfAccount = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfAccount, _super);
       function EntitiesResponseOfAccount() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfAccount;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfAccountStatSummary = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfAccountStatSummary, _super);
       function EntitiesResponseOfAccountStatSummary() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfAccountStatSummary;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfAccountStatistics = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfAccountStatistics, _super);
       function EntitiesResponseOfAccountStatistics() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfAccountStatistics;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfAccountTypeSummary = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfAccountTypeSummary, _super);
       function EntitiesResponseOfAccountTypeSummary() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfAccountTypeSummary;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfApiKey = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfApiKey, _super);
       function EntitiesResponseOfApiKey() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfApiKey;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfAppliance = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfAppliance, _super);
       function EntitiesResponseOfAppliance() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfAppliance;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfApplianceAgents = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfApplianceAgents, _super);
       function EntitiesResponseOfApplianceAgents() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfApplianceAgents;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfApplianceCommand = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfApplianceCommand, _super);
       function EntitiesResponseOfApplianceCommand() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfApplianceCommand;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfApplianceConfiguration = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfApplianceConfiguration, _super);
       function EntitiesResponseOfApplianceConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfApplianceConfiguration;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfApplianceProfile = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfApplianceProfile, _super);
       function EntitiesResponseOfApplianceProfile() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfApplianceProfile;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfAuditLog = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfAuditLog, _super);
       function EntitiesResponseOfAuditLog() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfAuditLog;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfCalendar = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfCalendar, _super);
       function EntitiesResponseOfCalendar() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfCalendar;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfCaseInfo = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfCaseInfo, _super);
       function EntitiesResponseOfCaseInfo() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfCaseInfo;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfComponentConfiguration = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfComponentConfiguration, _super);
       function EntitiesResponseOfComponentConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfComponentConfiguration;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfConfiguration = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfConfiguration, _super);
       function EntitiesResponseOfConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfConfiguration;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfDetectionModel = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfDetectionModel, _super);
       function EntitiesResponseOfDetectionModel() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfDetectionModel;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfDigitalIO = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfDigitalIO, _super);
       function EntitiesResponseOfDigitalIO() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfDigitalIO;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfDistributionOfLong = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfDistributionOfLong, _super);
       function EntitiesResponseOfDistributionOfLong() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfDistributionOfLong;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfEvent = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfEvent, _super);
       function EntitiesResponseOfEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfEvent;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfFeature = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfFeature, _super);
       function EntitiesResponseOfFeature() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfFeature;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfFeaturesGroup = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfFeaturesGroup, _super);
       function EntitiesResponseOfFeaturesGroup() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfFeaturesGroup;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfFolder = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfFolder, _super);
       function EntitiesResponseOfFolder() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfFolder;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfGroup = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfGroup, _super);
       function EntitiesResponseOfGroup() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfGroup;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfIntegration = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfIntegration, _super);
       function EntitiesResponseOfIntegration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfIntegration;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfIntegrationAction = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfIntegrationAction, _super);
       function EntitiesResponseOfIntegrationAction() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfIntegrationAction;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfIntegrationStatus = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfIntegrationStatus, _super);
       function EntitiesResponseOfIntegrationStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfIntegrationStatus;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfLicense = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfLicense, _super);
       function EntitiesResponseOfLicense() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfLicense;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfReportDefinition = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfReportDefinition, _super);
       function EntitiesResponseOfReportDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfReportDefinition;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfRule = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfRule, _super);
       function EntitiesResponseOfRule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfRule;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfRuleSpec = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfRuleSpec, _super);
       function EntitiesResponseOfRuleSpec() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfRuleSpec;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfSchedule = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfSchedule, _super);
       function EntitiesResponseOfSchedule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfSchedule;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfScheduledReport = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfScheduledReport, _super);
       function EntitiesResponseOfScheduledReport() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfScheduledReport;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfSearchDefinition = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfSearchDefinition, _super);
       function EntitiesResponseOfSearchDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfSearchDefinition;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfSearchEvent = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfSearchEvent, _super);
       function EntitiesResponseOfSearchEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfSearchEvent;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfSensor = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfSensor, _super);
       function EntitiesResponseOfSensor() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfSensor;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfSensorStatus = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfSensorStatus, _super);
       function EntitiesResponseOfSensorStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfSensorStatus;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfStringIntValue = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfStringIntValue, _super);
       function EntitiesResponseOfStringIntValue() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfStringIntValue;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfStringKeyValue = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfStringKeyValue, _super);
       function EntitiesResponseOfStringKeyValue() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfStringKeyValue;
   }(EntitiesResponse));

   /*
   */
   var EntitiesResponseOfTimestampedCrop = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfTimestampedCrop, _super);
       function EntitiesResponseOfTimestampedCrop() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfTimestampedCrop;
   }(EntitiesResponse));

   /*
      Entity response message returned for read operation on a single entity
   */
   var EntityResponse = /** @class */ (function () {
       function EntityResponse(code, error) {
           this.code = code;
           this.error = error;
       }
       return EntityResponse;
   }());

   /*
   */
   var EntitiesResponseOfUpdateStatus = /** @class */ (function (_super) {
       __extends(EntitiesResponseOfUpdateStatus, _super);
       function EntitiesResponseOfUpdateStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntitiesResponseOfUpdateStatus;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfAccount = /** @class */ (function (_super) {
       __extends(EntityResponseOfAccount, _super);
       function EntityResponseOfAccount() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfAccount;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfApiKey = /** @class */ (function (_super) {
       __extends(EntityResponseOfApiKey, _super);
       function EntityResponseOfApiKey() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfApiKey;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfAppliance = /** @class */ (function (_super) {
       __extends(EntityResponseOfAppliance, _super);
       function EntityResponseOfAppliance() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfAppliance;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfApplianceAgents = /** @class */ (function (_super) {
       __extends(EntityResponseOfApplianceAgents, _super);
       function EntityResponseOfApplianceAgents() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfApplianceAgents;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfApplianceConfiguration = /** @class */ (function (_super) {
       __extends(EntityResponseOfApplianceConfiguration, _super);
       function EntityResponseOfApplianceConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfApplianceConfiguration;
   }(EntitiesResponse));

   /*
   */
   var EntityResponseOfApplianceDiscovery = /** @class */ (function (_super) {
       __extends(EntityResponseOfApplianceDiscovery, _super);
       function EntityResponseOfApplianceDiscovery() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfApplianceDiscovery;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfApplianceKpiTimeSeries = /** @class */ (function (_super) {
       __extends(EntityResponseOfApplianceKpiTimeSeries, _super);
       function EntityResponseOfApplianceKpiTimeSeries() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfApplianceKpiTimeSeries;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfApplianceProfile = /** @class */ (function (_super) {
       __extends(EntityResponseOfApplianceProfile, _super);
       function EntityResponseOfApplianceProfile() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfApplianceProfile;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfApplianceStatusTimeSeries = /** @class */ (function (_super) {
       __extends(EntityResponseOfApplianceStatusTimeSeries, _super);
       function EntityResponseOfApplianceStatusTimeSeries() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfApplianceStatusTimeSeries;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfAuditLog = /** @class */ (function (_super) {
       __extends(EntityResponseOfAuditLog, _super);
       function EntityResponseOfAuditLog() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfAuditLog;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfCalendar = /** @class */ (function (_super) {
       __extends(EntityResponseOfCalendar, _super);
       function EntityResponseOfCalendar() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfCalendar;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfCaseInfo = /** @class */ (function (_super) {
       __extends(EntityResponseOfCaseInfo, _super);
       function EntityResponseOfCaseInfo() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfCaseInfo;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfComponentConfiguration = /** @class */ (function (_super) {
       __extends(EntityResponseOfComponentConfiguration, _super);
       function EntityResponseOfComponentConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfComponentConfiguration;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfConfiguration = /** @class */ (function (_super) {
       __extends(EntityResponseOfConfiguration, _super);
       function EntityResponseOfConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfConfiguration;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfConfigurationTemplate = /** @class */ (function (_super) {
       __extends(EntityResponseOfConfigurationTemplate, _super);
       function EntityResponseOfConfigurationTemplate() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfConfigurationTemplate;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfConfigurationVersion = /** @class */ (function (_super) {
       __extends(EntityResponseOfConfigurationVersion, _super);
       function EntityResponseOfConfigurationVersion() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfConfigurationVersion;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfCoordinate = /** @class */ (function (_super) {
       __extends(EntityResponseOfCoordinate, _super);
       function EntityResponseOfCoordinate() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfCoordinate;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfDetectionModel = /** @class */ (function (_super) {
       __extends(EntityResponseOfDetectionModel, _super);
       function EntityResponseOfDetectionModel() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfDetectionModel;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfDigitalIO = /** @class */ (function (_super) {
       __extends(EntityResponseOfDigitalIO, _super);
       function EntityResponseOfDigitalIO() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfDigitalIO;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfDistributionOfLong = /** @class */ (function (_super) {
       __extends(EntityResponseOfDistributionOfLong, _super);
       function EntityResponseOfDistributionOfLong() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfDistributionOfLong;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfEvent = /** @class */ (function (_super) {
       __extends(EntityResponseOfEvent, _super);
       function EntityResponseOfEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfEvent;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfEventCountTimeSeries = /** @class */ (function (_super) {
       __extends(EntityResponseOfEventCountTimeSeries, _super);
       function EntityResponseOfEventCountTimeSeries() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfEventCountTimeSeries;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfFeature = /** @class */ (function (_super) {
       __extends(EntityResponseOfFeature, _super);
       function EntityResponseOfFeature() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfFeature;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfFeaturesGroup = /** @class */ (function (_super) {
       __extends(EntityResponseOfFeaturesGroup, _super);
       function EntityResponseOfFeaturesGroup() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfFeaturesGroup;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfFolder = /** @class */ (function (_super) {
       __extends(EntityResponseOfFolder, _super);
       function EntityResponseOfFolder() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfFolder;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfGeoReferenceData = /** @class */ (function (_super) {
       __extends(EntityResponseOfGeoReferenceData, _super);
       function EntityResponseOfGeoReferenceData() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfGeoReferenceData;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfGroup = /** @class */ (function (_super) {
       __extends(EntityResponseOfGroup, _super);
       function EntityResponseOfGroup() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfGroup;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfHealthEvent = /** @class */ (function (_super) {
       __extends(EntityResponseOfHealthEvent, _super);
       function EntityResponseOfHealthEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfHealthEvent;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfIntegration = /** @class */ (function (_super) {
       __extends(EntityResponseOfIntegration, _super);
       function EntityResponseOfIntegration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfIntegration;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfIntegrationAction = /** @class */ (function (_super) {
       __extends(EntityResponseOfIntegrationAction, _super);
       function EntityResponseOfIntegrationAction() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfIntegrationAction;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfJobStatus = /** @class */ (function (_super) {
       __extends(EntityResponseOfJobStatus, _super);
       function EntityResponseOfJobStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfJobStatus;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfLicense = /** @class */ (function (_super) {
       __extends(EntityResponseOfLicense, _super);
       function EntityResponseOfLicense() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfLicense;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfLoginData = /** @class */ (function (_super) {
       __extends(EntityResponseOfLoginData, _super);
       function EntityResponseOfLoginData() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfLoginData;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfMember = /** @class */ (function (_super) {
       __extends(EntityResponseOfMember, _super);
       function EntityResponseOfMember() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfMember;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfPreset = /** @class */ (function (_super) {
       __extends(EntityResponseOfPreset, _super);
       function EntityResponseOfPreset() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfPreset;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfReportDefinition = /** @class */ (function (_super) {
       __extends(EntityResponseOfReportDefinition, _super);
       function EntityResponseOfReportDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfReportDefinition;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfRule = /** @class */ (function (_super) {
       __extends(EntityResponseOfRule, _super);
       function EntityResponseOfRule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfRule;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSchedule = /** @class */ (function (_super) {
       __extends(EntityResponseOfSchedule, _super);
       function EntityResponseOfSchedule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSchedule;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfScheduledReport = /** @class */ (function (_super) {
       __extends(EntityResponseOfScheduledReport, _super);
       function EntityResponseOfScheduledReport() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfScheduledReport;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSearchDefinition = /** @class */ (function (_super) {
       __extends(EntityResponseOfSearchDefinition, _super);
       function EntityResponseOfSearchDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSearchDefinition;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSearchEvent = /** @class */ (function (_super) {
       __extends(EntityResponseOfSearchEvent, _super);
       function EntityResponseOfSearchEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSearchEvent;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSearchStatus = /** @class */ (function (_super) {
       __extends(EntityResponseOfSearchStatus, _super);
       function EntityResponseOfSearchStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSearchStatus;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSensor = /** @class */ (function (_super) {
       __extends(EntityResponseOfSensor, _super);
       function EntityResponseOfSensor() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSensor;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSensorAnalysisResults = /** @class */ (function (_super) {
       __extends(EntityResponseOfSensorAnalysisResults, _super);
       function EntityResponseOfSensorAnalysisResults() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSensorAnalysisResults;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSensorAnomalyInfo = /** @class */ (function (_super) {
       __extends(EntityResponseOfSensorAnomalyInfo, _super);
       function EntityResponseOfSensorAnomalyInfo() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSensorAnomalyInfo;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSensorHeatmap = /** @class */ (function (_super) {
       __extends(EntityResponseOfSensorHeatmap, _super);
       function EntityResponseOfSensorHeatmap() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSensorHeatmap;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSensorPaths = /** @class */ (function (_super) {
       __extends(EntityResponseOfSensorPaths, _super);
       function EntityResponseOfSensorPaths() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSensorPaths;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSensorStatus = /** @class */ (function (_super) {
       __extends(EntityResponseOfSensorStatus, _super);
       function EntityResponseOfSensorStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSensorStatus;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfSensorStatusTimeSeries = /** @class */ (function (_super) {
       __extends(EntityResponseOfSensorStatusTimeSeries, _super);
       function EntityResponseOfSensorStatusTimeSeries() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfSensorStatusTimeSeries;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfTimeline = /** @class */ (function (_super) {
       __extends(EntityResponseOfTimeline, _super);
       function EntityResponseOfTimeline() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfTimeline;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfTimestampedCrop = /** @class */ (function (_super) {
       __extends(EntityResponseOfTimestampedCrop, _super);
       function EntityResponseOfTimestampedCrop() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfTimestampedCrop;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfTimestampedCropsData = /** @class */ (function (_super) {
       __extends(EntityResponseOfTimestampedCropsData, _super);
       function EntityResponseOfTimestampedCropsData() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfTimestampedCropsData;
   }(EntitiesResponse));

   /*
   */
   var EntityResponseOfTimestampedImage = /** @class */ (function (_super) {
       __extends(EntityResponseOfTimestampedImage, _super);
       function EntityResponseOfTimestampedImage() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfTimestampedImage;
   }(EntitiesResponse));

   /*
   */
   var EntityResponseOfTreeNode = /** @class */ (function (_super) {
       __extends(EntityResponseOfTreeNode, _super);
       function EntityResponseOfTreeNode() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfTreeNode;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfUser = /** @class */ (function (_super) {
       __extends(EntityResponseOfUser, _super);
       function EntityResponseOfUser() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfUser;
   }(EntityResponse));

   /*
   */
   var EntityResponseOfUserAccountInfo = /** @class */ (function (_super) {
       __extends(EntityResponseOfUserAccountInfo, _super);
       function EntityResponseOfUserAccountInfo() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseOfUserAccountInfo;
   }(EntityResponse));

   /*
   */
   var EntityResponseUsageReport = /** @class */ (function (_super) {
       __extends(EntityResponseUsageReport, _super);
       function EntityResponseUsageReport() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return EntityResponseUsageReport;
   }(EntityResponse));

   /*
   */
   var EventIdRequest = /** @class */ (function () {
       function EventIdRequest(id) {
           this.id = id;
       }
       return EventIdRequest;
   }());

   /*
   */
   var EventIdsRequest = /** @class */ (function () {
       function EventIdsRequest(id) {
           this.id = id;
       }
       return EventIdsRequest;
   }());

   /*
   */
   var EventTokenRequest = /** @class */ (function () {
       function EventTokenRequest(imageToken) {
           this.imageToken = imageToken;
       }
       return EventTokenRequest;
   }());

   /*
   */
   var EventsCountByBehaviorRequest = /** @class */ (function () {
       function EventsCountByBehaviorRequest(folderId, sensorId, objectType, severity, status, rule, from, to) {
           this.folderId = folderId;
           this.sensorId = sensorId;
           this.objectType = objectType;
           this.severity = severity;
           this.status = status;
           this.rule = rule;
           this.from = from;
           this.to = to;
       }
       return EventsCountByBehaviorRequest;
   }());

   /*
   */
   var EventsCountByObjectRequest = /** @class */ (function () {
       function EventsCountByObjectRequest(folderId, sensorId, behaviorType, severity, status, rule, from, to) {
           this.folderId = folderId;
           this.sensorId = sensorId;
           this.behaviorType = behaviorType;
           this.severity = severity;
           this.status = status;
           this.rule = rule;
           this.from = from;
           this.to = to;
       }
       return EventsCountByObjectRequest;
   }());

   /*
   */
   var EventsCountByStatusRequest = /** @class */ (function () {
       function EventsCountByStatusRequest(folderId, sensorId, objectType, behaviorType, severity, rule, from, to) {
           this.folderId = folderId;
           this.sensorId = sensorId;
           this.objectType = objectType;
           this.behaviorType = behaviorType;
           this.severity = severity;
           this.rule = rule;
           this.from = from;
           this.to = to;
       }
       return EventsCountByStatusRequest;
   }());

   /*
   */
   var EventsServiceCreateRequest = /** @class */ (function () {
       function EventsServiceCreateRequest(body) {
           this.body = body;
       }
       return EventsServiceCreateRequest;
   }());

   /*
   */
   var EventsServiceExportRequest = /** @class */ (function () {
       function EventsServiceExportRequest(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields, fileName) {
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
       return EventsServiceExportRequest;
   }());

   /*
   */
   var EventsServiceFindInAreaRequest = /** @class */ (function () {
       function EventsServiceFindInAreaRequest(folderId, searchArea, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
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
       return EventsServiceFindInAreaRequest;
   }());

   /*
   */
   var EventsServiceFindRequest = /** @class */ (function () {
       function EventsServiceFindRequest(folderId, subFolders, sensorId, applianceId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
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
       return EventsServiceFindRequest;
   }());

   /*
   */
   var EventsServiceGetIntegrationsRequestRequest = /** @class */ (function () {
       function EventsServiceGetIntegrationsRequestRequest(id, sensorId, folderId) {
           this.id = id;
           this.sensorId = sensorId;
           this.folderId = folderId;
       }
       return EventsServiceGetIntegrationsRequestRequest;
   }());

   /*
   */
   var EventsServiceSetBulkStatusRequest = /** @class */ (function () {
       function EventsServiceSetBulkStatusRequest(id, status) {
           this.id = id;
           this.status = status;
       }
       return EventsServiceSetBulkStatusRequest;
   }());

   /*
   */
   var EventsServiceSetClipPathRequest = /** @class */ (function () {
       function EventsServiceSetClipPathRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return EventsServiceSetClipPathRequest;
   }());

   /*
   */
   var EventsServiceSetImagePathRequest = /** @class */ (function () {
       function EventsServiceSetImagePathRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return EventsServiceSetImagePathRequest;
   }());

   /*
   */
   var EventsServiceSetStatusRequest = /** @class */ (function () {
       function EventsServiceSetStatusRequest(id, status) {
           this.id = id;
           this.status = status;
       }
       return EventsServiceSetStatusRequest;
   }());

   /*
   */
   var EventsServiceStatisticsRequest = /** @class */ (function () {
       function EventsServiceStatisticsRequest(folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, interval, labelFormat) {
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
       return EventsServiceStatisticsRequest;
   }());

   /*
   */
   var ExportUsageReportRequest = /** @class */ (function () {
       function ExportUsageReportRequest(year, month, format, fileName) {
           this.year = year;
           this.month = month;
           this.format = format;
           this.fileName = fileName;
       }
       return ExportUsageReportRequest;
   }());

   /*
   */
   var FeatureIdRequest = /** @class */ (function () {
       function FeatureIdRequest(id) {
           this.id = id;
       }
       return FeatureIdRequest;
   }());

   /*
   */
   var FeatureIdsRequest = /** @class */ (function () {
       function FeatureIdsRequest(id) {
           this.id = id;
       }
       return FeatureIdsRequest;
   }());

   /*
   */
   var FeaturesGroupIdRequest = /** @class */ (function () {
       function FeaturesGroupIdRequest(id) {
           this.id = id;
       }
       return FeaturesGroupIdRequest;
   }());

   /*
   */
   var FeaturesGroupIdsRequest = /** @class */ (function () {
       function FeaturesGroupIdsRequest(id) {
           this.id = id;
       }
       return FeaturesGroupIdsRequest;
   }());

   /*
   */
   var FeaturesGroupsServiceCreateRequest = /** @class */ (function () {
       function FeaturesGroupsServiceCreateRequest(body) {
           this.body = body;
       }
       return FeaturesGroupsServiceCreateRequest;
   }());

   /*
   */
   var FeaturesGroupsServiceFindRequest = /** @class */ (function () {
       function FeaturesGroupsServiceFindRequest(search, sort) {
           this.search = search;
           this.sort = sort;
       }
       return FeaturesGroupsServiceFindRequest;
   }());

   /*
   */
   var FeaturesGroupsServiceSetFeaturesRequest = /** @class */ (function () {
       function FeaturesGroupsServiceSetFeaturesRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return FeaturesGroupsServiceSetFeaturesRequest;
   }());

   /*
   */
   var FeaturesGroupsServiceSetNameRequest = /** @class */ (function () {
       function FeaturesGroupsServiceSetNameRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return FeaturesGroupsServiceSetNameRequest;
   }());

   /*
   */
   var FeaturesGroupsServiceUpdateRequest = /** @class */ (function () {
       function FeaturesGroupsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return FeaturesGroupsServiceUpdateRequest;
   }());

   /*
   */
   var FeaturesServiceCreateRequest = /** @class */ (function () {
       function FeaturesServiceCreateRequest(body) {
           this.body = body;
       }
       return FeaturesServiceCreateRequest;
   }());

   /*
   */
   var FeaturesServiceFindRequest = /** @class */ (function () {
       function FeaturesServiceFindRequest(search, category, sort) {
           this.search = search;
           this.category = category;
           this.sort = sort;
       }
       return FeaturesServiceFindRequest;
   }());

   /*
   */
   var FeaturesServiceUpdateRequest = /** @class */ (function () {
       function FeaturesServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return FeaturesServiceUpdateRequest;
   }());

   /*
   */
   var FolderExtIdsRequest = /** @class */ (function () {
       function FolderExtIdsRequest(id) {
           this.id = id;
       }
       return FolderExtIdsRequest;
   }());

   /*
   */
   var FolderIdRequest = /** @class */ (function () {
       function FolderIdRequest(id) {
           this.id = id;
       }
       return FolderIdRequest;
   }());

   /*
   */
   var FolderIdsRequest = /** @class */ (function () {
       function FolderIdsRequest(id) {
           this.id = id;
       }
       return FolderIdsRequest;
   }());

   /*
   */
   var FoldersServiceChangeParentRequest = /** @class */ (function () {
       function FoldersServiceChangeParentRequest(id, parentId) {
           this.id = id;
           this.parentId = parentId;
       }
       return FoldersServiceChangeParentRequest;
   }());

   /*
   */
   var FoldersServiceCreateRequest = /** @class */ (function () {
       function FoldersServiceCreateRequest(body) {
           this.body = body;
       }
       return FoldersServiceCreateRequest;
   }());

   /*
   */
   var FoldersServiceExportRequest = /** @class */ (function () {
       function FoldersServiceExportRequest(id, search, parentId, sort, format, fields, fileName) {
           this.id = id;
           this.search = search;
           this.parentId = parentId;
           this.sort = sort;
           this.format = format;
           this.fields = fields;
           this.fileName = fileName;
       }
       return FoldersServiceExportRequest;
   }());

   /*
   */
   var FoldersServiceFindRequest = /** @class */ (function () {
       function FoldersServiceFindRequest(id, search, parentId, sort, page, pageSize) {
           this.id = id;
           this.search = search;
           this.parentId = parentId;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return FoldersServiceFindRequest;
   }());

   /*
   */
   var FoldersServiceGetHierarchyRequest = /** @class */ (function () {
       function FoldersServiceGetHierarchyRequest(includeSensors) {
           this.includeSensors = includeSensors;
       }
       return FoldersServiceGetHierarchyRequest;
   }());

   /*
   */
   var GeoServicesReferenceRequest = /** @class */ (function () {
       function GeoServicesReferenceRequest(body) {
           this.body = body;
       }
       return GeoServicesReferenceRequest;
   }());

   /*
   */
   var GeoServicesTransformRequest = /** @class */ (function () {
       function GeoServicesTransformRequest(body) {
           this.body = body;
       }
       return GeoServicesTransformRequest;
   }());

   /*
   */
   var GetPoiFromImageRequest = /** @class */ (function () {
       function GetPoiFromImageRequest(body) {
           this.body = body;
       }
       return GetPoiFromImageRequest;
   }());

   /*
   */
   var GetPoiFromImageRequestBody = /** @class */ (function () {
       function GetPoiFromImageRequestBody(base64EncodedJpeg) {
           this.base64EncodedJpeg = base64EncodedJpeg;
       }
       return GetPoiFromImageRequestBody;
   }());

   /*
   */
   var GroupIdRequest = /** @class */ (function () {
       function GroupIdRequest(id) {
           this.id = id;
       }
       return GroupIdRequest;
   }());

   /*
   */
   var GroupIdsRequest = /** @class */ (function () {
       function GroupIdsRequest(id) {
           this.id = id;
       }
       return GroupIdsRequest;
   }());

   /*
   */
   var GroupServiceFindRequest = /** @class */ (function () {
       function GroupServiceFindRequest(search, sort, page, pageSize) {
           this.search = search;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return GroupServiceFindRequest;
   }());

   /*
   */
   var GroupsServiceCreateRequest = /** @class */ (function () {
       function GroupsServiceCreateRequest(body) {
           this.body = body;
       }
       return GroupsServiceCreateRequest;
   }());

   /*
   */
   var GroupsServiceUpdateRequest = /** @class */ (function () {
       function GroupsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return GroupsServiceUpdateRequest;
   }());

   /*
   */
   var HealthEventFindRequest = /** @class */ (function () {
       function HealthEventFindRequest(folderId, from, to, source, openClosed, entityId, sort, page, pageSize) {
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
       return HealthEventFindRequest;
   }());

   /*
   */
   var HealthEventIdRequest = /** @class */ (function () {
       function HealthEventIdRequest(id) {
           this.id = id;
       }
       return HealthEventIdRequest;
   }());

   /*
   */
   var IdentifiedPoiFromImage = /** @class */ (function () {
       function IdentifiedPoiFromImage(poiId, displayName, score, boundingBox) {
           this.poiId = poiId;
           this.displayName = displayName;
           this.score = score;
           this.boundingBox = boundingBox;
       }
       return IdentifiedPoiFromImage;
   }());

   /*
   */
   var IntegrationActionCreateRequest = /** @class */ (function () {
       function IntegrationActionCreateRequest(body) {
           this.body = body;
       }
       return IntegrationActionCreateRequest;
   }());

   /*
   */
   var IntegrationActionIdRequest = /** @class */ (function () {
       function IntegrationActionIdRequest(id) {
           this.id = id;
       }
       return IntegrationActionIdRequest;
   }());

   /*
   */
   var IntegrationActionIdsRequest = /** @class */ (function () {
       function IntegrationActionIdsRequest(id) {
           this.id = id;
       }
       return IntegrationActionIdsRequest;
   }());

   /*
   */
   var IntegrationActionUpdateRequest = /** @class */ (function () {
       function IntegrationActionUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return IntegrationActionUpdateRequest;
   }());

   /*
   */
   var IntegrationActionsFindRequest = /** @class */ (function () {
       function IntegrationActionsFindRequest(search, sort, page, pageSize) {
           this.search = search;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return IntegrationActionsFindRequest;
   }());

   /*
   */
   var IntegrationActionsFolderRequest = /** @class */ (function () {
       function IntegrationActionsFolderRequest(folderId) {
           this.folderId = folderId;
       }
       return IntegrationActionsFolderRequest;
   }());

   /*
   */
   var IntegrationIdRequest = /** @class */ (function () {
       function IntegrationIdRequest(id) {
           this.id = id;
       }
       return IntegrationIdRequest;
   }());

   /*
   */
   var IntegrationIdsRequest = /** @class */ (function () {
       function IntegrationIdsRequest(id) {
           this.id = id;
       }
       return IntegrationIdsRequest;
   }());

   /*
   */
   var IntegrationStatusFindRequest = /** @class */ (function () {
       function IntegrationStatusFindRequest(source, entityId, integrationTargetId, integrationActionId, from, to, sort, resolveNames, page, pageSize) {
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
       return IntegrationStatusFindRequest;
   }());

   /*
   */
   var IntegrationsServiceCreateRequest = /** @class */ (function () {
       function IntegrationsServiceCreateRequest(body) {
           this.body = body;
       }
       return IntegrationsServiceCreateRequest;
   }());

   /*
   */
   var IntegrationsServiceFindRequest = /** @class */ (function () {
       function IntegrationsServiceFindRequest(search, type, sort, page, pageSize) {
           this.search = search;
           this.type = type;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return IntegrationsServiceFindRequest;
   }());

   /*
   */
   var IntegrationsServiceUpdateRequest = /** @class */ (function () {
       function IntegrationsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return IntegrationsServiceUpdateRequest;
   }());

   /*
   */
   var LicenseIdRequest = /** @class */ (function () {
       function LicenseIdRequest(id) {
           this.id = id;
       }
       return LicenseIdRequest;
   }());

   /*
   */
   var LicenseImportRequest = /** @class */ (function () {
       function LicenseImportRequest(licenseFile) {
           this.licenseFile = licenseFile;
       }
       return LicenseImportRequest;
   }());

   /*
   */
   var MachineIdRequest = /** @class */ (function () {
       function MachineIdRequest(machineId) {
           this.machineId = machineId;
       }
       return MachineIdRequest;
   }());

   /*
   */
   var MemberByEmailRequest = /** @class */ (function () {
       function MemberByEmailRequest(email) {
           this.email = email;
       }
       return MemberByEmailRequest;
   }());

   /*
   */
   var MemberIdRequest = /** @class */ (function () {
       function MemberIdRequest(id) {
           this.id = id;
       }
       return MemberIdRequest;
   }());

   /*
   */
   var MemberTokenRequest = /** @class */ (function () {
       function MemberTokenRequest(id, exp) {
           this.id = id;
           this.exp = exp;
       }
       return MemberTokenRequest;
   }());

   /*
   */
   var MembersServiceExportRequest = /** @class */ (function () {
       function MembersServiceExportRequest(search, type, status, sort, format, fields, fileName) {
           this.search = search;
           this.type = type;
           this.status = status;
           this.sort = sort;
           this.format = format;
           this.fields = fields;
           this.fileName = fileName;
       }
       return MembersServiceExportRequest;
   }());

   /*
   */
   var MembersServiceFindRequest = /** @class */ (function () {
       function MembersServiceFindRequest(search, type, status, group, sort, page, pageSize) {
           this.search = search;
           this.type = type;
           this.status = status;
           this.group = group;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return MembersServiceFindRequest;
   }());

   /*
   */
   var MembersServiceInviteRequest = /** @class */ (function () {
       function MembersServiceInviteRequest(body) {
           this.body = body;
       }
       return MembersServiceInviteRequest;
   }());

   /*
   */
   var MembersServiceRegisterRequest = /** @class */ (function () {
       function MembersServiceRegisterRequest(body) {
           this.body = body;
       }
       return MembersServiceRegisterRequest;
   }());

   /*
   */
   var MembersServiceUpdateRequest = /** @class */ (function () {
       function MembersServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return MembersServiceUpdateRequest;
   }());

   /*
   */
   var PeopleCountingReportRequest = /** @class */ (function () {
       function PeopleCountingReportRequest(sensorId, folderId, from, to) {
           this.sensorId = sensorId;
           this.folderId = folderId;
           this.from = from;
           this.to = to;
       }
       return PeopleCountingReportRequest;
   }());

   /*
   */
   var PoiBoundingBox = /** @class */ (function () {
       function PoiBoundingBox(maxX, maxY, minX, minY) {
           this.maxX = maxX;
           this.maxY = maxY;
           this.minX = minX;
           this.minY = minY;
       }
       return PoiBoundingBox;
   }());

   /*
      Query response message returned for find operation (with pagination) on multiple entities
   */
   var QueryResponse = /** @class */ (function () {
       function QueryResponse(code, error, page, pageSize, pages, total, queryDef, docType) {
           this.code = code;
           this.error = error;
           this.page = page;
           this.pageSize = pageSize;
           this.pages = pages;
           this.total = total;
           this.queryDef = queryDef;
           this.docType = docType;
       }
       return QueryResponse;
   }());

   /*
   */
   var QueryResponseOfAccount = /** @class */ (function (_super) {
       __extends(QueryResponseOfAccount, _super);
       function QueryResponseOfAccount() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfAccount;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfAnomalyEventInfo = /** @class */ (function (_super) {
       __extends(QueryResponseOfAnomalyEventInfo, _super);
       function QueryResponseOfAnomalyEventInfo() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfAnomalyEventInfo;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfAppliance = /** @class */ (function (_super) {
       __extends(QueryResponseOfAppliance, _super);
       function QueryResponseOfAppliance() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfAppliance;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfApplianceConfigReport = /** @class */ (function (_super) {
       __extends(QueryResponseOfApplianceConfigReport, _super);
       function QueryResponseOfApplianceConfigReport() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfApplianceConfigReport;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfAuditLog = /** @class */ (function (_super) {
       __extends(QueryResponseOfAuditLog, _super);
       function QueryResponseOfAuditLog() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfAuditLog;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfCalendar = /** @class */ (function (_super) {
       __extends(QueryResponseOfCalendar, _super);
       function QueryResponseOfCalendar() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfCalendar;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfCaseInfo = /** @class */ (function (_super) {
       __extends(QueryResponseOfCaseInfo, _super);
       function QueryResponseOfCaseInfo() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfCaseInfo;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfComponentConfiguration = /** @class */ (function (_super) {
       __extends(QueryResponseOfComponentConfiguration, _super);
       function QueryResponseOfComponentConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfComponentConfiguration;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfConfiguration = /** @class */ (function (_super) {
       __extends(QueryResponseOfConfiguration, _super);
       function QueryResponseOfConfiguration() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfConfiguration;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfConfigurationTemplate = /** @class */ (function (_super) {
       __extends(QueryResponseOfConfigurationTemplate, _super);
       function QueryResponseOfConfigurationTemplate() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfConfigurationTemplate;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfConfigurationVersion = /** @class */ (function (_super) {
       __extends(QueryResponseOfConfigurationVersion, _super);
       function QueryResponseOfConfigurationVersion() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfConfigurationVersion;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfEvent = /** @class */ (function (_super) {
       __extends(QueryResponseOfEvent, _super);
       function QueryResponseOfEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfEvent;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfFindUser = /** @class */ (function (_super) {
       __extends(QueryResponseOfFindUser, _super);
       function QueryResponseOfFindUser() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfFindUser;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfFolder = /** @class */ (function (_super) {
       __extends(QueryResponseOfFolder, _super);
       function QueryResponseOfFolder() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfFolder;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfGroup = /** @class */ (function (_super) {
       __extends(QueryResponseOfGroup, _super);
       function QueryResponseOfGroup() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfGroup;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfHealthEvent = /** @class */ (function (_super) {
       __extends(QueryResponseOfHealthEvent, _super);
       function QueryResponseOfHealthEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfHealthEvent;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfIntegrationAction = /** @class */ (function (_super) {
       __extends(QueryResponseOfIntegrationAction, _super);
       function QueryResponseOfIntegrationAction() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfIntegrationAction;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfIntegrationStatus = /** @class */ (function (_super) {
       __extends(QueryResponseOfIntegrationStatus, _super);
       function QueryResponseOfIntegrationStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfIntegrationStatus;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfIntegrationStatusResponse = /** @class */ (function (_super) {
       __extends(QueryResponseOfIntegrationStatusResponse, _super);
       function QueryResponseOfIntegrationStatusResponse() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfIntegrationStatusResponse;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfIntegrationTarget = /** @class */ (function (_super) {
       __extends(QueryResponseOfIntegrationTarget, _super);
       function QueryResponseOfIntegrationTarget() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfIntegrationTarget;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfJobStatus = /** @class */ (function (_super) {
       __extends(QueryResponseOfJobStatus, _super);
       function QueryResponseOfJobStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfJobStatus;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfMember = /** @class */ (function (_super) {
       __extends(QueryResponseOfMember, _super);
       function QueryResponseOfMember() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfMember;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfReportDefinition = /** @class */ (function (_super) {
       __extends(QueryResponseOfReportDefinition, _super);
       function QueryResponseOfReportDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfReportDefinition;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfRule = /** @class */ (function (_super) {
       __extends(QueryResponseOfRule, _super);
       function QueryResponseOfRule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfRule;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfSchedule = /** @class */ (function (_super) {
       __extends(QueryResponseOfSchedule, _super);
       function QueryResponseOfSchedule() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfSchedule;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfScheduledReport = /** @class */ (function (_super) {
       __extends(QueryResponseOfScheduledReport, _super);
       function QueryResponseOfScheduledReport() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfScheduledReport;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfSearchDefinition = /** @class */ (function (_super) {
       __extends(QueryResponseOfSearchDefinition, _super);
       function QueryResponseOfSearchDefinition() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfSearchDefinition;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfSearchEvent = /** @class */ (function (_super) {
       __extends(QueryResponseOfSearchEvent, _super);
       function QueryResponseOfSearchEvent() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfSearchEvent;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfSensor = /** @class */ (function (_super) {
       __extends(QueryResponseOfSensor, _super);
       function QueryResponseOfSensor() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfSensor;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfSensorAnalysisResults = /** @class */ (function (_super) {
       __extends(QueryResponseOfSensorAnalysisResults, _super);
       function QueryResponseOfSensorAnalysisResults() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfSensorAnalysisResults;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfTreeItem = /** @class */ (function (_super) {
       __extends(QueryResponseOfTreeItem, _super);
       function QueryResponseOfTreeItem() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfTreeItem;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfUpdateStatus = /** @class */ (function (_super) {
       __extends(QueryResponseOfUpdateStatus, _super);
       function QueryResponseOfUpdateStatus() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfUpdateStatus;
   }(QueryResponse));

   /*
   */
   var QueryResponseOfUser = /** @class */ (function (_super) {
       __extends(QueryResponseOfUser, _super);
       function QueryResponseOfUser() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return QueryResponseOfUser;
   }(QueryResponse));

   /*
   */
   var RegisterServiceAccountRequest = /** @class */ (function () {
       function RegisterServiceAccountRequest(body) {
           this.body = body;
       }
       return RegisterServiceAccountRequest;
   }());

   /*
   */
   var RemoveSensorModelRequest = /** @class */ (function () {
       function RemoveSensorModelRequest(id, modelId) {
           this.id = id;
           this.modelId = modelId;
       }
       return RemoveSensorModelRequest;
   }());

   /*
   */
   var RemoveSensorModelsRequest = /** @class */ (function () {
       function RemoveSensorModelsRequest(sensorId, id) {
           this.sensorId = sensorId;
           this.id = id;
       }
       return RemoveSensorModelsRequest;
   }());

   /*
   */
   var ReportFindRequest = /** @class */ (function () {
       function ReportFindRequest(page, pageSize, search, relatedScheduledReportId) {
           this.page = page;
           this.pageSize = pageSize;
           this.search = search;
           this.relatedScheduledReportId = relatedScheduledReportId;
       }
       return ReportFindRequest;
   }());

   /*
   */
   var ReportGenerationRequest = /** @class */ (function () {
       function ReportGenerationRequest(body) {
           this.body = body;
       }
       return ReportGenerationRequest;
   }());

   /*
   */
   var ReportGenerationRequestBody = /** @class */ (function () {
       function ReportGenerationRequestBody(sensorIds, folderIds, from, to, reportType, aggregationType, dataType, reportFormat, surveillanceStartHour) {
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
       return ReportGenerationRequestBody;
   }());

   /*
   */
   var ReportIdRequest = /** @class */ (function () {
       function ReportIdRequest(id) {
           this.id = id;
       }
       return ReportIdRequest;
   }());

   /*
   */
   var ReportIdsRequest = /** @class */ (function () {
       function ReportIdsRequest(id) {
           this.id = id;
       }
       return ReportIdsRequest;
   }());

   /*
   */
   var ReportUpdateRequest = /** @class */ (function () {
       function ReportUpdateRequest(id, status) {
           this.id = id;
           this.status = status;
       }
       return ReportUpdateRequest;
   }());

   /*
   */
   var ReportsServiceCreateRequest = /** @class */ (function () {
       function ReportsServiceCreateRequest(body) {
           this.body = body;
       }
       return ReportsServiceCreateRequest;
   }());

   /*
   */
   var ReportsServiceFindRequest = /** @class */ (function () {
       function ReportsServiceFindRequest(search) {
           this.search = search;
       }
       return ReportsServiceFindRequest;
   }());

   /*
   */
   var ReportsServiceRulesSchedulesRequest = /** @class */ (function () {
       function ReportsServiceRulesSchedulesRequest() {
       }
       return ReportsServiceRulesSchedulesRequest;
   }());

   /*
   */
   var ReportsServiceSensorsRequest = /** @class */ (function () {
       function ReportsServiceSensorsRequest() {
       }
       return ReportsServiceSensorsRequest;
   }());

   /*
   */
   var ReportsServiceUpdateRequest = /** @class */ (function () {
       function ReportsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return ReportsServiceUpdateRequest;
   }());

   /*
   */
   var ResponseOfAddPoi = /** @class */ (function () {
       function ResponseOfAddPoi(code, name, poiId, expireAt) {
           this.code = code;
           this.name = name;
           this.poiId = poiId;
           this.expireAt = expireAt;
       }
       return ResponseOfAddPoi;
   }());

   /*
   */
   var ResponseOfSearchForPoiFromImage = /** @class */ (function () {
       function ResponseOfSearchForPoiFromImage(code, poi) {
           this.code = code;
           this.poi = poi;
       }
       return ResponseOfSearchForPoiFromImage;
   }());

   /*
   */
   var ResponseOfStaticWatchlist = /** @class */ (function () {
       function ResponseOfStaticWatchlist(code, watchlists) {
           this.code = code;
           this.watchlists = watchlists;
       }
       return ResponseOfStaticWatchlist;
   }());

   /*
   */
   var RuleExtIdsRequest = /** @class */ (function () {
       function RuleExtIdsRequest(id) {
           this.id = id;
       }
       return RuleExtIdsRequest;
   }());

   /*
   */
   var RuleIdRequest = /** @class */ (function () {
       function RuleIdRequest(id) {
           this.id = id;
       }
       return RuleIdRequest;
   }());

   /*
   */
   var RuleIdsRequest = /** @class */ (function () {
       function RuleIdsRequest(id) {
           this.id = id;
       }
       return RuleIdsRequest;
   }());

   /*
   */
   var RulesServiceArmDisarmRequest = /** @class */ (function () {
       function RulesServiceArmDisarmRequest(folderId, folderExtId, sensorId, sensorExtId) {
           this.folderId = folderId;
           this.folderExtId = folderExtId;
           this.sensorId = sensorId;
           this.sensorExtId = sensorExtId;
       }
       return RulesServiceArmDisarmRequest;
   }());

   /*
   */
   var RulesServiceCreateRequest = /** @class */ (function () {
       function RulesServiceCreateRequest(body) {
           this.body = body;
       }
       return RulesServiceCreateRequest;
   }());

   /*
   */
   var RulesServiceExportRequest = /** @class */ (function () {
       function RulesServiceExportRequest(folderId, sensorId, search, behaviorType, severity, sort, format, fields, fileName) {
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
       return RulesServiceExportRequest;
   }());

   /*
   */
   var RulesServiceFindAnomalyRequest = /** @class */ (function () {
       function RulesServiceFindAnomalyRequest(folderId, physical, sensorId, search, severity, sort, page, pageSize) {
           this.folderId = folderId;
           this.physical = physical;
           this.sensorId = sensorId;
           this.search = search;
           this.severity = severity;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return RulesServiceFindAnomalyRequest;
   }());

   /*
   */
   var RulesServiceFindRequest = /** @class */ (function () {
       function RulesServiceFindRequest(folderId, physical, applianceId, sensorId, search, behaviorType, exclude, severity, sort, page, pageSize) {
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
       return RulesServiceFindRequest;
   }());

   /*
   */
   var RulesServicePauseRequest = /** @class */ (function () {
       function RulesServicePauseRequest(folderId, folderExtId, from, to) {
           this.folderId = folderId;
           this.folderExtId = folderExtId;
           this.from = from;
           this.to = to;
       }
       return RulesServicePauseRequest;
   }());

   /*
   */
   var RulesServiceResumeRequest = /** @class */ (function () {
       function RulesServiceResumeRequest(folderId, folderExtId) {
           this.folderId = folderId;
           this.folderExtId = folderExtId;
       }
       return RulesServiceResumeRequest;
   }());

   /*
   */
   var RulesServiceUpdateRequest = /** @class */ (function () {
       function RulesServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return RulesServiceUpdateRequest;
   }());

   /*
   */
   var ScheduleIdRequest = /** @class */ (function () {
       function ScheduleIdRequest(id) {
           this.id = id;
       }
       return ScheduleIdRequest;
   }());

   /*
   */
   var ScheduleIdsRequest = /** @class */ (function () {
       function ScheduleIdsRequest(id) {
           this.id = id;
       }
       return ScheduleIdsRequest;
   }());

   /*
   */
   var ScheduledReportIdRequest = /** @class */ (function () {
       function ScheduledReportIdRequest(id) {
           this.id = id;
       }
       return ScheduledReportIdRequest;
   }());

   /*
   */
   var ScheduledReportIdsRequest = /** @class */ (function () {
       function ScheduledReportIdsRequest(id) {
           this.id = id;
       }
       return ScheduledReportIdsRequest;
   }());

   /*
   */
   var ScheduledReportsServiceCreateRequest = /** @class */ (function () {
       function ScheduledReportsServiceCreateRequest(body) {
           this.body = body;
       }
       return ScheduledReportsServiceCreateRequest;
   }());

   /*
   */
   var ScheduledReportsServiceFindRequest = /** @class */ (function () {
       function ScheduledReportsServiceFindRequest(page, pageSize) {
           this.page = page;
           this.pageSize = pageSize;
       }
       return ScheduledReportsServiceFindRequest;
   }());

   /*
   */
   var ScheduledReportsServiceUpdateRequest = /** @class */ (function () {
       function ScheduledReportsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return ScheduledReportsServiceUpdateRequest;
   }());

   /*
   */
   var SchedulesServiceCreateRequest = /** @class */ (function () {
       function SchedulesServiceCreateRequest(body) {
           this.body = body;
       }
       return SchedulesServiceCreateRequest;
   }());

   /*
   */
   var SchedulesServiceFindRequest = /** @class */ (function () {
       function SchedulesServiceFindRequest(search, folderId, sort, page, pageSize) {
           this.search = search;
           this.folderId = folderId;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SchedulesServiceFindRequest;
   }());

   /*
   */
   var SchedulesServiceFolderParamsRequest = /** @class */ (function () {
       function SchedulesServiceFolderParamsRequest(folderId, sort, page, pageSize) {
           this.folderId = folderId;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SchedulesServiceFolderParamsRequest;
   }());

   /*
   */
   var SchedulesServiceUpdateRequest = /** @class */ (function () {
       function SchedulesServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SchedulesServiceUpdateRequest;
   }());

   /*
   */
   var SearchEventCountRequest = /** @class */ (function () {
       function SearchEventCountRequest(sessionId, sensorId, objectType, from, to, interval, labelFormat) {
           this.sessionId = sessionId;
           this.sensorId = sensorId;
           this.objectType = objectType;
           this.from = from;
           this.to = to;
           this.interval = interval;
           this.labelFormat = labelFormat;
       }
       return SearchEventCountRequest;
   }());

   /*
   */
   var SearchEventCropsRequest = /** @class */ (function () {
       function SearchEventCropsRequest(sessionId, eventId) {
           this.sessionId = sessionId;
           this.eventId = eventId;
       }
       return SearchEventCropsRequest;
   }());

   /*
   */
   var SearchEventExportRequest = /** @class */ (function () {
       function SearchEventExportRequest(sessionId, body, format, fields, fileName) {
           this.sessionId = sessionId;
           this.body = body;
           this.format = format;
           this.fields = fields;
           this.fileName = fileName;
       }
       return SearchEventExportRequest;
   }());

   /*
   */
   var SearchEventFindRequest = /** @class */ (function () {
       function SearchEventFindRequest(sessionId, body) {
           this.sessionId = sessionId;
           this.body = body;
       }
       return SearchEventFindRequest;
   }());

   /*
   */
   var SearchEventFindRequestBody = /** @class */ (function () {
       function SearchEventFindRequestBody(sensorIds, objectType, tolerance, from, to, sort, page, pageSize) {
           this.sensorIds = sensorIds;
           this.objectType = objectType;
           this.tolerance = tolerance;
           this.from = from;
           this.to = to;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SearchEventFindRequestBody;
   }());

   /*
   */
   var SearchEventIdRequest = /** @class */ (function () {
       function SearchEventIdRequest(sessionId, eventId) {
           this.sessionId = sessionId;
           this.eventId = eventId;
       }
       return SearchEventIdRequest;
   }());

   /*
   */
   var SearchEventListRequest = /** @class */ (function () {
       function SearchEventListRequest(sessionId, eventId) {
           this.sessionId = sessionId;
           this.eventId = eventId;
       }
       return SearchEventListRequest;
   }());

   /*
   */
   var SearchIdRequest = /** @class */ (function () {
       function SearchIdRequest(id) {
           this.id = id;
       }
       return SearchIdRequest;
   }());

   /*
   */
   var SearchIdsRequest = /** @class */ (function () {
       function SearchIdsRequest(id) {
           this.id = id;
       }
       return SearchIdsRequest;
   }());

   /*
   */
   var SearchServiceCreateRequest = /** @class */ (function () {
       function SearchServiceCreateRequest(body) {
           this.body = body;
       }
       return SearchServiceCreateRequest;
   }());

   /*
   */
   var SearchServiceExecuteRequest = /** @class */ (function () {
       function SearchServiceExecuteRequest(body) {
           this.body = body;
       }
       return SearchServiceExecuteRequest;
   }());

   /*
   */
   var SearchServiceFindRequest = /** @class */ (function () {
       function SearchServiceFindRequest(search, sort, page, pageSize) {
           this.search = search;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SearchServiceFindRequest;
   }());

   /*
   */
   var SearchServiceSimilarRequest = /** @class */ (function () {
       function SearchServiceSimilarRequest(objectId, sensorId, timestamp, from, to, similarity) {
           this.objectId = objectId;
           this.sensorId = sensorId;
           this.timestamp = timestamp;
           this.from = from;
           this.to = to;
           this.similarity = similarity;
       }
       return SearchServiceSimilarRequest;
   }());

   /*
   */
   var SearchServiceUpdateRequest = /** @class */ (function () {
       function SearchServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SearchServiceUpdateRequest;
   }());

   /*
   */
   var SearchSessionIdRequest = /** @class */ (function () {
       function SearchSessionIdRequest(sessionId) {
           this.sessionId = sessionId;
       }
       return SearchSessionIdRequest;
   }());

   /*
   */
   var SensorAnalysisIdRequest = /** @class */ (function () {
       function SensorAnalysisIdRequest(sensorId) {
           this.sensorId = sensorId;
       }
       return SensorAnalysisIdRequest;
   }());

   /*
   */
   var SensorDetectionModelsIdRequest = /** @class */ (function () {
       function SensorDetectionModelsIdRequest(sensorId) {
           this.sensorId = sensorId;
       }
       return SensorDetectionModelsIdRequest;
   }());

   /*
   */
   var SensorExtIdsRequest = /** @class */ (function () {
       function SensorExtIdsRequest(id) {
           this.id = id;
       }
       return SensorExtIdsRequest;
   }());

   /*
   */
   var SensorHeatmapEventsRequest = /** @class */ (function () {
       function SensorHeatmapEventsRequest(sessionId, sensorId, row, col, page, pageSize) {
           this.sessionId = sessionId;
           this.sensorId = sensorId;
           this.row = row;
           this.col = col;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SensorHeatmapEventsRequest;
   }());

   /*
   */
   var SensorHeatmapRequest = /** @class */ (function () {
       function SensorHeatmapRequest(sessionId, sensorId, from, to, objectType, dim) {
           this.sessionId = sessionId;
           this.sensorId = sensorId;
           this.from = from;
           this.to = to;
           this.objectType = objectType;
           this.dim = dim;
       }
       return SensorHeatmapRequest;
   }());

   /*
   */
   var SensorIdRequest = /** @class */ (function () {
       function SensorIdRequest(id) {
           this.id = id;
       }
       return SensorIdRequest;
   }());

   /*
   */
   var SensorIdsRequest = /** @class */ (function () {
       function SensorIdsRequest(id) {
           this.id = id;
       }
       return SensorIdsRequest;
   }());

   /*
   */
   var SensorPathEventsRequest = /** @class */ (function () {
       function SensorPathEventsRequest(sessionId, sensorId, pathId, page, pageSize) {
           this.sessionId = sessionId;
           this.sensorId = sensorId;
           this.pathId = pathId;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SensorPathEventsRequest;
   }());

   /*
   */
   var SensorPathsRequest = /** @class */ (function () {
       function SensorPathsRequest(sessionId, sensorId, from, to, objectType, points) {
           this.sessionId = sessionId;
           this.sensorId = sensorId;
           this.from = from;
           this.to = to;
           this.objectType = objectType;
           this.points = points;
       }
       return SensorPathsRequest;
   }());

   /*
   */
   var SensorUsageReportRequest = /** @class */ (function () {
       function SensorUsageReportRequest(sensorId, year, month) {
           this.sensorId = sensorId;
           this.year = year;
           this.month = month;
       }
       return SensorUsageReportRequest;
   }());

   /*
   */
   var SensorsCountRequest = /** @class */ (function () {
       function SensorsCountRequest(folderId, subFolders, sensorType, status, streamType) {
           this.folderId = folderId;
           this.subFolders = subFolders;
           this.sensorType = sensorType;
           this.status = status;
           this.streamType = streamType;
       }
       return SensorsCountRequest;
   }());

   /*
   */
   var SensorsFetchObjectsCropsRequest = /** @class */ (function () {
       function SensorsFetchObjectsCropsRequest(id, ts, objectId, bucketFolder) {
           this.id = id;
           this.ts = ts;
           this.objectId = objectId;
           this.bucketFolder = bucketFolder;
       }
       return SensorsFetchObjectsCropsRequest;
   }());

   /*
   */
   var SensorsServiceAttachRequest = /** @class */ (function () {
       function SensorsServiceAttachRequest(id, applianceId) {
           this.id = id;
           this.applianceId = applianceId;
       }
       return SensorsServiceAttachRequest;
   }());

   /*
   */
   var SensorsServiceBulkCreateRequest = /** @class */ (function () {
       function SensorsServiceBulkCreateRequest(body) {
           this.body = body;
       }
       return SensorsServiceBulkCreateRequest;
   }());

   /*
   */
   var SensorsServiceChangeFolderRequest = /** @class */ (function () {
       function SensorsServiceChangeFolderRequest(id, folderId) {
           this.id = id;
           this.folderId = folderId;
       }
       return SensorsServiceChangeFolderRequest;
   }());

   /*
   */
   var SensorsServiceChangeFovRequest = /** @class */ (function () {
       function SensorsServiceChangeFovRequest(id, azimuth, body) {
           this.id = id;
           this.azimuth = azimuth;
           this.body = body;
       }
       return SensorsServiceChangeFovRequest;
   }());

   /*
   */
   var SensorsServiceChangeGeoLocationRequest = /** @class */ (function () {
       function SensorsServiceChangeGeoLocationRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SensorsServiceChangeGeoLocationRequest;
   }());

   /*
   */
   var SensorsServiceChangeNameRequest = /** @class */ (function () {
       function SensorsServiceChangeNameRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SensorsServiceChangeNameRequest;
   }());

   /*
   */
   var SensorsServiceChangeStatusRequest = /** @class */ (function () {
       function SensorsServiceChangeStatusRequest(id, status) {
           this.id = id;
           this.status = status;
       }
       return SensorsServiceChangeStatusRequest;
   }());

   /*
   */
   var SensorsServiceCreateRequest = /** @class */ (function () {
       function SensorsServiceCreateRequest(body) {
           this.body = body;
       }
       return SensorsServiceCreateRequest;
   }());

   /*
   */
   var SensorsServiceCropImageRequest = /** @class */ (function () {
       function SensorsServiceCropImageRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SensorsServiceCropImageRequest;
   }());

   /*
   */
   var SensorsServiceExportRequest = /** @class */ (function () {
       function SensorsServiceExportRequest(folderId, subFolders, search, type, status, stream, sort, format, fields, fileName) {
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
       return SensorsServiceExportRequest;
   }());

   /*
   */
   var SensorsServiceFindRequest = /** @class */ (function () {
       function SensorsServiceFindRequest(folderId, subFolders, applianceId, physical, search, type, status, stream, sort, page, pageSize) {
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
       return SensorsServiceFindRequest;
   }());

   /*
   */
   var SensorsServiceGetRefImageRequest = /** @class */ (function () {
       function SensorsServiceGetRefImageRequest(id, timestamp) {
           this.id = id;
           this.timestamp = timestamp;
       }
       return SensorsServiceGetRefImageRequest;
   }());

   /*
   */
   var SensorsServiceSetRefImageRequest = /** @class */ (function () {
       function SensorsServiceSetRefImageRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SensorsServiceSetRefImageRequest;
   }());

   /*
   */
   var SensorsServiceStatusOvertimeRequest = /** @class */ (function () {
       function SensorsServiceStatusOvertimeRequest(id, from, to) {
           this.id = id;
           this.from = from;
           this.to = to;
       }
       return SensorsServiceStatusOvertimeRequest;
   }());

   /*
   */
   var SensorsServiceUpdatePresetRequest = /** @class */ (function () {
       function SensorsServiceUpdatePresetRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SensorsServiceUpdatePresetRequest;
   }());

   /*
   */
   var SensorsServiceUpdateRequest = /** @class */ (function () {
       function SensorsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SensorsServiceUpdateRequest;
   }());

   /*
   */
   var StaticWatchlist = /** @class */ (function () {
       function StaticWatchlist(iD, name) {
           this.iD = iD;
           this.name = name;
       }
       return StaticWatchlist;
   }());

   /*
   */
   var StaticWatchlistIdRequest = /** @class */ (function () {
       function StaticWatchlistIdRequest(id) {
           this.id = id;
       }
       return StaticWatchlistIdRequest;
   }());

   /*
      Response of byte array
   */
   var StreamResponse = /** @class */ (function () {
       function StreamResponse(content) {
           this.content = content;
       }
       return StreamResponse;
   }());

   /*
      Switch account request message
   */
   var SwitchAccountRequest = /** @class */ (function () {
       function SwitchAccountRequest(accountId, platformType) {
           this.accountId = accountId;
           this.platformType = platformType;
       }
       return SwitchAccountRequest;
   }());

   /*
   */
   var SysAccountExportRequest = /** @class */ (function () {
       function SysAccountExportRequest(accountId, password) {
           this.accountId = accountId;
           this.password = password;
       }
       return SysAccountExportRequest;
   }());

   /*
   */
   var SysAccountImportRequest = /** @class */ (function () {
       function SysAccountImportRequest(zipFile, password) {
           this.zipFile = zipFile;
           this.password = password;
       }
       return SysAccountImportRequest;
   }());

   /*
   */
   var SysApplianceBatchUpgradeFindRequest = /** @class */ (function () {
       function SysApplianceBatchUpgradeFindRequest(accountId, applianceId, userId, commandId, batchId, from, to, sort, page, pageSize) {
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
       return SysApplianceBatchUpgradeFindRequest;
   }());

   /*
   */
   var SysApplianceBatchUpgradeRequest = /** @class */ (function () {
       function SysApplianceBatchUpgradeRequest(configId, versionId, id) {
           this.configId = configId;
           this.versionId = versionId;
           this.id = id;
       }
       return SysApplianceBatchUpgradeRequest;
   }());

   /*
   */
   var SysApplianceConfigExportRequest = /** @class */ (function () {
       function SysApplianceConfigExportRequest(accountId, search, configId, versionId, unmatched, format, fileName) {
           this.accountId = accountId;
           this.search = search;
           this.configId = configId;
           this.versionId = versionId;
           this.unmatched = unmatched;
           this.format = format;
           this.fileName = fileName;
       }
       return SysApplianceConfigExportRequest;
   }());

   /*
   */
   var SysApplianceConfigReportRequest = /** @class */ (function () {
       function SysApplianceConfigReportRequest(accountId, search, configId, versionId, unmatched, page, pageSize) {
           this.accountId = accountId;
           this.search = search;
           this.configId = configId;
           this.versionId = versionId;
           this.unmatched = unmatched;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SysApplianceConfigReportRequest;
   }());

   /*
   */
   var SysApplianceGetLogsRequest = /** @class */ (function () {
       function SysApplianceGetLogsRequest(id, componentId, from, to) {
           this.id = id;
           this.componentId = componentId;
           this.from = from;
           this.to = to;
       }
       return SysApplianceGetLogsRequest;
   }());

   /*
   */
   var SysAppliancesCountRequest = /** @class */ (function () {
       function SysAppliancesCountRequest(accountId, folderId, subFolders) {
           this.accountId = accountId;
           this.folderId = folderId;
           this.subFolders = subFolders;
       }
       return SysAppliancesCountRequest;
   }());

   /*
   */
   var SysAppliancesServiceFindRequest = /** @class */ (function () {
       function SysAppliancesServiceFindRequest(accountId, search, status, agentStatus, sort, page, pageSize) {
           this.accountId = accountId;
           this.search = search;
           this.status = status;
           this.agentStatus = agentStatus;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SysAppliancesServiceFindRequest;
   }());

   /*
   */
   var SysAppliancesServiceGetCommandsRequest = /** @class */ (function () {
       function SysAppliancesServiceGetCommandsRequest(accountId, applianceId, status) {
           this.accountId = accountId;
           this.applianceId = applianceId;
           this.status = status;
       }
       return SysAppliancesServiceGetCommandsRequest;
   }());

   /*
   */
   var SysAuditLogServiceExportRequest = /** @class */ (function () {
       function SysAuditLogServiceExportRequest(accountId, userId, from, to, item, itemType, sort, format, fields, fileName) {
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
       return SysAuditLogServiceExportRequest;
   }());

   /*
   */
   var SysAuditLogServiceFindRequest = /** @class */ (function () {
       function SysAuditLogServiceFindRequest(accountId, userId, from, to, item, itemType, sort, page, pageSize) {
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
       return SysAuditLogServiceFindRequest;
   }());

   /*
   */
   var SysConfigImportRequest = /** @class */ (function () {
       function SysConfigImportRequest(zipFile) {
           this.zipFile = zipFile;
       }
       return SysConfigImportRequest;
   }());

   /*
   */
   var SysConfigurationsServiceCreateRequest = /** @class */ (function () {
       function SysConfigurationsServiceCreateRequest(body) {
           this.body = body;
       }
       return SysConfigurationsServiceCreateRequest;
   }());

   /*
   */
   var SysConfigurationsServiceCreateTemplateRequest = /** @class */ (function () {
       function SysConfigurationsServiceCreateTemplateRequest(body) {
           this.body = body;
       }
       return SysConfigurationsServiceCreateTemplateRequest;
   }());

   /*
   */
   var SysConfigurationsServiceCreateVersionRequest = /** @class */ (function () {
       function SysConfigurationsServiceCreateVersionRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SysConfigurationsServiceCreateVersionRequest;
   }());

   /*
   */
   var SysConfigurationsServiceDeleteVersionRequest = /** @class */ (function () {
       function SysConfigurationsServiceDeleteVersionRequest(id, versionId) {
           this.id = id;
           this.versionId = versionId;
       }
       return SysConfigurationsServiceDeleteVersionRequest;
   }());

   /*
   */
   var SysConfigurationsServiceFindRequest = /** @class */ (function () {
       function SysConfigurationsServiceFindRequest(target, search, sort, page, pageSize) {
           this.target = target;
           this.search = search;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return SysConfigurationsServiceFindRequest;
   }());

   /*
   */
   var SysConfigurationsServiceFindTemplateRequest = /** @class */ (function () {
       function SysConfigurationsServiceFindTemplateRequest(page, pageSize) {
           this.page = page;
           this.pageSize = pageSize;
       }
       return SysConfigurationsServiceFindTemplateRequest;
   }());

   /*
   */
   var SysConfigurationsServiceUpdateRequest = /** @class */ (function () {
       function SysConfigurationsServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SysConfigurationsServiceUpdateRequest;
   }());

   /*
   */
   var SysConfigurationsServiceUpdateTemplateRequest = /** @class */ (function () {
       function SysConfigurationsServiceUpdateTemplateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SysConfigurationsServiceUpdateTemplateRequest;
   }());

   /*
   */
   var SysConfigurationsServiceUpdateVersionRequest = /** @class */ (function () {
       function SysConfigurationsServiceUpdateVersionRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return SysConfigurationsServiceUpdateVersionRequest;
   }());

   /*
   */
   var SysEventIdRequest = /** @class */ (function () {
       function SysEventIdRequest(id, accountId) {
           this.id = id;
           this.accountId = accountId;
       }
       return SysEventIdRequest;
   }());

   /*
   */
   var SysEventsServiceFindInAreaRequest = /** @class */ (function () {
       function SysEventsServiceFindInAreaRequest(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
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
       return SysEventsServiceFindInAreaRequest;
   }());

   /*
   */
   var SysEventsServiceStatisticsRequest = /** @class */ (function () {
       function SysEventsServiceStatisticsRequest(accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
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
       return SysEventsServiceStatisticsRequest;
   }());

   /*
   */
   var SysExportAllAccountsUsageReportRequest = /** @class */ (function () {
       function SysExportAllAccountsUsageReportRequest(year, month) {
           this.year = year;
           this.month = month;
       }
       return SysExportAllAccountsUsageReportRequest;
   }());

   /*
   */
   var SysExportUsageReportRequest = /** @class */ (function () {
       function SysExportUsageReportRequest(id, year, month, format, fileName) {
           this.id = id;
           this.year = year;
           this.month = month;
           this.format = format;
           this.fileName = fileName;
       }
       return SysExportUsageReportRequest;
   }());

   /*
   */
   var SysKeysServiceCreateApiKeyRequest = /** @class */ (function () {
       function SysKeysServiceCreateApiKeyRequest(body) {
           this.body = body;
       }
       return SysKeysServiceCreateApiKeyRequest;
   }());

   /*
   */
   var SysKeysServiceCreatePasswordRequest = /** @class */ (function () {
       function SysKeysServiceCreatePasswordRequest(days, user) {
           this.days = days;
           this.user = user;
       }
       return SysKeysServiceCreatePasswordRequest;
   }());

   /*
   */
   var SysKeysServiceCreateTokenRequest = /** @class */ (function () {
       function SysKeysServiceCreateTokenRequest(accountId, userId, ttl) {
           this.accountId = accountId;
           this.userId = userId;
           this.ttl = ttl;
       }
       return SysKeysServiceCreateTokenRequest;
   }());

   /*
   */
   var SysKeysServiceUpdateBulkRequest = /** @class */ (function () {
       function SysKeysServiceUpdateBulkRequest(body) {
           this.body = body;
       }
       return SysKeysServiceUpdateBulkRequest;
   }());

   /*
   */
   var SysModelsServiceCreateModelRequest = /** @class */ (function () {
       function SysModelsServiceCreateModelRequest(body) {
           this.body = body;
       }
       return SysModelsServiceCreateModelRequest;
   }());

   /*
   */
   var SysModelsServiceUpdateModelRequest = /** @class */ (function () {
       function SysModelsServiceUpdateModelRequest(body) {
           this.body = body;
       }
       return SysModelsServiceUpdateModelRequest;
   }());

   /*
   */
   var SysSensorUsageReportRequest = /** @class */ (function () {
       function SysSensorUsageReportRequest(id, sensorId, year, month) {
           this.id = id;
           this.sensorId = sensorId;
           this.year = year;
           this.month = month;
       }
       return SysSensorUsageReportRequest;
   }());

   /*
   */
   var SysSensorsCountRequest = /** @class */ (function () {
       function SysSensorsCountRequest(accountId, folderId, subFolders, sensorType, status, streamType) {
           this.accountId = accountId;
           this.folderId = folderId;
           this.subFolders = subFolders;
           this.sensorType = sensorType;
           this.status = status;
           this.streamType = streamType;
       }
       return SysSensorsCountRequest;
   }());

   /*
   */
   var SysSensorsFetchObjectsCropsRequest = /** @class */ (function () {
       function SysSensorsFetchObjectsCropsRequest(accountId, sensorId, ts, objectId, bucketFolder) {
           this.accountId = accountId;
           this.sensorId = sensorId;
           this.ts = ts;
           this.objectId = objectId;
           this.bucketFolder = bucketFolder;
       }
       return SysSensorsFetchObjectsCropsRequest;
   }());

   /*
   */
   var SysSensorsServiceFindRequest = /** @class */ (function () {
       function SysSensorsServiceFindRequest(accountId, folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
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
       return SysSensorsServiceFindRequest;
   }());

   /*
   */
   var SysSetLogLevelRequest = /** @class */ (function () {
       function SysSetLogLevelRequest(level) {
           this.level = level;
       }
       return SysSetLogLevelRequest;
   }());

   /*
   */
   var SysSystemBackupRequest = /** @class */ (function () {
       function SysSystemBackupRequest(filter, fileName) {
           this.filter = filter;
           this.fileName = fileName;
       }
       return SysSystemBackupRequest;
   }());

   /*
   */
   var SysSystemRestoreRequest = /** @class */ (function () {
       function SysSystemRestoreRequest(zipFile) {
           this.zipFile = zipFile;
       }
       return SysSystemRestoreRequest;
   }());

   /*
   */
   var SysUsageReportRequest = /** @class */ (function () {
       function SysUsageReportRequest(id, year, month) {
           this.id = id;
           this.year = year;
           this.month = month;
       }
       return SysUsageReportRequest;
   }());

   /*
      Token request message
   */
   var TokenRequest = /** @class */ (function () {
       function TokenRequest(code, error, accountId) {
           this.code = code;
           this.error = error;
           this.accountId = accountId;
       }
       return TokenRequest;
   }());

   /*
   */
   var TrafficAnalysisReportRequest = /** @class */ (function () {
       function TrafficAnalysisReportRequest(sensorId, folderId, from, to) {
           this.sensorId = sensorId;
           this.folderId = folderId;
           this.from = from;
           this.to = to;
       }
       return TrafficAnalysisReportRequest;
   }());

   /*
   */
   var TriggerTestHealthEventRequest = /** @class */ (function () {
       function TriggerTestHealthEventRequest(body) {
           this.body = body;
       }
       return TriggerTestHealthEventRequest;
   }());

   /*
      Request body for TriggerTestHealthEventRequest
   */
   var TriggerTestHealthEventRequestBody = /** @class */ (function () {
       function TriggerTestHealthEventRequestBody(entityId, entityType, entityState) {
           this.entityId = entityId;
           this.entityType = entityType;
           this.entityState = entityState;
       }
       return TriggerTestHealthEventRequestBody;
   }());

   /*
   */
   var UsageReportRequest = /** @class */ (function () {
       function UsageReportRequest(year, month) {
           this.year = year;
           this.month = month;
       }
       return UsageReportRequest;
   }());

   /*
   */
   var UserByEmailRequest = /** @class */ (function () {
       function UserByEmailRequest(email) {
           this.email = email;
       }
       return UserByEmailRequest;
   }());

   /*
   */
   var UserIdRequest = /** @class */ (function () {
       function UserIdRequest(id) {
           this.id = id;
       }
       return UserIdRequest;
   }());

   /*
   */
   var UserIdsRequest = /** @class */ (function () {
       function UserIdsRequest(id) {
           this.id = id;
       }
       return UserIdsRequest;
   }());

   /*
   */
   var UserServiceChangeMobileRequest = /** @class */ (function () {
       function UserServiceChangeMobileRequest(body) {
           this.body = body;
       }
       return UserServiceChangeMobileRequest;
   }());

   /*
   */
   var UserServiceChangeNameRequest = /** @class */ (function () {
       function UserServiceChangeNameRequest(body) {
           this.body = body;
       }
       return UserServiceChangeNameRequest;
   }());

   /*
   */
   var UserServiceChangePasswordRequest = /** @class */ (function () {
       function UserServiceChangePasswordRequest(body) {
           this.body = body;
       }
       return UserServiceChangePasswordRequest;
   }());

   /*
   */
   var UserServiceCheckPasswordRequest = /** @class */ (function () {
       function UserServiceCheckPasswordRequest(body) {
           this.body = body;
       }
       return UserServiceCheckPasswordRequest;
   }());

   /*
   */
   var UserServiceLoginRequest = /** @class */ (function () {
       function UserServiceLoginRequest(body) {
           this.body = body;
       }
       return UserServiceLoginRequest;
   }());

   /*
   */
   var UserServiceResetPasswordRequest = /** @class */ (function () {
       function UserServiceResetPasswordRequest(code) {
           this.code = code;
       }
       return UserServiceResetPasswordRequest;
   }());

   /*
   */
   var UserServiceSendVerificationRequest = /** @class */ (function () {
       function UserServiceSendVerificationRequest(body) {
           this.body = body;
       }
       return UserServiceSendVerificationRequest;
   }());

   /*
   */
   var UserServiceSwitchAccountRequest = /** @class */ (function () {
       function UserServiceSwitchAccountRequest(body) {
           this.body = body;
       }
       return UserServiceSwitchAccountRequest;
   }());

   /*
   */
   var UserServiceVerifyLoginRequest = /** @class */ (function () {
       function UserServiceVerifyLoginRequest(key) {
           this.key = key;
       }
       return UserServiceVerifyLoginRequest;
   }());

   /*
   */
   var UserTokenRequest = /** @class */ (function () {
       function UserTokenRequest(id, exp) {
           this.id = id;
           this.exp = exp;
       }
       return UserTokenRequest;
   }());

   /*
   */
   var UsersServiceChangeDefaultAccountRequest = /** @class */ (function () {
       function UsersServiceChangeDefaultAccountRequest(id, accountId) {
           this.id = id;
           this.accountId = accountId;
       }
       return UsersServiceChangeDefaultAccountRequest;
   }());

   /*
   */
   var UsersServiceChangeMobileRequest = /** @class */ (function () {
       function UsersServiceChangeMobileRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return UsersServiceChangeMobileRequest;
   }());

   /*
   */
   var UsersServiceChangeNameRequest = /** @class */ (function () {
       function UsersServiceChangeNameRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return UsersServiceChangeNameRequest;
   }());

   /*
   */
   var UsersServiceChangeRoleRequest = /** @class */ (function () {
       function UsersServiceChangeRoleRequest(id, role) {
           this.id = id;
           this.role = role;
       }
       return UsersServiceChangeRoleRequest;
   }());

   /*
   */
   var UsersServiceChangeStatusRequest = /** @class */ (function () {
       function UsersServiceChangeStatusRequest(id, status) {
           this.id = id;
           this.status = status;
       }
       return UsersServiceChangeStatusRequest;
   }());

   /*
   */
   var UsersServiceChangeTypeRequest = /** @class */ (function () {
       function UsersServiceChangeTypeRequest(id, type) {
           this.id = id;
           this.type = type;
       }
       return UsersServiceChangeTypeRequest;
   }());

   /*
   */
   var UsersServiceCreateRequest = /** @class */ (function () {
       function UsersServiceCreateRequest(body) {
           this.body = body;
       }
       return UsersServiceCreateRequest;
   }());

   /*
   */
   var UsersServiceExportRequest = /** @class */ (function () {
       function UsersServiceExportRequest(search, type, status, sort, format, fields, fileName) {
           this.search = search;
           this.type = type;
           this.status = status;
           this.sort = sort;
           this.format = format;
           this.fields = fields;
           this.fileName = fileName;
       }
       return UsersServiceExportRequest;
   }());

   /*
   */
   var UsersServiceFindRequest = /** @class */ (function () {
       function UsersServiceFindRequest(accountId, search, type, status, sort, page, pageSize) {
           this.accountId = accountId;
           this.search = search;
           this.type = type;
           this.status = status;
           this.sort = sort;
           this.page = page;
           this.pageSize = pageSize;
       }
       return UsersServiceFindRequest;
   }());

   /*
   */
   var UsersServiceInviteRequest = /** @class */ (function () {
       function UsersServiceInviteRequest(body) {
           this.body = body;
       }
       return UsersServiceInviteRequest;
   }());

   /*
   */
   var UsersServiceRegisterRequest = /** @class */ (function () {
       function UsersServiceRegisterRequest(body) {
           this.body = body;
       }
       return UsersServiceRegisterRequest;
   }());

   /*
   */
   var UsersServiceSetRolesRequest = /** @class */ (function () {
       function UsersServiceSetRolesRequest(id, roles) {
           this.id = id;
           this.roles = roles;
       }
       return UsersServiceSetRolesRequest;
   }());

   /*
   */
   var UsersServiceUpdateRequest = /** @class */ (function () {
       function UsersServiceUpdateRequest(id, body) {
           this.id = id;
           this.body = body;
       }
       return UsersServiceUpdateRequest;
   }());

   /*
      @WebSocketMessage Message header for all web socket messages
   */
   var WebSocketMessageHeader = /** @class */ (function () {
       function WebSocketMessageHeader(opcode, version, messageId, correlationId, sessionId) {
           this.op = opcode;
           this.ver = version;
           this.id = messageId;
           this.cid = correlationId;
           this.sid = sessionId;
       }
       return WebSocketMessageHeader;
   }());

   /*
      Describes status of an integration attempt (for events and health integrations) - was the integration successfully triggered or not.
      This contains information on what type of event the integration was triggered by (even or health event),
      the name and id of the integration target, the t
   */
   var IntegrationStatusResponse = /** @class */ (function (_super) {
       __extends(IntegrationStatusResponse, _super);
       function IntegrationStatusResponse() {
           return _super !== null && _super.apply(this, arguments) || this;
       }
       return IntegrationStatusResponse;
   }(BaseEntity));

   // Access token key in the local storage
   var tokenKey = 'portalAccessToken';
   var loginKey = 'portalLoginData';
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
   var RestUtil = /** @class */ (function () {
       /**
        * Constructor with injected authentication service
        */
       function RestUtil(http) {
           this.http = http;
           // Set headers
           this.headers = new i1.HttpHeaders().set('Content-Type', 'application/json');
       }
       /**
        * Upload is HTTP POST action but the body is File object
        */
       RestUtil.prototype.upload = function (file, url) {
           var params = [];
           for (var _i = 2; _i < arguments.length; _i++) {
               params[_i - 2] = arguments[_i];
           }
           var resourceUrl = this.buildUrl.apply(this, __spreadArray([url], __read(params)));
           var formData = new FormData();
           formData.append('fileKey', file, file.name);
           var req = new i1.HttpRequest('POST', resourceUrl, formData, {
               reportProgress: false,
               responseType: 'json',
           });
           return this.http.request(req);
       };
       /**
        * Download is HTTP GET action but the content is blob
        */
       RestUtil.prototype.download = function (fileName, url) {
           var params = [];
           for (var _i = 2; _i < arguments.length; _i++) {
               params[_i - 2] = arguments[_i];
           }
           var resourceUrl = this.buildUrl.apply(this, __spreadArray([url], __read(params)));
           var downloadLink = fileName;
           // extract file name
           params.forEach(function (p) {
               var arr = p.split('=');
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
           var contentType = 'application/json';
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
               headers: new i1.HttpHeaders({ 'Content-Type': contentType })
           });
       };
       /**
        * HTTP GET action
        */
       RestUtil.prototype.get = function (url) {
           var _this = this;
           var params = [];
           for (var _i = 1; _i < arguments.length; _i++) {
               params[_i - 1] = arguments[_i];
           }
           var resourceUrl = this.buildUrl.apply(this, __spreadArray([url], __read(params)));
           return this.http
               .get(resourceUrl, { headers: this.headers, observe: 'response' })
               .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
       };
       /**
        * HTTP POST action
        */
       RestUtil.prototype.post = function (url, body) {
           var _this = this;
           var params = [];
           for (var _i = 2; _i < arguments.length; _i++) {
               params[_i - 2] = arguments[_i];
           }
           var resourceUrl = this.buildUrl.apply(this, __spreadArray([url], __read(params)));
           return this.http
               .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
               .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
       };
       /**
        * HTTP PUT action
        */
       RestUtil.prototype.put = function (url, body) {
           var _this = this;
           var params = [];
           for (var _i = 2; _i < arguments.length; _i++) {
               params[_i - 2] = arguments[_i];
           }
           var resourceUrl = this.buildUrl.apply(this, __spreadArray([url], __read(params)));
           return this.http
               .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
               .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
       };
       /**
        * HTTP DELETE action
        */
       RestUtil.prototype.delete = function (url) {
           var _this = this;
           var params = [];
           for (var _i = 1; _i < arguments.length; _i++) {
               params[_i - 1] = arguments[_i];
           }
           var resourceUrl = this.buildUrl.apply(this, __spreadArray([url], __read(params)));
           return this.http
               .delete(resourceUrl, { headers: this.headers, observe: 'response' })
               .pipe(operators.map(function (res) { return _this.processResponse(res); }), operators.catchError(this.handleError));
       };
       /**
        * Construct URL with parameters
        */
       RestUtil.prototype.buildUrl = function (url) {
           var params = [];
           for (var _i = 1; _i < arguments.length; _i++) {
               params[_i - 1] = arguments[_i];
           }
           return (params === null) ? url : (params.length === 0) ? url : "" + url + (params && params.length > 0 ? '?' + params.join('&') : '');
       };
       /**
        * Process the response, extract and refresh access token and return the body
        */
       RestUtil.prototype.processResponse = function (response) {
           if (response.status === 401) {
               removeToken();
               throw new Error('Access denied, reset token: ' + response.status);
           }
           else if (response.status > 400) {
               throw new Error('HTTP status error: ' + response.status);
           }
           // Get access token from header and update authentication service
           var accessToken = response.headers.get('X-ACCESS-TOKEN');
           if ((accessToken !== null) && (accessToken.length > 0)) {
               setToken(accessToken);
           }
           if (response.body && response.body.code && response.body.code !== 0) {
               throw { code: response.body.code, message: response.body.error };
           }
           return response.body;
       };
       /**
        * Error handling
        */
       RestUtil.prototype.handleError = function (error) {
           if (error.code) {
               return Promise.reject(error);
           }
           return Promise.reject(error.message || error);
       };
       return RestUtil;
   }());
   /** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(i0__namespace.ɵɵinject(i1__namespace.HttpClient)); };
   /** @nocollapse */ RestUtil.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: RestUtil, factory: RestUtil.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RestUtil, [{
               type: i0.Injectable
           }], function () { return [{ type: i1__namespace.HttpClient }]; }, null);
   })();

   var CoreConfig = /** @class */ (function () {
       function CoreConfig() {
       }
       return CoreConfig;
   }());

   /**
    * List of account related actions
    */
   var AccountsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function AccountsService(config, rest) {
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
       AccountsService.prototype.find = function (search, type, status, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of accounts and filter
        * @Return: StreamContent
        */
       AccountsService.prototype.exportFormat = function (name, type, status, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (name != null) {
               params.push("name=" + name);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["accounts", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get single account by id
        * @Return: EntityResponse<Account>
        */
       AccountsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Update existing account in the system (only with user-enabled fields)
        * @Return: EntityResponse<Account>
        */
       AccountsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change account geo-area (polygon)
        * @Return: EntityResponse<Account>
        */
       AccountsService.prototype.changeGeoArea = function (body) {
           return this.rest.put(this.baseUrl + "/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change account geo-location (center)
        * @Return: EntityResponse<Account>
        */
       AccountsService.prototype.changeGeoLocation = function (body) {
           return this.rest.put(this.baseUrl + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change account health thresholds
        * @Return: EntityResponse<Account>
        */
       AccountsService.prototype.changeHealthThresholds = function (body) {
           return this.rest.put(this.baseUrl + "/health-thresholds", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change account timezone
        * @Return: EntityResponse<Account>
        */
       AccountsService.prototype.changeTimezone = function (body) {
           return this.rest.put(this.baseUrl + "/timezone", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Get default geo location
        * @Return: EntityResponse<Coordinate> The account location
        */
       AccountsService.prototype.getDefaultLocation = function () {
           return this.rest.get(this.baseUrl + "/geoLocation");
       };
       /**
        * Get aggregated summary report of total number of sensors and devices with error / warning status
        * @Return: EntitiesResponse<DistributionOfLong> The list of health status distribution
        */
       AccountsService.prototype.getAccountHealthSummary = function () {
           return this.rest.get(this.baseUrl + "/health");
       };
       /**
        * Get account logical tree hierarchy (account -> folders -> sensors) - starting from the account level as root
        * A logical tree is a representation of cameras-folders hierarchy as defined by the user
        * @Return: EntityResponse<TreeNode>
        */
       AccountsService.prototype.getLogicalTree = function (status, behaviorType, includeSensors, includeNonRecordingSensors, search) {
           var _a;
           var params = new Array();
           if (status != null) {
               params.push("status=" + status);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (includeSensors != null) {
               params.push("includeSensors=" + includeSensors);
           }
           if (includeNonRecordingSensors != null) {
               params.push("includeNonRecordingSensors=" + includeNonRecordingSensors);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/logical-tree"], __read(params)));
       };
       /**
        * Get account physical tree hierarchy (account -> folders -> devices -> sensors) - starting from the account level as root
        * A Physical tree is a representation of cameras-devices-folders hierarchy as defined by the network topology
        * @Return: EntityResponse<TreeNode>
        */
       AccountsService.prototype.getPhysicalTree = function (search) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/physical-tree"], __read(params)));
       };
       /**
        * Get account usage report (for billing)
        * List of sensor with total active time (minutes) and total of billable sensors
        * @Return: EntityResponse<UsageReport>
        */
       AccountsService.prototype.getUsageReport = function (year, month) {
           return this.rest.get(this.baseUrl + "/usage-report/" + year + "/" + month);
       };
       /**
        * Get sensor usage report (for billing)
        * @Return: EntityResponse<TimeDataSeries<SensorStatusCode>>
        */
       AccountsService.prototype.getSensorUsageReport = function (sensorId, year, month) {
           return this.rest.get(this.baseUrl + "/sensor-usage-report/" + sensorId + "/" + year + "/" + month);
       };
       /**
        * Export account usage report to a file (for billing)
        * @Return: StreamContent
        */
       AccountsService.prototype.exportUsageReport = function (year, month, format, fileName) {
           var _a;
           var params = new Array();
           if (format != null) {
               params.push("format=" + format);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["accounts", this.baseUrl + "/export-usage-report/" + year + "/" + month], __read(params)));
       };
       return AccountsService;
   }());
   /** @nocollapse */ AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ AccountsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: AccountsService, factory: AccountsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AccountsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of anomaly related actions for the anomaly detection service
    * @RequestHeader X-API-KEY The key to identify the application (console)
    */
   var AnomalyService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function AnomalyService(config, rest) {
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
       AnomalyService.prototype.getSensorsAnalysisResults = function (page, pageSize) {
           var _a;
           var params = new Array();
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/results"], __read(params)));
       };
       /**
        * Update sensor analysis results bach for a specific sensors
        * @Return: EntityResponse<SensorAnalysisResults>
        */
       AnomalyService.prototype.update = function (sensorId, body) {
           return this.rest.put(this.baseUrl + "/sensor/" + sensorId, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete all analysis results for a specific sensors
        * @Return: ActionResponse
        */
       AnomalyService.prototype.delete = function (sensorId) {
           return this.rest.delete(this.baseUrl + "/sensor/" + sensorId);
       };
       /**
        * Get sensor info for anomaly
        * @Return: EntityResponse<SensorAnomalyInfo>
        */
       AnomalyService.prototype.getSensorAnomalyInfo = function (sensorId) {
           return this.rest.get(this.baseUrl + "/sensor/" + sensorId + "/info");
       };
       /**
        * Find list of anomaly event info objects per sensor in a given time period
        * @return QueryResponse<AnomalyEventInfo> List of anomaly event info objects
        */
       AnomalyService.prototype.findAnomalyEventInfo = function (accountId, sensorId, status, from, to, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/events"], __read(params)));
       };
       /**
        * Update sensor anomaly rule attributed
        * @return ActionResponse
        */
       AnomalyService.prototype.updateAnomalyRule = function (sensorId, body) {
           return this.rest.put(this.baseUrl + "/rule/" + sensorId, typeof body === 'object' ? JSON.stringify(body) : body);
       };
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
       AnomalyService.prototype.createDummyEvent = function (body) {
           return this.rest.post(this.baseUrl + "/event", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Get single sensor preset
        * @return EntityResponse<Preset>
        */
       AnomalyService.prototype.getSensorPreset = function (sensorId, presetNum) {
           return this.rest.get(this.baseUrl + "/sensor/" + sensorId + "/preset/" + presetNum);
       };
       /**
        * Get single sensor schedule for the next hour
        * @return EntityResponse<Timeline>
        */
       AnomalyService.prototype.getSensorSchedule = function (sensorId) {
           return this.rest.get(this.baseUrl + "/sensor/" + sensorId + "/schedule");
       };
       return AnomalyService;
   }());
   /** @nocollapse */ AnomalyService.ɵfac = function AnomalyService_Factory(t) { return new (t || AnomalyService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ AnomalyService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: AnomalyService, factory: AnomalyService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AnomalyService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for digital IO actions actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var ApplianceDigitalIOService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function ApplianceDigitalIOService(config, rest) {
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
       ApplianceDigitalIOService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update digital IO device configuration
        * @Return: EntityResponse<DigitalIO>
        */
       ApplianceDigitalIOService.prototype.update = function (body) {
           return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete digital IO device configuration
        * @Return: ActionResponse
        */
       ApplianceDigitalIOService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single digital IO device configuration
        * @Return: EntityResponse<DigitalIO>
        */
       ApplianceDigitalIOService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find digital IO device configurations
        * @Return: EntitiesResponse<DigitalIO>
        */
       ApplianceDigitalIOService.prototype.find = function (applianceId, search) {
           var _a;
           var params = new Array();
           if (applianceId != null) {
               params.push("applianceId=" + applianceId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       return ApplianceDigitalIOService;
   }());
   /** @nocollapse */ ApplianceDigitalIOService.ɵfac = function ApplianceDigitalIOService_Factory(t) { return new (t || ApplianceDigitalIOService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ ApplianceDigitalIOService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: ApplianceDigitalIOService, factory: ApplianceDigitalIOService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ApplianceDigitalIOService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for custom appliance profiles actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var ApplianceProfilesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function ApplianceProfilesService(config, rest) {
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
       ApplianceProfilesService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update custom appliance profile
        * @Return: EntityResponse<ApplianceProfile>
        */
       ApplianceProfilesService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update Bulk of custom appliance profiles
        * @Return: ActionResponse
        */
       ApplianceProfilesService.prototype.updateBulk = function (body) {
           return this.rest.put(this.baseUrl + "/bulk", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete custom appliance profile from the system
        * @Return: ActionResponse
        */
       ApplianceProfilesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single profile by id
        * @Return: EntityResponse<ApplianceProfile>
        */
       ApplianceProfilesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find profiles by filters
        * @Return: EntitiesResponse<ApplianceProfile>
        */
       ApplianceProfilesService.prototype.find = function (search) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       return ApplianceProfilesService;
   }());
   /** @nocollapse */ ApplianceProfilesService.ɵfac = function ApplianceProfilesService_Factory(t) { return new (t || ApplianceProfilesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ ApplianceProfilesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: ApplianceProfilesService, factory: ApplianceProfilesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ApplianceProfilesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of appliance related actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var AppliancesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function AppliancesService(config, rest) {
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
       AppliancesService.prototype.find = function (folderId, subFolders, search, status, agentStatus, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (agentStatus != null) {
               params.push("agentStatus=" + agentStatus);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of appliances and filter
        * @Return: StreamContent
        */
       AppliancesService.prototype.exportFormat = function (folderId, subFolders, search, status, agentStatus, sort, format, fields) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (agentStatus != null) {
               params.push("agentStatus=" + agentStatus);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["appliances", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get single appliance by id
        * @Return: EntityResponse<Appliance>
        */
       AppliancesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get single appliance by machine id (across all system accounts)
        * @Return: EntityResponse<Appliance>
        */
       AppliancesService.prototype.getByMachineId = function (machineId) {
           return this.rest.get(this.baseUrl + "/machine/" + machineId);
       };
       /**
        * Get all sensors assigned to the appliance (getSensors)
        * @Return: QueryResponse<Sensor>
        */
       AppliancesService.prototype.findApplianceSensors = function (id, search, type, status, stream, sort, page, pageSize, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (stream != null) {
               params.push("stream=" + stream);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/sensors"], __read(params)));
       };
       /**
        * Import sensors from CSV file
        * The file must include header with the columns:
        * @return ActionResponse
        */
       AppliancesService.prototype.importSensors = function (id, csvFile) {
           return this.rest.upload(csvFile, this.baseUrl + "/" + id + "/sensors/import");
       };
       /**
        * Export appliance sensors to CSV file
        * @return StreamContent
        */
       AppliancesService.prototype.exportSensors = function (id, format, fileName) {
           var _a;
           var params = new Array();
           if (format != null) {
               params.push("format=" + format);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["appliances", this.baseUrl + "/" + id + "/sensors/export"], __read(params)));
       };
       /**
        * Get all appliance agents
        * @Return: EntitiesResponse<Agent>
        */
       AppliancesService.prototype.getApplianceAgents = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/agents");
       };
       /**
        * Add new sensor and assigned it to a specific appliance
        * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
        * @Return: EntityResponse<Sensor> The updated sensor
        */
       AppliancesService.prototype.addApplianceSensor = function (id, body) {
           return this.rest.post(this.baseUrl + "/" + id + "/sensors", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Register new appliance in the system
        * @Return: EntityResponse<Appliance> The registered appliance
        */
       AppliancesService.prototype.registerAppliance = function (id, body) {
           return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Get appliance runtime configuration components
        * @Return: EntitiesResponse<ComponentConfiguration>
        */
       AppliancesService.prototype.getRuntimeConfiguration = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/components");
       };
       /**
        * Get list of appliance configurations for the specific product
        * @Return: EntitiesResponse<ApplianceConfiguration>
        */
       AppliancesService.prototype.getConfigurations = function (target) {
           return this.rest.get(this.baseUrl + "/configurations/" + target);
       };
       /**
        * Get appliance configuration for the specific edge model
        * @Return: EntityResponse<ApplianceConfiguration>
        */
       AppliancesService.prototype.getConfiguration = function (model) {
           return this.rest.get(this.baseUrl + "/configuration/" + model);
       };
       /**
        * Get network channels using ONVIF discovery protocol
        * @Return: EntitiesResponse<ComponentConfiguration>
        */
       AppliancesService.prototype.getOnvifDiscoveryList = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/discovery");
       };
       /**
        * Change appliance name
        * @Return: EntityResponse<Appliance>
        */
       AppliancesService.prototype.changeName = function (id, name) {
           return this.rest.put(this.baseUrl + "/" + id + "/name/" + name, null);
       };
       /**
        * Update some appliance attributes (name, folder, configuration, integration)
        * @Return: EntityResponse<Appliance>
        */
       AppliancesService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change appliance folder
        * @Return: EntityResponse<Appliance>
        */
       AppliancesService.prototype.changeFolder = function (id, folderId) {
           return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
       };
       /**
        * Change appliance machine Id (for VIRTUAL device only)
        * @Return: EntityResponse<Appliance> - Updated appliance
        */
       AppliancesService.prototype.changeMachineId = function (id, machineId) {
           return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
       };
       /**
        * Change appliance configuration
        * @Return: EntityResponse<Appliance> - Updated appliance
        */
       AppliancesService.prototype.changeConfiguration = function (id, configId, versionId) {
           return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
       };
       /**
        * Send get capabilities command to the appliance and wait for response up to 60 seconds
        * @Return:  EntityResponse<Appliance>
        */
       AppliancesService.prototype.getCapabilities = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/capabilities", null);
       };
       /**
        * Send get network bandwidth speed test command to the appliance
        * @Return:  EntityResponse<Appliance>
        */
       AppliancesService.prototype.getSpeedTest = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/speed-test", null);
       };
       /**
        * Send reset credentials command to the appliance (reset to the factory default password)
        * @Return:  ActionResponse
        */
       AppliancesService.prototype.resetPassword = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/reset-password", null);
       };
       /**
        * Reboot appliance host
        * @Return: ActionResponse
        */
       AppliancesService.prototype.reboot = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/reboot", null);
       };
       /**
        * Rebuild appliance configuration and deploy the configuration to the device manager
        * @Return: ActionResponse
        */
       AppliancesService.prototype.redeploy = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/redeploy", null);
       };
       /**
        * Get container logs appliance host
        * @Return: ActionResponse
        */
       AppliancesService.prototype.getLogs = function (id, from, to, component) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (component != null) {
               params.push("component=" + component);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/logs", null], __read(params)));
       };
       /**
        * Delete appliance from the system and detach all it's related sensors
        * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is SUSPENDED
        * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
        * @Return: ActionResponse
        */
       AppliancesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Delete appliance from the system including all it's related sensors and sensor data (rules, presets, analysis ...)
        * @Return: ActionResponse
        */
       AppliancesService.prototype.purge = function (id) {
           return this.rest.delete(this.baseUrl + "/purge/" + id);
       };
       /**
        * Find list of appliance commands and filter
        * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
        */
       AppliancesService.prototype.getCommands = function (id, status, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/commands"], __read(params)));
       };
       /**
        * Delete command
        * @Return: ActionResponse
        */
       AppliancesService.prototype.deleteCommand = function (commandId) {
           return this.rest.delete(this.baseUrl + "/commands/" + commandId);
       };
       /**
        * Get appliance status history over time
        * @Return:  EntityResponse<ApplianceStatusTimeSeries>
        */
       AppliancesService.prototype.getStatusOverTime = function (id, from, to) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/status/overtime"], __read(params)));
       };
       /**
        * Get appliance status distribution over time (for pie chart)
        * @Return:  EntityResponse<DistributionOfLong>
        */
       AppliancesService.prototype.getStatusDistribution = function (id, from, to) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/status/distribution"], __read(params)));
       };
       /**
        * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
        * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
        */
       AppliancesService.prototype.getKpiOverTime = function (id, from, to) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/kpi/overtime"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by status
        * @Return:  EntityResponse<DistributionOfLong>
        */
       AppliancesService.prototype.getAppliancesCountByStatus = function (folderId, subFolders) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-status"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by state
        * @Return:  EntityResponse<DistributionOfLong>
        */
       AppliancesService.prototype.getAppliancesCountByState = function (folderId, subFolders) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-state"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by agent status
        * @Return:  EntityResponse<DistributionOfLong>
        */
       AppliancesService.prototype.getAppliancesCountByAgentStatus = function (folderId, subFolders) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-agent-status"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by agent state
        * @Return:  EntityResponse<DistributionOfLong>
        */
       AppliancesService.prototype.getAppliancesCountByAgentState = function (folderId, subFolders) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-agent-state"], __read(params)));
       };
       /**
        * Attach multiple sensors to the device
        * @Return: ActionResponse
        */
       AppliancesService.prototype.bulkAttach = function (id, sensorId) {
           var _a;
           var params = new Array();
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/attach", null], __read(params)));
       };
       /**
        * Detach multiple sensors from the device
        * @Return: ActionResponse
        */
       AppliancesService.prototype.bulkDetach = function (id, sensorId) {
           var _a;
           var params = new Array();
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/detach", null], __read(params)));
       };
       return AppliancesService;
   }());
   /** @nocollapse */ AppliancesService.ɵfac = function AppliancesService_Factory(t) { return new (t || AppliancesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ AppliancesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: AppliancesService, factory: AppliancesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AppliancesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Audit log queries for account administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var AuditLogService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function AuditLogService(config, rest) {
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
       AuditLogService.prototype.find = function (userId, from, to, item, itemType, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (userId != null) {
               params.push("userId=" + userId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (item != null) {
               params.push("item=" + item);
           }
           if (itemType != null) {
               params.push("itemType=" + itemType);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of audit log entries and filter
        * @Return: StreamContent
        */
       AuditLogService.prototype.exportFormat = function (userId, from, to, item, itemType, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (userId != null) {
               params.push("userId=" + userId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (item != null) {
               params.push("item=" + item);
           }
           if (itemType != null) {
               params.push("itemType=" + itemType);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["auditlog", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get single audit log entry by id
        * @Return: EntityResponse<Appliance>
        */
       AuditLogService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       return AuditLogService;
   }());
   /** @nocollapse */ AuditLogService.ɵfac = function AuditLogService_Factory(t) { return new (t || AuditLogService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ AuditLogService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: AuditLogService, factory: AuditLogService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AuditLogService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for calendars (holidays) actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var CalendarsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function CalendarsService(config, rest) {
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
       CalendarsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update calendar
        * @Return: EntityResponse<Calendar>
        */
       CalendarsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete calendar from the system
        * @Return: ActionResponse
        */
       CalendarsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single calendar by id
        * @Return: EntityResponse<Calendar>
        */
       CalendarsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get calendars by list of ids
        * @Return: EntitiesResponse<Calendar>
        */
       CalendarsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find calendars by filters
        * @Return: QueryResponse<Calendar>
        */
       CalendarsService.prototype.find = function (search, folderId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Find all calendars for a specified level in the folder hierarchy
        * This method returns all the calendars of the current folder and all parent folders
        * @Return: QueryResponse<Calendar>
        */
       CalendarsService.prototype.getFolderCalendars = function (folderId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/folder"], __read(params)));
       };
       /**
        * Import calendar from outlook CSV, ICS or iCal file
        * @Return: ActionResponse
        */
       CalendarsService.prototype.import = function (folderId, icsFile) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           return (_a = this.rest).upload.apply(_a, __spreadArray([icsFile, this.baseUrl + "/import"], __read(params)));
       };
       /**
        * Import calendar from Url (ICS or iCal formats)
        * @Return: ActionResponse
        */
       CalendarsService.prototype.importUrl = function (folderId, body) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/importUrl", typeof body === 'object' ? JSON.stringify(body) : body], __read(params)));
       };
       return CalendarsService;
   }());
   /** @nocollapse */ CalendarsService.ɵfac = function CalendarsService_Factory(t) { return new (t || CalendarsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ CalendarsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: CalendarsService, factory: CalendarsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CalendarsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for case management actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var CasesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function CasesService(config, rest) {
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
       CasesService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update case
        * @Return: EntityResponse<CaseInfo>
        */
       CasesService.prototype.update = function (body) {
           return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete case from the system
        * @Return: ActionResponse
        */
       CasesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single case by id
        * @Return: EntityResponse<CaseInfo>
        */
       CasesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find list of all public cases and user owned private cases
        * @Return: QueryResponse<CaseInfo>
        */
       CasesService.prototype.find = function (search, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Add bulk of search events to the case
        * @Return: EntityResponse<CaseInfo>
        */
       CasesService.prototype.addSearchEvents = function (id, sessionId, eventId, description) {
           var _a;
           var params = new Array();
           if (eventId != null) {
               params.push("eventId=" + eventId);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/sessions/" + sessionId + "/events", typeof description === 'object' ? JSON.stringify(description) : description], __read(params)));
       };
       /**
        * Update event description
        * @Return: EntityResponse<CaseInfo>
        */
       CasesService.prototype.updateEventDescription = function (id, eventId, description) {
           return this.rest.put(this.baseUrl + "/" + id + "/events/" + eventId + "/description", typeof description === 'object' ? JSON.stringify(description) : description);
       };
       /**
        * Remove bulk of search events from the case
        * @Return: EntityResponse<CaseInfo>
        */
       CasesService.prototype.removeSearchEvents = function (id, eventId) {
           var _a;
           var params = new Array();
           if (eventId != null) {
               params.push("eventId=" + eventId);
           }
           return (_a = this.rest).delete.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/events"], __read(params)));
       };
       /**
        * Get all timestamped objects of the provided case event
        * @Return: EntityResponse<TimestampedCropsData>
        */
       CasesService.prototype.getEventObjectCropsData = function (id, eventId) {
           return this.rest.get(this.baseUrl + "/" + id + "/events/" + eventId);
       };
       /**
        * Get single timestamped object of the provided case event
        * @Return: EntityResponse<TimestampedCrop>
        */
       CasesService.prototype.getMainEventObjectCrop = function (id, eventId) {
           return this.rest.get(this.baseUrl + "/" + id + "/event/" + eventId);
       };
       return CasesService;
   }());
   /** @nocollapse */ CasesService.ɵfac = function CasesService_Factory(t) { return new (t || CasesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ CasesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: CasesService, factory: CasesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CasesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for events actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var EventsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function EventsService(config, rest) {
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
       EventsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Get a list of integration targets applicable for this event
        * @Return: EntitiesResponse<IntegrationAction>
        */
       EventsService.prototype.getIntegrations = function (id, sensorId, folderId) {
           var _a;
           var params = new Array();
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/integrations"], __read(params)));
       };
       /**
        * Force manual event integrations
        * @Return: ActionResponse
        */
       EventsService.prototype.invokeIntegrations = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/integrations", null);
       };
       /**
        * Change event workflow status
        * @Return: ActionResponse
        */
       EventsService.prototype.changeStatus = function (id, status) {
           return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
       };
       /**
        * Change multiple events workflow status
        * @Return: ActionResponse
        */
       EventsService.prototype.changeBulkStatuses = function (id, status) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/bulk-status", null], __read(params)));
       };
       /**
        * Get single event by id
        * @Return: EntityResponse<Event>
        */
       EventsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get events by list of ids
        * @Return: EntitiesResponse<Event>
        */
       EventsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find events by filters
        * @Return: QueryResponse<Event>
        */
       EventsService.prototype.find = function (folderId, subFolders, sensorId, applianceId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (applianceId != null) {
               params.push("applianceId=" + applianceId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (rule != null) {
               params.push("rule=" + rule);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of events and filter
        * @Return: StreamContent
        */
       EventsService.prototype.exportFormat = function (folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (rule != null) {
               params.push("rule=" + rule);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["events", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Find events generated in area using spatial query
        * @Return: QueryResponse<Event>
        */
       EventsService.prototype.findInArea = function (folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (rule != null) {
               params.push("rule=" + rule);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/area", null], __read(params)));
       };
       /**
        * Get event image [response content type: image/jpeg]
        * @Return: StreamingOutput of the image
        */
       EventsService.prototype.getEventImage = function (id) {
           return this.rest.download("events", this.baseUrl + "/" + id + "/image");
       };
       /**
        * Get event clip [response content type: video/mp4]
        * @Return: StreamingOutput of the clip
        */
       EventsService.prototype.getEventClip = function (id) {
           return this.rest.download("events", this.baseUrl + "/" + id + "/clip");
       };
       /**
        * Get events count overtime for all events in the system
        * @Return: EntityResponse<EventCountTimeSeries>
        */
       EventsService.prototype.getEventsCountOvertime = function (folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, interval, labelFormat) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (rule != null) {
               params.push("rule=" + rule);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (interval != null) {
               params.push("interval=" + interval);
           }
           if (labelFormat != null) {
               params.push("labelFormat=" + labelFormat);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/overtime"], __read(params)));
       };
       /**
        * Get events distribution by status
        * @Return: EntityResponse<DistributionOfLong>
        */
       EventsService.prototype.getEventsCountByStatus = function (folderId, sensorId, objectType, behaviorType, severity, rule, from, to) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (rule != null) {
               params.push("rule=" + rule);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-status"], __read(params)));
       };
       /**
        * Get events distribution by object type
        * @Return: EntityResponse<DistributionOfLong>
        */
       EventsService.prototype.getEventsCountByObject = function (folderId, sensorId, behaviorType, severity, status, rule, from, to) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (rule != null) {
               params.push("rule=" + rule);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-object"], __read(params)));
       };
       /**
        * Get events distribution by behavior
        * @Return: EntityResponse<DistributionOfLong>
        */
       EventsService.prototype.getEventsCountByBehavior = function (folderId, sensorId, objectType, severity, status, rule, from, to) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (rule != null) {
               params.push("rule=" + rule);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-behavior"], __read(params)));
       };
       /**
        * Direct link to download event image [response content type: image/jpeg]
        * This link is injected dynamically by the system to the ImagePath property of the event, the link includes time-limited token (valid for 12 hours) to identify the account and event
        * @Return: StreamingOutput of the image
        */
       EventsService.prototype.downloadEventImage = function (imageToken) {
           var _a;
           var params = new Array();
           if (imageToken != null) {
               params.push("imageToken=" + imageToken);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["events", this.baseUrl + "Image"], __read(params)));
       };
       /**
        * Direct link to download event clip [response content type: video/mp4]
        * This link is injected dynamically by the system to the ClipPath property of the event, the link includes time-limited token (valid for 12 hours) to identify the account and event
        * @Return: StreamingOutput of the clip
        */
       EventsService.prototype.downloadEventClip = function (imageToken) {
           var _a;
           var params = new Array();
           if (imageToken != null) {
               params.push("imageToken=" + imageToken);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["events", this.baseUrl + "Clip"], __read(params)));
       };
       return EventsService;
   }());
   /** @nocollapse */ EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ EventsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: EventsService, factory: EventsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(EventsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for folders actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var FoldersService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function FoldersService(config, rest) {
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
       FoldersService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update folder info
        * @Return: EntityResponse<Folder>
        */
       FoldersService.prototype.update = function (body) {
           return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change folder parent id
        * @Return: EntityResponse<Folder>
        */
       FoldersService.prototype.changeParent = function (id, parentId) {
           return this.rest.put(this.baseUrl + "/" + id + "/parent/" + parentId, null);
       };
       /**
        * Delete folder from the system (only if it is empty)
        * @Return: ActionResponse error will be returned if the folder is not empty
        */
       FoldersService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single folder by id
        * @Return: EntityResponse<Folder>
        */
       FoldersService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get folders by list of ids
        * @Return: EntitiesResponse<Folder>
        */
       FoldersService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Get folders Ids by list of external ids
        * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=FolderId)
        */
       FoldersService.prototype.mapExternalIds = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/map-external-ids"], __read(params)));
       };
       /**
        * Find folders by filters
        * @Return: QueryResponse<Folder>
        */
       FoldersService.prototype.find = function (id, search, parentId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (parentId != null) {
               params.push("parentId=" + parentId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of folders and filter
        * @Return: StreamContent
        */
       FoldersService.prototype.exportFormat = function (id, search, parentId, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (parentId != null) {
               params.push("parentId=" + parentId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["folders", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Find and filter list of folders
        * @Return: QueryResponse<Folder>
        */
       FoldersService.prototype.getSubFolders = function (id, search, parentId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (parentId != null) {
               params.push("parentId=" + parentId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/folders"], __read(params)));
       };
       /**
        * Get items (folders and sensors) by parent folder id
        * @Return: QueryResponse<TreeItem>
        */
       FoldersService.prototype.getSubItems = function (id, search, parentId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (parentId != null) {
               params.push("parentId=" + parentId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/items"], __read(params)));
       };
       /**
        * Get account tree hierarchy (folders and sensors) - starting from the account level as root
        * @Return: EntityResponse<TreeNode>
        */
       FoldersService.prototype.getHierarchy = function (includeSensors) {
           var _a;
           var params = new Array();
           if (includeSensors != null) {
               params.push("includeSensors=" + includeSensors);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/tree"], __read(params)));
       };
       /**
        * Get default geo bounds
        * @Return: EntityResponse<Coordinate> The folder location
        */
       FoldersService.prototype.getDefaultLocation = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
       };
       return FoldersService;
   }());
   /** @nocollapse */ FoldersService.ɵfac = function FoldersService_Factory(t) { return new (t || FoldersService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ FoldersService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: FoldersService, factory: FoldersService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FoldersService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of Geo-spatial utilities
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var GeoService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function GeoService(config, rest) {
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
       GeoService.prototype.geoReference = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
        * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
        * @Return: EntityResponse<GeoReferenceData>
        */
       GeoService.prototype.transform = function (body) {
           return this.rest.post(this.baseUrl + "/transform", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       return GeoService;
   }());
   /** @nocollapse */ GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ GeoService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: GeoService, factory: GeoService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GeoService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for security groups actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var GroupsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function GroupsService(config, rest) {
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
       GroupsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update group
        * @Return: EntityResponse<Group>
        */
       GroupsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete group from the system
        * @Return: ActionResponse
        */
       GroupsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single group by id
        * @Return: EntityResponse<Group>
        */
       GroupsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get groups by list of ids
        * @Return: EntitiesResponse<Group>
        */
       GroupsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find groups by filters
        * @Return: QueryResponse<Group>
        */
       GroupsService.prototype.find = function (search, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       return GroupsService;
   }());
   /** @nocollapse */ GroupsService.ɵfac = function GroupsService_Factory(t) { return new (t || GroupsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ GroupsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: GroupsService, factory: GroupsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(GroupsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Health check service, no X-API-KEY or X-ACCESS-TOKEN are required
    */
   var HealthCheckService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function HealthCheckService(config, rest) {
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
       HealthCheckService.prototype.health = function () {
           return this.rest.get("" + this.baseUrl);
       };
       return HealthCheckService;
   }());
   /** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ HealthCheckService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HealthCheckService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for health events queries
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var HealthEventsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function HealthEventsService(config, rest) {
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
       HealthEventsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find health events by filters
        * @Return: QueryResponse<HealthEvent>
        */
       HealthEventsService.prototype.find = function (folderId, from, to, source, openClosed, entityId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (source != null) {
               params.push("source=" + source);
           }
           if (openClosed != null) {
               params.push("openClosed=" + openClosed);
           }
           if (entityId != null) {
               params.push("entityId=" + entityId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Trigger a test health event
        * @Return: ActionResponse
        */
       HealthEventsService.prototype.triggerTestHealthEvent = function (body) {
           return this.rest.post(this.baseUrl + "/trigger-test-event", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       return HealthEventsService;
   }());
   /** @nocollapse */ HealthEventsService.ɵfac = function HealthEventsService_Factory(t) { return new (t || HealthEventsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ HealthEventsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: HealthEventsService, factory: HealthEventsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(HealthEventsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for integrations targets (templates)
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var IntegrationsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function IntegrationsService(config, rest) {
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
       IntegrationsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update integration target
        * @Return: EntityResponse<IntegrationTarget>
        */
       IntegrationsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete integration target from the system
        * @Return: ActionResponse
        */
       IntegrationsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single integration target by id
        * @Return: EntityResponse<IntegrationTarget>
        */
       IntegrationsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get integration targets by list of ids
        * @Return: EntitiesResponse<IntegrationTarget>
        */
       IntegrationsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find integration targets by filters
        * @Return: EntitiesResponse<IntegrationTarget>
        */
       IntegrationsService.prototype.find = function (search, type, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Find all integration status
        * @Return: QueryResponse<IntegrationStatusResponse>
        */
       IntegrationsService.prototype.findStatus = function (source, entityId, integrationTargetId, integrationActionId, from, to, sort, resolveNames, page, pageSize) {
           var _a;
           var params = new Array();
           if (source != null) {
               params.push("source=" + source);
           }
           if (entityId != null) {
               params.push("entityId=" + entityId);
           }
           if (integrationTargetId != null) {
               params.push("integrationTargetId=" + integrationTargetId);
           }
           if (integrationActionId != null) {
               params.push("integrationActionId=" + integrationActionId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (resolveNames != null) {
               params.push("resolveNames=" + resolveNames);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/status"], __read(params)));
       };
       /**
        * Create new integration action
        * @Return: EntityResponse<IntegrationAction>
        */
       IntegrationsService.prototype.createAction = function (body) {
           return this.rest.post(this.baseUrl + "/actions", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update integration action
        * @Return: EntityResponse<IntegrationAction>
        */
       IntegrationsService.prototype.updateAction = function (id, body) {
           return this.rest.put(this.baseUrl + "/actions/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete integration action from the system
        * @Return: ActionResponse
        */
       IntegrationsService.prototype.deleteAction = function (id) {
           return this.rest.delete(this.baseUrl + "/actions/" + id);
       };
       /**
        * Get single integration action by id
        * @Return: EntityResponse<IntegrationAction>
        */
       IntegrationsService.prototype.getAction = function (id) {
           return this.rest.get(this.baseUrl + "/actions/" + id);
       };
       /**
        * Get integration actions by list of ids
        * @Return: EntitiesResponse<IntegrationAction>
        */
       IntegrationsService.prototype.listActions = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/actions/list"], __read(params)));
       };
       /**
        * Find integration actions by filters
        * @Return: EntitiesResponse<IntegrationAction>
        */
       IntegrationsService.prototype.findActions = function (search, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/actions"], __read(params)));
       };
       /**
        * Find all integration actions for a specified level in the folder hierarchy
        * @Return: EntitiesResponse<IntegrationAction>
        */
       IntegrationsService.prototype.getFolderActions = function (folderId) {
           return this.rest.get(this.baseUrl + "/actions/folder/" + folderId);
       };
       /**
        * Test integration action with data (limited to HTTP)
        * @Return: EntityResponse<IntegrationAction>
        */
       IntegrationsService.prototype.testAction = function (body) {
           return this.rest.post(this.baseUrl + "/actions/test", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Test integration action
        * @Return: ActionResponse
        */
       IntegrationsService.prototype.testIntegrationAction = function (id) {
           return this.rest.post(this.baseUrl + "/actions/" + id + "/test", null);
       };
       return IntegrationsService;
   }());
   /** @nocollapse */ IntegrationsService.ɵfac = function IntegrationsService_Factory(t) { return new (t || IntegrationsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ IntegrationsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: IntegrationsService, factory: IntegrationsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(IntegrationsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of all account members related actions for account administrator only
    */
   var MembersService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function MembersService(config, rest) {
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
       MembersService.prototype.invite = function (body) {
           return this.rest.post(this.baseUrl + "/invite", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Register user for the account, it a user already exists, an invitation to the new account will be sent
        * @Return: EntityResponse<Member>
        */
       MembersService.prototype.register = function (body) {
           return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Create service account
        * @Return: ActionResponse
        */
       MembersService.prototype.registerServiceAccount = function (body) {
           return this.rest.post(this.baseUrl + "/service-account", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Resend invitation to an existing user for the current account
        * @Return: ActionResponse
        */
       MembersService.prototype.reInvite = function (id) {
           return this.rest.post(this.baseUrl + "/re-invite/" + id, null);
       };
       /**
        * Update member
        * @Return: EntityResponse<Member>
        */
       MembersService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete member from the account
        * The user will be removed from the account, if no accounts associated with the member, it will be deleted
        * @Return: ActionResponse
        */
       MembersService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single member by id
        * @Return: EntityResponse<Member>
        */
       MembersService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get single member by email
        * @Return: EntityResponse<Member>
        */
       MembersService.prototype.getByEmail = function (email) {
           return this.rest.get(this.baseUrl + "/byEmail/" + email);
       };
       /**
        * Find list of members and filter the list
        * System user will see all users, Account system will see all users of the account, registered user will get an error.
        * @Return: QueryResponse<Member>
        */
       MembersService.prototype.find = function (search, type, status, group, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (group != null) {
               params.push("group=" + group);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of members and filter
        * @Return: StreamContent
        */
       MembersService.prototype.exportFormat = function (search, type, status, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["members", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get access token for member
        * @Return: ActionResponse
        */
       MembersService.prototype.getUserToken = function (id, exp) {
           return this.rest.get(this.baseUrl + "/" + id + "/token/" + exp);
       };
       return MembersService;
   }());
   /** @nocollapse */ MembersService.ɵfac = function MembersService_Factory(t) { return new (t || MembersService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ MembersService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: MembersService, factory: MembersService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(MembersService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of Person Recognition Services
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var PersonRecognitionService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function PersonRecognitionService(config, rest) {
           this.config = config;
           this.rest = rest;
           // URL to web api
           this.baseUrl = '/person-recognition';
           this.baseUrl = this.config.api + this.baseUrl;
       }
       /**
        * List static watchlists
        * @Return: ResponseOfStaticWatchlist
        */
       PersonRecognitionService.prototype.watchlist = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/watchlist"], __read(params)));
       };
       /**
        * Add provided image of a person as a new POI to the system-internal dynamic watchlist.
        * The POI can be an already existing POI, identified by the PoiId, or created anew (if the PoiId is empty)
        * If PoiId is not empty, then it must match the ID of an already existing POI.
        * @Return: ResponseOfPoi
        */
       PersonRecognitionService.prototype.dynamicPoi = function (body) {
           return this.rest.post(this.baseUrl + "/dynamic-poi", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Searches the system for POIs matching the provided image in _all_ watchlists.
        * @Return: ResponseOfPoi
        */
       PersonRecognitionService.prototype.searchForPoiFromImage = function (body) {
           return this.rest.post(this.baseUrl + "/search-poi-from-image", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       return PersonRecognitionService;
   }());
   /** @nocollapse */ PersonRecognitionService.ɵfac = function PersonRecognitionService_Factory(t) { return new (t || PersonRecognitionService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ PersonRecognitionService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: PersonRecognitionService, factory: PersonRecognitionService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(PersonRecognitionService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for reports definition actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var ReportsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function ReportsService(config, rest) {
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
       ReportsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update report definition
        * @Return: EntityResponse<ReportDefinition>
        */
       ReportsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete report definition from the system
        * @Return: ActionResponse
        */
       ReportsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single report definition by id
        * @Return: EntityResponse<ReportDefinition>
        */
       ReportsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get multiple report definitions by list of ids
        * @Return: EntitiesResponse<ReportDefinition>
        */
       ReportsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find report definitions by filters
        * @Return: QueryResponse<ReportDefinition>
        */
       ReportsService.prototype.find = function (search) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export account sensors as CSV report stream
        * @Return: StreamContent
        */
       ReportsService.prototype.exportSensorsReport = function () {
           return this.rest.download("reports", this.baseUrl + "/sensors");
       };
       /**
        * Export account sensors rules schedules as CSV report stream
        * @Return: StreamContent
        */
       ReportsService.prototype.exportRulesSchedulesReport = function () {
           return this.rest.download("reports", this.baseUrl + "/rule-schedules");
       };
       /**
        * Generate people counting report and stream it as CSV
        * @Return: StreamContent
        */
       ReportsService.prototype.getPeopleCountingReport = function (sensorId, folderId, from, to) {
           var _a;
           var params = new Array();
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["reports", this.baseUrl + "/statistics/people-counting"], __read(params)));
       };
       /**
        * Generate traffic analysis report and stream it as CSV
        * @Return: StreamContent
        */
       ReportsService.prototype.getTrafficAnalysisReport = function (sensorId, folderId, from, to) {
           var _a;
           var params = new Array();
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["reports", this.baseUrl + "/statistics/traffic-analysis"], __read(params)));
       };
       /**
        * Start the background creation of a report. Returns immediately with the status of the started background job.
        * @Return: EntityResponse<JobStatus>
        */
       ReportsService.prototype.startReportJob = function (body) {
           return this.rest.post(this.baseUrl + "/statistics/job", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Returns a paginated list of existing background jobs for creating reports.
        * @Return: QueryResponse<JobStatus>
        */
       ReportsService.prototype.findJobs = function (page, pageSize, search, relatedScheduledReportId) {
           var _a;
           var params = new Array();
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (relatedScheduledReportId != null) {
               params.push("relatedScheduledReportId=" + relatedScheduledReportId);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/statistics/jobs"], __read(params)));
       };
       /**
        * Retrieves the status of one report job.
        * @Return: EntityResponse<JobStatus>
        */
       ReportsService.prototype.getJob = function (id) {
           return this.rest.get(this.baseUrl + "/statistics/job/" + id);
       };
       /**
        * Updates the status of one report job.
        * @Return: EntityResponse<JobStatus>
        */
       ReportsService.prototype.updateJob = function (id, status) {
           var _a;
           var params = new Array();
           if (status != null) {
               params.push("status=" + status);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/statistics/job/" + id, null], __read(params)));
       };
       /**
        * Deletes one report job. The job generation must be completed, either successfully or with an error. Returns error if the job is still running.
        * @Return: ActionResponse
        */
       ReportsService.prototype.deleteJob = function (id, status) {
           var _a;
           var params = new Array();
           if (status != null) {
               params.push("status=" + status);
           }
           return (_a = this.rest).delete.apply(_a, __spreadArray([this.baseUrl + "/statistics/job/" + id], __read(params)));
       };
       /**
        * Retrieves the contents of one successfully generated report and returns it as a stream.
        * @Return: StreamContent
        */
       ReportsService.prototype.getJobFile = function (id) {
           return this.rest.download("reports", this.baseUrl + "/statistics/job/" + id + "/file");
       };
       return ReportsService;
   }());
   /** @nocollapse */ ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ ReportsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: ReportsService, factory: ReportsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ReportsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for rules actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var RulesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function RulesService(config, rest) {
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
       RulesService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update rule
        * @Return: EntityResponse<Rule>
        */
       RulesService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Enable list of rules
        * @Return: ActionResponse
        */
       RulesService.prototype.enable = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/enable", null], __read(params)));
       };
       /**
        * Disable list of rules
        * @Return: ActionResponse
        */
       RulesService.prototype.disable = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/disable", null], __read(params)));
       };
       /**
        * Arm (Enable analytics rules) on group of sensors or all sensors in site (folder)
        * @Return: ActionResponse
        */
       RulesService.prototype.arm = function (folderId, folderExtId, sensorId, sensorExtId) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (folderExtId != null) {
               params.push("folderExtId=" + folderExtId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (sensorExtId != null) {
               params.push("sensorExtId=" + sensorExtId);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/arm", null], __read(params)));
       };
       /**
        * Disarm (Disable analytics rules) on group of sensors or all sensors in site (folder)
        * @Return: ActionResponse
        */
       RulesService.prototype.disarm = function (folderId, folderExtId, sensorId, sensorExtId) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (folderExtId != null) {
               params.push("folderExtId=" + folderExtId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (sensorExtId != null) {
               params.push("sensorExtId=" + sensorExtId);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/disarm", null], __read(params)));
       };
       /**
        * Delete rule from the system
        * @Return: ActionResponse
        */
       RulesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single rule by id
        * @Return: EntityResponse<Rule>
        */
       RulesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Export single rule as Json stream
        * @Return: Rule Json as StreamContent
        */
       RulesService.prototype.exportRule = function (id) {
           return this.rest.download("rules", this.baseUrl + "/" + id + "/export");
       };
       /**
        * Get rules by list of ids
        * @Return: EntitiesResponse<Rule>
        */
       RulesService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Get rules Ids by list of external ids
        * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=RuleId)
        */
       RulesService.prototype.mapExternalIds = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/map-external-ids"], __read(params)));
       };
       /**
        * Find rules by filters
        * @Return: QueryResponse<Rule>
        */
       RulesService.prototype.find = function (folderId, physical, applianceId, sensorId, search, behaviorType, exclude, severity, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (physical != null) {
               params.push("physical=" + physical);
           }
           if (applianceId != null) {
               params.push("applianceId=" + applianceId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (exclude != null) {
               params.push("exclude=" + exclude);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of rules and filter
        * @Return: StreamContent
        */
       RulesService.prototype.exportFormat = function (folderId, sensorId, search, behaviorType, severity, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["rules", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Find anomaly rules by filters
        * @Return: QueryResponse<Rule>
        */
       RulesService.prototype.findAnomalyRules = function (folderId, physical, sensorId, search, severity, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (physical != null) {
               params.push("physical=" + physical);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/anomaly"], __read(params)));
       };
       /**
        * Get rules specifications available by account features
        * @Return: EntitiesResponse<RuleSpec>
        */
       RulesService.prototype.getSpecs = function () {
           return this.rest.get(this.baseUrl + "/spec");
       };
       /**
        * Pause analytics detections on site (folder) for a specified time frame
        * @Return: ActionResponse
        */
       RulesService.prototype.pause = function (folderId, folderExtId, from, to) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (folderExtId != null) {
               params.push("folderExtId=" + folderExtId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/pause", null], __read(params)));
       };
       /**
        * Resume analytics on site (folder) that was paused
        * @Return: ActionResponse
        */
       RulesService.prototype.resume = function (folderId, folderExtId) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (folderExtId != null) {
               params.push("folderExtId=" + folderExtId);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/resume", null], __read(params)));
       };
       /**
        * Trigger test event on rule
        * @Return: ActionResponse
        */
       RulesService.prototype.triggerTestEvent = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/trigger-test-event", null);
       };
       return RulesService;
   }());
   /** @nocollapse */ RulesService.ɵfac = function RulesService_Factory(t) { return new (t || RulesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ RulesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: RulesService, factory: RulesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(RulesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for scheduled reports definition actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var ScheduledReportsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function ScheduledReportsService(config, rest) {
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
       ScheduledReportsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update scheduled report definition
        * @Return: EntityResponse<ScheduledReport>
        */
       ScheduledReportsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete scheduled report definition from the system
        * @Return: ActionResponse
        */
       ScheduledReportsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single scheduled report definition by id
        * @Return: EntityResponse<ScheduledReport>
        */
       ScheduledReportsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get multiple scheduled report definitions by list of ids
        * @Return: EntitiesResponse<ScheduledReport>
        */
       ScheduledReportsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find scheduled report definitions by filters
        * @Return: QueryResponse<ScheduledReport>
        */
       ScheduledReportsService.prototype.find = function (page, pageSize) {
           var _a;
           var params = new Array();
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       return ScheduledReportsService;
   }());
   /** @nocollapse */ ScheduledReportsService.ɵfac = function ScheduledReportsService_Factory(t) { return new (t || ScheduledReportsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ ScheduledReportsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: ScheduledReportsService, factory: ScheduledReportsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ScheduledReportsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for schedules actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SchedulesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SchedulesService(config, rest) {
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
       SchedulesService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update schedule
        * @Return: EntityResponse<Schedule>
        */
       SchedulesService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete schedule from the system
        * @Return: ActionResponse
        */
       SchedulesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single schedule by id
        * @Return: EntityResponse<Schedule>
        */
       SchedulesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get schedules by list of ids
        * @Return: EntitiesResponse<Schedule>
        */
       SchedulesService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find schedule by filters
        * @Return: QueryResponse<Schedule>
        */
       SchedulesService.prototype.find = function (search, folderId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Find all schedules for a specified level in the folder hierarchy
        * This method returns all the schedules of the current folder and all parent folders
        * @Return: QueryResponse<Schedule>
        */
       SchedulesService.prototype.getFolderSchedules = function (folderId, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/folder"], __read(params)));
       };
       return SchedulesService;
   }());
   /** @nocollapse */ SchedulesService.ɵfac = function SchedulesService_Factory(t) { return new (t || SchedulesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SchedulesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SchedulesService, factory: SchedulesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SchedulesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for metadata search actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SearchService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SearchService(config, rest) {
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
       SearchService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update search definition
        * @Return: EntityResponse<SearchDefinition>
        */
       SearchService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete search definition from the system
        * @Return: ActionResponse
        */
       SearchService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single search definition by id
        * @Return: EntityResponse<SearchDefinition>
        */
       SearchService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get multiple search definitions by list of ids
        * @Return: EntitiesResponse<SearchDefinition>
        */
       SearchService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find search definitions by filters
        * @Return: QueryResponse<SearchDefinition>
        */
       SearchService.prototype.find = function (search, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Perform metadata search by the search definition
        * @Return: EntityResponse<SearchStatus>
        */
       SearchService.prototype.execute = function (body) {
           return this.rest.post(this.baseUrl + "/execute", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Perform metadata saved search by the search id
        * @Return: EntityResponse<SearchStatus>
        */
       SearchService.prototype.executeById = function (id) {
           return this.rest.get(this.baseUrl + "/execute/" + id);
       };
       /**
        * Perform metadata search by the similarity for another object
        * @Return: EntityResponse<SearchStatus>
        */
       SearchService.prototype.searchForSimilar = function (body) {
           return this.rest.post(this.baseUrl + "/similar", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Get search session status
        * @Return: EntityResponse<SearchStatus>
        */
       SearchService.prototype.getSearchStatus = function (sessionId) {
           return this.rest.get(this.baseUrl + "/sessions/" + sessionId + "/status");
       };
       /**
        * Cancel search session and drop results
        * @Return: ActionResponse
        */
       SearchService.prototype.cancelSearchSession = function (sessionId) {
           return this.rest.delete(this.baseUrl + "/sessions/" + sessionId);
       };
       /**
        * Stop search session
        * @Return: ActionResponse
        */
       SearchService.prototype.stopSearchSession = function (sessionId) {
           return this.rest.post(this.baseUrl + "/sessions/" + sessionId + "/stop", null);
       };
       /**
        * Get single search event item by id and sessionId
        * @Return: EntityResponse<SearchDefinition>
        */
       SearchService.prototype.getEvent = function (sessionId, eventId) {
           return this.rest.get(this.baseUrl + "/sessions/" + sessionId + "/event/" + eventId);
       };
       /**
        * Get search event image [response content type: image/jpeg]
        * @Return: StreamingOutput of the image
        */
       SearchService.prototype.getEventImage = function (sessionId, eventId) {
           return this.rest.download("search", this.baseUrl + "/sessions/" + sessionId + "/image/" + eventId);
       };
       /**
        * Get multiple search events by list of ids
        * @Return: EntitiesResponse<SearchDefinition>
        */
       SearchService.prototype.listEvents = function (sessionId, eventId) {
           var _a;
           var params = new Array();
           if (eventId != null) {
               params.push("eventId=" + eventId);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/sessions/" + sessionId + "/list"], __read(params)));
       };
       /**
        * Find list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
        * @Return: QueryResponse<SearchDefinition>
        */
       SearchService.prototype.findEvents = function (sessionId, body) {
           return this.rest.post(this.baseUrl + "/sessions/" + sessionId + "/find", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Find list of sensor Ids related to the search results
        * @Return: EntitiesResponse<StringIntValue>
        */
       SearchService.prototype.findSensorsIds = function (sessionId) {
           return this.rest.get(this.baseUrl + "/sessions/" + sessionId + "/sensorsIds");
       };
       /**
        * Get total search events count by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
        * @Return: QueryResponse<SearchDefinition> entities list is null
        */
       SearchService.prototype.totalEvents = function (sessionId, body) {
           return this.rest.post(this.baseUrl + "/sessions/" + sessionId + "/total", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Export list of search events by filter. Notice that this does not create anything, but the POST verb allow for the query parameters to be passed in the body.
        * @Return: StreamContent
        */
       SearchService.prototype.exportEvents = function (sessionId, format, fields, fileName, body) {
           var _a;
           var params = new Array();
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["search", this.baseUrl + "/sessions/" + sessionId + "/export", typeof body === 'object' ? JSON.stringify(body) : body], __read(params)));
       };
       /**
        * Get events count overtime for all events in the system
        * @Return: EntityResponse<EventCountTimeSeries>
        */
       SearchService.prototype.getEventsCountOvertime = function (sessionId, sensorId, objectType, from, to, interval, labelFormat) {
           var _a;
           var params = new Array();
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (interval != null) {
               params.push("interval=" + interval);
           }
           if (labelFormat != null) {
               params.push("labelFormat=" + labelFormat);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/sessions/" + sessionId + "/overtime"], __read(params)));
       };
       /**
        * Get search event object crops (for animation)
        * @Return: EntityResponse<TimestampedCropsData>
        */
       SearchService.prototype.getEventObjectCropsData = function (sessionId, eventId) {
           return this.rest.get(this.baseUrl + "/sessions/" + sessionId + "/events/" + eventId + "/crops");
       };
       /**
        * Find objects paths aggregation for sensor FOV (for path visualizer)
        * @Return: EntityResponse<SensorPaths>
        */
       SearchService.prototype.getSensorPaths = function (sessionId, sensorId, from, to, objectType, points) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (points != null) {
               params.push("points=" + points);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/sessions/" + sessionId + "/sensor-paths/" + sensorId], __read(params)));
       };
       /**
        * Get all search events related to the path
        * @Return: QueryResponse<SearchEvent>
        */
       SearchService.prototype.getSensorPathEvents = function (sessionId, sensorId, pathId, page, pageSize) {
           var _a;
           var params = new Array();
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/sessions/" + sessionId + "/sensor-paths/" + sensorId + "/" + pathId + "/events"], __read(params)));
       };
       /**
        * Find objects heatmap for sensor FOV (for path visualizer)
        * @Return: EntityResponse<SensorPaths>
        */
       SearchService.prototype.getSensorHeatmap = function (sessionId, sensorId, from, to, objectType, dim) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (dim != null) {
               params.push("dim=" + dim);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/sessions/" + sessionId + "/sensor-heatmap/" + sensorId], __read(params)));
       };
       /**
        * Get all search events related to the heatmap
        * @Return: QueryResponse<SearchEvent>
        */
       SearchService.prototype.getSensorHeatmapEvents = function (sessionId, sensorId, row, col, page, pageSize) {
           var _a;
           var params = new Array();
           if (row != null) {
               params.push("row=" + row);
           }
           if (col != null) {
               params.push("col=" + col);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/sessions/" + sessionId + "/sensor-heatmap/" + sensorId + "/events"], __read(params)));
       };
       return SearchService;
   }());
   /** @nocollapse */ SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SearchService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SearchService, factory: SearchService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SearchService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for sensor actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SensorsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SensorsService(config, rest) {
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
       SensorsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Create bulk of sensors with the same account Id, appliance Id and agent Id
        * @Return: EntitiesResponse<Sensor>
        */
       SensorsService.prototype.createBulk = function (body) {
           return this.rest.post(this.baseUrl + "/bulk", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update sensor parameters
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change sensor name
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.changeName = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change sensor parent folder id
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.changeFolder = function (id, folderId) {
           return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
       };
       /**
        * Change sensor geo-location
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.changeGeoLocation = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change sensor field of view transformation attributes
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.changeFovAttributes = function (id, azimuth, body) {
           var _a;
           var params = new Array();
           if (azimuth != null) {
               params.push("azimuth=" + azimuth);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/fov", typeof body === 'object' ? JSON.stringify(body) : body], __read(params)));
       };
       /**
        * Enable (activate) sensor
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.enable = function (id) {
           return this.rest.put(this.baseUrl + "/" + id + "/enable", null);
       };
       /**
        * Disable (de-activate) sensor
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.disable = function (id) {
           return this.rest.put(this.baseUrl + "/" + id + "/disable", null);
       };
       /**
        * Attach sensor to a device with the given appliance Id
        * This action enabled on already detached and SUSPENDED sensor
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.attach = function (id, applianceId) {
           return this.rest.put(this.baseUrl + "/" + id + "/attach/" + applianceId, null);
       };
       /**
        * Detach sensor from a device and change it's status to SUSPENDED
        * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
        * The sensor can be attached later to any other device in the system
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.detach = function (id) {
           return this.rest.put(this.baseUrl + "/" + id + "/detach", null);
       };
       /**
        * Delete sensor from the system
        * @Return: ActionResponse
        */
       SensorsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single sensor by id
        * @Return: EntityResponse<Sensor>
        */
       SensorsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get sensors by list of ids
        * @Return: EntitiesResponse<Sensor>
        */
       SensorsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Get sensors Ids by list of external ids
        * @Return: EntitiesResponse<StringKeyValue> (Key=ExternalId, Value=SensorId)
        */
       SensorsService.prototype.mapExternalIds = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/map-external-ids"], __read(params)));
       };
       /**
        * Find sensors by filters
        * @Return: QueryResponse<Sensor>
        */
       SensorsService.prototype.find = function (folderId, subFolders, applianceId, physical, search, type, status, stream, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (applianceId != null) {
               params.push("applianceId=" + applianceId);
           }
           if (physical != null) {
               params.push("physical=" + physical);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (stream != null) {
               params.push("stream=" + stream);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of sensors and filter
        * @Return: StreamContent
        */
       SensorsService.prototype.exportFormat = function (folderId, subFolders, search, type, status, stream, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (stream != null) {
               params.push("stream=" + stream);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sensors", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get single sensor preset data by id
        * @Return: EntityResponse<Preset>
        */
       SensorsService.prototype.getPreset = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/preset");
       };
       /**
        * Set single sensor preset data
        * @Return: EntityResponse<Preset>
        */
       SensorsService.prototype.setPreset = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/preset", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Reset single sensor preset back to the default
        * @Return: EntityResponse<Preset>
        */
       SensorsService.prototype.resetPreset = function (id, body) {
           return this.rest.delete(this.baseUrl + "/" + id + "/preset/reset");
       };
       /**
        * Export single sensor preset (including calibration) as Json stream
        * @Return: Sensor preset Json as StreamContent
        */
       SensorsService.prototype.exportPreset = function (id) {
           return this.rest.download("sensors", this.baseUrl + "/" + id + "/preset/export");
       };
       /**
        * Get sensor reference image [response content type: image/jpeg]
        * @Return: StreamingOutput of the reference image
        */
       SensorsService.prototype.getRefImage = function (id) {
           return this.rest.download("sensors", this.baseUrl + "/" + id + "/ref-image");
       };
       /**
        * Clear sensor reference image
        * @Return: ActionResponse
        */
       SensorsService.prototype.clearRefImage = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id + "/ref-image");
       };
       /**
        * Get sensor reference image for a specific timestamp [response content type: image/jpeg]
        * @Return: StreamingOutput of the reference image
        */
       SensorsService.prototype.getRefImageAt = function (id, timestamp) {
           return this.rest.download("sensors", this.baseUrl + "/" + id + "/ref-image-at/" + timestamp);
       };
       /**
        * Get sensor reference image Url suffix
        * @Return: ActionResponse key is sensor Id and data is the URL suffix
        */
       SensorsService.prototype.getRefImageUrl = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/ref-image-url");
       };
       /**
        * Set sensor reference image [put binary image in body with content type: image/jpeg]
        * @Return: ActionResponse
        */
       SensorsService.prototype.setRefImage = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/ref-image", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Return a cropped Jpeg image out of sensor reference image for Asset Protection rule
        * @Return: ActionResponse - the encoded jpeg as base64 is in the data key
        */
       SensorsService.prototype.cropImage = function (id, body) {
           return this.rest.post(this.baseUrl + "/" + id + "/crop", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Collect object crops from agents based on the query parameters
        * @Return: ActionResponse
        */
       SensorsService.prototype.fetchObjectCrops = function (id, ts, objectId, bucketFolder) {
           var _a;
           var params = new Array();
           if (ts != null) {
               params.push("ts=" + ts);
           }
           if (objectId != null) {
               params.push("objectId=" + objectId);
           }
           if (bucketFolder != null) {
               params.push("bucketFolder=" + bucketFolder);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/fetch-objects-crops", null], __read(params)));
       };
       /**
        * Get default geo location
        * @Return: EntityResponse<Coordinate>
        */
       SensorsService.prototype.getDefaultLocation = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
       };
       /**
        * Get single sensor health by sensor id
        * @Return: EntityResponse<SensorStatus>
        */
       SensorsService.prototype.getSensorHealthStatus = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/health");
       };
       /**
        * Get all sensors health status
        * @Return: EntitiesResponse<SensorStatus>
        */
       SensorsService.prototype.getSensorsHealthStatus = function () {
           return this.rest.get(this.baseUrl + "/health");
       };
       /**
        * Get sensor status history over time
        * @Return:  EntityResponse<SensorStatusTimeSeries>
        */
       SensorsService.prototype.getStatusOverTime = function (id, from, to) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/status/overtime"], __read(params)));
       };
       /**
        * Aggregate sensors count distribution by type
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SensorsService.prototype.getSensorsCountByType = function (folderId, subFolders, sensorType, status, streamType) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorType != null) {
               params.push("sensorType=" + sensorType);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (streamType != null) {
               params.push("streamType=" + streamType);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-type"], __read(params)));
       };
       /**
        * Aggregate sensors count distribution by stream type
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SensorsService.prototype.getSensorsCountByStream = function (folderId, subFolders, sensorType, status, streamType) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorType != null) {
               params.push("sensorType=" + sensorType);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (streamType != null) {
               params.push("streamType=" + streamType);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-stream"], __read(params)));
       };
       /**
        * Aggregate sensors count distribution by status
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SensorsService.prototype.getSensorsCountByStatus = function (folderId, subFolders, sensorType, status, streamType) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorType != null) {
               params.push("sensorType=" + sensorType);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (streamType != null) {
               params.push("streamType=" + streamType);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-status"], __read(params)));
       };
       /**
        * Get list of all detection models available for the account
        * @Return: EntitiesResponse<DetectionModel>
        */
       SensorsService.prototype.getAllModels = function () {
           return this.rest.get(this.baseUrl + "/models");
       };
       /**
        * Get list of all detection models per sensor
        * @Return: EntitiesResponse<DetectionModel>
        */
       SensorsService.prototype.getSensorModels = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/models");
       };
       /**
        * Add detection model to sensor
        * @Return: ActionResponse
        */
       SensorsService.prototype.addSensorModel = function (id, modelId) {
           return this.rest.post(this.baseUrl + "/" + id + "/models/" + modelId, null);
       };
       /**
        * Remove detection model from sensor
        * @Return: ActionResponse
        */
       SensorsService.prototype.removeSensorModel = function (id, modelId) {
           return this.rest.delete(this.baseUrl + "/" + id + "/models/" + modelId);
       };
       return SensorsService;
   }());
   /** @nocollapse */ SensorsService.ɵfac = function SensorsService_Factory(t) { return new (t || SensorsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SensorsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SensorsService, factory: SensorsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SensorsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of account related actions for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (console)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysAccountsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysAccountsService(config, rest) {
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
       SysAccountsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update existing account in the system
        * @Return: EntityResponse<Account>
        */
       SysAccountsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update account name
        * @Return: EntityResponse<Account>
        */
       SysAccountsService.prototype.changeName = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change account type
        * @Return: EntityResponse<User>
        */
       SysAccountsService.prototype.changeType = function (id, type) {
           return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
       };
       /**
        * Change account status
        * @Return: EntityResponse<Account>
        */
       SysAccountsService.prototype.changeStatus = function (id, status) {
           return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
       };
       /**
        * Change account groups
        * @Return: EntityResponse<Account>
        */
       SysAccountsService.prototype.changeGroups = function (id, groupId) {
           var _a;
           var params = new Array();
           if (groupId != null) {
               params.push("groupId=" + groupId);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/groups/{groups}", null], __read(params)));
       };
       /**
        * Change account geo-location (center)
        * @Return: EntityResponse<Account> The changed account
        */
       SysAccountsService.prototype.changeGeoLocation = function (body) {
           return this.rest.put(this.baseUrl + "/{id}/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change account geo area
        * @Return: EntityResponse<Account> The changed account
        */
       SysAccountsService.prototype.changeGeoArea = function (body) {
           return this.rest.put(this.baseUrl + "/{id}/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete account from the system
        * The account is moved to DELETED mode and will be deleted after 90 days
        * Only account marked as SUSPENDED can be deleted
        * @Return: ActionResponse
        */
       SysAccountsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Delete account immediately without account status restrictions
        * @Return: ActionResponse
        */
       SysAccountsService.prototype.purge = function (id) {
           return this.rest.delete(this.baseUrl + "/purge/" + id);
       };
       /**
        * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
        * @Return: ActionResponse
        */
       SysAccountsService.prototype.reset = function (id, days) {
           return this.rest.delete(this.baseUrl + "/reset/" + id + "/days/" + days);
       };
       /**
        * Get single account by id
        * @Return: EntityResponse<Account>
        */
       SysAccountsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get accounts by list of ids
        * @Return: EntitiesResponse<Account>
        */
       SysAccountsService.prototype.list = function (id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/list"], __read(params)));
       };
       /**
        * Find list of accounts and filter
        * @Return: QueryResponse<Account>
        */
       SysAccountsService.prototype.find = function (search, type, status, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Find list of accounts and filter but replace group Ids with group names
        * @Return: QueryResponse<Account>
        */
       SysAccountsService.prototype.report = function (search, type, status, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/report"], __read(params)));
       };
       /**
        * Get account hierarchy
        * @Return: EntityResponse<TreeNode>
        */
       SysAccountsService.prototype.tree = function (id, includeSensors, status, behaviorType) {
           var _a;
           var params = new Array();
           if (includeSensors != null) {
               params.push("includeSensors=" + includeSensors);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/tree"], __read(params)));
       };
       /**
        * Find account folders
        * @Return: QueryResponse<Folder>
        */
       SysAccountsService.prototype.findFolders = function (id, parentId, search, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (parentId != null) {
               params.push("parentId=" + parentId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/folders"], __read(params)));
       };
       /**
        * Export list of accounts and filter
        * @Return: StreamContent
        */
       SysAccountsService.prototype.exportFormat = function (name, type, status, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (name != null) {
               params.push("name=" + name);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sys-accounts", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get account types statistics for all accounts in the system
        * @Return: EntitiesResponse<AccountTypeSummary>
        */
       SysAccountsService.prototype.getAccountTypeStatistics = function () {
           return this.rest.get(this.baseUrl + "/statistics/type");
       };
       /**
        * Get account monthly statistics for all accounts in the system
        * @Return: EntitiesResponse<AccountStatistics>
        */
       SysAccountsService.prototype.getAccountMonthStatistics = function (accountId, from, to) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/statistics/month"], __read(params)));
       };
       /**
        * Get accounts month report - current channels and devices per account compared to previous month
        * @Return: EntitiesResponse<AccountStatSummary>
        */
       SysAccountsService.prototype.getAccountsMonthReport = function () {
           return this.rest.get(this.baseUrl + "/statistics/month/report");
       };
       /**
        * Get default geo location
        * @Return: EntityResponse<Coordinate> The account location
        */
       SysAccountsService.prototype.getDefaultLocation = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
       };
       /**
        * Get account usage report (for billing)
        * List of sensor with total active time (minutes) and total of billable sensors
        * @Return: EntityResponse<UsageReport>
        */
       SysAccountsService.prototype.getUsageReport = function (id, year, month) {
           return this.rest.get(this.baseUrl + "/" + id + "/usage-report/" + year + "/" + month);
       };
       /**
        * Get sensor usage report (for billing)
        * @Return: EntityResponse<TimeDataSeries<SensorStatusCode>>
        */
       SysAccountsService.prototype.getSensorUsageReport = function (id, sensorId, year, month) {
           return this.rest.get(this.baseUrl + "/" + id + "/sensor-usage-report/" + sensorId + "/" + year + "/" + month);
       };
       /**
        * Export account usage report to a file (for billing)
        * @Return: StreamContent
        */
       SysAccountsService.prototype.exportUsageReport = function (id, year, month, format, fileName) {
           var _a;
           var params = new Array();
           if (format != null) {
               params.push("format=" + format);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sys-accounts", this.baseUrl + "/" + id + "/export-usage-report/" + year + "/" + month], __read(params)));
       };
       /**
        * Export all accounts usage report to a file (for operations)
        * @Return: StreamContent
        */
       SysAccountsService.prototype.exportAllAccountsUsageReport = function (year, month) {
           return this.rest.download("sys-accounts", this.baseUrl + "/export-usage-report/" + year + "/" + month);
       };
       return SysAccountsService;
   }());
   /** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysAccountsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysAccountsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of appliance queries for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (console)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysAppliancesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysAppliancesService(config, rest) {
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
       SysAppliancesService.prototype.registerAppliance = function (id, body) {
           return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Get single appliance by id
        * @Return: EntityResponse<Appliance>
        */
       SysAppliancesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find list of appliances and filter
        * @Return: QueryResponse<Appliance>
        */
       SysAppliancesService.prototype.find = function (accountId, search, status, agentStatus, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (agentStatus != null) {
               params.push("agentStatus=" + agentStatus);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of appliances and filter
        * @Return: StreamContent
        */
       SysAppliancesService.prototype.exportFormat = function (folderId, subFolders, search, status, agentStatus, sort, format, fields) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (agentStatus != null) {
               params.push("agentStatus=" + agentStatus);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sys-appliances", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Delete appliance from the system
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Reboot appliance host
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.reboot = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/reboot", null);
       };
       /**
        * Open reverse SSH tunnel (for 60 minutes)
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.openSsh = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/open-ssh", null);
       };
       /**
        * Close reverse SSH tunnel
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.closeSsh = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/close-ssh", null);
       };
       /**
        * Rebuild appliance configuration and deploy the configuration to the device manager
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.redeploy = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/redeploy", null);
       };
       /**
        * Change appliance machine Id (for VIRTUAL device only)
        * @Return: EntityResponse<Appliance> - Updated appliance
        */
       SysAppliancesService.prototype.changeMachineId = function (id, machineId) {
           return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
       };
       /**
        * Change appliance configuration
        * @Return: EntityResponse<Appliance> - Updated appliance
        */
       SysAppliancesService.prototype.changeConfiguration = function (id, configId, versionId) {
           return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
       };
       /**
        * Get all appliance agents
        * @Return: EntitiesResponse<Agent>
        */
       SysAppliancesService.prototype.getApplianceAgents = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/agents");
       };
       /**
        * Add agent to appliance
        * Agent can be added to virtual appliance only
        * @Return: EntityResponse<Agent>
        */
       SysAppliancesService.prototype.addApplianceAgent = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/agents", null);
       };
       /**
        * Delete agent from the system
        * Only virtual device agent can be deleted
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.deleteApplianceAgent = function (id, agentId) {
           return this.rest.delete(this.baseUrl + "/" + id + "/agents/" + agentId);
       };
       /**
        * Find list of appliance commands and filter
        * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
        */
       SysAppliancesService.prototype.getCommands = function (accountId, applianceId, status) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (applianceId != null) {
               params.push("applianceId=" + applianceId);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/commands"], __read(params)));
       };
       /**
        * Update command status
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.setCommandStatus = function (commandId, status) {
           return this.rest.put(this.baseUrl + "/commands/" + commandId + "/" + status, null);
       };
       /**
        * Delete command
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.deleteCommand = function (id, commandId) {
           return this.rest.delete(this.baseUrl + "/" + id + "/commands/" + commandId);
       };
       /**
        * Delete all appliance commands
        * @Return: ActionResponse
        */
       SysAppliancesService.prototype.deleteAllCommands = function (id, agentId) {
           return this.rest.delete(this.baseUrl + "/" + id + "/commands");
       };
       /**
        * Get appliance status history over time
        * @Return:  EntityResponse<ApplianceStatusTimeSeries>
        */
       SysAppliancesService.prototype.getStatusOverTime = function (id, from, to) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/status/overtime"], __read(params)));
       };
       /**
        * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
        * @Return:  EntityResponse<ApplianceKPIsTimeSeries>
        */
       SysAppliancesService.prototype.getKpiOverTime = function (id, from, to) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/kpi/overtime"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by status
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysAppliancesService.prototype.getAppliancesCountByStatus = function (accountId, folderId, subFolders) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-status"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by state
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysAppliancesService.prototype.getAppliancesCountByState = function (accountId, folderId, subFolders) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-state"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by agent status
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysAppliancesService.prototype.getAppliancesCountByAgentStatus = function (accountId, folderId, subFolders) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-agent-status"], __read(params)));
       };
       /**
        * Aggregate appliances count distribution by agent state
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysAppliancesService.prototype.getAppliancesCountByAgentState = function (accountId, folderId, subFolders) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-agent-state"], __read(params)));
       };
       /**
        * Send get capabilities command to the appliance and wait for response up to 60 seconds
        * @Return:  EntityResponse<Appliance>
        */
       SysAppliancesService.prototype.getCapabilities = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/capabilities", null);
       };
       /**
        * Send get logs command to the appliance
        * @Return:  ActionResponse
        */
       SysAppliancesService.prototype.getLogs = function (id, componentId, from, to) {
           var _a;
           var params = new Array();
           if (componentId != null) {
               params.push("componentId=" + componentId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/logs", null], __read(params)));
       };
       /**
        * Upgrade batch of appliances
        * @Return:  EntitiesResponse<UpdateStatus>
        */
       SysAppliancesService.prototype.batchUpgrade = function (configId, versionId, id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/config/" + configId + "/" + versionId + "/batch-upgrade", null], __read(params)));
       };
       /**
        * Find list of device update status entries by filter
        * @Return:  QueryResponse<UpdateStatus>
        */
       SysAppliancesService.prototype.findUpgradeStatus = function (accountId, applianceId, userId, commandId, batchId, from, to, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (applianceId != null) {
               params.push("applianceId=" + applianceId);
           }
           if (userId != null) {
               params.push("userId=" + userId);
           }
           if (commandId != null) {
               params.push("commandId=" + commandId);
           }
           if (batchId != null) {
               params.push("batchId=" + batchId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/batch-upgrade"], __read(params)));
       };
       /**
        * Find list of devices configurations (configured vs. actual)
        * @Return:  EntityResponse<ApplianceConfigReport>
        */
       SysAppliancesService.prototype.findDevicesConfigurations = function (accountId, search, configId, versionId, unmatched, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (configId != null) {
               params.push("configId=" + configId);
           }
           if (versionId != null) {
               params.push("versionId=" + versionId);
           }
           if (unmatched != null) {
               params.push("unmatched=" + unmatched);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/actual-config"], __read(params)));
       };
       /**
        * Export list of devices configurations (configured vs. actual)
        * @Return:  StreamingOutput of the report file
        */
       SysAppliancesService.prototype.exportDevicesConfigurations = function (accountId, search, configId, versionId, unmatched, format, fileName) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (configId != null) {
               params.push("configId=" + configId);
           }
           if (versionId != null) {
               params.push("versionId=" + versionId);
           }
           if (unmatched != null) {
               params.push("unmatched=" + unmatched);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sys-appliances", this.baseUrl + "/actual-config/export"], __read(params)));
       };
       return SysAppliancesService;
   }());
   /** @nocollapse */ SysAppliancesService.ɵfac = function SysAppliancesService_Factory(t) { return new (t || SysAppliancesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysAppliancesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysAppliancesService, factory: SysAppliancesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysAppliancesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of configurations related actions for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (console)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysConfigurationsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysConfigurationsService(config, rest) {
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
       SysConfigurationsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update configuration in the system
        * @Return: EntityResponse<Configuration>
        */
       SysConfigurationsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete configuration by id
        * @Return: ActionResponse
        */
       SysConfigurationsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Set default version for configuration
        * @Return: ActionResponse
        */
       SysConfigurationsService.prototype.setDefaultVersion = function (id, versionId) {
           return this.rest.put(this.baseUrl + "/" + id + "/default-version/" + versionId, null);
       };
       /**
        * Get configuration by id
        * @Return: EntityResponse<Configuration>
        */
       SysConfigurationsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get list of configurations by filter
        * @Return: QueryResponse<Configuration>
        */
       SysConfigurationsService.prototype.find = function (target, search, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (target != null) {
               params.push("target=" + target);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Create new configuration version in the system
        * @Return: EntityResponse<ConfigurationVersion>
        */
       SysConfigurationsService.prototype.createVersion = function (id, body) {
           return this.rest.post(this.baseUrl + "/" + id + "/versions", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update configuration version in the system
        * @Return: EntityResponse<ConfigurationVersion>
        */
       SysConfigurationsService.prototype.updateVersion = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/versions", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Duplicate configuration version from existing one
        * @Return: EntityResponse<ConfigurationVersion>
        */
       SysConfigurationsService.prototype.duplicateVersion = function (id, versionId) {
           return this.rest.post(this.baseUrl + "/" + id + "/versions/" + versionId, null);
       };
       /**
        * Delete configuration version by id
        * @Return: ActionResponse
        */
       SysConfigurationsService.prototype.deleteVersion = function (id, versionId) {
           return this.rest.delete(this.baseUrl + "/" + id + "/versions/" + versionId);
       };
       /**
        * Get specific configuration version
        * @Return: EntityResponse<ConfigurationVersion>
        */
       SysConfigurationsService.prototype.getVersion = function (id, versionId) {
           return this.rest.get(this.baseUrl + "/" + id + "/versions/" + versionId);
       };
       /**
        * Get all versions of specific configuration
        * @Return: EntitiesResponse<ConfigurationVersion>
        */
       SysConfigurationsService.prototype.getVersions = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/versions");
       };
       /**
        * Create new configuration template in the system
        * @Return: EntityResponse<ConfigurationTemplate>
        */
       SysConfigurationsService.prototype.createTemplate = function (body) {
           return this.rest.post(this.baseUrl + "/templates", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update configuration template in the system
        * @Return: EntityResponse<ConfigurationTemplate>
        */
       SysConfigurationsService.prototype.updateTemplate = function (id, body) {
           return this.rest.put(this.baseUrl + "/templates/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete configuration template by id
        * @Return: ActionResponse
        */
       SysConfigurationsService.prototype.deleteTemplate = function (id) {
           return this.rest.delete(this.baseUrl + "/templates/" + id);
       };
       /**
        * Get configuration template by id
        * @Return: EntityResponse<ConfigurationTemplate>
        */
       SysConfigurationsService.prototype.getTemplate = function (id) {
           return this.rest.get(this.baseUrl + "/templates/" + id);
       };
       /**
        * Get list of configuration templates
        * @Return: QueryResponse<ConfigurationTemplate>
        */
       SysConfigurationsService.prototype.findTemplates = function (page, pageSize) {
           var _a;
           var params = new Array();
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/templates"], __read(params)));
       };
       return SysConfigurationsService;
   }());
   /** @nocollapse */ SysConfigurationsService.ɵfac = function SysConfigurationsService_Factory(t) { return new (t || SysConfigurationsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysConfigurationsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysConfigurationsService, factory: SysConfigurationsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysConfigurationsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for event queries for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysEventsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysEventsService(config, rest) {
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
       SysEventsService.prototype.get = function (id, accountId) {
           return this.rest.get(this.baseUrl + "/" + accountId + "/" + id);
       };
       /**
        * Find events by filters
        * @Return: QueryResponse<Event>
        */
       SysEventsService.prototype.find = function (accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + accountId], __read(params)));
       };
       /**
        * Get events count overtime for all events in the system
        * @Return: EntityResponse<EventCountTimeSeries>
        */
       SysEventsService.prototype.getEventsCountOvertime = function (accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
           var _a;
           var params = new Array();
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (objectType != null) {
               params.push("objectType=" + objectType);
           }
           if (behaviorType != null) {
               params.push("behaviorType=" + behaviorType);
           }
           if (severity != null) {
               params.push("severity=" + severity);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (interval != null) {
               params.push("interval=" + interval);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + accountId + "/overtime"], __read(params)));
       };
       return SysEventsService;
   }());
   /** @nocollapse */ SysEventsService.ɵfac = function SysEventsService_Factory(t) { return new (t || SysEventsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysEventsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysEventsService, factory: SysEventsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysEventsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Features groups services for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysFeaturesGroupsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysFeaturesGroupsService(config, rest) {
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
       SysFeaturesGroupsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update features group
        * @Return: EntityResponse<FeaturesGroup>
        */
       SysFeaturesGroupsService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete Feature from the system
        * @Return: ActionResponse
        */
       SysFeaturesGroupsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single features group by id
        * @Return: EntityResponse<FeaturesGroup>
        */
       SysFeaturesGroupsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find features groups by filters
        * @Return: QueryResponse<FeaturesGroup>
        */
       SysFeaturesGroupsService.prototype.find = function (search, sort) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       return SysFeaturesGroupsService;
   }());
   /** @nocollapse */ SysFeaturesGroupsService.ɵfac = function SysFeaturesGroupsService_Factory(t) { return new (t || SysFeaturesGroupsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysFeaturesGroupsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysFeaturesGroupsService, factory: SysFeaturesGroupsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysFeaturesGroupsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Features services for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysFeaturesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysFeaturesService(config, rest) {
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
       SysFeaturesService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update Feature
        * @Return: EntityResponse<Feature>
        */
       SysFeaturesService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete Feature from the system
        * @Return: ActionResponse
        */
       SysFeaturesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single feature by id
        * @Return: EntityResponse<Feature>
        */
       SysFeaturesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find features by filters
        * @Return: QueryResponse<Feature>
        */
       SysFeaturesService.prototype.find = function (search, category, sort) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (category != null) {
               params.push("category=" + category);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       return SysFeaturesService;
   }());
   /** @nocollapse */ SysFeaturesService.ɵfac = function SysFeaturesService_Factory(t) { return new (t || SysFeaturesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysFeaturesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysFeaturesService, factory: SysFeaturesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysFeaturesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of all key (API key + User token) related actions for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysKeysService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysKeysService(config, rest) {
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
       SysKeysService.prototype.create = function (body) {
           return this.rest.post(this.baseUrl + "/api-keys", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update API key for specific application name
        * @Return: EntityResponse<ApiKey>
        */
       SysKeysService.prototype.update = function (body) {
           return this.rest.put(this.baseUrl + "/api-keys", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update Bulk of API keys
        * @Return: ActionResponse
        */
       SysKeysService.prototype.updateBulk = function (body) {
           return this.rest.put(this.baseUrl + "/api-keys/bulk", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change API Key version (rotate key)
        * @Return: EntityResponse<ApiKey>
        */
       SysKeysService.prototype.rotate = function (id) {
           return this.rest.put(this.baseUrl + "/api-keys/" + id + "/rotate", null);
       };
       /**
        * Delete API Key
        * @Return: ActionResponse
        */
       SysKeysService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/api-keys/" + id);
       };
       /**
        * Get single API Key by id
        * @Return: EntityResponse<ApiKey>
        */
       SysKeysService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/api-keys/" + id);
       };
       /**
        * Get list of all keys
        * @Return: EntitiesResponse<ApiKey>
        */
       SysKeysService.prototype.getAll = function () {
           return this.rest.get(this.baseUrl + "/api-keys");
       };
       /**
        * Enable key
        * @Return: EntityResponse<ApiKey>
        */
       SysKeysService.prototype.enable = function (id) {
           return this.rest.put(this.baseUrl + "/api-keys/" + id + "/enable", null);
       };
       /**
        * Disable key
        * @Return: EntityResponse<ApiKey>
        */
       SysKeysService.prototype.disable = function (id) {
           return this.rest.put(this.baseUrl + "/api-keys/" + id + "/disable", null);
       };
       /**
        * Create access token for the user in the specified account
        * @Return: ActionResponse
        */
       SysKeysService.prototype.createAccessToken = function (accountId, userId, ttl) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (userId != null) {
               params.push("userId=" + userId);
           }
           if (ttl != null) {
               params.push("ttl=" + ttl);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/token", null], __read(params)));
       };
       /**
        * Create time limited password for user to access the API documentation
        * @Return: ActionResponse
        */
       SysKeysService.prototype.createTimedPassword = function (days, user) {
           var _a;
           var params = new Array();
           if (days != null) {
               params.push("days=" + days);
           }
           if (user != null) {
               params.push("user=" + user);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/password", null], __read(params)));
       };
       /**
        * Get list of all resources
        * @Return: EntitiesResponse<StringKeyValue>
        */
       SysKeysService.prototype.getResources = function () {
           return this.rest.get(this.baseUrl + "/api-keys/resources");
       };
       return SysKeysService;
   }());
   /** @nocollapse */ SysKeysService.ɵfac = function SysKeysService_Factory(t) { return new (t || SysKeysService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysKeysService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysKeysService, factory: SysKeysService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysKeysService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of all detection models related actions for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysModelsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysModelsService(config, rest) {
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
       SysModelsService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update new Detection Model
        * @Return: EntityResponse<DetectionModel>
        */
       SysModelsService.prototype.update = function (body) {
           return this.rest.put("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Delete Detection Model
        * @Return: ActionResponse
        */
       SysModelsService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single Detection Model by id
        * @Return: EntityResponse<DetectionModel>
        */
       SysModelsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get list of all detection models
        * @Return: EntitiesResponse<DetectionModel>
        */
       SysModelsService.prototype.find = function () {
           return this.rest.get("" + this.baseUrl);
       };
       /**
        * Get list of all detection models per sensor
        * @Return: EntitiesResponse<DetectionModel>
        */
       SysModelsService.prototype.getSensorModels = function (sensorId) {
           return this.rest.get(this.baseUrl + "/sensors/" + sensorId);
       };
       /**
        * Add detection model to sensor
        * @Return: ActionResponse
        */
       SysModelsService.prototype.addSensorModels = function (sensorId, id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).put.apply(_a, __spreadArray([this.baseUrl + "/sensors/" + sensorId, null], __read(params)));
       };
       /**
        * Remove detection model from sensor
        * @Return: ActionResponse
        */
       SysModelsService.prototype.removeSensorModels = function (sensorId, id) {
           var _a;
           var params = new Array();
           if (id != null) {
               params.push("id=" + id);
           }
           return (_a = this.rest).delete.apply(_a, __spreadArray([this.baseUrl + "/sensors/" + sensorId], __read(params)));
       };
       return SysModelsService;
   }());
   /** @nocollapse */ SysModelsService.ɵfac = function SysModelsService_Factory(t) { return new (t || SysModelsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysModelsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysModelsService, factory: SysModelsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysModelsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Reports related actions for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysReportsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysReportsService(config, rest) {
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
       SysReportsService.prototype.exportSensorsReport = function () {
           return this.rest.download("sys-reports", this.baseUrl + "/sensors");
       };
       return SysReportsService;
   }());
   /** @nocollapse */ SysReportsService.ɵfac = function SysReportsService_Factory(t) { return new (t || SysReportsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysReportsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysReportsService, factory: SysReportsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysReportsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for sensor actions for system administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysSensorsService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysSensorsService(config, rest) {
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
       SysSensorsService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find sensors by filters
        * @Return: QueryResponse<Sensor>
        */
       SysSensorsService.prototype.find = function (accountId, folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (stream != null) {
               params.push("stream=" + stream);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Get single sensor health by sensor id
        * @Return: EntityResponse<SensorStatus>
        */
       SysSensorsService.prototype.getSensorHealthStatus = function (id) {
           return this.rest.get(this.baseUrl + "/" + id + "/health");
       };
       /**
        * Get all sensors health status
        * @Return: EntitiesResponse<SensorStatus>
        */
       SysSensorsService.prototype.getSensorsHealthStatus = function () {
           return this.rest.get(this.baseUrl + "/health");
       };
       /**
        * Get sensor status history over time
        * @Return:  EntityResponse<SensorStatusTimeSeries>
        */
       SysSensorsService.prototype.getStatusOverTime = function (id, from, to) {
           var _a;
           var params = new Array();
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/" + id + "/status/overtime"], __read(params)));
       };
       /**
        * Aggregate sensors count distribution by type
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysSensorsService.prototype.getSensorsCountByType = function (accountId, folderId, subFolders, sensorType, status, streamType) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorType != null) {
               params.push("sensorType=" + sensorType);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (streamType != null) {
               params.push("streamType=" + streamType);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-type"], __read(params)));
       };
       /**
        * Aggregate sensors count distribution by stream type
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysSensorsService.prototype.getSensorsCountByStream = function (accountId, folderId, subFolders, sensorType, status, streamType) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorType != null) {
               params.push("sensorType=" + sensorType);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (streamType != null) {
               params.push("streamType=" + streamType);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-stream"], __read(params)));
       };
       /**
        * Aggregate sensors count distribution by status
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysSensorsService.prototype.getSensorsCountByStatus = function (accountId, folderId, subFolders, sensorType, status, streamType) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (folderId != null) {
               params.push("folderId=" + folderId);
           }
           if (subFolders != null) {
               params.push("subFolders=" + subFolders);
           }
           if (sensorType != null) {
               params.push("sensorType=" + sensorType);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (streamType != null) {
               params.push("streamType=" + streamType);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/count/by-status"], __read(params)));
       };
       /**
        * Collect object crops from agents based on the query parameters
        * @Return:  ActionResponse
        */
       SysSensorsService.prototype.fetchObjectsCrops = function (accountId, sensorId, ts, objectId, bucketFolder) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (sensorId != null) {
               params.push("sensorId=" + sensorId);
           }
           if (ts != null) {
               params.push("ts=" + ts);
           }
           if (objectId != null) {
               params.push("objectId=" + objectId);
           }
           if (bucketFolder != null) {
               params.push("bucketFolder=" + bucketFolder);
           }
           return (_a = this.rest).post.apply(_a, __spreadArray([this.baseUrl + "/fetch-objects-crops", null], __read(params)));
       };
       return SysSensorsService;
   }());
   /** @nocollapse */ SysSensorsService.ɵfac = function SysSensorsService_Factory(t) { return new (t || SysSensorsService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysSensorsService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysSensorsService, factory: SysSensorsService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysSensorsService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of general system configuration actions for system administrator only
    */
   var SysSystemService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysSystemService(config, rest) {
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
       SysSystemService.prototype.getSystemVersion = function () {
           return this.rest.get(this.baseUrl + "/license");
       };
       /**
        * Export account configuration data
        * @Return: StreamingOutput of the content (gzip)
        */
       SysSystemService.prototype.exportAccountData = function (accountId, password) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (password != null) {
               params.push("password=" + password);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sys-system", this.baseUrl + "/accounts/export"], __read(params)));
       };
       /**
        * Import account configuration data from byte array (zip content)
        * @Return: ActionResponse
        */
       SysSystemService.prototype.importAccountData = function (password, zipFile) {
           var _a;
           var params = new Array();
           if (password != null) {
               params.push("password=" + password);
           }
           return (_a = this.rest).upload.apply(_a, __spreadArray([zipFile, this.baseUrl + "/accounts/import"], __read(params)));
       };
       /**
        * Export SW package configurations data
        * @Return: StreamingOutput of the content (zip)
        */
       SysSystemService.prototype.exportConfigurations = function () {
           return this.rest.download("sys-system", this.baseUrl + "/configurations/export");
       };
       /**
        * Import SW package configurations data from byte array (zip content)
        * @Return: ActionResponse
        */
       SysSystemService.prototype.importConfigurations = function (zipFile) {
           return this.rest.upload(zipFile, this.baseUrl + "/configurations/import");
       };
       /**
        * Backup entire system (configurations, users and accounts)
        * Filter parameter values: empty = backup all, config = backup configuration only, users = backup users only, <accountId> = backup account data
        * @Return: StreamContent
        */
       SysSystemService.prototype.backupSystem = function (filter, fileName) {
           var _a;
           var params = new Array();
           if (filter != null) {
               params.push("filter=" + filter);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sys-system", this.baseUrl + "/backup"], __read(params)));
       };
       /**
        * Restore entire system (zip content)
        * @Return: ActionResponse
        */
       SysSystemService.prototype.restoreSystem = function (zipFile) {
           return this.rest.upload(zipFile, this.baseUrl + "/restore");
       };
       /**
        * Publish message to all services to change their log level
        * @Return: ActionResponse
        */
       SysSystemService.prototype.setLogLevel = function (level) {
           return this.rest.put(this.baseUrl + "/log-level", null);
       };
       return SysSystemService;
   }());
   /** @nocollapse */ SysSystemService.ɵfac = function SysSystemService_Factory(t) { return new (t || SysSystemService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysSystemService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysSystemService, factory: SysSystemService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysSystemService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of all user related actions for account administrator only
    * @RequestHeader X-API-KEY The key to identify the application (console)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysUsersService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysUsersService(config, rest) {
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
       SysUsersService.prototype.create = function (body) {
           return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Update user
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change user name
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.changeName = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change user mobile
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.changeMobile = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change user type
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.changeType = function (id, type) {
           return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
       };
       /**
        * Change user status
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.changeStatus = function (id, status) {
           return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
       };
       /**
        * Change user default account
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.changeDefaultAccount = function (id, accountId) {
           return this.rest.put(this.baseUrl + "/" + id + "/defaultAccount/" + accountId, null);
       };
       /**
        * Reset password for user, generate one-time temporary password
        * @Return: ActionResponse
        */
       SysUsersService.prototype.resetPassword = function (id) {
           return this.rest.post(this.baseUrl + "/" + id + "/reset-password", null);
       };
       /**
        * Set user roles in his accounts (override previous roles)
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.setRoles = function (id, roles) {
           return this.rest.post(this.baseUrl + "/" + id + "/roles", typeof roles === 'object' ? JSON.stringify(roles) : roles);
       };
       /**
        * Update user roles in his accounts (merge with existing roles)
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.mergeRoles = function (id, roles) {
           return this.rest.put(this.baseUrl + "/" + id + "/roles", typeof roles === 'object' ? JSON.stringify(roles) : roles);
       };
       /**
        * Delete user from the system
        * @Return: ActionResponse
        */
       SysUsersService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single user by Id
        * @Return: EntityResponse<User>
        */
       SysUsersService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Find list of users by filter
        * @Return: QueryResponse<User>
        */
       SysUsersService.prototype.find = function (accountId, search, type, status, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of users and filter
        * @Return: StreamContent
        */
       SysUsersService.prototype.exportFormat = function (search, type, status, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["sys-users", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Aggregate users count distribution by type
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysUsersService.prototype.getUsersCountByType = function () {
           return this.rest.get(this.baseUrl + "/count/by-type");
       };
       /**
        * Aggregate users count distribution by status
        * @Return:  EntityResponse<DistributionOfLong>
        */
       SysUsersService.prototype.getUsersCountByStatus = function () {
           return this.rest.get(this.baseUrl + "/count/by-status");
       };
       /**
        * Get access token for user
        * @Return: ActionResponse
        */
       SysUsersService.prototype.getUserToken = function (id, exp) {
           return this.rest.get(this.baseUrl + "/" + id + "/token/" + exp);
       };
       return SysUsersService;
   }());
   /** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysUsersService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysUsersService, factory: SysUsersService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysUsersService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Audit log queries for account administrator only
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysAuditLogService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysAuditLogService(config, rest) {
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
       SysAuditLogService.prototype.find = function (accountId, userId, from, to, item, itemType, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (userId != null) {
               params.push("userId=" + userId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (item != null) {
               params.push("item=" + item);
           }
           if (itemType != null) {
               params.push("itemType=" + itemType);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of audit log entries and filter
        * @Return: StreamContent
        */
       SysAuditLogService.prototype.exportFormat = function (accountId, userId, from, to, item, itemType, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (userId != null) {
               params.push("userId=" + userId);
           }
           if (from != null) {
               params.push("from=" + from);
           }
           if (to != null) {
               params.push("to=" + to);
           }
           if (item != null) {
               params.push("item=" + item);
           }
           if (itemType != null) {
               params.push("itemType=" + itemType);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["auditlog", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get single audit log entry by id
        * @Return: EntityResponse<Appliance>
        */
       SysAuditLogService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       return SysAuditLogService;
   }());
   /** @nocollapse */ SysAuditLogService.ɵfac = function SysAuditLogService_Factory(t) { return new (t || SysAuditLogService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysAuditLogService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysAuditLogService, factory: SysAuditLogService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysAuditLogService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of license related actions
    * @RequestHeader X-API-KEY The key to identify the application (portal)
    * @RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
    */
   var SysLicensesService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function SysLicensesService(config, rest) {
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
       SysLicensesService.prototype.getClusterId = function () {
           return this.rest.get(this.baseUrl + "/cluster/id");
       };
       /**
        * Get deployment Id (for licensing)
        * @Return: ActionResponse
        */
       SysLicensesService.prototype.getDeploymentId = function () {
           return this.rest.get(this.baseUrl + "/deployment/id");
       };
       /**
        * Get active license (combined license from all licenses)
        * @Return: EntityResponse<License>
        */
       SysLicensesService.prototype.getActive = function () {
           return this.rest.get(this.baseUrl + "/active");
       };
       /**
        * Get single license by Id
        * @Return: EntityResponse<License>
        */
       SysLicensesService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Delete license from the system
        * @Return: ActionResponse
        */
       SysLicensesService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get all licenses
        * @Return: EntitiesResponse<License>
        */
       SysLicensesService.prototype.getAll = function () {
           return this.rest.get("" + this.baseUrl);
       };
       /**
        * Import license data from file
        * @Return: ActionResponse
        */
       SysLicensesService.prototype.import = function (licenseFile) {
           return this.rest.upload(licenseFile, this.baseUrl + "/import");
       };
       return SysLicensesService;
   }());
   /** @nocollapse */ SysLicensesService.ɵfac = function SysLicensesService_Factory(t) { return new (t || SysLicensesService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ SysLicensesService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: SysLicensesService, factory: SysLicensesService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SysLicensesService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * Services for user registration and login
    */
   var UserService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function UserService(config, rest) {
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
       UserService.prototype.login = function (body) {
           return this.rest.post(this.baseUrl + "/login", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Refresh token (set new expiration time) and associate with new account if required
        * @Return: EntityResponse<LoginData>
        */
       UserService.prototype.refreshToken = function () {
           return this.rest.post(this.baseUrl + "/refresh-token", null);
       };
       /**
        * Verify user by temporary login key
        * @Return: EntityResponse<User>
        */
       UserService.prototype.verifyLoginKey = function (key) {
           var _a;
           var params = new Array();
           if (key != null) {
               params.push("key=" + key);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray([this.baseUrl + "/login/verify"], __read(params)));
       };
       /**
        * Send verification code by email
        * @Return: ActionResponse
        */
       UserService.prototype.sendVerificationCode = function (body) {
           return this.rest.post(this.baseUrl + "/verify", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Validate verification code and reset password
        * @Return: ActionResponse
        */
       UserService.prototype.resetPassword = function (code) {
           return this.rest.post(this.baseUrl + "/reset-password", typeof code === 'object' ? JSON.stringify(code) : code);
       };
       /**
        * Change password
        * @Return: ActionResponse
        */
       UserService.prototype.changePassword = function (body) {
           return this.rest.post(this.baseUrl + "/change-password", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Check if password was used before (according to password policy)
        * @Return: ActionResponse
        */
       UserService.prototype.checkUnusedPassword = function (body) {
           return this.rest.post(this.baseUrl + "/check-password", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change current user name
        * @Return: ActionResponse
        */
       UserService.prototype.changeName = function (body) {
           return this.rest.put(this.baseUrl + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change current user mobile
        * @Return: ActionResponse
        */
       UserService.prototype.changeMobile = function (body) {
           return this.rest.put(this.baseUrl + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Refresh token (set new expiration time) and associate with new account if required
        * @Return: EntityResponse<UserAccountInfo>
        */
       UserService.prototype.switchAccount = function (body) {
           return this.rest.post(this.baseUrl + "/switch-account", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Mark the user who accepted the EULA agreement
        * @Return: ActionResponse
        */
       UserService.prototype.acceptEula = function () {
           return this.rest.put(this.baseUrl + "/accept-eula", null);
       };
       return UserService;
   }());
   /** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ UserService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UserService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   /**
    * List of all user related actions for account administrator only
    */
   var UsersService = /** @class */ (function () {
       /**
        * Class constructor
        */
       function UsersService(config, rest) {
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
       UsersService.prototype.invite = function (body) {
           return this.rest.post(this.baseUrl + "/invite", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Register user for the account, it a user already exists, an invitation to the new account will be sent
        * @Return: EntityResponse<User>
        */
       UsersService.prototype.register = function (body) {
           return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Create service account
        * @Return: ActionResponse
        */
       UsersService.prototype.registerServiceAccount = function (body) {
           return this.rest.post(this.baseUrl + "/service-account", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Resend invitation to an existing user for the current account
        * @Return: ActionResponse
        */
       UsersService.prototype.reInvite = function (id) {
           return this.rest.post(this.baseUrl + "/re-invite/" + id, null);
       };
       /**
        * Update user
        * @Return: EntityResponse<User>
        */
       UsersService.prototype.update = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change user name
        * @Return: EntityResponse<User>
        */
       UsersService.prototype.changeName = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change user mobile
        * @Return: EntityResponse<User>
        */
       UsersService.prototype.changeMobile = function (id, body) {
           return this.rest.put(this.baseUrl + "/" + id + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
       };
       /**
        * Change user type
        * @Return: EntityResponse<User>
        */
       UsersService.prototype.changeType = function (id, type) {
           return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
       };
       /**
        * Delete user from the system
        * The user will be removed from the account, if no accounts associated with the user, it will be deleted
        * @Return: ActionResponse
        */
       UsersService.prototype.delete = function (id) {
           return this.rest.delete(this.baseUrl + "/" + id);
       };
       /**
        * Get single user by id
        * @Return: EntityResponse<User>
        */
       UsersService.prototype.get = function (id) {
           return this.rest.get(this.baseUrl + "/" + id);
       };
       /**
        * Get single user by email
        * @Return: EntityResponse<User>
        */
       UsersService.prototype.getByEmail = function (email) {
           return this.rest.get(this.baseUrl + "/byEmail/" + email);
       };
       /**
        * Find list of users and filter the list
        * System user will see all users, Account system will see all users of the account, registered user will get an error.
        * @Return: QueryResponse<User>
        */
       UsersService.prototype.find = function (accountId, search, type, status, sort, page, pageSize) {
           var _a;
           var params = new Array();
           if (accountId != null) {
               params.push("accountId=" + accountId);
           }
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (page != null) {
               params.push("page=" + page);
           }
           if (pageSize != null) {
               params.push("pageSize=" + pageSize);
           }
           return (_a = this.rest).get.apply(_a, __spreadArray(["" + this.baseUrl], __read(params)));
       };
       /**
        * Export list of users and filter
        * @Return: StreamContent
        */
       UsersService.prototype.exportFormat = function (search, type, status, sort, format, fields, fileName) {
           var _a;
           var params = new Array();
           if (search != null) {
               params.push("search=" + search);
           }
           if (type != null) {
               params.push("type=" + type);
           }
           if (status != null) {
               params.push("status=" + status);
           }
           if (sort != null) {
               params.push("sort=" + sort);
           }
           if (format != null) {
               params.push("format=" + format);
           }
           if (fields != null) {
               params.push("fields=" + fields);
           }
           if (fileName != null) {
               params.push("fileName=" + fileName);
           }
           return (_a = this.rest).download.apply(_a, __spreadArray(["users", this.baseUrl + "/export"], __read(params)));
       };
       /**
        * Get access token for user
        * @Return: ActionResponse
        */
       UsersService.prototype.getUserToken = function (id, exp) {
           return this.rest.get(this.baseUrl + "/" + id + "/token/" + exp);
       };
       return UsersService;
   }());
   /** @nocollapse */ UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(i0__namespace.ɵɵinject('config'), i0__namespace.ɵɵinject(RestUtil)); };
   /** @nocollapse */ UsersService.ɵprov = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjectable({ token: UsersService, factory: UsersService.ɵfac });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(UsersService, [{
               type: i0.Injectable
           }], function () {
           return [{ type: CoreConfig, decorators: [{
                           type: i0.Inject,
                           args: ['config']
                       }] }, { type: RestUtil }];
       }, null);
   })();

   var Services = [
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
       PersonRecognitionService,
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
   var EntityChangeSocketServiceOpen = /** @class */ (function () {
       function EntityChangeSocketServiceOpen(token) {
           this.token = token;
       }
       return EntityChangeSocketServiceOpen;
   }());

   /*
      @WebSocketMessage
   */
   var EventsSocketServiceOpen = /** @class */ (function () {
       function EventsSocketServiceOpen(token) {
           this.token = token;
       }
       return EventsSocketServiceOpen;
   }());

   /*
      @WebSocketMessage
   */
   var HealthSocketServiceOpen = /** @class */ (function () {
       function HealthSocketServiceOpen(token) {
           this.token = token;
       }
       return HealthSocketServiceOpen;
   }());

   /*
      @WebSocketMessage
      This message is sent from the client to close ssh session using the ssh uri provided in the payload
   */
   var SSHSocketCloseRequest = /** @class */ (function () {
       function SSHSocketCloseRequest(op, payload) {
           this.op = op;
           this.payload = payload;
       }
       return SSHSocketCloseRequest;
   }());

   /*
      @WebSocketMessage
      This message is sent from the client to send the command in the payload to the remote message
   */
   var SSHSocketInputRequest = /** @class */ (function () {
       function SSHSocketInputRequest(op, payload) {
           this.op = op;
           this.payload = payload;
       }
       return SSHSocketInputRequest;
   }());

   /*
      @WebSocketMessage
      This message is sent from the client to open ssh session using the ssh uri provided in the payload
   */
   var SSHSocketOpenRequest = /** @class */ (function () {
       function SSHSocketOpenRequest(op, payload) {
           this.op = op;
           this.payload = payload;
       }
       return SSHSocketOpenRequest;
   }());

   /*
      @WebSocketMessage
      This message is pushed to the client upon any new output text from remote SSH
   */
   var SSHSocketOutputResponse = /** @class */ (function () {
       function SSHSocketOutputResponse(op, error, payload) {
           this.op = op;
           this.error = error;
           this.payload = payload;
       }
       return SSHSocketOutputResponse;
   }());

   /*
      @WebSocketMessage
   */
   var SSHSocketServiceOpen = /** @class */ (function () {
       function SSHSocketServiceOpen(token) {
           this.token = token;
       }
       return SSHSocketServiceOpen;
   }());

   /*
      @WebSocketMessage
      This message is sent to the server to set filter criteria for the entity type
   */
   var SocketEntityChangeFilter = /** @class */ (function () {
       function SocketEntityChangeFilter(op, payload) {
           this.op = op;
           this.payload = payload;
       }
       return SocketEntityChangeFilter;
   }());

   /*
      @WebSocketMessage
      Payload for entity change filter socket message
   */
   var SocketEntityChangeFilterPayload = /** @class */ (function () {
       function SocketEntityChangeFilterPayload(entityTypes) {
           this.entityTypes = entityTypes;
       }
       return SocketEntityChangeFilterPayload;
   }());

   /*
      @WebSocketMessage
      This message is pushed to the client upon any new entity change in the registered account
   */
   var SocketEntityChangeNotification = /** @class */ (function () {
       function SocketEntityChangeNotification(op, payload) {
           this.op = op;
           this.payload = payload;
       }
       return SocketEntityChangeNotification;
   }());

   /*
      @WebSocketMessage
      Payload for entity change notification socket message
   */
   var SocketEntityChangePayload = /** @class */ (function () {
       function SocketEntityChangePayload(op, sid, entity) {
           this.op = op;
           this.sid = sid;
           this.entity = entity;
       }
       return SocketEntityChangePayload;
   }());

   /*
      @WebSocketMessage
      This message is pushed to the client upon any new event in the registered account
   */
   var SocketEventNotification = /** @class */ (function () {
       function SocketEventNotification(op, payload) {
           this.op = op;
           this.payload = payload;
       }
       return SocketEventNotification;
   }());

   /*
      @WebSocketMessage
      Payload for event notification socket message
   */
   var SocketEventNotificationPayload = /** @class */ (function () {
       function SocketEventNotificationPayload(code, error, event) {
           this.code = code;
           this.error = error;
           this.event = event;
       }
       return SocketEventNotificationPayload;
   }());

   /*
      @WebSocketMessage
      This message is sent to the server to set filter criteria for the events
   */
   var SocketEventsFilter = /** @class */ (function () {
       function SocketEventsFilter(op, payload) {
           this.op = op;
           this.payload = payload;
       }
       return SocketEventsFilter;
   }());

   /*
      @WebSocketMessage
      Payload for events filter socket message
   */
   var SocketEventsFilterPayload = /** @class */ (function () {
       function SocketEventsFilterPayload(sensorIds, extSensorIds, ruleIds, extRuleIds, objectTypes, behaviorTypes) {
           this.sensorIds = sensorIds;
           this.extSensorIds = extSensorIds;
           this.ruleIds = ruleIds;
           this.extRuleIds = extRuleIds;
           this.objectTypes = objectTypes;
           this.behaviorTypes = behaviorTypes;
       }
       return SocketEventsFilterPayload;
   }());

   /*
      @WebSocketMessage
      This message is pushed to the client upon any new event in the registered account
   */
   var SocketHealthStatusNotification = /** @class */ (function () {
       function SocketHealthStatusNotification(op, error, sensorStatus, agentStatus, applianceStatus) {
           this.op = op;
           this.error = error;
           this.sensorStatus = sensorStatus;
           this.agentStatus = agentStatus;
           this.applianceStatus = applianceStatus;
       }
       return SocketHealthStatusNotification;
   }());

   var CoreLibModule = /** @class */ (function () {
       function CoreLibModule() {
       }
       CoreLibModule.forRoot = function (config) {
           // console.log(config);
           return {
               ngModule: CoreLibModule,
               providers: __spreadArray([
                   { provide: 'config', useValue: config },
                   RestUtil
               ], __read(Services))
           };
       };
       return CoreLibModule;
   }());
   /** @nocollapse */ CoreLibModule.ɵfac = function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); };
   /** @nocollapse */ CoreLibModule.ɵmod = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineNgModule({ type: CoreLibModule });
   /** @nocollapse */ CoreLibModule.ɵinj = /** @pureOrBreakMyCode */ i0__namespace.ɵɵdefineInjector({ imports: [[common.CommonModule, i1.HttpClientModule]] });
   (function () {
       (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CoreLibModule, [{
               type: i0.NgModule,
               args: [{
                       imports: [common.CommonModule, i1.HttpClientModule]
                   }]
           }], null, null);
   })();
   (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CoreLibModule, { imports: [common.CommonModule, i1.HttpClientModule] }); })();

   /* Public API Surface of ng-core-lib */

   /**
    * Generated bundle index. Do not edit.
    */

   exports.AbsoluteTimeFrame = AbsoluteTimeFrame;
   exports.Account = Account;
   exports.AccountIdRequest = AccountIdRequest;
   exports.AccountIdsRequest = AccountIdsRequest;
   exports.AccountRole = AccountRole;
   exports.AccountSettings = AccountSettings;
   exports.AccountStatSummary = AccountStatSummary;
   exports.AccountStatistics = AccountStatistics;
   exports.AccountTypeSummary = AccountTypeSummary;
   exports.AccountsMonthStatisticsRequest = AccountsMonthStatisticsRequest;
   exports.AccountsService = AccountsService;
   exports.AccountsServiceChangeGroupsRequest = AccountsServiceChangeGroupsRequest;
   exports.AccountsServiceChangeNameRequest = AccountsServiceChangeNameRequest;
   exports.AccountsServiceChangeStatusRequest = AccountsServiceChangeStatusRequest;
   exports.AccountsServiceChangeTypeRequest = AccountsServiceChangeTypeRequest;
   exports.AccountsServiceCreateRequest = AccountsServiceCreateRequest;
   exports.AccountsServiceExportRequest = AccountsServiceExportRequest;
   exports.AccountsServiceFindFoldersRequest = AccountsServiceFindFoldersRequest;
   exports.AccountsServiceFindRequest = AccountsServiceFindRequest;
   exports.AccountsServiceLogicalTreeRequest = AccountsServiceLogicalTreeRequest;
   exports.AccountsServicePhysicalTreeRequest = AccountsServicePhysicalTreeRequest;
   exports.AccountsServiceResetRequest = AccountsServiceResetRequest;
   exports.AccountsServiceTreeRequest = AccountsServiceTreeRequest;
   exports.AccountsServiceUpdateRequest = AccountsServiceUpdateRequest;
   exports.ActionResponse = ActionResponse;
   exports.AddPoiRequest = AddPoiRequest;
   exports.AddPoiRequestBody = AddPoiRequestBody;
   exports.AddSensorModelRequest = AddSensorModelRequest;
   exports.AddSensorModelsRequest = AddSensorModelsRequest;
   exports.Agent = Agent;
   exports.AgentStatus = AgentStatus;
   exports.AnalysisResult = AnalysisResult;
   exports.AnomalyEventInfo = AnomalyEventInfo;
   exports.AnomalyService = AnomalyService;
   exports.AnomalyServiceFindEventsRequest = AnomalyServiceFindEventsRequest;
   exports.AnomalyServiceFindRequest = AnomalyServiceFindRequest;
   exports.AnomalyServiceSensorPresetRequest = AnomalyServiceSensorPresetRequest;
   exports.AnomalyServiceUpdateRequest = AnomalyServiceUpdateRequest;
   exports.AnomalyServiceUpdateRuleRequest = AnomalyServiceUpdateRuleRequest;
   exports.ApiKey = ApiKey;
   exports.ApiKeyIdRequest = ApiKeyIdRequest;
   exports.Appliance = Appliance;
   exports.ApplianceCapabilities = ApplianceCapabilities;
   exports.ApplianceCommand = ApplianceCommand;
   exports.ApplianceCommandIdRequest = ApplianceCommandIdRequest;
   exports.ApplianceConfigReport = ApplianceConfigReport;
   exports.ApplianceConfigVersion = ApplianceConfigVersion;
   exports.ApplianceConfiguration = ApplianceConfiguration;
   exports.ApplianceDigitalIOService = ApplianceDigitalIOService;
   exports.ApplianceDiscovery = ApplianceDiscovery;
   exports.ApplianceIdAgentIdRequest = ApplianceIdAgentIdRequest;
   exports.ApplianceIdRequest = ApplianceIdRequest;
   exports.ApplianceKpiDataPoint = ApplianceKpiDataPoint;
   exports.ApplianceKpiTimeSeries = ApplianceKpiTimeSeries;
   exports.ApplianceKpiTimestamped = ApplianceKpiTimestamped;
   exports.ApplianceLogBatch = ApplianceLogBatch;
   exports.ApplianceLogEntry = ApplianceLogEntry;
   exports.ApplianceProfile = ApplianceProfile;
   exports.ApplianceProfileCreateRequest = ApplianceProfileCreateRequest;
   exports.ApplianceProfileFindRequest = ApplianceProfileFindRequest;
   exports.ApplianceProfileIdRequest = ApplianceProfileIdRequest;
   exports.ApplianceProfileIdsRequest = ApplianceProfileIdsRequest;
   exports.ApplianceProfileUpdateBulkRequest = ApplianceProfileUpdateBulkRequest;
   exports.ApplianceProfileUpdateRequest = ApplianceProfileUpdateRequest;
   exports.ApplianceProfilesService = ApplianceProfilesService;
   exports.ApplianceRegistration = ApplianceRegistration;
   exports.ApplianceServiceDeleteCommandRequest = ApplianceServiceDeleteCommandRequest;
   exports.ApplianceStatus = ApplianceStatus;
   exports.ApplianceStatusTimeSeries = ApplianceStatusTimeSeries;
   exports.ApplianceStatusTimestamped = ApplianceStatusTimestamped;
   exports.AppliancesCountRequest = AppliancesCountRequest;
   exports.AppliancesService = AppliancesService;
   exports.AppliancesServiceAddSensorRequest = AppliancesServiceAddSensorRequest;
   exports.AppliancesServiceBulkAttachRequest = AppliancesServiceBulkAttachRequest;
   exports.AppliancesServiceBulkDetachRequest = AppliancesServiceBulkDetachRequest;
   exports.AppliancesServiceChangeConfigurationRequest = AppliancesServiceChangeConfigurationRequest;
   exports.AppliancesServiceChangeFolderRequest = AppliancesServiceChangeFolderRequest;
   exports.AppliancesServiceChangeMachineIdRequest = AppliancesServiceChangeMachineIdRequest;
   exports.AppliancesServiceChangeNameRequest = AppliancesServiceChangeNameRequest;
   exports.AppliancesServiceExportRequest = AppliancesServiceExportRequest;
   exports.AppliancesServiceExportSensorsRequest = AppliancesServiceExportSensorsRequest;
   exports.AppliancesServiceFindRequest = AppliancesServiceFindRequest;
   exports.AppliancesServiceFindSensorsRequest = AppliancesServiceFindSensorsRequest;
   exports.AppliancesServiceGetCommandsRequest = AppliancesServiceGetCommandsRequest;
   exports.AppliancesServiceGetLogsRequest = AppliancesServiceGetLogsRequest;
   exports.AppliancesServiceImportSensorsRequest = AppliancesServiceImportSensorsRequest;
   exports.AppliancesServiceRegisterApplianceRequest = AppliancesServiceRegisterApplianceRequest;
   exports.AppliancesServiceSetCommandRequest = AppliancesServiceSetCommandRequest;
   exports.AppliancesServiceStatusOvertimeRequest = AppliancesServiceStatusOvertimeRequest;
   exports.AppliancesServiceUpdateApplianceRequest = AppliancesServiceUpdateApplianceRequest;
   exports.Attribute = Attribute;
   exports.AuditLog = AuditLog;
   exports.AuditLogIdRequest = AuditLogIdRequest;
   exports.AuditLogService = AuditLogService;
   exports.AuditLogServiceExportRequest = AuditLogServiceExportRequest;
   exports.AuditLogServiceFindRequest = AuditLogServiceFindRequest;
   exports.BaseEntity = BaseEntity;
   exports.BoundingBox = BoundingBox;
   exports.BoundingMap = BoundingMap;
   exports.Calendar = Calendar;
   exports.CalendarIdRequest = CalendarIdRequest;
   exports.CalendarIdsRequest = CalendarIdsRequest;
   exports.CalendarsService = CalendarsService;
   exports.CalendarsServiceCreateRequest = CalendarsServiceCreateRequest;
   exports.CalendarsServiceFindRequest = CalendarsServiceFindRequest;
   exports.CalendarsServiceFolderRequest = CalendarsServiceFolderRequest;
   exports.CalendarsServiceImportRequest = CalendarsServiceImportRequest;
   exports.CalendarsServiceImportUrlRequest = CalendarsServiceImportUrlRequest;
   exports.CalendarsServiceUpdateRequest = CalendarsServiceUpdateRequest;
   exports.CaseEventObjects = CaseEventObjects;
   exports.CaseIdRequest = CaseIdRequest;
   exports.CaseInfo = CaseInfo;
   exports.CasesService = CasesService;
   exports.CasesServiceAddEventsRequest = CasesServiceAddEventsRequest;
   exports.CasesServiceCreateRequest = CasesServiceCreateRequest;
   exports.CasesServiceDeleteEventsRequest = CasesServiceDeleteEventsRequest;
   exports.CasesServiceFindRequest = CasesServiceFindRequest;
   exports.CasesServiceGetEventCropsRequest = CasesServiceGetEventCropsRequest;
   exports.CasesServiceUpdateEventDescriptionRequest = CasesServiceUpdateEventDescriptionRequest;
   exports.CasesServiceUpdateRequest = CasesServiceUpdateRequest;
   exports.ChangeGeoAreaRequest = ChangeGeoAreaRequest;
   exports.ChangeGeoLocationRequest = ChangeGeoLocationRequest;
   exports.ChangeHealthThresholdsRequest = ChangeHealthThresholdsRequest;
   exports.ChangePasswordRequest = ChangePasswordRequest;
   exports.ChangeTimezoneRequest = ChangeTimezoneRequest;
   exports.ClusterIdRequest = ClusterIdRequest;
   exports.ComponentConfiguration = ComponentConfiguration;
   exports.ComponentVariables = ComponentVariables;
   exports.Configuration = Configuration;
   exports.ConfigurationIdRequest = ConfigurationIdRequest;
   exports.ConfigurationModelRequest = ConfigurationModelRequest;
   exports.ConfigurationTargetRequest = ConfigurationTargetRequest;
   exports.ConfigurationTemplate = ConfigurationTemplate;
   exports.ConfigurationTemplateIdRequest = ConfigurationTemplateIdRequest;
   exports.ConfigurationVersion = ConfigurationVersion;
   exports.ConfigurationVersionIdRequest = ConfigurationVersionIdRequest;
   exports.Coordinate = Coordinate;
   exports.CoreConfig = CoreConfig;
   exports.CoreLibModule = CoreLibModule;
   exports.DetectionModel = DetectionModel;
   exports.DetectionModelIdRequest = DetectionModelIdRequest;
   exports.DigitalIO = DigitalIO;
   exports.DigitalIOCreateRequest = DigitalIOCreateRequest;
   exports.DigitalIOFindRequest = DigitalIOFindRequest;
   exports.DigitalIOIdRequest = DigitalIOIdRequest;
   exports.DigitalIOUpdateRequest = DigitalIOUpdateRequest;
   exports.Dimension = Dimension;
   exports.DiskInfo = DiskInfo;
   exports.DistributionOfLong = DistributionOfLong;
   exports.DistributionOfString = DistributionOfString;
   exports.DockerCredentials = DockerCredentials;
   exports.EdgeEventImage = EdgeEventImage;
   exports.EdgeEventInfo = EdgeEventInfo;
   exports.EdgeEventInfoBody = EdgeEventInfoBody;
   exports.EdgeEventInfoMessage = EdgeEventInfoMessage;
   exports.EdgeEventObject = EdgeEventObject;
   exports.EdgeMetadata = EdgeMetadata;
   exports.EdgeMetadataBody = EdgeMetadataBody;
   exports.EdgeMetadataMessage = EdgeMetadataMessage;
   exports.Embedding = Embedding;
   exports.EmptyRequest = EmptyRequest;
   exports.EmptyResponse = EmptyResponse;
   exports.EntitiesResponse = EntitiesResponse;
   exports.EntitiesResponseOfAccount = EntitiesResponseOfAccount;
   exports.EntitiesResponseOfAccountStatSummary = EntitiesResponseOfAccountStatSummary;
   exports.EntitiesResponseOfAccountStatistics = EntitiesResponseOfAccountStatistics;
   exports.EntitiesResponseOfAccountTypeSummary = EntitiesResponseOfAccountTypeSummary;
   exports.EntitiesResponseOfApiKey = EntitiesResponseOfApiKey;
   exports.EntitiesResponseOfAppliance = EntitiesResponseOfAppliance;
   exports.EntitiesResponseOfApplianceAgents = EntitiesResponseOfApplianceAgents;
   exports.EntitiesResponseOfApplianceCommand = EntitiesResponseOfApplianceCommand;
   exports.EntitiesResponseOfApplianceConfiguration = EntitiesResponseOfApplianceConfiguration;
   exports.EntitiesResponseOfApplianceProfile = EntitiesResponseOfApplianceProfile;
   exports.EntitiesResponseOfAuditLog = EntitiesResponseOfAuditLog;
   exports.EntitiesResponseOfCalendar = EntitiesResponseOfCalendar;
   exports.EntitiesResponseOfCaseInfo = EntitiesResponseOfCaseInfo;
   exports.EntitiesResponseOfComponentConfiguration = EntitiesResponseOfComponentConfiguration;
   exports.EntitiesResponseOfConfiguration = EntitiesResponseOfConfiguration;
   exports.EntitiesResponseOfDetectionModel = EntitiesResponseOfDetectionModel;
   exports.EntitiesResponseOfDigitalIO = EntitiesResponseOfDigitalIO;
   exports.EntitiesResponseOfDistributionOfLong = EntitiesResponseOfDistributionOfLong;
   exports.EntitiesResponseOfEvent = EntitiesResponseOfEvent;
   exports.EntitiesResponseOfFeature = EntitiesResponseOfFeature;
   exports.EntitiesResponseOfFeaturesGroup = EntitiesResponseOfFeaturesGroup;
   exports.EntitiesResponseOfFolder = EntitiesResponseOfFolder;
   exports.EntitiesResponseOfGroup = EntitiesResponseOfGroup;
   exports.EntitiesResponseOfIntegration = EntitiesResponseOfIntegration;
   exports.EntitiesResponseOfIntegrationAction = EntitiesResponseOfIntegrationAction;
   exports.EntitiesResponseOfIntegrationStatus = EntitiesResponseOfIntegrationStatus;
   exports.EntitiesResponseOfLicense = EntitiesResponseOfLicense;
   exports.EntitiesResponseOfReportDefinition = EntitiesResponseOfReportDefinition;
   exports.EntitiesResponseOfRule = EntitiesResponseOfRule;
   exports.EntitiesResponseOfRuleSpec = EntitiesResponseOfRuleSpec;
   exports.EntitiesResponseOfSchedule = EntitiesResponseOfSchedule;
   exports.EntitiesResponseOfScheduledReport = EntitiesResponseOfScheduledReport;
   exports.EntitiesResponseOfSearchDefinition = EntitiesResponseOfSearchDefinition;
   exports.EntitiesResponseOfSearchEvent = EntitiesResponseOfSearchEvent;
   exports.EntitiesResponseOfSensor = EntitiesResponseOfSensor;
   exports.EntitiesResponseOfSensorStatus = EntitiesResponseOfSensorStatus;
   exports.EntitiesResponseOfStringIntValue = EntitiesResponseOfStringIntValue;
   exports.EntitiesResponseOfStringKeyValue = EntitiesResponseOfStringKeyValue;
   exports.EntitiesResponseOfTimestampedCrop = EntitiesResponseOfTimestampedCrop;
   exports.EntitiesResponseOfUpdateStatus = EntitiesResponseOfUpdateStatus;
   exports.EntityChangeSocketServiceOpen = EntityChangeSocketServiceOpen;
   exports.EntityResponse = EntityResponse;
   exports.EntityResponseOfAccount = EntityResponseOfAccount;
   exports.EntityResponseOfApiKey = EntityResponseOfApiKey;
   exports.EntityResponseOfAppliance = EntityResponseOfAppliance;
   exports.EntityResponseOfApplianceAgents = EntityResponseOfApplianceAgents;
   exports.EntityResponseOfApplianceConfiguration = EntityResponseOfApplianceConfiguration;
   exports.EntityResponseOfApplianceDiscovery = EntityResponseOfApplianceDiscovery;
   exports.EntityResponseOfApplianceKpiTimeSeries = EntityResponseOfApplianceKpiTimeSeries;
   exports.EntityResponseOfApplianceProfile = EntityResponseOfApplianceProfile;
   exports.EntityResponseOfApplianceStatusTimeSeries = EntityResponseOfApplianceStatusTimeSeries;
   exports.EntityResponseOfAuditLog = EntityResponseOfAuditLog;
   exports.EntityResponseOfCalendar = EntityResponseOfCalendar;
   exports.EntityResponseOfCaseInfo = EntityResponseOfCaseInfo;
   exports.EntityResponseOfComponentConfiguration = EntityResponseOfComponentConfiguration;
   exports.EntityResponseOfConfiguration = EntityResponseOfConfiguration;
   exports.EntityResponseOfConfigurationTemplate = EntityResponseOfConfigurationTemplate;
   exports.EntityResponseOfConfigurationVersion = EntityResponseOfConfigurationVersion;
   exports.EntityResponseOfCoordinate = EntityResponseOfCoordinate;
   exports.EntityResponseOfDetectionModel = EntityResponseOfDetectionModel;
   exports.EntityResponseOfDigitalIO = EntityResponseOfDigitalIO;
   exports.EntityResponseOfDistributionOfLong = EntityResponseOfDistributionOfLong;
   exports.EntityResponseOfEvent = EntityResponseOfEvent;
   exports.EntityResponseOfEventCountTimeSeries = EntityResponseOfEventCountTimeSeries;
   exports.EntityResponseOfFeature = EntityResponseOfFeature;
   exports.EntityResponseOfFeaturesGroup = EntityResponseOfFeaturesGroup;
   exports.EntityResponseOfFolder = EntityResponseOfFolder;
   exports.EntityResponseOfGeoReferenceData = EntityResponseOfGeoReferenceData;
   exports.EntityResponseOfGroup = EntityResponseOfGroup;
   exports.EntityResponseOfHealthEvent = EntityResponseOfHealthEvent;
   exports.EntityResponseOfIntegration = EntityResponseOfIntegration;
   exports.EntityResponseOfIntegrationAction = EntityResponseOfIntegrationAction;
   exports.EntityResponseOfJobStatus = EntityResponseOfJobStatus;
   exports.EntityResponseOfLicense = EntityResponseOfLicense;
   exports.EntityResponseOfLoginData = EntityResponseOfLoginData;
   exports.EntityResponseOfMember = EntityResponseOfMember;
   exports.EntityResponseOfPreset = EntityResponseOfPreset;
   exports.EntityResponseOfReportDefinition = EntityResponseOfReportDefinition;
   exports.EntityResponseOfRule = EntityResponseOfRule;
   exports.EntityResponseOfSchedule = EntityResponseOfSchedule;
   exports.EntityResponseOfScheduledReport = EntityResponseOfScheduledReport;
   exports.EntityResponseOfSearchDefinition = EntityResponseOfSearchDefinition;
   exports.EntityResponseOfSearchEvent = EntityResponseOfSearchEvent;
   exports.EntityResponseOfSearchStatus = EntityResponseOfSearchStatus;
   exports.EntityResponseOfSensor = EntityResponseOfSensor;
   exports.EntityResponseOfSensorAnalysisResults = EntityResponseOfSensorAnalysisResults;
   exports.EntityResponseOfSensorAnomalyInfo = EntityResponseOfSensorAnomalyInfo;
   exports.EntityResponseOfSensorHeatmap = EntityResponseOfSensorHeatmap;
   exports.EntityResponseOfSensorPaths = EntityResponseOfSensorPaths;
   exports.EntityResponseOfSensorStatus = EntityResponseOfSensorStatus;
   exports.EntityResponseOfSensorStatusTimeSeries = EntityResponseOfSensorStatusTimeSeries;
   exports.EntityResponseOfTimeline = EntityResponseOfTimeline;
   exports.EntityResponseOfTimestampedCrop = EntityResponseOfTimestampedCrop;
   exports.EntityResponseOfTimestampedCropsData = EntityResponseOfTimestampedCropsData;
   exports.EntityResponseOfTimestampedImage = EntityResponseOfTimestampedImage;
   exports.EntityResponseOfTreeNode = EntityResponseOfTreeNode;
   exports.EntityResponseOfUser = EntityResponseOfUser;
   exports.EntityResponseOfUserAccountInfo = EntityResponseOfUserAccountInfo;
   exports.EntityResponseUsageReport = EntityResponseUsageReport;
   exports.Event = Event;
   exports.EventCountDataPoint = EventCountDataPoint;
   exports.EventCountTimeSeries = EventCountTimeSeries;
   exports.EventIdRequest = EventIdRequest;
   exports.EventIdsRequest = EventIdsRequest;
   exports.EventStatistics = EventStatistics;
   exports.EventTokenRequest = EventTokenRequest;
   exports.EventsCountByBehaviorRequest = EventsCountByBehaviorRequest;
   exports.EventsCountByObjectRequest = EventsCountByObjectRequest;
   exports.EventsCountByStatusRequest = EventsCountByStatusRequest;
   exports.EventsService = EventsService;
   exports.EventsServiceCreateRequest = EventsServiceCreateRequest;
   exports.EventsServiceExportRequest = EventsServiceExportRequest;
   exports.EventsServiceFindInAreaRequest = EventsServiceFindInAreaRequest;
   exports.EventsServiceFindRequest = EventsServiceFindRequest;
   exports.EventsServiceGetIntegrationsRequestRequest = EventsServiceGetIntegrationsRequestRequest;
   exports.EventsServiceSetBulkStatusRequest = EventsServiceSetBulkStatusRequest;
   exports.EventsServiceSetClipPathRequest = EventsServiceSetClipPathRequest;
   exports.EventsServiceSetImagePathRequest = EventsServiceSetImagePathRequest;
   exports.EventsServiceSetStatusRequest = EventsServiceSetStatusRequest;
   exports.EventsServiceStatisticsRequest = EventsServiceStatisticsRequest;
   exports.EventsSocketServiceOpen = EventsSocketServiceOpen;
   exports.ExportUsageReportRequest = ExportUsageReportRequest;
   exports.ExternalModelResults = ExternalModelResults;
   exports.Feature = Feature;
   exports.FeatureIdRequest = FeatureIdRequest;
   exports.FeatureIdsRequest = FeatureIdsRequest;
   exports.FeaturesGroup = FeaturesGroup;
   exports.FeaturesGroupIdRequest = FeaturesGroupIdRequest;
   exports.FeaturesGroupIdsRequest = FeaturesGroupIdsRequest;
   exports.FeaturesGroupsServiceCreateRequest = FeaturesGroupsServiceCreateRequest;
   exports.FeaturesGroupsServiceFindRequest = FeaturesGroupsServiceFindRequest;
   exports.FeaturesGroupsServiceSetFeaturesRequest = FeaturesGroupsServiceSetFeaturesRequest;
   exports.FeaturesGroupsServiceSetNameRequest = FeaturesGroupsServiceSetNameRequest;
   exports.FeaturesGroupsServiceUpdateRequest = FeaturesGroupsServiceUpdateRequest;
   exports.FeaturesServiceCreateRequest = FeaturesServiceCreateRequest;
   exports.FeaturesServiceFindRequest = FeaturesServiceFindRequest;
   exports.FeaturesServiceUpdateRequest = FeaturesServiceUpdateRequest;
   exports.FindUser = FindUser;
   exports.FindUserAccountRole = FindUserAccountRole;
   exports.Folder = Folder;
   exports.FolderExtIdsRequest = FolderExtIdsRequest;
   exports.FolderIdRequest = FolderIdRequest;
   exports.FolderIdsRequest = FolderIdsRequest;
   exports.FoldersService = FoldersService;
   exports.FoldersServiceChangeParentRequest = FoldersServiceChangeParentRequest;
   exports.FoldersServiceCreateRequest = FoldersServiceCreateRequest;
   exports.FoldersServiceExportRequest = FoldersServiceExportRequest;
   exports.FoldersServiceFindRequest = FoldersServiceFindRequest;
   exports.FoldersServiceGetHierarchyRequest = FoldersServiceGetHierarchyRequest;
   exports.FovGeoAttributes = FovGeoAttributes;
   exports.GeoCircle = GeoCircle;
   exports.GeoControlPoint = GeoControlPoint;
   exports.GeoControlPoints = GeoControlPoints;
   exports.GeoPolygon = GeoPolygon;
   exports.GeoReferenceData = GeoReferenceData;
   exports.GeoReferenceTest = GeoReferenceTest;
   exports.GeoService = GeoService;
   exports.GeoServicesReferenceRequest = GeoServicesReferenceRequest;
   exports.GeoServicesTransformRequest = GeoServicesTransformRequest;
   exports.GetPoiFromImageRequest = GetPoiFromImageRequest;
   exports.GetPoiFromImageRequestBody = GetPoiFromImageRequestBody;
   exports.Group = Group;
   exports.GroupIdRequest = GroupIdRequest;
   exports.GroupIdsRequest = GroupIdsRequest;
   exports.GroupServiceFindRequest = GroupServiceFindRequest;
   exports.GroupsService = GroupsService;
   exports.GroupsServiceCreateRequest = GroupsServiceCreateRequest;
   exports.GroupsServiceUpdateRequest = GroupsServiceUpdateRequest;
   exports.HealthCheckService = HealthCheckService;
   exports.HealthEvent = HealthEvent;
   exports.HealthEventFindRequest = HealthEventFindRequest;
   exports.HealthEventIdRequest = HealthEventIdRequest;
   exports.HealthEventsService = HealthEventsService;
   exports.HealthSocketServiceOpen = HealthSocketServiceOpen;
   exports.HealthThresholds = HealthThresholds;
   exports.HeatmapCell = HeatmapCell;
   exports.HeatmapRow = HeatmapRow;
   exports.IdentifiedPoiFromImage = IdentifiedPoiFromImage;
   exports.IntegrationAction = IntegrationAction;
   exports.IntegrationActionCreateRequest = IntegrationActionCreateRequest;
   exports.IntegrationActionFilter = IntegrationActionFilter;
   exports.IntegrationActionIdRequest = IntegrationActionIdRequest;
   exports.IntegrationActionIdsRequest = IntegrationActionIdsRequest;
   exports.IntegrationActionUpdateRequest = IntegrationActionUpdateRequest;
   exports.IntegrationActionsFindRequest = IntegrationActionsFindRequest;
   exports.IntegrationActionsFolderRequest = IntegrationActionsFolderRequest;
   exports.IntegrationIdRequest = IntegrationIdRequest;
   exports.IntegrationIdsRequest = IntegrationIdsRequest;
   exports.IntegrationSpec = IntegrationSpec;
   exports.IntegrationStatus = IntegrationStatus;
   exports.IntegrationStatusFindRequest = IntegrationStatusFindRequest;
   exports.IntegrationStatusResponse = IntegrationStatusResponse;
   exports.IntegrationTarget = IntegrationTarget;
   exports.IntegrationsService = IntegrationsService;
   exports.IntegrationsServiceCreateRequest = IntegrationsServiceCreateRequest;
   exports.IntegrationsServiceFindRequest = IntegrationsServiceFindRequest;
   exports.IntegrationsServiceUpdateRequest = IntegrationsServiceUpdateRequest;
   exports.JobStatus = JobStatus;
   exports.License = License;
   exports.LicenseIdRequest = LicenseIdRequest;
   exports.LicenseImportRequest = LicenseImportRequest;
   exports.LoginData = LoginData;
   exports.LoginParams = LoginParams;
   exports.LongTuple = LongTuple;
   exports.MachineIdRequest = MachineIdRequest;
   exports.Mapping = Mapping;
   exports.Member = Member;
   exports.MemberByEmailRequest = MemberByEmailRequest;
   exports.MemberIdRequest = MemberIdRequest;
   exports.MemberRegistration = MemberRegistration;
   exports.MemberTokenRequest = MemberTokenRequest;
   exports.MembersService = MembersService;
   exports.MembersServiceExportRequest = MembersServiceExportRequest;
   exports.MembersServiceFindRequest = MembersServiceFindRequest;
   exports.MembersServiceInviteRequest = MembersServiceInviteRequest;
   exports.MembersServiceRegisterRequest = MembersServiceRegisterRequest;
   exports.MembersServiceUpdateRequest = MembersServiceUpdateRequest;
   exports.ModelAttributes = ModelAttributes;
   exports.ObjectColor = ObjectColor;
   exports.ObjectCount = ObjectCount;
   exports.ObjectData = ObjectData;
   exports.ObjectInfo = ObjectInfo;
   exports.ObjectInstance = ObjectInstance;
   exports.ObjectTypeCount = ObjectTypeCount;
   exports.ObjectTypeNode = ObjectTypeNode;
   exports.ObjectTypeReport = ObjectTypeReport;
   exports.ObjectsPath = ObjectsPath;
   exports.OnvifChannel = OnvifChannel;
   exports.PeopleCountingReportRequest = PeopleCountingReportRequest;
   exports.Permission = Permission;
   exports.PersonRecognitionService = PersonRecognitionService;
   exports.PoiBoundingBox = PoiBoundingBox;
   exports.Point = Point;
   exports.PortMapping = PortMapping;
   exports.Preset = Preset;
   exports.QueryResponse = QueryResponse;
   exports.QueryResponseOfAccount = QueryResponseOfAccount;
   exports.QueryResponseOfAnomalyEventInfo = QueryResponseOfAnomalyEventInfo;
   exports.QueryResponseOfAppliance = QueryResponseOfAppliance;
   exports.QueryResponseOfApplianceConfigReport = QueryResponseOfApplianceConfigReport;
   exports.QueryResponseOfAuditLog = QueryResponseOfAuditLog;
   exports.QueryResponseOfCalendar = QueryResponseOfCalendar;
   exports.QueryResponseOfCaseInfo = QueryResponseOfCaseInfo;
   exports.QueryResponseOfComponentConfiguration = QueryResponseOfComponentConfiguration;
   exports.QueryResponseOfConfiguration = QueryResponseOfConfiguration;
   exports.QueryResponseOfConfigurationTemplate = QueryResponseOfConfigurationTemplate;
   exports.QueryResponseOfConfigurationVersion = QueryResponseOfConfigurationVersion;
   exports.QueryResponseOfEvent = QueryResponseOfEvent;
   exports.QueryResponseOfFindUser = QueryResponseOfFindUser;
   exports.QueryResponseOfFolder = QueryResponseOfFolder;
   exports.QueryResponseOfGroup = QueryResponseOfGroup;
   exports.QueryResponseOfHealthEvent = QueryResponseOfHealthEvent;
   exports.QueryResponseOfIntegrationAction = QueryResponseOfIntegrationAction;
   exports.QueryResponseOfIntegrationStatus = QueryResponseOfIntegrationStatus;
   exports.QueryResponseOfIntegrationStatusResponse = QueryResponseOfIntegrationStatusResponse;
   exports.QueryResponseOfIntegrationTarget = QueryResponseOfIntegrationTarget;
   exports.QueryResponseOfJobStatus = QueryResponseOfJobStatus;
   exports.QueryResponseOfMember = QueryResponseOfMember;
   exports.QueryResponseOfReportDefinition = QueryResponseOfReportDefinition;
   exports.QueryResponseOfRule = QueryResponseOfRule;
   exports.QueryResponseOfSchedule = QueryResponseOfSchedule;
   exports.QueryResponseOfScheduledReport = QueryResponseOfScheduledReport;
   exports.QueryResponseOfSearchDefinition = QueryResponseOfSearchDefinition;
   exports.QueryResponseOfSearchEvent = QueryResponseOfSearchEvent;
   exports.QueryResponseOfSensor = QueryResponseOfSensor;
   exports.QueryResponseOfSensorAnalysisResults = QueryResponseOfSensorAnalysisResults;
   exports.QueryResponseOfTreeItem = QueryResponseOfTreeItem;
   exports.QueryResponseOfUpdateStatus = QueryResponseOfUpdateStatus;
   exports.QueryResponseOfUser = QueryResponseOfUser;
   exports.Recurrent = Recurrent;
   exports.RecurrentTimeFrame = RecurrentTimeFrame;
   exports.RegisterServiceAccountRequest = RegisterServiceAccountRequest;
   exports.RemoveSensorModelRequest = RemoveSensorModelRequest;
   exports.RemoveSensorModelsRequest = RemoveSensorModelsRequest;
   exports.ReportDefinition = ReportDefinition;
   exports.ReportFindRequest = ReportFindRequest;
   exports.ReportGenerationRequest = ReportGenerationRequest;
   exports.ReportGenerationRequestBody = ReportGenerationRequestBody;
   exports.ReportIdRequest = ReportIdRequest;
   exports.ReportIdsRequest = ReportIdsRequest;
   exports.ReportUpdateRequest = ReportUpdateRequest;
   exports.ReportsService = ReportsService;
   exports.ReportsServiceCreateRequest = ReportsServiceCreateRequest;
   exports.ReportsServiceFindRequest = ReportsServiceFindRequest;
   exports.ReportsServiceRulesSchedulesRequest = ReportsServiceRulesSchedulesRequest;
   exports.ReportsServiceSensorsRequest = ReportsServiceSensorsRequest;
   exports.ReportsServiceUpdateRequest = ReportsServiceUpdateRequest;
   exports.ResponseOfAddPoi = ResponseOfAddPoi;
   exports.ResponseOfSearchForPoiFromImage = ResponseOfSearchForPoiFromImage;
   exports.ResponseOfStaticWatchlist = ResponseOfStaticWatchlist;
   exports.RestUtil = RestUtil;
   exports.Rule = Rule;
   exports.RuleDefault = RuleDefault;
   exports.RuleExtIdsRequest = RuleExtIdsRequest;
   exports.RuleIdRequest = RuleIdRequest;
   exports.RuleIdsRequest = RuleIdsRequest;
   exports.RulePolygon = RulePolygon;
   exports.RuleSpec = RuleSpec;
   exports.RulesService = RulesService;
   exports.RulesServiceArmDisarmRequest = RulesServiceArmDisarmRequest;
   exports.RulesServiceCreateRequest = RulesServiceCreateRequest;
   exports.RulesServiceExportRequest = RulesServiceExportRequest;
   exports.RulesServiceFindAnomalyRequest = RulesServiceFindAnomalyRequest;
   exports.RulesServiceFindRequest = RulesServiceFindRequest;
   exports.RulesServicePauseRequest = RulesServicePauseRequest;
   exports.RulesServiceResumeRequest = RulesServiceResumeRequest;
   exports.RulesServiceUpdateRequest = RulesServiceUpdateRequest;
   exports.SSHInfo = SSHInfo;
   exports.SSHSocketCloseRequest = SSHSocketCloseRequest;
   exports.SSHSocketInputRequest = SSHSocketInputRequest;
   exports.SSHSocketOpenRequest = SSHSocketOpenRequest;
   exports.SSHSocketOutputResponse = SSHSocketOutputResponse;
   exports.SSHSocketServiceOpen = SSHSocketServiceOpen;
   exports.Schedule = Schedule;
   exports.ScheduleIdRequest = ScheduleIdRequest;
   exports.ScheduleIdsRequest = ScheduleIdsRequest;
   exports.ScheduledReport = ScheduledReport;
   exports.ScheduledReportIdRequest = ScheduledReportIdRequest;
   exports.ScheduledReportIdsRequest = ScheduledReportIdsRequest;
   exports.ScheduledReportsService = ScheduledReportsService;
   exports.ScheduledReportsServiceCreateRequest = ScheduledReportsServiceCreateRequest;
   exports.ScheduledReportsServiceFindRequest = ScheduledReportsServiceFindRequest;
   exports.ScheduledReportsServiceUpdateRequest = ScheduledReportsServiceUpdateRequest;
   exports.SchedulesService = SchedulesService;
   exports.SchedulesServiceCreateRequest = SchedulesServiceCreateRequest;
   exports.SchedulesServiceFindRequest = SchedulesServiceFindRequest;
   exports.SchedulesServiceFolderParamsRequest = SchedulesServiceFolderParamsRequest;
   exports.SchedulesServiceUpdateRequest = SchedulesServiceUpdateRequest;
   exports.SearchBehavior = SearchBehavior;
   exports.SearchColor = SearchColor;
   exports.SearchDefinition = SearchDefinition;
   exports.SearchEvent = SearchEvent;
   exports.SearchEventCountRequest = SearchEventCountRequest;
   exports.SearchEventCropsRequest = SearchEventCropsRequest;
   exports.SearchEventExportRequest = SearchEventExportRequest;
   exports.SearchEventFindRequest = SearchEventFindRequest;
   exports.SearchEventFindRequestBody = SearchEventFindRequestBody;
   exports.SearchEventIdRequest = SearchEventIdRequest;
   exports.SearchEventListRequest = SearchEventListRequest;
   exports.SearchIdRequest = SearchIdRequest;
   exports.SearchIdsRequest = SearchIdsRequest;
   exports.SearchObject = SearchObject;
   exports.SearchService = SearchService;
   exports.SearchServiceCreateRequest = SearchServiceCreateRequest;
   exports.SearchServiceExecuteRequest = SearchServiceExecuteRequest;
   exports.SearchServiceFindRequest = SearchServiceFindRequest;
   exports.SearchServiceSimilarRequest = SearchServiceSimilarRequest;
   exports.SearchServiceUpdateRequest = SearchServiceUpdateRequest;
   exports.SearchSession = SearchSession;
   exports.SearchSessionIdRequest = SearchSessionIdRequest;
   exports.SearchShape = SearchShape;
   exports.SearchStatus = SearchStatus;
   exports.Sensitivity = Sensitivity;
   exports.Sensor = Sensor;
   exports.SensorAnalysisIdRequest = SensorAnalysisIdRequest;
   exports.SensorAnalysisResults = SensorAnalysisResults;
   exports.SensorAnomalyInfo = SensorAnomalyInfo;
   exports.SensorAnomalyRuleInfo = SensorAnomalyRuleInfo;
   exports.SensorDebugInfo = SensorDebugInfo;
   exports.SensorDetectionModels = SensorDetectionModels;
   exports.SensorDetectionModelsIdRequest = SensorDetectionModelsIdRequest;
   exports.SensorExtIdsRequest = SensorExtIdsRequest;
   exports.SensorHeatmap = SensorHeatmap;
   exports.SensorHeatmapEventsRequest = SensorHeatmapEventsRequest;
   exports.SensorHeatmapRequest = SensorHeatmapRequest;
   exports.SensorIdRequest = SensorIdRequest;
   exports.SensorIdsRequest = SensorIdsRequest;
   exports.SensorInfo = SensorInfo;
   exports.SensorPathEventsRequest = SensorPathEventsRequest;
   exports.SensorPaths = SensorPaths;
   exports.SensorPathsRequest = SensorPathsRequest;
   exports.SensorStatus = SensorStatus;
   exports.SensorStatusTimeSeries = SensorStatusTimeSeries;
   exports.SensorStatusTimestamped = SensorStatusTimestamped;
   exports.SensorUsage = SensorUsage;
   exports.SensorUsageReport = SensorUsageReport;
   exports.SensorUsageReportRequest = SensorUsageReportRequest;
   exports.SensorsCountRequest = SensorsCountRequest;
   exports.SensorsFetchObjectsCropsRequest = SensorsFetchObjectsCropsRequest;
   exports.SensorsGroup = SensorsGroup;
   exports.SensorsService = SensorsService;
   exports.SensorsServiceAttachRequest = SensorsServiceAttachRequest;
   exports.SensorsServiceBulkCreateRequest = SensorsServiceBulkCreateRequest;
   exports.SensorsServiceChangeFolderRequest = SensorsServiceChangeFolderRequest;
   exports.SensorsServiceChangeFovRequest = SensorsServiceChangeFovRequest;
   exports.SensorsServiceChangeGeoLocationRequest = SensorsServiceChangeGeoLocationRequest;
   exports.SensorsServiceChangeNameRequest = SensorsServiceChangeNameRequest;
   exports.SensorsServiceChangeStatusRequest = SensorsServiceChangeStatusRequest;
   exports.SensorsServiceCreateRequest = SensorsServiceCreateRequest;
   exports.SensorsServiceCropImageRequest = SensorsServiceCropImageRequest;
   exports.SensorsServiceExportRequest = SensorsServiceExportRequest;
   exports.SensorsServiceFindRequest = SensorsServiceFindRequest;
   exports.SensorsServiceGetRefImageRequest = SensorsServiceGetRefImageRequest;
   exports.SensorsServiceSetRefImageRequest = SensorsServiceSetRefImageRequest;
   exports.SensorsServiceStatusOvertimeRequest = SensorsServiceStatusOvertimeRequest;
   exports.SensorsServiceUpdatePresetRequest = SensorsServiceUpdatePresetRequest;
   exports.SensorsServiceUpdateRequest = SensorsServiceUpdateRequest;
   exports.ServiceAccountRegistration = ServiceAccountRegistration;
   exports.Services = Services;
   exports.SocketEntityChangeFilter = SocketEntityChangeFilter;
   exports.SocketEntityChangeFilterPayload = SocketEntityChangeFilterPayload;
   exports.SocketEntityChangeNotification = SocketEntityChangeNotification;
   exports.SocketEntityChangePayload = SocketEntityChangePayload;
   exports.SocketEventNotification = SocketEventNotification;
   exports.SocketEventNotificationPayload = SocketEventNotificationPayload;
   exports.SocketEventsFilter = SocketEventsFilter;
   exports.SocketEventsFilterPayload = SocketEventsFilterPayload;
   exports.SocketHealthStatusNotification = SocketHealthStatusNotification;
   exports.StaticWatchlist = StaticWatchlist;
   exports.StaticWatchlistIdRequest = StaticWatchlistIdRequest;
   exports.StatisticReport = StatisticReport;
   exports.StreamResponse = StreamResponse;
   exports.StringIntValue = StringIntValue;
   exports.StringKeyValue = StringKeyValue;
   exports.SwitchAccountRequest = SwitchAccountRequest;
   exports.SysAccountExportRequest = SysAccountExportRequest;
   exports.SysAccountImportRequest = SysAccountImportRequest;
   exports.SysAccountsService = SysAccountsService;
   exports.SysApplianceBatchUpgradeFindRequest = SysApplianceBatchUpgradeFindRequest;
   exports.SysApplianceBatchUpgradeRequest = SysApplianceBatchUpgradeRequest;
   exports.SysApplianceConfigExportRequest = SysApplianceConfigExportRequest;
   exports.SysApplianceConfigReportRequest = SysApplianceConfigReportRequest;
   exports.SysApplianceGetLogsRequest = SysApplianceGetLogsRequest;
   exports.SysAppliancesCountRequest = SysAppliancesCountRequest;
   exports.SysAppliancesService = SysAppliancesService;
   exports.SysAppliancesServiceFindRequest = SysAppliancesServiceFindRequest;
   exports.SysAppliancesServiceGetCommandsRequest = SysAppliancesServiceGetCommandsRequest;
   exports.SysAuditLogService = SysAuditLogService;
   exports.SysAuditLogServiceExportRequest = SysAuditLogServiceExportRequest;
   exports.SysAuditLogServiceFindRequest = SysAuditLogServiceFindRequest;
   exports.SysConfigImportRequest = SysConfigImportRequest;
   exports.SysConfigurationsService = SysConfigurationsService;
   exports.SysConfigurationsServiceCreateRequest = SysConfigurationsServiceCreateRequest;
   exports.SysConfigurationsServiceCreateTemplateRequest = SysConfigurationsServiceCreateTemplateRequest;
   exports.SysConfigurationsServiceCreateVersionRequest = SysConfigurationsServiceCreateVersionRequest;
   exports.SysConfigurationsServiceDeleteVersionRequest = SysConfigurationsServiceDeleteVersionRequest;
   exports.SysConfigurationsServiceFindRequest = SysConfigurationsServiceFindRequest;
   exports.SysConfigurationsServiceFindTemplateRequest = SysConfigurationsServiceFindTemplateRequest;
   exports.SysConfigurationsServiceUpdateRequest = SysConfigurationsServiceUpdateRequest;
   exports.SysConfigurationsServiceUpdateTemplateRequest = SysConfigurationsServiceUpdateTemplateRequest;
   exports.SysConfigurationsServiceUpdateVersionRequest = SysConfigurationsServiceUpdateVersionRequest;
   exports.SysEventIdRequest = SysEventIdRequest;
   exports.SysEventsService = SysEventsService;
   exports.SysEventsServiceFindInAreaRequest = SysEventsServiceFindInAreaRequest;
   exports.SysEventsServiceStatisticsRequest = SysEventsServiceStatisticsRequest;
   exports.SysExportAllAccountsUsageReportRequest = SysExportAllAccountsUsageReportRequest;
   exports.SysExportUsageReportRequest = SysExportUsageReportRequest;
   exports.SysFeaturesGroupsService = SysFeaturesGroupsService;
   exports.SysFeaturesService = SysFeaturesService;
   exports.SysKeysService = SysKeysService;
   exports.SysKeysServiceCreateApiKeyRequest = SysKeysServiceCreateApiKeyRequest;
   exports.SysKeysServiceCreatePasswordRequest = SysKeysServiceCreatePasswordRequest;
   exports.SysKeysServiceCreateTokenRequest = SysKeysServiceCreateTokenRequest;
   exports.SysKeysServiceUpdateBulkRequest = SysKeysServiceUpdateBulkRequest;
   exports.SysLicensesService = SysLicensesService;
   exports.SysModelsService = SysModelsService;
   exports.SysModelsServiceCreateModelRequest = SysModelsServiceCreateModelRequest;
   exports.SysModelsServiceUpdateModelRequest = SysModelsServiceUpdateModelRequest;
   exports.SysReportsService = SysReportsService;
   exports.SysSensorUsageReportRequest = SysSensorUsageReportRequest;
   exports.SysSensorsCountRequest = SysSensorsCountRequest;
   exports.SysSensorsFetchObjectsCropsRequest = SysSensorsFetchObjectsCropsRequest;
   exports.SysSensorsService = SysSensorsService;
   exports.SysSensorsServiceFindRequest = SysSensorsServiceFindRequest;
   exports.SysSetLogLevelRequest = SysSetLogLevelRequest;
   exports.SysSystemBackupRequest = SysSystemBackupRequest;
   exports.SysSystemRestoreRequest = SysSystemRestoreRequest;
   exports.SysSystemService = SysSystemService;
   exports.SysUsageReportRequest = SysUsageReportRequest;
   exports.SysUsersService = SysUsersService;
   exports.Threshold = Threshold;
   exports.Thresholds = Thresholds;
   exports.TimeFrame = TimeFrame;
   exports.TimeSlot = TimeSlot;
   exports.Timeline = Timeline;
   exports.TimestampedCrop = TimestampedCrop;
   exports.TimestampedCropsData = TimestampedCropsData;
   exports.TimestampedImage = TimestampedImage;
   exports.TokenRequest = TokenRequest;
   exports.TrafficAnalysisReportRequest = TrafficAnalysisReportRequest;
   exports.TreeItem = TreeItem;
   exports.TreeNode = TreeNode;
   exports.TriggerTestHealthEventRequest = TriggerTestHealthEventRequest;
   exports.TriggerTestHealthEventRequestBody = TriggerTestHealthEventRequestBody;
   exports.UpdateStatus = UpdateStatus;
   exports.UsageReport = UsageReport;
   exports.UsageReportRequest = UsageReportRequest;
   exports.User = User;
   exports.UserAccount = UserAccount;
   exports.UserAccountInfo = UserAccountInfo;
   exports.UserByEmailRequest = UserByEmailRequest;
   exports.UserIdRequest = UserIdRequest;
   exports.UserIdsRequest = UserIdsRequest;
   exports.UserInvitation = UserInvitation;
   exports.UserRegistration = UserRegistration;
   exports.UserService = UserService;
   exports.UserServiceChangeMobileRequest = UserServiceChangeMobileRequest;
   exports.UserServiceChangeNameRequest = UserServiceChangeNameRequest;
   exports.UserServiceChangePasswordRequest = UserServiceChangePasswordRequest;
   exports.UserServiceCheckPasswordRequest = UserServiceCheckPasswordRequest;
   exports.UserServiceLoginRequest = UserServiceLoginRequest;
   exports.UserServiceResetPasswordRequest = UserServiceResetPasswordRequest;
   exports.UserServiceSendVerificationRequest = UserServiceSendVerificationRequest;
   exports.UserServiceSwitchAccountRequest = UserServiceSwitchAccountRequest;
   exports.UserServiceVerifyLoginRequest = UserServiceVerifyLoginRequest;
   exports.UserTokenRequest = UserTokenRequest;
   exports.UsersService = UsersService;
   exports.UsersServiceChangeDefaultAccountRequest = UsersServiceChangeDefaultAccountRequest;
   exports.UsersServiceChangeMobileRequest = UsersServiceChangeMobileRequest;
   exports.UsersServiceChangeNameRequest = UsersServiceChangeNameRequest;
   exports.UsersServiceChangeRoleRequest = UsersServiceChangeRoleRequest;
   exports.UsersServiceChangeStatusRequest = UsersServiceChangeStatusRequest;
   exports.UsersServiceChangeTypeRequest = UsersServiceChangeTypeRequest;
   exports.UsersServiceCreateRequest = UsersServiceCreateRequest;
   exports.UsersServiceExportRequest = UsersServiceExportRequest;
   exports.UsersServiceFindRequest = UsersServiceFindRequest;
   exports.UsersServiceInviteRequest = UsersServiceInviteRequest;
   exports.UsersServiceRegisterRequest = UsersServiceRegisterRequest;
   exports.UsersServiceSetRolesRequest = UsersServiceSetRolesRequest;
   exports.UsersServiceUpdateRequest = UsersServiceUpdateRequest;
   exports.VMSGateway = VMSGateway;
   exports.Verification = Verification;
   exports.WebSocketMessageHeader = WebSocketMessageHeader;
   exports.getToken = getToken;
   exports.removeToken = removeToken;
   exports.setToken = setToken;

   Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=agentvi-ng-core-lib.umd.js.map
