/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* Public API Surface of ng-core-lib */
export { AbsoluteTimeFrame, AccountRole, AccountSettings, AccountTypeSummary, AnalysisResult, AnomalyEventInfo, ApplianceConfiguration, ApplianceKpiDataPoint, ApplianceKpiTimeSeries, ApplianceKpiTimestamped, ApplianceRegistration, ApplianceStatusTimeSeries, ApplianceStatusTimestamped, BoundingBox, BoundingMap, Coordinate, Dimension, DiskInfo, DistributionOfLong, DistributionOfString, DockerCredentials, EventCountDataPoint, EventCountTimeSeries, FovGeoAttributes, GeoCircle, GeoControlPoint, GeoControlPoints, GeoPolygon, GeoReferenceData, GeoReferenceTest, IntegrationSpec, LoginData, LoginParams, LongTuple, ObjectColor, ObjectInfo, ObjectInstance, ObjectTypeNode, Point, Recurrent, RecurrentTimeFrame, RuleDefault, RulePolygon, RuleSpec, SearchResult, SearchResultObject, Sensitivity, SensorAnomalyInfo, SensorAnomalyRuleInfo, SensorStatusTimeSeries, SensorStatusTimestamped, StringIntValue, StringKeyValue, TimeFrame, TreeItem, TreeNode, UserAccountInfo, UserInvitation, UserRegistration, Account, Agent, ApiKey, Appliance, ApplianceCapabilities, ApplianceCommand, ApplianceDiscovery, ApplianceStatus, AuditLog, BaseEntity, Calendar, ComponentConfiguration, Configuration, ConfigurationTemplate, ConfigurationVersion, Event, EventStatistics, Feature, FeaturesGroup, Folder, IntegrationAction, IntegrationTarget, License, OnvifChannel, Preset, ReportDefinition, Rule, Schedule, ScheduledReport, SearchBehavior, SearchColor, SearchDefinition, SearchObject, SearchShape, Sensor, SensorAnalysisResults, SensorDebugInfo, SensorStatus, UpdateStatus, User, Verification, AccountRoleCode, AccountStatusCode, AccountTypeCode, AgentStatusCode, ApplianceCommandCode, ApplianceStatusCode, BehaviorTypeCode, ColorCode, ColorTypeCode, CommandStatusCode, DayOfWeekCode, EventStatusCode, FeatureCode, IntegrationTypeCode, LineCrossDirectionCode, MapClientCode, ObjectTypeCode, ProductTypeCode, RuntimeStatusCode, SearchScopeCode, SearchTimeCode, SensorConfigChangeMask, SensorResolutionCode, SensorStateMask, SensorStatusCode, SensorTypeCode, SeverityTypeCode, StreamTypeCode, TimeUnitCode, TransformationTypeCode, UserStatusCode, UserTypeCode, VisualQualityCode, ZoneTypeCode, AccountIdRequest, AccountIdsRequest, AccountsServiceChangeGroupsRequest, AccountsServiceChangeNameRequest, AccountsServiceChangeStatusRequest, AccountsServiceChangeTypeRequest, AccountsServiceCreateRequest, AccountsServiceExportRequest, AccountsServiceFindFoldersRequest, AccountsServiceFindRequest, AccountsServiceResetRequest, AccountsServiceTreeRequest, AccountsServiceUpdateRequest, ActionResponse, AnomalyServiceFindEventsRequest, AnomalyServiceFindRequest, AnomalyServiceUpdateRequest, AnomalyServiceUpdateRuleRequest, ApiKeyIdRequest, ApplianceCommandIdRequest, ApplianceIdAgentIdRequest, ApplianceIdRequest, ApplianceServiceDeleteCommandRequest, AppliancesCountRequest, AppliancesServiceAddSensorRequest, AppliancesServiceChangeConfigurationRequest, AppliancesServiceChangeFolderRequest, AppliancesServiceChangeMachineIdRequest, AppliancesServiceChangeNameRequest, AppliancesServiceExportRequest, AppliancesServiceFindRequest, AppliancesServiceFindSensorsRequest, AppliancesServiceGetCommandsRequest, AppliancesServiceRegisterApplianceRequest, AppliancesServiceSetCommandRequest, AppliancesServiceStatusOvertimeRequest, AppliancesServiceUpdateApplianceRequest, AuditLogIdRequest, AuditLogServiceExportRequest, AuditLogServiceFindRequest, CalendarIdRequest, CalendarIdsRequest, CalendarsServiceCreateRequest, CalendarsServiceFindRequest, CalendarsServiceFolderIdRequest, CalendarsServiceImportRequest, CalendarsServiceImportUrlRequest, CalendarsServiceUpdateRequest, ChangeGeoAreaRequest, ChangeGeoLocationRequest, ChangePasswordRequest, ConfigurationIdRequest, ConfigurationModelRequest, ConfigurationTargetRequest, ConfigurationTemplateIdRequest, ConfigurationVersionIdRequest, EmptyRequest, EntitiesResponse, EntitiesResponseOfAccount, EntitiesResponseOfAccountTypeSummary, EntitiesResponseOfApiKey, EntitiesResponseOfAppliance, EntitiesResponseOfApplianceAgents, EntitiesResponseOfApplianceCommand, EntitiesResponseOfApplianceConfiguration, EntitiesResponseOfAuditLog, EntitiesResponseOfCalendar, EntitiesResponseOfComponentConfiguration, EntitiesResponseOfConfiguration, EntitiesResponseOfDistributionOfLong, EntitiesResponseOfEvent, EntitiesResponseOfFeature, EntitiesResponseOfFeaturesGroup, EntitiesResponseOfFolder, EntitiesResponseOfIntegration, EntitiesResponseOfIntegrationAction, EntitiesResponseOfReportDefinition, EntitiesResponseOfRule, EntitiesResponseOfRuleSpec, EntitiesResponseOfSchedule, EntitiesResponseOfScheduledReport, EntitiesResponseOfSearchDefinition, EntitiesResponseOfSensor, EntitiesResponseOfSensorStatus, EntityResponse, EntityResponseOfAccount, EntityResponseOfApiKey, EntityResponseOfAppliance, EntityResponseOfApplianceAgents, EntityResponseOfApplianceConfiguration, EntityResponseOfApplianceDiscovery, EntityResponseOfApplianceKpiTimeSeries, EntityResponseOfApplianceStatusTimeSeries, EntityResponseOfAuditLog, EntityResponseOfCalendar, EntityResponseOfComponentConfiguration, EntityResponseOfConfiguration, EntityResponseOfConfigurationTemplate, EntityResponseOfConfigurationVersion, EntityResponseOfCoordinate, EntityResponseOfDistributionOfLong, EntityResponseOfEvent, EntityResponseOfEventCountTimeSeries, EntityResponseOfFeature, EntityResponseOfFeaturesGroup, EntityResponseOfFolder, EntityResponseOfGeoReferenceData, EntityResponseOfIntegration, EntityResponseOfIntegrationAction, EntityResponseOfLicense, EntityResponseOfLoginData, EntityResponseOfReportDefinition, EntityResponseOfRule, EntityResponseOfSchedule, EntityResponseOfScheduledReport, EntityResponseOfSearchDefinition, EntityResponseOfSensor, EntityResponseOfSensorAnalysisResults, EntityResponseOfSensorAnomalyInfo, EntityResponseOfSensorStatus, EntityResponseOfSensorStatusTimeSeries, EntityResponseOfTreeNode, EntityResponseOfUser, EntityResponseOfUserAccountInfo, EventIdRequest, EventIdsRequest, EventsServiceCreateRequest, EventsServiceExportRequest, EventsServiceFindInAreaRequest, EventsServiceFindRequest, EventsServiceSetClipPathRequest, EventsServiceSetImagePathRequest, EventsServiceSetStatusRequest, EventsServiceStatisticsRequest, FeatureIdRequest, FeatureIdsRequest, FeaturesGroupIdRequest, FeaturesGroupIdsRequest, FeaturesGroupsServiceCreateRequest, FeaturesGroupsServiceFindRequest, FeaturesGroupsServiceSetFeaturesRequest, FeaturesGroupsServiceSetNameRequest, FeaturesGroupsServiceUpdateRequest, FeaturesServiceCreateRequest, FeaturesServiceFindRequest, FeaturesServiceUpdateRequest, FolderIdRequest, FolderIdsRequest, FoldersServiceChangeGeoAreaRequest, FoldersServiceChangeGeoLocationRequest, FoldersServiceChangeNameRequest, FoldersServiceChangeParentRequest, FoldersServiceChangeTimezoneRequest, FoldersServiceCreateRequest, FoldersServiceExportRequest, FoldersServiceFindRequest, FoldersServiceGetHierarchyRequest, GeoServicesReferenceRequest, GeoServicesTransformRequest, IntegrationActionCreateRequest, IntegrationActionIdRequest, IntegrationActionIdsRequest, IntegrationActionUpdateRequest, IntegrationActionsFindRequest, IntegrationActionsFolderRequest, IntegrationIdRequest, IntegrationIdsRequest, IntegrationsServiceCreateRequest, IntegrationsServiceFindRequest, IntegrationsServiceUpdateRequest, QueryResponse, QueryResponseOfAccount, QueryResponseOfAnomalyEventInfo, QueryResponseOfAppliance, QueryResponseOfAuditLog, QueryResponseOfCalendar, QueryResponseOfComponentConfiguration, QueryResponseOfConfiguration, QueryResponseOfConfigurationTemplate, QueryResponseOfConfigurationVersion, QueryResponseOfEvent, QueryResponseOfFolder, QueryResponseOfIntegrationAction, QueryResponseOfIntegrationTarget, QueryResponseOfObjectInfo, QueryResponseOfReportDefinition, QueryResponseOfRule, QueryResponseOfSchedule, QueryResponseOfSearchDefinition, QueryResponseOfSensor, QueryResponseOfSensorAnalysisResults, QueryResponseOfTreeItem, QueryResponseOfUser, ReportIdRequest, ReportIdsRequest, ReportsServiceCreateRequest, ReportsServiceFindRequest, ReportsServiceUpdateRequest, RuleIdRequest, RuleIdsRequest, RulesServiceCreateRequest, RulesServiceExportRequest, RulesServiceFindAnomalyRequest, RulesServiceFindRequest, RulesServiceUpdateRequest, ScheduleIdRequest, ScheduleIdsRequest, ScheduledReportIdRequest, ScheduledReportIdsRequest, ScheduledReportsServiceCreateRequest, ScheduledReportsServiceFindRequest, ScheduledReportsServiceUpdateRequest, SchedulesServiceCreateRequest, SchedulesServiceFindRequest, SchedulesServiceFolderIdRequest, SchedulesServiceUpdateRequest, SearchIdRequest, SearchIdsRequest, SearchServiceCreateRequest, SearchServiceExecuteRequest, SearchServiceFindRequest, SearchServiceUpdateRequest, SensorAnalysisIdRequest, SensorIdRequest, SensorIdsRequest, SensorsCountRequest, SensorsServiceAttachRequest, SensorsServiceChangeFolderRequest, SensorsServiceChangeFovRequest, SensorsServiceChangeGeoLocationRequest, SensorsServiceChangeNameRequest, SensorsServiceChangeStatusRequest, SensorsServiceCreateRequest, SensorsServiceExportRequest, SensorsServiceFindRequest, SensorsServiceSetRefImageRequest, SensorsServiceStatusOvertimeRequest, SensorsServiceUpdateRequest, StreamResponse, SysAccountExportRequest, SysAccountImportRequest, SysAppliancesCountRequest, SysAppliancesServiceFindRequest, SysAppliancesServiceGetCommandsRequest, SysConfigurationsServiceCreateRequest, SysConfigurationsServiceCreateTemplateRequest, SysConfigurationsServiceCreateVersionRequest, SysConfigurationsServiceDeleteVersionRequest, SysConfigurationsServiceFindRequest, SysConfigurationsServiceFindTemplateRequest, SysConfigurationsServiceUpdateRequest, SysConfigurationsServiceUpdateTemplateRequest, SysConfigurationsServiceUpdateVersionRequest, SysEventIdRequest, SysEventsServiceFindInAreaRequest, SysEventsServiceStatisticsRequest, SysKeysServiceCreateApiKeyRequest, SysKeysServiceCreatePasswordRequest, SysKeysServiceCreateTokenRequest, SysSensorsCountRequest, SysSensorsServiceFindRequest, TokenRequest, UserByEmailRequest, UserIdRequest, UserIdsRequest, UserServiceChangeMobileRequest, UserServiceChangeNameRequest, UserServiceChangePasswordRequest, UserServiceCheckPasswordRequest, UserServiceLoginRequest, UserServiceResetPasswordRequest, UserServiceSendVerificationRequest, UserServiceSwitchAccountRequest, UserServiceVerifyLoginRequest, UsersServiceChangeDefaultAccountRequest, UsersServiceChangeMobileRequest, UsersServiceChangeNameRequest, UsersServiceChangeRoleRequest, UsersServiceChangeStatusRequest, UsersServiceChangeTypeRequest, UsersServiceCreateRequest, UsersServiceExportRequest, UsersServiceFindRequest, UsersServiceInviteRequest, UsersServiceSetRolesRequest, UsersServiceUpdateRequest, WebSocketMessageHeader, AccountsService, AnomalyService, AppliancesService, AuditLogService, CalendarsService, EventsService, FoldersService, GeoService, HealthCheckService, IntegrationsService, ReportsService, RulesService, ScheduledReportsService, SchedulesService, SearchService, SensorsService, Services, SysAccountsService, SysAppliancesService, SysConfigurationsService, SysEventsService, SysFeaturesGroupsService, SysFeaturesService, SysKeysService, SysSensorsService, SysSystemService, SysUsersService, UserService, UsersService, EventsSocketServiceOpen, HealthSocketServiceOpen, SocketEventNotification, SocketHealthStatusNotification } from './lib';
export { CoreLibModule } from './core-lib.module';
export { getToken, setToken, removeToken, RestUtil } from './utils';
export { CoreConfig } from './config';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsicHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHNtV0FBYyxPQUFPLENBQUM7QUFDdEIsOEJBQWMsbUJBQW1CLENBQUM7QUFDbEMsMERBQWMsU0FBUyxDQUFDO0FBQ3hCLDJCQUFjLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBuZy1jb3JlLWxpYiAqL1xuZXhwb3J0ICogZnJvbSAnLi9saWInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlLWxpYi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7Il19