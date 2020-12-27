/*
   Statistic report record (generated by statistic rule periodically)
*/
var StatisticReport = /** @class */ (function () {
    function StatisticReport(accountId, sensorId, ruleId, behaviorType, reportIntervalStart, reportIntervalEnd, totalCount, avgTimeBetween, avgSpeed, reportDetails) {
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
    return StatisticReport;
}());
export { StatisticReport };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdGlzdGljUmVwb3J0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1N0YXRpc3RpY1JlcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRTtBQUNGO0lBZ0NJLHlCQUFZLFNBQWtCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsWUFBK0IsRUFBRSxtQkFBNEIsRUFBRSxpQkFBMEIsRUFBRSxVQUFtQixFQUFFLGNBQXVCLEVBQUUsUUFBaUIsRUFBRSxhQUFrQztRQUM5UCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTCxzQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlUmVwb3J0IH0gZnJvbSAnLi4vY29tbW9uL09iamVjdFR5cGVSZXBvcnQnO1xuXG4vKiBcbiAgIFN0YXRpc3RpYyByZXBvcnQgcmVjb3JkIChnZW5lcmF0ZWQgYnkgc3RhdGlzdGljIHJ1bGUgcGVyaW9kaWNhbGx5KSBcbiovXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljUmVwb3J0IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBJZCBcbiAgICBwdWJsaWMgcnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgYmVoYXZpb3IgdHlwZSAoVU5LTk9XTiB8IENST1NTSU5HIHwgTU9WSU5HIHwgR1JPVVBJTkcgfCBPQ0NVUEFOQ1kgLi4uKSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFRoZSBzdGFydCB0aW1lIG9mIHRoaXMgcmVwb3J0IGludGVydmFsIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgcmVwb3J0SW50ZXJ2YWxTdGFydDogbnVtYmVyO1xuIFxuICAgIC8vIFRoZSBlbmQgdGltZSBvZiB0aGlzIHJlcG9ydCBpbnRlcnZhbCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHJlcG9ydEludGVydmFsRW5kOiBudW1iZXI7XG4gXG4gICAgLy8gVG90YWwgQ291bnQgZm9yIGFsbCBjbGFzc2VzIFxuICAgIHB1YmxpYyB0b3RhbENvdW50OiBudW1iZXI7XG4gXG4gICAgLy8gVGhlIGF2ZXJhZ2UgdGltZSBiZXR3ZWVuIHZlaGljbGUgY3Jvc3NpbmcgKG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIGF2Z1RpbWVCZXR3ZWVuOiBudW1iZXI7XG4gXG4gICAgLy8gQXZlcmFnZSBzcGVlZCAtICAobWV0ZXJzL3NlY29uZCkgXG4gICAgcHVibGljIGF2Z1NwZWVkOiBudW1iZXI7XG4gXG4gICAgLy8gRGV0YWlsZWQgcmVwb3J0IGJ5IG9iamVjdCB0eXBlIFxuICAgIHB1YmxpYyByZXBvcnREZXRhaWxzOiBPYmplY3RUeXBlUmVwb3J0W107XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBzZW5zb3JJZD86IHN0cmluZywgcnVsZUlkPzogc3RyaW5nLCBiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCByZXBvcnRJbnRlcnZhbFN0YXJ0PzogbnVtYmVyLCByZXBvcnRJbnRlcnZhbEVuZD86IG51bWJlciwgdG90YWxDb3VudD86IG51bWJlciwgYXZnVGltZUJldHdlZW4/OiBudW1iZXIsIGF2Z1NwZWVkPzogbnVtYmVyLCByZXBvcnREZXRhaWxzPzogT2JqZWN0VHlwZVJlcG9ydFtdKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5zZW5zb3JJZCA9IHNlbnNvcklkO1xuICAgICAgICB0aGlzLnJ1bGVJZCA9IHJ1bGVJZDtcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGUgPSBiZWhhdmlvclR5cGU7XG4gICAgICAgIHRoaXMucmVwb3J0SW50ZXJ2YWxTdGFydCA9IHJlcG9ydEludGVydmFsU3RhcnQ7XG4gICAgICAgIHRoaXMucmVwb3J0SW50ZXJ2YWxFbmQgPSByZXBvcnRJbnRlcnZhbEVuZDtcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcbiAgICAgICAgdGhpcy5hdmdUaW1lQmV0d2VlbiA9IGF2Z1RpbWVCZXR3ZWVuO1xuICAgICAgICB0aGlzLmF2Z1NwZWVkID0gYXZnU3BlZWQ7XG4gICAgICAgIHRoaXMucmVwb3J0RGV0YWlscyA9IHJlcG9ydERldGFpbHM7XG4gICAgfVxuXG59XG5cblxuIl19