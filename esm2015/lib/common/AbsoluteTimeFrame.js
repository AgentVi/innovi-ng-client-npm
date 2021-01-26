/*
   Schedule time frame
   Times are described in ISO 8601 format (See: https://www.w3.org/TR/NOTE-datetime).
   The format is: YYYY-MM-DDThh:mm:ssTZD where:
   <ul>
   <li>YYYY = four-digit year</li>
   <li>MM   = two-digit month (01=January, etc.)</li>
   <li>DD   = two-digit day of month (01 through 31)</li>
   <li>hh   = two digits of hour (00 through 23) (am/pm NOT allowed)</li>
   <li>mm   = two digits of minute (00 through 59)</li>
   <li>ss   = two digits of second (00 through 59)
   <li>TZD  = time zone designator (Z for UTC or +hh:mm or -hh:mm for Timezone offset)</li>
   </ul>
*/
export class AbsoluteTimeFrame {
    constructor(name, startTime, endTime, active) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.active = active;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzb2x1dGVUaW1lRnJhbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9BYnNvbHV0ZVRpbWVGcmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7Ozs7Ozs7Ozs7OztFQWFFO0FBQ0YsTUFBTSxPQUFPLGlCQUFpQjtJQWMxQixZQUFZLElBQWEsRUFBRSxTQUFrQixFQUFFLE9BQWdCLEVBQUUsTUFBZ0I7UUFDN0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIFNjaGVkdWxlIHRpbWUgZnJhbWVcbiAgIFRpbWVzIGFyZSBkZXNjcmliZWQgaW4gSVNPIDg2MDEgZm9ybWF0IChTZWU6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lKS5cbiAgIFRoZSBmb3JtYXQgaXM6IFlZWVktTU0tRERUaGg6bW06c3NUWkQgd2hlcmU6XG4gICA8dWw+XG4gICA8bGk+WVlZWSA9IGZvdXItZGlnaXQgeWVhcjwvbGk+XG4gICA8bGk+TU0gICA9IHR3by1kaWdpdCBtb250aCAoMDE9SmFudWFyeSwgZXRjLik8L2xpPlxuICAgPGxpPkREICAgPSB0d28tZGlnaXQgZGF5IG9mIG1vbnRoICgwMSB0aHJvdWdoIDMxKTwvbGk+XG4gICA8bGk+aGggICA9IHR3byBkaWdpdHMgb2YgaG91ciAoMDAgdGhyb3VnaCAyMykgKGFtL3BtIE5PVCBhbGxvd2VkKTwvbGk+XG4gICA8bGk+bW0gICA9IHR3byBkaWdpdHMgb2YgbWludXRlICgwMCB0aHJvdWdoIDU5KTwvbGk+XG4gICA8bGk+c3MgICA9IHR3byBkaWdpdHMgb2Ygc2Vjb25kICgwMCB0aHJvdWdoIDU5KVxuICAgPGxpPlRaRCAgPSB0aW1lIHpvbmUgZGVzaWduYXRvciAoWiBmb3IgVVRDIG9yICtoaDptbSBvciAtaGg6bW0gZm9yIFRpbWV6b25lIG9mZnNldCk8L2xpPlxuICAgPC91bD4gXG4qL1xuZXhwb3J0IGNsYXNzIEFic29sdXRlVGltZUZyYW1lIHtcbiBcbiAgICAvLyBOYW1lIG9mIHRpbWUgZnJhbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBTdGFydCB0aW1lIGluIHRoZSBJU08tODYwMSBmb3JtYXQgKFlZWVktTU0tRERUaGg6bW06c3NUWkQpIFxuICAgIHB1YmxpYyBzdGFydFRpbWU6IHN0cmluZztcbiBcbiAgICAvLyBFbmQgdGltZSBpbiB0aGUgSVNPLTg2MDEgZm9ybWF0IChZWVlZLU1NLUREVGhoOm1tOnNzVFpEKSBcbiAgICBwdWJsaWMgZW5kVGltZTogc3RyaW5nO1xuIFxuICAgIC8vIFNwZWNpZnkgaWYgdGhpcyB0aW1lIGZyYW1lIGlzIGFjdGl2ZSBcbiAgICBwdWJsaWMgYWN0aXZlOiBib29sZWFuO1xuIFxuICAgIGNvbnN0cnVjdG9yKG5hbWU/OiBzdHJpbmcsIHN0YXJ0VGltZT86IHN0cmluZywgZW5kVGltZT86IHN0cmluZywgYWN0aXZlPzogYm9vbGVhbikgeyBcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGVuZFRpbWU7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xuICAgIH1cblxufVxuXG5cbiJdfQ==