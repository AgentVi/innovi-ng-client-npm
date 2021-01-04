/*
   Search time
*/
export var SearchTimeCode;
(function (SearchTimeCode) {
    // Custom time frame [0] 
    SearchTimeCode[SearchTimeCode["CUSTOM"] = 0] = "CUSTOM";
    // Last hour [1] 
    SearchTimeCode[SearchTimeCode["LAST_1H"] = 1] = "LAST_1H";
    // Last 3 hours [3] 
    SearchTimeCode[SearchTimeCode["LAST_3H"] = 3] = "LAST_3H";
    // Last 6 hours [6] 
    SearchTimeCode[SearchTimeCode["LAST_6H"] = 6] = "LAST_6H";
    // Last 12 hours [12] 
    SearchTimeCode[SearchTimeCode["LAST_12H"] = 12] = "LAST_12H";
    // Last 24 hours [24] 
    SearchTimeCode[SearchTimeCode["LAST_24H"] = 24] = "LAST_24H";
    // Last 48 hours [48] 
    SearchTimeCode[SearchTimeCode["LAST_48H"] = 48] = "LAST_48H";
})(SearchTimeCode || (SearchTimeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoVGltZUNvZGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvbmctY29yZS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2VudW1zL1NlYXJjaFRpbWVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksY0F1Qlg7QUF2QkQsV0FBWSxjQUFjO0lBRXRCLHlCQUF5QjtJQUN6Qix1REFBVSxDQUFBO0lBRVYsaUJBQWlCO0lBQ2pCLHlEQUFXLENBQUE7SUFFWCxvQkFBb0I7SUFDcEIseURBQVcsQ0FBQTtJQUVYLG9CQUFvQjtJQUNwQix5REFBVyxDQUFBO0lBRVgsc0JBQXNCO0lBQ3RCLDREQUFhLENBQUE7SUFFYixzQkFBc0I7SUFDdEIsNERBQWEsQ0FBQTtJQUViLHNCQUFzQjtJQUN0Qiw0REFBYSxDQUFBO0FBRWpCLENBQUMsRUF2QlcsY0FBYyxLQUFkLGNBQWMsUUF1QnpCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBTZWFyY2ggdGltZSBcbiovXG5leHBvcnQgZW51bSBTZWFyY2hUaW1lQ29kZSB7XG4gXG4gICAgLy8gQ3VzdG9tIHRpbWUgZnJhbWUgWzBdIFxuICAgIENVU1RPTSA9IDAsXG4gXG4gICAgLy8gTGFzdCBob3VyIFsxXSBcbiAgICBMQVNUXzFIID0gMSxcbiBcbiAgICAvLyBMYXN0IDMgaG91cnMgWzNdIFxuICAgIExBU1RfM0ggPSAzLFxuIFxuICAgIC8vIExhc3QgNiBob3VycyBbNl0gXG4gICAgTEFTVF82SCA9IDYsXG4gXG4gICAgLy8gTGFzdCAxMiBob3VycyBbMTJdIFxuICAgIExBU1RfMTJIID0gMTIsXG4gXG4gICAgLy8gTGFzdCAyNCBob3VycyBbMjRdIFxuICAgIExBU1RfMjRIID0gMjQsXG4gXG4gICAgLy8gTGFzdCA0OCBob3VycyBbNDhdIFxuICAgIExBU1RfNDhIID0gNDgsXG4gXG59Il19