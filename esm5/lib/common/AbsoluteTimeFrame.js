/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
var /*
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
AbsoluteTimeFrame = /** @class */ (function () {
    function AbsoluteTimeFrame() {
    }
    return AbsoluteTimeFrame;
}());
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
export { AbsoluteTimeFrame };
if (false) {
    /** @type {?} */
    AbsoluteTimeFrame.prototype.name;
    /** @type {?} */
    AbsoluteTimeFrame.prototype.startTime;
    /** @type {?} */
    AbsoluteTimeFrame.prototype.endTime;
    /** @type {?} */
    AbsoluteTimeFrame.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzb2x1dGVUaW1lRnJhbWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24vQWJzb2x1dGVUaW1lRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7Ozs7Ozs7Ozs7Ozs7OztJQUFBO0lBY0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQWRELElBY0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVhHLGlDQUFvQjs7SUFHcEIsc0NBQXlCOztJQUd6QixvQ0FBdUI7O0lBR3ZCLG1DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogXG4gICBTY2hlZHVsZSB0aW1lIGZyYW1lXG4gICBUaW1lcyBhcmUgZGVzY3JpYmVkIGluIElTTyA4NjAxIGZvcm1hdCAoU2VlOiBodHRwczovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZSkuXG4gICBUaGUgZm9ybWF0IGlzOiBZWVlZLU1NLUREVGhoOm1tOnNzVFpEIHdoZXJlOlxuICAgPHVsPlxuICAgPGxpPllZWVkgPSBmb3VyLWRpZ2l0IHllYXI8L2xpPlxuICAgPGxpPk1NICAgPSB0d28tZGlnaXQgbW9udGggKDAxPUphbnVhcnksIGV0Yy4pPC9saT5cbiAgIDxsaT5ERCAgID0gdHdvLWRpZ2l0IGRheSBvZiBtb250aCAoMDEgdGhyb3VnaCAzMSk8L2xpPlxuICAgPGxpPmhoICAgPSB0d28gZGlnaXRzIG9mIGhvdXIgKDAwIHRocm91Z2ggMjMpIChhbS9wbSBOT1QgYWxsb3dlZCk8L2xpPlxuICAgPGxpPm1tICAgPSB0d28gZGlnaXRzIG9mIG1pbnV0ZSAoMDAgdGhyb3VnaCA1OSk8L2xpPlxuICAgPGxpPnNzICAgPSB0d28gZGlnaXRzIG9mIHNlY29uZCAoMDAgdGhyb3VnaCA1OSlcbiAgIDxsaT5UWkQgID0gdGltZSB6b25lIGRlc2lnbmF0b3IgKFogZm9yIFVUQyBvciAraGg6bW0gb3IgLWhoOm1tIGZvciBUaW1lem9uZSBvZmZzZXQpPC9saT5cbiAgIDwvdWw+IFxuKi9cbmV4cG9ydCBjbGFzcyBBYnNvbHV0ZVRpbWVGcmFtZSB7XG4gXG4gICAgLy8gTmFtZSBvZiB0aW1lIGZyYW1lIFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gU3RhcnQgdGltZSBpbiB0aGUgSVNPLTg2MDEgZm9ybWF0IChZWVlZLU1NLUREVGhoOm1tOnNzVFpEKSBcbiAgICBwdWJsaWMgc3RhcnRUaW1lOiBzdHJpbmc7XG4gXG4gICAgLy8gRW5kIHRpbWUgaW4gdGhlIElTTy04NjAxIGZvcm1hdCAoWVlZWS1NTS1ERFRoaDptbTpzc1RaRCkgXG4gICAgcHVibGljIGVuZFRpbWU6IHN0cmluZztcbiBcbiAgICAvLyBTcGVjaWZ5IGlmIHRoaXMgdGltZSBmcmFtZSBpcyBhY3RpdmUgXG4gICAgcHVibGljIGFjdGl2ZTogYm9vbGVhbjtcbiBcbn1cblxuXG4iXX0=