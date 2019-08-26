/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Access token key in the local storage
/** @type {?} */
var tokenKey = 'portalAccessToken';
/** @type {?} */
var loginKey = 'portalLoginData';
/**
 * @return {?}
 */
export function getToken() {
    return localStorage.getItem(tokenKey);
}
/**
 * @param {?} token
 * @return {?}
 */
export function setToken(token) {
    localStorage.setItem(tokenKey, token);
}
/**
 * @return {?}
 */
export function removeToken() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem(loginKey);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxTdG9yYWdlLXV0aWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbInV0aWxzL2xvY2FsU3RvcmFnZS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNNLFFBQVEsR0FBRyxtQkFBbUI7O0lBQzlCLFFBQVEsR0FBRyxpQkFBaUI7Ozs7QUFFbEMsTUFBTSxVQUFVLFFBQVE7SUFDdEIsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFLO0lBQzVCLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVztJQUN6QixZQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLFlBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjY2VzcyB0b2tlbiBrZXkgaW4gdGhlIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IHRva2VuS2V5ID0gJ3BvcnRhbEFjY2Vzc1Rva2VuJztcbmNvbnN0IGxvZ2luS2V5ID0gJ3BvcnRhbExvZ2luRGF0YSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRva2VuS2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRva2VuKHRva2VuKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRva2VuS2V5LCB0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbigpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odG9rZW5LZXkpO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShsb2dpbktleSk7XG59Il19