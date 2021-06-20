/*
   Metadata object instance info
   One instance of the object in the scene
*/
export class ObjectInstance {
    constructor(timestamp, objectType, confidence, isStopped, colors, direction, dimension, boundingBox, speed, size, position, location) {
        this.timestamp = timestamp;
        this.objectType = objectType;
        this.confidence = confidence;
        this.isStopped = isStopped;
        this.colors = colors;
        this.direction = direction;
        this.dimension = dimension;
        this.boundingBox = boundingBox;
        this.speed = speed;
        this.size = size;
        this.position = position;
        this.location = location;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0SW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9PYmplY3RJbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTs7O0VBR0U7QUFDRixNQUFNLE9BQU8sY0FBYztJQXNDdkIsWUFBWSxTQUFrQixFQUFFLFVBQTJCLEVBQUUsVUFBbUIsRUFBRSxTQUFtQixFQUFFLE1BQXNCLEVBQUUsU0FBa0IsRUFBRSxTQUFxQixFQUFFLFdBQXlCLEVBQUUsS0FBYyxFQUFFLElBQWEsRUFBRSxRQUFnQixFQUFFLFFBQXFCO1FBQ3ZRLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvdW5kaW5nQm94IH0gZnJvbSAnLi4vY29tbW9uL0JvdW5kaW5nQm94JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL1BvaW50JztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBPYmplY3RUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL09iamVjdFR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdENvbG9yIH0gZnJvbSAnLi4vY29tbW9uL09iamVjdENvbG9yJztcbmltcG9ydCB7IERpbWVuc2lvbiB9IGZyb20gJy4uL2NvbW1vbi9EaW1lbnNpb24nO1xuXG4vKiBcbiAgIE1ldGFkYXRhIG9iamVjdCBpbnN0YW5jZSBpbmZvXG4gICBPbmUgaW5zdGFuY2Ugb2YgdGhlIG9iamVjdCBpbiB0aGUgc2NlbmUgXG4qL1xuZXhwb3J0IGNsYXNzIE9iamVjdEluc3RhbmNlIHtcbiBcbiAgICAvLyBJbnN0YW5jZSB0aW1lc3RhbXAgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB0aW1lc3RhbXA6IG51bWJlcjtcbiBcbiAgICAvLyBPYmplY3QgdHlwZSAoY2xhc3MpIFxuICAgIHB1YmxpYyBvYmplY3RUeXBlOiBPYmplY3RUeXBlQ29kZTtcbiBcbiAgICAvLyBMZXZlbCBvZiBjbGFzc2lmaWNhdGlvbiBjb25maWRlbmNlICgwIC0gMTAwMCkgXG4gICAgcHVibGljIGNvbmZpZGVuY2U6IG51bWJlcjtcbiBcbiAgICAvLyBBIGJvb2xlYW4gZGV0ZXJtaW5pbmcgaWYgdGhpcyBwb2ludCBpcyBjdXJyZW50bHkgc3RvcHBlZCBvciBtb3ZpbmcgXG4gICAgcHVibGljIGlzU3RvcHBlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBBbiBhcnJheSBkZWZpbmluZyBvYmplY3QgY29sb3JzLiBFYWNoIGNvbG9yIGlzIGRlZmluZWQgYnkgYSB0eXBlIHdpdGggYSBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgY29sb3IgZGVmaW5lZCBcbiAgICBwdWJsaWMgY29sb3JzOiBPYmplY3RDb2xvcltdO1xuIFxuICAgIC8vIERpcmVjdGlvbiBiZXR3ZWVuIC0zMTQxIGFuZCAzMTQxICgtcGkgdG8gcGkgaW4gaW50ZWdlcnMpLCB3aGVyZSAwIGlzIHVwIFxuICAgIHB1YmxpYyBkaXJlY3Rpb246IG51bWJlcjtcbiBcbiAgICAvLyBJbnN0YW5jZSBkaW1lbnNpb24gKGhlaWdodCBhbmQgd2lkdGggaW4gbW0pIFxuICAgIHB1YmxpYyBkaW1lbnNpb246IERpbWVuc2lvbjtcbiBcbiAgICAvLyBJbnN0YW5jZSBib3VuZGluZyBib3ggaW4gdGhlIGZyYW1lIFxuICAgIHB1YmxpYyBib3VuZGluZ0JveDogQm91bmRpbmdCb3g7XG4gXG4gICAgLy8gSW5zdGFuY2Ugc3BlZWQgaW4gbWV0ZXJzL3NlYyAqIDEwMDAgKG1pbGxpbWV0ZXIvc2VjKSBcbiAgICBwdWJsaWMgc3BlZWQ6IG51bWJlcjtcbiBcbiAgICAvLyBJbnN0YW5jZSBhcHByb3hpbWF0ZSBzaXplIGluIDEwMDAqKG1eMikgXG4gICAgcHVibGljIHNpemU6IG51bWJlcjtcbiBcbiAgICAvLyBJbnN0YW5jZSBsb2NhdGlvbiBpbiB0aGUgaW1hZ2UgXG4gICAgcHVibGljIHBvc2l0aW9uOiBQb2ludDtcbiBcbiAgICAvLyBJbnN0YW5jZSBsb2NhdGlvbiBpbiB0aGUgd29ybGQgKFdHUy04NCBjb29yZGluYXRlIHN5c3RlbSkgXG4gICAgcHVibGljIGxvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIGNvbnN0cnVjdG9yKHRpbWVzdGFtcD86IG51bWJlciwgb2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb2RlLCBjb25maWRlbmNlPzogbnVtYmVyLCBpc1N0b3BwZWQ/OiBib29sZWFuLCBjb2xvcnM/OiBPYmplY3RDb2xvcltdLCBkaXJlY3Rpb24/OiBudW1iZXIsIGRpbWVuc2lvbj86IERpbWVuc2lvbiwgYm91bmRpbmdCb3g/OiBCb3VuZGluZ0JveCwgc3BlZWQ/OiBudW1iZXIsIHNpemU/OiBudW1iZXIsIHBvc2l0aW9uPzogUG9pbnQsIGxvY2F0aW9uPzogQ29vcmRpbmF0ZSkgeyBcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XG4gICAgICAgIHRoaXMuY29uZmlkZW5jZSA9IGNvbmZpZGVuY2U7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gaXNTdG9wcGVkO1xuICAgICAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZGltZW5zaW9uID0gZGltZW5zaW9uO1xuICAgICAgICB0aGlzLmJvdW5kaW5nQm94ID0gYm91bmRpbmdCb3g7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG59XG5cblxuIl19