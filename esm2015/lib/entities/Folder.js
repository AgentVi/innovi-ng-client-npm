/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseEntity } from '../entities/BaseEntity';
/*
   Folder (container for sensors and sub folders)
*/
export class Folder extends BaseEntity {
}
if (false) {
    /** @type {?} */
    Folder.prototype.parentId;
    /** @type {?} */
    Folder.prototype.accountId;
    /** @type {?} */
    Folder.prototype.name;
    /** @type {?} */
    Folder.prototype.depth;
    /** @type {?} */
    Folder.prototype.geoArea;
    /** @type {?} */
    Folder.prototype.geoLocation;
    /** @type {?} */
    Folder.prototype.timezone;
    /** @type {?} */
    Folder.prototype.id;
    /** @type {?} */
    Folder.prototype._type;
    /** @type {?} */
    Folder.prototype.createdOn;
    /** @type {?} */
    Folder.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLcEQsTUFBTSxPQUFPLE1BQU8sU0FBUSxVQUFVO0NBb0NyQzs7O0lBakNHLDBCQUF3Qjs7SUFHeEIsMkJBQXlCOztJQUd6QixzQkFBb0I7O0lBR3BCLHVCQUFxQjs7SUFHckIseUJBQTZCOztJQUc3Qiw2QkFBK0I7O0lBRy9CLDBCQUF3Qjs7SUFHeEIsb0JBQWtCOztJQUdsQix1QkFBcUI7O0lBR3JCLDJCQUF5Qjs7SUFHekIsMkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBGb2xkZXIgKGNvbnRhaW5lciBmb3Igc2Vuc29ycyBhbmQgc3ViIGZvbGRlcnMpIFxuKi9cbmV4cG9ydCBjbGFzcyBGb2xkZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBGb2xkZXIgcGFyZW50IElkIChFbXB0eSBpZiBmb2xkZXIgaXMgaW4gdGhlIHJvb3QpIFxuICAgIHB1YmxpYyBwYXJlbnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIGhpZXJhcmNoeSBkZXB0aCBcbiAgICBwdWJsaWMgZGVwdGg6IG51bWJlcjtcbiBcbiAgICAvLyBGb2xkZXIgZ2VvIGFyZWEgcG9seWdvbiAodGhlIGJvdW5kaW5nIHBvbHlnb24gb2YgdGhlIGFyZWEpIFxuICAgIHB1YmxpYyBnZW9BcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gRm9sZGVyIGdlbyBsb2NhdGlvbiAodGhlIGNlbnRlciBjb29yZGluYXRlIG9mIHRoZSBhY2NvdW50IHJlZ2lvbikgXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIEZvbGRlciB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICBwdWJsaWMgdGltZXpvbmU6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=