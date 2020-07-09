import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance command - represents commands sent to the appliance
*/
export class ApplianceCommand extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FwcGxpYW5jZUNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7Q0FtRC9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwbGlhbmNlQ29tbWFuZENvZGUgfSBmcm9tICcuLi9lbnVtcy9BcHBsaWFuY2VDb21tYW5kQ29kZSc7XG5pbXBvcnQgeyBDb21tYW5kU3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0NvbW1hbmRTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvbXBvbmVudENvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9lbnRpdGllcy9Db21wb25lbnRDb25maWd1cmF0aW9uJztcbmltcG9ydCB7IFRpbWVGcmFtZSB9IGZyb20gJy4uL2NvbW1vbi9UaW1lRnJhbWUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEFwcGxpYW5jZSBjb21tYW5kIC0gcmVwcmVzZW50cyBjb21tYW5kcyBzZW50IHRvIHRoZSBhcHBsaWFuY2UgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZUNvbW1hbmQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBBcHBsaWFuY2UgSWQgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gT3BlcmF0aW9uIGNvZGU6IFVOREVGSU5FRCB8IEdFVF9DQVBBQklMSVRJRVMgfCBTRVRfQ09NUE9ORU5UUyB8IFJFTU9WRV9DT01QT05FTlRTIHwgUkVTVEFSVF9DT01QT05FTlRTIHwgTElTVF9DT05UQUlORVJTIHwgU0VORF9MT0dTLi4uIFxuICAgIHB1YmxpYyBvcENvZGU6IEFwcGxpYW5jZUNvbW1hbmRDb2RlO1xuIFxuICAgIC8vIENvbW1hbmQgc3RhdHVzIGZsYWc6IFBFTkRJTkcgfCBFWEVDVVRJTkcgfCBDT01QTEVURUQgfCBGQUlMRUQgXG4gICAgcHVibGljIHN0YXR1czogQ29tbWFuZFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gVGhlIGZhaWx1cmUgcmVhc29uIGluIGNhc2Ugb2YgRkFJTEVEIHN0YXR1cyAoNCkgXG4gICAgcHVibGljIHJlYXNvbjogc3RyaW5nO1xuIFxuICAgIC8vIENvbXBvbmVudHMgdG8gYWRkIChwYXlsb2FkIGZvciBTRVRfQ09NUE9ORU5UUyBvcC1jb2RlKSBcbiAgICBwdWJsaWMgY29tcG9uZW50czogQ29tcG9uZW50Q29uZmlndXJhdGlvbltdO1xuIFxuICAgIC8vIExpc3Qgb2YgY29tcG9uZW50IElkcyB0byByZW1vdmUgb3IgcmVzZXQgKHBheWxvYWQgZm9yIFJFTU9WRV9DT01QT05FTlRTLCBSRVNUQVJUX0NPTVBPTkVOVFMsIFNFTkRfTE9HUyBvcC1jb2RlcykgXG4gICAgcHVibGljIGNvbXBvbmVudElkczogc3RyaW5nW107XG4gXG4gICAgLy8gVGltZSBmcmFtZSBmaWx0ZXIgb2YgdGhlIGxvZyBjb2xsZWN0aW9uIC0gZWFjaCB0aW1lc3RhbXAgaW4gdGhlIHRpbWUgZnJhbWUgcmVwcmVzZW50cyBVVEMgZXBvY2ggdGltZSBtaWxsaXNlY29uZHMgKHBheWxvYWQgZm9yIFNFTkRfTE9HUyBvcC1jb2RlKSBcbiAgICBwdWJsaWMgdGltZUZyYW1lOiBUaW1lRnJhbWU7XG4gXG4gICAgLy8gTG9nIGxldmVsIGZpbHRlciBvZiBsb2cgY29sbGVjdGlvbiAocGF5bG9hZCBmb3IgU0VORF9MT0dTIG9wLWNvZGUpIFxuICAgIHB1YmxpYyBsb2dMZXZlbDogc3RyaW5nO1xuIFxuICAgIC8vIFBhY2thZ2UgY29uZmlndXJhdGlvbiBJZCAocGF5bG9hZCBmb3IgU0VUX0NPTVBPTkVOVFMgb3AtY29kZSkgXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIFBhY2thZ2UgY29uZmlndXJhdGlvbiB2ZXJzaW9uIElkIChwYXlsb2FkIGZvciBTRVRfQ09NUE9ORU5UUyBvcC1jb2RlKSBcbiAgICBwdWJsaWMgdmVyc2lvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gQ29uZmlndXJhdGlvbiBwcm9maWxlIElkIChwYXlsb2FkIGZvciBTRVRfQ09NUE9ORU5UUyBvcC1jb2RlKSBcbiAgICBwdWJsaWMgcHJvZmlsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19