/*
   Account member registration data model - used by self registered users
*/
export class MemberRegistration {
    constructor(accountId, name, email, mobile, role, groups, verifyByEmail, description) {
        this.accountId = accountId;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        this.groups = groups;
        this.verifyByEmail = verifyByEmail;
        this.description = description;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtYmVyUmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9jb21tb24vTWVtYmVyUmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLGtCQUFrQjtJQTBCM0IsWUFBWSxTQUFrQixFQUFFLElBQWEsRUFBRSxLQUFjLEVBQUUsTUFBZSxFQUFFLElBQXNCLEVBQUUsTUFBaUIsRUFBRSxhQUF1QixFQUFFLFdBQW9CO1FBQ3BLLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ25DLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY291bnRSb2xlQ29kZSB9IGZyb20gJy4uL2VudW1zL0FjY291bnRSb2xlQ29kZSc7XG5cbi8qIFxuICAgQWNjb3VudCBtZW1iZXIgcmVnaXN0cmF0aW9uIGRhdGEgbW9kZWwgLSB1c2VkIGJ5IHNlbGYgcmVnaXN0ZXJlZCB1c2VycyBcbiovXG5leHBvcnQgY2xhc3MgTWVtYmVyUmVnaXN0cmF0aW9uIHtcbiBcbiAgICAvLyBBY2NvdW50IElkIFxuICAgIHB1YmxpYyBhY2NvdW50SWQ6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIG5hbWUgXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiBcbiAgICAvLyBVc2VyIGVtYWlsIFxuICAgIHB1YmxpYyBlbWFpbDogc3RyaW5nO1xuIFxuICAgIC8vIFVzZXIgbW9iaWxlIHBob25lIG51bWJlciAoZm9yIG5vdGlmaWNhdGlvbiBhbmQgdmFsaWRhdGlvbikgXG4gICAgcHVibGljIG1vYmlsZTogc3RyaW5nO1xuIFxuICAgIC8vIE1lbWJlciByb2xlIGluIHRoZSBhY2NvdW50IFxuICAgIHB1YmxpYyByb2xlOiBBY2NvdW50Um9sZUNvZGU7XG4gXG4gICAgLy8gTGlzdCBvZiBwZXJtaXNzaW9uIGdyb3VwcyBcbiAgICBwdWJsaWMgZ3JvdXBzOiBzdHJpbmdbXTtcbiBcbiAgICAvLyBGbGFnIHRvIHNlbmQgZW1haWwgdmVyaWZpY2F0aW9uIHRvIHRoZSB1c2VyIFxuICAgIHB1YmxpYyB2ZXJpZnlCeUVtYWlsOiBib29sZWFuO1xuIFxuICAgIC8vIFVzZXIgZGVzY3JpcHRpb24gXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gXG4gICAgY29uc3RydWN0b3IoYWNjb3VudElkPzogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBlbWFpbD86IHN0cmluZywgbW9iaWxlPzogc3RyaW5nLCByb2xlPzogQWNjb3VudFJvbGVDb2RlLCBncm91cHM/OiBzdHJpbmdbXSwgdmVyaWZ5QnlFbWFpbD86IGJvb2xlYW4sIGRlc2NyaXB0aW9uPzogc3RyaW5nKSB7IFxuICAgICAgICB0aGlzLmFjY291bnRJZCA9IGFjY291bnRJZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLm1vYmlsZSA9IG1vYmlsZTtcbiAgICAgICAgdGhpcy5yb2xlID0gcm9sZTtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG4gICAgICAgIHRoaXMudmVyaWZ5QnlFbWFpbCA9IHZlcmlmeUJ5RW1haWw7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbn1cblxuXG4iXX0=