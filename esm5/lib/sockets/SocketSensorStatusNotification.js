/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { WebSocketMessageHeader } from '../messages/WebSocketMessageHeader';
/*
   @WebSocketMessage
   This message is pushed to the client upon any sensor health status change in the registered account
*/
var /*
   @WebSocketMessage
   This message is pushed to the client upon any sensor health status change in the registered account
*/
SocketSensorStatusNotification = /** @class */ (function (_super) {
    tslib_1.__extends(SocketSensorStatusNotification, _super);
    function SocketSensorStatusNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SocketSensorStatusNotification;
}(WebSocketMessageHeader));
/*
   @WebSocketMessage
   This message is pushed to the client upon any sensor health status change in the registered account
*/
export { SocketSensorStatusNotification };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0U2Vuc29yU3RhdHVzTm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc29ja2V0cy9Tb2NrZXRTZW5zb3JTdGF0dXNOb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7Ozs7QUFNNUU7Ozs7O0lBQW9ELDBEQUFzQjtJQUExRTs7SUFvQ0EsQ0FBQztJQUFELHFDQUFDO0FBQUQsQ0FBQyxBQXBDRCxDQUFvRCxzQkFBc0IsR0FvQ3pFOzs7Ozs7OztJQWpDRyw4Q0FBb0I7O0lBR3BCLCtDQUFxQjs7SUFHckIsbURBQXlCOztJQUd6QixrREFBd0I7O0lBR3hCLDhDQUFvQjs7SUFHcEIsZ0RBQWdDOztJQUdoQyw0Q0FBa0I7O0lBR2xCLDZDQUFtQjs7SUFHbkIsNENBQWtCOztJQUdsQiw2Q0FBbUI7O0lBR25CLDZDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNvclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JTdGF0dXNDb2RlJztcbmltcG9ydCB7IFdlYlNvY2tldE1lc3NhZ2VIZWFkZXIgfSBmcm9tICcuLi9tZXNzYWdlcy9XZWJTb2NrZXRNZXNzYWdlSGVhZGVyJztcblxuLyogXG4gICBAV2ViU29ja2V0TWVzc2FnZVxuICAgVGhpcyBtZXNzYWdlIGlzIHB1c2hlZCB0byB0aGUgY2xpZW50IHVwb24gYW55IHNlbnNvciBoZWFsdGggc3RhdHVzIGNoYW5nZSBpbiB0aGUgcmVnaXN0ZXJlZCBhY2NvdW50IFxuKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXRTZW5zb3JTdGF0dXNOb3RpZmljYXRpb24gZXh0ZW5kcyBXZWJTb2NrZXRNZXNzYWdlSGVhZGVyIHtcbiBcbiAgICAvLyBFcnJvciBjb2RlICgwIGZvciBzdWNjZXNzKSBcbiAgICBwdWJsaWMgY29kZTogbnVtYmVyO1xuIFxuICAgIC8vIEVycm9yIG1lc3NhZ2UgKGlmIGVycm9yIG9jY3VycmVkKSBcbiAgICBwdWJsaWMgZXJyb3I6IHN0cmluZztcbiBcbiAgICAvLyBTdGF0dXMgdXBkYXRlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gVXBkYXRlZCBzdGF0dXMgYml0LW1hc2sgXG4gICAgcHVibGljIG1hc2s6IG51bWJlcjtcbiBcbiAgICAvLyBVcGRhdGVkIHN0YXR1cyBcbiAgICBwdWJsaWMgc3RhdHVzOiBTZW5zb3JTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyBvcDogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyB2ZXI6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgY2lkOiBudW1iZXI7XG4gXG4gICAgLy8gXG4gICAgcHVibGljIHNpZDogc3RyaW5nO1xuIFxuXG59XG5cblxuIl19