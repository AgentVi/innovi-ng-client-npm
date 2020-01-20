(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@agentvi/ng-core-lib', ['exports', '@angular/core', '@angular/common/http', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory((global.agentvi = global.agentvi || {}, global.agentvi['ng-core-lib'] = {}), global.ng.core, global.ng.common.http, global.rxjs.operators, global.ng.common));
}(this, function (exports, core, http, operators, common) { 'use strict';

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
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
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
    var   /*
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
    AbsoluteTimeFrame = /** @class */ (function () {
        function AbsoluteTimeFrame(name, startTime, endTime, active) {
            this.name = name;
            this.startTime = startTime;
            this.endTime = endTime;
            this.active = active;
        }
        return AbsoluteTimeFrame;
    }());
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
    var   /*
       Account role represents the role of the user in the account
    */
    AccountRole = /** @class */ (function () {
        function AccountRole(accountId, role) {
            this.accountId = accountId;
            this.role = role;
        }
        return AccountRole;
    }());
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
       Account specific settings
    */
    var   /*
       Account specific settings
    */
    AccountSettings = /** @class */ (function () {
        function AccountSettings(retentionDays, objectColors, ruleColor, maskColor) {
            this.retentionDays = retentionDays;
            this.objectColors = objectColors;
            this.ruleColor = ruleColor;
            this.maskColor = maskColor;
        }
        return AccountSettings;
    }());
    if (false) {
        /** @type {?} */
        AccountSettings.prototype.retentionDays;
        /** @type {?} */
        AccountSettings.prototype.objectColors;
        /** @type {?} */
        AccountSettings.prototype.ruleColor;
        /** @type {?} */
        AccountSettings.prototype.maskColor;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Account types aggregator summary
    */
    var   /*
       Account types aggregator summary
    */
    AccountTypeSummary = /** @class */ (function () {
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
    var   /*
       Sensor training analysis result for a single model
       This data model is used by the training process of Anomaly Detection
    */
    AnalysisResult = /** @class */ (function () {
        function AnalysisResult(modelType, resultsPath, completedOn) {
            this.modelType = modelType;
            this.resultsPath = resultsPath;
            this.completedOn = completedOn;
        }
        return AnalysisResult;
    }());
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
       Subset of event info required by the anomaly service
    */
    var   /*
       Subset of event info required by the anomaly service
    */
    AnomalyEventInfo = /** @class */ (function () {
        function AnomalyEventInfo(eventId, objectIds, status) {
            this.eventId = eventId;
            this.objectIds = objectIds;
            this.status = status;
        }
        return AnomalyEventInfo;
    }());
    if (false) {
        /** @type {?} */
        AnomalyEventInfo.prototype.eventId;
        /** @type {?} */
        AnomalyEventInfo.prototype.objectIds;
        /** @type {?} */
        AnomalyEventInfo.prototype.status;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       SW Configuration for appliance
    */
    var   /*
       SW Configuration for appliance
    */
    ApplianceConfiguration = /** @class */ (function () {
        function ApplianceConfiguration(configurationId, description, currentVersion, versions) {
            this.configurationId = configurationId;
            this.description = description;
            this.currentVersion = currentVersion;
            this.versions = versions;
        }
        return ApplianceConfiguration;
    }());
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
       Appliance KPIs data point
    */
    var   /*
       Appliance KPIs data point
    */
    ApplianceKpiDataPoint = /** @class */ (function () {
        function ApplianceKpiDataPoint(cpuAvg, cpuMax, ram, loadAvg) {
            this.cpuAvg = cpuAvg;
            this.cpuMax = cpuMax;
            this.ram = ram;
            this.loadAvg = loadAvg;
        }
        return ApplianceKpiDataPoint;
    }());
    if (false) {
        /** @type {?} */
        ApplianceKpiDataPoint.prototype.cpuAvg;
        /** @type {?} */
        ApplianceKpiDataPoint.prototype.cpuMax;
        /** @type {?} */
        ApplianceKpiDataPoint.prototype.ram;
        /** @type {?} */
        ApplianceKpiDataPoint.prototype.loadAvg;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Appliance KPIs list over time (CPU, RAM, LOAD)
    */
    var   /*
       Appliance KPIs list over time (CPU, RAM, LOAD)
    */
    ApplianceKpiTimeSeries = /** @class */ (function () {
        function ApplianceKpiTimeSeries(label, interval, data) {
            this.label = label;
            this.interval = interval;
            this.data = data;
        }
        return ApplianceKpiTimeSeries;
    }());
    if (false) {
        /** @type {?} */
        ApplianceKpiTimeSeries.prototype.label;
        /** @type {?} */
        ApplianceKpiTimeSeries.prototype.interval;
        /** @type {?} */
        ApplianceKpiTimeSeries.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Data point in a series representing appliance KPI values in a specific timestamp
    */
    var   /*
       Data point in a series representing appliance KPI values in a specific timestamp
    */
    ApplianceKpiTimestamped = /** @class */ (function () {
        function ApplianceKpiTimestamped(timestamp, label, value) {
            this.timestamp = timestamp;
            this.label = label;
            this.value = value;
        }
        return ApplianceKpiTimestamped;
    }());
    if (false) {
        /** @type {?} */
        ApplianceKpiTimestamped.prototype.timestamp;
        /** @type {?} */
        ApplianceKpiTimestamped.prototype.label;
        /** @type {?} */
        ApplianceKpiTimestamped.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Appliance registration info
       This model is used when a user registers new appliance in the system
    */
    var   /*
       Appliance registration info
       This model is used when a user registers new appliance in the system
    */
    ApplianceRegistration = /** @class */ (function () {
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
       Appliance status list over time
    */
    var   /*
       Appliance status list over time
    */
    ApplianceStatusTimeSeries = /** @class */ (function () {
        function ApplianceStatusTimeSeries(label, interval, data) {
            this.label = label;
            this.interval = interval;
            this.data = data;
        }
        return ApplianceStatusTimeSeries;
    }());
    if (false) {
        /** @type {?} */
        ApplianceStatusTimeSeries.prototype.label;
        /** @type {?} */
        ApplianceStatusTimeSeries.prototype.interval;
        /** @type {?} */
        ApplianceStatusTimeSeries.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Data point in a series representing appliance status values in a specific timestamp
    */
    var   /*
       Data point in a series representing appliance status values in a specific timestamp
    */
    ApplianceStatusTimestamped = /** @class */ (function () {
        function ApplianceStatusTimestamped(timestamp, label, value) {
            this.timestamp = timestamp;
            this.label = label;
            this.value = value;
        }
        return ApplianceStatusTimestamped;
    }());
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
       Bounding Box of crop in a frame (inside 10000 x 10000 coordinate system)
    */
    var   /*
       Bounding Box of crop in a frame (inside 10000 x 10000 coordinate system)
    */
    BoundingBox = /** @class */ (function () {
        function BoundingBox(maxX, maxY, minX, minY) {
            this.maxX = maxX;
            this.maxY = maxY;
            this.minX = minX;
            this.minY = minY;
        }
        return BoundingBox;
    }());
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
    var   /*
       Bounding Box of an area in a map (in WGS-84 coordinate system)
    */
    BoundingMap = /** @class */ (function () {
        function BoundingMap(maxLat, maxLng, minLat, minLng) {
            this.maxLat = maxLat;
            this.maxLng = maxLng;
            this.minLat = minLat;
            this.minLng = minLng;
        }
        return BoundingMap;
    }());
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
       Coordinate of WGS-84 grid system
       See (https://en.wikipedia.org/wiki/World_Geodetic_System)
    */
    var   /*
       Coordinate of WGS-84 grid system
       See (https://en.wikipedia.org/wiki/World_Geodetic_System)
    */
    Coordinate = /** @class */ (function () {
        function Coordinate(latitude, longitude, altitude) {
            this.lat = latitude;
            this.lon = longitude;
            this.alt = altitude;
        }
        return Coordinate;
    }());
    if (false) {
        /** @type {?} */
        Coordinate.prototype.lat;
        /** @type {?} */
        Coordinate.prototype.lon;
        /** @type {?} */
        Coordinate.prototype.alt;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Object dimension on FOV
    */
    var   /*
       Object dimension on FOV
    */
    Dimension = /** @class */ (function () {
        function Dimension(width, height) {
            this.width = width;
            this.height = height;
        }
        return Dimension;
    }());
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
    var   /*
       Disk information
    */
    DiskInfo = /** @class */ (function () {
        function DiskInfo(name, totalBytes, usedBytes, usage) {
            this.name = name;
            this.totalBytes = totalBytes;
            this.usedBytes = usedBytes;
            this.usage = usage;
        }
        return DiskInfo;
    }());
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
       Distribution series result - keys are long values
    */
    var   /*
       Distribution series result - keys are long values
    */
    DistributionOfLong = /** @class */ (function () {
        function DistributionOfLong(label, data) {
            this.label = label;
            this.data = data;
        }
        return DistributionOfLong;
    }());
    if (false) {
        /** @type {?} */
        DistributionOfLong.prototype.label;
        /** @type {?} */
        DistributionOfLong.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Distribution series result - keys are long values
    */
    var   /*
       Distribution series result - keys are long values
    */
    DistributionOfString = /** @class */ (function () {
        function DistributionOfString(label, data) {
            this.label = label;
            this.data = data;
        }
        return DistributionOfString;
    }());
    if (false) {
        /** @type {?} */
        DistributionOfString.prototype.label;
        /** @type {?} */
        DistributionOfString.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Docker registry credentials to connect to docker
       Includes information where to access and get images
    */
    var   /*
       Docker registry credentials to connect to docker
       Includes information where to access and get images
    */
    DockerCredentials = /** @class */ (function () {
        function DockerCredentials(dockerUser, dockerPwd) {
            this.dockerUser = dockerUser;
            this.dockerPwd = dockerPwd;
        }
        return DockerCredentials;
    }());
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
    var   /*
       Event integration action
    */
    EventAction = /** @class */ (function () {
        function EventAction(protocol, operation, host, port, user, password, url, headers, recipients, subject, body, clipRequired) {
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
        return EventAction;
    }());
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
    var   /*
       Event count time series data point
    */
    EventCountDataPoint = /** @class */ (function () {
        function EventCountDataPoint(timestamp, label, value) {
            this.timestamp = timestamp;
            this.label = label;
            this.value = value;
        }
        return EventCountDataPoint;
    }());
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
    var   /*
       Event count time series result
    */
    EventCountTimeSeries = /** @class */ (function () {
        function EventCountTimeSeries(label, interval, data) {
            this.label = label;
            this.interval = interval;
            this.data = data;
        }
        return EventCountTimeSeries;
    }());
    if (false) {
        /** @type {?} */
        EventCountTimeSeries.prototype.label;
        /** @type {?} */
        EventCountTimeSeries.prototype.interval;
        /** @type {?} */
        EventCountTimeSeries.prototype.data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       FOV (Sensor Field of View) Geo attributes
    */
    var   /*
       FOV (Sensor Field of View) Geo attributes
    */
    FovGeoAttributes = /** @class */ (function () {
        function FovGeoAttributes(geoArea, visibleArea, transformType, coefficients, controlPoints) {
            this.geoArea = geoArea;
            this.visibleArea = visibleArea;
            this.transformType = transformType;
            this.coefficients = coefficients;
            this.controlPoints = controlPoints;
        }
        return FovGeoAttributes;
    }());
    if (false) {
        /** @type {?} */
        FovGeoAttributes.prototype.geoArea;
        /** @type {?} */
        FovGeoAttributes.prototype.visibleArea;
        /** @type {?} */
        FovGeoAttributes.prototype.transformType;
        /** @type {?} */
        FovGeoAttributes.prototype.coefficients;
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
    var   /*
       Geo spatial circle
    */
    GeoCircle = /** @class */ (function () {
        function GeoCircle(center, radius) {
            this.center = center;
            this.radius = radius;
        }
        return GeoCircle;
    }());
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
       Control point maps FOV location (10000 x 10000 coordinate system) to WGS-84 coordinate system
       Control points are used for FOV geo-referencing
    */
    var   /*
       Control point maps FOV location (10000 x 10000 coordinate system) to WGS-84 coordinate system
       Control points are used for FOV geo-referencing
    */
    GeoControlPoint = /** @class */ (function () {
        function GeoControlPoint(point, coordinate) {
            this.point = point;
            this.coordinate = coordinate;
        }
        return GeoControlPoint;
    }());
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
       List of Geo control points
    */
    var   /*
       List of Geo control points
    */
    GeoControlPoints = /** @class */ (function () {
        function GeoControlPoints(points) {
            this.points = points;
        }
        return GeoControlPoints;
    }());
    if (false) {
        /** @type {?} */
        GeoControlPoints.prototype.points;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Geo spatial polygon
    */
    var   /*
       Geo spatial polygon
    */
    GeoPolygon = /** @class */ (function () {
        function GeoPolygon(vertices) {
            this.vertices = vertices;
        }
        return GeoPolygon;
    }());
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
    */
    var   /*
       Geo Reference data includes the contour of the raster image on the World coordinate system (WGS-84)
       and the list of transformation coefficients.
    */
    GeoReferenceData = /** @class */ (function () {
        function GeoReferenceData(coordinates, coefficients) {
            this.coordinates = coordinates;
            this.coefficients = coefficients;
        }
        return GeoReferenceData;
    }());
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
       Geo Reference test used to test geo-referencing algorithm. The structure includes arbitrary list of points
       and the list of transformation coefficients.
    */
    var   /*
       Geo Reference test used to test geo-referencing algorithm. The structure includes arbitrary list of points
       and the list of transformation coefficients.
    */
    GeoReferenceTest = /** @class */ (function () {
        function GeoReferenceTest(points, coefficients) {
            this.points = points;
            this.coefficients = coefficients;
        }
        return GeoReferenceTest;
    }());
    if (false) {
        /** @type {?} */
        GeoReferenceTest.prototype.points;
        /** @type {?} */
        GeoReferenceTest.prototype.coefficients;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Login data (returned by the API after successful login)
    */
    var   /*
       Login data (returned by the API after successful login)
    */
    LoginData = /** @class */ (function () {
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
    var   /*
       Login parameters data model
    */
    LoginParams = /** @class */ (function () {
        function LoginParams(email, password, accessToken) {
            this.email = email;
            this.password = password;
            this.accessToken = accessToken;
        }
        return LoginParams;
    }());
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
       Key Value long tuple
    */
    var   /*
       Key Value long tuple
    */
    LongTuple = /** @class */ (function () {
        function LongTuple(key, value) {
            this.key = key;
            this.value = value;
        }
        return LongTuple;
    }());
    if (false) {
        /** @type {?} */
        LongTuple.prototype.key;
        /** @type {?} */
        LongTuple.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Metadata object color description
    */
    var   /*
       Metadata object color description
    */
    ObjectColor = /** @class */ (function () {
        function ObjectColor(colorType, primary, primaryConf, secondaryColor, secondaryConf) {
            this.colorType = colorType;
            this.primary = primary;
            this.primaryConf = primaryConf;
            this.secondaryColor = secondaryColor;
            this.secondaryConf = secondaryConf;
        }
        return ObjectColor;
    }());
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
       Object Metadata info
    */
    var   /*
       Object Metadata info
    */
    ObjectInfo = /** @class */ (function () {
        function ObjectInfo(objectId, sensorId, birthTime, instances) {
            this.objectId = objectId;
            this.sensorId = sensorId;
            this.birthTime = birthTime;
            this.instances = instances;
        }
        return ObjectInfo;
    }());
    if (false) {
        /** @type {?} */
        ObjectInfo.prototype.objectId;
        /** @type {?} */
        ObjectInfo.prototype.sensorId;
        /** @type {?} */
        ObjectInfo.prototype.birthTime;
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
    var   /*
       Metadata object instance info
       One instance of the object in the scene
    */
    ObjectInstance = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        ObjectInstance.prototype.timestamp;
        /** @type {?} */
        ObjectInstance.prototype.objectType;
        /** @type {?} */
        ObjectInstance.prototype.confidence;
        /** @type {?} */
        ObjectInstance.prototype.isStopped;
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
       Used to reflect object type hierarchy
    */
    var   /*
       Used to reflect object type hierarchy
    */
    ObjectTypeNode = /** @class */ (function () {
        function ObjectTypeNode(name, objectTypeCode, children) {
            this.name = name;
            this.objectTypeCode = objectTypeCode;
            this.children = children;
        }
        return ObjectTypeNode;
    }());
    if (false) {
        /** @type {?} */
        ObjectTypeNode.prototype.name;
        /** @type {?} */
        ObjectTypeNode.prototype.objectTypeCode;
        /** @type {?} */
        ObjectTypeNode.prototype.children;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Point (X,Y) on raster
    */
    var   /*
       Point (X,Y) on raster
    */
    Point = /** @class */ (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
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
    var   /*
       Recurrent time frame
    */
    Recurrent = /** @class */ (function () {
        function Recurrent(startTime, endTime, period, daysOfWeek, action) {
            this.startTime = startTime;
            this.endTime = endTime;
            this.period = period;
            this.daysOfWeek = daysOfWeek;
            this.action = action;
        }
        return Recurrent;
    }());
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
    var   /*
       Schedule recurrent time frame
    */
    RecurrentTimeFrame = /** @class */ (function () {
        function RecurrentTimeFrame(dayOfWeek, startTime, endTime) {
            this.dayOfWeek = dayOfWeek;
            this.startTime = startTime;
            this.endTime = endTime;
        }
        return RecurrentTimeFrame;
    }());
    if (false) {
        /** @type {?} */
        RecurrentTimeFrame.prototype.dayOfWeek;
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
       Rule default encapsulates boundaries and default values of rule parameter
    */
    var   /*
       Rule default encapsulates boundaries and default values of rule parameter
    */
    RuleDefault = /** @class */ (function () {
        function RuleDefault(min, max, defaultValue) {
            this.min = min;
            this.max = max;
            this.defaultValue = defaultValue;
        }
        return RuleDefault;
    }());
    if (false) {
        /** @type {?} */
        RuleDefault.prototype.min;
        /** @type {?} */
        RuleDefault.prototype.max;
        /** @type {?} */
        RuleDefault.prototype.defaultValue;
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
    var   /*
       Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
       In case of a line, it is not a closed polygon (first and last points are not connected)
       In case of area description, the line crossing direction field is ignored
    */
    RulePolygon = /** @class */ (function () {
        function RulePolygon(lineCrossDir, points) {
            this.lineCrossDir = lineCrossDir;
            this.points = points;
        }
        return RulePolygon;
    }());
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
       Rule specification describe rule parameters
    */
    var   /*
       Rule specification describe rule parameters
    */
    RuleSpec = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        RuleSpec.prototype.behaviorType;
        /** @type {?} */
        RuleSpec.prototype.ruleTypeName;
        /** @type {?} */
        RuleSpec.prototype.objectTypes;
        /** @type {?} */
        RuleSpec.prototype.isLineDrawing;
        /** @type {?} */
        RuleSpec.prototype.dwellTime;
        /** @type {?} */
        RuleSpec.prototype.peopleInGroup;
        /** @type {?} */
        RuleSpec.prototype.objectHierarchy;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Search result item
    */
    var   /*
       Search result item
    */
    SearchResult = /** @class */ (function () {
        function SearchResult(id, sequenceId, timestamp, behaviorType, objectType, description, isGeo, location, objectsInfo) {
            this.id = id;
            this.sequenceId = sequenceId;
            this.timestamp = timestamp;
            this.behaviorType = behaviorType;
            this.objectType = objectType;
            this.description = description;
            this.isGeo = isGeo;
            this.location = location;
            this.objectsInfo = objectsInfo;
        }
        return SearchResult;
    }());
    if (false) {
        /** @type {?} */
        SearchResult.prototype.id;
        /** @type {?} */
        SearchResult.prototype.sequenceId;
        /** @type {?} */
        SearchResult.prototype.timestamp;
        /** @type {?} */
        SearchResult.prototype.behaviorType;
        /** @type {?} */
        SearchResult.prototype.objectType;
        /** @type {?} */
        SearchResult.prototype.description;
        /** @type {?} */
        SearchResult.prototype.isGeo;
        /** @type {?} */
        SearchResult.prototype.location;
        /** @type {?} */
        SearchResult.prototype.objectsInfo;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Object description in search result
       Search result item may refer to several object (example: in a single group there may be several people)
    */
    var   /*
       Object description in search result
       Search result item may refer to several object (example: in a single group there may be several people)
    */
    SearchResultObject = /** @class */ (function () {
        function SearchResultObject(objectId, sensorId, boundingBox, objectHistory) {
            this.objectId = objectId;
            this.sensorId = sensorId;
            this.boundingBox = boundingBox;
            this.objectHistory = objectHistory;
        }
        return SearchResultObject;
    }());
    if (false) {
        /** @type {?} */
        SearchResultObject.prototype.objectId;
        /** @type {?} */
        SearchResultObject.prototype.sensorId;
        /** @type {?} */
        SearchResultObject.prototype.boundingBox;
        /** @type {?} */
        SearchResultObject.prototype.objectHistory;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Anomaly sensitivity defines parameters to adjust thresholds for anomaly events
    */
    var   /*
       Anomaly sensitivity defines parameters to adjust thresholds for anomaly events
    */
    Sensitivity = /** @class */ (function () {
        function Sensitivity(events, timeUnit) {
            this.events = events;
            this.timeUnit = timeUnit;
        }
        return Sensitivity;
    }());
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
    var   /*
       Sensor anomaly information
       This data model is used by the inference process of Anomaly Detection
    */
    SensorAnomalyInfo = /** @class */ (function () {
        function SensorAnomalyInfo(sensorId, results, ruleInfo) {
            this.sensorId = sensorId;
            this.results = results;
            this.ruleInfo = ruleInfo;
        }
        return SensorAnomalyInfo;
    }());
    if (false) {
        /** @type {?} */
        SensorAnomalyInfo.prototype.sensorId;
        /** @type {?} */
        SensorAnomalyInfo.prototype.results;
        /** @type {?} */
        SensorAnomalyInfo.prototype.ruleInfo;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Sensor anomaly rule information
    */
    var   /*
       Sensor anomaly rule information
    */
    SensorAnomalyRuleInfo = /** @class */ (function () {
        function SensorAnomalyRuleInfo(active, sensitivity, objectTypes) {
            this.active = active;
            this.sensitivity = sensitivity;
            this.objectTypes = objectTypes;
        }
        return SensorAnomalyRuleInfo;
    }());
    if (false) {
        /** @type {?} */
        SensorAnomalyRuleInfo.prototype.active;
        /** @type {?} */
        SensorAnomalyRuleInfo.prototype.sensitivity;
        /** @type {?} */
        SensorAnomalyRuleInfo.prototype.objectTypes;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Sensor status list over time
    */
    var   /*
       Sensor status list over time
    */
    SensorStatusTimeSeries = /** @class */ (function () {
        function SensorStatusTimeSeries(accountId, sensorId, label, interval, data) {
            this.accountId = accountId;
            this.sensorId = sensorId;
            this.label = label;
            this.interval = interval;
            this.data = data;
        }
        return SensorStatusTimeSeries;
    }());
    if (false) {
        /** @type {?} */
        SensorStatusTimeSeries.prototype.accountId;
        /** @type {?} */
        SensorStatusTimeSeries.prototype.sensorId;
        /** @type {?} */
        SensorStatusTimeSeries.prototype.label;
        /** @type {?} */
        SensorStatusTimeSeries.prototype.interval;
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
    var   /*
       Data point in a series representing a sensor status value in a specific timestamp
    */
    SensorStatusTimestamped = /** @class */ (function () {
        function SensorStatusTimestamped(state, timestamp, label) {
            this.state = state;
            this.timestamp = timestamp;
            this.label = label;
        }
        return SensorStatusTimestamped;
    }());
    if (false) {
        /** @type {?} */
        SensorStatusTimestamped.prototype.state;
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
       String Int Value tuple
    */
    var   /*
       String Int Value tuple
    */
    StringIntValue = /** @class */ (function () {
        function StringIntValue(key, value) {
            this.key = key;
            this.value = value;
        }
        return StringIntValue;
    }());
    if (false) {
        /** @type {?} */
        StringIntValue.prototype.key;
        /** @type {?} */
        StringIntValue.prototype.value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Key Value string tuple
    */
    var   /*
       Key Value string tuple
    */
    StringKeyValue = /** @class */ (function () {
        function StringKeyValue(key, value) {
            this.key = key;
            this.value = value;
        }
        return StringKeyValue;
    }());
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
    var   /*
       Time frame (for search and reports)
    */
    TimeFrame = /** @class */ (function () {
        function TimeFrame(from, to) {
            this.from = from;
            this.to = to;
        }
        return TimeFrame;
    }());
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
    var   /*
       Tree item for account hierarchy tree
    */
    TreeItem = /** @class */ (function () {
        function TreeItem(itemId, type, name, typeName) {
            this.itemId = itemId;
            this.type = type;
            this.name = name;
            this.typeName = typeName;
        }
        return TreeItem;
    }());
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
    var   /*
       Tree node in account hierarchy tree
    */
    TreeNode = /** @class */ (function () {
        function TreeNode(id, parentId, name, item, children) {
            this.id = id;
            this.parentId = parentId;
            this.name = name;
            this.item = item;
            this.children = children;
        }
        return TreeNode;
    }());
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
       User Account info (returned by switch-account method)
    */
    var   /*
       User Account info (returned by switch-account method)
    */
    UserAccountInfo = /** @class */ (function () {
        function UserAccountInfo(account, loginData, features) {
            this.account = account;
            this.loginData = loginData;
            this.features = features;
        }
        return UserAccountInfo;
    }());
    if (false) {
        /** @type {?} */
        UserAccountInfo.prototype.account;
        /** @type {?} */
        UserAccountInfo.prototype.loginData;
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
    var   /*
       User invitation data model - used by account admin to invite user to the account
    */
    UserInvitation = /** @class */ (function () {
        function UserInvitation(email, role) {
            this.email = email;
            this.role = role;
        }
        return UserInvitation;
    }());
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
    var   /*
       User registration data model - used by self registered users
    */
    UserRegistration = /** @class */ (function () {
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
        UserRegistration.prototype.accountRoles;
        /** @type {?} */
        UserRegistration.prototype.type;
        /** @type {?} */
        UserRegistration.prototype.tempPassword;
        /** @type {?} */
        UserRegistration.prototype.changePassword;
        /** @type {?} */
        UserRegistration.prototype.verifyByEmail;
        /** @type {?} */
        UserRegistration.prototype.description;
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
    var   /*
       Base entity includes common fields for all entities (persistence objects) in the system
    */
    BaseEntity = /** @class */ (function () {
        function BaseEntity(id, docType, createdOn, updatedOn) {
            this.id = id;
            this._type = docType;
            this.createdOn = createdOn;
            this.updatedOn = updatedOn;
        }
        return BaseEntity;
    }());
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
    var   /*
       Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
    */
    Account = /** @class */ (function (_super) {
        __extends(Account, _super);
        function Account() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Account;
    }(BaseEntity));
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
        Account.prototype.description;
        /** @type {?} */
        Account.prototype.settings;
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
    var   /*
       Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
       Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
       A single appliance can host multiple agents (container instances of the same Docker image)
    */
    Agent = /** @class */ (function (_super) {
        __extends(Agent, _super);
        function Agent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Agent;
    }(BaseEntity));
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
       Agent integration represents a local agent to third-party interactions.
       The purpose is to connect the agent to another system in the local network
       and perform integration without the dependency with the remote core services in the data center or cloud.
       The supported integrations are:
       - Web-hook: REST API call to http(s) endpoint (GET / POST / PUT)
       - Web-socket: Websocket client endpoint; ws(s)
    */
    var   /*
       Agent integration represents a local agent to third-party interactions.
       The purpose is to connect the agent to another system in the local network
       and perform integration without the dependency with the remote core services in the data center or cloud.
       The supported integrations are:
       - Web-hook: REST API call to http(s) endpoint (GET / POST / PUT)
       - Web-socket: Websocket client endpoint; ws(s)
    */
    AgentIntegration = /** @class */ (function () {
        function AgentIntegration(content, endpoint, operation, headers) {
            this.content = content;
            this.endpoint = endpoint;
            this.operation = operation;
            this.headers = headers;
        }
        return AgentIntegration;
    }());
    if (false) {
        /** @type {?} */
        AgentIntegration.prototype.content;
        /** @type {?} */
        AgentIntegration.prototype.endpoint;
        /** @type {?} */
        AgentIntegration.prototype.operation;
        /** @type {?} */
        AgentIntegration.prototype.headers;
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
    var   /*
       API Key is used per application (e.g. Portal, Console, Mobile App) or service (e.g. Health Service, Search Service ...) for identifying the consumer.
       The access to sets of REST endpoints is restricted according the API key.
       API key also dictates the default session TTL per application (e.g. 20 minutes for Portal or Console, 30 days for Mobile app)
    */
    ApiKey = /** @class */ (function (_super) {
        __extends(ApiKey, _super);
        function ApiKey() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ApiKey;
    }(BaseEntity));
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
    var   /*
       Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
    */
    Appliance = /** @class */ (function (_super) {
        __extends(Appliance, _super);
        function Appliance() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Appliance;
    }(BaseEntity));
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
        Appliance.prototype.statusReportedOn;
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
        Appliance.prototype.integrations;
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
    var   /*
       Edge appliance capabilities full report <br>
       This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
       Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
    */
    ApplianceCapabilities = /** @class */ (function () {
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
    var   /*
       Appliance command - represents commands sent to the appliance
    */
    ApplianceCommand = /** @class */ (function (_super) {
        __extends(ApplianceCommand, _super);
        function ApplianceCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ApplianceCommand;
    }(BaseEntity));
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
        ApplianceCommand.prototype.reason;
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
       Edge appliance ONVIF discovery full report <br>
       This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
    */
    var   /*
       Edge appliance ONVIF discovery full report <br>
       This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
    */
    ApplianceDiscovery = /** @class */ (function () {
        function ApplianceDiscovery(channels) {
            this.channels = channels;
        }
        return ApplianceDiscovery;
    }());
    if (false) {
        /** @type {?} */
        ApplianceDiscovery.prototype.channels;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Appliance status - reported periodically by the appliance
    */
    var   /*
       Appliance status - reported periodically by the appliance
    */
    ApplianceStatus = /** @class */ (function (_super) {
        __extends(ApplianceStatus, _super);
        function ApplianceStatus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ApplianceStatus;
    }(BaseEntity));
    if (false) {
        /** @type {?} */
        ApplianceStatus.prototype.applianceId;
        /** @type {?} */
        ApplianceStatus.prototype.accountId;
        /** @type {?} */
        ApplianceStatus.prototype.status;
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
    var   /*
       Audit Log - each entry represents a single action done by user
    */
    AuditLog = /** @class */ (function (_super) {
        __extends(AuditLog, _super);
        function AuditLog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return AuditLog;
    }(BaseEntity));
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
       Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
       Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
    */
    var   /*
       Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
       Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
    */
    Calendar = /** @class */ (function (_super) {
        __extends(Calendar, _super);
        function Calendar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Calendar;
    }(BaseEntity));
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
    var   /*
       SW Component version type
    */
    ComponentConfiguration = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        ComponentConfiguration.prototype.id;
        /** @type {?} */
        ComponentConfiguration.prototype.component;
        /** @type {?} */
        ComponentConfiguration.prototype.dockerImage;
        /** @type {?} */
        ComponentConfiguration.prototype.variables;
        /** @type {?} */
        ComponentConfiguration.prototype.mounts;
        /** @type {?} */
        ComponentConfiguration.prototype.status;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       SW Configuration type
    */
    var   /*
       SW Configuration type
    */
    Configuration = /** @class */ (function (_super) {
        __extends(Configuration, _super);
        function Configuration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Configuration;
    }(BaseEntity));
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
       SW Configuration template type
    */
    var   /*
       SW Configuration template type
    */
    ConfigurationTemplate = /** @class */ (function (_super) {
        __extends(ConfigurationTemplate, _super);
        function ConfigurationTemplate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ConfigurationTemplate;
    }(BaseEntity));
    if (false) {
        /** @type {?} */
        ConfigurationTemplate.prototype.name;
        /** @type {?} */
        ConfigurationTemplate.prototype.dockerImage;
        /** @type {?} */
        ConfigurationTemplate.prototype.variables;
        /** @type {?} */
        ConfigurationTemplate.prototype.mounts;
        /** @type {?} */
        ConfigurationTemplate.prototype.id;
        /** @type {?} */
        ConfigurationTemplate.prototype._type;
        /** @type {?} */
        ConfigurationTemplate.prototype.createdOn;
        /** @type {?} */
        ConfigurationTemplate.prototype.updatedOn;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       SW Configuration version type
    */
    var   /*
       SW Configuration version type
    */
    ConfigurationVersion = /** @class */ (function (_super) {
        __extends(ConfigurationVersion, _super);
        function ConfigurationVersion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ConfigurationVersion;
    }(BaseEntity));
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
    var   /*
       Detection event type
    */
    Event = /** @class */ (function (_super) {
        __extends(Event, _super);
        function Event() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Event;
    }(BaseEntity));
    if (false) {
        /** @type {?} */
        Event.prototype.sensorId;
        /** @type {?} */
        Event.prototype.accountId;
        /** @type {?} */
        Event.prototype.eventTime;
        /** @type {?} */
        Event.prototype.ruleId;
        /** @type {?} */
        Event.prototype.description;
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
        Event.prototype.eventImageTime;
        /** @type {?} */
        Event.prototype.eventObjects;
        /** @type {?} */
        Event.prototype.boundingBoxes;
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
    var   /*
       Detection event type
    */
    EventStatistics = /** @class */ (function (_super) {
        __extends(EventStatistics, _super);
        function EventStatistics() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EventStatistics;
    }(BaseEntity));
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
    var   /*
       System functionality (feature) description
    */
    Feature = /** @class */ (function (_super) {
        __extends(Feature, _super);
        function Feature() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Feature;
    }(BaseEntity));
    if (false) {
        /** @type {?} */
        Feature.prototype.code;
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
    var   /*
       Group of features
    */
    FeaturesGroup = /** @class */ (function (_super) {
        __extends(FeaturesGroup, _super);
        function FeaturesGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FeaturesGroup;
    }(BaseEntity));
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
    var   /*
       Folder (container for sensors and sub folders)
    */
    Folder = /** @class */ (function (_super) {
        __extends(Folder, _super);
        function Folder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Folder;
    }(BaseEntity));
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
    var   /*
       Integration action describes integration protocol and details to execute
    */
    IntegrationAction = /** @class */ (function (_super) {
        __extends(IntegrationAction, _super);
        function IntegrationAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return IntegrationAction;
    }(BaseEntity));
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
    var   /*
       Integration target describes connectivity details of the integrated system
       Definition of target systems is done by the account administrator only
       Account administrator Supervisor roles can define specific integrations per account / folder
    */
    IntegrationTarget = /** @class */ (function (_super) {
        __extends(IntegrationTarget, _super);
        function IntegrationTarget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return IntegrationTarget;
    }(BaseEntity));
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
    var   /*
       License information includes on-premises deployment's license restrictions
    */
    License = /** @class */ (function (_super) {
        __extends(License, _super);
        function License() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return License;
    }(BaseEntity));
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
       ONVIF channel description
       This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
    */
    var   /*
       ONVIF channel description
       This structure describes the list of channels (cameras, NVRs, DVRs etc) discovered in the network by ONVIF protocol
    */
    OnvifChannel = /** @class */ (function () {
        function OnvifChannel(uUID, name, address, sensorId) {
            this.uUID = uUID;
            this.name = name;
            this.address = address;
            this.sensorId = sensorId;
        }
        return OnvifChannel;
    }());
    if (false) {
        /** @type {?} */
        OnvifChannel.prototype.uUID;
        /** @type {?} */
        OnvifChannel.prototype.name;
        /** @type {?} */
        OnvifChannel.prototype.address;
        /** @type {?} */
        OnvifChannel.prototype.sensorId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Sensor preset represent specific sensor FOV attributes.
       In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
    */
    var   /*
       Sensor preset represent specific sensor FOV attributes.
       In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
    */
    Preset = /** @class */ (function (_super) {
        __extends(Preset, _super);
        function Preset() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Preset;
    }(BaseEntity));
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
    var   /*
       Query definitions for report specification
    */
    ReportDefinition = /** @class */ (function (_super) {
        __extends(ReportDefinition, _super);
        function ReportDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ReportDefinition;
    }(BaseEntity));
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
        ReportDefinition.prototype.reportUrl;
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
    var   /*
       Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
       real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
    */
    Rule = /** @class */ (function (_super) {
        __extends(Rule, _super);
        function Rule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Rule;
    }(BaseEntity));
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
        Rule.prototype.enabled;
        /** @type {?} */
        Rule.prototype.active;
        /** @type {?} */
        Rule.prototype.externalId;
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
        Rule.prototype.createImage;
        /** @type {?} */
        Rule.prototype.createClip;
        /** @type {?} */
        Rule.prototype.lastTrainingOn;
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
       Schedule is associated with account and optionally with folder and multiple schedules can be specified.
       When defining a rule, it can be scheduled by one of the schedules associated with the sensor's folder, it's parent folder, it's parent's parent folder and so on up to the account
    */
    var   /*
       Schedule is a list of recurrent time frames to specify active analytics
       Schedule is associated with account and optionally with folder and multiple schedules can be specified.
       When defining a rule, it can be scheduled by one of the schedules associated with the sensor's folder, it's parent folder, it's parent's parent folder and so on up to the account
    */
    Schedule = /** @class */ (function (_super) {
        __extends(Schedule, _super);
        function Schedule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Schedule;
    }(BaseEntity));
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
    var   /*
       Scheduled Report defines when to aut generate report and whet to do with it
    */
    ScheduledReport = /** @class */ (function (_super) {
        __extends(ScheduledReport, _super);
        function ScheduledReport() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ScheduledReport;
    }(BaseEntity));
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
       Search behavior description
    */
    var   /*
       Search behavior description
    */
    SearchBehavior = /** @class */ (function () {
        function SearchBehavior(behaviorType, dwellTime, minObjectsInGroup, shapes) {
            this.behaviorType = behaviorType;
            this.dwellTime = dwellTime;
            this.minObjectsInGroup = minObjectsInGroup;
            this.shapes = shapes;
        }
        return SearchBehavior;
    }());
    if (false) {
        /** @type {?} */
        SearchBehavior.prototype.behaviorType;
        /** @type {?} */
        SearchBehavior.prototype.dwellTime;
        /** @type {?} */
        SearchBehavior.prototype.minObjectsInGroup;
        /** @type {?} */
        SearchBehavior.prototype.shapes;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Color definitions to search for
    */
    var   /*
       Color definitions to search for
    */
    SearchColor = /** @class */ (function () {
        function SearchColor(conf, color, type) {
            this.conf = conf;
            this.color = color;
            this.type = type;
        }
        return SearchColor;
    }());
    if (false) {
        /** @type {?} */
        SearchColor.prototype.conf;
        /** @type {?} */
        SearchColor.prototype.color;
        /** @type {?} */
        SearchColor.prototype.type;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Query definitions for ad-hoc search specification
    */
    var   /*
       Query definitions for ad-hoc search specification
    */
    SearchDefinition = /** @class */ (function (_super) {
        __extends(SearchDefinition, _super);
        function SearchDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SearchDefinition;
    }(BaseEntity));
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
        SearchDefinition.prototype.sourceScope;
        /** @type {?} */
        SearchDefinition.prototype.timeScope;
        /** @type {?} */
        SearchDefinition.prototype.timeFrame;
        /** @type {?} */
        SearchDefinition.prototype.behavior;
        /** @type {?} */
        SearchDefinition.prototype.objects;
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
       Object attributes to search for
    */
    var   /*
       Object attributes to search for
    */
    SearchObject = /** @class */ (function () {
        function SearchObject(type, colors) {
            this.type = type;
            this.colors = colors;
        }
        return SearchObject;
    }());
    if (false) {
        /** @type {?} */
        SearchObject.prototype.type;
        /** @type {?} */
        SearchObject.prototype.colors;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Search shape definition for Sensors or GEO search
    */
    var   /*
       Search shape definition for Sensors or GEO search
    */
    SearchShape = /** @class */ (function (_super) {
        __extends(SearchShape, _super);
        function SearchShape() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SearchShape;
    }(RulePolygon));
    if (false) {
        /** @type {?} */
        SearchShape.prototype.sensorId;
        /** @type {?} */
        SearchShape.prototype.lineCrossDir;
        /** @type {?} */
        SearchShape.prototype.points;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Sensor type
    */
    var   /*
       Sensor type
    */
    Sensor = /** @class */ (function (_super) {
        __extends(Sensor, _super);
        function Sensor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Sensor;
    }(BaseEntity));
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
        Sensor.prototype.state;
        /** @type {?} */
        Sensor.prototype.stateReportedOn;
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
    var   /*
       Sensor training analysis results
       This data is used by the training process of Anomaly Detection
       The entity Id is the sensorId
    */
    SensorAnalysisResults = /** @class */ (function (_super) {
        __extends(SensorAnalysisResults, _super);
        function SensorAnalysisResults() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SensorAnalysisResults;
    }(BaseEntity));
    if (false) {
        /** @type {?} */
        SensorAnalysisResults.prototype.accountId;
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
    var   /*
       Sensor debug information
    */
    SensorDebugInfo = /** @class */ (function () {
        function SensorDebugInfo(saveCrops, saveFrames, saveEventImages) {
            this.saveCrops = saveCrops;
            this.saveFrames = saveFrames;
            this.saveEventImages = saveEventImages;
        }
        return SensorDebugInfo;
    }());
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
    var   /*
       Sensor health status
    */
    SensorStatus = /** @class */ (function (_super) {
        __extends(SensorStatus, _super);
        function SensorStatus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SensorStatus;
    }(BaseEntity));
    if (false) {
        /** @type {?} */
        SensorStatus.prototype.sensorId;
        /** @type {?} */
        SensorStatus.prototype.accountId;
        /** @type {?} */
        SensorStatus.prototype.state;
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
    var   /*
       Software update status type
    */
    UpdateStatus = /** @class */ (function (_super) {
        __extends(UpdateStatus, _super);
        function UpdateStatus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return UpdateStatus;
    }(BaseEntity));
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
    var   /*
       User type
    */
    User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return User;
    }(BaseEntity));
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
        User.prototype.lastSignIn;
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
        User.prototype.description;
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
    var   /*
       Verification type used to verify user with a temporary code
    */
    Verification = /** @class */ (function (_super) {
        __extends(Verification, _super);
        function Verification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Verification;
    }(BaseEntity));
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
    var AccountRoleCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Account administrator can perform all operations [1] 
        ADMIN: 1,
        // Supervisor can perform all operations on specific folder(s)and can see all modules except Settings [2] 
        SUPERVISOR: 2,
        // Account operator can perform operations on events only, this user can see administrator and monitor modules but has write permissions on events status only [4] 
        OPERATOR: 4,
        // User can see Administrator, Monitor, Investigation and Analytics modules but has write permissions on Reports and investigation modules only [8] 
        USER: 8,
        // Installer can only connect device to the system and configure cameras, it can see Administrator and Monitor modules only) [16] 
        INSTALLER: 16,
        // Identical to USER with no ability to view INVESTIGATION or ANALYTICS module [32] 
        DEMO: 32,
    };
    AccountRoleCode[AccountRoleCode.UNDEFINED] = 'UNDEFINED';
    AccountRoleCode[AccountRoleCode.ADMIN] = 'ADMIN';
    AccountRoleCode[AccountRoleCode.SUPERVISOR] = 'SUPERVISOR';
    AccountRoleCode[AccountRoleCode.OPERATOR] = 'OPERATOR';
    AccountRoleCode[AccountRoleCode.USER] = 'USER';
    AccountRoleCode[AccountRoleCode.INSTALLER] = 'INSTALLER';
    AccountRoleCode[AccountRoleCode.DEMO] = 'DEMO';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var AccountStatusCode = {
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
    var AccountTypeCode = {
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
    var AgentStatusCode = {
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
    var ApplianceCommandCode = {
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
        // Open SSH tunnel [10] 
        OPEN_SSH: 10,
        // Close SSH tunnel [11] 
        CLOSE_SSH: 11,
        // Reset to factory mode (remove pairing key and all containers except manager) [12] 
        RESET_DEVICE: 12,
        // Discovery - discover all network cameras using ONVIF discovery protocol [13] 
        ONVIF_DISCOVERY: 13,
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
    ApplianceCommandCode[ApplianceCommandCode.OPEN_SSH] = 'OPEN_SSH';
    ApplianceCommandCode[ApplianceCommandCode.CLOSE_SSH] = 'CLOSE_SSH';
    ApplianceCommandCode[ApplianceCommandCode.RESET_DEVICE] = 'RESET_DEVICE';
    ApplianceCommandCode[ApplianceCommandCode.ONVIF_DISCOVERY] = 'ONVIF_DISCOVERY';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ApplianceStatusCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Appliance was added but did not establish connection yet [1] 
        PENDING: 1,
        // Appliance deleted by the user from the system but not confirmation accepted yet [2] 
        PENDING_DELETE: 2,
        // Appliance is paired but not registered yet [3] 
        UNREGISTERED: 3,
        // Appliance is not active [4] 
        INACTIVE: 4,
        // Appliance is running [5] 
        ACTIVE: 5,
        // Appliance is running and in warning state [6] 
        ACTIVE_WARNING: 6,
        // Appliance is running and in error state [7] 
        ACTIVE_ERROR: 7,
    };
    ApplianceStatusCode[ApplianceStatusCode.UNDEFINED] = 'UNDEFINED';
    ApplianceStatusCode[ApplianceStatusCode.PENDING] = 'PENDING';
    ApplianceStatusCode[ApplianceStatusCode.PENDING_DELETE] = 'PENDING_DELETE';
    ApplianceStatusCode[ApplianceStatusCode.UNREGISTERED] = 'UNREGISTERED';
    ApplianceStatusCode[ApplianceStatusCode.INACTIVE] = 'INACTIVE';
    ApplianceStatusCode[ApplianceStatusCode.ACTIVE] = 'ACTIVE';
    ApplianceStatusCode[ApplianceStatusCode.ACTIVE_WARNING] = 'ACTIVE_WARNING';
    ApplianceStatusCode[ApplianceStatusCode.ACTIVE_ERROR] = 'ACTIVE_ERROR';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var BehaviorTypeCode = {
        // Undefined 0 
        UNDEFINED: 0,
        // Crossing a Line 65793 
        INNOVI_CROSSING: 65793,
        // Moving in an area 65794 
        INNOVI_MOVING: 65794,
        // Stopped vehicle 65796 
        INNOVI_STOPPED: 65796,
        // Occupancy 65800 
        INNOVI_OCCUPANCY: 65800,
        // Grouping 65808 
        INNOVI_GROUPING: 65808,
        // Ignore mask 66049 
        INNOVI_MASK_IGNORE: 66049,
        // Shutdown mask 66050 
        INNOVI_MASK_SHUTDOWN: 66050,
        // General Anomaly 66560 
        INNOVI_ANOMALY: 66560,
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ColorCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // No color [1] 
        NONE: 1,
        // Unknown color [2] 
        UNKNOWN: 2,
        // Multiple colors [4] 
        MULTICOLORED: 4,
        // White [8] 
        WHITE: 8,
        // Black [16] 
        BLACK: 16,
        // Gray [32] 
        GRAY: 32,
        // Blue [64] 
        BLUE: 64,
        // Brown [128] 
        BROWN: 128,
        // Green [256] 
        GREEN: 256,
        // Yellow [512] 
        YELLOW: 512,
        // Orange [1024] 
        ORANGE: 1024,
        // Red [2048] 
        RED: 2048,
        // Pink [4096] 
        PINK: 4096,
        // Purple [8192] 
        PURPLE: 8192,
        // Cyan [16384] 
        CYAN: 16384,
        // Silver [32768] 
        SILVER: 32768,
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
    var ColorTypeCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Body color (for person) [1] 
        BODY: 1,
        // Upper body color (for person) [2] 
        UPPER_BODY: 2,
        // Lower body color (for person) [4] 
        LOWER_BODY: 4,
        // Hat color (for person) [8] 
        HAT: 8,
        // Hair color (for person) [16] 
        HAIR: 16,
        // Bag color (for person) [32] 
        BAG: 32,
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
    var CommandStatusCode = {
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
    var DayOfWeekCode = {
        // Sunday [0] 
        SUN: 0,
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
    var EventStatusCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // New event [1] 
        NEW: 1,
        // Open (in-progress) event [2] 
        OPEN: 2,
        // Closed event (tagged as True event) [6] 
        CLOSED_TRUE: 6,
        // Closed event (tagged as False event) [7] 
        CLOSED_FALSE: 7,
        // Relevant anomaly event [8] 
        CLOSED_RELEVANT: 8,
        // Irrelevant anomaly event [9] 
        CLOSED_IRRELEVANT: 9,
    };
    EventStatusCode[EventStatusCode.UNDEFINED] = 'UNDEFINED';
    EventStatusCode[EventStatusCode.NEW] = 'NEW';
    EventStatusCode[EventStatusCode.OPEN] = 'OPEN';
    EventStatusCode[EventStatusCode.CLOSED_TRUE] = 'CLOSED_TRUE';
    EventStatusCode[EventStatusCode.CLOSED_FALSE] = 'CLOSED_FALSE';
    EventStatusCode[EventStatusCode.CLOSED_RELEVANT] = 'CLOSED_RELEVANT';
    EventStatusCode[EventStatusCode.CLOSED_IRRELEVANT] = 'CLOSED_IRRELEVANT';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var FeatureCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Account administrator module [2048] 
        MODULE_ADMIN: 2048,
        // Crossing a line rule [2049] 
        RULE_CROSSING: 2049,
        // Moving in an area rule [2051] 
        RULE_MOVING: 2051,
        // Stopped vehicle rule only [2052] 
        RULE_STOPPED: 2052,
        // Occupancy rule [2056] 
        RULE_OCCUPANCY: 2056,
        // Grouping rule [2064] 
        RULE_GROUPING: 2064,
        // Ignore (yellow) mask rule [2080] 
        RULE_IGNORE_MASK: 2080,
        // Anomaly detection rule [2112] 
        RULE_ANOMALY: 2112,
        // Monitor (real time events) module [4096] 
        MODULE_MONITOR: 4096,
        // Google maps support module [4097] 
        MAP_GOOGLE: 4097,
        // Leaflet maps support module [4098] 
        MAP_LEAFLET: 4098,
        // Investigation (search) module [8192] 
        MODULE_INVESTIGATION: 8192,
        // Analytics (BI) module [8192] 
        MODULE_ANALYTICS: 16384,
    };
    FeatureCode[FeatureCode.UNDEFINED] = 'UNDEFINED';
    FeatureCode[FeatureCode.MODULE_ADMIN] = 'MODULE_ADMIN';
    FeatureCode[FeatureCode.RULE_CROSSING] = 'RULE_CROSSING';
    FeatureCode[FeatureCode.RULE_MOVING] = 'RULE_MOVING';
    FeatureCode[FeatureCode.RULE_STOPPED] = 'RULE_STOPPED';
    FeatureCode[FeatureCode.RULE_OCCUPANCY] = 'RULE_OCCUPANCY';
    FeatureCode[FeatureCode.RULE_GROUPING] = 'RULE_GROUPING';
    FeatureCode[FeatureCode.RULE_IGNORE_MASK] = 'RULE_IGNORE_MASK';
    FeatureCode[FeatureCode.RULE_ANOMALY] = 'RULE_ANOMALY';
    FeatureCode[FeatureCode.MODULE_MONITOR] = 'MODULE_MONITOR';
    FeatureCode[FeatureCode.MAP_GOOGLE] = 'MAP_GOOGLE';
    FeatureCode[FeatureCode.MAP_LEAFLET] = 'MAP_LEAFLET';
    FeatureCode[FeatureCode.MODULE_INVESTIGATION] = 'MODULE_INVESTIGATION';
    FeatureCode[FeatureCode.MODULE_ANALYTICS] = 'MODULE_ANALYTICS';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var IntegrationTypeCode = {
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
    var LineCrossDirectionCode = {
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
    var MapClientCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Google maps client [1] 
        GOOGLE: 1,
        // LeafLet map client [2] 
        LEAFLET: 2,
        // ESRI client (not implemented) [3] 
        ESRI: 3,
        // MapInfo client (not implemented) [4] 
        MAPINFO: 4,
    };
    MapClientCode[MapClientCode.UNDEFINED] = 'UNDEFINED';
    MapClientCode[MapClientCode.GOOGLE] = 'GOOGLE';
    MapClientCode[MapClientCode.LEAFLET] = 'LEAFLET';
    MapClientCode[MapClientCode.ESRI] = 'ESRI';
    MapClientCode[MapClientCode.MAPINFO] = 'MAPINFO';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ObjectTypeCode = {
        // Undefined 0 
        UNDEFINED: 0,
        // Unknown group of objects 16842752 
        INNOVI_UNKNOWNS: 16842752,
        // Unknown object 16843008 
        INNOVI_UNKNOWNS_UNKNOWN: 16843008,
        // Vegetation 16843264 
        INNOVI_UNKNOWNS_VEGETATION: 16843264,
        // Cloud 16843776 
        INNOVI_UNKNOWNS_CLOUD: 16843776,
        // Abstract group of people 16908288 
        INNOVI_PEOPLE: 16908288,
        // Person standing upright 16908544 
        INNOVI_PEOPLE_PERSON_STANDING: 16908544,
        // Person sitting/lying down 16908800 
        INNOVI_PEOPLE_PERSON_ON_THE_GROUND: 16908800,
        // Person from an overhead camera 16909312 
        INNOVI_PEOPLE_PERSON_OVERHEAD: 16909312,
        // Abstract group of vehicles 17039360 
        INNOVI_VEHICLE: 17039360,
        // Car (class group) 17039616 
        INNOVI_VEHICLE_CAR: 17039616,
        // Compact car 17039617 
        INNOVI_VEHICLE_CAR_COMPACT: 17039617,
        // SUV 17039618 
        INNOVI_VEHICLE_CAR_SUV: 17039618,
        // Bus 17039872 
        INNOVI_VEHICLE_BUS: 17039872,
        // School Bus 17039873 
        INNOVI_VEHICLE_SCHOOL_BUS: 17039873,
        // Mini Bus 17039874 
        INNOVI_VEHICLE_MINI_BUS: 17039874,
        // Mini Bus 17039876 
        INNOVI_VEHICLE_CITY_BUS: 17039876,
        // Pickup Truck 17040384 
        INNOVI_VEHICLE_PICKUP_TRUCK: 17040384,
        // Van 17041408 
        INNOVI_VEHICLE_VAN: 17041408,
        // Truck (class group) 17043456 
        INNOVI_VEHICLE_TRUCK: 17043456,
        // Small Truck 17043457 
        INNOVI_VEHICLE_TRUCK_SMALL: 17043457,
        // Medium Truck 17043458 
        INNOVI_VEHICLE_TRUCK_MEDIUM: 17043458,
        // Big Truck (semi-trailer) 17043460 
        INNOVI_VEHICLE_TRUCK_SEMITRAILER: 17043460,
        // Tractor 17043464 
        INNOVI_VEHICLE_TRACTOR: 17043464,
        // Any vehicle at night 17047552 
        INNOVI_VEHICLE_NIGHT: 17047552,
        // Abstract group of two wheelers 17301504 
        INNOVI_TWOWHEELED: 17301504,
        // Bicycle 17301760 
        INNOVI_TWOWHEELED_BICYCLE: 17301760,
        // Motorcycle 17302016 
        INNOVI_TWOWHEELED_MOTORCYCLE: 17302016,
        // Abstract group of animals 17825792 
        INNOVI_ANIMAL: 17825792,
        // Bird 17826048 
        INNOVI_ANIMAL_BIRD: 17826048,
        // Small animal (ie. Cats/Dogs) 17826304 
        INNOVI_ANIMAL_SMALL: 17826304,
        // Large animal (ie. Horses/Cows) 17826816 
        INNOVI_ANIMAL_LARGE: 17826816,
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
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_CAR_COMPACT] = 'INNOVI_VEHICLE_CAR_COMPACT';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_CAR_SUV] = 'INNOVI_VEHICLE_CAR_SUV';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_BUS] = 'INNOVI_VEHICLE_BUS';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_SCHOOL_BUS] = 'INNOVI_VEHICLE_SCHOOL_BUS';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_MINI_BUS] = 'INNOVI_VEHICLE_MINI_BUS';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_CITY_BUS] = 'INNOVI_VEHICLE_CITY_BUS';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_PICKUP_TRUCK] = 'INNOVI_VEHICLE_PICKUP_TRUCK';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_VAN] = 'INNOVI_VEHICLE_VAN';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_TRUCK] = 'INNOVI_VEHICLE_TRUCK';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_TRUCK_SMALL] = 'INNOVI_VEHICLE_TRUCK_SMALL';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_TRUCK_MEDIUM] = 'INNOVI_VEHICLE_TRUCK_MEDIUM';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_TRUCK_SEMITRAILER] = 'INNOVI_VEHICLE_TRUCK_SEMITRAILER';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_TRACTOR] = 'INNOVI_VEHICLE_TRACTOR';
    ObjectTypeCode[ObjectTypeCode.INNOVI_VEHICLE_NIGHT] = 'INNOVI_VEHICLE_NIGHT';
    ObjectTypeCode[ObjectTypeCode.INNOVI_TWOWHEELED] = 'INNOVI_TWOWHEELED';
    ObjectTypeCode[ObjectTypeCode.INNOVI_TWOWHEELED_BICYCLE] = 'INNOVI_TWOWHEELED_BICYCLE';
    ObjectTypeCode[ObjectTypeCode.INNOVI_TWOWHEELED_MOTORCYCLE] = 'INNOVI_TWOWHEELED_MOTORCYCLE';
    ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL] = 'INNOVI_ANIMAL';
    ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL_BIRD] = 'INNOVI_ANIMAL_BIRD';
    ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL_SMALL] = 'INNOVI_ANIMAL_SMALL';
    ObjectTypeCode[ObjectTypeCode.INNOVI_ANIMAL_LARGE] = 'INNOVI_ANIMAL_LARGE';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ProductTypeCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Virtual Edge (Pipeline running as Kubernetes deployment with no actual edge device) [1] 
        VIRTUAL: 1,
        // Custom Device (Customer provides it's own hardware) [100] 
        CUSTOM: 100,
        // Edge 200 [200] 
        EDGE_200: 200,
        // Edge 220 [220] 
        EDGE_220: 220,
        // Edge 250 [250] 
        EDGE_250: 250,
        // Edge 320 [320] 
        EDGE_320: 320,
        // Edge 500 [500] 
        EDGE_500: 500,
    };
    ProductTypeCode[ProductTypeCode.UNDEFINED] = 'UNDEFINED';
    ProductTypeCode[ProductTypeCode.VIRTUAL] = 'VIRTUAL';
    ProductTypeCode[ProductTypeCode.CUSTOM] = 'CUSTOM';
    ProductTypeCode[ProductTypeCode.EDGE_200] = 'EDGE_200';
    ProductTypeCode[ProductTypeCode.EDGE_220] = 'EDGE_220';
    ProductTypeCode[ProductTypeCode.EDGE_250] = 'EDGE_250';
    ProductTypeCode[ProductTypeCode.EDGE_320] = 'EDGE_320';
    ProductTypeCode[ProductTypeCode.EDGE_500] = 'EDGE_500';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var RuntimeStatusCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Component is defined in the configuration but not running [1] 
        CONFIGURED: 1,
        // Component is running on the device [2] 
        RUNNING: 2,
        // Component is defined in the configuration and running on the device [3] 
        CONFIGURED_AND_RUNNING: 3,
    };
    RuntimeStatusCode[RuntimeStatusCode.UNDEFINED] = 'UNDEFINED';
    RuntimeStatusCode[RuntimeStatusCode.CONFIGURED] = 'CONFIGURED';
    RuntimeStatusCode[RuntimeStatusCode.RUNNING] = 'RUNNING';
    RuntimeStatusCode[RuntimeStatusCode.CONFIGURED_AND_RUNNING] = 'CONFIGURED_AND_RUNNING';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var SearchScopeCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Search by sensors [1] 
        SENSORS: 1,
        // Search by geo area [2] 
        GEO: 2,
    };
    SearchScopeCode[SearchScopeCode.UNDEFINED] = 'UNDEFINED';
    SearchScopeCode[SearchScopeCode.SENSORS] = 'SENSORS';
    SearchScopeCode[SearchScopeCode.GEO] = 'GEO';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var SearchTimeCode = {
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
    var SensorConfigChangeMask = {
        // Sensor has been removed from the system 
        DELETED: 0,
        // Sensor data has changed in the sensor configuration (requires agent reload) 
        SENSOR: 1,
        // Rules attributes changed in the sensor configuration 
        RULES: 2,
        // Sensor calibration has changed in the sensor configuration 
        CALIBRATION: 4,
    };
    SensorConfigChangeMask[SensorConfigChangeMask.DELETED] = 'DELETED';
    SensorConfigChangeMask[SensorConfigChangeMask.SENSOR] = 'SENSOR';
    SensorConfigChangeMask[SensorConfigChangeMask.RULES] = 'RULES';
    SensorConfigChangeMask[SensorConfigChangeMask.CALIBRATION] = 'CALIBRATION';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var SensorResolutionCode = {
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
    var SensorStateMask = {
        // [OK] No error [0x0] 
        SENSOR_OK: 0,
        // [WARNING] Video stream FPS is less than 6 for one minute [0x00000001] 
        LOW_FRAMERATE_WARN: 1,
        // [WARNING] Video stream FPS is more than 30 for one minute [0x00000002] 
        HIGH_FRAMERATE_WARN: 2,
        // [WARNING] Image from video source is blocked [0x00000004] 
        IMAGE_BLOCKED_WARN: 4,
        // [WARNING] Image from video source is saturated [0x00000008] 
        IMAGE_SATURATED_WARN: 8,
        // [WARNING] Image from video source is dark [0x00000010] 
        IMAGE_DARK_WARN: 16,
        // [ERROR] Communication error [0x00010000] 
        NO_COMM_ERROR: 65536,
        // [ERROR] General sensor error [0x00020000] 
        SENSOR_ERROR: 131072,
        // [ERROR] Sensor can't read video stream or stream is not valid [0x00040000] 
        SOURCE_ERROR: 262144,
        // [ERROR] Video stream format is not supported [0x00080000] 
        FORMAT_ERROR: 524288,
        // [ERROR] Video stream resolution is not supported [0x00100000] 
        RESOLUTION_ERROR: 1048576,
        // [ERROR] Video stream FPS is 0 for one minute [0x0000000000000400] 
        CRITICAL_FRAMERATE_ERROR: 2097152,
    };
    SensorStateMask[SensorStateMask.SENSOR_OK] = 'SENSOR_OK';
    SensorStateMask[SensorStateMask.LOW_FRAMERATE_WARN] = 'LOW_FRAMERATE_WARN';
    SensorStateMask[SensorStateMask.HIGH_FRAMERATE_WARN] = 'HIGH_FRAMERATE_WARN';
    SensorStateMask[SensorStateMask.IMAGE_BLOCKED_WARN] = 'IMAGE_BLOCKED_WARN';
    SensorStateMask[SensorStateMask.IMAGE_SATURATED_WARN] = 'IMAGE_SATURATED_WARN';
    SensorStateMask[SensorStateMask.IMAGE_DARK_WARN] = 'IMAGE_DARK_WARN';
    SensorStateMask[SensorStateMask.NO_COMM_ERROR] = 'NO_COMM_ERROR';
    SensorStateMask[SensorStateMask.SENSOR_ERROR] = 'SENSOR_ERROR';
    SensorStateMask[SensorStateMask.SOURCE_ERROR] = 'SOURCE_ERROR';
    SensorStateMask[SensorStateMask.FORMAT_ERROR] = 'FORMAT_ERROR';
    SensorStateMask[SensorStateMask.RESOLUTION_ERROR] = 'RESOLUTION_ERROR';
    SensorStateMask[SensorStateMask.CRITICAL_FRAMERATE_ERROR] = 'CRITICAL_FRAMERATE_ERROR';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var SensorStatusCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // Sensor was added but did not establish connection yet [1] 
        PENDING: 1,
        // Delete sensor command sent to the appliance but it was not confirmed by the agent [2] 
        PENDING_DELETE: 2,
        // Suspended (banned) sensor - when it is detached from appliance, the sensor configuration and rules still exists but no real sensor connected to any appliance [3] 
        SUSPENDED: 3,
        // Sensor is disabled by user (or by Arm/Disarm command) [4] 
        INACTIVE: 4,
        // Sensor is enabled by user and running [5] 
        ACTIVE: 5,
        // Sensor is enabled by user and running and in warning state [6] 
        ACTIVE_WARNING: 6,
        // Sensor is enabled by user and running and in error state [7] 
        ACTIVE_ERROR: 7,
    };
    SensorStatusCode[SensorStatusCode.UNDEFINED] = 'UNDEFINED';
    SensorStatusCode[SensorStatusCode.PENDING] = 'PENDING';
    SensorStatusCode[SensorStatusCode.PENDING_DELETE] = 'PENDING_DELETE';
    SensorStatusCode[SensorStatusCode.SUSPENDED] = 'SUSPENDED';
    SensorStatusCode[SensorStatusCode.INACTIVE] = 'INACTIVE';
    SensorStatusCode[SensorStatusCode.ACTIVE] = 'ACTIVE';
    SensorStatusCode[SensorStatusCode.ACTIVE_WARNING] = 'ACTIVE_WARNING';
    SensorStatusCode[SensorStatusCode.ACTIVE_ERROR] = 'ACTIVE_ERROR';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var SensorTypeCode = {
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
    var SeverityTypeCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // No effect [1] 
        NO_EFFECT: 1,
        // Notification only [2] 
        NOTIFICATION: 2,
        // Lowest severity [3] 
        LOWEST: 3,
        // Low severity [4] 
        LOW: 4,
        // Medium severity [5] 
        MEDIUM: 5,
        // High severity [6] 
        HIGH: 6,
        // Highest severity [7] 
        HIGHEST: 7,
        // Critical severity [8] 
        CRITICAL: 8,
    };
    SeverityTypeCode[SeverityTypeCode.UNDEFINED] = 'UNDEFINED';
    SeverityTypeCode[SeverityTypeCode.NO_EFFECT] = 'NO_EFFECT';
    SeverityTypeCode[SeverityTypeCode.NOTIFICATION] = 'NOTIFICATION';
    SeverityTypeCode[SeverityTypeCode.LOWEST] = 'LOWEST';
    SeverityTypeCode[SeverityTypeCode.LOW] = 'LOW';
    SeverityTypeCode[SeverityTypeCode.MEDIUM] = 'MEDIUM';
    SeverityTypeCode[SeverityTypeCode.HIGH] = 'HIGH';
    SeverityTypeCode[SeverityTypeCode.HIGHEST] = 'HIGHEST';
    SeverityTypeCode[SeverityTypeCode.CRITICAL] = 'CRITICAL';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var StreamTypeCode = {
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
        // Download clip from http(s) [6] 
        HTTP: 6,
    };
    StreamTypeCode[StreamTypeCode.UNDEFINED] = 'UNDEFINED';
    StreamTypeCode[StreamTypeCode.RTSP] = 'RTSP';
    StreamTypeCode[StreamTypeCode.ONVIF] = 'ONVIF';
    StreamTypeCode[StreamTypeCode.CLIP] = 'CLIP';
    StreamTypeCode[StreamTypeCode.RTP] = 'RTP';
    StreamTypeCode[StreamTypeCode.MULTICAST] = 'MULTICAST';
    StreamTypeCode[StreamTypeCode.HTTP] = 'HTTP';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var TimeUnitCode = {
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
    var TransformationTypeCode = {
        // Transformation type not specified [0] 
        UNDEFINED: 0,
        // Location and azimuth based transformation [1] 
        AZIMUTH: 1,
        // Projective transformation based on 4 reference points [2] 
        PT4: 2,
        // Polynomial transformation based on 6 reference points [3] 
        PT6: 3,
    };
    TransformationTypeCode[TransformationTypeCode.UNDEFINED] = 'UNDEFINED';
    TransformationTypeCode[TransformationTypeCode.AZIMUTH] = 'AZIMUTH';
    TransformationTypeCode[TransformationTypeCode.PT4] = 'PT4';
    TransformationTypeCode[TransformationTypeCode.PT6] = 'PT6';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var UserStatusCode = {
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
    var UserTypeCode = {
        // Undefined [0] 
        UNDEFINED: 0,
        // System administrator has access to all accounts and permissions to perform all actions [1] 
        SYSADMIN: 1,
        // Support user has view permissions only for all accounts that enabled option Enable Support [2] 
        SUPPORT: 2,
        // System user - has access to specific accounts with role based access control [4] 
        USER: 4,
        // Account service - to be used by other systems to perform actions using the API (can't login as a user to the portal)' [5]` 
        ACCOUNT_SERVICE: 5,
    };
    UserTypeCode[UserTypeCode.UNDEFINED] = 'UNDEFINED';
    UserTypeCode[UserTypeCode.SYSADMIN] = 'SYSADMIN';
    UserTypeCode[UserTypeCode.SUPPORT] = 'SUPPORT';
    UserTypeCode[UserTypeCode.USER] = 'USER';
    UserTypeCode[UserTypeCode.ACCOUNT_SERVICE] = 'ACCOUNT_SERVICE';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var VisualQualityCode = {
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
    var ZoneTypeCode = {
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
    var   /*
    */
    AccountIdRequest = /** @class */ (function () {
        function AccountIdRequest(id) {
            this.id = id;
        }
        return AccountIdRequest;
    }());
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
    var   /*
    */
    AccountIdsRequest = /** @class */ (function () {
        function AccountIdsRequest(id) {
            this.id = id;
        }
        return AccountIdsRequest;
    }());
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
    var   /*
    */
    AccountsServiceChangeGroupsRequest = /** @class */ (function () {
        function AccountsServiceChangeGroupsRequest(id, groupId) {
            this.id = id;
            this.groupId = groupId;
        }
        return AccountsServiceChangeGroupsRequest;
    }());
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
    var   /*
    */
    AccountsServiceChangeNameRequest = /** @class */ (function () {
        function AccountsServiceChangeNameRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return AccountsServiceChangeNameRequest;
    }());
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
    var   /*
    */
    AccountsServiceChangeStatusRequest = /** @class */ (function () {
        function AccountsServiceChangeStatusRequest(id, status) {
            this.id = id;
            this.status = status;
        }
        return AccountsServiceChangeStatusRequest;
    }());
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
    var   /*
    */
    AccountsServiceChangeTypeRequest = /** @class */ (function () {
        function AccountsServiceChangeTypeRequest(id, type) {
            this.id = id;
            this.type = type;
        }
        return AccountsServiceChangeTypeRequest;
    }());
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
    var   /*
    */
    AccountsServiceCreateRequest = /** @class */ (function () {
        function AccountsServiceCreateRequest(body) {
            this.body = body;
        }
        return AccountsServiceCreateRequest;
    }());
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
    var   /*
    */
    AccountsServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        AccountsServiceExportRequest.prototype.name;
        /** @type {?} */
        AccountsServiceExportRequest.prototype.type;
        /** @type {?} */
        AccountsServiceExportRequest.prototype.status;
        /** @type {?} */
        AccountsServiceExportRequest.prototype.sort;
        /** @type {?} */
        AccountsServiceExportRequest.prototype.format;
        /** @type {?} */
        AccountsServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AccountsServiceFindFoldersRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        AccountsServiceFindFoldersRequest.prototype.id;
        /** @type {?} */
        AccountsServiceFindFoldersRequest.prototype.parentId;
        /** @type {?} */
        AccountsServiceFindFoldersRequest.prototype.search;
        /** @type {?} */
        AccountsServiceFindFoldersRequest.prototype.sort;
        /** @type {?} */
        AccountsServiceFindFoldersRequest.prototype.page;
        /** @type {?} */
        AccountsServiceFindFoldersRequest.prototype.pageSize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AccountsServiceFindRequest = /** @class */ (function () {
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
    var   /*
    */
    AccountsServiceResetRequest = /** @class */ (function () {
        function AccountsServiceResetRequest(id, days) {
            this.id = id;
            this.days = days;
        }
        return AccountsServiceResetRequest;
    }());
    if (false) {
        /** @type {?} */
        AccountsServiceResetRequest.prototype.id;
        /** @type {?} */
        AccountsServiceResetRequest.prototype.days;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AccountsServiceTreeRequest = /** @class */ (function () {
        function AccountsServiceTreeRequest(id, sensors) {
            this.id = id;
            this.sensors = sensors;
        }
        return AccountsServiceTreeRequest;
    }());
    if (false) {
        /** @type {?} */
        AccountsServiceTreeRequest.prototype.id;
        /** @type {?} */
        AccountsServiceTreeRequest.prototype.sensors;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AccountsServiceUpdateRequest = /** @class */ (function () {
        function AccountsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return AccountsServiceUpdateRequest;
    }());
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
    var   /*
       Entity action response message returned for any create/update action on entity
    */
    ActionResponse = /** @class */ (function () {
        function ActionResponse(code, error, key, data) {
            this.code = code;
            this.error = error;
            this.key = key;
            this.data = data;
        }
        return ActionResponse;
    }());
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
    var   /*
    */
    AnomalyServiceFindEventsRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.accountId;
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.sensorId;
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.status;
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.from;
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.to;
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.sort;
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.page;
        /** @type {?} */
        AnomalyServiceFindEventsRequest.prototype.pageSize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AnomalyServiceFindRequest = /** @class */ (function () {
        function AnomalyServiceFindRequest(page, pageSize) {
            this.page = page;
            this.pageSize = pageSize;
        }
        return AnomalyServiceFindRequest;
    }());
    if (false) {
        /** @type {?} */
        AnomalyServiceFindRequest.prototype.page;
        /** @type {?} */
        AnomalyServiceFindRequest.prototype.pageSize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AnomalyServiceUpdateRequest = /** @class */ (function () {
        function AnomalyServiceUpdateRequest(sensorId, body) {
            this.sensorId = sensorId;
            this.body = body;
        }
        return AnomalyServiceUpdateRequest;
    }());
    if (false) {
        /** @type {?} */
        AnomalyServiceUpdateRequest.prototype.sensorId;
        /** @type {?} */
        AnomalyServiceUpdateRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AnomalyServiceUpdateRuleRequest = /** @class */ (function () {
        function AnomalyServiceUpdateRuleRequest(sensorId, body) {
            this.sensorId = sensorId;
            this.body = body;
        }
        return AnomalyServiceUpdateRuleRequest;
    }());
    if (false) {
        /** @type {?} */
        AnomalyServiceUpdateRuleRequest.prototype.sensorId;
        /** @type {?} */
        AnomalyServiceUpdateRuleRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    ApiKeyIdRequest = /** @class */ (function () {
        function ApiKeyIdRequest(id) {
            this.id = id;
        }
        return ApiKeyIdRequest;
    }());
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
    var   /*
    */
    ApplianceCommandIdRequest = /** @class */ (function () {
        function ApplianceCommandIdRequest(commandId) {
            this.commandId = commandId;
        }
        return ApplianceCommandIdRequest;
    }());
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
    var   /*
    */
    ApplianceIdAgentIdRequest = /** @class */ (function () {
        function ApplianceIdAgentIdRequest(id, agentId) {
            this.id = id;
            this.agentId = agentId;
        }
        return ApplianceIdAgentIdRequest;
    }());
    if (false) {
        /** @type {?} */
        ApplianceIdAgentIdRequest.prototype.id;
        /** @type {?} */
        ApplianceIdAgentIdRequest.prototype.agentId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    ApplianceIdRequest = /** @class */ (function () {
        function ApplianceIdRequest(id) {
            this.id = id;
        }
        return ApplianceIdRequest;
    }());
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
    var   /*
    */
    ApplianceServiceDeleteCommandRequest = /** @class */ (function () {
        function ApplianceServiceDeleteCommandRequest(id, commandId) {
            this.id = id;
            this.commandId = commandId;
        }
        return ApplianceServiceDeleteCommandRequest;
    }());
    if (false) {
        /** @type {?} */
        ApplianceServiceDeleteCommandRequest.prototype.id;
        /** @type {?} */
        ApplianceServiceDeleteCommandRequest.prototype.commandId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AppliancesCountRequest = /** @class */ (function () {
        function AppliancesCountRequest(folderId, subFolders) {
            this.folderId = folderId;
            this.subFolders = subFolders;
        }
        return AppliancesCountRequest;
    }());
    if (false) {
        /** @type {?} */
        AppliancesCountRequest.prototype.folderId;
        /** @type {?} */
        AppliancesCountRequest.prototype.subFolders;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AppliancesServiceAddSensorRequest = /** @class */ (function () {
        function AppliancesServiceAddSensorRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return AppliancesServiceAddSensorRequest;
    }());
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
    var   /*
    */
    AppliancesServiceChangeConfigurationRequest = /** @class */ (function () {
        function AppliancesServiceChangeConfigurationRequest(id, configId, versionId) {
            this.id = id;
            this.configId = configId;
            this.versionId = versionId;
        }
        return AppliancesServiceChangeConfigurationRequest;
    }());
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
    var   /*
    */
    AppliancesServiceChangeFolderRequest = /** @class */ (function () {
        function AppliancesServiceChangeFolderRequest(id, folderId) {
            this.id = id;
            this.folderId = folderId;
        }
        return AppliancesServiceChangeFolderRequest;
    }());
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
    var   /*
    */
    AppliancesServiceChangeMachineIdRequest = /** @class */ (function () {
        function AppliancesServiceChangeMachineIdRequest(id, machineId) {
            this.id = id;
            this.machineId = machineId;
        }
        return AppliancesServiceChangeMachineIdRequest;
    }());
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
    var   /*
    */
    AppliancesServiceChangeNameRequest = /** @class */ (function () {
        function AppliancesServiceChangeNameRequest(id, name) {
            this.id = id;
            this.name = name;
        }
        return AppliancesServiceChangeNameRequest;
    }());
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
    var   /*
    */
    AppliancesServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        AppliancesServiceExportRequest.prototype.folderId;
        /** @type {?} */
        AppliancesServiceExportRequest.prototype.subFolders;
        /** @type {?} */
        AppliancesServiceExportRequest.prototype.search;
        /** @type {?} */
        AppliancesServiceExportRequest.prototype.status;
        /** @type {?} */
        AppliancesServiceExportRequest.prototype.sort;
        /** @type {?} */
        AppliancesServiceExportRequest.prototype.format;
        /** @type {?} */
        AppliancesServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AppliancesServiceFindRequest = /** @class */ (function () {
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
    var   /*
    */
    AppliancesServiceFindSensorsRequest = /** @class */ (function () {
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
        /** @type {?} */
        AppliancesServiceFindSensorsRequest.prototype.format;
        /** @type {?} */
        AppliancesServiceFindSensorsRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AppliancesServiceGetCommandsRequest = /** @class */ (function () {
        function AppliancesServiceGetCommandsRequest(id, status, sort, page, pageSize) {
            this.id = id;
            this.status = status;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return AppliancesServiceGetCommandsRequest;
    }());
    if (false) {
        /** @type {?} */
        AppliancesServiceGetCommandsRequest.prototype.id;
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
    var   /*
    */
    AppliancesServiceRegisterApplianceRequest = /** @class */ (function () {
        function AppliancesServiceRegisterApplianceRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return AppliancesServiceRegisterApplianceRequest;
    }());
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
    var   /*
    */
    AppliancesServiceSetCommandRequest = /** @class */ (function () {
        function AppliancesServiceSetCommandRequest(commandId, status) {
            this.commandId = commandId;
            this.status = status;
        }
        return AppliancesServiceSetCommandRequest;
    }());
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
    var   /*
    */
    AppliancesServiceStatusOvertimeRequest = /** @class */ (function () {
        function AppliancesServiceStatusOvertimeRequest(id, from, to) {
            this.id = id;
            this.from = from;
            this.to = to;
        }
        return AppliancesServiceStatusOvertimeRequest;
    }());
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
    var   /*
    */
    AuditLogIdRequest = /** @class */ (function () {
        function AuditLogIdRequest(id) {
            this.id = id;
        }
        return AuditLogIdRequest;
    }());
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
    var   /*
    */
    AuditLogServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        AuditLogServiceExportRequest.prototype.userId;
        /** @type {?} */
        AuditLogServiceExportRequest.prototype.from;
        /** @type {?} */
        AuditLogServiceExportRequest.prototype.to;
        /** @type {?} */
        AuditLogServiceExportRequest.prototype.itemType;
        /** @type {?} */
        AuditLogServiceExportRequest.prototype.sort;
        /** @type {?} */
        AuditLogServiceExportRequest.prototype.format;
        /** @type {?} */
        AuditLogServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    AuditLogServiceFindRequest = /** @class */ (function () {
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
    var   /*
    */
    CalendarIdRequest = /** @class */ (function () {
        function CalendarIdRequest(id) {
            this.id = id;
        }
        return CalendarIdRequest;
    }());
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
    var   /*
    */
    CalendarIdsRequest = /** @class */ (function () {
        function CalendarIdsRequest(id) {
            this.id = id;
        }
        return CalendarIdsRequest;
    }());
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
    var   /*
    */
    CalendarsServiceCreateRequest = /** @class */ (function () {
        function CalendarsServiceCreateRequest(body) {
            this.body = body;
        }
        return CalendarsServiceCreateRequest;
    }());
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
    var   /*
    */
    CalendarsServiceFindRequest = /** @class */ (function () {
        function CalendarsServiceFindRequest(search, folderId, sort, page, pageSize) {
            this.search = search;
            this.folderId = folderId;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return CalendarsServiceFindRequest;
    }());
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
    var   /*
    */
    CalendarsServiceFolderIdRequest = /** @class */ (function () {
        function CalendarsServiceFolderIdRequest(folderId) {
            this.folderId = folderId;
        }
        return CalendarsServiceFolderIdRequest;
    }());
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
    var   /*
    */
    CalendarsServiceImportRequest = /** @class */ (function () {
        function CalendarsServiceImportRequest(content, folderId) {
            this.content = content;
            this.folderId = folderId;
        }
        return CalendarsServiceImportRequest;
    }());
    if (false) {
        /** @type {?} */
        CalendarsServiceImportRequest.prototype.content;
        /** @type {?} */
        CalendarsServiceImportRequest.prototype.folderId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    CalendarsServiceImportUrlRequest = /** @class */ (function () {
        function CalendarsServiceImportUrlRequest(folderId, body) {
            this.folderId = folderId;
            this.body = body;
        }
        return CalendarsServiceImportUrlRequest;
    }());
    if (false) {
        /** @type {?} */
        CalendarsServiceImportUrlRequest.prototype.folderId;
        /** @type {?} */
        CalendarsServiceImportUrlRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    CalendarsServiceUpdateRequest = /** @class */ (function () {
        function CalendarsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return CalendarsServiceUpdateRequest;
    }());
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
    var   /*
    */
    ChangeGeoAreaRequest = /** @class */ (function () {
        function ChangeGeoAreaRequest(body) {
            this.body = body;
        }
        return ChangeGeoAreaRequest;
    }());
    if (false) {
        /** @type {?} */
        ChangeGeoAreaRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    ChangeGeoLocationRequest = /** @class */ (function () {
        function ChangeGeoLocationRequest(body) {
            this.body = body;
        }
        return ChangeGeoLocationRequest;
    }());
    if (false) {
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
    var   /*
       Change Password request message
    */
    ChangePasswordRequest = /** @class */ (function () {
        function ChangePasswordRequest(userId, oldPassword, newPassword) {
            this.userId = userId;
            this.oldPassword = oldPassword;
            this.newPassword = newPassword;
        }
        return ChangePasswordRequest;
    }());
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
    var   /*
    */
    ConfigurationIdRequest = /** @class */ (function () {
        function ConfigurationIdRequest(id) {
            this.id = id;
        }
        return ConfigurationIdRequest;
    }());
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
    var   /*
    */
    ConfigurationModelRequest = /** @class */ (function () {
        function ConfigurationModelRequest(model) {
            this.model = model;
        }
        return ConfigurationModelRequest;
    }());
    if (false) {
        /** @type {?} */
        ConfigurationModelRequest.prototype.model;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    ConfigurationTargetRequest = /** @class */ (function () {
        function ConfigurationTargetRequest(target) {
            this.target = target;
        }
        return ConfigurationTargetRequest;
    }());
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
    var   /*
    */
    ConfigurationTemplateIdRequest = /** @class */ (function () {
        function ConfigurationTemplateIdRequest(id) {
            this.id = id;
        }
        return ConfigurationTemplateIdRequest;
    }());
    if (false) {
        /** @type {?} */
        ConfigurationTemplateIdRequest.prototype.id;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    ConfigurationVersionIdRequest = /** @class */ (function () {
        function ConfigurationVersionIdRequest(id, versionId) {
            this.id = id;
            this.versionId = versionId;
        }
        return ConfigurationVersionIdRequest;
    }());
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
    var   /*
    */
    EmptyRequest = /** @class */ (function () {
        function EmptyRequest() {
        }
        return EmptyRequest;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Entities response message returned for read operation on multiple entities
    */
    var   /*
       Entities response message returned for read operation on multiple entities
    */
    EntitiesResponse = /** @class */ (function () {
        function EntitiesResponse(code, error) {
            this.code = code;
            this.error = error;
        }
        return EntitiesResponse;
    }());
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
    var   /*
    */
    EntitiesResponseOfAccount = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfAccount, _super);
        function EntitiesResponseOfAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfAccount;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfAccountTypeSummary = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfAccountTypeSummary, _super);
        function EntitiesResponseOfAccountTypeSummary() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfAccountTypeSummary;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfApiKey = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfApiKey, _super);
        function EntitiesResponseOfApiKey() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfApiKey;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfAppliance = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfAppliance, _super);
        function EntitiesResponseOfAppliance() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfAppliance;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfApplianceAgents = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfApplianceAgents, _super);
        function EntitiesResponseOfApplianceAgents() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfApplianceAgents;
    }(EntitiesResponse));
    if (false) {
        /** @type {?} */
        EntitiesResponseOfApplianceAgents.prototype.list;
        /** @type {?} */
        EntitiesResponseOfApplianceAgents.prototype.code;
        /** @type {?} */
        EntitiesResponseOfApplianceAgents.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntitiesResponseOfApplianceCommand = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfApplianceCommand, _super);
        function EntitiesResponseOfApplianceCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfApplianceCommand;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfApplianceConfiguration = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfApplianceConfiguration, _super);
        function EntitiesResponseOfApplianceConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfApplianceConfiguration;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfAuditLog = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfAuditLog, _super);
        function EntitiesResponseOfAuditLog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfAuditLog;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfCalendar = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfCalendar, _super);
        function EntitiesResponseOfCalendar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfCalendar;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfComponentConfiguration = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfComponentConfiguration, _super);
        function EntitiesResponseOfComponentConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfComponentConfiguration;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfConfiguration = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfConfiguration, _super);
        function EntitiesResponseOfConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfConfiguration;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfDistributionOfLong = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfDistributionOfLong, _super);
        function EntitiesResponseOfDistributionOfLong() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfDistributionOfLong;
    }(EntitiesResponse));
    if (false) {
        /** @type {?} */
        EntitiesResponseOfDistributionOfLong.prototype.list;
        /** @type {?} */
        EntitiesResponseOfDistributionOfLong.prototype.code;
        /** @type {?} */
        EntitiesResponseOfDistributionOfLong.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntitiesResponseOfEvent = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfEvent, _super);
        function EntitiesResponseOfEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfEvent;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfFeature = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfFeature, _super);
        function EntitiesResponseOfFeature() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfFeature;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfFeaturesGroup = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfFeaturesGroup, _super);
        function EntitiesResponseOfFeaturesGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfFeaturesGroup;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfFolder = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfFolder, _super);
        function EntitiesResponseOfFolder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfFolder;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfIntegration = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfIntegration, _super);
        function EntitiesResponseOfIntegration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfIntegration;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfReportDefinition = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfReportDefinition, _super);
        function EntitiesResponseOfReportDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfReportDefinition;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfRule = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfRule, _super);
        function EntitiesResponseOfRule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfRule;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfRuleSpec = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfRuleSpec, _super);
        function EntitiesResponseOfRuleSpec() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfRuleSpec;
    }(EntitiesResponse));
    if (false) {
        /** @type {?} */
        EntitiesResponseOfRuleSpec.prototype.list;
        /** @type {?} */
        EntitiesResponseOfRuleSpec.prototype.code;
        /** @type {?} */
        EntitiesResponseOfRuleSpec.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntitiesResponseOfSchedule = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfSchedule, _super);
        function EntitiesResponseOfSchedule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfSchedule;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfScheduledReport = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfScheduledReport, _super);
        function EntitiesResponseOfScheduledReport() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfScheduledReport;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfSearchDefinition = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfSearchDefinition, _super);
        function EntitiesResponseOfSearchDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfSearchDefinition;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfSensor = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfSensor, _super);
        function EntitiesResponseOfSensor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfSensor;
    }(EntitiesResponse));
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
    var   /*
    */
    EntitiesResponseOfSensorStatus = /** @class */ (function (_super) {
        __extends(EntitiesResponseOfSensorStatus, _super);
        function EntitiesResponseOfSensorStatus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntitiesResponseOfSensorStatus;
    }(EntitiesResponse));
    if (false) {
        /** @type {?} */
        EntitiesResponseOfSensorStatus.prototype.list;
        /** @type {?} */
        EntitiesResponseOfSensorStatus.prototype.code;
        /** @type {?} */
        EntitiesResponseOfSensorStatus.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       Entity response message returned for read operation on a single entity
    */
    var   /*
       Entity response message returned for read operation on a single entity
    */
    EntityResponse = /** @class */ (function () {
        function EntityResponse(code, error) {
            this.code = code;
            this.error = error;
        }
        return EntityResponse;
    }());
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
    var   /*
    */
    EntityResponseOfAccount = /** @class */ (function (_super) {
        __extends(EntityResponseOfAccount, _super);
        function EntityResponseOfAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfAccount;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfApiKey = /** @class */ (function (_super) {
        __extends(EntityResponseOfApiKey, _super);
        function EntityResponseOfApiKey() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfApiKey;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfAppliance = /** @class */ (function (_super) {
        __extends(EntityResponseOfAppliance, _super);
        function EntityResponseOfAppliance() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfAppliance;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfApplianceAgents = /** @class */ (function (_super) {
        __extends(EntityResponseOfApplianceAgents, _super);
        function EntityResponseOfApplianceAgents() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfApplianceAgents;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfApplianceAgents.prototype.entity;
        /** @type {?} */
        EntityResponseOfApplianceAgents.prototype.code;
        /** @type {?} */
        EntityResponseOfApplianceAgents.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfApplianceConfiguration = /** @class */ (function (_super) {
        __extends(EntityResponseOfApplianceConfiguration, _super);
        function EntityResponseOfApplianceConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfApplianceConfiguration;
    }(EntitiesResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfApplianceConfiguration.prototype.entity;
        /** @type {?} */
        EntityResponseOfApplianceConfiguration.prototype.code;
        /** @type {?} */
        EntityResponseOfApplianceConfiguration.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfApplianceDiscovery = /** @class */ (function (_super) {
        __extends(EntityResponseOfApplianceDiscovery, _super);
        function EntityResponseOfApplianceDiscovery() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfApplianceDiscovery;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfApplianceDiscovery.prototype.entity;
        /** @type {?} */
        EntityResponseOfApplianceDiscovery.prototype.code;
        /** @type {?} */
        EntityResponseOfApplianceDiscovery.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfApplianceKpiTimeSeries = /** @class */ (function (_super) {
        __extends(EntityResponseOfApplianceKpiTimeSeries, _super);
        function EntityResponseOfApplianceKpiTimeSeries() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfApplianceKpiTimeSeries;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfApplianceKpiTimeSeries.prototype.entity;
        /** @type {?} */
        EntityResponseOfApplianceKpiTimeSeries.prototype.code;
        /** @type {?} */
        EntityResponseOfApplianceKpiTimeSeries.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfApplianceStatusTimeSeries = /** @class */ (function (_super) {
        __extends(EntityResponseOfApplianceStatusTimeSeries, _super);
        function EntityResponseOfApplianceStatusTimeSeries() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfApplianceStatusTimeSeries;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfAuditLog = /** @class */ (function (_super) {
        __extends(EntityResponseOfAuditLog, _super);
        function EntityResponseOfAuditLog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfAuditLog;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfCalendar = /** @class */ (function (_super) {
        __extends(EntityResponseOfCalendar, _super);
        function EntityResponseOfCalendar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfCalendar;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfComponentConfiguration = /** @class */ (function (_super) {
        __extends(EntityResponseOfComponentConfiguration, _super);
        function EntityResponseOfComponentConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfComponentConfiguration;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfConfiguration = /** @class */ (function (_super) {
        __extends(EntityResponseOfConfiguration, _super);
        function EntityResponseOfConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfConfiguration;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfConfigurationTemplate = /** @class */ (function (_super) {
        __extends(EntityResponseOfConfigurationTemplate, _super);
        function EntityResponseOfConfigurationTemplate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfConfigurationTemplate;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfConfigurationTemplate.prototype.entity;
        /** @type {?} */
        EntityResponseOfConfigurationTemplate.prototype.code;
        /** @type {?} */
        EntityResponseOfConfigurationTemplate.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfConfigurationVersion = /** @class */ (function (_super) {
        __extends(EntityResponseOfConfigurationVersion, _super);
        function EntityResponseOfConfigurationVersion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfConfigurationVersion;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfCoordinate = /** @class */ (function (_super) {
        __extends(EntityResponseOfCoordinate, _super);
        function EntityResponseOfCoordinate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfCoordinate;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfDistributionOfLong = /** @class */ (function (_super) {
        __extends(EntityResponseOfDistributionOfLong, _super);
        function EntityResponseOfDistributionOfLong() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfDistributionOfLong;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfDistributionOfLong.prototype.entity;
        /** @type {?} */
        EntityResponseOfDistributionOfLong.prototype.code;
        /** @type {?} */
        EntityResponseOfDistributionOfLong.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfEvent = /** @class */ (function (_super) {
        __extends(EntityResponseOfEvent, _super);
        function EntityResponseOfEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfEvent;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfEventCountTimeSeries = /** @class */ (function (_super) {
        __extends(EntityResponseOfEventCountTimeSeries, _super);
        function EntityResponseOfEventCountTimeSeries() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfEventCountTimeSeries;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfFeature = /** @class */ (function (_super) {
        __extends(EntityResponseOfFeature, _super);
        function EntityResponseOfFeature() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfFeature;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfFeaturesGroup = /** @class */ (function (_super) {
        __extends(EntityResponseOfFeaturesGroup, _super);
        function EntityResponseOfFeaturesGroup() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfFeaturesGroup;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfFolder = /** @class */ (function (_super) {
        __extends(EntityResponseOfFolder, _super);
        function EntityResponseOfFolder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfFolder;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfGeoReferenceData = /** @class */ (function (_super) {
        __extends(EntityResponseOfGeoReferenceData, _super);
        function EntityResponseOfGeoReferenceData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfGeoReferenceData;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfIntegration = /** @class */ (function (_super) {
        __extends(EntityResponseOfIntegration, _super);
        function EntityResponseOfIntegration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfIntegration;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfLicense = /** @class */ (function (_super) {
        __extends(EntityResponseOfLicense, _super);
        function EntityResponseOfLicense() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfLicense;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfLoginData = /** @class */ (function (_super) {
        __extends(EntityResponseOfLoginData, _super);
        function EntityResponseOfLoginData() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfLoginData;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfReportDefinition = /** @class */ (function (_super) {
        __extends(EntityResponseOfReportDefinition, _super);
        function EntityResponseOfReportDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfReportDefinition;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfRule = /** @class */ (function (_super) {
        __extends(EntityResponseOfRule, _super);
        function EntityResponseOfRule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfRule;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfSchedule = /** @class */ (function (_super) {
        __extends(EntityResponseOfSchedule, _super);
        function EntityResponseOfSchedule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfSchedule;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfScheduledReport = /** @class */ (function (_super) {
        __extends(EntityResponseOfScheduledReport, _super);
        function EntityResponseOfScheduledReport() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfScheduledReport;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfSearchDefinition = /** @class */ (function (_super) {
        __extends(EntityResponseOfSearchDefinition, _super);
        function EntityResponseOfSearchDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfSearchDefinition;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfSensor = /** @class */ (function (_super) {
        __extends(EntityResponseOfSensor, _super);
        function EntityResponseOfSensor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfSensor;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfSensorAnalysisResults = /** @class */ (function (_super) {
        __extends(EntityResponseOfSensorAnalysisResults, _super);
        function EntityResponseOfSensorAnalysisResults() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfSensorAnalysisResults;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfSensorAnalysisResults.prototype.entity;
        /** @type {?} */
        EntityResponseOfSensorAnalysisResults.prototype.code;
        /** @type {?} */
        EntityResponseOfSensorAnalysisResults.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfSensorAnomalyInfo = /** @class */ (function (_super) {
        __extends(EntityResponseOfSensorAnomalyInfo, _super);
        function EntityResponseOfSensorAnomalyInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfSensorAnomalyInfo;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfSensorAnomalyInfo.prototype.entity;
        /** @type {?} */
        EntityResponseOfSensorAnomalyInfo.prototype.code;
        /** @type {?} */
        EntityResponseOfSensorAnomalyInfo.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfSensorStatus = /** @class */ (function (_super) {
        __extends(EntityResponseOfSensorStatus, _super);
        function EntityResponseOfSensorStatus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfSensorStatus;
    }(EntityResponse));
    if (false) {
        /** @type {?} */
        EntityResponseOfSensorStatus.prototype.entity;
        /** @type {?} */
        EntityResponseOfSensorStatus.prototype.code;
        /** @type {?} */
        EntityResponseOfSensorStatus.prototype.error;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EntityResponseOfSensorStatusTimeSeries = /** @class */ (function (_super) {
        __extends(EntityResponseOfSensorStatusTimeSeries, _super);
        function EntityResponseOfSensorStatusTimeSeries() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfSensorStatusTimeSeries;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfTreeNode = /** @class */ (function (_super) {
        __extends(EntityResponseOfTreeNode, _super);
        function EntityResponseOfTreeNode() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfTreeNode;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfUser = /** @class */ (function (_super) {
        __extends(EntityResponseOfUser, _super);
        function EntityResponseOfUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfUser;
    }(EntityResponse));
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
    var   /*
    */
    EntityResponseOfUserAccountInfo = /** @class */ (function (_super) {
        __extends(EntityResponseOfUserAccountInfo, _super);
        function EntityResponseOfUserAccountInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EntityResponseOfUserAccountInfo;
    }(EntityResponse));
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
    var   /*
    */
    EventIdRequest = /** @class */ (function () {
        function EventIdRequest(id) {
            this.id = id;
        }
        return EventIdRequest;
    }());
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
    var   /*
    */
    EventIdsRequest = /** @class */ (function () {
        function EventIdsRequest(id) {
            this.id = id;
        }
        return EventIdsRequest;
    }());
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
    var   /*
    */
    EventsServiceCreateRequest = /** @class */ (function () {
        function EventsServiceCreateRequest(body) {
            this.body = body;
        }
        return EventsServiceCreateRequest;
    }());
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
    var   /*
    */
    EventsServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        EventsServiceExportRequest.prototype.folderId;
        /** @type {?} */
        EventsServiceExportRequest.prototype.subFolders;
        /** @type {?} */
        EventsServiceExportRequest.prototype.sensorId;
        /** @type {?} */
        EventsServiceExportRequest.prototype.objectType;
        /** @type {?} */
        EventsServiceExportRequest.prototype.behaviorType;
        /** @type {?} */
        EventsServiceExportRequest.prototype.severity;
        /** @type {?} */
        EventsServiceExportRequest.prototype.status;
        /** @type {?} */
        EventsServiceExportRequest.prototype.rule;
        /** @type {?} */
        EventsServiceExportRequest.prototype.from;
        /** @type {?} */
        EventsServiceExportRequest.prototype.to;
        /** @type {?} */
        EventsServiceExportRequest.prototype.sort;
        /** @type {?} */
        EventsServiceExportRequest.prototype.format;
        /** @type {?} */
        EventsServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    EventsServiceFindInAreaRequest = /** @class */ (function () {
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
        EventsServiceFindInAreaRequest.prototype.status;
        /** @type {?} */
        EventsServiceFindInAreaRequest.prototype.rule;
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
    var   /*
    */
    EventsServiceFindRequest = /** @class */ (function () {
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
        EventsServiceFindRequest.prototype.status;
        /** @type {?} */
        EventsServiceFindRequest.prototype.rule;
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
    var   /*
    */
    EventsServiceSetClipPathRequest = /** @class */ (function () {
        function EventsServiceSetClipPathRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return EventsServiceSetClipPathRequest;
    }());
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
    var   /*
    */
    EventsServiceSetImagePathRequest = /** @class */ (function () {
        function EventsServiceSetImagePathRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return EventsServiceSetImagePathRequest;
    }());
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
    var   /*
    */
    EventsServiceSetStatusRequest = /** @class */ (function () {
        function EventsServiceSetStatusRequest(id, status) {
            this.id = id;
            this.status = status;
        }
        return EventsServiceSetStatusRequest;
    }());
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
    var   /*
    */
    EventsServiceStatisticsRequest = /** @class */ (function () {
        function EventsServiceStatisticsRequest(folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, interval, label) {
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
            this.label = label;
        }
        return EventsServiceStatisticsRequest;
    }());
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
        EventsServiceStatisticsRequest.prototype.status;
        /** @type {?} */
        EventsServiceStatisticsRequest.prototype.rule;
        /** @type {?} */
        EventsServiceStatisticsRequest.prototype.from;
        /** @type {?} */
        EventsServiceStatisticsRequest.prototype.to;
        /** @type {?} */
        EventsServiceStatisticsRequest.prototype.interval;
        /** @type {?} */
        EventsServiceStatisticsRequest.prototype.label;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    FeatureIdRequest = /** @class */ (function () {
        function FeatureIdRequest(id) {
            this.id = id;
        }
        return FeatureIdRequest;
    }());
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
    var   /*
    */
    FeatureIdsRequest = /** @class */ (function () {
        function FeatureIdsRequest(id) {
            this.id = id;
        }
        return FeatureIdsRequest;
    }());
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
    var   /*
    */
    FeaturesGroupIdRequest = /** @class */ (function () {
        function FeaturesGroupIdRequest(id) {
            this.id = id;
        }
        return FeaturesGroupIdRequest;
    }());
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
    var   /*
    */
    FeaturesGroupIdsRequest = /** @class */ (function () {
        function FeaturesGroupIdsRequest(id) {
            this.id = id;
        }
        return FeaturesGroupIdsRequest;
    }());
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
    var   /*
    */
    FeaturesGroupsServiceCreateRequest = /** @class */ (function () {
        function FeaturesGroupsServiceCreateRequest(body) {
            this.body = body;
        }
        return FeaturesGroupsServiceCreateRequest;
    }());
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
    var   /*
    */
    FeaturesGroupsServiceFindRequest = /** @class */ (function () {
        function FeaturesGroupsServiceFindRequest(search, sort) {
            this.search = search;
            this.sort = sort;
        }
        return FeaturesGroupsServiceFindRequest;
    }());
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
    var   /*
    */
    FeaturesGroupsServiceSetFeaturesRequest = /** @class */ (function () {
        function FeaturesGroupsServiceSetFeaturesRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FeaturesGroupsServiceSetFeaturesRequest;
    }());
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
    var   /*
    */
    FeaturesGroupsServiceSetNameRequest = /** @class */ (function () {
        function FeaturesGroupsServiceSetNameRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FeaturesGroupsServiceSetNameRequest;
    }());
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
    var   /*
    */
    FeaturesGroupsServiceUpdateRequest = /** @class */ (function () {
        function FeaturesGroupsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FeaturesGroupsServiceUpdateRequest;
    }());
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
    var   /*
    */
    FeaturesServiceCreateRequest = /** @class */ (function () {
        function FeaturesServiceCreateRequest(body) {
            this.body = body;
        }
        return FeaturesServiceCreateRequest;
    }());
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
    var   /*
    */
    FeaturesServiceFindRequest = /** @class */ (function () {
        function FeaturesServiceFindRequest(search, category, sort) {
            this.search = search;
            this.category = category;
            this.sort = sort;
        }
        return FeaturesServiceFindRequest;
    }());
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
    var   /*
    */
    FeaturesServiceUpdateRequest = /** @class */ (function () {
        function FeaturesServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FeaturesServiceUpdateRequest;
    }());
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
    var   /*
    */
    FolderIdRequest = /** @class */ (function () {
        function FolderIdRequest(id) {
            this.id = id;
        }
        return FolderIdRequest;
    }());
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
    var   /*
    */
    FolderIdsRequest = /** @class */ (function () {
        function FolderIdsRequest(id) {
            this.id = id;
        }
        return FolderIdsRequest;
    }());
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
    var   /*
    */
    FoldersServiceChangeGeoAreaRequest = /** @class */ (function () {
        function FoldersServiceChangeGeoAreaRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeGeoAreaRequest;
    }());
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
    var   /*
    */
    FoldersServiceChangeGeoLocationRequest = /** @class */ (function () {
        function FoldersServiceChangeGeoLocationRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeGeoLocationRequest;
    }());
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
    var   /*
    */
    FoldersServiceChangeNameRequest = /** @class */ (function () {
        function FoldersServiceChangeNameRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeNameRequest;
    }());
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
    var   /*
    */
    FoldersServiceChangeParentRequest = /** @class */ (function () {
        function FoldersServiceChangeParentRequest(id, parentId) {
            this.id = id;
            this.parentId = parentId;
        }
        return FoldersServiceChangeParentRequest;
    }());
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
    var   /*
    */
    FoldersServiceChangeTimezoneRequest = /** @class */ (function () {
        function FoldersServiceChangeTimezoneRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return FoldersServiceChangeTimezoneRequest;
    }());
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
    var   /*
    */
    FoldersServiceCreateRequest = /** @class */ (function () {
        function FoldersServiceCreateRequest(body) {
            this.body = body;
        }
        return FoldersServiceCreateRequest;
    }());
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
    var   /*
    */
    FoldersServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        FoldersServiceExportRequest.prototype.id;
        /** @type {?} */
        FoldersServiceExportRequest.prototype.search;
        /** @type {?} */
        FoldersServiceExportRequest.prototype.parentId;
        /** @type {?} */
        FoldersServiceExportRequest.prototype.sort;
        /** @type {?} */
        FoldersServiceExportRequest.prototype.format;
        /** @type {?} */
        FoldersServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    FoldersServiceFindRequest = /** @class */ (function () {
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
    var   /*
    */
    FoldersServiceGetHierarchyRequest = /** @class */ (function () {
        function FoldersServiceGetHierarchyRequest(includeSensors) {
            this.includeSensors = includeSensors;
        }
        return FoldersServiceGetHierarchyRequest;
    }());
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
    var   /*
    */
    GeoServicesReferenceRequest = /** @class */ (function () {
        function GeoServicesReferenceRequest(body) {
            this.body = body;
        }
        return GeoServicesReferenceRequest;
    }());
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
    var   /*
    */
    GeoServicesTransformRequest = /** @class */ (function () {
        function GeoServicesTransformRequest(body) {
            this.body = body;
        }
        return GeoServicesTransformRequest;
    }());
    if (false) {
        /** @type {?} */
        GeoServicesTransformRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    IntegrationIdRequest = /** @class */ (function () {
        function IntegrationIdRequest(id) {
            this.id = id;
        }
        return IntegrationIdRequest;
    }());
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
    var   /*
    */
    IntegrationIdsRequest = /** @class */ (function () {
        function IntegrationIdsRequest(id) {
            this.id = id;
        }
        return IntegrationIdsRequest;
    }());
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
    var   /*
    */
    IntegrationsServiceCreateRequest = /** @class */ (function () {
        function IntegrationsServiceCreateRequest(body) {
            this.body = body;
        }
        return IntegrationsServiceCreateRequest;
    }());
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
    var   /*
    */
    IntegrationsServiceFindRequest = /** @class */ (function () {
        function IntegrationsServiceFindRequest(search, type) {
            this.search = search;
            this.type = type;
        }
        return IntegrationsServiceFindRequest;
    }());
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
    var   /*
    */
    IntegrationsServiceUpdateRequest = /** @class */ (function () {
        function IntegrationsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return IntegrationsServiceUpdateRequest;
    }());
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
    var   /*
       Query response message returned for find operation (with pagination) on multiple entities
    */
    QueryResponse = /** @class */ (function () {
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
    var   /*
    */
    QueryResponseOfAccount = /** @class */ (function (_super) {
        __extends(QueryResponseOfAccount, _super);
        function QueryResponseOfAccount() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfAccount;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfAnomalyEventInfo = /** @class */ (function (_super) {
        __extends(QueryResponseOfAnomalyEventInfo, _super);
        function QueryResponseOfAnomalyEventInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfAnomalyEventInfo;
    }(QueryResponse));
    if (false) {
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.list;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.code;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.error;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.page;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.pageSize;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.pages;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.total;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.queryDef;
        /** @type {?} */
        QueryResponseOfAnomalyEventInfo.prototype.docType;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    QueryResponseOfAppliance = /** @class */ (function (_super) {
        __extends(QueryResponseOfAppliance, _super);
        function QueryResponseOfAppliance() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfAppliance;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfAuditLog = /** @class */ (function (_super) {
        __extends(QueryResponseOfAuditLog, _super);
        function QueryResponseOfAuditLog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfAuditLog;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfCalendar = /** @class */ (function (_super) {
        __extends(QueryResponseOfCalendar, _super);
        function QueryResponseOfCalendar() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfCalendar;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfComponentConfiguration = /** @class */ (function (_super) {
        __extends(QueryResponseOfComponentConfiguration, _super);
        function QueryResponseOfComponentConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfComponentConfiguration;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfConfiguration = /** @class */ (function (_super) {
        __extends(QueryResponseOfConfiguration, _super);
        function QueryResponseOfConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfConfiguration;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfConfigurationTemplate = /** @class */ (function (_super) {
        __extends(QueryResponseOfConfigurationTemplate, _super);
        function QueryResponseOfConfigurationTemplate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfConfigurationTemplate;
    }(QueryResponse));
    if (false) {
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.list;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.code;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.error;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.page;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.pageSize;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.pages;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.total;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.queryDef;
        /** @type {?} */
        QueryResponseOfConfigurationTemplate.prototype.docType;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    QueryResponseOfConfigurationVersion = /** @class */ (function (_super) {
        __extends(QueryResponseOfConfigurationVersion, _super);
        function QueryResponseOfConfigurationVersion() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfConfigurationVersion;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfEvent = /** @class */ (function (_super) {
        __extends(QueryResponseOfEvent, _super);
        function QueryResponseOfEvent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfEvent;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfFolder = /** @class */ (function (_super) {
        __extends(QueryResponseOfFolder, _super);
        function QueryResponseOfFolder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfFolder;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfIntegrationTarget = /** @class */ (function (_super) {
        __extends(QueryResponseOfIntegrationTarget, _super);
        function QueryResponseOfIntegrationTarget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfIntegrationTarget;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfObjectInfo = /** @class */ (function (_super) {
        __extends(QueryResponseOfObjectInfo, _super);
        function QueryResponseOfObjectInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfObjectInfo;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfReportDefinition = /** @class */ (function (_super) {
        __extends(QueryResponseOfReportDefinition, _super);
        function QueryResponseOfReportDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfReportDefinition;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfRule = /** @class */ (function (_super) {
        __extends(QueryResponseOfRule, _super);
        function QueryResponseOfRule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfRule;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfSchedule = /** @class */ (function (_super) {
        __extends(QueryResponseOfSchedule, _super);
        function QueryResponseOfSchedule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfSchedule;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfSearchDefinition = /** @class */ (function (_super) {
        __extends(QueryResponseOfSearchDefinition, _super);
        function QueryResponseOfSearchDefinition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfSearchDefinition;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfSensor = /** @class */ (function (_super) {
        __extends(QueryResponseOfSensor, _super);
        function QueryResponseOfSensor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfSensor;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfSensorAnalysisResults = /** @class */ (function (_super) {
        __extends(QueryResponseOfSensorAnalysisResults, _super);
        function QueryResponseOfSensorAnalysisResults() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfSensorAnalysisResults;
    }(QueryResponse));
    if (false) {
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.list;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.code;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.error;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.page;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.pageSize;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.pages;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.total;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.queryDef;
        /** @type {?} */
        QueryResponseOfSensorAnalysisResults.prototype.docType;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    QueryResponseOfTreeItem = /** @class */ (function (_super) {
        __extends(QueryResponseOfTreeItem, _super);
        function QueryResponseOfTreeItem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfTreeItem;
    }(QueryResponse));
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
    var   /*
    */
    QueryResponseOfUser = /** @class */ (function (_super) {
        __extends(QueryResponseOfUser, _super);
        function QueryResponseOfUser() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return QueryResponseOfUser;
    }(QueryResponse));
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
    var   /*
    */
    ReportIdRequest = /** @class */ (function () {
        function ReportIdRequest(id) {
            this.id = id;
        }
        return ReportIdRequest;
    }());
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
    var   /*
    */
    ReportIdsRequest = /** @class */ (function () {
        function ReportIdsRequest(id) {
            this.id = id;
        }
        return ReportIdsRequest;
    }());
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
    var   /*
    */
    ReportsServiceCreateRequest = /** @class */ (function () {
        function ReportsServiceCreateRequest(body) {
            this.body = body;
        }
        return ReportsServiceCreateRequest;
    }());
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
    var   /*
    */
    ReportsServiceFindRequest = /** @class */ (function () {
        function ReportsServiceFindRequest(search) {
            this.search = search;
        }
        return ReportsServiceFindRequest;
    }());
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
    var   /*
    */
    ReportsServiceUpdateRequest = /** @class */ (function () {
        function ReportsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return ReportsServiceUpdateRequest;
    }());
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
    var   /*
    */
    RuleIdRequest = /** @class */ (function () {
        function RuleIdRequest(id) {
            this.id = id;
        }
        return RuleIdRequest;
    }());
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
    var   /*
    */
    RuleIdsRequest = /** @class */ (function () {
        function RuleIdsRequest(id) {
            this.id = id;
        }
        return RuleIdsRequest;
    }());
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
    var   /*
    */
    RulesServiceCreateRequest = /** @class */ (function () {
        function RulesServiceCreateRequest(body) {
            this.body = body;
        }
        return RulesServiceCreateRequest;
    }());
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
    var   /*
    */
    RulesServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        RulesServiceExportRequest.prototype.folderId;
        /** @type {?} */
        RulesServiceExportRequest.prototype.sensorId;
        /** @type {?} */
        RulesServiceExportRequest.prototype.search;
        /** @type {?} */
        RulesServiceExportRequest.prototype.behaviorType;
        /** @type {?} */
        RulesServiceExportRequest.prototype.severity;
        /** @type {?} */
        RulesServiceExportRequest.prototype.sort;
        /** @type {?} */
        RulesServiceExportRequest.prototype.format;
        /** @type {?} */
        RulesServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    RulesServiceFindAnomalyRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        RulesServiceFindAnomalyRequest.prototype.folderId;
        /** @type {?} */
        RulesServiceFindAnomalyRequest.prototype.sensorId;
        /** @type {?} */
        RulesServiceFindAnomalyRequest.prototype.search;
        /** @type {?} */
        RulesServiceFindAnomalyRequest.prototype.severity;
        /** @type {?} */
        RulesServiceFindAnomalyRequest.prototype.sort;
        /** @type {?} */
        RulesServiceFindAnomalyRequest.prototype.page;
        /** @type {?} */
        RulesServiceFindAnomalyRequest.prototype.pageSize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    RulesServiceFindRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        RulesServiceFindRequest.prototype.folderId;
        /** @type {?} */
        RulesServiceFindRequest.prototype.sensorId;
        /** @type {?} */
        RulesServiceFindRequest.prototype.search;
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
    var   /*
    */
    RulesServiceUpdateRequest = /** @class */ (function () {
        function RulesServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return RulesServiceUpdateRequest;
    }());
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
    var   /*
    */
    ScheduleIdRequest = /** @class */ (function () {
        function ScheduleIdRequest(id) {
            this.id = id;
        }
        return ScheduleIdRequest;
    }());
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
    var   /*
    */
    ScheduleIdsRequest = /** @class */ (function () {
        function ScheduleIdsRequest(id) {
            this.id = id;
        }
        return ScheduleIdsRequest;
    }());
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
    var   /*
    */
    ScheduledReportIdRequest = /** @class */ (function () {
        function ScheduledReportIdRequest(id) {
            this.id = id;
        }
        return ScheduledReportIdRequest;
    }());
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
    var   /*
    */
    ScheduledReportIdsRequest = /** @class */ (function () {
        function ScheduledReportIdsRequest(id) {
            this.id = id;
        }
        return ScheduledReportIdsRequest;
    }());
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
    var   /*
    */
    ScheduledReportsServiceCreateRequest = /** @class */ (function () {
        function ScheduledReportsServiceCreateRequest(body) {
            this.body = body;
        }
        return ScheduledReportsServiceCreateRequest;
    }());
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
    var   /*
    */
    ScheduledReportsServiceFindRequest = /** @class */ (function () {
        function ScheduledReportsServiceFindRequest(search) {
            this.search = search;
        }
        return ScheduledReportsServiceFindRequest;
    }());
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
    var   /*
    */
    ScheduledReportsServiceUpdateRequest = /** @class */ (function () {
        function ScheduledReportsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return ScheduledReportsServiceUpdateRequest;
    }());
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
    var   /*
    */
    SchedulesServiceCreateRequest = /** @class */ (function () {
        function SchedulesServiceCreateRequest(body) {
            this.body = body;
        }
        return SchedulesServiceCreateRequest;
    }());
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
    var   /*
    */
    SchedulesServiceFindRequest = /** @class */ (function () {
        function SchedulesServiceFindRequest(search, folderId, sort, page, pageSize) {
            this.search = search;
            this.folderId = folderId;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return SchedulesServiceFindRequest;
    }());
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
    var   /*
    */
    SchedulesServiceFolderIdRequest = /** @class */ (function () {
        function SchedulesServiceFolderIdRequest(folderId) {
            this.folderId = folderId;
        }
        return SchedulesServiceFolderIdRequest;
    }());
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
    var   /*
    */
    SchedulesServiceUpdateRequest = /** @class */ (function () {
        function SchedulesServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SchedulesServiceUpdateRequest;
    }());
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
    var   /*
    */
    SearchIdRequest = /** @class */ (function () {
        function SearchIdRequest(id) {
            this.id = id;
        }
        return SearchIdRequest;
    }());
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
    var   /*
    */
    SearchIdsRequest = /** @class */ (function () {
        function SearchIdsRequest(id) {
            this.id = id;
        }
        return SearchIdsRequest;
    }());
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
    var   /*
    */
    SearchServiceCreateRequest = /** @class */ (function () {
        function SearchServiceCreateRequest(body) {
            this.body = body;
        }
        return SearchServiceCreateRequest;
    }());
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
    var   /*
    */
    SearchServiceExecuteRequest = /** @class */ (function () {
        function SearchServiceExecuteRequest(body) {
            this.body = body;
        }
        return SearchServiceExecuteRequest;
    }());
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
    var   /*
    */
    SearchServiceFindRequest = /** @class */ (function () {
        function SearchServiceFindRequest(search, sort, page, pageSize) {
            this.search = search;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return SearchServiceFindRequest;
    }());
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
    var   /*
    */
    SearchServiceUpdateRequest = /** @class */ (function () {
        function SearchServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SearchServiceUpdateRequest;
    }());
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
    var   /*
    */
    SensorAnalysisIdRequest = /** @class */ (function () {
        function SensorAnalysisIdRequest(sensorId) {
            this.sensorId = sensorId;
        }
        return SensorAnalysisIdRequest;
    }());
    if (false) {
        /** @type {?} */
        SensorAnalysisIdRequest.prototype.sensorId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SensorIdRequest = /** @class */ (function () {
        function SensorIdRequest(id) {
            this.id = id;
        }
        return SensorIdRequest;
    }());
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
    var   /*
    */
    SensorIdsRequest = /** @class */ (function () {
        function SensorIdsRequest(id) {
            this.id = id;
        }
        return SensorIdsRequest;
    }());
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
    var   /*
    */
    SensorsCountRequest = /** @class */ (function () {
        function SensorsCountRequest(folderId, subFolders, sensorType, status, streamType) {
            this.folderId = folderId;
            this.subFolders = subFolders;
            this.sensorType = sensorType;
            this.status = status;
            this.streamType = streamType;
        }
        return SensorsCountRequest;
    }());
    if (false) {
        /** @type {?} */
        SensorsCountRequest.prototype.folderId;
        /** @type {?} */
        SensorsCountRequest.prototype.subFolders;
        /** @type {?} */
        SensorsCountRequest.prototype.sensorType;
        /** @type {?} */
        SensorsCountRequest.prototype.status;
        /** @type {?} */
        SensorsCountRequest.prototype.streamType;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SensorsServiceAttachRequest = /** @class */ (function () {
        function SensorsServiceAttachRequest(id, applianceId) {
            this.id = id;
            this.applianceId = applianceId;
        }
        return SensorsServiceAttachRequest;
    }());
    if (false) {
        /** @type {?} */
        SensorsServiceAttachRequest.prototype.id;
        /** @type {?} */
        SensorsServiceAttachRequest.prototype.applianceId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SensorsServiceChangeFolderRequest = /** @class */ (function () {
        function SensorsServiceChangeFolderRequest(id, folderId) {
            this.id = id;
            this.folderId = folderId;
        }
        return SensorsServiceChangeFolderRequest;
    }());
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
    var   /*
    */
    SensorsServiceChangeFovRequest = /** @class */ (function () {
        function SensorsServiceChangeFovRequest(id, azimuth, body) {
            this.id = id;
            this.azimuth = azimuth;
            this.body = body;
        }
        return SensorsServiceChangeFovRequest;
    }());
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
    var   /*
    */
    SensorsServiceChangeGeoLocationRequest = /** @class */ (function () {
        function SensorsServiceChangeGeoLocationRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SensorsServiceChangeGeoLocationRequest;
    }());
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
    var   /*
    */
    SensorsServiceChangeNameRequest = /** @class */ (function () {
        function SensorsServiceChangeNameRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SensorsServiceChangeNameRequest;
    }());
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
    var   /*
    */
    SensorsServiceChangeStatusRequest = /** @class */ (function () {
        function SensorsServiceChangeStatusRequest(id, status) {
            this.id = id;
            this.status = status;
        }
        return SensorsServiceChangeStatusRequest;
    }());
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
    var   /*
    */
    SensorsServiceCreateRequest = /** @class */ (function () {
        function SensorsServiceCreateRequest(body) {
            this.body = body;
        }
        return SensorsServiceCreateRequest;
    }());
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
    var   /*
    */
    SensorsServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        SensorsServiceExportRequest.prototype.folderId;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.subFolders;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.search;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.type;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.status;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.stream;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.sort;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.format;
        /** @type {?} */
        SensorsServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SensorsServiceFindRequest = /** @class */ (function () {
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
    var   /*
    */
    SensorsServiceSetRefImageRequest = /** @class */ (function () {
        function SensorsServiceSetRefImageRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SensorsServiceSetRefImageRequest;
    }());
    if (false) {
        /** @type {?} */
        SensorsServiceSetRefImageRequest.prototype.id;
        /** @type {?} */
        SensorsServiceSetRefImageRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SensorsServiceStatusOvertimeRequest = /** @class */ (function () {
        function SensorsServiceStatusOvertimeRequest(id, from, to) {
            this.id = id;
            this.from = from;
            this.to = to;
        }
        return SensorsServiceStatusOvertimeRequest;
    }());
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
    var   /*
    */
    SensorsServiceUpdateRequest = /** @class */ (function () {
        function SensorsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SensorsServiceUpdateRequest;
    }());
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
    var   /*
       Response of byte array
    */
    StreamResponse = /** @class */ (function () {
        function StreamResponse(content) {
            this.content = content;
        }
        return StreamResponse;
    }());
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
    var   /*
    */
    SysAccountExportRequest = /** @class */ (function () {
        function SysAccountExportRequest(accountId, password) {
            this.accountId = accountId;
            this.password = password;
        }
        return SysAccountExportRequest;
    }());
    if (false) {
        /** @type {?} */
        SysAccountExportRequest.prototype.accountId;
        /** @type {?} */
        SysAccountExportRequest.prototype.password;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysAccountImportRequest = /** @class */ (function () {
        function SysAccountImportRequest(password) {
            this.password = password;
        }
        return SysAccountImportRequest;
    }());
    if (false) {
        /** @type {?} */
        SysAccountImportRequest.prototype.password;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysAppliancesCountRequest = /** @class */ (function () {
        function SysAppliancesCountRequest(accountId, folderId, subFolders) {
            this.accountId = accountId;
            this.folderId = folderId;
            this.subFolders = subFolders;
        }
        return SysAppliancesCountRequest;
    }());
    if (false) {
        /** @type {?} */
        SysAppliancesCountRequest.prototype.accountId;
        /** @type {?} */
        SysAppliancesCountRequest.prototype.folderId;
        /** @type {?} */
        SysAppliancesCountRequest.prototype.subFolders;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysAppliancesServiceFindRequest = /** @class */ (function () {
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
    var   /*
    */
    SysAppliancesServiceGetCommandsRequest = /** @class */ (function () {
        function SysAppliancesServiceGetCommandsRequest(accountId, applianceId, status) {
            this.accountId = accountId;
            this.applianceId = applianceId;
            this.status = status;
        }
        return SysAppliancesServiceGetCommandsRequest;
    }());
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
    var   /*
    */
    SysConfigurationsServiceCreateRequest = /** @class */ (function () {
        function SysConfigurationsServiceCreateRequest(body) {
            this.body = body;
        }
        return SysConfigurationsServiceCreateRequest;
    }());
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
    var   /*
    */
    SysConfigurationsServiceCreateTemplateRequest = /** @class */ (function () {
        function SysConfigurationsServiceCreateTemplateRequest(body) {
            this.body = body;
        }
        return SysConfigurationsServiceCreateTemplateRequest;
    }());
    if (false) {
        /** @type {?} */
        SysConfigurationsServiceCreateTemplateRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysConfigurationsServiceCreateVersionRequest = /** @class */ (function () {
        function SysConfigurationsServiceCreateVersionRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SysConfigurationsServiceCreateVersionRequest;
    }());
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
    var   /*
    */
    SysConfigurationsServiceDeleteVersionRequest = /** @class */ (function () {
        function SysConfigurationsServiceDeleteVersionRequest(id, versionId) {
            this.id = id;
            this.versionId = versionId;
        }
        return SysConfigurationsServiceDeleteVersionRequest;
    }());
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
    var   /*
    */
    SysConfigurationsServiceFindRequest = /** @class */ (function () {
        function SysConfigurationsServiceFindRequest(target, search, sort, page, pageSize) {
            this.target = target;
            this.search = search;
            this.sort = sort;
            this.page = page;
            this.pageSize = pageSize;
        }
        return SysConfigurationsServiceFindRequest;
    }());
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
    var   /*
    */
    SysConfigurationsServiceFindTemplateRequest = /** @class */ (function () {
        function SysConfigurationsServiceFindTemplateRequest(page, pageSize) {
            this.page = page;
            this.pageSize = pageSize;
        }
        return SysConfigurationsServiceFindTemplateRequest;
    }());
    if (false) {
        /** @type {?} */
        SysConfigurationsServiceFindTemplateRequest.prototype.page;
        /** @type {?} */
        SysConfigurationsServiceFindTemplateRequest.prototype.pageSize;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysConfigurationsServiceUpdateRequest = /** @class */ (function () {
        function SysConfigurationsServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SysConfigurationsServiceUpdateRequest;
    }());
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
    var   /*
    */
    SysConfigurationsServiceUpdateTemplateRequest = /** @class */ (function () {
        function SysConfigurationsServiceUpdateTemplateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SysConfigurationsServiceUpdateTemplateRequest;
    }());
    if (false) {
        /** @type {?} */
        SysConfigurationsServiceUpdateTemplateRequest.prototype.id;
        /** @type {?} */
        SysConfigurationsServiceUpdateTemplateRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysConfigurationsServiceUpdateVersionRequest = /** @class */ (function () {
        function SysConfigurationsServiceUpdateVersionRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return SysConfigurationsServiceUpdateVersionRequest;
    }());
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
    var   /*
    */
    SysEventIdRequest = /** @class */ (function () {
        function SysEventIdRequest(id, accountId) {
            this.id = id;
            this.accountId = accountId;
        }
        return SysEventIdRequest;
    }());
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
    var   /*
    */
    SysEventsServiceFindInAreaRequest = /** @class */ (function () {
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
    var   /*
    */
    SysEventsServiceStatisticsRequest = /** @class */ (function () {
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
    var   /*
    */
    SysKeysServiceCreateApiKeyRequest = /** @class */ (function () {
        function SysKeysServiceCreateApiKeyRequest(body) {
            this.body = body;
        }
        return SysKeysServiceCreateApiKeyRequest;
    }());
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
    var   /*
    */
    SysKeysServiceCreatePasswordRequest = /** @class */ (function () {
        function SysKeysServiceCreatePasswordRequest(days, user) {
            this.days = days;
            this.user = user;
        }
        return SysKeysServiceCreatePasswordRequest;
    }());
    if (false) {
        /** @type {?} */
        SysKeysServiceCreatePasswordRequest.prototype.days;
        /** @type {?} */
        SysKeysServiceCreatePasswordRequest.prototype.user;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysKeysServiceCreateTokenRequest = /** @class */ (function () {
        function SysKeysServiceCreateTokenRequest(accountId, userId, ttl) {
            this.accountId = accountId;
            this.userId = userId;
            this.ttl = ttl;
        }
        return SysKeysServiceCreateTokenRequest;
    }());
    if (false) {
        /** @type {?} */
        SysKeysServiceCreateTokenRequest.prototype.accountId;
        /** @type {?} */
        SysKeysServiceCreateTokenRequest.prototype.userId;
        /** @type {?} */
        SysKeysServiceCreateTokenRequest.prototype.ttl;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysSensorsCountRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        SysSensorsCountRequest.prototype.accountId;
        /** @type {?} */
        SysSensorsCountRequest.prototype.folderId;
        /** @type {?} */
        SysSensorsCountRequest.prototype.subFolders;
        /** @type {?} */
        SysSensorsCountRequest.prototype.sensorType;
        /** @type {?} */
        SysSensorsCountRequest.prototype.status;
        /** @type {?} */
        SysSensorsCountRequest.prototype.streamType;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    SysSensorsServiceFindRequest = /** @class */ (function () {
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
    var   /*
       Token request message
    */
    TokenRequest = /** @class */ (function () {
        function TokenRequest(code, error, accountId) {
            this.code = code;
            this.error = error;
            this.accountId = accountId;
        }
        return TokenRequest;
    }());
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
    var   /*
    */
    UserByEmailRequest = /** @class */ (function () {
        function UserByEmailRequest(email) {
            this.email = email;
        }
        return UserByEmailRequest;
    }());
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
    var   /*
    */
    UserIdRequest = /** @class */ (function () {
        function UserIdRequest(id) {
            this.id = id;
        }
        return UserIdRequest;
    }());
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
    var   /*
    */
    UserIdsRequest = /** @class */ (function () {
        function UserIdsRequest(id) {
            this.id = id;
        }
        return UserIdsRequest;
    }());
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
    var   /*
    */
    UserServiceChangeMobileRequest = /** @class */ (function () {
        function UserServiceChangeMobileRequest(body) {
            this.body = body;
        }
        return UserServiceChangeMobileRequest;
    }());
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
    var   /*
    */
    UserServiceChangeNameRequest = /** @class */ (function () {
        function UserServiceChangeNameRequest(body) {
            this.body = body;
        }
        return UserServiceChangeNameRequest;
    }());
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
    var   /*
    */
    UserServiceChangePasswordRequest = /** @class */ (function () {
        function UserServiceChangePasswordRequest(body) {
            this.body = body;
        }
        return UserServiceChangePasswordRequest;
    }());
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
    var   /*
    */
    UserServiceCheckPasswordRequest = /** @class */ (function () {
        function UserServiceCheckPasswordRequest(body) {
            this.body = body;
        }
        return UserServiceCheckPasswordRequest;
    }());
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
    var   /*
    */
    UserServiceLoginRequest = /** @class */ (function () {
        function UserServiceLoginRequest(body) {
            this.body = body;
        }
        return UserServiceLoginRequest;
    }());
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
    var   /*
    */
    UserServiceResetPasswordRequest = /** @class */ (function () {
        function UserServiceResetPasswordRequest(code) {
            this.code = code;
        }
        return UserServiceResetPasswordRequest;
    }());
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
    var   /*
    */
    UserServiceSendVerificationRequest = /** @class */ (function () {
        function UserServiceSendVerificationRequest(body) {
            this.body = body;
        }
        return UserServiceSendVerificationRequest;
    }());
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
    var   /*
    */
    UserServiceSwitchAccountRequest = /** @class */ (function () {
        function UserServiceSwitchAccountRequest(body) {
            this.body = body;
        }
        return UserServiceSwitchAccountRequest;
    }());
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
    var   /*
    */
    UserServiceVerifyLoginRequest = /** @class */ (function () {
        function UserServiceVerifyLoginRequest(key) {
            this.key = key;
        }
        return UserServiceVerifyLoginRequest;
    }());
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
    var   /*
    */
    UsersServiceChangeDefaultAccountRequest = /** @class */ (function () {
        function UsersServiceChangeDefaultAccountRequest(id, accountId) {
            this.id = id;
            this.accountId = accountId;
        }
        return UsersServiceChangeDefaultAccountRequest;
    }());
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
    var   /*
    */
    UsersServiceChangeMobileRequest = /** @class */ (function () {
        function UsersServiceChangeMobileRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return UsersServiceChangeMobileRequest;
    }());
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
    var   /*
    */
    UsersServiceChangeNameRequest = /** @class */ (function () {
        function UsersServiceChangeNameRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return UsersServiceChangeNameRequest;
    }());
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
    var   /*
    */
    UsersServiceChangeRoleRequest = /** @class */ (function () {
        function UsersServiceChangeRoleRequest(id, role) {
            this.id = id;
            this.role = role;
        }
        return UsersServiceChangeRoleRequest;
    }());
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
    var   /*
    */
    UsersServiceChangeStatusRequest = /** @class */ (function () {
        function UsersServiceChangeStatusRequest(id, status) {
            this.id = id;
            this.status = status;
        }
        return UsersServiceChangeStatusRequest;
    }());
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
    var   /*
    */
    UsersServiceChangeTypeRequest = /** @class */ (function () {
        function UsersServiceChangeTypeRequest(id, type) {
            this.id = id;
            this.type = type;
        }
        return UsersServiceChangeTypeRequest;
    }());
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
    var   /*
    */
    UsersServiceCreateRequest = /** @class */ (function () {
        function UsersServiceCreateRequest(body) {
            this.body = body;
        }
        return UsersServiceCreateRequest;
    }());
    if (false) {
        /** @type {?} */
        UsersServiceCreateRequest.prototype.body;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    UsersServiceExportRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        UsersServiceExportRequest.prototype.search;
        /** @type {?} */
        UsersServiceExportRequest.prototype.type;
        /** @type {?} */
        UsersServiceExportRequest.prototype.status;
        /** @type {?} */
        UsersServiceExportRequest.prototype.sort;
        /** @type {?} */
        UsersServiceExportRequest.prototype.format;
        /** @type {?} */
        UsersServiceExportRequest.prototype.fields;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
    */
    var   /*
    */
    UsersServiceFindRequest = /** @class */ (function () {
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
    if (false) {
        /** @type {?} */
        UsersServiceFindRequest.prototype.accountId;
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
    var   /*
    */
    UsersServiceInviteRequest = /** @class */ (function () {
        function UsersServiceInviteRequest(body) {
            this.body = body;
        }
        return UsersServiceInviteRequest;
    }());
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
    var   /*
    */
    UsersServiceSetRolesRequest = /** @class */ (function () {
        function UsersServiceSetRolesRequest(id, roles) {
            this.id = id;
            this.roles = roles;
        }
        return UsersServiceSetRolesRequest;
    }());
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
    var   /*
    */
    UsersServiceUpdateRequest = /** @class */ (function () {
        function UsersServiceUpdateRequest(id, body) {
            this.id = id;
            this.body = body;
        }
        return UsersServiceUpdateRequest;
    }());
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
    /*
       @WebSocketMessage Message header for all web socket messages
    */
    var   /*
       @WebSocketMessage Message header for all web socket messages
    */
    WebSocketMessageHeader = /** @class */ (function () {
        function WebSocketMessageHeader(opcode, version, messageId, correlationId, sessionId) {
            this.op = opcode;
            this.ver = version;
            this.id = messageId;
            this.cid = correlationId;
            this.sid = sessionId;
        }
        return WebSocketMessageHeader;
    }());
    if (false) {
        /** @type {?} */
        WebSocketMessageHeader.prototype.op;
        /** @type {?} */
        WebSocketMessageHeader.prototype.ver;
        /** @type {?} */
        WebSocketMessageHeader.prototype.id;
        /** @type {?} */
        WebSocketMessageHeader.prototype.cid;
        /** @type {?} */
        WebSocketMessageHeader.prototype.sid;
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
    var tokenKey = 'portalAccessToken';
    /** @type {?} */
    var loginKey = 'portalLoginData';
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
        /**
         * Download is HTTP GET action but the content is blob
         * @param {?} fileName
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        RestUtil.prototype.download = /**
         * Download is HTTP GET action but the content is blob
         * @param {?} fileName
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        function (fileName, url) {
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            /** @type {?} */
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            /** @type {?} */
            var ext = 'json';
            params.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) {
                /** @type {?} */
                var arr = p.split('=');
                if (arr.length > 1) {
                    if (arr[0].toLowerCase() === 'format') {
                        ext = arr[1];
                    }
                }
            }));
            /** @type {?} */
            var downloadLink = fileName + '.' + ext;
            return this.http.get(resourceUrl, { responseType: 'blob' }).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var downloadURL = window.URL.createObjectURL(data);
                /** @type {?} */
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = downloadLink;
                link.click();
            }));
        };
        /**
         * HTTP GET action
         */
        /**
         * HTTP GET action
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        RestUtil.prototype.get = /**
         * HTTP GET action
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        function (url) {
            var _this = this;
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            /** @type {?} */
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .get(resourceUrl, { headers: this.headers, observe: 'response' })
                .pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.processResponse(res); })), operators.catchError(this.handleError));
        };
        /**
         * HTTP POST action
         */
        /**
         * HTTP POST action
         * @param {?} url
         * @param {?} body
         * @param {...?} params
         * @return {?}
         */
        RestUtil.prototype.post = /**
         * HTTP POST action
         * @param {?} url
         * @param {?} body
         * @param {...?} params
         * @return {?}
         */
        function (url, body) {
            var _this = this;
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            /** @type {?} */
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .post(resourceUrl, body, { headers: this.headers, observe: 'response' })
                .pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.processResponse(res); })), operators.catchError(this.handleError));
        };
        /**
         * HTTP PUT action
         */
        /**
         * HTTP PUT action
         * @param {?} url
         * @param {?} body
         * @param {...?} params
         * @return {?}
         */
        RestUtil.prototype.put = /**
         * HTTP PUT action
         * @param {?} url
         * @param {?} body
         * @param {...?} params
         * @return {?}
         */
        function (url, body) {
            var _this = this;
            var params = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                params[_i - 2] = arguments[_i];
            }
            /** @type {?} */
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .put(resourceUrl, body, { headers: this.headers, observe: 'response' })
                .pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.processResponse(res); })), operators.catchError(this.handleError));
        };
        /**
         * HTTP DELETE action
         */
        /**
         * HTTP DELETE action
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        RestUtil.prototype.delete = /**
         * HTTP DELETE action
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        function (url) {
            var _this = this;
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            /** @type {?} */
            var resourceUrl = this.buildUrl.apply(this, __spread([url], params));
            return this.http
                .delete(resourceUrl, { headers: this.headers, observe: 'response' })
                .pipe(operators.map((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return _this.processResponse(res); })), operators.catchError(this.handleError));
        };
        /**
         * Construct URL with parameters
         */
        /**
         * Construct URL with parameters
         * @private
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        RestUtil.prototype.buildUrl = /**
         * Construct URL with parameters
         * @private
         * @param {?} url
         * @param {...?} params
         * @return {?}
         */
        function (url) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return (params === null) ? url : (params.length === 0) ? url : "" + url + (params && params.length > 0 ? '?' + params.join('&') : '');
        };
        /**
         * Process the response, extract and refresh access token and return the body
         */
        /**
         * Process the response, extract and refresh access token and return the body
         * @private
         * @param {?} response
         * @return {?}
         */
        RestUtil.prototype.processResponse = /**
         * Process the response, extract and refresh access token and return the body
         * @private
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (response.status === 401) {
                removeToken();
                throw new Error('Access denied, reset token: ' + response.status);
            }
            else if (response.status > 400) {
                throw new Error('HTTP status error: ' + response.status);
            }
            // Get access token from header and update authentication service
            /** @type {?} */
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
        /**
         * Error handling
         * @private
         * @param {?} error
         * @return {?}
         */
        RestUtil.prototype.handleError = /**
         * Error handling
         * @private
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error.code) {
                return Promise.reject(error);
            }
            return Promise.reject(error.message || error);
        };
        RestUtil.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        RestUtil.ctorParameters = function () { return [
            { type: http.HttpClient }
        ]; };
        return RestUtil;
    }());
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
    var CoreConfig = /** @class */ (function () {
        function CoreConfig() {
        }
        return CoreConfig;
    }());
    if (false) {
        /** @type {?} */
        CoreConfig.prototype.api;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        AccountsService.prototype.find = /**
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
        function (search, type, status, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of accounts and filter
         * \@Return: StreamContent
         * @param {?=} name
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        AccountsService.prototype.exportFormat = /**
         * Export list of accounts and filter
         * \@Return: StreamContent
         * @param {?=} name
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (name, type, status, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Get single account by id
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @return {?}
         */
        AccountsService.prototype.get = /**
         * Get single account by id
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Change account geo-area (polygon)
         * @Return: EntityResponse<Account>
         */
        /**
         * Change account geo-area (polygon)
         * \@Return: EntityResponse<Account>
         * @param {?=} body
         * @return {?}
         */
        AccountsService.prototype.changeGeoArea = /**
         * Change account geo-area (polygon)
         * \@Return: EntityResponse<Account>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.put(this.baseUrl + "/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change account geo-location (center)
         * @Return: EntityResponse<Account> The changed account
         */
        /**
         * Change account geo-location (center)
         * \@Return: EntityResponse<Account> The changed account
         * @param {?=} body
         * @return {?}
         */
        AccountsService.prototype.changeGeoLocation = /**
         * Change account geo-location (center)
         * \@Return: EntityResponse<Account> The changed account
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.put(this.baseUrl + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Get default geo location
         * @Return: EntityResponse<Coordinate> The account location
         */
        /**
         * Get default geo location
         * \@Return: EntityResponse<Coordinate> The account location
         * @return {?}
         */
        AccountsService.prototype.getDefaultLocation = /**
         * Get default geo location
         * \@Return: EntityResponse<Coordinate> The account location
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/geoLocation");
        };
        /**
         * Get aggregated summary report of total number of sensors and devices with error / warning status
         * @Return: EntitiesResponse<DistributionOfLong> The list of health status distribution
         */
        /**
         * Get aggregated summary report of total number of sensors and devices with error / warning status
         * \@Return: EntitiesResponse<DistributionOfLong> The list of health status distribution
         * @return {?}
         */
        AccountsService.prototype.getAccountHealthSummary = /**
         * Get aggregated summary report of total number of sensors and devices with error / warning status
         * \@Return: EntitiesResponse<DistributionOfLong> The list of health status distribution
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/health");
        };
        AccountsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AccountsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return AccountsService;
    }());
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
     * List of anomaly related actions for the anomaly detection service
     * \@RequestHeader X-API-KEY The key to identify the application (console)
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
        /**
         * Get training results of all sensors with anomaly enabled flag ordered by the last training time
         * \@Return: QueryResponse<SensorAnalysisResults>
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AnomalyService.prototype.getSensorsAnalysisResults = /**
         * Get training results of all sensors with anomaly enabled flag ordered by the last training time
         * \@Return: QueryResponse<SensorAnalysisResults>
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Update sensor analysis results bach for a specific sensors
         * \@Return: EntityResponse<SensorAnalysisResults>
         * @param {?=} sensorId
         * @param {?=} body
         * @return {?}
         */
        AnomalyService.prototype.update = /**
         * Update sensor analysis results bach for a specific sensors
         * \@Return: EntityResponse<SensorAnalysisResults>
         * @param {?=} sensorId
         * @param {?=} body
         * @return {?}
         */
        function (sensorId, body) {
            return this.rest.put(this.baseUrl + "/sensor/" + sensorId, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete all analysis results for a specific sensors
         * @Return: ActionResponse
         */
        /**
         * Delete all analysis results for a specific sensors
         * \@Return: ActionResponse
         * @param {?=} sensorId
         * @return {?}
         */
        AnomalyService.prototype.delete = /**
         * Delete all analysis results for a specific sensors
         * \@Return: ActionResponse
         * @param {?=} sensorId
         * @return {?}
         */
        function (sensorId) {
            return this.rest.delete(this.baseUrl + "/sensor/" + sensorId);
        };
        /**
         * Get sensor info for anomaly
         * @Return: EntityResponse<SensorAnomalyInfo>
         */
        /**
         * Get sensor info for anomaly
         * \@Return: EntityResponse<SensorAnomalyInfo>
         * @param {?=} sensorId
         * @return {?}
         */
        AnomalyService.prototype.getSensorAnomalyInfo = /**
         * Get sensor info for anomaly
         * \@Return: EntityResponse<SensorAnomalyInfo>
         * @param {?=} sensorId
         * @return {?}
         */
        function (sensorId) {
            return this.rest.get(this.baseUrl + "/sensor/" + sensorId + "/info");
        };
        /**
         * Find list of anomaly event info objects per sensor in a given time period
         * @return QueryResponse<AnomalyEventInfo> List of anomaly event info objects
         */
        /**
         * Find list of anomaly event info objects per sensor in a given time period
         * @param {?=} accountId
         * @param {?=} sensorId
         * @param {?=} status
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?} QueryResponse<AnomalyEventInfo> List of anomaly event info objects
         */
        AnomalyService.prototype.findAnomalyEventInfo = /**
         * Find list of anomaly event info objects per sensor in a given time period
         * @param {?=} accountId
         * @param {?=} sensorId
         * @param {?=} status
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?} QueryResponse<AnomalyEventInfo> List of anomaly event info objects
         */
        function (accountId, sensorId, status, from, to, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Update sensor anomaly rule attributed
         * @param {?=} sensorId
         * @param {?=} body
         * @return {?} ActionResponse
         */
        AnomalyService.prototype.updateAnomalyRule = /**
         * Update sensor anomaly rule attributed
         * @param {?=} sensorId
         * @param {?=} body
         * @return {?} ActionResponse
         */
        function (sensorId, body) {
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
        /**
         * Create dummy event (for anomaly tests only)
         * This method is used for testing only, the only service generates events in the system is the event service
         * @param {?=} body
         * @return {?} EntityResponse<Event>
         */
        AnomalyService.prototype.createDummyEvent = /**
         * Create dummy event (for anomaly tests only)
         * This method is used for testing only, the only service generates events in the system is the event service
         * @param {?=} body
         * @return {?} EntityResponse<Event>
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/event", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        AnomalyService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AnomalyService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return AnomalyService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        AnomalyService.prototype.baseUrl;
        /**
         * @type {?}
         * @private
         */
        AnomalyService.prototype.config;
        /**
         * @type {?}
         * @private
         */
        AnomalyService.prototype.rest;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * List of appliance related actions
     * \@RequestHeader X-API-KEY The key to identify the application (portal)
     * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
        AppliancesService.prototype.find = /**
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
        function (folderId, subFolders, search, status, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of appliances and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} search
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        AppliancesService.prototype.exportFormat = /**
         * Export list of appliances and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} search
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (folderId, subFolders, search, status, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Get single appliance by id
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @return {?}
         */
        AppliancesService.prototype.get = /**
         * Get single appliance by id
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get all sensors assigned to the appliance (getSensors)
         * @Return: QueryResponse<Sensor>
         */
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
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        AppliancesService.prototype.findApplianceSensors = /**
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
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (id, search, type, status, stream, sort, page, pageSize, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Get all appliance agents
         * \@Return: EntitiesResponse<Agent>
         * @param {?=} id
         * @return {?}
         */
        AppliancesService.prototype.getApplianceAgents = /**
         * Get all appliance agents
         * \@Return: EntitiesResponse<Agent>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/agents");
        };
        /**
         * Add new sensor and assigned it to a specific appliance
         * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
         * @Return: EntityResponse<Sensor> The updated sensor
         */
        /**
         * Add new sensor and assigned it to a specific appliance
         * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
         * \@Return: EntityResponse<Sensor> The updated sensor
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        AppliancesService.prototype.addApplianceSensor = /**
         * Add new sensor and assigned it to a specific appliance
         * The sensor will be created with status PENDING, the status will be changed when the agent will establish connection to the proxy
         * \@Return: EntityResponse<Sensor> The updated sensor
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.post(this.baseUrl + "/" + id + "/sensors", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Register new appliance in the system
         * @Return: EntityResponse<Appliance> The registered appliance
         */
        /**
         * Register new appliance in the system
         * \@Return: EntityResponse<Appliance> The registered appliance
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        AppliancesService.prototype.registerAppliance = /**
         * Register new appliance in the system
         * \@Return: EntityResponse<Appliance> The registered appliance
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Get appliance runtime configuration components
         * @Return: EntitiesResponse<ComponentConfiguration>
         */
        /**
         * Get appliance runtime configuration components
         * \@Return: EntitiesResponse<ComponentConfiguration>
         * @param {?=} id
         * @return {?}
         */
        AppliancesService.prototype.getRuntimeConfiguration = /**
         * Get appliance runtime configuration components
         * \@Return: EntitiesResponse<ComponentConfiguration>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/components");
        };
        /**
         * Get list of appliance configurations for the specific product
         * @Return: EntitiesResponse<ApplianceConfiguration>
         */
        /**
         * Get list of appliance configurations for the specific product
         * \@Return: EntitiesResponse<ApplianceConfiguration>
         * @param {?=} target
         * @return {?}
         */
        AppliancesService.prototype.getConfigurations = /**
         * Get list of appliance configurations for the specific product
         * \@Return: EntitiesResponse<ApplianceConfiguration>
         * @param {?=} target
         * @return {?}
         */
        function (target) {
            return this.rest.get(this.baseUrl + "/configurations/" + target);
        };
        /**
         * Get appliance configuration for the specific edge model
         * @Return: EntityResponse<ApplianceConfiguration>
         */
        /**
         * Get appliance configuration for the specific edge model
         * \@Return: EntityResponse<ApplianceConfiguration>
         * @param {?=} model
         * @return {?}
         */
        AppliancesService.prototype.getConfiguration = /**
         * Get appliance configuration for the specific edge model
         * \@Return: EntityResponse<ApplianceConfiguration>
         * @param {?=} model
         * @return {?}
         */
        function (model) {
            return this.rest.get(this.baseUrl + "/configuration/" + model);
        };
        /**
         * Get network channels using ONVIF discovery protocol
         * @Return: EntitiesResponse<ComponentConfiguration>
         */
        /**
         * Get network channels using ONVIF discovery protocol
         * \@Return: EntitiesResponse<ComponentConfiguration>
         * @param {?=} id
         * @return {?}
         */
        AppliancesService.prototype.getOnvifDiscoveryList = /**
         * Get network channels using ONVIF discovery protocol
         * \@Return: EntitiesResponse<ComponentConfiguration>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/discovery");
        };
        /**
         * Change appliance name
         * @Return: EntityResponse<Appliance>
         */
        /**
         * Change appliance name
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @param {?=} name
         * @return {?}
         */
        AppliancesService.prototype.changeName = /**
         * Change appliance name
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @param {?=} name
         * @return {?}
         */
        function (id, name) {
            return this.rest.put(this.baseUrl + "/" + id + "/name/" + name, null);
        };
        /**
         * Change appliance folder
         * @Return: EntityResponse<Appliance>
         */
        /**
         * Change appliance folder
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @param {?=} folderId
         * @return {?}
         */
        AppliancesService.prototype.changeFolder = /**
         * Change appliance folder
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @param {?=} folderId
         * @return {?}
         */
        function (id, folderId) {
            return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
        };
        /**
         * Change appliance machine Id (for VIRTUAL device only)
         * @Return: EntityResponse<Appliance> - Updated appliance
         */
        /**
         * Change appliance machine Id (for VIRTUAL device only)
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} machineId
         * @return {?}
         */
        AppliancesService.prototype.changeMachineId = /**
         * Change appliance machine Id (for VIRTUAL device only)
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} machineId
         * @return {?}
         */
        function (id, machineId) {
            return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
        };
        /**
         * Change appliance configuration
         * @Return: EntityResponse<Appliance> - Updated appliance
         */
        /**
         * Change appliance configuration
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} configId
         * @param {?=} versionId
         * @return {?}
         */
        AppliancesService.prototype.changeConfiguration = /**
         * Change appliance configuration
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} configId
         * @param {?=} versionId
         * @return {?}
         */
        function (id, configId, versionId) {
            return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
        };
        /**
         * Delete appliance from the system
         * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is PENDING
         * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
         * @Return: ActionResponse
         */
        /**
         * Delete appliance from the system
         * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is PENDING
         * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        AppliancesService.prototype.delete = /**
         * Delete appliance from the system
         * If the appliance has connected cameras, they will all be converted to unregistered - meaning they are not attached to any device and their status is PENDING
         * Unregistered cameras keeps all their settings and rules and they can be assigned later to another device
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Find list of appliance commands and filter
         * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
         */
        /**
         * Find list of appliance commands and filter
         * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
         * @param {?=} id
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        AppliancesService.prototype.getCommands = /**
         * Find list of appliance commands and filter
         * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
         * @param {?=} id
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (id, status, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Delete command
         * \@Return: ActionResponse
         * @param {?=} commandId
         * @return {?}
         */
        AppliancesService.prototype.deleteCommand = /**
         * Delete command
         * \@Return: ActionResponse
         * @param {?=} commandId
         * @return {?}
         */
        function (commandId) {
            return this.rest.delete(this.baseUrl + "/commands/" + commandId);
        };
        /**
         * Get appliance status history over time
         * @Return:  EntityResponse<ApplianceStatusTimeSeries>
         */
        /**
         * Get appliance status history over time
         * \@Return: EntityResponse<ApplianceStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        AppliancesService.prototype.getStatusOverTime = /**
         * Get appliance status history over time
         * \@Return: EntityResponse<ApplianceStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        function (id, from, to) {
            var _a;
            /** @type {?} */
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
        /**
         * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
         * \@Return: EntityResponse<ApplianceKPIsTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        AppliancesService.prototype.getKpiOverTime = /**
         * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
         * \@Return: EntityResponse<ApplianceKPIsTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        function (id, from, to) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate appliances count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @return {?}
         */
        AppliancesService.prototype.getAppliancesCountByStatus = /**
         * Aggregate appliances count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @return {?}
         */
        function (folderId, subFolders) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (folderId != null) {
                params.push("folderId=" + folderId);
            }
            if (subFolders != null) {
                params.push("subFolders=" + subFolders);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
        };
        AppliancesService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AppliancesService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return AppliancesService;
    }());
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
        AuditLogService.prototype.find = /**
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
        function (userId, from, to, itemType, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of audit log entries and filter
         * \@Return: StreamContent
         * @param {?=} userId
         * @param {?=} from
         * @param {?=} to
         * @param {?=} itemType
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        AuditLogService.prototype.exportFormat = /**
         * Export list of audit log entries and filter
         * \@Return: StreamContent
         * @param {?=} userId
         * @param {?=} from
         * @param {?=} to
         * @param {?=} itemType
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (userId, from, to, itemType, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Get single audit log entry by id
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @return {?}
         */
        AuditLogService.prototype.get = /**
         * Get single audit log entry by id
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        AuditLogService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AuditLogService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return AuditLogService;
    }());
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
        /**
         * Create new calendar
         * \@Return: EntityResponse<Calendar>
         * @param {?=} body
         * @return {?}
         */
        CalendarsService.prototype.create = /**
         * Create new calendar
         * \@Return: EntityResponse<Calendar>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update calendar
         * @Return: EntityResponse<Calendar>
         */
        /**
         * Update calendar
         * \@Return: EntityResponse<Calendar>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        CalendarsService.prototype.update = /**
         * Update calendar
         * \@Return: EntityResponse<Calendar>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete calendar from the system
         * @Return: ActionResponse
         */
        /**
         * Delete calendar from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        CalendarsService.prototype.delete = /**
         * Delete calendar from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single calendar by id
         * @Return: EntityResponse<Calendar>
         */
        /**
         * Get single calendar by id
         * \@Return: EntityResponse<Calendar>
         * @param {?=} id
         * @return {?}
         */
        CalendarsService.prototype.get = /**
         * Get single calendar by id
         * \@Return: EntityResponse<Calendar>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get calendars by list of ids
         * @Return: EntitiesResponse<Calendar>
         */
        /**
         * Get calendars by list of ids
         * \@Return: EntitiesResponse<Calendar>
         * @param {?=} id
         * @return {?}
         */
        CalendarsService.prototype.list = /**
         * Get calendars by list of ids
         * \@Return: EntitiesResponse<Calendar>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        CalendarsService.prototype.find = /**
         * Find calendars by filters
         * \@Return: QueryResponse<Calendar>
         * @param {?=} search
         * @param {?=} folderId
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (search, folderId, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Find all calendars for a specified level in the folder hierarchy
         * This method returns all the calendars of the current folder and all parent folders
         * \@Return: EntitiesResponse<Calendar>
         * @param {?=} folderId
         * @return {?}
         */
        CalendarsService.prototype.getFolderCalendars = /**
         * Find all calendars for a specified level in the folder hierarchy
         * This method returns all the calendars of the current folder and all parent folders
         * \@Return: EntitiesResponse<Calendar>
         * @param {?=} folderId
         * @return {?}
         */
        function (folderId) {
            return this.rest.get(this.baseUrl + "/folder/" + folderId);
        };
        /**
         * Import calendar from outlook CSV, ICS or iCal file
         * @Return: ActionResponse
         */
        /**
         * Import calendar from outlook CSV, ICS or iCal file
         * \@Return: ActionResponse
         * @param {?=} folderId
         * @return {?}
         */
        CalendarsService.prototype.import = /**
         * Import calendar from outlook CSV, ICS or iCal file
         * \@Return: ActionResponse
         * @param {?=} folderId
         * @return {?}
         */
        function (folderId) {
            var _a;
            /** @type {?} */
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
        /**
         * Import calendar from Url (ICS or iCal formats)
         * \@Return: ActionResponse
         * @param {?=} folderId
         * @param {?=} body
         * @return {?}
         */
        CalendarsService.prototype.importUrl = /**
         * Import calendar from Url (ICS or iCal formats)
         * \@Return: ActionResponse
         * @param {?=} folderId
         * @param {?=} body
         * @return {?}
         */
        function (folderId, body) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (folderId != null) {
                params.push("folderId=" + folderId);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/importUrl", typeof body === 'object' ? JSON.stringify(body) : body], params));
        };
        CalendarsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CalendarsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return CalendarsService;
    }());
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
        /**
         * Create new event
         * \@Return: EntityResponse<Event>
         * @param {?=} body
         * @return {?}
         */
        EventsService.prototype.create = /**
         * Create new event
         * \@Return: EntityResponse<Event>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change event workflow status
         * @Return: EntityResponse<Event>
         */
        /**
         * Change event workflow status
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} status
         * @return {?}
         */
        EventsService.prototype.changeStatus = /**
         * Change event workflow status
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} status
         * @return {?}
         */
        function (id, status) {
            return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
        };
        /**
         * Set event image path
         * @Return: EntityResponse<Event>
         */
        /**
         * Set event image path
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        EventsService.prototype.setImagePath = /**
         * Set event image path
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/imagePath", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Set event clip path
         * @Return: EntityResponse<Event>
         */
        /**
         * Set event clip path
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        EventsService.prototype.setClipPath = /**
         * Set event clip path
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/clipPath", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Get single event by id
         * @Return: EntityResponse<Event>
         */
        /**
         * Get single event by id
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @return {?}
         */
        EventsService.prototype.get = /**
         * Get single event by id
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get events by list of ids
         * @Return: EntitiesResponse<Event>
         */
        /**
         * Get events by list of ids
         * \@Return: EntitiesResponse<Event>
         * @param {?=} id
         * @return {?}
         */
        EventsService.prototype.list = /**
         * Get events by list of ids
         * \@Return: EntitiesResponse<Event>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Find events by filters
         * \@Return: QueryResponse<Event>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        EventsService.prototype.find = /**
         * Find events by filters
         * \@Return: QueryResponse<Event>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of events and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        EventsService.prototype.exportFormat = /**
         * Export list of events and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (folderId, subFolders, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Find events generated in area using spatial query
         * \@Return: QueryResponse<Event>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        EventsService.prototype.findInArea = /**
         * Find events generated in area using spatial query
         * \@Return: QueryResponse<Event>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Get event image [response content type: image/jpeg]
         * \@Return: StreamingOutput of the image
         * @param {?=} id
         * @return {?}
         */
        EventsService.prototype.getEventImage = /**
         * Get event image [response content type: image/jpeg]
         * \@Return: StreamingOutput of the image
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.download("events", this.baseUrl + "/" + id + "/image");
        };
        /**
         * Get event clip [response content type: video/mp4]
         * @Return: StreamingOutput of the clip
         */
        /**
         * Get event clip [response content type: video/mp4]
         * \@Return: StreamingOutput of the clip
         * @param {?=} id
         * @return {?}
         */
        EventsService.prototype.getEventClip = /**
         * Get event clip [response content type: video/mp4]
         * \@Return: StreamingOutput of the clip
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.download("events", this.baseUrl + "/" + id + "/clip");
        };
        /**
         * Get events count overtime for all events in the system
         * @Return: EntityResponse<EventCountTimeSeries>
         */
        /**
         * Get events count overtime for all events in the system
         * \@Return: EntityResponse<EventCountTimeSeries>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} interval
         * @param {?=} label
         * @return {?}
         */
        EventsService.prototype.getEventsCountOvertime = /**
         * Get events count overtime for all events in the system
         * \@Return: EntityResponse<EventCountTimeSeries>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} objectType
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} status
         * @param {?=} rule
         * @param {?=} from
         * @param {?=} to
         * @param {?=} interval
         * @param {?=} label
         * @return {?}
         */
        function (folderId, sensorId, objectType, behaviorType, severity, status, rule, from, to, interval, label) {
            var _a;
            /** @type {?} */
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
            if (label != null) {
                params.push("label=" + label);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/overtime"], params));
        };
        EventsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        EventsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return EventsService;
    }());
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
        /**
         * Create new folder in the account hierarchy
         * \@Return: EntityResponse<Folder>
         * @param {?=} body
         * @return {?}
         */
        FoldersService.prototype.create = /**
         * Create new folder in the account hierarchy
         * \@Return: EntityResponse<Folder>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change folder name
         * @Return: EntityResponse<Folder>
         */
        /**
         * Change folder name
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        FoldersService.prototype.changeName = /**
         * Change folder name
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change folder parent id
         * @Return: EntityResponse<Folder>
         */
        /**
         * Change folder parent id
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} parentId
         * @return {?}
         */
        FoldersService.prototype.changeParent = /**
         * Change folder parent id
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} parentId
         * @return {?}
         */
        function (id, parentId) {
            return this.rest.put(this.baseUrl + "/" + id + "/parent/" + parentId, null);
        };
        /**
         * Change folder geo-area (polygon)
         * @Return: EntityResponse<Folder>
         */
        /**
         * Change folder geo-area (polygon)
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        FoldersService.prototype.changeGeoArea = /**
         * Change folder geo-area (polygon)
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change folder geo-location (center)
         * @Return: EntityResponse<Folder>
         */
        /**
         * Change folder geo-location (center)
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        FoldersService.prototype.changeGeoLocation = /**
         * Change folder geo-location (center)
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change folder timezone
         * @Return: EntityResponse<Folder>
         */
        /**
         * Change folder timezone
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        FoldersService.prototype.changeTimezone = /**
         * Change folder timezone
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/timezone", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete folder from the system (only if it is empty)
         * @Return: ActionResponse error will be returned if the folder is not empty
         */
        /**
         * Delete folder from the system (only if it is empty)
         * \@Return: ActionResponse error will be returned if the folder is not empty
         * @param {?=} id
         * @return {?}
         */
        FoldersService.prototype.delete = /**
         * Delete folder from the system (only if it is empty)
         * \@Return: ActionResponse error will be returned if the folder is not empty
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single folder by id
         * @Return: EntityResponse<Folder>
         */
        /**
         * Get single folder by id
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @return {?}
         */
        FoldersService.prototype.get = /**
         * Get single folder by id
         * \@Return: EntityResponse<Folder>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get folders by list of ids
         * @Return: EntitiesResponse<Folder>
         */
        /**
         * Get folders by list of ids
         * \@Return: EntitiesResponse<Folder>
         * @param {?=} id
         * @return {?}
         */
        FoldersService.prototype.list = /**
         * Get folders by list of ids
         * \@Return: EntitiesResponse<Folder>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Find folders by filters
         * \@Return: QueryResponse<Folder>
         * @param {?=} id
         * @param {?=} search
         * @param {?=} parentId
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        FoldersService.prototype.find = /**
         * Find folders by filters
         * \@Return: QueryResponse<Folder>
         * @param {?=} id
         * @param {?=} search
         * @param {?=} parentId
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (id, search, parentId, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of folders and filter
         * \@Return: StreamContent
         * @param {?=} id
         * @param {?=} search
         * @param {?=} parentId
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        FoldersService.prototype.exportFormat = /**
         * Export list of folders and filter
         * \@Return: StreamContent
         * @param {?=} id
         * @param {?=} search
         * @param {?=} parentId
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (id, search, parentId, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        FoldersService.prototype.getSubFolders = /**
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
        function (id, search, parentId, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        FoldersService.prototype.getSubItems = /**
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
        function (id, search, parentId, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Get account tree hierarchy (folders and sensors) - starting from the account level as root
         * \@Return: EntityResponse<TreeNode>
         * @param {?=} includeSensors
         * @return {?}
         */
        FoldersService.prototype.getHierarchy = /**
         * Get account tree hierarchy (folders and sensors) - starting from the account level as root
         * \@Return: EntityResponse<TreeNode>
         * @param {?=} includeSensors
         * @return {?}
         */
        function (includeSensors) {
            var _a;
            /** @type {?} */
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
        /**
         * Get default geo bounds
         * \@Return: EntityResponse<Coordinate> The folder location
         * @param {?=} id
         * @return {?}
         */
        FoldersService.prototype.getDefaultLocation = /**
         * Get default geo bounds
         * \@Return: EntityResponse<Coordinate> The folder location
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
        };
        FoldersService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        FoldersService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return FoldersService;
    }());
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
        /**
         * Digitize sensor FOV on WGS-84 coordinate system
         * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
         * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
         * The returned value is a GeoReference data structure describes the contours of the
         * FOV on the image and the map and X,Y factors and offsets for transformation
         * \@Return: EntityResponse<GeoReferenceData>
         * @param {?=} body
         * @return {?}
         */
        GeoService.prototype.geoReference = /**
         * Digitize sensor FOV on WGS-84 coordinate system
         * Each GeoControlPoint in the list composed of point in the FOV and its referenced coordinate.
         * The point represents the x,y values a normalized scale (each axis is 0 - 10000)
         * The returned value is a GeoReference data structure describes the contours of the
         * FOV on the image and the map and X,Y factors and offsets for transformation
         * \@Return: EntityResponse<GeoReferenceData>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
         * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
         * @Return: EntityResponse<GeoReferenceData>
         */
        /**
         * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
         * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
         * \@Return: EntityResponse<GeoReferenceData>
         * @param {?=} body
         * @return {?}
         */
        GeoService.prototype.transform = /**
         * Test transformation, provide the transformation coefficients matrix and a list of arbitrary points and return
         * GeoReferenceData with the transformed coordinates (the number of coordinates is equal to the number of points)
         * \@Return: EntityResponse<GeoReferenceData>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/transform", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        GeoService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GeoService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return GeoService;
    }());
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
        /**
         * Health check to test service availability
         * \@Return: ActionResponse - with version info
         * @return {?}
         */
        HealthCheckService.prototype.health = /**
         * Health check to test service availability
         * \@Return: ActionResponse - with version info
         * @return {?}
         */
        function () {
            return this.rest.get("" + this.baseUrl);
        };
        HealthCheckService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HealthCheckService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return HealthCheckService;
    }());
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
        /**
         * Create new integration target
         * \@Return: EntityResponse<IntegrationTarget>
         * @param {?=} body
         * @return {?}
         */
        IntegrationsService.prototype.create = /**
         * Create new integration target
         * \@Return: EntityResponse<IntegrationTarget>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update integration target
         * @Return: EntityResponse<IntegrationTarget>
         */
        /**
         * Update integration target
         * \@Return: EntityResponse<IntegrationTarget>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        IntegrationsService.prototype.update = /**
         * Update integration target
         * \@Return: EntityResponse<IntegrationTarget>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete integration target from the system
         * @Return: ActionResponse
         */
        /**
         * Delete integration target from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        IntegrationsService.prototype.delete = /**
         * Delete integration target from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single integration target by id
         * @Return: EntityResponse<IntegrationTarget>
         */
        /**
         * Get single integration target by id
         * \@Return: EntityResponse<IntegrationTarget>
         * @param {?=} id
         * @return {?}
         */
        IntegrationsService.prototype.get = /**
         * Get single integration target by id
         * \@Return: EntityResponse<IntegrationTarget>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get integration targets by list of ids
         * @Return: EntitiesResponse<IntegrationTarget>
         */
        /**
         * Get integration targets by list of ids
         * \@Return: EntitiesResponse<IntegrationTarget>
         * @param {?=} id
         * @return {?}
         */
        IntegrationsService.prototype.list = /**
         * Get integration targets by list of ids
         * \@Return: EntitiesResponse<IntegrationTarget>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Find integration targets by filters
         * \@Return: EntitiesResponse<IntegrationTarget>
         * @param {?=} search
         * @param {?=} type
         * @return {?}
         */
        IntegrationsService.prototype.find = /**
         * Find integration targets by filters
         * \@Return: EntitiesResponse<IntegrationTarget>
         * @param {?=} search
         * @param {?=} type
         * @return {?}
         */
        function (search, type) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (type != null) {
                params.push("type=" + type);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        IntegrationsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        IntegrationsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return IntegrationsService;
    }());
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
        /**
         * Create new report definition
         * \@Return: EntityResponse<ReportDefinition>
         * @param {?=} body
         * @return {?}
         */
        ReportsService.prototype.create = /**
         * Create new report definition
         * \@Return: EntityResponse<ReportDefinition>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update report definition
         * @Return: EntityResponse<ReportDefinition>
         */
        /**
         * Update report definition
         * \@Return: EntityResponse<ReportDefinition>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        ReportsService.prototype.update = /**
         * Update report definition
         * \@Return: EntityResponse<ReportDefinition>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete report definition from the system
         * @Return: ActionResponse
         */
        /**
         * Delete report definition from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        ReportsService.prototype.delete = /**
         * Delete report definition from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single report definition by id
         * @Return: EntityResponse<ReportDefinition>
         */
        /**
         * Get single report definition by id
         * \@Return: EntityResponse<ReportDefinition>
         * @param {?=} id
         * @return {?}
         */
        ReportsService.prototype.get = /**
         * Get single report definition by id
         * \@Return: EntityResponse<ReportDefinition>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get multiple report definitions by list of ids
         * @Return: EntitiesResponse<ReportDefinition>
         */
        /**
         * Get multiple report definitions by list of ids
         * \@Return: EntitiesResponse<ReportDefinition>
         * @param {?=} id
         * @return {?}
         */
        ReportsService.prototype.list = /**
         * Get multiple report definitions by list of ids
         * \@Return: EntitiesResponse<ReportDefinition>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Find report definitions by filters
         * \@Return: QueryResponse<ReportDefinition>
         * @param {?=} search
         * @return {?}
         */
        ReportsService.prototype.find = /**
         * Find report definitions by filters
         * \@Return: QueryResponse<ReportDefinition>
         * @param {?=} search
         * @return {?}
         */
        function (search) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        ReportsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ReportsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return ReportsService;
    }());
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
        /**
         * Create new rule
         * \@Return: EntityResponse<Rule>
         * @param {?=} body
         * @return {?}
         */
        RulesService.prototype.create = /**
         * Create new rule
         * \@Return: EntityResponse<Rule>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update rule
         * @Return: EntityResponse<Rule>
         */
        /**
         * Update rule
         * \@Return: EntityResponse<Rule>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        RulesService.prototype.update = /**
         * Update rule
         * \@Return: EntityResponse<Rule>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Enable list of rules
         * @Return: ActionResponse
         */
        /**
         * Enable list of rules
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        RulesService.prototype.enable = /**
         * Enable list of rules
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Disable list of rules
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        RulesService.prototype.disable = /**
         * Disable list of rules
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Delete rule from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        RulesService.prototype.delete = /**
         * Delete rule from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single rule by id
         * @Return: EntityResponse<Rule>
         */
        /**
         * Get single rule by id
         * \@Return: EntityResponse<Rule>
         * @param {?=} id
         * @return {?}
         */
        RulesService.prototype.get = /**
         * Get single rule by id
         * \@Return: EntityResponse<Rule>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get rules by list of ids
         * @Return: EntitiesResponse<Rule>
         */
        /**
         * Get rules by list of ids
         * \@Return: EntitiesResponse<Rule>
         * @param {?=} id
         * @return {?}
         */
        RulesService.prototype.list = /**
         * Get rules by list of ids
         * \@Return: EntitiesResponse<Rule>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Find rules by filters
         * \@Return: QueryResponse<Rule>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} search
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        RulesService.prototype.find = /**
         * Find rules by filters
         * \@Return: QueryResponse<Rule>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} search
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (folderId, sensorId, search, behaviorType, severity, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of rules and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} search
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        RulesService.prototype.exportFormat = /**
         * Export list of rules and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} search
         * @param {?=} behaviorType
         * @param {?=} severity
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (folderId, sensorId, search, behaviorType, severity, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Find anomaly rules by filters
         * \@Return: QueryResponse<Rule>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} search
         * @param {?=} severity
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        RulesService.prototype.findAnomalyRules = /**
         * Find anomaly rules by filters
         * \@Return: QueryResponse<Rule>
         * @param {?=} folderId
         * @param {?=} sensorId
         * @param {?=} search
         * @param {?=} severity
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (folderId, sensorId, search, severity, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Get rules specifications available by account features
         * \@Return: EntitiesResponse<RuleSpec>
         * @return {?}
         */
        RulesService.prototype.getSpecs = /**
         * Get rules specifications available by account features
         * \@Return: EntitiesResponse<RuleSpec>
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/spec");
        };
        RulesService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        RulesService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return RulesService;
    }());
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
        /**
         * Create new scheduled report definition
         * \@Return: EntityResponse<ScheduledReport>
         * @param {?=} body
         * @return {?}
         */
        ScheduledReportsService.prototype.create = /**
         * Create new scheduled report definition
         * \@Return: EntityResponse<ScheduledReport>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update scheduled report definition
         * @Return: EntityResponse<ScheduledReport>
         */
        /**
         * Update scheduled report definition
         * \@Return: EntityResponse<ScheduledReport>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        ScheduledReportsService.prototype.update = /**
         * Update scheduled report definition
         * \@Return: EntityResponse<ScheduledReport>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete scheduled report definition from the system
         * @Return: ActionResponse
         */
        /**
         * Delete scheduled report definition from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        ScheduledReportsService.prototype.delete = /**
         * Delete scheduled report definition from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single scheduled report definition by id
         * @Return: EntityResponse<ScheduledReport>
         */
        /**
         * Get single scheduled report definition by id
         * \@Return: EntityResponse<ScheduledReport>
         * @param {?=} id
         * @return {?}
         */
        ScheduledReportsService.prototype.get = /**
         * Get single scheduled report definition by id
         * \@Return: EntityResponse<ScheduledReport>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get multiple scheduled report definitions by list of ids
         * @Return: EntitiesResponse<ScheduledReport>
         */
        /**
         * Get multiple scheduled report definitions by list of ids
         * \@Return: EntitiesResponse<ScheduledReport>
         * @param {?=} id
         * @return {?}
         */
        ScheduledReportsService.prototype.list = /**
         * Get multiple scheduled report definitions by list of ids
         * \@Return: EntitiesResponse<ScheduledReport>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Find scheduled report definitions by filters
         * \@Return: QueryResponse<ScheduledReport>
         * @param {?=} search
         * @return {?}
         */
        ScheduledReportsService.prototype.find = /**
         * Find scheduled report definitions by filters
         * \@Return: QueryResponse<ScheduledReport>
         * @param {?=} search
         * @return {?}
         */
        function (search) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        ScheduledReportsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ScheduledReportsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return ScheduledReportsService;
    }());
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
        /**
         * Create new schedule
         * \@Return: EntityResponse<Schedule>
         * @param {?=} body
         * @return {?}
         */
        SchedulesService.prototype.create = /**
         * Create new schedule
         * \@Return: EntityResponse<Schedule>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update schedule
         * @Return: EntityResponse<Schedule>
         */
        /**
         * Update schedule
         * \@Return: EntityResponse<Schedule>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SchedulesService.prototype.update = /**
         * Update schedule
         * \@Return: EntityResponse<Schedule>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete schedule from the system
         * @Return: ActionResponse
         */
        /**
         * Delete schedule from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SchedulesService.prototype.delete = /**
         * Delete schedule from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single schedule by id
         * @Return: EntityResponse<Schedule>
         */
        /**
         * Get single schedule by id
         * \@Return: EntityResponse<Schedule>
         * @param {?=} id
         * @return {?}
         */
        SchedulesService.prototype.get = /**
         * Get single schedule by id
         * \@Return: EntityResponse<Schedule>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get schedules by list of ids
         * @Return: EntitiesResponse<Schedule>
         */
        /**
         * Get schedules by list of ids
         * \@Return: EntitiesResponse<Schedule>
         * @param {?=} id
         * @return {?}
         */
        SchedulesService.prototype.list = /**
         * Get schedules by list of ids
         * \@Return: EntitiesResponse<Schedule>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        SchedulesService.prototype.find = /**
         * Find schedule by filters
         * \@Return: QueryResponse<Schedule>
         * @param {?=} search
         * @param {?=} folderId
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (search, folderId, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Find all schedules for a specified level in the folder hierarchy
         * This method returns all the schedules of the current folder and all parent folders
         * \@Return: EntitiesResponse<Schedule>
         * @param {?=} folderId
         * @return {?}
         */
        SchedulesService.prototype.getFolderSchedules = /**
         * Find all schedules for a specified level in the folder hierarchy
         * This method returns all the schedules of the current folder and all parent folders
         * \@Return: EntitiesResponse<Schedule>
         * @param {?=} folderId
         * @return {?}
         */
        function (folderId) {
            return this.rest.get(this.baseUrl + "/folder/" + folderId);
        };
        SchedulesService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SchedulesService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SchedulesService;
    }());
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
        /**
         * Create new search definition
         * \@Return: EntityResponse<SearchDefinition>
         * @param {?=} body
         * @return {?}
         */
        SearchService.prototype.create = /**
         * Create new search definition
         * \@Return: EntityResponse<SearchDefinition>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update search definition
         * @Return: EntityResponse<SearchDefinition>
         */
        /**
         * Update search definition
         * \@Return: EntityResponse<SearchDefinition>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SearchService.prototype.update = /**
         * Update search definition
         * \@Return: EntityResponse<SearchDefinition>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete search definition from the system
         * @Return: ActionResponse
         */
        /**
         * Delete search definition from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SearchService.prototype.delete = /**
         * Delete search definition from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single search definition by id
         * @Return: EntityResponse<SearchDefinition>
         */
        /**
         * Get single search definition by id
         * \@Return: EntityResponse<SearchDefinition>
         * @param {?=} id
         * @return {?}
         */
        SearchService.prototype.get = /**
         * Get single search definition by id
         * \@Return: EntityResponse<SearchDefinition>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get multiple search definitions by list of ids
         * @Return: EntitiesResponse<SearchDefinition>
         */
        /**
         * Get multiple search definitions by list of ids
         * \@Return: EntitiesResponse<SearchDefinition>
         * @param {?=} id
         * @return {?}
         */
        SearchService.prototype.list = /**
         * Get multiple search definitions by list of ids
         * \@Return: EntitiesResponse<SearchDefinition>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        /**
         * Find search definitions by filters
         * \@Return: QueryResponse<SearchDefinition>
         * @param {?=} search
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        SearchService.prototype.find = /**
         * Find search definitions by filters
         * \@Return: QueryResponse<SearchDefinition>
         * @param {?=} search
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (search, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
         * @Return: QueryResponse<ObjectInfo> - list of detected objects
         * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
         * Please provide search id to query definition and use the same id for the web socket
         */
        /**
         * Perform metadata search by the search definition
         * \@Return: QueryResponse<ObjectInfo> - list of detected objects
         * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
         * Please provide search id to query definition and use the same id for the web socket
         * @param {?=} body
         * @return {?}
         */
        SearchService.prototype.execute = /**
         * Perform metadata search by the search definition
         * \@Return: QueryResponse<ObjectInfo> - list of detected objects
         * Search image web socket (/ws/search?search=searchId) must be open before this method invocation.
         * Please provide search id to query definition and use the same id for the web socket
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/execute", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Perform metadata saved search by the search id
         * @Return: QueryResponse<ObjectInfo> - list of detected objects
         */
        /**
         * Perform metadata saved search by the search id
         * \@Return: QueryResponse<ObjectInfo> - list of detected objects
         * @param {?=} id
         * @return {?}
         */
        SearchService.prototype.executeById = /**
         * Perform metadata saved search by the search id
         * \@Return: QueryResponse<ObjectInfo> - list of detected objects
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/execute/" + id);
        };
        SearchService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SearchService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SearchService;
    }());
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
        /**
         * Create new sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} body
         * @return {?}
         */
        SensorsService.prototype.create = /**
         * Create new sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update sensor parameters
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Update sensor parameters
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SensorsService.prototype.update = /**
         * Update sensor parameters
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change sensor name
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Change sensor name
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SensorsService.prototype.changeName = /**
         * Change sensor name
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change sensor parent folder id
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Change sensor parent folder id
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} folderId
         * @return {?}
         */
        SensorsService.prototype.changeFolder = /**
         * Change sensor parent folder id
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} folderId
         * @return {?}
         */
        function (id, folderId) {
            return this.rest.put(this.baseUrl + "/" + id + "/folder/" + folderId, null);
        };
        /**
         * Change sensor geo-location
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Change sensor geo-location
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SensorsService.prototype.changeGeoLocation = /**
         * Change sensor geo-location
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change sensor field of view transformation attributes
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Change sensor field of view transformation attributes
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} azimuth
         * @param {?=} body
         * @return {?}
         */
        SensorsService.prototype.changeFovAttributes = /**
         * Change sensor field of view transformation attributes
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} azimuth
         * @param {?=} body
         * @return {?}
         */
        function (id, azimuth, body) {
            var _a;
            /** @type {?} */
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
        /**
         * Enable (activate) sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.enable = /**
         * Enable (activate) sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.put(this.baseUrl + "/" + id + "/enable", null);
        };
        /**
         * Disable (de-activate) sensor
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Disable (de-activate) sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.disable = /**
         * Disable (de-activate) sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.put(this.baseUrl + "/" + id + "/disable", null);
        };
        /**
         * Attach sensor to a device with the given appliance Id
         * This action enabled on already detached and SUSPENDED sensor
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Attach sensor to a device with the given appliance Id
         * This action enabled on already detached and SUSPENDED sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} applianceId
         * @return {?}
         */
        SensorsService.prototype.attach = /**
         * Attach sensor to a device with the given appliance Id
         * This action enabled on already detached and SUSPENDED sensor
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @param {?=} applianceId
         * @return {?}
         */
        function (id, applianceId) {
            return this.rest.put(this.baseUrl + "/" + id + "/attach/" + applianceId, null);
        };
        /**
         * Detach sensor from a device and change it's status to SUSPENDED
         * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
         * The sensor can be attached later to any other device in the system
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Detach sensor from a device and change it's status to SUSPENDED
         * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
         * The sensor can be attached later to any other device in the system
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.detach = /**
         * Detach sensor from a device and change it's status to SUSPENDED
         * This action remove the sensor from the device but keep the sensor and all its configuration and rules in the system
         * The sensor can be attached later to any other device in the system
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.put(this.baseUrl + "/" + id + "/detach", null);
        };
        /**
         * Delete sensor from the system
         * @Return: ActionResponse
         */
        /**
         * Delete sensor from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.delete = /**
         * Delete sensor from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single sensor by id
         * @Return: EntityResponse<Sensor>
         */
        /**
         * Get single sensor by id
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.get = /**
         * Get single sensor by id
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get sensors by list of ids
         * @Return: EntitiesResponse<Sensor>
         */
        /**
         * Get sensors by list of ids
         * \@Return: EntitiesResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.list = /**
         * Get sensors by list of ids
         * \@Return: EntitiesResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        SensorsService.prototype.find = /**
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
        function (folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of sensors and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} stream
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        SensorsService.prototype.exportFormat = /**
         * Export list of sensors and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} stream
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (folderId, subFolders, search, type, status, stream, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Get sensor reference image [response content type: image/jpeg]
         * \@Return: StreamingOutput of the reference image
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.getRefImage = /**
         * Get sensor reference image [response content type: image/jpeg]
         * \@Return: StreamingOutput of the reference image
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.download("sensors", this.baseUrl + "/" + id + "/ref-image");
        };
        /**
         * Set sensor reference image [put binary image in body with content type: image/jpeg]
         * @Return: ActionResponse
         */
        /**
         * Set sensor reference image [put binary image in body with content type: image/jpeg]
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SensorsService.prototype.setRefImage = /**
         * Set sensor reference image [put binary image in body with content type: image/jpeg]
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/ref-image", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Get default geo location
         * @Return: EntityResponse<Coordinate>
         */
        /**
         * Get default geo location
         * \@Return: EntityResponse<Coordinate>
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.getDefaultLocation = /**
         * Get default geo location
         * \@Return: EntityResponse<Coordinate>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/geoLocation");
        };
        /**
         * Get single sensor health by sensor id
         * @Return: EntityResponse<SensorStatus>
         */
        /**
         * Get single sensor health by sensor id
         * \@Return: EntityResponse<SensorStatus>
         * @param {?=} id
         * @return {?}
         */
        SensorsService.prototype.getSensorHealthStatus = /**
         * Get single sensor health by sensor id
         * \@Return: EntityResponse<SensorStatus>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/health");
        };
        /**
         * Get all sensors health status
         * @Return: EntitiesResponse<SensorStatus>
         */
        /**
         * Get all sensors health status
         * \@Return: EntitiesResponse<SensorStatus>
         * @return {?}
         */
        SensorsService.prototype.getSensorsHealthStatus = /**
         * Get all sensors health status
         * \@Return: EntitiesResponse<SensorStatus>
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/health");
        };
        /**
         * Get sensor status history over time
         * @Return:  EntityResponse<SensorStatusTimeSeries>
         */
        /**
         * Get sensor status history over time
         * \@Return: EntityResponse<SensorStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        SensorsService.prototype.getStatusOverTime = /**
         * Get sensor status history over time
         * \@Return: EntityResponse<SensorStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        function (id, from, to) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate sensors count distribution by type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        SensorsService.prototype.getSensorsCountByType = /**
         * Aggregate sensors count distribution by type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        function (folderId, subFolders, sensorType, status, streamType) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate sensors count distribution by stream type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        SensorsService.prototype.getSensorsCountByStream = /**
         * Aggregate sensors count distribution by stream type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        function (folderId, subFolders, sensorType, status, streamType) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate sensors count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        SensorsService.prototype.getSensorsCountByStatus = /**
         * Aggregate sensors count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        function (folderId, subFolders, sensorType, status, streamType) {
            var _a;
            /** @type {?} */
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
        SensorsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SensorsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SensorsService;
    }());
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
        /**
         * Login to the system with user email and password
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: EntityResponse<LoginData>
         * @param {?=} body
         * @return {?}
         */
        UserService.prototype.login = /**
         * Login to the system with user email and password
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: EntityResponse<LoginData>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/login", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Refresh token (set new expiration time) and associate with new account if required
         * @Return: EntityResponse<LoginData>
         */
        /**
         * Refresh token (set new expiration time) and associate with new account if required
         * \@Return: EntityResponse<LoginData>
         * @return {?}
         */
        UserService.prototype.refreshToken = /**
         * Refresh token (set new expiration time) and associate with new account if required
         * \@Return: EntityResponse<LoginData>
         * @return {?}
         */
        function () {
            return this.rest.post(this.baseUrl + "/refresh-token", null);
        };
        /**
         * Verify user by temporary login key
         * @Return: EntityResponse<User>
         */
        /**
         * Verify user by temporary login key
         * \@Return: EntityResponse<User>
         * @param {?=} key
         * @return {?}
         */
        UserService.prototype.verifyLoginKey = /**
         * Verify user by temporary login key
         * \@Return: EntityResponse<User>
         * @param {?=} key
         * @return {?}
         */
        function (key) {
            var _a;
            /** @type {?} */
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
        /**
         * Send verification code by email
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        UserService.prototype.sendVerificationCode = /**
         * Send verification code by email
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/verify", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Validate verification code and reset password
         * @Return: ActionResponse
         */
        /**
         * Validate verification code and reset password
         * \@Return: ActionResponse
         * @param {?=} code
         * @return {?}
         */
        UserService.prototype.resetPassword = /**
         * Validate verification code and reset password
         * \@Return: ActionResponse
         * @param {?=} code
         * @return {?}
         */
        function (code) {
            return this.rest.post(this.baseUrl + "/reset-password", typeof code === 'object' ? JSON.stringify(code) : code);
        };
        /**
         * Change password
         * @Return: ActionResponse
         */
        /**
         * Change password
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        UserService.prototype.changePassword = /**
         * Change password
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/change-password", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Check if password was used before (according to password policy)
         * @Return: ActionResponse
         */
        /**
         * Check if password was used before (according to password policy)
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        UserService.prototype.checkUnusedPassword = /**
         * Check if password was used before (according to password policy)
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/check-password", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change current user name
         * @Return: ActionResponse
         */
        /**
         * Change current user name
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        UserService.prototype.changeName = /**
         * Change current user name
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.put(this.baseUrl + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change current user mobile
         * @Return: ActionResponse
         */
        /**
         * Change current user mobile
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        UserService.prototype.changeMobile = /**
         * Change current user mobile
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.put(this.baseUrl + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Refresh token (set new expiration time) and associate with new account if required
         * @Return: EntityResponse<UserAccountInfo>
         */
        /**
         * Refresh token (set new expiration time) and associate with new account if required
         * \@Return: EntityResponse<UserAccountInfo>
         * @param {?=} body
         * @return {?}
         */
        UserService.prototype.switchAccount = /**
         * Refresh token (set new expiration time) and associate with new account if required
         * \@Return: EntityResponse<UserAccountInfo>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/switch-account", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        UserService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UserService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return UserService;
    }());
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
        /**
         * Send invitation to a new user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        UsersService.prototype.invite = /**
         * Send invitation to a new user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/invite", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Resend invitation to an existing user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * @Return: ActionResponse
         */
        /**
         * Resend invitation to an existing user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        UsersService.prototype.reInvite = /**
         * Resend invitation to an existing user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.post(this.baseUrl + "/re-invite/" + id, null);
        };
        /**
         * Update user
         * @Return: EntityResponse<User>
         */
        /**
         * Update user
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        UsersService.prototype.update = /**
         * Update user
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user name
         * @Return: EntityResponse<User>
         */
        /**
         * Change user name
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        UsersService.prototype.changeName = /**
         * Change user name
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user mobile
         * @Return: EntityResponse<User>
         */
        /**
         * Change user mobile
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        UsersService.prototype.changeMobile = /**
         * Change user mobile
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user type
         * @Return: EntityResponse<User>
         */
        /**
         * Change user type
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} type
         * @return {?}
         */
        UsersService.prototype.changeType = /**
         * Change user type
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} type
         * @return {?}
         */
        function (id, type) {
            return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
        };
        /**
         * Delete user from the system
         * The user will be removed from the account, if no accounts associated with the user, it will be deleted
         * @Return: ActionResponse
         */
        /**
         * Delete user from the system
         * The user will be removed from the account, if no accounts associated with the user, it will be deleted
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        UsersService.prototype.delete = /**
         * Delete user from the system
         * The user will be removed from the account, if no accounts associated with the user, it will be deleted
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single user by id
         * @Return: EntityResponse<User>
         */
        /**
         * Get single user by id
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @return {?}
         */
        UsersService.prototype.get = /**
         * Get single user by id
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get single user by email
         * @Return: EntityResponse<User>
         */
        /**
         * Get single user by email
         * \@Return: EntityResponse<User>
         * @param {?=} email
         * @return {?}
         */
        UsersService.prototype.getByEmail = /**
         * Get single user by email
         * \@Return: EntityResponse<User>
         * @param {?=} email
         * @return {?}
         */
        function (email) {
            return this.rest.get(this.baseUrl + "/byEmail/" + email);
        };
        /**
         * Find list of users and filter the list
         * System user will see all users, Account system will see all users of the account, registered user will get an error.
         * @Return: QueryResponse<User>
         */
        /**
         * Find list of users and filter the list
         * System user will see all users, Account system will see all users of the account, registered user will get an error.
         * \@Return: QueryResponse<User>
         * @param {?=} accountId
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        UsersService.prototype.find = /**
         * Find list of users and filter the list
         * System user will see all users, Account system will see all users of the account, registered user will get an error.
         * \@Return: QueryResponse<User>
         * @param {?=} accountId
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (accountId, search, type, status, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of users and filter
         * \@Return: StreamContent
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        UsersService.prototype.exportFormat = /**
         * Export list of users and filter
         * \@Return: StreamContent
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (search, type, status, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        UsersService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        UsersService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return UsersService;
    }());
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
    /**
     * List of account related actions for system administrator only
     * \@RequestHeader X-API-KEY The key to identify the application (console)
     * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
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
        /**
         * Create new account
         * \@Return: EntityResponse<Account>
         * @param {?=} body
         * @return {?}
         */
        SysAccountsService.prototype.create = /**
         * Create new account
         * \@Return: EntityResponse<Account>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update existing account in the system
         * @Return: EntityResponse<Account>
         */
        /**
         * Update existing account in the system
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysAccountsService.prototype.update = /**
         * Update existing account in the system
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update account name
         * @Return: EntityResponse<Account>
         */
        /**
         * Update account name
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysAccountsService.prototype.changeName = /**
         * Update account name
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change account type
         * @Return: EntityResponse<User>
         */
        /**
         * Change account type
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} type
         * @return {?}
         */
        SysAccountsService.prototype.changeType = /**
         * Change account type
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} type
         * @return {?}
         */
        function (id, type) {
            return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
        };
        /**
         * Change account status
         * @Return: EntityResponse<Account>
         */
        /**
         * Change account status
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} status
         * @return {?}
         */
        SysAccountsService.prototype.changeStatus = /**
         * Change account status
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} status
         * @return {?}
         */
        function (id, status) {
            return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
        };
        /**
         * Change account groups
         * @Return: EntityResponse<Account>
         */
        /**
         * Change account groups
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} groupId
         * @return {?}
         */
        SysAccountsService.prototype.changeGroups = /**
         * Change account groups
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @param {?=} groupId
         * @return {?}
         */
        function (id, groupId) {
            var _a;
            /** @type {?} */
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
        /**
         * Change account geo-location (center)
         * \@Return: EntityResponse<Account> The changed account
         * @param {?=} body
         * @return {?}
         */
        SysAccountsService.prototype.changeGeoLocation = /**
         * Change account geo-location (center)
         * \@Return: EntityResponse<Account> The changed account
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.put(this.baseUrl + "/{id}/geoLocation", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change account geo area
         * @Return: EntityResponse<Account> The changed account
         */
        /**
         * Change account geo area
         * \@Return: EntityResponse<Account> The changed account
         * @param {?=} body
         * @return {?}
         */
        SysAccountsService.prototype.changeGeoArea = /**
         * Change account geo area
         * \@Return: EntityResponse<Account> The changed account
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.put(this.baseUrl + "/{id}/geoArea", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete account from the system
         * The account is moved to DELETED mode and will be deleted after 90 days
         * Only account marked as SUSPENDED can be deleted
         * @Return: ActionResponse
         */
        /**
         * Delete account from the system
         * The account is moved to DELETED mode and will be deleted after 90 days
         * Only account marked as SUSPENDED can be deleted
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysAccountsService.prototype.delete = /**
         * Delete account from the system
         * The account is moved to DELETED mode and will be deleted after 90 days
         * Only account marked as SUSPENDED can be deleted
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Delete account immediately without account status restrictions
         * @Return: ActionResponse
         */
        /**
         * Delete account immediately without account status restrictions
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysAccountsService.prototype.purge = /**
         * Delete account immediately without account status restrictions
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/purge/" + id);
        };
        /**
         * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
         * @Return: ActionResponse
         */
        /**
         * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} days
         * @return {?}
         */
        SysAccountsService.prototype.reset = /**
         * Reset account - remove all operational data older than the retention time in days (events, status, log ...) but leave configuration data
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} days
         * @return {?}
         */
        function (id, days) {
            return this.rest.delete(this.baseUrl + "/reset/" + id + "/days/" + days);
        };
        /**
         * Get single account by id
         * @Return: EntityResponse<Account>
         */
        /**
         * Get single account by id
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @return {?}
         */
        SysAccountsService.prototype.get = /**
         * Get single account by id
         * \@Return: EntityResponse<Account>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get accounts by list of ids
         * @Return: EntitiesResponse<Account>
         */
        /**
         * Get accounts by list of ids
         * \@Return: EntitiesResponse<Account>
         * @param {?=} id
         * @return {?}
         */
        SysAccountsService.prototype.list = /**
         * Get accounts by list of ids
         * \@Return: EntitiesResponse<Account>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            var _a;
            /** @type {?} */
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
        SysAccountsService.prototype.find = /**
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
        function (search, type, status, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Get account hierarchy
         * \@Return: EntityResponse<TreeNode>
         * @param {?=} id
         * @param {?=} sensors
         * @return {?}
         */
        SysAccountsService.prototype.tree = /**
         * Get account hierarchy
         * \@Return: EntityResponse<TreeNode>
         * @param {?=} id
         * @param {?=} sensors
         * @return {?}
         */
        function (id, sensors) {
            var _a;
            /** @type {?} */
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
        /**
         * Find account folders
         * \@Return: QueryResponse<Folder>
         * @param {?=} id
         * @param {?=} parentId
         * @param {?=} search
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        SysAccountsService.prototype.findFolders = /**
         * Find account folders
         * \@Return: QueryResponse<Folder>
         * @param {?=} id
         * @param {?=} parentId
         * @param {?=} search
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (id, parentId, search, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of accounts and filter
         * \@Return: StreamContent
         * @param {?=} name
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        SysAccountsService.prototype.exportFormat = /**
         * Export list of accounts and filter
         * \@Return: StreamContent
         * @param {?=} name
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (name, type, status, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Get account types statistics for all accounts in the system
         * \@Return: EntitiesResponse<AccountTypeSummary>
         * @return {?}
         */
        SysAccountsService.prototype.getAccountTypeStatistics = /**
         * Get account types statistics for all accounts in the system
         * \@Return: EntitiesResponse<AccountTypeSummary>
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/statistics/type");
        };
        SysAccountsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysAccountsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysAccountsService;
    }());
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
        /**
         * Register new appliance in the system
         * \@Return: EntityResponse<Appliance> The registered appliance
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysAppliancesService.prototype.registerAppliance = /**
         * Register new appliance in the system
         * \@Return: EntityResponse<Appliance> The registered appliance
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.post(this.baseUrl + "/register", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Get single appliance by id
         * @Return: EntityResponse<Appliance>
         */
        /**
         * Get single appliance by id
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @return {?}
         */
        SysAppliancesService.prototype.get = /**
         * Get single appliance by id
         * \@Return: EntityResponse<Appliance>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find list of appliances and filter
         * @Return: QueryResponse<Appliance>
         */
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
        SysAppliancesService.prototype.find = /**
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
        function (accountId, search, status, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of appliances and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} search
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        SysAppliancesService.prototype.exportFormat = /**
         * Export list of appliances and filter
         * \@Return: StreamContent
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} search
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (folderId, subFolders, search, status, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        /**
         * Delete appliance from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysAppliancesService.prototype.delete = /**
         * Delete appliance from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Reboot appliance host
         * @Return: ActionResponse
         */
        /**
         * Reboot appliance host
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysAppliancesService.prototype.reboot = /**
         * Reboot appliance host
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.post(this.baseUrl + "/" + id + "/reboot", null);
        };
        /**
         * Change appliance machine Id (for VIRTUAL device only)
         * @Return: EntityResponse<Appliance> - Updated appliance
         */
        /**
         * Change appliance machine Id (for VIRTUAL device only)
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} machineId
         * @return {?}
         */
        SysAppliancesService.prototype.changeMachineId = /**
         * Change appliance machine Id (for VIRTUAL device only)
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} machineId
         * @return {?}
         */
        function (id, machineId) {
            return this.rest.put(this.baseUrl + "/" + id + "/machine/" + machineId, null);
        };
        /**
         * Change appliance configuration
         * @Return: EntityResponse<Appliance> - Updated appliance
         */
        /**
         * Change appliance configuration
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} configId
         * @param {?=} versionId
         * @return {?}
         */
        SysAppliancesService.prototype.changeConfiguration = /**
         * Change appliance configuration
         * \@Return: EntityResponse<Appliance> - Updated appliance
         * @param {?=} id
         * @param {?=} configId
         * @param {?=} versionId
         * @return {?}
         */
        function (id, configId, versionId) {
            return this.rest.put(this.baseUrl + "/" + id + "/config/" + configId + "/" + versionId, null);
        };
        /**
         * Get all appliance agents
         * @Return: EntitiesResponse<Agent>
         */
        /**
         * Get all appliance agents
         * \@Return: EntitiesResponse<Agent>
         * @param {?=} id
         * @return {?}
         */
        SysAppliancesService.prototype.getApplianceAgents = /**
         * Get all appliance agents
         * \@Return: EntitiesResponse<Agent>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/agents");
        };
        /**
         * Add agent to appliance
         * Agent can be added to virtual appliance only
         * @Return: EntityResponse<Agent>
         */
        /**
         * Add agent to appliance
         * Agent can be added to virtual appliance only
         * \@Return: EntityResponse<Agent>
         * @param {?=} id
         * @return {?}
         */
        SysAppliancesService.prototype.addApplianceAgent = /**
         * Add agent to appliance
         * Agent can be added to virtual appliance only
         * \@Return: EntityResponse<Agent>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.post(this.baseUrl + "/" + id + "/agents", null);
        };
        /**
         * Delete agent from the system
         * Only virtual device agent can be deleted
         * @Return: ActionResponse
         */
        /**
         * Delete agent from the system
         * Only virtual device agent can be deleted
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} agentId
         * @return {?}
         */
        SysAppliancesService.prototype.deleteApplianceAgent = /**
         * Delete agent from the system
         * Only virtual device agent can be deleted
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} agentId
         * @return {?}
         */
        function (id, agentId) {
            return this.rest.delete(this.baseUrl + "/" + id + "/agents/" + agentId);
        };
        /**
         * Find list of appliance commands and filter
         * @Return: EntitiesResponse<ApplianceCommand> List of appliance commands
         */
        /**
         * Find list of appliance commands and filter
         * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
         * @param {?=} accountId
         * @param {?=} applianceId
         * @param {?=} status
         * @return {?}
         */
        SysAppliancesService.prototype.getCommands = /**
         * Find list of appliance commands and filter
         * \@Return: EntitiesResponse<ApplianceCommand> List of appliance commands
         * @param {?=} accountId
         * @param {?=} applianceId
         * @param {?=} status
         * @return {?}
         */
        function (accountId, applianceId, status) {
            var _a;
            /** @type {?} */
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
        /**
         * Update command status
         * \@Return: ActionResponse
         * @param {?=} commandId
         * @param {?=} status
         * @return {?}
         */
        SysAppliancesService.prototype.setCommandStatus = /**
         * Update command status
         * \@Return: ActionResponse
         * @param {?=} commandId
         * @param {?=} status
         * @return {?}
         */
        function (commandId, status) {
            return this.rest.put(this.baseUrl + "/commands/" + commandId + "/" + status, null);
        };
        /**
         * Delete command
         * @Return: ActionResponse
         */
        /**
         * Delete command
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} commandId
         * @return {?}
         */
        SysAppliancesService.prototype.deleteCommand = /**
         * Delete command
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} commandId
         * @return {?}
         */
        function (id, commandId) {
            return this.rest.delete(this.baseUrl + "/" + id + "/commands/" + commandId);
        };
        /**
         * Delete all appliance commands
         * @Return: ActionResponse
         */
        /**
         * Delete all appliance commands
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} agentId
         * @return {?}
         */
        SysAppliancesService.prototype.deleteAllCommands = /**
         * Delete all appliance commands
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} agentId
         * @return {?}
         */
        function (id, agentId) {
            return this.rest.delete(this.baseUrl + "/" + id + "/commands");
        };
        /**
         * Get appliance status history over time
         * @Return:  EntityResponse<ApplianceStatusTimeSeries>
         */
        /**
         * Get appliance status history over time
         * \@Return: EntityResponse<ApplianceStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        SysAppliancesService.prototype.getStatusOverTime = /**
         * Get appliance status history over time
         * \@Return: EntityResponse<ApplianceStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        function (id, from, to) {
            var _a;
            /** @type {?} */
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
        /**
         * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
         * \@Return: EntityResponse<ApplianceKPIsTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        SysAppliancesService.prototype.getKpiOverTime = /**
         * Get appliance KPI (Key Performance Indicators) history over time (CPU, RAM. LOAD)
         * \@Return: EntityResponse<ApplianceKPIsTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        function (id, from, to) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate appliances count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @return {?}
         */
        SysAppliancesService.prototype.getAppliancesCountByStatus = /**
         * Aggregate appliances count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} folderId
         * @param {?=} subFolders
         * @return {?}
         */
        function (folderId, subFolders) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (folderId != null) {
                params.push("folderId=" + folderId);
            }
            if (subFolders != null) {
                params.push("subFolders=" + subFolders);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/count/by-status"], params));
        };
        SysAppliancesService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysAppliancesService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysAppliancesService;
    }());
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
        /**
         * Create new configuration in the system
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: EntityResponse<Configuration>
         * @param {?=} body
         * @return {?}
         */
        SysConfigurationsService.prototype.create = /**
         * Create new configuration in the system
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: EntityResponse<Configuration>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update configuration in the system
         * @Return: EntityResponse<Configuration>
         */
        /**
         * Update configuration in the system
         * \@Return: EntityResponse<Configuration>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysConfigurationsService.prototype.update = /**
         * Update configuration in the system
         * \@Return: EntityResponse<Configuration>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete configuration by id
         * @Return: ActionResponse
         */
        /**
         * Delete configuration by id
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysConfigurationsService.prototype.delete = /**
         * Delete configuration by id
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Set default version for configuration
         * @Return: ActionResponse
         */
        /**
         * Set default version for configuration
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        SysConfigurationsService.prototype.setDefaultVersion = /**
         * Set default version for configuration
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        function (id, versionId) {
            return this.rest.put(this.baseUrl + "/" + id + "/default-version/" + versionId, null);
        };
        /**
         * Get configuration by id
         * @Return: EntityResponse<Configuration>
         */
        /**
         * Get configuration by id
         * \@Return: EntityResponse<Configuration>
         * @param {?=} id
         * @return {?}
         */
        SysConfigurationsService.prototype.get = /**
         * Get configuration by id
         * \@Return: EntityResponse<Configuration>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Get list of configurations by filter
         * @Return: QueryResponse<Configuration>
         */
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
        SysConfigurationsService.prototype.find = /**
         * Get list of configurations by filter
         * \@Return: QueryResponse<Configuration>
         * @param {?=} target
         * @param {?=} search
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (target, search, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Create new configuration version in the system
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysConfigurationsService.prototype.createVersion = /**
         * Create new configuration version in the system
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.post(this.baseUrl + "/" + id + "/versions", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update configuration version in the system
         * @Return: EntityResponse<ConfigurationVersion>
         */
        /**
         * Update configuration version in the system
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysConfigurationsService.prototype.updateVersion = /**
         * Update configuration version in the system
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/versions", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Duplicate configuration version from existing one
         * @Return: EntityResponse<ConfigurationVersion>
         */
        /**
         * Duplicate configuration version from existing one
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        SysConfigurationsService.prototype.duplicateVersion = /**
         * Duplicate configuration version from existing one
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        function (id, versionId) {
            return this.rest.post(this.baseUrl + "/" + id + "/versions/" + versionId, null);
        };
        /**
         * Delete configuration version by id
         * @Return: ActionResponse
         */
        /**
         * Delete configuration version by id
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        SysConfigurationsService.prototype.deleteVersion = /**
         * Delete configuration version by id
         * \@Return: ActionResponse
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        function (id, versionId) {
            return this.rest.delete(this.baseUrl + "/" + id + "/versions/" + versionId);
        };
        /**
         * Get specific configuration version
         * @Return: EntityResponse<ConfigurationVersion>
         */
        /**
         * Get specific configuration version
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        SysConfigurationsService.prototype.getVersion = /**
         * Get specific configuration version
         * \@Return: EntityResponse<ConfigurationVersion>
         * @param {?=} id
         * @param {?=} versionId
         * @return {?}
         */
        function (id, versionId) {
            return this.rest.get(this.baseUrl + "/" + id + "/versions/" + versionId);
        };
        /**
         * Get all versions of specific configuration
         * @Return: EntitiesResponse<ConfigurationVersion>
         */
        /**
         * Get all versions of specific configuration
         * \@Return: EntitiesResponse<ConfigurationVersion>
         * @param {?=} id
         * @return {?}
         */
        SysConfigurationsService.prototype.getVersions = /**
         * Get all versions of specific configuration
         * \@Return: EntitiesResponse<ConfigurationVersion>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/versions");
        };
        /**
         * Create new configuration template in the system
         * @Return: EntityResponse<ConfigurationTemplate>
         */
        /**
         * Create new configuration template in the system
         * \@Return: EntityResponse<ConfigurationTemplate>
         * @param {?=} body
         * @return {?}
         */
        SysConfigurationsService.prototype.createTemplate = /**
         * Create new configuration template in the system
         * \@Return: EntityResponse<ConfigurationTemplate>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/templates", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update configuration template in the system
         * @Return: EntityResponse<ConfigurationTemplate>
         */
        /**
         * Update configuration template in the system
         * \@Return: EntityResponse<ConfigurationTemplate>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysConfigurationsService.prototype.updateTemplate = /**
         * Update configuration template in the system
         * \@Return: EntityResponse<ConfigurationTemplate>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/templates/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete configuration template by id
         * @Return: ActionResponse
         */
        /**
         * Delete configuration template by id
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysConfigurationsService.prototype.deleteTemplate = /**
         * Delete configuration template by id
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/templates/" + id);
        };
        /**
         * Get configuration template by id
         * @Return: EntityResponse<ConfigurationTemplate>
         */
        /**
         * Get configuration template by id
         * \@Return: EntityResponse<ConfigurationTemplate>
         * @param {?=} id
         * @return {?}
         */
        SysConfigurationsService.prototype.getTemplate = /**
         * Get configuration template by id
         * \@Return: EntityResponse<ConfigurationTemplate>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/templates/" + id);
        };
        /**
         * Get list of configuration templates
         * @Return: QueryResponse<ConfigurationTemplate>
         */
        /**
         * Get list of configuration templates
         * \@Return: QueryResponse<ConfigurationTemplate>
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        SysConfigurationsService.prototype.findTemplates = /**
         * Get list of configuration templates
         * \@Return: QueryResponse<ConfigurationTemplate>
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (page, pageSize) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (page != null) {
                params.push("page=" + page);
            }
            if (pageSize != null) {
                params.push("pageSize=" + pageSize);
            }
            return (_a = this.rest).get.apply(_a, __spread([this.baseUrl + "/templates"], params));
        };
        SysConfigurationsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysConfigurationsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysConfigurationsService;
    }());
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
        /**
         * Get single event by id
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} accountId
         * @return {?}
         */
        SysEventsService.prototype.get = /**
         * Get single event by id
         * \@Return: EntityResponse<Event>
         * @param {?=} id
         * @param {?=} accountId
         * @return {?}
         */
        function (id, accountId) {
            return this.rest.get(this.baseUrl + "/" + accountId + "/" + id);
        };
        /**
         * Find events by filters
         * @Return: QueryResponse<Event>
         */
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
        SysEventsService.prototype.find = /**
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
        function (accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        SysEventsService.prototype.getEventsCountOvertime = /**
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
        function (accountId, folderId, sensorId, objectType, behaviorType, severity, from, to, interval, format) {
            var _a;
            /** @type {?} */
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
        SysEventsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysEventsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysEventsService;
    }());
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
        /**
         * Create new features group
         * \@Return: EntityResponse<FeaturesGroup>
         * @param {?=} body
         * @return {?}
         */
        SysFeaturesGroupsService.prototype.create = /**
         * Create new features group
         * \@Return: EntityResponse<FeaturesGroup>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update features group
         * @Return: EntityResponse<FeaturesGroup>
         */
        /**
         * Update features group
         * \@Return: EntityResponse<FeaturesGroup>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysFeaturesGroupsService.prototype.update = /**
         * Update features group
         * \@Return: EntityResponse<FeaturesGroup>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete Feature from the system
         * @Return: ActionResponse
         */
        /**
         * Delete Feature from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysFeaturesGroupsService.prototype.delete = /**
         * Delete Feature from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single features group by id
         * @Return: EntityResponse<FeaturesGroup>
         */
        /**
         * Get single features group by id
         * \@Return: EntityResponse<FeaturesGroup>
         * @param {?=} id
         * @return {?}
         */
        SysFeaturesGroupsService.prototype.get = /**
         * Get single features group by id
         * \@Return: EntityResponse<FeaturesGroup>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find features groups by filters
         * @Return: QueryResponse<FeaturesGroup>
         */
        /**
         * Find features groups by filters
         * \@Return: QueryResponse<FeaturesGroup>
         * @param {?=} search
         * @param {?=} sort
         * @return {?}
         */
        SysFeaturesGroupsService.prototype.find = /**
         * Find features groups by filters
         * \@Return: QueryResponse<FeaturesGroup>
         * @param {?=} search
         * @param {?=} sort
         * @return {?}
         */
        function (search, sort) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (search != null) {
                params.push("search=" + search);
            }
            if (sort != null) {
                params.push("sort=" + sort);
            }
            return (_a = this.rest).get.apply(_a, __spread(["" + this.baseUrl], params));
        };
        SysFeaturesGroupsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysFeaturesGroupsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysFeaturesGroupsService;
    }());
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
        /**
         * Create new Feature
         * \@Return: EntityResponse<Feature>
         * @param {?=} body
         * @return {?}
         */
        SysFeaturesService.prototype.create = /**
         * Create new Feature
         * \@Return: EntityResponse<Feature>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update Feature
         * @Return: EntityResponse<Feature>
         */
        /**
         * Update Feature
         * \@Return: EntityResponse<Feature>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysFeaturesService.prototype.update = /**
         * Update Feature
         * \@Return: EntityResponse<Feature>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Delete Feature from the system
         * @Return: ActionResponse
         */
        /**
         * Delete Feature from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysFeaturesService.prototype.delete = /**
         * Delete Feature from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single feature by id
         * @Return: EntityResponse<Feature>
         */
        /**
         * Get single feature by id
         * \@Return: EntityResponse<Feature>
         * @param {?=} id
         * @return {?}
         */
        SysFeaturesService.prototype.get = /**
         * Get single feature by id
         * \@Return: EntityResponse<Feature>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find features by filters
         * @Return: QueryResponse<Feature>
         */
        /**
         * Find features by filters
         * \@Return: QueryResponse<Feature>
         * @param {?=} search
         * @param {?=} category
         * @param {?=} sort
         * @return {?}
         */
        SysFeaturesService.prototype.find = /**
         * Find features by filters
         * \@Return: QueryResponse<Feature>
         * @param {?=} search
         * @param {?=} category
         * @param {?=} sort
         * @return {?}
         */
        function (search, category, sort) {
            var _a;
            /** @type {?} */
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
        SysFeaturesService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysFeaturesService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysFeaturesService;
    }());
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
        /**
         * Create new API key for specific application name
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} body
         * @return {?}
         */
        SysKeysService.prototype.create = /**
         * Create new API key for specific application name
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post(this.baseUrl + "/api-keys", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change API Key version (rotate key)
         * @Return: EntityResponse<ApiKey>
         */
        /**
         * Change API Key version (rotate key)
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        SysKeysService.prototype.rotate = /**
         * Change API Key version (rotate key)
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.put(this.baseUrl + "/api-keys/" + id + "/rotate", null);
        };
        /**
         * Delete API Key
         * @Return: ActionResponse
         */
        /**
         * Delete API Key
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysKeysService.prototype.delete = /**
         * Delete API Key
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/api-keys/" + id);
        };
        /**
         * Get single API Key by id
         * @Return: EntityResponse<ApiKey>
         */
        /**
         * Get single API Key by id
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        SysKeysService.prototype.get = /**
         * Get single API Key by id
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/api-keys/" + id);
        };
        /**
         * Get list of all keys
         * @Return: EntitiesResponse<ApiKey>
         */
        /**
         * Get list of all keys
         * \@Return: EntitiesResponse<ApiKey>
         * @return {?}
         */
        SysKeysService.prototype.getAll = /**
         * Get list of all keys
         * \@Return: EntitiesResponse<ApiKey>
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/api-keys");
        };
        /**
         * Enable key
         * @Return: EntityResponse<ApiKey>
         */
        /**
         * Enable key
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        SysKeysService.prototype.enable = /**
         * Enable key
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.put(this.baseUrl + "/api-keys/" + id + "/enable", null);
        };
        /**
         * Disable key
         * @Return: EntityResponse<ApiKey>
         */
        /**
         * Disable key
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        SysKeysService.prototype.disable = /**
         * Disable key
         * \@Return: EntityResponse<ApiKey>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.put(this.baseUrl + "/api-keys/" + id + "/disable", null);
        };
        /**
         * Create access token for the user in the specified account
         * @Return: ActionResponse
         */
        /**
         * Create access token for the user in the specified account
         * \@Return: ActionResponse
         * @param {?=} accountId
         * @param {?=} userId
         * @param {?=} ttl
         * @return {?}
         */
        SysKeysService.prototype.createAccessToken = /**
         * Create access token for the user in the specified account
         * \@Return: ActionResponse
         * @param {?=} accountId
         * @param {?=} userId
         * @param {?=} ttl
         * @return {?}
         */
        function (accountId, userId, ttl) {
            var _a;
            /** @type {?} */
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
        /**
         * Create time limited password for user to access the API documentation
         * \@Return: ActionResponse
         * @param {?=} days
         * @param {?=} user
         * @return {?}
         */
        SysKeysService.prototype.createTimedPassword = /**
         * Create time limited password for user to access the API documentation
         * \@Return: ActionResponse
         * @param {?=} days
         * @param {?=} user
         * @return {?}
         */
        function (days, user) {
            var _a;
            /** @type {?} */
            var params = new Array();
            if (days != null) {
                params.push("days=" + days);
            }
            if (user != null) {
                params.push("user=" + user);
            }
            return (_a = this.rest).post.apply(_a, __spread([this.baseUrl + "/password", null], params));
        };
        SysKeysService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysKeysService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysKeysService;
    }());
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
        /**
         * Get single sensor by id
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        SysSensorsService.prototype.get = /**
         * Get single sensor by id
         * \@Return: EntityResponse<Sensor>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find sensors by filters
         * @Return: QueryResponse<Sensor>
         */
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
        SysSensorsService.prototype.find = /**
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
        function (accountId, folderId, subFolders, search, type, status, stream, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Get single sensor health by sensor id
         * \@Return: EntityResponse<SensorStatus>
         * @param {?=} id
         * @return {?}
         */
        SysSensorsService.prototype.getSensorHealthStatus = /**
         * Get single sensor health by sensor id
         * \@Return: EntityResponse<SensorStatus>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id + "/health");
        };
        /**
         * Get all sensors health status
         * @Return: EntitiesResponse<SensorStatus>
         */
        /**
         * Get all sensors health status
         * \@Return: EntitiesResponse<SensorStatus>
         * @return {?}
         */
        SysSensorsService.prototype.getSensorsHealthStatus = /**
         * Get all sensors health status
         * \@Return: EntitiesResponse<SensorStatus>
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/health");
        };
        /**
         * Get sensor status history over time
         * @Return:  EntityResponse<SensorStatusTimeSeries>
         */
        /**
         * Get sensor status history over time
         * \@Return: EntityResponse<SensorStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        SysSensorsService.prototype.getStatusOverTime = /**
         * Get sensor status history over time
         * \@Return: EntityResponse<SensorStatusTimeSeries>
         * @param {?=} id
         * @param {?=} from
         * @param {?=} to
         * @return {?}
         */
        function (id, from, to) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate sensors count distribution by type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} accountId
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        SysSensorsService.prototype.getSensorsCountByType = /**
         * Aggregate sensors count distribution by type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} accountId
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        function (accountId, folderId, subFolders, sensorType, status, streamType) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate sensors count distribution by stream type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} accountId
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        SysSensorsService.prototype.getSensorsCountByStream = /**
         * Aggregate sensors count distribution by stream type
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} accountId
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        function (accountId, folderId, subFolders, sensorType, status, streamType) {
            var _a;
            /** @type {?} */
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
        /**
         * Aggregate sensors count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} accountId
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        SysSensorsService.prototype.getSensorsCountByStatus = /**
         * Aggregate sensors count distribution by status
         * \@Return: EntityResponse<DistributionOfLong>
         * @param {?=} accountId
         * @param {?=} folderId
         * @param {?=} subFolders
         * @param {?=} sensorType
         * @param {?=} status
         * @param {?=} streamType
         * @return {?}
         */
        function (accountId, folderId, subFolders, sensorType, status, streamType) {
            var _a;
            /** @type {?} */
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
        SysSensorsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysSensorsService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysSensorsService;
    }());
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
        /**
         * Get system license
         * \@Return: EntityResponse<License>
         * @return {?}
         */
        SysSystemService.prototype.getLicense = /**
         * Get system license
         * \@Return: EntityResponse<License>
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/license");
        };
        /**
         * Import license data from file
         * @Return: ActionResponse
         */
        /**
         * Import license data from file
         * \@Return: ActionResponse
         * @return {?}
         */
        SysSystemService.prototype.importLicense = /**
         * Import license data from file
         * \@Return: ActionResponse
         * @return {?}
         */
        function () {
            return this.rest.post(this.baseUrl + "/license", null);
        };
        /**
         * Get system version
         * @Return: ActionResponse
         */
        /**
         * Get system version
         * \@Return: ActionResponse
         * @return {?}
         */
        SysSystemService.prototype.getSystemVersion = /**
         * Get system version
         * \@Return: ActionResponse
         * @return {?}
         */
        function () {
            return this.rest.get(this.baseUrl + "/license");
        };
        /**
         * Export account configuration data
         * @Return: StreamingOutput of the content (gzip)
         */
        /**
         * Export account configuration data
         * \@Return: StreamingOutput of the content (gzip)
         * @param {?=} accountId
         * @param {?=} password
         * @return {?}
         */
        SysSystemService.prototype.exportAccountData = /**
         * Export account configuration data
         * \@Return: StreamingOutput of the content (gzip)
         * @param {?=} accountId
         * @param {?=} password
         * @return {?}
         */
        function (accountId, password) {
            var _a;
            /** @type {?} */
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
        /**
         * Import account configuration data from byte array (zip content)
         * \@Return: ActionResponse
         * @return {?}
         */
        SysSystemService.prototype.importAccountData = /**
         * Import account configuration data from byte array (zip content)
         * \@Return: ActionResponse
         * @return {?}
         */
        function () {
            return this.rest.post(this.baseUrl + "/accounts/import", null);
        };
        /**
         * Export SW package configurations data
         * @Return: StreamingOutput of the content (zip)
         */
        /**
         * Export SW package configurations data
         * \@Return: StreamingOutput of the content (zip)
         * @return {?}
         */
        SysSystemService.prototype.exportConfigurations = /**
         * Export SW package configurations data
         * \@Return: StreamingOutput of the content (zip)
         * @return {?}
         */
        function () {
            return this.rest.download("sys-system", this.baseUrl + "/configurations/export");
        };
        /**
         * Import SW package configurations data from byte array (zip content)
         * @Return: ActionResponse
         */
        /**
         * Import SW package configurations data from byte array (zip content)
         * \@Return: ActionResponse
         * @return {?}
         */
        SysSystemService.prototype.importConfigurations = /**
         * Import SW package configurations data from byte array (zip content)
         * \@Return: ActionResponse
         * @return {?}
         */
        function () {
            return this.rest.post(this.baseUrl + "/configurations/import", null);
        };
        /**
         * Backup entire system (configurations, users and accounts)
         * @Return: StreamingOutput of the content (zip)
         */
        /**
         * Backup entire system (configurations, users and accounts)
         * \@Return: StreamingOutput of the content (zip)
         * @return {?}
         */
        SysSystemService.prototype.backupSystem = /**
         * Backup entire system (configurations, users and accounts)
         * \@Return: StreamingOutput of the content (zip)
         * @return {?}
         */
        function () {
            return this.rest.download("sys-system", this.baseUrl + "/backup");
        };
        /**
         * Restore entire system (zip content)
         * @Return: ActionResponse
         */
        /**
         * Restore entire system (zip content)
         * \@Return: ActionResponse
         * @return {?}
         */
        SysSystemService.prototype.restoreSystem = /**
         * Restore entire system (zip content)
         * \@Return: ActionResponse
         * @return {?}
         */
        function () {
            return this.rest.post(this.baseUrl + "/restore", null);
        };
        SysSystemService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysSystemService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysSystemService;
    }());
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
        /**
         * Create a new user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        SysUsersService.prototype.create = /**
         * Create a new user for the current account
         * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
         * \@Return: ActionResponse
         * @param {?=} body
         * @return {?}
         */
        function (body) {
            return this.rest.post("" + this.baseUrl, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Update user
         * @Return: EntityResponse<User>
         */
        /**
         * Update user
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysUsersService.prototype.update = /**
         * Update user
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id, typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user name
         * @Return: EntityResponse<User>
         */
        /**
         * Change user name
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysUsersService.prototype.changeName = /**
         * Change user name
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/name", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user mobile
         * @Return: EntityResponse<User>
         */
        /**
         * Change user mobile
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        SysUsersService.prototype.changeMobile = /**
         * Change user mobile
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} body
         * @return {?}
         */
        function (id, body) {
            return this.rest.put(this.baseUrl + "/" + id + "/mobile", typeof body === 'object' ? JSON.stringify(body) : body);
        };
        /**
         * Change user type
         * @Return: EntityResponse<User>
         */
        /**
         * Change user type
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} type
         * @return {?}
         */
        SysUsersService.prototype.changeType = /**
         * Change user type
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} type
         * @return {?}
         */
        function (id, type) {
            return this.rest.put(this.baseUrl + "/" + id + "/type/" + type, null);
        };
        /**
         * Change user status
         * @Return: EntityResponse<User>
         */
        /**
         * Change user status
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} status
         * @return {?}
         */
        SysUsersService.prototype.changeStatus = /**
         * Change user status
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} status
         * @return {?}
         */
        function (id, status) {
            return this.rest.put(this.baseUrl + "/" + id + "/status/" + status, null);
        };
        /**
         * Change user default account
         * @Return: EntityResponse<User>
         */
        /**
         * Change user default account
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} accountId
         * @return {?}
         */
        SysUsersService.prototype.changeDefaultAccount = /**
         * Change user default account
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} accountId
         * @return {?}
         */
        function (id, accountId) {
            return this.rest.put(this.baseUrl + "/" + id + "/defaultAccount/" + accountId, null);
        };
        /**
         * Reset password for user, generate one-time temporary password
         * @Return: ActionResponse
         */
        /**
         * Reset password for user, generate one-time temporary password
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysUsersService.prototype.resetPassword = /**
         * Reset password for user, generate one-time temporary password
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.post(this.baseUrl + "/" + id + "/reset-password", null);
        };
        /**
         * Set user roles in his accounts (override previous roles)
         * @Return: EntityResponse<User>
         */
        /**
         * Set user roles in his accounts (override previous roles)
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} roles
         * @return {?}
         */
        SysUsersService.prototype.setRoles = /**
         * Set user roles in his accounts (override previous roles)
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} roles
         * @return {?}
         */
        function (id, roles) {
            return this.rest.post(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
        };
        /**
         * Update user roles in his accounts (merge with existing roles)
         * @Return: EntityResponse<User>
         */
        /**
         * Update user roles in his accounts (merge with existing roles)
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} roles
         * @return {?}
         */
        SysUsersService.prototype.mergeRoles = /**
         * Update user roles in his accounts (merge with existing roles)
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @param {?=} roles
         * @return {?}
         */
        function (id, roles) {
            return this.rest.put(this.baseUrl + "/" + id + "/roles/", typeof roles === 'object' ? JSON.stringify(roles) : roles);
        };
        /**
         * Delete user from the system
         * @Return: ActionResponse
         */
        /**
         * Delete user from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        SysUsersService.prototype.delete = /**
         * Delete user from the system
         * \@Return: ActionResponse
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.delete(this.baseUrl + "/" + id);
        };
        /**
         * Get single user by Id
         * @Return: EntityResponse<User>
         */
        /**
         * Get single user by Id
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @return {?}
         */
        SysUsersService.prototype.get = /**
         * Get single user by Id
         * \@Return: EntityResponse<User>
         * @param {?=} id
         * @return {?}
         */
        function (id) {
            return this.rest.get(this.baseUrl + "/" + id);
        };
        /**
         * Find list of users by filter
         * @Return: QueryResponse<User>
         */
        /**
         * Find list of users by filter
         * \@Return: QueryResponse<User>
         * @param {?=} accountId
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        SysUsersService.prototype.find = /**
         * Find list of users by filter
         * \@Return: QueryResponse<User>
         * @param {?=} accountId
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} page
         * @param {?=} pageSize
         * @return {?}
         */
        function (accountId, search, type, status, sort, page, pageSize) {
            var _a;
            /** @type {?} */
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
        /**
         * Export list of users and filter
         * \@Return: StreamContent
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        SysUsersService.prototype.exportFormat = /**
         * Export list of users and filter
         * \@Return: StreamContent
         * @param {?=} search
         * @param {?=} type
         * @param {?=} status
         * @param {?=} sort
         * @param {?=} format
         * @param {?=} fields
         * @return {?}
         */
        function (search, type, status, sort, format, fields) {
            var _a;
            /** @type {?} */
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
        SysUsersService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        SysUsersService.ctorParameters = function () { return [
            { type: CoreConfig, decorators: [{ type: core.Inject, args: ['config',] }] },
            { type: RestUtil }
        ]; };
        return SysUsersService;
    }());
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
    /** @type {?} */
    var Services = [
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
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       @WebSocketMessage
    */
    var   /*
       @WebSocketMessage
    */
    EventsSocketServiceOpen = /** @class */ (function () {
        function EventsSocketServiceOpen(accountId) {
            this.accountId = accountId;
        }
        return EventsSocketServiceOpen;
    }());
    if (false) {
        /** @type {?} */
        EventsSocketServiceOpen.prototype.accountId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       @WebSocketMessage
    */
    var   /*
       @WebSocketMessage
    */
    HealthSocketServiceOpen = /** @class */ (function () {
        function HealthSocketServiceOpen(accountId) {
            this.accountId = accountId;
        }
        return HealthSocketServiceOpen;
    }());
    if (false) {
        /** @type {?} */
        HealthSocketServiceOpen.prototype.accountId;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       @WebSocketMessage
       This message is pushed to the client upon any new event in the registered account
    */
    var   /*
       @WebSocketMessage
       This message is pushed to the client upon any new event in the registered account
    */
    SocketEventNotification = /** @class */ (function (_super) {
        __extends(SocketEventNotification, _super);
        function SocketEventNotification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SocketEventNotification;
    }(WebSocketMessageHeader));
    if (false) {
        /** @type {?} */
        SocketEventNotification.prototype.code;
        /** @type {?} */
        SocketEventNotification.prototype.error;
        /** @type {?} */
        SocketEventNotification.prototype.accountId;
        /** @type {?} */
        SocketEventNotification.prototype.sensorId;
        /** @type {?} */
        SocketEventNotification.prototype.eventId;
        /** @type {?} */
        SocketEventNotification.prototype.op;
        /** @type {?} */
        SocketEventNotification.prototype.ver;
        /** @type {?} */
        SocketEventNotification.prototype.id;
        /** @type {?} */
        SocketEventNotification.prototype.cid;
        /** @type {?} */
        SocketEventNotification.prototype.sid;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /*
       @WebSocketMessage
       This message is pushed to the client upon any sensor health status change in the registered account
    */
    var   /*
       @WebSocketMessage
       This message is pushed to the client upon any sensor health status change in the registered account
    */
    SocketHealthStatusNotification = /** @class */ (function (_super) {
        __extends(SocketHealthStatusNotification, _super);
        function SocketHealthStatusNotification() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SocketHealthStatusNotification;
    }(WebSocketMessageHeader));
    if (false) {
        /** @type {?} */
        SocketHealthStatusNotification.prototype.code;
        /** @type {?} */
        SocketHealthStatusNotification.prototype.error;
        /** @type {?} */
        SocketHealthStatusNotification.prototype.sensorStatus;
        /** @type {?} */
        SocketHealthStatusNotification.prototype.op;
        /** @type {?} */
        SocketHealthStatusNotification.prototype.ver;
        /** @type {?} */
        SocketHealthStatusNotification.prototype.id;
        /** @type {?} */
        SocketHealthStatusNotification.prototype.cid;
        /** @type {?} */
        SocketHealthStatusNotification.prototype.sid;
    }

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
    var CoreLibModule = /** @class */ (function () {
        function CoreLibModule() {
        }
        /**
         * @param {?} config
         * @return {?}
         */
        CoreLibModule.forRoot = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            // console.log(config);
            return {
                ngModule: CoreLibModule,
                providers: __spread([
                    { provide: 'config', useValue: config },
                    RestUtil
                ], Services)
            };
        };
        CoreLibModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, http.HttpClientModule]
                    },] }
        ];
        return CoreLibModule;
    }());

    exports.AbsoluteTimeFrame = AbsoluteTimeFrame;
    exports.Account = Account;
    exports.AccountIdRequest = AccountIdRequest;
    exports.AccountIdsRequest = AccountIdsRequest;
    exports.AccountRole = AccountRole;
    exports.AccountRoleCode = AccountRoleCode;
    exports.AccountSettings = AccountSettings;
    exports.AccountStatusCode = AccountStatusCode;
    exports.AccountTypeCode = AccountTypeCode;
    exports.AccountTypeSummary = AccountTypeSummary;
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
    exports.AgentIntegration = AgentIntegration;
    exports.AgentStatusCode = AgentStatusCode;
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
    exports.ApplianceCommandCode = ApplianceCommandCode;
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
    exports.ApplianceStatusCode = ApplianceStatusCode;
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
    exports.AuditLog = AuditLog;
    exports.AuditLogIdRequest = AuditLogIdRequest;
    exports.AuditLogService = AuditLogService;
    exports.AuditLogServiceExportRequest = AuditLogServiceExportRequest;
    exports.AuditLogServiceFindRequest = AuditLogServiceFindRequest;
    exports.BaseEntity = BaseEntity;
    exports.BehaviorTypeCode = BehaviorTypeCode;
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
    exports.ColorCode = ColorCode;
    exports.ColorTypeCode = ColorTypeCode;
    exports.CommandStatusCode = CommandStatusCode;
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
    exports.DayOfWeekCode = DayOfWeekCode;
    exports.Dimension = Dimension;
    exports.DiskInfo = DiskInfo;
    exports.DistributionOfLong = DistributionOfLong;
    exports.DistributionOfString = DistributionOfString;
    exports.DockerCredentials = DockerCredentials;
    exports.EmptyRequest = EmptyRequest;
    exports.EntitiesResponse = EntitiesResponse;
    exports.EntitiesResponseOfAccount = EntitiesResponseOfAccount;
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
    exports.EntitiesResponseOfReportDefinition = EntitiesResponseOfReportDefinition;
    exports.EntitiesResponseOfRule = EntitiesResponseOfRule;
    exports.EntitiesResponseOfRuleSpec = EntitiesResponseOfRuleSpec;
    exports.EntitiesResponseOfSchedule = EntitiesResponseOfSchedule;
    exports.EntitiesResponseOfScheduledReport = EntitiesResponseOfScheduledReport;
    exports.EntitiesResponseOfSearchDefinition = EntitiesResponseOfSearchDefinition;
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
    exports.EntityResponseOfLicense = EntityResponseOfLicense;
    exports.EntityResponseOfLoginData = EntityResponseOfLoginData;
    exports.EntityResponseOfReportDefinition = EntityResponseOfReportDefinition;
    exports.EntityResponseOfRule = EntityResponseOfRule;
    exports.EntityResponseOfSchedule = EntityResponseOfSchedule;
    exports.EntityResponseOfScheduledReport = EntityResponseOfScheduledReport;
    exports.EntityResponseOfSearchDefinition = EntityResponseOfSearchDefinition;
    exports.EntityResponseOfSensor = EntityResponseOfSensor;
    exports.EntityResponseOfSensorAnalysisResults = EntityResponseOfSensorAnalysisResults;
    exports.EntityResponseOfSensorAnomalyInfo = EntityResponseOfSensorAnomalyInfo;
    exports.EntityResponseOfSensorStatus = EntityResponseOfSensorStatus;
    exports.EntityResponseOfSensorStatusTimeSeries = EntityResponseOfSensorStatusTimeSeries;
    exports.EntityResponseOfTreeNode = EntityResponseOfTreeNode;
    exports.EntityResponseOfUser = EntityResponseOfUser;
    exports.EntityResponseOfUserAccountInfo = EntityResponseOfUserAccountInfo;
    exports.Event = Event;
    exports.EventAction = EventAction;
    exports.EventCountDataPoint = EventCountDataPoint;
    exports.EventCountTimeSeries = EventCountTimeSeries;
    exports.EventIdRequest = EventIdRequest;
    exports.EventIdsRequest = EventIdsRequest;
    exports.EventStatistics = EventStatistics;
    exports.EventStatusCode = EventStatusCode;
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
    exports.FeatureCode = FeatureCode;
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
    exports.IntegrationIdRequest = IntegrationIdRequest;
    exports.IntegrationIdsRequest = IntegrationIdsRequest;
    exports.IntegrationTarget = IntegrationTarget;
    exports.IntegrationTypeCode = IntegrationTypeCode;
    exports.IntegrationsService = IntegrationsService;
    exports.IntegrationsServiceCreateRequest = IntegrationsServiceCreateRequest;
    exports.IntegrationsServiceFindRequest = IntegrationsServiceFindRequest;
    exports.IntegrationsServiceUpdateRequest = IntegrationsServiceUpdateRequest;
    exports.License = License;
    exports.LineCrossDirectionCode = LineCrossDirectionCode;
    exports.LoginData = LoginData;
    exports.LoginParams = LoginParams;
    exports.LongTuple = LongTuple;
    exports.MapClientCode = MapClientCode;
    exports.ObjectColor = ObjectColor;
    exports.ObjectInfo = ObjectInfo;
    exports.ObjectInstance = ObjectInstance;
    exports.ObjectTypeCode = ObjectTypeCode;
    exports.ObjectTypeNode = ObjectTypeNode;
    exports.OnvifChannel = OnvifChannel;
    exports.Point = Point;
    exports.Preset = Preset;
    exports.ProductTypeCode = ProductTypeCode;
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
    exports.QueryResponseOfIntegrationTarget = QueryResponseOfIntegrationTarget;
    exports.QueryResponseOfObjectInfo = QueryResponseOfObjectInfo;
    exports.QueryResponseOfReportDefinition = QueryResponseOfReportDefinition;
    exports.QueryResponseOfRule = QueryResponseOfRule;
    exports.QueryResponseOfSchedule = QueryResponseOfSchedule;
    exports.QueryResponseOfSearchDefinition = QueryResponseOfSearchDefinition;
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
    exports.RuntimeStatusCode = RuntimeStatusCode;
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
    exports.SearchIdRequest = SearchIdRequest;
    exports.SearchIdsRequest = SearchIdsRequest;
    exports.SearchObject = SearchObject;
    exports.SearchResult = SearchResult;
    exports.SearchResultObject = SearchResultObject;
    exports.SearchScopeCode = SearchScopeCode;
    exports.SearchService = SearchService;
    exports.SearchServiceCreateRequest = SearchServiceCreateRequest;
    exports.SearchServiceExecuteRequest = SearchServiceExecuteRequest;
    exports.SearchServiceFindRequest = SearchServiceFindRequest;
    exports.SearchServiceUpdateRequest = SearchServiceUpdateRequest;
    exports.SearchShape = SearchShape;
    exports.SearchTimeCode = SearchTimeCode;
    exports.Sensitivity = Sensitivity;
    exports.Sensor = Sensor;
    exports.SensorAnalysisIdRequest = SensorAnalysisIdRequest;
    exports.SensorAnalysisResults = SensorAnalysisResults;
    exports.SensorAnomalyInfo = SensorAnomalyInfo;
    exports.SensorAnomalyRuleInfo = SensorAnomalyRuleInfo;
    exports.SensorConfigChangeMask = SensorConfigChangeMask;
    exports.SensorDebugInfo = SensorDebugInfo;
    exports.SensorIdRequest = SensorIdRequest;
    exports.SensorIdsRequest = SensorIdsRequest;
    exports.SensorResolutionCode = SensorResolutionCode;
    exports.SensorStateMask = SensorStateMask;
    exports.SensorStatus = SensorStatus;
    exports.SensorStatusCode = SensorStatusCode;
    exports.SensorStatusTimeSeries = SensorStatusTimeSeries;
    exports.SensorStatusTimestamped = SensorStatusTimestamped;
    exports.SensorTypeCode = SensorTypeCode;
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
    exports.SeverityTypeCode = SeverityTypeCode;
    exports.SocketEventNotification = SocketEventNotification;
    exports.SocketHealthStatusNotification = SocketHealthStatusNotification;
    exports.StreamResponse = StreamResponse;
    exports.StreamTypeCode = StreamTypeCode;
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
    exports.TimeUnitCode = TimeUnitCode;
    exports.TokenRequest = TokenRequest;
    exports.TransformationTypeCode = TransformationTypeCode;
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
    exports.UserStatusCode = UserStatusCode;
    exports.UserTypeCode = UserTypeCode;
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
    exports.VisualQualityCode = VisualQualityCode;
    exports.WebSocketMessageHeader = WebSocketMessageHeader;
    exports.ZoneTypeCode = ZoneTypeCode;
    exports.getToken = getToken;
    exports.removeToken = removeToken;
    exports.setToken = setToken;
    exports.ɵa = RestUtil;
    exports.ɵb = Services;
    exports.ɵba = SysKeysService;
    exports.ɵbb = SysSensorsService;
    exports.ɵbc = SysSystemService;
    exports.ɵbd = SysUsersService;
    exports.ɵc = AccountsService;
    exports.ɵd = AppliancesService;
    exports.ɵe = AuditLogService;
    exports.ɵf = CalendarsService;
    exports.ɵg = EventsService;
    exports.ɵh = FoldersService;
    exports.ɵi = GeoService;
    exports.ɵj = IntegrationsService;
    exports.ɵk = ReportsService;
    exports.ɵl = RulesService;
    exports.ɵm = ScheduledReportsService;
    exports.ɵn = SchedulesService;
    exports.ɵo = SearchService;
    exports.ɵp = SensorsService;
    exports.ɵq = UserService;
    exports.ɵr = UsersService;
    exports.ɵs = AnomalyService;
    exports.ɵt = HealthCheckService;
    exports.ɵu = SysAccountsService;
    exports.ɵv = SysAppliancesService;
    exports.ɵw = SysConfigurationsService;
    exports.ɵx = SysEventsService;
    exports.ɵy = SysFeaturesGroupsService;
    exports.ɵz = SysFeaturesService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=agentvi-ng-core-lib.umd.js.map
