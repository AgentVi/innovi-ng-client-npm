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
    // Ignore Mask 66049 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_IGNORE"] = 66049] = "INNOVI_MASK_IGNORE";
    // Shutdown Mask 66050 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_MASK_SHUTDOWN"] = 66050] = "INNOVI_MASK_SHUTDOWN";
    // General Anomaly 66560 
    BehaviorTypeCode[BehaviorTypeCode["INNOVI_ANOMALY"] = 66560] = "INNOVI_ANOMALY";
})(BehaviorTypeCode || (BehaviorTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVoYXZpb3JUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0YsTUFBTSxDQUFOLElBQVksZ0JBZ0NYO0FBaENELFdBQVksZ0JBQWdCO0lBRXhCLGVBQWU7SUFDZixpRUFBYSxDQUFBO0lBRWIseUJBQXlCO0lBQ3pCLGlGQUF1QixDQUFBO0lBRXZCLDJCQUEyQjtJQUMzQiw2RUFBcUIsQ0FBQTtJQUVyQix5QkFBeUI7SUFDekIsK0VBQXNCLENBQUE7SUFFdEIsbUJBQW1CO0lBQ25CLG1GQUF3QixDQUFBO0lBRXhCLGtCQUFrQjtJQUNsQixpRkFBdUIsQ0FBQTtJQUV2QiwyQkFBMkI7SUFDM0IsbUdBQWdDLENBQUE7SUFFaEMscUJBQXFCO0lBQ3JCLHVGQUEwQixDQUFBO0lBRTFCLHVCQUF1QjtJQUN2QiwyRkFBNEIsQ0FBQTtJQUU1Qix5QkFBeUI7SUFDekIsK0VBQXNCLENBQUE7QUFFMUIsQ0FBQyxFQWhDVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBZ0MzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICAgRGV0ZWN0ZWQgb2JqZWN0IGJlaGF2aW9yIHR5cGUgY29kZVxuICAgVmFsdWVzIHdpdGggSU5OT1ZJIHByZWZpeCByZXByZXNlbnRzIHN0YW5kYXJkIGlubm9WaSBtb2RlbCBiZWhhdmlvdXIsIGFsbCBvdGhlciB2YWx1ZXMgcmVwcmVzZW50IGN1c3RvbSBtb2RlbHMgYmVoYXZpb3VyIFxuKi9cbmV4cG9ydCBlbnVtIEJlaGF2aW9yVHlwZUNvZGUge1xuIFxuICAgIC8vIFVuZGVmaW5lZCAwIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gQ3Jvc3NpbmcgYSBMaW5lIDY1NzkzIFxuICAgIElOTk9WSV9DUk9TU0lORyA9IDY1NzkzLFxuIFxuICAgIC8vIE1vdmluZyBpbiBhbiBhcmVhIDY1Nzk0IFxuICAgIElOTk9WSV9NT1ZJTkcgPSA2NTc5NCxcbiBcbiAgICAvLyBTdG9wcGVkIHZlaGljbGUgNjU3OTYgXG4gICAgSU5OT1ZJX1NUT1BQRUQgPSA2NTc5NixcbiBcbiAgICAvLyBPY2N1cGFuY3kgNjU4MDAgXG4gICAgSU5OT1ZJX09DQ1VQQU5DWSA9IDY1ODAwLFxuIFxuICAgIC8vIEdyb3VwaW5nIDY1ODA4IFxuICAgIElOTk9WSV9HUk9VUElORyA9IDY1ODA4LFxuIFxuICAgIC8vIFVuYXR0ZW5kZWQgT2JqZWN0IDY1ODI0IFxuICAgIElOTk9WSV9VTkFUVEVOREVEX09CSkVDVCA9IDY1ODI0LFxuIFxuICAgIC8vIElnbm9yZSBNYXNrIDY2MDQ5IFxuICAgIElOTk9WSV9NQVNLX0lHTk9SRSA9IDY2MDQ5LFxuIFxuICAgIC8vIFNodXRkb3duIE1hc2sgNjYwNTAgXG4gICAgSU5OT1ZJX01BU0tfU0hVVERPV04gPSA2NjA1MCxcbiBcbiAgICAvLyBHZW5lcmFsIEFub21hbHkgNjY1NjAgXG4gICAgSU5OT1ZJX0FOT01BTFkgPSA2NjU2MCxcbiBcbn0iXX0=