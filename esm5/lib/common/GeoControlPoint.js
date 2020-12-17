/*
   Control point maps FOV location (10000 x 10000 coordinate system) to WGS-84 coordinate system
   Control points are used for FOV geo-referencing
*/
var GeoControlPoint = /** @class */ (function () {
    function GeoControlPoint(point, coordinate) {
        this.point = point;
        this.coordinate = coordinate;
    }
    return GeoControlPoint;
}());
export { GeoControlPoint };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvQ29udHJvbFBvaW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0dlb0NvbnRyb2xQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7O0VBR0U7QUFDRjtJQVFJLHlCQUFZLEtBQWEsRUFBRSxVQUF1QjtRQUM5QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRUwsc0JBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2NvbW1vbi9Qb2ludCc7XG5cbi8qIFxuICAgQ29udHJvbCBwb2ludCBtYXBzIEZPViBsb2NhdGlvbiAoMTAwMDAgeCAxMDAwMCBjb29yZGluYXRlIHN5c3RlbSkgdG8gV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtXG4gICBDb250cm9sIHBvaW50cyBhcmUgdXNlZCBmb3IgRk9WIGdlby1yZWZlcmVuY2luZyBcbiovXG5leHBvcnQgY2xhc3MgR2VvQ29udHJvbFBvaW50IHtcbiBcbiAgICAvLyBQb2ludCBpbiB0aGUgRk9WIChvbiB0aGUgcmFzdGVyIGltYWdlKSBcbiAgICBwdWJsaWMgcG9pbnQ6IFBvaW50O1xuIFxuICAgIC8vIFdHUy04NCBDb29yZGluYXRlIChsYW4vbG5nKSB0byBtYXRjaCB0aGUgY29udHJvbCBwb2ludCBcbiAgICBwdWJsaWMgY29vcmRpbmF0ZTogQ29vcmRpbmF0ZTtcbiBcbiAgICBjb25zdHJ1Y3Rvcihwb2ludD86IFBvaW50LCBjb29yZGluYXRlPzogQ29vcmRpbmF0ZSkgeyBcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGUgPSBjb29yZGluYXRlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==