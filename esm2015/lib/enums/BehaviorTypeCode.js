/*
   Detected object behavior type code
   Values with INNOVI prefix represents standard innoVi model behaviour, all other values represent custom models behaviour
*/
export var BehaviorTypeCode;
(function (BehaviorTypeCode) {
    // Undefined 0 
    BehaviorTypeCode[BehaviorTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Crossing a Line 65793 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_CROSSING"] = 65793] = "INNOVI_CROSSING";
    // Moving in an area 65794 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MOVING"] = 65794] = "INNOVI_MOVING";
    // Stopped vehicle 65796 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_STOPPED"] = 65796] = "INNOVI_STOPPED";
    // Occupancy 65800 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_OCCUPANCY"] = 65800] = "INNOVI_OCCUPANCY";
    // Grouping 65808 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_GROUPING"] = 65808] = "INNOVI_GROUPING";
    // Unattended Object 65824 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_UNATTENDED_OBJECT"] = 65824] = "INNOVI_UNATTENDED_OBJECT";
    // Asset protection 65856 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_ASSET_PROTECTION"] = 65856] = "INNOVI_ASSET_PROTECTION";
    // Traffic statistics report 65857 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_TRAFFIC_STATISTICS"] = 65857] = "INNOVI_TRAFFIC_STATISTICS";
    // Count statistics report 65858 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_COUNT_STATISTICS"] = 65858] = "INNOVI_COUNT_STATISTICS";
    // Counter flow 65859 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_COUNTER_FLOW"] = 65859] = "INNOVI_COUNTER_FLOW";
    // Ignore Mask 66049 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_IGNORE"] = 66049] = "INNOVI_MASK_IGNORE";
    // Shutdown Mask 66050 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_SHUTDOWN"] = 66050] = "INNOVI_MASK_SHUTDOWN";
    // General Anomaly 66560 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_ANOMALY"] = 66560] = "INNOVI_ANOMALY";
    // Similar Object 67584 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_SIMILARITY"] = 67584] = "INNOVI_SIMILARITY";
    // Smoke and Fire 67585 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_SMOKEANDFIRE"] = 67585] = "INNOVI_SMOKEANDFIRE";
})(BehaviorTypeCode || (BehaviorTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVoYXZpb3JUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvQmVoYXZpb3JUeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0U7QUFDRixNQUFNLENBQU4sSUFBWSxnQkFrRFg7QUFsREQsV0FBWSxnQkFBZ0I7SUFFeEIsZUFBZTtJQUNmLGlFQUFhLENBQUE7SUFFYix5QkFBeUI7SUFDekIsaUZBQXVCLENBQUE7SUFFdkIsMkJBQTJCO0lBQzNCLDZFQUFxQixDQUFBO0lBRXJCLHlCQUF5QjtJQUN6QiwrRUFBc0IsQ0FBQTtJQUV0QixtQkFBbUI7SUFDbkIsbUZBQXdCLENBQUE7SUFFeEIsa0JBQWtCO0lBQ2xCLGlGQUF1QixDQUFBO0lBRXZCLDJCQUEyQjtJQUMzQixtR0FBZ0MsQ0FBQTtJQUVoQywwQkFBMEI7SUFDMUIsaUdBQStCLENBQUE7SUFFL0IsbUNBQW1DO0lBQ25DLHFHQUFpQyxDQUFBO0lBRWpDLGlDQUFpQztJQUNqQyxpR0FBK0IsQ0FBQTtJQUUvQixzQkFBc0I7SUFDdEIseUZBQTJCLENBQUE7SUFFM0IscUJBQXFCO0lBQ3JCLHVGQUEwQixDQUFBO0lBRTFCLHVCQUF1QjtJQUN2QiwyRkFBNEIsQ0FBQTtJQUU1Qix5QkFBeUI7SUFDekIsK0VBQXNCLENBQUE7SUFFdEIsd0JBQXdCO0lBQ3hCLHFGQUF5QixDQUFBO0lBRXpCLHdCQUF3QjtJQUN4Qix5RkFBMkIsQ0FBQTtBQUUvQixDQUFDLEVBbERXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFrRDNCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBEZXRlY3RlZCBvYmplY3QgYmVoYXZpb3IgdHlwZSBjb2RlXG4gICBWYWx1ZXMgd2l0aCBJTk5PVkkgcHJlZml4IHJlcHJlc2VudHMgc3RhbmRhcmQgaW5ub1ZpIG1vZGVsIGJlaGF2aW91ciwgYWxsIG90aGVyIHZhbHVlcyByZXByZXNlbnQgY3VzdG9tIG1vZGVscyBiZWhhdmlvdXIgXG4qL1xuZXhwb3J0IGVudW0gQmVoYXZpb3JUeXBlQ29kZSB7XG4gXG4gICAgLy8gVW5kZWZpbmVkIDAgXG4gICAgVU5ERUZJTkVEID0gMCxcbiBcbiAgICAvLyBDcm9zc2luZyBhIExpbmUgNjU3OTMgXG4gICAgSU5OT1ZJX0NST1NTSU5HID0gNjU3OTMsXG4gXG4gICAgLy8gTW92aW5nIGluIGFuIGFyZWEgNjU3OTQgXG4gICAgSU5OT1ZJX01PVklORyA9IDY1Nzk0LFxuIFxuICAgIC8vIFN0b3BwZWQgdmVoaWNsZSA2NTc5NiBcbiAgICBJTk5PVklfU1RPUFBFRCA9IDY1Nzk2LFxuIFxuICAgIC8vIE9jY3VwYW5jeSA2NTgwMCBcbiAgICBJTk5PVklfT0NDVVBBTkNZID0gNjU4MDAsXG4gXG4gICAgLy8gR3JvdXBpbmcgNjU4MDggXG4gICAgSU5OT1ZJX0dST1VQSU5HID0gNjU4MDgsXG4gXG4gICAgLy8gVW5hdHRlbmRlZCBPYmplY3QgNjU4MjQgXG4gICAgSU5OT1ZJX1VOQVRURU5ERURfT0JKRUNUID0gNjU4MjQsXG4gXG4gICAgLy8gQXNzZXQgcHJvdGVjdGlvbiA2NTg1NiBcbiAgICBJTk5PVklfQVNTRVRfUFJPVEVDVElPTiA9IDY1ODU2LFxuIFxuICAgIC8vIFRyYWZmaWMgc3RhdGlzdGljcyByZXBvcnQgNjU4NTcgXG4gICAgSU5OT1ZJX1RSQUZGSUNfU1RBVElTVElDUyA9IDY1ODU3LFxuIFxuICAgIC8vIENvdW50IHN0YXRpc3RpY3MgcmVwb3J0IDY1ODU4IFxuICAgIElOTk9WSV9DT1VOVF9TVEFUSVNUSUNTID0gNjU4NTgsXG4gXG4gICAgLy8gQ291bnRlciBmbG93IDY1ODU5IFxuICAgIElOTk9WSV9DT1VOVEVSX0ZMT1cgPSA2NTg1OSxcbiBcbiAgICAvLyBJZ25vcmUgTWFzayA2NjA0OSBcbiAgICBJTk5PVklfTUFTS19JR05PUkUgPSA2NjA0OSxcbiBcbiAgICAvLyBTaHV0ZG93biBNYXNrIDY2MDUwIFxuICAgIElOTk9WSV9NQVNLX1NIVVRET1dOID0gNjYwNTAsXG4gXG4gICAgLy8gR2VuZXJhbCBBbm9tYWx5IDY2NTYwIFxuICAgIElOTk9WSV9BTk9NQUxZID0gNjY1NjAsXG4gXG4gICAgLy8gU2ltaWxhciBPYmplY3QgNjc1ODQgXG4gICAgSU5OT1ZJX1NJTUlMQVJJVFkgPSA2NzU4NCxcbiBcbiAgICAvLyBTbW9rZSBhbmQgRmlyZSA2NzU4NSBcbiAgICBJTk5PVklfU01PS0VBTkRGSVJFID0gNjc1ODUsXG4gXG59Il19