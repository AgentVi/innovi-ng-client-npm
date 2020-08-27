import { __extends } from "tslib";
import { BaseEntity } from '../entities/BaseEntity';
/*
   Account entity in the system represents customer account which groups set of folders, cameras, rules, integrations and customer specific operational configuration
*/
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Account;
}(BaseEntity));
export { Account };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudGl0aWVzL0FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUtwRDs7RUFFRTtBQUNGO0lBQTZCLDJCQUFVO0lBQXZDOztJQXlEQSxDQUFDO0lBQUQsY0FBQztBQUFELENBQUMsQUF6REQsQ0FBNkIsVUFBVSxHQXlEdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY2NvdW50U2V0dGluZ3MgfSBmcm9tICcuLi9jb21tb24vQWNjb3VudFNldHRpbmdzJztcbmltcG9ydCB7IEhlYWx0aFRocmVzaG9sZHMgfSBmcm9tICcuLi9jb21tb24vSGVhbHRoVGhyZXNob2xkcyc7XG5pbXBvcnQgeyBCYXNlRW50aXR5IH0gZnJvbSAnLi4vZW50aXRpZXMvQmFzZUVudGl0eSc7XG5pbXBvcnQgeyBBY2NvdW50VHlwZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50VHlwZUNvZGUnO1xuaW1wb3J0IHsgQWNjb3VudFN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50U3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBDb29yZGluYXRlIH0gZnJvbSAnLi4vY29tbW9uL0Nvb3JkaW5hdGUnO1xuXG4vKiBcbiAgIEFjY291bnQgZW50aXR5IGluIHRoZSBzeXN0ZW0gcmVwcmVzZW50cyBjdXN0b21lciBhY2NvdW50IHdoaWNoIGdyb3VwcyBzZXQgb2YgZm9sZGVycywgY2FtZXJhcywgcnVsZXMsIGludGVncmF0aW9ucyBhbmQgY3VzdG9tZXIgc3BlY2lmaWMgb3BlcmF0aW9uYWwgY29uZmlndXJhdGlvbiBcbiovXG5leHBvcnQgY2xhc3MgQWNjb3VudCBleHRlbmRzIEJhc2VFbnRpdHkge1xuIFxuICAgIC8vIEFjY291bnQgbmFtZSBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQga2V5IFxuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiBcbiAgICAvLyBBY2NvdW50IFR5cGU6IFVOREVGSU5FRCB8IERFTU8gfCBUUklBTCB8IFBBUlRORVIgfCBDVVNUT01FUiBcbiAgICBwdWJsaWMgdHlwZTogQWNjb3VudFR5cGVDb2RlO1xuIFxuICAgIC8vIEFjY291bnQgc3RhdHVzOiBVTkRFRklORUQgfCBBQ1RJVkUgfCBTVVNQRU5ERUQgXG4gICAgcHVibGljIHN0YXR1czogQWNjb3VudFN0YXR1c0NvZGU7XG4gXG4gICAgLy8gV2hlbiB0aGUgYWNjb3VudCB3YXMgc3VzcGVuZGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBzZWNvbmQgaW5saW5lIGZpZWxkIGRvY3VtZW50YXRpb24gXG4gICAgcHVibGljIHN1c3BlbmRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gTGlzdCBvZiBhc3NvY2lhdGVkIGFjY291bnQgZ3JvdXBzIChmb3IgZmVhdHVyZSB0b2dnbGUpIFxuICAgIHB1YmxpYyBncm91cHM6IHN0cmluZ1tdO1xuIFxuICAgIC8vIEFjY291bnQgZ2VvIGFyZWEgcG9seWdvbiAodGhlIGJvdW5kaW5nIHBvbHlnb24gb2YgdGhlIGFyZWEpIFxuICAgIHB1YmxpYyBnZW9BcmVhOiBDb29yZGluYXRlW107XG4gXG4gICAgLy8gQWNjb3VudCBnZW8gbG9jYXRpb24gKHRoZSBjZW50ZXIgY29vcmRpbmF0ZSBvZiB0aGUgYWNjb3VudCByZWdpb24pIFxuICAgIHB1YmxpYyBnZW9Mb2NhdGlvbjogQ29vcmRpbmF0ZTtcbiBcbiAgICAvLyBBY2NvdW50IHRpbWV6b25lIChJQU5BIGZvcm1hdCwgZGVmYXVsdCBpcyBVVEMpIFxuICAgIHB1YmxpYyB0aW1lem9uZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGFjY291bnQgd2lsbCBiZSBleHBpcmVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSAoMCBtZWFucyBubyBleHBpcmF0aW9uIHRpbWUpIFxuICAgIHB1YmxpYyBleHBpcmVkT246IG51bWJlcjtcbiBcbiAgICAvLyBMaW1pdCB0aGUgbnVtYmVyIG9mIGNoYW5uZWxzIHBlciBhY2NvdW50ICgwIG1lYW5zIG5vIGxpbWl0KSBcbiAgICBwdWJsaWMgbWF4Q2hhbm5lbHM6IG51bWJlcjtcbiBcbiAgICAvLyBBY2NvdW50IGRlc2NyaXB0aW9uIFxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xuIFxuICAgIC8vIEFjY291bnQgc3BlY2lmaWMgc2V0dGluZ3MgXG4gICAgcHVibGljIHNldHRpbmdzOiBBY2NvdW50U2V0dGluZ3M7XG4gXG4gICAgLy8gSGVhbHRoIG5vdGlmaWNhdGlvbnMgdGhyZXNob2xkcyBmb3Igc2Vuc29ycyBhbmQgYXBwbGlhbmNlcyBcbiAgICBwdWJsaWMgaGVhbHRoVGhyZXNob2xkczogSGVhbHRoVGhyZXNob2xkcztcbiBcbiAgICAvLyBFbnRpdHkgSWQgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRW50aXR5IGRvY3VtZW50IHR5cGUgKHN5c3RlbSBmaWVsZCkgXG4gICAgcHVibGljIF90eXBlOiBzdHJpbmc7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyBjcmVhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgY3JlYXRlZE9uOiBudW1iZXI7XG4gXG4gICAgLy8gV2hlbiB0aGUgZW50aXR5IHdhcyB1cGRhdGVkIFtFcG9jaCBtaWxsaXNlY29uZHMgVGltZXN0YW1wXSBcbiAgICBwdWJsaWMgdXBkYXRlZE9uOiBudW1iZXI7XG4gXG5cbn1cblxuXG4iXX0=