export declare enum SensorStateMask {
    SENSOR_OK = 0,
    LOW_FRAMERATE_WARN = 1,
    HIGH_FRAMERATE_WARN = 2,
    IMAGE_BLOCKED_WARN = 4,
    IMAGE_SATURATED_WARN = 8,
    IMAGE_DARK_WARN = 16,
    NO_COMM_ERROR = 65536,
    SENSOR_ERROR = 131072,
    SOURCE_ERROR = 262144,
    FORMAT_ERROR = 524288,
    RESOLUTION_ERROR = 1048576,
    CRITICAL_FRAMERATE_ERROR = 2097152,
    SOURCE_ERROR_RTSP_TIMEOUT = 4194304,
    SOURCE_ERROR_RTSP_NOT_SUPPORTED = 8388608,
    SOURCE_ERROR_CANT_DOWNLOAD_CLIP = 16777216,
    SOURCE_ERROR_RTSP_HOST_NOT_REACHABLE = 33554432,
    SOURCE_ERROR_AUTHENTICATION = 67108864,
    SOURCE_ERROR_ONVIF_NO_RTSP_URL = 134217728,
    SOURCE_ERROR_ONVIF_INVALID_RTSP_URL = 268435456,
    SOURCE_ERROR_BAD_URI = 536870912,
    SOURCE_ERROR_LARGE_FRAME_GAP = 1073741824
}
