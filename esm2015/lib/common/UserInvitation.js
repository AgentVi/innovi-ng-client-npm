/*
   User invitation data model - used by account admin to invite user to the account
*/
export class UserInvitation {
    constructor(email, role) {
        this.email = email;
        this.role = role;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckludml0YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9Vc2VySW52aXRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7RUFFRTtBQUNGLE1BQU0sT0FBTyxjQUFjO0lBUXZCLFlBQVksS0FBYyxFQUFFLElBQXNCO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5cbi8qIFxuICAgVXNlciBpbnZpdGF0aW9uIGRhdGEgbW9kZWwgLSB1c2VkIGJ5IGFjY291bnQgYWRtaW4gdG8gaW52aXRlIHVzZXIgdG8gdGhlIGFjY291bnQgXG4qL1xuZXhwb3J0IGNsYXNzIFVzZXJJbnZpdGF0aW9uIHtcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgcm9sZSBpbiB0aGUgYWNjb3VudCBcbiAgICBwdWJsaWMgcm9sZTogQWNjb3VudFJvbGVDb2RlO1xuIFxuICAgIGNvbnN0cnVjdG9yKGVtYWlsPzogc3RyaW5nLCByb2xlPzogQWNjb3VudFJvbGVDb2RlKSB7IFxuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHRoaXMucm9sZSA9IHJvbGU7XG4gICAgfVxuXG59XG5cblxuIl19