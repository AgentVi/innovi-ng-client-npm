/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
var /*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
Account = /** @class */ (function (_super) {
    tslib_1.__extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Account;
}(BaseEntity));
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
export { Account };
if (false) {
    /** @type {?} */
    Account.prototype.name;
    /** @type {?} */
    Account.prototype.key;
    /** @type {?} */
    Account.prototype.type;
    /** @type {?} */
    Account.prototype.status;
    /** @type {?} */
    Account.prototype.suspendedOn;
    /** @type {?} */
    Account.prototype.groups;
    /** @type {?} */
    Account.prototype.geoArea;
    /** @type {?} */
    Account.prototype.geoLocation;
    /** @type {?} */
    Account.prototype.timezone;
    /** @type {?} */
    Account.prototype.expiredOn;
    /** @type {?} */
    Account.prototype.maxChannels;
    /** @type {?} */
    Account.prototype.description;
    /** @type {?} */
    Account.prototype.id;
    /** @type {?} */
    Account.prototype._type;
    /** @type {?} */
    Account.prototype.createdOn;
    /** @type {?} */
    Account.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLcEQ7Ozs7SUFBNkIsbUNBQVU7SUFBdkM7O0lBbURBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQyxBQW5ERCxDQUE2QixVQUFVLEdBbUR0Qzs7Ozs7OztJQWhERyx1QkFBb0I7O0lBR3BCLHNCQUFtQjs7SUFHbkIsdUJBQTZCOztJQUc3Qix5QkFBaUM7O0lBR2pDLDhCQUEyQjs7SUFHM0IseUJBQXdCOztJQUd4QiwwQkFBNkI7O0lBRzdCLDhCQUErQjs7SUFHL0IsMkJBQXdCOztJQUd4Qiw0QkFBeUI7O0lBR3pCLDhCQUEyQjs7SUFHM0IsOEJBQTJCOztJQUczQixxQkFBa0I7O0lBR2xCLHdCQUFxQjs7SUFHckIsNEJBQXlCOztJQUd6Qiw0QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIEFjY291bnQgZW50aXR5IGluIHRoZSBzeXN0ZW0gcmVwcmVzZW50cyBjdXN0b21lciBhY2NvdW50IHdoaWNoIGdyb3VwcyBzZXQgb2YgZm9sZGVycywgY2FtZXJhcywgcnVsZXMsIGludGVncmF0aW9ucyBhbmQgY3VzdG9tZXIgc3BlY2lmaWMgb3BlcmF0aW9uYWwgY29uZmlndXJhdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQga2V5IFxuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IFR5cGU6IFVOREVGSU5FRCB8IERFTU8gfCBUUklBTCB8IFBBUlRORVIgfCBDVVNUT01FUiBcbiAgICBwdWJsaWMgdHlwZTogQWNjb3VudFR5cGVDb2RlO1xuIFxuICAgIC8vIEFjY291bnQgc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogQWNjb3VudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3YXMgc3VzcGVuZGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBzZWNvbmQgaW5saW5lIGZpZWxkIGRvY3VtZW50YXRpb24gXG4gICAgcHVibGljIHN1c3BlbmRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBhc3NvY2lhdGVkIGFjY291bnQgZ3JvdXBzIChmb3IgZmVhdHVyZSB0b2dnbGUpIFxuICAgIHB1YmxpYyBncm91cHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEFjY291bnQgZ2VvIGFyZWEgcG9seWdvbiAodGhlIGJvdW5kaW5nIHBvbHlnb24gb2YgdGhlIGFyZWEpIFxuICAgIHB1YmxpYyBnZW9BcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gQWNjb3VudCBnZW8gbG9jYXRpb24gKHRoZSBjZW50ZXIgY29vcmRpbmF0ZSBvZiB0aGUgYWNjb3VudCByZWdpb24pIFxuICAgIHB1YmxpYyBnZW9Mb2NhdGlvbjogQ29vcmRpbmF0ZTtcbiBcbiAgICAvLyBBY2NvdW50IHRpbWV6b25lIChJQU5BIGZvcm1hdCwgZGVmYXVsdCBpcyBVVEMpIFxuICAgIHB1YmxpYyB0aW1lem9uZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGFjY291bnQgd2lsbCBiZSBleHBpcmVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSAoMCBtZWFucyBubyBleHBpcmF0aW9uIHRpbWUpIFxuICAgIHB1YmxpYyBleHBpcmVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaW1pdCB0aGUgbnVtYmVyIG9mIGNoYW5uZWxzIHBlciBhY2NvdW50ICgwIG1lYW5zIG5vIGxpbWl0KSBcbiAgICBwdWJsaWMgbWF4Q2hhbm5lbHM6IG51bWJlcjtcbiBcbiAgICAvLyBBY2NvdW50IGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==