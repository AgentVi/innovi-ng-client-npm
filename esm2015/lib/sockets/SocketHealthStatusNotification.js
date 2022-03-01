/*
   @WebSocketMessage
   This message is pushed to the client upon any new event in the registered account
*/
export class SocketHealthStatusNotification {
    constructor(op, error, sensorStatus, agentStatus, applianceStatus) {
        this.op = op;
        this.error = error;
        this.sensorStatus = sensorStatus;
        this.agentStatus = agentStatus;
        this.applianceStatus = applianceStatus;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ja2V0SGVhbHRoU3RhdHVzTm90aWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9zb2NrZXRzL1NvY2tldEhlYWx0aFN0YXR1c05vdGlmaWNhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7O0VBR0U7QUFDRixNQUFNLE9BQU8sOEJBQThCO0lBaUJ2QyxZQUFZLEVBQVcsRUFBRSxLQUFjLEVBQUUsWUFBMkIsRUFBRSxXQUF5QixFQUFFLGVBQWlDO1FBQzlILElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDM0MsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vuc29yU3RhdHVzIH0gZnJvbSAnLi4vZW50aXRpZXMvU2Vuc29yU3RhdHVzJztcbmltcG9ydCB7IEFnZW50U3RhdHVzIH0gZnJvbSAnLi4vZW50aXRpZXMvQWdlbnRTdGF0dXMnO1xuaW1wb3J0IHsgQXBwbGlhbmNlU3RhdHVzIH0gZnJvbSAnLi4vZW50aXRpZXMvQXBwbGlhbmNlU3RhdHVzJztcblxuLyogXG4gICBAV2ViU29ja2V0TWVzc2FnZVxuICAgVGhpcyBtZXNzYWdlIGlzIHB1c2hlZCB0byB0aGUgY2xpZW50IHVwb24gYW55IG5ldyBldmVudCBpbiB0aGUgcmVnaXN0ZXJlZCBhY2NvdW50IFxuKi9cbmV4cG9ydCBjbGFzcyBTb2NrZXRIZWFsdGhTdGF0dXNOb3RpZmljYXRpb24ge1xuIFxuICAgIC8vIE1lc3NhZ2UgT3BDb2RlICgxMDQxKSBcbiAgICBwdWJsaWMgb3A6IG51bWJlcjtcbiBcbiAgICAvLyBFcnJvciBtZXNzYWdlIChpZiBlcnJvciBvY2N1cnJlZCkgXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmc7XG4gXG4gICAgLy8gU2Vuc29yIHN0YXR1cyBcbiAgICBwdWJsaWMgc2Vuc29yU3RhdHVzOiBTZW5zb3JTdGF0dXM7XG4gXG4gICAgLy8gQWdlbnQgc3RhdHVzIFxuICAgIHB1YmxpYyBhZ2VudFN0YXR1czogQWdlbnRTdGF0dXM7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHN0YXR1cyBcbiAgICBwdWJsaWMgYXBwbGlhbmNlU3RhdHVzOiBBcHBsaWFuY2VTdGF0dXM7XG4gXG4gICAgY29uc3RydWN0b3Iob3A/OiBudW1iZXIsIGVycm9yPzogc3RyaW5nLCBzZW5zb3JTdGF0dXM/OiBTZW5zb3JTdGF0dXMsIGFnZW50U3RhdHVzPzogQWdlbnRTdGF0dXMsIGFwcGxpYW5jZVN0YXR1cz86IEFwcGxpYW5jZVN0YXR1cykgeyBcbiAgICAgICAgdGhpcy5vcCA9IG9wO1xuICAgICAgICB0aGlzLmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMuc2Vuc29yU3RhdHVzID0gc2Vuc29yU3RhdHVzO1xuICAgICAgICB0aGlzLmFnZW50U3RhdHVzID0gYWdlbnRTdGF0dXM7XG4gICAgICAgIHRoaXMuYXBwbGlhbmNlU3RhdHVzID0gYXBwbGlhbmNlU3RhdHVzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==