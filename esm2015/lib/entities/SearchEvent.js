import { BaseEntity } from '../entities/BaseEntity';
/*
   Search result item of search operation. The data structure is identical to an Event
*/
export class SearchEvent extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL1NlYXJjaEV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxXQUFZLFNBQVEsVUFBVTtDQW9GMUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0SW5mbyB9IGZyb20gJy4uL2NvbW1vbi9PYmplY3RJbmZvJztcbmltcG9ydCB7IEJvdW5kaW5nQm94IH0gZnJvbSAnLi4vY29tbW9uL0JvdW5kaW5nQm94JztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBTZWFyY2ggcmVzdWx0IGl0ZW0gb2Ygc2VhcmNoIG9wZXJhdGlvbi4gVGhlIGRhdGEgc3RydWN0dXJlIGlzIGlkZW50aWNhbCB0byBhbiBFdmVudCBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoRXZlbnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBTZW5zb3IgSWQgXG4gICAgcHVibGljIHNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXh0ZXJuYWwgU2Vuc29yIElkIChmb3IgaW50ZWdyYXRpb25zKSBcbiAgICBwdWJsaWMgZXh0U2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBldmVudCB3YXMgZGV0ZWN0ZWQgaW4gVVRDIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXZlbnRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZXZlbnQgd2FzIGRldGVjdGVkIGluIHRoZSBzaXRlIGxvY2FsIHRpbWUgW0lTTyA4NjAxIGZvcm1hdF0gXG4gICAgcHVibGljIGV2ZW50U2l0ZVRpbWU6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIElkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHRlcm5hbCBSdWxlIElkIChmb3IgaW50ZWdyYXRpb25zKSBcbiAgICBwdWJsaWMgZXh0UnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gKGZyZWUgdGV4dCBhcyBwcm92aWRlZCBieSB0aGUgZXZlbnQgc291cmNlIC0gZXZlbnQgZW5naW5lLCBhbm9tYWx5LCBjdXN0b20sIEZSLCBMUFIgLi4uKSBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBEZXRlY3RlZCBiZWhhdmlvciB0eXBlIChVTktOT1dOIHwgQ1JPU1NJTkcgfCBNT1ZJTkcgfCBHUk9VUElORyB8IE9DQ1VQQU5DWSAuLi4pIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZTtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgdHlwZSAoVU5LTk9XTiB8IFBFUlNPTiB8IFZFSElDTEUgfCBCVVMgfCBUUkFDSyAuLi4pIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gVmFsaWRhdGlvbiBzdGF0dXMgZm9yIGV2ZW50IHByb2Nlc3Npbmcgd29ya2Zsb3c6IE5FVyB8IE9QRU4gfCBDTE9TRSB8IElSUkVMRVZBTlQgfCBGQUxTRSBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gRXZlbnQgZ2VvIGxvY2F0aW9uIChXR1MtODQgY29vcmRpbmF0ZSBzeXN0ZW0pLiBUaGlzIGZpZWxkIGlzIGFwcGxpY2FibGUgb25seSBpZiB0aGUgc2Vuc29yIGlzIGdlby1yZWZlcmVuY2VkLiBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgcGF0aCBcbiAgICBwdWJsaWMgaW1hZ2VQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgY2xpcCBwYXRoIFxuICAgIHB1YmxpYyBjbGlwUGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IHNldmVyaXR5IGxldmVsOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudEltYWdlVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCBpbmZvcm1hdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRPYmplY3RzOiBPYmplY3RJbmZvW107XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0KHMpIGJvdW5kaW5nIGJveChlcykgXG4gICAgcHVibGljIGV2ZW50QmJveGVzOiBCb3VuZGluZ0JveFtdO1xuIFxuICAgIC8vIFNlYXJjaCBzZXNzaW9uIElkIFxuICAgIHB1YmxpYyBzZXNzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBTZWFyY2ggcmVzdWx0IHNjb3JlIFxuICAgIHB1YmxpYyBzY29yZTogbnVtYmVyO1xuIFxuICAgIC8vIEFsbG93IHByb3BlciBkaXNwbGF5IG9mIGZhY2VzIGluIHRoZSBVSSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxNb2RlbE5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBUcnVlIGlmIHRoaXMgaXMgYSB0ZXN0IGV2ZW50LCBvdGhlcndpc2UgZmFsc2UgXG4gICAgcHVibGljIHRlc3RFdmVudDogYm9vbGVhbjtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gRW50aXR5IHBhdGggaW4gdGhlIGhpZXJhcmNoeSBcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuIFxuXG59XG5cblxuIl19