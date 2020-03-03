/*
   Detected color type (colored location of object)
*/
export var ColorTypeCode;
(function (ColorTypeCode) {
    // Undefined [0] 
    ColorTypeCode[ColorTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Body color (for person) [1] 
    ColorTypeCode[ColorTypeCode["BODY"] = 1] = "BODY";
    // Upper body color (for person) [2] 
    ColorTypeCode[ColorTypeCode["UPPER_BODY"] = 2] = "UPPER_BODY";
    // Lower body color (for person) [4] 
    ColorTypeCode[ColorTypeCode["LOWER_BODY"] = 4] = "LOWER_BODY";
    // Hat color (for person) [8] 
    ColorTypeCode[ColorTypeCode["HAT"] = 8] = "HAT";
    // Hair color (for person) [16] 
    ColorTypeCode[ColorTypeCode["HAIR"] = 16] = "HAIR";
    // Bag color (for person) [32] 
    ColorTypeCode[ColorTypeCode["BAG"] = 32] = "BAG";
})(ColorTypeCode || (ColorTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0NvbG9yVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxhQXVCWDtBQXZCRCxXQUFZLGFBQWE7SUFFckIsaUJBQWlCO0lBQ2pCLDJEQUFhLENBQUE7SUFFYiwrQkFBK0I7SUFDL0IsaURBQVEsQ0FBQTtJQUVSLHFDQUFxQztJQUNyQyw2REFBYyxDQUFBO0lBRWQscUNBQXFDO0lBQ3JDLDZEQUFjLENBQUE7SUFFZCw4QkFBOEI7SUFDOUIsK0NBQU8sQ0FBQTtJQUVQLGdDQUFnQztJQUNoQyxrREFBUyxDQUFBO0lBRVQsK0JBQStCO0lBQy9CLGdEQUFRLENBQUE7QUFFWixDQUFDLEVBdkJXLGFBQWEsS0FBYixhQUFhLFFBdUJ4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgRGV0ZWN0ZWQgY29sb3IgdHlwZSAoY29sb3JlZCBsb2NhdGlvbiBvZiBvYmplY3QpIFxuKi9cbmV4cG9ydCBlbnVtIENvbG9yVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBCb2R5IGNvbG9yIChmb3IgcGVyc29uKSBbMV0gXG4gICAgQk9EWSA9IDEsXG4gXG4gICAgLy8gVXBwZXIgYm9keSBjb2xvciAoZm9yIHBlcnNvbikgWzJdIFxuICAgIFVQUEVSX0JPRFkgPSAyLFxuIFxuICAgIC8vIExvd2VyIGJvZHkgY29sb3IgKGZvciBwZXJzb24pIFs0XSBcbiAgICBMT1dFUl9CT0RZID0gNCxcbiBcbiAgICAvLyBIYXQgY29sb3IgKGZvciBwZXJzb24pIFs4XSBcbiAgICBIQVQgPSA4LFxuIFxuICAgIC8vIEhhaXIgY29sb3IgKGZvciBwZXJzb24pIFsxNl0gXG4gICAgSEFJUiA9IDE2LFxuIFxuICAgIC8vIEJhZyBjb2xvciAoZm9yIHBlcnNvbikgWzMyXSBcbiAgICBCQUcgPSAzMixcbiBcbn0iXX0=