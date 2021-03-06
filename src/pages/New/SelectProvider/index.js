import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import Background from '../../../components/Background';

import {
  Container,
  ProvidersList,
  Provider,
  Avatar,
  Name,
  Message,
} from './styles';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function loadProviders() {
    setError(null);
    setLoading(true);

    try {
      const response = await api.get('providers');
      setProviders(response.data);
    } catch (err) {
      setError('Erro ao buscar prestadores, clique aqui para tentar novamente');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProviders();
  }, []);

  function EmptyList() {
    return <Message>Nenhum prestador cadastrado</Message>;
  }

  return (
    <Background>
      <Container>
        {error ? (
          <Message onPress={loadProviders}>{error}</Message>
        ) : (
          <ProvidersList
            data={providers}
            keyExtractor={provider => String(provider.id)}
            ListEmptyComponent={EmptyList}
            refreshing={loading}
            onRefresh={loadProviders}
            renderItem={({item: provider}) => (
              <Provider
                onPress={() =>
                  navigation.navigate('SelectDateTime', {provider})
                }>
                <Avatar
                  source={{
                    uri: provider.avatar
                      ? provider.avatar.url
                      : `https://api.adorable.io/avatar/50/${provider.name}`,
                  }}
                />
                <Name>{provider.name}</Name>
              </Provider>
            )}
          />
        )}
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({navigation}) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={22} color="#fff" />
    </TouchableOpacity>
  ),
});
