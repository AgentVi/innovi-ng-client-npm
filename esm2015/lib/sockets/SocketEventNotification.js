/*
   @WebSocketMessage
   This message is pushed to the client upon any new event in the registered account
*/
export class SocketEventNotification {
    constructor(op, payload) {
        this.op = op;
        this.payload = payload;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0RXZlbnROb3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL3NvY2tldHMvU29ja2V0RXZlbnROb3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7OztFQUdFO0FBQ0YsTUFBTSxPQUFPLHVCQUF1QjtJQVFoQyxZQUFZLEVBQWlCLEVBQUUsT0FBd0M7UUFDbkUsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb2NrZXRFdmVudE5vdGlmaWNhdGlvblBheWxvYWQgfSBmcm9tICcuLi9zb2NrZXRzL1NvY2tldEV2ZW50Tm90aWZpY2F0aW9uUGF5bG9hZCc7XG5pbXBvcnQgeyBTb2NrZXRPcENvZGUgfSBmcm9tICcuLi9lbnVtcy9Tb2NrZXRPcENvZGUnO1xuXG4vKiBcbiAgIEBXZWJTb2NrZXRNZXNzYWdlXG4gICBUaGlzIG1lc3NhZ2UgaXMgcHVzaGVkIHRvIHRoZSBjbGllbnQgdXBvbiBhbnkgbmV3IGV2ZW50IGluIHRoZSByZWdpc3RlcmVkIGFjY291bnQgXG4qL1xuZXhwb3J0IGNsYXNzIFNvY2tldEV2ZW50Tm90aWZpY2F0aW9uIHtcbiBcbiAgICAvLyBNZXNzYWdlIE9wQ29kZSAoMTAzMSkgXG4gICAgcHVibGljIG9wOiBTb2NrZXRPcENvZGU7XG4gXG4gICAgLy8gTWVzc2FnZSBwYXlsb2FkIFxuICAgIHB1YmxpYyBwYXlsb2FkOiBTb2NrZXRFdmVudE5vdGlmaWNhdGlvblBheWxvYWQ7XG4gXG4gICAgY29uc3RydWN0b3Iob3A/OiBTb2NrZXRPcENvZGUsIHBheWxvYWQ/OiBTb2NrZXRFdmVudE5vdGlmaWNhdGlvblBheWxvYWQpIHsgXG4gICAgICAgIHRoaXMub3AgPSBvcDtcbiAgICAgICAgdGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcbiAgICB9XG5cbn1cblxuXG4iXX0=