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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmVoYXZpb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL1NlYXJjaEJlaGF2aW9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGNBQWM7SUFpQnZCLFlBQVksWUFBK0IsRUFBRSxTQUFrQixFQUFFLGlCQUEwQixFQUFFLGVBQXdCLEVBQUUsTUFBc0I7UUFDekksSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaFNoYXBlIH0gZnJvbSAnLi4vZW50aXRpZXMvU2VhcmNoU2hhcGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuXG4vKiBcbiAgIFNlYXJjaCBiZWhhdmlvciBkZXNjcmlwdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgU2VhcmNoQmVoYXZpb3Ige1xuIFxuICAgIC8vIFJ1bGUgYmVoYXZpb3IgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gRHdlbGwgdGltZSBpbiBzZWNvbmRzLCByZXF1aXJlZCBmb3IgY2VydGFpbiBiZWhhdmlvcnMgKE1PVklORyB8IE9DQ1VQQU5DWSB8IEdST1VQSU5HKSBcbiAgICBwdWJsaWMgZHdlbGxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTWluIG51bWJlciBvZiBwZW9wbGUgaW4gZ3JvdXAsIHJlcXVpcmVkIGZvciBjZXJ0YWluIGJlaGF2aW9ycyAoT0NDVVBBTkNZIHwgR1JPVVBJTkcpIFxuICAgIHB1YmxpYyBtaW5PYmplY3RzSW5Hcm91cDogbnVtYmVyO1xuIFxuICAgIC8vIE1lbWJlciBkaXN0YW5jZSBpbiBncm91cCwgcmVxdWlyZWQgZm9yIEdST1VQSU5HIFxuICAgIHB1YmxpYyBjbHVzdGVyRGlzdGFuY2U6IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIHNlYXJjaCBzaGFwZXMgb24gRk9WIChpbiBjYXNlIHNvdXJjZVNjb3BlIGlzIFNFTlNPUikgb3IgYSBzaW5nbGUgc2hhcGUgb24gd29ybGQgY29vcmRpbmF0ZXMgKGluIGNhc2Ugc291cmNlU2NvcGUgaXMgR0VPKSBcbiAgICBwdWJsaWMgc2hhcGVzOiBTZWFyY2hTaGFwZVtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGJlaGF2aW9yVHlwZT86IEJlaGF2aW9yVHlwZUNvZGUsIGR3ZWxsVGltZT86IG51bWJlciwgbWluT2JqZWN0c0luR3JvdXA/OiBudW1iZXIsIGNsdXN0ZXJEaXN0YW5jZT86IG51bWJlciwgc2hhcGVzPzogU2VhcmNoU2hhcGVbXSkgeyBcbiAgICAgICAgdGhpcy5iZWhhdmlvclR5cGUgPSBiZWhhdmlvclR5cGU7XG4gICAgICAgIHRoaXMuZHdlbGxUaW1lID0gZHdlbGxUaW1lO1xuICAgICAgICB0aGlzLm1pbk9iamVjdHNJbkdyb3VwID0gbWluT2JqZWN0c0luR3JvdXA7XG4gICAgICAgIHRoaXMuY2x1c3RlckRpc3RhbmNlID0gY2x1c3RlckRpc3RhbmNlO1xuICAgICAgICB0aGlzLnNoYXBlcyA9IHNoYXBlcztcbiAgICB9XG5cbn1cblxuXG4iXX0=