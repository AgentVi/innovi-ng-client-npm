/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Event integration action
*/
export class EventAction {
    /**
     * @param {?=} protocol
     * @param {?=} operation
     * @param {?=} host
     * @param {?=} port
     * @param {?=} user
     * @param {?=} password
     * @param {?=} url
     * @param {?=} headers
     * @param {?=} recipients
     * @param {?=} subject
     * @param {?=} body
     * @param {?=} clipRequired
     */
    constructor(protocol, operation, host, port, user, password, url, headers, recipients, subject, body, clipRequired) {
        this.protocol = protocol;
        this.operation = operation;
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.url = url;
        this.headers = headers;
        this.recipients = recipients;
        this.subject = subject;
        this.body = body;
        this.clipRequired = clipRequired;
    }
}
if (false) {
    /** @type {?} */
    EventAction.prototype.protocol;
    /** @type {?} */
    EventAction.prototype.operation;
    /** @type {?} */
    EventAction.prototype.host;
    /** @type {?} */
    EventAction.prototype.port;
    /** @type {?} */
    EventAction.prototype.user;
    /** @type {?} */
    EventAction.prototype.password;
    /** @type {?} */
    EventAction.prototype.url;
    /** @type {?} */
    EventAction.prototype.headers;
    /** @type {?} */
    EventAction.prototype.recipients;
    /** @type {?} */
    EventAction.prototype.subject;
    /** @type {?} */
    EventAction.prototype.body;
    /** @type {?} */
    EventAction.prototype.clipRequired;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vRXZlbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLE1BQU0sT0FBTyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7SUFzQ3BCLFlBQVksUUFBaUIsRUFBRSxTQUFrQixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsSUFBYSxFQUFFLFFBQWlCLEVBQUUsR0FBWSxFQUFFLE9BQTBCLEVBQUUsVUFBcUIsRUFBRSxPQUFnQixFQUFFLElBQWEsRUFBRSxZQUFzQjtRQUN2TyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7Q0FFSjs7O0lBbERHLCtCQUF3Qjs7SUFHeEIsZ0NBQXlCOztJQUd6QiwyQkFBb0I7O0lBR3BCLDJCQUFvQjs7SUFHcEIsMkJBQW9COztJQUdwQiwrQkFBd0I7O0lBR3hCLDBCQUFtQjs7SUFHbkIsOEJBQWlDOztJQUdqQyxpQ0FBNEI7O0lBRzVCLDhCQUF1Qjs7SUFHdkIsMkJBQW9COztJQUdwQixtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5cbi8qIFxuICAgRXZlbnQgaW50ZWdyYXRpb24gYWN0aW9uIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudEFjdGlvbiB7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gcHJvdG9jb2w6IHNtdHAgfCBodHRwIHwgaHR0cHMgXG4gICAgcHVibGljIHByb3RvY29sOiBzdHJpbmc7XG4gXG4gICAgLy8gT3BlcmF0aW9uOiBHRVQgfCBQT1NUIHwgUFVUIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEhvc3QgbmFtZSBvciBpcCBhZGRyZXNzIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgaG9zdDogc3RyaW5nO1xuIFxuICAgIC8vIFBvcnQgbnVtYmVyIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgcG9ydDogbnVtYmVyO1xuIFxuICAgIC8vIFVzZXIgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyB1c2VyOiBzdHJpbmc7XG4gXG4gICAgLy8gUGFzc3dvcmQgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuIFxuICAgIC8vIFVSTCBwYXRoIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuIFxuICAgIC8vIEhlYWRlcnMgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgaGVhZGVyczogU3RyaW5nS2V5VmFsdWVbXTtcbiBcbiAgICAvLyBMaXN0IG9mIHJlY2lwaWVudHMgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyByZWNpcGllbnRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBNZXNzYWdlIHN1YmplY3QgdGVtcGxhdGUgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyBzdWJqZWN0OiBzdHJpbmc7XG4gXG4gICAgLy8gTWVzc2FnZSBib2R5IHRlbXBsYXRlIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgYm9keTogc3RyaW5nO1xuIFxuICAgIC8vIElzIGNsaXAgcmVxdWlyZWQgZm9yIHRoZSBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgY2xpcFJlcXVpcmVkOiBib29sZWFuO1xuIFxuICAgIGNvbnN0cnVjdG9yKHByb3RvY29sPzogc3RyaW5nLCBvcGVyYXRpb24/OiBzdHJpbmcsIGhvc3Q/OiBzdHJpbmcsIHBvcnQ/OiBudW1iZXIsIHVzZXI/OiBzdHJpbmcsIHBhc3N3b3JkPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcsIGhlYWRlcnM/OiBTdHJpbmdLZXlWYWx1ZVtdLCByZWNpcGllbnRzPzogc3RyaW5nW10sIHN1YmplY3Q/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIGNsaXBSZXF1aXJlZD86IGJvb2xlYW4pIHsgXG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBwcm90b2NvbDtcbiAgICAgICAgdGhpcy5vcGVyYXRpb24gPSBvcGVyYXRpb247XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgICAgIHRoaXMucmVjaXBpZW50cyA9IHJlY2lwaWVudHM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgICAgIHRoaXMuY2xpcFJlcXVpcmVkID0gY2xpcFJlcXVpcmVkO1xuICAgIH1cblxufVxuXG5cbiJdfQ==