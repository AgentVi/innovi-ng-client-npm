/*
*/
export class SearchEventFindRequestBody {
    constructor(sensorIds, objectType, tolerance, from, to, sort, page, pageSize) {
        this.sensorIds = sensorIds;
        this.objectType = objectType;
        this.tolerance = tolerance;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoRXZlbnRGaW5kUmVxdWVzdEJvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL21lc3NhZ2VzL1NlYXJjaEV2ZW50RmluZFJlcXVlc3RCb2R5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0U7QUFDRixNQUFNLE9BQU8sMEJBQTBCO0lBMEJuQyxZQUFZLFNBQW9CLEVBQUUsVUFBNkIsRUFBRSxTQUF5QixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUNuSyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExldmVsVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9MZXZlbFR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaEV2ZW50RmluZFJlcXVlc3RCb2R5IHtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgc2Vuc29yIElkKHMpIChlbXB0eSBmb3Igbm8gZmlsdGVyKSAtIG11bHRpcGxlIHZhbHVlcyBlbmFibGVkIFxuICAgIHB1YmxpYyBzZW5zb3JJZHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEZpbHRlciBieSBvYmplY3QgdHlwZShzKSAoZW1wdHkgZm9yIG5vIGZpbHRlcikgLSBtdWx0aXBsZSB2YWx1ZXMgZW5hYmxlZCBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGVbXTtcbiBcbiAgICAvLyBGaWx0ZXIgYnkgdG9sZXJhbmNlIExPVyB8IE1FRElVTSB8IEhJR0ggXG4gICAgcHVibGljIHRvbGVyYW5jZTogTGV2ZWxUeXBlQ29kZTtcbiBcbiAgICAvLyBGaWx0ZXIgc2VhcmNoIGV2ZW50cyBhZnRlciB0aGUgcHJvdmlkZWQgdGltZXN0YW1wIChlcG9jaCBtaWxsaXNlY29uZHMgb3IgcmVsYXRpdmUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIG5lZ2F0aXZlIG51bWJlcikgXG4gICAgcHVibGljIGZyb206IG51bWJlcjtcbiBcbiAgICAvLyBGaWx0ZXIgc2VhcmNoIGV2ZW50cyBiZWZvcmUgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzIG9yIHJlbGF0aXZlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciBuZWdhdGl2ZSBudW1iZXIpIFxuICAgIHB1YmxpYyB0bzogbnVtYmVyO1xuIFxuICAgIC8vIFNvcnQgYnkgZmllbGQgYW5kIGRpcmVjdGlvbjogKGUuZy4gdGltZSsgPSBzb3J0IGJ5IHRpbWUgYXNjLCBpZC0gPSBzb3J0IGJ5IGlkIGRlc2MpIFxuICAgIHB1YmxpYyBzb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gUGFnZSBudW1iZXIgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuIFxuICAgIC8vIE51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSAoZm9yIHBhZ2luYXRpb24pIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKHNlbnNvcklkcz86IHN0cmluZ1tdLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGVbXSwgdG9sZXJhbmNlPzogTGV2ZWxUeXBlQ29kZSwgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLnNlbnNvcklkcyA9IHNlbnNvcklkcztcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcbiAgICAgICAgdGhpcy50b2xlcmFuY2UgPSB0b2xlcmFuY2U7XG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==