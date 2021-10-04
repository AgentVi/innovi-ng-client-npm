import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration action describes content details to use for a specific integration target
*/
export class IntegrationAction extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL0ludGVncmF0aW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUFVO0NBbURoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEVudGl0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRW50aXR5VHlwZUNvZGUnO1xuXG4vKiBcbiAgIEludGVncmF0aW9uIGFjdGlvbiBkZXNjcmliZXMgY29udGVudCBkZXRhaWxzIHRvIHVzZSBmb3IgYSBzcGVjaWZpYyBpbnRlZ3JhdGlvbiB0YXJnZXQgXG4qL1xuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uQWN0aW9uIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkIChFbXB0eSBpZiBpbnRlZ3JhdGlvbiBpcyBhc3NvY2lhdGVkIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IElkIFxuICAgIHB1YmxpYyB0YXJnZXRJZDogc3RyaW5nO1xuIFxuICAgIC8vIE9uIHdoaWNoIGVudGl0eSB0byBwZXJmb3JtIGludGVncmF0aW9uOiBFVkVOVCB8IEhFQUxUSF9FVkVOVCBcbiAgICBwdWJsaWMgZW50aXR5VHlwZTogRW50aXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gTGlzdCBvZiByZWNpcGllbnRzIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgcmVjaXBpZW50czogc3RyaW5nW107XG4gXG4gICAgLy8gTWVzc2FnZSBzdWJqZWN0IHRlbXBsYXRlIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgc3ViamVjdDogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgYm9keSB0ZW1wbGF0ZSBcbiAgICBwdWJsaWMgYm9keTogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgY29udGVudCBtaW1lIHR5cGUgXG4gICAgcHVibGljIG1pbWVUeXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhlIGludGVncmF0aW9uIGFjdGlvbiBlbmFibGVkPyBcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBGaWx0ZXIgY3JpdGVyaWEgZm9yIGNvbmRpdGlvbmFsIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBmaWx0ZXJzOiBhbnk7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==