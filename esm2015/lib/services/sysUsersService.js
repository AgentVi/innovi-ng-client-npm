/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { RestUtil } from '../../utils/rest-util';
/**
 * List of all user related actions for account administrator only
 * \@RequestHeader X-API-KEY The key to identify the application (console)
 * \@RequestHeader X-ACCESS-TOKEN The token to identify the logged-in user
 */
export class SysUsersService {
    /**
     * Class constructor
     * @param {?} config
     * @param {?} rest
     */
    constructor(config, rest) {
        this.config = config;
        this.rest = rest;
        // URL to web api
        this.baseUrl = '/sys/users';
        this.baseUrl = this.config.api + this.baseUrl;
    }
    /**
     * Send invitation to a new user for the current account
     * The response includes access token valid for 20 minutes. The client side should renew the token before expiration using refresh-token method
     * \@Return: ActionResponse
     * @param {?=} body
     * @return {?}
     */
    create(body) {
        return this.rest.post(`${this.baseUrl}/sys/users/invite`, JSON.stringify(body));
    }
    /**
     * Update user
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    update(id, body) {
        return this.rest.post(`${this.baseUrl}/${id}`, JSON.stringify(body));
    }
    /**
     * Change user name
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeName(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/name`, JSON.stringify(body));
    }
    /**
     * Change user mobile
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} body
     * @return {?}
     */
    changeMobile(id, body) {
        return this.rest.put(`${this.baseUrl}/${id}/mobile`, JSON.stringify(body));
    }
    /**
     * Change user type
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} type
     * @return {?}
     */
    changeType(id, type) {
        return this.rest.put(`${this.baseUrl}/${id}/type/${type}`, null);
    }
    /**
     * Change user status
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} status
     * @return {?}
     */
    changeStatus(id, status) {
        return this.rest.put(`${this.baseUrl}/${id}/status/${status}`, null);
    }
    /**
     * Change user default account
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} accountId
     * @return {?}
     */
    changeDefaultAccount(id, accountId) {
        return this.rest.put(`${this.baseUrl}/${id}/defaultAccount/${accountId}`, null);
    }
    /**
     * Set user roles in his accounts (override previous roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    setRoles(id, roles) {
        return this.rest.post(`${this.baseUrl}/${id}/roles/`, JSON.stringify(roles));
    }
    /**
     * Update user roles in his accounts (merge with existing roles)
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @param {?=} roles
     * @return {?}
     */
    mergeRoles(id, roles) {
        return this.rest.put(`${this.baseUrl}/${id}/roles/`, JSON.stringify(roles));
    }
    /**
     * Delete user from the system
     * \@Return: ActionResponse
     * @param {?=} id
     * @return {?}
     */
    delete(id) {
        return this.rest.delete(`${this.baseUrl}/${id}`);
    }
    /**
     * Get single user by Id
     * \@Return: EntityResponse<User>
     * @param {?=} id
     * @return {?}
     */
    get(id) {
        return this.rest.get(`${this.baseUrl}/${id}`);
    }
    /**
     * Find list of users by filter
     * \@Return: QueryResponse<User>
     * @param {?=} search
     * @param {?=} type
     * @param {?=} status
     * @param {?=} sort
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    find(search, type, status, sort, page, pageSize) {
        /** @type {?} */
        const params = new Array();
        if (search != null) {
            params.push(`search=${search}`);
        }
        if (type != null) {
            params.push(`type=${type}`);
        }
        if (status != null) {
            params.push(`status=${status}`);
        }
        if (sort != null) {
            params.push(`sort=${sort}`);
        }
        if (page != null) {
            params.push(`page=${page}`);
        }
        if (pageSize != null) {
            params.push(`pageSize=${pageSize}`);
        }
        return this.rest.get(`${this.baseUrl}/`, ...params);
    }
}
SysUsersService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SysUsersService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['config',] }] },
    { type: RestUtil }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.baseUrl;
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SysUsersService.prototype.rest;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzVXNlcnNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvc3lzVXNlcnNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQWdCakQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVExQixZQUFzQyxNQUFrQixFQUFVLElBQWM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVU7O1FBTHhFLFlBQU8sR0FBRyxZQUFZLENBQUM7UUFNN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2hELENBQUM7Ozs7Ozs7O0lBUUQsTUFBTSxDQUFDLElBQXFCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7Ozs7SUFNRCxNQUFNLENBQUMsRUFBVyxFQUFFLElBQVc7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7O0lBTUQsVUFBVSxDQUFDLEVBQVcsRUFBRSxJQUFhO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLEVB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QUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQUU7UUFDbEQsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FBRTtRQUVoRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7O1lBckhGLFVBQVU7Ozs7NENBU0ksTUFBTSxTQUFDLFFBQVE7WUF4QnJCLFFBQVE7Ozs7Ozs7SUFtQmYsa0NBQStCOzs7OztJQUtuQixpQ0FBNEM7Ozs7O0lBQUUsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXN0VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Jlc3QtdXRpbCc7XG5pbXBvcnQgeyBDb3JlQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29yZS1saWIubW9kdWxlJztcblxuaW1wb3J0IHsgVXNlclN0YXR1c0NvZGUgfSBmcm9tICcuLi9lbnVtcy9Vc2VyU3RhdHVzQ29kZSc7XG5pbXBvcnQgeyBBY2NvdW50Um9sZUNvZGUgfSBmcm9tICcuLi9lbnVtcy9BY2NvdW50Um9sZUNvZGUnO1xuaW1wb3J0IHsgVXNlckludml0YXRpb24gfSBmcm9tICcuLi9jb21tb24vVXNlckludml0YXRpb24nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IHsgVXNlclR5cGVDb2RlIH0gZnJvbSAnLi4vZW51bXMvVXNlclR5cGVDb2RlJztcblxuXG4vKipcbiAqIExpc3Qgb2YgYWxsIHVzZXIgcmVsYXRlZCBhY3Rpb25zIGZvciBhY2NvdW50IGFkbWluaXN0cmF0b3Igb25seVxuICogQFJlcXVlc3RIZWFkZXIgWC1BUEktS0VZIFRoZSBrZXkgdG8gaWRlbnRpZnkgdGhlIGFwcGxpY2F0aW9uIChjb25zb2xlKVxuICogQFJlcXVlc3RIZWFkZXIgWC1BQ0NFU1MtVE9LRU4gVGhlIHRva2VuIHRvIGlkZW50aWZ5IHRoZSBsb2dnZWQtaW4gdXNlciBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN5c1VzZXJzU2VydmljZSB7XG5cbiAgLy8gVVJMIHRvIHdlYiBhcGlcbiAgcHJpdmF0ZSBiYXNlVXJsID0gJy9zeXMvdXNlcnMnO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdCgnY29uZmlnJykgcHJpdmF0ZSBjb25maWc6IENvcmVDb25maWcsIHByaXZhdGUgcmVzdDogUmVzdFV0aWwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSB0aGlzLmNvbmZpZy5hcGkgKyB0aGlzLmJhc2VVcmw7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBTZW5kIGludml0YXRpb24gdG8gYSBuZXcgdXNlciBmb3IgdGhlIGN1cnJlbnQgYWNjb3VudFxuICAgKiBUaGUgcmVzcG9uc2UgaW5jbHVkZXMgYWNjZXNzIHRva2VuIHZhbGlkIGZvciAyMCBtaW51dGVzLiBUaGUgY2xpZW50IHNpZGUgc2hvdWxkIHJlbmV3IHRoZSB0b2tlbiBiZWZvcmUgZXhwaXJhdGlvbiB1c2luZyByZWZyZXNoLXRva2VuIG1ldGhvZFxuICAgKiBAUmV0dXJuOiBBY3Rpb25SZXNwb25zZVxuICAgKi9cbiAgY3JlYXRlKGJvZHk/OiBVc2VySW52aXRhdGlvbikge1xuICAgIHJldHVybiB0aGlzLnJlc3QucG9zdChgJHt0aGlzLmJhc2VVcmx9L3N5cy91c2Vycy9pbnZpdGVgLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHVzZXJcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIHVwZGF0ZShpZD86IHN0cmluZywgYm9keT86IFVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfWAsIEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdXNlciBuYW1lXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VOYW1lKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9uYW1lYCwgSlNPTi5zdHJpbmdpZnkoYm9keSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB1c2VyIG1vYmlsZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlTW9iaWxlKGlkPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9tb2JpbGVgLCBKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgdHlwZVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgY2hhbmdlVHlwZShpZD86IHN0cmluZywgdHlwZT86IFVzZXJUeXBlQ29kZSkge1xuICAgIHJldHVybiB0aGlzLnJlc3QucHV0KGAke3RoaXMuYmFzZVVybH0vJHtpZH0vdHlwZS8ke3R5cGV9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgc3RhdHVzXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VTdGF0dXMoaWQ/OiBzdHJpbmcsIHN0YXR1cz86IFVzZXJTdGF0dXNDb2RlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9zdGF0dXMvJHtzdGF0dXN9YCwgbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHVzZXIgZGVmYXVsdCBhY2NvdW50XG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBjaGFuZ2VEZWZhdWx0QWNjb3VudChpZD86IHN0cmluZywgYWNjb3VudElkPzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdC5wdXQoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9kZWZhdWx0QWNjb3VudC8ke2FjY291bnRJZH1gLCBudWxsKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXNlciByb2xlcyBpbiBoaXMgYWNjb3VudHMgKG92ZXJyaWRlIHByZXZpb3VzIHJvbGVzKVxuICAgKiBAUmV0dXJuOiBFbnRpdHlSZXNwb25zZTxVc2VyPlxuICAgKi9cbiAgc2V0Um9sZXMoaWQ/OiBzdHJpbmcsIHJvbGVzPzogQWNjb3VudFJvbGVDb2RlW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnBvc3QoYCR7dGhpcy5iYXNlVXJsfS8ke2lkfS9yb2xlcy9gLCBKU09OLnN0cmluZ2lmeShyb2xlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB1c2VyIHJvbGVzIGluIGhpcyBhY2NvdW50cyAobWVyZ2Ugd2l0aCBleGlzdGluZyByb2xlcylcbiAgICogQFJldHVybjogRW50aXR5UmVzcG9uc2U8VXNlcj5cbiAgICovXG4gIG1lcmdlUm9sZXMoaWQ/OiBzdHJpbmcsIHJvbGVzPzogQWNjb3VudFJvbGVDb2RlW10pIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LnB1dChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9L3JvbGVzL2AsIEpTT04uc3RyaW5naWZ5KHJvbGVzKSk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlIHVzZXIgZnJvbSB0aGUgc3lzdGVtXG4gICAqIEBSZXR1cm46IEFjdGlvblJlc3BvbnNlXG4gICAqL1xuICBkZWxldGUoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmRlbGV0ZShgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNpbmdsZSB1c2VyIGJ5IElkXG4gICAqIEBSZXR1cm46IEVudGl0eVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBnZXQoaWQ/OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0LmdldChgJHt0aGlzLmJhc2VVcmx9LyR7aWR9YCk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBsaXN0IG9mIHVzZXJzIGJ5IGZpbHRlclxuICAgKiBAUmV0dXJuOiBRdWVyeVJlc3BvbnNlPFVzZXI+XG4gICAqL1xuICBmaW5kKHNlYXJjaD86IHN0cmluZywgdHlwZT86IFVzZXJUeXBlQ29kZSwgc3RhdHVzPzogVXNlclN0YXR1c0NvZGUsIHNvcnQ/OiBzdHJpbmcsIHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEFycmF5KCk7XHRcdFxuICAgIGlmIChzZWFyY2ggIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgc2VhcmNoPSR7c2VhcmNofWApOyB9XG4gICAgaWYgKHR5cGUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgdHlwZT0ke3R5cGV9YCk7IH1cbiAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHN0YXR1cz0ke3N0YXR1c31gKTsgfVxuICAgIGlmIChzb3J0ICE9IG51bGwpIHsgcGFyYW1zLnB1c2goYHNvcnQ9JHtzb3J0fWApOyB9XG4gICAgaWYgKHBhZ2UgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZT0ke3BhZ2V9YCk7IH1cbiAgICBpZiAocGFnZVNpemUgIT0gbnVsbCkgeyBwYXJhbXMucHVzaChgcGFnZVNpemU9JHtwYWdlU2l6ZX1gKTsgfVxuXG5cdFx0cmV0dXJuIHRoaXMucmVzdC5nZXQoYCR7dGhpcy5iYXNlVXJsfS9gLCAuLi5wYXJhbXMpO1xuICB9XG5cbn1cbiJdfQ==