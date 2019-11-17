/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
   In case of a line, it is not a closed polygon (first and last points are not connected)
   In case of area description, the line crossing direction field is ignored
*/
var /*
   Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
   In case of a line, it is not a closed polygon (first and last points are not connected)
   In case of area description, the line crossing direction field is ignored
*/
RulePolygon = /** @class */ (function () {
    function RulePolygon(lineCrossDir, points) {
        this.lineCrossDir = lineCrossDir;
        this.points = points;
    }
    return RulePolygon;
}());
/*
   Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
   In case of a line, it is not a closed polygon (first and last points are not connected)
   In case of area description, the line crossing direction field is ignored
*/
export { RulePolygon };
if (false) {
    /** @type {?} */
    RulePolygon.prototype.lineCrossDir;
    /** @type {?} */
    RulePolygon.prototype.points;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVBvbHlnb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vUnVsZVBvbHlnb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBUUE7Ozs7OztJQVFJLHFCQUFZLFlBQXFDLEVBQUUsTUFBZ0I7UUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVMLGtCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7Ozs7Ozs7OztJQVZHLG1DQUE0Qzs7SUFHNUMsNkJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluZUNyb3NzRGlyZWN0aW9uQ29kZSB9IGZyb20gJy4uL2VudW1zL0xpbmVDcm9zc0RpcmVjdGlvbkNvZGUnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vUG9pbnQnO1xuXG4vKiBcbiAgIFBvbHlnb24gZGVmaW5pdGlvbiBmb3IgcnVsZSBpcyB1c2VkIHRvIGRlc2NyaWJlIGNsb3NlZCBwb2x5Z29uIGFuZCBsaW5lIChmb3IgY3Jvc3NpbmcgYSBsaW5lIHJ1bGUpXG4gICBJbiBjYXNlIG9mIGEgbGluZSwgaXQgaXMgbm90IGEgY2xvc2VkIHBvbHlnb24gKGZpcnN0IGFuZCBsYXN0IHBvaW50cyBhcmUgbm90IGNvbm5lY3RlZClcbiAgIEluIGNhc2Ugb2YgYXJlYSBkZXNjcmlwdGlvbiwgdGhlIGxpbmUgY3Jvc3NpbmcgZGlyZWN0aW9uIGZpZWxkIGlzIGlnbm9yZWQgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVQb2x5Z29uIHtcbiBcbiAgICAvLyBMaW5lIGNyb3NzaW5nIGRpcmVjdGlvbiAodXNlZCBvbmx5IGluIGNhc2Ugb2YgbGluZS1jcm9zc2luZyBydWxlIHR5cGUpIFxuICAgIHB1YmxpYyBsaW5lQ3Jvc3NEaXI6IExpbmVDcm9zc0RpcmVjdGlvbkNvZGU7XG4gXG4gICAgLy8gUG9seWdvbiBwb2ludHMgXG4gICAgcHVibGljIHBvaW50czogUG9pbnRbXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihsaW5lQ3Jvc3NEaXI/OiBMaW5lQ3Jvc3NEaXJlY3Rpb25Db2RlLCBwb2ludHM/OiBQb2ludFtdKSB7IFxuICAgICAgICB0aGlzLmxpbmVDcm9zc0RpciA9IGxpbmVDcm9zc0RpcjtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgfVxuXG59XG5cblxuIl19