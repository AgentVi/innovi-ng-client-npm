/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
export class ApplianceCapabilities {
    constructor(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion, profileId, errors, uploadSpeed, downloadSpeed, speedTestedOn, endpoints) {
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
        this.uploadSpeed = uploadSpeed;
        this.downloadSpeed = downloadSpeed;
        this.speedTestedOn = speedTestedOn;
        this.endpoints = endpoints;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnRpdGllcy9BcHBsaWFuY2VDYXBhYmlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7Ozs7RUFJRTtBQUNGLE1BQU0sT0FBTyxxQkFBcUI7SUFpRTlCLFlBQVksV0FBNkIsRUFBRSxZQUFxQixFQUFFLFdBQW9CLEVBQUUsUUFBaUIsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQWEsRUFBRSxhQUFzQixFQUFFLGFBQXNCLEVBQUUsUUFBaUIsRUFBRSxLQUFrQixFQUFFLGVBQXdCLEVBQUUsY0FBdUIsRUFBRSxpQkFBcUMsRUFBRSxvQkFBMkMsRUFBRSxTQUFrQixFQUFFLE1BQWUsRUFBRSxXQUFvQixFQUFFLGFBQXNCLEVBQUUsYUFBc0IsRUFBRSxTQUE0QjtRQUN2ZixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9ja2VyQ3JlZGVudGlhbHMgfSBmcm9tICcuLi9jb21tb24vRG9ja2VyQ3JlZGVudGlhbHMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblZlcnNpb24gfSBmcm9tICcuLi9lbnRpdGllcy9Db25maWd1cmF0aW9uVmVyc2lvbic7XG5pbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5pbXBvcnQgeyBQcm9kdWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9Qcm9kdWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgRGlza0luZm8gfSBmcm9tICcuLi9jb21tb24vRGlza0luZm8nO1xuXG4vKiBcbiAgIEVkZ2UgYXBwbGlhbmNlIGNhcGFiaWxpdGllcyBmdWxsIHJlcG9ydCA8YnI+XG4gICBUaGlzIHN0cnVjdHVyZSBkZXNjcmliZXMgdGhlIEhXIGFuZCBTVyBzcGVjIG9mIHRoZSBkZXZpY2UsIG1vc3Qgb2YgdGhlIGRhdGEgaXMgY29sbGVjdGVkIGJ5IHRoZSBzb2Z0d2FyZSBhbmQgcHJvdmlkZWQgYnkgdGhlIGRldmljZTxicj5cbiAgIFNvbWUgZmllbGRzIHJlcHJlc2VudHMgdGhlIGRldmljZSBjb25maWd1cmF0aW9uIChyZXBvcnQgaW50ZXJ2YWxzLCBkb2NrZXIgY3JlZGVudGlhbHMsIGNvbXBvbmVudHMgdmVyc2lvbnMgZXRjKSBhbmQgdGhleSBhcmUgcHJvdmlkZWQgYnkgdGhlIGJhY2tlbmQgb24gZGV2aWNlIHJlZ2lzdHJhdGlvbi4gXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZUNhcGFiaWxpdGllcyB7XG4gXG4gICAgLy8gUHJvZHVjdCB0eXBlIGNvZGUgKChwcm92aWRlZCBieSB0aGUgZGV2aWNlLCBpbmplY3RlZCkgXG4gICAgcHVibGljIHByb2R1Y3RUeXBlOiBQcm9kdWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhXIHNlcmlhbCBudW1iZXIgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBzZXJpYWxOdW1iZXI6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSFcgbW9kZWwgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGRldmljZU1vZGVsOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIENQVSBtb2RlbCBuYW1lIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgY3B1TW9kZWw6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgVVBuUCBVVUlEIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgdXVpZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBJUCBhZGRyZXNzIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgaXA6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSG9zdCBuYW1lIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgaG9zdDogc3RyaW5nO1xuIFxuICAgIC8vIERvY2tlciBlbmdpbmUgdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGRvY2tlclZlcnNpb246IHN0cmluZztcbiBcbiAgICAvLyBMaW51eCBLZXJuZWwgdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGtlcm5lbFZlcnNpb246IHN0cmluZztcbiBcbiAgICAvLyBUb3RhbCBSQU0gc2l6ZSAoYnl0ZXMpIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgdG90YWxSYW06IG51bWJlcjtcbiBcbiAgICAvLyBEaXNrIGluZm8gYWJvdXQgYWxsIHRoZSBkaXNrcyBpbnN0YWxsZWQgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkaXNrczogRGlza0luZm9bXTtcbiBcbiAgICAvLyBDb21tYW5kIGludGVydmFsIGluIHNlY29uZHM6IGhvdyBvZnRlbiB0byBwdWxsIGZvciBjb21tYW5kcyAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoZSBkZXZpY2Ugc2hhbGwgcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgb2YgMTAsIHRoZSBzeXN0ZW0gbWlnaHQgcHJvdmlkZSBkaWZmZXJlbnQgdmFsdWUgXG4gICAgcHVibGljIGNvbW1hbmRJbnRlcnZhbDogbnVtYmVyO1xuIFxuICAgIC8vIFN0YXR1cyBpbnRlcnZhbCBpbiBzZWNvbmRzOiBob3cgb2Z0ZW4gdG8gc2VuZCBzdGF0dXMgaW5mbyAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoZSBkZXZpY2Ugc2hhbGwgcHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgb2YgMTIwIHNlY29uZHMsIHRoZSBzeXN0ZW0gbWlnaHQgcHJvdmlkZSBkaWZmZXJlbnQgdmFsdWUgXG4gICAgcHVibGljIHN0YXR1c0ludGVydmFsOiBudW1iZXI7XG4gXG4gICAgLy8gRG9ja2VyIHJlcG9zaXRvcnkgY3JlZGVudGlhbHMgKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBcbiAgICBwdWJsaWMgZG9ja2VyQ3JlZGVudGlhbHM6IERvY2tlckNyZWRlbnRpYWxzO1xuIFxuICAgIC8vIFNXIENvbXBvbmVudHMgY29uZmlndXJhdGlvbiB2ZXJzaW9uIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gVGhpcyBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBTVyBjb21wb25lbnRzIHZlcnNpb24gdG8gYmUgZGVwbG95ZWQgaW4gdGhlIGRldmljZSBcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvblZlcnNpb246IENvbmZpZ3VyYXRpb25WZXJzaW9uO1xuIFxuICAgIC8vIENvbmZpZ3VyYXRpb24gcHJvZmlsZSBJZCBcbiAgICBwdWJsaWMgcHJvZmlsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBlcnJvcnMgaWYgdGhlIGRldmljZSBtYW5hZ2VyIGZhaWxlZCB0byByZXRyaWV2ZSBzb21lIG9mIHRoZSBkYXRhIFxuICAgIHB1YmxpYyBlcnJvcnM6IHN0cmluZztcbiBcbiAgICAvLyBCYW5kd2lkdGggVXBsb2FkIHNwZWVkIFxuICAgIHB1YmxpYyB1cGxvYWRTcGVlZDogc3RyaW5nO1xuIFxuICAgIC8vIEJhbmR3aWR0aCBEb3dubG9hZCBzcGVlZCBcbiAgICBwdWJsaWMgZG93bmxvYWRTcGVlZDogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIHNwZWVkIHRlc3Qgd2FzIG1lYXN1cmVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3BlZWRUZXN0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgZW5kcG9pbnRzIGFjY2Vzc2libGUgYnkgdGhlIGRldmljZSBcbiAgICBwdWJsaWMgZW5kcG9pbnRzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RUeXBlPzogUHJvZHVjdFR5cGVDb2RlLCBzZXJpYWxOdW1iZXI/OiBzdHJpbmcsIGRldmljZU1vZGVsPzogc3RyaW5nLCBjcHVNb2RlbD86IHN0cmluZywgdXVpZD86IHN0cmluZywgaXA/OiBzdHJpbmcsIGhvc3Q/OiBzdHJpbmcsIGRvY2tlclZlcnNpb24/OiBzdHJpbmcsIGtlcm5lbFZlcnNpb24/OiBzdHJpbmcsIHRvdGFsUmFtPzogbnVtYmVyLCBkaXNrcz86IERpc2tJbmZvW10sIGNvbW1hbmRJbnRlcnZhbD86IG51bWJlciwgc3RhdHVzSW50ZXJ2YWw/OiBudW1iZXIsIGRvY2tlckNyZWRlbnRpYWxzPzogRG9ja2VyQ3JlZGVudGlhbHMsIGNvbmZpZ3VyYXRpb25WZXJzaW9uPzogQ29uZmlndXJhdGlvblZlcnNpb24sIHByb2ZpbGVJZD86IHN0cmluZywgZXJyb3JzPzogc3RyaW5nLCB1cGxvYWRTcGVlZD86IHN0cmluZywgZG93bmxvYWRTcGVlZD86IHN0cmluZywgc3BlZWRUZXN0ZWRPbj86IG51bWJlciwgZW5kcG9pbnRzPzogU3RyaW5nS2V5VmFsdWVbXSkgeyBcbiAgICAgICAgdGhpcy5wcm9kdWN0VHlwZSA9IHByb2R1Y3RUeXBlO1xuICAgICAgICB0aGlzLnNlcmlhbE51bWJlciA9IHNlcmlhbE51bWJlcjtcbiAgICAgICAgdGhpcy5kZXZpY2VNb2RlbCA9IGRldmljZU1vZGVsO1xuICAgICAgICB0aGlzLmNwdU1vZGVsID0gY3B1TW9kZWw7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMuaXAgPSBpcDtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5kb2NrZXJWZXJzaW9uID0gZG9ja2VyVmVyc2lvbjtcbiAgICAgICAgdGhpcy5rZXJuZWxWZXJzaW9uID0ga2VybmVsVmVyc2lvbjtcbiAgICAgICAgdGhpcy50b3RhbFJhbSA9IHRvdGFsUmFtO1xuICAgICAgICB0aGlzLmRpc2tzID0gZGlza3M7XG4gICAgICAgIHRoaXMuY29tbWFuZEludGVydmFsID0gY29tbWFuZEludGVydmFsO1xuICAgICAgICB0aGlzLnN0YXR1c0ludGVydmFsID0gc3RhdHVzSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuZG9ja2VyQ3JlZGVudGlhbHMgPSBkb2NrZXJDcmVkZW50aWFscztcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uVmVyc2lvbiA9IGNvbmZpZ3VyYXRpb25WZXJzaW9uO1xuICAgICAgICB0aGlzLnByb2ZpbGVJZCA9IHByb2ZpbGVJZDtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgICAgIHRoaXMudXBsb2FkU3BlZWQgPSB1cGxvYWRTcGVlZDtcbiAgICAgICAgdGhpcy5kb3dubG9hZFNwZWVkID0gZG93bmxvYWRTcGVlZDtcbiAgICAgICAgdGhpcy5zcGVlZFRlc3RlZE9uID0gc3BlZWRUZXN0ZWRPbjtcbiAgICAgICAgdGhpcy5lbmRwb2ludHMgPSBlbmRwb2ludHM7XG4gICAgfVxuXG59XG5cblxuIl19