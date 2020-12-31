import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Health event type (combines multiple health events: sensor health event, appliance health event...)
*/
var HealthEvent = /** @class */ (function (_super) {
    __extends(HealthEvent, _super);
    function HealthEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HealthEvent;
}(BaseEntity));
export { HealthEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhbHRoRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9IZWFsdGhFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBEOztFQUVFO0FBQ0Y7SUFBaUMsK0JBQVU7SUFBM0M7O0lBZ0RBLENBQUM7SUFBRCxrQkFBQztBQUFELENBQUMsQUFoREQsQ0FBaUMsVUFBVSxHQWdEMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0VudGl0eVR5cGVDb2RlJztcbmltcG9ydCB7IEludGVncmF0aW9uU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0ludGVncmF0aW9uU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgSGVhbHRoIGV2ZW50IHR5cGUgKGNvbWJpbmVzIG11bHRpcGxlIGhlYWx0aCBldmVudHM6IHNlbnNvciBoZWFsdGggZXZlbnQsIGFwcGxpYW5jZSBoZWFsdGggZXZlbnQuLi4pIFxuKi9cbmV4cG9ydCBjbGFzcyBIZWFsdGhFdmVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNvdXJjZSBvZiBoZWFsdGggZXZlbnQgKGNhbiBiZSBvbmx5IEFQUExJQU5DRSBvciBBR0VOVCBvciBTRU5TT1IpIFxuICAgIHB1YmxpYyBzb3VyY2U6IEVudGl0eVR5cGVDb2RlO1xuIFxuICAgIC8vIFNvdXJjZSBFbnRpdHkgSWQgXG4gICAgcHVibGljIGVudGl0eUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gU291cmNlIEVudGl0eSBleHRlcm5hbCBJZCBcbiAgICBwdWJsaWMgZW50aXR5RXh0SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTb3VyY2UgRW50aXR5IE5hbWUgXG4gICAgcHVibGljIGVudGl0eU5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBoZWFsdGggc3RhdHVzIGhhcyBjaGFuZ2VkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3RhcnRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgaGVhbHRoIGV2ZW50IHdhcyBjbG9zZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjbG9zZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBzdGF0dXMgXG4gICAgcHVibGljIHN0YXR1czogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSByZWFsIHRpbWUgc3RhdGUgYml0IG1hc2sgZmxhZ3MgXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgaW50ZWdyYXRpb24gc3RhdHVzIFxuICAgIHB1YmxpYyBpbnRlZ3JhdGlvblN0YXR1czogSW50ZWdyYXRpb25TdGF0dXNDb2RlO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgcGF0aCBpbiB0aGUgaGllcmFyY2h5IFxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG4gXG5cbn1cblxuXG4iXX0=