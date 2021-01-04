/*
   Coordinate of WGS-84 grid system
   See (https://en.wikipedia.org/wiki/World_Geodetic_System)
*/
export class Coordinate {
    constructor(latitude, longitude, altitude) {
        this.lat = latitude;
        this.lon = longitude;
        this.alt = altitude;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29vcmRpbmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9uZy1jb3JlLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tbW9uL0Nvb3JkaW5hdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OztFQUdFO0FBQ0YsTUFBTSxPQUFPLFVBQVU7SUFXbkIsWUFBWSxRQUFpQixFQUFFLFNBQWtCLEVBQUUsUUFBaUI7UUFDaEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7SUFDeEIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBcbiAgIENvb3JkaW5hdGUgb2YgV0dTLTg0IGdyaWQgc3lzdGVtXG4gICBTZWUgKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dvcmxkX0dlb2RldGljX1N5c3RlbSkgXG4qL1xuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGUge1xuIFxuICAgIC8vIExhdGl0dWRlIFxuICAgIHB1YmxpYyBsYXQ6IG51bWJlcjtcbiBcbiAgICAvLyBMb25naXR1ZGUgXG4gICAgcHVibGljIGxvbjogbnVtYmVyO1xuIFxuICAgIC8vIEFsdGl0dWRlIFxuICAgIHB1YmxpYyBhbHQ6IG51bWJlcjtcbiBcbiAgICBjb25zdHJ1Y3RvcihsYXRpdHVkZT86IG51bWJlciwgbG9uZ2l0dWRlPzogbnVtYmVyLCBhbHRpdHVkZT86IG51bWJlcikgeyBcbiAgICAgICAgdGhpcy5sYXQgPSBsYXRpdHVkZTtcbiAgICAgICAgdGhpcy5sb24gPSBsb25naXR1ZGU7XG4gICAgICAgIHRoaXMuYWx0ID0gYWx0aXR1ZGU7XG4gICAgfVxuXG59XG5cblxuIl19