/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Recurrent time frame
*/
export class Recurrent {
    /**
     * @param {?=} startTime
     * @param {?=} endTime
     * @param {?=} period
     * @param {?=} daysOfWeek
     * @param {?=} targetId
     * @param {?=} recipients
     * @param {?=} subject
     * @param {?=} body
     * @param {?=} mimeType
     */
    constructor(startTime, endTime, period, daysOfWeek, targetId, recipients, subject, body, mimeType) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.period = period;
        this.daysOfWeek = daysOfWeek;
        this.targetId = targetId;
        this.recipients = recipients;
        this.subject = subject;
        this.body = body;
        this.mimeType = mimeType;
    }
}
if (false) {
    /** @type {?} */
    Recurrent.prototype.startTime;
    /** @type {?} */
    Recurrent.prototype.endTime;
    /** @type {?} */
    Recurrent.prototype.period;
    /** @type {?} */
    Recurrent.prototype.daysOfWeek;
    /** @type {?} */
    Recurrent.prototype.targetId;
    /** @type {?} */
    Recurrent.prototype.recipients;
    /** @type {?} */
    Recurrent.prototype.subject;
    /** @type {?} */
    Recurrent.prototype.body;
    /** @type {?} */
    Recurrent.prototype.mimeType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1JlY3VycmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBS0EsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7Ozs7OztJQTZCbEIsWUFBWSxTQUFrQixFQUFFLE9BQWdCLEVBQUUsTUFBZSxFQUFFLFVBQTRCLEVBQUUsUUFBaUIsRUFBRSxVQUFxQixFQUFFLE9BQWdCLEVBQUUsSUFBYSxFQUFFLFFBQWlCO1FBQ3pMLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSjs7O0lBdENHLDhCQUF5Qjs7SUFHekIsNEJBQXVCOztJQUd2QiwyQkFBc0I7O0lBR3RCLCtCQUFtQzs7SUFHbkMsNkJBQXdCOztJQUd4QiwrQkFBNEI7O0lBRzVCLDRCQUF1Qjs7SUFHdkIseUJBQW9COztJQUdwQiw2QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXlPZldlZWtDb2RlIH0gZnJvbSAnLi4vZW51bXMvRGF5T2ZXZWVrQ29kZSc7XG5cbi8qIFxuICAgUmVjdXJyZW50IHRpbWUgZnJhbWUgXG4qL1xuZXhwb3J0IGNsYXNzIFJlY3VycmVudCB7XG4gXG4gICAgLy8gU3RhcnQgdGltZSBvZiB0aGUgcmVjdXJyZW50IGluIElTTy04NjAxIGZvcm1hdCBpbmNsdWRpbmcgdGltZSBvZmZzZXQgWVlZWS1NTS1ERFRoaDptbTpzcyswWjowMCBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRW5kIHRpbWUgb2YgdGhlIHJlY3VycmVudCBpbiBJU08tODYwMSBmb3JtYXQgaW5jbHVkaW5nIHRpbWUgb2Zmc2V0IFlZWVktTU0tRERUaGg6bW06c3MrMFo6MDAgTGVhdmUgZW1wdHkgZm9yIG5vIGVuZCB0aW1lIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUGVyaW9kIGluIElTTy04NjAxIGZvcm1hdCAoUG5Zbk1uRCAvIFBuVykgRXhhbXBsZXM6IDx1bD4gPGxpPlAxWSAtIEV2ZXJ5IDEgeWVhcjwvbGk+IDxsaT5QMk0gLSBFdmVyeSAyIG1vbnRoczwvbGk+IDxsaT5QM1cgLSBFdmVyeSAzIHdlZWtzPC9saT4gPGxpPlA0RCAtIEV2ZXJ5IDIgbW9udGhzPC9saT4gPC91bD4gXG4gICAgcHVibGljIHBlcmlvZDogc3RyaW5nO1xuIFxuICAgIC8vIERheXMgb2Ygd2VlayAtIGJhc2VkIG9uIElTTzg2MDEgXG4gICAgcHVibGljIGRheXNPZldlZWs6IERheU9mV2Vla0NvZGVbXTtcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgSWQgXG4gICAgcHVibGljIHRhcmdldElkOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiByZWNpcGllbnRzIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgcmVjaXBpZW50czogc3RyaW5nW107XG4gXG4gICAgLy8gTWVzc2FnZSBzdWJqZWN0IHRlbXBsYXRlIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgc3ViamVjdDogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgYm9keSB0ZW1wbGF0ZSBcbiAgICBwdWJsaWMgYm9keTogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgY29udGVudCBtaW1lIHR5cGUgXG4gICAgcHVibGljIG1pbWVUeXBlOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3Ioc3RhcnRUaW1lPzogc3RyaW5nLCBlbmRUaW1lPzogc3RyaW5nLCBwZXJpb2Q/OiBzdHJpbmcsIGRheXNPZldlZWs/OiBEYXlPZldlZWtDb2RlW10sIHRhcmdldElkPzogc3RyaW5nLCByZWNpcGllbnRzPzogc3RyaW5nW10sIHN1YmplY3Q/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIG1pbWVUeXBlPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwZXJpb2Q7XG4gICAgICAgIHRoaXMuZGF5c09mV2VlayA9IGRheXNPZldlZWs7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICAgICAgdGhpcy5yZWNpcGllbnRzID0gcmVjaXBpZW50cztcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICAgICAgdGhpcy5taW1lVHlwZSA9IG1pbWVUeXBlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==