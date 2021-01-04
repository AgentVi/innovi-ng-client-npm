/*
   Agent (New Pipeline) status code
*/
export var AgentStatusCode;
(function (AgentStatusCode) {
    // Undefined [0] 
    AgentStatusCode[AgentStatusCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Agent is running [1] 
    AgentStatusCode[AgentStatusCode["ACTIVE"] = 1] = "ACTIVE";
    // Agent in Warning state [2] 
    AgentStatusCode[AgentStatusCode["WARNING"] = 2] = "WARNING";
    // Agent in Error state [3] 
    AgentStatusCode[AgentStatusCode["ERROR"] = 3] = "ERROR";
    // Agent is not active [4] 
    AgentStatusCode[AgentStatusCode["INACTIVE"] = 4] = "INACTIVE";
    // Agent was added but did not establish connection yet [5] 
    AgentStatusCode[AgentStatusCode["PENDING"] = 5] = "PENDING";
})(AgentStatusCode || (AgentStatusCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnRTdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BZ2VudFN0YXR1c0NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7QUFDRixNQUFNLENBQU4sSUFBWSxlQW9CWDtBQXBCRCxXQUFZLGVBQWU7SUFFdkIsaUJBQWlCO0lBQ2pCLCtEQUFhLENBQUE7SUFFYix3QkFBd0I7SUFDeEIseURBQVUsQ0FBQTtJQUVWLDhCQUE4QjtJQUM5QiwyREFBVyxDQUFBO0lBRVgsNEJBQTRCO0lBQzVCLHVEQUFTLENBQUE7SUFFVCwyQkFBMkI7SUFDM0IsNkRBQVksQ0FBQTtJQUVaLDREQUE0RDtJQUM1RCwyREFBVyxDQUFBO0FBRWYsQ0FBQyxFQXBCVyxlQUFlLEtBQWYsZUFBZSxRQW9CMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEFnZW50IChOZXcgUGlwZWxpbmUpIHN0YXR1cyBjb2RlIFxuKi9cbmV4cG9ydCBlbnVtIEFnZW50U3RhdHVzQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIFswXSBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIEFnZW50IGlzIHJ1bm5pbmcgWzFdIFxuICAgIEFDVElWRSA9IDEsXG4gXG4gICAgLy8gQWdlbnQgaW4gV2FybmluZyBzdGF0ZSBbMl0gXG4gICAgV0FSTklORyA9IDIsXG4gXG4gICAgLy8gQWdlbnQgaW4gRXJyb3Igc3RhdGUgWzNdIFxuICAgIEVSUk9SID0gMyxcbiBcbiAgICAvLyBBZ2VudCBpcyBub3QgYWN0aXZlIFs0XSBcbiAgICBJTkFDVElWRSA9IDQsXG4gXG4gICAgLy8gQWdlbnQgd2FzIGFkZGVkIGJ1dCBkaWQgbm90IGVzdGFibGlzaCBjb25uZWN0aW9uIHlldCBbNV0gXG4gICAgUEVORElORyA9IDUsXG4gXG59Il19