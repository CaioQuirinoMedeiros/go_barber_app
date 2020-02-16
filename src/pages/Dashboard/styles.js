import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 30, paddingVertical: 10},
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0;
`;

export const Message = styled.Text`
  color: #fff;
  opacity: 0.6;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
