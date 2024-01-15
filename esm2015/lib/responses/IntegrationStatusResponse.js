import { BaseEntity } from '../entities/BaseEntity';
/*
   Describes status of an integration attempt (for events and health integrations) - was the integration successfully triggered or not.
   This contains information on what type of event the integration was triggered by (even or health event),
   the name and id of the integration target, the t
*/
export class IntegrationStatusResponse extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25TdGF0dXNSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvcmVzcG9uc2VzL0ludGVncmF0aW9uU3RhdHVzUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOzs7O0VBSUU7QUFDRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsVUFBVTtDQW1EeEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlZ3JhdGlvblR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvSW50ZWdyYXRpb25UeXBlQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBFbnRpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0VudGl0eVR5cGVDb2RlJztcblxuLyogXG4gICBEZXNjcmliZXMgc3RhdHVzIG9mIGFuIGludGVncmF0aW9uIGF0dGVtcHQgKGZvciBldmVudHMgYW5kIGhlYWx0aCBpbnRlZ3JhdGlvbnMpIC0gd2FzIHRoZSBpbnRlZ3JhdGlvbiBzdWNjZXNzZnVsbHkgdHJpZ2dlcmVkIG9yIG5vdC5cbiAgIFRoaXMgY29udGFpbnMgaW5mb3JtYXRpb24gb24gd2hhdCB0eXBlIG9mIGV2ZW50IHRoZSBpbnRlZ3JhdGlvbiB3YXMgdHJpZ2dlcmVkIGJ5IChldmVuIG9yIGhlYWx0aCBldmVudCksXG4gICB0aGUgbmFtZSBhbmQgaWQgb2YgdGhlIGludGVncmF0aW9uIHRhcmdldCwgdGhlIHQgXG4qL1xuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uU3RhdHVzUmVzcG9uc2UgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBXaGF0IHRyaWdnZXJlZCB0aGlzIGV2ZW50L2hlYWx0aCBldmVudCAoY2FuIGJlIG9ubHkgRVZFTlQgb3IgSEVBTFRIX0VWRU5UKSBcbiAgICBwdWJsaWMgc291cmNlOiBFbnRpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBJZCBvZiB0aGUgdHJpZ2dlcmluZyBldmVudCBvciBoZWFsdGggZXZlbnQgXG4gICAgcHVibGljIGVudGl0eUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IElkIFxuICAgIHB1YmxpYyBpbnRlZ3JhdGlvblRhcmdldElkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IE5hbWUgXG4gICAgcHVibGljIGludGVncmF0aW9uVGFyZ2V0TmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEludGVncmF0aW9uIHR5cGUgKEhUVFAgfCBIVFRQUyB8IFNNVFAgfCBJTU1JWCB8IFNFTlRJTkVMIHwgR0VORVRFQyAuLi4pIFxuICAgIHB1YmxpYyBpbnRlZ3JhdGlvblRhcmdldFR5cGU6IEludGVncmF0aW9uVHlwZUNvZGU7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIElkIFxuICAgIHB1YmxpYyBpbnRlZ3JhdGlvbkFjdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gYWN0aW9uIE5hbWUgXG4gICAgcHVibGljIGludGVncmF0aW9uQWN0aW9uTmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIE51bWJlciBvZiBhdHRlbXB0cyBtYWRlIGJlZm9yZSB0aGUgZXZlbnQgd2FzIHNlbnQsIG9yIGZhaWxlZCB0byBzZW5kIFxuICAgIHB1YmxpYyBudW1iZXJPZkF0dGVtcHRzOiBudW1iZXI7XG4gXG4gICAgLy8gU2VudCBpcyB0cnVlIGlmIHRoZSBtZXNzYWdlcyB3YXMgc3VjY2Vzc2Z1bGx5IHNlbnQgdG8gdGhlIGludGVncmF0aW9uIHRhcmdldCBcbiAgICBwdWJsaWMgc2VudDogYm9vbGVhbjtcbiBcbiAgICAvLyBQb3NzaWJsZSBlcnJvciBtZXNzYWdlIGluIGNhc2Ugb2YgZmFpbHVyZSBcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgcGF0aCBpbiB0aGUgaGllcmFyY2h5IFxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG4gXG5cbn1cblxuXG4iXX0=