/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
*/
export class SysSensorsCountRequest {
    /**
     * @param {?=} accountId
     * @param {?=} folderId
     * @param {?=} subFolders
     * @param {?=} sensorType
     * @param {?=} status
     * @param {?=} streamType
     */
    constructor(accountId, folderId, subFolders, sensorType, status, streamType) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.subFolders = subFolders;
        this.sensorType = sensorType;
        this.status = status;
        this.streamType = streamType;
    }
}
if (false) {
    /** @type {?} */
    SysSensorsCountRequest.prototype.accountId;
    /** @type {?} */
    SysSensorsCountRequest.prototype.folderId;
    /** @type {?} */
    SysSensorsCountRequest.prototype.subFolders;
    /** @type {?} */
    SysSensorsCountRequest.prototype.sensorType;
    /** @type {?} */
    SysSensorsCountRequest.prototype.status;
    /** @type {?} */
    SysSensorsCountRequest.prototype.streamType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzU2Vuc29yc0NvdW50UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1N5c1NlbnNvcnNDb3VudFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUEsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBb0IvQixZQUFZLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxVQUFvQixFQUFFLFVBQTJCLEVBQUUsTUFBeUIsRUFBRSxVQUEyQjtRQUN4SixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0NBRUo7OztJQTFCRywyQ0FBeUI7O0lBR3pCLDBDQUF3Qjs7SUFHeEIsNENBQTJCOztJQUczQiw0Q0FBa0M7O0lBR2xDLHdDQUFnQzs7SUFHaEMsNENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vuc29yU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgU3RyZWFtVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TdHJlYW1UeXBlQ29kZSc7XG5pbXBvcnQgeyBTZW5zb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclR5cGVDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBTeXNTZW5zb3JzQ291bnRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYWNjb3VudCBJZCAoZW1wdHkgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBmb2xkZXIgSWQgKGVtcHR5IGZvciBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIElmIHRydWUsIHNlYXJjaCBhbGwgc2Vuc29ycyBpbiBmb2xkZXIgYW5kIGFsbCBpdHMgc3ViLWZvbGRlcnMgXG4gICAgcHVibGljIHN1YkZvbGRlcnM6IGJvb2xlYW47XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHNlbnNvciB0eXBlIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHNlbnNvclR5cGU6IFNlbnNvclR5cGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBieSBzZW5zb3Igc3RhdHVzIChlbXB0eSBvciBVTkRFRklORUQgZm9yIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHN0YXR1czogU2Vuc29yU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc3RyZWFtIHR5cGUgKGVtcHR5IG9yIFVOREVGSU5FRCBmb3Igbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RyZWFtVHlwZTogU3RyZWFtVHlwZUNvZGU7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBmb2xkZXJJZD86IHN0cmluZywgc3ViRm9sZGVycz86IGJvb2xlYW4sIHNlbnNvclR5cGU/OiBTZW5zb3JUeXBlQ29kZSwgc3RhdHVzPzogU2Vuc29yU3RhdHVzQ29kZSwgc3RyZWFtVHlwZT86IFN0cmVhbVR5cGVDb2RlKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLnN1YkZvbGRlcnMgPSBzdWJGb2xkZXJzO1xuICAgICAgICB0aGlzLnNlbnNvclR5cGUgPSBzZW5zb3JUeXBlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5zdHJlYW1UeXBlID0gc3RyZWFtVHlwZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=