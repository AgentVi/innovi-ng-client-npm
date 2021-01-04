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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdXJyZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vUmVjdXJyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFNBQVM7SUE2QmxCLFlBQVksU0FBa0IsRUFBRSxPQUFnQixFQUFFLE1BQWUsRUFBRSxVQUE0QixFQUFFLFFBQWlCLEVBQUUsVUFBcUIsRUFBRSxPQUFnQixFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN6TCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXlPZldlZWtDb2RlIH0gZnJvbSAnLi4vZW51bXMvRGF5T2ZXZWVrQ29kZSc7XG5cbi8qIFxuICAgUmVjdXJyZW50IHRpbWUgZnJhbWUgXG4qL1xuZXhwb3J0IGNsYXNzIFJlY3VycmVudCB7XG4gXG4gICAgLy8gU3RhcnQgdGltZSBvZiB0aGUgcmVjdXJyZW50IGluIElTTy04NjAxIGZvcm1hdCBpbmNsdWRpbmcgdGltZSBvZmZzZXQgWVlZWS1NTS1ERFRoaDptbTpzcyswWjowMCBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRW5kIHRpbWUgb2YgdGhlIHJlY3VycmVudCBpbiBJU08tODYwMSBmb3JtYXQgaW5jbHVkaW5nIHRpbWUgb2Zmc2V0IFlZWVktTU0tRERUaGg6bW06c3MrMFo6MDAgTGVhdmUgZW1wdHkgZm9yIG5vIGVuZCB0aW1lIFxuICAgIHB1YmxpYyBlbmRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gUGVyaW9kIGluIElTTy04NjAxIGZvcm1hdCAoUG5Zbk1uRCAvIFBuVykgRXhhbXBsZXM6IDx1bD4gPGxpPlAxWSAtIEV2ZXJ5IDEgeWVhcjwvbGk+IDxsaT5QMk0gLSBFdmVyeSAyIG1vbnRoczwvbGk+IDxsaT5QM1cgLSBFdmVyeSAzIHdlZWtzPC9saT4gPGxpPlA0RCAtIEV2ZXJ5IDIgbW9udGhzPC9saT4gPC91bD4gXG4gICAgcHVibGljIHBlcmlvZDogc3RyaW5nO1xuIFxuICAgIC8vIERheXMgb2Ygd2VlayAtIGJhc2VkIG9uIElTTzg2MDEgXG4gICAgcHVibGljIGRheXNPZldlZWs6IERheU9mV2Vla0NvZGVbXTtcbiBcbiAgICAvLyBJbnRlZ3JhdGlvbiB0YXJnZXQgSWQgXG4gICAgcHVibGljIHRhcmdldElkOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiByZWNpcGllbnRzIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgcmVjaXBpZW50czogc3RyaW5nW107XG4gXG4gICAgLy8gTWVzc2FnZSBzdWJqZWN0IHRlbXBsYXRlIChhcHBsaWNhYmxlIGZvciBTTVRQL0VNQUlMIHByb3RvY29sKSBcbiAgICBwdWJsaWMgc3ViamVjdDogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgYm9keSB0ZW1wbGF0ZSBcbiAgICBwdWJsaWMgYm9keTogc3RyaW5nO1xuIFxuICAgIC8vIE1lc3NhZ2UgY29udGVudCBtaW1lIHR5cGUgXG4gICAgcHVibGljIG1pbWVUeXBlOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3Ioc3RhcnRUaW1lPzogc3RyaW5nLCBlbmRUaW1lPzogc3RyaW5nLCBwZXJpb2Q/OiBzdHJpbmcsIGRheXNPZldlZWs/OiBEYXlPZldlZWtDb2RlW10sIHRhcmdldElkPzogc3RyaW5nLCByZWNpcGllbnRzPzogc3RyaW5nW10sIHN1YmplY3Q/OiBzdHJpbmcsIGJvZHk/OiBzdHJpbmcsIG1pbWVUeXBlPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZW5kVGltZTtcbiAgICAgICAgdGhpcy5wZXJpb2QgPSBwZXJpb2Q7XG4gICAgICAgIHRoaXMuZGF5c09mV2VlayA9IGRheXNPZldlZWs7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSB0YXJnZXRJZDtcbiAgICAgICAgdGhpcy5yZWNpcGllbnRzID0gcmVjaXBpZW50cztcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgdGhpcy5ib2R5ID0gYm9keTtcbiAgICAgICAgdGhpcy5taW1lVHlwZSA9IG1pbWVUeXBlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==