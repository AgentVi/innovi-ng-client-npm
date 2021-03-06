/*
   Data point in a series representing appliance status values in a specific timestamp
*/
export class ApplianceStatusTimestamped {
    constructor(timestamp, label, value) {
        this.timestamp = timestamp;
        this.label = label;
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwbGlhbmNlU3RhdHVzVGltZXN0YW1wZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9BcHBsaWFuY2VTdGF0dXNUaW1lc3RhbXBlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRTtBQUNGLE1BQU0sT0FBTywwQkFBMEI7SUFXbkMsWUFBWSxTQUFrQixFQUFFLEtBQWMsRUFBRSxLQUEyQjtRQUN2RSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWFuY2VTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQXBwbGlhbmNlU3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgRGF0YSBwb2ludCBpbiBhIHNlcmllcyByZXByZXNlbnRpbmcgYXBwbGlhbmNlIHN0YXR1cyB2YWx1ZXMgaW4gYSBzcGVjaWZpYyB0aW1lc3RhbXAgXG4qL1xuZXhwb3J0IGNsYXNzIEFwcGxpYW5jZVN0YXR1c1RpbWVzdGFtcGVkIHtcbiBcbiAgICAvLyBUaW1lc3RhbXAgKEVwb2NoIG1pbGxpc2Vjb25kcykgXG4gICAgcHVibGljIHRpbWVzdGFtcDogbnVtYmVyO1xuIFxuICAgIC8vIERhdGEgcG9pbnQgbGFiZWwgXG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gXG4gICAgLy8gQXBwbGlhbmNlIHN0YXR1cyBcbiAgICBwdWJsaWMgdmFsdWU6IEFwcGxpYW5jZVN0YXR1c0NvZGU7XG4gXG4gICAgY29uc3RydWN0b3IodGltZXN0YW1wPzogbnVtYmVyLCBsYWJlbD86IHN0cmluZywgdmFsdWU/OiBBcHBsaWFuY2VTdGF0dXNDb2RlKSB7IFxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG59XG5cblxuIl19