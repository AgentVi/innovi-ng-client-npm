import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
export class Appliance extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUtwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxTQUFVLFNBQVEsVUFBVTtDQWtFeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi9lbnRpdGllcy9BcHBsaWFuY2VDYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHsgVGhyZXNob2xkcyB9IGZyb20gJy4uL2NvbW1vbi9UaHJlc2hvbGRzJztcblxuLyogXG4gICBBcHBsaWFuY2UgKHJlZmVycmVkIGFsc28gYXMgRWRnZSBvciBEZXZpY2UpIGlzIHRoZSBlZGdlIGRldmljZSBpbiB0aGUgY2FtZXJhIG5ldHdvcmsgaG9zdGluZyB0aGUgYW5hbHl0aWNzIGFnZW50KHMpIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2UgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBcHBsaWFuY2UgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IHN0YXR1czogVU5ERUZJTkVEIHwgQUNUSVZFIHwgU1VTUEVOREVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFwcGxpYW5jZVN0YXR1c0NvZGU7XG4gXG4gICAgLy8gV2hlbiB3YXMgdGhlIGxhc3Qgc3RhdHVzIHJlcG9ydCB1cGRhdGUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBzdGF0dXNSZXBvcnRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHBhaXJpbmcga2UgKHVzZWQgdG8gcGFpciB0aGUgZGV2aWNlIHRvIHRoZSBhY2NvdW50IG9uIGZpcnN0IGluc3RhbGxhdGlvbikgXG4gICAgcHVibGljIHBhaXJpbmdLZXk6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIGFwcGxpYW5jZSB3YXMgZGVsZXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGRlbGV0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gYXBwbGlhbmNlIGxhc3QgcmVwb3J0ZWQgc3RhdHVzIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgcmVwb3J0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFBoeXNpY2FsIG1hY2hpbmUgaWRlbnRpZmllciAoc2VyaWFsIG51bWJlcikgXG4gICAgcHVibGljIG1hY2hpbmVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIGlkIFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgU1cgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGlkIFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uVmVyc2lvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIGNhcGFiaWxpdGllcyBcbiAgICBwdWJsaWMgY2FwYWJpbGl0aWVzOiBBcHBsaWFuY2VDYXBhYmlsaXRpZXM7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IGlkIGZvciBsb2NhbCBldmVudHMgaW50ZWdyYXRpb24gXG4gICAgcHVibGljIGV2ZW50SW50ZWdyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBpZCBmb3IgbG9jYWwgbWV0YWRhdGEgaW50ZWdyYXRpb24gXG4gICAgcHVibGljIG1ldGFkYXRhSW50ZWdyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEN1c3RvbSBwcm9maWxlIHRvIG92ZXJyaWRlIGdlbmVyYWwgcGFja2FnZSBwYXJhbWV0ZXJzIFxuICAgIHB1YmxpYyBkZXZpY2VQcm9maWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgcGF0aCBpbiB0aGUgYWNjb3VudCBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBIZWFsdGggbm90aWZpY2F0aW9ucyB0aHJlc2hvbGRzIFxuICAgIHB1YmxpYyBoZWFsdGhUaHJlc2hvbGRzOiBUaHJlc2hvbGRzO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==