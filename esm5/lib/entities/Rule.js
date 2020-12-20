import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rule;
}(BaseEntity));
export { Rule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1J1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7O0VBR0U7QUFDRjtJQUEwQix3QkFBVTtJQUFwQzs7SUFvRkEsQ0FBQztJQUFELFdBQUM7QUFBRCxDQUFDLEFBcEZELENBQTBCLFVBQVUsR0FvRm5DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2Vuc2l0aXZpdHkgfSBmcm9tICcuLi9jb21tb24vU2Vuc2l0aXZpdHknO1xuaW1wb3J0IHsgUnVsZVBvbHlnb24gfSBmcm9tICcuLi9jb21tb24vUnVsZVBvbHlnb24nO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5cbi8qIFxuICAgUnVsZSBSZXByZXNlbnRzIHJlYWwtdGltZSBhbmFseXRpYyBydWxlLCB0aGUgc3RydWN0dXJlIGlzIGEgdW5pb24gb2YgYWxsIHRoZSBhdHRyaWJ1dGVzIHVzZWQgYnkgYWxsIHRoZSB0eXBlcyBvZlxuICAgcmVhbC10aW1lIHJ1bGVzIChjcm9zc2luZywgbW92aW5nLCBncm91cGluZyAuLi4pIGhlbmNlIG5vdCBhbGwgYXR0cmlidXRlcyBhcmUgdXNlZCBmb3IgZXZlcnkgcnVsZSB0eXBlIFxuKi9cbmV4cG9ydCBjbGFzcyBSdWxlIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIElkIFxuICAgIHB1YmxpYyBzZW5zb3JJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgSWQgXG4gICAgcHVibGljIHNjaGVkdWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbmRpY2F0ZSBpZiB0aGUgcnVsZSBpcyBleHBsaWNpdGx5IGVuYWJsZWQgb3IgZGlzYWJsZWQgKGJ5IHVzZXIgb3IgYnkgQVBJIGNhbGwgLSBlLmcuIGFybS9kaXNhcm0pIFxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xuIFxuICAgIC8vIEluZGljYXRlIGlmIHRoZSBydWxlIGlzIGFjdGl2ZSBvciBpbmFjdGl2ZSBkdWUgdG8gaXQncyBzY2hlZHVsZSAvIGNhbGVuZGFyIHRpbWUgc2xvdHMgXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiBcbiAgICAvLyBSdWxlIGV4dGVybmFsIGlkIChob3cgdGhlIHJ1bGUgaXMgaWRlbnRpZmllZCBpbiBvdGhlciBzeXN0ZW0pIFxuICAgIHB1YmxpYyBleHRlcm5hbElkOiBzdHJpbmc7XG4gXG4gICAgLy8gUnVsZSBiZWhhdmlvciB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBSdWxlIG9iamVjdCB0eXBlczogUEVSU09OIHwgVkVISUNMRSB8IE1PVE9SQ1lDTEUgLi4uIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlczogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBEZWZhdWx0IHNldmVyaXR5IGxldmVsIGZvciB0aGlzIHJ1bGU6IFVOREVGSU5FRCB8IExPVyB8IE1FRElVTSB8IEhJR0ggfCBDUklUSUNBTCBcbiAgICBwdWJsaWMgc2V2ZXJpdHk6IFNldmVyaXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gU2Vuc2l0aXZpdHkgKGZvciBBbm9tYWx5IHJ1bGUgb25seSkgXG4gICAgcHVibGljIHNlbnNpdGl2aXR5OiBTZW5zaXRpdml0eTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIFtzZWNvbmRzXSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IG51bWJlciBvZiBwZW9wbGUgaW4gZ3JvdXAgKGZvciBPY2N1cGFuY3kgcnVsZSkgXG4gICAgcHVibGljIG1heE9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IGRpc3RhbmNlIGJldHdlZW4gcGVvcGxlIHRvIGJlIGNvbnNpZGVyZWQgYXMgZ3JvdXAgKGZvciBHcm91cGluZyBydWxlKSBcbiAgICBwdWJsaWMgY2x1c3RlckRpc3RhbmNlOiBudW1iZXI7XG4gXG4gICAgLy8gVGltZSBpbnRlcnZhbCBbc2Vjb25kc10gYmV0d2VlbiBzdGF0aXN0aWNzIHJlcG9ydHMgKGZvciBzdGF0aXN0aWNzIHJ1bGVzKSBcbiAgICBwdWJsaWMgaW50ZXJ2YWxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBwb2x5Z29ucyBcbiAgICBwdWJsaWMgcG9seWdvbnM6IFJ1bGVQb2x5Z29uW107XG4gXG4gICAgLy8gQmFzZTY0IGVuY29kZWQgY3JvcHBlZCBhc3NldCBpbWFnZSBcbiAgICBwdWJsaWMgcmVmZXJlbmNlQ3JvcDogc3RyaW5nO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgZXZlbnQgaW1hZ2Ugc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlSW1hZ2U6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBjbGlwIHNob3VsZCBiZSBnZW5lcmF0ZWQgXG4gICAgcHVibGljIGNyZWF0ZUNsaXA6IGJvb2xlYW47XG4gXG4gICAgLy8gV2hlbiB3YXMgdGhlIGxhc3QgYW5vbWFseSB0cmFpbmluZyAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGxhc3RUcmFpbmluZ09uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB3aWxsIGJlIHRoZSBuZXh0IGFub21hbHkgdHJhaW5pbmcgKGZvciBBbm9tYWx5IHJ1bGUgb25seSkgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBuZXh0VHJhaW5pbmdPbjogbnVtYmVyO1xuIFxuICAgIC8vIFRoZSBwZXJjZW50IG9mIHJlcXVpcmVkIG1ldGFkYXRhIHRoYXQgd2FzIGNvbGxlY3RlZCAoMC0xMDApIFxuICAgIHB1YmxpYyB0cmFpbmluZ1JlYWRpbmVzczogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==