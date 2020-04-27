/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
export class ApplianceCapabilities {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBOzs7O0VBSUU7QUFDRixNQUFNLE9BQU8scUJBQXFCO0lBK0M5QixZQUFZLFdBQTZCLEVBQUUsWUFBcUIsRUFBRSxXQUFvQixFQUFFLFFBQWlCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxJQUFhLEVBQUUsYUFBc0IsRUFBRSxhQUFzQixFQUFFLFFBQWlCLEVBQUUsS0FBa0IsRUFBRSxlQUF3QixFQUFFLGNBQXVCLEVBQUUsaUJBQXFDLEVBQUUsb0JBQTJDO1FBQzlXLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNyRCxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uVmVyc2lvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbmZpZ3VyYXRpb25WZXJzaW9uJztcbmltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBEaXNrSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9EaXNrSW5mbyc7XG5pbXBvcnQgeyBEb2NrZXJDcmVkZW50aWFscyB9IGZyb20gJy4uL2NvbW1vbi9Eb2NrZXJDcmVkZW50aWFscyc7XG5cbi8qIFxuICAgRWRnZSBhcHBsaWFuY2UgY2FwYWJpbGl0aWVzIGZ1bGwgcmVwb3J0IDxicj5cbiAgIFRoaXMgc3RydWN0dXJlIGRlc2NyaWJlcyB0aGUgSFcgYW5kIFNXIHNwZWMgb2YgdGhlIGRldmljZSwgbW9zdCBvZiB0aGUgZGF0YSBpcyBjb2xsZWN0ZWQgYnkgdGhlIHNvZnR3YXJlIGFuZCBwcm92aWRlZCBieSB0aGUgZGV2aWNlPGJyPlxuICAgU29tZSBmaWVsZHMgcmVwcmVzZW50cyB0aGUgZGV2aWNlIGNvbmZpZ3VyYXRpb24gKHJlcG9ydCBpbnRlcnZhbHMsIGRvY2tlciBjcmVkZW50aWFscywgY29tcG9uZW50cyB2ZXJzaW9ucyBldGMpIGFuZCB0aGV5IGFyZSBwcm92aWRlZCBieSB0aGUgYmFja2VuZCBvbiBkZXZpY2UgcmVnaXN0cmF0aW9uLiBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlQ2FwYWJpbGl0aWVzIHtcbiBcbiAgICAvLyBQcm9kdWN0IHR5cGUgY29kZSAoKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UsIGluamVjdGVkKSBcbiAgICBwdWJsaWMgcHJvZHVjdFR5cGU6IFByb2R1Y3RUeXBlQ29kZTtcbiBcbiAgICAvLyBBcHBsaWFuY2UgSFcgc2VyaWFsIG51bWJlciAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHNlcmlhbE51bWJlcjogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBIVyBtb2RlbCBuYW1lIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgZGV2aWNlTW9kZWw6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgQ1BVIG1vZGVsIG5hbWUgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBjcHVNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBVUG5QIFVVSUQgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyB1dWlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIElQIGFkZHJlc3MgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBpcDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBIb3N0IG5hbWUgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBob3N0OiBzdHJpbmc7XG4gXG4gICAgLy8gRG9ja2VyIGVuZ2luZSB2ZXJzaW9uIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgZG9ja2VyVmVyc2lvbjogc3RyaW5nO1xuIFxuICAgIC8vIExpbnV4IEtlcm5lbCB2ZXJzaW9uIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMga2VybmVsVmVyc2lvbjogc3RyaW5nO1xuIFxuICAgIC8vIFRvdGFsIFJBTSBzaXplIChieXRlcykgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyB0b3RhbFJhbTogbnVtYmVyO1xuIFxuICAgIC8vIERpc2sgaW5mbyBhYm91dCBhbGwgdGhlIGRpc2tzIGluc3RhbGxlZCAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGRpc2tzOiBEaXNrSW5mb1tdO1xuIFxuICAgIC8vIENvbW1hbmQgaW50ZXJ2YWwgaW4gc2Vjb25kczogaG93IG9mdGVuIHRvIHB1bGwgZm9yIGNvbW1hbmRzIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gVGhlIGRldmljZSBzaGFsbCBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBvZiAxMCwgdGhlIHN5c3RlbSBtaWdodCBwcm92aWRlIGRpZmZlcmVudCB2YWx1ZSBcbiAgICBwdWJsaWMgY29tbWFuZEludGVydmFsOiBudW1iZXI7XG4gXG4gICAgLy8gU3RhdHVzIGludGVydmFsIGluIHNlY29uZHM6IGhvdyBvZnRlbiB0byBzZW5kIHN0YXR1cyBpbmZvIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gVGhlIGRldmljZSBzaGFsbCBwcm92aWRlIGEgZGVmYXVsdCB2YWx1ZSBvZiAxMjAgc2Vjb25kcywgdGhlIHN5c3RlbSBtaWdodCBwcm92aWRlIGRpZmZlcmVudCB2YWx1ZSBcbiAgICBwdWJsaWMgc3RhdHVzSW50ZXJ2YWw6IG51bWJlcjtcbiBcbiAgICAvLyBEb2NrZXIgcmVwb3NpdG9yeSBjcmVkZW50aWFscyAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFxuICAgIHB1YmxpYyBkb2NrZXJDcmVkZW50aWFsczogRG9ja2VyQ3JlZGVudGlhbHM7XG4gXG4gICAgLy8gU1cgQ29tcG9uZW50cyBjb25maWd1cmF0aW9uIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGlzIHN0cnVjdHVyZSBkZXNjcmliZXMgdGhlIFNXIGNvbXBvbmVudHMgdmVyc2lvbiB0byBiZSBkZXBsb3llZCBpbiB0aGUgZGV2aWNlIFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uVmVyc2lvbjogQ29uZmlndXJhdGlvblZlcnNpb247XG4gXG4gICAgY29uc3RydWN0b3IocHJvZHVjdFR5cGU/OiBQcm9kdWN0VHlwZUNvZGUsIHNlcmlhbE51bWJlcj86IHN0cmluZywgZGV2aWNlTW9kZWw/OiBzdHJpbmcsIGNwdU1vZGVsPzogc3RyaW5nLCB1dWlkPzogc3RyaW5nLCBpcD86IHN0cmluZywgaG9zdD86IHN0cmluZywgZG9ja2VyVmVyc2lvbj86IHN0cmluZywga2VybmVsVmVyc2lvbj86IHN0cmluZywgdG90YWxSYW0/OiBudW1iZXIsIGRpc2tzPzogRGlza0luZm9bXSwgY29tbWFuZEludGVydmFsPzogbnVtYmVyLCBzdGF0dXNJbnRlcnZhbD86IG51bWJlciwgZG9ja2VyQ3JlZGVudGlhbHM/OiBEb2NrZXJDcmVkZW50aWFscywgY29uZmlndXJhdGlvblZlcnNpb24/OiBDb25maWd1cmF0aW9uVmVyc2lvbikgeyBcbiAgICAgICAgdGhpcy5wcm9kdWN0VHlwZSA9IHByb2R1Y3RUeXBlO1xuICAgICAgICB0aGlzLnNlcmlhbE51bWJlciA9IHNlcmlhbE51bWJlcjtcbiAgICAgICAgdGhpcy5kZXZpY2VNb2RlbCA9IGRldmljZU1vZGVsO1xuICAgICAgICB0aGlzLmNwdU1vZGVsID0gY3B1TW9kZWw7XG4gICAgICAgIHRoaXMudXVpZCA9IHV1aWQ7XG4gICAgICAgIHRoaXMuaXAgPSBpcDtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5kb2NrZXJWZXJzaW9uID0gZG9ja2VyVmVyc2lvbjtcbiAgICAgICAgdGhpcy5rZXJuZWxWZXJzaW9uID0ga2VybmVsVmVyc2lvbjtcbiAgICAgICAgdGhpcy50b3RhbFJhbSA9IHRvdGFsUmFtO1xuICAgICAgICB0aGlzLmRpc2tzID0gZGlza3M7XG4gICAgICAgIHRoaXMuY29tbWFuZEludGVydmFsID0gY29tbWFuZEludGVydmFsO1xuICAgICAgICB0aGlzLnN0YXR1c0ludGVydmFsID0gc3RhdHVzSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuZG9ja2VyQ3JlZGVudGlhbHMgPSBkb2NrZXJDcmVkZW50aWFscztcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uVmVyc2lvbiA9IGNvbmZpZ3VyYXRpb25WZXJzaW9uO1xuICAgIH1cblxufVxuXG5cbiJdfQ==