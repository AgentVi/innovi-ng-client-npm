/*
   @WebSocketMessage
   This message is pushed to the client upon any sensor health status change in the registered account
*/
export class SocketHealthStatusNotificationPayload {
    constructor(code, error, sensorStatus) {
        this.code = code;
        this.error = error;
        this.sensorStatus = sensorStatus;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0SGVhbHRoU3RhdHVzTm90aWZpY2F0aW9uUGF5bG9hZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL3NvY2tldHMvU29ja2V0SGVhbHRoU3RhdHVzTm90aWZpY2F0aW9uUGF5bG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7O0VBR0U7QUFDRixNQUFNLE9BQU8scUNBQXFDO0lBVzlDLFlBQVksSUFBYSxFQUFFLEtBQWMsRUFBRSxZQUEyQjtRQUNsRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNyQyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZW5zb3JTdGF0dXMgfSBmcm9tICcuLi9lbnRpdGllcy9TZW5zb3JTdGF0dXMnO1xuXG4vKiBcbiAgIEBXZWJTb2NrZXRNZXNzYWdlXG4gICBUaGlzIG1lc3NhZ2UgaXMgcHVzaGVkIHRvIHRoZSBjbGllbnQgdXBvbiBhbnkgc2Vuc29yIGhlYWx0aCBzdGF0dXMgY2hhbmdlIGluIHRoZSByZWdpc3RlcmVkIGFjY291bnQgXG4qL1xuZXhwb3J0IGNsYXNzIFNvY2tldEhlYWx0aFN0YXR1c05vdGlmaWNhdGlvblBheWxvYWQge1xuIFxuICAgIC8vIEVycm9yIGNvZGUgKDAgZm9yIHN1Y2Nlc3MpIFxuICAgIHB1YmxpYyBjb2RlOiBudW1iZXI7XG4gXG4gICAgLy8gRXJyb3IgbWVzc2FnZSAoaWYgZXJyb3Igb2NjdXJyZWQpIFxuICAgIHB1YmxpYyBlcnJvcjogc3RyaW5nO1xuIFxuICAgIC8vIFNlbnNvciBzdGF0dXMgXG4gICAgcHVibGljIHNlbnNvclN0YXR1czogU2Vuc29yU3RhdHVzO1xuIFxuICAgIGNvbnN0cnVjdG9yKGNvZGU/OiBudW1iZXIsIGVycm9yPzogc3RyaW5nLCBzZW5zb3JTdGF0dXM/OiBTZW5zb3JTdGF0dXMpIHsgXG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgdGhpcy5zZW5zb3JTdGF0dXMgPSBzZW5zb3JTdGF0dXM7XG4gICAgfVxuXG59XG5cblxuIl19