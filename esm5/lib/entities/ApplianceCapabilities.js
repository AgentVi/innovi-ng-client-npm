/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
var /*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
ApplianceCapabilities = /** @class */ (function () {
    function ApplianceCapabilities() {
    }
    return ApplianceCapabilities;
}());
/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
export { ApplianceCapabilities };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOzs7Ozs7SUFBQTtJQStDQSxDQUFDO0lBQUQsNEJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDOzs7Ozs7Ozs7SUE1Q0csNENBQW9DOztJQUdwQyw2Q0FBNEI7O0lBRzVCLDRDQUEyQjs7SUFHM0IseUNBQXdCOztJQUd4QixxQ0FBb0I7O0lBR3BCLG1DQUFrQjs7SUFHbEIscUNBQW9COztJQUdwQiw4Q0FBNkI7O0lBRzdCLDhDQUE2Qjs7SUFHN0IseUNBQXdCOztJQUd4QixzQ0FBeUI7O0lBR3pCLGdEQUErQjs7SUFHL0IsK0NBQThCOztJQUc5QixrREFBNEM7O0lBRzVDLHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBEaXNrSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9EaXNrSW5mbyc7XG5pbXBvcnQgeyBEb2NrZXJDcmVkZW50aWFscyB9IGZyb20gJy4uL2NvbW1vbi9Eb2NrZXJDcmVkZW50aWFscyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uVmVyc2lvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbmZpZ3VyYXRpb25WZXJzaW9uJztcblxuLyogXG4gICBFZGdlIGFwcGxpYW5jZSBjYXBhYmlsaXRpZXMgZnVsbCByZXBvcnQgPGJyPlxuICAgVGhpcyBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBIVyBhbmQgU1cgc3BlYyBvZiB0aGUgZGV2aWNlLCBtb3N0IG9mIHRoZSBkYXRhIGlzIGNvbGxlY3RlZCBieSB0aGUgc29mdHdhcmUgYW5kIHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2U8YnI+XG4gICBTb21lIGZpZWxkcyByZXByZXNlbnRzIHRoZSBkZXZpY2UgY29uZmlndXJhdGlvbiAocmVwb3J0IGludGVydmFscywgZG9ja2VyIGNyZWRlbnRpYWxzLCBjb21wb25lbnRzIHZlcnNpb25zIGV0YykgYW5kIHRoZXkgYXJlIHByb3ZpZGVkIGJ5IHRoZSBiYWNrZW5kIG9uIGRldmljZSByZWdpc3RyYXRpb24uIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VDYXBhYmlsaXRpZXMge1xuIFxuICAgIC8vIFByb2R1Y3QgdHlwZSBjb2RlICgocHJvdmlkZWQgYnkgdGhlIGRldmljZSwgaW5qZWN0ZWQpIFxuICAgIHB1YmxpYyBwcm9kdWN0VHlwZTogUHJvZHVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBIVyBzZXJpYWwgbnVtYmVyIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgc2VyaWFsTnVtYmVyOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhXIG1vZGVsIG5hbWUgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkZXZpY2VNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBDUFUgbW9kZWwgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGNwdU1vZGVsOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFVQblAgVVVJRCAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHV1aWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSVAgYWRkcmVzcyAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGlwOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhvc3QgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGhvc3Q6IHN0cmluZztcbiBcbiAgICAvLyBEb2NrZXIgZW5naW5lIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkb2NrZXJWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gTGludXggS2VybmVsIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBrZXJuZWxWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gVG90YWwgUkFNIHNpemUgKGJ5dGVzKSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHRvdGFsUmFtOiBudW1iZXI7XG4gXG4gICAgLy8gRGlzayBpbmZvIGFib3V0IGFsbCB0aGUgZGlza3MgaW5zdGFsbGVkIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgZGlza3M6IERpc2tJbmZvW107XG4gXG4gICAgLy8gQ29tbWFuZCBpbnRlcnZhbCBpbiBzZWNvbmRzOiBob3cgb2Z0ZW4gdG8gcHVsbCBmb3IgY29tbWFuZHMgKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEwLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBjb21tYW5kSW50ZXJ2YWw6IG51bWJlcjtcbiBcbiAgICAvLyBTdGF0dXMgaW50ZXJ2YWwgaW4gc2Vjb25kczogaG93IG9mdGVuIHRvIHNlbmQgc3RhdHVzIGluZm8gKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEyMCBzZWNvbmRzLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBzdGF0dXNJbnRlcnZhbDogbnVtYmVyO1xuIFxuICAgIC8vIERvY2tlciByZXBvc2l0b3J5IGNyZWRlbnRpYWxzIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gXG4gICAgcHVibGljIGRvY2tlckNyZWRlbnRpYWxzOiBEb2NrZXJDcmVkZW50aWFscztcbiBcbiAgICAvLyBTVyBDb21wb25lbnRzIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoaXMgc3RydWN0dXJlIGRlc2NyaWJlcyB0aGUgU1cgY29tcG9uZW50cyB2ZXJzaW9uIHRvIGJlIGRlcGxveWVkIGluIHRoZSBkZXZpY2UgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uOiBDb25maWd1cmF0aW9uVmVyc2lvbjtcbiBcbn1cblxuXG4iXX0=