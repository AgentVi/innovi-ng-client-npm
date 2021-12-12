import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration action describes content details to use for a specific integration target
*/
export class IntegrationAction extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL0ludGVncmF0aW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0NBc0RoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbk1vZGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWN0aW9uTW9kZUNvZGUnO1xuaW1wb3J0IHsgSW50ZWdyYXRpb25BY3Rpb25GaWx0ZXIgfSBmcm9tICcuLi9lbnRpdGllcy9JbnRlZ3JhdGlvbkFjdGlvbkZpbHRlcic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBFbnRpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0VudGl0eVR5cGVDb2RlJztcblxuLyogXG4gICBJbnRlZ3JhdGlvbiBhY3Rpb24gZGVzY3JpYmVzIGNvbnRlbnQgZGV0YWlscyB0byB1c2UgZm9yIGEgc3BlY2lmaWMgaW50ZWdyYXRpb24gdGFyZ2V0IFxuKi9cbmV4cG9ydCBjbGFzcyBJbnRlZ3JhdGlvbkFjdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCAoRW1wdHkgaWYgaW50ZWdyYXRpb24gaXMgYXNzb2NpYXRlZCB0byB0aGUgYWNjb3VudCBsZXZlbCkgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBJZCBcbiAgICBwdWJsaWMgdGFyZ2V0SWQ6IHN0cmluZztcbiBcbiAgICAvLyBPbiB3aGljaCBlbnRpdHkgdG8gcGVyZm9ybSBpbnRlZ3JhdGlvbjogRVZFTlQgfCBIRUFMVEhfRVZFTlQgXG4gICAgcHVibGljIGVudGl0eVR5cGU6IEVudGl0eVR5cGVDb2RlO1xuIFxuICAgIC8vIExpc3Qgb2YgcmVjaXBpZW50cyAoYXBwbGljYWJsZSBmb3IgU01UUC9FTUFJTCBwcm90b2NvbCkgXG4gICAgcHVibGljIHJlY2lwaWVudHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIE1lc3NhZ2Ugc3ViamVjdCB0ZW1wbGF0ZSAoYXBwbGljYWJsZSBmb3IgU01UUC9FTUFJTCBwcm90b2NvbCkgXG4gICAgcHVibGljIHN1YmplY3Q6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGJvZHkgdGVtcGxhdGUgXG4gICAgcHVibGljIGJvZHk6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGNvbnRlbnQgbWltZSB0eXBlIFxuICAgIHB1YmxpYyBtaW1lVHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoZSBpbnRlZ3JhdGlvbiBhY3Rpb24gZW5hYmxlZD8gXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIG1vZGU6IFVOREVGSU5FRCB8IE1BTlVBTCB8IEFVVE8gXG4gICAgcHVibGljIG1vZGU6IEFjdGlvbk1vZGVDb2RlO1xuIFxuICAgIC8vIEZpbHRlciBjcml0ZXJpYSBmb3IgY29uZGl0aW9uYWwgaW50ZWdyYXRpb24gXG4gICAgcHVibGljIGZpbHRlcjogSW50ZWdyYXRpb25BY3Rpb25GaWx0ZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==