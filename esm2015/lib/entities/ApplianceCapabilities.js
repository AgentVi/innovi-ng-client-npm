/*
   Edge appliance capabilities full report <br>
   This structure describes the HW and SW spec of the device, most of the data is collected by the software and provided by the device<br>
   Some fields represents the device configuration (report intervals, docker credentials, components versions etc) and they are provided by the backend on device registration.
*/
export class ApplianceCapabilities {
    constructor(productType, serialNumber, deviceModel, cpuModel, uuid, ip, host, dockerVersion, kernelVersion, totalRam, disks, commandInterval, statusInterval, dockerCredentials, configurationVersion, profileId, errors, uploadSpeed, downloadSpeed, speedTestedOn) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ2FwYWJpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnRpdGllcy9BcHBsaWFuY2VDYXBhYmlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7Ozs7RUFJRTtBQUNGLE1BQU0sT0FBTyxxQkFBcUI7SUE4RDlCLFlBQVksV0FBNkIsRUFBRSxZQUFxQixFQUFFLFdBQW9CLEVBQUUsUUFBaUIsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQWEsRUFBRSxhQUFzQixFQUFFLGFBQXNCLEVBQUUsUUFBaUIsRUFBRSxLQUFrQixFQUFFLGVBQXdCLEVBQUUsY0FBdUIsRUFBRSxpQkFBcUMsRUFBRSxvQkFBMkMsRUFBRSxTQUFrQixFQUFFLE1BQWUsRUFBRSxXQUFvQixFQUFFLGFBQXNCLEVBQUUsYUFBc0I7UUFDemQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1Byb2R1Y3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBEaXNrSW5mbyB9IGZyb20gJy4uL2NvbW1vbi9EaXNrSW5mbyc7XG5pbXBvcnQgeyBEb2NrZXJDcmVkZW50aWFscyB9IGZyb20gJy4uL2NvbW1vbi9Eb2NrZXJDcmVkZW50aWFscyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uVmVyc2lvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbmZpZ3VyYXRpb25WZXJzaW9uJztcblxuLyogXG4gICBFZGdlIGFwcGxpYW5jZSBjYXBhYmlsaXRpZXMgZnVsbCByZXBvcnQgPGJyPlxuICAgVGhpcyBzdHJ1Y3R1cmUgZGVzY3JpYmVzIHRoZSBIVyBhbmQgU1cgc3BlYyBvZiB0aGUgZGV2aWNlLCBtb3N0IG9mIHRoZSBkYXRhIGlzIGNvbGxlY3RlZCBieSB0aGUgc29mdHdhcmUgYW5kIHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2U8YnI+XG4gICBTb21lIGZpZWxkcyByZXByZXNlbnRzIHRoZSBkZXZpY2UgY29uZmlndXJhdGlvbiAocmVwb3J0IGludGVydmFscywgZG9ja2VyIGNyZWRlbnRpYWxzLCBjb21wb25lbnRzIHZlcnNpb25zIGV0YykgYW5kIHRoZXkgYXJlIHByb3ZpZGVkIGJ5IHRoZSBiYWNrZW5kIG9uIGRldmljZSByZWdpc3RyYXRpb24uIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VDYXBhYmlsaXRpZXMge1xuIFxuICAgIC8vIFByb2R1Y3QgdHlwZSBjb2RlICgocHJvdmlkZWQgYnkgdGhlIGRldmljZSwgaW5qZWN0ZWQpIFxuICAgIHB1YmxpYyBwcm9kdWN0VHlwZTogUHJvZHVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBIVyBzZXJpYWwgbnVtYmVyIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgc2VyaWFsTnVtYmVyOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhXIG1vZGVsIG5hbWUgKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkZXZpY2VNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBDUFUgbW9kZWwgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGNwdU1vZGVsOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFVQblAgVVVJRCAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHV1aWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSVAgYWRkcmVzcyAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGlwOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIEhvc3QgbmFtZSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIGhvc3Q6IHN0cmluZztcbiBcbiAgICAvLyBEb2NrZXIgZW5naW5lIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBkb2NrZXJWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gTGludXggS2VybmVsIHZlcnNpb24gKHByb3ZpZGVkIGJ5IHRoZSBkZXZpY2UpIFxuICAgIHB1YmxpYyBrZXJuZWxWZXJzaW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gVG90YWwgUkFNIHNpemUgKGJ5dGVzKSAocHJvdmlkZWQgYnkgdGhlIGRldmljZSkgXG4gICAgcHVibGljIHRvdGFsUmFtOiBudW1iZXI7XG4gXG4gICAgLy8gRGlzayBpbmZvIGFib3V0IGFsbCB0aGUgZGlza3MgaW5zdGFsbGVkIChwcm92aWRlZCBieSB0aGUgZGV2aWNlKSBcbiAgICBwdWJsaWMgZGlza3M6IERpc2tJbmZvW107XG4gXG4gICAgLy8gQ29tbWFuZCBpbnRlcnZhbCBpbiBzZWNvbmRzOiBob3cgb2Z0ZW4gdG8gcHVsbCBmb3IgY29tbWFuZHMgKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEwLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBjb21tYW5kSW50ZXJ2YWw6IG51bWJlcjtcbiBcbiAgICAvLyBTdGF0dXMgaW50ZXJ2YWwgaW4gc2Vjb25kczogaG93IG9mdGVuIHRvIHNlbmQgc3RhdHVzIGluZm8gKHByb3ZpZGVkIGJ5IHRoZSBzeXN0ZW0pPGJyPiBUaGUgZGV2aWNlIHNoYWxsIHByb3ZpZGUgYSBkZWZhdWx0IHZhbHVlIG9mIDEyMCBzZWNvbmRzLCB0aGUgc3lzdGVtIG1pZ2h0IHByb3ZpZGUgZGlmZmVyZW50IHZhbHVlIFxuICAgIHB1YmxpYyBzdGF0dXNJbnRlcnZhbDogbnVtYmVyO1xuIFxuICAgIC8vIERvY2tlciByZXBvc2l0b3J5IGNyZWRlbnRpYWxzIChwcm92aWRlZCBieSB0aGUgc3lzdGVtKTxicj4gXG4gICAgcHVibGljIGRvY2tlckNyZWRlbnRpYWxzOiBEb2NrZXJDcmVkZW50aWFscztcbiBcbiAgICAvLyBTVyBDb21wb25lbnRzIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiAocHJvdmlkZWQgYnkgdGhlIHN5c3RlbSk8YnI+IFRoaXMgc3RydWN0dXJlIGRlc2NyaWJlcyB0aGUgU1cgY29tcG9uZW50cyB2ZXJzaW9uIHRvIGJlIGRlcGxveWVkIGluIHRoZSBkZXZpY2UgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uOiBDb25maWd1cmF0aW9uVmVyc2lvbjtcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHByb2ZpbGUgSWQgXG4gICAgcHVibGljIHByb2ZpbGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgZXJyb3JzIGlmIHRoZSBkZXZpY2UgbWFuYWdlciBmYWlsZWQgdG8gcmV0cmlldmUgc29tZSBvZiB0aGUgZGF0YSBcbiAgICBwdWJsaWMgZXJyb3JzOiBzdHJpbmc7XG4gXG4gICAgLy8gQmFuZHdpZHRoIFVwbG9hZCBzcGVlZCBcbiAgICBwdWJsaWMgdXBsb2FkU3BlZWQ6IHN0cmluZztcbiBcbiAgICAvLyBCYW5kd2lkdGggRG93bmxvYWQgc3BlZWQgXG4gICAgcHVibGljIGRvd25sb2FkU3BlZWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBzcGVlZCB0ZXN0IHdhcyBtZWFzdXJlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHNwZWVkVGVzdGVkT246IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0VHlwZT86IFByb2R1Y3RUeXBlQ29kZSwgc2VyaWFsTnVtYmVyPzogc3RyaW5nLCBkZXZpY2VNb2RlbD86IHN0cmluZywgY3B1TW9kZWw/OiBzdHJpbmcsIHV1aWQ/OiBzdHJpbmcsIGlwPzogc3RyaW5nLCBob3N0Pzogc3RyaW5nLCBkb2NrZXJWZXJzaW9uPzogc3RyaW5nLCBrZXJuZWxWZXJzaW9uPzogc3RyaW5nLCB0b3RhbFJhbT86IG51bWJlciwgZGlza3M/OiBEaXNrSW5mb1tdLCBjb21tYW5kSW50ZXJ2YWw/OiBudW1iZXIsIHN0YXR1c0ludGVydmFsPzogbnVtYmVyLCBkb2NrZXJDcmVkZW50aWFscz86IERvY2tlckNyZWRlbnRpYWxzLCBjb25maWd1cmF0aW9uVmVyc2lvbj86IENvbmZpZ3VyYXRpb25WZXJzaW9uLCBwcm9maWxlSWQ/OiBzdHJpbmcsIGVycm9ycz86IHN0cmluZywgdXBsb2FkU3BlZWQ/OiBzdHJpbmcsIGRvd25sb2FkU3BlZWQ/OiBzdHJpbmcsIHNwZWVkVGVzdGVkT24/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMucHJvZHVjdFR5cGUgPSBwcm9kdWN0VHlwZTtcbiAgICAgICAgdGhpcy5zZXJpYWxOdW1iZXIgPSBzZXJpYWxOdW1iZXI7XG4gICAgICAgIHRoaXMuZGV2aWNlTW9kZWwgPSBkZXZpY2VNb2RlbDtcbiAgICAgICAgdGhpcy5jcHVNb2RlbCA9IGNwdU1vZGVsO1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmlwID0gaXA7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuZG9ja2VyVmVyc2lvbiA9IGRvY2tlclZlcnNpb247XG4gICAgICAgIHRoaXMua2VybmVsVmVyc2lvbiA9IGtlcm5lbFZlcnNpb247XG4gICAgICAgIHRoaXMudG90YWxSYW0gPSB0b3RhbFJhbTtcbiAgICAgICAgdGhpcy5kaXNrcyA9IGRpc2tzO1xuICAgICAgICB0aGlzLmNvbW1hbmRJbnRlcnZhbCA9IGNvbW1hbmRJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5zdGF0dXNJbnRlcnZhbCA9IHN0YXR1c0ludGVydmFsO1xuICAgICAgICB0aGlzLmRvY2tlckNyZWRlbnRpYWxzID0gZG9ja2VyQ3JlZGVudGlhbHM7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvblZlcnNpb24gPSBjb25maWd1cmF0aW9uVmVyc2lvbjtcbiAgICAgICAgdGhpcy5wcm9maWxlSWQgPSBwcm9maWxlSWQ7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgICAgICB0aGlzLnVwbG9hZFNwZWVkID0gdXBsb2FkU3BlZWQ7XG4gICAgICAgIHRoaXMuZG93bmxvYWRTcGVlZCA9IGRvd25sb2FkU3BlZWQ7XG4gICAgICAgIHRoaXMuc3BlZWRUZXN0ZWRPbiA9IHNwZWVkVGVzdGVkT247XG4gICAgfVxuXG59XG5cblxuIl19