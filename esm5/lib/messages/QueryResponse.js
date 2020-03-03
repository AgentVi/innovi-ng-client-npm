/*
   Query response message returned for find operation (with pagination) on multiple entities
*/
var QueryResponse = /** @class */ (function () {
    function QueryResponse(code, error, page, pageSize, pages, total, queryDef, docType) {
        this.code = code;
        this.error = error;
        this.page = page;
        this.pageSize = pageSize;
        this.pages = pages;
        this.total = total;
        this.queryDef = queryDef;
        this.docType = docType;
    }
    return QueryResponse;
}());
export { QueryResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL21lc3NhZ2VzL1F1ZXJ5UmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUU7QUFDRjtJQTBCSSx1QkFBWSxJQUFhLEVBQUUsS0FBYyxFQUFFLElBQWEsRUFBRSxRQUFpQixFQUFFLEtBQWMsRUFBRSxLQUFjLEVBQUUsUUFBaUIsRUFBRSxPQUFnQjtRQUM1SSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIFF1ZXJ5IHJlc3BvbnNlIG1lc3NhZ2UgcmV0dXJuZWQgZm9yIGZpbmQgb3BlcmF0aW9uICh3aXRoIHBhZ2luYXRpb24pIG9uIG11bHRpcGxlIGVudGl0aWVzIFxuKi9cbmV4cG9ydCBjbGFzcyBRdWVyeVJlc3BvbnNlIHtcbiBcbiAgICAvLyBFcnJvciBjb2RlICgwIGZvciBzdWNjZXNzKSBcbiAgICBwdWJsaWMgY29kZTogbnVtYmVyO1xuIFxuICAgIC8vIEVycm9yIG1lc3NhZ2UgXG4gICAgcHVibGljIGVycm9yOiBzdHJpbmc7XG4gXG4gICAgLy8gQ3VycmVudCBwYWdlIChCdWxrKSBudW1iZXIgXG4gICAgcHVibGljIHBhZ2U6IG51bWJlcjtcbiBcbiAgICAvLyBTaXplIG9mIHBhZ2UgKGl0ZW1zIGluIGJ1bGspIFxuICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xuIFxuICAgIC8vIFRvdGFsIG51bWJlciBvZiBwYWdlcyBcbiAgICBwdWJsaWMgcGFnZXM6IG51bWJlcjtcbiBcbiAgICAvLyBUb3RhbCBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIHF1ZXJ5IFxuICAgIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xuIFxuICAgIC8vIFF1ZXJ5IGRlZmluaXRpb24gc3BlYyBhcyBKc29uIHN0cmluZyBcbiAgICBwdWJsaWMgcXVlcnlEZWY6IHN0cmluZztcbiBcbiAgICAvLyBFbnRpdHkgdHlwZSBcbiAgICBwdWJsaWMgZG9jVHlwZTogc3RyaW5nO1xuIFxuICAgIGNvbnN0cnVjdG9yKGNvZGU/OiBudW1iZXIsIGVycm9yPzogc3RyaW5nLCBwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlciwgcGFnZXM/OiBudW1iZXIsIHRvdGFsPzogbnVtYmVyLCBxdWVyeURlZj86IHN0cmluZywgZG9jVHlwZT86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLnBhZ2VTaXplID0gcGFnZVNpemU7XG4gICAgICAgIHRoaXMucGFnZXMgPSBwYWdlcztcbiAgICAgICAgdGhpcy50b3RhbCA9IHRvdGFsO1xuICAgICAgICB0aGlzLnF1ZXJ5RGVmID0gcXVlcnlEZWY7XG4gICAgICAgIHRoaXMuZG9jVHlwZSA9IGRvY1R5cGU7XG4gICAgfVxuXG59XG5cblxuIl19