import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {signOut} from '../../store/modules/auth/actions';

// import { Container } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();

  function logout() {
    dispatch(signOut());
  }

  return (
    <View>
      <Text>Dashboard</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
