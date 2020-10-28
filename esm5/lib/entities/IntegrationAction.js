import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Integration action describes content details to use for a specific integration target
*/
var IntegrationAction = /** @class */ (function (_super) {
    __extends(IntegrationAction, _super);
    function IntegrationAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntegrationAction;
}(BaseEntity));
export { IntegrationAction };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZWdyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9JbnRlZ3JhdGlvbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0Y7SUFBdUMscUNBQVU7SUFBakQ7O0lBZ0RBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFoREQsQ0FBdUMsVUFBVSxHQWdEaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlZ3JhdGlvbkFjdGlvbkZpbHRlciB9IGZyb20gJy4uL2VudGl0aWVzL0ludGVncmF0aW9uQWN0aW9uRmlsdGVyJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEVudGl0eVR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvRW50aXR5VHlwZUNvZGUnO1xuXG4vKiBcbiAgIEludGVncmF0aW9uIGFjdGlvbiBkZXNjcmliZXMgY29udGVudCBkZXRhaWxzIHRvIHVzZSBmb3IgYSBzcGVjaWZpYyBpbnRlZ3JhdGlvbiB0YXJnZXQgXG4qL1xuZXhwb3J0IGNsYXNzIEludGVncmF0aW9uQWN0aW9uIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIElkIChFbXB0eSBpZiBpbnRlZ3JhdGlvbiBpcyBhc3NvY2lhdGVkIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IElkIFxuICAgIHB1YmxpYyB0YXJnZXRJZDogc3RyaW5nO1xuIFxuICAgIC8vIE9uIHdoaWNoIGVudGl0eSB0byBwZXJmb3JtIGludGVncmF0aW9uOiBFVkVOVCB8IEhFQUxUSF9FVkVOVCBcbiAgICBwdWJsaWMgZW50aXR5VHlwZTogRW50aXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gTGlzdCBvZiByZWNpcGllbnRzIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgcmVjaXBpZW50czogc3RyaW5nW107XG4gXG4gICAgLy8gTWVzc2FnZSBzdWJqZWN0IHRlbXBsYXRlIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgc3ViamVjdDogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgYm9keSB0ZW1wbGF0ZSBcbiAgICBwdWJsaWMgYm9keTogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgY29udGVudCBtaW1lIHR5cGUgXG4gICAgcHVibGljIG1pbWVUeXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhlIGludGVncmF0aW9uIGFjdGlvbiBlbmFibGVkPyBcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBGaWx0ZXIgY3JpdGVyaWEgZm9yIGNvbmRpdGlvbmFsIGludGVncmF0aW9uIFxuICAgIHB1YmxpYyBmaWx0ZXI6IEludGVncmF0aW9uQWN0aW9uRmlsdGVyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==