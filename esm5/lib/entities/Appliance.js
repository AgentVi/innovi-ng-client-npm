import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
var Appliance = /** @class */ (function (_super) {
    __extends(Appliance, _super);
    function Appliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Appliance;
}(BaseEntity));
export { Appliance };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7O0VBRUU7QUFDRjtJQUErQiw2QkFBVTtJQUF6Qzs7SUE0REEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQTVERCxDQUErQixVQUFVLEdBNER4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcGxpYW5jZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFwcGxpYW5jZUNhcGFiaWxpdGllcyB9IGZyb20gJy4uL2VudGl0aWVzL0FwcGxpYW5jZUNhcGFiaWxpdGllcyc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQXBwbGlhbmNlIChyZWZlcnJlZCBhbHNvIGFzIEVkZ2Ugb3IgRGV2aWNlKSBpcyB0aGUgZWRnZSBkZXZpY2UgaW4gdGhlIGNhbWVyYSBuZXR3b3JrIGhvc3RpbmcgdGhlIGFuYWx5dGljcyBhZ2VudChzKSBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQXBwbGlhbmNlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgSWQgXG4gICAgcHVibGljIGZvbGRlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBzdGF0dXM6IFVOREVGSU5FRCB8IEFDVElWRSB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBBcHBsaWFuY2VTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFdoZW4gd2FzIHRoZSBsYXN0IHN0YXR1cyByZXBvcnQgdXBkYXRlIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3RhdHVzUmVwb3J0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBwYWlyaW5nIGtlICh1c2VkIHRvIHBhaXIgdGhlIGRldmljZSB0byB0aGUgYWNjb3VudCBvbiBmaXJzdCBpbnN0YWxsYXRpb24pIFxuICAgIHB1YmxpYyBwYWlyaW5nS2V5OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiBhcHBsaWFuY2Ugd2FzIGRlbGV0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBkZWxldGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIGFwcGxpYW5jZSBsYXN0IHJlcG9ydGVkIHN0YXR1cyBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHJlcG9ydGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBQaHlzaWNhbCBtYWNoaW5lIGlkZW50aWZpZXIgKHNlcmlhbCBudW1iZXIpIFxuICAgIHB1YmxpYyBtYWNoaW5lSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgU1cgY29uZmlndXJhdGlvbiBpZCBcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiBpZCBcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvblZlcnNpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBjYXBhYmlsaXRpZXMgXG4gICAgcHVibGljIGNhcGFiaWxpdGllczogQXBwbGlhbmNlQ2FwYWJpbGl0aWVzO1xuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBpZCBmb3IgbG9jYWwgZXZlbnRzIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBldmVudEludGVncmF0aW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgaWQgZm9yIGxvY2FsIG1ldGFkYXRhIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBtZXRhZGF0YUludGVncmF0aW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBDdXN0b20gcHJvZmlsZSB0byBvdmVycmlkZSBnZW5lcmFsIHBhY2thZ2UgcGFyYW1ldGVycyBcbiAgICBwdWJsaWMgZGV2aWNlUHJvZmlsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19