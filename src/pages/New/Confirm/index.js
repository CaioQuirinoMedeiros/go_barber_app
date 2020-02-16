import React, {useMemo, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import Background from '../../../components/Background';

import {
  Container,
  Avatar,
  Name,
  Time,
  SubmitButton,
  ErrorMessage,
} from './styles';

export default function Confirm({navigation}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const provider = navigation.getParam('provider');
  const date = navigation.getParam('date');

  const dateFormatted = useMemo(
    () => format(parseISO(date), 'Pp', {locale: pt}),
    [date],
  );

  async function handleAddAppointment() {
    setLoading(true);
    setError(null);

    try {
      await api.post('appointments', {
        provider_id: provider.id,
        date,
      });

      setLoading(false);
      navigation.navigate('Dashboard');
    } catch (err) {
      setError('Erro ao marcar agendamento, tente mais tarde');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/120/${provider.name}`,
          }}
        />

        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={handleAddAppointment} loading={loading}>
          Confirmar Agendamento
        </SubmitButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={22} color="#fff" />
    </TouchableOpacity>
  ),
});
