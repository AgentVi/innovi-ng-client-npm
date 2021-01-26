/*
   @WebSocketMessage
   This message is sent from the client to close ssh session using the ssh uri provided in the payload
*/
export class SSHSocketCloseRequest {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU1NIU29ja2V0Q2xvc2VSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zb2NrZXRzL1NTSFNvY2tldENsb3NlUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7O0VBR0U7QUFDRixNQUFNLE9BQU8scUJBQXFCO0lBUTlCLFlBQVksRUFBVyxFQUFFLE9BQWdCO1FBQ3JDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIEBXZWJTb2NrZXRNZXNzYWdlXG4gICBUaGlzIG1lc3NhZ2UgaXMgc2VudCBmcm9tIHRoZSBjbGllbnQgdG8gY2xvc2Ugc3NoIHNlc3Npb24gdXNpbmcgdGhlIHNzaCB1cmkgcHJvdmlkZWQgaW4gdGhlIHBheWxvYWQgXG4qL1xuZXhwb3J0IGNsYXNzIFNTSFNvY2tldENsb3NlUmVxdWVzdCB7XG4gXG4gICAgLy8gTWVzc2FnZSBPcENvZGUgKDExMDIpIFxuICAgIHB1YmxpYyBvcDogbnVtYmVyO1xuIFxuICAgIC8vIFBheWxvYWQgaXMgdGhlIFNTSCBjb25uZWN0aW9uIHN0cmluZyBVUkkgXG4gICAgcHVibGljIHBheWxvYWQ6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3RvcihvcD86IG51bWJlciwgcGF5bG9hZD86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5vcCA9IG9wO1xuICAgICAgICB0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuICAgIH1cblxufVxuXG5cbiJdfQ==