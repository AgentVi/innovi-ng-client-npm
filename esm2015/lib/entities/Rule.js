import { BaseEntity } from '../entities/BaseEntity';
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
export class Rule extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBT3BEOzs7RUFHRTtBQUNGLE1BQU0sT0FBTyxJQUFLLFNBQVEsVUFBVTtDQXVGbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNpdGl2aXR5IH0gZnJvbSAnLi4vY29tbW9uL1NlbnNpdGl2aXR5JztcbmltcG9ydCB7IFJ1bGVQb2x5Z29uIH0gZnJvbSAnLi4vY29tbW9uL1J1bGVQb2x5Z29uJztcblxuLyogXG4gICBSdWxlIFJlcHJlc2VudHMgcmVhbC10aW1lIGFuYWx5dGljIHJ1bGUsIHRoZSBzdHJ1Y3R1cmUgaXMgYSB1bmlvbiBvZiBhbGwgdGhlIGF0dHJpYnV0ZXMgdXNlZCBieSBhbGwgdGhlIHR5cGVzIG9mXG4gICByZWFsLXRpbWUgcnVsZXMgKGNyb3NzaW5nLCBtb3ZpbmcsIGdyb3VwaW5nIC4uLikgaGVuY2Ugbm90IGFsbCBhdHRyaWJ1dGVzIGFyZSB1c2VkIGZvciBldmVyeSBydWxlIHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBJZCBcbiAgICBwdWJsaWMgc2NoZWR1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEluZGljYXRlIGlmIHRoZSBydWxlIGlzIGV4cGxpY2l0bHkgZW5hYmxlZCBvciBkaXNhYmxlZCAoYnkgdXNlciBvciBieSBBUEkgY2FsbCAtIGUuZy4gYXJtL2Rpc2FybSkgXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XG4gXG4gICAgLy8gSW5kaWNhdGUgaWYgdGhlIHJ1bGUgaXMgYWN0aXZlIG9yIGluYWN0aXZlIGR1ZSB0byBpdCdzIHNjaGVkdWxlIC8gY2FsZW5kYXIgdGltZSBzbG90cyBcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuIFxuICAgIC8vIFJ1bGUgZXh0ZXJuYWwgaWQgKGhvdyB0aGUgcnVsZSBpcyBpZGVudGlmaWVkIGluIG90aGVyIHN5c3RlbSkgXG4gICAgcHVibGljIGV4dGVybmFsSWQ6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIGJlaGF2aW9yIHR5cGU6IE1PVklORyB8IENST1NTSU5HIHwgT0NDVVBBTkNZIC4uLiBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFJ1bGUgb2JqZWN0IHR5cGVzOiBQRVJTT04gfCBWRUhJQ0xFIHwgTU9UT1JDWUNMRSAuLi4gXG4gICAgcHVibGljIG9iamVjdFR5cGVzOiBPYmplY3RUeXBlQ29kZVtdO1xuIFxuICAgIC8vIERlZmF1bHQgc2V2ZXJpdHkgbGV2ZWwgZm9yIHRoaXMgcnVsZTogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBTZW5zaXRpdml0eSAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBcbiAgICBwdWJsaWMgc2Vuc2l0aXZpdHk6IFNlbnNpdGl2aXR5O1xuIFxuICAgIC8vIER3ZWxsIHRpbWUgW3NlY29uZHNdIFxuICAgIHB1YmxpYyBkd2VsbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBNYXggbnVtYmVyIG9mIHBlb3BsZSBpbiBncm91cCAoZm9yIE9jY3VwYW5jeSBydWxlKSBcbiAgICBwdWJsaWMgbWF4T2JqZWN0c0luR3JvdXA6IG51bWJlcjtcbiBcbiAgICAvLyBNYXggZGlzdGFuY2UgYmV0d2VlbiBwZW9wbGUgdG8gYmUgY29uc2lkZXJlZCBhcyBncm91cCAoZm9yIEdyb3VwaW5nIHJ1bGUpIFxuICAgIHB1YmxpYyBjbHVzdGVyRGlzdGFuY2U6IG51bWJlcjtcbiBcbiAgICAvLyBUaW1lIGludGVydmFsIFtzZWNvbmRzXSBiZXR3ZWVuIHN0YXRpc3RpY3MgcmVwb3J0cyAoZm9yIHN0YXRpc3RpY3MgcnVsZXMpIFxuICAgIHB1YmxpYyBpbnRlcnZhbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIHBvbHlnb25zIFxuICAgIHB1YmxpYyBwb2x5Z29uczogUnVsZVBvbHlnb25bXTtcbiBcbiAgICAvLyBCYXNlNjQgZW5jb2RlZCBjcm9wcGVkIGFzc2V0IGltYWdlIFxuICAgIHB1YmxpYyByZWZlcmVuY2VDcm9wOiBzdHJpbmc7XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBpbWFnZSBzaG91bGQgYmUgZ2VuZXJhdGVkIFxuICAgIHB1YmxpYyBjcmVhdGVJbWFnZTogYm9vbGVhbjtcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIGV2ZW50IGNsaXAgc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlQ2xpcDogYm9vbGVhbjtcbiBcbiAgICAvLyBXaGVuIHdhcyB0aGUgbGFzdCBhbm9tYWx5IHRyYWluaW5nIChmb3IgQW5vbWFseSBydWxlIG9ubHkpIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgbGFzdFRyYWluaW5nT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHdpbGwgYmUgdGhlIG5leHQgYW5vbWFseSB0cmFpbmluZyAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIG5leHRUcmFpbmluZ09uOiBudW1iZXI7XG4gXG4gICAgLy8gVGhlIHBlcmNlbnQgb2YgcmVxdWlyZWQgbWV0YWRhdGEgdGhhdCB3YXMgY29sbGVjdGVkICgwLTEwMCkgXG4gICAgcHVibGljIHRyYWluaW5nUmVhZGluZXNzOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==