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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnRTdGF0dXNDb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFnZW50dmkvbmctY29yZS1saWIvIiwic291cmNlcyI6WyJsaWIvZW51bXMvQWdlbnRTdGF0dXNDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksZUFvQlg7QUFwQkQsV0FBWSxlQUFlO0lBRXZCLGlCQUFpQjtJQUNqQiwrREFBYSxDQUFBO0lBRWIsd0JBQXdCO0lBQ3hCLHlEQUFVLENBQUE7SUFFViw4QkFBOEI7SUFDOUIsMkRBQVcsQ0FBQTtJQUVYLDRCQUE0QjtJQUM1Qix1REFBUyxDQUFBO0lBRVQsMkJBQTJCO0lBQzNCLDZEQUFZLENBQUE7SUFFWiw0REFBNEQ7SUFDNUQsMkRBQVcsQ0FBQTtBQUVmLENBQUMsRUFwQlcsZUFBZSxLQUFmLGVBQWUsUUFvQjFCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBBZ2VudCAoTmV3IFBpcGVsaW5lKSBzdGF0dXMgY29kZSBcbiovXG5leHBvcnQgZW51bSBBZ2VudFN0YXR1c0NvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCBbMF0gXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBBZ2VudCBpcyBydW5uaW5nIFsxXSBcbiAgICBBQ1RJVkUgPSAxLFxuIFxuICAgIC8vIEFnZW50IGluIFdhcm5pbmcgc3RhdGUgWzJdIFxuICAgIFdBUk5JTkcgPSAyLFxuIFxuICAgIC8vIEFnZW50IGluIEVycm9yIHN0YXRlIFszXSBcbiAgICBFUlJPUiA9IDMsXG4gXG4gICAgLy8gQWdlbnQgaXMgbm90IGFjdGl2ZSBbNF0gXG4gICAgSU5BQ1RJVkUgPSA0LFxuIFxuICAgIC8vIEFnZW50IHdhcyBhZGRlZCBidXQgZGlkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbiB5ZXQgWzVdIFxuICAgIFBFTkRJTkcgPSA1LFxuIFxufSJdfQ==