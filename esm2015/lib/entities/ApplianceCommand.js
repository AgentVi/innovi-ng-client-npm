import { BaseEntity } from '../entities/BaseEntity';
/*
   Appliance command - represents commands sent to the appliance
*/
export class ApplianceCommand extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlQ29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvQXBwbGlhbmNlQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQ7O0VBRUU7QUFDRixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtDQXlEL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWFuY2VDb21tYW5kQ29kZSB9IGZyb20gJy4uL2VudW1zL0FwcGxpYW5jZUNvbW1hbmRDb2RlJztcbmltcG9ydCB7IENvbW1hbmRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQ29tbWFuZFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29tcG9uZW50Q29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2VudGl0aWVzL0NvbXBvbmVudENvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IHsgVGltZUZyYW1lIH0gZnJvbSAnLi4vY29tbW9uL1RpbWVGcmFtZSc7XG5pbXBvcnQgeyBTU0hJbmZvIH0gZnJvbSAnLi4vZW50aXRpZXMvU1NISW5mbyc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQXBwbGlhbmNlIGNvbW1hbmQgLSByZXByZXNlbnRzIGNvbW1hbmRzIHNlbnQgdG8gdGhlIGFwcGxpYW5jZSBcbiovXG5leHBvcnQgY2xhc3MgQXBwbGlhbmNlQ29tbWFuZCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBJZCBcbiAgICBwdWJsaWMgYXBwbGlhbmNlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBPcGVyYXRpb24gY29kZTogVU5ERUZJTkVEIHwgR0VUX0NBUEFCSUxJVElFUyB8IFNFVF9DT01QT05FTlRTIHwgUkVNT1ZFX0NPTVBPTkVOVFMgfCBSRVNUQVJUX0NPTVBPTkVOVFMgfCBMSVNUX0NPTlRBSU5FUlMgfCBTRU5EX0xPR1MuLi4gXG4gICAgcHVibGljIG9wQ29kZTogQXBwbGlhbmNlQ29tbWFuZENvZGU7XG4gXG4gICAgLy8gQ29tbWFuZCBzdGF0dXMgZmxhZzogUEVORElORyB8IEVYRUNVVElORyB8IENPTVBMRVRFRCB8IEZBSUxFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBDb21tYW5kU3RhdHVzQ29kZTtcbiBcbiAgICAvLyBUaGUgZmFpbHVyZSByZWFzb24gaW4gY2FzZSBvZiBGQUlMRUQgc3RhdHVzICg0KSBcbiAgICBwdWJsaWMgcmVhc29uOiBzdHJpbmc7XG4gXG4gICAgLy8gQ29tcG9uZW50cyB0byBhZGQgKHBheWxvYWQgZm9yIFNFVF9DT01QT05FTlRTIG9wLWNvZGUpIFxuICAgIHB1YmxpYyBjb21wb25lbnRzOiBDb21wb25lbnRDb25maWd1cmF0aW9uW107XG4gXG4gICAgLy8gTGlzdCBvZiBjb21wb25lbnQgSWRzIHRvIHJlbW92ZSBvciByZXNldCAocGF5bG9hZCBmb3IgUkVNT1ZFX0NPTVBPTkVOVFMsIFJFU1RBUlRfQ09NUE9ORU5UUywgU0VORF9MT0dTIG9wLWNvZGVzKSBcbiAgICBwdWJsaWMgY29tcG9uZW50SWRzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBUaW1lIGZyYW1lIGZpbHRlciBvZiB0aGUgbG9nIGNvbGxlY3Rpb24gLSBlYWNoIHRpbWVzdGFtcCBpbiB0aGUgdGltZSBmcmFtZSByZXByZXNlbnRzIFVUQyBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcyAocGF5bG9hZCBmb3IgU0VORF9MT0dTIG9wLWNvZGUpIFxuICAgIHB1YmxpYyB0aW1lRnJhbWU6IFRpbWVGcmFtZTtcbiBcbiAgICAvLyBMb2cgbGV2ZWwgZmlsdGVyIG9mIGxvZyBjb2xsZWN0aW9uIChwYXlsb2FkIGZvciBTRU5EX0xPR1Mgb3AtY29kZSkgXG4gICAgcHVibGljIGxvZ0xldmVsOiBzdHJpbmc7XG4gXG4gICAgLy8gUGFja2FnZSBjb25maWd1cmF0aW9uIElkIChwYXlsb2FkIGZvciBTRVRfQ09NUE9ORU5UUyBvcC1jb2RlKSBcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbklkOiBzdHJpbmc7XG4gXG4gICAgLy8gUGFja2FnZSBjb25maWd1cmF0aW9uIHZlcnNpb24gSWQgKHBheWxvYWQgZm9yIFNFVF9DT01QT05FTlRTIG9wLWNvZGUpIFxuICAgIHB1YmxpYyB2ZXJzaW9uSWQ6IHN0cmluZztcbiBcbiAgICAvLyBDb25maWd1cmF0aW9uIHByb2ZpbGUgSWQgKHBheWxvYWQgZm9yIFNFVF9DT01QT05FTlRTIG9wLWNvZGUpIFxuICAgIHB1YmxpYyBwcm9maWxlSWQ6IHN0cmluZztcbiBcbiAgICAvLyBSZXZlcnNlIFNTSCB0dW5uZWwgaW5mbyAocGF5bG9hZCBmb3IgT1BFTl9TU0ggb3AtY29kZSkgXG4gICAgcHVibGljIHNzaEluZm86IFNTSEluZm87XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==