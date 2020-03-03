/*
   @WebSocketMessage Message header for all web socket messages
*/
export class WebSocketMessageHeader {
    constructor(opcode, version, messageId, correlationId, sessionId) {
        this.op = opcode;
        this.ver = version;
        this.id = messageId;
        this.cid = correlationId;
        this.sid = sessionId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0TWVzc2FnZUhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1dlYlNvY2tldE1lc3NhZ2VIZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUU7QUFDRixNQUFNLE9BQU8sc0JBQXNCO0lBaUIvQixZQUFZLE1BQWUsRUFBRSxPQUFnQixFQUFFLFNBQWtCLEVBQUUsYUFBc0IsRUFBRSxTQUFrQjtRQUN6RyxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztRQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUN6QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIFxuICAgQFdlYlNvY2tldE1lc3NhZ2UgTWVzc2FnZSBoZWFkZXIgZm9yIGFsbCB3ZWIgc29ja2V0IG1lc3NhZ2VzIFxuKi9cbmV4cG9ydCBjbGFzcyBXZWJTb2NrZXRNZXNzYWdlSGVhZGVyIHtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgb3A6IG51bWJlcjtcbiBcbiAgICAvLyBcbiAgICBwdWJsaWMgdmVyOiBudW1iZXI7XG4gXG4gICAgLy8gXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gXG4gICAgLy8gXG4gICAgcHVibGljIGNpZDogbnVtYmVyO1xuIFxuICAgIC8vIFxuICAgIHB1YmxpYyBzaWQ6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3RvcihvcGNvZGU/OiBudW1iZXIsIHZlcnNpb24/OiBudW1iZXIsIG1lc3NhZ2VJZD86IG51bWJlciwgY29ycmVsYXRpb25JZD86IG51bWJlciwgc2Vzc2lvbklkPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLm9wID0gb3Bjb2RlO1xuICAgICAgICB0aGlzLnZlciA9IHZlcnNpb247XG4gICAgICAgIHRoaXMuaWQgPSBtZXNzYWdlSWQ7XG4gICAgICAgIHRoaXMuY2lkID0gY29ycmVsYXRpb25JZDtcbiAgICAgICAgdGhpcy5zaWQgPSBzZXNzaW9uSWQ7XG4gICAgfVxuXG59XG5cblxuIl19