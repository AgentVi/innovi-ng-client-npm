import { BaseEntity } from '../entities/BaseEntity';
/*
   Folder (container for sensors and sub folders)
*/
export class Folder extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUtwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxNQUFPLFNBQVEsVUFBVTtDQWdEckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuaW1wb3J0IHsgSGVhbHRoVGhyZXNob2xkcyB9IGZyb20gJy4uL2NvbW1vbi9IZWFsdGhUaHJlc2hvbGRzJztcbmltcG9ydCB7IFRpbWVGcmFtZSB9IGZyb20gJy4uL2NvbW1vbi9UaW1lRnJhbWUnO1xuXG4vKiBcbiAgIEZvbGRlciAoY29udGFpbmVyIGZvciBzZW5zb3JzIGFuZCBzdWIgZm9sZGVycykgXG4qL1xuZXhwb3J0IGNsYXNzIEZvbGRlciBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEZvbGRlciBwYXJlbnQgSWQgKEVtcHR5IGlmIGZvbGRlciBpcyBpbiB0aGUgcm9vdCkgXG4gICAgcHVibGljIHBhcmVudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBJZCBcbiAgICBwdWJsaWMgYWNjb3VudElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgZXh0ZXJuYWwgaWQgKGhvdyB0aGUgZm9sZGVyIGlzIGlkZW50aWZpZWQgaW4gb3RoZXIgc3lzdGVtcykgXG4gICAgcHVibGljIGV4dGVybmFsSWQ6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgaGllcmFyY2h5IGRlcHRoIFxuICAgIHB1YmxpYyBkZXB0aDogbnVtYmVyO1xuIFxuICAgIC8vIEZvbGRlciBwYXRoIGluIHRoZSBhY2NvdW50IGhpZXJhcmNoeSBcbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBnZW8gYXJlYSBwb2x5Z29uICh0aGUgYm91bmRpbmcgcG9seWdvbiBvZiB0aGUgYXJlYSkgXG4gICAgcHVibGljIGdlb0FyZWE6IENvb3JkaW5hdGVbXTtcbiBcbiAgICAvLyBGb2xkZXIgZ2VvIGxvY2F0aW9uICh0aGUgY2VudGVyIGNvb3JkaW5hdGUgb2YgdGhlIGFjY291bnQgcmVnaW9uKSBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gRm9sZGVyIHRpbWV6b25lIChJQU5BIGZvcm1hdCwgZGVmYXVsdCBpcyBVVEMpIFxuICAgIHB1YmxpYyB0aW1lem9uZTogc3RyaW5nO1xuIFxuICAgIC8vIEhlYWx0aCBub3RpZmljYXRpb25zIHRocmVzaG9sZHMgZm9yIHNlbnNvcnMgYW5kIGFwcGxpYW5jZXMgXG4gICAgcHVibGljIGhlYWx0aFRocmVzaG9sZHM6IEhlYWx0aFRocmVzaG9sZHM7XG4gXG4gICAgLy8gSW5hY3RpdmUgYW5hbHl0aWNzIGZvciBhbGwgc2Vuc29ycyBmb3IgdGhlIHNwZWNpZmllZCB0aW1lIGZyYW1lIFxuICAgIHB1YmxpYyBzaHVudDogVGltZUZyYW1lO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==