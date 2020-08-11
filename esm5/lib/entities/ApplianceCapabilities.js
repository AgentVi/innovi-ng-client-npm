/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
var ApplianceCapabilities = /** @class */ (function () {
    function ApplianceCapabilities(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion, profileId, errors) {
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
        this.profileId = profileId;
        this.errors = errors;
    }
    return ApplianceCapabilities;
}());
export { ApplianceCapabilities };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7O0VBSUU7QUFDRjtJQXFESSwrQkFBWSxXQUE2QixFQUFFLFlBQXFCLEVBQUUsV0FBb0IsRUFBRSxRQUFpQixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLGFBQXNCLEVBQUUsYUFBc0IsRUFBRSxRQUFpQixFQUFFLEtBQWtCLEVBQUUsZUFBd0IsRUFBRSxjQUF1QixFQUFFLGlCQUFxQyxFQUFFLG9CQUEyQyxFQUFFLFNBQWtCLEVBQUUsTUFBZTtRQUNuWixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVMLDRCQUFDO0FBQUQsQ0FBQyxBQXpFRCxJQXlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvY2tlckNyZWRlbnRpYWxzIH0gZnJvbSAnLi4vY29tbW9uL0RvY2tlckNyZWRlbnRpYWxzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25WZXJzaW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29uZmlndXJhdGlvblZlcnNpb24nO1xuaW1wb3J0IHsgUHJvZHVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvUHJvZHVjdFR5cGVDb2RlJztcbmltcG9ydCB7IERpc2tJbmZvIH0gZnJvbSAnLi4vY29tbW9uL0Rpc2tJbmZvJztcblxuLyogXG4gICBFZGdlIGFwcGxpYW5jZSBjYXBhYmlsaXRpZXMgZnVsbCByZXBvcnQgPGJyPlxuICAgVGhpcyBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBIVyBhbmQgU1cgc3BlYyBvZiB0aGUgZGV2aWNlLCBtb3N0IG9mIHRoZSBkYXRhIGlzIGNvbGxlY3RlZCBieSB0aGUgc29mdHdhcmUgYW5kIHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2U8YnI+XG4gICBTb21lIGZpZWxkcyByZXByZXNlbnRzIHRoZSBkZXZpY2UgY29uZmlndXJhdGlvbiAocmVwb3J0IGludGVydmFscywgZG9ja2VyIGNyZWRlbnRpYWxzLCBjb21wb25lbnRzIHZlcnNpb25zIGV0YykgYW5kIHRoZXkgYXJlIHByb3ZpZGVkIGJ5IHRoZSBiYWNrZW5kIG9uIGRldmljZSByZWdpc3RyYXRpb24uIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VDYXBhYmlsaXRpZXMge1xuIFxuICAgIC8vIFByb2R1Y3QgdHlwZSBjb2RlICgocHJvdmlkZWQgYnkgdGhlIGRldmljZSwgaW5qZWN0ZWQpIFxuICAgIHB1YmxpYyBwcm9kdWN0VHlwZTogUHJvZHVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBIVyBzZXJpYWwgbnVtYmVyIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgc2VyaWFsTnVtYmVyOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhXIG1vZGVsIG5hbWUgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkZXZpY2VNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBDUFUgbW9kZWwgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGNwdU1vZGVsOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFVQblAgVVVJRCAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHV1aWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSVAgYWRkcmVzcyAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGlwOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhvc3QgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGhvc3Q6IHN0cmluZztcbiBcbiAgICAvLyBEb2NrZXIgZW5naW5lIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkb2NrZXJWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gTGludXggS2VybmVsIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBrZXJuZWxWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gVG90YWwgUkFNIHNpemUgKGJ5dGVzKSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHRvdGFsUmFtOiBudW1iZXI7XG4gXG4gICAgLy8gRGlzayBpbmZvIGFib3V0IGFsbCB0aGUgZGlza3MgaW5zdGFsbGVkIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgZGlza3M6IERpc2tJbmZvW107XG4gXG4gICAgLy8gQ29tbWFuZCBpbnRlcnZhbCBpbiBzZWNvbmRzOiBob3cgb2Z0ZW4gdG8gcHVsbCBmb3IgY29tbWFuZHMgKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEwLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBjb21tYW5kSW50ZXJ2YWw6IG51bWJlcjtcbiBcbiAgICAvLyBTdGF0dXMgaW50ZXJ2YWwgaW4gc2Vjb25kczogaG93IG9mdGVuIHRvIHNlbmQgc3RhdHVzIGluZm8gKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEyMCBzZWNvbmRzLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBzdGF0dXNJbnRlcnZhbDogbnVtYmVyO1xuIFxuICAgIC8vIERvY2tlciByZXBvc2l0b3J5IGNyZWRlbnRpYWxzIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gXG4gICAgcHVibGljIGRvY2tlckNyZWRlbnRpYWxzOiBEb2NrZXJDcmVkZW50aWFscztcbiBcbiAgICAvLyBTVyBDb21wb25lbnRzIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoaXMgc3RydWN0dXJlIGRlc2NyaWJlcyB0aGUgU1cgY29tcG9uZW50cyB2ZXJzaW9uIHRvIGJlIGRlcGxveWVkIGluIHRoZSBkZXZpY2UgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uOiBDb25maWd1cmF0aW9uVmVyc2lvbjtcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHByb2ZpbGUgSWQgXG4gICAgcHVibGljIHByb2ZpbGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgZXJyb3JzIGlmIHRoZSBkZXZpY2UgbWFuYWdlciBmYWlsZWQgdG8gcmV0cmlldmUgc29tZSBvZiB0aGUgZGF0YSBcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IocHJvZHVjdFR5cGU/OiBQcm9kdWN0VHlwZUNvZGUsIHNlcmlhbE51bWJlcj86IHN0cmluZywgZGV2aWNlTW9kZWw/OiBzdHJpbmcsIGNwdU1vZGVsPzogc3RyaW5nLCB1dWlkPzogc3RyaW5nLCBpcD86IHN0cmluZywgaG9zdD86IHN0cmluZywgZG9ja2VyVmVyc2lvbj86IHN0cmluZywga2VybmVsVmVyc2lvbj86IHN0cmluZywgdG90YWxSYW0/OiBudW1iZXIsIGRpc2tzPzogRGlza0luZm9bXSwgY29tbWFuZEludGVydmFsPzogbnVtYmVyLCBzdGF0dXNJbnRlcnZhbD86IG51bWJlciwgZG9ja2VyQ3JlZGVudGlhbHM/OiBEb2NrZXJDcmVkZW50aWFscywgY29uZmlndXJhdGlvblZlcnNpb24/OiBDb25maWd1cmF0aW9uVmVyc2lvbiwgcHJvZmlsZUlkPzogc3RyaW5nLCBlcnJvcnM/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMucHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZTtcbiAgICAgICAgdGhpcy5zZXJpYWxOdW1iZXIgPSBzZXJpYWxOdW1iZXI7XG4gICAgICAgIHRoaXMuZGV2aWNlTW9kZWwgPSBkZXZpY2VNb2RlbDtcbiAgICAgICAgdGhpcy5jcHVNb2RlbCA9IGNwdU1vZGVsO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmlwID0gaXA7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuZG9ja2VyVmVyc2lvbiA9IGRvY2tlclZlcnNpb247XG4gICAgICAgIHRoaXMua2VybmVsVmVyc2lvbiA9IGtlcm5lbFZlcnNpb247XG4gICAgICAgIHRoaXMudG90YWxSYW0gPSB0b3RhbFJhbTtcbiAgICAgICAgdGhpcy5kaXNrcyA9IGRpc2tzO1xuICAgICAgICB0aGlzLmNvbW1hbmRJbnRlcnZhbCA9IGNvbW1hbmRJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5zdGF0dXNJbnRlcnZhbCA9IHN0YXR1c0ludGVydmFsO1xuICAgICAgICB0aGlzLmRvY2tlckNyZWRlbnRpYWxzID0gZG9ja2VyQ3JlZGVudGlhbHM7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvblZlcnNpb24gPSBjb25maWd1cmF0aW9uVmVyc2lvbjtcbiAgICAgICAgdGhpcy5wcm9maWxlSWQgPSBwcm9maWxlSWQ7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==