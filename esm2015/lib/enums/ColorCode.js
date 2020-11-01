/*
   List of system error codes
*/
export var ColorCode;
(function (ColorCode) {
    // Success (No Error) 
    ColorCode[ColorCode["SUCCESS"] = 0] = "SUCCESS";
    // Unexpected general error 
    ColorCode[ColorCode["UnexpectedError"] = 1] = "UnexpectedError";
    // Not Implemented 
    ColorCode[ColorCode["NotImplementedError"] = 2] = "NotImplementedError";
    // Database connection failed 
    ColorCode[ColorCode["DbErrConnectionFailed"] = 105] = "DbErrConnectionFailed";
    // Database general error 
    ColorCode[ColorCode["DbErr"] = 100] = "DbErr";
    // No records fetched 
    ColorCode[ColorCode["DbErrNoRowsFetched"] = 101] = "DbErrNoRowsFetched";
    // No records affected 
    ColorCode[ColorCode["DbErrNoRowsAffected"] = 102] = "DbErrNoRowsAffected";
    // Trying to insert record with duplicate key 
    ColorCode[ColorCode["DbErrDuplicateKey"] = 103] = "DbErrDuplicateKey";
    // Trying to save entity with empty Id 
    ColorCode[ColorCode["DbAppErrEmptyEntityIdPassed"] = 104] = "DbAppErrEmptyEntityIdPassed";
    // Elasticsearch connection failed 
    ColorCode[ColorCode["ElasticConnectionFailed"] = 120] = "ElasticConnectionFailed";
    // Elasticsearch general error 
    ColorCode[ColorCode["ElasticErr"] = 121] = "ElasticErr";
    // Redis general error 
    ColorCode[ColorCode["RedisErr"] = 200] = "RedisErr";
    // Redis connection failed 
    ColorCode[ColorCode["RedisErrConnectionFailed"] = 201] = "RedisErrConnectionFailed";
    // HSet key operation error 
    ColorCode[ColorCode["RedisErrHSet"] = 202] = "RedisErrHSet";
    // HGet key operation error 
    ColorCode[ColorCode["RedisErrHGet"] = 203] = "RedisErrHGet";
    // No ping to Redis 
    ColorCode[ColorCode["RedisErrPing"] = 204] = "RedisErrPing";
    // HSet with expiration error 
    ColorCode[ColorCode["RedisErrHSetWithExp"] = 205] = "RedisErrHSetWithExp";
    // HDel operation error 
    ColorCode[ColorCode["RedisErrHDel"] = 206] = "RedisErrHDel";
    // RPop operation error 
    ColorCode[ColorCode["RedisErrRPop"] = 207] = "RedisErrRPop";
    // RPush operation error 
    ColorCode[ColorCode["RedisErrRPush"] = 208] = "RedisErrRPush";
    // Publish operation error 
    ColorCode[ColorCode["RedisErrPublish"] = 209] = "RedisErrPublish";
    // Get All operation error 
    ColorCode[ColorCode["RedisErrHGetAll"] = 210] = "RedisErrHGetAll";
    // Flush All operation error 
    ColorCode[ColorCode["RedisErrFlushAll"] = 211] = "RedisErrFlushAll";
    // BRPop operation error 
    ColorCode[ColorCode["RedisErrBRPop"] = 212] = "RedisErrBRPop";
    // Set Key operation error 
    ColorCode[ColorCode["RedisErrSetKey"] = 213] = "RedisErrSetKey";
    // Get key operation error 
    ColorCode[ColorCode["RedisErrGetKey"] = 214] = "RedisErrGetKey";
    // Del key operation error 
    ColorCode[ColorCode["RedisErrDelKey"] = 215] = "RedisErrDelKey";
    // MGet Key operation error 
    ColorCode[ColorCode["RedisErrMGetKey"] = 216] = "RedisErrMGetKey";
    // Key already exists 
    ColorCode[ColorCode["RedisErrExistsKey"] = 217] = "RedisErrExistsKey";
    // HKey already exists 
    ColorCode[ColorCode["RedisErrHExistsKey"] = 218] = "RedisErrHExistsKey";
    // HSet NX operation error 
    ColorCode[ColorCode["RedisErrHSetNXKey"] = 219] = "RedisErrHSetNXKey";
    // HKeys operation error 
    ColorCode[ColorCode["RedisErrHKeysKey"] = 220] = "RedisErrHKeysKey";
    // Mail URI error 
    ColorCode[ColorCode["MailUriError"] = 230] = "MailUriError";
    // Rest mail client error 
    ColorCode[ColorCode["MailRestSendError"] = 238] = "MailRestSendError";
    // SMTP mail client error 
    ColorCode[ColorCode["MailSmtpSendError"] = 239] = "MailSmtpSendError";
    // Web socket error 
    ColorCode[ColorCode["WebSocketError"] = 240] = "WebSocketError";
    // Export format error (not supported) 
    ColorCode[ColorCode["ExportFormatError"] = 250] = "ExportFormatError";
    // Export to JSON error 
    ColorCode[ColorCode["ExportJsonError"] = 251] = "ExportJsonError";
    // Export to CSV error 
    ColorCode[ColorCode["ExportCsvError"] = 252] = "ExportCsvError";
    // Export to XML error 
    ColorCode[ColorCode["ExportXmlError"] = 253] = "ExportXmlError";
    // AWS S3 connection error 
    ColorCode[ColorCode["AwsS3NotInitialized"] = 400] = "AwsS3NotInitialized";
    // AWS failed to create session 
    ColorCode[ColorCode["AwsCreateSessionErr"] = 401] = "AwsCreateSessionErr";
    // AWS S3 general error 
    ColorCode[ColorCode["AwsS3Err"] = 410] = "AwsS3Err";
    // AWS S3 bucket name not provided 
    ColorCode[ColorCode["AwsS3NoNameProvidedErr"] = 411] = "AwsS3NoNameProvidedErr";
    // AWS S3 region not provided 
    ColorCode[ColorCode["AwsS3NoRegionProvidedErr"] = 412] = "AwsS3NoRegionProvidedErr";
    // AWS S3 wrong credentials 
    ColorCode[ColorCode["AwsS3CredentialsErr"] = 413] = "AwsS3CredentialsErr";
    // AWS fail to create pre-signed URL 
    ColorCode[ColorCode["AwsFailToPresignUrlError"] = 414] = "AwsFailToPresignUrlError";
    // General Json marshal error 
    ColorCode[ColorCode["JsonErr"] = 500] = "JsonErr";
    // General XML error 
    ColorCode[ColorCode["XmlErr"] = 501] = "XmlErr";
    // Input parameters error 
    ColorCode[ColorCode["BadInput"] = 509] = "BadInput";
    // Error encoding to Base64 
    ColorCode[ColorCode["Base64ECodecErr"] = 510] = "Base64ECodecErr";
    // Zlib error 
    ColorCode[ColorCode["ZlibErr"] = 520] = "ZlibErr";
    // General IO error 
    ColorCode[ColorCode["IoErr"] = 530] = "IoErr";
    // Can't parse URL 
    ColorCode[ColorCode["UrlParseErr"] = 540] = "UrlParseErr";
    // AES encryption error 
    ColorCode[ColorCode["AESEncryptErr"] = 541] = "AESEncryptErr";
    // No message factory provided 
    ColorCode[ColorCode["WsNoMessageFactoryFound"] = 542] = "WsNoMessageFactoryFound";
    // General OS file system error 
    ColorCode[ColorCode["OsFileSystemErr"] = 600] = "OsFileSystemErr";
    // Unknown (unsupported) storage type 
    ColorCode[ColorCode["UnknownStorageSpecified"] = 601] = "UnknownStorageSpecified";
    // Unknown (unsupported) object storage type 
    ColorCode[ColorCode["NoObjectStorageSpecified"] = 602] = "NoObjectStorageSpecified";
    // Can't open temp file 
    ColorCode[ColorCode["OpenTempFileForEventImageError"] = 603] = "OpenTempFileForEventImageError";
    // Can't write temp file 
    ColorCode[ColorCode["WriteTempFileForEventImageError"] = 604] = "WriteTempFileForEventImageError";
    // File not found 
    ColorCode[ColorCode["FileNotFound"] = 605] = "FileNotFound";
    // Can't open file 
    ColorCode[ColorCode["OpenFileError"] = 606] = "OpenFileError";
    // Can't write file 
    ColorCode[ColorCode["WriteFileError"] = 607] = "WriteFileError";
    // Security token error 
    ColorCode[ColorCode["SecurityTokenError"] = 700] = "SecurityTokenError";
    // Security token not provided 
    ColorCode[ColorCode["NoSecurityTokenFound"] = 701] = "NoSecurityTokenFound";
    // Empty security token 
    ColorCode[ColorCode["EmptySecurityToken"] = 702] = "EmptySecurityToken";
    // Error creating API key 
    ColorCode[ColorCode["ErrorCreateApiKey"] = 710] = "ErrorCreateApiKey";
    // Pairing key (for device) not verified 
    ColorCode[ColorCode["InvalidPairingKeyVerification"] = -102] = "InvalidPairingKeyVerification";
    // Invalid device pairing key 
    ColorCode[ColorCode["InvalidDevicePairingKey"] = 750] = "InvalidDevicePairingKey";
    // Pairing device in progress 
    ColorCode[ColorCode["DevicePairingInProgress"] = -701] = "DevicePairingInProgress";
    // Pairing key rejected 
    ColorCode[ColorCode["DevicePairingRejected"] = -702] = "DevicePairingRejected";
    // Not a virtual device 
    ColorCode[ColorCode["NotVirtualDevice"] = 753] = "NotVirtualDevice";
    // Device has attached sensors 
    ColorCode[ColorCode["DeviceHasAssociatedSensors"] = 754] = "DeviceHasAssociatedSensors";
    // Streaming connection error 
    ColorCode[ColorCode["StreamConnectError"] = 800] = "StreamConnectError";
    // Streaming topic error 
    ColorCode[ColorCode["StreamTopicError"] = 801] = "StreamTopicError";
    // Streaming subscriber error 
    ColorCode[ColorCode["StreamSubscriberError"] = 802] = "StreamSubscriberError";
    // Streaming URI not provided 
    ColorCode[ColorCode["StreamNoProviderUriSpecified"] = 803] = "StreamNoProviderUriSpecified";
    // Stream PUT error 
    ColorCode[ColorCode["StreamPutDataError"] = 850] = "StreamPutDataError";
    // Kafka create producer error 
    ColorCode[ColorCode["KafkaCreateProducerError"] = 880] = "KafkaCreateProducerError";
    // Kafka create consumer error 
    ColorCode[ColorCode["KafkaCreateConsumerError"] = 881] = "KafkaCreateConsumerError";
    // Kafka get metadata error 
    ColorCode[ColorCode["KafkaGetMetadataError"] = 882] = "KafkaGetMetadataError";
    // Kafka read message error 
    ColorCode[ColorCode["KafkaReadMessageError"] = 883] = "KafkaReadMessageError";
    // Kafka read message timeout 
    ColorCode[ColorCode["KafkaReadMessageTimeout"] = 884] = "KafkaReadMessageTimeout";
    // Decode to JPEG YUV failed 
    ColorCode[ColorCode["ImagingDecodeToJpegYUVError"] = 900] = "ImagingDecodeToJpegYUVError";
    // Create image file error 
    ColorCode[ColorCode["ImagingCreateImageFileError"] = 901] = "ImagingCreateImageFileError";
    // Encode JPEG error 
    ColorCode[ColorCode["ImagingEncodeJpegError"] = 902] = "ImagingEncodeJpegError";
    // Bounding boxes missing 
    ColorCode[ColorCode["ImagingNoBoundingBoxes"] = 903] = "ImagingNoBoundingBoxes";
    // Prepare frame for clip error 
    ColorCode[ColorCode["ClipErrPrepareFrames"] = 904] = "ClipErrPrepareFrames";
    // Event has no frames 
    ColorCode[ColorCode["ClipErrEventHasNoFrames"] = 905] = "ClipErrEventHasNoFrames";
    // Horizontal line error 
    ColorCode[ColorCode["ImagingHorizontalLineError"] = 906] = "ImagingHorizontalLineError";
    // Vertical line error 
    ColorCode[ColorCode["ImagingVerticalineError"] = 907] = "ImagingVerticalineError";
    // Post web-hook integration error 
    ColorCode[ColorCode["PostWebhookError"] = 921] = "PostWebhookError";
    // Create HTTP request failed 
    ColorCode[ColorCode["CreateHttpRequestError"] = 922] = "CreateHttpRequestError";
    // Send HTTP request failed 
    ColorCode[ColorCode["SendHttpRequestError"] = 923] = "SendHttpRequestError";
    // Retry integration error 
    ColorCode[ColorCode["CanRetryIntegrationError"] = 924] = "CanRetryIntegrationError";
    // Illegal event message 
    ColorCode[ColorCode["IllegalEventMessageError"] = 925] = "IllegalEventMessageError";
    // Fail to send SMTP message 
    ColorCode[ColorCode["SmtpSendMailError"] = 930] = "SmtpSendMailError";
    // Invalid agent login key 
    ColorCode[ColorCode["AppErrInvalidLoginKey"] = 20111] = "AppErrInvalidLoginKey";
    // Agent does not exist 
    ColorCode[ColorCode["AppErrAgentDoesntExist"] = 20112] = "AppErrAgentDoesntExist";
    // Empty agent login key 
    ColorCode[ColorCode["AppErrEmptyLoginKey"] = 20113] = "AppErrEmptyLoginKey";
    // Empty agent Id 
    ColorCode[ColorCode["AppErrEmptyAgentId"] = 20114] = "AppErrEmptyAgentId";
    // Empty account Id 
    ColorCode[ColorCode["AppErrEmptyAccountId"] = 20115] = "AppErrEmptyAccountId";
    // Empty sensor Id 
    ColorCode[ColorCode["AppErrEmptySensorId"] = 20116] = "AppErrEmptySensorId";
    // Get sensor info failed 
    ColorCode[ColorCode["AppErrGetSensorInfo"] = 20117] = "AppErrGetSensorInfo";
    // Get account info failed 
    ColorCode[ColorCode["AppErrGetAccountInfo"] = 20118] = "AppErrGetAccountInfo";
    // Get folder Info failed 
    ColorCode[ColorCode["AppErrGetFolderInfo"] = 20119] = "AppErrGetFolderInfo";
    // Get rule info failed 
    ColorCode[ColorCode["AppErrGetRuleInfo"] = 20120] = "AppErrGetRuleInfo";
    // Entity not found 
    ColorCode[ColorCode["EntityNotFound"] = 10000] = "EntityNotFound";
    // Login error (invalid user Identity) 
    ColorCode[ColorCode["LoginErrInvalidUid"] = 10001] = "LoginErrInvalidUid";
    // Login error (invalid device identity) 
    ColorCode[ColorCode["LoginErrInvalidAid"] = 10002] = "LoginErrInvalidAid";
    // Login key expired 
    ColorCode[ColorCode["LoginKeyExpired"] = 10003] = "LoginKeyExpired";
    // Invalid verification 
    ColorCode[ColorCode["InvalidVerification"] = 10004] = "InvalidVerification";
    // Invalid email address 
    ColorCode[ColorCode["InvalidEmailAddress"] = 10005] = "InvalidEmailAddress";
    // User is suspended 
    ColorCode[ColorCode["SuspendedUser"] = 10006] = "SuspendedUser";
    // User is blocked 
    ColorCode[ColorCode["BlockedUser"] = 10007] = "BlockedUser";
    // Can't delete System Administrator 
    ColorCode[ColorCode["DeleteSysAdmin"] = 10008] = "DeleteSysAdmin";
    // Access denied 
    ColorCode[ColorCode["AccessDenied"] = 10009] = "AccessDenied";
    // Email address already exists 
    ColorCode[ColorCode["EmailAddressExists"] = 10010] = "EmailAddressExists";
    // Invalid access token 
    ColorCode[ColorCode["InvalidAccessToken"] = 10011] = "InvalidAccessToken";
    // General token error 
    ColorCode[ColorCode["TokenError"] = 10020] = "TokenError";
    // Import license operation failed 
    ColorCode[ColorCode["ImportLicenseFailed"] = 10031] = "ImportLicenseFailed";
    // Verify license failed 
    ColorCode[ColorCode["VerifyLicenseFailed"] = 10032] = "VerifyLicenseFailed";
    // Verify deployment Id failed 
    ColorCode[ColorCode["VerifyDeploymentFailed"] = 10033] = "VerifyDeploymentFailed";
    // License not found 
    ColorCode[ColorCode["LicenseNotFound"] = 10034] = "LicenseNotFound";
    // Encode license failed 
    ColorCode[ColorCode["EncodeLicenseFailed"] = 10035] = "EncodeLicenseFailed";
    // License search failed 
    ColorCode[ColorCode["LicenseSearchFailed"] = 10036] = "LicenseSearchFailed";
    // License delete failed 
    ColorCode[ColorCode["LicenseNotDeleted"] = 10037] = "LicenseNotDeleted";
    // User not found 
    ColorCode[ColorCode["UserNotFound"] = 10040] = "UserNotFound";
    // User create failed 
    ColorCode[ColorCode["UserNotCreated"] = 10041] = "UserNotCreated";
    // User update failed 
    ColorCode[ColorCode["UserNotUpdated"] = 10042] = "UserNotUpdated";
    // User delete failed 
    ColorCode[ColorCode["UserNotDeleted"] = 10043] = "UserNotDeleted";
    // User search failed 
    ColorCode[ColorCode["UserSearchFailed"] = 10044] = "UserSearchFailed";
    // User without role 
    ColorCode[ColorCode["UserWithoutRole"] = 10045] = "UserWithoutRole";
    // User invitation failed 
    ColorCode[ColorCode["UserInvitationFailed"] = 10046] = "UserInvitationFailed";
    // Service Account create failed 
    ColorCode[ColorCode["ServiceAccountNotCreated"] = 10051] = "ServiceAccountNotCreated";
    // Account not found 
    ColorCode[ColorCode["AccountNotFound"] = 10100] = "AccountNotFound";
    // Account create failed 
    ColorCode[ColorCode["AccountNotCreated"] = 10101] = "AccountNotCreated";
    // Account update failed 
    ColorCode[ColorCode["AccountNotUpdated"] = 10102] = "AccountNotUpdated";
    // Account delete failed 
    ColorCode[ColorCode["AccountNotDeleted"] = 10103] = "AccountNotDeleted";
    // Wrong Account name 
    ColorCode[ColorCode["WrongAccountName"] = 10104] = "WrongAccountName";
    // Wrong Account type 
    ColorCode[ColorCode["WrongAccountType"] = 10105] = "WrongAccountType";
    // Wrong Account status 
    ColorCode[ColorCode["WrongAccountStatus"] = 10106] = "WrongAccountStatus";
    // Account search failed 
    ColorCode[ColorCode["AccountSearchFailed"] = 10109] = "AccountSearchFailed";
    // Account not accessible 
    ColorCode[ColorCode["InaccessibleAccount"] = 10110] = "InaccessibleAccount";
    // Wrong Account 
    ColorCode[ColorCode["UnmatchingAccount"] = 10111] = "UnmatchingAccount";
    // Account license expired 
    ColorCode[ColorCode["ExpiredAccount"] = 10112] = "ExpiredAccount";
    // Account already exists 
    ColorCode[ColorCode["AccountExists"] = 10113] = "AccountExists";
    // Account name is empty 
    ColorCode[ColorCode["EmptyAccountName"] = 10114] = "EmptyAccountName";
    // Can't delete SUSPENDED account 
    ColorCode[ColorCode["DeleteSuspendedAccount"] = 10115] = "DeleteSuspendedAccount";
    // Can't delete account  with content 
    ColorCode[ColorCode["DeleteAccountWithContent"] = 10116] = "DeleteAccountWithContent";
    // Can't delete PENDING account 
    ColorCode[ColorCode["PendingDeletedAccount"] = 10117] = "PendingDeletedAccount";
    // Folder not found 
    ColorCode[ColorCode["FolderNotFound"] = 10120] = "FolderNotFound";
    // Folder create failed 
    ColorCode[ColorCode["FolderNotCreated"] = 10121] = "FolderNotCreated";
    // Folder update failed 
    ColorCode[ColorCode["FolderNotUpdated"] = 10122] = "FolderNotUpdated";
    // Folder delete failed 
    ColorCode[ColorCode["FolderNotDeleted"] = 10123] = "FolderNotDeleted";
    // Folder search failed 
    ColorCode[ColorCode["FolderSearchFailed"] = 10124] = "FolderSearchFailed";
    // Can't delete folder with content 
    ColorCode[ColorCode["DeleteFolderWithContent"] = 10125] = "DeleteFolderWithContent";
    // Geo-transformation error 
    ColorCode[ColorCode["GeoTransformationError"] = 10128] = "GeoTransformationError";
    // Load geo-transformation failed 
    ColorCode[ColorCode["LoadTransformationError"] = 10129] = "LoadTransformationError";
    // Features group not found 
    ColorCode[ColorCode["GroupNotFound"] = 10140] = "GroupNotFound";
    // Features group create failed 
    ColorCode[ColorCode["GroupNotCreated"] = 10141] = "GroupNotCreated";
    // Features group update failed 
    ColorCode[ColorCode["GroupNotUpdated"] = 10142] = "GroupNotUpdated";
    // Features group delete failed 
    ColorCode[ColorCode["GroupNotDeleted"] = 10143] = "GroupNotDeleted";
    // Features group search failed 
    ColorCode[ColorCode["GroupSearchFailed"] = 10144] = "GroupSearchFailed";
    // Features group already in use and can't be deleted 
    ColorCode[ColorCode["GroupInUseByAccount"] = 10145] = "GroupInUseByAccount";
    // Feature not found 
    ColorCode[ColorCode["FeatureNotFound"] = 10146] = "FeatureNotFound";
    // Device not found 
    ColorCode[ColorCode["DeviceNotFound"] = 10160] = "DeviceNotFound";
    // Device create failed 
    ColorCode[ColorCode["DeviceNotCreated"] = 10161] = "DeviceNotCreated";
    // Device update failed 
    ColorCode[ColorCode["DeviceNotUpdated"] = 10162] = "DeviceNotUpdated";
    // Device delete failed 
    ColorCode[ColorCode["DeviceNotDeleted"] = 10163] = "DeviceNotDeleted";
    // Device search failed 
    ColorCode[ColorCode["DeviceSearchFailed"] = 10164] = "DeviceSearchFailed";
    // No device manager 
    ColorCode[ColorCode["MissingDeviceManager"] = 10167] = "MissingDeviceManager";
    // More than one device manager 
    ColorCode[ColorCode["MoreThanOneDeviceManager"] = 10168] = "MoreThanOneDeviceManager";
    // Virtual device reboot is not allowed 
    ColorCode[ColorCode["VirtualDeviceReboot"] = 10169] = "VirtualDeviceReboot";
    // Command not found 
    ColorCode[ColorCode["CommandNotFound"] = 10170] = "CommandNotFound";
    // Command failed 
    ColorCode[ColorCode["CommandFailed"] = 10171] = "CommandFailed";
    // Agent not found 
    ColorCode[ColorCode["AgentNotFound"] = 10180] = "AgentNotFound";
    // Agent create failed 
    ColorCode[ColorCode["AgentNotCreated"] = 10181] = "AgentNotCreated";
    // Agent update failed 
    ColorCode[ColorCode["AgentNotUpdated"] = 10182] = "AgentNotUpdated";
    // Agent delete failed 
    ColorCode[ColorCode["AgentNotDeleted"] = 10183] = "AgentNotDeleted";
    // Agent search failed 
    ColorCode[ColorCode["AgentFindFailed"] = 10184] = "AgentFindFailed";
    // Digital IO device not found 
    ColorCode[ColorCode["DigitalIONotFound"] = 10190] = "DigitalIONotFound";
    // Digital IO device create failed 
    ColorCode[ColorCode["DigitalIONotCreated"] = 10191] = "DigitalIONotCreated";
    // Digital IO device update failed 
    ColorCode[ColorCode["DigitalIONotUpdated"] = 10192] = "DigitalIONotUpdated";
    // Digital IO device delete failed 
    ColorCode[ColorCode["DigitalIONotDeleted"] = 10193] = "DigitalIONotDeleted";
    // Digital IO device search failed 
    ColorCode[ColorCode["DigitalIOSearchFailed"] = 10194] = "DigitalIOSearchFailed";
    // Sensor not found 
    ColorCode[ColorCode["SensorNotFound"] = 10200] = "SensorNotFound";
    // Sensor create failed 
    ColorCode[ColorCode["SensorNotCreated"] = 10201] = "SensorNotCreated";
    // Sensor update failed 
    ColorCode[ColorCode["SensorNotUpdated"] = 10202] = "SensorNotUpdated";
    // Sensor delete failed 
    ColorCode[ColorCode["SensorNotDeleted"] = 10203] = "SensorNotDeleted";
    // Sensor search failed 
    ColorCode[ColorCode["SensorSearchFailed"] = 10204] = "SensorSearchFailed";
    // Can't delete sensor not in PENDING DELETE state 
    ColorCode[ColorCode["DeleteNonPendingSensor"] = 10205] = "DeleteNonPendingSensor";
    // Sensors exceeded license limit 
    ColorCode[ColorCode["ExceedMaxLicenseChannels"] = 10207] = "ExceedMaxLicenseChannels";
    // Sensors exceeded account limit 
    ColorCode[ColorCode["ExceedMaxAccountChannels"] = 10208] = "ExceedMaxAccountChannels";
    // Sensor already attached to a device 
    ColorCode[ColorCode["SensorAlreadyAttached"] = 10209] = "SensorAlreadyAttached";
    // Sensor is not in suspended state 
    ColorCode[ColorCode["SensorIsNotSuspended"] = 10210] = "SensorIsNotSuspended";
    // Sensor is not recording 
    ColorCode[ColorCode["SensorIsNotRecording"] = 10211] = "SensorIsNotRecording";
    // Rule not found 
    ColorCode[ColorCode["RuleNotFound"] = 10220] = "RuleNotFound";
    // Rule create failed 
    ColorCode[ColorCode["RuleNotCreated"] = 10221] = "RuleNotCreated";
    // Rule update failed 
    ColorCode[ColorCode["RuleNotUpdated"] = 10222] = "RuleNotUpdated";
    // Rule delete failed 
    ColorCode[ColorCode["RuleNotDeleted"] = 10223] = "RuleNotDeleted";
    // Rule search failed 
    ColorCode[ColorCode["RuleSearchFailed"] = 10224] = "RuleSearchFailed";
    // Rule enable/disable operation failed 
    ColorCode[ColorCode["RuleEnableFailed"] = 10225] = "RuleEnableFailed";
    // Rule pause analytics operation failed 
    ColorCode[ColorCode["RulePauseFailed"] = 10226] = "RulePauseFailed";
    // Rule resume analytics operation failed 
    ColorCode[ColorCode["RuleResumeFailed"] = 10227] = "RuleResumeFailed";
    // Calendar not found 
    ColorCode[ColorCode["CalendarNotFound"] = 10300] = "CalendarNotFound";
    // Calendar create failed 
    ColorCode[ColorCode["CalendarNotCreated"] = 10301] = "CalendarNotCreated";
    // Calendar update failed 
    ColorCode[ColorCode["CalendarNotUpdated"] = 10302] = "CalendarNotUpdated";
    // Calendar delete failed 
    ColorCode[ColorCode["CalendarNotDeleted"] = 10303] = "CalendarNotDeleted";
    // Calendar search failed 
    ColorCode[ColorCode["CalendarSearchFailed"] = 10304] = "CalendarSearchFailed";
    // Calendar import operation failed 
    ColorCode[ColorCode["ImportCalendarFailed"] = 10305] = "ImportCalendarFailed";
    // Schedule not found 
    ColorCode[ColorCode["ScheduleNotFound"] = 10320] = "ScheduleNotFound";
    // Schedule create failed 
    ColorCode[ColorCode["ScheduleNotCreated"] = 10321] = "ScheduleNotCreated";
    // Schedule update failed 
    ColorCode[ColorCode["ScheduleNotUpdated"] = 10322] = "ScheduleNotUpdated";
    // Schedule delete failed 
    ColorCode[ColorCode["ScheduleNotDeleted"] = 10323] = "ScheduleNotDeleted";
    // Schedule search failed 
    ColorCode[ColorCode["ScheduleSearchFailed"] = 10324] = "ScheduleSearchFailed";
    // Schedule linked to existing rules and can't be deleted 
    ColorCode[ColorCode["ScheduleLinkedToRules"] = 10325] = "ScheduleLinkedToRules";
    // Report not found 
    ColorCode[ColorCode["ReportNotFound"] = 10330] = "ReportNotFound";
    // Report create failed 
    ColorCode[ColorCode["ReportNotCreated"] = 10331] = "ReportNotCreated";
    // Report update failed 
    ColorCode[ColorCode["ReportNotUpdated"] = 10332] = "ReportNotUpdated";
    // Report delete failed 
    ColorCode[ColorCode["ReportNotDeleted"] = 10333] = "ReportNotDeleted";
    // Report search failed 
    ColorCode[ColorCode["ReportSearchFailed"] = 10334] = "ReportSearchFailed";
    // People counting report failed 
    ColorCode[ColorCode["ReportPeopleCountingFailed"] = 10335] = "ReportPeopleCountingFailed";
    // Traffic analysis report failed 
    ColorCode[ColorCode["ReportTrafficAnalysisFailed"] = 10336] = "ReportTrafficAnalysisFailed";
    // Scheduled Report not found 
    ColorCode[ColorCode["ScheduledReportNotFound"] = 10340] = "ScheduledReportNotFound";
    // Scheduled Report create failed 
    ColorCode[ColorCode["ScheduledReportNotCreated"] = 10341] = "ScheduledReportNotCreated";
    // Scheduled Report update failed 
    ColorCode[ColorCode["ScheduledReportNotUpdated"] = 10342] = "ScheduledReportNotUpdated";
    // Scheduled Report delete failed 
    ColorCode[ColorCode["ScheduledReportNotDeleted"] = 10343] = "ScheduledReportNotDeleted";
    // Scheduled Report search failed 
    ColorCode[ColorCode["ScheduledReportSearchFailed"] = 10344] = "ScheduledReportSearchFailed";
    // Configuration not found 
    ColorCode[ColorCode["ConfigurationNotFound"] = 10360] = "ConfigurationNotFound";
    // Configuration create failed 
    ColorCode[ColorCode["ConfigurationNotCreated"] = 10361] = "ConfigurationNotCreated";
    // Configuration update failed 
    ColorCode[ColorCode["ConfigurationNotUpdated"] = 10362] = "ConfigurationNotUpdated";
    // Configuration delete failed 
    ColorCode[ColorCode["ConfigurationNotDeleted"] = 10363] = "ConfigurationNotDeleted";
    // Configuration search failed 
    ColorCode[ColorCode["ConfigurationSearchFailed"] = 10364] = "ConfigurationSearchFailed";
    // Configuration version not found 
    ColorCode[ColorCode["ConfigVersionNotFound"] = 10370] = "ConfigVersionNotFound";
    // Configuration version create failed 
    ColorCode[ColorCode["ConfigVersionNotCreated"] = 10371] = "ConfigVersionNotCreated";
    // Configuration version update failed 
    ColorCode[ColorCode["ConfigVersionNotUpdated"] = 10372] = "ConfigVersionNotUpdated";
    // Configuration version delete failed 
    ColorCode[ColorCode["ConfigVersionNotDeleted"] = 10373] = "ConfigVersionNotDeleted";
    // Configuration version search failed 
    ColorCode[ColorCode["ConfigVersionSearchFailed"] = 10374] = "ConfigVersionSearchFailed";
    // Configuration template not found 
    ColorCode[ColorCode["ConfigTemplateNotFound"] = 10380] = "ConfigTemplateNotFound";
    // Configuration template create failed 
    ColorCode[ColorCode["ConfigTemplateNotCreated"] = 10381] = "ConfigTemplateNotCreated";
    // Configuration template update failed 
    ColorCode[ColorCode["ConfigTemplateNotUpdated"] = 10382] = "ConfigTemplateNotUpdated";
    // Configuration template delete failed 
    ColorCode[ColorCode["ConfigTemplateNotDeleted"] = 10383] = "ConfigTemplateNotDeleted";
    // Configuration template search failed 
    ColorCode[ColorCode["ConfigTemplateSearchFailed"] = 10384] = "ConfigTemplateSearchFailed";
    // Event not found 
    ColorCode[ColorCode["EventNotFound"] = 10400] = "EventNotFound";
    // Event create failed 
    ColorCode[ColorCode["EventNotCreated"] = 10401] = "EventNotCreated";
    // Event update failed 
    ColorCode[ColorCode["EventNotUpdated"] = 10402] = "EventNotUpdated";
    // Event delete failed 
    ColorCode[ColorCode["EventNotDeleted"] = 10403] = "EventNotDeleted";
    // Event search failed 
    ColorCode[ColorCode["EventSearchFailed"] = 10404] = "EventSearchFailed";
    // Event status update failed 
    ColorCode[ColorCode["EventStatusNotUpdated"] = 10405] = "EventStatusNotUpdated";
    // Event image path update failed 
    ColorCode[ColorCode["EventImagePathNotUpdated"] = 10406] = "EventImagePathNotUpdated";
    // Event clip path update failed 
    ColorCode[ColorCode["EventClipPathNotUpdated"] = 10407] = "EventClipPathNotUpdated";
    // Event image open failed 
    ColorCode[ColorCode["EventOpenImageError"] = 10408] = "EventOpenImageError";
    // Event clip open failed 
    ColorCode[ColorCode["EventOpenClipError"] = 10409] = "EventOpenClipError";
    // Event count error 
    ColorCode[ColorCode["EventCountError"] = 10410] = "EventCountError";
    // Health event not found 
    ColorCode[ColorCode["HealthEventNotFound"] = 10420] = "HealthEventNotFound";
    // Health event create failed 
    ColorCode[ColorCode["HealthEventNotCreated"] = 10421] = "HealthEventNotCreated";
    // Health event update failed 
    ColorCode[ColorCode["HealthEventNotUpdated"] = 10422] = "HealthEventNotUpdated";
    // Health event delete failed 
    ColorCode[ColorCode["HealthEventNotDeleted"] = 10423] = "HealthEventNotDeleted";
    // Health event search failed 
    ColorCode[ColorCode["HealthEventSearchFailed"] = 10424] = "HealthEventSearchFailed";
    // Sensor status not found 
    ColorCode[ColorCode["SensorStatusNotFound"] = 10430] = "SensorStatusNotFound";
    // Sensor status create failed 
    ColorCode[ColorCode["SensorStatusNotCreated"] = 10431] = "SensorStatusNotCreated";
    // Sensor status search failed 
    ColorCode[ColorCode["SensorStatusSearchFailed"] = 10433] = "SensorStatusSearchFailed";
    // Integration target not found 
    ColorCode[ColorCode["IntegrationTargetNotFound"] = 10500] = "IntegrationTargetNotFound";
    // Integration target create failed 
    ColorCode[ColorCode["IntegrationTargetNotCreated"] = 10501] = "IntegrationTargetNotCreated";
    // Integration target update failed 
    ColorCode[ColorCode["IntegrationTargetNotUpdated"] = 10502] = "IntegrationTargetNotUpdated";
    // Integration target delete failed 
    ColorCode[ColorCode["IntegrationTargetNotDeleted"] = 10503] = "IntegrationTargetNotDeleted";
    // Integration target search failed 
    ColorCode[ColorCode["IntegrationTargetSearchFailed"] = 10504] = "IntegrationTargetSearchFailed";
    // Integration target has actions 
    ColorCode[ColorCode["IntegrationTargetHasActions"] = 10505] = "IntegrationTargetHasActions";
    // Integration target type not supported 
    ColorCode[ColorCode["IntegrationTargetNotSupported"] = 10506] = "IntegrationTargetNotSupported";
    // Integration action not found 
    ColorCode[ColorCode["IntegrationActionNotFound"] = 10510] = "IntegrationActionNotFound";
    // Integration action create failed 
    ColorCode[ColorCode["IntegrationActionNotCreated"] = 10511] = "IntegrationActionNotCreated";
    // Integration action update failed 
    ColorCode[ColorCode["IntegrationActionNotUpdated"] = 10512] = "IntegrationActionNotUpdated";
    // Integration action delete failed 
    ColorCode[ColorCode["IntegrationActionNotDeleted"] = 10513] = "IntegrationActionNotDeleted";
    // Integration action search failed 
    ColorCode[ColorCode["IntegrationActionSearchFailed"] = 10514] = "IntegrationActionSearchFailed";
    // API Key not found 
    ColorCode[ColorCode["ApiKeyNotFound"] = 10520] = "ApiKeyNotFound";
    // API Key create failed 
    ColorCode[ColorCode["ApiKeyNotCreated"] = 10521] = "ApiKeyNotCreated";
    // API Key update failed 
    ColorCode[ColorCode["ApiKeyNotUpdated"] = 10522] = "ApiKeyNotUpdated";
    // API Key delete failed 
    ColorCode[ColorCode["ApiKeyNotDeleted"] = 10523] = "ApiKeyNotDeleted";
    // API Key search failed 
    ColorCode[ColorCode["ApiKeySearchFailed"] = 10524] = "ApiKeySearchFailed";
    // Search fetch process not started 
    ColorCode[ColorCode["SearchServiceFetchNotStarted"] = 10600] = "SearchServiceFetchNotStarted";
    // Search fetch process in progress 
    ColorCode[ColorCode["SearchServiceFetchInProgress"] = 10601] = "SearchServiceFetchInProgress";
    // Search image not found 
    ColorCode[ColorCode["SearchServiceImageNotFound"] = 10602] = "SearchServiceImageNotFound";
    // Search service disconnected 
    ColorCode[ColorCode["SearchServiceDisconnected"] = 10603] = "SearchServiceDisconnected";
    // Search service request error 
    ColorCode[ColorCode["SearchServiceRequestError"] = 10604] = "SearchServiceRequestError";
    // Search service response error 
    ColorCode[ColorCode["SearchServiceResponseError"] = 10605] = "SearchServiceResponseError";
})(ColorCode || (ColorCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQ29sb3JDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksU0ErMUJYO0FBLzFCRCxXQUFZLFNBQVM7SUFFakIsc0JBQXNCO0lBQ3RCLCtDQUFXLENBQUE7SUFFWCw0QkFBNEI7SUFDNUIsK0RBQW1CLENBQUE7SUFFbkIsbUJBQW1CO0lBQ25CLHVFQUF1QixDQUFBO0lBRXZCLDhCQUE4QjtJQUM5Qiw2RUFBMkIsQ0FBQTtJQUUzQiwwQkFBMEI7SUFDMUIsNkNBQVcsQ0FBQTtJQUVYLHNCQUFzQjtJQUN0Qix1RUFBd0IsQ0FBQTtJQUV4Qix1QkFBdUI7SUFDdkIseUVBQXlCLENBQUE7SUFFekIsOENBQThDO0lBQzlDLHFFQUF1QixDQUFBO0lBRXZCLHVDQUF1QztJQUN2Qyx5RkFBaUMsQ0FBQTtJQUVqQyxtQ0FBbUM7SUFDbkMsaUZBQTZCLENBQUE7SUFFN0IsK0JBQStCO0lBQy9CLHVEQUFnQixDQUFBO0lBRWhCLHVCQUF1QjtJQUN2QixtREFBYyxDQUFBO0lBRWQsMkJBQTJCO0lBQzNCLG1GQUE4QixDQUFBO0lBRTlCLDRCQUE0QjtJQUM1QiwyREFBa0IsQ0FBQTtJQUVsQiw0QkFBNEI7SUFDNUIsMkRBQWtCLENBQUE7SUFFbEIsb0JBQW9CO0lBQ3BCLDJEQUFrQixDQUFBO0lBRWxCLDhCQUE4QjtJQUM5Qix5RUFBeUIsQ0FBQTtJQUV6Qix3QkFBd0I7SUFDeEIsMkRBQWtCLENBQUE7SUFFbEIsd0JBQXdCO0lBQ3hCLDJEQUFrQixDQUFBO0lBRWxCLHlCQUF5QjtJQUN6Qiw2REFBbUIsQ0FBQTtJQUVuQiwyQkFBMkI7SUFDM0IsaUVBQXFCLENBQUE7SUFFckIsMkJBQTJCO0lBQzNCLGlFQUFxQixDQUFBO0lBRXJCLDZCQUE2QjtJQUM3QixtRUFBc0IsQ0FBQTtJ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LENBQUE7SUFFakMsZ0NBQWdDO0lBQ2hDLHVGQUFpQyxDQUFBO0lBRWpDLGlDQUFpQztJQUNqQyx5RkFBa0MsQ0FBQTtBQUV0QyxDQUFDLEVBLzFCVyxTQUFTLEtBQVQsU0FBUyxRQSsxQnBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBMaXN0IG9mIHN5c3RlbSBlcnJvciBjb2RlcyBcbiovXG5leHBvcnQgZW51bSBDb2xvckNvZGUge1xuIFxuICAgIC8vIFN1Y2Nlc3MgKE5vIEVycm9yKSBcbiAgICBTVUNDRVNTID0gMCxcbiBcbiAgICAvLyBVbmV4cGVjdGVkIGdlbmVyYWwgZXJyb3IgXG4gICAgVW5leHBlY3RlZEVycm9yID0gMSxcbiBcbiAgICAvLyBOb3QgSW1wbGVtZW50ZWQgXG4gICAgTm90SW1wbGVtZW50ZWRFcnJvciA9IDIsXG4gXG4gICAgLy8gRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQgXG4gICAgRGJFcnJDb25uZWN0aW9uRmFpbGVkID0gMTA1LFxuIFxuICAgIC8vIERhdGFiYXNlIGdlbmVyYWwgZXJyb3IgXG4gICAgRGJFcnIgPSAxMDAsXG4gXG4gICAgLy8gTm8gcmVjb3JkcyBmZXRjaGVkIFxuICAgIERiRXJyTm9Sb3dzRmV0Y2hlZCA9IDEwMSxcbiBcbiAgICAvLyBObyByZWNvcmRzIGFmZmVjdGVkIFxuICAgIERiRXJyTm9Sb3dzQWZmZWN0ZWQgPSAxMDIsXG4gXG4gICAgLy8gVHJ5aW5nIHRvIGluc2VydCByZWNvcmQgd2l0aCBkdXBsaWNhdGUga2V5IFxuICAgIERiRXJyRHVwbGljYXRlS2V5ID0gMTAzLFxuIFxuICAgIC8vIFRyeWluZyB0byBzYXZlIGVudGl0eSB3aXRoIGVtcHR5IElkIFxuICAgIERiQXBwRXJyRW1wdHlFbnRpdHlJZFBhc3NlZCA9IDEwNCxcbiBcbiAgICAvLyBFbGFzdGljc2VhcmNoIGNvbm5lY3Rpb24gZmFpbGVkIFxuICAgIEVsYXN0aWNDb25uZWN0aW9uRmFpbGVkID0gMTIwLFxuIFxuICAgIC8vIEVsYXN0aWNzZWFyY2ggZ2VuZXJhbCBlcnJvciBcbiAgICBFbGFzdGljRXJyID0gMTIxLFxuIFxuICAgIC8vIFJlZGlzIGdlbmVyYWwgZXJyb3IgXG4gICAgUmVkaXNFcnIgPSAyMDAsXG4gXG4gICAgLy8gUmVkaXMgY29ubmVjdGlvbiBmYWlsZWQgXG4gICAgUmVkaXNFcnJDb25uZWN0aW9uRmFpbGVkID0gMjAxLFxuIFxuICAgIC8vIEhTZXQga2V5IG9wZXJhdGlvbiBlcnJvciBcbiAgICBSZWRpc0VyckhTZXQgPSAyMDIsXG4gXG4gICAgLy8gSEdldCBrZXkgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySEdldCA9IDIwMyxcbiBcbiAgICAvLyBObyBwaW5nIHRvIFJlZGlzIFxuICAgIFJlZGlzRXJyUGluZyA9IDIwNCxcbiBcbiAgICAvLyBIU2V0IHdpdGggZXhwaXJhdGlvbiBlcnJvciBcbiAgICBSZWRpc0VyckhTZXRXaXRoRXhwID0gMjA1LFxuIFxuICAgIC8vIEhEZWwgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySERlbCA9IDIwNixcbiBcbiAgICAvLyBSUG9wIG9wZXJhdGlvbiBlcnJvciBcbiAgICBSZWRpc0VyclJQb3AgPSAyMDcsXG4gXG4gICAgLy8gUlB1c2ggb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyUlB1c2ggPSAyMDgsXG4gXG4gICAgLy8gUHVibGlzaCBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJQdWJsaXNoID0gMjA5LFxuIFxuICAgIC8vIEdldCBBbGwgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySEdldEFsbCA9IDIxMCxcbiBcbiAgICAvLyBGbHVzaCBBbGwgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyRmx1c2hBbGwgPSAyMTEsXG4gXG4gICAgLy8gQlJQb3Agb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyQlJQb3AgPSAyMTIsXG4gXG4gICAgLy8gU2V0IEtleSBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJTZXRLZXkgPSAyMTMsXG4gXG4gICAgLy8gR2V0IGtleSBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJHZXRLZXkgPSAyMTQsXG4gXG4gICAgLy8gRGVsIGtleSBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJEZWxLZXkgPSAyMTUsXG4gXG4gICAgLy8gTUdldCBLZXkgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyTUdldEtleSA9IDIxNixcbiBcbiAgICAvLyBLZXkgYWxyZWFkeSBleGlzdHMgXG4gICAgUmVkaXNFcnJFeGlzdHNLZXkgPSAyMTcsXG4gXG4gICAgLy8gSEtleSBhbHJlYWR5IGV4aXN0cyBcbiAgICBSZWRpc0VyckhFeGlzdHNLZXkgPSAyMTgsXG4gXG4gICAgLy8gSFNldCBOWCBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJIU2V0TlhLZXkgPSAyMTksXG4gXG4gICAgLy8gSEtleXMgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySEtleXNLZXkgPSAyMjAsXG4gXG4gICAgLy8gTWFpbCBVUkkgZXJyb3IgXG4gICAgTWFpbFVyaUVycm9yID0gMjMwLFxuIFxuICAgIC8vIFJlc3QgbWFpbCBjbGllbnQgZXJyb3IgXG4gICAgTWFpbFJlc3RTZW5kRXJyb3IgPSAyMzgsXG4gXG4gICAgLy8gU01UUCBtYWlsIGNsaWVudCBlcnJvciBcbiAgICBNYWlsU210cFNlbmRFcnJvciA9IDIzOSxcbiBcbiAgICAvLyBXZWIgc29ja2V0IGVycm9yIFxuICAgIFdlYlNvY2tldEVycm9yID0gMjQwLFxuIFxuICAgIC8vIEV4cG9ydCBmb3JtYXQgZXJyb3IgKG5vdCBzdXBwb3J0ZWQpIFxuICAgIEV4cG9ydEZvcm1hdEVycm9yID0gMjUwLFxuIFxuICAgIC8vIEV4cG9ydCB0byBKU09OIGVycm9yIFxuICAgIEV4cG9ydEpzb25FcnJvciA9IDI1MSxcbiBcbiAgICAvLyBFeHBvcnQgdG8gQ1NWIGVycm9yIFxuICAgIEV4cG9ydENzdkVycm9yID0gMjUyLFxuIFxuICAgIC8vIEV4cG9ydCB0byBYTUwgZXJyb3IgXG4gICAgRXhwb3J0WG1sRXJyb3IgPSAyNTMsXG4gXG4gICAgLy8gQVdTIFMzIGNvbm5lY3Rpb24gZXJyb3IgXG4gICAgQXdzUzNOb3RJbml0aWFsaXplZCA9IDQwMCxcbiBcbiAgICAvLyBBV1MgZmFpbGVkIHRvIGNyZWF0ZSBzZXNzaW9uIFxuICAgIEF3c0NyZWF0ZVNlc3Npb25FcnIgPSA0MDEsXG4gXG4gICAgLy8gQVdTIFMzIGdlbmVyYWwgZXJyb3IgXG4gICAgQXdzUzNFcnIgPSA0MTAsXG4gXG4gICAgLy8gQVdTIFMzIGJ1Y2tldCBuYW1lIG5vdCBwcm92aWRlZCBcbiAgICBBd3NTM05vTmFtZVByb3ZpZGVkRXJyID0gNDExLFxuIFxuICAgIC8vIEFXUyBTMyByZWdpb24gbm90IHByb3ZpZGVkIFxuICAgIEF3c1MzTm9SZWdpb25Qcm92aWRlZEVyciA9IDQxMixcbiBcbiAgICAvLyBBV1MgUzMgd3JvbmcgY3JlZGVudGlhbHMgXG4gICAgQXdzUzNDcmVkZW50aWFsc0VyciA9IDQxMyxcbiBcbiAgICAvLyBBV1MgZmFpbCB0byBjcmVhdGUgcHJlLXNpZ25lZCBVUkwgXG4gICAgQXdzRmFpbFRvUHJlc2lnblVybEVycm9yID0gNDE0LFxuIFxuICAgIC8vIEdlbmVyYWwgSnNvbiBtYXJzaGFsIGVycm9yIFxuICAgIEpzb25FcnIgPSA1MDAsXG4gXG4gICAgLy8gR2VuZXJhbCBYTUwgZXJyb3IgXG4gICAgWG1sRXJyID0gNTAxLFxuIFxuICAgIC8vIElucHV0IHBhcmFtZXRlcnMgZXJyb3IgXG4gICAgQmFkSW5wdXQgPSA1MDksXG4gXG4gICAgLy8gRXJyb3IgZW5jb2RpbmcgdG8gQmFzZTY0IFxuICAgIEJhc2U2NEVDb2RlY0VyciA9IDUxMCxcbiBcbiAgICAvLyBabGliIGVycm9yIFxuICAgIFpsaWJFcnIgPSA1MjAsXG4gXG4gICAgLy8gR2VuZXJhbCBJTyBlcnJvciBcbiAgICBJb0VyciA9IDUzMCxcbiBcbiAgICAvLyBDYW4ndCBwYXJzZSBVUkwgXG4gICAgVXJsUGFyc2VFcnIgPSA1NDAsXG4gXG4gICAgLy8gQUVTIGVuY3J5cHRpb24gZXJyb3IgXG4gICAgQUVTRW5jcnlwdEVyciA9IDU0MSxcbiBcbiAgICAvLyBObyBtZXNzYWdlIGZhY3RvcnkgcHJvdmlkZWQgXG4gICAgV3NOb01lc3NhZ2VGYWN0b3J5Rm91bmQgPSA1NDIsXG4gXG4gICAgLy8gR2VuZXJhbCBPUyBmaWxlIHN5c3RlbSBlcnJvciBcbiAgICBPc0ZpbGVTeXN0ZW1FcnIgPSA2MDAsXG4gXG4gICAgLy8gVW5rbm93biAodW5zdXBwb3J0ZWQpIHN0b3JhZ2UgdHlwZSBcbiAgICBVbmtub3duU3RvcmFnZVNwZWNpZmllZCA9IDYwMSxcbiBcbiAgICAvLyBVbmtub3duICh1bnN1cHBvcnRlZCkgb2JqZWN0IHN0b3JhZ2UgdHlwZSBcbiAgICBOb09iamVjdFN0b3JhZ2VTcGVjaWZpZWQgPSA2MDIsXG4gXG4gICAgLy8gQ2FuJ3Qgb3BlbiB0ZW1wIGZpbGUgXG4gICAgT3BlblRlbXBGaWxlRm9yRXZlbnRJbWFnZUVycm9yID0gNjAzLFxuIFxuICAgIC8vIENhbid0IHdyaXRlIHRlbXAgZmlsZSBcbiAgICBXcml0ZVRlbXBGaWxlRm9yRXZlbnRJbWFnZUVycm9yID0gNjA0LFxuIFxuICAgIC8vIEZpbGUgbm90IGZvdW5kIFxuICAgIEZpbGVOb3RGb3VuZCA9IDYwNSxcbiBcbiAgICAvLyBDYW4ndCBvcGVuIGZpbGUgXG4gICAgT3BlbkZpbGVFcnJvciA9IDYwNixcbiBcbiAgICAvLyBDYW4ndCB3cml0ZSBmaWxlIFxuICAgIFdyaXRlRmlsZUVycm9yID0gNjA3LFxuIFxuICAgIC8vIFNlY3VyaXR5IHRva2VuIGVycm9yIFxuICAgIFNlY3VyaXR5VG9rZW5FcnJvciA9IDcwMCxcbiBcbiAgICAvLyBTZWN1cml0eSB0b2tlbiBub3QgcHJvdmlkZWQgXG4gICAgTm9TZWN1cml0eVRva2VuRm91bmQgPSA3MDEsXG4gXG4gICAgLy8gRW1wdHkgc2VjdXJpdHkgdG9rZW4gXG4gICAgRW1wdHlTZWN1cml0eVRva2VuID0gNzAyLFxuIFxuICAgIC8vIEVycm9yIGNyZWF0aW5nIEFQSSBrZXkgXG4gICAgRXJyb3JDcmVhdGVBcGlLZXkgPSA3MTAsXG4gXG4gICAgLy8gUGFpcmluZyBrZXkgKGZvciBkZXZpY2UpIG5vdCB2ZXJpZmllZCBcbiAgICBJbnZhbGlkUGFpcmluZ0tleVZlcmlmaWNhdGlvbiA9IC0xMDIsXG4gXG4gICAgLy8gSW52YWxpZCBkZXZpY2UgcGFpcmluZyBrZXkgXG4gICAgSW52YWxpZERldmljZVBhaXJpbmdLZXkgPSA3NTAsXG4gXG4gICAgLy8gUGFpcmluZyBkZXZpY2UgaW4gcHJvZ3Jlc3MgXG4gICAgRGV2aWNlUGFpcmluZ0luUHJvZ3Jlc3MgPSAtNzAxLFxuIFxuICAgIC8vIFBhaXJpbmcga2V5IHJlamVjdGVkIFxuICAgIERldmljZVBhaXJpbmdSZWplY3RlZCA9IC03MDIsXG4gXG4gICAgLy8gTm90IGEgdmlydHVhbCBkZXZpY2UgXG4gICAgTm90VmlydHVhbERldmljZSA9IDc1MyxcbiBcbiAgICAvLyBEZXZpY2UgaGFzIGF0dGFjaGVkIHNlbnNvcnMgXG4gICAgRGV2aWNlSGFzQXNzb2NpYXRlZFNlbnNvcnMgPSA3NTQsXG4gXG4gICAgLy8gU3RyZWFtaW5nIGNvbm5lY3Rpb24gZXJyb3IgXG4gICAgU3RyZWFtQ29ubmVjdEVycm9yID0gODAwLFxuIFxuICAgIC8vIFN0cmVhbWluZyB0b3BpYyBlcnJvciBcbiAgICBTdHJlYW1Ub3BpY0Vycm9yID0gODAxLFxuIFxuICAgIC8vIFN0cmVhbWluZyBzdWJzY3JpYmVyIGVycm9yIFxuICAgIFN0cmVhbVN1YnNjcmliZXJFcnJvciA9IDgwMixcbiBcbiAgICAvLyBTdHJlYW1pbmcgVVJJIG5vdCBwcm92aWRlZCBcbiAgICBTdHJlYW1Ob1Byb3ZpZGVyVXJpU3BlY2lmaWVkID0gODAzLFxuIFxuICAgIC8vIFN0cmVhbSBQVVQgZXJyb3IgXG4gICAgU3RyZWFtUHV0RGF0YUVycm9yID0gODUwLFxuIFxuICAgIC8vIEthZmthIGNyZWF0ZSBwcm9kdWNlciBlcnJvciBcbiAgICBLYWZrYUNyZWF0ZVByb2R1Y2VyRXJyb3IgPSA4ODAsXG4gXG4gICAgLy8gS2Fma2EgY3JlYXRlIGNvbnN1bWVyIGVycm9yIFxuICAgIEthZmthQ3JlYXRlQ29uc3VtZXJFcnJvciA9IDg4MSxcbiBcbiAgICAvLyBLYWZrYSBnZXQgbWV0YWRhdGEgZXJyb3IgXG4gICAgS2Fma2FHZXRNZXRhZGF0YUVycm9yID0gODgyLFxuIFxuICAgIC8vIEthZmthIHJlYWQgbWVzc2FnZSBlcnJvciBcbiAgICBLYWZrYVJlYWRNZXNzYWdlRXJyb3IgPSA4ODMsXG4gXG4gICAgLy8gS2Fma2EgcmVhZCBtZXNzYWdlIHRpbWVvdXQgXG4gICAgS2Fma2FSZWFkTWVzc2FnZVRpbWVvdXQgPSA4ODQsXG4gXG4gICAgLy8gRGVjb2RlIHRvIEpQRUcgWVVWIGZhaWxlZCBcbiAgICBJbWFnaW5nRGVjb2RlVG9KcGVnWVVWRXJyb3IgPSA5MDAsXG4gXG4gICAgLy8gQ3JlYXRlIGltYWdlIGZpbGUgZXJyb3IgXG4gICAgSW1hZ2luZ0NyZWF0ZUltYWdlRmlsZUVycm9yID0gOTAxLFxuIFxuICAgIC8vIEVuY29kZSBKUEVHIGVycm9yIFxuICAgIEltYWdpbmdFbmNvZGVKcGVnRXJyb3IgPSA5MDIsXG4gXG4gICAgLy8gQm91bmRpbmcgYm94ZXMgbWlzc2luZyBcbiAgICBJbWFnaW5nTm9Cb3VuZGluZ0JveGVzID0gOTAzLFxuIFxuICAgIC8vIFByZXBhcmUgZnJhbWUgZm9yIGNsaXAgZXJyb3IgXG4gICAgQ2xpcEVyclByZXBhcmVGcmFtZXMgPSA5MDQsXG4gXG4gICAgLy8gRXZlbnQgaGFzIG5vIGZyYW1lcyBcbiAgICBDbGlwRXJyRXZlbnRIYXNOb0ZyYW1lcyA9IDkwNSxcbiBcbiAgICAvLyBIb3Jpem9udGFsIGxpbmUgZXJyb3IgXG4gICAgSW1hZ2luZ0hvcml6b250YWxMaW5lRXJyb3IgPSA5MDYsXG4gXG4gICAgLy8gVmVydGljYWwgbGluZSBlcnJvciBcbiAgICBJbWFnaW5nVmVydGljYWxpbmVFcnJvciA9IDkwNyxcbiBcbiAgICAvLyBQb3N0IHdlYi1ob29rIGludGVncmF0aW9uIGVycm9yIFxuICAgIFBvc3RXZWJob29rRXJyb3IgPSA5MjEsXG4gXG4gICAgLy8gQ3JlYXRlIEhUVFAgcmVxdWVzdCBmYWlsZWQgXG4gICAgQ3JlYXRlSHR0cFJlcXVlc3RFcnJvciA9IDkyMixcbiBcbiAgICAvLyBTZW5kIEhUVFAgcmVxdWVzdCBmYWlsZWQgXG4gICAgU2VuZEh0dHBSZXF1ZXN0RXJyb3IgPSA5MjMsXG4gXG4gICAgLy8gUmV0cnkgaW50ZWdyYXRpb24gZXJyb3IgXG4gICAgQ2FuUmV0cnlJbnRlZ3JhdGlvbkVycm9yID0gOTI0LFxuIFxuICAgIC8vIElsbGVnYWwgZXZlbnQgbWVzc2FnZSBcbiAgICBJbGxlZ2FsRXZlbnRNZXNzYWdlRXJyb3IgPSA5MjUsXG4gXG4gICAgLy8gRmFpbCB0byBzZW5kIFNNVFAgbWVzc2FnZSBcbiAgICBTbXRwU2VuZE1haWxFcnJvciA9IDkzMCxcbiBcbiAgICAvLyBJbnZhbGlkIGFnZW50IGxvZ2luIGtleSBcbiAgICBBcHBFcnJJbnZhbGlkTG9naW5LZXkgPSAyMDExMSxcbiBcbiAgICAvLyBBZ2VudCBkb2VzIG5vdCBleGlzdCBcbiAgICBBcHBFcnJBZ2VudERvZXNudEV4aXN0ID0gMjAxMTIsXG4gXG4gICAgLy8gRW1wdHkgYWdlbnQgbG9naW4ga2V5IFxuICAgIEFwcEVyckVtcHR5TG9naW5LZXkgPSAyMDExMyxcbiBcbiAgICAvLyBFbXB0eSBhZ2VudCBJZCBcbiAgICBBcHBFcnJFbXB0eUFnZW50SWQgPSAyMDExNCxcbiBcbiAgICAvLyBFbXB0eSBhY2NvdW50IElkIFxuICAgIEFwcEVyckVtcHR5QWNjb3VudElkID0gMjAxMTUsXG4gXG4gICAgLy8gRW1wdHkgc2Vuc29yIElkIFxuICAgIEFwcEVyckVtcHR5U2Vuc29ySWQgPSAyMDExNixcbiBcbiAgICAvLyBHZXQgc2Vuc29yIGluZm8gZmFpbGVkIFxuICAgIEFwcEVyckdldFNlbnNvckluZm8gPSAyMDExNyxcbiBcbiAgICAvLyBHZXQgYWNjb3VudCBpbmZvIGZhaWxlZCBcbiAgICBBcHBFcnJHZXRBY2NvdW50SW5mbyA9IDIwMTE4LFxuIFxuICAgIC8vIEdldCBmb2xkZXIgSW5mbyBmYWlsZWQgXG4gICAgQXBwRXJyR2V0Rm9sZGVySW5mbyA9IDIwMTE5LFxuIFxuICAgIC8vIEdldCBydWxlIGluZm8gZmFpbGVkIFxuICAgIEFwcEVyckdldFJ1bGVJbmZvID0gMjAxMjAsXG4gXG4gICAgLy8gRW50aXR5IG5vdCBmb3VuZCBcbiAgICBFbnRpdHlOb3RGb3VuZCA9IDEwMDAwLFxuIFxuICAgIC8vIExvZ2luIGVycm9yIChpbnZhbGlkIHVzZXIgSWRlbnRpdHkpIFxuICAgIExvZ2luRXJySW52YWxpZFVpZCA9IDEwMDAxLFxuIFxuICAgIC8vIExvZ2luIGVycm9yIChpbnZhbGlkIGRldmljZSBpZGVudGl0eSkgXG4gICAgTG9naW5FcnJJbnZhbGlkQWlkID0gMTAwMDIsXG4gXG4gICAgLy8gTG9naW4ga2V5IGV4cGlyZWQgXG4gICAgTG9naW5LZXlFeHBpcmVkID0gMTAwMDMsXG4gXG4gICAgLy8gSW52YWxpZCB2ZXJpZmljYXRpb24gXG4gICAgSW52YWxpZFZlcmlmaWNhdGlvbiA9IDEwMDA0LFxuIFxuICAgIC8vIEludmFsaWQgZW1haWwgYWRkcmVzcyBcbiAgICBJbnZhbGlkRW1haWxBZGRyZXNzID0gMTAwMDUsXG4gXG4gICAgLy8gVXNlciBpcyBzdXNwZW5kZWQgXG4gICAgU3VzcGVuZGVkVXNlciA9IDEwMDA2LFxuIFxuICAgIC8vIFVzZXIgaXMgYmxvY2tlZCBcbiAgICBCbG9ja2VkVXNlciA9IDEwMDA3LFxuIFxuICAgIC8vIENhbid0IGRlbGV0ZSBTeXN0ZW0gQWRtaW5pc3RyYXRvciBcbiAgICBEZWxldGVTeXNBZG1pbiA9IDEwMDA4LFxuIFxuICAgIC8vIEFjY2VzcyBkZW5pZWQgXG4gICAgQWNjZXNzRGVuaWVkID0gMTAwMDksXG4gXG4gICAgLy8gRW1haWwgYWRkcmVzcyBhbHJlYWR5IGV4aXN0cyBcbiAgICBFbWFpbEFkZHJlc3NFeGlzdHMgPSAxMDAxMCxcbiBcbiAgICAvLyBJbnZhbGlkIGFjY2VzcyB0b2tlbiBcbiAgICBJbnZhbGlkQWNjZXNzVG9rZW4gPSAxMDAxMSxcbiBcbiAgICAvLyBHZW5lcmFsIHRva2VuIGVycm9yIFxuICAgIFRva2VuRXJyb3IgPSAxMDAyMCxcbiBcbiAgICAvLyBJbXBvcnQgbGljZW5zZSBvcGVyYXRpb24gZmFpbGVkIFxuICAgIEltcG9ydExpY2Vuc2VGYWlsZWQgPSAxMDAzMSxcbiBcbiAgICAvLyBWZXJpZnkgbGljZW5zZSBmYWlsZWQgXG4gICAgVmVyaWZ5TGljZW5zZUZhaWxlZCA9IDEwMDMyLFxuIFxuICAgIC8vIFZlcmlmeSBkZXBsb3ltZW50IElkIGZhaWxlZCBcbiAgICBWZXJpZnlEZXBsb3ltZW50RmFpbGVkID0gMTAwMzMsXG4gXG4gICAgLy8gTGljZW5zZSBub3QgZm91bmQgXG4gICAgTGljZW5zZU5vdEZvdW5kID0gMTAwMzQsXG4gXG4gICAgLy8gRW5jb2RlIGxpY2Vuc2UgZmFpbGVkIFxuICAgIEVuY29kZUxpY2Vuc2VGYWlsZWQgPSAxMDAzNSxcbiBcbiAgICAvLyBMaWNlbnNlIHNlYXJjaCBmYWlsZWQgXG4gICAgTGljZW5zZVNlYXJjaEZhaWxlZCA9IDEwMDM2LFxuIFxuICAgIC8vIExpY2Vuc2UgZGVsZXRlIGZhaWxlZCBcbiAgICBMaWNlbnNlTm90RGVsZXRlZCA9IDEwMDM3LFxuIFxuICAgIC8vIFVzZXIgbm90IGZvdW5kIFxuICAgIFVzZXJOb3RGb3VuZCA9IDEwMDQwLFxuIFxuICAgIC8vIFVzZXIgY3JlYXRlIGZhaWxlZCBcbiAgICBVc2VyTm90Q3JlYXRlZCA9IDEwMDQxLFxuIFxuICAgIC8vIFVzZXIgdXBkYXRlIGZhaWxlZCBcbiAgICBVc2VyTm90VXBkYXRlZCA9IDEwMDQyLFxuIFxuICAgIC8vIFVzZXIgZGVsZXRlIGZhaWxlZCBcbiAgICBVc2VyTm90RGVsZXRlZCA9IDEwMDQzLFxuIFxuICAgIC8vIFVzZXIgc2VhcmNoIGZhaWxlZCBcbiAgICBVc2VyU2VhcmNoRmFpbGVkID0gMTAwNDQsXG4gXG4gICAgLy8gVXNlciB3aXRob3V0IHJvbGUgXG4gICAgVXNlcldpdGhvdXRSb2xlID0gMTAwNDUsXG4gXG4gICAgLy8gVXNlciBpbnZpdGF0aW9uIGZhaWxlZCBcbiAgICBVc2VySW52aXRhdGlvbkZhaWxlZCA9IDEwMDQ2LFxuIFxuICAgIC8vIFNlcnZpY2UgQWNjb3VudCBjcmVhdGUgZmFpbGVkIFxuICAgIFNlcnZpY2VBY2NvdW50Tm90Q3JlYXRlZCA9IDEwMDUxLFxuIFxuICAgIC8vIEFjY291bnQgbm90IGZvdW5kIFxuICAgIEFjY291bnROb3RGb3VuZCA9IDEwMTAwLFxuIFxuICAgIC8vIEFjY291bnQgY3JlYXRlIGZhaWxlZCBcbiAgICBBY2NvdW50Tm90Q3JlYXRlZCA9IDEwMTAxLFxuIFxuICAgIC8vIEFjY291bnQgdXBkYXRlIGZhaWxlZCBcbiAgICBBY2NvdW50Tm90VXBkYXRlZCA9IDEwMTAyLFxuIFxuICAgIC8vIEFjY291bnQgZGVsZXRlIGZhaWxlZCBcbiAgICBBY2NvdW50Tm90RGVsZXRlZCA9IDEwMTAzLFxuIFxuICAgIC8vIFdyb25nIEFjY291bnQgbmFtZSBcbiAgICBXcm9uZ0FjY291bnROYW1lID0gMTAxMDQsXG4gXG4gICAgLy8gV3JvbmcgQWNjb3VudCB0eXBlIFxuICAgIFdyb25nQWNjb3VudFR5cGUgPSAxMDEwNSxcbiBcbiAgICAvLyBXcm9uZyBBY2NvdW50IHN0YXR1cyBcbiAgICBXcm9uZ0FjY291bnRTdGF0dXMgPSAxMDEwNixcbiBcbiAgICAvLyBBY2NvdW50IHNlYXJjaCBmYWlsZWQgXG4gICAgQWNjb3VudFNlYXJjaEZhaWxlZCA9IDEwMTA5LFxuIFxuICAgIC8vIEFjY291bnQgbm90IGFjY2Vzc2libGUgXG4gICAgSW5hY2Nlc3NpYmxlQWNjb3VudCA9IDEwMTEwLFxuIFxuICAgIC8vIFdyb25nIEFjY291bnQgXG4gICAgVW5tYXRjaGluZ0FjY291bnQgPSAxMDExMSxcbiBcbiAgICAvLyBBY2NvdW50IGxpY2Vuc2UgZXhwaXJlZCBcbiAgICBFeHBpcmVkQWNjb3VudCA9IDEwMTEyLFxuIFxuICAgIC8vIEFjY291bnQgYWxyZWFkeSBleGlzdHMgXG4gICAgQWNjb3VudEV4aXN0cyA9IDEwMTEzLFxuIFxuICAgIC8vIEFjY291bnQgbmFtZSBpcyBlbXB0eSBcbiAgICBFbXB0eUFjY291bnROYW1lID0gMTAxMTQsXG4gXG4gICAgLy8gQ2FuJ3QgZGVsZXRlIFNVU1BFTkRFRCBhY2NvdW50IFxuICAgIERlbGV0ZVN1c3BlbmRlZEFjY291bnQgPSAxMDExNSxcbiBcbiAgICAvLyBDYW4ndCBkZWxldGUgYWNjb3VudCAgd2l0aCBjb250ZW50IFxuICAgIERlbGV0ZUFjY291bnRXaXRoQ29udGVudCA9IDEwMTE2LFxuIFxuICAgIC8vIENhbid0IGRlbGV0ZSBQRU5ESU5HIGFjY291bnQgXG4gICAgUGVuZGluZ0RlbGV0ZWRBY2NvdW50ID0gMTAxMTcsXG4gXG4gICAgLy8gRm9sZGVyIG5vdCBmb3VuZCBcbiAgICBGb2xkZXJOb3RGb3VuZCA9IDEwMTIwLFxuIFxuICAgIC8vIEZvbGRlciBjcmVhdGUgZmFpbGVkIFxuICAgIEZvbGRlck5vdENyZWF0ZWQgPSAxMDEyMSxcbiBcbiAgICAvLyBGb2xkZXIgdXBkYXRlIGZhaWxlZCBcbiAgICBGb2xkZXJOb3RVcGRhdGVkID0gMTAxMjIsXG4gXG4gICAgLy8gRm9sZGVyIGRlbGV0ZSBmYWlsZWQgXG4gICAgRm9sZGVyTm90RGVsZXRlZCA9IDEwMTIzLFxuIFxuICAgIC8vIEZvbGRlciBzZWFyY2ggZmFpbGVkIFxuICAgIEZvbGRlclNlYXJjaEZhaWxlZCA9IDEwMTI0LFxuIFxuICAgIC8vIENhbid0IGRlbGV0ZSBmb2xkZXIgd2l0aCBjb250ZW50IFxuICAgIERlbGV0ZUZvbGRlcldpdGhDb250ZW50ID0gMTAxMjUsXG4gXG4gICAgLy8gR2VvLXRyYW5zZm9ybWF0aW9uIGVycm9yIFxuICAgIEdlb1RyYW5zZm9ybWF0aW9uRXJyb3IgPSAxMDEyOCxcbiBcbiAgICAvLyBMb2FkIGdlby10cmFuc2Zvcm1hdGlvbiBmYWlsZWQgXG4gICAgTG9hZFRyYW5zZm9ybWF0aW9uRXJyb3IgPSAxMDEyOSxcbiBcbiAgICAvLyBGZWF0dXJlcyBncm91cCBub3QgZm91bmQgXG4gICAgR3JvdXBOb3RGb3VuZCA9IDEwMTQwLFxuIFxuICAgIC8vIEZlYXR1cmVzIGdyb3VwIGNyZWF0ZSBmYWlsZWQgXG4gICAgR3JvdXBOb3RDcmVhdGVkID0gMTAxNDEsXG4gXG4gICAgLy8gRmVhdHVyZXMgZ3JvdXAgdXBkYXRlIGZhaWxlZCBcbiAgICBHcm91cE5vdFVwZGF0ZWQgPSAxMDE0MixcbiBcbiAgICAvLyBGZWF0dXJlcyBncm91cCBkZWxldGUgZmFpbGVkIFxuICAgIEdyb3VwTm90RGVsZXRlZCA9IDEwMTQzLFxuIFxuICAgIC8vIEZlYXR1cmVzIGdyb3VwIHNlYXJjaCBmYWlsZWQgXG4gICAgR3JvdXBTZWFyY2hGYWlsZWQgPSAxMDE0NCxcbiBcbiAgICAvLyBGZWF0dXJlcyBncm91cCBhbHJlYWR5IGluIHVzZSBhbmQgY2FuJ3QgYmUgZGVsZXRlZCBcbiAgICBHcm91cEluVXNlQnlBY2NvdW50ID0gMTAxNDUsXG4gXG4gICAgLy8gRmVhdHVyZSBub3QgZm91bmQgXG4gICAgRmVhdHVyZU5vdEZvdW5kID0gMTAxNDYsXG4gXG4gICAgLy8gRGV2aWNlIG5vdCBmb3VuZCBcbiAgICBEZXZpY2VOb3RGb3VuZCA9IDEwMTYwLFxuIFxuICAgIC8vIERldmljZSBjcmVhdGUgZmFpbGVkIFxuICAgIERldmljZU5vdENyZWF0ZWQgPSAxMDE2MSxcbiBcbiAgICAvLyBEZXZpY2UgdXBkYXRlIGZhaWxlZCBcbiAgICBEZXZpY2VOb3RVcGRhdGVkID0gMTAxNjIsXG4gXG4gICAgLy8gRGV2aWNlIGRlbGV0ZSBmYWlsZWQgXG4gICAgRGV2aWNlTm90RGVsZXRlZCA9IDEwMTYzLFxuIFxuICAgIC8vIERldmljZSBzZWFyY2ggZmFpbGVkIFxuICAgIERldmljZVNlYXJjaEZhaWxlZCA9IDEwMTY0LFxuIFxuICAgIC8vIE5vIGRldmljZSBtYW5hZ2VyIFxuICAgIE1pc3NpbmdEZXZpY2VNYW5hZ2VyID0gMTAxNjcsXG4gXG4gICAgLy8gTW9yZSB0aGFuIG9uZSBkZXZpY2UgbWFuYWdlciBcbiAgICBNb3JlVGhhbk9uZURldmljZU1hbmFnZXIgPSAxMDE2OCxcbiBcbiAgICAvLyBWaXJ0dWFsIGRldmljZSByZWJvb3QgaXMgbm90IGFsbG93ZWQgXG4gICAgVmlydHVhbERldmljZVJlYm9vdCA9IDEwMTY5LFxuIFxuICAgIC8vIENvbW1hbmQgbm90IGZvdW5kIFxuICAgIENvbW1hbmROb3RGb3VuZCA9IDEwMTcwLFxuIFxuICAgIC8vIENvbW1hbmQgZmFpbGVkIFxuICAgIENvbW1hbmRGYWlsZWQgPSAxMDE3MSxcbiBcbiAgICAvLyBBZ2VudCBub3QgZm91bmQgXG4gICAgQWdlbnROb3RGb3VuZCA9IDEwMTgwLFxuIFxuICAgIC8vIEFnZW50IGNyZWF0ZSBmYWlsZWQgXG4gICAgQWdlbnROb3RDcmVhdGVkID0gMTAxODEsXG4gXG4gICAgLy8gQWdlbnQgdXBkYXRlIGZhaWxlZCBcbiAgICBBZ2VudE5vdFVwZGF0ZWQgPSAxMDE4MixcbiBcbiAgICAvLyBBZ2VudCBkZWxldGUgZmFpbGVkIFxuICAgIEFnZW50Tm90RGVsZXRlZCA9IDEwMTgzLFxuIFxuICAgIC8vIEFnZW50IHNlYXJjaCBmYWlsZWQgXG4gICAgQWdlbnRGaW5kRmFpbGVkID0gMTAxODQsXG4gXG4gICAgLy8gRGlnaXRhbCBJTyBkZXZpY2Ugbm90IGZvdW5kIFxuICAgIERpZ2l0YWxJT05vdEZvdW5kID0gMTAxOTAsXG4gXG4gICAgLy8gRGlnaXRhbCBJTyBkZXZpY2UgY3JlYXRlIGZhaWxlZCBcbiAgICBEaWdpdGFsSU9Ob3RDcmVhdGVkID0gMTAxOTEsXG4gXG4gICAgLy8gRGlnaXRhbCBJTyBkZXZpY2UgdXBkYXRlIGZhaWxlZCBcbiAgICBEaWdpdGFsSU9Ob3RVcGRhdGVkID0gMTAxOTIsXG4gXG4gICAgLy8gRGlnaXRhbCBJTyBkZXZpY2UgZGVsZXRlIGZhaWxlZCBcbiAgICBEaWdpdGFsSU9Ob3REZWxldGVkID0gMTAxOTMsXG4gXG4gICAgLy8gRGlnaXRhbCBJTyBkZXZpY2Ugc2VhcmNoIGZhaWxlZCBcbiAgICBEaWdpdGFsSU9TZWFyY2hGYWlsZWQgPSAxMDE5NCxcbiBcbiAgICAvLyBTZW5zb3Igbm90IGZvdW5kIFxuICAgIFNlbnNvck5vdEZvdW5kID0gMTAyMDAsXG4gXG4gICAgLy8gU2Vuc29yIGNyZWF0ZSBmYWlsZWQgXG4gICAgU2Vuc29yTm90Q3JlYXRlZCA9IDEwMjAxLFxuIFxuICAgIC8vIFNlbnNvciB1cGRhdGUgZmFpbGVkIFxuICAgIFNlbnNvck5vdFVwZGF0ZWQgPSAxMDIwMixcbiBcbiAgICAvLyBTZW5zb3IgZGVsZXRlIGZhaWxlZCBcbiAgICBTZW5zb3JOb3REZWxldGVkID0gMTAyMDMsXG4gXG4gICAgLy8gU2Vuc29yIHNlYXJjaCBmYWlsZWQgXG4gICAgU2Vuc29yU2VhcmNoRmFpbGVkID0gMTAyMDQsXG4gXG4gICAgLy8gQ2FuJ3QgZGVsZXRlIHNlbnNvciBub3QgaW4gUEVORElORyBERUxFVEUgc3RhdGUgXG4gICAgRGVsZXRlTm9uUGVuZGluZ1NlbnNvciA9IDEwMjA1LFxuIFxuICAgIC8vIFNlbnNvcnMgZXhjZWVkZWQgbGljZW5zZSBsaW1pdCBcbiAgICBFeGNlZWRNYXhMaWNlbnNlQ2hhbm5lbHMgPSAxMDIwNyxcbiBcbiAgICAvLyBTZW5zb3JzIGV4Y2VlZGVkIGFjY291bnQgbGltaXQgXG4gICAgRXhjZWVkTWF4QWNjb3VudENoYW5uZWxzID0gMTAyMDgsXG4gXG4gICAgLy8gU2Vuc29yIGFscmVhZHkgYXR0YWNoZWQgdG8gYSBkZXZpY2UgXG4gICAgU2Vuc29yQWxyZWFkeUF0dGFjaGVkID0gMTAyMDksXG4gXG4gICAgLy8gU2Vuc29yIGlzIG5vdCBpbiBzdXNwZW5kZWQgc3RhdGUgXG4gICAgU2Vuc29ySXNOb3RTdXNwZW5kZWQgPSAxMDIxMCxcbiBcbiAgICAvLyBTZW5zb3IgaXMgbm90IHJlY29yZGluZyBcbiAgICBTZW5zb3JJc05vdFJlY29yZGluZyA9IDEwMjExLFxuIFxuICAgIC8vIFJ1bGUgbm90IGZvdW5kIFxuICAgIFJ1bGVOb3RGb3VuZCA9IDEwMjIwLFxuIFxuICAgIC8vIFJ1bGUgY3JlYXRlIGZhaWxlZCBcbiAgICBSdWxlTm90Q3JlYXRlZCA9IDEwMjIxLFxuIFxuICAgIC8vIFJ1bGUgdXBkYXRlIGZhaWxlZCBcbiAgICBSdWxlTm90VXBkYXRlZCA9IDEwMjIyLFxuIFxuICAgIC8vIFJ1bGUgZGVsZXRlIGZhaWxlZCBcbiAgICBSdWxlTm90RGVsZXRlZCA9IDEwMjIzLFxuIFxuICAgIC8vIFJ1bGUgc2VhcmNoIGZhaWxlZCBcbiAgICBSdWxlU2VhcmNoRmFpbGVkID0gMTAyMjQsXG4gXG4gICAgLy8gUnVsZSBlbmFibGUvZGlzYWJsZSBvcGVyYXRpb24gZmFpbGVkIFxuICAgIFJ1bGVFbmFibGVGYWlsZWQgPSAxMDIyNSxcbiBcbiAgICAvLyBSdWxlIHBhdXNlIGFuYWx5dGljcyBvcGVyYXRpb24gZmFpbGVkIFxuICAgIFJ1bGVQYXVzZUZhaWxlZCA9IDEwMjI2LFxuIFxuICAgIC8vIFJ1bGUgcmVzdW1lIGFuYWx5dGljcyBvcGVyYXRpb24gZmFpbGVkIFxuICAgIFJ1bGVSZXN1bWVGYWlsZWQgPSAxMDIyNyxcbiBcbiAgICAvLyBDYWxlbmRhciBub3QgZm91bmQgXG4gICAgQ2FsZW5kYXJOb3RGb3VuZCA9IDEwMzAwLFxuIFxuICAgIC8vIENhbGVuZGFyIGNyZWF0ZSBmYWlsZWQgXG4gICAgQ2FsZW5kYXJOb3RDcmVhdGVkID0gMTAzMDEsXG4gXG4gICAgLy8gQ2FsZW5kYXIgdXBkYXRlIGZhaWxlZCBcbiAgICBDYWxlbmRhck5vdFVwZGF0ZWQgPSAxMDMwMixcbiBcbiAgICAvLyBDYWxlbmRhciBkZWxldGUgZmFpbGVkIFxuICAgIENhbGVuZGFyTm90RGVsZXRlZCA9IDEwMzAzLFxuIFxuICAgIC8vIENhbGVuZGFyIHNlYXJjaCBmYWlsZWQgXG4gICAgQ2FsZW5kYXJTZWFyY2hGYWlsZWQgPSAxMDMwNCxcbiBcbiAgICAvLyBDYWxlbmRhciBpbXBvcnQgb3BlcmF0aW9uIGZhaWxlZCBcbiAgICBJbXBvcnRDYWxlbmRhckZhaWxlZCA9IDEwMzA1LFxuIFxuICAgIC8vIFNjaGVkdWxlIG5vdCBmb3VuZCBcbiAgICBTY2hlZHVsZU5vdEZvdW5kID0gMTAzMjAsXG4gXG4gICAgLy8gU2NoZWR1bGUgY3JlYXRlIGZhaWxlZCBcbiAgICBTY2hlZHVsZU5vdENyZWF0ZWQgPSAxMDMyMSxcbiBcbiAgICAvLyBTY2hlZHVsZSB1cGRhdGUgZmFpbGVkIFxuICAgIFNjaGVkdWxlTm90VXBkYXRlZCA9IDEwMzIyLFxuIFxuICAgIC8vIFNjaGVkdWxlIGRlbGV0ZSBmYWlsZWQgXG4gICAgU2NoZWR1bGVOb3REZWxldGVkID0gMTAzMjMsXG4gXG4gICAgLy8gU2NoZWR1bGUgc2VhcmNoIGZhaWxlZCBcbiAgICBTY2hlZHVsZVNlYXJjaEZhaWxlZCA9IDEwMzI0LFxuIFxuICAgIC8vIFNjaGVkdWxlIGxpbmtlZCB0byBleGlzdGluZyBydWxlcyBhbmQgY2FuJ3QgYmUgZGVsZXRlZCBcbiAgICBTY2hlZHVsZUxpbmtlZFRvUnVsZXMgPSAxMDMyNSxcbiBcbiAgICAvLyBSZXBvcnQgbm90IGZvdW5kIFxuICAgIFJlcG9ydE5vdEZvdW5kID0gMTAzMzAsXG4gXG4gICAgLy8gUmVwb3J0IGNyZWF0ZSBmYWlsZWQgXG4gICAgUmVwb3J0Tm90Q3JlYXRlZCA9IDEwMzMxLFxuIFxuICAgIC8vIFJlcG9ydCB1cGRhdGUgZmFpbGVkIFxuICAgIFJlcG9ydE5vdFVwZGF0ZWQgPSAxMDMzMixcbiBcbiAgICAvLyBSZXBvcnQgZGVsZXRlIGZhaWxlZCBcbiAgICBSZXBvcnROb3REZWxldGVkID0gMTAzMzMsXG4gXG4gICAgLy8gUmVwb3J0IHNlYXJjaCBmYWlsZWQgXG4gICAgUmVwb3J0U2VhcmNoRmFpbGVkID0gMTAzMzQsXG4gXG4gICAgLy8gUGVvcGxlIGNvdW50aW5nIHJlcG9ydCBmYWlsZWQgXG4gICAgUmVwb3J0UGVvcGxlQ291bnRpbmdGYWlsZWQgPSAxMDMzNSxcbiBcbiAgICAvLyBUcmFmZmljIGFuYWx5c2lzIHJlcG9ydCBmYWlsZWQgXG4gICAgUmVwb3J0VHJhZmZpY0FuYWx5c2lzRmFpbGVkID0gMTAzMzYsXG4gXG4gICAgLy8gU2NoZWR1bGVkIFJlcG9ydCBub3QgZm91bmQgXG4gICAgU2NoZWR1bGVkUmVwb3J0Tm90Rm91bmQgPSAxMDM0MCxcbiBcbiAgICAvLyBTY2hlZHVsZWQgUmVwb3J0IGNyZWF0ZSBmYWlsZWQgXG4gICAgU2NoZWR1bGVkUmVwb3J0Tm90Q3JlYXRlZCA9IDEwMzQxLFxuIFxuICAgIC8vIFNjaGVkdWxlZCBSZXBvcnQgdXBkYXRlIGZhaWxlZCBcbiAgICBTY2hlZHVsZWRSZXBvcnROb3RVcGRhdGVkID0gMTAzNDIsXG4gXG4gICAgLy8gU2NoZWR1bGVkIFJlcG9ydCBkZWxldGUgZmFpbGVkIFxuICAgIFNjaGVkdWxlZFJlcG9ydE5vdERlbGV0ZWQgPSAxMDM0MyxcbiBcbiAgICAvLyBTY2hlZHVsZWQgUmVwb3J0IHNlYXJjaCBmYWlsZWQgXG4gICAgU2NoZWR1bGVkUmVwb3J0U2VhcmNoRmFpbGVkID0gMTAzNDQsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiBub3QgZm91bmQgXG4gICAgQ29uZmlndXJhdGlvbk5vdEZvdW5kID0gMTAzNjAsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiBjcmVhdGUgZmFpbGVkIFxuICAgIENvbmZpZ3VyYXRpb25Ob3RDcmVhdGVkID0gMTAzNjEsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB1cGRhdGUgZmFpbGVkIFxuICAgIENvbmZpZ3VyYXRpb25Ob3RVcGRhdGVkID0gMTAzNjIsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiBkZWxldGUgZmFpbGVkIFxuICAgIENvbmZpZ3VyYXRpb25Ob3REZWxldGVkID0gMTAzNjMsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiBzZWFyY2ggZmFpbGVkIFxuICAgIENvbmZpZ3VyYXRpb25TZWFyY2hGYWlsZWQgPSAxMDM2NCxcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHZlcnNpb24gbm90IGZvdW5kIFxuICAgIENvbmZpZ1ZlcnNpb25Ob3RGb3VuZCA9IDEwMzcwLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gdmVyc2lvbiBjcmVhdGUgZmFpbGVkIFxuICAgIENvbmZpZ1ZlcnNpb25Ob3RDcmVhdGVkID0gMTAzNzEsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB2ZXJzaW9uIHVwZGF0ZSBmYWlsZWQgXG4gICAgQ29uZmlnVmVyc2lvbk5vdFVwZGF0ZWQgPSAxMDM3MixcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHZlcnNpb24gZGVsZXRlIGZhaWxlZCBcbiAgICBDb25maWdWZXJzaW9uTm90RGVsZXRlZCA9IDEwMzczLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gdmVyc2lvbiBzZWFyY2ggZmFpbGVkIFxuICAgIENvbmZpZ1ZlcnNpb25TZWFyY2hGYWlsZWQgPSAxMDM3NCxcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHRlbXBsYXRlIG5vdCBmb3VuZCBcbiAgICBDb25maWdUZW1wbGF0ZU5vdEZvdW5kID0gMTAzODAsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBjcmVhdGUgZmFpbGVkIFxuICAgIENvbmZpZ1RlbXBsYXRlTm90Q3JlYXRlZCA9IDEwMzgxLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gdGVtcGxhdGUgdXBkYXRlIGZhaWxlZCBcbiAgICBDb25maWdUZW1wbGF0ZU5vdFVwZGF0ZWQgPSAxMDM4MixcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHRlbXBsYXRlIGRlbGV0ZSBmYWlsZWQgXG4gICAgQ29uZmlnVGVtcGxhdGVOb3REZWxldGVkID0gMTAzODMsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBzZWFyY2ggZmFpbGVkIFxuICAgIENvbmZpZ1RlbXBsYXRlU2VhcmNoRmFpbGVkID0gMTAzODQsXG4gXG4gICAgLy8gRXZlbnQgbm90IGZvdW5kIFxuICAgIEV2ZW50Tm90Rm91bmQgPSAxMDQwMCxcbiBcbiAgICAvLyBFdmVudCBjcmVhdGUgZmFpbGVkIFxuICAgIEV2ZW50Tm90Q3JlYXRlZCA9IDEwNDAxLFxuIFxuICAgIC8vIEV2ZW50IHVwZGF0ZSBmYWlsZWQgXG4gICAgRXZlbnROb3RVcGRhdGVkID0gMTA0MDIsXG4gXG4gICAgLy8gRXZlbnQgZGVsZXRlIGZhaWxlZCBcbiAgICBFdmVudE5vdERlbGV0ZWQgPSAxMDQwMyxcbiBcbiAgICAvLyBFdmVudCBzZWFyY2ggZmFpbGVkIFxuICAgIEV2ZW50U2VhcmNoRmFpbGVkID0gMTA0MDQsXG4gXG4gICAgLy8gRXZlbnQgc3RhdHVzIHVwZGF0ZSBmYWlsZWQgXG4gICAgRXZlbnRTdGF0dXNOb3RVcGRhdGVkID0gMTA0MDUsXG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgcGF0aCB1cGRhdGUgZmFpbGVkIFxuICAgIEV2ZW50SW1hZ2VQYXRoTm90VXBkYXRlZCA9IDEwNDA2LFxuIFxuICAgIC8vIEV2ZW50IGNsaXAgcGF0aCB1cGRhdGUgZmFpbGVkIFxuICAgIEV2ZW50Q2xpcFBhdGhOb3RVcGRhdGVkID0gMTA0MDcsXG4gXG4gICAgLy8gRXZlbnQgaW1hZ2Ugb3BlbiBmYWlsZWQgXG4gICAgRXZlbnRPcGVuSW1hZ2VFcnJvciA9IDEwNDA4LFxuIFxuICAgIC8vIEV2ZW50IGNsaXAgb3BlbiBmYWlsZWQgXG4gICAgRXZlbnRPcGVuQ2xpcEVycm9yID0gMTA0MDksXG4gXG4gICAgLy8gRXZlbnQgY291bnQgZXJyb3IgXG4gICAgRXZlbnRDb3VudEVycm9yID0gMTA0MTAsXG4gXG4gICAgLy8gSGVhbHRoIGV2ZW50IG5vdCBmb3VuZCBcbiAgICBIZWFsdGhFdmVudE5vdEZvdW5kID0gMTA0MjAsXG4gXG4gICAgLy8gSGVhbHRoIGV2ZW50IGNyZWF0ZSBmYWlsZWQgXG4gICAgSGVhbHRoRXZlbnROb3RDcmVhdGVkID0gMTA0MjEsXG4gXG4gICAgLy8gSGVhbHRoIGV2ZW50IHVwZGF0ZSBmYWlsZWQgXG4gICAgSGVhbHRoRXZlbnROb3RVcGRhdGVkID0gMTA0MjIsXG4gXG4gICAgLy8gSGVhbHRoIGV2ZW50IGRlbGV0ZSBmYWlsZWQgXG4gICAgSGVhbHRoRXZlbnROb3REZWxldGVkID0gMTA0MjMsXG4gXG4gICAgLy8gSGVhbHRoIGV2ZW50IHNlYXJjaCBmYWlsZWQgXG4gICAgSGVhbHRoRXZlbnRTZWFyY2hGYWlsZWQgPSAxMDQyNCxcbiBcbiAgICAvLyBTZW5zb3Igc3RhdHVzIG5vdCBmb3VuZCBcbiAgICBTZW5zb3JTdGF0dXNOb3RGb3VuZCA9IDEwNDMwLFxuIFxuICAgIC8vIFNlbnNvciBzdGF0dXMgY3JlYXRlIGZhaWxlZCBcbiAgICBTZW5zb3JTdGF0dXNOb3RDcmVhdGVkID0gMTA0MzEsXG4gXG4gICAgLy8gU2Vuc29yIHN0YXR1cyBzZWFyY2ggZmFpbGVkIFxuICAgIFNlbnNvclN0YXR1c1NlYXJjaEZhaWxlZCA9IDEwNDMzLFxuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBub3QgZm91bmQgXG4gICAgSW50ZWdyYXRpb25UYXJnZXROb3RGb3VuZCA9IDEwNTAwLFxuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBjcmVhdGUgZmFpbGVkIFxuICAgIEludGVncmF0aW9uVGFyZ2V0Tm90Q3JlYXRlZCA9IDEwNTAxLFxuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCB1cGRhdGUgZmFpbGVkIFxuICAgIEludGVncmF0aW9uVGFyZ2V0Tm90VXBkYXRlZCA9IDEwNTAyLFxuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBkZWxldGUgZmFpbGVkIFxuICAgIEludGVncmF0aW9uVGFyZ2V0Tm90RGVsZXRlZCA9IDEwNTAzLFxuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBzZWFyY2ggZmFpbGVkIFxuICAgIEludGVncmF0aW9uVGFyZ2V0U2VhcmNoRmFpbGVkID0gMTA1MDQsXG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IGhhcyBhY3Rpb25zIFxuICAgIEludGVncmF0aW9uVGFyZ2V0SGFzQWN0aW9ucyA9IDEwNTA1LFxuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCB0eXBlIG5vdCBzdXBwb3J0ZWQgXG4gICAgSW50ZWdyYXRpb25UYXJnZXROb3RTdXBwb3J0ZWQgPSAxMDUwNixcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBhY3Rpb24gbm90IGZvdW5kIFxuICAgIEludGVncmF0aW9uQWN0aW9uTm90Rm91bmQgPSAxMDUxMCxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBhY3Rpb24gY3JlYXRlIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvbkFjdGlvbk5vdENyZWF0ZWQgPSAxMDUxMSxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBhY3Rpb24gdXBkYXRlIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvbkFjdGlvbk5vdFVwZGF0ZWQgPSAxMDUxMixcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBhY3Rpb24gZGVsZXRlIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvbkFjdGlvbk5vdERlbGV0ZWQgPSAxMDUxMyxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBhY3Rpb24gc2VhcmNoIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvbkFjdGlvblNlYXJjaEZhaWxlZCA9IDEwNTE0LFxuIFxuICAgIC8vIEFQSSBLZXkgbm90IGZvdW5kIFxuICAgIEFwaUtleU5vdEZvdW5kID0gMTA1MjAsXG4gXG4gICAgLy8gQVBJIEtleSBjcmVhdGUgZmFpbGVkIFxuICAgIEFwaUtleU5vdENyZWF0ZWQgPSAxMDUyMSxcbiBcbiAgICAvLyBBUEkgS2V5IHVwZGF0ZSBmYWlsZWQgXG4gICAgQXBpS2V5Tm90VXBkYXRlZCA9IDEwNTIyLFxuIFxuICAgIC8vIEFQSSBLZXkgZGVsZXRlIGZhaWxlZCBcbiAgICBBcGlLZXlOb3REZWxldGVkID0gMTA1MjMsXG4gXG4gICAgLy8gQVBJIEtleSBzZWFyY2ggZmFpbGVkIFxuICAgIEFwaUtleVNlYXJjaEZhaWxlZCA9IDEwNTI0LFxuIFxuICAgIC8vIFNlYXJjaCBmZXRjaCBwcm9jZXNzIG5vdCBzdGFydGVkIFxuICAgIFNlYXJjaFNlcnZpY2VGZXRjaE5vdFN0YXJ0ZWQgPSAxMDYwMCxcbiBcbiAgICAvLyBTZWFyY2ggZmV0Y2ggcHJvY2VzcyBpbiBwcm9ncmVzcyBcbiAgICBTZWFyY2hTZXJ2aWNlRmV0Y2hJblByb2dyZXNzID0gMTA2MDEsXG4gXG4gICAgLy8gU2VhcmNoIGltYWdlIG5vdCBmb3VuZCBcbiAgICBTZWFyY2hTZXJ2aWNlSW1hZ2VOb3RGb3VuZCA9IDEwNjAyLFxuIFxuICAgIC8vIFNlYXJjaCBzZXJ2aWNlIGRpc2Nvbm5lY3RlZCBcbiAgICBTZWFyY2hTZXJ2aWNlRGlzY29ubmVjdGVkID0gMTA2MDMsXG4gXG4gICAgLy8gU2VhcmNoIHNlcnZpY2UgcmVxdWVzdCBlcnJvciBcbiAgICBTZWFyY2hTZXJ2aWNlUmVxdWVzdEVycm9yID0gMTA2MDQsXG4gXG4gICAgLy8gU2VhcmNoIHNlcnZpY2UgcmVzcG9uc2UgZXJyb3IgXG4gICAgU2VhcmNoU2VydmljZVJlc3BvbnNlRXJyb3IgPSAxMDYwNSxcbiBcbn0iXX0=