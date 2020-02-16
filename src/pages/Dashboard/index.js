import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';

import api from '../../services/api';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import {Container, Title, List, Message} from './styles';

function Dashboard({isFocused}) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadAppointments() {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get('appointments');

      setAppointments(response.data);
    } catch (err) {
      setError(
        'Erro ao buscar agendamentos, clique aqui para tentar novamente',
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    await api.delete(`appointments/${id}`);
    await loadAppointments();
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        {error ? (
          <Message onPress={loadAppointments}>{error}</Message>
        ) : (
          <List
            data={appointments}
            keyExtractor={item => String(item.id)}
            refreshing={loading}
            onRefresh={loadAppointments}
            ListEmptyComponent={<Message>Nenhum agendamento marcado</Message>}
            renderItem={({item}) => (
              <Appointment onCancel={() => handleCancel(item.id)} data={item} />
            )}
          />
        )}
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

export default withNavigationFocus(Dashboard);
