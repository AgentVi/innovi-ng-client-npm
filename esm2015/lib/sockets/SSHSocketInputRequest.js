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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1NIU29ja2V0SW5wdXRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zb2NrZXRzL1NTSFNvY2tldElucHV0UmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7O0VBR0U7QUFDRixNQUFNLE9BQU8scUJBQXFCO0lBUTlCLFlBQVksRUFBVyxFQUFFLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIEBXZWJTb2NrZXRNZXNzYWdlXG4gICBUaGlzIG1lc3NhZ2UgaXMgc2VudCBmcm9tIHRoZSBjbGllbnQgdG8gc2VuZCB0aGUgY29tbWFuZCBpbiB0aGUgcGF5bG9hZCB0byB0aGUgcmVtb3RlIG1lc3NhZ2UgXG4qL1xuZXhwb3J0IGNsYXNzIFNTSFNvY2tldElucHV0UmVxdWVzdCB7XG4gXG4gICAgLy8gTWVzc2FnZSBPcENvZGUgKDExMDMpIFxuICAgIHB1YmxpYyBvcDogbnVtYmVyO1xuIFxuICAgIC8vIFBheWxvYWQgaXMgdGhlIGNvbW1hbmQgdG8gc2VuZCB0byB0aGUgcmVtb3RlIGNsaWVudCBcbiAgICBwdWJsaWMgcGF5bG9hZDogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKG9wPzogbnVtYmVyLCBwYXlsb2FkPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLm9wID0gb3A7XG4gICAgICAgIHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgfVxuXG59XG5cblxuIl19