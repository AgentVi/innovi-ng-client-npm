(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@agentvi/ng-core-lib', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.agentvi = global.agentvi || {}, global.agentvi['ng-core-lib'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, http, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
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
        function AccountSettings(retentionDays, objectColors, ruleColor, maskColor) {
            this.retentionDays = retentionDays;
            this.objectColors = objectColors;
            this.ruleColor = ruleColor;
            this.maskColor = maskColor;
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
        function ApplianceKpiDataPoint(cpuAvg, cpuMax, ram, loadAvg) {
            this.cpuAvg = cpuAvg;
            this.cpuMax = cpuMax;
            this.ram = ram;
            this.loadAvg = loadAvg;
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
       Appliance registration info
       This model is used when a user registers new appliance in the system
    */
    var ApplianceRegistration = /** @class */ (function () {
        function ApplianceRegistration(name, accountId, folderId, machineId, productType, configurationId, configurationVersionId) {
            this.name = name;
            this.accountId = accountId;
            this.folderId = folderId;
            this.machineId = machineId;
            this.productType = productType;
            this.configurationId = configurationId;
            this.configurationVersionId = configurationVersionId;
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
        function LoginData(accessToken, accountRole, userId, userName, userEmail, userType, userStatus, changePassword) {
            this.accessToken = accessToken;
            this.accountRole = accountRole;
            this.userId = userId;
            this.userName = userName;
            this.userEmail = userEmail;
            this.userType = userType;
            this.userStatus = userStatus;
            this.changePassword = changePassword;
        }
        return LoginData;
    }());

    /*
       Login parameters data model
    */
    var LoginParams = /** @class */ (function () {
        function LoginParams(email, password, accessToken) {
            this.email = email;
            this.password = password;
            this.accessToken = accessToken;
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
       Metadata object color description
    */
    var ObjectColor = /** @class */ (function () {
        function ObjectColor(colorType, primary, primaryConf, secondaryColor, secondaryConf) {
            this.colorType = colorType;
            this.primary = primary;
            this.primaryConf = primaryConf;
            this.secondaryColor = secondaryColor;
            this.secondaryConf = secondaryConf;
        }
        return ObjectColor;
    }());

    /*
       Object Metadata info
    */
    var ObjectInfo = /** @class */ (function () {
        function ObjectInfo(objectId, sensorId, birthTime, instances) {
            this.objectId = objectId;
            this.sensorId = sensorId;
            this.birthTime = birthTime;
            this.instances = instances;
        }
        return ObjectInfo;
    }());

    /*
       Metadata object instance info
       One instance of the object in the scene
    */
    var ObjectInstance = /** @class */ (function () {
        function ObjectInstance(timestamp, objectType, confidence, isStopped, colors, direction, dimension, boundingBox, speed, size, position, location) {
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
        function RulePolygon(lineCrossDir, points) {
            this.lineCrossDir = lineCrossDir;
            this.points = points;
        }
        return RulePolygon;
    }());

    /*
       Rule specification describe rule parameters
    */
    var RuleSpec = /** @class */ (function () {
        function RuleSpec(behaviorType, ruleTypeName, objectTypes, isLineDrawing, dwellTime, peopleInGroup, objectHierarchy) {
            this.behaviorType = behaviorType;
            this.ruleTypeName = ruleTypeName;
            this.objectTypes = objectTypes;
            this.isLineDrawing = isLineDrawing;
            this.dwellTime = dwellTime;
            this.peopleInGroup = peopleInGroup;
            this.objectHierarchy = objectHierarchy;
        }
        return RuleSpec;
    }());

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
       Tree item for account hierarchy tree
    */
    var TreeItem = /** @class */ (function () {
        function TreeItem(itemId, type, name, typeName) {
            this.itemId = itemId;
            this.type = type;
            this.name = name;
            this.typeName = typeName;
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
        function UserAccountInfo(account, loginData, features) {
            this.account = account;
            this.loginData = loginData;
            this.features = features;
        }
        return UserAccountInfo;
    }());

    /*
       User invitation data model - used by account admin to invite user to the account
    */
    var UserInvitation = /** @class */ (function () {
        function UserInvitation(email, role) {
            this.email = email;
            this.role = role;
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
        function BaseEntity(id, docType, createdOn, updatedOn) {
            this.id = id;
            this._type = docType;
            this.createdOn = createdOn;
            this.updatedOn = updatedOn;
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
       API Key is used per application (e.g. Portal, Console, Mobile App) or service (e.g. Health Service, Search Service ...) for identifying the consumer.
       The access to sets of REST endpoints is restricted according the API key.
       API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
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
        function ApplianceCapabilities(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion) {
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
       SW Component version type
    */
    var ComponentConfiguration = /** @class */ (function () {
        function ComponentConfiguration(id, component, dockerImage, variables, mounts, status) {
            this.id = id;
            this.component = component;
            this.dockerImage = dockerImage;
            this.variables = variables;
            this.mounts = mounts;
            this.status = status;
        }
        return ComponentConfiguration;
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
       Search behavior description
    */
    var SearchBehavior = /** @class */ (function () {
        function SearchBehavior(behaviorType, dwellTime, minObjectsInGroup, shapes) {
            this.behaviorType = behaviorType;
            this.dwellTime = dwellTime;
            this.minObjectsInGroup = minObjectsInGroup;
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
       Object attributes to search for
    */
    var SearchObject = /** @class */ (function () {
        function SearchObject(type, colors) {
            this.type = type;
            this.colors = colors;
        }
        return SearchObject;
    }());

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
    })(exports.AccountRoleCode || (exports.AccountRoleCode = {}));

    /*
       Account status code
    */

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
    })(exports.AccountTypeCode || (exports.AccountTypeCode = {}));

    /*
       Agent (New Pipeline) status code
    */

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
    })(exports.ApplianceCommandCode || (exports.ApplianceCommandCode = {}));

    /*
       Appliance status code
    */

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
       Detected object behavior type code
       Values with INNOVI prefix represents standard innoVi model behaviour, all other values represent custom models behaviour
    */

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
        // Ignore mask 66049 
        BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_IGNORE"] = 66049] = "INNOVI_MASK_IGNORE";
        // Shutdown mask 66050 
        BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_SHUTDOWN"] = 66050] = "INNOVI_MASK_SHUTDOWN";
        // General Anomaly 66560 
        BehaviorTypeCode[BehaviorTypeCode["INNOVI_ANOMALY"] = 66560] = "INNOVI_ANOMALY";
    })(exports.BehaviorTypeCode || (exports.BehaviorTypeCode = {}));

    /*
       Detected color of object (or partial object)
    */

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
    })(exports.CommandStatusCode || (exports.CommandStatusCode = {}));

    /*
       Day of week code
    */

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
       Event status code
    */

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
    })(exports.FeatureCode || (exports.FeatureCode = {}));

    /*
       Integration type code
    */

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
    })(exports.IntegrationTypeCode || (exports.IntegrationTypeCode = {}));

    /*
       Line crossing direction (used by rule definition)
    */

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
    })(exports.ObjectTypeCode || (exports.ObjectTypeCode = {}));

    /*
       Product type code
    */

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
        // Edge 500 [500] 
        ProductTypeCode[ProductTypeCode["EDGE_500"] = 500] = "EDGE_500";
    })(exports.ProductTypeCode || (exports.ProductTypeCode = {}));

    /*
       Runtime status code represents the status of component in the host
    */

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
    })(exports.SensorStateMask || (exports.SensorStateMask = {}));

    /*
       Sensor configuration status code (represents the status due to user actions)
    */

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
    })(exports.StreamTypeCode || (exports.StreamTypeCode = {}));

    /*
       Time unit interval
    */

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

    (function (UserTypeCode) {
        // Undefined [0] 
        UserTypeCode[UserTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
        // System administrator has access to all accounts and permissions to perform all actions [1] 
        UserTypeCode[UserTypeCode["SYSADMIN"] = 1] = "SYSADMIN";
        // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
        UserTypeCode[UserTypeCode["SUPPORT"] = 2] = "SUPPORT";
        // System user - has access to specific accounts with role based access control [4] 
        UserTypeCode[UserTypeCode["USER"] = 4] = "USER";
        // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
        UserTypeCode[UserTypeCode["ACCOUNT_SERVICE"] = 5] = "ACCOUNT_SERVICE";
    })(exports.UserTypeCode || (exports.UserTypeCode = {}));

    /*
       Sensor visual quality code
    */

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
        function AccountsServiceExportRequest(name, type, status, sort, format, fields) {
            this.name = name;
            this.type = type;
            this.status = status;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
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
        function AccountsServiceTreeRequest(id, sensors) {
            this.id = id;
            this.sensors = sensors;
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
        function AppliancesServiceExportRequest(folderId, subFolders, search, status, sort, format, fields) {
            this.folderId = folderId;
            this.subFolders = subFolders;
            this.search = search;
            this.status = status;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
        }
        return AppliancesServiceExportRequest;
    }());

    /*
    */
    var AppliancesServiceFindRequest = /** @class */ (function () {
        function AppliancesServiceFindRequest(folderId, subFolders, search, status, sort, page, pageSize) {
            this.folderId = folderId;
            this.subFolders = subFolders;
            this.search = search;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return AppliancesServiceFindRequest;
    }());

    /*
    */
    var AppliancesServiceFindSensorsRequest = /** @class */ (function () {
        function AppliancesServiceFindSensorsRequest(id, search, type, status, stream, sort, page, pageSize, format, fields) {
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
        function AuditLogServiceExportRequest(userId, from, to, itemType, sort, format, fields) {
            this.userId = userId;
            this.from = from;
            this.to = to;
            this.itemType = itemType;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
        }
        return AuditLogServiceExportRequest;
    }());

    /*
    */
    var AuditLogServiceFindRequest = /** @class */ (function () {
        function AuditLogServiceFindRequest(userId, from, to, itemType, sort, page, pageSize) {
            this.userId = userId;
            this.from = from;
            this.to = to;
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
    var CalendarsServiceFolderIdRequest = /** @class */ (function () {
        function CalendarsServiceFolderIdRequest(folderId) {
            this.folderId = folderId;
        }
        return CalendarsServiceFolderIdRequest;
    }());

    /*
    */
    var CalendarsServiceImportRequest = /** @class */ (function () {
        function CalendarsServiceImportRequest(content, folderId) {
            this.content = content;
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
    var EmptyRequest = /** @class */ (function () {
        function EmptyRequest() {
        }
        return EmptyRequest;
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
    var EventsServiceCreateRequest = /** @class */ (function () {
        function EventsServiceCreateRequest(body) {
            this.body = body;
        }
        return EventsServiceCreateRequest;
    }());

    /*
    */
    var EventsServiceExportRequest = /** @class */ (function () {
        function EventsServiceExportRequest(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields) {
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
        function EventsServiceFindRequest(folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
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
        return EventsServiceFindRequest;
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
    var FoldersServiceChangeGeoAreaRequest = /** @class */ (function () {
        function FoldersServiceChangeGeoAreaRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeGeoAreaRequest;
    }());

    /*
    */
    var FoldersServiceChangeGeoLocationRequest = /** @class */ (function () {
        function FoldersServiceChangeGeoLocationRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeGeoLocationRequest;
    }());

    /*
    */
    var FoldersServiceChangeNameRequest = /** @class */ (function () {
        function FoldersServiceChangeNameRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeNameRequest;
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
    var FoldersServiceChangeTimezoneRequest = /** @class */ (function () {
        function FoldersServiceChangeTimezoneRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeTimezoneRequest;
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
        function FoldersServiceExportRequest(id, search, parentId, sort, format, fields) {
            this.id = id;
            this.search = search;
            this.parentId = parentId;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
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
        function IntegrationActionsFindRequest(search) {
            this.search = search;
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
    var IntegrationsServiceCreateRequest = /** @class */ (function () {
        function IntegrationsServiceCreateRequest(body) {
            this.body = body;
        }
        return IntegrationsServiceCreateRequest;
    }());

    /*
    */
    var IntegrationsServiceFindRequest = /** @class */ (function () {
        function IntegrationsServiceFindRequest(search, type) {
            this.search = search;
            this.type = type;
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
    var QueryResponseOfFolder = /** @class */ (function (_super) {
        __extends(QueryResponseOfFolder, _super);
        function QueryResponseOfFolder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfFolder;
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
    var QueryResponseOfIntegrationTarget = /** @class */ (function (_super) {
        __extends(QueryResponseOfIntegrationTarget, _super);
        function QueryResponseOfIntegrationTarget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfIntegrationTarget;
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
    var QueryResponseOfUser = /** @class */ (function (_super) {
        __extends(QueryResponseOfUser, _super);
        function QueryResponseOfUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfUser;
    }(QueryResponse));

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
    var ReportsServiceUpdateRequest = /** @class */ (function () {
        function ReportsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return ReportsServiceUpdateRequest;
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
    var RulesServiceCreateRequest = /** @class */ (function () {
        function RulesServiceCreateRequest(body) {
            this.body = body;
        }
        return RulesServiceCreateRequest;
    }());

    /*
    */
    var RulesServiceExportRequest = /** @class */ (function () {
        function RulesServiceExportRequest(folderId, sensorId, search, behaviorType, severity, sort, format, fields) {
            this.folderId = folderId;
            this.sensorId = sensorId;
            this.search = search;
            this.behaviorType = behaviorType;
            this.severity = severity;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
        }
        return RulesServiceExportRequest;
    }());

    /*
    */
    var RulesServiceFindAnomalyRequest = /** @class */ (function () {
        function RulesServiceFindAnomalyRequest(folderId, sensorId, search, severity, sort, page, pageSize) {
            this.folderId = folderId;
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
        function RulesServiceFindRequest(folderId, sensorId, search, behaviorType, severity, sort, page, pageSize) {
            this.folderId = folderId;
            this.sensorId = sensorId;
            this.search = search;
            this.behaviorType = behaviorType;
            this.severity = severity;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return RulesServiceFindRequest;
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
        function ScheduledReportsServiceFindRequest(search) {
            this.search = search;
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
    var SchedulesServiceFolderIdRequest = /** @class */ (function () {
        function SchedulesServiceFolderIdRequest(folderId) {
            this.folderId = folderId;
        }
        return SchedulesServiceFolderIdRequest;
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
        function SearchEventCountRequest(id, sensorId, objectType, from, to, interval, labelFormat) {
            this.id = id;
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
    var SearchEventExportRequest = /** @class */ (function () {
        function SearchEventExportRequest(id, sensorId, objectType, from, to, sort, format, fields) {
            this.id = id;
            this.sensorId = sensorId;
            this.objectType = objectType;
            this.from = from;
            this.to = to;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
        }
        return SearchEventExportRequest;
    }());

    /*
    */
    var SearchEventFindRequest = /** @class */ (function () {
        function SearchEventFindRequest(id, sensorId, objectType, from, to, sort, page, pageSize) {
            this.id = id;
            this.sensorId = sensorId;
            this.objectType = objectType;
            this.from = from;
            this.to = to;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return SearchEventFindRequest;
    }());

    /*
    */
    var SearchEventIdRequest = /** @class */ (function () {
        function SearchEventIdRequest(id, eventId) {
            this.id = id;
            this.eventId = eventId;
        }
        return SearchEventIdRequest;
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
        function SearchSessionIdRequest(id) {
            this.id = id;
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
    var SensorsServiceAttachRequest = /** @class */ (function () {
        function SensorsServiceAttachRequest(id, applianceId) {
            this.id = id;
            this.applianceId = applianceId;
        }
        return SensorsServiceAttachRequest;
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
    var SensorsServiceExportRequest = /** @class */ (function () {
        function SensorsServiceExportRequest(folderId, subFolders, search, type, status, stream, sort, format, fields) {
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
        return SensorsServiceExportRequest;
    }());

    /*
    */
    var SensorsServiceFindRequest = /** @class */ (function () {
        function SensorsServiceFindRequest(folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
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
        return SensorsServiceFindRequest;
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
    var SensorsServiceUpdateRequest = /** @class */ (function () {
        function SensorsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SensorsServiceUpdateRequest;
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
        function SysAccountImportRequest(password) {
            this.password = password;
        }
        return SysAccountImportRequest;
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
        function SysAppliancesServiceFindRequest(accountId, search, status, sort, page, pageSize) {
            this.accountId = accountId;
            this.search = search;
            this.status = status;
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
        function UsersServiceExportRequest(search, type, status, sort, format, fields) {
            this.search = search;
            this.type = type;
            this.status = status;
            this.sort = sort;
            this.format = format;
            this.fields = fields;
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
        function RestUtil(http$1) {
            this.http = http$1;
            // Set headers
            this.headers = new http.HttpHeaders().set('Content-Type', 'application/json');
        }
        /**
         * Download is HTTP GET action but the content is blob
         */
        RestUtil.prototype.download = function (fileName, url) {
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            var ext = 'json';
            params.forEach(function (p) {
                var arr = p.split('=');
                if (arr.length > 1) {
                    if (arr[0].toLowerCase() === 'format') {
                        ext = arr[1];
                    }
                }
            });
            var downloadLink = fileName + '.' + ext;
            return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe(function (data) {
                var downloadURL = window.URL.createObjectURL(data);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = downloadLink;
                link.click();
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
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
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
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
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
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
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
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
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
        /** @nocollapse */ RestUtil.ɵfac = function RestUtil_Factory(t) { return new (t || RestUtil)(core["ɵɵinject"](http.HttpClient)); };
        /** @nocollapse */ RestUtil.ɵprov = core["ɵɵdefineInjectable"]({ token: RestUtil, factory: RestUtil.ɵfac });
        return RestUtil;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RestUtil, [{
            type: core.Injectable
        }], function () { return [{ type: http.HttpClient }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of accounts and filter
         * @Return: StreamContent
         */
        AccountsService.prototype.exportFormat = function (name, type, status, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["accounts", this.baseUrl + "/export"], params));
        };
        /**
         * Get single account by id
         * @Return: EntityResponse<Account>
         */
        AccountsService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
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
         * @Return: EntityResponse<Account> The changed account
         */
        AccountsService.prototype.changeGeoLocation = function (body) {
            return this.rest.put(this.baseUrl + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
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
        /** @nocollapse */ AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ AccountsService.ɵprov = core["ɵɵdefineInjectable"]({ token: AccountsService, factory: AccountsService.ɵfac });
        return AccountsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AccountsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/results"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/events"], params));
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
        /** @nocollapse */ AnomalyService.ɵfac = function AnomalyService_Factory(t) { return new (t || AnomalyService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ AnomalyService.ɵprov = core["ɵɵdefineInjectable"]({ token: AnomalyService, factory: AnomalyService.ɵfac });
        return AnomalyService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AnomalyService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
        AppliancesService.prototype.find = function (folderId, subFolders, search, status, sort, page, pageSize) {
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of appliances and filter
         * @Return: StreamContent
         */
        AppliancesService.prototype.exportFormat = function (folderId, subFolders, search, status, sort, format, fields) {
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (format != null) {
                params.push("format=" + format);
            }
            if (fields != null) {
                params.push("fields=" + fields);
            }
            return (_a = this.rest).download.apply(_a, __spread(["appliances", this.baseUrl + "/export"], params));
        };
        /**
         * Get single appliance by id
         * @Return: EntityResponse<Appliance>
         */
        AppliancesService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get all sensors assigned to the appliance (getSensors)
         * @Return: QueryResponse<Sensor>
         */
        AppliancesService.prototype.findApplianceSensors = function (id, search, type, status, stream, sort, page, pageSize, format, fields) {
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/sensors"], params));
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
         * Send reset credentials command to the appliance (reset to the factory default password)
         * @Return:  ActionResponse
         */
        AppliancesService.prototype.resetPassword = function (id) {
            return this.rest.post(this.baseUrl + "/" + id + "/reset-password", null);
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/commands"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/status/overtime"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/kpi/overtime"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
        };
        /** @nocollapse */ AppliancesService.ɵfac = function AppliancesService_Factory(t) { return new (t || AppliancesService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ AppliancesService.ɵprov = core["ɵɵdefineInjectable"]({ token: AppliancesService, factory: AppliancesService.ɵfac });
        return AppliancesService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AppliancesService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
        AuditLogService.prototype.find = function (userId, from, to, itemType, sort, page, pageSize) {
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of audit log entries and filter
         * @Return: StreamContent
         */
        AuditLogService.prototype.exportFormat = function (userId, from, to, itemType, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["auditlog", this.baseUrl + "/export"], params));
        };
        /**
         * Get single audit log entry by id
         * @Return: EntityResponse<Appliance>
         */
        AuditLogService.prototype.get = function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /** @nocollapse */ AuditLogService.ɵfac = function AuditLogService_Factory(t) { return new (t || AuditLogService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ AuditLogService.ɵprov = core["ɵɵdefineInjectable"]({ token: AuditLogService, factory: AuditLogService.ɵfac });
        return AuditLogService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AuditLogService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Find all calendars for a specified level in the folder hierarchy
         * This method returns all the calendars of the current folder and all parent folders
         * @Return: EntitiesResponse<Calendar>
         */
        CalendarsService.prototype.getFolderCalendars = function (folderId) {
            return this.rest.get(this.baseUrl + "/folder/" + folderId);
        };
        /**
         * Import calendar from outlook CSV, ICS or iCal file
         * @Return: ActionResponse
         */
        CalendarsService.prototype.import = function (folderId) {
            var _a;
            var params = new Array();
            if (folderId != null) {
                params.push("folderId=" + folderId);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/import", null], params));
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
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/importUrl", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        /** @nocollapse */ CalendarsService.ɵfac = function CalendarsService_Factory(t) { return new (t || CalendarsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ CalendarsService.ɵprov = core["ɵɵdefineInjectable"]({ token: CalendarsService, factory: CalendarsService.ɵfac });
        return CalendarsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CalendarsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
         * Change event workflow status
         * @Return: EntityResponse<Event>
         */
        EventsService.prototype.changeStatus = function (id, status) {
            return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
        };
        /**
         * Set event image path
         * @Return: EntityResponse<Event>
         */
        EventsService.prototype.setImagePath = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/imagePath", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Set event clip path
         * @Return: EntityResponse<Event>
         */
        EventsService.prototype.setClipPath = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/clipPath", typeof body === 'object' ? JSON.stringify(body) : body);
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
        };
        /**
         * Find events by filters
         * @Return: QueryResponse<Event>
         */
        EventsService.prototype.find = function (folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
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
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of events and filter
         * @Return: StreamContent
         */
        EventsService.prototype.exportFormat = function (folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["events", this.baseUrl + "/export"], params));
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
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/area", null], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/overtime"], params));
        };
        /** @nocollapse */ EventsService.ɵfac = function EventsService_Factory(t) { return new (t || EventsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ EventsService.ɵprov = core["ɵɵdefineInjectable"]({ token: EventsService, factory: EventsService.ɵfac });
        return EventsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EventsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
         * Change folder name
         * @Return: EntityResponse<Folder>
         */
        FoldersService.prototype.changeName = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change folder parent id
         * @Return: EntityResponse<Folder>
         */
        FoldersService.prototype.changeParent = function (id, parentId) {
            return this.rest.put(this.baseUrl + "/" + id + "/parent/" + parentId, null);
        };
        /**
         * Change folder geo-area (polygon)
         * @Return: EntityResponse<Folder>
         */
        FoldersService.prototype.changeGeoArea = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change folder geo-location (center)
         * @Return: EntityResponse<Folder>
         */
        FoldersService.prototype.changeGeoLocation = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change folder timezone
         * @Return: EntityResponse<Folder>
         */
        FoldersService.prototype.changeTimezone = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/timezone", typeof body === 'object' ? JSON.stringify(body) : body);
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of folders and filter
         * @Return: StreamContent
         */
        FoldersService.prototype.exportFormat = function (id, search, parentId, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["folders", this.baseUrl + "/export"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/folders"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/items"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/tree"], params));
        };
        /**
         * Get default geo bounds
         * @Return: EntityResponse<Coordinate> The folder location
         */
        FoldersService.prototype.getDefaultLocation = function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
        };
        /** @nocollapse */ FoldersService.ɵfac = function FoldersService_Factory(t) { return new (t || FoldersService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ FoldersService.ɵprov = core["ɵɵdefineInjectable"]({ token: FoldersService, factory: FoldersService.ɵfac });
        return FoldersService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FoldersService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
        /** @nocollapse */ GeoService.ɵfac = function GeoService_Factory(t) { return new (t || GeoService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ GeoService.ɵprov = core["ɵɵdefineInjectable"]({ token: GeoService, factory: GeoService.ɵfac });
        return GeoService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](GeoService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
        /** @nocollapse */ HealthCheckService.ɵfac = function HealthCheckService_Factory(t) { return new (t || HealthCheckService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ HealthCheckService.ɵprov = core["ɵɵdefineInjectable"]({ token: HealthCheckService, factory: HealthCheckService.ɵfac });
        return HealthCheckService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](HealthCheckService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
         * Create new integration target
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
        };
        /**
         * Find integration targets by filters
         * @Return: EntitiesResponse<IntegrationTarget>
         */
        IntegrationsService.prototype.find = function (search, type) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/actions/list"], params));
        };
        /**
         * Find integration actions by filters
         * @Return: EntitiesResponse<IntegrationAction>
         */
        IntegrationsService.prototype.findActions = function (search) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/actions"], params));
        };
        /**
         * Find all integration actions for a specified level in the folder hierarchy
         * @Return: EntitiesResponse<IntegrationAction>
         */
        IntegrationsService.prototype.getFolderActions = function (folderId) {
            return this.rest.get(this.baseUrl + "/actions/folder/" + folderId);
        };
        /** @nocollapse */ IntegrationsService.ɵfac = function IntegrationsService_Factory(t) { return new (t || IntegrationsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ IntegrationsService.ɵprov = core["ɵɵdefineInjectable"]({ token: IntegrationsService, factory: IntegrationsService.ɵfac });
        return IntegrationsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](IntegrationsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /** @nocollapse */ ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ ReportsService.ɵprov = core["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac });
        return ReportsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ReportsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).put.apply(_a, __spread([this.baseUrl + "/enable", null], params));
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
            return (_a = this.rest).put.apply(_a, __spread([this.baseUrl + "/disable", null], params));
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
         * Get rules by list of ids
         * @Return: EntitiesResponse<Rule>
         */
        RulesService.prototype.list = function (id) {
            var _a;
            var params = new Array();
            if (id != null) {
                params.push("id=" + id);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
        };
        /**
         * Find rules by filters
         * @Return: QueryResponse<Rule>
         */
        RulesService.prototype.find = function (folderId, sensorId, search, behaviorType, severity, sort, page, pageSize) {
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
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of rules and filter
         * @Return: StreamContent
         */
        RulesService.prototype.exportFormat = function (folderId, sensorId, search, behaviorType, severity, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["rules", this.baseUrl + "/export"], params));
        };
        /**
         * Find anomaly rules by filters
         * @Return: QueryResponse<Rule>
         */
        RulesService.prototype.findAnomalyRules = function (folderId, sensorId, search, severity, sort, page, pageSize) {
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/anomaly"], params));
        };
        /**
         * Get rules specifications available by account features
         * @Return: EntitiesResponse<RuleSpec>
         */
        RulesService.prototype.getSpecs = function () {
            return this.rest.get(this.baseUrl + "/spec");
        };
        /** @nocollapse */ RulesService.ɵfac = function RulesService_Factory(t) { return new (t || RulesService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ RulesService.ɵprov = core["ɵɵdefineInjectable"]({ token: RulesService, factory: RulesService.ɵfac });
        return RulesService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](RulesService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
        };
        /**
         * Find scheduled report definitions by filters
         * @Return: QueryResponse<ScheduledReport>
         */
        ScheduledReportsService.prototype.find = function (search) {
            var _a;
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /** @nocollapse */ ScheduledReportsService.ɵfac = function ScheduledReportsService_Factory(t) { return new (t || ScheduledReportsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ ScheduledReportsService.ɵprov = core["ɵɵdefineInjectable"]({ token: ScheduledReportsService, factory: ScheduledReportsService.ɵfac });
        return ScheduledReportsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ScheduledReportsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Find all schedules for a specified level in the folder hierarchy
         * This method returns all the schedules of the current folder and all parent folders
         * @Return: EntitiesResponse<Schedule>
         */
        SchedulesService.prototype.getFolderSchedules = function (folderId) {
            return this.rest.get(this.baseUrl + "/folder/" + folderId);
        };
        /** @nocollapse */ SchedulesService.ɵfac = function SchedulesService_Factory(t) { return new (t || SchedulesService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SchedulesService.ɵprov = core["ɵɵdefineInjectable"]({ token: SchedulesService, factory: SchedulesService.ɵfac });
        return SchedulesService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SchedulesService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Perform metadata search by the search definition
         * @Return: EntityResponse<SearchStatus>
         * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
         * Please provide search id to query definition and use the same id for the web socket
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
         * Get search session status
         * @Return: EntityResponse<SearchStatus>
         */
        SearchService.prototype.getSearchStatus = function (id) {
            return this.rest.get(this.baseUrl + "/sessions/" + id + "/status");
        };
        /**
         * Cancel search session
         * @Return: ActionResponse
         */
        SearchService.prototype.cancelSearchSession = function (id) {
            return this.rest.delete(this.baseUrl + "/sessions/" + id);
        };
        /**
         * Get single search event item by id and sessionId
         * @Return: EntityResponse<SearchDefinition>
         */
        SearchService.prototype.getEvent = function (id, eventId) {
            return this.rest.get(this.baseUrl + "/sessions/" + id + "/event/" + eventId);
        };
        /**
         * Get search event image [response content type: image/jpeg]
         * @Return: StreamingOutput of the image
         */
        SearchService.prototype.getEventImage = function (id, eventId) {
            return this.rest.download("search", this.baseUrl + "/sessions/" + id + "/image/" + eventId);
        };
        /**
         * Find list of search events by filter
         * @Return: EntitiesResponse<SearchDefinition>
         */
        SearchService.prototype.findEvents = function (id, sensorId, objectType, from, to, sort, page, pageSize) {
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/sessions/" + id + "/find"], params));
        };
        /**
         * Export list of search events by filter
         * @Return: StreamContent
         */
        SearchService.prototype.exportEvents = function (id, sensorId, objectType, from, to, sort, format, fields) {
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (format != null) {
                params.push("format=" + format);
            }
            if (fields != null) {
                params.push("fields=" + fields);
            }
            return (_a = this.rest).download.apply(_a, __spread(["search", this.baseUrl + "/sessions/" + id + "/export"], params));
        };
        /**
         * Get events count overtime for all events in the system
         * @Return: EntityResponse<EventCountTimeSeries>
         */
        SearchService.prototype.getEventsCountOvertime = function (id, sensorId, objectType, from, to, interval, labelFormat) {
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/sessions/" + id + "/overtime"], params));
        };
        /** @nocollapse */ SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SearchService.ɵprov = core["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac });
        return SearchService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SearchService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).put.apply(_a, __spread([this.baseUrl + "/" + id + "/fov", typeof body === 'object' ? JSON.stringify(body) : body], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
        };
        /**
         * Find sensors by filters
         * @Return: QueryResponse<Sensor>
         */
        SensorsService.prototype.find = function (folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
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
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of sensors and filter
         * @Return: StreamContent
         */
        SensorsService.prototype.exportFormat = function (folderId, subFolders, search, type, status, stream, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["sensors", this.baseUrl + "/export"], params));
        };
        /**
         * Get sensor reference image [response content type: image/jpeg]
         * @Return: StreamingOutput of the reference image
         */
        SensorsService.prototype.getRefImage = function (id) {
            return this.rest.download("sensors", this.baseUrl + "/" + id + "/ref-image");
        };
        /**
         * Set sensor reference image [put binary image in body with content type: image/jpeg]
         * @Return: ActionResponse
         */
        SensorsService.prototype.setRefImage = function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/ref-image", typeof body === 'object' ? JSON.stringify(body) : body);
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/status/overtime"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-type"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-stream"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
        };
        /** @nocollapse */ SensorsService.ɵfac = function SensorsService_Factory(t) { return new (t || SensorsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SensorsService.ɵprov = core["ɵɵdefineInjectable"]({ token: SensorsService, factory: SensorsService.ɵfac });
        return SensorsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SensorsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).put.apply(_a, __spread([this.baseUrl + "/" + id + "/groups/{groups}", null], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/list"], params));
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Get account hierarchy
         * @Return: EntityResponse<TreeNode>
         */
        SysAccountsService.prototype.tree = function (id, sensors) {
            var _a;
            var params = new Array();
            if (sensors != null) {
                params.push("sensors=" + sensors);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/tree"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/folders"], params));
        };
        /**
         * Export list of accounts and filter
         * @Return: StreamContent
         */
        SysAccountsService.prototype.exportFormat = function (name, type, status, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["sys-accounts", this.baseUrl + "/export"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/statistics/month"], params));
        };
        /**
         * Get accounts month report - current channels and devices per account compared to previous month
         * @Return: EntitiesResponse<AccountStatSummary>
         */
        SysAccountsService.prototype.getAccountsMonthReport = function () {
            return this.rest.get(this.baseUrl + "/statistics/month/report");
        };
        /** @nocollapse */ SysAccountsService.ɵfac = function SysAccountsService_Factory(t) { return new (t || SysAccountsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysAccountsService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysAccountsService, factory: SysAccountsService.ɵfac });
        return SysAccountsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysAccountsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
        SysAppliancesService.prototype.find = function (accountId, search, status, sort, page, pageSize) {
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of appliances and filter
         * @Return: StreamContent
         */
        SysAppliancesService.prototype.exportFormat = function (folderId, subFolders, search, status, sort, format, fields) {
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
            if (sort != null) {
                params.push("sort=" + sort);
            }
            if (format != null) {
                params.push("format=" + format);
            }
            if (fields != null) {
                params.push("fields=" + fields);
            }
            return (_a = this.rest).download.apply(_a, __spread(["sys-appliances", this.baseUrl + "/export"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/commands"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/status/overtime"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/kpi/overtime"], params));
        };
        /**
         * Aggregate appliances count distribution by status
         * @Return:  EntityResponse<DistributionOfLong>
         */
        SysAppliancesService.prototype.getAppliancesCountByStatus = function (folderId, subFolders) {
            var _a;
            var params = new Array();
            if (folderId != null) {
                params.push("folderId=" + folderId);
            }
            if (subFolders != null) {
                params.push("subFolders=" + subFolders);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
        };
        /** @nocollapse */ SysAppliancesService.ɵfac = function SysAppliancesService_Factory(t) { return new (t || SysAppliancesService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysAppliancesService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysAppliancesService, factory: SysAppliancesService.ɵfac });
        return SysAppliancesService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysAppliancesService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/templates"], params));
        };
        /** @nocollapse */ SysConfigurationsService.ɵfac = function SysConfigurationsService_Factory(t) { return new (t || SysConfigurationsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysConfigurationsService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysConfigurationsService, factory: SysConfigurationsService.ɵfac });
        return SysConfigurationsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysConfigurationsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + accountId + "/"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + accountId + "/overtime"], params));
        };
        /** @nocollapse */ SysEventsService.ɵfac = function SysEventsService_Factory(t) { return new (t || SysEventsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysEventsService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysEventsService, factory: SysEventsService.ɵfac });
        return SysEventsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysEventsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /** @nocollapse */ SysFeaturesGroupsService.ɵfac = function SysFeaturesGroupsService_Factory(t) { return new (t || SysFeaturesGroupsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysFeaturesGroupsService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysFeaturesGroupsService, factory: SysFeaturesGroupsService.ɵfac });
        return SysFeaturesGroupsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysFeaturesGroupsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /** @nocollapse */ SysFeaturesService.ɵfac = function SysFeaturesService_Factory(t) { return new (t || SysFeaturesService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysFeaturesService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysFeaturesService, factory: SysFeaturesService.ɵfac });
        return SysFeaturesService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysFeaturesService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/token", null], params));
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
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/password", null], params));
        };
        /** @nocollapse */ SysKeysService.ɵfac = function SysKeysService_Factory(t) { return new (t || SysKeysService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysKeysService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysKeysService, factory: SysKeysService.ɵfac });
        return SysKeysService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysKeysService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/" + id + "/status/overtime"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-type"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-stream"], params));
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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
        };
        /** @nocollapse */ SysSensorsService.ɵfac = function SysSensorsService_Factory(t) { return new (t || SysSensorsService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysSensorsService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysSensorsService, factory: SysSensorsService.ɵfac });
        return SysSensorsService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysSensorsService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
         * Get system license
         * @Return: EntityResponse<License>
         */
        SysSystemService.prototype.getLicense = function () {
            return this.rest.get(this.baseUrl + "/license");
        };
        /**
         * Import license data from file
         * @Return: ActionResponse
         */
        SysSystemService.prototype.importLicense = function () {
            return this.rest.post(this.baseUrl + "/license", null);
        };
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
            return (_a = this.rest).download.apply(_a, __spread(["sys-system", this.baseUrl + "/accounts/export"], params));
        };
        /**
         * Import account configuration data from byte array (zip content)
         * @Return: ActionResponse
         */
        SysSystemService.prototype.importAccountData = function () {
            return this.rest.post(this.baseUrl + "/accounts/import", null);
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
        SysSystemService.prototype.importConfigurations = function () {
            return this.rest.post(this.baseUrl + "/configurations/import", null);
        };
        /**
         * Backup entire system (configurations, users and accounts)
         * @Return: StreamingOutput of the content (zip)
         */
        SysSystemService.prototype.backupSystem = function () {
            return this.rest.download("sys-system", this.baseUrl + "/backup");
        };
        /**
         * Restore entire system (zip content)
         * @Return: ActionResponse
         */
        SysSystemService.prototype.restoreSystem = function () {
            return this.rest.post(this.baseUrl + "/restore", null);
        };
        /** @nocollapse */ SysSystemService.ɵfac = function SysSystemService_Factory(t) { return new (t || SysSystemService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysSystemService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysSystemService, factory: SysSystemService.ɵfac });
        return SysSystemService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysSystemService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return this.rest.post(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
        };
        /**
         * Update user roles in his accounts (merge with existing roles)
         * @Return: EntityResponse<User>
         */
        SysUsersService.prototype.mergeRoles = function (id, roles) {
            return this.rest.put(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of users and filter
         * @Return: StreamContent
         */
        SysUsersService.prototype.exportFormat = function (search, type, status, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["sys-users", this.baseUrl + "/export"], params));
        };
        /** @nocollapse */ SysUsersService.ɵfac = function SysUsersService_Factory(t) { return new (t || SysUsersService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ SysUsersService.ɵprov = core["ɵɵdefineInjectable"]({ token: SysUsersService, factory: SysUsersService.ɵfac });
        return SysUsersService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SysUsersService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/login/verify"], params));
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
        /** @nocollapse */ UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ UserService.ɵprov = core["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac });
        return UserService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UserService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * @Return: ActionResponse
         */
        UsersService.prototype.invite = function (body) {
            return this.rest.post(this.baseUrl + "/invite", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Resend invitation to an existing user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
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
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        /**
         * Export list of users and filter
         * @Return: StreamContent
         */
        UsersService.prototype.exportFormat = function (search, type, status, sort, format, fields) {
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
            return (_a = this.rest).download.apply(_a, __spread(["users", this.baseUrl + "/export"], params));
        };
        /** @nocollapse */ UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(core["ɵɵinject"]('config'), core["ɵɵinject"](RestUtil)); };
        /** @nocollapse */ UsersService.ɵprov = core["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac });
        return UsersService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](UsersService, [{
            type: core.Injectable
        }], function () { return [{ type: CoreConfig, decorators: [{
                    type: core.Inject,
                    args: ['config']
                }] }, { type: RestUtil }]; }, null); })();

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
    var EventsSocketServiceOpen = /** @class */ (function () {
        function EventsSocketServiceOpen(accountId) {
            this.accountId = accountId;
        }
        return EventsSocketServiceOpen;
    }());

    /*
       @WebSocketMessage
    */
    var FilteredEventsSocketServiceOpen = /** @class */ (function () {
        function FilteredEventsSocketServiceOpen(accountId, sensorId, extSensorId) {
            this.accountId = accountId;
            this.sensorId = sensorId;
            this.extSensorId = extSensorId;
        }
        return FilteredEventsSocketServiceOpen;
    }());

    /*
       @WebSocketMessage
    */
    var HealthSocketServiceOpen = /** @class */ (function () {
        function HealthSocketServiceOpen(accountId) {
            this.accountId = accountId;
        }
        return HealthSocketServiceOpen;
    }());

    /*
       @WebSocketMessage
       This message is pushed to the client upon any new event in the registered account
    */
    var SocketEventNotification = /** @class */ (function (_super) {
        __extends(SocketEventNotification, _super);
        function SocketEventNotification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SocketEventNotification;
    }(WebSocketMessageHeader));

    /*
       @WebSocketMessage
       This message is pushed to the client upon any sensor health status change in the registered account
    */
    var SocketHealthStatusNotification = /** @class */ (function (_super) {
        __extends(SocketHealthStatusNotification, _super);
        function SocketHealthStatusNotification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SocketHealthStatusNotification;
    }(WebSocketMessageHeader));

    var CoreLibModule = /** @class */ (function () {
        function CoreLibModule() {
        }
        CoreLibModule.forRoot = function (config) {
            // console.log(config);
            return {
                ngModule: CoreLibModule,
                providers: __spread([
                    { provide: 'config', useValue: config },
                    RestUtil
                ], Services)
            };
        };
        /** @nocollapse */ CoreLibModule.ɵmod = core["ɵɵdefineNgModule"]({ type: CoreLibModule });
        /** @nocollapse */ CoreLibModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[common.CommonModule, http.HttpClientModule]] });
        return CoreLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](CoreLibModule, { imports: [common.CommonModule, http.HttpClientModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CoreLibModule, [{
            type: core.NgModule,
            args: [{
                    imports: [common.CommonModule, http.HttpClientModule]
                }]
        }], null, null); })();

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
    exports.AccountsServiceResetRequest = AccountsServiceResetRequest;
    exports.AccountsServiceTreeRequest = AccountsServiceTreeRequest;
    exports.AccountsServiceUpdateRequest = AccountsServiceUpdateRequest;
    exports.ActionResponse = ActionResponse;
    exports.Agent = Agent;
    exports.AnalysisResult = AnalysisResult;
    exports.AnomalyEventInfo = AnomalyEventInfo;
    exports.AnomalyService = AnomalyService;
    exports.AnomalyServiceFindEventsRequest = AnomalyServiceFindEventsRequest;
    exports.AnomalyServiceFindRequest = AnomalyServiceFindRequest;
    exports.AnomalyServiceUpdateRequest = AnomalyServiceUpdateRequest;
    exports.AnomalyServiceUpdateRuleRequest = AnomalyServiceUpdateRuleRequest;
    exports.ApiKey = ApiKey;
    exports.ApiKeyIdRequest = ApiKeyIdRequest;
    exports.Appliance = Appliance;
    exports.ApplianceCapabilities = ApplianceCapabilities;
    exports.ApplianceCommand = ApplianceCommand;
    exports.ApplianceCommandIdRequest = ApplianceCommandIdRequest;
    exports.ApplianceConfiguration = ApplianceConfiguration;
    exports.ApplianceDiscovery = ApplianceDiscovery;
    exports.ApplianceIdAgentIdRequest = ApplianceIdAgentIdRequest;
    exports.ApplianceIdRequest = ApplianceIdRequest;
    exports.ApplianceKpiDataPoint = ApplianceKpiDataPoint;
    exports.ApplianceKpiTimeSeries = ApplianceKpiTimeSeries;
    exports.ApplianceKpiTimestamped = ApplianceKpiTimestamped;
    exports.ApplianceRegistration = ApplianceRegistration;
    exports.ApplianceServiceDeleteCommandRequest = ApplianceServiceDeleteCommandRequest;
    exports.ApplianceStatus = ApplianceStatus;
    exports.ApplianceStatusTimeSeries = ApplianceStatusTimeSeries;
    exports.ApplianceStatusTimestamped = ApplianceStatusTimestamped;
    exports.AppliancesCountRequest = AppliancesCountRequest;
    exports.AppliancesService = AppliancesService;
    exports.AppliancesServiceAddSensorRequest = AppliancesServiceAddSensorRequest;
    exports.AppliancesServiceChangeConfigurationRequest = AppliancesServiceChangeConfigurationRequest;
    exports.AppliancesServiceChangeFolderRequest = AppliancesServiceChangeFolderRequest;
    exports.AppliancesServiceChangeMachineIdRequest = AppliancesServiceChangeMachineIdRequest;
    exports.AppliancesServiceChangeNameRequest = AppliancesServiceChangeNameRequest;
    exports.AppliancesServiceExportRequest = AppliancesServiceExportRequest;
    exports.AppliancesServiceFindRequest = AppliancesServiceFindRequest;
    exports.AppliancesServiceFindSensorsRequest = AppliancesServiceFindSensorsRequest;
    exports.AppliancesServiceGetCommandsRequest = AppliancesServiceGetCommandsRequest;
    exports.AppliancesServiceRegisterApplianceRequest = AppliancesServiceRegisterApplianceRequest;
    exports.AppliancesServiceSetCommandRequest = AppliancesServiceSetCommandRequest;
    exports.AppliancesServiceStatusOvertimeRequest = AppliancesServiceStatusOvertimeRequest;
    exports.AppliancesServiceUpdateApplianceRequest = AppliancesServiceUpdateApplianceRequest;
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
    exports.CalendarsServiceFolderIdRequest = CalendarsServiceFolderIdRequest;
    exports.CalendarsServiceImportRequest = CalendarsServiceImportRequest;
    exports.CalendarsServiceImportUrlRequest = CalendarsServiceImportUrlRequest;
    exports.CalendarsServiceUpdateRequest = CalendarsServiceUpdateRequest;
    exports.ChangeGeoAreaRequest = ChangeGeoAreaRequest;
    exports.ChangeGeoLocationRequest = ChangeGeoLocationRequest;
    exports.ChangePasswordRequest = ChangePasswordRequest;
    exports.ComponentConfiguration = ComponentConfiguration;
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
    exports.Dimension = Dimension;
    exports.DiskInfo = DiskInfo;
    exports.DistributionOfLong = DistributionOfLong;
    exports.DistributionOfString = DistributionOfString;
    exports.DockerCredentials = DockerCredentials;
    exports.EmptyRequest = EmptyRequest;
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
    exports.EntitiesResponseOfAuditLog = EntitiesResponseOfAuditLog;
    exports.EntitiesResponseOfCalendar = EntitiesResponseOfCalendar;
    exports.EntitiesResponseOfComponentConfiguration = EntitiesResponseOfComponentConfiguration;
    exports.EntitiesResponseOfConfiguration = EntitiesResponseOfConfiguration;
    exports.EntitiesResponseOfDistributionOfLong = EntitiesResponseOfDistributionOfLong;
    exports.EntitiesResponseOfEvent = EntitiesResponseOfEvent;
    exports.EntitiesResponseOfFeature = EntitiesResponseOfFeature;
    exports.EntitiesResponseOfFeaturesGroup = EntitiesResponseOfFeaturesGroup;
    exports.EntitiesResponseOfFolder = EntitiesResponseOfFolder;
    exports.EntitiesResponseOfIntegration = EntitiesResponseOfIntegration;
    exports.EntitiesResponseOfIntegrationAction = EntitiesResponseOfIntegrationAction;
    exports.EntitiesResponseOfReportDefinition = EntitiesResponseOfReportDefinition;
    exports.EntitiesResponseOfRule = EntitiesResponseOfRule;
    exports.EntitiesResponseOfRuleSpec = EntitiesResponseOfRuleSpec;
    exports.EntitiesResponseOfSchedule = EntitiesResponseOfSchedule;
    exports.EntitiesResponseOfScheduledReport = EntitiesResponseOfScheduledReport;
    exports.EntitiesResponseOfSearchDefinition = EntitiesResponseOfSearchDefinition;
    exports.EntitiesResponseOfSearchEvent = EntitiesResponseOfSearchEvent;
    exports.EntitiesResponseOfSensor = EntitiesResponseOfSensor;
    exports.EntitiesResponseOfSensorStatus = EntitiesResponseOfSensorStatus;
    exports.EntityResponse = EntityResponse;
    exports.EntityResponseOfAccount = EntityResponseOfAccount;
    exports.EntityResponseOfApiKey = EntityResponseOfApiKey;
    exports.EntityResponseOfAppliance = EntityResponseOfAppliance;
    exports.EntityResponseOfApplianceAgents = EntityResponseOfApplianceAgents;
    exports.EntityResponseOfApplianceConfiguration = EntityResponseOfApplianceConfiguration;
    exports.EntityResponseOfApplianceDiscovery = EntityResponseOfApplianceDiscovery;
    exports.EntityResponseOfApplianceKpiTimeSeries = EntityResponseOfApplianceKpiTimeSeries;
    exports.EntityResponseOfApplianceStatusTimeSeries = EntityResponseOfApplianceStatusTimeSeries;
    exports.EntityResponseOfAuditLog = EntityResponseOfAuditLog;
    exports.EntityResponseOfCalendar = EntityResponseOfCalendar;
    exports.EntityResponseOfComponentConfiguration = EntityResponseOfComponentConfiguration;
    exports.EntityResponseOfConfiguration = EntityResponseOfConfiguration;
    exports.EntityResponseOfConfigurationTemplate = EntityResponseOfConfigurationTemplate;
    exports.EntityResponseOfConfigurationVersion = EntityResponseOfConfigurationVersion;
    exports.EntityResponseOfCoordinate = EntityResponseOfCoordinate;
    exports.EntityResponseOfDistributionOfLong = EntityResponseOfDistributionOfLong;
    exports.EntityResponseOfEvent = EntityResponseOfEvent;
    exports.EntityResponseOfEventCountTimeSeries = EntityResponseOfEventCountTimeSeries;
    exports.EntityResponseOfFeature = EntityResponseOfFeature;
    exports.EntityResponseOfFeaturesGroup = EntityResponseOfFeaturesGroup;
    exports.EntityResponseOfFolder = EntityResponseOfFolder;
    exports.EntityResponseOfGeoReferenceData = EntityResponseOfGeoReferenceData;
    exports.EntityResponseOfIntegration = EntityResponseOfIntegration;
    exports.EntityResponseOfIntegrationAction = EntityResponseOfIntegrationAction;
    exports.EntityResponseOfLicense = EntityResponseOfLicense;
    exports.EntityResponseOfLoginData = EntityResponseOfLoginData;
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
    exports.EntityResponseOfSensorStatus = EntityResponseOfSensorStatus;
    exports.EntityResponseOfSensorStatusTimeSeries = EntityResponseOfSensorStatusTimeSeries;
    exports.EntityResponseOfTreeNode = EntityResponseOfTreeNode;
    exports.EntityResponseOfUser = EntityResponseOfUser;
    exports.EntityResponseOfUserAccountInfo = EntityResponseOfUserAccountInfo;
    exports.Event = Event;
    exports.EventCountDataPoint = EventCountDataPoint;
    exports.EventCountTimeSeries = EventCountTimeSeries;
    exports.EventIdRequest = EventIdRequest;
    exports.EventIdsRequest = EventIdsRequest;
    exports.EventStatistics = EventStatistics;
    exports.EventsService = EventsService;
    exports.EventsServiceCreateRequest = EventsServiceCreateRequest;
    exports.EventsServiceExportRequest = EventsServiceExportRequest;
    exports.EventsServiceFindInAreaRequest = EventsServiceFindInAreaRequest;
    exports.EventsServiceFindRequest = EventsServiceFindRequest;
    exports.EventsServiceSetClipPathRequest = EventsServiceSetClipPathRequest;
    exports.EventsServiceSetImagePathRequest = EventsServiceSetImagePathRequest;
    exports.EventsServiceSetStatusRequest = EventsServiceSetStatusRequest;
    exports.EventsServiceStatisticsRequest = EventsServiceStatisticsRequest;
    exports.EventsSocketServiceOpen = EventsSocketServiceOpen;
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
    exports.FilteredEventsSocketServiceOpen = FilteredEventsSocketServiceOpen;
    exports.Folder = Folder;
    exports.FolderIdRequest = FolderIdRequest;
    exports.FolderIdsRequest = FolderIdsRequest;
    exports.FoldersService = FoldersService;
    exports.FoldersServiceChangeGeoAreaRequest = FoldersServiceChangeGeoAreaRequest;
    exports.FoldersServiceChangeGeoLocationRequest = FoldersServiceChangeGeoLocationRequest;
    exports.FoldersServiceChangeNameRequest = FoldersServiceChangeNameRequest;
    exports.FoldersServiceChangeParentRequest = FoldersServiceChangeParentRequest;
    exports.FoldersServiceChangeTimezoneRequest = FoldersServiceChangeTimezoneRequest;
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
    exports.HealthCheckService = HealthCheckService;
    exports.HealthSocketServiceOpen = HealthSocketServiceOpen;
    exports.IntegrationAction = IntegrationAction;
    exports.IntegrationActionCreateRequest = IntegrationActionCreateRequest;
    exports.IntegrationActionIdRequest = IntegrationActionIdRequest;
    exports.IntegrationActionIdsRequest = IntegrationActionIdsRequest;
    exports.IntegrationActionUpdateRequest = IntegrationActionUpdateRequest;
    exports.IntegrationActionsFindRequest = IntegrationActionsFindRequest;
    exports.IntegrationActionsFolderRequest = IntegrationActionsFolderRequest;
    exports.IntegrationIdRequest = IntegrationIdRequest;
    exports.IntegrationIdsRequest = IntegrationIdsRequest;
    exports.IntegrationSpec = IntegrationSpec;
    exports.IntegrationTarget = IntegrationTarget;
    exports.IntegrationsService = IntegrationsService;
    exports.IntegrationsServiceCreateRequest = IntegrationsServiceCreateRequest;
    exports.IntegrationsServiceFindRequest = IntegrationsServiceFindRequest;
    exports.IntegrationsServiceUpdateRequest = IntegrationsServiceUpdateRequest;
    exports.License = License;
    exports.LoginData = LoginData;
    exports.LoginParams = LoginParams;
    exports.LongTuple = LongTuple;
    exports.ObjectColor = ObjectColor;
    exports.ObjectInfo = ObjectInfo;
    exports.ObjectInstance = ObjectInstance;
    exports.ObjectTypeNode = ObjectTypeNode;
    exports.OnvifChannel = OnvifChannel;
    exports.Point = Point;
    exports.Preset = Preset;
    exports.QueryResponse = QueryResponse;
    exports.QueryResponseOfAccount = QueryResponseOfAccount;
    exports.QueryResponseOfAnomalyEventInfo = QueryResponseOfAnomalyEventInfo;
    exports.QueryResponseOfAppliance = QueryResponseOfAppliance;
    exports.QueryResponseOfAuditLog = QueryResponseOfAuditLog;
    exports.QueryResponseOfCalendar = QueryResponseOfCalendar;
    exports.QueryResponseOfComponentConfiguration = QueryResponseOfComponentConfiguration;
    exports.QueryResponseOfConfiguration = QueryResponseOfConfiguration;
    exports.QueryResponseOfConfigurationTemplate = QueryResponseOfConfigurationTemplate;
    exports.QueryResponseOfConfigurationVersion = QueryResponseOfConfigurationVersion;
    exports.QueryResponseOfEvent = QueryResponseOfEvent;
    exports.QueryResponseOfFolder = QueryResponseOfFolder;
    exports.QueryResponseOfIntegrationAction = QueryResponseOfIntegrationAction;
    exports.QueryResponseOfIntegrationTarget = QueryResponseOfIntegrationTarget;
    exports.QueryResponseOfReportDefinition = QueryResponseOfReportDefinition;
    exports.QueryResponseOfRule = QueryResponseOfRule;
    exports.QueryResponseOfSchedule = QueryResponseOfSchedule;
    exports.QueryResponseOfSearchDefinition = QueryResponseOfSearchDefinition;
    exports.QueryResponseOfSearchEvent = QueryResponseOfSearchEvent;
    exports.QueryResponseOfSensor = QueryResponseOfSensor;
    exports.QueryResponseOfSensorAnalysisResults = QueryResponseOfSensorAnalysisResults;
    exports.QueryResponseOfTreeItem = QueryResponseOfTreeItem;
    exports.QueryResponseOfUser = QueryResponseOfUser;
    exports.Recurrent = Recurrent;
    exports.RecurrentTimeFrame = RecurrentTimeFrame;
    exports.ReportDefinition = ReportDefinition;
    exports.ReportIdRequest = ReportIdRequest;
    exports.ReportIdsRequest = ReportIdsRequest;
    exports.ReportsService = ReportsService;
    exports.ReportsServiceCreateRequest = ReportsServiceCreateRequest;
    exports.ReportsServiceFindRequest = ReportsServiceFindRequest;
    exports.ReportsServiceUpdateRequest = ReportsServiceUpdateRequest;
    exports.RestUtil = RestUtil;
    exports.Rule = Rule;
    exports.RuleDefault = RuleDefault;
    exports.RuleIdRequest = RuleIdRequest;
    exports.RuleIdsRequest = RuleIdsRequest;
    exports.RulePolygon = RulePolygon;
    exports.RuleSpec = RuleSpec;
    exports.RulesService = RulesService;
    exports.RulesServiceCreateRequest = RulesServiceCreateRequest;
    exports.RulesServiceExportRequest = RulesServiceExportRequest;
    exports.RulesServiceFindAnomalyRequest = RulesServiceFindAnomalyRequest;
    exports.RulesServiceFindRequest = RulesServiceFindRequest;
    exports.RulesServiceUpdateRequest = RulesServiceUpdateRequest;
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
    exports.SchedulesServiceFolderIdRequest = SchedulesServiceFolderIdRequest;
    exports.SchedulesServiceUpdateRequest = SchedulesServiceUpdateRequest;
    exports.SearchBehavior = SearchBehavior;
    exports.SearchColor = SearchColor;
    exports.SearchDefinition = SearchDefinition;
    exports.SearchEvent = SearchEvent;
    exports.SearchEventCountRequest = SearchEventCountRequest;
    exports.SearchEventExportRequest = SearchEventExportRequest;
    exports.SearchEventFindRequest = SearchEventFindRequest;
    exports.SearchEventIdRequest = SearchEventIdRequest;
    exports.SearchIdRequest = SearchIdRequest;
    exports.SearchIdsRequest = SearchIdsRequest;
    exports.SearchObject = SearchObject;
    exports.SearchService = SearchService;
    exports.SearchServiceCreateRequest = SearchServiceCreateRequest;
    exports.SearchServiceExecuteRequest = SearchServiceExecuteRequest;
    exports.SearchServiceFindRequest = SearchServiceFindRequest;
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
    exports.SensorIdRequest = SensorIdRequest;
    exports.SensorIdsRequest = SensorIdsRequest;
    exports.SensorStatus = SensorStatus;
    exports.SensorStatusTimeSeries = SensorStatusTimeSeries;
    exports.SensorStatusTimestamped = SensorStatusTimestamped;
    exports.SensorsCountRequest = SensorsCountRequest;
    exports.SensorsService = SensorsService;
    exports.SensorsServiceAttachRequest = SensorsServiceAttachRequest;
    exports.SensorsServiceChangeFolderRequest = SensorsServiceChangeFolderRequest;
    exports.SensorsServiceChangeFovRequest = SensorsServiceChangeFovRequest;
    exports.SensorsServiceChangeGeoLocationRequest = SensorsServiceChangeGeoLocationRequest;
    exports.SensorsServiceChangeNameRequest = SensorsServiceChangeNameRequest;
    exports.SensorsServiceChangeStatusRequest = SensorsServiceChangeStatusRequest;
    exports.SensorsServiceCreateRequest = SensorsServiceCreateRequest;
    exports.SensorsServiceExportRequest = SensorsServiceExportRequest;
    exports.SensorsServiceFindRequest = SensorsServiceFindRequest;
    exports.SensorsServiceSetRefImageRequest = SensorsServiceSetRefImageRequest;
    exports.SensorsServiceStatusOvertimeRequest = SensorsServiceStatusOvertimeRequest;
    exports.SensorsServiceUpdateRequest = SensorsServiceUpdateRequest;
    exports.Services = Services;
    exports.SocketEventNotification = SocketEventNotification;
    exports.SocketHealthStatusNotification = SocketHealthStatusNotification;
    exports.StreamResponse = StreamResponse;
    exports.StringIntValue = StringIntValue;
    exports.StringKeyValue = StringKeyValue;
    exports.SysAccountExportRequest = SysAccountExportRequest;
    exports.SysAccountImportRequest = SysAccountImportRequest;
    exports.SysAccountsService = SysAccountsService;
    exports.SysAppliancesCountRequest = SysAppliancesCountRequest;
    exports.SysAppliancesService = SysAppliancesService;
    exports.SysAppliancesServiceFindRequest = SysAppliancesServiceFindRequest;
    exports.SysAppliancesServiceGetCommandsRequest = SysAppliancesServiceGetCommandsRequest;
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
    exports.SysFeaturesGroupsService = SysFeaturesGroupsService;
    exports.SysFeaturesService = SysFeaturesService;
    exports.SysKeysService = SysKeysService;
    exports.SysKeysServiceCreateApiKeyRequest = SysKeysServiceCreateApiKeyRequest;
    exports.SysKeysServiceCreatePasswordRequest = SysKeysServiceCreatePasswordRequest;
    exports.SysKeysServiceCreateTokenRequest = SysKeysServiceCreateTokenRequest;
    exports.SysSensorsCountRequest = SysSensorsCountRequest;
    exports.SysSensorsService = SysSensorsService;
    exports.SysSensorsServiceFindRequest = SysSensorsServiceFindRequest;
    exports.SysSystemService = SysSystemService;
    exports.SysUsersService = SysUsersService;
    exports.TimeFrame = TimeFrame;
    exports.TokenRequest = TokenRequest;
    exports.TreeItem = TreeItem;
    exports.TreeNode = TreeNode;
    exports.UpdateStatus = UpdateStatus;
    exports.User = User;
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
    exports.UsersServiceSetRolesRequest = UsersServiceSetRolesRequest;
    exports.UsersServiceUpdateRequest = UsersServiceUpdateRequest;
    exports.Verification = Verification;
    exports.WebSocketMessageHeader = WebSocketMessageHeader;
    exports.getToken = getToken;
    exports.removeToken = removeToken;
    exports.setToken = setToken;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=agentvi-ng-core-lib.umd.js.map
