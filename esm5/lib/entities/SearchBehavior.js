/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Search behavior description
*/
var /*
   Search behavior description
*/
SearchBehavior = /** @class */ (function () {
    function SearchBehavior(behaviorType, dwellTime, minObjectsInGroup, shapes) {
        this.behaviorType = behaviorType;
        this.dwellTime = dwellTime;
        this.minObjectsInGroup = minObjectsInGroup;
        this.shapes = shapes;
    }
    return SearchBehavior;
}());
/*
   Search behavior description
*/
export { SearchBehavior };
if (false) {
    /** @type {?} */
    SearchBehavior.prototype.behaviorType;
    /** @type {?} */
    SearchBehavior.prototype.dwellTime;
    /** @type {?} */
    SearchBehavior.prototype.minObjectsInGroup;
    /** @type {?} */
    SearchBehavior.prototype.shapes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmVoYXZpb3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9TZWFyY2hCZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBTUE7Ozs7SUFjSSx3QkFBWSxZQUErQixFQUFFLFNBQWtCLEVBQUUsaUJBQTBCLEVBQUUsTUFBc0I7UUFDL0csSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFFTCxxQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7Ozs7Ozs7SUFsQkcsc0NBQXNDOztJQUd0QyxtQ0FBeUI7O0lBR3pCLDJDQUFpQzs7SUFHakMsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmVoYXZpb3JUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUnO1xuaW1wb3J0IHsgU2VhcmNoU2hhcGUgfSBmcm9tICcuLi9lbnRpdGllcy9TZWFyY2hTaGFwZSc7XG5cbi8qIFxuICAgU2VhcmNoIGJlaGF2aW9yIGRlc2NyaXB0aW9uIFxuKi9cbmV4cG9ydCBjbGFzcyBTZWFyY2hCZWhhdmlvciB7XG4gXG4gICAgLy8gUnVsZSBiZWhhdmlvciB0eXBlOiBNT1ZJTkcgfCBDUk9TU0lORyB8IE9DQ1VQQU5DWSAuLi4gXG4gICAgcHVibGljIGJlaGF2aW9yVHlwZTogQmVoYXZpb3JUeXBlQ29kZTtcbiBcbiAgICAvLyBEd2VsbCB0aW1lIGluIHNlY29uZHMsIHJlcXVpcmVkIGZvciBjZXJ0YWluIGJlaGF2aW9ycyAoTU9WSU5HIHwgT0NDVVBBTkNZIHwgR1JPVVBJTkcpIFxuICAgIHB1YmxpYyBkd2VsbFRpbWU6IG51bWJlcjtcbiBcbiAgICAvLyBNaW4gbnVtYmVyIG9mIHBlb3BsZSBpbiBncm91cCwgcmVxdWlyZWQgZm9yIGNlcnRhaW4gYmVoYXZpb3JzIChPQ0NVUEFOQ1kgfCBHUk9VUElORykgXG4gICAgcHVibGljIG1pbk9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBzZWFyY2ggc2hhcGVzIG9uIEZPViAoaW4gY2FzZSBzb3VyY2VTY29wZSBpcyBTRU5TT1IpIG9yIGEgc2luZ2xlIHNoYXBlIG9uIHdvcmxkIGNvb3JkaW5hdGVzIChpbiBjYXNlIHNvdXJjZVNjb3BlIGlzIEdFTykgXG4gICAgcHVibGljIHNoYXBlczogU2VhcmNoU2hhcGVbXTtcbiBcbiAgICBjb25zdHJ1Y3RvcihiZWhhdmlvclR5cGU/OiBCZWhhdmlvclR5cGVDb2RlLCBkd2VsbFRpbWU/OiBudW1iZXIsIG1pbk9iamVjdHNJbkdyb3VwPzogbnVtYmVyLCBzaGFwZXM/OiBTZWFyY2hTaGFwZVtdKSB7IFxuICAgICAgICB0aGlzLmJlaGF2aW9yVHlwZSA9IGJlaGF2aW9yVHlwZTtcbiAgICAgICAgdGhpcy5kd2VsbFRpbWUgPSBkd2VsbFRpbWU7XG4gICAgICAgIHRoaXMubWluT2JqZWN0c0luR3JvdXAgPSBtaW5PYmplY3RzSW5Hcm91cDtcbiAgICAgICAgdGhpcy5zaGFwZXMgPSBzaGFwZXM7XG4gICAgfVxuXG59XG5cblxuIl19