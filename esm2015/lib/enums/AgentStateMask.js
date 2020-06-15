/*
   Agent state mask - the bit mask represents the actual state of the agent as reported by the agent proxy
   Bit mask range:
   OK:		0
   WARNING:	[0x00001 - 0x0000FFFF]		1 - 65535
   ERROR:		[0x10000 - 0xFFFFFFFF]		65536 - MaxInt
*/
export var AgentStateMask;
(function (AgentStateMask) {
    // [OK] Agent is connected and active [0x0] 
    AgentStateMask[AgentStateMask["AGENT_OK"] = 0] = "AGENT_OK";
    // [WARNING] Network high latency (over 2000 ms) for 1 minute or more [0x00000001] 
    AgentStateMask[AgentStateMask["HIGH_LATENCY_WARN"] = 1] = "HIGH_LATENCY_WARN";
    // [ERROR] Communication error [0x00010000] 
    AgentStateMask[AgentStateMask["NO_COMM_ERROR"] = 65536] = "NO_COMM_ERROR";
})(AgentStateMask || (AgentStateMask = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdlbnRTdGF0ZU1hc2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYWdlbnR2aS9uZy1jb3JlLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9lbnVtcy9BZ2VudFN0YXRlTWFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUU7QUFDRixNQUFNLENBQU4sSUFBWSxjQVdYO0FBWEQsV0FBWSxjQUFjO0lBRXRCLDRDQUE0QztJQUM1QywyREFBWSxDQUFBO0lBRVosbUZBQW1GO0lBQ25GLDZFQUFxQixDQUFBO0lBRXJCLDRDQUE0QztJQUM1Qyx5RUFBcUIsQ0FBQTtBQUV6QixDQUFDLEVBWFcsY0FBYyxLQUFkLGNBQWMsUUFXekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIEFnZW50IHN0YXRlIG1hc2sgLSB0aGUgYml0IG1hc2sgcmVwcmVzZW50cyB0aGUgYWN0dWFsIHN0YXRlIG9mIHRoZSBhZ2VudCBhcyByZXBvcnRlZCBieSB0aGUgYWdlbnQgcHJveHlcbiAgIEJpdCBtYXNrIHJhbmdlOlxuICAgT0s6XHRcdDBcbiAgIFdBUk5JTkc6XHRbMHgwMDAwMSAtIDB4MDAwMEZGRkZdXHRcdDEgLSA2NTUzNVxuICAgRVJST1I6XHRcdFsweDEwMDAwIC0gMHhGRkZGRkZGRl1cdFx0NjU1MzYgLSBNYXhJbnQgXG4qL1xuZXhwb3J0IGVudW0gQWdlbnRTdGF0ZU1hc2sge1xuIFxuICAgIC8vIFtPS10gQWdlbnQgaXMgY29ubmVjdGVkIGFuZCBhY3RpdmUgWzB4MF0gXG4gICAgQUdFTlRfT0sgPSAwLFxuIFxuICAgIC8vIFtXQVJOSU5HXSBOZXR3b3JrIGhpZ2ggbGF0ZW5jeSAob3ZlciAyMDAwIG1zKSBmb3IgMSBtaW51dGUgb3IgbW9yZSBbMHgwMDAwMDAwMV0gXG4gICAgSElHSF9MQVRFTkNZX1dBUk4gPSAxLFxuIFxuICAgIC8vIFtFUlJPUl0gQ29tbXVuaWNhdGlvbiBlcnJvciBbMHgwMDAxMDAwMF0gXG4gICAgTk9fQ09NTV9FUlJPUiA9IDY1NTM2LFxuIFxufSJdfQ==