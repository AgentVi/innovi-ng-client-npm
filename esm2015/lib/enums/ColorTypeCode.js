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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQ29sb3JUeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGFBdUJYO0FBdkJELFdBQVksYUFBYTtJQUVyQixpQkFBaUI7SUFDakIsMkRBQWEsQ0FBQTtJQUViLCtCQUErQjtJQUMvQixpREFBUSxDQUFBO0lBRVIscUNBQXFDO0lBQ3JDLDZEQUFjLENBQUE7SUFFZCxxQ0FBcUM7SUFDckMsNkRBQWMsQ0FBQTtJQUVkLDhCQUE4QjtJQUM5QiwrQ0FBTyxDQUFBO0lBRVAsZ0NBQWdDO0lBQ2hDLGtEQUFTLENBQUE7SUFFVCwrQkFBK0I7SUFDL0IsZ0RBQVEsQ0FBQTtBQUVaLENBQUMsRUF2QlcsYUFBYSxLQUFiLGFBQWEsUUF1QnhCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBEZXRlY3RlZCBjb2xvciB0eXBlIChjb2xvcmVkIGxvY2F0aW9uIG9mIG9iamVjdCkgXG4qL1xuZXhwb3J0IGVudW0gQ29sb3JUeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEJvZHkgY29sb3IgKGZvciBwZXJzb24pIFsxXSBcbiAgICBCT0RZID0gMSxcbiBcbiAgICAvLyBVcHBlciBib2R5IGNvbG9yIChmb3IgcGVyc29uKSBbMl0gXG4gICAgVVBQRVJfQk9EWSA9IDIsXG4gXG4gICAgLy8gTG93ZXIgYm9keSBjb2xvciAoZm9yIHBlcnNvbikgWzRdIFxuICAgIExPV0VSX0JPRFkgPSA0LFxuIFxuICAgIC8vIEhhdCBjb2xvciAoZm9yIHBlcnNvbikgWzhdIFxuICAgIEhBVCA9IDgsXG4gXG4gICAgLy8gSGFpciBjb2xvciAoZm9yIHBlcnNvbikgWzE2XSBcbiAgICBIQUlSID0gMTYsXG4gXG4gICAgLy8gQmFnIGNvbG9yIChmb3IgcGVyc29uKSBbMzJdIFxuICAgIEJBRyA9IDMyLFxuIFxufSJdfQ==