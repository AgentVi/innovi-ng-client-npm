import { BaseEntity } from '../entities/BaseEntity';
/*
   Case event objects is extended Search Event with the list of all the event objects timestamped crops
*/
export class CaseEventObjects extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzZUV2ZW50T2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvQ2FzZUV2ZW50T2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtDQTJFL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgVGltZXN0YW1wZWRDcm9wIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVzdGFtcGVkQ3JvcCc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RJbmZvIH0gZnJvbSAnLi4vY29tbW9uL09iamVjdEluZm8nO1xuaW1wb3J0IHsgQm91bmRpbmdCb3ggfSBmcm9tICcuLi9jb21tb24vQm91bmRpbmdCb3gnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIENhc2UgZXZlbnQgb2JqZWN0cyBpcyBleHRlbmRlZCBTZWFyY2ggRXZlbnQgd2l0aCB0aGUgbGlzdCBvZiBhbGwgdGhlIGV2ZW50IG9iamVjdHMgdGltZXN0YW1wZWQgY3JvcHMgXG4qL1xuZXhwb3J0IGNsYXNzIENhc2VFdmVudE9iamVjdHMgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXh0ZXJuYWwgU2Vuc29yIElkIChmb3IgaW50ZWdyYXRpb25zKSBcbiAgICBwdWJsaWMgZXh0U2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBldmVudCB3YXMgZGV0ZWN0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBSdWxlIElkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHRlcm5hbCBSdWxlIElkIChmb3IgaW50ZWdyYXRpb25zKSBcbiAgICBwdWJsaWMgZXh0UnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gKGZyZWUgdGV4dCBhcyBwcm92aWRlZCBieSB0aGUgZXZlbnQgc291cmNlIC0gZXZlbnQgZW5naW5lLCBhbm9tYWx5LCBjdXN0b20sIEZSLCBMUFIgLi4uKSBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBEZXRlY3RlZCBiZWhhdmlvciB0eXBlIChVTktOT1dOIHwgQ1JPU1NJTkcgfCBNT1ZJTkcgfCBHUk9VUElORyB8IE9DQ1VQQU5DWSAuLi4pIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZTtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgdHlwZSAoVU5LTk9XTiB8IFBFUlNPTiB8IFZFSElDTEUgfCBCVVMgfCBUUkFDSyAuLi4pIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gVmFsaWRhdGlvbiBzdGF0dXMgZm9yIGV2ZW50IHByb2Nlc3Npbmcgd29ya2Zsb3c6IE5FVyB8IE9QRU4gfCBDTE9TRSB8IElSUkVMRVZBTlQgfCBGQUxTRSBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gRXZlbnQgZ2VvIGxvY2F0aW9uIChXR1MtODQgY29vcmRpbmF0ZSBzeXN0ZW0pLiBUaGlzIGZpZWxkIGlzIGFwcGxpY2FibGUgb25seSBpZiB0aGUgc2Vuc29yIGlzIGdlby1yZWZlcmVuY2VkLiBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgcGF0aCBcbiAgICBwdWJsaWMgaW1hZ2VQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgY2xpcCBwYXRoIFxuICAgIHB1YmxpYyBjbGlwUGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IHNldmVyaXR5IGxldmVsOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudEltYWdlVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCBpbmZvcm1hdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRPYmplY3RzOiBPYmplY3RJbmZvW107XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0KHMpIGJvdW5kaW5nIGJveChlcykgXG4gICAgcHVibGljIGV2ZW50QmJveGVzOiBCb3VuZGluZ0JveFtdO1xuIFxuICAgIC8vIFNlYXJjaCBzZXNzaW9uIElkIFxuICAgIHB1YmxpYyBzZXNzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIG9iamVjdCdzIHRpbWVzdGFtcGVkIGNyb3BzIFxuICAgIHB1YmxpYyBjcm9wczogVGltZXN0YW1wZWRDcm9wW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==