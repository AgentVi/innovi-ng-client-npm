/*
   Recurrent time frame
*/
export class Recurrent {
    constructor(startTime, endTime, period, daysOfWeek, targetId, recipients, subject, body, mimeType) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.period = period;
        this.daysOfWeek = daysOfWeek;
        this.targetId = targetId;
        this.recipients = recipients;
        this.subject = subject;
        this.body = body;
        this.mimeType = mimeType;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL1JlY3VycmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxTQUFTO0lBNkJsQixZQUFZLFNBQWtCLEVBQUUsT0FBZ0IsRUFBRSxNQUFlLEVBQUUsVUFBNEIsRUFBRSxRQUFpQixFQUFFLFVBQXFCLEVBQUUsT0FBZ0IsRUFBRSxJQUFhLEVBQUUsUUFBaUI7UUFDekwsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF5T2ZXZWVrQ29kZSB9IGZyb20gJy4uL2VudW1zL0RheU9mV2Vla0NvZGUnO1xuXG4vKiBcbiAgIFJlY3VycmVudCB0aW1lIGZyYW1lIFxuKi9cbmV4cG9ydCBjbGFzcyBSZWN1cnJlbnQge1xuIFxuICAgIC8vIFN0YXJ0IHRpbWUgb2YgdGhlIHJlY3VycmVudCBpbiBJU08tODYwMSBmb3JtYXQgaW5jbHVkaW5nIHRpbWUgb2Zmc2V0IFlZWVktTU0tRERUaGg6bW06c3MrMFo6MDAgXG4gICAgcHVibGljIHN0YXJ0VGltZTogc3RyaW5nO1xuIFxuICAgIC8vIEVuZCB0aW1lIG9mIHRoZSByZWN1cnJlbnQgaW4gSVNPLTg2MDEgZm9ybWF0IGluY2x1ZGluZyB0aW1lIG9mZnNldCBZWVlZLU1NLUREVGhoOm1tOnNzKzBaOjAwIExlYXZlIGVtcHR5IGZvciBubyBlbmQgdGltZSBcbiAgICBwdWJsaWMgZW5kVGltZTogc3RyaW5nO1xuIFxuICAgIC8vIFBlcmlvZCBpbiBJU08tODYwMSBmb3JtYXQgKFBuWW5NbkQgLyBQblcpIEV4YW1wbGVzOiA8dWw+IDxsaT5QMVkgLSBFdmVyeSAxIHllYXI8L2xpPiA8bGk+UDJNIC0gRXZlcnkgMiBtb250aHM8L2xpPiA8bGk+UDNXIC0gRXZlcnkgMyB3ZWVrczwvbGk+IDxsaT5QNEQgLSBFdmVyeSAyIG1vbnRoczwvbGk+IDwvdWw+IFxuICAgIHB1YmxpYyBwZXJpb2Q6IHN0cmluZztcbiBcbiAgICAvLyBEYXlzIG9mIHdlZWsgLSBiYXNlZCBvbiBJU084NjAxIFxuICAgIHB1YmxpYyBkYXlzT2ZXZWVrOiBEYXlPZldlZWtDb2RlW107XG4gXG4gICAgLy8gSW50ZWdyYXRpb24gdGFyZ2V0IElkIFxuICAgIHB1YmxpYyB0YXJnZXRJZDogc3RyaW5nO1xuIFxuICAgIC8vIExpc3Qgb2YgcmVjaXBpZW50cyAoYXBwbGljYWJsZSBmb3IgU01UUC9FTUFJTCBwcm90b2NvbCkgXG4gICAgcHVibGljIHJlY2lwaWVudHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIE1lc3NhZ2Ugc3ViamVjdCB0ZW1wbGF0ZSAoYXBwbGljYWJsZSBmb3IgU01UUC9FTUFJTCBwcm90b2NvbCkgXG4gICAgcHVibGljIHN1YmplY3Q6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGJvZHkgdGVtcGxhdGUgXG4gICAgcHVibGljIGJvZHk6IHN0cmluZztcbiBcbiAgICAvLyBNZXNzYWdlIGNvbnRlbnQgbWltZSB0eXBlIFxuICAgIHB1YmxpYyBtaW1lVHlwZTogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKHN0YXJ0VGltZT86IHN0cmluZywgZW5kVGltZT86IHN0cmluZywgcGVyaW9kPzogc3RyaW5nLCBkYXlzT2ZXZWVrPzogRGF5T2ZXZWVrQ29kZVtdLCB0YXJnZXRJZD86IHN0cmluZywgcmVjaXBpZW50cz86IHN0cmluZ1tdLCBzdWJqZWN0Pzogc3RyaW5nLCBib2R5Pzogc3RyaW5nLCBtaW1lVHlwZT86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XG4gICAgICAgIHRoaXMucGVyaW9kID0gcGVyaW9kO1xuICAgICAgICB0aGlzLmRheXNPZldlZWsgPSBkYXlzT2ZXZWVrO1xuICAgICAgICB0aGlzLnRhcmdldElkID0gdGFyZ2V0SWQ7XG4gICAgICAgIHRoaXMucmVjaXBpZW50cyA9IHJlY2lwaWVudHM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgICAgIHRoaXMubWltZVR5cGUgPSBtaW1lVHlwZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=