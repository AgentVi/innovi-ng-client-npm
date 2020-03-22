import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Query definitions for ad-hoc search specification
*/
var SearchDefinition = /** @class */ (function (_super) {
    __extends(SearchDefinition, _super);
    function SearchDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SearchDefinition;
}(BaseEntity));
export { SearchDefinition };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1NlYXJjaERlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7RUFFRTtBQUNGO0lBQXNDLG9DQUFVO0lBQWhEOztJQWdEQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBaERELENBQXNDLFVBQVUsR0FnRC9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVGcmFtZSc7XG5pbXBvcnQgeyBTZWFyY2hCZWhhdmlvciB9IGZyb20gJy4uL2VudGl0aWVzL1NlYXJjaEJlaGF2aW9yJztcbmltcG9ydCB7IFNlYXJjaE9iamVjdCB9IGZyb20gJy4uL2VudGl0aWVzL1NlYXJjaE9iamVjdCc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBTZWFyY2hTY29wZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hTY29wZUNvZGUnO1xuaW1wb3J0IHsgU2VhcmNoVGltZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hUaW1lQ29kZSc7XG5cbi8qIFxuICAgUXVlcnkgZGVmaW5pdGlvbnMgZm9yIGFkLWhvYyBzZWFyY2ggc3BlY2lmaWNhdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoRGVmaW5pdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgSWQgd2hvIGNyZWF0ZWQgdGhlIHNlYXJjaCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2VhcmNoIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBTZWFyY2ggVGFnIChmb3Igb3JnYW5pemluZyBzZWFyY2ggZGVmaW5pdGlvbnMgaW4gZm9sZGVyLWxpa2Ugc3RydWN0dXJlKSBcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhlIHNlYXJjaCBkZWZpbml0aW9uIGlzIHByaXZhdGUgKGFjY2Vzc2libGUgYnkgb3duZXIgb25seSkgb3IgcHVibGljIChhY2Nlc3NpYmxlIGJ5IGFsbCBhY2NvdW50IHVzZXJzKSBcbiAgICBwdWJsaWMgcHJpdmF0ZVNlYXJjaDogYm9vbGVhbjtcbiBcbiAgICAvLyBTY29wZSBvZiBzb3VyY2U6IFVOREVGSU5FRCB8IFNFTlNPUlMgfCBGT0xERVJTIHwgR0VPX0NJUkNMRSB8IEdFT19QT0xZR09OIFxuICAgIHB1YmxpYyBzb3VyY2VTY29wZTogU2VhcmNoU2NvcGVDb2RlO1xuIFxuICAgIC8vIFRpbWUgc2NvcGUgdG8gc2VhcmNoIGZvciAoQ1VTVE9NIG9yIER1cmF0aW9uIGZvcm1hdCBbUG5EVG5Ibk1uXSBlLmcuIFBUMjRIKSBcbiAgICBwdWJsaWMgdGltZVNjb3BlOiBTZWFyY2hUaW1lQ29kZTtcbiBcbiAgICAvLyBUaW1lIGZyYW1lIHRvIHNlYXJjaCBmb3IgKGFwcGxpY2F0aXZlIG9ubHkgaWYgc2VhcmNoIHNjb3BlIGlzIENVU1RPTSkgXG4gICAgcHVibGljIHRpbWVGcmFtZTogVGltZUZyYW1lO1xuIFxuICAgIC8vIExpc3Qgb2Ygc2Vuc29yIElkcyBpbmNsdWRlZCBpbiB0aGUgcXVlcnkgKG9yIFwiR0VPXCIpIFxuICAgIHB1YmxpYyBzZW5zb3JJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIFNlYXJjaCBiZWhhdmlvciBhdHRyaWJ1dGVzIFxuICAgIHB1YmxpYyBiZWhhdmlvcjogU2VhcmNoQmVoYXZpb3I7XG4gXG4gICAgLy8gT2JqZWN0cyBhdHRyaWJ1dGVzIHRvIHNlYXJjaCBmb3IgKHdoYXQpIFxuICAgIHB1YmxpYyBvYmplY3RzOiBTZWFyY2hPYmplY3RbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=