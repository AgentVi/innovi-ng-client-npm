import { BaseEntity } from '../entities/BaseEntity';
/*
   Sensor type
*/
export class Sensor extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc29yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvU2Vuc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQU9wRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxNQUFPLFNBQVEsVUFBVTtDQWdHckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclR5cGVDb2RlJztcbmltcG9ydCB7IFNlbnNvclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9TZW5zb3JTdGF0dXNDb2RlJztcbmltcG9ydCB7IFN0cmVhbVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU3RyZWFtVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc29yRGVidWdJbmZvIH0gZnJvbSAnLi4vY29tbW9uL1NlbnNvckRlYnVnSW5mbyc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBTZW5zb3JSZXNvbHV0aW9uQ29kZSB9IGZyb20gJy4uL2VudW1zL1NlbnNvclJlc29sdXRpb25Db2RlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBGb3ZHZW9BdHRyaWJ1dGVzIH0gZnJvbSAnLi4vY29tbW9uL0Zvdkdlb0F0dHJpYnV0ZXMnO1xuaW1wb3J0IHsgU3RyaW5nS2V5VmFsdWUgfSBmcm9tICcuLi9jb21tb24vU3RyaW5nS2V5VmFsdWUnO1xuaW1wb3J0IHsgVGhyZXNob2xkcyB9IGZyb20gJy4uL2NvbW1vbi9UaHJlc2hvbGRzJztcblxuLyogXG4gICBTZW5zb3IgdHlwZSBcbiovXG5leHBvcnQgY2xhc3MgU2Vuc29yIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkIChlbXB0eSBmb3Igcm9vdCBmb2xkZXIpIFxuICAgIHB1YmxpYyBmb2xkZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBJZCBcbiAgICBwdWJsaWMgYXBwbGlhbmNlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBBZ2VudCBJZCAoUmVsZXZhbnQgZm9yIG5ldyBwaXBlbGluZSBvbmx5KSBcbiAgICBwdWJsaWMgYWdlbnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlbnNvciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIHR5cGU6IENDRCB8IFRIRVJNQUwgXG4gICAgcHVibGljIHR5cGU6IFNlbnNvclR5cGVDb2RlO1xuIFxuICAgIC8vIFNlbnNvciBzdGF0dXM6IFVOREVGSU5FRCB8IEFDVElWRSB8IFdBUk5JTkcgfCBFUlJPUiB8IElOQUNUSVZFIHwgU1VTUEVOREVEIHwgUEVORElORyBcbiAgICBwdWJsaWMgc3RhdHVzOiBTZW5zb3JTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFNlbnNvciByZWFsIHRpbWUgc3RhdGUgYml0IG1hc2sgZmxhZ3MgXG4gICAgcHVibGljIHN0YXRlOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB3YXMgdGhlIGxhc3Qgc3RhdGUgcmVwb3J0IHVwZGF0ZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHN0YXRlUmVwb3J0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFNlbnNvciB2aWRlbyBzdHJlYW0gdHlwZTogVU5ERUZJTkVEIHwgUlRTUCB8IE9OVklGIHwgQ0xJUCB8IFJUUCB8IE1VTFRJQ0FTVCBcbiAgICBwdWJsaWMgc3RyZWFtVHlwZTogU3RyZWFtVHlwZUNvZGU7XG4gXG4gICAgLy8gU2Vuc29yIHJlc29sdXRpb24gKGltYWdlIHF1YWxpdHkpOiBMT1cgKDApIHwgTUVESVVNICgxKSB8IEhJR0ggKDIpIFxuICAgIHB1YmxpYyBpbWFnZVJlc29sdXRpb246IFNlbnNvclJlc29sdXRpb25Db2RlO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgc2Vuc29yIGlzIHJlY29yZGluZyB2aWRlbyBcbiAgICBwdWJsaWMgcmVjb3JkaW5nOiBib29sZWFuO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgc2Vuc29yIHNob3VsZCBzZW5kIG1ldGFkYXRhIFxuICAgIHB1YmxpYyBtZXRhZGF0YTogYm9vbGVhbjtcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIGFub21hbHkgZGV0ZWN0aW9uIGlzIGVuYWJsZWQgZm9yIHRoaXMgc2Vuc29yIFxuICAgIHB1YmxpYyBhbm9tYWx5RGV0ZWN0aW9uOiBib29sZWFuO1xuIFxuICAgIC8vIE1pbmltYWwgdGltZSBpbnRlcnZhbCBiZXR3ZWVuIGFsYXJtcyAoaW4gc2Vjb25kcykgLSAwIGZvciBubyBpbnRlcnZhbCBcbiAgICBwdWJsaWMgYWxhcm1JbnRlcnZhbDogbnVtYmVyO1xuIFxuICAgIC8vIE1heCBudW1iZXIgb2YgYm91bmRpbmcgYm94IHBlciBmcmFtZSBcbiAgICBwdWJsaWMgbWF4QkJveFBlckZyYW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IGZyYW1lIHJhdGUgXG4gICAgcHVibGljIG1heEZyYW1lUmF0ZTogbnVtYmVyO1xuIFxuICAgIC8vIFZpZGVvIHN0cmVhbSBzb3VyY2UgVVJJLCBmb3JtYXQgYW5kIHNjaGVtZXMgaXMgZGVyaXZlZCBmcm9tIHRoZSBzdHJlYW0gdHlwZSwgc2VlIFN0cmVhbVR5cGVDb2RlKSBcbiAgICBwdWJsaWMgc3RyZWFtVXJpOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIGdlbyBsb2NhdGlvbiAoV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtKSBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gU2Vuc29yIEZPViBhemltdXRoICgwIC0gMzU5KSBcbiAgICBwdWJsaWMgYXppbXV0aDogbnVtYmVyO1xuIFxuICAgIC8vIEZpZWxkIG9mIFZpZXcgR2VvIGF0dHJpYnV0ZXMgKHVzZWQgZm9yIEZPViB0byBXR1MtODQgdHJhbnNmb3JtYXRpb25zKSBcbiAgICBwdWJsaWMgZm92QXR0cmlidXRlczogRm92R2VvQXR0cmlidXRlcztcbiBcbiAgICAvLyBFeHRlcm5hbCBpZCAoY2FtZXJhIGlkIGluIGV4dGVybmFsIHN5c3RlbSkgXG4gICAgcHVibGljIGV4dGVybmFsSWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGRlZmluZWQgdGFncyAobGlzdCBvZiBrZXktdmFsdWUgcGFpcnMpIFxuICAgIHB1YmxpYyB0YWdzOiBTdHJpbmdLZXlWYWx1ZVtdO1xuIFxuICAgIC8vIERldmljZSBwYXRoIGluIHRoZSBhY2NvdW50IGhpZXJhcmNoeSBcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEhlYWx0aCBub3RpZmljYXRpb25zIHRocmVzaG9sZHMgXG4gICAgcHVibGljIGhlYWx0aFRocmVzaG9sZHM6IFRocmVzaG9sZHM7XG4gXG4gICAgLy8gU2Vuc29yIGRlYnVnIGluZm9ybWF0aW9uIGZsYWdzIFxuICAgIHB1YmxpYyBkZWJ1Z0luZm86IFNlbnNvckRlYnVnSW5mbztcbiBcbiAgICAvLyBGbGFnIHRvIGluZGljYXRlIGlmIHRoZSBhZ2VudCBzaG91bGQgc3luYyB0aGUgZnJhbWUgdGltZXN0YW1wcyBmcm9tIHRoZSBSVFNQIHN0cmVhbSBcbiAgICBwdWJsaWMgc3luY1RpbWVUb1N0cmVhbTogYm9vbGVhbjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=