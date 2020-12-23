import * as Location from "expo-location";

const tenMitersWithDegrees = 0.0001;

const getLocation = (incrementData) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.0312186 + incrementData * tenMitersWithDegrees,
      latitude: 37.33233141 + incrementData * tenMitersWithDegrees,
    },
  };
};

let counter = 0;
var myInterval = setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 2000);

setTimeout(() => clearInterval(myInterval), 30000);
