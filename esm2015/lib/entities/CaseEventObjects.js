import { BaseEntity } from '../entities/BaseEntity';
/*
   Case event objects is extended Search Event with the list of all the event objects timestamped crops
*/
export class CaseEventObjects extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzZUV2ZW50T2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvQ2FzZUV2ZW50T2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtDQTJFL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBUaW1lc3RhbXBlZENyb3AgfSBmcm9tICcuLi9jb21tb24vVGltZXN0YW1wZWRDcm9wJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgRXZlbnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvRXZlbnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBTZXZlcml0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvU2V2ZXJpdHlUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RJbmZvIH0gZnJvbSAnLi4vY29tbW9uL09iamVjdEluZm8nO1xuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICcuLi9jb21tb24vQm91bmRpbmdCb3gnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIENhc2UgZXZlbnQgb2JqZWN0cyBpcyBleHRlbmRlZCBTZWFyY2ggRXZlbnQgd2l0aCB0aGUgbGlzdCBvZiBhbGwgdGhlIGV2ZW50IG9iamVjdHMgdGltZXN0YW1wZWQgY3JvcHMgXG4qL1xuZXhwb3J0IGNsYXNzIENhc2VFdmVudE9iamVjdHMgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXh0ZXJuYWwgU2Vuc29yIElkIChmb3IgaW50ZWdyYXRpb25zKSBcbiAgICBwdWJsaWMgZXh0U2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBldmVudCB3YXMgZGV0ZWN0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBSdWxlIElkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHRlcm5hbCBSdWxlIElkIChmb3IgaW50ZWdyYXRpb25zKSBcbiAgICBwdWJsaWMgZXh0UnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gKGZyZWUgdGV4dCBhcyBwcm92aWRlZCBieSB0aGUgZXZlbnQgc291cmNlIC0gZXZlbnQgZW5naW5lLCBhbm9tYWx5LCBjdXN0b20sIEZSLCBMUFIgLi4uKSBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBEZXRlY3RlZCBiZWhhdmlvciB0eXBlIChVTktOT1dOIHwgQ1JPU1NJTkcgfCBNT1ZJTkcgfCBHUk9VUElORyB8IENST1dEIERFTlNJVFkgLi4uKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IHR5cGUgKFVOS05PV04gfCBQRVJTT04gfCBWRUhJQ0xFIHwgQlVTIHwgVFJBQ0sgLi4uKSBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIFZhbGlkYXRpb24gc3RhdHVzIGZvciBldmVudCBwcm9jZXNzaW5nIHdvcmtmbG93OiBORVcgfCBPUEVOIHwgQ0xPU0UgfCBJUlJFTEVWQU5UIHwgRkFMU0UgXG4gICAgcHVibGljIHN0YXR1czogRXZlbnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGdlbyBsb2NhdGlvbiAoV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtKS4gVGhpcyBmaWVsZCBpcyBhcHBsaWNhYmxlIG9ubHkgaWYgdGhlIHNlbnNvciBpcyBnZW8tcmVmZXJlbmNlZC4gXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHBhdGggXG4gICAgcHVibGljIGltYWdlUGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IGNsaXAgcGF0aCBcbiAgICBwdWJsaWMgY2xpcFBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBzZXZlcml0eSBsZXZlbDogVU5ERUZJTkVEIHwgTE9XIHwgTUVESVVNIHwgSElHSCB8IENSSVRJQ0FMIFxuICAgIHB1YmxpYyBzZXZlcml0eTogU2V2ZXJpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBFdmVudCBpbWFnZSB0aW1lIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXZlbnRJbWFnZVRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgaW5mb3JtYXRpb24gXG4gICAgcHVibGljIGV2ZW50T2JqZWN0czogT2JqZWN0SW5mb1tdO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdChzKSBib3VuZGluZyBib3goZXMpIFxuICAgIHB1YmxpYyBldmVudEJib3hlczogQm91bmRpbmdCb3hbXTtcbiBcbiAgICAvLyBTZWFyY2ggc2Vzc2lvbiBJZCBcbiAgICBwdWJsaWMgc2Vzc2lvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBvYmplY3QncyB0aW1lc3RhbXBlZCBjcm9wcyBcbiAgICBwdWJsaWMgY3JvcHM6IFRpbWVzdGFtcGVkQ3JvcFtdO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgcGF0aCBpbiB0aGUgaGllcmFyY2h5IFxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG4gXG5cbn1cblxuXG4iXX0=