// Access token key in the local storage
var tokenKey = 'portalAccessToken';
var loginKey = 'portalLoginData';
export function getToken() {
    return localStorage.getItem(tokenKey);
}
export function setToken(token) {
    localStorage.setItem(tokenKey, token);
}
export function removeToken() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(loginKey);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLXV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbInV0aWxzL2xvY2FsU3RvcmFnZS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3QztBQUN4QyxJQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztBQUNyQyxJQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztBQUVuQyxNQUFNLFVBQVUsUUFBUTtJQUN0QixPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELE1BQU0sVUFBVSxRQUFRLENBQUMsS0FBSztJQUM1QixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVc7SUFDekIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY2Nlc3MgdG9rZW4ga2V5IGluIHRoZSBsb2NhbCBzdG9yYWdlXG5jb25zdCB0b2tlbktleSA9ICdwb3J0YWxBY2Nlc3NUb2tlbic7XG5jb25zdCBsb2dpbktleSA9ICdwb3J0YWxMb2dpbkRhdGEnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2tlbktleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUb2tlbih0b2tlbikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0b2tlbktleSwgdG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9rZW4oKSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRva2VuS2V5KTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9naW5LZXkpO1xufSJdfQ==