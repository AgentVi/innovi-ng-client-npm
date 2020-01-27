/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
   Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
   A single appliance can host multiple agents (container instances of the same Docker image)
*/
var /*
   Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
   Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
   A single appliance can host multiple agents (container instances of the same Docker image)
*/
Agent = /** @class */ (function (_super) {
    tslib_1.__extends(Agent, _super);
    function Agent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Agent;
}(BaseEntity));
/*
   Agent represents the new edge analytics pipeline (including former agent + AS + CS in a single process)
   Agent can process video from multiple sensors. Agent is hosted in the edge device (appliance) as single Docker container.
   A single appliance can host multiple agents (container instances of the same Docker image)
*/
export { Agent };
if (false) {
    /** @type {?} */
    Agent.prototype.accountId;
    /** @type {?} */
    Agent.prototype.applianceId;
    /** @type {?} */
    Agent.prototype.status;
    /** @type {?} */
    Agent.prototype.id;
    /** @type {?} */
    Agent.prototype._type;
    /** @type {?} */
    Agent.prototype.createdOn;
    /** @type {?} */
    Agent.prototype.updatedOn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnRpdGllcy9BZ2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBT3BEOzs7Ozs7SUFBMkIsaUNBQVU7SUFBckM7O0lBd0JBLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQXhCRCxDQUEyQixVQUFVLEdBd0JwQzs7Ozs7Ozs7O0lBckJHLDBCQUF5Qjs7SUFHekIsNEJBQTJCOztJQUczQix1QkFBK0I7O0lBRy9CLG1CQUFrQjs7SUFHbEIsc0JBQXFCOztJQUdyQiwwQkFBeUI7O0lBR3pCLDBCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FnZW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQWdlbnQgcmVwcmVzZW50cyB0aGUgbmV3IGVkZ2UgYW5hbHl0aWNzIHBpcGVsaW5lIChpbmNsdWRpbmcgZm9ybWVyIGFnZW50ICsgQVMgKyBDUyBpbiBhIHNpbmdsZSBwcm9jZXNzKVxuICAgQWdlbnQgY2FuIHByb2Nlc3MgdmlkZW8gZnJvbSBtdWx0aXBsZSBzZW5zb3JzLiBBZ2VudCBpcyBob3N0ZWQgaW4gdGhlIGVkZ2UgZGV2aWNlIChhcHBsaWFuY2UpIGFzIHNpbmdsZSBEb2NrZXIgY29udGFpbmVyLlxuICAgQSBzaW5nbGUgYXBwbGlhbmNlIGNhbiBob3N0IG11bHRpcGxlIGFnZW50cyAoY29udGFpbmVyIGluc3RhbmNlcyBvZiB0aGUgc2FtZSBEb2NrZXIgaW1hZ2UpIFxuKi9cbmV4cG9ydCBjbGFzcyBBZ2VudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFwcGxpYW5jZSBJZCBvZiB0aGUgYXBwbGlhbmNlIGhvc3RpbmcgdGhlIGFnZW50IFxuICAgIHB1YmxpYyBhcHBsaWFuY2VJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFnZW50IHN0YXR1cyBcbiAgICBwdWJsaWMgc3RhdHVzOiBBZ2VudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuXG59XG5cblxuIl19