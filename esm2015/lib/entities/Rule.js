import { BaseEntity } from '../entities/BaseEntity';
/*
   Rule Represents real-time analytic rule, the structure is a union of all the attributes used by all the types of
   real-time rules (crossing, moving, grouping ...) hence not all attributes are used for every rule type
*/
export class Rule extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvUnVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFLcEQ7OztFQUdFO0FBQ0YsTUFBTSxPQUFPLElBQUssU0FBUSxVQUFVO0NBMEZuQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNpdGl2aXR5IH0gZnJvbSAnLi4vY29tbW9uL1NlbnNpdGl2aXR5JztcbmltcG9ydCB7IFJ1bGVQb2x5Z29uIH0gZnJvbSAnLi4vY29tbW9uL1J1bGVQb2x5Z29uJztcbmltcG9ydCB7IEJhc2VFbnRpdHkgfSBmcm9tICcuLi9lbnRpdGllcy9CYXNlRW50aXR5JztcbmltcG9ydCB7IEJlaGF2aW9yVHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9CZWhhdmlvclR5cGVDb2RlJztcbmltcG9ydCB7IE9iamVjdFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvT2JqZWN0VHlwZUNvZGUnO1xuaW1wb3J0IHsgU2V2ZXJpdHlUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL1NldmVyaXR5VHlwZUNvZGUnO1xuXG4vKiBcbiAgIFJ1bGUgUmVwcmVzZW50cyByZWFsLXRpbWUgYW5hbHl0aWMgcnVsZSwgdGhlIHN0cnVjdHVyZSBpcyBhIHVuaW9uIG9mIGFsbCB0aGUgYXR0cmlidXRlcyB1c2VkIGJ5IGFsbCB0aGUgdHlwZXMgb2ZcbiAgIHJlYWwtdGltZSBydWxlcyAoY3Jvc3NpbmcsIG1vdmluZywgZ3JvdXBpbmcgLi4uKSBoZW5jZSBub3QgYWxsIGF0dHJpYnV0ZXMgYXJlIHVzZWQgZm9yIGV2ZXJ5IHJ1bGUgdHlwZSBcbiovXG5leHBvcnQgY2xhc3MgUnVsZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIFNlbnNvciBJZCBcbiAgICBwdWJsaWMgc2Vuc29ySWQ6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBSdWxlIGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIFNjaGVkdWxlIElkIFxuICAgIHB1YmxpYyBzY2hlZHVsZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gSW5kaWNhdGUgaWYgdGhlIHJ1bGUgaXMgZXhwbGljaXRseSBlbmFibGVkIG9yIGRpc2FibGVkIChieSB1c2VyIG9yIGJ5IEFQSSBjYWxsIC0gZS5nLiBhcm0vZGlzYXJtKSBcbiAgICBwdWJsaWMgZW5hYmxlZDogYm9vbGVhbjtcbiBcbiAgICAvLyBJbmRpY2F0ZSBpZiB0aGUgcnVsZSBpcyBhY3RpdmUgb3IgaW5hY3RpdmUgZHVlIHRvIGl0J3Mgc2NoZWR1bGUgLyBjYWxlbmRhciB0aW1lIHNsb3RzIFxuICAgIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gXG4gICAgLy8gUnVsZSBleHRlcm5hbCBpZCAoaG93IHRoZSBydWxlIGlzIGlkZW50aWZpZWQgaW4gb3RoZXIgc3lzdGVtKSBcbiAgICBwdWJsaWMgZXh0ZXJuYWxJZDogc3RyaW5nO1xuIFxuICAgIC8vIFJ1bGUgYmVoYXZpb3IgdHlwZTogTU9WSU5HIHwgQ1JPU1NJTkcgfCBPQ0NVUEFOQ1kgLi4uIFxuICAgIHB1YmxpYyBiZWhhdmlvclR5cGU6IEJlaGF2aW9yVHlwZUNvZGU7XG4gXG4gICAgLy8gUnVsZSBvYmplY3QgdHlwZXM6IFBFUlNPTiB8IFZFSElDTEUgfCBNT1RPUkNZQ0xFIC4uLiBcbiAgICBwdWJsaWMgb2JqZWN0VHlwZXM6IE9iamVjdFR5cGVDb2RlW107XG4gXG4gICAgLy8gRGVmYXVsdCBzZXZlcml0eSBsZXZlbCBmb3IgdGhpcyBydWxlOiBVTkRFRklORUQgfCBMT1cgfCBNRURJVU0gfCBISUdIIHwgQ1JJVElDQUwgXG4gICAgcHVibGljIHNldmVyaXR5OiBTZXZlcml0eVR5cGVDb2RlO1xuIFxuICAgIC8vIFNlbnNpdGl2aXR5IChmb3IgQW5vbWFseSBydWxlIG9ubHkpIFxuICAgIHB1YmxpYyBzZW5zaXRpdml0eTogU2Vuc2l0aXZpdHk7XG4gXG4gICAgLy8gRHdlbGwgdGltZSBbc2Vjb25kc10gXG4gICAgcHVibGljIGR3ZWxsVGltZTogbnVtYmVyO1xuIFxuICAgIC8vIEFuIG9wdGlvbmFsIHNwZWVkIGZpbHRlciB0byB0aGUgbW92aW5nIGluIGFuIGFyZWEgYW5kIGxpbmUgY3Jvc3NpbmcgcnVsZXMgW0tQSF0gXG4gICAgcHVibGljIG1pblNwZWVkOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IG51bWJlciBvZiBwZW9wbGUgaW4gZ3JvdXAgKGZvciBPY2N1cGFuY3kgcnVsZSkgXG4gICAgcHVibGljIG1heE9iamVjdHNJbkdyb3VwOiBudW1iZXI7XG4gXG4gICAgLy8gTWF4IGRpc3RhbmNlIGJldHdlZW4gcGVvcGxlIHRvIGJlIGNvbnNpZGVyZWQgYXMgZ3JvdXAgKGZvciBHcm91cGluZyBydWxlKSBcbiAgICBwdWJsaWMgY2x1c3RlckRpc3RhbmNlOiBudW1iZXI7XG4gXG4gICAgLy8gVGltZSBpbnRlcnZhbCBbc2Vjb25kc10gYmV0d2VlbiBzdGF0aXN0aWNzIHJlcG9ydHMgKGZvciBzdGF0aXN0aWNzIHJ1bGVzKSBcbiAgICBwdWJsaWMgaW50ZXJ2YWxUaW1lOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBwb2x5Z29ucyBcbiAgICBwdWJsaWMgcG9seWdvbnM6IFJ1bGVQb2x5Z29uW107XG4gXG4gICAgLy8gQmFzZTY0IGVuY29kZWQgY3JvcHBlZCBhc3NldCBpbWFnZSBcbiAgICBwdWJsaWMgcmVmZXJlbmNlQ3JvcDogc3RyaW5nO1xuIFxuICAgIC8vIEZsYWcgdG8gaW5kaWNhdGUgaWYgZXZlbnQgaW1hZ2Ugc2hvdWxkIGJlIGdlbmVyYXRlZCBcbiAgICBwdWJsaWMgY3JlYXRlSW1hZ2U6IGJvb2xlYW47XG4gXG4gICAgLy8gRmxhZyB0byBpbmRpY2F0ZSBpZiBldmVudCBjbGlwIHNob3VsZCBiZSBnZW5lcmF0ZWQgXG4gICAgcHVibGljIGNyZWF0ZUNsaXA6IGJvb2xlYW47XG4gXG4gICAgLy8gV2hlbiB3YXMgdGhlIGxhc3QgYW5vbWFseSB0cmFpbmluZyAoZm9yIEFub21hbHkgcnVsZSBvbmx5KSBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGxhc3RUcmFpbmluZ09uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB3aWxsIGJlIHRoZSBuZXh0IGFub21hbHkgdHJhaW5pbmcgKGZvciBBbm9tYWx5IHJ1bGUgb25seSkgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBuZXh0VHJhaW5pbmdPbjogbnVtYmVyO1xuIFxuICAgIC8vIFRoZSBwZXJjZW50IG9mIHJlcXVpcmVkIG1ldGFkYXRhIHRoYXQgd2FzIGNvbGxlY3RlZCAoMC0xMDApIFxuICAgIHB1YmxpYyB0cmFpbmluZ1JlYWRpbmVzczogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgcGF0aCBpbiB0aGUgaGllcmFyY2h5IFxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG4gXG5cbn1cblxuXG4iXX0=