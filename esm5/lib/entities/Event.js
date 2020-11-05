import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Detection event type
*/
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Event;
}(BaseEntity));
export { Event };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9FdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBTXBEOztFQUVFO0FBQ0Y7SUFBMkIseUJBQVU7SUFBckM7O0lBd0VBLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQXhFRCxDQUEyQixVQUFVLEdBd0VwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNldmVyaXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9TZXZlcml0eVR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdEluZm8gfSBmcm9tICcuLi9jb21tb24vT2JqZWN0SW5mbyc7XG5pbXBvcnQgeyBCb3VuZGluZ0JveCB9IGZyb20gJy4uL2NvbW1vbi9Cb3VuZGluZ0JveCc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IEV2ZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0V2ZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuXG4vKiBcbiAgIERldGVjdGlvbiBldmVudCB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBFdmVudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHRlcm5hbCBzZW5zb3IgSWQgKGluIHRoZSBpbnRlZ3JhdGVkIHN5c3RlbSkgXG4gICAgcHVibGljIGV4dFNlbnNvcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZXZlbnQgd2FzIGRldGVjdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgZXZlbnRUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gUnVsZSBJZCBcbiAgICBwdWJsaWMgcnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXh0ZXJuYWwgcnVsZSBJZCAoaW4gdGhlIGludGVncmF0ZWQgc3lzdGVtKSBcbiAgICBwdWJsaWMgZXh0UnVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgZGVzY3JpcHRpb24gKGZyZWUgdGV4dCBhcyBwcm92aWRlZCBieSB0aGUgZXZlbnQgc291cmNlIC0gZXZlbnQgZW5naW5lLCBhbm9tYWx5LCBjdXN0b20sIEZSLCBMUFIgLi4uKSBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBEZXRlY3RlZCBvYmplY3QgdHlwZSAoVU5LTk9XTiB8IFBFUlNPTiB8IFZFSElDTEUgfCBCVVMgfCBUUkFDSyAuLi4pIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZTtcbiBcbiAgICAvLyBEZXRlY3RlZCBiZWhhdmlvciB0eXBlIChVTktOT1dOIHwgQ1JPU1NJTkcgfCBNT1ZJTkcgfCBHUk9VUElORyB8IE9DQ1VQQU5DWSAuLi4pIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gVmFsaWRhdGlvbiBzdGF0dXMgZm9yIGV2ZW50IHByb2Nlc3Npbmcgd29ya2Zsb3c6IE5FVyB8IE9QRU4gfCBDTE9TRSB8IElSUkVMRVZBTlQgfCBGQUxTRSBcbiAgICBwdWJsaWMgc3RhdHVzOiBFdmVudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVGhlIFVzZXIgSWQgd2hvIGNoYW5nZWQgdGhlIGV2ZW50IHN0YXR1cyBcbiAgICBwdWJsaWMgc3RhdHVzQ2hhbmdlZEJ5OiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZXZlbnQgc3RhdHVzIHdhcyBjaGFuZ2VkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgc3RhdHVzQ2hhbmdlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gRXZlbnQgZ2VvIGxvY2F0aW9uIChXR1MtODQgY29vcmRpbmF0ZSBzeXN0ZW0pLiBUaGlzIGZpZWxkIGlzIGFwcGxpY2FibGUgb25seSBpZiB0aGUgc2Vuc29yIGlzIGdlby1yZWZlcmVuY2VkLiBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gRXZlbnQgaW1hZ2UgcGF0aCBcbiAgICBwdWJsaWMgaW1hZ2VQYXRoOiBzdHJpbmc7XG4gXG4gICAgLy8gRXZlbnQgY2xpcCBwYXRoIFxuICAgIHB1YmxpYyBjbGlwUGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEV2ZW50IHNldmVyaXR5IGxldmVsOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIEV2ZW50IGltYWdlIHRpbWUgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBldmVudEltYWdlVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIERldGVjdGVkIG9iamVjdCBpbmZvcm1hdGlvbiBcbiAgICBwdWJsaWMgZXZlbnRPYmplY3RzOiBPYmplY3RJbmZvW107XG4gXG4gICAgLy8gRGV0ZWN0ZWQgb2JqZWN0KHMpIGJvdW5kaW5nIGJveChlcykgXG4gICAgcHVibGljIGV2ZW50QmJveGVzOiBCb3VuZGluZ0JveFtdO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==