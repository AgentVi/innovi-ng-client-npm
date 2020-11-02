import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
export class Appliance extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxTQUFVLFNBQVEsVUFBVTtDQTJFeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWFuY2VDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi9lbnRpdGllcy9BcHBsaWFuY2VDYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHsgVGhyZXNob2xkcyB9IGZyb20gJy4uL2NvbW1vbi9UaHJlc2hvbGRzJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEFwcGxpYW5jZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFnZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FnZW50U3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgQXBwbGlhbmNlIChyZWZlcnJlZCBhbHNvIGFzIEVkZ2Ugb3IgRGV2aWNlKSBpcyB0aGUgZWRnZSBkZXZpY2UgaW4gdGhlIGNhbWVyYSBuZXR3b3JrIGhvc3RpbmcgdGhlIGFuYWx5dGljcyBhZ2VudChzKSBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQXBwbGlhbmNlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgSWQgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHN0YXR1czogVU5ERUZJTkVEIHwgQUNUSVZFIHwgU1VTUEVOREVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFwcGxpYW5jZVN0YXR1c0NvZGU7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHJlYWwgdGltZSBzdGF0ZSBiaXQgbWFzayBmbGFncyBcbiAgICBwdWJsaWMgc3RhdGU6IG51bWJlcjtcbiBcbiAgICAvLyBBZ2VudCBzdGF0dXMgXG4gICAgcHVibGljIGFnZW50U3RhdHVzOiBBZ2VudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gQWdlbnQgcmVhbCB0aW1lIHN0YXRlIGJpdCBtYXNrIGZsYWdzIFxuICAgIHB1YmxpYyBhZ2VudFN0YXRlOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB3YXMgdGhlIGxhc3Qgc3RhdHVzIHJlcG9ydCB1cGRhdGUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBzdGF0dXNSZXBvcnRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHBhaXJpbmcga2UgKHVzZWQgdG8gcGFpciB0aGUgZGV2aWNlIHRvIHRoZSBhY2NvdW50IG9uIGZpcnN0IGluc3RhbGxhdGlvbikgXG4gICAgcHVibGljIHBhaXJpbmdLZXk6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIGFwcGxpYW5jZSB3YXMgZGVsZXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGRlbGV0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gYXBwbGlhbmNlIGxhc3QgcmVwb3J0ZWQgc3RhdHVzIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgcmVwb3J0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFBoeXNpY2FsIG1hY2hpbmUgaWRlbnRpZmllciAoc2VyaWFsIG51bWJlcikgXG4gICAgcHVibGljIG1hY2hpbmVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIGlkIFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgU1cgY29uZmlndXJhdGlvbiB2ZXJzaW9uIGlkIFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uVmVyc2lvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIGNhcGFiaWxpdGllcyBcbiAgICBwdWJsaWMgY2FwYWJpbGl0aWVzOiBBcHBsaWFuY2VDYXBhYmlsaXRpZXM7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IGlkIGZvciBsb2NhbCBldmVudHMgaW50ZWdyYXRpb24gXG4gICAgcHVibGljIGV2ZW50SW50ZWdyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBpZCBmb3IgbG9jYWwgbWV0YWRhdGEgaW50ZWdyYXRpb24gXG4gICAgcHVibGljIG1ldGFkYXRhSW50ZWdyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEN1c3RvbSBwcm9maWxlIHRvIG92ZXJyaWRlIGdlbmVyYWwgcGFja2FnZSBwYXJhbWV0ZXJzIFxuICAgIHB1YmxpYyBkZXZpY2VQcm9maWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBEZXZpY2UgcGF0aCBpbiB0aGUgYWNjb3VudCBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBIZWFsdGggbm90aWZpY2F0aW9ucyB0aHJlc2hvbGRzIFxuICAgIHB1YmxpYyBoZWFsdGhUaHJlc2hvbGRzOiBUaHJlc2hvbGRzO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==