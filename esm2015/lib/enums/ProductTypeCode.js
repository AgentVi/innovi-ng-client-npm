/*
   Product type code
*/
export var ProductTypeCode;
(function (ProductTypeCode) {
    // Undefined [0] 
    ProductTypeCode[ProductTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Virtual Edge (Pipeline running as Kubernetes deployment with no actual edge device) [1] 
    ProductTypeCode[ProductTypeCode["VIRTUAL"] = 1] = "VIRTUAL";
    // Custom Device (Customer provides it's own hardware) [2] 
    ProductTypeCode[ProductTypeCode["CUSTOM"] = 2] = "CUSTOM";
    // Custom iris+ Device (Customer provides it's own hardware) [3] 
    ProductTypeCode[ProductTypeCode["CUSTOM_IRIS_PLUS"] = 3] = "CUSTOM_IRIS_PLUS";
    // Edge 10 [10] 
    ProductTypeCode[ProductTypeCode["EDGE_10"] = 10] = "EDGE_10";
    // Edge 200 [200] 
    ProductTypeCode[ProductTypeCode["EDGE_200"] = 200] = "EDGE_200";
    // Edge 220 [220] 
    ProductTypeCode[ProductTypeCode["EDGE_220"] = 220] = "EDGE_220";
    // Edge 250 [250] 
    ProductTypeCode[ProductTypeCode["EDGE_250"] = 250] = "EDGE_250";
    // Edge 320 [320] 
    ProductTypeCode[ProductTypeCode["EDGE_320"] = 320] = "EDGE_320";
    // Edge 325 [325] 
    ProductTypeCode[ProductTypeCode["EDGE_325"] = 325] = "EDGE_325";
    // Edge 500 [500] 
    ProductTypeCode[ProductTypeCode["EDGE_500"] = 500] = "EDGE_500";
    // Edge 550 [550] 
    ProductTypeCode[ProductTypeCode["EDGE_550"] = 550] = "EDGE_550";
})(ProductTypeCode || (ProductTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdFR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9Qcm9kdWN0VHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxlQXNDWDtBQXRDRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYiwyRkFBMkY7SUFDM0YsMkRBQVcsQ0FBQTtJQUVYLDJEQUEyRDtJQUMzRCx5REFBVSxDQUFBO0lBRVYsaUVBQWlFO0lBQ2pFLDZFQUFvQixDQUFBO0lBRXBCLGdCQUFnQjtJQUNoQiw0REFBWSxDQUFBO0lBRVosa0JBQWtCO0lBQ2xCLCtEQUFjLENBQUE7SUFFZCxrQkFBa0I7SUFDbEIsK0RBQWMsQ0FBQTtJQUVkLGtCQUFrQjtJQUNsQiwrREFBYyxDQUFBO0lBRWQsa0JBQWtCO0lBQ2xCLCtEQUFjLENBQUE7SUFFZCxrQkFBa0I7SUFDbEIsK0RBQWMsQ0FBQTtJQUVkLGtCQUFrQjtJQUNsQiwrREFBYyxDQUFBO0lBRWQsa0JBQWtCO0lBQ2xCLCtEQUFjLENBQUE7QUFFbEIsQ0FBQyxFQXRDVyxlQUFlLEtBQWYsZUFBZSxRQXNDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIFByb2R1Y3QgdHlwZSBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIFByb2R1Y3RUeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFZpcnR1YWwgRWRnZSAoUGlwZWxpbmUgcnVubmluZyBhcyBLdWJlcm5ldGVzIGRlcGxveW1lbnQgd2l0aCBubyBhY3R1YWwgZWRnZSBkZXZpY2UpIFsxXSBcbiAgICBWSVJUVUFMID0gMSxcbiBcbiAgICAvLyBDdXN0b20gRGV2aWNlIChDdXN0b21lciBwcm92aWRlcyBpdCdzIG93biBoYXJkd2FyZSkgWzJdIFxuICAgIENVU1RPTSA9IDIsXG4gXG4gICAgLy8gQ3VzdG9tIGlyaXMrIERldmljZSAoQ3VzdG9tZXIgcHJvdmlkZXMgaXQncyBvd24gaGFyZHdhcmUpIFszXSBcbiAgICBDVVNUT01fSVJJU19QTFVTID0gMyxcbiBcbiAgICAvLyBFZGdlIDEwIFsxMF0gXG4gICAgRURHRV8xMCA9IDEwLFxuIFxuICAgIC8vIEVkZ2UgMjAwIFsyMDBdIFxuICAgIEVER0VfMjAwID0gMjAwLFxuIFxuICAgIC8vIEVkZ2UgMjIwIFsyMjBdIFxuICAgIEVER0VfMjIwID0gMjIwLFxuIFxuICAgIC8vIEVkZ2UgMjUwIFsyNTBdIFxuICAgIEVER0VfMjUwID0gMjUwLFxuIFxuICAgIC8vIEVkZ2UgMzIwIFszMjBdIFxuICAgIEVER0VfMzIwID0gMzIwLFxuIFxuICAgIC8vIEVkZ2UgMzI1IFszMjVdIFxuICAgIEVER0VfMzI1ID0gMzI1LFxuIFxuICAgIC8vIEVkZ2UgNTAwIFs1MDBdIFxuICAgIEVER0VfNTAwID0gNTAwLFxuIFxuICAgIC8vIEVkZ2UgNTUwIFs1NTBdIFxuICAgIEVER0VfNTUwID0gNTUwLFxuIFxufSJdfQ==