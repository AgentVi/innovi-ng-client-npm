/*
   Statistic report record (generated by statistic rule periodically)
*/
export class StatisticReport {
    constructor(accountId, sensorId, ruleId, behaviorType, reportIntervalStart, reportIntervalEnd, totalCount, avgTimeBetween, avgSpeed, reportDetails) {
        this.accountId = accountId;
        this.sensorId = sensorId;
        this.ruleId = ruleId;
        this.behaviorType = behaviorType;
        this.reportIntervalStart = reportIntervalStart;
        this.reportIntervalEnd = reportIntervalEnd;
        this.totalCount = totalCount;
        this.avgTimeBetween = avgTimeBetween;
        this.avgSpeed = avgSpeed;
        this.reportDetails = reportDetails;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlzdGljUmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9jb21tb24vU3RhdGlzdGljUmVwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGVBQWU7SUFnQ3hCLFlBQVksU0FBa0IsRUFBRSxRQUFpQixFQUFFLE1BQWUsRUFBRSxZQUErQixFQUFFLG1CQUE0QixFQUFFLGlCQUEwQixFQUFFLFVBQW1CLEVBQUUsY0FBdUIsRUFBRSxRQUFpQixFQUFFLGFBQWtDO1FBQzlQLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZVJlcG9ydCB9IGZyb20gJy4uL2NvbW1vbi9PYmplY3RUeXBlUmVwb3J0JztcblxuLyogXG4gICBTdGF0aXN0aWMgcmVwb3J0IHJlY29yZCAoZ2VuZXJhdGVkIGJ5IHN0YXRpc3RpYyBydWxlIHBlcmlvZGljYWxseSkgXG4qL1xuZXhwb3J0IGNsYXNzIFN0YXRpc3RpY1JlcG9ydCB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgSWQgXG4gICAgcHVibGljIHJ1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIERldGVjdGVkIGJlaGF2aW9yIHR5cGUgKFVOS05PV04gfCBDUk9TU0lORyB8IE1PVklORyB8IEdST1VQSU5HIHwgT0NDVVBBTkNZIC4uLikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBUaGUgc3RhcnQgdGltZSBvZiB0aGlzIHJlcG9ydCBpbnRlcnZhbCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHJlcG9ydEludGVydmFsU3RhcnQ6IG51bWJlcjtcbiBcbiAgICAvLyBUaGUgZW5kIHRpbWUgb2YgdGhpcyByZXBvcnQgaW50ZXJ2YWwgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyByZXBvcnRJbnRlcnZhbEVuZDogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIENvdW50IGZvciBhbGwgY2xhc3NlcyBcbiAgICBwdWJsaWMgdG90YWxDb3VudDogbnVtYmVyO1xuIFxuICAgIC8vIFRoZSBhdmVyYWdlIHRpbWUgYmV0d2VlbiB2ZWhpY2xlIGNyb3NzaW5nIChtaWxsaXNlY29uZHMpIFxuICAgIHB1YmxpYyBhdmdUaW1lQmV0d2VlbjogbnVtYmVyO1xuIFxuICAgIC8vIEF2ZXJhZ2Ugc3BlZWQgLSAgKG1ldGVycy9zZWNvbmQpIFxuICAgIHB1YmxpYyBhdmdTcGVlZDogbnVtYmVyO1xuIFxuICAgIC8vIERldGFpbGVkIHJlcG9ydCBieSBvYmplY3QgdHlwZSBcbiAgICBwdWJsaWMgcmVwb3J0RGV0YWlsczogT2JqZWN0VHlwZVJlcG9ydFtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZD86IHN0cmluZywgc2Vuc29ySWQ/OiBzdHJpbmcsIHJ1bGVJZD86IHN0cmluZywgYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgcmVwb3J0SW50ZXJ2YWxTdGFydD86IG51bWJlciwgcmVwb3J0SW50ZXJ2YWxFbmQ/OiBudW1iZXIsIHRvdGFsQ291bnQ/OiBudW1iZXIsIGF2Z1RpbWVCZXR3ZWVuPzogbnVtYmVyLCBhdmdTcGVlZD86IG51bWJlciwgcmVwb3J0RGV0YWlscz86IE9iamVjdFR5cGVSZXBvcnRbXSkgeyBcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgICAgIHRoaXMuc2Vuc29ySWQgPSBzZW5zb3JJZDtcbiAgICAgICAgdGhpcy5ydWxlSWQgPSBydWxlSWQ7XG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlID0gYmVoYXZpb3JUeXBlO1xuICAgICAgICB0aGlzLnJlcG9ydEludGVydmFsU3RhcnQgPSByZXBvcnRJbnRlcnZhbFN0YXJ0O1xuICAgICAgICB0aGlzLnJlcG9ydEludGVydmFsRW5kID0gcmVwb3J0SW50ZXJ2YWxFbmQ7XG4gICAgICAgIHRoaXMudG90YWxDb3VudCA9IHRvdGFsQ291bnQ7XG4gICAgICAgIHRoaXMuYXZnVGltZUJldHdlZW4gPSBhdmdUaW1lQmV0d2VlbjtcbiAgICAgICAgdGhpcy5hdmdTcGVlZCA9IGF2Z1NwZWVkO1xuICAgICAgICB0aGlzLnJlcG9ydERldGFpbHMgPSByZXBvcnREZXRhaWxzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==