/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
export class ApplianceCapabilities {
    /**
     * @param {?=} productType
     * @param {?=} serialNumber
     * @param {?=} deviceModel
     * @param {?=} cpuModel
     * @param {?=} uuid
     * @param {?=} ip
     * @param {?=} host
     * @param {?=} dockerVersion
     * @param {?=} kernelVersion
     * @param {?=} totalRam
     * @param {?=} disks
     * @param {?=} commandInterval
     * @param {?=} statusInterval
     * @param {?=} dockerCredentials
     * @param {?=} configurationVersion
     */
    constructor(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion) {
        this.productType = productType;
        this.serialNumber = serialNumber;
        this.deviceModel = deviceModel;
        this.cpuModel = cpuModel;
        this.uuid = uuid;
        this.ip = ip;
        this.host = host;
        this.dockerVersion = dockerVersion;
        this.kernelVersion = kernelVersion;
        this.totalRam = totalRam;
        this.disks = disks;
        this.commandInterval = commandInterval;
        this.statusInterval = statusInterval;
        this.dockerCredentials = dockerCredentials;
        this.configurationVersion = configurationVersion;
    }
}
if (false) {
    /** @type {?} */
    ApplianceCapabilities.prototype.productType;
    /** @type {?} */
    ApplianceCapabilities.prototype.serialNumber;
    /** @type {?} */
    ApplianceCapabilities.prototype.deviceModel;
    /** @type {?} */
    ApplianceCapabilities.prototype.cpuModel;
    /** @type {?} */
    ApplianceCapabilities.prototype.uuid;
    /** @type {?} */
    ApplianceCapabilities.prototype.ip;
    /** @type {?} */
    ApplianceCapabilities.prototype.host;
    /** @type {?} */
    ApplianceCapabilities.prototype.dockerVersion;
    /** @type {?} */
    ApplianceCapabilities.prototype.kernelVersion;
    /** @type {?} */
    ApplianceCapabilities.prototype.totalRam;
    /** @type {?} */
    ApplianceCapabilities.prototype.disks;
    /** @type {?} */
    ApplianceCapabilities.prototype.commandInterval;
    /** @type {?} */
    ApplianceCapabilities.prototype.statusInterval;
    /** @type {?} */
    ApplianceCapabilities.prototype.dockerCredentials;
    /** @type {?} */
    ApplianceCapabilities.prototype.configurationVersion;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBLE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQStDOUIsWUFBWSxXQUE2QixFQUFFLFlBQXFCLEVBQUUsV0FBb0IsRUFBRSxRQUFpQixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLGFBQXNCLEVBQUUsYUFBc0IsRUFBRSxRQUFpQixFQUFFLEtBQWtCLEVBQUUsZUFBd0IsRUFBRSxjQUF1QixFQUFFLGlCQUFxQyxFQUFFLG9CQUEyQztRQUM5VyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7SUFDckQsQ0FBQztDQUVKOzs7SUE5REcsNENBQW9DOztJQUdwQyw2Q0FBNEI7O0lBRzVCLDRDQUEyQjs7SUFHM0IseUNBQXdCOztJQUd4QixxQ0FBb0I7O0lBR3BCLG1DQUFrQjs7SUFHbEIscUNBQW9COztJQUdwQiw4Q0FBNkI7O0lBRzdCLDhDQUE2Qjs7SUFHN0IseUNBQXdCOztJQUd4QixzQ0FBeUI7O0lBR3pCLGdEQUErQjs7SUFHL0IsK0NBQThCOztJQUc5QixrREFBNEM7O0lBRzVDLHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBEaXNrSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9EaXNrSW5mbyc7XG5pbXBvcnQgeyBEb2NrZXJDcmVkZW50aWFscyB9IGZyb20gJy4uL2NvbW1vbi9Eb2NrZXJDcmVkZW50aWFscyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uVmVyc2lvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbmZpZ3VyYXRpb25WZXJzaW9uJztcblxuLyogXG4gICBFZGdlIGFwcGxpYW5jZSBjYXBhYmlsaXRpZXMgZnVsbCByZXBvcnQgPGJyPlxuICAgVGhpcyBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBIVyBhbmQgU1cgc3BlYyBvZiB0aGUgZGV2aWNlLCBtb3N0IG9mIHRoZSBkYXRhIGlzIGNvbGxlY3RlZCBieSB0aGUgc29mdHdhcmUgYW5kIHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2U8YnI+XG4gICBTb21lIGZpZWxkcyByZXByZXNlbnRzIHRoZSBkZXZpY2UgY29uZmlndXJhdGlvbiAocmVwb3J0IGludGVydmFscywgZG9ja2VyIGNyZWRlbnRpYWxzLCBjb21wb25lbnRzIHZlcnNpb25zIGV0YykgYW5kIHRoZXkgYXJlIHByb3ZpZGVkIGJ5IHRoZSBiYWNrZW5kIG9uIGRldmljZSByZWdpc3RyYXRpb24uIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VDYXBhYmlsaXRpZXMge1xuIFxuICAgIC8vIFByb2R1Y3QgdHlwZSBjb2RlICgocHJvdmlkZWQgYnkgdGhlIGRldmljZSwgaW5qZWN0ZWQpIFxuICAgIHB1YmxpYyBwcm9kdWN0VHlwZTogUHJvZHVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBIVyBzZXJpYWwgbnVtYmVyIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgc2VyaWFsTnVtYmVyOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhXIG1vZGVsIG5hbWUgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkZXZpY2VNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBDUFUgbW9kZWwgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGNwdU1vZGVsOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFVQblAgVVVJRCAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHV1aWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSVAgYWRkcmVzcyAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGlwOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhvc3QgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGhvc3Q6IHN0cmluZztcbiBcbiAgICAvLyBEb2NrZXIgZW5naW5lIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkb2NrZXJWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gTGludXggS2VybmVsIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBrZXJuZWxWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gVG90YWwgUkFNIHNpemUgKGJ5dGVzKSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHRvdGFsUmFtOiBudW1iZXI7XG4gXG4gICAgLy8gRGlzayBpbmZvIGFib3V0IGFsbCB0aGUgZGlza3MgaW5zdGFsbGVkIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgZGlza3M6IERpc2tJbmZvW107XG4gXG4gICAgLy8gQ29tbWFuZCBpbnRlcnZhbCBpbiBzZWNvbmRzOiBob3cgb2Z0ZW4gdG8gcHVsbCBmb3IgY29tbWFuZHMgKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEwLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBjb21tYW5kSW50ZXJ2YWw6IG51bWJlcjtcbiBcbiAgICAvLyBTdGF0dXMgaW50ZXJ2YWwgaW4gc2Vjb25kczogaG93IG9mdGVuIHRvIHNlbmQgc3RhdHVzIGluZm8gKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEyMCBzZWNvbmRzLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBzdGF0dXNJbnRlcnZhbDogbnVtYmVyO1xuIFxuICAgIC8vIERvY2tlciByZXBvc2l0b3J5IGNyZWRlbnRpYWxzIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gXG4gICAgcHVibGljIGRvY2tlckNyZWRlbnRpYWxzOiBEb2NrZXJDcmVkZW50aWFscztcbiBcbiAgICAvLyBTVyBDb21wb25lbnRzIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoaXMgc3RydWN0dXJlIGRlc2NyaWJlcyB0aGUgU1cgY29tcG9uZW50cyB2ZXJzaW9uIHRvIGJlIGRlcGxveWVkIGluIHRoZSBkZXZpY2UgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uOiBDb25maWd1cmF0aW9uVmVyc2lvbjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0VHlwZT86IFByb2R1Y3RUeXBlQ29kZSwgc2VyaWFsTnVtYmVyPzogc3RyaW5nLCBkZXZpY2VNb2RlbD86IHN0cmluZywgY3B1TW9kZWw/OiBzdHJpbmcsIHV1aWQ/OiBzdHJpbmcsIGlwPzogc3RyaW5nLCBob3N0Pzogc3RyaW5nLCBkb2NrZXJWZXJzaW9uPzogc3RyaW5nLCBrZXJuZWxWZXJzaW9uPzogc3RyaW5nLCB0b3RhbFJhbT86IG51bWJlciwgZGlza3M/OiBEaXNrSW5mb1tdLCBjb21tYW5kSW50ZXJ2YWw/OiBudW1iZXIsIHN0YXR1c0ludGVydmFsPzogbnVtYmVyLCBkb2NrZXJDcmVkZW50aWFscz86IERvY2tlckNyZWRlbnRpYWxzLCBjb25maWd1cmF0aW9uVmVyc2lvbj86IENvbmZpZ3VyYXRpb25WZXJzaW9uKSB7IFxuICAgICAgICB0aGlzLnByb2R1Y3RUeXBlID0gcHJvZHVjdFR5cGU7XG4gICAgICAgIHRoaXMuc2VyaWFsTnVtYmVyID0gc2VyaWFsTnVtYmVyO1xuICAgICAgICB0aGlzLmRldmljZU1vZGVsID0gZGV2aWNlTW9kZWw7XG4gICAgICAgIHRoaXMuY3B1TW9kZWwgPSBjcHVNb2RlbDtcbiAgICAgICAgdGhpcy51dWlkID0gdXVpZDtcbiAgICAgICAgdGhpcy5pcCA9IGlwO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLmRvY2tlclZlcnNpb24gPSBkb2NrZXJWZXJzaW9uO1xuICAgICAgICB0aGlzLmtlcm5lbFZlcnNpb24gPSBrZXJuZWxWZXJzaW9uO1xuICAgICAgICB0aGlzLnRvdGFsUmFtID0gdG90YWxSYW07XG4gICAgICAgIHRoaXMuZGlza3MgPSBkaXNrcztcbiAgICAgICAgdGhpcy5jb21tYW5kSW50ZXJ2YWwgPSBjb21tYW5kSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc3RhdHVzSW50ZXJ2YWwgPSBzdGF0dXNJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5kb2NrZXJDcmVkZW50aWFscyA9IGRvY2tlckNyZWRlbnRpYWxzO1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25WZXJzaW9uID0gY29uZmlndXJhdGlvblZlcnNpb247XG4gICAgfVxuXG59XG5cblxuIl19