import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance command - represents commands sent to the appliance
*/
export class ApplianceCommand extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FwcGxpYW5jZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7Q0F1Qy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Db21tYW5kU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb21wb25lbnRDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vZW50aXRpZXMvQ29tcG9uZW50Q29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBUaW1lRnJhbWUgfSBmcm9tICcuLi9jb21tb24vVGltZUZyYW1lJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEFwcGxpYW5jZUNvbW1hbmRDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlQ29tbWFuZENvZGUnO1xuXG4vKiBcbiAgIEFwcGxpYW5jZSBjb21tYW5kIC0gcmVwcmVzZW50cyBjb21tYW5kcyBzZW50IHRvIHRoZSBhcHBsaWFuY2UgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZUNvbW1hbmQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSWQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gT3BlcmF0aW9uIGNvZGU6IFVOREVGSU5FRCB8IEdFVF9DQVBBQklMSVRJRVMgfCBTRVRfQ09NUE9ORU5UUyB8IFJFTU9WRV9DT01QT05FTlRTIHwgUkVTVEFSVF9DT01QT05FTlRTIHwgTElTVF9DT05UQUlORVJTIHwgU0VORF9MT0dTLi4uIFxuICAgIHB1YmxpYyBvcENvZGU6IEFwcGxpYW5jZUNvbW1hbmRDb2RlO1xuIFxuICAgIC8vIENvbW1hbmQgc3RhdHVzIGZsYWc6IFBFTkRJTkcgfCBFWEVDVVRJTkcgfCBDT01QTEVURUQgfCBGQUlMRUQgXG4gICAgcHVibGljIHN0YXR1czogQ29tbWFuZFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVGhlIGZhaWx1cmUgcmVhc29uIGluIGNhc2Ugb2YgRkFJTEVEIHN0YXR1cyAoNCkgXG4gICAgcHVibGljIHJlYXNvbjogc3RyaW5nO1xuIFxuICAgIC8vIENvbXBvbmVudHMgdG8gYWRkIChwYXlsb2FkIGZvciBTRVRfQ09NUE9ORU5UUyBvcC1jb2RlKSBcbiAgICBwdWJsaWMgY29tcG9uZW50czogQ29tcG9uZW50Q29uZmlndXJhdGlvbltdO1xuIFxuICAgIC8vIExpc3Qgb2YgY29tcG9uZW50IElkcyB0byByZW1vdmUgb3IgcmVzZXQgKHBheWxvYWQgZm9yIFJFTU9WRV9DT01QT05FTlRTLCBSRVNUQVJUX0NPTVBPTkVOVFMsIFNFTkRfTE9HUyBvcC1jb2RlcykgXG4gICAgcHVibGljIGNvbXBvbmVudElkczogc3RyaW5nW107XG4gXG4gICAgLy8gVGltZSBmcmFtZSBvZiB0aGUgbG9nIGNvbGxlY3Rpb24gLSBlYWNoIHRpbWVzdGFtcCBpbiB0aGUgdGltZSBmcmFtZSByZXByZXNlbnRzIFVUQyBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcyAocGF5bG9hZCBmb3IgU0VORF9MT0dTIG9wLWNvZGUpIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=