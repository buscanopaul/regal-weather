import React from 'react';
import { Text, View } from 'react-native';
import FutureWeatherItem from './FutureWeatherItem';
import Title from './Title';

type Props = {
  forecast: object;
};

const FutureWeather = ({ forecast }: Props) => {
  return (
    <View className="px-4">
      <View className="flex flex-row items-center justify-between mb-1">
        <Title>Prediction</Title>
        <Text className="font-['Apercu-Bold'] text-2xl text-gray-300">
          Weekly
        </Text>
      </View>
      {forecast?.map((predict, index) => (
        <FutureWeatherItem
          index={index}
          key={predict.EpochDate}
          date={predict.Date}
          temp={predict.Temperature.Maximum.Value}
          status={predict.Day.IconPhrase}
        />
      ))}
    </View>
  );
};

export default FutureWeather;
