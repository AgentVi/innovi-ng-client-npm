import { BaseEntity } from '../entities/BaseEntity';
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
export class Account extends BaseEntity {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBS3BEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLE9BQVEsU0FBUSxVQUFVO0NBc0R0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRTZXR0aW5ncyB9IGZyb20gJy4uL2NvbW1vbi9BY2NvdW50U2V0dGluZ3MnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4uL2VudGl0aWVzL0Jhc2VFbnRpdHknO1xuaW1wb3J0IHsgQWNjb3VudFR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFR5cGVDb2RlJztcbmltcG9ydCB7IEFjY291bnRTdGF0dXNDb2RlIH0gZnJvbSAnLi4vZW51bXMvQWNjb3VudFN0YXR1c0NvZGUnO1xuaW1wb3J0IHsgQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2NvbW1vbi9Db29yZGluYXRlJztcblxuLyogXG4gICBBY2NvdW50IGVudGl0eSBpbiB0aGUgc3lzdGVtIHJlcHJlc2VudHMgY3VzdG9tZXIgYWNjb3VudCB3aGljaCBncm91cHMgc2V0IG9mIGZvbGRlcnMsIGNhbWVyYXMsIHJ1bGVzLCBpbnRlZ3JhdGlvbnMgYW5kIGN1c3RvbWVyIHNwZWNpZmljIG9wZXJhdGlvbmFsIGNvbmZpZ3VyYXRpb24gXG4qL1xuZXhwb3J0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiBcbiAgICAvLyBBY2NvdW50IG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IGtleSBcbiAgICBwdWJsaWMga2V5OiBzdHJpbmc7XG4gXG4gICAgLy8gQWNjb3VudCBUeXBlOiBVTkRFRklORUQgfCBERU1PIHwgVFJJQUwgfCBQQVJUTkVSIHwgQ1VTVE9NRVIgXG4gICAgcHVibGljIHR5cGU6IEFjY291bnRUeXBlQ29kZTtcbiBcbiAgICAvLyBBY2NvdW50IHN0YXR1czogVU5ERUZJTkVEIHwgQUNUSVZFIHwgU1VTUEVOREVEIFxuICAgIHB1YmxpYyBzdGF0dXM6IEFjY291bnRTdGF0dXNDb2RlO1xuIFxuICAgIC8vIFdoZW4gdGhlIGFjY291bnQgd2FzIHN1c3BlbmRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gc2Vjb25kIGlubGluZSBmaWVsZCBkb2N1bWVudGF0aW9uIFxuICAgIHB1YmxpYyBzdXNwZW5kZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIExpc3Qgb2YgYXNzb2NpYXRlZCBhY2NvdW50IGdyb3VwcyAoZm9yIGZlYXR1cmUgdG9nZ2xlKSBcbiAgICBwdWJsaWMgZ3JvdXBzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBBY2NvdW50IGdlbyBhcmVhIHBvbHlnb24gKHRoZSBib3VuZGluZyBwb2x5Z29uIG9mIHRoZSBhcmVhKSBcbiAgICBwdWJsaWMgZ2VvQXJlYTogQ29vcmRpbmF0ZVtdO1xuIFxuICAgIC8vIEFjY291bnQgZ2VvIGxvY2F0aW9uICh0aGUgY2VudGVyIGNvb3JkaW5hdGUgb2YgdGhlIGFjY291bnQgcmVnaW9uKSBcbiAgICBwdWJsaWMgZ2VvTG9jYXRpb246IENvb3JkaW5hdGU7XG4gXG4gICAgLy8gQWNjb3VudCB0aW1lem9uZSAoSUFOQSBmb3JtYXQsIGRlZmF1bHQgaXMgVVRDKSBcbiAgICBwdWJsaWMgdGltZXpvbmU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBhY2NvdW50IHdpbGwgYmUgZXhwaXJlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gKDAgbWVhbnMgbm8gZXhwaXJhdGlvbiB0aW1lKSBcbiAgICBwdWJsaWMgZXhwaXJlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTGltaXQgdGhlIG51bWJlciBvZiBjaGFubmVscyBwZXIgYWNjb3VudCAoMCBtZWFucyBubyBsaW1pdCkgXG4gICAgcHVibGljIG1heENoYW5uZWxzOiBudW1iZXI7XG4gXG4gICAgLy8gQWNjb3VudCBkZXNjcmlwdGlvbiBcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IHNwZWNpZmljIHNldHRpbmdzIFxuICAgIHB1YmxpYyBzZXR0aW5nczogQWNjb3VudFNldHRpbmdzO1xuIFxuICAgIC8vIEVudGl0eSBJZCBcbiAgICBwdWJsaWMgaWQ6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgZG9jdW1lbnQgdHlwZSAoc3lzdGVtIGZpZWxkKSBcbiAgICBwdWJsaWMgX3R5cGU6IHN0cmluZztcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIGNyZWF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyBjcmVhdGVkT246IG51bWJlcjtcbiBcbiAgICAvLyBXaGVuIHRoZSBlbnRpdHkgd2FzIHVwZGF0ZWQgW0Vwb2NoIG1pbGxpc2Vjb25kcyBUaW1lc3RhbXBdIFxuICAgIHB1YmxpYyB1cGRhdGVkT246IG51bWJlcjtcbiBcblxufVxuXG5cbiJdfQ==