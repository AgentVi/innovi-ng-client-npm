/*
*/
export class SysApplianceBatchUpgradeFindRequest {
    constructor(accountId, applianceId, userId, commandId, batchId, from, to, sort, page, pageSize) {
        this.accountId = accountId;
        this.applianceId = applianceId;
        this.userId = userId;
        this.commandId = commandId;
        this.batchId = batchId;
        this.from = from;
        this.to = to;
        this.sort = sort;
        this.page = page;
        this.pageSize = pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3lzQXBwbGlhbmNlQmF0Y2hVcGdyYWRlRmluZFJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1N5c0FwcGxpYW5jZUJhdGNoVXBncmFkZUZpbmRSZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7QUFDRixNQUFNLE9BQU8sbUNBQW1DO0lBZ0M1QyxZQUFZLFNBQWtCLEVBQUUsV0FBb0IsRUFBRSxNQUFlLEVBQUUsU0FBa0IsRUFBRSxPQUFnQixFQUFFLElBQWEsRUFBRSxFQUFXLEVBQUUsSUFBYSxFQUFFLElBQWEsRUFBRSxRQUFpQjtRQUNwTCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogIFxuKi9cbmV4cG9ydCBjbGFzcyBTeXNBcHBsaWFuY2VCYXRjaFVwZ3JhZGVGaW5kUmVxdWVzdCB7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IGFjY291bnQgaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGFjY291bnRJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBhcHBsaWFuY2UgaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGFwcGxpYW5jZUlkOiBzdHJpbmc7XG4gXG4gICAgLy8gRmlsdGVyIGJ5IHVzZXIgaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIHVzZXJJZDogc3RyaW5nO1xuIFxuICAgIC8vIEZpbHRlciBieSBjb21tYW5kIGlkIChlbXB0eSBtZWFucyBubyBmaWx0ZXIpIFxuICAgIHB1YmxpYyBjb21tYW5kSWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYnkgYmF0Y2ggaWQgKGVtcHR5IG1lYW5zIG5vIGZpbHRlcikgXG4gICAgcHVibGljIGJhdGNoSWQ6IHN0cmluZztcbiBcbiAgICAvLyBGaWx0ZXIgYWZ0ZXIgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgZnJvbTogbnVtYmVyO1xuIFxuICAgIC8vIEZpbHRlciBiZWZvcmUgdGhlIHByb3ZpZGVkIHRpbWVzdGFtcCAoZXBvY2ggbWlsbGlzZWNvbmRzKSBcbiAgICBwdWJsaWMgdG86IG51bWJlcjtcbiBcbiAgICAvLyBTb3J0IGJ5IGZpZWxkIGFuZCBkaXJlY3Rpb246IChlLmcuIHRpbWUrID0gc29ydCBieSB0aW1lIGFzYywgaWQtID0gc29ydCBieSBpZCBkZXNjKSBcbiAgICBwdWJsaWMgc29ydDogc3RyaW5nO1xuIFxuICAgIC8vIFBhZ2UgbnVtYmVyIChmb3IgcGFnaW5hdGlvbikgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgKGZvciBwYWdpbmF0aW9uKSBcbiAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihhY2NvdW50SWQ/OiBzdHJpbmcsIGFwcGxpYW5jZUlkPzogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcsIGNvbW1hbmRJZD86IHN0cmluZywgYmF0Y2hJZD86IHN0cmluZywgZnJvbT86IG51bWJlciwgdG8/OiBudW1iZXIsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5hcHBsaWFuY2VJZCA9IGFwcGxpYW5jZUlkO1xuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXJJZDtcbiAgICAgICAgdGhpcy5jb21tYW5kSWQgPSBjb21tYW5kSWQ7XG4gICAgICAgIHRoaXMuYmF0Y2hJZCA9IGJhdGNoSWQ7XG4gICAgICAgIHRoaXMuZnJvbSA9IGZyb207XG4gICAgICAgIHRoaXMudG8gPSB0bztcbiAgICAgICAgdGhpcy5zb3J0ID0gc29ydDtcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5wYWdlU2l6ZSA9IHBhZ2VTaXplO1xuICAgIH1cblxufVxuXG5cbiJdfQ==