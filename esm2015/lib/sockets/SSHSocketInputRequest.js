/*
   @WebSocketMessage
   This message is sent from the client to send the command in the payload to the remote message
*/
export class SSHSocketInputRequest {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1NIU29ja2V0SW5wdXRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zb2NrZXRzL1NTSFNvY2tldElucHV0UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0VBR0U7QUFDRixNQUFNLE9BQU8scUJBQXFCO0lBUTlCLFlBQVksRUFBaUIsRUFBRSxPQUFnQjtRQUMzQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvY2tldE9wQ29kZSB9IGZyb20gJy4uL2VudW1zL1NvY2tldE9wQ29kZSc7XG5cbi8qIFxuICAgQFdlYlNvY2tldE1lc3NhZ2VcbiAgIFRoaXMgbWVzc2FnZSBpcyBzZW50IGZyb20gdGhlIGNsaWVudCB0byBzZW5kIHRoZSBjb21tYW5kIGluIHRoZSBwYXlsb2FkIHRvIHRoZSByZW1vdGUgbWVzc2FnZSBcbiovXG5leHBvcnQgY2xhc3MgU1NIU29ja2V0SW5wdXRSZXF1ZXN0IHtcbiBcbiAgICAvLyBNZXNzYWdlIE9wQ29kZSAoMTEwMykgXG4gICAgcHVibGljIG9wOiBTb2NrZXRPcENvZGU7XG4gXG4gICAgLy8gUGF5bG9hZCBpcyB0aGUgY29tbWFuZCB0byBzZW5kIHRvIHRoZSByZW1vdGUgY2xpZW50IFxuICAgIHB1YmxpYyBwYXlsb2FkOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3Iob3A/OiBTb2NrZXRPcENvZGUsIHBheWxvYWQ/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMub3AgPSBvcDtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgICB9XG5cbn1cblxuXG4iXX0=