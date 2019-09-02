import {all, takeLatest, put, call} from 'redux-saga/effects';
import {Alert} from 'react-native';

import api from '../../../services/api';

import {signInSuccess, signFailure, signUpSuccess} from './actions';

export function* signIn({payload}) {
  const {email, password} = payload;

  try {
    const {data} = yield call(api.post, 'sessions', {email, password});

    const {token, user} = data;

    if (user.provider) {
      Alert.alert('Erro no login', 'Prestador de serviço não é permitido');
      throw new Error();
    }

    yield put(signInSuccess(token, user));

    Alert.alert('Bem-vindo');
  } catch (err) {
    Alert.alert(
      'Falha de autenticação',
      err.response.data.error || 'Falha na autenticação, verifique seus dados',
    );

    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password, passwordConfirmation} = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      passwordConfirmation,
    });

    yield put(signUpSuccess());

    Alert.alert('Cadastro criado com sucesso');
  } catch (err) {
    Alert.alert(
      'Falha no cadastro',
      err.response.data.error || 'Falha no cadastro, verifique seus dados',
    );

    yield put(signFailure());
  }
}

export function signOut() {}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
