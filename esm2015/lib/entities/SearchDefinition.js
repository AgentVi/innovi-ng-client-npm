import { BaseEntity } from '../entities/BaseEntity';
/*
   Query definitions for ad-hoc search specification
*/
export class SearchDefinition extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvU2VhcmNoRGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtDQTREL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lRnJhbWUgfSBmcm9tICcuLi9jb21tb24vVGltZUZyYW1lJztcbmltcG9ydCB7IFNlYXJjaEJlaGF2aW9yIH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoQmVoYXZpb3InO1xuaW1wb3J0IHsgU2VhcmNoT2JqZWN0IH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoT2JqZWN0JztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTZWFyY2hTY29wZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hTY29wZUNvZGUnO1xuaW1wb3J0IHsgU2VhcmNoVGltZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hUaW1lQ29kZSc7XG5cbi8qIFxuICAgUXVlcnkgZGVmaW5pdGlvbnMgZm9yIGFkLWhvYyBzZWFyY2ggc3BlY2lmaWNhdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoRGVmaW5pdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgSWQgd2hvIGNyZWF0ZWQgdGhlIHNlYXJjaCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2VhcmNoIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBTZWFyY2ggVGFnIChmb3Igb3JnYW5pemluZyBzZWFyY2ggZGVmaW5pdGlvbnMgaW4gZm9sZGVyLWxpa2Ugc3RydWN0dXJlKSBcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBzY29wZSBrZXkgKHdoZXJlIHRvIHN0YXJ0IHRoZSBzZWFyY2ggaW4gdGhlIGhpZXJhcmNoeSkgXG4gICAgcHVibGljIHNjb3BlS2V5OiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhlIHNlYXJjaCBkZWZpbml0aW9uIGlzIHByaXZhdGUgKGFjY2Vzc2libGUgYnkgb3duZXIgb25seSkgb3IgcHVibGljIChhY2Nlc3NpYmxlIGJ5IGFsbCBhY2NvdW50IHVzZXJzKSBcbiAgICBwdWJsaWMgcHJpdmF0ZVNlYXJjaDogYm9vbGVhbjtcbiBcbiAgICAvLyBNYXAgZ2VvIGxvY2F0aW9uOiBtYXAgY2VudGVyIChsYXQtbG5nKSBhbmQgem9vbSBsZXZlbCAoYWx0KSBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gU2NvcGUgb2Ygc291cmNlOiBVTkRFRklORUQgfCBTRU5TT1JTIHwgRk9MREVSUyB8IEdFT19DSVJDTEUgfCBHRU9fUE9MWUdPTiBcbiAgICBwdWJsaWMgc291cmNlU2NvcGU6IFNlYXJjaFNjb3BlQ29kZTtcbiBcbiAgICAvLyBUaW1lIHNjb3BlIHRvIHNlYXJjaCBmb3IgKENVU1RPTSBvciBEdXJhdGlvbiBmb3JtYXQgW1BuRFRuSG5Nbl0gZS5nLiBQVDI0SCkgXG4gICAgcHVibGljIHRpbWVTY29wZTogU2VhcmNoVGltZUNvZGU7XG4gXG4gICAgLy8gVGltZSBmcmFtZSB0byBzZWFyY2ggZm9yIChhcHBsaWNhdGl2ZSBvbmx5IGlmIHNlYXJjaCBzY29wZSBpcyBDVVNUT00pIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBMaXN0IG9mIHNlbnNvciBJZHMgaW5jbHVkZWQgaW4gdGhlIHF1ZXJ5IChvciBcIkdFT1wiKSBcbiAgICBwdWJsaWMgc2Vuc29ySWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBTZWFyY2ggYmVoYXZpb3IgYXR0cmlidXRlcyBcbiAgICBwdWJsaWMgYmVoYXZpb3I6IFNlYXJjaEJlaGF2aW9yO1xuIFxuICAgIC8vIE9iamVjdHMgYXR0cmlidXRlcyB0byBzZWFyY2ggZm9yICh3aGF0KSBcbiAgICBwdWJsaWMgb2JqZWN0czogU2VhcmNoT2JqZWN0W107XG4gXG4gICAgLy8gTGltaXQgdGhlIHNlYXJjaCB0byBhIG1heCBudW1iZXIgb2YgcmVzdWx0cyBcbiAgICBwdWJsaWMgbGltaXQ6IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IHBhdGggaW4gdGhlIGhpZXJhcmNoeSBcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuIFxuXG59XG5cblxuIl19