/*
   Base entity includes common fields for all entities (persistence objects) in the system
*/
export class BaseEntity {
    constructor(id, docType, createdOn, updatedOn, path) {
        this.id = id;
        this._type = docType;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.path = path;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW50aXRpZXMvQmFzZUVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxVQUFVO0lBaUJuQixZQUFZLEVBQVcsRUFBRSxPQUFnQixFQUFFLFNBQWtCLEVBQUUsU0FBa0IsRUFBRSxJQUFhO1FBQzVGLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIEJhc2UgZW50aXR5IGluY2x1ZGVzIGNvbW1vbiBmaWVsZHMgZm9yIGFsbCBlbnRpdGllcyAocGVyc2lzdGVuY2Ugb2JqZWN0cykgaW4gdGhlIHN5c3RlbSBcbiovXG5leHBvcnQgY2xhc3MgQmFzZUVudGl0eSB7XG4gXG4gICAgLy8gRW50aXR5IElkIFxuICAgIHB1YmxpYyBpZDogc3RyaW5nO1xuIFxuICAgIC8vIEVudGl0eSBkb2N1bWVudCB0eXBlIChzeXN0ZW0gZmllbGQpIFxuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgY3JlYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIGNyZWF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIFdoZW4gdGhlIGVudGl0eSB3YXMgdXBkYXRlZCBbRXBvY2ggbWlsbGlzZWNvbmRzIFRpbWVzdGFtcF0gXG4gICAgcHVibGljIHVwZGF0ZWRPbjogbnVtYmVyO1xuIFxuICAgIC8vIEVudGl0eSBwYXRoIGluIHRoZSBoaWVyYXJjaHkgXG4gICAgcHVibGljIHBhdGg6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZywgZG9jVHlwZT86IHN0cmluZywgY3JlYXRlZE9uPzogbnVtYmVyLCB1cGRhdGVkT24/OiBudW1iZXIsIHBhdGg/OiBzdHJpbmcpIHsgXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5fdHlwZSA9IGRvY1R5cGU7XG4gICAgICAgIHRoaXMuY3JlYXRlZE9uID0gY3JlYXRlZE9uO1xuICAgICAgICB0aGlzLnVwZGF0ZWRPbiA9IHVwZGF0ZWRPbjtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB9XG5cbn1cblxuXG4iXX0=