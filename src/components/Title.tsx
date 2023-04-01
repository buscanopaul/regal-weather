import React from 'react';
import { Text } from 'react-native';

type Props = {
  children: string;
};

const Title = ({ children }: Props) => {
  return <Text className="font-['Apercu-Bold'] text-2xl py-8">{children}</Text>;
};

export default Title;
