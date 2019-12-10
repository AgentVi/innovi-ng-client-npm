/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { WebSocketMessageHeader } from '../messages/WebSocketMessageHeader';
/*
   @WebSocketMessage
   This message is pushed to the client upon any sensor health status change in the registered account
*/
export class SocketSensorStatusNotification extends WebSocketMessageHeader {
}
if (false) {
    /** @type {?} */
    SocketSensorStatusNotification.prototype.code;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.error;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.updatedOn;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.sensorId;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.mask;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.status;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.op;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.ver;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.id;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.cid;
    /** @type {?} */
    SocketSensorStatusNotification.prototype.sid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0U2Vuc29yU3RhdHVzTm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc29ja2V0cy9Tb2NrZXRTZW5zb3JTdGF0dXNOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7OztBQU01RSxNQUFNLE9BQU8sOEJBQStCLFNBQVEsc0JBQXNCO0NBb0N6RTs7O0lBakNHLDhDQUFvQjs7SUFHcEIsK0NBQXFCOztJQUdyQixtREFBeUI7O0lBR3pCLGtEQUF3Qjs7SUFHeEIsOENBQThCOztJQUc5QixnREFBZ0M7O0lBR2hDLDRDQUFrQjs7SUFHbEIsNkNBQW1COztJQUduQiw0Q0FBa0I7O0lBR2xCLDZDQUFtQjs7SUFHbkIsNkNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vuc29yU3RhdHVzTWFzayB9IGZyb20gJy4uL2VudW1zL1NlbnNvclN0YXR1c01hc2snO1xuaW1wb3J0IHsgU2Vuc29yU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgV2ViU29ja2V0TWVzc2FnZUhlYWRlciB9IGZyb20gJy4uL21lc3NhZ2VzL1dlYlNvY2tldE1lc3NhZ2VIZWFkZXInO1xuXG4vKiBcbiAgIEBXZWJTb2NrZXRNZXNzYWdlXG4gICBUaGlzIG1lc3NhZ2UgaXMgcHVzaGVkIHRvIHRoZSBjbGllbnQgdXBvbiBhbnkgc2Vuc29yIGhlYWx0aCBzdGF0dXMgY2hhbmdlIGluIHRoZSByZWdpc3RlcmVkIGFjY291bnQgXG4qL1xuZXhwb3J0IGNsYXNzIFNvY2tldFNlbnNvclN0YXR1c05vdGlmaWNhdGlvbiBleHRlbmRzIFdlYlNvY2tldE1lc3NhZ2VIZWFkZXIge1xuIFxuICAgIC8vIEVycm9yIGNvZGUgKDAgZm9yIHN1Y2Nlc3MpIFxuICAgIHB1YmxpYyBjb2RlOiBudW1iZXI7XG4gXG4gICAgLy8gRXJyb3IgbWVzc2FnZSAoaWYgZXJyb3Igb2NjdXJyZWQpIFxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xuIFxuICAgIC8vIFN0YXR1cyB1cGRhdGUgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBVcGRhdGVkIHN0YXR1cyBiaXQtbWFzayBcbiAgICBwdWJsaWMgbWFzazogU2Vuc29yU3RhdHVzTWFzaztcbiBcbiAgICAvLyBVcGRhdGVkIHN0YXR1cyBcbiAgICBwdWJsaWMgc3RhdHVzOiBTZW5zb3JTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyBvcDogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyB2ZXI6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgY2lkOiBudW1iZXI7XG4gXG4gICAgLy8gXG4gICAgcHVibGljIHNpZDogc3RyaW5nO1xuIFxuXG59XG5cblxuIl19