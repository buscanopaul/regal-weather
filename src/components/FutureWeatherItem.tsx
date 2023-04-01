import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';
import { FormatDate } from '../utils/FormatDate';

type Props = {
  date: string;
  temp: string;
  status: string;
  index: number;
};

const FutureWeatherItem = ({ date, temp, status, index }: Props) => {
  return (
    <View className="flex flex-row items-center justify-between border border-gray-300 p-4 mb-3">
      <Text className="font-['Apercu'] text-lg">
        {index === 0 ? 'Tomorrow' : FormatDate(date)}
      </Text>
      <View className="flex flex-row items-center justify-between w-7/12">
        <View className="flex flex-row">
          <Text className="font-['Apercu'] text-lg">{temp}</Text>
          <View className="top-1">
            <MaterialCommunityIcons
              name="circle-outline"
              size={6}
              color="black"
            />
          </View>
        </View>
        <View className="w-28">
          <Text className="font-['Apercu'] text-lg pl-5">{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default FutureWeatherItem;
