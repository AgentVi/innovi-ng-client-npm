/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Technical integration specification
*/
export class IntegrationSpec {
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
    IntegrationSpec.prototype.protocol;
    /** @type {?} */
    IntegrationSpec.prototype.operation;
    /** @type {?} */
    IntegrationSpec.prototype.host;
    /** @type {?} */
    IntegrationSpec.prototype.port;
    /** @type {?} */
    IntegrationSpec.prototype.user;
    /** @type {?} */
    IntegrationSpec.prototype.password;
    /** @type {?} */
    IntegrationSpec.prototype.url;
    /** @type {?} */
    IntegrationSpec.prototype.headers;
    /** @type {?} */
    IntegrationSpec.prototype.recipients;
    /** @type {?} */
    IntegrationSpec.prototype.subject;
    /** @type {?} */
    IntegrationSpec.prototype.body;
    /** @type {?} */
    IntegrationSpec.prototype.clipRequired;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25TcGVjLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0ludGVncmF0aW9uU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztJQXNDeEIsWUFBWSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUIsRUFBRSxHQUFZLEVBQUUsT0FBMEIsRUFBRSxVQUFxQixFQUFFLE9BQWdCLEVBQUUsSUFBYSxFQUFFLFlBQXNCO1FBQ3ZPLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztDQUVKOzs7SUFsREcsbUNBQXdCOztJQUd4QixvQ0FBeUI7O0lBR3pCLCtCQUFvQjs7SUFHcEIsK0JBQW9COztJQUdwQiwrQkFBb0I7O0lBR3BCLG1DQUF3Qjs7SUFHeEIsOEJBQW1COztJQUduQixrQ0FBaUM7O0lBR2pDLHFDQUE0Qjs7SUFHNUIsa0NBQXVCOztJQUd2QiwrQkFBb0I7O0lBR3BCLHVDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ0tleVZhbHVlIH0gZnJvbSAnLi4vY29tbW9uL1N0cmluZ0tleVZhbHVlJztcblxuLyogXG4gICBUZWNobmljYWwgaW50ZWdyYXRpb24gc3BlY2lmaWNhdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25TcGVjIHtcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBwcm90b2NvbDogc210cCB8IGh0dHAgfCBodHRwcyBcbiAgICBwdWJsaWMgcHJvdG9jb2w6IHN0cmluZztcbiBcbiAgICAvLyBPcGVyYXRpb246IEdFVCB8IFBPU1QgfCBQVVQgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgb3BlcmF0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSG9zdCBuYW1lIG9yIGlwIGFkZHJlc3MgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBob3N0OiBzdHJpbmc7XG4gXG4gICAgLy8gUG9ydCBudW1iZXIgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBwb3J0OiBudW1iZXI7XG4gXG4gICAgLy8gVXNlciAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIHVzZXI6IHN0cmluZztcbiBcbiAgICAvLyBQYXNzd29yZCAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG4gXG4gICAgLy8gVVJMIHBhdGggKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgdXJsOiBzdHJpbmc7XG4gXG4gICAgLy8gSGVhZGVycyAoYXBwbGljYWJsZSBmb3IgaHR0cC9odHRwcyBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBoZWFkZXJzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIExpc3Qgb2YgcmVjaXBpZW50cyAoYXBwbGljYWJsZSBmb3Igc210cCBwcm90b2NvbCkgXG4gICAgcHVibGljIHJlY2lwaWVudHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIE1lc3NhZ2Ugc3ViamVjdCB0ZW1wbGF0ZSAoYXBwbGljYWJsZSBmb3Igc210cCBwcm90b2NvbCkgXG4gICAgcHVibGljIHN1YmplY3Q6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGJvZHkgdGVtcGxhdGUgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBib2R5OiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgY2xpcCByZXF1aXJlZCBmb3IgdGhlIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBjbGlwUmVxdWlyZWQ6IGJvb2xlYW47XG4gXG4gICAgY29uc3RydWN0b3IocHJvdG9jb2w/OiBzdHJpbmcsIG9wZXJhdGlvbj86IHN0cmluZywgaG9zdD86IHN0cmluZywgcG9ydD86IG51bWJlciwgdXNlcj86IHN0cmluZywgcGFzc3dvcmQ/OiBzdHJpbmcsIHVybD86IHN0cmluZywgaGVhZGVycz86IFN0cmluZ0tleVZhbHVlW10sIHJlY2lwaWVudHM/OiBzdHJpbmdbXSwgc3ViamVjdD86IHN0cmluZywgYm9keT86IHN0cmluZywgY2xpcFJlcXVpcmVkPzogYm9vbGVhbikgeyBcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IHByb3RvY29sO1xuICAgICAgICB0aGlzLm9wZXJhdGlvbiA9IG9wZXJhdGlvbjtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gaGVhZGVycztcbiAgICAgICAgdGhpcy5yZWNpcGllbnRzID0gcmVjaXBpZW50cztcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICAgICAgdGhpcy5jbGlwUmVxdWlyZWQgPSBjbGlwUmVxdWlyZWQ7XG4gICAgfVxuXG59XG5cblxuIl19