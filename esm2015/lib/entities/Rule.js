import { BaseEntity } from '../entities/BaseEntity';
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
export class Rule extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7OztFQUdFO0FBQ0YsTUFBTSxPQUFPLElBQUssU0FBUSxVQUFVO0NBc0duQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc2l0aXZpdHkgfSBmcm9tICcuLi9jb21tb24vU2Vuc2l0aXZpdHknO1xuaW1wb3J0IHsgUnVsZVBvbHlnb24gfSBmcm9tICcuLi9jb21tb24vUnVsZVBvbHlnb24nO1xuaW1wb3J0IHsgUnVsZUF1dG9TZW5zaXRpdml0eUNvZGUgfSBmcm9tICcuLi9lbnVtcy9SdWxlQXV0b1NlbnNpdGl2aXR5Q29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgUnVsZSBSZXByZXNlbnRzIHJlYWwtdGltZSBhbmFseXRpYyBydWxlLCB0aGUgc3RydWN0dXJlIGlzIGEgdW5pb24gb2YgYWxsIHRoZSBhdHRyaWJ1dGVzIHVzZWQgYnkgYWxsIHRoZSB0eXBlcyBvZlxuICAgcmVhbC10aW1lIHJ1bGVzIChjcm9zc2luZywgbW92aW5nLCBncm91cGluZyAuLi4pIGhlbmNlIG5vdCBhbGwgYXR0cmlidXRlcyBhcmUgdXNlZCBmb3IgZXZlcnkgcnVsZSB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBSdWxlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgSWQgXG4gICAgcHVibGljIHNjaGVkdWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbmRpY2F0ZSBpZiB0aGUgcnVsZSBpcyBleHBsaWNpdGx5IGVuYWJsZWQgb3IgZGlzYWJsZWQgKGJ5IHVzZXIgb3IgYnkgQVBJIGNhbGwgLSBlLmcuIGFybS9kaXNhcm0pIFxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xuIFxuICAgIC8vIEluZGljYXRlIGlmIHRoZSBydWxlIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZSBkdWUgdG8gaXQncyBzY2hlZHVsZSAvIGNhbGVuZGFyIHRpbWUgc2xvdHMgXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiBcbiAgICAvLyBSdWxlIGV4dGVybmFsIGlkIChob3cgdGhlIHJ1bGUgaXMgaWRlbnRpZmllZCBpbiBvdGhlciBzeXN0ZW0pIFxuICAgIHB1YmxpYyBleHRlcm5hbElkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBiZWhhdmlvciB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBSdWxlIG9iamVjdCB0eXBlczogUEVSU09OIHwgVkVISUNMRSB8IE1PVE9SQ1lDTEUgLi4uIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlczogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBEZWZhdWx0IHNldmVyaXR5IGxldmVsIGZvciB0aGlzIHJ1bGU6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gU2Vuc2l0aXZpdHkgKGZvciBBbm9tYWx5IHJ1bGUgb25seSkgXG4gICAgcHVibGljIHNlbnNpdGl2aXR5OiBTZW5zaXRpdml0eTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIFtzZWNvbmRzXSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gQW4gb3B0aW9uYWwgc3BlZWQgZmlsdGVyIHRvIHRoZSBtb3ZpbmcgaW4gYW4gYXJlYSBhbmQgbGluZSBjcm9zc2luZyBydWxlcyBbS1BIXSBcbiAgICBwdWJsaWMgbWluU3BlZWQ6IG51bWJlcjtcbiBcbiAgICAvLyBNYXggbnVtYmVyIG9mIHBlb3BsZSBpbiBncm91cCAoZm9yIE9jY3VwYW5jeSBydWxlKSBcbiAgICBwdWJsaWMgbWF4T2JqZWN0c0luR3JvdXA6IG51bWJlcjtcbiBcbiAgICAvLyBNYXggZGlzdGFuY2UgYmV0d2VlbiBwZW9wbGUgdG8gYmUgY29uc2lkZXJlZCBhcyBncm91cCAoZm9yIEdyb3VwaW5nIHJ1bGUpIFxuICAgIHB1YmxpYyBjbHVzdGVyRGlzdGFuY2U6IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIHBvbHlnb25zIFxuICAgIHB1YmxpYyBwb2x5Z29uczogUnVsZVBvbHlnb25bXTtcbiBcbiAgICAvLyBCYXNlNjQgZW5jb2RlZCBjcm9wcGVkIGFzc2V0IGltYWdlIFxuICAgIHB1YmxpYyByZWZlcmVuY2VDcm9wOiBzdHJpbmc7XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBpbWFnZSBzaG91bGQgYmUgZ2VuZXJhdGVkIFxuICAgIHB1YmxpYyBjcmVhdGVJbWFnZTogYm9vbGVhbjtcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIGV2ZW50IGNsaXAgc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlQ2xpcDogYm9vbGVhbjtcbiBcbiAgICAvLyBXaGVuIHdhcyB0aGUgbGFzdCBhbm9tYWx5IHRyYWluaW5nIChmb3IgQW5vbWFseSBydWxlIG9ubHkpIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgbGFzdFRyYWluaW5nT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHdpbGwgYmUgdGhlIG5leHQgYW5vbWFseSB0cmFpbmluZyAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIG5leHRUcmFpbmluZ09uOiBudW1iZXI7XG4gXG4gICAgLy8gVGhlIHBlcmNlbnQgb2YgcmVxdWlyZWQgbWV0YWRhdGEgdGhhdCB3YXMgY29sbGVjdGVkICgwLTEwMCkgXG4gICAgcHVibGljIHRyYWluaW5nUmVhZGluZXNzOiBudW1iZXI7XG4gXG4gICAgLy8gRXh0ZXJuYWwgbW9kZWwgSWQgdXNlZCBieSB0aGUgcnVsZSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxNb2RlbDogc3RyaW5nO1xuIFxuICAgIC8vIEV4Y2x1ZGVkIG9iamVjdCB0eXBlcyBmb3IgdGhpcyBydWxlIFxuICAgIHB1YmxpYyBleGNsdWRlT2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gUnVsZSdzIGF1dG8gc2Vuc2l0aXZpdHkgXG4gICAgcHVibGljIGF1dG9TZW5zaXRpdml0eTogUnVsZUF1dG9TZW5zaXRpdml0eUNvZGU7XG4gXG4gICAgLy8gVXNlZCBpbiBjb25qdWN0aW9uIHdpdGggV2F0Y2hMaXN0SWQuIFNldCB0byB0cnVlIHRvIHRyaWdnZXIgcnVsZSB3aGVuIG9iamVjdCBpcyBkZXRlY3RlZCBpbiBhbnkgV2F0Y2hMaXN0SWQuIFxuICAgIHB1YmxpYyBleGlzdHNJbldhdGNobGlzdDogYm9vbGVhbjtcbiBcbiAgICAvLyBMaXN0IG9mIGV4dGVybmFsIG9iamVjdCBsaXN0cywgdXNlZCBmb3IgZmlsdGVyaW5nIHdoZW4gZXZlbnRzIHNob3VsZCBiZSB0cmlnZ2VyZWQuIFxuICAgIHB1YmxpYyB3YXRjaGxpc3RJZDogc3RyaW5nW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==