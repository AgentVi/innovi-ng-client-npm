/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
var /*
*/
RulesServiceFindRequest = /** @class */ (function () {
    function RulesServiceFindRequest(folderId, sensorId, search, behaviorType, severity, sort, page, pageSize) {
        this.folderId = folderId;
        this.sensorId = sensorId;
        this.search = search;
        this.behaviorType = behaviorType;
        this.severity = severity;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
    return RulesServiceFindRequest;
}());
/*
*/
export { RulesServiceFindRequest };
if (false) {
    /** @type {?} */
    RulesServiceFindRequest.prototype.folderId;
    /** @type {?} */
    RulesServiceFindRequest.prototype.sensorId;
    /** @type {?} */
    RulesServiceFindRequest.prototype.search;
    /** @type {?} */
    RulesServiceFindRequest.prototype.behaviorType;
    /** @type {?} */
    RulesServiceFindRequest.prototype.severity;
    /** @type {?} */
    RulesServiceFindRequest.prototype.sort;
    /** @type {?} */
    RulesServiceFindRequest.prototype.page;
    /** @type {?} */
    RulesServiceFindRequest.prototype.pageSize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZXNTZXJ2aWNlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9tZXNzYWdlcy9SdWxlc1NlcnZpY2VGaW5kUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7O0lBMEJJLGlDQUFZLFFBQWlCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsWUFBaUMsRUFBRSxRQUE2QixFQUFFLElBQWEsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDaEwsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVMLDhCQUFDO0FBQUQsQ0FBQyxBQXJDRCxJQXFDQzs7Ozs7O0lBbENHLDJDQUF3Qjs7SUFHeEIsMkNBQXdCOztJQUd4Qix5Q0FBc0I7O0lBR3RCLCtDQUF3Qzs7SUFHeEMsMkNBQW9DOztJQUdwQyx1Q0FBb0I7O0lBR3BCLHVDQUFvQjs7SUFHcEIsMkNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVzU2VydmljZUZpbmRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgZm9sZGVyIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIElkIChlbXB0eSBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgbmFtZSBvciBkZXNjcmlwdGlvbiBvciBleHRlcm5hbCBpZCBvciBwYXJ0aWFsICh1c2luZyAqIHdpbGRjYXJkKSBcbiAgICBwdWJsaWMgc2VhcmNoOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGJlaGF2aW9yIHR5cGUocykgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2V2ZXJpdHkoaWVzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlW107XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBQYWdlIG51bWJlciAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlOiBudW1iZXI7XG4gXG4gICAgLy8gTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXI7XG4gXG4gICAgY29uc3RydWN0b3IoZm9sZGVySWQ/OiBzdHJpbmcsIHNlbnNvcklkPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGVbXSwgc2V2ZXJpdHk/OiBTZXZlcml0eVR5cGVDb2RlW10sIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmZvbGRlcklkID0gZm9sZGVySWQ7XG4gICAgICAgIHRoaXMuc2Vuc29ySWQgPSBzZW5zb3JJZDtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlID0gYmVoYXZpb3JUeXBlO1xuICAgICAgICB0aGlzLnNldmVyaXR5ID0gc2V2ZXJpdHk7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=