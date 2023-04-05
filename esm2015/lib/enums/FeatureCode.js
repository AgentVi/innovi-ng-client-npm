/*
   Feature codes
*/
export var FeatureCode;
(function (FeatureCode) {
    // Undefined [0] 
    FeatureCode[FeatureCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Record sensor metadata feature [10] 
    FeatureCode[FeatureCode["FEATURE_SENSOR_METADATA"] = 10] = "FEATURE_SENSOR_METADATA";
    // Record sensor frames feature [11] 
    FeatureCode[FeatureCode["FEATURE_SENSOR_RECORDING"] = 11] = "FEATURE_SENSOR_RECORDING";
    // Face Recognition lite feature (Free Version) [20] 
    FeatureCode[FeatureCode["FEATURE_FR_LITE"] = 20] = "FEATURE_FR_LITE";
    // Face Recognition full feature (Paid Version) [21] 
    FeatureCode[FeatureCode["FEATURE_FR_FULL"] = 21] = "FEATURE_FR_FULL";
    // Rail Trespassing [22] 
    FeatureCode[FeatureCode["FEATURE_RAIL_TRESPASSING"] = 22] = "FEATURE_RAIL_TRESPASSING";
    // Expanded reporting capabilities [23] 
    FeatureCode[FeatureCode["FEATURE_REPORTING_FULL"] = 23] = "FEATURE_REPORTING_FULL";
    // Action analysis [24] 
    FeatureCode[FeatureCode["FEATURE_ACTION_ANALYSIS"] = 24] = "FEATURE_ACTION_ANALYSIS";
    // Alarm filtering [25] 
    FeatureCode[FeatureCode["FEATURE_ALARM_FILTERING"] = 25] = "FEATURE_ALARM_FILTERING";
    // Person recognition [26] 
    FeatureCode[FeatureCode["FEATURE_PERSON_RECOGNITION"] = 26] = "FEATURE_PERSON_RECOGNITION";
    // View pose keypoints in Investigation [27] 
    FeatureCode[FeatureCode["FEATURE_VIEW_POSE_KEYPOINTS"] = 27] = "FEATURE_VIEW_POSE_KEYPOINTS";
    // Account administrator module [2048] 
    FeatureCode[FeatureCode["MODULE_ADMIN"] = 2048] = "MODULE_ADMIN";
    // Crossing a line rule [2049] 
    FeatureCode[FeatureCode["RULE_CROSSING"] = 2049] = "RULE_CROSSING";
    // Counter flow rule [2050] 
    FeatureCode[FeatureCode["RULE_COUNTER_FLOW"] = 2050] = "RULE_COUNTER_FLOW";
    // Moving in an area rule [2051] 
    FeatureCode[FeatureCode["RULE_MOVING"] = 2051] = "RULE_MOVING";
    // Stopped vehicle rule only [2052] 
    FeatureCode[FeatureCode["RULE_STOPPED"] = 2052] = "RULE_STOPPED";
    // Occupancy rule [2056] 
    FeatureCode[FeatureCode["RULE_OCCUPANCY"] = 2056] = "RULE_OCCUPANCY";
    // Grouping rule [2064] 
    FeatureCode[FeatureCode["RULE_GROUPING"] = 2064] = "RULE_GROUPING";
    // Ignore (yellow) mask rule [2080] 
    FeatureCode[FeatureCode["RULE_IGNORE_MASK"] = 2080] = "RULE_IGNORE_MASK";
    // Anomaly detection rule [2112] 
    FeatureCode[FeatureCode["RULE_ANOMALY"] = 2112] = "RULE_ANOMALY";
    // Unattended object detection rule [2176] 
    FeatureCode[FeatureCode["RULE_UNATTENDED_OBJECT"] = 2176] = "RULE_UNATTENDED_OBJECT";
    // Asset protection (missing object detection) rule [2304] 
    FeatureCode[FeatureCode["RULE_ASSET_PROTECTION"] = 2304] = "RULE_ASSET_PROTECTION";
    // Smoke and Fire rule [2305] 
    FeatureCode[FeatureCode["RULE_SMOKEANDFIRE"] = 2305] = "RULE_SMOKEANDFIRE";
    // Traffic statistics rule [2560] 
    FeatureCode[FeatureCode["RULE_TRAFFIC_STATISTICS"] = 2560] = "RULE_TRAFFIC_STATISTICS";
    // Count statistics rule [3072] 
    FeatureCode[FeatureCode["RULE_COUNT_STATISTICS"] = 3072] = "RULE_COUNT_STATISTICS";
    // Area occupancy statistics rule [3073] 
    FeatureCode[FeatureCode["RULE_AREA_OCCUPANCY_STATISTICS"] = 3073] = "RULE_AREA_OCCUPANCY_STATISTICS";
    // Monitor (real time events) module [4096] 
    FeatureCode[FeatureCode["MODULE_MONITOR"] = 4096] = "MODULE_MONITOR";
    // Google maps support module [4097] 
    FeatureCode[FeatureCode["MAP_GOOGLE"] = 4097] = "MAP_GOOGLE";
    // Leaflet maps support module [4098] 
    FeatureCode[FeatureCode["MAP_LEAFLET"] = 4098] = "MAP_LEAFLET";
    // Investigation (search) module [8192] 
    FeatureCode[FeatureCode["MODULE_INVESTIGATION"] = 8192] = "MODULE_INVESTIGATION";
    // Analytics (BI) module [8192] 
    FeatureCode[FeatureCode["MODULE_ANALYTICS"] = 16384] = "MODULE_ANALYTICS";
    // Slip and Fall rule [34816] 
    FeatureCode[FeatureCode["RULE_SLIP_AND_FALL"] = 34816] = "RULE_SLIP_AND_FALL";
})(FeatureCode || (FeatureCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL0ZlYXR1cmVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFO0FBQ0YsTUFBTSxDQUFOLElBQVksV0FrR1g7QUFsR0QsV0FBWSxXQUFXO0lBRW5CLGlCQUFpQjtJQUNqQix1REFBYSxDQUFBO0lBRWIsdUNBQXVDO0lBQ3ZDLG9GQUE0QixDQUFBO0lBRTVCLHFDQUFxQztJQUNyQyxzRkFBNkIsQ0FBQTtJQUU3QixxREFBcUQ7SUFDckQsb0VBQW9CLENBQUE7SUFFcEIscURBQXFEO0lBQ3JELG9FQUFvQixDQUFBO0lBRXBCLHlCQUF5QjtJQUN6QixzRkFBNkIsQ0FBQTtJQUU3Qix3Q0FBd0M7SUFDeEMsa0ZBQTJCLENBQUE7SUFFM0Isd0JBQXdCO0lBQ3hCLG9GQUE0QixDQUFBO0lBRTVCLHdCQUF3QjtJQUN4QixvRkFBNEIsQ0FBQTtJQUU1QiwyQkFBMkI7SUFDM0IsMEZBQStCLENBQUE7SUFFL0IsNkNBQTZDO0lBQzdDLDRGQUFnQyxDQUFBO0lBRWhDLHVDQUF1QztJQUN2QyxnRUFBbUIsQ0FBQTtJQUVuQiwrQkFBK0I7SUFDL0Isa0VBQW9CLENBQUE7SUFFcEIsNEJBQTRCO0lBQzVCLDBFQUF3QixDQUFBO0lBRXhCLGlDQUFpQztJQUNqQyw4REFBa0IsQ0FBQTtJQUVsQixvQ0FBb0M7SUFDcEMsZ0VBQW1CLENBQUE7SUFFbkIseUJBQXlCO0lBQ3pCLG9FQUFxQixDQUFBO0lBRXJCLHdCQUF3QjtJQUN4QixrRUFBb0IsQ0FBQTtJQUVwQixvQ0FBb0M7SUFDcEMsd0VBQXVCLENBQUE7SUFFdkIsaUNBQWlDO0lBQ2pDLGdFQUFtQixDQUFBO0lBRW5CLDJDQUEyQztJQUMzQyxvRkFBNkIsQ0FBQTtJQUU3QiwyREFBMkQ7SUFDM0Qsa0ZBQTRCLENBQUE7SUFFNUIsOEJBQThCO0lBQzlCLDBFQUF3QixDQUFBO0lBRXhCLGtDQUFrQztJQUNsQyxzRkFBOEIsQ0FBQTtJQUU5QixnQ0FBZ0M7SUFDaEMsa0ZBQTRCLENBQUE7SUFFNUIseUNBQXlDO0lBQ3pDLG9HQUFxQyxDQUFBO0lBRXJDLDRDQUE0QztJQUM1QyxvRUFBcUIsQ0FBQTtJQUVyQixxQ0FBcUM7SUFDckMsNERBQWlCLENBQUE7SUFFakIsc0NBQXNDO0lBQ3RDLDhEQUFrQixDQUFBO0lBRWxCLHdDQUF3QztJQUN4QyxnRkFBMkIsQ0FBQTtJQUUzQixnQ0FBZ0M7SUFDaEMseUVBQXdCLENBQUE7SUFFeEIsOEJBQThCO0lBQzlCLDZFQUEwQixDQUFBO0FBRTlCLENBQUMsRUFsR1csV0FBVyxLQUFYLFdBQVcsUUFrR3RCIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gICBGZWF0dXJlIGNvZGVzIFxuKi9cbmV4cG9ydCBlbnVtIEZlYXR1cmVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gUmVjb3JkIHNlbnNvciBtZXRhZGF0YSBmZWF0dXJlIFsxMF0gXG4gICAgRkVBVFVSRV9TRU5TT1JfTUVUQURBVEEgPSAxMCxcbiBcbiAgICAvLyBSZWNvcmQgc2Vuc29yIGZyYW1lcyBmZWF0dXJlIFsxMV0gXG4gICAgRkVBVFVSRV9TRU5TT1JfUkVDT1JESU5HID0gMTEsXG4gXG4gICAgLy8gRmFjZSBSZWNvZ25pdGlvbiBsaXRlIGZlYXR1cmUgKEZyZWUgVmVyc2lvbikgWzIwXSBcbiAgICBGRUFUVVJFX0ZSX0xJVEUgPSAyMCxcbiBcbiAgICAvLyBGYWNlIFJlY29nbml0aW9uIGZ1bGwgZmVhdHVyZSAoUGFpZCBWZXJzaW9uKSBbMjFdIFxuICAgIEZFQVRVUkVfRlJfRlVMTCA9IDIxLFxuIFxuICAgIC8vIFJhaWwgVHJlc3Bhc3NpbmcgWzIyXSBcbiAgICBGRUFUVVJFX1JBSUxfVFJFU1BBU1NJTkcgPSAyMixcbiBcbiAgICAvLyBFeHBhbmRlZCByZXBvcnRpbmcgY2FwYWJpbGl0aWVzIFsyM10gXG4gICAgRkVBVFVSRV9SRVBPUlRJTkdfRlVMTCA9IDIzLFxuIFxuICAgIC8vIEFjdGlvbiBhbmFseXNpcyBbMjRdIFxuICAgIEZFQVRVUkVfQUNUSU9OX0FOQUxZU0lTID0gMjQsXG4gXG4gICAgLy8gQWxhcm0gZmlsdGVyaW5nIFsyNV0gXG4gICAgRkVBVFVSRV9BTEFSTV9GSUxURVJJTkcgPSAyNSxcbiBcbiAgICAvLyBQZXJzb24gcmVjb2duaXRpb24gWzI2XSBcbiAgICBGRUFUVVJFX1BFUlNPTl9SRUNPR05JVElPTiA9IDI2LFxuIFxuICAgIC8vIFZpZXcgcG9zZSBrZXlwb2ludHMgaW4gSW52ZXN0aWdhdGlvbiBbMjddIFxuICAgIEZFQVRVUkVfVklFV19QT1NFX0tFWVBPSU5UUyA9IDI3LFxuIFxuICAgIC8vIEFjY291bnQgYWRtaW5pc3RyYXRvciBtb2R1bGUgWzIwNDhdIFxuICAgIE1PRFVMRV9BRE1JTiA9IDIwNDgsXG4gXG4gICAgLy8gQ3Jvc3NpbmcgYSBsaW5lIHJ1bGUgWzIwNDldIFxuICAgIFJVTEVfQ1JPU1NJTkcgPSAyMDQ5LFxuIFxuICAgIC8vIENvdW50ZXIgZmxvdyBydWxlIFsyMDUwXSBcbiAgICBSVUxFX0NPVU5URVJfRkxPVyA9IDIwNTAsXG4gXG4gICAgLy8gTW92aW5nIGluIGFuIGFyZWEgcnVsZSBbMjA1MV0gXG4gICAgUlVMRV9NT1ZJTkcgPSAyMDUxLFxuIFxuICAgIC8vIFN0b3BwZWQgdmVoaWNsZSBydWxlIG9ubHkgWzIwNTJdIFxuICAgIFJVTEVfU1RPUFBFRCA9IDIwNTIsXG4gXG4gICAgLy8gT2NjdXBhbmN5IHJ1bGUgWzIwNTZdIFxuICAgIFJVTEVfT0NDVVBBTkNZID0gMjA1NixcbiBcbiAgICAvLyBHcm91cGluZyBydWxlIFsyMDY0XSBcbiAgICBSVUxFX0dST1VQSU5HID0gMjA2NCxcbiBcbiAgICAvLyBJZ25vcmUgKHllbGxvdykgbWFzayBydWxlIFsyMDgwXSBcbiAgICBSVUxFX0lHTk9SRV9NQVNLID0gMjA4MCxcbiBcbiAgICAvLyBBbm9tYWx5IGRldGVjdGlvbiBydWxlIFsyMTEyXSBcbiAgICBSVUxFX0FOT01BTFkgPSAyMTEyLFxuIFxuICAgIC8vIFVuYXR0ZW5kZWQgb2JqZWN0IGRldGVjdGlvbiBydWxlIFsyMTc2XSBcbiAgICBSVUxFX1VOQVRURU5ERURfT0JKRUNUID0gMjE3NixcbiBcbiAgICAvLyBBc3NldCBwcm90ZWN0aW9uIChtaXNzaW5nIG9iamVjdCBkZXRlY3Rpb24pIHJ1bGUgWzIzMDRdIFxuICAgIFJVTEVfQVNTRVRfUFJPVEVDVElPTiA9IDIzMDQsXG4gXG4gICAgLy8gU21va2UgYW5kIEZpcmUgcnVsZSBbMjMwNV0gXG4gICAgUlVMRV9TTU9LRUFOREZJUkUgPSAyMzA1LFxuIFxuICAgIC8vIFRyYWZmaWMgc3RhdGlzdGljcyBydWxlIFsyNTYwXSBcbiAgICBSVUxFX1RSQUZGSUNfU1RBVElTVElDUyA9IDI1NjAsXG4gXG4gICAgLy8gQ291bnQgc3RhdGlzdGljcyBydWxlIFszMDcyXSBcbiAgICBSVUxFX0NPVU5UX1NUQVRJU1RJQ1MgPSAzMDcyLFxuIFxuICAgIC8vIEFyZWEgb2NjdXBhbmN5IHN0YXRpc3RpY3MgcnVsZSBbMzA3M10gXG4gICAgUlVMRV9BUkVBX09DQ1VQQU5DWV9TVEFUSVNUSUNTID0gMzA3MyxcbiBcbiAgICAvLyBNb25pdG9yIChyZWFsIHRpbWUgZXZlbnRzKSBtb2R1bGUgWzQwOTZdIFxuICAgIE1PRFVMRV9NT05JVE9SID0gNDA5NixcbiBcbiAgICAvLyBHb29nbGUgbWFwcyBzdXBwb3J0IG1vZHVsZSBbNDA5N10gXG4gICAgTUFQX0dPT0dMRSA9IDQwOTcsXG4gXG4gICAgLy8gTGVhZmxldCBtYXBzIHN1cHBvcnQgbW9kdWxlIFs0MDk4XSBcbiAgICBNQVBfTEVBRkxFVCA9IDQwOTgsXG4gXG4gICAgLy8gSW52ZXN0aWdhdGlvbiAoc2VhcmNoKSBtb2R1bGUgWzgxOTJdIFxuICAgIE1PRFVMRV9JTlZFU1RJR0FUSU9OID0gODE5MixcbiBcbiAgICAvLyBBbmFseXRpY3MgKEJJKSBtb2R1bGUgWzgxOTJdIFxuICAgIE1PRFVMRV9BTkFMWVRJQ1MgPSAxNjM4NCxcbiBcbiAgICAvLyBTbGlwIGFuZCBGYWxsIHJ1bGUgWzM0ODE2XSBcbiAgICBSVUxFX1NMSVBfQU5EX0ZBTEwgPSAzNDgxNixcbiBcbn0iXX0=