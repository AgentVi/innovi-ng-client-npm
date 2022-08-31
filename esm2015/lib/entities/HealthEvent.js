import { BaseEntity } from '../entities/BaseEntity';
/*
   Health event type (combines multiple health events: sensor health event, appliance health event...)
*/
export class HealthEvent extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbHRoRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL0hlYWx0aEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtDQW1EMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0VudGl0eVR5cGVDb2RlJztcbmltcG9ydCB7IEludGVncmF0aW9uU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0ludGVncmF0aW9uU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgSGVhbHRoIGV2ZW50IHR5cGUgKGNvbWJpbmVzIG11bHRpcGxlIGhlYWx0aCBldmVudHM6IHNlbnNvciBoZWFsdGggZXZlbnQsIGFwcGxpYW5jZSBoZWFsdGggZXZlbnQuLi4pIFxuKi9cbmV4cG9ydCBjbGFzcyBIZWFsdGhFdmVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNvdXJjZSBvZiBoZWFsdGggZXZlbnQgKGNhbiBiZSBvbmx5IEFQUExJQU5DRSBvciBBR0VOVCBvciBTRU5TT1IpIFxuICAgIHB1YmxpYyBzb3VyY2U6IEVudGl0eVR5cGVDb2RlO1xuIFxuICAgIC8vIFNvdXJjZSBFbnRpdHkgSWQgXG4gICAgcHVibGljIGVudGl0eUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gU291cmNlIEVudGl0eSBleHRlcm5hbCBJZCBcbiAgICBwdWJsaWMgZW50aXR5RXh0SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTb3VyY2UgRW50aXR5IE5hbWUgXG4gICAgcHVibGljIGVudGl0eU5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBoZWFsdGggc3RhdHVzIGhhcyBjaGFuZ2VkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3RhcnRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgaGVhbHRoIGV2ZW50IHdhcyBjbG9zZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjbG9zZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBzdGF0dXMgXG4gICAgcHVibGljIHN0YXR1czogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSByZWFsIHRpbWUgc3RhdGUgYml0IG1hc2sgZmxhZ3MgXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgaW50ZWdyYXRpb24gc3RhdHVzIFxuICAgIHB1YmxpYyBpbnRlZ3JhdGlvblN0YXR1czogSW50ZWdyYXRpb25TdGF0dXNDb2RlO1xuIFxuICAgIC8vIElzIHVzZXItdHJpZ2dlcmVkIHRlc3QgaGVhbHRoIGV2ZW50IFxuICAgIHB1YmxpYyB0ZXN0RXZlbnQ6IGJvb2xlYW47XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==