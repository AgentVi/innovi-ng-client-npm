import { BaseEntity } from '../entities/BaseEntity';
/*
   Health event type (combines multiple health events: sensor health event, appliance health event...)
*/
export class HealthEvent extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbHRoRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9IZWFsdGhFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFHcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sV0FBWSxTQUFRLFVBQVU7Q0E2QzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZWdyYXRpb25TdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvSW50ZWdyYXRpb25TdGF0dXNDb2RlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEVudGl0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRW50aXR5VHlwZUNvZGUnO1xuXG4vKiBcbiAgIEhlYWx0aCBldmVudCB0eXBlIChjb21iaW5lcyBtdWx0aXBsZSBoZWFsdGggZXZlbnRzOiBzZW5zb3IgaGVhbHRoIGV2ZW50LCBhcHBsaWFuY2UgaGVhbHRoIGV2ZW50Li4uKSBcbiovXG5leHBvcnQgY2xhc3MgSGVhbHRoRXZlbnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTb3VyY2Ugb2YgaGVhbHRoIGV2ZW50IChjYW4gYmUgb25seSBBUFBMSUFOQ0Ugb3IgQUdFTlQgb3IgU0VOU09SKSBcbiAgICBwdWJsaWMgc291cmNlOiBFbnRpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBTb3VyY2UgRW50aXR5IElkIFxuICAgIHB1YmxpYyBlbnRpdHlJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNvdXJjZSBFbnRpdHkgZXh0ZXJuYWwgSWQgXG4gICAgcHVibGljIGVudGl0eUV4dElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU291cmNlIEVudGl0eSBOYW1lIFxuICAgIHB1YmxpYyBlbnRpdHlOYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgaGVhbHRoIHN0YXR1cyBoYXMgY2hhbmdlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN0YXJ0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGhlYWx0aCBldmVudCB3YXMgY2xvc2VkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY2xvc2VkT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgc3RhdHVzIFxuICAgIHB1YmxpYyBzdGF0dXM6IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgcmVhbCB0aW1lIHN0YXRlIGJpdCBtYXNrIGZsYWdzIFxuICAgIHB1YmxpYyBzdGF0ZTogbnVtYmVyO1xuIFxuICAgIC8vIEV2ZW50IGludGVncmF0aW9uIHN0YXR1cyBcbiAgICBwdWJsaWMgaW50ZWdyYXRpb25TdGF0dXM6IEludGVncmF0aW9uU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=