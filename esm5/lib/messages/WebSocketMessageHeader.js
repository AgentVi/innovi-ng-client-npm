/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   @WebSocketMessage Message header for all web socket messages
*/
var /*
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
/*
   @WebSocketMessage Message header for all web socket messages
*/
export { WebSocketMessageHeader };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0TWVzc2FnZUhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1dlYlNvY2tldE1lc3NhZ2VIZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBaUJJLGdDQUFZLE1BQWUsRUFBRSxPQUFnQixFQUFFLFNBQWtCLEVBQUUsYUFBc0IsRUFBRSxTQUFrQjtRQUN6RyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBRUwsNkJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDOzs7Ozs7O0lBdEJHLG9DQUFrQjs7SUFHbEIscUNBQW1COztJQUduQixvQ0FBa0I7O0lBR2xCLHFDQUFtQjs7SUFHbkIscUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIEBXZWJTb2NrZXRNZXNzYWdlIE1lc3NhZ2UgaGVhZGVyIGZvciBhbGwgd2ViIHNvY2tldCBtZXNzYWdlcyBcbiovXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0TWVzc2FnZUhlYWRlciB7XG4gXG4gICAgLy8gXG4gICAgcHVibGljIG9wOiBudW1iZXI7XG4gXG4gICAgLy8gXG4gICAgcHVibGljIHZlcjogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyBjaWQ6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgc2lkOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3Iob3Bjb2RlPzogbnVtYmVyLCB2ZXJzaW9uPzogbnVtYmVyLCBtZXNzYWdlSWQ/OiBudW1iZXIsIGNvcnJlbGF0aW9uSWQ/OiBudW1iZXIsIHNlc3Npb25JZD86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5vcCA9IG9wY29kZTtcbiAgICAgICAgdGhpcy52ZXIgPSB2ZXJzaW9uO1xuICAgICAgICB0aGlzLmlkID0gbWVzc2FnZUlkO1xuICAgICAgICB0aGlzLmNpZCA9IGNvcnJlbGF0aW9uSWQ7XG4gICAgICAgIHRoaXMuc2lkID0gc2Vzc2lvbklkO1xuICAgIH1cblxufVxuXG5cbiJdfQ==