export declare enum ErrorCode {
    SUCCESS = 0,
    UnexpectedError = 1,
    NotImplementedError = 2,
    DbErrConnectionFailed = 105,
    DbErr = 100,
    DbErrNoRowsFetched = 101,
    DbErrNoRowsAffected = 102,
    DbErrDuplicateKey = 103,
    DbAppErrEmptyEntityIdPassed = 104,
    ElasticConnectionFailed = 120,
    ElasticErr = 121,
    RedisErr = 200,
    RedisErrConnectionFailed = 201,
    RedisErrHSet = 202,
    RedisErrHGet = 203,
    RedisErrPing = 204,
    RedisErrHSetWithExp = 205,
    RedisErrHDel = 206,
    RedisErrRPop = 207,
    RedisErrRPush = 208,
    RedisErrPublish = 209,
    RedisErrHGetAll = 210,
    RedisErrFlushAll = 211,
    RedisErrBRPop = 212,
    RedisErrSetKey = 213,
    RedisErrGetKey = 214,
    RedisErrDelKey = 215,
    RedisErrMGetKey = 216,
    RedisErrExistsKey = 217,
    RedisErrHExistsKey = 218,
    RedisErrHSetNXKey = 219,
    RedisErrHKeysKey = 220,
    MailUriError = 230,
    MailRestSendError = 238,
    MailSmtpSendError = 239,
    WebSocketError = 240,
    ExportFormatError = 250,
    ExportJsonError = 251,
    ExportCsvError = 252,
    ExportXmlError = 253,
    AwsS3NotInitialized = 400,
    AwsCreateSessionErr = 401,
    AwsS3Err = 410,
    AwsS3NoNameProvidedErr = 411,
    AwsS3NoRegionProvidedErr = 412,
    AwsS3CredentialsErr = 413,
    AwsFailToPresignUrlError = 414,
    JsonErr = 500,
    XmlErr = 501,
    BadInput = 509,
    Base64ECodecErr = 510,
    ZlibErr = 520,
    IoErr = 530,
    UrlParseErr = 540,
    AESEncryptErr = 541,
    WsNoMessageFactoryFound = 542,
    OsFileSystemErr = 600,
    UnknownStorageSpecified = 601,
    NoObjectStorageSpecified = 602,
    OpenTempFileForEventImageError = 603,
    WriteTempFileForEventImageError = 604,
    FileNotFound = 605,
    OpenFileError = 606,
    WriteFileError = 607,
    SecurityTokenError = 700,
    NoSecurityTokenFound = 701,
    EmptySecurityToken = 702,
    ErrorCreateApiKey = 710,
    InvalidPairingKeyVerification = -102,
    InvalidDevicePairingKey = 750,
    DevicePairingInProgress = -701,
    DevicePairingRejected = -702,
    NotVirtualDevice = 753,
    DeviceHasAssociatedSensors = 754,
    StreamConnectError = 800,
    StreamTopicError = 801,
    StreamSubscriberError = 802,
    StreamNoProviderUriSpecified = 803,
    StreamPutDataError = 850,
    KafkaCreateProducerError = 880,
    KafkaCreateConsumerError = 881,
    KafkaGetMetadataError = 882,
    KafkaReadMessageError = 883,
    KafkaReadMessageTimeout = 884,
    ImagingDecodeToJpegYUVError = 900,
    ImagingCreateImageFileError = 901,
    ImagingEncodeJpegError = 902,
    ImagingNoBoundingBoxes = 903,
    ClipErrPrepareFrames = 904,
    ClipErrEventHasNoFrames = 905,
    ImagingHorizontalLineError = 906,
    ImagingVerticalineError = 907,
    PostWebhookError = 921,
    CreateHttpRequestError = 922,
    SendHttpRequestError = 923,
    CanRetryIntegrationError = 924,
    IllegalEventMessageError = 925,
    SmtpSendMailError = 930,
    AppErrInvalidLoginKey = 20111,
    AppErrAgentDoesntExist = 20112,
    AppErrEmptyLoginKey = 20113,
    AppErrEmptyAgentId = 20114,
    AppErrEmptyAccountId = 20115,
    AppErrEmptySensorId = 20116,
    AppErrGetSensorInfo = 20117,
    AppErrGetAccountInfo = 20118,
    AppErrGetFolderInfo = 20119,
    AppErrGetRuleInfo = 20120,
    EntityNotFound = 10000,
    LoginErrInvalidUid = 10001,
    LoginErrInvalidAid = 10002,
    LoginKeyExpired = 10003,
    InvalidVerification = 10004,
    InvalidEmailAddress = 10005,
    SuspendedUser = 10006,
    BlockedUser = 10007,
    DeleteSysAdmin = 10008,
    AccessDenied = 10009,
    EmailAddressExists = 10010,
    InvalidAccessToken = 10011,
    TokenError = 10020,
    DeploymentIdError = 10021,
    WrongDeploymentId = 10022,
    LicenseExpired = 10030,
    ImportLicenseFailed = 10031,
    VerifyLicenseFailed = 10032,
    VerifyDeploymentFailed = 10033,
    LicenseNotFound = 10034,
    EncodeLicenseFailed = 10035,
    LicenseSearchFailed = 10036,
    LicenseNotDeleted = 10037,
    UserNotFound = 10040,
    UserNotCreated = 10041,
    UserNotUpdated = 10042,
    UserNotDeleted = 10043,
    UserSearchFailed = 10044,
    UserWithoutRole = 10045,
    UserInvitationFailed = 10046,
    ServiceAccountNotCreated = 10051,
    AccountNotFound = 10100,
    AccountNotCreated = 10101,
    AccountNotUpdated = 10102,
    AccountNotDeleted = 10103,
    WrongAccountName = 10104,
    WrongAccountType = 10105,
    WrongAccountStatus = 10106,
    AccountSearchFailed = 10109,
    InaccessibleAccount = 10110,
    UnmatchingAccount = 10111,
    ExpiredAccount = 10112,
    AccountExists = 10113,
    EmptyAccountName = 10114,
    DeleteSuspendedAccount = 10115,
    DeleteAccountWithContent = 10116,
    PendingDeletedAccount = 10117,
    SuspendedAccount = 10118,
    WrongPlatformType = 10119,
    FolderNotFound = 10120,
    FolderNotCreated = 10121,
    FolderNotUpdated = 10122,
    FolderNotDeleted = 10123,
    FolderSearchFailed = 10124,
    DeleteFolderWithContent = 10125,
    GeoTransformationError = 10128,
    LoadTransformationError = 10129,
    GroupNotFound = 10140,
    GroupNotCreated = 10141,
    GroupNotUpdated = 10142,
    GroupNotDeleted = 10143,
    GroupSearchFailed = 10144,
    GroupInUseByAccount = 10145,
    FeatureNotFound = 10146,
    DeviceNotFound = 10160,
    DeviceNotCreated = 10161,
    DeviceNotUpdated = 10162,
    DeviceNotDeleted = 10163,
    DeviceSearchFailed = 10164,
    MissingDeviceManager = 10167,
    MoreThanOneDeviceManager = 10168,
    VirtualDeviceReboot = 10169,
    VirtualDeviceRedeploy = 10170,
    CommandNotFound = 10175,
    CommandFailed = 10176,
    AgentNotFound = 10180,
    AgentNotCreated = 10181,
    AgentNotUpdated = 10182,
    AgentNotDeleted = 10183,
    AgentFindFailed = 10184,
    DigitalIONotFound = 10190,
    DigitalIONotCreated = 10191,
    DigitalIONotUpdated = 10192,
    DigitalIONotDeleted = 10193,
    DigitalIOSearchFailed = 10194,
    SensorNotFound = 10200,
    SensorNotCreated = 10201,
    SensorNotUpdated = 10202,
    SensorNotDeleted = 10203,
    SensorSearchFailed = 10204,
    DeleteNonPendingSensor = 10205,
    ExceedMaxLicenseChannels = 10207,
    ExceedMaxAccountChannels = 10208,
    SensorAlreadyAttached = 10209,
    SensorIsNotSuspended = 10210,
    SensorIsNotRecording = 10211,
    RuleNotFound = 10220,
    RuleNotCreated = 10221,
    RuleNotUpdated = 10222,
    RuleNotDeleted = 10223,
    RuleSearchFailed = 10224,
    RuleEnableFailed = 10225,
    RulePauseFailed = 10226,
    RuleResumeFailed = 10227,
    CalendarNotFound = 10300,
    CalendarNotCreated = 10301,
    CalendarNotUpdated = 10302,
    CalendarNotDeleted = 10303,
    CalendarSearchFailed = 10304,
    ImportCalendarFailed = 10305,
    ScheduleNotFound = 10320,
    ScheduleNotCreated = 10321,
    ScheduleNotUpdated = 10322,
    ScheduleNotDeleted = 10323,
    ScheduleSearchFailed = 10324,
    ScheduleLinkedToRules = 10325,
    ReportNotFound = 10330,
    ReportNotCreated = 10331,
    ReportNotUpdated = 10332,
    ReportNotDeleted = 10333,
    ReportSearchFailed = 10334,
    ReportPeopleCountingFailed = 10335,
    ReportTrafficAnalysisFailed = 10336,
    ScheduledReportNotFound = 10340,
    ScheduledReportNotCreated = 10341,
    ScheduledReportNotUpdated = 10342,
    ScheduledReportNotDeleted = 10343,
    ScheduledReportSearchFailed = 10344,
    ConfigurationNotFound = 10360,
    ConfigurationNotCreated = 10361,
    ConfigurationNotUpdated = 10362,
    ConfigurationNotDeleted = 10363,
    ConfigurationSearchFailed = 10364,
    ConfigVersionNotFound = 10370,
    ConfigVersionNotCreated = 10371,
    ConfigVersionNotUpdated = 10372,
    ConfigVersionNotDeleted = 10373,
    ConfigVersionSearchFailed = 10374,
    ConfigTemplateNotFound = 10380,
    ConfigTemplateNotCreated = 10381,
    ConfigTemplateNotUpdated = 10382,
    ConfigTemplateNotDeleted = 10383,
    ConfigTemplateSearchFailed = 10384,
    EventNotFound = 10400,
    EventNotCreated = 10401,
    EventNotUpdated = 10402,
    EventNotDeleted = 10403,
    EventSearchFailed = 10404,
    EventStatusNotUpdated = 10405,
    EventImagePathNotUpdated = 10406,
    EventClipPathNotUpdated = 10407,
    EventOpenImageError = 10408,
    EventOpenClipError = 10409,
    EventCountError = 10410,
    HealthEventNotFound = 10420,
    HealthEventNotCreated = 10421,
    HealthEventNotUpdated = 10422,
    HealthEventNotDeleted = 10423,
    HealthEventSearchFailed = 10424,
    SensorStatusNotFound = 10430,
    SensorStatusNotCreated = 10431,
    SensorStatusSearchFailed = 10433,
    IntegrationTargetNotFound = 10500,
    IntegrationTargetNotCreated = 10501,
    IntegrationTargetNotUpdated = 10502,
    IntegrationTargetNotDeleted = 10503,
    IntegrationTargetSearchFailed = 10504,
    IntegrationTargetHasActions = 10505,
    IntegrationTargetNotSupported = 10506,
    IntegrationTargetDuplicationsNotAllowed = 10507,
    IntegrationActionNotFound = 10510,
    IntegrationActionNotCreated = 10511,
    IntegrationActionNotUpdated = 10512,
    IntegrationActionNotDeleted = 10513,
    IntegrationActionSearchFailed = 10514,
    ApiKeyNotFound = 10520,
    ApiKeyNotCreated = 10521,
    ApiKeyNotUpdated = 10522,
    ApiKeyNotDeleted = 10523,
    ApiKeySearchFailed = 10524,
    SearchServiceFetchNotStarted = 10600,
    SearchServiceFetchInProgress = 10601,
    SearchServiceImageNotFound = 10602,
    SearchServiceDisconnected = 10603,
    SearchServiceRequestError = 10604,
    SearchServiceResponseError = 10605,
    CorsightRequestFailed = 30100,
    CorsightDetectFacesFailed = 30110,
    CorsightNoFacesDetected = 30111,
    CorsightAnalyzeFaceFailed = 30120,
    CorsightCreatePoiFailed = 30130,
    CorsightNoPoiFound = 30131
}
