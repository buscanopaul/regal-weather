import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import FutureWeather from '../components/FutureWeather';
import TodayWeather from '../components/TodayWeather';
import TodayWeatherFull from '../components/TodayWeatherFull';
import { weatherApi } from '../redux/api';

type Props = {};

const HomeScreen = (props: Props) => {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  // const latitude = 14.7441273;
  // const longitude = 121.0173673;

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Please grant permission');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const lat = currentLocation.coords.latitude;
      const long = currentLocation.coords.longitude;

      setLat(lat);
      setLong(long);
    };

    getPermissions();
  }, []);

  const { data: location } = weatherApi.useGetLocationByGeoPositionQuery({
    latitude: lat,
    longitude: long,
  });

  const { data: forecast } = weatherApi.useGetDailyForecastsQuery({
    locationId: location?.Key,
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TodayWeather
        location={location}
        forecast={forecast?.DailyForecasts[0]}
      />
      <TodayWeatherFull forecast={forecast?.DailyForecasts[0]} />
      <View className="border-b border-gray-300 pt-5" />
      <FutureWeather
        forecast={forecast?.DailyForecasts.slice(
          1,
          forecast?.DailyForecasts.length
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
