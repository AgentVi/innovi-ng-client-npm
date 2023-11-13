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
    // Axis ARTPEC-7 Camera [7] 
    ProductTypeCode[ProductTypeCode["AXIS_ARTPEC7"] = 7] = "AXIS_ARTPEC7";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdFR5cGVDb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjL2xpYi9lbnVtcy9Qcm9kdWN0VHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxlQXlDWDtBQXpDRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYiwyRkFBMkY7SUFDM0YsMkRBQVcsQ0FBQTtJQUVYLDJEQUEyRDtJQUMzRCx5REFBVSxDQUFBO0lBRVYsaUVBQWlFO0lBQ2pFLDZFQUFvQixDQUFBO0lBRXBCLDRCQUE0QjtJQUM1QixxRUFBZ0IsQ0FBQTtJQUVoQixnQkFBZ0I7SUFDaEIsNERBQVksQ0FBQTtJQUVaLGtCQUFrQjtJQUNsQiwrREFBYyxDQUFBO0lBRWQsa0JBQWtCO0lBQ2xCLCtEQUFjLENBQUE7SUFFZCxrQkFBa0I7SUFDbEIsK0RBQWMsQ0FBQTtJQUVkLGtCQUFrQjtJQUNsQiwrREFBYyxDQUFBO0lBRWQsa0JBQWtCO0lBQ2xCLCtEQUFjLENBQUE7SUFFZCxrQkFBa0I7SUFDbEIsK0RBQWMsQ0FBQTtJQUVkLGtCQUFrQjtJQUNsQiwrREFBYyxDQUFBO0FBRWxCLENBQUMsRUF6Q1csZUFBZSxLQUFmLGVBQWUsUUF5QzFCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBQcm9kdWN0IHR5cGUgY29kZSBcbiovXG5leHBvcnQgZW51bSBQcm9kdWN0VHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBWaXJ0dWFsIEVkZ2UgKFBpcGVsaW5lIHJ1bm5pbmcgYXMgS3ViZXJuZXRlcyBkZXBsb3ltZW50IHdpdGggbm8gYWN0dWFsIGVkZ2UgZGV2aWNlKSBbMV0gXG4gICAgVklSVFVBTCA9IDEsXG4gXG4gICAgLy8gQ3VzdG9tIERldmljZSAoQ3VzdG9tZXIgcHJvdmlkZXMgaXQncyBvd24gaGFyZHdhcmUpIFsyXSBcbiAgICBDVVNUT00gPSAyLFxuIFxuICAgIC8vIEN1c3RvbSBpcmlzKyBEZXZpY2UgKEN1c3RvbWVyIHByb3ZpZGVzIGl0J3Mgb3duIGhhcmR3YXJlKSBbM10gXG4gICAgQ1VTVE9NX0lSSVNfUExVUyA9IDMsXG4gXG4gICAgLy8gQXhpcyBBUlRQRUMtNyBDYW1lcmEgWzddIFxuICAgIEFYSVNfQVJUUEVDNyA9IDcsXG4gXG4gICAgLy8gRWRnZSAxMCBbMTBdIFxuICAgIEVER0VfMTAgPSAxMCxcbiBcbiAgICAvLyBFZGdlIDIwMCBbMjAwXSBcbiAgICBFREdFXzIwMCA9IDIwMCxcbiBcbiAgICAvLyBFZGdlIDIyMCBbMjIwXSBcbiAgICBFREdFXzIyMCA9IDIyMCxcbiBcbiAgICAvLyBFZGdlIDI1MCBbMjUwXSBcbiAgICBFREdFXzI1MCA9IDI1MCxcbiBcbiAgICAvLyBFZGdlIDMyMCBbMzIwXSBcbiAgICBFREdFXzMyMCA9IDMyMCxcbiBcbiAgICAvLyBFZGdlIDMyNSBbMzI1XSBcbiAgICBFREdFXzMyNSA9IDMyNSxcbiBcbiAgICAvLyBFZGdlIDUwMCBbNTAwXSBcbiAgICBFREdFXzUwMCA9IDUwMCxcbiBcbiAgICAvLyBFZGdlIDU1MCBbNTUwXSBcbiAgICBFREdFXzU1MCA9IDU1MCxcbiBcbn0iXX0=