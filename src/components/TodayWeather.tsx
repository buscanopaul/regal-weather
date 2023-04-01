import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ClearCloudy from '../assets/svg/ClearCloudy';
import DrizzleSunny from '../assets/svg/DrizzleSunny';
import Fog from '../assets/svg/Fog';
import Snow from '../assets/svg/Snow';
import Sunny from '../assets/svg/Sunny';
import ThunderStorms from '../assets/svg/ThunderStorms';
import ThunderStormsSunny from '../assets/svg/ThunderStormsSunny';
import { FormatDate } from '../utils/FormatDate';

type Props = {
  location: object;
  forecast: object;
};

const TodayWeather = ({ location, forecast }: Props) => {
  const weatherPhrase = forecast?.Day.IconPhrase.replace(/\s+/g, '');

  return (
    <SafeAreaView className="bg-blue-600 justify-between">
      <View className="flex flex-row items-center justify-between px-4">
        <View>
          <Text className="font-['Apercu-Bold'] text-2xl text-white mb-1">
            {location?.ParentCity.EnglishName}
          </Text>
          <Text className="font-['Apercu'] text-lg text-gray-200">
            Today, {forecast && FormatDate(forecast?.Date)} as of 8:00 AM
          </Text>
        </View>
        <Ionicons
          name="ellipsis-horizontal-circle-sharp"
          size={40}
          color="white"
        />
      </View>
      {weatherPhrase === 'Intermittentclouds' ||
      weatherPhrase === 'Clear' ||
      weatherPhrase === 'Mostlyclear' ||
      weatherPhrase === 'Partycloudy' ||
      weatherPhrase === 'Cloudy' ? (
        <ClearCloudy className="self-center my-10" />
      ) : weatherPhrase === 'Partlysunnyw/t-storms' ? (
        <ThunderStormsSunny className="self-center my-10" />
      ) : weatherPhrase === 'Partlysunnyw/showers' ||
        weatherPhrase === 'Partlycloudyw/showers' ||
        weatherPhrase === 'Showers' ||
        weatherPhrase === 'Dreary' ||
        weatherPhrase === 'Rain' ? (
        <DrizzleSunny className="self-center my-10" />
      ) : weatherPhrase === 'Thunderstorms' ? (
        <ThunderStorms className="self-center my-10" />
      ) : weatherPhrase === 'Sunny' ||
        weatherPhrase === 'Mostlysunny' ||
        weatherPhrase === 'Partysunny' ? (
        <Sunny className="self-center my-10" />
      ) : weatherPhrase === 'Rainandsnow' || weatherPhrase === 'Snow' ? (
        <Snow className="self-center my-10" />
      ) : weatherPhrase === 'Hazysunshine' ? (
        <Fog className="self-center my-10" />
      ) : null}

      <View className="px-4">
        <View className="flex flex-row">
          <Text className="font-['Apercu-Bold'] text-8xl text-white">
            {forecast?.Temperature.Maximum.Value}
          </Text>
          <MaterialCommunityIcons
            name="record-circle"
            size={24}
            color="white"
          />
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="font-['Apercu'] text-lg text-white -top-3">
            {forecast?.Day.IconPhrase}
          </Text>
          <Text className="font-['Apercu'] text-white text-lg -top-3">
            {location?.Country.EnglishName}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TodayWeather;
