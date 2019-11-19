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
    function ApplianceCapabilities(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOzs7Ozs7SUErQ0ksK0JBQVksV0FBNkIsRUFBRSxZQUFxQixFQUFFLFdBQW9CLEVBQUUsUUFBaUIsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQWEsRUFBRSxhQUFzQixFQUFFLGFBQXNCLEVBQUUsUUFBaUIsRUFBRSxLQUFrQixFQUFFLGVBQXdCLEVBQUUsY0FBdUIsRUFBRSxpQkFBcUMsRUFBRSxvQkFBMkM7UUFDOVcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQ3JELENBQUM7SUFFTCw0QkFBQztBQUFELENBQUMsQUFqRUQsSUFpRUM7Ozs7Ozs7OztJQTlERyw0Q0FBb0M7O0lBR3BDLDZDQUE0Qjs7SUFHNUIsNENBQTJCOztJQUczQix5Q0FBd0I7O0lBR3hCLHFDQUFvQjs7SUFHcEIsbUNBQWtCOztJQUdsQixxQ0FBb0I7O0lBR3BCLDhDQUE2Qjs7SUFHN0IsOENBQTZCOztJQUc3Qix5Q0FBd0I7O0lBR3hCLHNDQUF5Qjs7SUFHekIsZ0RBQStCOztJQUcvQiwrQ0FBOEI7O0lBRzlCLGtEQUE0Qzs7SUFHNUMscURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlza0luZm8gfSBmcm9tICcuLi9jb21tb24vRGlza0luZm8nO1xuaW1wb3J0IHsgRG9ja2VyQ3JlZGVudGlhbHMgfSBmcm9tICcuLi9jb21tb24vRG9ja2VyQ3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblZlcnNpb24gfSBmcm9tICcuLi9lbnRpdGllcy9Db25maWd1cmF0aW9uVmVyc2lvbic7XG5pbXBvcnQgeyBQcm9kdWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Qcm9kdWN0VHlwZUNvZGUnO1xuXG4vKiBcbiAgIEVkZ2UgYXBwbGlhbmNlIGNhcGFiaWxpdGllcyBmdWxsIHJlcG9ydCA8YnI+XG4gICBUaGlzIHN0cnVjdHVyZSBkZXNjcmliZXMgdGhlIEhXIGFuZCBTVyBzcGVjIG9mIHRoZSBkZXZpY2UsIG1vc3Qgb2YgdGhlIGRhdGEgaXMgY29sbGVjdGVkIGJ5IHRoZSBzb2Z0d2FyZSBhbmQgcHJvdmlkZWQgYnkgdGhlIGRldmljZTxicj5cbiAgIFNvbWUgZmllbGRzIHJlcHJlc2VudHMgdGhlIGRldmljZSBjb25maWd1cmF0aW9uIChyZXBvcnQgaW50ZXJ2YWxzLCBkb2NrZXIgY3JlZGVudGlhbHMsIGNvbXBvbmVudHMgdmVyc2lvbnMgZXRjKSBhbmQgdGhleSBhcmUgcHJvdmlkZWQgYnkgdGhlIGJhY2tlbmQgb24gZGV2aWNlIHJlZ2lzdHJhdGlvbi4gXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZUNhcGFiaWxpdGllcyB7XG4gXG4gICAgLy8gUHJvZHVjdCB0eXBlIGNvZGUgKChwcm92aWRlZCBieSB0aGUgZGV2aWNlLCBpbmplY3RlZCkgXG4gICAgcHVibGljIHByb2R1Y3RUeXBlOiBQcm9kdWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhXIHNlcmlhbCBudW1iZXIgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBzZXJpYWxOdW1iZXI6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSFcgbW9kZWwgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGRldmljZU1vZGVsOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIENQVSBtb2RlbCBuYW1lIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgY3B1TW9kZWw6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgVVBuUCBVVUlEIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgdXVpZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBJUCBhZGRyZXNzIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgaXA6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSG9zdCBuYW1lIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgaG9zdDogc3RyaW5nO1xuIFxuICAgIC8vIERvY2tlciBlbmdpbmUgdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGRvY2tlclZlcnNpb246IHN0cmluZztcbiBcbiAgICAvLyBMaW51eCBLZXJuZWwgdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGtlcm5lbFZlcnNpb246IHN0cmluZztcbiBcbiAgICAvLyBUb3RhbCBSQU0gc2l6ZSAoYnl0ZXMpIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgdG90YWxSYW06IG51bWJlcjtcbiBcbiAgICAvLyBEaXNrIGluZm8gYWJvdXQgYWxsIHRoZSBkaXNrcyBpbnN0YWxsZWQgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkaXNrczogRGlza0luZm9bXTtcbiBcbiAgICAvLyBDb21tYW5kIGludGVydmFsIGluIHNlY29uZHM6IGhvdyBvZnRlbiB0byBwdWxsIGZvciBjb21tYW5kcyAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoZSBkZXZpY2Ugc2hhbGwgcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgb2YgMTAsIHRoZSBzeXN0ZW0gbWlnaHQgcHJvdmlkZSBkaWZmZXJlbnQgdmFsdWUgXG4gICAgcHVibGljIGNvbW1hbmRJbnRlcnZhbDogbnVtYmVyO1xuIFxuICAgIC8vIFN0YXR1cyBpbnRlcnZhbCBpbiBzZWNvbmRzOiBob3cgb2Z0ZW4gdG8gc2VuZCBzdGF0dXMgaW5mbyAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoZSBkZXZpY2Ugc2hhbGwgcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgb2YgMTIwIHNlY29uZHMsIHRoZSBzeXN0ZW0gbWlnaHQgcHJvdmlkZSBkaWZmZXJlbnQgdmFsdWUgXG4gICAgcHVibGljIHN0YXR1c0ludGVydmFsOiBudW1iZXI7XG4gXG4gICAgLy8gRG9ja2VyIHJlcG9zaXRvcnkgY3JlZGVudGlhbHMgKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBcbiAgICBwdWJsaWMgZG9ja2VyQ3JlZGVudGlhbHM6IERvY2tlckNyZWRlbnRpYWxzO1xuIFxuICAgIC8vIFNXIENvbXBvbmVudHMgY29uZmlndXJhdGlvbiB2ZXJzaW9uIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gVGhpcyBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBTVyBjb21wb25lbnRzIHZlcnNpb24gdG8gYmUgZGVwbG95ZWQgaW4gdGhlIGRldmljZSBcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvblZlcnNpb246IENvbmZpZ3VyYXRpb25WZXJzaW9uO1xuIFxuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RUeXBlPzogUHJvZHVjdFR5cGVDb2RlLCBzZXJpYWxOdW1iZXI/OiBzdHJpbmcsIGRldmljZU1vZGVsPzogc3RyaW5nLCBjcHVNb2RlbD86IHN0cmluZywgdXVpZD86IHN0cmluZywgaXA/OiBzdHJpbmcsIGhvc3Q/OiBzdHJpbmcsIGRvY2tlclZlcnNpb24/OiBzdHJpbmcsIGtlcm5lbFZlcnNpb24/OiBzdHJpbmcsIHRvdGFsUmFtPzogbnVtYmVyLCBkaXNrcz86IERpc2tJbmZvW10sIGNvbW1hbmRJbnRlcnZhbD86IG51bWJlciwgc3RhdHVzSW50ZXJ2YWw/OiBudW1iZXIsIGRvY2tlckNyZWRlbnRpYWxzPzogRG9ja2VyQ3JlZGVudGlhbHMsIGNvbmZpZ3VyYXRpb25WZXJzaW9uPzogQ29uZmlndXJhdGlvblZlcnNpb24pIHsgXG4gICAgICAgIHRoaXMucHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZTtcbiAgICAgICAgdGhpcy5zZXJpYWxOdW1iZXIgPSBzZXJpYWxOdW1iZXI7XG4gICAgICAgIHRoaXMuZGV2aWNlTW9kZWwgPSBkZXZpY2VNb2RlbDtcbiAgICAgICAgdGhpcy5jcHVNb2RlbCA9IGNwdU1vZGVsO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmlwID0gaXA7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuZG9ja2VyVmVyc2lvbiA9IGRvY2tlclZlcnNpb247XG4gICAgICAgIHRoaXMua2VybmVsVmVyc2lvbiA9IGtlcm5lbFZlcnNpb247XG4gICAgICAgIHRoaXMudG90YWxSYW0gPSB0b3RhbFJhbTtcbiAgICAgICAgdGhpcy5kaXNrcyA9IGRpc2tzO1xuICAgICAgICB0aGlzLmNvbW1hbmRJbnRlcnZhbCA9IGNvbW1hbmRJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5zdGF0dXNJbnRlcnZhbCA9IHN0YXR1c0ludGVydmFsO1xuICAgICAgICB0aGlzLmRvY2tlckNyZWRlbnRpYWxzID0gZG9ja2VyQ3JlZGVudGlhbHM7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvblZlcnNpb24gPSBjb25maWd1cmF0aW9uVmVyc2lvbjtcbiAgICB9XG5cbn1cblxuXG4iXX0=