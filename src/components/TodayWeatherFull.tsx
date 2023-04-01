import React from 'react';
import { View } from 'react-native';
import Title from './Title';
import TodayWeatherFullItem from './TodayWeatherFullItem';

type Props = {
  forecast: object;
};

const TodayWeatherFull = ({ forecast }: Props) => {
  return (
    <View className="px-4">
      <Title>Weather now</Title>
      <View className="flex flex-row flex-wrap items-center justify-between">
        <TodayWeatherFullItem
          icon="temperature-celsius"
          label="Feel like"
          value={forecast?.Temperature.Maximum.Value}
        />
        <TodayWeatherFullItem
          icon="weather-windy"
          label="Wind"
          value={`${forecast?.Day.Wind.Speed.Value} km/h`}
        />
        <TodayWeatherFullItem
          icon="umbrella-outline"
          label="Precipitation"
          value={`${forecast?.Day.PrecipitationProbability}%`}
        />
        <TodayWeatherFullItem
          icon="water-outline"
          label="humidity"
          value={`${forecast?.Day.ThunderstormProbability}%`}
        />
        <TodayWeatherFullItem
          icon="weather-lightning-rainy"
          label="Chance of rain"
          value={`${forecast?.Day.RainProbability}%`}
        />
        <TodayWeatherFullItem
          icon="weather-sunny"
          label="UV index"
          value="6/10"
        />
      </View>
    </View>
  );
};

export default TodayWeatherFull;
