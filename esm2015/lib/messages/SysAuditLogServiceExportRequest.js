/*
*/
export class SysAuditLogServiceExportRequest {
    constructor(accountId, userId, from, to, item, itemType, sort, format, fields) {
        this.accountId = accountId;
        this.userId = userId;
        this.from = from;
        this.to = to;
        this.item = item;
        this.itemType = itemType;
        this.sort = sort;
        this.format = format;
        this.fields = fields;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzQXVkaXRMb2dTZXJ2aWNlRXhwb3J0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvbWVzc2FnZXMvU3lzQXVkaXRMb2dTZXJ2aWNlRXhwb3J0UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFO0FBQ0YsTUFBTSxPQUFPLCtCQUErQjtJQTZCeEMsWUFBWSxTQUFrQixFQUFFLE1BQWUsRUFBRSxJQUFhLEVBQUUsRUFBVyxFQUFFLElBQWEsRUFBRSxRQUF5QixFQUFFLElBQWEsRUFBRSxNQUFlLEVBQUUsTUFBaUI7UUFDcEssSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0VudGl0eVR5cGVDb2RlJztcblxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBTeXNBdWRpdExvZ1NlcnZpY2VFeHBvcnRSZXF1ZXN0IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYWNjb3VudCBpZCAoZW1wdHkgbWVhbnMgbm8gZmlsdGVyKSBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSB0aW1lIHBlcmlvZCAobG93ZXIgYm91bmQgaW4gZXBvY2ggdGltZSBtaWxsaXNlY29uZHMpIC0gMCBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBmcm9tOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHRpbWUgcGVyaW9kICh1cHBlciBib3VuZCBpbiBlcG9jaCB0aW1lIG1pbGxpc2Vjb25kcykgLSAwIGZvciBubyBmaWx0ZXIgXG4gICAgcHVibGljIHRvOiBudW1iZXI7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGl0ZW0gbmFtZSBvciBJZCBcbiAgICBwdWJsaWMgaXRlbTogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBpdGVtIHR5cGUgLSBlbXB0eSBmb3Igbm8gZmlsdGVyIFxuICAgIHB1YmxpYyBpdGVtVHlwZTogRW50aXR5VHlwZUNvZGU7XG4gXG4gICAgLy8gU29ydCBieSBmaWVsZCBhbmQgZGlyZWN0aW9uOiAoZS5nLiB0aW1lKyA9IHNvcnQgYnkgdGltZSBhc2MsIGlkLSA9IHNvcnQgYnkgaWQgZGVzYykgXG4gICAgcHVibGljIHNvcnQ6IHN0cmluZztcbiBcbiAgICAvLyBFeHBvcnQgcmVzdWx0cyB0byBhIGRpZmZlcmVudCBmb3JtYXQuIFN1cHBvcnRlZCBmb3JtYXRzOiBjc3YgfCBqc29uIHwgeG1sIFxuICAgIHB1YmxpYyBmb3JtYXQ6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGZpZWxkcyB0byBleHBvcnQgKGxlYXZlIGVtcHR5IHRvIGV4cG9ydCBhbGwgZmllbGRzKSBcbiAgICBwdWJsaWMgZmllbGRzOiBzdHJpbmdbXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWQ/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIGl0ZW0/OiBzdHJpbmcsIGl0ZW1UeXBlPzogRW50aXR5VHlwZUNvZGUsIHNvcnQ/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgZmllbGRzPzogc3RyaW5nW10pIHsgXG4gICAgICAgIHRoaXMuYWNjb3VudElkID0gYWNjb3VudElkO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgICB0aGlzLml0ZW0gPSBpdGVtO1xuICAgICAgICB0aGlzLml0ZW1UeXBlID0gaXRlbVR5cGU7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMuZm9ybWF0ID0gZm9ybWF0O1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICB9XG5cbn1cblxuXG4iXX0=