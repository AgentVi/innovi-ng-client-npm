export declare enum SocketOpCode {
    Undefined = 0,
    EntitiesAdd = 1,
    EntitiesUpdate = 2,
    EntitiesDelete = 3,
    EntitiesRequest = 100,
    LiveRequest = 1010,
    PlaybackRequest = 1020,
    PauseRequest = 1021,
    EventsRequest = 1030,
    EventNotification = 1031,
    HealthEventNotification = 1032,
    ClosedHealthEventNotification = 1033,
    HealthRequest = 1040,
    HealthNotification = 1041,
    SSHOpen = 1101,
    SSHClose = 1102,
    SSHInput = 1103,
    SSHOutput = 1104
}
