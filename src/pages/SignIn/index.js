import React, {useRef, useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {signInRequest} from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector(state => state.auth);

  function handleSubmit() {
    console.tron.log(email, password);
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            value={email}
            onChangeText={setEmail}
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            blurOnSubmit={false}
          />

          <FormInput
            value={password}
            onChangeText={setPassword}
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit} loading={loading}>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
