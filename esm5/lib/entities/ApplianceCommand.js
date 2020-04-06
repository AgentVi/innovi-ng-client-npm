import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance command - represents commands sent to the appliance
*/
var ApplianceCommand = /** @class */ (function (_super) {
    __extends(ApplianceCommand, _super);
    function ApplianceCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ApplianceCommand;
}(BaseEntity));
export { ApplianceCommand };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FwcGxpYW5jZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUlwRDs7RUFFRTtBQUNGO0lBQXNDLG9DQUFVO0lBQWhEOztJQXVDQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBdkNELENBQXNDLFVBQVUsR0F1Qy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbXBvbmVudENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVGcmFtZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBBcHBsaWFuY2VDb21tYW5kQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZUNvbW1hbmRDb2RlJztcbmltcG9ydCB7IENvbW1hbmRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQ29tbWFuZFN0YXR1c0NvZGUnO1xuXG4vKiBcbiAgIEFwcGxpYW5jZSBjb21tYW5kIC0gcmVwcmVzZW50cyBjb21tYW5kcyBzZW50IHRvIHRoZSBhcHBsaWFuY2UgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZUNvbW1hbmQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSWQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gT3BlcmF0aW9uIGNvZGU6IFVOREVGSU5FRCB8IEdFVF9DQVBBQklMSVRJRVMgfCBTRVRfQ09NUE9ORU5UUyB8IFJFTU9WRV9DT01QT05FTlRTIHwgUkVTVEFSVF9DT01QT05FTlRTIHwgTElTVF9DT05UQUlORVJTIHwgU0VORF9MT0dTLi4uIFxuICAgIHB1YmxpYyBvcENvZGU6IEFwcGxpYW5jZUNvbW1hbmRDb2RlO1xuIFxuICAgIC8vIENvbW1hbmQgc3RhdHVzIGZsYWc6IFBFTkRJTkcgfCBFWEVDVVRJTkcgfCBDT01QTEVURUQgfCBGQUlMRUQgXG4gICAgcHVibGljIHN0YXR1czogQ29tbWFuZFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVGhlIGZhaWx1cmUgcmVhc29uIGluIGNhc2Ugb2YgRkFJTEVEIHN0YXR1cyAoNCkgXG4gICAgcHVibGljIHJlYXNvbjogc3RyaW5nO1xuIFxuICAgIC8vIENvbXBvbmVudHMgdG8gYWRkIChwYXlsb2FkIGZvciBTRVRfQ09NUE9ORU5UUyBvcC1jb2RlKSBcbiAgICBwdWJsaWMgY29tcG9uZW50czogQ29tcG9uZW50Q29uZmlndXJhdGlvbltdO1xuIFxuICAgIC8vIExpc3Qgb2YgY29tcG9uZW50IElkcyB0byByZW1vdmUgb3IgcmVzZXQgKHBheWxvYWQgZm9yIFJFTU9WRV9DT01QT05FTlRTLCBSRVNUQVJUX0NPTVBPTkVOVFMsIFNFTkRfTE9HUyBvcC1jb2RlcykgXG4gICAgcHVibGljIGNvbXBvbmVudElkczogc3RyaW5nW107XG4gXG4gICAgLy8gVGltZSBmcmFtZSBvZiB0aGUgbG9nIGNvbGxlY3Rpb24gLSBlYWNoIHRpbWVzdGFtcCBpbiB0aGUgdGltZSBmcmFtZSByZXByZXNlbnRzIFVUQyBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcyAocGF5bG9hZCBmb3IgU0VORF9MT0dTIG9wLWNvZGUpIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=