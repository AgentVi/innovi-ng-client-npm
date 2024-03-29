/*
   Detected object type code
   Values with INNOVI prefix represents standard innoVi model objects, all other values represent custom models objects
*/
export var ObjectTypeCode;
(function (ObjectTypeCode) {
    // Undefined 0 
    ObjectTypeCode[ObjectTypeCode["UNDEFINED"] = 0] = "UNDEFINED";
    // Unknown group of objects 16842752 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS"] = 16842752] = "INNOVI_UNKNOWNS";
    // Unknown object 16843008 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_UNKNOWN"] = 16843008] = "INNOVI_UNKNOWNS_UNKNOWN";
    // Vegetation 16843264 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_VEGETATION"] = 16843264] = "INNOVI_UNKNOWNS_VEGETATION";
    // Cloud 16843776 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_CLOUD"] = 16843776] = "INNOVI_UNKNOWNS_CLOUD";
    // Object 16844800 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT"] = 16844800] = "INNOVI_UNKNOWNS_OBJECT";
    // Backpack 16844801 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_BACKPACK"] = 16844801] = "INNOVI_UNKNOWNS_OBJECT_BACKPACK";
    // Handbag 16844802 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_HANDBAG"] = 16844802] = "INNOVI_UNKNOWNS_OBJECT_HANDBAG";
    // Suitcase 16844804 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_SUITCASE"] = 16844804] = "INNOVI_UNKNOWNS_OBJECT_SUITCASE";
    // Other 16844808 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_OTHER"] = 16844808] = "INNOVI_UNKNOWNS_OBJECT_OTHER";
    // Box 16844816 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_BOX"] = 16844816] = "INNOVI_UNKNOWNS_OBJECT_BOX";
    // Bag 16844832 
    ObjectTypeCode[ObjectTypeCode["INNOVI_UNKNOWNS_OBJECT_BAG"] = 16844832] = "INNOVI_UNKNOWNS_OBJECT_BAG";
    // Abstract group of people 16908288 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE"] = 16908288] = "INNOVI_PEOPLE";
    // Person standing upright 16908544 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE_PERSON_STANDING"] = 16908544] = "INNOVI_PEOPLE_PERSON_STANDING";
    // Person sitting/lying down 16908800 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE_PERSON_ON_THE_GROUND"] = 16908800] = "INNOVI_PEOPLE_PERSON_ON_THE_GROUND";
    // Person from an overhead camera 16909312 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE_PERSON_OVERHEAD"] = 16909312] = "INNOVI_PEOPLE_PERSON_OVERHEAD";
    // Person in a crowd 16912384 
    ObjectTypeCode[ObjectTypeCode["INNOVI_PEOPLE_CROWD"] = 16912384] = "INNOVI_PEOPLE_CROWD";
    // Abstract group of vehicles 17039360 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE"] = 17039360] = "INNOVI_VEHICLE";
    // Car (class group) 17039616 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CAR"] = 17039616] = "INNOVI_VEHICLE_CAR";
    // Compact car 17039617 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CAR_COMPACT"] = 17039617] = "INNOVI_VEHICLE_CAR_COMPACT";
    // SUV 17039618 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CAR_SUV"] = 17039618] = "INNOVI_VEHICLE_CAR_SUV";
    // Bus 17039872 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_BUS"] = 17039872] = "INNOVI_VEHICLE_BUS";
    // School Bus 17039873 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_SCHOOL_BUS"] = 17039873] = "INNOVI_VEHICLE_SCHOOL_BUS";
    // Mini Bus 17039874 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_MINI_BUS"] = 17039874] = "INNOVI_VEHICLE_MINI_BUS";
    // Mini Bus 17039876 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_CITY_BUS"] = 17039876] = "INNOVI_VEHICLE_CITY_BUS";
    // Pickup Truck 17040384 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_PICKUP_TRUCK"] = 17040384] = "INNOVI_VEHICLE_PICKUP_TRUCK";
    // Van 17041408 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_VAN"] = 17041408] = "INNOVI_VEHICLE_VAN";
    // Truck (class group) 17043456 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK"] = 17043456] = "INNOVI_VEHICLE_TRUCK";
    // Small Truck 17043457 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK_SMALL"] = 17043457] = "INNOVI_VEHICLE_TRUCK_SMALL";
    // Medium Truck 17043458 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK_MEDIUM"] = 17043458] = "INNOVI_VEHICLE_TRUCK_MEDIUM";
    // Big Truck (semi-trailer) 17043460 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRUCK_SEMITRAILER"] = 17043460] = "INNOVI_VEHICLE_TRUCK_SEMITRAILER";
    // Tractor 17043464 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRACTOR"] = 17043464] = "INNOVI_VEHICLE_TRACTOR";
    // Train 17047552 
    ObjectTypeCode[ObjectTypeCode["INNOVI_VEHICLE_TRAIN"] = 17047552] = "INNOVI_VEHICLE_TRAIN";
    // Abstract group of two wheelers 17301504 
    ObjectTypeCode[ObjectTypeCode["INNOVI_TWOWHEELED"] = 17301504] = "INNOVI_TWOWHEELED";
    // Bicycle 17301760 
    ObjectTypeCode[ObjectTypeCode["INNOVI_TWOWHEELED_BICYCLE"] = 17301760] = "INNOVI_TWOWHEELED_BICYCLE";
    // Motorcycle 17302016 
    ObjectTypeCode[ObjectTypeCode["INNOVI_TWOWHEELED_MOTORCYCLE"] = 17302016] = "INNOVI_TWOWHEELED_MOTORCYCLE";
    // Abstract group of animals 17825792 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL"] = 17825792] = "INNOVI_ANIMAL";
    // Bird 17826048 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL_BIRD"] = 17826048] = "INNOVI_ANIMAL_BIRD";
    // Small animal (ie. Cats/Dogs) 17826304 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL_SMALL"] = 17826304] = "INNOVI_ANIMAL_SMALL";
    // Large animal (ie. Horses/Cows) 17826816 
    ObjectTypeCode[ObjectTypeCode["INNOVI_ANIMAL_LARGE"] = 17826816] = "INNOVI_ANIMAL_LARGE";
    // Fire 33620224 
    ObjectTypeCode[ObjectTypeCode["INNOVI_SMOKEANDFIRE_FIRE"] = 33620224] = "INNOVI_SMOKEANDFIRE_FIRE";
    // Smoke 33620480 
    ObjectTypeCode[ObjectTypeCode["INNOVI_SMOKEANDFIRE_SMOKE"] = 33620480] = "INNOVI_SMOKEANDFIRE_SMOKE";
})(ObjectTypeCode || (ObjectTypeCode = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2JqZWN0VHlwZUNvZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvbGliL2VudW1zL09iamVjdFR5cGVDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRTtBQUNGLE1BQU0sQ0FBTixJQUFZLGNBZ0lYO0FBaElELFdBQVksY0FBYztJQUV0QixlQUFlO0lBQ2YsNkRBQWEsQ0FBQTtJQUViLHFDQUFxQztJQUNyQyxnRkFBMEIsQ0FBQTtJQUUxQiwyQkFBMkI7SUFDM0IsZ0dBQWtDLENBQUE7SUFFbEMsdUJBQXVCO0lBQ3ZCLHNHQUFxQyxDQUFBO0lBRXJDLGtCQUFrQjtJQUNsQiw0RkFBZ0MsQ0FBQTtJQUVoQyxtQkFBbUI7SUFDbkIsOEZBQWlDLENBQUE7SUFFakMscUJBQXFCO0lBQ3JCLGdIQUEwQyxDQUFBO0lBRTFDLG9CQUFvQjtJQUNwQiw4R0FBeUMsQ0FBQTtJQUV6QyxxQkFBcUI7SUFDckIsZ0hBQTBDLENBQUE7SUFFMUMsa0JBQWtCO0lBQ2xCLDBHQUF1QyxDQUFBO0lBRXZDLGdCQUFnQjtJQUNoQixzR0FBcUMsQ0FBQTtJQUVyQyxnQkFBZ0I7SUFDaEIsc0dBQXFDLENBQUE7SUFFckMscUNBQXFDO0lBQ3JDLDRFQUF3QixDQUFBO0lBRXhCLG9DQUFvQztJQUNwQyw0R0FBd0MsQ0FBQTtJQUV4QyxzQ0FBc0M7SUFDdEMsc0hBQTZDLENBQUE7SUFFN0MsMkNBQTJDO0lBQzNDLDRHQUF3QyxDQUFBO0lBRXhDLDhCQUE4QjtJQUM5Qix3RkFBOEIsQ0FBQTtJQUU5Qix1Q0FBdUM7SUFDdkMsOEVBQXlCLENBQUE7SUFFekIsOEJBQThCO0lBQzlCLHNGQUE2QixDQUFBO0lBRTdCLHdCQUF3QjtJQUN4QixzR0FBcUMsQ0FBQTtJQUVyQyxnQkFBZ0I7SUFDaEIsOEZBQWlDLENBQUE7SUFFakMsZ0JBQWdCO0lBQ2hCLHNGQUE2QixDQUFBO0lBRTdCLHVCQUF1QjtJQUN2QixvR0FBb0MsQ0FBQTtJQUVwQyxxQkFBcUI7SUFDckIsZ0dBQWtDLENBQUE7SUFFbEMscUJBQXFCO0lBQ3JCLGdHQUFrQyxDQUFBO0lBRWxDLHlCQUF5QjtJQUN6Qix3R0FBc0MsQ0FBQTtJQUV0QyxnQkFBZ0I7SUFDaEIsc0ZBQTZCLENBQUE7SUFFN0IsZ0NBQWdDO0lBQ2hDLDBGQUErQixDQUFBO0lBRS9CLHdCQUF3QjtJQUN4QixzR0FBcUMsQ0FBQTtJQUVyQyx5QkFBeUI7SUFDekIsd0dBQXNDLENBQUE7SUFFdEMscUNBQXFDO0lBQ3JDLGtIQUEyQyxDQUFBO0lBRTNDLG9CQUFvQjtJQUNwQiw4RkFBaUMsQ0FBQTtJQUVqQyxrQkFBa0I7SUFDbEIsMEZBQStCLENBQUE7SUFFL0IsMkNBQTJDO0lBQzNDLG9GQUE0QixDQUFBO0lBRTVCLG9CQUFvQjtJQUNwQixvR0FBb0MsQ0FBQTtJQUVwQyx1QkFBdUI7SUFDdkIsMEdBQXVDLENBQUE7SUFFdkMsc0NBQXNDO0lBQ3RDLDRFQUF3QixDQUFBO0lBRXhCLGlCQUFpQjtJQUNqQixzRkFBNkIsQ0FBQTtJQUU3Qix5Q0FBeUM7SUFDekMsd0ZBQThCLENBQUE7SUFFOUIsMkNBQTJDO0lBQzNDLHdGQUE4QixDQUFBO0lBRTlCLGlCQUFpQjtJQUNqQixrR0FBbUMsQ0FBQTtJQUVuQyxrQkFBa0I7SUFDbEIsb0dBQW9DLENBQUE7QUFFeEMsQ0FBQyxFQWhJVyxjQUFjLEtBQWQsY0FBYyxRQWdJekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAgIERldGVjdGVkIG9iamVjdCB0eXBlIGNvZGVcbiAgIFZhbHVlcyB3aXRoIElOTk9WSSBwcmVmaXggcmVwcmVzZW50cyBzdGFuZGFyZCBpbm5vVmkgbW9kZWwgb2JqZWN0cywgYWxsIG90aGVyIHZhbHVlcyByZXByZXNlbnQgY3VzdG9tIG1vZGVscyBvYmplY3RzIFxuKi9cbmV4cG9ydCBlbnVtIE9iamVjdFR5cGVDb2RlIHtcbiBcbiAgICAvLyBVbmRlZmluZWQgMCBcbiAgICBVTkRFRklORUQgPSAwLFxuIFxuICAgIC8vIFVua25vd24gZ3JvdXAgb2Ygb2JqZWN0cyAxNjg0Mjc1MiBcbiAgICBJTk5PVklfVU5LTk9XTlMgPSAxNjg0Mjc1MixcbiBcbiAgICAvLyBVbmtub3duIG9iamVjdCAxNjg0MzAwOCBcbiAgICBJTk5PVklfVU5LTk9XTlNfVU5LTk9XTiA9IDE2ODQzMDA4LFxuIFxuICAgIC8vIFZlZ2V0YXRpb24gMTY4NDMyNjQgXG4gICAgSU5OT1ZJX1VOS05PV05TX1ZFR0VUQVRJT04gPSAxNjg0MzI2NCxcbiBcbiAgICAvLyBDbG91ZCAxNjg0Mzc3NiBcbiAgICBJTk5PVklfVU5LTk9XTlNfQ0xPVUQgPSAxNjg0Mzc3NixcbiBcbiAgICAvLyBPYmplY3QgMTY4NDQ4MDAgXG4gICAgSU5OT1ZJX1VOS05PV05TX09CSkVDVCA9IDE2ODQ0ODAwLFxuIFxuICAgIC8vIEJhY2twYWNrIDE2ODQ0ODAxIFxuICAgIElOTk9WSV9VTktOT1dOU19PQkpFQ1RfQkFDS1BBQ0sgPSAxNjg0NDgwMSxcbiBcbiAgICAvLyBIYW5kYmFnIDE2ODQ0ODAyIFxuICAgIElOTk9WSV9VTktOT1dOU19PQkpFQ1RfSEFOREJBRyA9IDE2ODQ0ODAyLFxuIFxuICAgIC8vIFN1aXRjYXNlIDE2ODQ0ODA0IFxuICAgIElOTk9WSV9VTktOT1dOU19PQkpFQ1RfU1VJVENBU0UgPSAxNjg0NDgwNCxcbiBcbiAgICAvLyBPdGhlciAxNjg0NDgwOCBcbiAgICBJTk5PVklfVU5LTk9XTlNfT0JKRUNUX09USEVSID0gMTY4NDQ4MDgsXG4gXG4gICAgLy8gQm94IDE2ODQ0ODE2IFxuICAgIElOTk9WSV9VTktOT1dOU19PQkpFQ1RfQk9YID0gMTY4NDQ4MTYsXG4gXG4gICAgLy8gQmFnIDE2ODQ0ODMyIFxuICAgIElOTk9WSV9VTktOT1dOU19PQkpFQ1RfQkFHID0gMTY4NDQ4MzIsXG4gXG4gICAgLy8gQWJzdHJhY3QgZ3JvdXAgb2YgcGVvcGxlIDE2OTA4Mjg4IFxuICAgIElOTk9WSV9QRU9QTEUgPSAxNjkwODI4OCxcbiBcbiAgICAvLyBQZXJzb24gc3RhbmRpbmcgdXByaWdodCAxNjkwODU0NCBcbiAgICBJTk5PVklfUEVPUExFX1BFUlNPTl9TVEFORElORyA9IDE2OTA4NTQ0LFxuIFxuICAgIC8vIFBlcnNvbiBzaXR0aW5nL2x5aW5nIGRvd24gMTY5MDg4MDAgXG4gICAgSU5OT1ZJX1BFT1BMRV9QRVJTT05fT05fVEhFX0dST1VORCA9IDE2OTA4ODAwLFxuIFxuICAgIC8vIFBlcnNvbiBmcm9tIGFuIG92ZXJoZWFkIGNhbWVyYSAxNjkwOTMxMiBcbiAgICBJTk5PVklfUEVPUExFX1BFUlNPTl9PVkVSSEVBRCA9IDE2OTA5MzEyLFxuIFxuICAgIC8vIFBlcnNvbiBpbiBhIGNyb3dkIDE2OTEyMzg0IFxuICAgIElOTk9WSV9QRU9QTEVfQ1JPV0QgPSAxNjkxMjM4NCxcbiBcbiAgICAvLyBBYnN0cmFjdCBncm91cCBvZiB2ZWhpY2xlcyAxNzAzOTM2MCBcbiAgICBJTk5PVklfVkVISUNMRSA9IDE3MDM5MzYwLFxuIFxuICAgIC8vIENhciAoY2xhc3MgZ3JvdXApIDE3MDM5NjE2IFxuICAgIElOTk9WSV9WRUhJQ0xFX0NBUiA9IDE3MDM5NjE2LFxuIFxuICAgIC8vIENvbXBhY3QgY2FyIDE3MDM5NjE3IFxuICAgIElOTk9WSV9WRUhJQ0xFX0NBUl9DT01QQUNUID0gMTcwMzk2MTcsXG4gXG4gICAgLy8gU1VWIDE3MDM5NjE4IFxuICAgIElOTk9WSV9WRUhJQ0xFX0NBUl9TVVYgPSAxNzAzOTYxOCxcbiBcbiAgICAvLyBCdXMgMTcwMzk4NzIgXG4gICAgSU5OT1ZJX1ZFSElDTEVfQlVTID0gMTcwMzk4NzIsXG4gXG4gICAgLy8gU2Nob29sIEJ1cyAxNzAzOTg3MyBcbiAgICBJTk5PVklfVkVISUNMRV9TQ0hPT0xfQlVTID0gMTcwMzk4NzMsXG4gXG4gICAgLy8gTWluaSBCdXMgMTcwMzk4NzQgXG4gICAgSU5OT1ZJX1ZFSElDTEVfTUlOSV9CVVMgPSAxNzAzOTg3NCxcbiBcbiAgICAvLyBNaW5pIEJ1cyAxNzAzOTg3NiBcbiAgICBJTk5PVklfVkVISUNMRV9DSVRZX0JVUyA9IDE3MDM5ODc2LFxuIFxuICAgIC8vIFBpY2t1cCBUcnVjayAxNzA0MDM4NCBcbiAgICBJTk5PVklfVkVISUNMRV9QSUNLVVBfVFJVQ0sgPSAxNzA0MDM4NCxcbiBcbiAgICAvLyBWYW4gMTcwNDE0MDggXG4gICAgSU5OT1ZJX1ZFSElDTEVfVkFOID0gMTcwNDE0MDgsXG4gXG4gICAgLy8gVHJ1Y2sgKGNsYXNzIGdyb3VwKSAxNzA0MzQ1NiBcbiAgICBJTk5PVklfVkVISUNMRV9UUlVDSyA9IDE3MDQzNDU2LFxuIFxuICAgIC8vIFNtYWxsIFRydWNrIDE3MDQzNDU3IFxuICAgIElOTk9WSV9WRUhJQ0xFX1RSVUNLX1NNQUxMID0gMTcwNDM0NTcsXG4gXG4gICAgLy8gTWVkaXVtIFRydWNrIDE3MDQzNDU4IFxuICAgIElOTk9WSV9WRUhJQ0xFX1RSVUNLX01FRElVTSA9IDE3MDQzNDU4LFxuIFxuICAgIC8vIEJpZyBUcnVjayAoc2VtaS10cmFpbGVyKSAxNzA0MzQ2MCBcbiAgICBJTk5PVklfVkVISUNMRV9UUlVDS19TRU1JVFJBSUxFUiA9IDE3MDQzNDYwLFxuIFxuICAgIC8vIFRyYWN0b3IgMTcwNDM0NjQgXG4gICAgSU5OT1ZJX1ZFSElDTEVfVFJBQ1RPUiA9IDE3MDQzNDY0LFxuIFxuICAgIC8vIFRyYWluIDE3MDQ3NTUyIFxuICAgIElOTk9WSV9WRUhJQ0xFX1RSQUlOID0gMTcwNDc1NTIsXG4gXG4gICAgLy8gQWJzdHJhY3QgZ3JvdXAgb2YgdHdvIHdoZWVsZXJzIDE3MzAxNTA0IFxuICAgIElOTk9WSV9UV09XSEVFTEVEID0gMTczMDE1MDQsXG4gXG4gICAgLy8gQmljeWNsZSAxNzMwMTc2MCBcbiAgICBJTk5PVklfVFdPV0hFRUxFRF9CSUNZQ0xFID0gMTczMDE3NjAsXG4gXG4gICAgLy8gTW90b3JjeWNsZSAxNzMwMjAxNiBcbiAgICBJTk5PVklfVFdPV0hFRUxFRF9NT1RPUkNZQ0xFID0gMTczMDIwMTYsXG4gXG4gICAgLy8gQWJzdHJhY3QgZ3JvdXAgb2YgYW5pbWFscyAxNzgyNTc5MiBcbiAgICBJTk5PVklfQU5JTUFMID0gMTc4MjU3OTIsXG4gXG4gICAgLy8gQmlyZCAxNzgyNjA0OCBcbiAgICBJTk5PVklfQU5JTUFMX0JJUkQgPSAxNzgyNjA0OCxcbiBcbiAgICAvLyBTbWFsbCBhbmltYWwgKGllLiBDYXRzL0RvZ3MpIDE3ODI2MzA0IFxuICAgIElOTk9WSV9BTklNQUxfU01BTEwgPSAxNzgyNjMwNCxcbiBcbiAgICAvLyBMYXJnZSBhbmltYWwgKGllLiBIb3JzZXMvQ293cykgMTc4MjY4MTYgXG4gICAgSU5OT1ZJX0FOSU1BTF9MQVJHRSA9IDE3ODI2ODE2LFxuIFxuICAgIC8vIEZpcmUgMzM2MjAyMjQgXG4gICAgSU5OT1ZJX1NNT0tFQU5ERklSRV9GSVJFID0gMzM2MjAyMjQsXG4gXG4gICAgLy8gU21va2UgMzM2MjA0ODAgXG4gICAgSU5OT1ZJX1NNT0tFQU5ERklSRV9TTU9LRSA9IDMzNjIwNDgwLFxuIFxufSJdfQ==