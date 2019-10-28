/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* Public API Surface of ng-core-lib */
export { AbsoluteTimeFrame, AccountRole, AccountTypeSummary, AnalysisResult, AnomalyEventInfo, ApplianceConfiguration, ApplianceRegistration, ApplianceStatusDataPoint, ApplianceStatusTimeSeries, ApplianceStatusTimestamped, BoundingBox, BoundingMap, Coordinate, Dimension, DiskInfo, DockerCredentials, EventAction, EventCountDataPoint, EventCountTimeSeries, FovGeoAttributes, GeoCircle, GeoControlPoint, GeoControlPoints, GeoPolygon, GeoReferenceData, GeoReferenceTest, InnoviClientConfig, LoginData, LoginParams, ObjectColor, ObjectInfo, ObjectInstance, ObjectTypeNode, Point, Recurrent, RecurrentTimeFrame, RuleDefault, RulePolygon, RuleSpec, SearchResult, SearchResultObject, Sensitivity, SensorAnomalyInfo, SensorAnomalyRuleInfo, SensorStatusTimeSeries, SensorStatusTimestamped, StringIntValue, StringKeyValue, TimeFrame, TreeItem, TreeNode, UserAccountInfo, UserInvitation, UserRegistration, Account, Agent, ApiKey, Appliance, ApplianceCapabilities, ApplianceCommand, ApplianceStatus, AuditLog, BaseEntity, Calendar, ComponentConfiguration, Configuration, ConfigurationTemplate, ConfigurationVersion, Event, EventStatistics, Feature, FeaturesGroup, Folder, GeoRule, IntegrationAction, IntegrationTarget, License, Preset, ReportDefinition, Rule, Schedule, ScheduledReport, SearchColor, SearchDefinition, SearchObject, Sensor, SensorAnalysisResults, SensorDebugInfo, SensorHealth, SensorRule, SensorStatus, UpdateStatus, User, Verification, AccountRoleCode, AccountStatusCode, AccountTypeCode, AgentStatusCode, ApplianceCommandCode, ApplianceStatusCode, BehaviorTypeCode, ColorCode, ColorTypeCode, CommandStatusCode, DayOfWeekCode, EventStatusCode, IntegrationTypeCode, LineCrossDirectionCode, MapClientCode, ObjectTypeCode, ProductTypeCode, SearchScopeCode, SearchTimeCode, SensorConfigChangeMask, SensorResolutionCode, SensorStatusCode, SensorStatusMask, SensorTypeCode, SeverityTypeCode, StreamTypeCode, TimeUnitCode, TransformationTypeCode, UserStatusCode, UserTypeCode, VisualQualityCode, ZoneTypeCode, AccountIdRequest, AccountIdsRequest, AccountsServiceChangeGroupsRequest, AccountsServiceChangeNameRequest, AccountsServiceChangeStatusRequest, AccountsServiceChangeTypeRequest, AccountsServiceCreateRequest, AccountsServiceFindRequest, AccountsServiceUpdateRequest, ActionResponse, AnomalyServiceFindEventsRequest, AnomalyServiceFindRequest, AnomalyServiceUpdateRequest, AnomalyServiceUpdateRuleRequest, ApiKeyIdRequest, ApplianceCommandIdRequest, ApplianceIdRequest, AppliancesServiceAddSensorRequest, AppliancesServiceChangeConfigurationRequest, AppliancesServiceChangeFolderRequest, AppliancesServiceChangeMachineIdRequest, AppliancesServiceChangeNameRequest, AppliancesServiceFindRequest, AppliancesServiceFindSensorsRequest, AppliancesServiceGetCommandsRequest, AppliancesServiceRegisterApplianceRequest, AppliancesServiceSetCommandRequest, AppliancesServiceStatusOvertimeRequest, AuditLogIdRequest, AuditLogServiceFindRequest, CalendarIdRequest, CalendarIdsRequest, CalendarsServiceCreateRequest, CalendarsServiceFindRequest, CalendarsServiceFolderIdRequest, CalendarsServiceUpdateRequest, ChangeGeoAreaRequest, ChangeGeoLocationRequest, ChangePasswordRequest, ConfigurationIdRequest, ConfigurationTargetRequest, ConfigurationTemplateIdRequest, ConfigurationVersionIdRequest, EmptyRequest, EntitiesResponse, EntitiesResponseOfAccount, EntitiesResponseOfAccountTypeSummary, EntitiesResponseOfApiKey, EntitiesResponseOfAppliance, EntitiesResponseOfApplianceAgents, EntitiesResponseOfApplianceCommand, EntitiesResponseOfApplianceConfiguration, EntitiesResponseOfAuditLog, EntitiesResponseOfCalendar, EntitiesResponseOfComponentConfiguration, EntitiesResponseOfConfiguration, EntitiesResponseOfEvent, EntitiesResponseOfFeature, EntitiesResponseOfFeaturesGroup, EntitiesResponseOfFolder, EntitiesResponseOfIntegration, EntitiesResponseOfReportDefinition, EntitiesResponseOfRule, EntitiesResponseOfRuleSpec, EntitiesResponseOfSchedule, EntitiesResponseOfScheduledReport, EntitiesResponseOfSearchDefinition, EntitiesResponseOfSensor, EntitiesResponseOfSensorHealth, EntityResponse, EntityResponseOfAccount, EntityResponseOfApiKey, EntityResponseOfAppliance, EntityResponseOfApplianceStatusTimeSeries, EntityResponseOfAuditLog, EntityResponseOfCalendar, EntityResponseOfComponentConfiguration, EntityResponseOfConfiguration, EntityResponseOfConfigurationTemplate, EntityResponseOfConfigurationVersion, EntityResponseOfCoordinate, EntityResponseOfEvent, EntityResponseOfEventCountTimeSeries, EntityResponseOfFeature, EntityResponseOfFeaturesGroup, EntityResponseOfFolder, EntityResponseOfGeoReferenceData, EntityResponseOfInnoviClientConfig, EntityResponseOfIntegration, EntityResponseOfLicense, EntityResponseOfLoginData, EntityResponseOfReportDefinition, EntityResponseOfRule, EntityResponseOfSchedule, EntityResponseOfScheduledReport, EntityResponseOfSearchDefinition, EntityResponseOfSensor, EntityResponseOfSensorAnalysisResults, EntityResponseOfSensorAnomalyInfo, EntityResponseOfSensorHealth, EntityResponseOfSensorStatusTimeSeries, EntityResponseOfTreeNode, EntityResponseOfUser, EntityResponseOfUserAccountInfo, EventIdRequest, EventIdsRequest, EventsServiceCreateRequest, EventsServiceFindInAreaRequest, EventsServiceFindRequest, EventsServiceSetClipPathRequest, EventsServiceSetImagePathRequest, EventsServiceSetStatusRequest, EventsServiceStatisticsRequest, FeatureIdRequest, FeatureIdsRequest, FeaturesGroupIdRequest, FeaturesGroupIdsRequest, FeaturesGroupsServiceCreateRequest, FeaturesGroupsServiceFindRequest, FeaturesGroupsServiceSetFeaturesRequest, FeaturesGroupsServiceSetNameRequest, FeaturesGroupsServiceUpdateRequest, FeaturesServiceCreateRequest, FeaturesServiceFindRequest, FeaturesServiceUpdateRequest, FolderIdRequest, FolderIdsRequest, FoldersServiceChangeGeoAreaRequest, FoldersServiceChangeGeoLocationRequest, FoldersServiceChangeNameRequest, FoldersServiceChangeParentRequest, FoldersServiceChangeTimezoneRequest, FoldersServiceCreateRequest, FoldersServiceFindRequest, FoldersServiceGetHierarchyRequest, GeoServicesReferenceRequest, GeoServicesTransformRequest, IntegrationIdRequest, IntegrationIdsRequest, IntegrationsServiceCreateRequest, IntegrationsServiceFindRequest, IntegrationsServiceUpdateRequest, QueryResponse, QueryResponseOfAccount, QueryResponseOfAnomalyEventInfo, QueryResponseOfAppliance, QueryResponseOfAuditLog, QueryResponseOfCalendar, QueryResponseOfComponentConfiguration, QueryResponseOfConfiguration, QueryResponseOfConfigurationTemplate, QueryResponseOfConfigurationVersion, QueryResponseOfEvent, QueryResponseOfFolder, QueryResponseOfIntegrationTarget, QueryResponseOfObjectInfo, QueryResponseOfReportDefinition, QueryResponseOfRule, QueryResponseOfSchedule, QueryResponseOfSearchDefinition, QueryResponseOfSensor, QueryResponseOfSensorAnalysisResults, QueryResponseOfTreeItem, QueryResponseOfUser, ReportIdRequest, ReportIdsRequest, ReportsServiceCreateRequest, ReportsServiceFindRequest, ReportsServiceUpdateRequest, RuleIdRequest, RuleIdsRequest, RulesServiceCreateRequest, RulesServiceFindAnomalyRequest, RulesServiceFindRequest, RulesServiceUpdateRequest, ScheduleIdRequest, ScheduleIdsRequest, ScheduledReportIdRequest, ScheduledReportIdsRequest, ScheduledReportsServiceCreateRequest, ScheduledReportsServiceFindRequest, ScheduledReportsServiceUpdateRequest, SchedulesServiceCreateRequest, SchedulesServiceFindRequest, SchedulesServiceFolderIdRequest, SchedulesServiceUpdateRequest, SearchIdRequest, SearchIdsRequest, SearchServiceCreateRequest, SearchServiceExecuteRequest, SearchServiceFindRequest, SearchServiceUpdateRequest, SensorAnalysisIdRequest, SensorIdRequest, SensorIdsRequest, SensorsServiceChangeFolderRequest, SensorsServiceChangeFovRequest, SensorsServiceChangeGeoLocationRequest, SensorsServiceChangeNameRequest, SensorsServiceChangeStatusRequest, SensorsServiceCreateRequest, SensorsServiceFindRequest, SensorsServiceSetRefImageRequest, SensorsServiceStatusOvertimeRequest, SensorsServiceUpdateRequest, StreamResponse, SysAppliancesServiceFindRequest, SysAppliancesServiceGetCommandsRequest, SysConfigurationsServiceCreateRequest, SysConfigurationsServiceCreateTemplateRequest, SysConfigurationsServiceCreateVersionRequest, SysConfigurationsServiceDeleteVersionRequest, SysConfigurationsServiceFindRequest, SysConfigurationsServiceFindTemplateRequest, SysConfigurationsServiceUpdateRequest, SysConfigurationsServiceUpdateTemplateRequest, SysConfigurationsServiceUpdateVersionRequest, SysEventIdRequest, SysEventsServiceFindInAreaRequest, SysEventsServiceStatisticsRequest, SysKeysServiceCreateApiKeyRequest, SysKeysServiceCreatePasswordRequest, SysKeysServiceCreateTokenRequest, SysSensorsServiceFindRequest, TokenRequest, UserByEmailRequest, UserIdRequest, UserIdsRequest, UserServiceChangeMobileRequest, UserServiceChangeNameRequest, UserServiceChangePasswordRequest, UserServiceCheckPasswordRequest, UserServiceLoginRequest, UserServiceResetPasswordRequest, UserServiceSendVerificationRequest, UserServiceSwitchAccountRequest, UserServiceVerifyLoginRequest, UsersServiceChangeDefaultAccountRequest, UsersServiceChangeMobileRequest, UsersServiceChangeNameRequest, UsersServiceChangeRoleRequest, UsersServiceChangeStatusRequest, UsersServiceChangeTypeRequest, UsersServiceCreateRequest, UsersServiceFindRequest, UsersServiceInviteRequest, UsersServiceSetRolesRequest, UsersServiceUpdateRequest, WebSocketMessageHeader, AccountsService, AnomalyService, AppliancesService, AuditLogService, CalendarsService, EventsService, FoldersService, GeoService, HealthCheckService, IntegrationsService, ReportsService, RulesService, ScheduledReportsService, SchedulesService, SearchService, SensorsService, Services, SysAccountsService, SysAppliancesService, SysConfigurationsService, SysEventsService, SysFeaturesGroupsService, SysFeaturesService, SysKeysService, SysSensorsService, SysSystemService, SysUsersService, UserService, UsersService, EventsSocketServiceOpen, HealthSocketServiceOpen, SocketEventNotification, SocketSensorStatusNotification } from './lib';
export { CoreLibModule } from './core-lib.module';
export { getToken, setToken, removeToken, RestUtil } from './utils';
export { CoreConfig } from './config';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsicHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGd6VEFBYyxPQUFPLENBQUM7QUFDdEIsOEJBQWMsbUJBQW1CLENBQUM7QUFDbEMsMERBQWMsU0FBUyxDQUFDO0FBQ3hCLDJCQUFjLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBuZy1jb3JlLWxpYiAqL1xuZXhwb3J0ICogZnJvbSAnLi9saWInO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlLWxpYi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmZpZyc7Il19