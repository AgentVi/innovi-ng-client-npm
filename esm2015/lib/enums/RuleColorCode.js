/*
   User interface color of a rule polygon
*/
export var RuleColorCode;
(function (RuleColorCode) {
    // Undefined [0] 
    RuleColorCode[RuleColorCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Same color as used for severity [1] 
    RuleColorCode[RuleColorCode["SEVERITY"] = 1] = "SEVERITY";
    // Color Beige [2] 
    RuleColorCode[RuleColorCode["BEIGE"] = 2] = "BEIGE";
    // Color Yellow [3] 
    RuleColorCode[RuleColorCode["YELLOW"] = 3] = "YELLOW";
    // Color Amber [4] 
    RuleColorCode[RuleColorCode["AMBER"] = 4] = "AMBER";
    // Color Orange [5] 
    RuleColorCode[RuleColorCode["ORANGE"] = 5] = "ORANGE";
    // Color Vermillion [6] 
    RuleColorCode[RuleColorCode["VERMILLION"] = 6] = "VERMILLION";
    // Color Red [7] 
    RuleColorCode[RuleColorCode["RED"] = 7] = "RED";
    // Color Burgundy [8] 
    RuleColorCode[RuleColorCode["BURGUNDY"] = 8] = "BURGUNDY";
    // Color Purple [9] 
    RuleColorCode[RuleColorCode["PURPLE"] = 9] = "PURPLE";
    // Color Violet [10] 
    RuleColorCode[RuleColorCode["VIOLET"] = 10] = "VIOLET";
    // Color Blue [11] 
    RuleColorCode[RuleColorCode["BLUE"] = 11] = "BLUE";
    // Color Iris [12] 
    RuleColorCode[RuleColorCode["IRIS"] = 12] = "IRIS";
    // Color Sky [13] 
    RuleColorCode[RuleColorCode["SKY"] = 13] = "SKY";
    // Color Turquoise [14] 
    RuleColorCode[RuleColorCode["TURQUOISE"] = 14] = "TURQUOISE";
    // Color Green [15] 
    RuleColorCode[RuleColorCode["GREEN"] = 15] = "GREEN";
    // Color Lime [16] 
    RuleColorCode[RuleColorCode["LIME"] = 16] = "LIME";
})(RuleColorCode || (RuleColorCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUnVsZUNvbG9yQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvUnVsZUNvbG9yQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGFBcURYO0FBckRELFdBQVksYUFBYTtJQUVyQixpQkFBaUI7SUFDakIsMkRBQWEsQ0FBQTtJQUViLHVDQUF1QztJQUN2Qyx5REFBWSxDQUFBO0lBRVosbUJBQW1CO0lBQ25CLG1EQUFTLENBQUE7SUFFVCxvQkFBb0I7SUFDcEIscURBQVUsQ0FBQTtJQUVWLG1CQUFtQjtJQUNuQixtREFBUyxDQUFBO0lBRVQsb0JBQW9CO0lBQ3BCLHFEQUFVLENBQUE7SUFFVix3QkFBd0I7SUFDeEIsNkRBQWMsQ0FBQTtJQUVkLGlCQUFpQjtJQUNqQiwrQ0FBTyxDQUFBO0lBRVAsc0JBQXNCO0lBQ3RCLHlEQUFZLENBQUE7SUFFWixvQkFBb0I7SUFDcEIscURBQVUsQ0FBQTtJQUVWLHFCQUFxQjtJQUNyQixzREFBVyxDQUFBO0lBRVgsbUJBQW1CO0lBQ25CLGtEQUFTLENBQUE7SUFFVCxtQkFBbUI7SUFDbkIsa0RBQVMsQ0FBQTtJQUVULGtCQUFrQjtJQUNsQixnREFBUSxDQUFBO0lBRVIsd0JBQXdCO0lBQ3hCLDREQUFjLENBQUE7SUFFZCxvQkFBb0I7SUFDcEIsb0RBQVUsQ0FBQTtJQUVWLG1CQUFtQjtJQUNuQixrREFBUyxDQUFBO0FBRWIsQ0FBQyxFQXJEVyxhQUFhLEtBQWIsYUFBYSxRQXFEeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFVzZXIgaW50ZXJmYWNlIGNvbG9yIG9mIGEgcnVsZSBwb2x5Z29uIFxuKi9cbmV4cG9ydCBlbnVtIFJ1bGVDb2xvckNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBTYW1lIGNvbG9yIGFzIHVzZWQgZm9yIHNldmVyaXR5IFsxXSBcbiAgICBTRVZFUklUWSA9IDEsXG4gXG4gICAgLy8gQ29sb3IgQmVpZ2UgWzJdIFxuICAgIEJFSUdFID0gMixcbiBcbiAgICAvLyBDb2xvciBZZWxsb3cgWzNdIFxuICAgIFlFTExPVyA9IDMsXG4gXG4gICAgLy8gQ29sb3IgQW1iZXIgWzRdIFxuICAgIEFNQkVSID0gNCxcbiBcbiAgICAvLyBDb2xvciBPcmFuZ2UgWzVdIFxuICAgIE9SQU5HRSA9IDUsXG4gXG4gICAgLy8gQ29sb3IgVmVybWlsbGlvbiBbNl0gXG4gICAgVkVSTUlMTElPTiA9IDYsXG4gXG4gICAgLy8gQ29sb3IgUmVkIFs3XSBcbiAgICBSRUQgPSA3LFxuIFxuICAgIC8vIENvbG9yIEJ1cmd1bmR5IFs4XSBcbiAgICBCVVJHVU5EWSA9IDgsXG4gXG4gICAgLy8gQ29sb3IgUHVycGxlIFs5XSBcbiAgICBQVVJQTEUgPSA5LFxuIFxuICAgIC8vIENvbG9yIFZpb2xldCBbMTBdIFxuICAgIFZJT0xFVCA9IDEwLFxuIFxuICAgIC8vIENvbG9yIEJsdWUgWzExXSBcbiAgICBCTFVFID0gMTEsXG4gXG4gICAgLy8gQ29sb3IgSXJpcyBbMTJdIFxuICAgIElSSVMgPSAxMixcbiBcbiAgICAvLyBDb2xvciBTa3kgWzEzXSBcbiAgICBTS1kgPSAxMyxcbiBcbiAgICAvLyBDb2xvciBUdXJxdW9pc2UgWzE0XSBcbiAgICBUVVJRVU9JU0UgPSAxNCxcbiBcbiAgICAvLyBDb2xvciBHcmVlbiBbMTVdIFxuICAgIEdSRUVOID0gMTUsXG4gXG4gICAgLy8gQ29sb3IgTGltZSBbMTZdIFxuICAgIExJTUUgPSAxNixcbiBcbn0iXX0=