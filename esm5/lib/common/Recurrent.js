/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Recurrent time frame
*/
var /*
   Recurrent time frame
*/
Recurrent = /** @class */ (function () {
    function Recurrent(startTime, endTime, period, daysOfWeek, action) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.period = period;
        this.daysOfWeek = daysOfWeek;
        this.action = action;
    }
    return Recurrent;
}());
/*
   Recurrent time frame
*/
export { Recurrent };
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
    Recurrent.prototype.action;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1JlY3VycmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7Ozs7SUFpQkksbUJBQVksU0FBa0IsRUFBRSxPQUFnQixFQUFFLE1BQWUsRUFBRSxVQUE0QixFQUFFLE1BQW9CO1FBQ2pILElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTCxnQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7Ozs7Ozs7SUF0QkcsOEJBQXlCOztJQUd6Qiw0QkFBdUI7O0lBR3ZCLDJCQUFzQjs7SUFHdEIsK0JBQW1DOztJQUduQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEFjdGlvbiB9IGZyb20gJy4uL2NvbW1vbi9FdmVudEFjdGlvbic7XG5pbXBvcnQgeyBEYXlPZldlZWtDb2RlIH0gZnJvbSAnLi4vZW51bXMvRGF5T2ZXZWVrQ29kZSc7XG5cbi8qIFxuICAgUmVjdXJyZW50IHRpbWUgZnJhbWUgXG4qL1xuZXhwb3J0IGNsYXNzIFJlY3VycmVudCB7XG4gXG4gICAgLy8gU3RhcnQgdGltZSBvZiB0aGUgcmVjdXJyZW50IGluIElTTy04NjAxIGZvcm1hdCBpbmNsdWRpbmcgdGltZSBvZmZzZXQgWVlZWS1NTS1ERFRoaDptbTpzcyswWjowMCBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRW5kIHRpbWUgb2YgdGhlIHJlY3VycmVudCBpbiBJU08tODYwMSBmb3JtYXQgaW5jbHVkaW5nIHRpbWUgb2Zmc2V0IFlZWVktTU0tRERUaGg6bW06c3MrMFo6MDAgTGVhdmUgZW1wdHkgZm9yIG5vIGVuZCB0aW1lIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUGVyaW9kIGluIElTTy04NjAxIGZvcm1hdCAoUG5Zbk1uRCAvIFBuVykgRXhhbXBsZXM6IDx1bD4gPGxpPlAxWSAtIEV2ZXJ5IDEgeWVhcjwvbGk+IDxsaT5QMk0gLSBFdmVyeSAyIG1vbnRoczwvbGk+IDxsaT5QM1cgLSBFdmVyeSAzIHdlZWtzPC9saT4gPGxpPlA0RCAtIEV2ZXJ5IDIgbW9udGhzPC9saT4gPC91bD4gXG4gICAgcHVibGljIHBlcmlvZDogc3RyaW5nO1xuIFxuICAgIC8vIERheXMgb2Ygd2VlayAtIGJhc2VkIG9uIElTTzg2MDEgXG4gICAgcHVibGljIGRheXNPZldlZWs6IERheU9mV2Vla0NvZGVbXTtcbiBcbiAgICAvLyBBY3Rpb24gZGVmaW5pdGlvbiBcbiAgICBwdWJsaWMgYWN0aW9uOiBFdmVudEFjdGlvbjtcbiBcbiAgICBjb25zdHJ1Y3RvcihzdGFydFRpbWU/OiBzdHJpbmcsIGVuZFRpbWU/OiBzdHJpbmcsIHBlcmlvZD86IHN0cmluZywgZGF5c09mV2Vlaz86IERheU9mV2Vla0NvZGVbXSwgYWN0aW9uPzogRXZlbnRBY3Rpb24pIHsgXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLmVuZFRpbWUgPSBlbmRUaW1lO1xuICAgICAgICB0aGlzLnBlcmlvZCA9IHBlcmlvZDtcbiAgICAgICAgdGhpcy5kYXlzT2ZXZWVrID0gZGF5c09mV2VlaztcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgfVxuXG59XG5cblxuIl19