/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration target describes connectivity details of the integrated system
   Definition of target systems is done by the account administrator only
   Account administrator Supervisor roles can define specific integrations per account / folder
*/
export class IntegrationTarget extends BaseEntity {
}
if (false) {
    /** @type {?} */
    IntegrationTarget.prototype.accountId;
    /** @type {?} */
    IntegrationTarget.prototype.name;
    /** @type {?} */
    IntegrationTarget.prototype.type;
    /** @type {?} */
    IntegrationTarget.prototype.protocol;
    /** @type {?} */
    IntegrationTarget.prototype.operation;
    /** @type {?} */
    IntegrationTarget.prototype.host;
    /** @type {?} */
    IntegrationTarget.prototype.port;
    /** @type {?} */
    IntegrationTarget.prototype.user;
    /** @type {?} */
    IntegrationTarget.prototype.password;
    /** @type {?} */
    IntegrationTarget.prototype.url;
    /** @type {?} */
    IntegrationTarget.prototype.headers;
    /** @type {?} */
    IntegrationTarget.prototype.recipients;
    /** @type {?} */
    IntegrationTarget.prototype.subject;
    /** @type {?} */
    IntegrationTarget.prototype.body;
    /** @type {?} */
    IntegrationTarget.prototype.clipRequired;
    /** @type {?} */
    IntegrationTarget.prototype.id;
    /** @type {?} */
    IntegrationTarget.prototype._type;
    /** @type {?} */
    IntegrationTarget.prototype.createdOn;
    /** @type {?} */
    IntegrationTarget.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UYXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvblRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFPcEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQVU7Q0E0RGhEOzs7SUF6REcsc0NBQXlCOztJQUd6QixpQ0FBb0I7O0lBR3BCLGlDQUFpQzs7SUFHakMscUNBQXdCOztJQUd4QixzQ0FBeUI7O0lBR3pCLGlDQUFvQjs7SUFHcEIsaUNBQW9COztJQUdwQixpQ0FBb0I7O0lBR3BCLHFDQUF3Qjs7SUFHeEIsZ0NBQW1COztJQUduQixvQ0FBaUM7O0lBR2pDLHVDQUE0Qjs7SUFHNUIsb0NBQXVCOztJQUd2QixpQ0FBb0I7O0lBR3BCLHlDQUE2Qjs7SUFHN0IsK0JBQWtCOztJQUdsQixrQ0FBcUI7O0lBR3JCLHNDQUF5Qjs7SUFHekIsc0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZWdyYXRpb25UeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0ludGVncmF0aW9uVHlwZUNvZGUnO1xuaW1wb3J0IHsgU3RyaW5nS2V5VmFsdWUgfSBmcm9tICcuLi9jb21tb24vU3RyaW5nS2V5VmFsdWUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEludGVncmF0aW9uIHRhcmdldCBkZXNjcmliZXMgY29ubmVjdGl2aXR5IGRldGFpbHMgb2YgdGhlIGludGVncmF0ZWQgc3lzdGVtXG4gICBEZWZpbml0aW9uIG9mIHRhcmdldCBzeXN0ZW1zIGlzIGRvbmUgYnkgdGhlIGFjY291bnQgYWRtaW5pc3RyYXRvciBvbmx5XG4gICBBY2NvdW50IGFkbWluaXN0cmF0b3IgU3VwZXJ2aXNvciByb2xlcyBjYW4gZGVmaW5lIHNwZWNpZmljIGludGVncmF0aW9ucyBwZXIgYWNjb3VudCAvIGZvbGRlciBcbiovXG5leHBvcnQgY2xhc3MgSW50ZWdyYXRpb25UYXJnZXQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdHlwZSAoU01UUCB8IEhUVFAgfCBJTU1JWCB8IFNFTlRJTkVMIHwgTUlMRVNUT05FIHwgR0VORVRFQykgXG4gICAgcHVibGljIHR5cGU6IEludGVncmF0aW9uVHlwZUNvZGU7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gcHJvdG9jb2w6IHNtdHAgfCBodHRwIHwgaHR0cHMgXG4gICAgcHVibGljIHByb3RvY29sOiBzdHJpbmc7XG4gXG4gICAgLy8gT3BlcmF0aW9uOiBHRVQgfCBQT1NUIHwgUFVUIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIG9wZXJhdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEhvc3QgbmFtZSBvciBpcCBhZGRyZXNzIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgaG9zdDogc3RyaW5nO1xuIFxuICAgIC8vIFBvcnQgbnVtYmVyIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgcG9ydDogbnVtYmVyO1xuIFxuICAgIC8vIFVzZXIgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyB1c2VyOiBzdHJpbmc7XG4gXG4gICAgLy8gUGFzc3dvcmQgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nO1xuIFxuICAgIC8vIFVSTCBwYXRoIChhcHBsaWNhYmxlIGZvciBodHRwL2h0dHBzIHByb3RvY29scykgXG4gICAgcHVibGljIHVybDogc3RyaW5nO1xuIFxuICAgIC8vIEhlYWRlcnMgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgaGVhZGVyczogU3RyaW5nS2V5VmFsdWVbXTtcbiBcbiAgICAvLyBMaXN0IG9mIHJlY2lwaWVudHMgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyByZWNpcGllbnRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBNZXNzYWdlIHN1YmplY3QgdGVtcGxhdGUgKGFwcGxpY2FibGUgZm9yIHNtdHAgcHJvdG9jb2wpIFxuICAgIHB1YmxpYyBzdWJqZWN0OiBzdHJpbmc7XG4gXG4gICAgLy8gTWVzc2FnZSBib2R5IHRlbXBsYXRlIChhcHBsaWNhYmxlIGZvciBhbGwgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgYm9keTogc3RyaW5nO1xuIFxuICAgIC8vIElzIGNsaXAgcmVxdWlyZWQgZm9yIHRoZSBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgY2xpcFJlcXVpcmVkOiBib29sZWFuO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==