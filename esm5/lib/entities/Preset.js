/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Sensor preset represent specific sensor FOV attributes.
   In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
*/
var /*
   Sensor preset represent specific sensor FOV attributes.
   In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
*/
Preset = /** @class */ (function (_super) {
    tslib_1.__extends(Preset, _super);
    function Preset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Preset;
}(BaseEntity));
/*
   Sensor preset represent specific sensor FOV attributes.
   In a fixed camera there is only one preset (0), in a PTZ cameras, user can specify multiple FOVs each has its own preset
*/
export { Preset };
if (false) {
    /** @type {?} */
    Preset.prototype.accountId;
    /** @type {?} */
    Preset.prototype.sensorId;
    /** @type {?} */
    Preset.prototype.presetNum;
    /** @type {?} */
    Preset.prototype.refImageUrl;
    /** @type {?} */
    Preset.prototype.calibration;
    /** @type {?} */
    Preset.prototype.id;
    /** @type {?} */
    Preset.prototype._type;
    /** @type {?} */
    Preset.prototype.createdOn;
    /** @type {?} */
    Preset.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlc2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvUHJlc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU1wRDs7Ozs7SUFBNEIsa0NBQVU7SUFBdEM7O0lBNkJBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxBQTdCRCxDQUE0QixVQUFVLEdBNkJyQzs7Ozs7Ozs7SUExQkcsMkJBQXlCOztJQUd6QiwwQkFBd0I7O0lBR3hCLDJCQUF5Qjs7SUFHekIsNkJBQTJCOztJQUczQiw2QkFBd0I7O0lBR3hCLG9CQUFrQjs7SUFHbEIsdUJBQXFCOztJQUdyQiwyQkFBeUI7O0lBR3pCLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcblxuLyogXG4gICBTZW5zb3IgcHJlc2V0IHJlcHJlc2VudCBzcGVjaWZpYyBzZW5zb3IgRk9WIGF0dHJpYnV0ZXMuXG4gICBJbiBhIGZpeGVkIGNhbWVyYSB0aGVyZSBpcyBvbmx5IG9uZSBwcmVzZXQgKDApLCBpbiBhIFBUWiBjYW1lcmFzLCB1c2VyIGNhbiBzcGVjaWZ5IG11bHRpcGxlIEZPVnMgZWFjaCBoYXMgaXRzIG93biBwcmVzZXQgXG4qL1xuZXhwb3J0IGNsYXNzIFByZXNldCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBQcmVzZXQgbnVtYmVyICgwIGZvciBkZWZhdWx0KSBcbiAgICBwdWJsaWMgcHJlc2V0TnVtOiBudW1iZXI7XG4gXG4gICAgLy8gUmVmZXJlbmNlIEltYWdlIFVybCBcbiAgICBwdWJsaWMgcmVmSW1hZ2VVcmw6IHN0cmluZztcbiBcbiAgICAvLyBTZW5zb3IgcHJlc2V0IGNhbGlicmF0aW9uIGluZm8gXG4gICAgcHVibGljIGNhbGlicmF0aW9uOiBhbnk7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxufVxuXG5cbiJdfQ==