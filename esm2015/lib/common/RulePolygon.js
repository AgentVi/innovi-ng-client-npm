/*
   Polygon definition for rule is used to describe closed polygon and line (for crossing a line rule)
   In case of a line, it is not a closed polygon (first and last points are not connected)
   In case of area description, the line crossing direction field is ignored
*/
export class RulePolygon {
    constructor(lineCrossDir, points, color) {
        this.lineCrossDir = lineCrossDir;
        this.points = points;
        this.color = color;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZVBvbHlnb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2NvbW1vbi9SdWxlUG9seWdvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTs7OztFQUlFO0FBQ0YsTUFBTSxPQUFPLFdBQVc7SUFXcEIsWUFBWSxZQUFxQyxFQUFFLE1BQWdCLEVBQUUsS0FBcUI7UUFDdEYsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnVsZUNvbG9yQ29kZSB9IGZyb20gJy4uL2VudW1zL1J1bGVDb2xvckNvZGUnO1xuaW1wb3J0IHsgTGluZUNyb3NzRGlyZWN0aW9uQ29kZSB9IGZyb20gJy4uL2VudW1zL0xpbmVDcm9zc0RpcmVjdGlvbkNvZGUnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9jb21tb24vUG9pbnQnO1xuXG4vKiBcbiAgIFBvbHlnb24gZGVmaW5pdGlvbiBmb3IgcnVsZSBpcyB1c2VkIHRvIGRlc2NyaWJlIGNsb3NlZCBwb2x5Z29uIGFuZCBsaW5lIChmb3IgY3Jvc3NpbmcgYSBsaW5lIHJ1bGUpXG4gICBJbiBjYXNlIG9mIGEgbGluZSwgaXQgaXMgbm90IGEgY2xvc2VkIHBvbHlnb24gKGZpcnN0IGFuZCBsYXN0IHBvaW50cyBhcmUgbm90IGNvbm5lY3RlZClcbiAgIEluIGNhc2Ugb2YgYXJlYSBkZXNjcmlwdGlvbiwgdGhlIGxpbmUgY3Jvc3NpbmcgZGlyZWN0aW9uIGZpZWxkIGlzIGlnbm9yZWQgXG4qL1xuZXhwb3J0IGNsYXNzIFJ1bGVQb2x5Z29uIHtcbiBcbiAgICAvLyBMaW5lIGNyb3NzaW5nIGRpcmVjdGlvbiAodXNlZCBvbmx5IGluIGNhc2Ugb2YgbGluZS1jcm9zc2luZyBydWxlIHR5cGUpIFxuICAgIHB1YmxpYyBsaW5lQ3Jvc3NEaXI6IExpbmVDcm9zc0RpcmVjdGlvbkNvZGU7XG4gXG4gICAgLy8gUG9seWdvbiBwb2ludHMgXG4gICAgcHVibGljIHBvaW50czogUG9pbnRbXTtcbiBcbiAgICAvLyBUaGUgdXNlci1pbnRlcmZhY2UgY29sb3Igb2YgdGhpcyBwb2x5Z29uIFxuICAgIHB1YmxpYyBjb2xvcjogUnVsZUNvbG9yQ29kZTtcbiBcbiAgICBjb25zdHJ1Y3RvcihsaW5lQ3Jvc3NEaXI/OiBMaW5lQ3Jvc3NEaXJlY3Rpb25Db2RlLCBwb2ludHM/OiBQb2ludFtdLCBjb2xvcj86IFJ1bGVDb2xvckNvZGUpIHsgXG4gICAgICAgIHRoaXMubGluZUNyb3NzRGlyID0gbGluZUNyb3NzRGlyO1xuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxufVxuXG5cbiJdfQ==