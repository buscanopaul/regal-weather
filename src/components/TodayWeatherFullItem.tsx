import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  icon: string;
  value: string;
  label: string;
};

const TodayWeatherFullItem = ({ icon, value, label }: Props) => {
  return (
    <View className="flex flex-row items-center w-1/2 mb-5">
      <View className="bg-gray-100 rounded-full p-2">
        <MaterialCommunityIcons name={icon} size={20} color="black" />
      </View>
      <View className="ml-3">
        <Text className="text-gray-400 font-['Apercu']">{label}</Text>
        <Text className="font-['Apercu-Bold'] text-xl">{value}</Text>
      </View>
    </View>
  );
};

export default TodayWeatherFullItem;
