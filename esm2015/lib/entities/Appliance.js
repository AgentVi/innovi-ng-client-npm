import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance (referred also as Edge or Device) is the edge device in the camera network hosting the analytics agent(s)
*/
export class Appliance extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxTQUFVLFNBQVEsVUFBVTtDQXFFeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaHJlc2hvbGRzIH0gZnJvbSAnLi4vY29tbW9uL1RocmVzaG9sZHMnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZVN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQXBwbGlhbmNlQ2FwYWJpbGl0aWVzIH0gZnJvbSAnLi4vZW50aXRpZXMvQXBwbGlhbmNlQ2FwYWJpbGl0aWVzJztcblxuLyogXG4gICBBcHBsaWFuY2UgKHJlZmVycmVkIGFsc28gYXMgRWRnZSBvciBEZXZpY2UpIGlzIHRoZSBlZGdlIGRldmljZSBpbiB0aGUgY2FtZXJhIG5ldHdvcmsgaG9zdGluZyB0aGUgYW5hbHl0aWNzIGFnZW50KHMpIFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWFuY2UgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBcHBsaWFuY2UgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2Ugc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogQXBwbGlhbmNlU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBBcHBsaWFuY2UgcmVhbCB0aW1lIHN0YXRlIGJpdCBtYXNrIGZsYWdzIFxuICAgIHB1YmxpYyBzdGF0ZTogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gd2FzIHRoZSBsYXN0IHN0YXR1cyByZXBvcnQgdXBkYXRlIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3RhdHVzUmVwb3J0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBwYWlyaW5nIGtlICh1c2VkIHRvIHBhaXIgdGhlIGRldmljZSB0byB0aGUgYWNjb3VudCBvbiBmaXJzdCBpbnN0YWxsYXRpb24pIFxuICAgIHB1YmxpYyBwYWlyaW5nS2V5OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiBhcHBsaWFuY2Ugd2FzIGRlbGV0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBkZWxldGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIGFwcGxpYW5jZSBsYXN0IHJlcG9ydGVkIHN0YXR1cyBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHJlcG9ydGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBQaHlzaWNhbCBtYWNoaW5lIGlkZW50aWZpZXIgKHNlcmlhbCBudW1iZXIpIFxuICAgIHB1YmxpYyBtYWNoaW5lSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgU1cgY29uZmlndXJhdGlvbiBpZCBcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIFNXIGNvbmZpZ3VyYXRpb24gdmVyc2lvbiBpZCBcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvblZlcnNpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBjYXBhYmlsaXRpZXMgXG4gICAgcHVibGljIGNhcGFiaWxpdGllczogQXBwbGlhbmNlQ2FwYWJpbGl0aWVzO1xuIFxuICAgIC8vIEludGVncmF0aW9uIHRhcmdldCBpZCBmb3IgbG9jYWwgZXZlbnRzIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBldmVudEludGVncmF0aW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgaWQgZm9yIGxvY2FsIG1ldGFkYXRhIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBtZXRhZGF0YUludGVncmF0aW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBDdXN0b20gcHJvZmlsZSB0byBvdmVycmlkZSBnZW5lcmFsIHBhY2thZ2UgcGFyYW1ldGVycyBcbiAgICBwdWJsaWMgZGV2aWNlUHJvZmlsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV2aWNlIHBhdGggaW4gdGhlIGFjY291bnQgaGllcmFyY2h5IFxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gSGVhbHRoIG5vdGlmaWNhdGlvbnMgdGhyZXNob2xkcyBcbiAgICBwdWJsaWMgaGVhbHRoVGhyZXNob2xkczogVGhyZXNob2xkcztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=