import { BaseEntity } from '../entities/BaseEntity';
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
export class Account extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXBEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLE9BQVEsU0FBUSxVQUFVO0NBNER0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRUeXBlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRUeXBlQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50U3RhdHVzQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRTdGF0dXNDb2RlJztcbmltcG9ydCB7IENvb3JkaW5hdGUgfSBmcm9tICcuLi9jb21tb24vQ29vcmRpbmF0ZSc7XG5pbXBvcnQgeyBBY2NvdW50U2V0dGluZ3MgfSBmcm9tICcuLi9jb21tb24vQWNjb3VudFNldHRpbmdzJztcbmltcG9ydCB7IEhlYWx0aFRocmVzaG9sZHMgfSBmcm9tICcuLi9jb21tb24vSGVhbHRoVGhyZXNob2xkcyc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5cbi8qIFxuICAgQWNjb3VudCBlbnRpdHkgaW4gdGhlIHN5c3RlbSByZXByZXNlbnRzIGN1c3RvbWVyIGFjY291bnQgd2hpY2ggZ3JvdXBzIHNldCBvZiBmb2xkZXJzLCBjYW1lcmFzLCBydWxlcywgaW50ZWdyYXRpb25zIGFuZCBjdXN0b21lciBzcGVjaWZpYyBvcGVyYXRpb25hbCBjb25maWd1cmF0aW9uIFxuKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gQWNjb3VudCBuYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBrZXkgXG4gICAgcHVibGljIGtleTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgVHlwZTogVU5ERUZJTkVEIHwgREVNTyB8IFRSSUFMIHwgUEFSVE5FUiB8IENVU1RPTUVSIFxuICAgIHB1YmxpYyB0eXBlOiBBY2NvdW50VHlwZUNvZGU7XG4gXG4gICAgLy8gQWNjb3VudCBzdGF0dXM6IFVOREVGSU5FRCB8IEFDVElWRSB8IFNVU1BFTkRFRCBcbiAgICBwdWJsaWMgc3RhdHVzOiBBY2NvdW50U3RhdHVzQ29kZTtcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdhcyBzdXNwZW5kZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIHNlY29uZCBpbmxpbmUgZmllbGQgZG9jdW1lbnRhdGlvbiBcbiAgICBwdWJsaWMgc3VzcGVuZGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaXN0IG9mIGFzc29jaWF0ZWQgYWNjb3VudCBncm91cHMgKGZvciBmZWF0dXJlIHRvZ2dsZSkgXG4gICAgcHVibGljIGdyb3Vwczogc3RyaW5nW107XG4gXG4gICAgLy8gQWNjb3VudCBnZW8gYXJlYSBwb2x5Z29uICh0aGUgYm91bmRpbmcgcG9seWdvbiBvZiB0aGUgYXJlYSkgXG4gICAgcHVibGljIGdlb0FyZWE6IENvb3JkaW5hdGVbXTtcbiBcbiAgICAvLyBBY2NvdW50IGdlbyBsb2NhdGlvbiAodGhlIGNlbnRlciBjb29yZGluYXRlIG9mIHRoZSBhY2NvdW50IHJlZ2lvbikgXG4gICAgcHVibGljIGdlb0xvY2F0aW9uOiBDb29yZGluYXRlO1xuIFxuICAgIC8vIEFjY291bnQgdGltZXpvbmUgKElBTkEgZm9ybWF0LCBkZWZhdWx0IGlzIFVUQykgXG4gICAgcHVibGljIHRpbWV6b25lOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3aWxsIGJlIGV4cGlyZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdICgwIG1lYW5zIG5vIGV4cGlyYXRpb24gdGltZSkgXG4gICAgcHVibGljIGV4cGlyZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIExpbWl0IHRoZSBudW1iZXIgb2YgY2hhbm5lbHMgcGVyIGFjY291bnQgKDAgbWVhbnMgbm8gbGltaXQpIFxuICAgIHB1YmxpYyBtYXhDaGFubmVsczogbnVtYmVyO1xuIFxuICAgIC8vIEFjY291bnQgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBzcGVjaWZpYyBzZXR0aW5ncyBcbiAgICBwdWJsaWMgc2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncztcbiBcbiAgICAvLyBIZWFsdGggbm90aWZpY2F0aW9ucyB0aHJlc2hvbGRzIGZvciBzZW5zb3JzIGFuZCBhcHBsaWFuY2VzIFxuICAgIHB1YmxpYyBoZWFsdGhUaHJlc2hvbGRzOiBIZWFsdGhUaHJlc2hvbGRzO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBFbnRpdHkgcGF0aCBpbiB0aGUgaGllcmFyY2h5IFxuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG4gXG5cbn1cblxuXG4iXX0=