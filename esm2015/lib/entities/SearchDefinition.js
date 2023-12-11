import { BaseEntity } from '../entities/BaseEntity';
/*
   Query definitions for ad-hoc search specification
*/
export class SearchDefinition extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvU2VhcmNoRGVmaW5pdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtDQWtFL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hTY29wZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hTY29wZUNvZGUnO1xuaW1wb3J0IHsgU2VhcmNoT2JqZWN0IH0gZnJvbSAnLi4vY29tbW9uL1NlYXJjaE9iamVjdCc7XG5pbXBvcnQgeyBPYmplY3REYXRhIH0gZnJvbSAnLi4vY29tbW9uL09iamVjdERhdGEnO1xuaW1wb3J0IHsgTGV2ZWxUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0xldmVsVHlwZUNvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IFNlYXJjaFRpbWVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2VhcmNoVGltZUNvZGUnO1xuaW1wb3J0IHsgVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVGcmFtZSc7XG5pbXBvcnQgeyBTZWFyY2hCZWhhdmlvciB9IGZyb20gJy4uL2NvbW1vbi9TZWFyY2hCZWhhdmlvcic7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgUXVlcnkgZGVmaW5pdGlvbnMgZm9yIGFkLWhvYyBzZWFyY2ggc3BlY2lmaWNhdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoRGVmaW5pdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgSWQgd2hvIGNyZWF0ZWQgdGhlIHNlYXJjaCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2VhcmNoIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBTZWFyY2ggVGFnIChmb3Igb3JnYW5pemluZyBzZWFyY2ggZGVmaW5pdGlvbnMgaW4gZm9sZGVyLWxpa2Ugc3RydWN0dXJlKSBcbiAgICBwdWJsaWMgdGFnOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBzY29wZSBrZXkgKHdoZXJlIHRvIHN0YXJ0IHRoZSBzZWFyY2ggaW4gdGhlIGhpZXJhcmNoeSkgXG4gICAgcHVibGljIHNjb3BlS2V5OiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhlIHNlYXJjaCBkZWZpbml0aW9uIGlzIHByaXZhdGUgKGFjY2Vzc2libGUgYnkgb3duZXIgb25seSkgb3IgcHVibGljIChhY2Nlc3NpYmxlIGJ5IGFsbCBhY2NvdW50IHVzZXJzKSBcbiAgICBwdWJsaWMgcHJpdmF0ZVNlYXJjaDogYm9vbGVhbjtcbiBcbiAgICAvLyBNYXAgZ2VvIGxvY2F0aW9uOiBtYXAgY2VudGVyIChsYXQtbG5nKSBhbmQgem9vbSBsZXZlbCAoYWx0KSBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gU2NvcGUgb2Ygc291cmNlOiBVTkRFRklORUQgfCBTRU5TT1JTIHwgRk9MREVSUyB8IEdFT19DSVJDTEUgfCBHRU9fUE9MWUdPTiBcbiAgICBwdWJsaWMgc291cmNlU2NvcGU6IFNlYXJjaFNjb3BlQ29kZTtcbiBcbiAgICAvLyBUaW1lIHNjb3BlIHRvIHNlYXJjaCBmb3IgKENVU1RPTSBvciBEdXJhdGlvbiBmb3JtYXQgW1BuRFRuSG5Nbl0gZS5nLiBQVDI0SCkgXG4gICAgcHVibGljIHRpbWVTY29wZTogU2VhcmNoVGltZUNvZGU7XG4gXG4gICAgLy8gVGltZSBmcmFtZSB0byBzZWFyY2ggZm9yIChhcHBsaWNhdGl2ZSBvbmx5IGlmIHNlYXJjaCBzY29wZSBpcyBDVVNUT00pIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBMaXN0IG9mIHNlbnNvciBJZHMgaW5jbHVkZWQgaW4gdGhlIHF1ZXJ5IChvciBcIkdFT1wiKSBcbiAgICBwdWJsaWMgc2Vuc29ySWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBTZWFyY2ggYmVoYXZpb3IgYXR0cmlidXRlcyBcbiAgICBwdWJsaWMgYmVoYXZpb3I6IFNlYXJjaEJlaGF2aW9yO1xuIFxuICAgIC8vIE9iamVjdHMgYXR0cmlidXRlcyB0byBzZWFyY2ggZm9yICh3aGF0KSBcbiAgICBwdWJsaWMgb2JqZWN0czogU2VhcmNoT2JqZWN0W107XG4gXG4gICAgLy8gUmVmZXJlbmNlZCBvYmplY3QgZGF0YSBmb3Igc2ltaWxhcml0eSBcbiAgICBwdWJsaWMgb2JqZWN0RGF0YTogT2JqZWN0RGF0YTtcbiBcbiAgICAvLyBMaW1pdCB0aGUgc2VhcmNoIHRvIGEgbWF4IG51bWJlciBvZiByZXN1bHRzIFxuICAgIHB1YmxpYyBsaW1pdDogbnVtYmVyO1xuIFxuICAgIC8vIFNpbWlsYXJpdHkgdG9sZXJhbmNlOiBbMTogTG93LCAyOiBNZWRpdW0sIDM6IEhpZ2hdIFxuICAgIHB1YmxpYyBzaW1pbGFyaXR5OiBMZXZlbFR5cGVDb2RlO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgcGF0aCBpbiB0aGUgaGllcmFyY2h5IFxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG4gXG5cbn1cblxuXG4iXX0=