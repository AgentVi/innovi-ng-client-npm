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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLcEQ7O0VBRUU7QUFDRjtJQUErQiw2QkFBVTtJQUF6Qzs7SUFrRUEsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQWxFRCxDQUErQixVQUFVLEdBa0V4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEFwcGxpYW5jZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VTdGF0dXNDb2RlJztcbmltcG9ydCB7IEFwcGxpYW5jZUNhcGFiaWxpdGllcyB9IGZyb20gJy4uL2VudGl0aWVzL0FwcGxpYW5jZUNhcGFiaWxpdGllcyc7XG5pbXBvcnQgeyBUaHJlc2hvbGRzIH0gZnJvbSAnLi4vY29tbW9uL1RocmVzaG9sZHMnO1xuXG4vKiBcbiAgIEFwcGxpYW5jZSAocmVmZXJyZWQgYWxzbyBhcyBFZGdlIG9yIERldmljZSkgaXMgdGhlIGVkZ2UgZGV2aWNlIGluIHRoZSBjYW1lcmEgbmV0d29yayBob3N0aW5nIHRoZSBhbmFseXRpY3MgYWdlbnQocykgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFwcGxpYW5jZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogQXBwbGlhbmNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHdhcyB0aGUgbGFzdCBzdGF0dXMgcmVwb3J0IHVwZGF0ZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN0YXR1c1JlcG9ydGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBBcHBsaWFuY2UgcGFpcmluZyBrZSAodXNlZCB0byBwYWlyIHRoZSBkZXZpY2UgdG8gdGhlIGFjY291bnQgb24gZmlyc3QgaW5zdGFsbGF0aW9uKSBcbiAgICBwdWJsaWMgcGFpcmluZ0tleTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gYXBwbGlhbmNlIHdhcyBkZWxldGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZGVsZXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiBhcHBsaWFuY2UgbGFzdCByZXBvcnRlZCBzdGF0dXMgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyByZXBvcnRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gUGh5c2ljYWwgbWFjaGluZSBpZGVudGlmaWVyIChzZXJpYWwgbnVtYmVyKSBcbiAgICBwdWJsaWMgbWFjaGluZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBTVyBjb25maWd1cmF0aW9uIHZlcnNpb24gaWQgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25WZXJzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgY2FwYWJpbGl0aWVzIFxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXM6IEFwcGxpYW5jZUNhcGFiaWxpdGllcztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgaWQgZm9yIGxvY2FsIGV2ZW50cyBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRJbnRlZ3JhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IGlkIGZvciBsb2NhbCBtZXRhZGF0YSBpbnRlZ3JhdGlvbiBcbiAgICBwdWJsaWMgbWV0YWRhdGFJbnRlZ3JhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VzdG9tIHByb2ZpbGUgdG8gb3ZlcnJpZGUgZ2VuZXJhbCBwYWNrYWdlIHBhcmFtZXRlcnMgXG4gICAgcHVibGljIGRldmljZVByb2ZpbGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIERldmljZSBwYXRoIGluIHRoZSBhY2NvdW50IGhpZXJhcmNoeSBcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEhlYWx0aCBub3RpZmljYXRpb25zIHRocmVzaG9sZHMgXG4gICAgcHVibGljIGhlYWx0aFRocmVzaG9sZHM6IFRocmVzaG9sZHM7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19