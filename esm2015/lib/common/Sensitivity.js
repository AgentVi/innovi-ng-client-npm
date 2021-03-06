/*
   Anomaly sensitivity defines parameters to adjust thresholds for anomaly events
*/
export class Sensitivity {
    constructor(events, timeUnit) {
        this.events = events;
        this.timeUnit = timeUnit;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vuc2l0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9TZW5zaXRpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxXQUFXO0lBUXBCLFlBQVksTUFBZSxFQUFFLFFBQXVCO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVVbml0Q29kZSB9IGZyb20gJy4uL2VudW1zL1RpbWVVbml0Q29kZSc7XG5cbi8qIFxuICAgQW5vbWFseSBzZW5zaXRpdml0eSBkZWZpbmVzIHBhcmFtZXRlcnMgdG8gYWRqdXN0IHRocmVzaG9sZHMgZm9yIGFub21hbHkgZXZlbnRzIFxuKi9cbmV4cG9ydCBjbGFzcyBTZW5zaXRpdml0eSB7XG4gXG4gICAgLy8gSG93IG1hbnkgYW5vbWFseSBldmVudHMgaW4gYSB0aW1lIHVuaXQgXG4gICAgcHVibGljIGV2ZW50czogbnVtYmVyO1xuIFxuICAgIC8vIFRpbWUgdW5pdCAob25seSBEQVkgYW5kIFdFRUsgYXJlIGFsbG93ZWQpIFxuICAgIHB1YmxpYyB0aW1lVW5pdDogVGltZVVuaXRDb2RlO1xuIFxuICAgIGNvbnN0cnVjdG9yKGV2ZW50cz86IG51bWJlciwgdGltZVVuaXQ/OiBUaW1lVW5pdENvZGUpIHsgXG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLnRpbWVVbml0ID0gdGltZVVuaXQ7XG4gICAgfVxuXG59XG5cblxuIl19