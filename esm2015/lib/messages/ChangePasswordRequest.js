/*
   Change Password request message
*/
export class ChangePasswordRequest {
    constructor(userId, oldPassword, newPassword) {
        this.userId = userId;
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9tZXNzYWdlcy9DaGFuZ2VQYXNzd29yZFJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0VBRUU7QUFDRixNQUFNLE9BQU8scUJBQXFCO0lBVzlCLFlBQVksTUFBZSxFQUFFLFdBQW9CLEVBQUUsV0FBb0I7UUFDbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIENoYW5nZSBQYXNzd29yZCByZXF1ZXN0IG1lc3NhZ2UgXG4qL1xuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkUmVxdWVzdCB7XG4gXG4gICAgLy8gVXNlciBJZCBcbiAgICBwdWJsaWMgdXNlcklkOiBzdHJpbmc7XG4gXG4gICAgLy8gT2xkIFBhc3N3b3JkIFxuICAgIHB1YmxpYyBvbGRQYXNzd29yZDogc3RyaW5nO1xuIFxuICAgIC8vIE5ldyBQYXNzd29yZCBcbiAgICBwdWJsaWMgbmV3UGFzc3dvcmQ6IHN0cmluZztcbiBcbiAgICBjb25zdHJ1Y3Rvcih1c2VySWQ/OiBzdHJpbmcsIG9sZFBhc3N3b3JkPzogc3RyaW5nLCBuZXdQYXNzd29yZD86IHN0cmluZykgeyBcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMub2xkUGFzc3dvcmQgPSBvbGRQYXNzd29yZDtcbiAgICAgICAgdGhpcy5uZXdQYXNzd29yZCA9IG5ld1Bhc3N3b3JkO1xuICAgIH1cblxufVxuXG5cbiJdfQ==