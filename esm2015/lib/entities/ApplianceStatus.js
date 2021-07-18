import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance status - reported periodically by the appliance
*/
export class ApplianceStatus extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnRpdGllcy9BcHBsaWFuY2VTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtDQXNEOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgQXBwbGlhbmNlIHN0YXR1cyAtIHJlcG9ydGVkIHBlcmlvZGljYWxseSBieSB0aGUgYXBwbGlhbmNlIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2VTdGF0dXMgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBcHBsaWFuY2UgSWQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHN0YXR1cyBcbiAgICBwdWJsaWMgc3RhdHVzOiBBcHBsaWFuY2VTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEFwcGxpYW5jZSByZWFsIHRpbWUgc3RhdGUgYml0IG1hc2sgZmxhZ3MgXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XG4gXG4gICAgLy8gRHVyYXRpb24gKGluIG1pbGxpc2Vjb25kcykgdGhhdCB0aGUgZGV2aWNlIHdhcyBpbiB0aGlzIHN0YXRlIFxuICAgIHB1YmxpYyBkdXJhdGlvbjogbnVtYmVyO1xuIFxuICAgIC8vIEF2ZXJhZ2UgQ1BVIHVzYWdlIHBlcmNlbnRhZ2UgWzEtMTAwXSBcbiAgICBwdWJsaWMgY3B1QXZnOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IENQVSB1c2FnZSBwZXJjZW50YWdlIFsxLTEwMF0gXG4gICAgcHVibGljIGNwdU1heDogbnVtYmVyO1xuIFxuICAgIC8vIFJBTSB1c2FnZSBwZXJjZW50YWdlIFsxLTEwMF0gXG4gICAgcHVibGljIHJhbTogbnVtYmVyO1xuIFxuICAgIC8vIExvYWQgYXZlcmFnZSBwZXJjZW50YWdlIChjb3VsZCBiZSBtb3JlIHRoYW4gMTAwLCBlLmcuIGxvYWQgYXZlcmFnZSBvZiAyLjIxIHdpbGwgYmUgcmVwcmVzZW50ZWQgYXMgMjIxKSBcbiAgICBwdWJsaWMgbG9hZEF2ZzogbnVtYmVyO1xuIFxuICAgIC8vIEJhbmR3aWR0aCBVcGxvYWQgc3BlZWQgXG4gICAgcHVibGljIHVwbG9hZFNwZWVkOiBzdHJpbmc7XG4gXG4gICAgLy8gQmFuZHdpZHRoIERvd25sb2FkIHNwZWVkIFxuICAgIHB1YmxpYyBkb3dubG9hZFNwZWVkOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgc3BlZWQgdGVzdCB3YXMgbWVhc3VyZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBzcGVlZFRlc3RlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==