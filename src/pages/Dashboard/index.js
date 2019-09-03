import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import {Container, Title, List} from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    loadAppointments();
  }, []);

  async function handleCancel(id) {
    await api.delete(`appointments/${id}`);
    await loadAppointments();
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
