/*
   Detected color of object (or partial object)
*/
export var ColorCode;
(function (ColorCode) {
    // Undefined [0] 
    ColorCode[ColorCode["UNDEFINED"] = 0] = "UNDEFINED";
    // No color [1] 
    ColorCode[ColorCode["NONE"] = 1] = "NONE";
    // Unknown color [2] 
    ColorCode[ColorCode["UNKNOWN"] = 2] = "UNKNOWN";
    // Multiple colors [4] 
    ColorCode[ColorCode["MULTICOLORED"] = 4] = "MULTICOLORED";
    // White [8] 
    ColorCode[ColorCode["WHITE"] = 8] = "WHITE";
    // Black [16] 
    ColorCode[ColorCode["BLACK"] = 16] = "BLACK";
    // Gray [32] 
    ColorCode[ColorCode["GRAY"] = 32] = "GRAY";
    // Blue [64] 
    ColorCode[ColorCode["BLUE"] = 64] = "BLUE";
    // Brown [128] 
    ColorCode[ColorCode["BROWN"] = 128] = "BROWN";
    // Green [256] 
    ColorCode[ColorCode["GREEN"] = 256] = "GREEN";
    // Yellow [512] 
    ColorCode[ColorCode["YELLOW"] = 512] = "YELLOW";
    // Orange [1024] 
    ColorCode[ColorCode["ORANGE"] = 1024] = "ORANGE";
    // Red [2048] 
    ColorCode[ColorCode["RED"] = 2048] = "RED";
    // Pink [4096] 
    ColorCode[ColorCode["PINK"] = 4096] = "PINK";
    // Purple [8192] 
    ColorCode[ColorCode["PURPLE"] = 8192] = "PURPLE";
    // Cyan [16384] 
    ColorCode[ColorCode["CYAN"] = 16384] = "CYAN";
    // Silver [32768] 
    ColorCode[ColorCode["SILVER"] = 32768] = "SILVER";
})(ColorCode || (ColorCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9Db2xvckNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxTQXFEWDtBQXJERCxXQUFZLFNBQVM7SUFFakIsaUJBQWlCO0lBQ2pCLG1EQUFhLENBQUE7SUFFYixnQkFBZ0I7SUFDaEIseUNBQVEsQ0FBQTtJQUVSLHFCQUFxQjtJQUNyQiwrQ0FBVyxDQUFBO0lBRVgsdUJBQXVCO0lBQ3ZCLHlEQUFnQixDQUFBO0lBRWhCLGFBQWE7SUFDYiwyQ0FBUyxDQUFBO0lBRVQsY0FBYztJQUNkLDRDQUFVLENBQUE7SUFFVixhQUFhO0lBQ2IsMENBQVMsQ0FBQTtJQUVULGFBQWE7SUFDYiwwQ0FBUyxDQUFBO0lBRVQsZUFBZTtJQUNmLDZDQUFXLENBQUE7SUFFWCxlQUFlO0lBQ2YsNkNBQVcsQ0FBQTtJQUVYLGdCQUFnQjtJQUNoQiwrQ0FBWSxDQUFBO0lBRVosaUJBQWlCO0lBQ2pCLGdEQUFhLENBQUE7SUFFYixjQUFjO0lBQ2QsMENBQVUsQ0FBQTtJQUVWLGVBQWU7SUFDZiw0Q0FBVyxDQUFBO0lBRVgsaUJBQWlCO0lBQ2pCLGdEQUFhLENBQUE7SUFFYixnQkFBZ0I7SUFDaEIsNkNBQVksQ0FBQTtJQUVaLGtCQUFrQjtJQUNsQixpREFBYyxDQUFBO0FBRWxCLENBQUMsRUFyRFcsU0FBUyxLQUFULFNBQVMsUUFxRHBCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBEZXRlY3RlZCBjb2xvciBvZiBvYmplY3QgKG9yIHBhcnRpYWwgb2JqZWN0KSBcbiovXG5leHBvcnQgZW51bSBDb2xvckNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBObyBjb2xvciBbMV0gXG4gICAgTk9ORSA9IDEsXG4gXG4gICAgLy8gVW5rbm93biBjb2xvciBbMl0gXG4gICAgVU5LTk9XTiA9IDIsXG4gXG4gICAgLy8gTXVsdGlwbGUgY29sb3JzIFs0XSBcbiAgICBNVUxUSUNPTE9SRUQgPSA0LFxuIFxuICAgIC8vIFdoaXRlIFs4XSBcbiAgICBXSElURSA9IDgsXG4gXG4gICAgLy8gQmxhY2sgWzE2XSBcbiAgICBCTEFDSyA9IDE2LFxuIFxuICAgIC8vIEdyYXkgWzMyXSBcbiAgICBHUkFZID0gMzIsXG4gXG4gICAgLy8gQmx1ZSBbNjRdIFxuICAgIEJMVUUgPSA2NCxcbiBcbiAgICAvLyBCcm93biBbMTI4XSBcbiAgICBCUk9XTiA9IDEyOCxcbiBcbiAgICAvLyBHcmVlbiBbMjU2XSBcbiAgICBHUkVFTiA9IDI1NixcbiBcbiAgICAvLyBZZWxsb3cgWzUxMl0gXG4gICAgWUVMTE9XID0gNTEyLFxuIFxuICAgIC8vIE9yYW5nZSBbMTAyNF0gXG4gICAgT1JBTkdFID0gMTAyNCxcbiBcbiAgICAvLyBSZWQgWzIwNDhdIFxuICAgIFJFRCA9IDIwNDgsXG4gXG4gICAgLy8gUGluayBbNDA5Nl0gXG4gICAgUElOSyA9IDQwOTYsXG4gXG4gICAgLy8gUHVycGxlIFs4MTkyXSBcbiAgICBQVVJQTEUgPSA4MTkyLFxuIFxuICAgIC8vIEN5YW4gWzE2Mzg0XSBcbiAgICBDWUFOID0gMTYzODQsXG4gXG4gICAgLy8gU2lsdmVyIFszMjc2OF0gXG4gICAgU0lMVkVSID0gMzI3NjgsXG4gXG59Il19