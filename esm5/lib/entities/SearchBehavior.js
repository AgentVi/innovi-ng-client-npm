/*
   Search behavior description
*/
var SearchBehavior = /** @class */ (function () {
    function SearchBehavior(behaviorType, dwellTime, minObjectsInGroup, clusterDistance, shapes) {
        this.behaviorType = behaviorType;
        this.dwellTime = dwellTime;
        this.minObjectsInGroup = minObjectsInGroup;
        this.clusterDistance = clusterDistance;
        this.shapes = shapes;
    }
    return SearchBehavior;
}());
export { SearchBehavior };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmVoYXZpb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TZWFyY2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRTtBQUNGO0lBaUJJLHdCQUFZLFlBQStCLEVBQUUsU0FBa0IsRUFBRSxpQkFBMEIsRUFBRSxlQUF3QixFQUFFLE1BQXNCO1FBQ3pJLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRUwscUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoU2hhcGUgfSBmcm9tICcuLi9lbnRpdGllcy9TZWFyY2hTaGFwZSc7XG5pbXBvcnQgeyBCZWhhdmlvclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQmVoYXZpb3JUeXBlQ29kZSc7XG5cbi8qIFxuICAgU2VhcmNoIGJlaGF2aW9yIGRlc2NyaXB0aW9uIFxuKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hCZWhhdmlvciB7XG4gXG4gICAgLy8gUnVsZSBiZWhhdmlvciB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIGluIHNlY29uZHMsIHJlcXVpcmVkIGZvciBjZXJ0YWluIGJlaGF2aW9ycyAoTU9WSU5HIHwgT0NDVVBBTkNZIHwgR1JPVVBJTkcpIFxuICAgIHB1YmxpYyBkd2VsbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBNaW4gbnVtYmVyIG9mIHBlb3BsZSBpbiBncm91cCwgcmVxdWlyZWQgZm9yIGNlcnRhaW4gYmVoYXZpb3JzIChPQ0NVUEFOQ1kgfCBHUk9VUElORykgXG4gICAgcHVibGljIG1pbk9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTWVtYmVyIGRpc3RhbmNlIGluIGdyb3VwLCByZXF1aXJlZCBmb3IgR1JPVVBJTkcgXG4gICAgcHVibGljIGNsdXN0ZXJEaXN0YW5jZTogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2Ygc2VhcmNoIHNoYXBlcyBvbiBGT1YgKGluIGNhc2Ugc291cmNlU2NvcGUgaXMgU0VOU09SKSBvciBhIHNpbmdsZSBzaGFwZSBvbiB3b3JsZCBjb29yZGluYXRlcyAoaW4gY2FzZSBzb3VyY2VTY29wZSBpcyBHRU8pIFxuICAgIHB1YmxpYyBzaGFwZXM6IFNlYXJjaFNoYXBlW107XG4gXG4gICAgY29uc3RydWN0b3IoYmVoYXZpb3JUeXBlPzogQmVoYXZpb3JUeXBlQ29kZSwgZHdlbGxUaW1lPzogbnVtYmVyLCBtaW5PYmplY3RzSW5Hcm91cD86IG51bWJlciwgY2x1c3RlckRpc3RhbmNlPzogbnVtYmVyLCBzaGFwZXM/OiBTZWFyY2hTaGFwZVtdKSB7IFxuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMubWluT2JqZWN0c0luR3JvdXAgPSBtaW5PYmplY3RzSW5Hcm91cDtcbiAgICAgICAgdGhpcy5jbHVzdGVyRGlzdGFuY2UgPSBjbHVzdGVyRGlzdGFuY2U7XG4gICAgICAgIHRoaXMuc2hhcGVzID0gc2hhcGVzO1xuICAgIH1cblxufVxuXG5cbiJdfQ==