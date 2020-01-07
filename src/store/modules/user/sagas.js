import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {updateProfileSuccess, updateProfileFailure} from './actions';

import api from '../../../services/api';

export function* updateProfile({payload}) {
  const {name, email, ...rest} = payload.data;

  const profile = Object.assign({name, email}, rest.password ? rest : {});
  console.log(profile);

  try {
    const {data} = yield call(api.put, '/users', profile);

    yield put(updateProfileSuccess(data));

    Alert.alert('Perfil atualizado com sucesso');
  } catch (err) {
    yield put(updateProfileFailure());

    Alert.alert('Falha ao atualizar perfil', 'Confira seus dados');
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
