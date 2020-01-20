/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
   SW Component version type
*/
var /*
   SW Component version type
*/
ComponentConfiguration = /** @class */ (function () {
    function ComponentConfiguration(id, component, dockerImage, variables, mounts, status) {
        this.id = id;
        this.component = component;
        this.dockerImage = dockerImage;
        this.variables = variables;
        this.mounts = mounts;
        this.status = status;
    }
    return ComponentConfiguration;
}());
/*
   SW Component version type
*/
export { ComponentConfiguration };
if (false) {
    /** @type {?} */
    ComponentConfiguration.prototype.id;
    /** @type {?} */
    ComponentConfiguration.prototype.component;
    /** @type {?} */
    ComponentConfiguration.prototype.dockerImage;
    /** @type {?} */
    ComponentConfiguration.prototype.variables;
    /** @type {?} */
    ComponentConfiguration.prototype.mounts;
    /** @type {?} */
    ComponentConfiguration.prototype.status;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcG9uZW50Q29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0NvbXBvbmVudENvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BOzs7O0lBb0JJLGdDQUFZLEVBQVcsRUFBRSxTQUFrQixFQUFFLFdBQW9CLEVBQUUsU0FBNEIsRUFBRSxNQUF5QixFQUFFLE1BQTBCO1FBQ2xKLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVMLDZCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQzs7Ozs7OztJQTFCRyxvQ0FBa0I7O0lBR2xCLDJDQUF5Qjs7SUFHekIsNkNBQTJCOztJQUczQiwyQ0FBbUM7O0lBR25DLHdDQUFnQzs7SUFHaEMsd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RyaW5nS2V5VmFsdWUgfSBmcm9tICcuLi9jb21tb24vU3RyaW5nS2V5VmFsdWUnO1xuaW1wb3J0IHsgUnVudGltZVN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9SdW50aW1lU3RhdHVzQ29kZSc7XG5cbi8qIFxuICAgU1cgQ29tcG9uZW50IHZlcnNpb24gdHlwZSBcbiovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q29uZmlndXJhdGlvbiB7XG4gXG4gICAgLy8gQ29tcG9uZW50IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIENvbXBvbmVudCBncm91cCBuYW1lIFxuICAgIHB1YmxpYyBjb21wb25lbnQ6IHN0cmluZztcbiBcbiAgICAvLyBEb2NrZXIgaW1hZ2UgbmFtZSAoaW5jbHVkaW5nIHRhZyBhbmQgZG9ja2VyIHJlZ2lzdHJ5KSBcbiAgICBwdWJsaWMgZG9ja2VySW1hZ2U6IHN0cmluZztcbiBcbiAgICAvLyBMaXN0IG9mIGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBpbmplY3QgKGFzIGtleS12YWx1ZSBwYWlycykgXG4gICAgcHVibGljIHZhcmlhYmxlczogU3RyaW5nS2V5VmFsdWVbXTtcbiBcbiAgICAvLyBMaXN0IG9mIG1vdW50IHBvaW50cyB0byBpbmplY3QgKGFzIGtleS12YWx1ZSBwYWlycykgXG4gICAgcHVibGljIG1vdW50czogU3RyaW5nS2V5VmFsdWVbXTtcbiBcbiAgICAvLyBSdW50aW1lIGNvbXBvbmVudCBzdGF0dXMgXG4gICAgcHVibGljIHN0YXR1czogUnVudGltZVN0YXR1c0NvZGU7XG4gXG4gICAgY29uc3RydWN0b3IoaWQ/OiBzdHJpbmcsIGNvbXBvbmVudD86IHN0cmluZywgZG9ja2VySW1hZ2U/OiBzdHJpbmcsIHZhcmlhYmxlcz86IFN0cmluZ0tleVZhbHVlW10sIG1vdW50cz86IFN0cmluZ0tleVZhbHVlW10sIHN0YXR1cz86IFJ1bnRpbWVTdGF0dXNDb2RlKSB7IFxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICB0aGlzLmRvY2tlckltYWdlID0gZG9ja2VySW1hZ2U7XG4gICAgICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgICAgICB0aGlzLm1vdW50cyA9IG1vdW50cztcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxuXG59XG5cblxuIl19