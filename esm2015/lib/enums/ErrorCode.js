/*
   List of system error codes
*/
export var ErrorCode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JDb2RlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9FcnJvckNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxTQTIyQlg7QUEzMkJELFdBQVksU0FBUztJQUVqQixzQkFBc0I7SUFDdEIsK0NBQVcsQ0FBQTtJQUVYLDRCQUE0QjtJQUM1QiwrREFBbUIsQ0FBQTtJQUVuQixtQkFBbUI7SUFDbkIsdUVBQXVCLENBQUE7SUFFdkIsOEJBQThCO0lBQzlCLDZFQUEyQixDQUFBO0lBRTNCLDBCQUEwQjtJQUMxQiw2Q0FBVyxDQUFBO0lBRVgsc0JBQXNCO0lBQ3RCLHVFQUF3QixDQUFBO0lBRXhCLHVCQUF1QjtJQUN2Qix5RUFBeUIsQ0FBQTtJQUV6Qiw4Q0FBOEM7SUFDOUMscUVBQXVCLENBQUE7SUFFdkIsdUNBQXVDO0lBQ3ZDLHlGQUFpQyxDQUFBO0lBRWpDLG1DQUFtQztJQUNuQyxpRkFBNkIsQ0FBQTtJQUU3QiwrQkFBK0I7SUFDL0IsdURBQWdCLENBQUE7SUFFaEIsdUJBQXVCO0lBQ3ZCLG1EQUFjLENBQUE7SUFFZCwyQkFBMkI7SUFDM0IsbUZBQThCLENBQUE7SUFFOUIsNEJBQTRCO0lBQzVCLDJEQUFrQixDQUFBO0lBRWxCLDRCQUE0QjtJQUM1QiwyREFBa0IsQ0FBQTtJQUVsQixvQkFBb0I7SUFDcEIsMkRBQWtCLENBQUE7SUFFbEIsOEJBQThCO0lBQzlCLHlFQUF5QixDQUFBO0lBRXpCLHdCQUF3QjtJQUN4QiwyREFBa0IsQ0FBQTtJQUVsQix3QkFBd0I7SUFDeEIsMkRBQWtCLENBQUE7SUFFbEIseUJBQXlCO0lBQ3pCLDZEQUFtQixDQUFBO0lBRW5CLDJCQUEyQjtJQUMzQixpRUFBcUIsQ0FBQTtJQUVyQiwyQkFBMkI7SUFDM0IsaUVBQXFCLENBQUE7SUFFckIsNkJBQTZCO0lBQzdCLG1FQUFz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Qix5RUFBMEIsQ0FBQTtJQUUxQixvQ0FBb0M7SUFDcEMsNkZBQW9DLENBQUE7SUFFcEMsb0NBQW9DO0lBQ3BDLDZGQUFvQyxDQUFBO0lBRXBDLDBCQUEwQjtJQUMxQix5RkFBa0MsQ0FBQTtJQUVsQywrQkFBK0I7SUFDL0IsdUZBQWlDLENBQUE7SUFFakMsZ0NBQWdDO0lBQ2hDLHVGQUFpQyxDQUFBO0lBRWpDLGlDQUFpQztJQUNqQyx5RkFBa0MsQ0FBQTtBQUV0QyxDQUFDLEVBMzJCVyxTQUFTLEtBQVQsU0FBUyxRQTIyQnBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBMaXN0IG9mIHN5c3RlbSBlcnJvciBjb2RlcyBcbiovXG5leHBvcnQgZW51bSBFcnJvckNvZGUge1xuIFxuICAgIC8vIFN1Y2Nlc3MgKE5vIEVycm9yKSBcbiAgICBTVUNDRVNTID0gMCxcbiBcbiAgICAvLyBVbmV4cGVjdGVkIGdlbmVyYWwgZXJyb3IgXG4gICAgVW5leHBlY3RlZEVycm9yID0gMSxcbiBcbiAgICAvLyBOb3QgSW1wbGVtZW50ZWQgXG4gICAgTm90SW1wbGVtZW50ZWRFcnJvciA9IDIsXG4gXG4gICAgLy8gRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWQgXG4gICAgRGJFcnJDb25uZWN0aW9uRmFpbGVkID0gMTA1LFxuIFxuICAgIC8vIERhdGFiYXNlIGdlbmVyYWwgZXJyb3IgXG4gICAgRGJFcnIgPSAxMDAsXG4gXG4gICAgLy8gTm8gcmVjb3JkcyBmZXRjaGVkIFxuICAgIERiRXJyTm9Sb3dzRmV0Y2hlZCA9IDEwMSxcbiBcbiAgICAvLyBObyByZWNvcmRzIGFmZmVjdGVkIFxuICAgIERiRXJyTm9Sb3dzQWZmZWN0ZWQgPSAxMDIsXG4gXG4gICAgLy8gVHJ5aW5nIHRvIGluc2VydCByZWNvcmQgd2l0aCBkdXBsaWNhdGUga2V5IFxuICAgIERiRXJyRHVwbGljYXRlS2V5ID0gMTAzLFxuIFxuICAgIC8vIFRyeWluZyB0byBzYXZlIGVudGl0eSB3aXRoIGVtcHR5IElkIFxuICAgIERiQXBwRXJyRW1wdHlFbnRpdHlJZFBhc3NlZCA9IDEwNCxcbiBcbiAgICAvLyBFbGFzdGljc2VhcmNoIGNvbm5lY3Rpb24gZmFpbGVkIFxuICAgIEVsYXN0aWNDb25uZWN0aW9uRmFpbGVkID0gMTIwLFxuIFxuICAgIC8vIEVsYXN0aWNzZWFyY2ggZ2VuZXJhbCBlcnJvciBcbiAgICBFbGFzdGljRXJyID0gMTIxLFxuIFxuICAgIC8vIFJlZGlzIGdlbmVyYWwgZXJyb3IgXG4gICAgUmVkaXNFcnIgPSAyMDAsXG4gXG4gICAgLy8gUmVkaXMgY29ubmVjdGlvbiBmYWlsZWQgXG4gICAgUmVkaXNFcnJDb25uZWN0aW9uRmFpbGVkID0gMjAxLFxuIFxuICAgIC8vIEhTZXQga2V5IG9wZXJhdGlvbiBlcnJvciBcbiAgICBSZWRpc0VyckhTZXQgPSAyMDIsXG4gXG4gICAgLy8gSEdldCBrZXkgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySEdldCA9IDIwMyxcbiBcbiAgICAvLyBObyBwaW5nIHRvIFJlZGlzIFxuICAgIFJlZGlzRXJyUGluZyA9IDIwNCxcbiBcbiAgICAvLyBIU2V0IHdpdGggZXhwaXJhdGlvbiBlcnJvciBcbiAgICBSZWRpc0VyckhTZXRXaXRoRXhwID0gMjA1LFxuIFxuICAgIC8vIEhEZWwgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySERlbCA9IDIwNixcbiBcbiAgICAvLyBSUG9wIG9wZXJhdGlvbiBlcnJvciBcbiAgICBSZWRpc0VyclJQb3AgPSAyMDcsXG4gXG4gICAgLy8gUlB1c2ggb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyUlB1c2ggPSAyMDgsXG4gXG4gICAgLy8gUHVibGlzaCBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJQdWJsaXNoID0gMjA5LFxuIFxuICAgIC8vIEdldCBBbGwgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySEdldEFsbCA9IDIxMCxcbiBcbiAgICAvLyBGbHVzaCBBbGwgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyRmx1c2hBbGwgPSAyMTEsXG4gXG4gICAgLy8gQlJQb3Agb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyQlJQb3AgPSAyMTIsXG4gXG4gICAgLy8gU2V0IEtleSBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJTZXRLZXkgPSAyMTMsXG4gXG4gICAgLy8gR2V0IGtleSBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJHZXRLZXkgPSAyMTQsXG4gXG4gICAgLy8gRGVsIGtleSBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJEZWxLZXkgPSAyMTUsXG4gXG4gICAgLy8gTUdldCBLZXkgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJyTUdldEtleSA9IDIxNixcbiBcbiAgICAvLyBLZXkgYWxyZWFkeSBleGlzdHMgXG4gICAgUmVkaXNFcnJFeGlzdHNLZXkgPSAyMTcsXG4gXG4gICAgLy8gSEtleSBhbHJlYWR5IGV4aXN0cyBcbiAgICBSZWRpc0VyckhFeGlzdHNLZXkgPSAyMTgsXG4gXG4gICAgLy8gSFNldCBOWCBvcGVyYXRpb24gZXJyb3IgXG4gICAgUmVkaXNFcnJIU2V0TlhLZXkgPSAyMTksXG4gXG4gICAgLy8gSEtleXMgb3BlcmF0aW9uIGVycm9yIFxuICAgIFJlZGlzRXJySEtleXNLZXkgPSAyMjAsXG4gXG4gICAgLy8gTWFpbCBVUkkgZXJyb3IgXG4gICAgTWFpbFVyaUVycm9yID0gMjMwLFxuIFxuICAgIC8vIFJlc3QgbWFpbCBjbGllbnQgZXJyb3IgXG4gICAgTWFpbFJlc3RTZW5kRXJyb3IgPSAyMzgsXG4gXG4gICAgLy8gU01UUCBtYWlsIGNsaWVudCBlcnJvciBcbiAgICBNYWlsU210cFNlbmRFcnJvciA9IDIzOSxcbiBcbiAgICAvLyBXZWIgc29ja2V0IGVycm9yIFxuICAgIFdlYlNvY2tldEVycm9yID0gMjQwLFxuIFxuICAgIC8vIEV4cG9ydCBmb3JtYXQgZXJyb3IgKG5vdCBzdXBwb3J0ZWQpIFxuICAgIEV4cG9ydEZvcm1hdEVycm9yID0gMjUwLFxuIFxuICAgIC8vIEV4cG9ydCB0byBKU09OIGVycm9yIFxuICAgIEV4cG9ydEpzb25FcnJvciA9IDI1MSxcbiBcbiAgICAvLyBFeHBvcnQgdG8gQ1NWIGVycm9yIFxuICAgIEV4cG9ydENzdkVycm9yID0gMjUyLFxuIFxuICAgIC8vIEV4cG9ydCB0byBYTUwgZXJyb3IgXG4gICAgRXhwb3J0WG1sRXJyb3IgPSAyNTMsXG4gXG4gICAgLy8gQVdTIFMzIGNvbm5lY3Rpb24gZXJyb3IgXG4gICAgQXdzUzNOb3RJbml0aWFsaXplZCA9IDQwMCxcbiBcbiAgICAvLyBBV1MgZmFpbGVkIHRvIGNyZWF0ZSBzZXNzaW9uIFxuICAgIEF3c0NyZWF0ZVNlc3Npb25FcnIgPSA0MDEsXG4gXG4gICAgLy8gQVdTIFMzIGdlbmVyYWwgZXJyb3IgXG4gICAgQXdzUzNFcnIgPSA0MTAsXG4gXG4gICAgLy8gQVdTIFMzIGJ1Y2tldCBuYW1lIG5vdCBwcm92aWRlZCBcbiAgICBBd3NTM05vTmFtZVByb3ZpZGVkRXJyID0gNDExLFxuIFxuICAgIC8vIEFXUyBTMyByZWdpb24gbm90IHByb3ZpZGVkIFxuICAgIEF3c1MzTm9SZWdpb25Qcm92aWRlZEVyciA9IDQxMixcbiBcbiAgICAvLyBBV1MgUzMgd3JvbmcgY3JlZGVudGlhbHMgXG4gICAgQXdzUzNDcmVkZW50aWFsc0VyciA9IDQxMyxcbiBcbiAgICAvLyBBV1MgZmFpbCB0byBjcmVhdGUgcHJlLXNpZ25lZCBVUkwgXG4gICAgQXdzRmFpbFRvUHJlc2lnblVybEVycm9yID0gNDE0LFxuIFxuICAgIC8vIEdlbmVyYWwgSnNvbiBtYXJzaGFsIGVycm9yIFxuICAgIEpzb25FcnIgPSA1MDAsXG4gXG4gICAgLy8gR2VuZXJhbCBYTUwgZXJyb3IgXG4gICAgWG1sRXJyID0gNTAxLFxuIFxuICAgIC8vIElucHV0IHBhcmFtZXRlcnMgZXJyb3IgXG4gICAgQmFkSW5wdXQgPSA1MDksXG4gXG4gICAgLy8gRXJyb3IgZW5jb2RpbmcgdG8gQmFzZTY0IFxuICAgIEJhc2U2NEVDb2RlY0VyciA9IDUxMCxcbiBcbiAgICAvLyBabGliIGVycm9yIFxuICAgIFpsaWJFcnIgPSA1MjAsXG4gXG4gICAgLy8gR2VuZXJhbCBJTyBlcnJvciBcbiAgICBJb0VyciA9IDUzMCxcbiBcbiAgICAvLyBDYW4ndCBwYXJzZSBVUkwgXG4gICAgVXJsUGFyc2VFcnIgPSA1NDAsXG4gXG4gICAgLy8gQUVTIGVuY3J5cHRpb24gZXJyb3IgXG4gICAgQUVTRW5jcnlwdEVyciA9IDU0MSxcbiBcbiAgICAvLyBObyBtZXNzYWdlIGZhY3RvcnkgcHJvdmlkZWQgXG4gICAgV3NOb01lc3NhZ2VGYWN0b3J5Rm91bmQgPSA1NDIsXG4gXG4gICAgLy8gR2VuZXJhbCBPUyBmaWxlIHN5c3RlbSBlcnJvciBcbiAgICBPc0ZpbGVTeXN0ZW1FcnIgPSA2MDAsXG4gXG4gICAgLy8gVW5rbm93biAodW5zdXBwb3J0ZWQpIHN0b3JhZ2UgdHlwZSBcbiAgICBVbmtub3duU3RvcmFnZVNwZWNpZmllZCA9IDYwMSxcbiBcbiAgICAvLyBVbmtub3duICh1bnN1cHBvcnRlZCkgb2JqZWN0IHN0b3JhZ2UgdHlwZSBcbiAgICBOb09iamVjdFN0b3JhZ2VTcGVjaWZpZWQgPSA2MDIsXG4gXG4gICAgLy8gQ2FuJ3Qgb3BlbiB0ZW1wIGZpbGUgXG4gICAgT3BlblRlbXBGaWxlRm9yRXZlbnRJbWFnZUVycm9yID0gNjAzLFxuIFxuICAgIC8vIENhbid0IHdyaXRlIHRlbXAgZmlsZSBcbiAgICBXcml0ZVRlbXBGaWxlRm9yRXZlbnRJbWFnZUVycm9yID0gNjA0LFxuIFxuICAgIC8vIEZpbGUgbm90IGZvdW5kIFxuICAgIEZpbGVOb3RGb3VuZCA9IDYwNSxcbiBcbiAgICAvLyBDYW4ndCBvcGVuIGZpbGUgXG4gICAgT3BlbkZpbGVFcnJvciA9IDYwNixcbiBcbiAgICAvLyBDYW4ndCB3cml0ZSBmaWxlIFxuICAgIFdyaXRlRmlsZUVycm9yID0gNjA3LFxuIFxuICAgIC8vIFNlY3VyaXR5IHRva2VuIGVycm9yIFxuICAgIFNlY3VyaXR5VG9rZW5FcnJvciA9IDcwMCxcbiBcbiAgICAvLyBTZWN1cml0eSB0b2tlbiBub3QgcHJvdmlkZWQgXG4gICAgTm9TZWN1cml0eVRva2VuRm91bmQgPSA3MDEsXG4gXG4gICAgLy8gRW1wdHkgc2VjdXJpdHkgdG9rZW4gXG4gICAgRW1wdHlTZWN1cml0eVRva2VuID0gNzAyLFxuIFxuICAgIC8vIEVycm9yIGNyZWF0aW5nIEFQSSBrZXkgXG4gICAgRXJyb3JDcmVhdGVBcGlLZXkgPSA3MTAsXG4gXG4gICAgLy8gUGFpcmluZyBrZXkgKGZvciBkZXZpY2UpIG5vdCB2ZXJpZmllZCBcbiAgICBJbnZhbGlkUGFpcmluZ0tleVZlcmlmaWNhdGlvbiA9IC0xMDIsXG4gXG4gICAgLy8gSW52YWxpZCBkZXZpY2UgcGFpcmluZyBrZXkgXG4gICAgSW52YWxpZERldmljZVBhaXJpbmdLZXkgPSA3NTAsXG4gXG4gICAgLy8gUGFpcmluZyBkZXZpY2UgaW4gcHJvZ3Jlc3MgXG4gICAgRGV2aWNlUGFpcmluZ0luUHJvZ3Jlc3MgPSAtNzAxLFxuIFxuICAgIC8vIFBhaXJpbmcga2V5IHJlamVjdGVkIFxuICAgIERldmljZVBhaXJpbmdSZWplY3RlZCA9IC03MDIsXG4gXG4gICAgLy8gTm90IGEgdmlydHVhbCBkZXZpY2UgXG4gICAgTm90VmlydHVhbERldmljZSA9IDc1MyxcbiBcbiAgICAvLyBEZXZpY2UgaGFzIGF0dGFjaGVkIHNlbnNvcnMgXG4gICAgRGV2aWNlSGFzQXNzb2NpYXRlZFNlbnNvcnMgPSA3NTQsXG4gXG4gICAgLy8gU3RyZWFtaW5nIGNvbm5lY3Rpb24gZXJyb3IgXG4gICAgU3RyZWFtQ29ubmVjdEVycm9yID0gODAwLFxuIFxuICAgIC8vIFN0cmVhbWluZyB0b3BpYyBlcnJvciBcbiAgICBTdHJlYW1Ub3BpY0Vycm9yID0gODAxLFxuIFxuICAgIC8vIFN0cmVhbWluZyBzdWJzY3JpYmVyIGVycm9yIFxuICAgIFN0cmVhbVN1YnNjcmliZXJFcnJvciA9IDgwMixcbiBcbiAgICAvLyBTdHJlYW1pbmcgVVJJIG5vdCBwcm92aWRlZCBcbiAgICBTdHJlYW1Ob1Byb3ZpZGVyVXJpU3BlY2lmaWVkID0gODAzLFxuIFxuICAgIC8vIFN0cmVhbSBQVVQgZXJyb3IgXG4gICAgU3RyZWFtUHV0RGF0YUVycm9yID0gODUwLFxuIFxuICAgIC8vIEthZmthIGNyZWF0ZSBwcm9kdWNlciBlcnJvciBcbiAgICBLYWZrYUNyZWF0ZVByb2R1Y2VyRXJyb3IgPSA4ODAsXG4gXG4gICAgLy8gS2Fma2EgY3JlYXRlIGNvbnN1bWVyIGVycm9yIFxuICAgIEthZmthQ3JlYXRlQ29uc3VtZXJFcnJvciA9IDg4MSxcbiBcbiAgICAvLyBLYWZrYSBnZXQgbWV0YWRhdGEgZXJyb3IgXG4gICAgS2Fma2FHZXRNZXRhZGF0YUVycm9yID0gODgyLFxuIFxuICAgIC8vIEthZmthIHJlYWQgbWVzc2FnZSBlcnJvciBcbiAgICBLYWZrYVJlYWRNZXNzYWdlRXJyb3IgPSA4ODMsXG4gXG4gICAgLy8gS2Fma2EgcmVhZCBtZXNzYWdlIHRpbWVvdXQgXG4gICAgS2Fma2FSZWFkTWVzc2FnZVRpbWVvdXQgPSA4ODQsXG4gXG4gICAgLy8gRGVjb2RlIHRvIEpQRUcgWVVWIGZhaWxlZCBcbiAgICBJbWFnaW5nRGVjb2RlVG9KcGVnWVVWRXJyb3IgPSA5MDAsXG4gXG4gICAgLy8gQ3JlYXRlIGltYWdlIGZpbGUgZXJyb3IgXG4gICAgSW1hZ2luZ0NyZWF0ZUltYWdlRmlsZUVycm9yID0gOTAxLFxuIFxuICAgIC8vIEVuY29kZSBKUEVHIGVycm9yIFxuICAgIEltYWdpbmdFbmNvZGVKcGVnRXJyb3IgPSA5MDIsXG4gXG4gICAgLy8gQm91bmRpbmcgYm94ZXMgbWlzc2luZyBcbiAgICBJbWFnaW5nTm9Cb3VuZGluZ0JveGVzID0gOTAzLFxuIFxuICAgIC8vIFByZXBhcmUgZnJhbWUgZm9yIGNsaXAgZXJyb3IgXG4gICAgQ2xpcEVyclByZXBhcmVGcmFtZXMgPSA5MDQsXG4gXG4gICAgLy8gRXZlbnQgaGFzIG5vIGZyYW1lcyBcbiAgICBDbGlwRXJyRXZlbnRIYXNOb0ZyYW1lcyA9IDkwNSxcbiBcbiAgICAvLyBIb3Jpem9udGFsIGxpbmUgZXJyb3IgXG4gICAgSW1hZ2luZ0hvcml6b250YWxMaW5lRXJyb3IgPSA5MDYsXG4gXG4gICAgLy8gVmVydGljYWwgbGluZSBlcnJvciBcbiAgICBJbWFnaW5nVmVydGljYWxpbmVFcnJvciA9IDkwNyxcbiBcbiAgICAvLyBQb3N0IHdlYi1ob29rIGludGVncmF0aW9uIGVycm9yIFxuICAgIFBvc3RXZWJob29rRXJyb3IgPSA5MjEsXG4gXG4gICAgLy8gQ3JlYXRlIEhUVFAgcmVxdWVzdCBmYWlsZWQgXG4gICAgQ3JlYXRlSHR0cFJlcXVlc3RFcnJvciA9IDkyMixcbiBcbiAgICAvLyBTZW5kIEhUVFAgcmVxdWVzdCBmYWlsZWQgXG4gICAgU2VuZEh0dHBSZXF1ZXN0RXJyb3IgPSA5MjMsXG4gXG4gICAgLy8gUmV0cnkgaW50ZWdyYXRpb24gZXJyb3IgXG4gICAgQ2FuUmV0cnlJbnRlZ3JhdGlvbkVycm9yID0gOTI0LFxuIFxuICAgIC8vIElsbGVnYWwgZXZlbnQgbWVzc2FnZSBcbiAgICBJbGxlZ2FsRXZlbnRNZXNzYWdlRXJyb3IgPSA5MjUsXG4gXG4gICAgLy8gRmFpbCB0byBzZW5kIFNNVFAgbWVzc2FnZSBcbiAgICBTbXRwU2VuZE1haWxFcnJvciA9IDkzMCxcbiBcbiAgICAvLyBJbnZhbGlkIGFnZW50IGxvZ2luIGtleSBcbiAgICBBcHBFcnJJbnZhbGlkTG9naW5LZXkgPSAyMDExMSxcbiBcbiAgICAvLyBBZ2VudCBkb2VzIG5vdCBleGlzdCBcbiAgICBBcHBFcnJBZ2VudERvZXNudEV4aXN0ID0gMjAxMTIsXG4gXG4gICAgLy8gRW1wdHkgYWdlbnQgbG9naW4ga2V5IFxuICAgIEFwcEVyckVtcHR5TG9naW5LZXkgPSAyMDExMyxcbiBcbiAgICAvLyBFbXB0eSBhZ2VudCBJZCBcbiAgICBBcHBFcnJFbXB0eUFnZW50SWQgPSAyMDExNCxcbiBcbiAgICAvLyBFbXB0eSBhY2NvdW50IElkIFxuICAgIEFwcEVyckVtcHR5QWNjb3VudElkID0gMjAxMTUsXG4gXG4gICAgLy8gRW1wdHkgc2Vuc29yIElkIFxuICAgIEFwcEVyckVtcHR5U2Vuc29ySWQgPSAyMDExNixcbiBcbiAgICAvLyBHZXQgc2Vuc29yIGluZm8gZmFpbGVkIFxuICAgIEFwcEVyckdldFNlbnNvckluZm8gPSAyMDExNyxcbiBcbiAgICAvLyBHZXQgYWNjb3VudCBpbmZvIGZhaWxlZCBcbiAgICBBcHBFcnJHZXRBY2NvdW50SW5mbyA9IDIwMTE4LFxuIFxuICAgIC8vIEdldCBmb2xkZXIgSW5mbyBmYWlsZWQgXG4gICAgQXBwRXJyR2V0Rm9sZGVySW5mbyA9IDIwMTE5LFxuIFxuICAgIC8vIEdldCBydWxlIGluZm8gZmFpbGVkIFxuICAgIEFwcEVyckdldFJ1bGVJbmZvID0gMjAxMjAsXG4gXG4gICAgLy8gRW50aXR5IG5vdCBmb3VuZCBcbiAgICBFbnRpdHlOb3RGb3VuZCA9IDEwMDAwLFxuIFxuICAgIC8vIExvZ2luIGVycm9yIChpbnZhbGlkIHVzZXIgSWRlbnRpdHkpIFxuICAgIExvZ2luRXJySW52YWxpZFVpZCA9IDEwMDAxLFxuIFxuICAgIC8vIExvZ2luIGVycm9yIChpbnZhbGlkIGRldmljZSBpZGVudGl0eSkgXG4gICAgTG9naW5FcnJJbnZhbGlkQWlkID0gMTAwMDIsXG4gXG4gICAgLy8gTG9naW4ga2V5IGV4cGlyZWQgXG4gICAgTG9naW5LZXlFeHBpcmVkID0gMTAwMDMsXG4gXG4gICAgLy8gSW52YWxpZCB2ZXJpZmljYXRpb24gXG4gICAgSW52YWxpZFZlcmlmaWNhdGlvbiA9IDEwMDA0LFxuIFxuICAgIC8vIEludmFsaWQgZW1haWwgYWRkcmVzcyBcbiAgICBJbnZhbGlkRW1haWxBZGRyZXNzID0gMTAwMDUsXG4gXG4gICAgLy8gVXNlciBpcyBzdXNwZW5kZWQgXG4gICAgU3VzcGVuZGVkVXNlciA9IDEwMDA2LFxuIFxuICAgIC8vIFVzZXIgaXMgYmxvY2tlZCBcbiAgICBCbG9ja2VkVXNlciA9IDEwMDA3LFxuIFxuICAgIC8vIENhbid0IGRlbGV0ZSBTeXN0ZW0gQWRtaW5pc3RyYXRvciBcbiAgICBEZWxldGVTeXNBZG1pbiA9IDEwMDA4LFxuIFxuICAgIC8vIEFjY2VzcyBkZW5pZWQgXG4gICAgQWNjZXNzRGVuaWVkID0gMTAwMDksXG4gXG4gICAgLy8gRW1haWwgYWRkcmVzcyBhbHJlYWR5IGV4aXN0cyBcbiAgICBFbWFpbEFkZHJlc3NFeGlzdHMgPSAxMDAxMCxcbiBcbiAgICAvLyBJbnZhbGlkIGFjY2VzcyB0b2tlbiBcbiAgICBJbnZhbGlkQWNjZXNzVG9rZW4gPSAxMDAxMSxcbiBcbiAgICAvLyBHZW5lcmFsIHRva2VuIGVycm9yIFxuICAgIFRva2VuRXJyb3IgPSAxMDAyMCxcbiBcbiAgICAvLyBHZW5lcmF0ZSBkZXBsb3ltZW50IElkIGVycm9yIFxuICAgIERlcGxveW1lbnRJZEVycm9yID0gMTAwMjEsXG4gXG4gICAgLy8gTGljZW5zZSBkb2VzIG5vdCBtYXRjaCB0aGUgY3VycmVudCBkZXBsb3ltZW50IFxuICAgIFdyb25nRGVwbG95bWVudElkID0gMTAwMjIsXG4gXG4gICAgLy8gTGljZW5zZSBleHBpcmVkIFxuICAgIExpY2Vuc2VFeHBpcmVkID0gMTAwMzAsXG4gXG4gICAgLy8gSW1wb3J0IGxpY2Vuc2Ugb3BlcmF0aW9uIGZhaWxlZCBcbiAgICBJbXBvcnRMaWNlbnNlRmFpbGVkID0gMTAwMzEsXG4gXG4gICAgLy8gVmVyaWZ5IGxpY2Vuc2UgZmFpbGVkIFxuICAgIFZlcmlmeUxpY2Vuc2VGYWlsZWQgPSAxMDAzMixcbiBcbiAgICAvLyBWZXJpZnkgZGVwbG95bWVudCBJZCBmYWlsZWQgXG4gICAgVmVyaWZ5RGVwbG95bWVudEZhaWxlZCA9IDEwMDMzLFxuIFxuICAgIC8vIExpY2Vuc2Ugbm90IGZvdW5kIFxuICAgIExpY2Vuc2VOb3RGb3VuZCA9IDEwMDM0LFxuIFxuICAgIC8vIEVuY29kZSBsaWNlbnNlIGZhaWxlZCBcbiAgICBFbmNvZGVMaWNlbnNlRmFpbGVkID0gMTAwMzUsXG4gXG4gICAgLy8gTGljZW5zZSBzZWFyY2ggZmFpbGVkIFxuICAgIExpY2Vuc2VTZWFyY2hGYWlsZWQgPSAxMDAzNixcbiBcbiAgICAvLyBMaWNlbnNlIGRlbGV0ZSBmYWlsZWQgXG4gICAgTGljZW5zZU5vdERlbGV0ZWQgPSAxMDAzNyxcbiBcbiAgICAvLyBVc2VyIG5vdCBmb3VuZCBcbiAgICBVc2VyTm90Rm91bmQgPSAxMDA0MCxcbiBcbiAgICAvLyBVc2VyIGNyZWF0ZSBmYWlsZWQgXG4gICAgVXNlck5vdENyZWF0ZWQgPSAxMDA0MSxcbiBcbiAgICAvLyBVc2VyIHVwZGF0ZSBmYWlsZWQgXG4gICAgVXNlck5vdFVwZGF0ZWQgPSAxMDA0MixcbiBcbiAgICAvLyBVc2VyIGRlbGV0ZSBmYWlsZWQgXG4gICAgVXNlck5vdERlbGV0ZWQgPSAxMDA0MyxcbiBcbiAgICAvLyBVc2VyIHNlYXJjaCBmYWlsZWQgXG4gICAgVXNlclNlYXJjaEZhaWxlZCA9IDEwMDQ0LFxuIFxuICAgIC8vIFVzZXIgd2l0aG91dCByb2xlIFxuICAgIFVzZXJXaXRob3V0Um9sZSA9IDEwMDQ1LFxuIFxuICAgIC8vIFVzZXIgaW52aXRhdGlvbiBmYWlsZWQgXG4gICAgVXNlckludml0YXRpb25GYWlsZWQgPSAxMDA0NixcbiBcbiAgICAvLyBTZXJ2aWNlIEFjY291bnQgY3JlYXRlIGZhaWxlZCBcbiAgICBTZXJ2aWNlQWNjb3VudE5vdENyZWF0ZWQgPSAxMDA1MSxcbiBcbiAgICAvLyBBY2NvdW50IG5vdCBmb3VuZCBcbiAgICBBY2NvdW50Tm90Rm91bmQgPSAxMDEwMCxcbiBcbiAgICAvLyBBY2NvdW50IGNyZWF0ZSBmYWlsZWQgXG4gICAgQWNjb3VudE5vdENyZWF0ZWQgPSAxMDEwMSxcbiBcbiAgICAvLyBBY2NvdW50IHVwZGF0ZSBmYWlsZWQgXG4gICAgQWNjb3VudE5vdFVwZGF0ZWQgPSAxMDEwMixcbiBcbiAgICAvLyBBY2NvdW50IGRlbGV0ZSBmYWlsZWQgXG4gICAgQWNjb3VudE5vdERlbGV0ZWQgPSAxMDEwMyxcbiBcbiAgICAvLyBXcm9uZyBBY2NvdW50IG5hbWUgXG4gICAgV3JvbmdBY2NvdW50TmFtZSA9IDEwMTA0LFxuIFxuICAgIC8vIFdyb25nIEFjY291bnQgdHlwZSBcbiAgICBXcm9uZ0FjY291bnRUeXBlID0gMTAxMDUsXG4gXG4gICAgLy8gV3JvbmcgQWNjb3VudCBzdGF0dXMgXG4gICAgV3JvbmdBY2NvdW50U3RhdHVzID0gMTAxMDYsXG4gXG4gICAgLy8gQWNjb3VudCBzZWFyY2ggZmFpbGVkIFxuICAgIEFjY291bnRTZWFyY2hGYWlsZWQgPSAxMDEwOSxcbiBcbiAgICAvLyBBY2NvdW50IG5vdCBhY2Nlc3NpYmxlIFxuICAgIEluYWNjZXNzaWJsZUFjY291bnQgPSAxMDExMCxcbiBcbiAgICAvLyBXcm9uZyBBY2NvdW50IFxuICAgIFVubWF0Y2hpbmdBY2NvdW50ID0gMTAxMTEsXG4gXG4gICAgLy8gQWNjb3VudCBsaWNlbnNlIGV4cGlyZWQgXG4gICAgRXhwaXJlZEFjY291bnQgPSAxMDExMixcbiBcbiAgICAvLyBBY2NvdW50IGFscmVhZHkgZXhpc3RzIFxuICAgIEFjY291bnRFeGlzdHMgPSAxMDExMyxcbiBcbiAgICAvLyBBY2NvdW50IG5hbWUgaXMgZW1wdHkgXG4gICAgRW1wdHlBY2NvdW50TmFtZSA9IDEwMTE0LFxuIFxuICAgIC8vIENhbid0IGRlbGV0ZSBTVVNQRU5ERUQgYWNjb3VudCBcbiAgICBEZWxldGVTdXNwZW5kZWRBY2NvdW50ID0gMTAxMTUsXG4gXG4gICAgLy8gQ2FuJ3QgZGVsZXRlIGFjY291bnQgIHdpdGggY29udGVudCBcbiAgICBEZWxldGVBY2NvdW50V2l0aENvbnRlbnQgPSAxMDExNixcbiBcbiAgICAvLyBDYW4ndCBkZWxldGUgUEVORElORyBhY2NvdW50IFxuICAgIFBlbmRpbmdEZWxldGVkQWNjb3VudCA9IDEwMTE3LFxuIFxuICAgIC8vIEZvbGRlciBub3QgZm91bmQgXG4gICAgRm9sZGVyTm90Rm91bmQgPSAxMDEyMCxcbiBcbiAgICAvLyBGb2xkZXIgY3JlYXRlIGZhaWxlZCBcbiAgICBGb2xkZXJOb3RDcmVhdGVkID0gMTAxMjEsXG4gXG4gICAgLy8gRm9sZGVyIHVwZGF0ZSBmYWlsZWQgXG4gICAgRm9sZGVyTm90VXBkYXRlZCA9IDEwMTIyLFxuIFxuICAgIC8vIEZvbGRlciBkZWxldGUgZmFpbGVkIFxuICAgIEZvbGRlck5vdERlbGV0ZWQgPSAxMDEyMyxcbiBcbiAgICAvLyBGb2xkZXIgc2VhcmNoIGZhaWxlZCBcbiAgICBGb2xkZXJTZWFyY2hGYWlsZWQgPSAxMDEyNCxcbiBcbiAgICAvLyBDYW4ndCBkZWxldGUgZm9sZGVyIHdpdGggY29udGVudCBcbiAgICBEZWxldGVGb2xkZXJXaXRoQ29udGVudCA9IDEwMTI1LFxuIFxuICAgIC8vIEdlby10cmFuc2Zvcm1hdGlvbiBlcnJvciBcbiAgICBHZW9UcmFuc2Zvcm1hdGlvbkVycm9yID0gMTAxMjgsXG4gXG4gICAgLy8gTG9hZCBnZW8tdHJhbnNmb3JtYXRpb24gZmFpbGVkIFxuICAgIExvYWRUcmFuc2Zvcm1hdGlvbkVycm9yID0gMTAxMjksXG4gXG4gICAgLy8gRmVhdHVyZXMgZ3JvdXAgbm90IGZvdW5kIFxuICAgIEdyb3VwTm90Rm91bmQgPSAxMDE0MCxcbiBcbiAgICAvLyBGZWF0dXJlcyBncm91cCBjcmVhdGUgZmFpbGVkIFxuICAgIEdyb3VwTm90Q3JlYXRlZCA9IDEwMTQxLFxuIFxuICAgIC8vIEZlYXR1cmVzIGdyb3VwIHVwZGF0ZSBmYWlsZWQgXG4gICAgR3JvdXBOb3RVcGRhdGVkID0gMTAxNDIsXG4gXG4gICAgLy8gRmVhdHVyZXMgZ3JvdXAgZGVsZXRlIGZhaWxlZCBcbiAgICBHcm91cE5vdERlbGV0ZWQgPSAxMDE0MyxcbiBcbiAgICAvLyBGZWF0dXJlcyBncm91cCBzZWFyY2ggZmFpbGVkIFxuICAgIEdyb3VwU2VhcmNoRmFpbGVkID0gMTAxNDQsXG4gXG4gICAgLy8gRmVhdHVyZXMgZ3JvdXAgYWxyZWFkeSBpbiB1c2UgYW5kIGNhbid0IGJlIGRlbGV0ZWQgXG4gICAgR3JvdXBJblVzZUJ5QWNjb3VudCA9IDEwMTQ1LFxuIFxuICAgIC8vIEZlYXR1cmUgbm90IGZvdW5kIFxuICAgIEZlYXR1cmVOb3RGb3VuZCA9IDEwMTQ2LFxuIFxuICAgIC8vIERldmljZSBub3QgZm91bmQgXG4gICAgRGV2aWNlTm90Rm91bmQgPSAxMDE2MCxcbiBcbiAgICAvLyBEZXZpY2UgY3JlYXRlIGZhaWxlZCBcbiAgICBEZXZpY2VOb3RDcmVhdGVkID0gMTAxNjEsXG4gXG4gICAgLy8gRGV2aWNlIHVwZGF0ZSBmYWlsZWQgXG4gICAgRGV2aWNlTm90VXBkYXRlZCA9IDEwMTYyLFxuIFxuICAgIC8vIERldmljZSBkZWxldGUgZmFpbGVkIFxuICAgIERldmljZU5vdERlbGV0ZWQgPSAxMDE2MyxcbiBcbiAgICAvLyBEZXZpY2Ugc2VhcmNoIGZhaWxlZCBcbiAgICBEZXZpY2VTZWFyY2hGYWlsZWQgPSAxMDE2NCxcbiBcbiAgICAvLyBObyBkZXZpY2UgbWFuYWdlciBcbiAgICBNaXNzaW5nRGV2aWNlTWFuYWdlciA9IDEwMTY3LFxuIFxuICAgIC8vIE1vcmUgdGhhbiBvbmUgZGV2aWNlIG1hbmFnZXIgXG4gICAgTW9yZVRoYW5PbmVEZXZpY2VNYW5hZ2VyID0gMTAxNjgsXG4gXG4gICAgLy8gVmlydHVhbCBkZXZpY2UgcmVib290IGlzIG5vdCBhbGxvd2VkIFxuICAgIFZpcnR1YWxEZXZpY2VSZWJvb3QgPSAxMDE2OSxcbiBcbiAgICAvLyBWaXJ0dWFsIGRldmljZSByZWRlcGxveSBpcyBub3QgYWxsb3dlZCBcbiAgICBWaXJ0dWFsRGV2aWNlUmVkZXBsb3kgPSAxMDE3MCxcbiBcbiAgICAvLyBDb21tYW5kIG5vdCBmb3VuZCBcbiAgICBDb21tYW5kTm90Rm91bmQgPSAxMDE3NSxcbiBcbiAgICAvLyBDb21tYW5kIGZhaWxlZCBcbiAgICBDb21tYW5kRmFpbGVkID0gMTAxNzYsXG4gXG4gICAgLy8gQWdlbnQgbm90IGZvdW5kIFxuICAgIEFnZW50Tm90Rm91bmQgPSAxMDE4MCxcbiBcbiAgICAvLyBBZ2VudCBjcmVhdGUgZmFpbGVkIFxuICAgIEFnZW50Tm90Q3JlYXRlZCA9IDEwMTgxLFxuIFxuICAgIC8vIEFnZW50IHVwZGF0ZSBmYWlsZWQgXG4gICAgQWdlbnROb3RVcGRhdGVkID0gMTAxODIsXG4gXG4gICAgLy8gQWdlbnQgZGVsZXRlIGZhaWxlZCBcbiAgICBBZ2VudE5vdERlbGV0ZWQgPSAxMDE4MyxcbiBcbiAgICAvLyBBZ2VudCBzZWFyY2ggZmFpbGVkIFxuICAgIEFnZW50RmluZEZhaWxlZCA9IDEwMTg0LFxuIFxuICAgIC8vIERpZ2l0YWwgSU8gZGV2aWNlIG5vdCBmb3VuZCBcbiAgICBEaWdpdGFsSU9Ob3RGb3VuZCA9IDEwMTkwLFxuIFxuICAgIC8vIERpZ2l0YWwgSU8gZGV2aWNlIGNyZWF0ZSBmYWlsZWQgXG4gICAgRGlnaXRhbElPTm90Q3JlYXRlZCA9IDEwMTkxLFxuIFxuICAgIC8vIERpZ2l0YWwgSU8gZGV2aWNlIHVwZGF0ZSBmYWlsZWQgXG4gICAgRGlnaXRhbElPTm90VXBkYXRlZCA9IDEwMTkyLFxuIFxuICAgIC8vIERpZ2l0YWwgSU8gZGV2aWNlIGRlbGV0ZSBmYWlsZWQgXG4gICAgRGlnaXRhbElPTm90RGVsZXRlZCA9IDEwMTkzLFxuIFxuICAgIC8vIERpZ2l0YWwgSU8gZGV2aWNlIHNlYXJjaCBmYWlsZWQgXG4gICAgRGlnaXRhbElPU2VhcmNoRmFpbGVkID0gMTAxOTQsXG4gXG4gICAgLy8gU2Vuc29yIG5vdCBmb3VuZCBcbiAgICBTZW5zb3JOb3RGb3VuZCA9IDEwMjAwLFxuIFxuICAgIC8vIFNlbnNvciBjcmVhdGUgZmFpbGVkIFxuICAgIFNlbnNvck5vdENyZWF0ZWQgPSAxMDIwMSxcbiBcbiAgICAvLyBTZW5zb3IgdXBkYXRlIGZhaWxlZCBcbiAgICBTZW5zb3JOb3RVcGRhdGVkID0gMTAyMDIsXG4gXG4gICAgLy8gU2Vuc29yIGRlbGV0ZSBmYWlsZWQgXG4gICAgU2Vuc29yTm90RGVsZXRlZCA9IDEwMjAzLFxuIFxuICAgIC8vIFNlbnNvciBzZWFyY2ggZmFpbGVkIFxuICAgIFNlbnNvclNlYXJjaEZhaWxlZCA9IDEwMjA0LFxuIFxuICAgIC8vIENhbid0IGRlbGV0ZSBzZW5zb3Igbm90IGluIFBFTkRJTkcgREVMRVRFIHN0YXRlIFxuICAgIERlbGV0ZU5vblBlbmRpbmdTZW5zb3IgPSAxMDIwNSxcbiBcbiAgICAvLyBTZW5zb3JzIGV4Y2VlZGVkIGxpY2Vuc2UgbGltaXQgXG4gICAgRXhjZWVkTWF4TGljZW5zZUNoYW5uZWxzID0gMTAyMDcsXG4gXG4gICAgLy8gU2Vuc29ycyBleGNlZWRlZCBhY2NvdW50IGxpbWl0IFxuICAgIEV4Y2VlZE1heEFjY291bnRDaGFubmVscyA9IDEwMjA4LFxuIFxuICAgIC8vIFNlbnNvciBhbHJlYWR5IGF0dGFjaGVkIHRvIGEgZGV2aWNlIFxuICAgIFNlbnNvckFscmVhZHlBdHRhY2hlZCA9IDEwMjA5LFxuIFxuICAgIC8vIFNlbnNvciBpcyBub3QgaW4gc3VzcGVuZGVkIHN0YXRlIFxuICAgIFNlbnNvcklzTm90U3VzcGVuZGVkID0gMTAyMTAsXG4gXG4gICAgLy8gU2Vuc29yIGlzIG5vdCByZWNvcmRpbmcgXG4gICAgU2Vuc29ySXNOb3RSZWNvcmRpbmcgPSAxMDIxMSxcbiBcbiAgICAvLyBSdWxlIG5vdCBmb3VuZCBcbiAgICBSdWxlTm90Rm91bmQgPSAxMDIyMCxcbiBcbiAgICAvLyBSdWxlIGNyZWF0ZSBmYWlsZWQgXG4gICAgUnVsZU5vdENyZWF0ZWQgPSAxMDIyMSxcbiBcbiAgICAvLyBSdWxlIHVwZGF0ZSBmYWlsZWQgXG4gICAgUnVsZU5vdFVwZGF0ZWQgPSAxMDIyMixcbiBcbiAgICAvLyBSdWxlIGRlbGV0ZSBmYWlsZWQgXG4gICAgUnVsZU5vdERlbGV0ZWQgPSAxMDIyMyxcbiBcbiAgICAvLyBSdWxlIHNlYXJjaCBmYWlsZWQgXG4gICAgUnVsZVNlYXJjaEZhaWxlZCA9IDEwMjI0LFxuIFxuICAgIC8vIFJ1bGUgZW5hYmxlL2Rpc2FibGUgb3BlcmF0aW9uIGZhaWxlZCBcbiAgICBSdWxlRW5hYmxlRmFpbGVkID0gMTAyMjUsXG4gXG4gICAgLy8gUnVsZSBwYXVzZSBhbmFseXRpY3Mgb3BlcmF0aW9uIGZhaWxlZCBcbiAgICBSdWxlUGF1c2VGYWlsZWQgPSAxMDIyNixcbiBcbiAgICAvLyBSdWxlIHJlc3VtZSBhbmFseXRpY3Mgb3BlcmF0aW9uIGZhaWxlZCBcbiAgICBSdWxlUmVzdW1lRmFpbGVkID0gMTAyMjcsXG4gXG4gICAgLy8gQ2FsZW5kYXIgbm90IGZvdW5kIFxuICAgIENhbGVuZGFyTm90Rm91bmQgPSAxMDMwMCxcbiBcbiAgICAvLyBDYWxlbmRhciBjcmVhdGUgZmFpbGVkIFxuICAgIENhbGVuZGFyTm90Q3JlYXRlZCA9IDEwMzAxLFxuIFxuICAgIC8vIENhbGVuZGFyIHVwZGF0ZSBmYWlsZWQgXG4gICAgQ2FsZW5kYXJOb3RVcGRhdGVkID0gMTAzMDIsXG4gXG4gICAgLy8gQ2FsZW5kYXIgZGVsZXRlIGZhaWxlZCBcbiAgICBDYWxlbmRhck5vdERlbGV0ZWQgPSAxMDMwMyxcbiBcbiAgICAvLyBDYWxlbmRhciBzZWFyY2ggZmFpbGVkIFxuICAgIENhbGVuZGFyU2VhcmNoRmFpbGVkID0gMTAzMDQsXG4gXG4gICAgLy8gQ2FsZW5kYXIgaW1wb3J0IG9wZXJhdGlvbiBmYWlsZWQgXG4gICAgSW1wb3J0Q2FsZW5kYXJGYWlsZWQgPSAxMDMwNSxcbiBcbiAgICAvLyBTY2hlZHVsZSBub3QgZm91bmQgXG4gICAgU2NoZWR1bGVOb3RGb3VuZCA9IDEwMzIwLFxuIFxuICAgIC8vIFNjaGVkdWxlIGNyZWF0ZSBmYWlsZWQgXG4gICAgU2NoZWR1bGVOb3RDcmVhdGVkID0gMTAzMjEsXG4gXG4gICAgLy8gU2NoZWR1bGUgdXBkYXRlIGZhaWxlZCBcbiAgICBTY2hlZHVsZU5vdFVwZGF0ZWQgPSAxMDMyMixcbiBcbiAgICAvLyBTY2hlZHVsZSBkZWxldGUgZmFpbGVkIFxuICAgIFNjaGVkdWxlTm90RGVsZXRlZCA9IDEwMzIzLFxuIFxuICAgIC8vIFNjaGVkdWxlIHNlYXJjaCBmYWlsZWQgXG4gICAgU2NoZWR1bGVTZWFyY2hGYWlsZWQgPSAxMDMyNCxcbiBcbiAgICAvLyBTY2hlZHVsZSBsaW5rZWQgdG8gZXhpc3RpbmcgcnVsZXMgYW5kIGNhbid0IGJlIGRlbGV0ZWQgXG4gICAgU2NoZWR1bGVMaW5rZWRUb1J1bGVzID0gMTAzMjUsXG4gXG4gICAgLy8gUmVwb3J0IG5vdCBmb3VuZCBcbiAgICBSZXBvcnROb3RGb3VuZCA9IDEwMzMwLFxuIFxuICAgIC8vIFJlcG9ydCBjcmVhdGUgZmFpbGVkIFxuICAgIFJlcG9ydE5vdENyZWF0ZWQgPSAxMDMzMSxcbiBcbiAgICAvLyBSZXBvcnQgdXBkYXRlIGZhaWxlZCBcbiAgICBSZXBvcnROb3RVcGRhdGVkID0gMTAzMzIsXG4gXG4gICAgLy8gUmVwb3J0IGRlbGV0ZSBmYWlsZWQgXG4gICAgUmVwb3J0Tm90RGVsZXRlZCA9IDEwMzMzLFxuIFxuICAgIC8vIFJlcG9ydCBzZWFyY2ggZmFpbGVkIFxuICAgIFJlcG9ydFNlYXJjaEZhaWxlZCA9IDEwMzM0LFxuIFxuICAgIC8vIFBlb3BsZSBjb3VudGluZyByZXBvcnQgZmFpbGVkIFxuICAgIFJlcG9ydFBlb3BsZUNvdW50aW5nRmFpbGVkID0gMTAzMzUsXG4gXG4gICAgLy8gVHJhZmZpYyBhbmFseXNpcyByZXBvcnQgZmFpbGVkIFxuICAgIFJlcG9ydFRyYWZmaWNBbmFseXNpc0ZhaWxlZCA9IDEwMzM2LFxuIFxuICAgIC8vIFNjaGVkdWxlZCBSZXBvcnQgbm90IGZvdW5kIFxuICAgIFNjaGVkdWxlZFJlcG9ydE5vdEZvdW5kID0gMTAzNDAsXG4gXG4gICAgLy8gU2NoZWR1bGVkIFJlcG9ydCBjcmVhdGUgZmFpbGVkIFxuICAgIFNjaGVkdWxlZFJlcG9ydE5vdENyZWF0ZWQgPSAxMDM0MSxcbiBcbiAgICAvLyBTY2hlZHVsZWQgUmVwb3J0IHVwZGF0ZSBmYWlsZWQgXG4gICAgU2NoZWR1bGVkUmVwb3J0Tm90VXBkYXRlZCA9IDEwMzQyLFxuIFxuICAgIC8vIFNjaGVkdWxlZCBSZXBvcnQgZGVsZXRlIGZhaWxlZCBcbiAgICBTY2hlZHVsZWRSZXBvcnROb3REZWxldGVkID0gMTAzNDMsXG4gXG4gICAgLy8gU2NoZWR1bGVkIFJlcG9ydCBzZWFyY2ggZmFpbGVkIFxuICAgIFNjaGVkdWxlZFJlcG9ydFNlYXJjaEZhaWxlZCA9IDEwMzQ0LFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gbm90IGZvdW5kIFxuICAgIENvbmZpZ3VyYXRpb25Ob3RGb3VuZCA9IDEwMzYwLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gY3JlYXRlIGZhaWxlZCBcbiAgICBDb25maWd1cmF0aW9uTm90Q3JlYXRlZCA9IDEwMzYxLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gdXBkYXRlIGZhaWxlZCBcbiAgICBDb25maWd1cmF0aW9uTm90VXBkYXRlZCA9IDEwMzYyLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gZGVsZXRlIGZhaWxlZCBcbiAgICBDb25maWd1cmF0aW9uTm90RGVsZXRlZCA9IDEwMzYzLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gc2VhcmNoIGZhaWxlZCBcbiAgICBDb25maWd1cmF0aW9uU2VhcmNoRmFpbGVkID0gMTAzNjQsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB2ZXJzaW9uIG5vdCBmb3VuZCBcbiAgICBDb25maWdWZXJzaW9uTm90Rm91bmQgPSAxMDM3MCxcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHZlcnNpb24gY3JlYXRlIGZhaWxlZCBcbiAgICBDb25maWdWZXJzaW9uTm90Q3JlYXRlZCA9IDEwMzcxLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gdmVyc2lvbiB1cGRhdGUgZmFpbGVkIFxuICAgIENvbmZpZ1ZlcnNpb25Ob3RVcGRhdGVkID0gMTAzNzIsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB2ZXJzaW9uIGRlbGV0ZSBmYWlsZWQgXG4gICAgQ29uZmlnVmVyc2lvbk5vdERlbGV0ZWQgPSAxMDM3MyxcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHZlcnNpb24gc2VhcmNoIGZhaWxlZCBcbiAgICBDb25maWdWZXJzaW9uU2VhcmNoRmFpbGVkID0gMTAzNzQsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBub3QgZm91bmQgXG4gICAgQ29uZmlnVGVtcGxhdGVOb3RGb3VuZCA9IDEwMzgwLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gdGVtcGxhdGUgY3JlYXRlIGZhaWxlZCBcbiAgICBDb25maWdUZW1wbGF0ZU5vdENyZWF0ZWQgPSAxMDM4MSxcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHRlbXBsYXRlIHVwZGF0ZSBmYWlsZWQgXG4gICAgQ29uZmlnVGVtcGxhdGVOb3RVcGRhdGVkID0gMTAzODIsXG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiB0ZW1wbGF0ZSBkZWxldGUgZmFpbGVkIFxuICAgIENvbmZpZ1RlbXBsYXRlTm90RGVsZXRlZCA9IDEwMzgzLFxuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gdGVtcGxhdGUgc2VhcmNoIGZhaWxlZCBcbiAgICBDb25maWdUZW1wbGF0ZVNlYXJjaEZhaWxlZCA9IDEwMzg0LFxuIFxuICAgIC8vIEV2ZW50IG5vdCBmb3VuZCBcbiAgICBFdmVudE5vdEZvdW5kID0gMTA0MDAsXG4gXG4gICAgLy8gRXZlbnQgY3JlYXRlIGZhaWxlZCBcbiAgICBFdmVudE5vdENyZWF0ZWQgPSAxMDQwMSxcbiBcbiAgICAvLyBFdmVudCB1cGRhdGUgZmFpbGVkIFxuICAgIEV2ZW50Tm90VXBkYXRlZCA9IDEwNDAyLFxuIFxuICAgIC8vIEV2ZW50IGRlbGV0ZSBmYWlsZWQgXG4gICAgRXZlbnROb3REZWxldGVkID0gMTA0MDMsXG4gXG4gICAgLy8gRXZlbnQgc2VhcmNoIGZhaWxlZCBcbiAgICBFdmVudFNlYXJjaEZhaWxlZCA9IDEwNDA0LFxuIFxuICAgIC8vIEV2ZW50IHN0YXR1cyB1cGRhdGUgZmFpbGVkIFxuICAgIEV2ZW50U3RhdHVzTm90VXBkYXRlZCA9IDEwNDA1LFxuIFxuICAgIC8vIEV2ZW50IGltYWdlIHBhdGggdXBkYXRlIGZhaWxlZCBcbiAgICBFdmVudEltYWdlUGF0aE5vdFVwZGF0ZWQgPSAxMDQwNixcbiBcbiAgICAvLyBFdmVudCBjbGlwIHBhdGggdXBkYXRlIGZhaWxlZCBcbiAgICBFdmVudENsaXBQYXRoTm90VXBkYXRlZCA9IDEwNDA3LFxuIFxuICAgIC8vIEV2ZW50IGltYWdlIG9wZW4gZmFpbGVkIFxuICAgIEV2ZW50T3BlbkltYWdlRXJyb3IgPSAxMDQwOCxcbiBcbiAgICAvLyBFdmVudCBjbGlwIG9wZW4gZmFpbGVkIFxuICAgIEV2ZW50T3BlbkNsaXBFcnJvciA9IDEwNDA5LFxuIFxuICAgIC8vIEV2ZW50IGNvdW50IGVycm9yIFxuICAgIEV2ZW50Q291bnRFcnJvciA9IDEwNDEwLFxuIFxuICAgIC8vIEhlYWx0aCBldmVudCBub3QgZm91bmQgXG4gICAgSGVhbHRoRXZlbnROb3RGb3VuZCA9IDEwNDIwLFxuIFxuICAgIC8vIEhlYWx0aCBldmVudCBjcmVhdGUgZmFpbGVkIFxuICAgIEhlYWx0aEV2ZW50Tm90Q3JlYXRlZCA9IDEwNDIxLFxuIFxuICAgIC8vIEhlYWx0aCBldmVudCB1cGRhdGUgZmFpbGVkIFxuICAgIEhlYWx0aEV2ZW50Tm90VXBkYXRlZCA9IDEwNDIyLFxuIFxuICAgIC8vIEhlYWx0aCBldmVudCBkZWxldGUgZmFpbGVkIFxuICAgIEhlYWx0aEV2ZW50Tm90RGVsZXRlZCA9IDEwNDIzLFxuIFxuICAgIC8vIEhlYWx0aCBldmVudCBzZWFyY2ggZmFpbGVkIFxuICAgIEhlYWx0aEV2ZW50U2VhcmNoRmFpbGVkID0gMTA0MjQsXG4gXG4gICAgLy8gU2Vuc29yIHN0YXR1cyBub3QgZm91bmQgXG4gICAgU2Vuc29yU3RhdHVzTm90Rm91bmQgPSAxMDQzMCxcbiBcbiAgICAvLyBTZW5zb3Igc3RhdHVzIGNyZWF0ZSBmYWlsZWQgXG4gICAgU2Vuc29yU3RhdHVzTm90Q3JlYXRlZCA9IDEwNDMxLFxuIFxuICAgIC8vIFNlbnNvciBzdGF0dXMgc2VhcmNoIGZhaWxlZCBcbiAgICBTZW5zb3JTdGF0dXNTZWFyY2hGYWlsZWQgPSAxMDQzMyxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgbm90IGZvdW5kIFxuICAgIEludGVncmF0aW9uVGFyZ2V0Tm90Rm91bmQgPSAxMDUwMCxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgY3JlYXRlIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvblRhcmdldE5vdENyZWF0ZWQgPSAxMDUwMSxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgdXBkYXRlIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvblRhcmdldE5vdFVwZGF0ZWQgPSAxMDUwMixcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgZGVsZXRlIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvblRhcmdldE5vdERlbGV0ZWQgPSAxMDUwMyxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgc2VhcmNoIGZhaWxlZCBcbiAgICBJbnRlZ3JhdGlvblRhcmdldFNlYXJjaEZhaWxlZCA9IDEwNTA0LFxuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBoYXMgYWN0aW9ucyBcbiAgICBJbnRlZ3JhdGlvblRhcmdldEhhc0FjdGlvbnMgPSAxMDUwNSxcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgdHlwZSBub3Qgc3VwcG9ydGVkIFxuICAgIEludGVncmF0aW9uVGFyZ2V0Tm90U3VwcG9ydGVkID0gMTA1MDYsXG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIG5vdCBmb3VuZCBcbiAgICBJbnRlZ3JhdGlvbkFjdGlvbk5vdEZvdW5kID0gMTA1MTAsXG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIGNyZWF0ZSBmYWlsZWQgXG4gICAgSW50ZWdyYXRpb25BY3Rpb25Ob3RDcmVhdGVkID0gMTA1MTEsXG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIHVwZGF0ZSBmYWlsZWQgXG4gICAgSW50ZWdyYXRpb25BY3Rpb25Ob3RVcGRhdGVkID0gMTA1MTIsXG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIGRlbGV0ZSBmYWlsZWQgXG4gICAgSW50ZWdyYXRpb25BY3Rpb25Ob3REZWxldGVkID0gMTA1MTMsXG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIHNlYXJjaCBmYWlsZWQgXG4gICAgSW50ZWdyYXRpb25BY3Rpb25TZWFyY2hGYWlsZWQgPSAxMDUxNCxcbiBcbiAgICAvLyBBUEkgS2V5IG5vdCBmb3VuZCBcbiAgICBBcGlLZXlOb3RGb3VuZCA9IDEwNTIwLFxuIFxuICAgIC8vIEFQSSBLZXkgY3JlYXRlIGZhaWxlZCBcbiAgICBBcGlLZXlOb3RDcmVhdGVkID0gMTA1MjEsXG4gXG4gICAgLy8gQVBJIEtleSB1cGRhdGUgZmFpbGVkIFxuICAgIEFwaUtleU5vdFVwZGF0ZWQgPSAxMDUyMixcbiBcbiAgICAvLyBBUEkgS2V5IGRlbGV0ZSBmYWlsZWQgXG4gICAgQXBpS2V5Tm90RGVsZXRlZCA9IDEwNTIzLFxuIFxuICAgIC8vIEFQSSBLZXkgc2VhcmNoIGZhaWxlZCBcbiAgICBBcGlLZXlTZWFyY2hGYWlsZWQgPSAxMDUyNCxcbiBcbiAgICAvLyBTZWFyY2ggZmV0Y2ggcHJvY2VzcyBub3Qgc3RhcnRlZCBcbiAgICBTZWFyY2hTZXJ2aWNlRmV0Y2hOb3RTdGFydGVkID0gMTA2MDAsXG4gXG4gICAgLy8gU2VhcmNoIGZldGNoIHByb2Nlc3MgaW4gcHJvZ3Jlc3MgXG4gICAgU2VhcmNoU2VydmljZUZldGNoSW5Qcm9ncmVzcyA9IDEwNjAxLFxuIFxuICAgIC8vIFNlYXJjaCBpbWFnZSBub3QgZm91bmQgXG4gICAgU2VhcmNoU2VydmljZUltYWdlTm90Rm91bmQgPSAxMDYwMixcbiBcbiAgICAvLyBTZWFyY2ggc2VydmljZSBkaXNjb25uZWN0ZWQgXG4gICAgU2VhcmNoU2VydmljZURpc2Nvbm5lY3RlZCA9IDEwNjAzLFxuIFxuICAgIC8vIFNlYXJjaCBzZXJ2aWNlIHJlcXVlc3QgZXJyb3IgXG4gICAgU2VhcmNoU2VydmljZVJlcXVlc3RFcnJvciA9IDEwNjA0LFxuIFxuICAgIC8vIFNlYXJjaCBzZXJ2aWNlIHJlc3BvbnNlIGVycm9yIFxuICAgIFNlYXJjaFNlcnZpY2VSZXNwb25zZUVycm9yID0gMTA2MDUsXG4gXG59Il19