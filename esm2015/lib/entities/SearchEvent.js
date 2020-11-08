import { BaseEntity } from '../entities/BaseEntity';
/*
   Search result item of search operation. The data structure is identical to an Event
*/
export class SearchEvent extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TZWFyY2hFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sV0FBWSxTQUFRLFVBQVU7Q0FrRTFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICcuLi9jb21tb24vQm91bmRpbmdCb3gnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdEluZm8gfSBmcm9tICcuLi9jb21tb24vT2JqZWN0SW5mbyc7XG5cbi8qIFxuICAgU2VhcmNoIHJlc3VsdCBpdGVtIG9mIHNlYXJjaCBvcGVyYXRpb24uIFRoZSBkYXRhIHN0cnVjdHVyZSBpcyBpZGVudGljYWwgdG8gYW4gRXZlbnQgXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaEV2ZW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV4dGVybmFsIFNlbnNvciBJZCAoZm9yIGludGVncmF0aW9ucykgXG4gICAgcHVibGljIGV4dFNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZXZlbnQgd2FzIGRldGVjdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXZlbnRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gUnVsZSBJZCBcbiAgICBwdWJsaWMgcnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXh0ZXJuYWwgUnVsZSBJZCAoZm9yIGludGVncmF0aW9ucykgXG4gICAgcHVibGljIGV4dFJ1bGVJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGRlc2NyaXB0aW9uIChmcmVlIHRleHQgYXMgcHJvdmlkZWQgYnkgdGhlIGV2ZW50IHNvdXJjZSAtIGV2ZW50IGVuZ2luZSwgYW5vbWFseSwgY3VzdG9tLCBGUiwgTFBSIC4uLikgXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgYmVoYXZpb3IgdHlwZSAoVU5LTk9XTiB8IENST1NTSU5HIHwgTU9WSU5HIHwgR1JPVVBJTkcgfCBPQ0NVUEFOQ1kgLi4uKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IHR5cGUgKFVOS05PV04gfCBQRVJTT04gfCBWRUhJQ0xFIHwgQlVTIHwgVFJBQ0sgLi4uKSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFZhbGlkYXRpb24gc3RhdHVzIGZvciBldmVudCBwcm9jZXNzaW5nIHdvcmtmbG93OiBORVcgfCBPUEVOIHwgQ0xPU0UgfCBJUlJFTEVWQU5UIHwgRkFMU0UgXG4gICAgcHVibGljIHN0YXR1czogRXZlbnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGdlbyBsb2NhdGlvbiAoV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtKS4gVGhpcyBmaWVsZCBpcyBhcHBsaWNhYmxlIG9ubHkgaWYgdGhlIHNlbnNvciBpcyBnZW8tcmVmZXJlbmNlZC4gXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHBhdGggXG4gICAgcHVibGljIGltYWdlUGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGNsaXAgcGF0aCBcbiAgICBwdWJsaWMgY2xpcFBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBzZXZlcml0eSBsZXZlbDogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBFdmVudCBpbWFnZSB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXZlbnRJbWFnZVRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgaW5mb3JtYXRpb24gXG4gICAgcHVibGljIGV2ZW50T2JqZWN0czogT2JqZWN0SW5mb1tdO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdChzKSBib3VuZGluZyBib3goZXMpIFxuICAgIHB1YmxpYyBldmVudEJib3hlczogQm91bmRpbmdCb3hbXTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=