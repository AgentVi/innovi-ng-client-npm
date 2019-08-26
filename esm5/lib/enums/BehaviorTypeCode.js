/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var BehaviorTypeCode = {
    // Undefined [0] 
    UNDEFINED: 0,
    // Crossing a Line (innoVi) [1] 
    INNOVI_CROSSING: 1,
    // Moving in an area (innoVi) [2] 
    INNOVI_MOVING: 2,
    // Stopped vehicle (innoVi) [3] 
    INNOVI_STOPPED: 3,
    // Occupancy (innoVi) [4] 
    INNOVI_OCCUPANCY: 4,
    // Grouping (innoVi) [5] 
    INNOVI_GROUPING: 5,
    // Ignore mask (innovi 1) [100] 
    INNOVI_MASK_IGNORE: 100,
    // Shutdown mask (Currently unused) [101] 
    INNOVI_MASK_SHUTDOWN: 101,
    // General Anomaly (innoVi) [200] 
    INNOVI_ANOMALY: 200,
    // Hard hat object exists (custom: Hard Hat) [1001] 
    HARD_HAT_EXISTS: 1001,
    // Hard hat object not exists (custom: Hard Hat) [1002] 
    HARD_HAT_NOT_EXISTS: 1002,
    // Trash object exists (custom: Trash Dumping) [1101] 
    TRASH_EXISTS: 1101,
    // Trash object not exists (custom: Trash Dumping) [1102] 
    TRASH_NOT_EXISTS: 1102,
    // MCC object exists (custom: MCC) [1201] 
    MCC_EXISTS: 1201,
    // MCC object not exists (custom: MCC) [1202] 
    MCC_NOT_EXISTS: 1202,
};
export { BehaviorTypeCode };
BehaviorTypeCode[BehaviorTypeCode.UNDEFINED] = 'UNDEFINED';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_CROSSING] = 'INNOVI_CROSSING';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_MOVING] = 'INNOVI_MOVING';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_STOPPED] = 'INNOVI_STOPPED';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_OCCUPANCY] = 'INNOVI_OCCUPANCY';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_GROUPING] = 'INNOVI_GROUPING';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_MASK_IGNORE] = 'INNOVI_MASK_IGNORE';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_MASK_SHUTDOWN] = 'INNOVI_MASK_SHUTDOWN';
BehaviorTypeCode[BehaviorTypeCode.INNOVI_ANOMALY] = 'INNOVI_ANOMALY';
BehaviorTypeCode[BehaviorTypeCode.HARD_HAT_EXISTS] = 'HARD_HAT_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.HARD_HAT_NOT_EXISTS] = 'HARD_HAT_NOT_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.TRASH_EXISTS] = 'TRASH_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.TRASH_NOT_EXISTS] = 'TRASH_NOT_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.MCC_EXISTS] = 'MCC_EXISTS';
BehaviorTypeCode[BehaviorTypeCode.MCC_NOT_EXISTS] = 'MCC_NOT_EXISTS';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmVoYXZpb3JUeXBlQ29kZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhZ2VudHZpL25nLWNvcmUtbGliLyIsInNvdXJjZXMiOlsibGliL2VudW1zL0JlaGF2aW9yVHlwZUNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBTUksaUJBQWlCO0lBQ2pCLFlBQWE7SUFFYixnQ0FBZ0M7SUFDaEMsa0JBQW1CO0lBRW5CLGtDQUFrQztJQUNsQyxnQkFBaUI7SUFFakIsZ0NBQWdDO0lBQ2hDLGlCQUFrQjtJQUVsQiwwQkFBMEI7SUFDMUIsbUJBQW9CO0lBRXBCLHlCQUF5QjtJQUN6QixrQkFBbUI7SUFFbkIsZ0NBQWdDO0lBQ2hDLHVCQUF3QjtJQUV4QiwwQ0FBMEM7SUFDMUMseUJBQTBCO0lBRTFCLGtDQUFrQztJQUNsQyxtQkFBb0I7SUFFcEIsb0RBQW9EO0lBQ3BELHFCQUFzQjtJQUV0Qix3REFBd0Q7SUFDeEQseUJBQTBCO0lBRTFCLHNEQUFzRDtJQUN0RCxrQkFBbUI7SUFFbkIsMERBQTBEO0lBQzFELHNCQUF1QjtJQUV2QiwwQ0FBMEM7SUFDMUMsZ0JBQWlCO0lBRWpCLDhDQUE4QztJQUM5QyxvQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIERldGVjdGVkIG9iamVjdCBiZWhhdmlvciB0eXBlIGNvZGVcbiAgIFZhbHVlcyB3aXRoIElOTk9WSSBwcmVmaXggcmVwcmVzZW50cyBzdGFuZGFyZCBpbm5vVmkgbW9kZWwgYmVoYXZpb3VyLCBhbGwgb3RoZXIgdmFsdWVzIHJlcHJlc2VudCBjdXN0b20gbW9kZWxzIGJlaGF2aW91ciBcbiovXG5leHBvcnQgZW51bSBCZWhhdmlvclR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgWzBdIFxuICAgIFVOREVGSU5FRCA9IDAsXG4gXG4gICAgLy8gQ3Jvc3NpbmcgYSBMaW5lIChpbm5vVmkpIFsxXSBcbiAgICBJTk5PVklfQ1JPU1NJTkcgPSAxLFxuIFxuICAgIC8vIE1vdmluZyBpbiBhbiBhcmVhIChpbm5vVmkpIFsyXSBcbiAgICBJTk5PVklfTU9WSU5HID0gMixcbiBcbiAgICAvLyBTdG9wcGVkIHZlaGljbGUgKGlubm9WaSkgWzNdIFxuICAgIElOTk9WSV9TVE9QUEVEID0gMyxcbiBcbiAgICAvLyBPY2N1cGFuY3kgKGlubm9WaSkgWzRdIFxuICAgIElOTk9WSV9PQ0NVUEFOQ1kgPSA0LFxuIFxuICAgIC8vIEdyb3VwaW5nIChpbm5vVmkpIFs1XSBcbiAgICBJTk5PVklfR1JPVVBJTkcgPSA1LFxuIFxuICAgIC8vIElnbm9yZSBtYXNrIChpbm5vdmkgMSkgWzEwMF0gXG4gICAgSU5OT1ZJX01BU0tfSUdOT1JFID0gMTAwLFxuIFxuICAgIC8vIFNodXRkb3duIG1hc2sgKEN1cnJlbnRseSB1bnVzZWQpIFsxMDFdIFxuICAgIElOTk9WSV9NQVNLX1NIVVRET1dOID0gMTAxLFxuIFxuICAgIC8vIEdlbmVyYWwgQW5vbWFseSAoaW5ub1ZpKSBbMjAwXSBcbiAgICBJTk5PVklfQU5PTUFMWSA9IDIwMCxcbiBcbiAgICAvLyBIYXJkIGhhdCBvYmplY3QgZXhpc3RzIChjdXN0b206IEhhcmQgSGF0KSBbMTAwMV0gXG4gICAgSEFSRF9IQVRfRVhJU1RTID0gMTAwMSxcbiBcbiAgICAvLyBIYXJkIGhhdCBvYmplY3Qgbm90IGV4aXN0cyAoY3VzdG9tOiBIYXJkIEhhdCkgWzEwMDJdIFxuICAgIEhBUkRfSEFUX05PVF9FWElTVFMgPSAxMDAyLFxuIFxuICAgIC8vIFRyYXNoIG9iamVjdCBleGlzdHMgKGN1c3RvbTogVHJhc2ggRHVtcGluZykgWzExMDFdIFxuICAgIFRSQVNIX0VYSVNUUyA9IDExMDEsXG4gXG4gICAgLy8gVHJhc2ggb2JqZWN0IG5vdCBleGlzdHMgKGN1c3RvbTogVHJhc2ggRHVtcGluZykgWzExMDJdIFxuICAgIFRSQVNIX05PVF9FWElTVFMgPSAxMTAyLFxuIFxuICAgIC8vIE1DQyBvYmplY3QgZXhpc3RzIChjdXN0b206IE1DQykgWzEyMDFdIFxuICAgIE1DQ19FWElTVFMgPSAxMjAxLFxuIFxuICAgIC8vIE1DQyBvYmplY3Qgbm90IGV4aXN0cyAoY3VzdG9tOiBNQ0MpIFsxMjAyXSBcbiAgICBNQ0NfTk9UX0VYSVNUUyA9IDEyMDIsXG4gXG59Il19