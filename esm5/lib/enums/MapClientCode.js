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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwQ2xpZW50Q29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL01hcENsaWVudENvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxhQWlCWDtBQWpCRCxXQUFZLGFBQWE7SUFFckIsaUJBQWlCO0lBQ2pCLDJEQUFhLENBQUE7SUFFYiwwQkFBMEI7SUFDMUIscURBQVUsQ0FBQTtJQUVWLDBCQUEwQjtJQUMxQix1REFBVyxDQUFBO0lBRVgscUNBQXFDO0lBQ3JDLGlEQUFRLENBQUE7SUFFUix3Q0FBd0M7SUFDeEMsdURBQVcsQ0FBQTtBQUVmLENBQUMsRUFqQlcsYUFBYSxLQUFiLGFBQWEsUUFpQnhCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBNYXAgY2xpZW50IGNvZGUgKHJlcHJlc2VudCB3aGljaCBtYXAgY2xpZW50IGxpYnJhcnkgdG8gdXNlIGluIHRoZSBVSSkgXG4qL1xuZXhwb3J0IGVudW0gTWFwQ2xpZW50Q29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEdvb2dsZSBtYXBzIGNsaWVudCBbMV0gXG4gICAgR09PR0xFID0gMSxcbiBcbiAgICAvLyBMZWFmTGV0IG1hcCBjbGllbnQgWzJdIFxuICAgIExFQUZMRVQgPSAyLFxuIFxuICAgIC8vIEVTUkkgY2xpZW50IChub3QgaW1wbGVtZW50ZWQpIFszXSBcbiAgICBFU1JJID0gMyxcbiBcbiAgICAvLyBNYXBJbmZvIGNsaWVudCAobm90IGltcGxlbWVudGVkKSBbNF0gXG4gICAgTUFQSU5GTyA9IDQsXG4gXG59Il19