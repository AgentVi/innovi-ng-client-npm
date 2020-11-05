import { BaseEntity } from '../entities/BaseEntity';
/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
export class Calendar extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7OztFQUdFO0FBQ0YsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0NBb0N2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic29sdXRlVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL0Fic29sdXRlVGltZUZyYW1lJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBDYWxlbmRhciBpcyBhIGxpc3Qgb2YgYWJzb2x1dGUgdGltZSBmcmFtZXMgKHJlcHJlc2VudGluZyBldmVudHMgb3IgaG9saWRheXMpIHRvIHNwZWNpZnkgYWN0aXZlIGFuYWx5dGljc1xuICAgQ2FsZW5kYXIgdGltZSBmcmFtZXMgb3ZlcnJpZGUgdGhlIHNjaGVkdWxlIGUuZy4gaWYgdGhlIGN1cnJlbnQgdGltZSBmYWxscyBpbnRvIGEgbm9uLXNjaGVkdWxlZCB0aW1lIGZyYW1lIChub24tYWN0aXZlIGFuYWx5dGljcykgYnV0IGFsc28gZHVyaW5nIGEgY2FsZW5kYXIgdGltZSBmcmFtZSwgYW5hbHl0aWNzIHNoYWxsIGJlIGFjdGl2ZSBcbiovXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgSWQgKHVzZSBlbXB0eSBzdHJpbmcgdG8gYXNzb2NpYXRlIHRoZSBjYWxlbmRhciB0byB0aGUgYWNjb3VudCBsZXZlbCkgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ2FsZW5kYXIgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIENhbGVuZGFyIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoaXMgY2FsZW5kYXIgaXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBMaXN0IG9mIHRpbWUgZnJhbWVzIFxuICAgIHB1YmxpYyB0aW1lRnJhbWVzOiBBYnNvbHV0ZVRpbWVGcmFtZVtdO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgZHVyaW5nIHRoIHRpbWUgZnJhbWUgcnVsZSB3aWxsIGJlIGFjdGl2ZSAoZmFsc2UpIG9yIGluYWN0aXZlICh0cmUpIC0gdGhlIGRlZmF1bHQgaXMgZmFsc2UgXG4gICAgcHVibGljIGluYWN0aXZlUnVsZTogYm9vbGVhbjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=