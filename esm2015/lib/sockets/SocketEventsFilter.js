/*
   @WebSocketMessage
   This message is sent to the server to set filter criteria for the events
*/
export class SocketEventsFilter {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0RXZlbnRzRmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zb2NrZXRzL1NvY2tldEV2ZW50c0ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7O0VBR0U7QUFDRixNQUFNLE9BQU8sa0JBQWtCO0lBUTNCLFlBQVksRUFBaUIsRUFBRSxPQUFtQztRQUM5RCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvY2tldE9wQ29kZSB9IGZyb20gJy4uL2VudW1zL1NvY2tldE9wQ29kZSc7XG5pbXBvcnQgeyBTb2NrZXRFdmVudHNGaWx0ZXJQYXlsb2FkIH0gZnJvbSAnLi4vc29ja2V0cy9Tb2NrZXRFdmVudHNGaWx0ZXJQYXlsb2FkJztcblxuLyogXG4gICBAV2ViU29ja2V0TWVzc2FnZVxuICAgVGhpcyBtZXNzYWdlIGlzIHNlbnQgdG8gdGhlIHNlcnZlciB0byBzZXQgZmlsdGVyIGNyaXRlcmlhIGZvciB0aGUgZXZlbnRzIFxuKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXRFdmVudHNGaWx0ZXIge1xuIFxuICAgIC8vIE1lc3NhZ2UgT3BDb2RlICgxMDMwKSBcbiAgICBwdWJsaWMgb3A6IFNvY2tldE9wQ29kZTtcbiBcbiAgICAvLyBNZXNzYWdlIHBheWxvYWQgXG4gICAgcHVibGljIHBheWxvYWQ6IFNvY2tldEV2ZW50c0ZpbHRlclBheWxvYWQ7XG4gXG4gICAgY29uc3RydWN0b3Iob3A/OiBTb2NrZXRPcENvZGUsIHBheWxvYWQ/OiBTb2NrZXRFdmVudHNGaWx0ZXJQYXlsb2FkKSB7IFxuICAgICAgICB0aGlzLm9wID0gb3A7XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgfVxuXG59XG5cblxuIl19