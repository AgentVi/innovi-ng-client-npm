/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
var /*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
BaseEntity = /** @class */ (function () {
    function BaseEntity(id, docType, createdOn, updatedOn) {
        this.id = id;
        this._type = docType;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }
    return BaseEntity;
}());
/*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
export { BaseEntity };
if (false) {
    /** @type {?} */
    BaseEntity.prototype.id;
    /** @type {?} */
    BaseEntity.prototype._type;
    /** @type {?} */
    BaseEntity.prototype.createdOn;
    /** @type {?} */
    BaseEntity.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0Jhc2VFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBY0ksb0JBQVksRUFBVyxFQUFFLE9BQWdCLEVBQUUsU0FBa0IsRUFBRSxTQUFrQjtRQUM3RSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFTCxpQkFBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7Ozs7Ozs7SUFsQkcsd0JBQWtCOztJQUdsQiwyQkFBcUI7O0lBR3JCLCtCQUF5Qjs7SUFHekIsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIEJhc2UgZW50aXR5IGluY2x1ZGVzIGNvbW1vbiBmaWVsZHMgZm9yIGFsbCBlbnRpdGllcyAocGVyc2lzdGVuY2Ugb2JqZWN0cykgaW4gdGhlIHN5c3RlbSBcbiovXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIGNvbnN0cnVjdG9yKGlkPzogc3RyaW5nLCBkb2NUeXBlPzogc3RyaW5nLCBjcmVhdGVkT24/OiBudW1iZXIsIHVwZGF0ZWRPbj86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLl90eXBlID0gZG9jVHlwZTtcbiAgICAgICAgdGhpcy5jcmVhdGVkT24gPSBjcmVhdGVkT247XG4gICAgICAgIHRoaXMudXBkYXRlZE9uID0gdXBkYXRlZE9uO1xuICAgIH1cblxufVxuXG5cbiJdfQ==