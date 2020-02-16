import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {format, parseISO, parse} from 'date-fns';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import Background from '../../../components/Background';
import DateInput from '../../../components/DateInput';

import {Container, HourList, Hour, Title} from './styles';

const formatDate = stringDate => {
  return format(parseISO(stringDate), 'HH:mm');
};

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    const dateNow = date.setHours(0);
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {date: dateNow},
      });

      setHours(response.data);
    }
    loadAvailable();
  }, [date, provider.id]);

  async function handleSelectHour({value}) {
    navigation.navigate('Confirm', {provider, date: value});
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={item => String(item.time)}
          renderItem={({item}) => (
            <Hour
              enabled={item.available}
              onPress={() => handleSelectHour(item)}>
              <Title>{formatDate(item.value)}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({navigation}) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={22} color="#fff" />
    </TouchableOpacity>
  ),
});
