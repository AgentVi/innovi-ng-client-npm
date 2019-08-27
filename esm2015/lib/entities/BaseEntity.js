/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
export class BaseEntity {
    /**
     * @param {?=} id
     * @param {?=} docType
     * @param {?=} createdOn
     * @param {?=} updatedOn
     */
    constructor(id, docType, createdOn, updatedOn) {
        this.id = id;
        this._type = docType;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0Jhc2VFbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBTyxVQUFVOzs7Ozs7O0lBY25CLFlBQVksRUFBVyxFQUFFLE9BQWdCLEVBQUUsU0FBa0IsRUFBRSxTQUFrQjtRQUM3RSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7Q0FFSjs7O0lBbEJHLHdCQUFrQjs7SUFHbEIsMkJBQXFCOztJQUdyQiwrQkFBeUI7O0lBR3pCLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogXG4gICBCYXNlIGVudGl0eSBpbmNsdWRlcyBjb21tb24gZmllbGRzIGZvciBhbGwgZW50aXRpZXMgKHBlcnNpc3RlbmNlIG9iamVjdHMpIGluIHRoZSBzeXN0ZW0gXG4qL1xuZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZywgZG9jVHlwZT86IHN0cmluZywgY3JlYXRlZE9uPzogbnVtYmVyLCB1cGRhdGVkT24/OiBudW1iZXIpIHsgXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5fdHlwZSA9IGRvY1R5cGU7XG4gICAgICAgIHRoaXMuY3JlYXRlZE9uID0gY3JlYXRlZE9uO1xuICAgICAgICB0aGlzLnVwZGF0ZWRPbiA9IHVwZGF0ZWRPbjtcbiAgICB9XG5cbn1cblxuXG4iXX0=