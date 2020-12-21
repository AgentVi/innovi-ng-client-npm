/*
*/
var SysApplianceConfigReportRequest = /** @class */ (function () {
    function SysApplianceConfigReportRequest(account, search, configId, versionId, unmatched, page, pageSize) {
        this.account = account;
        this.search = search;
        this.configId = configId;
        this.versionId = versionId;
        this.unmatched = unmatched;
        this.page = page;
        this.pageSize = pageSize;
    }
    return SysApplianceConfigReportRequest;
}());
export { SysApplianceConfigReportRequest };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzQXBwbGlhbmNlQ29uZmlnUmVwb3J0UmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1N5c0FwcGxpYW5jZUNvbmZpZ1JlcG9ydFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRTtBQUNGO0lBdUJJLHlDQUFZLE9BQWdCLEVBQUUsTUFBZSxFQUFFLFFBQWlCLEVBQUUsU0FBa0IsRUFBRSxTQUFtQixFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUN2SSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUwsc0NBQUM7QUFBRCxDQUFDLEFBakNELElBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiAgXG4qL1xuZXhwb3J0IGNsYXNzIFN5c0FwcGxpYW5jZUNvbmZpZ1JlcG9ydFJlcXVlc3Qge1xuIFxuICAgIC8vIEZpbHRlciBieSBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50OiBzdHJpbmc7XG4gXG4gICAgLy8gRnJlZSB0ZXh0IGZpbHRlciBieSBhcHBsaWFuY2UgSWQsIGFwcGxpYW5jZSBuYW1lIG9yIG1hY2hpbmUgSWQgXG4gICAgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBjb25maWd1cmF0aW9uIElkIFxuICAgIHB1YmxpYyBjb25maWdJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBjb25maWd1cmF0aW9uIHZlcnNpb24gSWQgXG4gICAgcHVibGljIHZlcnNpb25JZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbmQgZGV2aWNlcyB0aGF0IHRoZWlyIGRlc2lyZWQgY29uZmlndXJhdGlvbiBkb2Vzbid0IG1hdGNoIHRoZSBhY3R1YWwgY29uZmlndXJhdGlvbiBcbiAgICBwdWJsaWMgdW5tYXRjaGVkOiBib29sZWFuO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50Pzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGNvbmZpZ0lkPzogc3RyaW5nLCB2ZXJzaW9uSWQ/OiBzdHJpbmcsIHVubWF0Y2hlZD86IGJvb2xlYW4sIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgdGhpcy5jb25maWdJZCA9IGNvbmZpZ0lkO1xuICAgICAgICB0aGlzLnZlcnNpb25JZCA9IHZlcnNpb25JZDtcbiAgICAgICAgdGhpcy51bm1hdGNoZWQgPSB1bm1hdGNoZWQ7XG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMucGFnZVNpemUgPSBwYWdlU2l6ZTtcbiAgICB9XG5cbn1cblxuXG4iXX0=