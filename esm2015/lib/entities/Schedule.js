import { BaseEntity } from '../entities/BaseEntity';
/*
   Schedule is a list of recurrent time frames to specify active analytics
   Schedule is associated with account and optionally with folder and multiple schedules can be specified.
   When defining a rule, it can be scheduled by one of the schedules associated with the sensor's folder, it's parent folder, it's parent's parent folder and so on up to the account
*/
export class Schedule extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL1NjaGVkdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRDs7OztFQUlFO0FBQ0YsTUFBTSxPQUFPLFFBQVMsU0FBUSxVQUFVO0NBdUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY3VycmVudFRpbWVGcmFtZSB9IGZyb20gJy4uL2NvbW1vbi9SZWN1cnJlbnRUaW1lRnJhbWUnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuXG4vKiBcbiAgIFNjaGVkdWxlIGlzIGEgbGlzdCBvZiByZWN1cnJlbnQgdGltZSBmcmFtZXMgdG8gc3BlY2lmeSBhY3RpdmUgYW5hbHl0aWNzXG4gICBTY2hlZHVsZSBpcyBhc3NvY2lhdGVkIHdpdGggYWNjb3VudCBhbmQgb3B0aW9uYWxseSB3aXRoIGZvbGRlciBhbmQgbXVsdGlwbGUgc2NoZWR1bGVzIGNhbiBiZSBzcGVjaWZpZWQuXG4gICBXaGVuIGRlZmluaW5nIGEgcnVsZSwgaXQgY2FuIGJlIHNjaGVkdWxlZCBieSBvbmUgb2YgdGhlIHNjaGVkdWxlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHNlbnNvcidzIGZvbGRlciwgaXQncyBwYXJlbnQgZm9sZGVyLCBpdCdzIHBhcmVudCdzIHBhcmVudCBmb2xkZXIgYW5kIHNvIG9uIHVwIHRvIHRoZSBhY2NvdW50IFxuKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBJZCAodXNlIGVtcHR5IHN0cmluZyB0byBhc3NvY2lhdGUgdGhlIHNjaGVkdWxlIHRvIHRoZSBhY2NvdW50IGxldmVsKSBcbiAgICBwdWJsaWMgZm9sZGVySWQ6IHN0cmluZztcbiBcbiAgICAvLyBTY2hlZHVsZSBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU2NoZWR1bGUgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gSXMgdGhpcyBzY2hlZHVsZSBpcyBlbmFibGVkIFxuICAgIHB1YmxpYyBlbmFibGVkOiBib29sZWFuO1xuIFxuICAgIC8vIEFjY291bnQgdGltZXpvbmUgKElBTkEgZm9ybWF0LCBkZWZhdWx0IGlzIFVUQykgXG4gICAgcHVibGljIHRpbWV6b25lOiBzdHJpbmc7XG4gXG4gICAgLy8gTGlzdCBvZiB0aW1lIGZyYW1lcyBcbiAgICBwdWJsaWMgdGltZUZyYW1lczogUmVjdXJyZW50VGltZUZyYW1lW107XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcblxufVxuXG5cbiJdfQ==