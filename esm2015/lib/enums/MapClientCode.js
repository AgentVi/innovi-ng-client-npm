/*
   Map client code (represent which map client library to use in the UI)
*/
export var MapClientCode;
(function (MapClientCode) {
    // Undefined [0] 
    MapClientCode[MapClientCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Google maps client [1] 
    MapClientCode[MapClientCode["GOOGLE"] = 1] = "GOOGLE";
    // LeafLet map client [2] 
    MapClientCode[MapClientCode["LEAFLET"] = 2] = "LEAFLET";
    // ESRI client (not implemented) [3] 
    MapClientCode[MapClientCode["ESRI"] = 3] = "ESRI";
    // MapInfo client (not implemented) [4] 
    MapClientCode[MapClientCode["MAPINFO"] = 4] = "MAPINFO";
})(MapClientCode || (MapClientCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwQ2xpZW50Q29kZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZW51bXMvTWFwQ2xpZW50Q29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGFBaUJYO0FBakJELFdBQVksYUFBYTtJQUVyQixpQkFBaUI7SUFDakIsMkRBQWEsQ0FBQTtJQUViLDBCQUEwQjtJQUMxQixxREFBVSxDQUFBO0lBRVYsMEJBQTBCO0lBQzFCLHVEQUFXLENBQUE7SUFFWCxxQ0FBcUM7SUFDckMsaURBQVEsQ0FBQTtJQUVSLHdDQUF3QztJQUN4Qyx1REFBVyxDQUFBO0FBRWYsQ0FBQyxFQWpCVyxhQUFhLEtBQWIsYUFBYSxRQWlCeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIE1hcCBjbGllbnQgY29kZSAocmVwcmVzZW50IHdoaWNoIG1hcCBjbGllbnQgbGlicmFyeSB0byB1c2UgaW4gdGhlIFVJKSBcbiovXG5leHBvcnQgZW51bSBNYXBDbGllbnRDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gR29vZ2xlIG1hcHMgY2xpZW50IFsxXSBcbiAgICBHT09HTEUgPSAxLFxuIFxuICAgIC8vIExlYWZMZXQgbWFwIGNsaWVudCBbMl0gXG4gICAgTEVBRkxFVCA9IDIsXG4gXG4gICAgLy8gRVNSSSBjbGllbnQgKG5vdCBpbXBsZW1lbnRlZCkgWzNdIFxuICAgIEVTUkkgPSAzLFxuIFxuICAgIC8vIE1hcEluZm8gY2xpZW50IChub3QgaW1wbGVtZW50ZWQpIFs0XSBcbiAgICBNQVBJTkZPID0gNCxcbiBcbn0iXX0=