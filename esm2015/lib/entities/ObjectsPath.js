/*
   Represents a single aggregated path for multiple objects
*/
export class ObjectsPath {
    constructor(id, count, path, countPerObjectType) {
        this.id = id;
        this.count = count;
        this.path = path;
        this.countPerObjectType = countPerObjectType;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0c1BhdGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudGl0aWVzL09iamVjdHNQYXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFO0FBQ0YsTUFBTSxPQUFPLFdBQVc7SUFjcEIsWUFBWSxFQUFXLEVBQUUsS0FBYyxFQUFFLElBQWMsRUFBRSxrQkFBc0M7UUFDM0YsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7SUFDakQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vUG9pbnQnO1xuaW1wb3J0IHsgT2JqZWN0VHlwZUNvdW50IH0gZnJvbSAnLi4vZW50aXRpZXMvT2JqZWN0VHlwZUNvdW50JztcblxuLyogXG4gICBSZXByZXNlbnRzIGEgc2luZ2xlIGFnZ3JlZ2F0ZWQgcGF0aCBmb3IgbXVsdGlwbGUgb2JqZWN0cyBcbiovXG5leHBvcnQgY2xhc3MgT2JqZWN0c1BhdGgge1xuIFxuICAgIC8vIFBhdGggaWQgXG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gXG4gICAgLy8gT2JqZWN0cyBjb3VudCBcbiAgICBwdWJsaWMgY291bnQ6IG51bWJlcjtcbiBcbiAgICAvLyBBZ2dyZWdhdGVkIHBhdGggXG4gICAgcHVibGljIHBhdGg6IFBvaW50W107XG4gXG4gICAgLy8gQ291bnQgcGVyIG9iamVjdCB0eXBlIFxuICAgIHB1YmxpYyBjb3VudFBlck9iamVjdFR5cGU6IE9iamVjdFR5cGVDb3VudFtdO1xuIFxuICAgIGNvbnN0cnVjdG9yKGlkPzogbnVtYmVyLCBjb3VudD86IG51bWJlciwgcGF0aD86IFBvaW50W10sIGNvdW50UGVyT2JqZWN0VHlwZT86IE9iamVjdFR5cGVDb3VudFtdKSB7IFxuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5jb3VudFBlck9iamVjdFR5cGUgPSBjb3VudFBlck9iamVjdFR5cGU7XG4gICAgfVxuXG59XG5cblxuIl19