import { BaseEntity } from '../entities/BaseEntity';
/*
   Detection event type
*/
export class Event extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFTcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sS0FBTSxTQUFRLFVBQVU7Q0FrRXBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBFdmVudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9FdmVudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdEluZm8gfSBmcm9tICcuLi9jb21tb24vT2JqZWN0SW5mbyc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJy4uL2NvbW1vbi9Cb3VuZGluZ0JveCc7XG5cbi8qIFxuICAgRGV0ZWN0aW9uIGV2ZW50IHR5cGUgXG4qL1xuZXhwb3J0IGNsYXNzIEV2ZW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIEV4dGVybmFsIHNlbnNvciBJZCAoaW4gdGhlIGludGVncmF0ZWQgc3lzdGVtKSBcbiAgICBwdWJsaWMgZXh0U2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBldmVudCB3YXMgZGV0ZWN0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBSdWxlIElkIFxuICAgIHB1YmxpYyBydWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHRlcm5hbCBydWxlIElkIChpbiB0aGUgaW50ZWdyYXRlZCBzeXN0ZW0pIFxuICAgIHB1YmxpYyBleHRSdWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBkZXNjcmlwdGlvbiAoZnJlZSB0ZXh0IGFzIHByb3ZpZGVkIGJ5IHRoZSBldmVudCBzb3VyY2UgLSBldmVudCBlbmdpbmUsIGFub21hbHksIGN1c3RvbSwgRlIsIExQUiAuLi4pIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCB0eXBlIChVTktOT1dOIHwgUEVSU09OIHwgVkVISUNMRSB8IEJVUyB8IFRSQUNLIC4uLikgXG4gICAgcHVibGljIG9iamVjdFR5cGU6IE9iamVjdFR5cGVDb2RlO1xuIFxuICAgIC8vIERldGVjdGVkIGJlaGF2aW9yIHR5cGUgKFVOS05PV04gfCBDUk9TU0lORyB8IE1PVklORyB8IEdST1VQSU5HIHwgT0NDVVBBTkNZIC4uLikgXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBWYWxpZGF0aW9uIHN0YXR1cyBmb3IgZXZlbnQgcHJvY2Vzc2luZyB3b3JrZmxvdzogTkVXIHwgT1BFTiB8IENMT1NFIHwgSVJSRUxFVkFOVCB8IEZBTFNFIFxuICAgIHB1YmxpYyBzdGF0dXM6IEV2ZW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBFdmVudCBnZW8gbG9jYXRpb24gKFdHUy04NCBjb29yZGluYXRlIHN5c3RlbSkuIFRoaXMgZmllbGQgaXMgYXBwbGljYWJsZSBvbmx5IGlmIHRoZSBzZW5zb3IgaXMgZ2VvLXJlZmVyZW5jZWQuIFxuICAgIHB1YmxpYyBnZW9Mb2NhdGlvbjogQ29vcmRpbmF0ZTtcbiBcbiAgICAvLyBFdmVudCBpbWFnZSBwYXRoIFxuICAgIHB1YmxpYyBpbWFnZVBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBFdmVudCBjbGlwIHBhdGggXG4gICAgcHVibGljIGNsaXBQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgc2V2ZXJpdHkgbGV2ZWw6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgdGltZSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGV2ZW50SW1hZ2VUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0IGluZm9ybWF0aW9uIFxuICAgIHB1YmxpYyBldmVudE9iamVjdHM6IE9iamVjdEluZm9bXTtcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QocykgYm91bmRpbmcgYm94KGVzKSBcbiAgICBwdWJsaWMgZXZlbnRCYm94ZXM6IEJvdW5kaW5nQm94W107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19