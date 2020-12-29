/*
   Mapping description of digital IO port
*/
export class PortMapping {
    constructor(port, isOutput, entityType, entityId, onHigh, onLow, status) {
        this.port = port;
        this.isOutput = isOutput;
        this.entityType = entityType;
        this.entityId = entityId;
        this.onHigh = onHigh;
        this.onLow = onLow;
        this.status = status;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9ydE1hcHBpbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9Qb3J0TWFwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxXQUFXO0lBdUJwQixZQUFZLElBQWEsRUFBRSxRQUFrQixFQUFFLFVBQTJCLEVBQUUsUUFBaUIsRUFBRSxNQUFtQixFQUFFLEtBQWtCLEVBQUUsTUFBbUI7UUFDdkosSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjdGl2ZUNvZGUnO1xuaW1wb3J0IHsgRW50aXR5VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9FbnRpdHlUeXBlQ29kZSc7XG5cbi8qIFxuICAgTWFwcGluZyBkZXNjcmlwdGlvbiBvZiBkaWdpdGFsIElPIHBvcnQgXG4qL1xuZXhwb3J0IGNsYXNzIFBvcnRNYXBwaW5nIHtcbiBcbiAgICAvLyBQb3J0IG5hbWUgb3IgbnVtYmVyIFxuICAgIHB1YmxpYyBwb3J0OiBzdHJpbmc7XG4gXG4gICAgLy8gT3V0cHV0ICh0cnVlKSBvciBpbnB1dCAoZmFsc2UpIHBvcnQgXG4gICAgcHVibGljIGlzT3V0cHV0OiBib29sZWFuO1xuIFxuICAgIC8vIFR5cGUgb2YgYXNzb2NpYXRlZCBlbnRpdHkgKFJVTEUgfCBTRU5TT1IgfCBGT0xERVIpIFxuICAgIHB1YmxpYyBlbnRpdHlUeXBlOiBFbnRpdHlUeXBlQ29kZTtcbiBcbiAgICAvLyBSdWxlL1NlbnNvci9Gb2xkZXIgSWQgdG8gYXNzb2NpYXRlIHdpdGggdGhlIHBvcnQgKGFjY29yZGluZyB0byBlbnRpdHlUeXBlKSBcbiAgICBwdWJsaWMgZW50aXR5SWQ6IHN0cmluZztcbiBcbiAgICAvLyBBY3RpdmF0ZS9EZWFjdGl2YXRlIHJ1bGVzIG9uIGlucHV0IHBvcnQgdHJpZ2dlciAvIEFjdGl2YXRlL0RlYWN0aXZhdGUgb3V0cHV0IHBvcnQgb24gcnVsZSB0cmlnZ2VyIChldmVudCkgXG4gICAgcHVibGljIG9uSGlnaDogQWN0aXZlQ29kZTtcbiBcbiAgICAvLyBBY3RpdmF0ZS9EZWFjdGl2YXRlIHJ1bGVzIG9uIGlucHV0IHBvcnQgdHJpZ2dlciAvIEFjdGl2YXRlL0RlYWN0aXZhdGUgb3V0cHV0IHBvcnQgb24gcnVsZSB0cmlnZ2VyIChldmVudCkgXG4gICAgcHVibGljIG9uTG93OiBBY3RpdmVDb2RlO1xuIFxuICAgIC8vIElzIHRoZSBjdXJyZW50IHBvcnQgc3RhdHVzIGlzIGFjdGl2ZSAoc2lnbmFsIG9uKSBvciBub3QgKHNpZ25hbCBvZmYpIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFjdGl2ZUNvZGU7XG4gXG4gICAgY29uc3RydWN0b3IocG9ydD86IHN0cmluZywgaXNPdXRwdXQ/OiBib29sZWFuLCBlbnRpdHlUeXBlPzogRW50aXR5VHlwZUNvZGUsIGVudGl0eUlkPzogc3RyaW5nLCBvbkhpZ2g/OiBBY3RpdmVDb2RlLCBvbkxvdz86IEFjdGl2ZUNvZGUsIHN0YXR1cz86IEFjdGl2ZUNvZGUpIHsgXG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMuaXNPdXRwdXQgPSBpc091dHB1dDtcbiAgICAgICAgdGhpcy5lbnRpdHlUeXBlID0gZW50aXR5VHlwZTtcbiAgICAgICAgdGhpcy5lbnRpdHlJZCA9IGVudGl0eUlkO1xuICAgICAgICB0aGlzLm9uSGlnaCA9IG9uSGlnaDtcbiAgICAgICAgdGhpcy5vbkxvdyA9IG9uTG93O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB9XG5cbn1cblxuXG4iXX0=