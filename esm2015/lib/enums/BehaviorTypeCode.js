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
    // Face Present 67586 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_FACE"] = 67586] = "INNOVI_FACE";
    // Slip and Fall 65860 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_SLIP_AND_FALL"] = 65860] = "INNOVI_SLIP_AND_FALL";
})(BehaviorTypeCode || (BehaviorTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVoYXZpb3JUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWNvcmUtbGliL3NyYy9saWIvZW51bXMvQmVoYXZpb3JUeXBlQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0U7QUFDRixNQUFNLENBQU4sSUFBWSxnQkF3RFg7QUF4REQsV0FBWSxnQkFBZ0I7SUFFeEIsZUFBZTtJQUNmLGlFQUFhLENBQUE7SUFFYix5QkFBeUI7SUFDekIsaUZBQXVCLENBQUE7SUFFdkIsMkJBQTJCO0lBQzNCLDZFQUFxQixDQUFBO0lBRXJCLHlCQUF5QjtJQUN6QiwrRUFBc0IsQ0FBQTtJQUV0QixtQkFBbUI7SUFDbkIsbUZBQXdCLENBQUE7SUFFeEIsa0JBQWtCO0lBQ2xCLGlGQUF1QixDQUFBO0lBRXZCLDJCQUEyQjtJQUMzQixtR0FBZ0MsQ0FBQTtJQUVoQywwQkFBMEI7SUFDMUIsaUdBQStCLENBQUE7SUFFL0IsbUNBQW1DO0lBQ25DLHFHQUFpQyxDQUFBO0lBRWpDLGlDQUFpQztJQUNqQyxpR0FBK0IsQ0FBQTtJQUUvQixzQkFBc0I7SUFDdEIseUZBQTJCLENBQUE7SUFFM0IscUJBQXFCO0lBQ3JCLHVGQUEwQixDQUFBO0lBRTFCLHVCQUF1QjtJQUN2QiwyRkFBNEIsQ0FBQTtJQUU1Qix5QkFBeUI7SUFDekIsK0VBQXNCLENBQUE7SUFFdEIsd0JBQXdCO0lBQ3hCLHFGQUF5QixDQUFBO0lBRXpCLHdCQUF3QjtJQUN4Qix5RkFBMkIsQ0FBQTtJQUUzQixzQkFBc0I7SUFDdEIseUVBQW1CLENBQUE7SUFFbkIsdUJBQXVCO0lBQ3ZCLDJGQUE0QixDQUFBO0FBRWhDLENBQUMsRUF4RFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXdEM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIERldGVjdGVkIG9iamVjdCBiZWhhdmlvciB0eXBlIGNvZGVcbiAgIFZhbHVlcyB3aXRoIElOTk9WSSBwcmVmaXggcmVwcmVzZW50cyBzdGFuZGFyZCBpbm5vVmkgbW9kZWwgYmVoYXZpb3VyLCBhbGwgb3RoZXIgdmFsdWVzIHJlcHJlc2VudCBjdXN0b20gbW9kZWxzIGJlaGF2aW91ciBcbiovXG5leHBvcnQgZW51bSBCZWhhdmlvclR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgMCBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIENyb3NzaW5nIGEgTGluZSA2NTc5MyBcbiAgICBJTk5PVklfQ1JPU1NJTkcgPSA2NTc5MyxcbiBcbiAgICAvLyBNb3ZpbmcgaW4gYW4gYXJlYSA2NTc5NCBcbiAgICBJTk5PVklfTU9WSU5HID0gNjU3OTQsXG4gXG4gICAgLy8gU3RvcHBlZCB2ZWhpY2xlIDY1Nzk2IFxuICAgIElOTk9WSV9TVE9QUEVEID0gNjU3OTYsXG4gXG4gICAgLy8gT2NjdXBhbmN5IDY1ODAwIFxuICAgIElOTk9WSV9PQ0NVUEFOQ1kgPSA2NTgwMCxcbiBcbiAgICAvLyBHcm91cGluZyA2NTgwOCBcbiAgICBJTk5PVklfR1JPVVBJTkcgPSA2NTgwOCxcbiBcbiAgICAvLyBVbmF0dGVuZGVkIE9iamVjdCA2NTgyNCBcbiAgICBJTk5PVklfVU5BVFRFTkRFRF9PQkpFQ1QgPSA2NTgyNCxcbiBcbiAgICAvLyBBc3NldCBwcm90ZWN0aW9uIDY1ODU2IFxuICAgIElOTk9WSV9BU1NFVF9QUk9URUNUSU9OID0gNjU4NTYsXG4gXG4gICAgLy8gVHJhZmZpYyBzdGF0aXN0aWNzIHJlcG9ydCA2NTg1NyBcbiAgICBJTk5PVklfVFJBRkZJQ19TVEFUSVNUSUNTID0gNjU4NTcsXG4gXG4gICAgLy8gQ291bnQgc3RhdGlzdGljcyByZXBvcnQgNjU4NTggXG4gICAgSU5OT1ZJX0NPVU5UX1NUQVRJU1RJQ1MgPSA2NTg1OCxcbiBcbiAgICAvLyBDb3VudGVyIGZsb3cgNjU4NTkgXG4gICAgSU5OT1ZJX0NPVU5URVJfRkxPVyA9IDY1ODU5LFxuIFxuICAgIC8vIElnbm9yZSBNYXNrIDY2MDQ5IFxuICAgIElOTk9WSV9NQVNLX0lHTk9SRSA9IDY2MDQ5LFxuIFxuICAgIC8vIFNodXRkb3duIE1hc2sgNjYwNTAgXG4gICAgSU5OT1ZJX01BU0tfU0hVVERPV04gPSA2NjA1MCxcbiBcbiAgICAvLyBHZW5lcmFsIEFub21hbHkgNjY1NjAgXG4gICAgSU5OT1ZJX0FOT01BTFkgPSA2NjU2MCxcbiBcbiAgICAvLyBTaW1pbGFyIE9iamVjdCA2NzU4NCBcbiAgICBJTk5PVklfU0lNSUxBUklUWSA9IDY3NTg0LFxuIFxuICAgIC8vIFNtb2tlIGFuZCBGaXJlIDY3NTg1IFxuICAgIElOTk9WSV9TTU9LRUFOREZJUkUgPSA2NzU4NSxcbiBcbiAgICAvLyBGYWNlIFByZXNlbnQgNjc1ODYgXG4gICAgSU5OT1ZJX0ZBQ0UgPSA2NzU4NixcbiBcbiAgICAvLyBTbGlwIGFuZCBGYWxsIDY1ODYwIFxuICAgIElOTk9WSV9TTElQX0FORF9GQUxMID0gNjU4NjAsXG4gXG59Il19