import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
  columnWrapperStyle: {justifyContent: 'space-between'},
})`
  margin-top: 70px;
  padding: 0 5%;
`;

export const Provider = styled(RectButton)`
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 47.22%;

  align-items: center;
  margin: 0 0px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;

export const Message = styled.Text`
  font-weight: bold;
  font-size: 22;
  color: #fff;
  opacity: 0.6;
  text-align: center;
  margin-top: 30;
`;
