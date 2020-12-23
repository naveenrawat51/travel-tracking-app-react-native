import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

export default (callback, shouldTrack) => {
  const [err, setError] = useState();
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const result = await Permissions.askAsync(Permissions.LOCATION);
      if (result.status !== "granted") {
        Alert.alert(
          "Insufficient permissions",
          "Yoou need to grant location access",
          [{ text: "Okay" }]
        );
        return false;
      }

      await Location.getCurrentPositionAsync();
      const subscribe = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 2000,
          distanceInterval: 10,
        },
        callback
      );
      setSubscriber(subscribe);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
    }
    subscriber ? subscriber.remove() : null;
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  return [err];
};
