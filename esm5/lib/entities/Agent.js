import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
   Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
   A single appliance can host multiple agents (container instances of the same Docker image)
*/
var Agent = /** @class */ (function (_super) {
    __extends(Agent, _super);
    function Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Agent;
}(BaseEntity));
export { Agent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9BZ2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBEOzs7O0VBSUU7QUFDRjtJQUEyQix5QkFBVTtJQUFyQzs7SUEyQkEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLEFBM0JELENBQTJCLFVBQVUsR0EyQnBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWdlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBBZ2VudCByZXByZXNlbnRzIHRoZSBuZXcgZWRnZSBhbmFseXRpY3MgcGlwZWxpbmUgKGluY2x1ZGluZyBmb3JtZXIgYWdlbnQgKyBBUyArIENTIGluIGEgc2luZ2xlIHByb2Nlc3MpXG4gICBBZ2VudCBjYW4gcHJvY2VzcyB2aWRlbyBmcm9tIG11bHRpcGxlIHNlbnNvcnMuIEFnZW50IGlzIGhvc3RlZCBpbiB0aGUgZWRnZSBkZXZpY2UgKGFwcGxpYW5jZSkgYXMgc2luZ2xlIERvY2tlciBjb250YWluZXIuXG4gICBBIHNpbmdsZSBhcHBsaWFuY2UgY2FuIGhvc3QgbXVsdGlwbGUgYWdlbnRzIChjb250YWluZXIgaW5zdGFuY2VzIG9mIHRoZSBzYW1lIERvY2tlciBpbWFnZSkgXG4qL1xuZXhwb3J0IGNsYXNzIEFnZW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIElkIG9mIHRoZSBhcHBsaWFuY2UgaG9zdGluZyB0aGUgYWdlbnQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWdlbnQgc3RhdHVzIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFnZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBZ2VudCByZWFsIHRpbWUgc3RhdGUgYml0IG1hc2sgZmxhZ3MgXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19