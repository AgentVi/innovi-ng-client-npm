import { BaseEntity } from '../entities/BaseEntity';
/*
   Query definitions for ad-hoc search specification
*/
export class SearchDefinition extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRGVmaW5pdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1NlYXJjaERlZmluaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSXBEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7Q0E0RC9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoVGltZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hUaW1lQ29kZSc7XG5pbXBvcnQgeyBUaW1lRnJhbWUgfSBmcm9tICcuLi9jb21tb24vVGltZUZyYW1lJztcbmltcG9ydCB7IFNlYXJjaEJlaGF2aW9yIH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoQmVoYXZpb3InO1xuaW1wb3J0IHsgU2VhcmNoT2JqZWN0IH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoT2JqZWN0JztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTZWFyY2hTY29wZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZWFyY2hTY29wZUNvZGUnO1xuXG4vKiBcbiAgIFF1ZXJ5IGRlZmluaXRpb25zIGZvciBhZC1ob2Mgc2VhcmNoIHNwZWNpZmljYXRpb24gXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaERlZmluaXRpb24gZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIElkIHdobyBjcmVhdGVkIHRoZSBzZWFyY2ggXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlYXJjaCBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2VhcmNoIFRhZyAoZm9yIG9yZ2FuaXppbmcgc2VhcmNoIGRlZmluaXRpb25zIGluIGZvbGRlci1saWtlIHN0cnVjdHVyZSkgXG4gICAgcHVibGljIHRhZzogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgc2NvcGUga2V5ICh3aGVyZSB0byBzdGFydCB0aGUgc2VhcmNoIGluIHRoZSBoaWVyYXJjaHkpIFxuICAgIHB1YmxpYyBzY29wZUtleTogc3RyaW5nO1xuIFxuICAgIC8vIElzIHRoZSBzZWFyY2ggZGVmaW5pdGlvbiBpcyBwcml2YXRlIChhY2Nlc3NpYmxlIGJ5IG93bmVyIG9ubHkpIG9yIHB1YmxpYyAoYWNjZXNzaWJsZSBieSBhbGwgYWNjb3VudCB1c2VycykgXG4gICAgcHVibGljIHByaXZhdGVTZWFyY2g6IGJvb2xlYW47XG4gXG4gICAgLy8gTWFwIGdlbyBsb2NhdGlvbjogbWFwIGNlbnRlciAobGF0LWxuZykgYW5kIHpvb20gbGV2ZWwgKGFsdCkgXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIFNjb3BlIG9mIHNvdXJjZTogVU5ERUZJTkVEIHwgU0VOU09SUyB8IEZPTERFUlMgfCBHRU9fQ0lSQ0xFIHwgR0VPX1BPTFlHT04gXG4gICAgcHVibGljIHNvdXJjZVNjb3BlOiBTZWFyY2hTY29wZUNvZGU7XG4gXG4gICAgLy8gVGltZSBzY29wZSB0byBzZWFyY2ggZm9yIChDVVNUT00gb3IgRHVyYXRpb24gZm9ybWF0IFtQbkRUbkhuTW5dIGUuZy4gUFQyNEgpIFxuICAgIHB1YmxpYyB0aW1lU2NvcGU6IFNlYXJjaFRpbWVDb2RlO1xuIFxuICAgIC8vIFRpbWUgZnJhbWUgdG8gc2VhcmNoIGZvciAoYXBwbGljYXRpdmUgb25seSBpZiBzZWFyY2ggc2NvcGUgaXMgQ1VTVE9NKSBcbiAgICBwdWJsaWMgdGltZUZyYW1lOiBUaW1lRnJhbWU7XG4gXG4gICAgLy8gTGlzdCBvZiBzZW5zb3IgSWRzIGluY2x1ZGVkIGluIHRoZSBxdWVyeSAob3IgXCJHRU9cIikgXG4gICAgcHVibGljIHNlbnNvcklkczogc3RyaW5nW107XG4gXG4gICAgLy8gU2VhcmNoIGJlaGF2aW9yIGF0dHJpYnV0ZXMgXG4gICAgcHVibGljIGJlaGF2aW9yOiBTZWFyY2hCZWhhdmlvcjtcbiBcbiAgICAvLyBPYmplY3RzIGF0dHJpYnV0ZXMgdG8gc2VhcmNoIGZvciAod2hhdCkgXG4gICAgcHVibGljIG9iamVjdHM6IFNlYXJjaE9iamVjdFtdO1xuIFxuICAgIC8vIExpbWl0IHRoZSBzZWFyY2ggdG8gYSBtYXggbnVtYmVyIG9mIHJlc3VsdHMgXG4gICAgcHVibGljIGxpbWl0OiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==