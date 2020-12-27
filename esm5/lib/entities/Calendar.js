import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Calendar is a list of absolute time frames (representing events or holidays) to specify active analytics
   Calendar time frames override the schedule e.g. if the current time falls into a non-scheduled time frame (non-active analytics) but also during a calendar time frame, analytics shall be active
*/
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Calendar;
}(BaseEntity));
export { Calendar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9DYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBEOzs7RUFHRTtBQUNGO0lBQThCLDRCQUFVO0lBQXhDOztJQW9DQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMsQUFwQ0QsQ0FBOEIsVUFBVSxHQW9DdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnNvbHV0ZVRpbWVGcmFtZSB9IGZyb20gJy4uL2NvbW1vbi9BYnNvbHV0ZVRpbWVGcmFtZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQ2FsZW5kYXIgaXMgYSBsaXN0IG9mIGFic29sdXRlIHRpbWUgZnJhbWVzIChyZXByZXNlbnRpbmcgZXZlbnRzIG9yIGhvbGlkYXlzKSB0byBzcGVjaWZ5IGFjdGl2ZSBhbmFseXRpY3NcbiAgIENhbGVuZGFyIHRpbWUgZnJhbWVzIG92ZXJyaWRlIHRoZSBzY2hlZHVsZSBlLmcuIGlmIHRoZSBjdXJyZW50IHRpbWUgZmFsbHMgaW50byBhIG5vbi1zY2hlZHVsZWQgdGltZSBmcmFtZSAobm9uLWFjdGl2ZSBhbmFseXRpY3MpIGJ1dCBhbHNvIGR1cmluZyBhIGNhbGVuZGFyIHRpbWUgZnJhbWUsIGFuYWx5dGljcyBzaGFsbCBiZSBhY3RpdmUgXG4qL1xuZXhwb3J0IGNsYXNzIENhbGVuZGFyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkICh1c2UgZW1wdHkgc3RyaW5nIHRvIGFzc29jaWF0ZSB0aGUgY2FsZW5kYXIgdG8gdGhlIGFjY291bnQgbGV2ZWwpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIENhbGVuZGFyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBDYWxlbmRhciBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBJcyB0aGlzIGNhbGVuZGFyIGlzIGVuYWJsZWQgXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gTGlzdCBvZiB0aW1lIGZyYW1lcyBcbiAgICBwdWJsaWMgdGltZUZyYW1lczogQWJzb2x1dGVUaW1lRnJhbWVbXTtcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIGR1cmluZyB0aCB0aW1lIGZyYW1lIHJ1bGUgd2lsbCBiZSBhY3RpdmUgKGZhbHNlKSBvciBpbmFjdGl2ZSAodHJlKSAtIHRoZSBkZWZhdWx0IGlzIGZhbHNlIFxuICAgIHB1YmxpYyBpbmFjdGl2ZVJ1bGU6IGJvb2xlYW47XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19