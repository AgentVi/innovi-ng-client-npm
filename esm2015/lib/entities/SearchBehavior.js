/*
   Search behavior description
*/
export class SearchBehavior {
    constructor(behaviorType, dwellTime, minObjectsInGroup, clusterDistance, shapes) {
        this.behaviorType = behaviorType;
        this.dwellTime = dwellTime;
        this.minObjectsInGroup = minObjectsInGroup;
        this.clusterDistance = clusterDistance;
        this.shapes = shapes;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmVoYXZpb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TZWFyY2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxjQUFjO0lBaUJ2QixZQUFZLFlBQStCLEVBQUUsU0FBa0IsRUFBRSxpQkFBMEIsRUFBRSxlQUF3QixFQUFFLE1BQXNCO1FBQ3pJLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5pbXBvcnQgeyBTZWFyY2hTaGFwZSB9IGZyb20gJy4uL2VudGl0aWVzL1NlYXJjaFNoYXBlJztcblxuLyogXG4gICBTZWFyY2ggYmVoYXZpb3IgZGVzY3JpcHRpb24gXG4qL1xuZXhwb3J0IGNsYXNzIFNlYXJjaEJlaGF2aW9yIHtcbiBcbiAgICAvLyBSdWxlIGJlaGF2aW9yIHR5cGU6IE1PVklORyB8IENST1NTSU5HIHwgT0NDVVBBTkNZIC4uLiBcbiAgICBwdWJsaWMgYmVoYXZpb3JUeXBlOiBCZWhhdmlvclR5cGVDb2RlO1xuIFxuICAgIC8vIER3ZWxsIHRpbWUgaW4gc2Vjb25kcywgcmVxdWlyZWQgZm9yIGNlcnRhaW4gYmVoYXZpb3JzIChNT1ZJTkcgfCBPQ0NVUEFOQ1kgfCBHUk9VUElORykgXG4gICAgcHVibGljIGR3ZWxsVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIE1pbiBudW1iZXIgb2YgcGVvcGxlIGluIGdyb3VwLCByZXF1aXJlZCBmb3IgY2VydGFpbiBiZWhhdmlvcnMgKE9DQ1VQQU5DWSB8IEdST1VQSU5HKSBcbiAgICBwdWJsaWMgbWluT2JqZWN0c0luR3JvdXA6IG51bWJlcjtcbiBcbiAgICAvLyBNZW1iZXIgZGlzdGFuY2UgaW4gZ3JvdXAsIHJlcXVpcmVkIGZvciBHUk9VUElORyBcbiAgICBwdWJsaWMgY2x1c3RlckRpc3RhbmNlOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBzZWFyY2ggc2hhcGVzIG9uIEZPViAoaW4gY2FzZSBzb3VyY2VTY29wZSBpcyBTRU5TT1IpIG9yIGEgc2luZ2xlIHNoYXBlIG9uIHdvcmxkIGNvb3JkaW5hdGVzIChpbiBjYXNlIHNvdXJjZVNjb3BlIGlzIEdFTykgXG4gICAgcHVibGljIHNoYXBlczogU2VhcmNoU2hhcGVbXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCBkd2VsbFRpbWU/OiBudW1iZXIsIG1pbk9iamVjdHNJbkdyb3VwPzogbnVtYmVyLCBjbHVzdGVyRGlzdGFuY2U/OiBudW1iZXIsIHNoYXBlcz86IFNlYXJjaFNoYXBlW10pIHsgXG4gICAgICAgIHRoaXMuYmVoYXZpb3JUeXBlID0gYmVoYXZpb3JUeXBlO1xuICAgICAgICB0aGlzLmR3ZWxsVGltZSA9IGR3ZWxsVGltZTtcbiAgICAgICAgdGhpcy5taW5PYmplY3RzSW5Hcm91cCA9IG1pbk9iamVjdHNJbkdyb3VwO1xuICAgICAgICB0aGlzLmNsdXN0ZXJEaXN0YW5jZSA9IGNsdXN0ZXJEaXN0YW5jZTtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBzaGFwZXM7XG4gICAgfVxuXG59XG5cblxuIl19