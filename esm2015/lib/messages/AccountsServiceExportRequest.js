/*
*/
export class AccountsServiceExportRequest {
    constructor(name, type, status, sort, format, fields, fileName) {
        this.name = name;
        this.type = type;
        this.status = status;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
        this.fileName = fileName;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudHNTZXJ2aWNlRXhwb3J0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvQWNjb3VudHNTZXJ2aWNlRXhwb3J0UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFO0FBQ0YsTUFBTSxPQUFPLDRCQUE0QjtJQXVCckMsWUFBWSxJQUFhLEVBQUUsSUFBd0IsRUFBRSxNQUE0QixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUIsRUFBRSxRQUFpQjtRQUNuSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50U3RhdHVzQ29kZSc7XG5cbi8qICBcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudHNTZXJ2aWNlRXhwb3J0UmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IG5hbWUgb3IgcGFydGlhbCBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHR5cGUocykgKGVtcHR5IG9yIFVOREVGSU5FRCBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyB0eXBlOiBBY2NvdW50VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc3RhdHVzKHMpIChlbXB0eSBvciBVTkRFRklORUQgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgc3RhdHVzOiBBY2NvdW50U3RhdHVzQ29kZVtdO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gRXhwb3J0IHJlc3VsdHMgdG8gYSBkaWZmZXJlbnQgZm9ybWF0LiBTdXBwb3J0ZWQgZm9ybWF0czogY3N2IHwganNvbiB8IHhtbCBcbiAgICBwdWJsaWMgZm9ybWF0OiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiBmaWVsZHMgdG8gZXhwb3J0IChsZWF2ZSBlbXB0eSB0byBleHBvcnQgYWxsIGZpZWxkcykgXG4gICAgcHVibGljIGZpZWxkczogc3RyaW5nW107XG4gXG4gICAgLy8gU2V0IGRvd25sb2FkIGZpbGUgbmFtZSAod2l0aG91dCBleHRlbnNpb24pIFxuICAgIHB1YmxpYyBmaWxlTmFtZTogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIHR5cGU/OiBBY2NvdW50VHlwZUNvZGVbXSwgc3RhdHVzPzogQWNjb3VudFN0YXR1c0NvZGVbXSwgc29ydD86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBmaWVsZHM/OiBzdHJpbmdbXSwgZmlsZU5hbWU/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=