import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
export class Appliance extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxTQUFVLFNBQVEsVUFBVTtDQXlEeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VDYXBhYmlsaXRpZXMgfSBmcm9tICcuLi9lbnRpdGllcy9BcHBsaWFuY2VDYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEFwcGxpYW5jZSAocmVmZXJyZWQgYWxzbyBhcyBFZGdlIG9yIERldmljZSkgaXMgdGhlIGVkZ2UgZGV2aWNlIGluIHRoZSBjYW1lcmEgbmV0d29yayBob3N0aW5nIHRoZSBhbmFseXRpY3MgYWdlbnQocykgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFwcGxpYW5jZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogQXBwbGlhbmNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHdhcyB0aGUgbGFzdCBzdGF0dXMgcmVwb3J0IHVwZGF0ZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN0YXR1c1JlcG9ydGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBBcHBsaWFuY2UgcGFpcmluZyBrZSAodXNlZCB0byBwYWlyIHRoZSBkZXZpY2UgdG8gdGhlIGFjY291bnQgb24gZmlyc3QgaW5zdGFsbGF0aW9uKSBcbiAgICBwdWJsaWMgcGFpcmluZ0tleTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gYXBwbGlhbmNlIHdhcyBkZWxldGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZGVsZXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiBhcHBsaWFuY2UgbGFzdCByZXBvcnRlZCBzdGF0dXMgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyByZXBvcnRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gUGh5c2ljYWwgbWFjaGluZSBpZGVudGlmaWVyIChzZXJpYWwgbnVtYmVyKSBcbiAgICBwdWJsaWMgbWFjaGluZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIHZlcnNpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgY2FwYWJpbGl0aWVzIFxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXM6IEFwcGxpYW5jZUNhcGFiaWxpdGllcztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgaWQgZm9yIGxvY2FsIGV2ZW50cyBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRJbnRlZ3JhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IGlkIGZvciBsb2NhbCBtZXRhZGF0YSBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgbWV0YWRhdGFJbnRlZ3JhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19