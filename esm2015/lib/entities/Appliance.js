import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
export class Appliance extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnRpdGllcy9BcHBsaWFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXBEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFNBQVUsU0FBUSxVQUFVO0NBMkV4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpYW5jZUNhcGFiaWxpdGllcyB9IGZyb20gJy4uL2VudGl0aWVzL0FwcGxpYW5jZUNhcGFiaWxpdGllcyc7XG5pbXBvcnQgeyBUaHJlc2hvbGRzIH0gZnJvbSAnLi4vY29tbW9uL1RocmVzaG9sZHMnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQWdlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWdlbnRTdGF0dXNDb2RlJztcblxuLyogXG4gICBBcHBsaWFuY2UgKHJlZmVycmVkIGFsc28gYXMgRWRnZSBvciBEZXZpY2UpIGlzIHRoZSBlZGdlIGRldmljZSBpbiB0aGUgY2FtZXJhIG5ldHdvcmsgaG9zdGluZyB0aGUgYW5hbHl0aWNzIGFnZW50KHMpIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2UgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBcHBsaWFuY2UgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2Ugc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogQXBwbGlhbmNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBcHBsaWFuY2UgcmVhbCB0aW1lIHN0YXRlIGJpdCBtYXNrIGZsYWdzIFxuICAgIHB1YmxpYyBzdGF0ZTogbnVtYmVyO1xuIFxuICAgIC8vIEFnZW50IHN0YXR1cyBcbiAgICBwdWJsaWMgYWdlbnRTdGF0dXM6IEFnZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBZ2VudCByZWFsIHRpbWUgc3RhdGUgYml0IG1hc2sgZmxhZ3MgXG4gICAgcHVibGljIGFnZW50U3RhdGU6IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHdhcyB0aGUgbGFzdCBzdGF0dXMgcmVwb3J0IHVwZGF0ZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN0YXR1c1JlcG9ydGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBBcHBsaWFuY2UgcGFpcmluZyBrZSAodXNlZCB0byBwYWlyIHRoZSBkZXZpY2UgdG8gdGhlIGFjY291bnQgb24gZmlyc3QgaW5zdGFsbGF0aW9uKSBcbiAgICBwdWJsaWMgcGFpcmluZ0tleTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gYXBwbGlhbmNlIHdhcyBkZWxldGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZGVsZXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiBhcHBsaWFuY2UgbGFzdCByZXBvcnRlZCBzdGF0dXMgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyByZXBvcnRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gUGh5c2ljYWwgbWFjaGluZSBpZGVudGlmaWVyIChzZXJpYWwgbnVtYmVyKSBcbiAgICBwdWJsaWMgbWFjaGluZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIHZlcnNpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgY2FwYWJpbGl0aWVzIFxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXM6IEFwcGxpYW5jZUNhcGFiaWxpdGllcztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgaWQgZm9yIGxvY2FsIGV2ZW50cyBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRJbnRlZ3JhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IGlkIGZvciBsb2NhbCBtZXRhZGF0YSBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgbWV0YWRhdGFJbnRlZ3JhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VzdG9tIHByb2ZpbGUgdG8gb3ZlcnJpZGUgZ2VuZXJhbCBwYWNrYWdlIHBhcmFtZXRlcnMgXG4gICAgcHVibGljIGRldmljZVByb2ZpbGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEhlYWx0aCBub3RpZmljYXRpb25zIHRocmVzaG9sZHMgXG4gICAgcHVibGljIGhlYWx0aFRocmVzaG9sZHM6IFRocmVzaG9sZHM7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==