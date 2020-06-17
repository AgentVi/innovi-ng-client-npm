import { BaseEntity } from '../entities/BaseEntity';
/*
   Folder (container for sensors and sub folders)
*/
export class Folder extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW50aXRpZXMvRm9sZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdwRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxNQUFPLFNBQVEsVUFBVTtDQTZDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFsdGhUaHJlc2hvbGRzIH0gZnJvbSAnLi4vY29tbW9uL0hlYWx0aFRocmVzaG9sZHMnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcblxuLyogXG4gICBGb2xkZXIgKGNvbnRhaW5lciBmb3Igc2Vuc29ycyBhbmQgc3ViIGZvbGRlcnMpIFxuKi9cbmV4cG9ydCBjbGFzcyBGb2xkZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBGb2xkZXIgcGFyZW50IElkIChFbXB0eSBpZiBmb2xkZXIgaXMgaW4gdGhlIHJvb3QpIFxuICAgIHB1YmxpYyBwYXJlbnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgSWQgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZvbGRlciBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIGV4dGVybmFsIGlkIChob3cgdGhlIGZvbGRlciBpcyBpZGVudGlmaWVkIGluIG90aGVyIHN5c3RlbXMpIFxuICAgIHB1YmxpYyBleHRlcm5hbElkOiBzdHJpbmc7XG4gXG4gICAgLy8gRm9sZGVyIGhpZXJhcmNoeSBkZXB0aCBcbiAgICBwdWJsaWMgZGVwdGg6IG51bWJlcjtcbiBcbiAgICAvLyBGb2xkZXIgcGF0aCBpbiB0aGUgYWNjb3VudCBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcbiAgICAvLyBGb2xkZXIgZ2VvIGFyZWEgcG9seWdvbiAodGhlIGJvdW5kaW5nIHBvbHlnb24gb2YgdGhlIGFyZWEpIFxuICAgIHB1YmxpYyBnZW9BcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gRm9sZGVyIGdlbyBsb2NhdGlvbiAodGhlIGNlbnRlciBjb29yZGluYXRlIG9mIHRoZSBhY2NvdW50IHJlZ2lvbikgXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIEZvbGRlciB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICBwdWJsaWMgdGltZXpvbmU6IHN0cmluZztcbiBcbiAgICAvLyBIZWFsdGggbm90aWZpY2F0aW9ucyB0aHJlc2hvbGRzIGZvciBzZW5zb3JzIGFuZCBhcHBsaWFuY2VzIFxuICAgIHB1YmxpYyBoZWFsdGhUaHJlc2hvbGRzOiBIZWFsdGhUaHJlc2hvbGRzO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==