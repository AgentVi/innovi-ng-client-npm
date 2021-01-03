import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration target describes connectivity attributes of the integrated system
*/
var IntegrationTarget = /** @class */ (function (_super) {
    __extends(IntegrationTarget, _super);
    function IntegrationTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntegrationTarget;
}(BaseEntity));
export { IntegrationTarget };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25UYXJnZXQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvblRhcmdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXBEOztFQUVFO0FBQ0Y7SUFBdUMscUNBQVU7SUFBakQ7O0lBbURBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFuREQsQ0FBdUMsVUFBVSxHQW1EaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBJbnRlZ3JhdGlvblR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvSW50ZWdyYXRpb25UeXBlQ29kZSc7XG5pbXBvcnQgeyBTdHJpbmdLZXlWYWx1ZSB9IGZyb20gJy4uL2NvbW1vbi9TdHJpbmdLZXlWYWx1ZSc7XG5cbi8qIFxuICAgSW50ZWdyYXRpb24gdGFyZ2V0IGRlc2NyaWJlcyBjb25uZWN0aXZpdHkgYXR0cmlidXRlcyBvZiB0aGUgaW50ZWdyYXRlZCBzeXN0ZW0gXG4qL1xuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uVGFyZ2V0IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIHR5cGUgXG4gICAgcHVibGljIHR5cGU6IEludGVncmF0aW9uVHlwZUNvZGU7XG4gXG4gICAgLy8gSG9zdCBuYW1lIG9yIGlwIGFkZHJlc3MgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBob3N0OiBzdHJpbmc7XG4gXG4gICAgLy8gUG9ydCBudW1iZXIgKGFwcGxpY2FibGUgZm9yIGFsbCBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBwb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gVXNlciAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIHVzZXI6IHN0cmluZztcbiBcbiAgICAvLyBQYXNzd29yZCAoYXBwbGljYWJsZSBmb3IgYWxsIHByb3RvY29scykgXG4gICAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmc7XG4gXG4gICAgLy8gSFRUUCBwcm90b2NvbCBVUkwgcGF0aCAoYXBwbGljYWJsZSBmb3IgaHR0cC9odHRwcyBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyB1cmw6IHN0cmluZztcbiBcbiAgICAvLyBIVFRQIHByb3RvY29sIE9wZXJhdGlvbjogR0VUIHwgUE9TVCB8IFBVVCAoYXBwbGljYWJsZSBmb3IgaHR0cC9odHRwcyBwcm90b2NvbHMpIFxuICAgIHB1YmxpYyBvcGVyYXRpb246IHN0cmluZztcbiBcbiAgICAvLyBIVFRQIHByb3RvY29sIEhlYWRlcnMgKGFwcGxpY2FibGUgZm9yIGh0dHAvaHR0cHMgcHJvdG9jb2xzKSBcbiAgICBwdWJsaWMgaGVhZGVyczogU3RyaW5nS2V5VmFsdWVbXTtcbiBcbiAgICAvLyBJcyB0aGUgaW50ZWdyYXRpb24gZW5hYmxlZD8gXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==