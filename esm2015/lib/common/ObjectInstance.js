/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   Metadata object instance info
   One instance of the object in the scene
*/
export class ObjectInstance {
    /**
     * @param {?=} timestamp
     * @param {?=} objectType
     * @param {?=} confidence
     * @param {?=} colors
     * @param {?=} direction
     * @param {?=} dimension
     * @param {?=} boundingBox
     * @param {?=} speed
     * @param {?=} size
     * @param {?=} position
     * @param {?=} location
     */
    constructor(timestamp, objectType, confidence, colors, direction, dimension, boundingBox, speed, size, position, location) {
        this.timestamp = timestamp;
        this.objectType = objectType;
        this.confidence = confidence;
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
if (false) {
    /** @type {?} */
    ObjectInstance.prototype.timestamp;
    /** @type {?} */
    ObjectInstance.prototype.objectType;
    /** @type {?} */
    ObjectInstance.prototype.confidence;
    /** @type {?} */
    ObjectInstance.prototype.colors;
    /** @type {?} */
    ObjectInstance.prototype.direction;
    /** @type {?} */
    ObjectInstance.prototype.dimension;
    /** @type {?} */
    ObjectInstance.prototype.boundingBox;
    /** @type {?} */
    ObjectInstance.prototype.speed;
    /** @type {?} */
    ObjectInstance.prototype.size;
    /** @type {?} */
    ObjectInstance.prototype.position;
    /** @type {?} */
    ObjectInstance.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0SW5zdGFuY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vT2JqZWN0SW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFXQSxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7Ozs7Ozs7SUFtQ3ZCLFlBQVksU0FBa0IsRUFBRSxVQUEyQixFQUFFLFVBQW1CLEVBQUUsTUFBc0IsRUFBRSxTQUFrQixFQUFFLFNBQXFCLEVBQUUsV0FBeUIsRUFBRSxLQUFjLEVBQUUsSUFBYSxFQUFFLFFBQWdCLEVBQUUsUUFBcUI7UUFDbFAsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUVKOzs7SUE5Q0csbUNBQXlCOztJQUd6QixvQ0FBa0M7O0lBR2xDLG9DQUEwQjs7SUFHMUIsZ0NBQTZCOztJQUc3QixtQ0FBeUI7O0lBR3pCLG1DQUE0Qjs7SUFHNUIscUNBQWdDOztJQUdoQywrQkFBcUI7O0lBR3JCLDhCQUFvQjs7SUFHcEIsa0NBQXVCOztJQUd2QixrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9PYmplY3RUeXBlQ29kZSc7XG5pbXBvcnQgeyBPYmplY3RDb2xvciB9IGZyb20gJy4uL2NvbW1vbi9PYmplY3RDb2xvcic7XG5pbXBvcnQgeyBEaW1lbnNpb24gfSBmcm9tICcuLi9jb21tb24vRGltZW5zaW9uJztcbmltcG9ydCB7IEJvdW5kaW5nQm94IH0gZnJvbSAnLi4vY29tbW9uL0JvdW5kaW5nQm94JztcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vY29tbW9uL1BvaW50JztcblxuLyogXG4gICBNZXRhZGF0YSBvYmplY3QgaW5zdGFuY2UgaW5mb1xuICAgT25lIGluc3RhbmNlIG9mIHRoZSBvYmplY3QgaW4gdGhlIHNjZW5lIFxuKi9cbmV4cG9ydCBjbGFzcyBPYmplY3RJbnN0YW5jZSB7XG4gXG4gICAgLy8gSW5zdGFuY2UgdGltZXN0YW1wIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdGltZXN0YW1wOiBudW1iZXI7XG4gXG4gICAgLy8gT2JqZWN0IHR5cGUgKGNsYXNzKSBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZTogT2JqZWN0VHlwZUNvZGU7XG4gXG4gICAgLy8gTGV2ZWwgb2YgY2xhc3NpZmljYXRpb24gY29uZmlkZW5jZSBcbiAgICBwdWJsaWMgY29uZmlkZW5jZTogbnVtYmVyO1xuIFxuICAgIC8vIEFuIGFycmF5IGRlZmluaW5nIG9iamVjdCBjb2xvcnMuIEVhY2ggY29sb3IgaXMgZGVmaW5lZCBieSBhIHR5cGUgd2l0aCBhIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvciBkZWZpbmVkIFxuICAgIHB1YmxpYyBjb2xvcnM6IE9iamVjdENvbG9yW107XG4gXG4gICAgLy8gRGlyZWN0aW9uIGJldHdlZW4gLTMxNDEgYW5kIDMxNDEgKC1waSB0byBwaSBpbiBpbnRlZ2VycyksIHdoZXJlIDAgaXMgdXAgXG4gICAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyO1xuIFxuICAgIC8vIEluc3RhbmNlIGRpbWVuc2lvbiAoaGVpZ2h0IGFuZCB3aWR0aCBpbiBtbSkgXG4gICAgcHVibGljIGRpbWVuc2lvbjogRGltZW5zaW9uO1xuIFxuICAgIC8vIEluc3RhbmNlIGJvdW5kaW5nIGJveCBpbiB0aGUgZnJhbWUgXG4gICAgcHVibGljIGJvdW5kaW5nQm94OiBCb3VuZGluZ0JveDtcbiBcbiAgICAvLyBJbnN0YW5jZSBzcGVlZCBpbiBtZXRlcnMvc2VjIFxuICAgIHB1YmxpYyBzcGVlZDogbnVtYmVyO1xuIFxuICAgIC8vIEluc3RhbmNlIGFwcHJveGltYXRlIHNpemUgaW4gMTAwMCoobV4yKSBcbiAgICBwdWJsaWMgc2l6ZTogbnVtYmVyO1xuIFxuICAgIC8vIEluc3RhbmNlIGxvY2F0aW9uIGluIHRoZSBpbWFnZSBcbiAgICBwdWJsaWMgcG9zaXRpb246IFBvaW50O1xuIFxuICAgIC8vIEluc3RhbmNlIGxvY2F0aW9uIGluIHRoZSB3b3JsZCAoV0dTLTg0IGNvb3JkaW5hdGUgc3lzdGVtKSBcbiAgICBwdWJsaWMgbG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgY29uc3RydWN0b3IodGltZXN0YW1wPzogbnVtYmVyLCBvYmplY3RUeXBlPzogT2JqZWN0VHlwZUNvZGUsIGNvbmZpZGVuY2U/OiBudW1iZXIsIGNvbG9ycz86IE9iamVjdENvbG9yW10sIGRpcmVjdGlvbj86IG51bWJlciwgZGltZW5zaW9uPzogRGltZW5zaW9uLCBib3VuZGluZ0JveD86IEJvdW5kaW5nQm94LCBzcGVlZD86IG51bWJlciwgc2l6ZT86IG51bWJlciwgcG9zaXRpb24/OiBQb2ludCwgbG9jYXRpb24/OiBDb29yZGluYXRlKSB7IFxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICAgICAgdGhpcy5vYmplY3RUeXBlID0gb2JqZWN0VHlwZTtcbiAgICAgICAgdGhpcy5jb25maWRlbmNlID0gY29uZmlkZW5jZTtcbiAgICAgICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgICAgICAgdGhpcy5ib3VuZGluZ0JveCA9IGJvdW5kaW5nQm94O1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cblxufVxuXG5cbiJdfQ==