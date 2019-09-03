import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';

export default function Confirm({navigation}) {
  const provider = navigation.getParam('provider');
  const time = navigation.getParam('time');

  return (
    <View>
      <Text>{provider.name}</Text>
      <Text>{time}</Text>
    </View>
  );
}
