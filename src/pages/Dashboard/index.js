import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {signOut} from '../../store/modules/auth/actions';

import Background from '../../components/Background';

// import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  function logout() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
