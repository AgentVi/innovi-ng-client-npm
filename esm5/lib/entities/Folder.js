/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Folder (container for sensors and sub folders)
*/
var /*
   Folder (container for sensors and sub folders)
*/
Folder = /** @class */ (function (_super) {
    tslib_1.__extends(Folder, _super);
    function Folder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Folder;
}(BaseEntity));
/*
   Folder (container for sensors and sub folders)
*/
export { Folder };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS3BEOzs7O0lBQTRCLGtDQUFVO0lBQXRDOztJQW9DQSxDQUFDO0lBQUQsYUFBQztBQUFELENBQUMsQUFwQ0QsQ0FBNEIsVUFBVSxHQW9DckM7Ozs7Ozs7SUFqQ0csMEJBQXdCOztJQUd4QiwyQkFBeUI7O0lBR3pCLHNCQUFvQjs7SUFHcEIsdUJBQXFCOztJQUdyQix5QkFBNkI7O0lBRzdCLDZCQUErQjs7SUFHL0IsMEJBQXdCOztJQUd4QixvQkFBa0I7O0lBR2xCLHVCQUFxQjs7SUFHckIsMkJBQXlCOztJQUd6QiwyQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEZvbGRlciAoY29udGFpbmVyIGZvciBzZW5zb3JzIGFuZCBzdWIgZm9sZGVycykgXG4qL1xuZXhwb3J0IGNsYXNzIEZvbGRlciBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEZvbGRlciBwYXJlbnQgSWQgKEVtcHR5IGlmIGZvbGRlciBpcyBpbiB0aGUgcm9vdCkgXG4gICAgcHVibGljIHBhcmVudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgaGllcmFyY2h5IGRlcHRoIFxuICAgIHB1YmxpYyBkZXB0aDogbnVtYmVyO1xuIFxuICAgIC8vIEZvbGRlciBnZW8gYXJlYSBwb2x5Z29uICh0aGUgYm91bmRpbmcgcG9seWdvbiBvZiB0aGUgYXJlYSkgXG4gICAgcHVibGljIGdlb0FyZWE6IENvb3JkaW5hdGVbXTtcbiBcbiAgICAvLyBGb2xkZXIgZ2VvIGxvY2F0aW9uICh0aGUgY2VudGVyIGNvb3JkaW5hdGUgb2YgdGhlIGFjY291bnQgcmVnaW9uKSBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gRm9sZGVyIHRpbWV6b25lIChJQU5BIGZvcm1hdCwgZGVmYXVsdCBpcyBVVEMpIFxuICAgIHB1YmxpYyB0aW1lem9uZTogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==