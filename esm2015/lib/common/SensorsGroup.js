/*
   Group of sensor data with common attributes
*/
export class SensorsGroup {
    constructor(accountId, folderId, applianceId, agentId, sensors) {
        this.accountId = accountId;
        this.folderId = folderId;
        this.applianceId = applianceId;
        this.agentId = agentId;
        this.sensors = sensors;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yc0dyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9jb21tb24vU2Vuc29yc0dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFlBQVk7SUFpQnJCLFlBQVksU0FBa0IsRUFBRSxRQUFpQixFQUFFLFdBQW9CLEVBQUUsT0FBZ0IsRUFBRSxPQUFzQjtRQUM3RyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zb3JJbmZvIH0gZnJvbSAnLi4vY29tbW9uL1NlbnNvckluZm8nO1xuXG4vKiBcbiAgIEdyb3VwIG9mIHNlbnNvciBkYXRhIHdpdGggY29tbW9uIGF0dHJpYnV0ZXMgXG4qL1xuZXhwb3J0IGNsYXNzIFNlbnNvcnNHcm91cCB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkIChlbXB0eSBmb3Igcm9vdCBmb2xkZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBJZCBcbiAgICBwdWJsaWMgYXBwbGlhbmNlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBZ2VudCBJZCAoUmVsZXZhbnQgZm9yIG5ldyBwaXBlbGluZSBvbmx5KSBcbiAgICBwdWJsaWMgYWdlbnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2Ygc2Vuc29yIGNvbmZpZ3VyYXRpb24gaW5mbyBcbiAgICBwdWJsaWMgc2Vuc29yczogU2Vuc29ySW5mb1tdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGFjY291bnRJZD86IHN0cmluZywgZm9sZGVySWQ/OiBzdHJpbmcsIGFwcGxpYW5jZUlkPzogc3RyaW5nLCBhZ2VudElkPzogc3RyaW5nLCBzZW5zb3JzPzogU2Vuc29ySW5mb1tdKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5mb2xkZXJJZCA9IGZvbGRlcklkO1xuICAgICAgICB0aGlzLmFwcGxpYW5jZUlkID0gYXBwbGlhbmNlSWQ7XG4gICAgICAgIHRoaXMuYWdlbnRJZCA9IGFnZW50SWQ7XG4gICAgICAgIHRoaXMuc2Vuc29ycyA9IHNlbnNvcnM7XG4gICAgfVxuXG59XG5cblxuIl19